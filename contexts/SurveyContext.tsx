"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Survey, Question, SurveyAnswer, SurveyState } from '@/types/survey';

interface SurveyContextType {
  survey: Survey | null;
  currentQuestion: Question | null;
  currentQuestionIndex: number;
  answers: Record<string, SurveyAnswer>;
  progress: number;
  isLastQuestion: boolean;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  setAnswer: (questionId: string, answer: SurveyAnswer) => void;
  submitSurvey: () => Promise<void>;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

interface SurveyProviderProps {
  initialSurvey: Survey;
  children: ReactNode;
}

export function SurveyProvider({ initialSurvey, children }: SurveyProviderProps) {
  const router = useRouter();
  const [survey] = useState<Survey>(initialSurvey);
  const [state, setState] = useState<SurveyState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
  });

  // Получаем текущий вопрос
  const currentQuestion = survey && survey.questions && survey.questions[state.currentQuestionIndex] 
    ? survey.questions[state.currentQuestionIndex] 
    : null;
  
  // Вычисляем прогресс
  const progress = survey && survey.questions && survey.questions.length > 0 
    ? Math.round(((state.currentQuestionIndex + 1) / survey.questions.length) * 100)
    : 0;
  
  // Проверяем, является ли текущий вопрос последним
  const isLastQuestion = survey && survey.questions 
    ? state.currentQuestionIndex === survey.questions.length - 1
    : false;

  // Навигация к следующему вопросу
  const goToNextQuestion = () => {
    if (!survey || !survey.questions) return;
    
    if (state.currentQuestionIndex < survey.questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // Если это последний вопрос, переходим к странице благодарности
      submitSurvey();
    }
  };

  // Навигация к предыдущему вопросу
  const goToPreviousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  // Установка ответа на текущий вопрос
  const setAnswer = (questionId: string, answer: SurveyAnswer) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  // Отправка опроса на сервер
  const submitSurvey = async () => {
    try {
      // Здесь будет логика отправки ответов на сервер
      console.log('Отправка опроса:', {
        surveyId: survey?.id,
        answers: state.answers
      });
      
      // После успешной отправки отмечаем опрос как завершенный
      setState(prev => ({
        ...prev,
        isComplete: true
      }));
      
      // Перенаправляем на страницу благодарности
      router.push(`/survey/${survey?.id}/thank-you`);
      
    } catch (error) {
      console.error('Ошибка при отправке опроса:', error);
    }
  };

  return (
    <SurveyContext.Provider value={{
      survey,
      currentQuestion,
      currentQuestionIndex: state.currentQuestionIndex,
      answers: state.answers,
      progress,
      isLastQuestion,
      goToNextQuestion,
      goToPreviousQuestion,
      setAnswer,
      submitSurvey
    }}>
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  const context = useContext(SurveyContext);
  if (context === undefined) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
}
