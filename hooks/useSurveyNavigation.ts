"use client";

import { useState, useCallback } from 'react';
import { useSurvey } from '@/contexts/SurveyContext';
import { SurveyScreenType } from '@/types/navigation';

interface UseSurveyNavigationResult {
  // Состояние экранов
  currentScreenType: SurveyScreenType;
  showIntroScreen: boolean;
  showSecondIntro: boolean;
  showReviewIntro: boolean;
  
  // Навигация
  handleNextClick: () => void;
  handleBackClick: () => void;
  
  // Свойства навигации
  canProceed: boolean;
  showBack: boolean;
  
  // Информация о прогрессе
  currentStep: number;
  totalSteps: number;
}

export function useSurveyNavigation(): UseSurveyNavigationResult {
  const { 
    survey, 
    currentQuestion, 
    currentQuestionIndex, 
    answers,
    goToNextQuestion, 
    goToPreviousQuestion
  } = useSurvey();
  
  // Состояние для отображения второй интро-страницы
  const [showSecondIntro, setShowSecondIntro] = useState(false);
  const [showReviewIntro, setShowReviewIntro] = useState(false);
  
  // Текущий тип экрана
  const currentScreenType: SurveyScreenType = showSecondIntro || showReviewIntro ? 'intro' : 'question';
  
  // Проверяем, есть ли ответ на текущий вопрос
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  
  // Проверка на возможность перехода к следующему экрану
  const canProceed = currentQuestion?.required 
    ? Boolean(currentAnswer !== null && currentAnswer !== undefined && 
      (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true))
    : true;
  
  // Обработчик нажатия на кнопку Next
  const handleNextClick = useCallback(() => {
    // Если это первый вопрос, показываем вторую интро-страницу
    if (currentQuestionIndex === 0 && !showSecondIntro && !showReviewIntro) {
      setShowSecondIntro(true);
    } else if (showSecondIntro) {
      setShowSecondIntro(false);
      setShowReviewIntro(true);
    } else if (showReviewIntro) {
      // Если мы находимся на второй интро-странице, скрываем её и идем к следующему вопросу
      setShowReviewIntro(false);
      goToNextQuestion();
    } else {
      // Обычное прохождение вопроса
      goToNextQuestion();
    }
  }, [currentQuestionIndex, goToNextQuestion, showSecondIntro]);
  
  // Обработчик нажатия на кнопку Back
  const handleBackClick = useCallback(() => {
    if (showReviewIntro) {
      setShowReviewIntro(false);
    } else if (showSecondIntro) {
      // Если мы находимся на второй интро-странице, возвращаемся к первому вопросу
      setShowSecondIntro(false);
    } else {
      // Обычное возвращение к предыдущему вопросу
      goToPreviousQuestion();
    }
  }, [goToPreviousQuestion, showSecondIntro]);
  
  // Текущий шаг (для отображения в шапке)
  const currentStep = showSecondIntro ? 2 : showReviewIntro ? 3 : currentQuestionIndex + 1;
  
  // Общее количество шагов
  const totalSteps = survey?.questions.length || 1;
  
  // Показывать ли кнопку "Назад"
  const showBack = currentQuestionIndex > 0 || showSecondIntro || showReviewIntro;
  
  return {
    currentScreenType,
    showIntroScreen: currentQuestionIndex === 0,
    showSecondIntro,
    showReviewIntro,
    handleNextClick,
    handleBackClick,
    canProceed,
    showBack,
    currentStep,
    totalSteps
  };
}
