// Journal article — thin reading-progress bar along the top of the viewport.
(function () {
  const bar = document.getElementById("progress");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + "%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
})();
