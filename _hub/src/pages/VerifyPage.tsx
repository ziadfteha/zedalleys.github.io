import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCertificate, type VerifiedCertificate } from '../lib/certificateRegistry';
import { isSupabaseConfigured } from '../lib/supabaseClient';

export function VerifyPage() {
  const { certificateId } = useParams();
  const [status, setStatus] = useState<'loading' | 'found' | 'not-found' | 'unavailable'>(() => {
    if (!isSupabaseConfigured) return 'unavailable';
    if (!certificateId) return 'not-found';
    return 'loading';
  });
  const [certificate, setCertificate] = useState<VerifiedCertificate | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured || !certificateId) return;

    let cancelled = false;
    fetchCertificate(certificateId).then((result) => {
      if (cancelled) return;
      setCertificate(result);
      setStatus(result ? 'found' : 'not-found');
    });

    return () => {
      cancelled = true;
    };
  }, [certificateId]);

  return (
    <div className="page page--verify">
      <Link to="/" className="back-link">← UX Learning Path</Link>

      {status === 'loading' && <p>Checking certificate…</p>}

      {status === 'unavailable' && (
        <div className="verify-card verify-card--neutral">
          <h1>Verification unavailable</h1>
          <p>This deployment isn't connected to the certificate registry.</p>
        </div>
      )}

      {status === 'not-found' && (
        <div className="verify-card verify-card--invalid">
          <h1>✕ Certificate not found</h1>
          <p>No certificate matches this link. It may have been mistyped, or it doesn't exist.</p>
        </div>
      )}

      {status === 'found' && certificate && (
        <div className="verify-card verify-card--valid">
          <h1>✓ Verified certificate</h1>
          <dl className="verify-card__details">
            <dt>Recipient</dt>
            <dd>{certificate.recipientName}</dd>
            <dt>Subject</dt>
            <dd>{certificate.subjectTitle}</dd>
            <dt>Issued</dt>
            <dd>
              {new Date(certificate.issuedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </dd>
          </dl>
        </div>
      )}
    </div>
  );
}
