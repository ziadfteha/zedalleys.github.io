import { Link } from 'react-router-dom';
import type { Subject } from '../types';
import { getSubjectStats } from '../lib/storage';
import { ProgressBar } from './ProgressBar';

export function SubjectCard({ subject }: { subject: Subject }) {
  const stats = getSubjectStats(subject);

  return (
    <Link to={`/subjects/${subject.id}`} className="subject-card">
      <div className="subject-card__icon" style={{ backgroundColor: `${subject.color}22`, color: subject.color }}>
        {subject.icon}
      </div>
      <div className="subject-card__body">
        <h3 className="subject-card__title">{subject.title}</h3>
        <p className="subject-card__description">{subject.description}</p>
        <ProgressBar percent={stats.percent} color={subject.color} label={`${stats.completed}/${stats.total} steps`} />
        {stats.isComplete && <span className="subject-card__badge">Certificate earned</span>}
      </div>
    </Link>
  );
}
