// Contact page — 3-step inquiry form.
//
// Progressive enhancement: without JS the <form> POSTs straight to Formspree
// (all fields are visible and named). With JS we take over: step navigation,
// inline validation, a fetch() submit, and a pre-filled mailto: + copy-to-
// clipboard fallback if the request fails, so a visitor never loses their note.
(function () {
  const form = document.getElementById("form");
  if (!form) return;

  // With JS on, never let a stray Enter keypress fire a native submit.
  form.addEventListener("submit", (e) => e.preventDefault());

  let step = 0;
  const screens = document.querySelectorAll(".form-screen");
  const dots = document.querySelectorAll(".step-dot");

  function go(n) {
    step = n;
    screens.forEach((s, i) => {
      s.style.display = i === n ? "block" : "none";
    });
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === n);
      d.classList.toggle("is-done", i < n);
    });
    if (window.__bindMagnetic) window.__bindMagnetic();
    const heading = screens[n].querySelector(".form-step-label");
    if (heading) heading.focus();
  }

  function setFieldError(id, message) {
    const input = document.getElementById(id);
    const errorEl = document.getElementById(id + "-error");
    if (message) {
      input.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      input.removeAttribute("aria-invalid");
      errorEl.hidden = true;
    }
    return !message;
  }

  function validateAboutYou() {
    const name = document.getElementById("f-name").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const nameOk = setFieldError("f-name", name ? "" : "Please enter your name.");
    const emailOk = setFieldError("f-email", email ? "" : "Please enter your email.");
    if (!nameOk) document.getElementById("f-name").focus();
    else if (!emailOk) document.getElementById("f-email").focus();
    return nameOk && emailOk;
  }

  document.querySelectorAll("[data-next]").forEach((b) =>
    b.addEventListener("click", () => {
      if (step === 0 && !validateAboutYou()) return;
      go(step + 1);
    }),
  );
  document
    .querySelectorAll("[data-back]")
    .forEach((b) => b.addEventListener("click", () => go(step - 1)));

  function selectedOptions(name) {
    return Array.from(
      document.querySelectorAll(`.form-options[data-name="${name}"] .form-option-input:checked`),
    ).map((o) => o.value);
  }

  const FORMSPREE_ENDPOINT = form.getAttribute("action");

  function showSuccess(mode) {
    document.querySelectorAll(".form-screen").forEach((s) => (s.style.display = "none"));
    const successScreen = document.querySelector('[data-screen="success"]');
    successScreen.style.display = "block";
    document.getElementById("success-message-sent").hidden = mode !== "sent";
    document.getElementById("success-message-mailto").hidden = mode !== "mailto";
    document.getElementById("contactFallback").hidden = mode !== "mailto";
    successScreen.querySelector("h2").focus();
    dots.forEach((d) => {
      d.classList.add("is-done");
      d.classList.remove("is-active");
    });
  }

  document.querySelector("[data-submit]").addEventListener("click", async () => {
    go(0);
    if (!validateAboutYou()) return;
    const name = document.getElementById("f-name").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const company = document.getElementById("f-company").value.trim();
    const message = document.getElementById("f-message").value.trim();
    const gotcha = document.getElementById("f-gotcha").value;
    const type = selectedOptions("type").join(", ") || "—";
    const budget = selectedOptions("budget").join(", ") || "—";
    const timeline = selectedOptions("timeline").join(", ") || "—";
    const source = selectedOptions("source").join(", ") || "—";

    const subject = `New project inquiry from ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company / role: ${company}` : null,
      `Project type: ${type}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      `Found via: ${source}`,
      "",
      "What they're working on:",
      message || "—",
    ].filter(Boolean);

    const submitBtn = document.querySelector("[data-submit]");
    const submitLabel = submitBtn.querySelector("span");
    const originalLabel = submitLabel.textContent;
    submitBtn.disabled = true;
    submitLabel.textContent = "Sending…";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: company || undefined,
          message,
          type,
          budget,
          timeline,
          source,
          _gotcha: gotcha || undefined,
          _subject: subject,
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      showSuccess("sent");
    } catch {
      const mailtoUrl = `mailto:ziadfteha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailtoUrl;

      const fallbackMessage = document.getElementById("fallback-message");
      if (fallbackMessage) {
        fallbackMessage.value = [
          `To: ziadfteha@gmail.com`,
          `Subject: ${subject}`,
          "",
          ...bodyLines,
        ].join("\n");
      }
      showSuccess("mailto");
    } finally {
      submitBtn.disabled = false;
      submitLabel.textContent = originalLabel;
    }
  });

  const copyFallbackBtn = document.getElementById("copyFallback");
  if (copyFallbackBtn) {
    copyFallbackBtn.addEventListener("click", async () => {
      const fallbackMessage = document.getElementById("fallback-message");
      const label = copyFallbackBtn.querySelector("span");
      const original = label.textContent;
      try {
        await navigator.clipboard.writeText(fallbackMessage.value);
      } catch {
        fallbackMessage.select();
        document.execCommand("copy");
      }
      label.textContent = "Copied!";
      setTimeout(() => {
        label.textContent = original;
      }, 2000);
    });
  }
})();
