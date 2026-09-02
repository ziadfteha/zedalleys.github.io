// Portfolio archive — category filter + grid/list view toggle.
(function () {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".gallery-card").forEach((c) => {
        const tags = (c.dataset.tags || "").split(" ");
        const show = f === "all" || tags.includes(f);
        c.style.opacity = show ? "1" : "0.18";
        c.style.pointerEvents = show ? "auto" : "none";
      });
    });
  });

  document.querySelectorAll(".view-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".view-toggle button")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const v = btn.dataset.view;
      document.getElementById("gridView").style.display = v === "grid" ? "grid" : "none";
      document.getElementById("listView").style.display = v === "list" ? "block" : "none";
    });
  });
})();
