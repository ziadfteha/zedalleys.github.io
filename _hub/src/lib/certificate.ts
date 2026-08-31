interface DrawCertificateOptions {
  canvas: HTMLCanvasElement;
  recipientName: string;
  subjectTitle: string;
  dateLabel: string;
  accentColor: string;
}

const WIDTH = 1400;
const HEIGHT = 990;

export function drawCertificate({ canvas, recipientName, subjectTitle, dateLabel, accentColor }: DrawCertificateOptions): void {
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

  ctx.fillStyle = accentColor;
  ctx.font = '600 22px Georgia, serif';
  ctx.fillText('CERTIFICATE OF COMPLETION', WIDTH / 2, 180);

  ctx.fillStyle = '#2d2a26';
  ctx.font = '400 18px Georgia, serif';
  ctx.fillText('This certifies that', WIDTH / 2, 260);

  ctx.fillStyle = '#1a1815';
  ctx.font = '700 56px Georgia, serif';
  const displayName = recipientName.trim() || 'Your Name';
  ctx.fillText(displayName, WIDTH / 2, 340);

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  const underlineWidth = Math.min(600, ctx.measureText(displayName).width + 80);
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - underlineWidth / 2, 365);
  ctx.lineTo(WIDTH / 2 + underlineWidth / 2, 365);
  ctx.stroke();

  ctx.fillStyle = '#2d2a26';
  ctx.font = '400 18px Georgia, serif';
  ctx.fillText('has successfully completed the learning path', WIDTH / 2, 430);

  ctx.fillStyle = accentColor;
  ctx.font = '700 34px Georgia, serif';
  ctx.fillText(subjectTitle, WIDTH / 2, 490);

  ctx.fillStyle = '#5c584f';
  ctx.font = '400 16px Georgia, serif';
  ctx.fillText(`Completed on ${dateLabel}`, WIDTH / 2, 560);

  ctx.fillStyle = '#8a8578';
  ctx.font = 'italic 15px Georgia, serif';
  ctx.fillText('Zed Alleys · Learning Hub', WIDTH / 2, HEIGHT - 90);
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
