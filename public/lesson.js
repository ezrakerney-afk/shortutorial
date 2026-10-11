/* Lesson pages: reading progress, active lesson in the menu, copy buttons, related and random links. */
(function(){
  const slug = document.body.dataset.slug;
  const bar = document.getElementById('progress');
  const links = [...document.querySelectorAll('nav.toc a')];
  const targets = links.map(a => document.querySelector(a.getAttribute('href')));
  function onScroll(){
    const h = document.documentElement;
    if (bar) bar.style.transform = `scaleX(${Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))})`;
    let cur = -1;
    targets.forEach((t, k) => { if (t && t.getBoundingClientRect().top < 140) cur = k; });
    links.forEach((a, k) => a.classList.toggle('on', k === cur));
  }
  addEventListener('scroll', onScroll, {passive: true}); onScroll();

  document.querySelectorAll('.code').forEach(box => {
    const btn = document.createElement('button');
    btn.className = 'copy'; btn.type = 'button'; btn.textContent = 'Copy';
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(box.querySelector('pre').innerText); btn.textContent = 'Copied'; btn.classList.add('done'); }
      catch(e){ btn.textContent = 'Select & copy'; }
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1600);
    });
    box.appendChild(btn);
  });

  const all = window.TUTORIALS || [];
  const me = all.find(t => t.slug === slug) || {};
  const rel = document.getElementById('related');
  if (rel){
    const pick = all.filter(t => t.slug !== slug && t.category === me.category).slice(0, 4);
    rel.innerHTML = pick.map(t => `<a href="../${t.slug}/">${t.title}<span>~${t.minutes} min</span></a>`).join('');
    if (!pick.length) rel.closest('section').remove();
  }
  const rnd = document.getElementById('randomBtn');
  if (rnd) rnd.addEventListener('click', () => {
    const pool = all.filter(t => t.slug !== slug);
    const t = pool[Math.floor(Math.random() * pool.length)];
    if (t) location.href = '../' + t.slug + '/';
  });
  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();

/* Small helpers for try-it widgets */
window.$ = (s, r) => (r || document).querySelector(s);
window.fmt = (n, d) => {
  if (!isFinite(n)) return '—';
  const p = d === undefined ? 2 : d;
  return Number(n.toFixed(p)).toLocaleString(undefined, {maximumFractionDigits: p});
};
window.live = (root, fn) => { root.querySelectorAll('input,select').forEach(el => el.addEventListener('input', fn)); fn(); };
