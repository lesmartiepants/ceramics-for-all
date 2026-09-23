(() => {
  const phase = document.body.dataset.phase || '0';
  const modules = [...document.querySelectorAll('[data-module]')];
  const buttons = [...document.querySelectorAll('[data-complete]')];
  const key = 'handbuilding-course-v1';
  let state = {};
  try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) { state = {}; }
  state.completed ||= {};
  state.checks ||= {};
  if (phase === '1') {
    try {
      const legacy = JSON.parse(localStorage.getItem('handbuilding-phase-1') || '{}');
      Object.entries(legacy.modules || {}).forEach(([id, done]) => { if (done && state.completed['p1-' + id] === undefined) state.completed['p1-' + id] = true; });
      Object.entries(legacy.checks || {}).forEach(([id, done]) => { if (done && state.checks['p1-' + id] === undefined) state.checks['p1-' + id] = true; });
      localStorage.setItem(key, JSON.stringify(state));
      if (legacy.modules || legacy.checks) localStorage.removeItem('handbuilding-phase-1');
    } catch (_) {}
  }
  if (phase === '1' && state.phase1) {
    Object.entries(state.phase1.modules || {}).forEach(([id, done]) => { if (done) state.completed['p1-' + id] = true; });
    Object.entries(state.phase1.checks || {}).forEach(([id, done]) => { if (done) state.checks['p1-' + id] = true; });
    delete state.phase1;
    try { localStorage.setItem(key, JSON.stringify(state)); } catch (_) {}
  }
  const completionKey = b => b.dataset.complete.startsWith('p') ? b.dataset.complete : `p${phase}-${b.dataset.complete}`;
  function latestState() {
    try {
      const latest = JSON.parse(localStorage.getItem(key) || '{}');
      latest.completed ||= {};
      latest.checks ||= {};
      return latest;
    } catch (_) { return state; }
  }
  function persistLatest(mutator) {
    const latest = latestState();
    mutator(latest);
    state = latest;
    try { localStorage.setItem(key, JSON.stringify(latest)); } catch (_) {}
  }

  function updateProgress() {
    const done = buttons.filter(b => state.completed[completionKey(b)]).length;
    const percent = buttons.length ? Math.round(done / buttons.length * 100) : 0;
    document.querySelectorAll('[data-progress-text],#progressPercent').forEach(el => el.textContent = percent + '%');
    document.querySelectorAll('[data-progress-fill],#progressFill').forEach(el => {
      el.style.width = percent + '%';
      el.closest('[role="progressbar"]')?.setAttribute('aria-valuenow', String(percent));
    });
    buttons.forEach(b => {
      const complete = !!state.completed[completionKey(b)];
      const title = b.closest('[data-module]')?.querySelector('h2')?.textContent?.trim() || 'phase checkpoint';
      b.classList.toggle('done', complete);
      b.setAttribute('aria-pressed', String(complete));
      b.setAttribute('aria-label', `${complete ? 'Completed' : 'Mark complete'}: ${title}`);
      b.textContent = complete ? '✓ Module complete' : 'Mark module complete';
    });
  }
  buttons.forEach(b => b.addEventListener('click', () => {
    const id = completionKey(b);
    const next = !state.completed[id];
    persistLatest(latest => { latest.completed[id] = next; });
    updateProgress();
  }));
  document.querySelectorAll('[data-save]').forEach(input => {
    const id = `p${phase}-${input.dataset.save}`;
    input.checked = !!state.checks[id];
    input.addEventListener('change', () => {
      persistLatest(latest => { latest.checks[id] = input.checked; });
    });
  });
  updateProgress();

  const navLinks = [...document.querySelectorAll('.lesson-nav a')];
  function setCurrent(id) {
    navLinks.forEach(a => {
      const current = a.getAttribute('href') === '#' + id;
      a.classList.toggle('current', current);
      if (current) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
      if (current) {
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        a.scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest',inline:'nearest'});
      }
    });
  }
  const observed = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  setCurrent(location.hash.slice(1) || observed[0]?.id || '');
  if ('IntersectionObserver' in window && observed.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (!visible) return;
      setCurrent(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0,.25,.5] });
    observed.forEach(m => observer.observe(m));
  }

  const trigger = document.querySelector('[data-menu-button],#menuButton');
  const drawer = document.querySelector('[data-menu-drawer],#mobileDrawer');
  document.querySelectorAll('.brand-mark').forEach(mark => mark.setAttribute('aria-hidden','true'));
  drawer?.querySelector('nav')?.setAttribute('aria-label','Course phases');
  function closeDrawer() {
    if (!drawer || !trigger) return;
    drawer.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); trigger.textContent = trigger.dataset.closedLabel || 'Course menu';
    document.body.classList.remove('drawer-open'); trigger.focus();
  }
  trigger?.addEventListener('click', () => {
    const open = !drawer.classList.contains('open');
    drawer.classList.toggle('open', open); trigger.setAttribute('aria-expanded', String(open));
    trigger.dataset.closedLabel ||= trigger.textContent;
    trigger.textContent = open ? 'Close' : trigger.dataset.closedLabel;
    document.body.classList.toggle('drawer-open', open);
    if (open) drawer.querySelector('a')?.focus();
  });
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => {
    if (!drawer?.classList.contains('open')) return;
    if (e.key === 'Escape') closeDrawer();
    if (e.key === 'Tab') {
      const focusable = [...drawer.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])')];
      const first = focusable[0], last = focusable.at(-1);
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
  });
})();
