/**
 * Generates derived static assets that would be tedious/heavy to keep by hand:
 *
 *   1. Responsive image variants  — assets/images/**\/<name>-{640,960,1280}.{webp,jpg}
 *      plus a full-size .webp sibling for every .jpg.
 *   2. Social cards               — assets/og/{default,about,portfolio,blog,contact,journal}.png
 *      (1200×630, brand background, real Fraunces headline).
 *   3. App / touch icons          — assets/images/{icon-192,icon-512,icon-maskable-512,
 *      apple-touch-icon}.png, derived from the wordmark on a brand tile.
 *
 * Idempotent: everything already on disk is left alone, so `npm run build`
 * is a no-op once the assets exist. Pass --force to regenerate the cards and
 * icons (e.g. after tweaking this script). Run via `npm run assets` (part of
 * `npm run build`). Requires only `sharp`.
 */
import sharp from "sharp";
import { readdir, readFile, mkdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const IMAGES = "assets/images";
const OG = "assets/og";
const VARIANT_WIDTHS = [640, 960, 1280];
const BG = "#0a1416";
const INK = "#f4f1ea";
const ACCENT = "#c8613f";
const FORCE = process.argv.includes("--force");

const exists = (p) =>
  access(p, constants.F_OK).then(
    () => true,
    () => false,
  );

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1. Responsive image variants
// ---------------------------------------------------------------------------
async function buildImageVariants() {
  const files = (await walk(IMAGES)).filter(
    (f) => /\.jpe?g$/i.test(f) && !/-\d+\.jpe?g$/i.test(f), // skip generated -640.jpg etc.
  );
  let made = 0;
  for (const src of files) {
    const dir = path.dirname(src);
    const name = path.basename(src).replace(/\.jpe?g$/i, "");
    const { width } = await sharp(src).metadata();

    const fullWebp = path.join(dir, `${name}.webp`);
    if (!(await exists(fullWebp))) {
      await sharp(src).webp({ quality: 80 }).toFile(fullWebp);
      made++;
    }

    for (const w of VARIANT_WIDTHS) {
      if (w >= width) continue;
      const targets = [
        [path.join(dir, `${name}-${w}.webp`), (s) => s.webp({ quality: 78 })],
        [path.join(dir, `${name}-${w}.jpg`), (s) => s.jpeg({ quality: 80, mozjpeg: true })],
      ];
      for (const [out, fmt] of targets) {
        if (await exists(out)) continue;
        await fmt(sharp(src).resize({ width: w })).toFile(out);
        made++;
      }
    }
  }
  console.log(`  image variants: ${made} written (${files.length} sources)`);
}

// ---------------------------------------------------------------------------
// 2. Social cards
// ---------------------------------------------------------------------------
// A single brand card, used site-wide as the default social image. It is
// deliberately text-free: resvg (sharp's SVG renderer) can't render the
// variable Fraunces woff2, and the page's own og:title / twitter:title
// already supply the headline in every social embed. Per-page cards with
// baked headline text would need a static font shipped as a build dep —
// TODO(zed) if the plain card ever feels too sparse.
async function buildCards() {
  await mkdir(OG, { recursive: true });
  if (!FORCE && (await exists(path.join(OG, "default.png")))) {
    console.log("  social card: up to date (--force to rebuild)");
    return;
  }
  const src = path.join(IMAGES, "zed-logo.png");
  const { width, height } = await sharp(src).metadata();
  const alpha = await sharp(src).ensureAlpha().extractChannel("alpha").toBuffer();
  const creamFull = await sharp({ create: { width, height, channels: 3, background: INK } })
    .joinChannel(alpha)
    .png()
    .toBuffer();
  const wordmarkW = 620;
  const wordmarkH = Math.round((height / width) * wordmarkW);
  const wordmark = await sharp(creamFull).resize({ width: wordmarkW }).png().toBuffer();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <g fill="none" stroke-width="2">
    <circle cx="1030" cy="150" r="250" stroke="rgba(244,241,234,0.09)"/>
    <circle cx="1030" cy="150" r="168" stroke="rgba(200,97,63,0.30)"/>
    <circle cx="1030" cy="150" r="92"  stroke="rgba(244,241,234,0.09)"/>
  </g>
  <line x1="92" y1="470" x2="264" y2="470" stroke="${ACCENT}" stroke-width="3"/>
</svg>`;

  const bg = await sharp(Buffer.from(svg), { density: 96 })
    .resize(1200, 630, { fit: "fill" })
    .png()
    .toBuffer();

  await sharp(bg)
    .composite([{ input: wordmark, left: 92, top: Math.max(0, Math.round(300 - wordmarkH / 2)) }])
    .png()
    .toFile(path.join(OG, "default.png"));
  console.log("  social card: 1 written (assets/og/default.png)");
}

// ---------------------------------------------------------------------------
// 3. App / touch icons
// ---------------------------------------------------------------------------
async function buildIcons() {
  if (!FORCE && (await exists(path.join(IMAGES, "icon-512.png")))) {
    console.log("  app icons: up to date (--force to rebuild)");
    return;
  }
  const src = path.join(IMAGES, "zed-logo.png");
  const { width, height } = await sharp(src).metadata();
  // Re-ink the (dark, transparent) wordmark to cream using its own alpha.
  const alpha = await sharp(src).ensureAlpha().extractChannel("alpha").toBuffer();
  const creamMark = await sharp({
    create: { width, height, channels: 3, background: INK },
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();

  const tile = async (size, pad, out) => {
    const inner = Math.round(size * (1 - pad * 2));
    const mark = await sharp(creamMark).resize({ width: inner, fit: "inside" }).toBuffer();
    await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
      .composite([{ input: mark, gravity: "centre" }])
      .png()
      .toFile(path.join(IMAGES, out));
  };

  await tile(512, 0.16, "icon-512.png");
  await tile(192, 0.16, "icon-192.png");
  await tile(512, 0.26, "icon-maskable-512.png");
  await tile(180, 0.14, "apple-touch-icon.png");
  console.log("  app icons: 4 written");
}

console.log("build-assets:");
await buildImageVariants();
await buildCards();
await buildIcons();
console.log("done.");
