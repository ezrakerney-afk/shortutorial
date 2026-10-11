/* Shortutorial accounts: site-bar button, log in / sign up dialog, account panel.
   Exposes window.ST = { user, ready, openAuth(onDone), refresh() } and fires "st:auth" on change. */
(function(){
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const ST = window.ST = { user: null, online: true };
  let afterLogin = null;

  async function api(path, data){
    const opt = data === undefined ? {credentials:'same-origin'}
      : {method:'POST', credentials:'same-origin', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)};
    const r = await fetch('/api/' + path, opt);
    let j = {}; try { j = await r.json(); } catch(e){}
    if (!r.ok) throw new Error(j.error || 'Something went wrong. Please try again.');
    return j;
  }
  ST.api = api;

  /* ----- site bar ----- */
  const bar = document.querySelector('.bar-actions');
  const trophy = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>';
  if (bar){
    bar.querySelectorAll('.btn').forEach(a => a.classList.add('hide-sm'));
    bar.insertAdjacentHTML('afterbegin', `<a class="iconbtn" href="/leaderboard/" title="World leaderboard" aria-label="World leaderboard">${trophy}</a><button class="acct" id="acctBtn">Log in</button>`);
    document.getElementById('acctBtn').addEventListener('click', () => ST.user ? openAccount() : ST.openAuth());
  }
  function paint(){
    const b = document.getElementById('acctBtn'); if (!b) return;
    b.innerHTML = ST.user ? `<span class="pts">★ ${ST.user.points}</span><span class="nm">${esc(ST.user.username)}</span>` : 'Log in';
    b.title = ST.user ? 'Your account' : 'Log in or create an account';
  }

  /* ----- dialog ----- */
  const dlg = document.createElement('dialog');
  dlg.className = 'auth';
  document.body.appendChild(dlg);
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  function shell(title, inner){
    dlg.innerHTML = `<div class="auth-in"><div class="auth-top"><h2>${title}</h2><button class="x" aria-label="Close">×</button></div>${inner}</div>`;
    dlg.querySelector('.x').addEventListener('click', () => dlg.close());
    if (!dlg.open) dlg.showModal();
  }

  ST.openAuth = function(onDone, mode){
    afterLogin = onDone || null;
    mode = mode || 'login';
    shell(mode === 'login' ? 'Welcome back' : 'Create your account', `
      <div class="tabs" role="tablist">
        <button role="tab" data-m="login" aria-selected="${mode==='login'}">Log in</button>
        <button role="tab" data-m="signup" aria-selected="${mode==='signup'}">Create account</button>
      </div>
      <form novalidate>
        <label>Username ${mode==='signup' ? '<span class="hint">3–20 letters, numbers or _ · shown on the leaderboard</span>' : ''}
          <input name="username" autocomplete="username" maxlength="20" required></label>
        <label>Password ${mode==='signup' ? '<span class="hint">at least 8 characters</span>' : ''}
          <input name="password" type="password" autocomplete="${mode==='login' ? 'current-password' : 'new-password'}" required></label>
        <div class="err" role="alert"></div>
        <button class="btn" type="submit">${mode==='login' ? 'Log in' : 'Create account'}</button>
        <p class="fine">${mode==='login' ? 'Earn a certification point for every tutorial quiz you pass.' : 'Your username appears on the public world leaderboard. Don’t use your real name or reuse a password from another site.'}</p>
      </form>`);
    dlg.querySelectorAll('[data-m]').forEach(t => t.addEventListener('click', () => ST.openAuth(afterLogin, t.dataset.m)));
    const f = dlg.querySelector('form'), err = dlg.querySelector('.err'), btn = f.querySelector('.btn');
    f.username.focus();
    f.addEventListener('submit', async e => {
      e.preventDefault(); err.textContent = ''; btn.disabled = true; btn.style.opacity = .6;
      try {
        const j = await api(mode, { username: f.username.value.trim(), password: f.password.value });
        set(j.user); dlg.close();
        const cb = afterLogin; afterLogin = null; if (cb) cb(j.user);
      } catch(ex){ err.textContent = ex.message; }
      btn.disabled = false; btn.style.opacity = '';
    });
  };

  function openAccount(){
    const titles = Object.fromEntries((window.TUTORIALS || []).map(t => [t.slug, t.title]));
    const u = ST.user;
    shell(esc(u.username), `
      <div class="me-stats"><span class="big">${u.points}</span><span>certification point${u.points === 1 ? '' : 's'}</span></div>
      ${u.certs.length ? `<ul class="me-list">${u.certs.map(s => `<li><a href="/${esc(s)}/">${esc(titles[s] || s)}</a></li>`).join('')}</ul>`
        : '<p class="fine">Pass the quiz at the end of any tutorial to earn your first point.</p>'}
      <div class="row"><a class="btn" href="/leaderboard/">See the leaderboard</a><button class="btn ghost" id="logoutBtn">Log out</button></div>`);
    dlg.querySelector('#logoutBtn').addEventListener('click', async () => {
      try { await api('logout', {}); } catch(e){}
      set(null); dlg.close();
    });
  }

  function set(u){ ST.user = u; paint(); document.dispatchEvent(new CustomEvent('st:auth', {detail:u})); }
  ST.setUser = set;
  ST.refresh = async () => { try { set((await api('me')).user); } catch(e){ ST.online = false; set(null); } };
  ST.ready = ST.refresh();
})();
