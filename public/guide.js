/* Fix-guide behaviour: OS switch, step-by-step troubleshooter, copy buttons, related links. */
(function(){
  const root = document.documentElement;
  const slug = document.body.dataset.slug;

  /* ---------- Windows / Mac switch ---------- */
  function store(k, v){ try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); } catch(e){ v = null; } return v; }
  // Works for any pair of choices: Windows/Mac (win, mac) or iPhone/Android (ios, android).
  const choices = [...document.querySelectorAll('.os-switch button')].map(b => b.dataset.set);
  const phone = choices.includes('ios');
  const key = phone ? 'st-phone' : 'st-os';
  const ua = navigator.platform + ' ' + navigator.userAgent;
  const guess = phone ? (/Android/i.test(ua) ? 'android' : 'ios') : (/Mac|iPhone|iPad/.test(ua) ? 'mac' : 'win');
  function setOS(os){
    if (choices.length && !choices.includes(os)) os = choices[0];
    root.dataset.os = os;
    document.querySelectorAll('.os-switch button').forEach(b => b.setAttribute('aria-pressed', b.dataset.set === os));
    document.querySelectorAll('[data-os]').forEach(el => { if (el !== root) el.classList.toggle('os-off', choices.length > 0 && el.dataset.os !== os); });
    store(key, os);
    resetSteps();
  }
  document.querySelectorAll('.os-switch button').forEach(b => b.addEventListener('click', () => setOS(b.dataset.set)));

  /* ---------- Troubleshooter ---------- */
  const chev = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  const fixes = [...document.querySelectorAll('.fix')];
  const banner = document.querySelector('.solved-banner');
  const stuck = document.querySelector('.stuck');
  const shown = () => fixes.filter(f => getComputedStyle(f).display !== 'none');

  const cfg = (document.querySelector('.steps') || {}).dataset || {};
  fixes.forEach(f => {
    f.querySelector('.fix-top').setAttribute('aria-expanded', 'false');
    f.querySelector('.fix-top').insertAdjacentHTML('beforeend', chev);
    f.querySelector('.fix-body').insertAdjacentHTML('beforeend',
      `<div class="fix-act"><span class="q">${cfg.q || 'Did this fix it?'}</span>
        <button class="btn small ok" data-a="yes">${cfg.yes || 'Yes, fixed'}</button>
        <button class="btn small ghost" data-a="no">${cfg.no || 'No, next step →'}</button></div>`);
    f.querySelector('.fix-top').addEventListener('click', () => toggle(f));
    f.querySelector('[data-a="yes"]').addEventListener('click', () => solved(f));
    f.querySelector('[data-a="no"]').addEventListener('click', () => tried(f));
  });

  function toggle(f, force){
    const open = force ?? !f.classList.contains('open');
    f.classList.toggle('open', open);
    f.querySelector('.fix-top').setAttribute('aria-expanded', open);
  }
  function solved(f){
    f.classList.remove('tried'); f.classList.add('solved'); toggle(f, false);
    shown().forEach(o => { if (o !== f) toggle(o, false); });
    stuck && stuck.classList.remove('on');
    if (banner){ banner.classList.add('on'); banner.scrollIntoView({behavior:'smooth', block:'center'}); }
  }
  function tried(f){
    f.classList.add('tried'); f.classList.remove('solved'); toggle(f, false);
    const list = shown(), nx = list[list.indexOf(f) + 1];
    if (nx){ toggle(nx, true); nx.scrollIntoView({behavior:'smooth', block:'start'}); nx.querySelector('.fix-top').focus({preventScroll:true}); }
    else if (stuck){ stuck.classList.add('on'); stuck.scrollIntoView({behavior:'smooth', block:'center'}); }
  }
  function resetSteps(){
    fixes.forEach(f => { f.classList.remove('tried','solved'); toggle(f, false); });
    banner && banner.classList.remove('on'); stuck && stuck.classList.remove('on');
    const first = shown()[0]; if (first) toggle(first, true);
  }
  const allBtn = document.getElementById('expandAll');
  if (allBtn) allBtn.addEventListener('click', () => {
    const anyClosed = shown().some(f => !f.classList.contains('open'));
    shown().forEach(f => toggle(f, anyClosed));
    allBtn.textContent = anyClosed ? 'Collapse all' : 'Show all steps';
  });
  document.querySelectorAll('[data-restart]').forEach(b => b.addEventListener('click', () => { resetSteps(); document.getElementById('fixes').scrollIntoView({behavior:'smooth'}); }));

  /* ---------- Copy buttons ---------- */
  document.querySelectorAll('.cmd').forEach(box => {
    const b = document.createElement('button');
    b.className = 'copy'; b.type = 'button'; b.textContent = 'Copy';
    b.addEventListener('click', async () => {
      const text = [...box.querySelectorAll('pre')].map(p => p.innerText).join('\n')
        .split('\n').filter(l => !/^\s*(#|REM )/.test(l)).join('\n').trim();
      try { await navigator.clipboard.writeText(text); b.textContent = 'Copied'; b.classList.add('done'); }
      catch(e){ b.textContent = 'Select & copy'; }
      setTimeout(() => { b.textContent = 'Copy'; b.classList.remove('done'); }, 1600);
    });
    box.appendChild(b);
  });

  /* ---------- Reading progress ---------- */
  const bar = document.getElementById('progress');
  if (bar){
    const on = () => { const h = root; bar.style.transform = `scaleX(${Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))})`; };
    addEventListener('scroll', on, {passive:true}); on();
  }

  /* ---------- Related + random ---------- */
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
    const t = pool[Math.floor(Math.random() * pool.length)] || all[0];
    if (t) location.href = '../' + t.slug + '/';
  });
  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

  setOS(store(key) || guess);
})();
