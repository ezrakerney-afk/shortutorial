/* Certification quiz at the end of each tutorial. Questions and grading come from the server. */
(function(){
  const box = document.getElementById('cert');
  const slug = document.body.dataset.slug;
  if (!box || !slug) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  let quiz = null, i = 0, picks = [], lastResult = null;

  const has = () => !!(window.ST && ST.user && ST.user.certs.includes(slug));

  function intro(){
    const done = has();
    const n = quiz ? quiz.total : null;
    box.innerHTML = `<div class="cq intro">
      <div class="lead"><span class="medal" aria-hidden="true">★</span>
        <div><span class="eyebrow">Optional · Get certified</span><h2>Test what you learned</h2></div></div>
      <p class="sub">${n ? `${n} quick questions. Get ${quiz.pass} right` : 'A few quick questions. Pass'} to earn a <b>certification point</b> and climb the <a href="/leaderboard/">world leaderboard</a>.</p>
      <div class="foot"><span>${done ? '<span class="done-badge">✓ You’re certified in this one</span>' : '<span class="hint">Takes about a minute</span>'}</span>
        <button class="btn" id="cqStart">${done ? 'Retake for practice' : 'Start the quiz'}</button></div>
    </div>`;
    box.querySelector('#cqStart').addEventListener('click', start);
  }

  async function start(){
    try {
      if (!quiz) quiz = await ST.api('quiz/' + slug);
      i = 0; picks = []; question();
      box.scrollIntoView({behavior:'smooth', block:'start'});
    } catch(e){ fail('The quiz couldn’t load. Check your connection and try again.'); }
  }

  function dots(){
    return '<div class="dots" aria-hidden="true">' + quiz.questions.map((_, k) =>
      `<span class="dot ${k < i ? 'done' : k === i ? 'now' : ''}"></span>`).join('') + '</div>';
  }

  function question(){
    const q = quiz.questions[i];
    box.innerHTML = `<div class="cq">
      <div class="cq-head"><span class="eyebrow">Certification quiz</span>${dots()}<span class="qnum">${i + 1} / ${quiz.total}</span></div>
      <p class="qprompt">${esc(q.q)}</p>
      <div class="opts">${q.o.map((t, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span><span>${esc(t)}</span></button>`).join('')}</div>
      <div class="foot"><span class="hint">Press 1–${q.o.length} or click an answer</span>${i ? '<button class="btn ghost small" id="cqBack">← Back</button>' : ''}</div>
    </div>`;
    box.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => choose(+b.dataset.k)));
    const back = box.querySelector('#cqBack');
    if (back) back.addEventListener('click', () => { i--; picks.pop(); question(); });
  }

  function choose(k){
    const b = box.querySelector(`.opt[data-k="${k}"]`); if (!b) return;
    b.classList.add('sel');
    box.querySelectorAll('.opt').forEach(o => o.disabled = true);
    picks[i] = k;
    setTimeout(() => { i++; i < quiz.total ? question() : submit(); }, 220);
  }

  async function submit(){
    box.innerHTML = `<div class="cq"><span class="eyebrow">Certification quiz</span><p class="sub">Checking your answers…</p></div>`;
    try {
      lastResult = await ST.api('quiz/' + slug, { answers: picks });
      if (lastResult.points != null && ST.user) ST.setUser({ ...ST.user, points: lastResult.points,
        certs: lastResult.passed && !ST.user.certs.includes(slug) ? [...ST.user.certs, slug] : ST.user.certs });
      results(lastResult);
    } catch(e){ fail(e.message, true); }
  }

  function results(r){
    let verdict;
    if (r.passed && r.awarded) verdict = `<div class="verdict ok"><span style="font-size:1.8rem">🏅</span><div><b>Certified! +1 point.</b><p>You now have ${r.points} certification point${r.points === 1 ? '' : 's'}. <a href="/leaderboard/">See where you rank →</a></p></div></div>`;
    else if (r.passed && r.already) verdict = `<div class="verdict ok"><span style="font-size:1.8rem">✓</span><div><b>Passed, and you're already certified here.</b><p>Points count once per tutorial. Try another tutorial to earn more.</p></div></div>`;
    else if (r.passed) verdict = `<div class="verdict ok"><span style="font-size:1.8rem">🏅</span><div><b>You passed!</b><p>Log in or create a free account to claim your certification point.</p><div style="margin-top:10px"><button class="btn small" id="cqClaim">Claim my point</button></div></div></div>`;
    else verdict = `<div class="verdict no"><span style="font-size:1.8rem">📘</span><div><b>Not quite. You need ${r.pass} of ${r.total}.</b><p>Have another look at the steps above, then try again.</p></div></div>`;

    box.innerHTML = `<div class="cq">
      <div class="cq-head"><span class="eyebrow">Your result</span><div class="dots" aria-hidden="true">${r.results.map(x => `<span class="dot ${x.correct ? 'ok' : 'no'}"></span>`).join('')}</div></div>
      <span class="score">${r.score}<small> / ${r.total}</small></span>
      ${verdict}
      <ul class="review">${r.results.map((x, k) => `<li><span class="m ${x.correct ? 'ok' : 'no'}">${x.correct ? '✓' : '✗'}</span>
        <span>${esc(quiz.questions[k].q)}${x.correct ? '' : `<span class="why"><b>Answer:</b> ${esc(quiz.questions[k].o[x.answer])}. ${esc(x.e)}</span>`}</span></li>`).join('')}</ul>
      <div class="foot"><span></span><button class="btn ghost" id="cqRetry">${r.passed ? 'Take it again' : 'Try again'}</button></div>
    </div>`;
    box.querySelector('#cqRetry').addEventListener('click', () => { i = 0; picks = []; question(); });
    const claim = box.querySelector('#cqClaim');
    if (claim) claim.addEventListener('click', () => ST.openAuth(() => submit(), 'signup'));
    if (r.awarded) confetti();
  }

  function fail(msg, retry){
    box.innerHTML = `<div class="cq"><span class="eyebrow">Certification quiz</span><p class="err">${esc(msg)}</p>
      <div class="foot"><span></span><button class="btn ghost" id="cqAgain">${retry ? 'Try again' : 'Back'}</button></div></div>`;
    box.querySelector('#cqAgain').addEventListener('click', retry ? submit : intro);
  }

  function confetti(){
    const c = document.createElement('div'); c.className = 'cq-confetti';
    const colors = ['var(--accent)', 'var(--amber)', 'var(--good)', '#e85d75'];
    for (let n = 0; n < 40; n++){
      const p = document.createElement('i');
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[n % colors.length];
      p.style.animationDelay = Math.random() * .4 + 's';
      c.appendChild(p);
    }
    box.querySelector('.cq').appendChild(c);
    setTimeout(() => c.remove(), 2200);
  }

  document.addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA/.test(e.target.tagName) || !box.querySelector('.opt:not([disabled])')) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 9) choose(n - 1);
  });
  document.addEventListener('st:auth', () => { if (box.querySelector('.intro')) intro(); });

  intro();
  Promise.all([
    ST.api('quiz/' + slug).then(q => { quiz = q; }).catch(() => {}),
    ST.ready
  ]).then(() => { if (box.querySelector('.intro')) intro(); });
})();
