/* Comments under every tutorial. Anyone can read them; posting needs an account, so each comment shows its username. */
(function(){
  const slug = document.body.dataset.slug;
  const cert = document.getElementById('cert');
  if (!slug || !cert) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const MAX = 1000;

  const css = document.createElement('style');
  css.textContent = `.cmts .cform{display:flex;flex-direction:column;gap:10px}
.cmts textarea{width:100%;min-height:92px;resize:vertical;font:inherit;font-size:1rem;color:var(--ink);background:var(--surface);border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;outline:none;box-sizing:border-box}
.cmts textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px var(--accent-soft)}
.cmts .crow{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;font-family:var(--mono);font-size:.78rem;color:var(--muted)}
.cmts .cerr{color:#d9534f;font-family:var(--mono);font-size:.8rem;min-height:1em}
.cmts .cgate{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 14px;padding:14px 16px;border:1px dashed var(--line);border-radius:12px;background:var(--surface);color:var(--muted)}
.cmts ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.cmts li{display:grid;grid-template-columns:36px 1fr;gap:4px 12px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--surface)}
.cmts .av{grid-row:span 2;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-family:var(--display);font-weight:700;color:#fff;background:hsl(var(--h) 55% 45%)}
.cmts .who{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;min-width:0}
.cmts .who b{font-family:var(--display);font-size:1rem;overflow-wrap:anywhere}
.cmts .who small{font-family:var(--mono);font-size:.74rem;color:var(--muted)}
.cmts .who .you{color:var(--accent)}
.cmts .del{all:unset;cursor:pointer;margin-left:auto;font-family:var(--mono);font-size:.74rem;color:var(--muted)}
.cmts .del:hover,.cmts .del:focus-visible{color:var(--accent);text-decoration:underline}
.cmts .txt{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.55}
.cmts .none{color:var(--muted);text-align:center;padding:18px 0}`;
  document.head.appendChild(css);

  const sec = document.createElement('section');
  sec.className = 'block cmts'; sec.id = 'comments';
  sec.innerHTML = `<h2 class="sec"><span class="n">TALK</span>Comments <small id="cCount" style="font-family:var(--mono);font-size:.8rem;color:var(--muted);font-weight:400"></small></h2>
    <div id="cBox"></div><ol id="cList" aria-live="polite"></ol>`;
  cert.insertAdjacentElement('afterend', sec);
  const box = sec.querySelector('#cBox'), list = sec.querySelector('#cList');
  let comments = [], loaded = false;

  const hue = name => [...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  function ago(ts){
    const s = Math.max(0, Date.now() / 1000 - ts);
    if (s < 60) return 'just now';
    const units = [[31536000, 'year'], [2592000, 'month'], [604800, 'week'], [86400, 'day'], [3600, 'hour'], [60, 'minute']];
    for (const [n, u] of units) if (s >= n){ const k = Math.floor(s / n); return `${k} ${u}${k === 1 ? '' : 's'} ago`; }
  }
  async function api(path, data){
    const opt = data === undefined ? { credentials: 'same-origin' }
      : { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
    const r = await fetch('/api/comments/' + slug + path, opt);
    let j = {}; try { j = await r.json(); } catch(e){}
    if (!r.ok) throw new Error(j.error || 'Something went wrong. Please try again.');
    return j;
  }

  function paintForm(){
    const u = window.ST && window.ST.user;
    if (!u){
      box.innerHTML = `<div class="cgate"><span>Log in or create a free account to join the conversation.</span><button class="btn small" type="button" id="cLogin">Log in to comment</button></div>`;
      box.querySelector('#cLogin').addEventListener('click', () => window.ST && window.ST.openAuth(() => setTimeout(() => { const t = box.querySelector('textarea'); if (t) t.focus(); }, 50)));
      return;
    }
    box.innerHTML = `<form class="cform" novalidate>
      <label style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)" for="cText">Your comment</label>
      <textarea id="cText" maxlength="${MAX}" placeholder="Share a tip, ask a question, or say what worked for you…"></textarea>
      <div class="cerr" role="alert"></div>
      <div class="crow"><span>Commenting as <b style="color:var(--ink)">${esc(u.username)}</b> · <span id="cLeft">${MAX}</span> left</span><button class="btn small" type="submit">Post comment</button></div>
    </form>`;
    const f = box.querySelector('form'), t = f.querySelector('textarea'), err = f.querySelector('.cerr'), btn = f.querySelector('button');
    t.addEventListener('input', () => { box.querySelector('#cLeft').textContent = MAX - t.value.length; });
    f.addEventListener('submit', async e => {
      e.preventDefault(); err.textContent = '';
      if (!t.value.trim()){ err.textContent = 'Write something first.'; return; }
      btn.disabled = true; btn.style.opacity = .6;
      try {
        const j = await api('', { text: t.value });
        comments.unshift(j.comment); t.value = ''; box.querySelector('#cLeft').textContent = MAX; paintList();
      } catch(ex){
        err.textContent = ex.message;
        if (/log in/i.test(ex.message) && window.ST) window.ST.refresh();
      }
      btn.disabled = false; btn.style.opacity = '';
    });
  }

  function paintList(){
    sec.querySelector('#cCount').textContent = comments.length ? `(${comments.length})` : '';
    if (!loaded){ list.innerHTML = '<li class="none" style="display:block;border:0;background:none">Loading comments…</li>'; return; }
    if (!comments.length){ list.innerHTML = '<li class="none" style="display:block;border:0;background:none">No comments yet. Be the first!</li>'; return; }
    list.innerHTML = comments.map(c => `<li>
      <span class="av" style="--h:${hue(c.username)}" aria-hidden="true">${esc(c.username[0].toUpperCase())}</span>
      <div class="who"><b>${esc(c.username)}</b>${c.mine ? '<small class="you">you</small>' : ''}<small><time datetime="${new Date(c.ts * 1000).toISOString()}" title="${esc(new Date(c.ts * 1000).toLocaleString())}">${ago(c.ts)}</time></small>${c.mine ? `<button class="del" data-id="${c.id}">Delete</button>` : ''}</div>
      <div class="txt">${esc(c.body)}</div></li>`).join('');
  }

  list.addEventListener('click', async e => {
    const b = e.target.closest('.del'); if (!b) return;
    if (!confirm('Delete this comment?')) return;
    try { await api('/delete', { id: Number(b.dataset.id) }); comments = comments.filter(c => c.id !== Number(b.dataset.id)); paintList(); }
    catch(ex){ alert(ex.message); }
  });

  async function load(){
    try { comments = (await api('')).comments || []; } catch(e){ comments = []; }
    loaded = true; paintList();
  }
  document.addEventListener('st:auth', () => { paintForm(); load(); });
  paintForm(); paintList();
  if (window.ST && window.ST.ready) window.ST.ready.then(load); else load();
})();
