import { useMemo, useState } from 'react';
import { subjects } from '../data/subjects';
import { categories } from '../data/categories';
import { SubjectCard } from '../components/SubjectCard';
import { StatsSummary } from '../components/StatsSummary';
import { getSubjectProgress, getSubjectStats } from '../lib/storage';
import type { Subject } from '../types';

function matchesQuery(subject: Subject, query: string): boolean {
  const haystack = `${subject.title} ${subject.description}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function Home() {
  const [query, setQuery] = useState('');

  const overall = useMemo(() => {
    let stepsCompleted = 0;
    let stepsTotal = 0;
    let subjectsCompleted = 0;
    let certificatesEarned = 0;

    for (const subject of subjects) {
      const stats = getSubjectStats(subject);
      stepsCompleted += stats.completed;
      stepsTotal += stats.total;
      if (stats.isComplete) subjectsCompleted += 1;
      if (getSubjectProgress(subject.id).certificateName) certificatesEarned += 1;
    }

    return { stepsCompleted, stepsTotal, subjectsCompleted, certificatesEarned };
  }, []);

  const inProgressSubjects = useMemo(
    () => subjects.filter((s) => {
      const stats = getSubjectStats(s);
      return stats.completed > 0 && !stats.isComplete;
    }),
    [],
  );

  const categorizedIds = new Set(categories.flatMap((c) => c.subjectIds));
  const uncategorized = subjects.filter((s) => !categorizedIds.has(s.id));

  const trimmedQuery = query.trim();

  return (
    <div className="page page--home">
      <header className="hub-hero">
        <p className="hub-hero__eyebrow">Learning Hub</p>
        <h1>UX & Design Learning Path</h1>
        <p className="hub-hero__tagline">
          Bite-sized lessons and quizzes across UX subjects. Finish every step in a subject to earn its certificate.
        </p>
        <StatsSummary
          stepsCompleted={overall.stepsCompleted}
          stepsTotal={overall.stepsTotal}
          subjectsCompleted={overall.subjectsCompleted}
          subjectsTotal={subjects.length}
          certificatesEarned={overall.certificatesEarned}
        />
      </header>

      <div className="hub-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search subjects…"
          aria-label="Search subjects"
        />
      </div>

      {!trimmedQuery && inProgressSubjects.length > 0 && (
        <section className="hub-section">
          <h2 className="hub-section__title">Continue learning</h2>
          <div className="subject-grid">
            {inProgressSubjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      )}

      {categories.map((category) => {
        const matches = subjects.filter(
          (s) => category.subjectIds.includes(s.id) && matchesQuery(s, trimmedQuery),
        );
        if (matches.length === 0) return null;

        return (
          <section key={category.id} className="hub-section">
            <h2 className="hub-section__title">{category.title}</h2>
            <p className="hub-section__description">{category.description}</p>
            <div className="subject-grid">
              {matches.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </section>
        );
      })}

      {uncategorized.filter((s) => matchesQuery(s, trimmedQuery)).length > 0 && (
        <section className="hub-section">
          <h2 className="hub-section__title">More subjects</h2>
          <div className="subject-grid">
            {uncategorized.filter((s) => matchesQuery(s, trimmedQuery)).map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      )}

      {trimmedQuery && subjects.every((s) => !matchesQuery(s, trimmedQuery)) && (
        <p className="hub-empty">No subjects match "{trimmedQuery}".</p>
      )}
    </div>
  );
}
