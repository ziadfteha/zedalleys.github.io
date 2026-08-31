import type { ProgressState, SubjectProgress, Subject } from '../types';

const STORAGE_KEY = 'ux-learning-progress';

function readAll(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

function writeAll(state: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getSubjectProgress(subjectId: string): SubjectProgress {
  const all = readAll();
  return all[subjectId] ?? { completedSteps: [] };
}

export function isStepComplete(subjectId: string, stepId: string): boolean {
  return getSubjectProgress(subjectId).completedSteps.includes(stepId);
}

export function markStepComplete(subjectId: string, stepId: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  if (!current.completedSteps.includes(stepId)) {
    current.completedSteps = [...current.completedSteps, stepId];
  }
  all[subjectId] = current;
  writeAll(all);
}

export function saveCertificateName(subjectId: string, name: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  current.certificateName = name;
  current.completedAt = current.completedAt ?? new Date().toISOString();
  all[subjectId] = current;
  writeAll(all);
}

export function saveCertificateId(subjectId: string, certificateId: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  current.certificateId = certificateId;
  all[subjectId] = current;
  writeAll(all);
}

export function getAllSteps(subject: Subject) {
  return subject.levels.flatMap((level) => level.steps);
}

export function getSubjectStats(subject: Subject) {
  const steps = getAllSteps(subject);
  const progress = getSubjectProgress(subject.id);
  const completed = steps.filter((s) => progress.completedSteps.includes(s.id)).length;
  const total = steps.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const isComplete = total > 0 && completed === total;
  return { completed, total, percent, isComplete };
}

export function resetSubjectProgress(subjectId: string): void {
  const all = readAll();
  delete all[subjectId];
  writeAll(all);
}
