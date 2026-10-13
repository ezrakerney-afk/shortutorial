/*
  Learning paths: ordered tracks of tutorials.
  To add a path, add an entry below. Slugs that don't exist yet in tutorials.js are skipped,
  so a path can list a tutorial before it's published.
  On a tutorial page this script also shows a "Part of a learning path" banner and remembers the visit.
*/
window.PATHS = [
  { id: "money", title: "Money basics", icon: "💵",
    blurb: "Budget, borrow wisely, understand taxes and start investing.",
    steps: ["budget-50-30-20", "track-expenses-automatically", "credit-scores", "how-loans-work", "compound-interest", "investing-basics", "tax-brackets-explained", "retirement-accounts"] },
  { id: "code", title: "Learn to code", icon: "💻",
    blurb: "From how computers count to building and publishing your own site.",
    steps: ["binary-numbers", "how-the-internet-works", "html-basics", "make-a-website", "javascript-basics", "python-first-steps", "git-basics", "sql-basics"] },
  { id: "ai", title: "AI essentials", icon: "🤖",
    blurb: "Understand AI chatbots, use them well and judge what they tell you.",
    steps: ["how-ai-works", "ai-prompting-basics", "critical-thinking", "read-charts-and-graphs"] },
  { id: "safety", title: "Stay safe online", icon: "🔒",
    blurb: "Spot scams, lock down your accounts and browse privately.",
    steps: ["spot-scam-messages", "strong-passwords", "two-factor-authentication", "stop-browser-popups", "block-spam-calls", "how-vpns-work", "clear-cache"] },
  { id: "job", title: "Get job ready", icon: "💼",
    blurb: "The everyday work skills employers look for, start to finish.",
    steps: ["touch-typing", "write-professional-email", "spreadsheet-formulas", "excel-pivot-tables", "project-management-basics", "public-speaking", "write-cover-letter", "negotiate-salary"] },
  { id: "math", title: "Math refresher", icon: "➗",
    blurb: "Rebuild your math from negative numbers to probability.",
    steps: ["negative-numbers", "fractions", "percentages", "ratios-and-proportions", "order-of-operations", "exponents-scientific-notation", "solve-for-x", "pythagorean-theorem", "mean-median-mode", "probability-basics", "logic-and-sets"] },
  { id: "pc", title: "Computer fix-it kit", icon: "🛠️",
    blurb: "The fixes every computer owner needs sooner or later.",
    steps: ["no-internet", "slow-computer", "free-up-disk-space", "printer-offline", "no-sound", "bluetooth-headphones", "take-screenshot", "back-up-computer"] },
  { id: "home", title: "Home repair basics", icon: "🏠",
    blurb: "Small repairs you can do yourself instead of calling someone.",
    steps: ["fix-running-toilet", "unclog-drain", "outlet-not-working", "fix-stripped-screw-hole", "repair-drywall", "paint-a-room", "change-furnace-filter"] },
  { id: "car", title: "Car basics", icon: "🚗",
    blurb: "Handle the common roadside problems with confidence.",
    steps: ["check-tire-pressure", "change-a-tire", "jump-start-car"] },
  { id: "kitchen", title: "Kitchen basics", icon: "🍳",
    blurb: "Cook the staples well and keep the kitchen clean.",
    steps: ["cook-rice", "cook-chicken", "french-press-coffee", "clean-microwave", "get-rid-of-fruit-flies"] },
  { id: "mind", title: "Big ideas", icon: "🧠",
    blurb: "Philosophy, clear thinking and how society works.",
    steps: ["philosophy-basics", "stoicism-basics", "critical-thinking", "how-the-economy-works", "us-government-basics"] },
  { id: "creative", title: "Creative skills", icon: "🎨",
    blurb: "Draw, take better photos, edit video and make music.",
    steps: ["drawing-basics", "photography-basics", "video-editing-basics", "play-piano-basics", "read-sheet-music"] }
];

(function(){
  const all = window.TUTORIALS || [];
  const known = new Set(all.map(t => t.slug));
  window.PATHS.forEach(p => p.steps = p.steps.filter(s => known.has(s)));
  window.PATHS = window.PATHS.filter(p => p.steps.length >= 3);

  const KEY = 'st-visited';
  window.pathVisited = function(){
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch(e){ return new Set(); }
  };

  const slug = document.body && document.body.dataset.slug;
  if (!slug || !known.has(slug)) return;
  const seen = window.pathVisited(); seen.add(slug);
  try { localStorage.setItem(KEY, JSON.stringify([...seen])); } catch(e){}

  const path = window.PATHS.find(p => p.steps.includes(slug));
  const intro = document.querySelector('header.intro');
  if (!path || !intro) return;
  const i = path.steps.indexOf(slug), next = path.steps[i + 1];
  const nt = next && all.find(t => t.slug === next);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const css = document.createElement('style');
  css.textContent = `.pathbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:14px;padding:10px 14px;border:1px solid var(--line);border-radius:12px;background:var(--surface);font-family:var(--mono);font-size:.8rem;color:var(--muted)}
.pathbar a{color:var(--accent);font-weight:600;text-decoration:none}.pathbar a:hover{text-decoration:underline}
.pathbar .pb-dots{display:flex;gap:4px}.pathbar .pb-dots i{width:8px;height:8px;border-radius:50%;background:var(--line)}
.pathbar .pb-dots i.on{background:var(--accent)}.pathbar .pb-dots i.now{background:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.pathbar .pb-next{margin-left:auto}`;
  document.head.appendChild(css);
  const dots = path.steps.map((s, k) => `<i class="${k === i ? 'now' : seen.has(s) ? 'on' : ''}"></i>`).join('');
  intro.insertAdjacentHTML('beforeend', `<div class="pathbar"><span>${path.icon} <a href="../paths/#${path.id}">${esc(path.title)}</a> · step ${i + 1} of ${path.steps.length}</span><span class="pb-dots" aria-hidden="true">${dots}</span>${nt ? `<a class="pb-next" href="../${esc(nt.slug)}/">Next: ${esc(nt.title)} →</a>` : `<a class="pb-next" href="../paths/">Path complete · more paths →</a>`}</div>`);
})();
