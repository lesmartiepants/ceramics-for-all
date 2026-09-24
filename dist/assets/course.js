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

  const nav = document.querySelector('.lesson-nav');
  const navLinks = [...document.querySelectorAll('.lesson-nav a[href^="#"]')];
  const sections = navLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  let trackingFrame = 0;

  function navOffset() {
    // On phones the mobile header is sticky above the sticky lesson tabs.
    const header = document.querySelector('.mobile-head');
    const headerHeight = header && getComputedStyle(header).display !== 'none'
      ? header.getBoundingClientRect().height : 0;
    return headerHeight + (nav?.getBoundingClientRect().height || 0) + 16;
  }

  function sectionHeading(section) {
    // Modules have large top padding. Land at the heading, not at the
    // beginning (or the end) of the padded section.
    return section.querySelector('h1,h2') || section;
  }

  function setCurrent(id) {
    navLinks.forEach(link => {
      const active = link.hash === '#' + id;
      link.classList.toggle('current', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const active = navLinks.find(link => link.hash === '#' + id);
    if (nav && active) {
      const left = active.offsetLeft - nav.offsetLeft -
        (nav.clientWidth - active.offsetWidth) / 2;
      // Only move the horizontal strip, never use scrollIntoView on a tab.
      nav.scrollLeft = Math.max(0, left);
    }
  }

  function sectionAtViewport() {
    if (!sections.length) return '';
    const line = navOffset() + 24;
    let current = sections[0];
    for (const section of sections) {
      if (sectionHeading(section).getBoundingClientRect().top <= line) current = section;
      else break;
    }
    return current.id;
  }

  function trackSection() {
    trackingFrame = 0;
    setCurrent(sectionAtViewport());
  }
  function scheduleTracking() {
    if (!trackingFrame) trackingFrame = requestAnimationFrame(trackSection);
  }

  // Native fragment navigation is more reliable than scripted scrolling on
  // iOS Safari, especially beneath stacked sticky navigation.
  function syncFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (sections.some(section => section.id === id)) {
      setCurrent(id);
      // Let the browser complete its anchor positioning before reading the
      // viewport and reconciling the active tab.
      requestAnimationFrame(scheduleTracking);
      return;
    }
    scheduleTracking();
  }
  window.addEventListener('scroll', scheduleTracking, { passive: true });
  window.addEventListener('resize', scheduleTracking, { passive: true });
  window.addEventListener('hashchange', syncFromHash);
  syncFromHash();

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

  document.querySelectorAll('.inspiration').forEach(section => {
    const track = section.querySelector('.inspiration-grid');
    const cards = [...section.querySelectorAll('.inspiration-card')];
    if (!track || cards.length < 2) return;
    track.tabIndex = 0;
    track.setAttribute('role','region');
    track.setAttribute('aria-label',`${cards.length} inspiration artworks. Swipe or use the arrow keys to browse.`);

    const controls = document.createElement('div');
    controls.className = 'gallery-controls';
    controls.innerHTML = `<span class="gallery-status" aria-live="polite">1 of ${cards.length}</span><span class="gallery-buttons"><button type="button" data-gallery-prev aria-label="Previous artwork">←</button><button type="button" data-gallery-next aria-label="Next artwork">→</button></span>`;
    track.after(controls);
    const status = controls.querySelector('.gallery-status');
    const previous = controls.querySelector('[data-gallery-prev]');
    const next = controls.querySelector('[data-gallery-next]');
    let current = 0;

    const update = index => {
      current = Math.max(0,Math.min(cards.length-1,index));
      status.textContent = `${current+1} of ${cards.length}`;
      previous.disabled = current === 0;
      next.disabled = current === cards.length-1;
    };
    const move = index => {
      update(index);
      cards[current].scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest',inline:'start'});
    };
    previous.addEventListener('click',()=>move(current-1));
    next.addEventListener('click',()=>move(current+1));
    track.addEventListener('keydown',event=>{
      if(event.key==='ArrowLeft'){event.preventDefault();move(current-1);}
      if(event.key==='ArrowRight'){event.preventDefault();move(current+1);}
    });
    let ticking = false;
    track.addEventListener('scroll',()=>{
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(()=>{
        const viewportCenter = track.scrollLeft + track.clientWidth / 2;
        const nearest = cards.reduce((best,card,index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const bestCenter = cards[best].offsetLeft + cards[best].offsetWidth / 2;
          return Math.abs(cardCenter-viewportCenter) < Math.abs(bestCenter-viewportCenter) ? index : best;
        },0);
        update(nearest);
        ticking = false;
      });
    },{passive:true});
    update(0);
  });
})();
