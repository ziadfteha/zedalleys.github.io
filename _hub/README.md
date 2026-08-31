# UX Learning Path (the "Learning Hub")

A self-contained, Uxcel-style learning experience: subjects made of levels and
steps, a short quiz at the end of every step, a per-subject progress bar, and
a downloadable/shareable certificate once a subject is finished.

This is meant to live under a **"Learning Hub" tab** on the user's personal
website, eventually on its own subdomain. It's currently a **standalone app**
with a generic placeholder theme, built to be dropped in (or embedded/iframed,
or have its routes copied over) once that integration happens — see
[ROADMAP.md](./ROADMAP.md) for that plan. `HashRouter` (see below) was chosen
specifically so it keeps working unmodified whether it ends up at a subdomain
root or a subpath of the main site.

## Quick start

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

Type-checking runs as part of `npm run build` (`tsc -b && vite build`).

## How the product works

- **Subjects** are the top-level unit (e.g. "UX Design Fundamentals"). Each
  has its own independent progress bar — progress is *not* shared across
  subjects, and there is no single "journey" that spans all of them.
- Each subject is made of **levels**, and each level is made of **steps**.
- A **step** = reading content + a short multiple-choice **quiz**. A step is
  only marked complete once every question in its quiz is answered correctly
  (retries are unlimited).
- Steps unlock **sequentially** within a subject — you can't jump ahead to a
  step whose predecessor isn't complete yet (see `PathMap.tsx`).
- Revisiting a **completed** step opens **review mode**: the quiz shows the
  correct answers and explanations directly (no re-answering required), plus
  Previous/Next step links, so finished steps stay useful as a reference. A
  "Retake quiz for practice" button switches back to the interactive quiz —
  passing it again doesn't change progress or force navigation, it just
  returns to review mode (see `QuizReview.tsx` / `StepPage.tsx`).
- Once every step in a subject is complete, a "Get your certificate" CTA
  appears. The certificate page asks for the name to put on the certificate,
  renders it to a `<canvas>`, and lets the user download it as a PNG or share
  it to LinkedIn / X / Facebook.
- All progress (which steps are done, the certificate name) is stored in the
  browser's `localStorage` under the key `ux-learning-progress`. There is no
  backend — see the Roadmap for what a real account/sync system would need.

## Certificate verification

Certificates can optionally be backed by a real, publicly-checkable
registry via Supabase — anyone can visit `/#/verify/:id` and see whether a
certificate is genuine (recipient, subject, date), without needing an
account.

**This is optional.** If it's not configured, the app works exactly as
before: certificates still generate and download fine, they just won't have
a verify link, and `/#/verify/:id` shows "verification unavailable."

To turn it on:

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard, open **SQL Editor → New query**, paste in the
   contents of [`supabase/schema.sql`](./supabase/schema.sql), and run it.
   This creates the `certificates` table plus the RLS policies and the
   `get_certificate` lookup function (see the comments in that file for why
   it's shaped this way — short version: anyone can issue a certificate
   since there's no login system, but nobody can list or enumerate every
   certificate ever issued, only look one up by its exact id).
3. In **Project Settings → API**, copy the **Project URL** and the
   **anon public key**.
4. Copy `.env.example` to `.env.local` and paste those two values in.
5. Restart `npm run dev` (Vite only reads `.env*` files at startup).

From then on, finishing the name step on the certificate page inserts a row
and shows a `/#/verify/:id` link, which is also what gets shared to
LinkedIn/X/Facebook instead of the bare app URL.

**Caveat:** since there's no auth, the Supabase `anon` key (which is safe to
expose in a client bundle) can insert certificate rows — there's nothing
stopping someone from directly calling the API to issue a fake-looking row.
This is a real limitation, not a bug; closing it fully would mean adding
accounts. It's an acceptable v1 tradeoff for a personal site's certificates.

## Project structure

```
src/
  types.ts               Data model: Subject, Level, Step, QuizQuestion, progress state
  data/
    subjects.ts            <-- ALL LEARNING CONTENT LIVES HERE (see below)
    categories.ts           purely organizational grouping of subjects for the home page
  lib/
    storage.ts             localStorage read/write, progress + stats helpers
    certificate.ts          canvas rendering + social share URL builders
    supabaseClient.ts        optional Supabase client (null if unconfigured)
    certificateRegistry.ts   issue/verify certificates against Supabase
  components/
    SubjectCard.tsx         subject tile shown on the home page
    StatsSummary.tsx        overall steps/subjects/certificates row on the home page
    PathMap.tsx             the winding path of level/step nodes (locked/complete states)
    ProgressBar.tsx         reusable progress bar
    QuizBlock.tsx           renders a step's quiz, handles check/retry/pass
  pages/
    Home.tsx                 hub home page: hero, stats, continue-learning, search, categories
    SubjectPathPage.tsx       one subject's path + overall progress + certificate CTA
    StepPage.tsx              step content + quiz, advances to next step on pass
    CertificatePage.tsx       name entry, certificate canvas, download + share
    VerifyPage.tsx            public /verify/:id lookup (see "Certificate verification")
  App.tsx                   routes (HashRouter — see "Why HashRouter" below)
  App.css                  all component styling (reads tokens from index.css)
  index.css                THEME TOKENS — this is what you edit to rebrand
```

