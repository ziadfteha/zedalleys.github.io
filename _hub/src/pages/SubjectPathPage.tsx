import { Link, Navigate, useParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { PathMap } from '../components/PathMap';
import { ProgressBar } from '../components/ProgressBar';
import { getSubjectStats } from '../lib/storage';

export function SubjectPathPage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) return <Navigate to="/" replace />;

  const stats = getSubjectStats(subject);

  return (
    <div className="page page--subject">
      <Link to="/" className="back-link">← All subjects</Link>

      <header className="subject-header">
        <div className="subject-header__icon" style={{ backgroundColor: `${subject.color}22`, color: subject.color }}>
          {subject.icon}
        </div>
        <div>
          <h1>{subject.title}</h1>
          <p>{subject.description}</p>
        </div>
      </header>

      <div className="subject-header__progress">
        <ProgressBar percent={stats.percent} color={subject.color} label={`${stats.completed}/${stats.total} steps complete`} />
      </div>

      {stats.isComplete && (
        <Link to={`/subjects/${subject.id}/certificate`} className="certificate-cta" style={{ backgroundColor: subject.color }}>
          🎓 Get your certificate
        </Link>
      )}

      <PathMap subject={subject} />
    </div>
  );
}
