// Shared interaction primitives — cursor, magnetic, reveal

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const noHover = window.matchMedia("(hover: none)").matches;

  // Custom cursor — skipped entirely under reduced motion (it's a purely
  // decorative dot that continuously chases the pointer via rAF) and on
  // touch devices (CSS already hides it there, so don't run the rAF loop
  // and pointer listeners for nothing).
  if (!reduceMotion && !noHover) {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let cx = mx,
      cy = my;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function tick() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    // Hover states
    const hoverSel =
      'a, button, .featured-item, .gallery-card, .blog-row, .next-project, .form-option, [data-cursor="hover"]';
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverSel)) cursor.classList.add("is-hovering");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverSel)) cursor.classList.remove("is-hovering");
    });
  }

  // Magnetic effect — skipped under reduced motion so buttons stay put
  // instead of continuously tracking the pointer.
  function bindMagnetic() {
    if (reduceMotion) return;
    document.querySelectorAll(".magnetic").forEach((el) => {
      if (el.__magnetic) return;
      el.__magnetic = true;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }
  bindMagnetic();

  // Reveal on scroll
  function bindReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal, .split-line").forEach((el) => io.observe(el));
  }
  bindReveal();

  // Wrap split-line text content with span if not already
  document.querySelectorAll(".split-line").forEach((el) => {
    if (!el.querySelector("span")) {
      el.innerHTML = `<span>${el.innerHTML}</span>`;
    }
  });

  // Cross-page transitions are handled natively by the View Transitions API
  // (see <meta name="view-transition"> + the @view-transition rule in
  // system.css). No click interception, no artificial delay — browsers that
  // don't support it simply navigate instantly. The active nav link is now
  // marked server-side with .is-active / aria-current.

  // Nav gains a readable backdrop once the page scrolls under it
  const nav = document.querySelector(".nav");
  if (nav) {
    const setScrolled = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  // Mobile nav toggle — opens/closes the slide-in nav-links panel
  const navToggle = document.getElementById("navToggle");
  const navLinksPanel = document.getElementById("navLinks");
  if (nav && navToggle && navLinksPanel) {
    const closeMenu = ({ returnFocus } = {}) => {
      const wasOpen = nav.classList.contains("is-menu-open");
      nav.classList.remove("is-menu-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (wasOpen && returnFocus) navToggle.focus();
    };
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-menu-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
      if (isOpen) {
        const firstLink = navLinksPanel.querySelector(".nav-link");
        if (firstLink) firstLink.focus();
      } else {
        navToggle.focus();
      }
    });
    document.querySelectorAll(".nav-link").forEach((link) =>
      link.addEventListener("click", () => {
        // Close instantly (no slide-out) — the page is about to navigate away,
        // so an animated close just flashes the tapped label mid-transition.
        navLinksPanel.style.transition = "none";
        closeMenu();
      }),
    );
    document.addEventListener("keydown", (e) => {
      if (!nav.classList.contains("is-menu-open")) return;
      if (e.key === "Escape") {
        closeMenu({ returnFocus: true });
        return;
      }
      if (e.key !== "Tab") return;
      // Trap Tab/Shift+Tab within the toggle + the open panel's links so a
      // keyboard user can't tab into page content hidden behind the overlay.
      const focusable = [navToggle, ...navLinksPanel.querySelectorAll("a[href]")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  window.__bindMagnetic = bindMagnetic;
})();
