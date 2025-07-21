import { Survey, SurveyAnswer } from './survey';

// Типы экранов в опросе
export type SurveyScreenType = 
  | 'question'    // Обычный вопрос
  | 'intro'       // Экран с информацией
  | 'thankYou';   // Финальный экран "Спасибо"

// Состояние навигации по опросу
export interface SurveyNavigationState {
  currentScreenType: SurveyScreenType;
  currentQuestionIndex: number;
  currentIntroIndex?: number;
  totalQuestions: number;
  totalScreens: number;
  progress: number;  // 0-1 значение прогресса
}

// Действия для навигации
export interface SurveyNavigationActions {
  goToNextScreen: () => void;
  goToPreviousScreen: () => void;
  goToQuestion: (index: number) => void;
  goToIntroScreen: (index: number) => void;
  goToThankYouScreen: () => void;
  canProceed: boolean;
  showBack: boolean;
}