### Why HashRouter?

Routes are `/#/subjects/...` instead of `/subjects/...`. This means the app
works correctly when dropped into a static host or a subpath of an existing
site (e.g. `yoursite.com/learn/#/subjects/...`) with **zero server
configuration** — no rewrite rules needed for deep links to work on refresh.
If the personal site ends up on a platform that can do proper rewrites
(Vercel, Netlify, etc.) and a clean URL is preferred, swap `HashRouter` for
`BrowserRouter` in `App.tsx` — it's a one-line change.

## Editing or adding content

All learning content — subjects, levels, steps, paragraphs, quiz questions —
lives in one file: **`src/data/subjects.ts`**. Nothing else needs to change
to add a subject; the home page, path view, and progress system all read
from this array automatically.

Shape of the data (see `src/types.ts` for the exact TypeScript types):

```ts
{
  id: 'kebab-case-unique-id',   // used in URLs and localStorage keys — don't change after users have progress saved
  title: 'Subject Title',
  description: 'One or two sentences shown on the subject card.',
  icon: '🧭',                    // any emoji or short string
  color: '#6C5CE7',              // accent color for this subject's cards/nodes/certificate
  levels: [
    {
      id: 'level-id',
      title: 'Level Title',
      steps: [
        {
          id: 'step-id',
          title: 'Step Title',
          summary: 'One sentence shown under the title on the step page.',
          content: [
            'First paragraph.',
            'Second paragraph.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'The question text?',
              options: ['Option A', 'Option B', 'Option C', 'Option D'],
              correctIndex: 1,           // 0-based index into options
              explanation: 'Shown after answering, correct or not.',
            },
          ],
        },
      ],
    },
  ],
}
```

**Rules of thumb when writing content:**
- Every `id` (subject/level/step/question) must be unique *within its
  parent's array*, and should stay stable once real users have saved
  progress against it (progress is keyed by these ids in `localStorage`).
- 2 quiz questions per step is the current pattern — enough to check
  understanding without feeling like a test.
- Keep steps short (3–5 short paragraphs). This is a "bite-sized lesson"
  format, not a textbook chapter.
- Currently every subject has 10 steps (5 levels × 2 steps, 2 quiz questions
  per step) — match that depth for new subjects unless there's a reason not
  to.

After adding a subject to `subjects.ts`, add its `id` to a category's
`subjectIds` list in **`src/data/categories.ts`** so it shows up grouped on
the home page instead of falling into the "More subjects" catch-all.

## Where this lives / deploying

This is the **Learning Hub sub-app of the Zed Alleys personal site**. It is
*not* a standalone repo — the source sits in `_hub/` inside the personal
site repo (`ziadfteha/ziadfteha.github.io`). The leading underscore makes
GitHub Pages' Jekyll skip the folder, so the raw source is never served.

`npm run build` (via `vite.config.ts`) writes the production bundle to
`../learning-hub/`, which **is** committed and served by GitHub Pages at
`https://zedalleys.com/learning-hub/`. `base` is `/learning-hub/` so asset
URLs resolve at that subpath; `HashRouter` needs no server rewrite rules.

To ship a change:

```bash
cd _hub
npm install        # first time only
npm run build      # regenerates ../learning-hub/
cd ..
git add _hub learning-hub && git commit -m "…" && git push
```

GitHub Pages redeploys the whole site on push to `main`.

### Own subdomain later

`learning.zedalleys.com` can be pointed at this subpath later via a redirect
/ proxy at the DNS or CDN layer (e.g. a Cloudflare rule
`learning.zedalleys.com/* -> zedalleys.com/learning-hub/$1`). GitHub Pages
itself only allows one custom domain per repo, which is already
`zedalleys.com`, so a true second Pages domain would mean splitting this
back into its own public repo.

## Rebranding / theming

Don't touch component files to restyle. Two files control the entire look:

1. **`src/index.css`** — the token block at the top (`:root { ... }`) defines
   every color, font, radius, and shadow the app uses. The app is themed to
   match the Zed Alleys personal site: dark-only, deep-teal ground, single
   coral accent, Fraunces + JetBrains Mono.
2. **`src/App.css`** — all component styles, but they only ever reference the
   tokens above (`var(--color-primary)`, etc.) — you shouldn't need to touch
   this file for a color/font rebrand, only for structural/layout changes.

Per-subject `color` values (in `subjects.ts`) drive that subject's icon,
progress bar, path nodes, and certificate accent. They're currently all set
to the one coral accent to match the site's single-accent system — give them
distinct values again if you want per-subject wayfinding colors.

## Known limitations (by design, for v1)

- No backend/accounts: progress lives only in one browser's `localStorage`.
  Clearing site data resets everything; progress does not sync across
  devices.
- No progress export/import.
- Certificate verification (see above) is optional and, even when enabled,
  has no anti-spam protection beyond basic field checks — there's no auth
  system to gate who can issue a certificate record.

See [ROADMAP.md](./ROADMAP.md) for what addressing these would look like.
