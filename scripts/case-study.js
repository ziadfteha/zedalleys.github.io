// Case study — sticky scroll section: sync the pinned image to whichever
// text block is currently in view.
(function () {
  const blocks = document.querySelectorAll(".case-sticky-text-block");
  const images = document.querySelectorAll(".case-sticky-image");
  if (!blocks.length || !images.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const step = en.target.dataset.step;
          images.forEach((im) => im.classList.toggle("is-active", im.dataset.step === step));
        }
      });
    },
    { threshold: 0.6 },
  );
  blocks.forEach((b) => obs.observe(b));
})();
