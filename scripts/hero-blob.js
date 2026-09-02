// Animated morph blob in the home hero. Pauses the rAF loop whenever the
// hero scrolls out of view (or the tab is hidden) so it isn't burning a
// frame budget off-screen.
(function () {
  const path = document.getElementById("morphBlob");
  const fig = document.getElementById("heroFigure");
  if (!path || !fig) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const POINTS = 9;
  const BASE_R = 60;
  const seeds = Array.from({ length: POINTS }, () => Math.random() * 1000);
  let mx = 0,
    my = 0,
    tx = 0,
    ty = 0;
  let running = false;
  let rafId = 0;

  fig.parentElement.addEventListener("mousemove", (e) => {
    const r = fig.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    tx = ((e.clientX - cx) / r.width) * 30;
    ty = ((e.clientY - cy) / r.height) * 30;
  });

  function buildPath(t) {
    mx += (tx - mx) * 0.06;
    my += (ty - my) * 0.06;
    const pts = [];
    for (let i = 0; i < POINTS; i++) {
      const a = (i / POINTS) * Math.PI * 2;
      const noise =
        Math.sin(t * 0.0008 + seeds[i]) * 14 + Math.cos(t * 0.0013 + seeds[i] * 1.3) * 10;
      const r = BASE_R + noise;
      pts.push([Math.cos(a) * r + mx, Math.sin(a) * r + my]);
    }
    let d = "";
    for (let i = 0; i < POINTS; i++) {
      const p0 = pts[(i - 1 + POINTS) % POINTS];
      const p1 = pts[i];
      const p2 = pts[(i + 1) % POINTS];
      const p3 = pts[(i + 2) % POINTS];
      if (i === 0) d += `M ${p1[0].toFixed(2)} ${p1[1].toFixed(2)} `;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)} `;
    }
    d += "Z";
    path.setAttribute("d", d);
  }

  function loop(t) {
    buildPath(t);
    rafId = requestAnimationFrame(loop);
  }
  function start() {
    if (running || document.hidden) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  new IntersectionObserver((entries) => {
    entries[0].isIntersecting ? start() : stop();
  }).observe(fig);

  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
})();
