/* 5-star ratings: summary under the title, and a "Rate this tutorial" box before the quiz. */
(function(){
  const slug = document.body.dataset.slug;
  if (!slug) return;
  const cert = document.getElementById('cert');
  const badges = document.querySelector('header.intro .badges, header .facts');
  let state = { avg: null, count: 0, mine: null };

  function deviceId(){
    let id = null;
    try { id = localStorage.getItem('st-voter'); } catch(e){}
    if (!id || !/^[a-f0-9]{32}$/.test(id)){
      id = [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, '0')).join('');
      try { localStorage.setItem('st-voter', id); } catch(e){}
    }
    return id;
  }
  const voter = deviceId();

  /* Read counter: a visit counts as a read after 10 seconds on the page while it's visible,
     or 4 seconds plus scrolling a third of the way down. The server counts each device once a day. */
  const READS_MIN = 10;   // hide the count until a tutorial has at least this many reads
  const fmtReads = n => n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : n >= 1e4 ? Math.round(n / 1e3) + 'k' : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'k' : String(n);
  (function trackRead(){
    let seen = 0, last = Date.now(), done = false, scrolled = false;
    const tick = () => {
      const t = Date.now();
      if (document.visibilityState === 'visible') seen += t - last;
      last = t;
      if (!done && (seen >= 10000 || (scrolled && seen >= 4000))) send();
    };
    const send = () => {
      done = true; clearInterval(timer);
      fetch('/api/read/' + slug, { method: 'POST', credentials: 'same-origin', keepalive: true,
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ voter }) })
        .then(r => r.json()).then(j => { if (j.counted){ state.reads = (state.reads || 0) + 1; paintSummary(); } }).catch(() => {});
    };
    const timer = setInterval(tick, 1000);
    document.addEventListener('visibilitychange', () => { last = Date.now(); });
    addEventListener('scroll', () => {
      const h = document.documentElement;
      if (h.scrollTop + innerHeight >= h.scrollHeight / 3 + innerHeight * 0.5) scrolled = true;
    }, { passive: true });
  })();

  const starPath = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z';
  function stars(value, size){
    let out = '';
    for (let i = 1; i <= 5; i++){
      const fill = Math.max(0, Math.min(1, value - (i - 1)));
      const id = 'g' + Math.random().toString(36).slice(2, 8);
      out += `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="${id}"><stop offset="${fill * 100}%" stop-color="var(--amber)"/><stop offset="${fill * 100}%" stop-color="var(--line)"/></linearGradient></defs><path d="${starPath}" fill="url(#${id})"/></svg>`;
    }
    return out;
  }

  /* Summary next to the badges */
  let sum = null;
  if (badges){
    sum = document.createElement('a');
    sum.className = 'rating-sum'; sum.href = '#rate';
    badges.insertAdjacentElement('afterend', sum);
  }
  function paintSummary(){
    if (!sum) return;
    const reads = (state.reads || 0) >= READS_MIN ? `<span class="rs-reads"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>${fmtReads(state.reads)} read${state.reads === 1 ? '' : 's'}</span>` : '';
    sum.innerHTML = state.count
      ? `<span class="rs-stars">${stars(state.avg, 16)}</span><b>${state.avg.toFixed(1)}</b><span>${state.count} rating${state.count === 1 ? '' : 's'}</span>${reads}`
      : `<span class="rs-stars">${stars(0, 16)}</span><span>No ratings yet · be the first</span>${reads}`;
    sum.setAttribute('aria-label', state.count ? `Rated ${state.avg} out of 5 from ${state.count} ratings` : 'No ratings yet');
  }

  /* Rating box */
  const box = document.createElement('section');
  box.className = 'block'; box.id = 'rate';
  if (cert) cert.insertAdjacentElement('beforebegin', box);
  else (document.querySelector('main') || document.body).appendChild(box);

  const labels = ['', 'Not helpful', 'A little helpful', 'Helpful', 'Very helpful', 'Exactly what I needed'];
  function paintBox(msg){
    const m = state.mine || 0;
    box.innerHTML = `<div class="rate-card">
      <div><span class="eyebrow">Rate this tutorial</span><h3>${m ? 'Thanks for rating!' : 'Did this help you?'}</h3>
        <p class="rate-sub">${m ? 'You can change your rating any time.' : 'Your rating helps other people find the best tutorials.'}</p></div>
      <div class="rate-right">
        <div class="rate-stars" role="radiogroup" aria-label="Your rating">${[1,2,3,4,5].map(i =>
          `<button role="radio" aria-checked="${i === m}" data-s="${i}" class="${i <= m ? 'on' : ''}" title="${labels[i]}" aria-label="${i} star${i > 1 ? 's' : ''}: ${labels[i]}"><svg viewBox="0 0 24 24"><path d="${starPath}"/></svg></button>`).join('')}</div>
        <span class="rate-label" aria-live="polite">${msg || (m ? labels[m] : 'Tap a star')}</span>
      </div></div>`;
    const btns = [...box.querySelectorAll('.rate-stars button')];
    const label = box.querySelector('.rate-label');
    btns.forEach(b => {
      const s = +b.dataset.s;
      b.addEventListener('mouseenter', () => { btns.forEach(x => x.classList.toggle('hover', +x.dataset.s <= s)); label.textContent = labels[s]; });
      b.addEventListener('mouseleave', () => { btns.forEach(x => x.classList.remove('hover')); label.textContent = m ? labels[m] : 'Tap a star'; });
      b.addEventListener('click', () => send(s));
    });
  }

  async function send(s){
    const prev = state.mine;
    state.mine = s; paintBox('Saving…');
    try {
      const r = await fetch('/api/rating/' + slug, { method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ stars: s, voter }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      state = j; paintSummary(); paintBox();
    } catch(e){ state.mine = prev; paintBox(e.message || 'Couldn’t save. Try again.'); }
  }

  async function load(){
    try {
      const r = await fetch(`/api/rating/${slug}?v=${voter}`, { credentials: 'same-origin' });
      if (r.ok) state = await r.json();
    } catch(e){}
    paintSummary(); paintBox();
  }
  paintSummary(); paintBox();
  load();
  document.addEventListener('st:auth', load);
})();
