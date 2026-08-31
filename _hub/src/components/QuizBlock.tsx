import { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizBlockProps {
  quiz: QuizQuestion[];
  onPass: () => void;
}

export function QuizBlock({ quiz, onPass }: QuizBlockProps) {
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = quiz.every((q) => answers[q.id] !== undefined);
  const allCorrect = checked && quiz.every((q) => answers[q.id] === q.correctIndex);

  function selectOption(questionId: string, optionIndex: number) {
    if (checked && allCorrect) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    if (checked) setChecked(false);
  }

  function handleCheck() {
    setChecked(true);
  }

  function handleRetry() {
    setAnswers({});
    setChecked(false);
  }

  return (
    <div className="quiz-block">
      <h3 className="quiz-block__title">Quick check</h3>
      {quiz.map((question, qi) => {
        const selected = answers[question.id];
        const isCorrect = checked && selected === question.correctIndex;
        const isWrong = checked && selected !== undefined && selected !== question.correctIndex;

        return (
          <div key={question.id} className="quiz-question">
            <p className="quiz-question__prompt">{qi + 1}. {question.question}</p>
            <div className="quiz-question__options">
              {question.options.map((option, oi) => {
                const isSelected = selected === oi;
                const showAsCorrect = checked && oi === question.correctIndex;
                const showAsIncorrect = checked && isSelected && oi !== question.correctIndex;
                return (
                  <button
                    key={oi}
                    type="button"
                    className={[
                      'quiz-option',
                      isSelected ? 'quiz-option--selected' : '',
                      showAsCorrect ? 'quiz-option--correct' : '',
                      showAsIncorrect ? 'quiz-option--incorrect' : '',
                    ].join(' ').trim()}
                    onClick={() => selectOption(question.id, oi)}
                    disabled={checked && allCorrect}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {(isCorrect || isWrong) && (
              <p className={`quiz-question__feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                {isCorrect ? '✓ Correct — ' : '✕ Not quite — '}
                {question.explanation}
              </p>
            )}
          </div>
        );
      })}

      <div className="quiz-block__actions">
        {!checked || !allCorrect ? (
          <button type="button" className="btn btn--primary" onClick={handleCheck} disabled={!allAnswered}>
            Check answers
          </button>
        ) : null}
        {checked && !allCorrect && (
          <button type="button" className="btn btn--ghost" onClick={handleRetry}>
            Try again
          </button>
        )}
        {checked && allCorrect && (
          <button type="button" className="btn btn--primary" onClick={onPass}>
            Complete step →
          </button>
        )}
      </div>
    </div>
  );
}
