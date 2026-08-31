interface ProgressBarProps {
  percent: number;
  color?: string;
  label?: string;
}

export function ProgressBar({ percent, color, label }: ProgressBarProps) {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      {label !== undefined && <span className="progress-bar__label">{label}</span>}
    </div>
  );
}
