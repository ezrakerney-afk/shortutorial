/* Shared site search: used by the homepage box and the /search/ results page.
   1. Instant, on-device: ignores filler words, matches word forms ("printing" ~ "printer"),
      forgives typos ("wifii", "pasword") and knows common synonyms ("laptop" ~ "computer").
   2. Then the server's AI search ranks by meaning ("bugs in my kitchen" -> fruit flies). */
(function(){
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const STOP = new Set('a an the and or but to of for in on at by with from up my me i im i\'m you your it its is are was be been do does did doing can cant can\'t could how what why when where which who whats there this that these those not no wont won\'t dont don\'t doesnt doesn\'t isnt isn\'t keep keeps keeping get getting got make way ways best good easy easily help need want should will just really very some any all into about out after before without vs work works working worked stop stopped stopping fix fixed fixing problem problems issue issues anymore suddenly keep thing stuff'.split(' '));
const SYN = [
 'computer pc laptop desktop windows mac macbook notebook',
 'phone iphone android cell mobile smartphone pixel samsung',
 'wifi internet network router online connection wireless connected',
 'slow lag laggy sluggish speed faster freeze frozen hang',
 'bug pest fly insect gnat',
 'money budget cash saving spending finance expense',
 'password login signin sign account locked',
 'print printer printing',
 'battery charge charging power',
 'screen display monitor',
 'sound audio speaker volume hear mic microphone',
 'math algebra equation number arithmetic',
 'code coding program programming developer software',
 'storage space disk full memory',
 'backup restore copy',
 'scam phishing fraud hack hacked virus malware security safe',
 'toilet plumbing drain clog sink pipe',
 'tv television stream streaming watch',
 'football nfl sport',
 'weather storm tornado hurricane flood',
 'vote election ballot voter',
 'clock daylight dst',
 'tie necktie knot',
 'keyboard typing type key',
 'voicemail greeting',
 'wall drywall hole patch',
 'credit debt loan interest',
 'email mail gmail outlook inbox'
].map(g => g.split(' '));
const norm = s => String(s).toLowerCase().replace(/wi-?fi/g, 'wifi').replace(/[’']/g, "'").replace(/[^a-z0-9' +%-]/g, ' ');
const stem = w => w.replace(/'s$/, '').replace(/(ing|ers|er|ed|es|s)$/, m => w.length - m.length >= 3 ? '' : m);
const tokens = s => norm(s).split(/[\s-]+/).filter(Boolean);
const keyWords = q => tokens(q).filter(w => w.length > 1 && !STOP.has(w));
const SYNMAP = new Map(); SYN.forEach(g => g.forEach(w => SYNMAP.set(stem(w), g.map(stem))));
function lev(a, b, max){
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++){
    const cur = [i]; let low = i;
    for (let j = 1; j <= b.length; j++){
      cur[j] = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + (a[i-1] === b[j-1] ? 0 : 1));
      low = Math.min(low, cur[j]);
    }
    if (low > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}
// Index: every word of each tutorial, weighted by where it appears.
const INDEX = (window.TUTORIALS || []).map(t => {
  const m = new Map();
  const add = (text, w) => tokens(text).forEach(x => { const k = stem(x); if (k.length > 1 && !STOP.has(x)) m.set(k, Math.max(m.get(k) || 0, w)); });
  add(t.summary, 1); add(t.category, 1); add((t.tags || []).join(' '), 2); add(t.title, 3);
  return { t, m };
});
function wordScore(q, m, strict){
  const s = stem(q); let best = 0;
  for (const [k, w] of m){
    let v = 0;
    if (k === s) v = 1;
    else if (s.length >= 3 && k.startsWith(s)) v = 0.8;            // still typing
    else if (strict) v = 0;
    else if (s.length >= 5 && lev(s, k, s.length >= 7 ? 2 : 1) <= (s.length >= 7 ? 2 : 1)) v = 0.7; // typo
    else if (SYNMAP.has(s) && SYNMAP.get(s).includes(k)) v = 0.5;   // synonym
    if (v * w > best) best = v * w;
  }
  return best;
}
function rank(q, pool, sem){
  const ws = keyWords(q);
  if (!q.trim() || !ws.length) return pool.map(t => ({ t, score: 0 }));
  const ids = new Set(pool.map(t => t.slug));
  const out = [];
  for (const { t, m } of INDEX){
    if (!ids.has(t.slug)) continue;
    const parts = ws.map(w => wordScore(w, m, sem && sem.none && ws.length > 1));
    const hits = parts.filter(v => v > 0).length;
    let kw = hits ? parts.reduce((a, b) => a + b, 0) / (3 * ws.length) + hits / ws.length : 0;
    const sm = sem ? (sem.get(t.slug) || 0) : 0;
    if (kw > 0 && hits < Math.ceil(ws.length / 2) && sm === 0 && sem) kw *= 0.5; // weak word match, AI disagrees
    const score = kw + 1.6 * sm;
    if (score > 0.25) out.push({ t, score });
  }
  out.sort((a, b) => b.score - a.score);
  const best = out.length ? out[0].score : 0;
  return out.filter(r => r.score >= best * 0.35);
}
// Turn the server's AI scores into 0–1 relevance. "score" is the reranker (how well the tutorial
// answers the search); "sim" is meaning similarity. If the reranker finds nothing relevant, trust the words alone.
function aiScores(list){
  const map = new Map();
  const rTop = Math.max(0, ...list.map(r => r.score || 0));
  const sTop = Math.max(0, ...list.map(r => r.sim || 0));
  if (rTop >= 0.01){                       // reranker found something: blend both signals
    for (const r of list){
      const ss = Math.min(1, Math.max(0, ((r.sim || 0) - (sTop - 0.08)) / 0.08));
      const v = 0.65 * (r.score || 0) / rTop + 0.35 * ss;
      if (v >= 0.3) map.set(r.slug, v);
    }
  } else if (sTop >= 0.58){                // reranker unsure, but meaning is close: keep the nearest few
    for (const r of list){
      const v = ((r.sim || 0) - (sTop - 0.04)) / 0.04;
      if (v >= 0.3) map.set(r.slug, Math.min(1, v));
    }
  } else map.none = true;                  // nothing on the site is about this
  return map;
}
const SEARCH_V = 3;
const AI_CACHE = new Map();
// Ask the server's AI search. Resolves to a Map of slug -> 0..1 relevance (or null if unavailable).
function fetchAI(q, signal){
  const key = q.trim().toLowerCase();
  if (key.length < 3) return Promise.resolve(null);
  if (AI_CACHE.has(key)) return Promise.resolve(AI_CACHE.get(key));
  return fetch('/api/search?q=' + encodeURIComponent(key) + '&v=' + SEARCH_V, { signal })
    .then(r => r.ok ? r.json() : null)
    .then(d => { if (!d || !d.results) return null; const m = aiScores(d.results); AI_CACHE.set(key, m); return m; })
    .catch(() => null);
}
function highlight(text, q){
  let out = esc(text);
  keyWords(q).filter(w => w.length > 2).forEach(w => {
    const re = new RegExp('\\b(' + stem(w).replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\w*)', 'ig');
    out = out.replace(/(<[^>]*>)|([^<]+)/g, (m, tag, txt) => tag || txt.replace(re, '<mark>$1</mark>'));
  });
  return out;
}


// Learning paths that fit a search: a path scores from its own words plus how many of its lessons matched.
function rankPaths(q, lessonResults){
  const paths = window.PATHS || [];
  if (!q.trim()) return [];
  const ws = keyWords(q);
  const lessonScore = new Map(lessonResults.map(r => [r.t.slug, r.score]));
  const top = (lessonResults.length && lessonResults[0].score) || 1;
  return paths.map(p => {
    const m = new Map();
    tokens(p.title + ' ' + p.blurb + ' ' + p.units.map(u => u.title).join(' ')).forEach(x => { const k = stem(x); if (k.length > 1 && !STOP.has(x)) m.set(k, 3); });
    const own = ws.length ? ws.map(w => wordScore(w, m, false)).reduce((a, b) => a + b, 0) / (3 * ws.length) : 0;
    const hits = p.steps.filter(s => lessonScore.has(s));
    const fromLessons = hits.reduce((a, s) => a + lessonScore.get(s) / top, 0);
    return { p, hits, score: own * 2 + fromLessons };
  }).filter(r => r.score >= 0.6).sort((a, b) => b.score - a.score);
}
window.SiteSearch = { rank, rankPaths, fetchAI, highlight, keyWords, esc };
})();
