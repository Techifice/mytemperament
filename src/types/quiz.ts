export type TemperamentType = 'Sanguine' | 'Choleric' | 'Melancholic' | 'Phlegmatic';

export interface QuizQuestion {
  id: number;
  domain: 'emotional' | 'social' | 'work' | 'motivation' | 'cognitive' | 'lifestyle';
  question: string;
  type: 'multiple-choice' | 'slider' | 'ranking';
  options?: string[];
  weights: {
    Sanguine: number[];
    Choleric: number[];
    Melancholic: number[];
    Phlegmatic: number[];
  };
}

export interface QuizAnswer {
  questionId: number;
  answer: number | number[];
}

export interface TemperamentScore {
  type: TemperamentType;
  score: number;
  percentage: number;
}

export interface QuizResult {
  primary: TemperamentType;
  secondary: TemperamentType;
  scores: TemperamentScore[];
  answers: QuizAnswer[];
  completedAt: string;
}
