interface DrawCertificateOptions {
  canvas: HTMLCanvasElement;
  recipientName: string;
  subjectTitle: string;
  /** Date the certificate was created, already formatted for display. */
  dateLabel: string;
  accentColor: string;
  /** Unique id printed on the certificate (Supabase id or a local reference). */
  certificateId: string;
  /** Pre-loaded brand mark, drawn top-centre. Optional — skipped if absent. */
  logo?: HTMLImageElement | null;
}

const WIDTH = 1400;
const HEIGHT = 990;

/** The issuer's signature at the foot of every certificate. */
const SIGNATURE_NAME = 'Ziad Fteha';
const SIGNATURE_FONT = "'Alex Brush', 'Segoe Script', 'Snell Roundhand', cursive";

/** Load an image for canvas use; resolves only once it is decode-ready. */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** A local, printable reference id for certificates issued without a backend. */
export function makeLocalCertificateId(): string {
  const rand =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().replace(/-/g, '')
      : Math.random().toString(16).slice(2);
  return `ZED-${rand.slice(0, 12).toUpperCase()}`;
}

export function drawCertificate({
  canvas,
  recipientName,
  subjectTitle,
  dateLabel,
  accentColor,
  certificateId,
  logo,
}: DrawCertificateOptions): void {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#fdfcf9';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const margin = 48;
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 6;
  ctx.strokeRect(margin, margin, WIDTH - margin * 2, HEIGHT - margin * 2);

  const innerMargin = margin + 18;
  ctx.strokeStyle = '#d8d3c8';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(innerMargin, innerMargin, WIDTH - innerMargin * 2, HEIGHT - innerMargin * 2);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  if (logo && logo.complete && logo.naturalWidth > 0) {
    const logoH = 62;
    const logoW = (logo.naturalWidth / logo.naturalHeight) * logoH;
    ctx.drawImage(logo, WIDTH / 2 - logoW / 2, 92, logoW, logoH);
  }

  ctx.fillStyle = accentColor;
  ctx.font = '600 22px Georgia, serif';
  ctx.fillText('CERTIFICATE OF COMPLETION', WIDTH / 2, 214);

  ctx.fillStyle = '#2d2a26';
  ctx.font = '400 18px Georgia, serif';
  ctx.fillText('This certifies that', WIDTH / 2, 292);

  ctx.fillStyle = '#1a1815';
  ctx.font = '700 56px Georgia, serif';
  const displayName = recipientName.trim() || 'Your Name';
  ctx.fillText(displayName, WIDTH / 2, 372);

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  const underlineWidth = Math.min(600, ctx.measureText(displayName).width + 80);
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - underlineWidth / 2, 397);
  ctx.lineTo(WIDTH / 2 + underlineWidth / 2, 397);
  ctx.stroke();

  ctx.fillStyle = '#2d2a26';
  ctx.font = '400 18px Georgia, serif';
  ctx.fillText('has successfully completed the learning path', WIDTH / 2, 462);

  ctx.fillStyle = accentColor;
  ctx.font = '700 34px Georgia, serif';
  ctx.fillText(subjectTitle, WIDTH / 2, 522);

  // Issuer signature, bottom-centre.
  const sigBaseline = HEIGHT - 258;
  ctx.fillStyle = '#1a1815';
  ctx.font = `64px ${SIGNATURE_FONT}`;
  ctx.fillText(SIGNATURE_NAME, WIDTH / 2, sigBaseline);

  ctx.strokeStyle = '#b8b2a5';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 180, sigBaseline + 20);
  ctx.lineTo(WIDTH / 2 + 180, sigBaseline + 20);
  ctx.stroke();

  ctx.fillStyle = '#5c584f';
  ctx.font = '400 14px Georgia, serif';
  ctx.fillText('Ziad Fteha · Zed Alleys — Learning Hub', WIDTH / 2, sigBaseline + 46);

  // Certificate id + issue date, along the foot — a small label above a
  // larger value so both stay readable when the certificate is scaled down.
  const labelY = HEIGHT - 110;
  const valueY = HEIGHT - 82;
  const footLeft = innerMargin + 30;
  const footRight = WIDTH - innerMargin - 30;

  ctx.fillStyle = '#9a9384';
  ctx.font = '600 13px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillText('CERTIFICATE ID', footLeft, labelY);
  ctx.textAlign = 'right';
  ctx.fillText('ISSUED', footRight, labelY);

  ctx.fillStyle = '#3d3a33';
  ctx.font = '400 22px Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillText(certificateId, footLeft, valueY);
  ctx.textAlign = 'right';
  ctx.fillText(dateLabel, footRight, valueY);
  ctx.textAlign = 'center';
}

export function downloadCanvasAsPng(canvas: HTMLCanvasElement, filename: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

export function buildShareText(subjectTitle: string): string {
  return `I just completed the "${subjectTitle}" learning path! 🎉`;
}

export function buildLinkedInShareUrl(pageUrl: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
}

export function buildTwitterShareUrl(pageUrl: string, text: string): string {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
}

export function buildFacebookShareUrl(pageUrl: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
}
