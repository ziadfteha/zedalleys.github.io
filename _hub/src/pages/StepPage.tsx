import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { QuizBlock } from '../components/QuizBlock';
import { QuizReview } from '../components/QuizReview';
import { getAllSteps, getSubjectProgress, getSubjectStats, isStepComplete, markStepComplete } from '../lib/storage';

export function StepPage() {
  const { subjectId, stepId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find((s) => s.id === subjectId);
  const [practiceMode, setPracticeMode] = useState(false);

  if (!subject) return <Navigate to="/" replace />;

  const flatSteps = getAllSteps(subject);
  const stepIndex = flatSteps.findIndex((s) => s.id === stepId);
  const step = flatSteps[stepIndex];

  if (!step) return <Navigate to={`/subjects/${subject.id}`} replace />;

  const progress = getSubjectProgress(subject.id);
  const previousComplete = stepIndex === 0 || progress.completedSteps.includes(flatSteps[stepIndex - 1].id);
  const alreadyComplete = isStepComplete(subject.id, step.id);
  if (!previousComplete && !alreadyComplete) {
    return <Navigate to={`/subjects/${subject.id}`} replace />;
  }

  const previousStep = flatSteps[stepIndex - 1];
  const nextStep = flatSteps[stepIndex + 1];
  const nextStepUnlocked = alreadyComplete && !!nextStep;

  function handlePass() {
    markStepComplete(subject!.id, step.id);

    if (practiceMode) {
      setPracticeMode(false);
      return;
    }

    const stats = getSubjectStats(subject!);
    if (nextStep) {
      navigate(`/subjects/${subject!.id}/steps/${nextStep.id}`);
    } else if (stats.isComplete) {
      navigate(`/subjects/${subject!.id}/certificate`);
    } else {
      navigate(`/subjects/${subject!.id}`);
    }
  }

  return (
    <div className="page page--step">
      <Link to={`/subjects/${subject.id}`} className="back-link">← Back to path</Link>

      <p className="step-eyebrow" style={{ color: subject.color }}>
        Step {stepIndex + 1} of {flatSteps.length} · {subject.title}
      </p>
      <h1>{step.title}</h1>
      <p className="step-summary">{step.summary}</p>

      <div className="step-content">
        {step.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {alreadyComplete && !practiceMode ? (
        <QuizReview quiz={step.quiz} onRetake={() => setPracticeMode(true)} />
      ) : (
        <QuizBlock quiz={step.quiz} onPass={handlePass} />
      )}

      {alreadyComplete && (
        <div className="step-nav">
          {previousStep ? (
            <Link to={`/subjects/${subject.id}/steps/${previousStep.id}`} className="step-nav__link">
              ← {previousStep.title}
            </Link>
          ) : <span />}
          {nextStepUnlocked ? (
            <Link to={`/subjects/${subject.id}/steps/${nextStep!.id}`} className="step-nav__link step-nav__link--next">
              {nextStep!.title} →
            </Link>
          ) : <span />}
        </div>
      )}
    </div>
  );
}
