import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { getSubjectProgress, getSubjectStats, saveCertificateId, saveCertificateName } from '../lib/storage';
import { issueCertificate } from '../lib/certificateRegistry';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import {
  buildFacebookShareUrl,
  buildLinkedInShareUrl,
  buildShareText,
  buildTwitterShareUrl,
  downloadCanvasAsPng,
  drawCertificate,
} from '../lib/certificate';

export function CertificatePage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const existingProgress = subject ? getSubjectProgress(subject.id) : undefined;
  const [name, setName] = useState(existingProgress?.certificateName ?? '');
  const [confirmedName, setConfirmedName] = useState(existingProgress?.certificateName ?? '');
  const [certificateId, setCertificateId] = useState(existingProgress?.certificateId);
  const [issuing, setIssuing] = useState(false);

  useEffect(() => {
    if (!subject || !canvasRef.current) return;
    drawCertificate({
      canvas: canvasRef.current,
      recipientName: confirmedName,
      subjectTitle: subject.title,
      dateLabel: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
      accentColor: subject.color,
    });
  }, [subject, confirmedName]);

  if (!subject) return <Navigate to="/" replace />;

  const stats = getSubjectStats(subject);
  if (!stats.isComplete) return <Navigate to={`/subjects/${subject.id}`} replace />;

  async function handleConfirmName(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    saveCertificateName(subject!.id, trimmed);
    setConfirmedName(trimmed);

    if (isSupabaseConfigured && !certificateId) {
      setIssuing(true);
      const id = await issueCertificate({
        subjectId: subject!.id,
        subjectTitle: subject!.title,
        recipientName: trimmed,
      });
      setIssuing(false);
      if (id) {
        saveCertificateId(subject!.id, id);
        setCertificateId(id);
      }
    }
  }

  function handleDownload() {
    if (!canvasRef.current) return;
    downloadCanvasAsPng(canvasRef.current, `${subject!.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`);
  }

  const verifyUrl = certificateId ? `${window.location.origin}${window.location.pathname}#/verify/${certificateId}` : null;
  const shareUrl = verifyUrl ?? window.location.href;
  const shareText = buildShareText(subject.title);

  return (
    <div className="page page--certificate">
      <Link to={`/subjects/${subject.id}`} className="back-link">← Back to path</Link>

      <h1>🎉 You completed {subject.title}!</h1>
      <p>Enter the name you'd like on your certificate, then download it or share your achievement.</p>

      {!confirmedName ? (
        <form className="certificate-name-form" onSubmit={handleConfirmName}>
          <label htmlFor="certificate-name">Your name</label>
          <input
            id="certificate-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jordan Ahmed"
            autoFocus
          />
          <button type="submit" className="btn btn--primary" disabled={!name.trim() || issuing}>
            {issuing ? 'Generating…' : 'Generate certificate'}
          </button>
        </form>
      ) : (
        <>
          <div className="certificate-preview">
            <canvas ref={canvasRef} className="certificate-canvas" />
          </div>

          {certificateId && (
            <p className="certificate-verify-note">
              ✓ Verified — anyone can confirm this certificate at{' '}
              <Link to={`/verify/${certificateId}`}>{verifyUrl}</Link>
            </p>
          )}

          <div className="certificate-actions">
            <button type="button" className="btn btn--ghost" onClick={() => setConfirmedName('')}>
              Edit name
            </button>
            <button type="button" className="btn btn--primary" onClick={handleDownload}>
              ⬇ Download certificate
            </button>
          </div>

          <div className="share-row">
            <span className="share-row__label">Share your achievement</span>
            <div className="share-row__buttons">
              <a
                className="btn btn--share btn--linkedin"
                href={buildLinkedInShareUrl(shareUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on LinkedIn
              </a>
              <a
                className="btn btn--share btn--twitter"
                href={buildTwitterShareUrl(shareUrl, shareText)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on X
              </a>
              <a
                className="btn btn--share btn--facebook"
                href={buildFacebookShareUrl(shareUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
