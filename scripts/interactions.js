// Shared interaction primitives — cursor, magnetic, reveal

(function() {
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
  });

  function tick() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  // Hover states
  const hoverSel = 'a, button, .featured-item, .gallery-card, .blog-row, .next-project, .form-option, [data-cursor="hover"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSel)) cursor.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSel)) cursor.classList.remove('is-hovering');
  });

  // Magnetic effect
  function bindMagnetic() {
    document.querySelectorAll('.magnetic').forEach(el => {
      if (el.__magnetic) return;
      el.__magnetic = true;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
  bindMagnetic();

  // Reveal on scroll
  function bindReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .split-line').forEach(el => io.observe(el));
  }
  bindReveal();

  // Wrap split-line text content with span if not already
  document.querySelectorAll('.split-line').forEach(el => {
    if (!el.querySelector('span')) {
      el.innerHTML = `<span>${el.innerHTML}</span>`;
    }
  });

  // Page transition on internal nav clicks
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || link.hasAttribute('target')) return;
    e.preventDefault();
    overlay.classList.add('is-active');
    setTimeout(() => { window.location.href = href; }, 700);
  });

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    const h = l.getAttribute('href');
    if (h === path || (path === 'index.html' && h === '/')) l.classList.add('is-active');
  });

  // Nav gains a readable backdrop once the page scrolls under it
  const nav = document.querySelector('.nav');
  if (nav) {
    const setScrolled = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  window.__bindMagnetic = bindMagnetic;
})();
