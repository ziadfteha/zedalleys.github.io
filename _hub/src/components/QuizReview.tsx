import type { QuizQuestion } from '../types';

export function QuizReview({ quiz, onRetake }: { quiz: QuizQuestion[]; onRetake: () => void }) {
  return (
    <div className="quiz-block quiz-block--review">
      <div className="quiz-block__review-header">
        <h3 className="quiz-block__title">Quick check</h3>
        <span className="quiz-block__review-badge">✓ Already passed</span>
      </div>

      {quiz.map((question, qi) => (
        <div key={question.id} className="quiz-question">
          <p className="quiz-question__prompt">{qi + 1}. {question.question}</p>
          <div className="quiz-question__options">
            {question.options.map((option, oi) => (
              <div
                key={oi}
                className={[
                  'quiz-option',
                  'quiz-option--static',
                  oi === question.correctIndex ? 'quiz-option--correct' : '',
                ].join(' ').trim()}
              >
                {option}
              </div>
            ))}
          </div>
          <p className="quiz-question__feedback is-correct">{question.explanation}</p>
        </div>
      ))}

      <div className="quiz-block__actions">
        <button type="button" className="btn btn--ghost" onClick={onRetake}>
          Retake quiz for practice
        </button>
      </div>
    </div>
  );
}
