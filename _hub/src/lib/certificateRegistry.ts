import { supabase } from './supabaseClient';

export interface VerifiedCertificate {
  subjectTitle: string;
  recipientName: string;
  issuedAt: string;
}

export async function issueCertificate(params: {
  subjectId: string;
  subjectTitle: string;
  recipientName: string;
}): Promise<string | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('certificates')
    .insert({
      subject_id: params.subjectId,
      subject_title: params.subjectTitle,
      recipient_name: params.recipientName,
    })
    .select('id')
    .single();

  if (error || !data) {
    console.error('Failed to issue certificate:', error);
    return null;
  }

  return data.id as string;
}

export async function fetchCertificate(certificateId: string): Promise<VerifiedCertificate | null> {
  if (!supabase) return null;

  const { data, error } = await supabase.rpc('get_certificate', { cert_id: certificateId });

  if (error || !data || data.length === 0) {
    return null;
  }

  const row = data[0];
  return {
    subjectTitle: row.subject_title,
    recipientName: row.recipient_name,
    issuedAt: row.issued_at,
  };
}
