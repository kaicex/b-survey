export interface Option {
  id: string;
  text: string;
  value: string;
  icon?: string; // Опциональная иконка для варианта ответа
}

export type QuestionType = 'single' | 'multiple' | 'text' | 'rating' | 'boolean';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single';
  options: Option[];
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple';
  options: Option[];
}

export interface TextQuestion extends BaseQuestion {
  type: 'text';
  placeholder?: string;
  maxLength?: number;
}

export interface RatingQuestion extends BaseQuestion {
  type: 'rating';
  maxRating: number;
}

export interface BooleanQuestion extends BaseQuestion {
  type: 'boolean';
  yesLabel?: string;
  noLabel?: string;
}

export type Question = 
  | SingleChoiceQuestion 
  | MultipleChoiceQuestion 
  | TextQuestion 
  | RatingQuestion 
  | BooleanQuestion;

export interface Survey {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export type SurveyAnswer = 
  | string       // для single, text
  | string[]     // для multiple
  | number       // для rating
  | boolean      // для boolean
  | null;        // пустой ответ

export interface SurveyState {
  currentQuestionIndex: number;
  answers: Record<string, SurveyAnswer>;
  isComplete: boolean;
}
