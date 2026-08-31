interface StatsSummaryProps {
  stepsCompleted: number;
  stepsTotal: number;
  subjectsCompleted: number;
  subjectsTotal: number;
  certificatesEarned: number;
}

export function StatsSummary({
  stepsCompleted,
  stepsTotal,
  subjectsCompleted,
  subjectsTotal,
  certificatesEarned,
}: StatsSummaryProps) {
  return (
    <div className="stats-summary">
      <div className="stats-summary__item">
        <span className="stats-summary__value">{stepsCompleted}/{stepsTotal}</span>
        <span className="stats-summary__label">Steps completed</span>
      </div>
      <div className="stats-summary__item">
        <span className="stats-summary__value">{subjectsCompleted}/{subjectsTotal}</span>
        <span className="stats-summary__label">Subjects finished</span>
      </div>
      <div className="stats-summary__item">
        <span className="stats-summary__value">{certificatesEarned}</span>
        <span className="stats-summary__label">Certificates earned</span>
      </div>
    </div>
  );
}
