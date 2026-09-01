# Roadmap

## v1 — done

- [x] Subject → Level → Step content model, all editable from one file
      (`src/data/subjects.ts`)
- [x] Per-subject progress bar (independent per subject, not one combined
      "journey" bar)
- [x] Sequential step unlocking within a subject
- [x] End-of-step quiz that must be answered correctly (unlimited retries)
      to mark the step complete
- [x] Certificate flow: name entry → canvas-rendered certificate → PNG
      download → share to LinkedIn / X / Facebook
- [x] Progress persisted locally (`localStorage`), survives refresh
- [x] Placeholder theme fully driven by CSS tokens, ready to rebrand
- [x] Ten subjects with real content, each with 10 steps (5 levels × 2
      steps, 2 quiz questions per step): "UX Design Fundamentals", "Visual
      Design Basics", "Interaction Design & Usability", "Accessibility
      Basics", "Design Thinking", "Design Systems", "User Research",
      "Gestalt Principles", "UX Laws", and "UX for AI" (the latter two added
      later, in their own `subject-ux-laws.ts` / `subject-ux-for-ai.ts` files)
- [x] Learning Hub home page: hero, overall stats (steps/subjects/
      certificates), a "Continue learning" shortcut for in-progress
      subjects, a search box, and subjects grouped into categories
      (`src/data/categories.ts`) instead of one flat grid
- [x] Review mode: revisiting a completed step shows the quiz answers and
      explanations directly, with Previous/Next step navigation and an
      optional no-stakes retake
- [x] Verifiable certificates: optional Supabase-backed registry, a public
      `/verify/:id` page, and share links that point at the verify page
      instead of the app root (see README's "Certificate verification")

## Rebrand + integrate as the "Learning Hub" tab

This app becomes a **"Learning Hub" tab** on the Zed Alleys personal site
(`zedalleys.com`), hosted on its own subdomain `learning.zedalleys.com`.
Rebranding was intentionally deferred so content/logic could be validated
with a generic theme first.

- [x] Ported the personal site's design system into `src/index.css`'s
      `:root` token block — deep-teal dark ground (`#0a1416`), single coral
      accent (`#e76f51`), Fraunces display + JetBrains Mono labels. Dark-only
      (the old `prefers-color-scheme` light theme was dropped to match the
      site, which is dark-only).
- [x] Per-subject accent colors in `src/data/subjects.ts` collapsed to the
      one coral accent, so the strict single-accent editorial system holds.
      (Revert those `color:` fields if per-subject wayfinding colors are
      wanted back.)
- [x] Site chrome: fixed `NavBar` (`src/components/NavBar.tsx`) with the Zed
      mark + "Learning Hub" wordmark and a "Zed Alleys ↗" link back to the
      main site; `SiteFooter` (`src/components/SiteFooter.tsx`) echoing the
      site's footer-big + mono meta row. Both rendered in `App.tsx` around
      the routes.
- [x] Consolidated into the personal site repo: source at `_hub/`
      (Jekyll-ignored), build output committed at `learning-hub/`, served at
      `https://zedalleys.com/learning-hub/`. `vite.config.ts` sets
      `base: '/learning-hub/'` and `outDir: '../learning-hub'`. The
      `ux-learning-path` private repo is now just the archived origin.
- [x] "Learning Hub" nav item + footer-sitemap link added to every page of
      the personal site, pointing at `/learning-hub/`.
- [ ] **Own subdomain (`learning.zedalleys.com`), optional.** Now a subpath.
      To get a real subdomain, either add a redirect/proxy at the CDN layer
      (Cloudflare rule → `zedalleys.com/learning-hub/`), or split `_hub/`
      back out into its own *public* repo with its own Pages custom domain
      (GitHub allows only one per repo, already used by `zedalleys.com`).
- [ ] Favicon: currently reuses `public/zed-logo.png`. Swap for a dedicated
      mark if desired.

## Later / not yet built

Roughly in the order they'd likely matter, but not committed to:

- **More subjects.** Content-only work once the pattern is established —
  candidate: Information Architecture as its own dedicated deep dive (it's
  currently covered as one step inside UX Design Fundamentals). Next batch
  is planned to be built from reference material the user will provide,
  rather than written from scratch.
- **Accounts + synced progress.** Right now progress is per-browser via
  `localStorage`. Real accounts (email or OAuth) plus a small backend
  (Supabase/Firebase are natural fits) would let progress and certificates
  survive across devices and be the source of truth instead of the browser.
- **Harden certificate issuance.** The current registry lets anyone with the
  public anon key insert a row (see README caveat) — the real fix is
  accounts, or at minimum moving issuance behind a Supabase Edge Function
  that can rate-limit and validate server-side instead of a direct client
  insert.
- **Content authoring UX.** `subjects.ts` is fine for one person editing by
  hand; if content volume grows a lot, a small JSON/YAML format or a simple
  local admin form could replace hand-written TS.
- **Analytics.** Which steps people fail quizzes on repeatedly, drop-off per
  subject — useful signal for which content needs rewriting.
- **Search/filtering** on the home page once there are more than a handful
  of subjects.
- **Randomized quiz option order / larger question pools per step**, so
  retrying isn't just "remember which button I clicked last time."
- **Non-sequential / free navigation mode**, if locked sequential steps ever
  feel too restrictive for returning users who want to jump around.

## Explicitly out of scope for now

- Native mobile app — this is a web feature of the personal site.
- Multi-language content.
- Anything resembling a full LMS (cohorts, instructors, grading dashboards).
