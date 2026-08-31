export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Step {
  id: string;
  title: string;
  summary: string;
  content: string[];
  quiz: QuizQuestion[];
}

export interface Level {
  id: string;
  title: string;
  steps: Step[];
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  levels: Level[];
}

export interface SubjectProgress {
  completedSteps: string[];
  certificateName?: string;
  certificateId?: string;
  completedAt?: string;
}

export type ProgressState = Record<string, SubjectProgress>;
