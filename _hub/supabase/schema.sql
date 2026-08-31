-- UX Learning Path — certificate registry
--
-- Run this once in your Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).
--
-- Design notes:
-- - Anyone holding the public "anon" key can INSERT a certificate row. This
--   app has no user accounts, so there's no way to gate issuance further
--   without adding auth. The `check` constraints below are just basic
--   hygiene (non-empty name, known subject), not real abuse prevention.
-- - Nobody can SELECT the table directly (no RLS select policy is granted).
--   Verification instead goes through `get_certificate(uuid)`, a
--   SECURITY DEFINER function that returns only the three fields a verify
--   page needs, and only for an exact id match — this prevents anonymous
--   listing/enumeration of every certificate ever issued.
-- - Nobody can UPDATE or DELETE — certificates are append-only.

create extension if not exists pgcrypto;

create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  subject_id text not null check (char_length(subject_id) between 1 and 100),
  subject_title text not null check (char_length(subject_title) between 1 and 200),
  recipient_name text not null check (char_length(recipient_name) between 1 and 200),
  issued_at timestamptz not null default now()
);

alter table certificates enable row level security;

drop policy if exists "anon can insert certificates" on certificates;
create policy "anon can insert certificates"
  on certificates
  for insert
  to anon
  with check (true);

-- Intentionally no "for select" policy on the table itself — see note above.

create or replace function get_certificate(cert_id uuid)
returns table (subject_title text, recipient_name text, issued_at timestamptz)
language sql
security definer
set search_path = public
as $$
  select subject_title, recipient_name, issued_at
  from certificates
  where id = cert_id;
$$;

grant execute on function get_certificate(uuid) to anon;
