"use client";

import React from 'react';
import { Question as QuestionType, SurveyAnswer } from '@/types/survey';
import { SingleChoiceQuestion } from './QuestionTypes/SingleChoiceQuestion';
import { MultipleChoiceQuestion } from './QuestionTypes/MultipleChoiceQuestion';
import { TextInputQuestion } from './QuestionTypes/TextInputQuestion';
import { RatingQuestion } from './QuestionTypes/RatingQuestion';
import { BooleanQuestion } from './QuestionTypes/BooleanQuestion';

interface QuestionProps {
  question: QuestionType | null;
  onAnswerChange: (questionId: string, answer: SurveyAnswer) => void;
}

export function Question({ question, onAnswerChange }: QuestionProps) {
  // Проверяем, что вопрос существует
  if (!question) {
    return <div>Загрузка вопроса...</div>;
  }

  // Отображаем соответствующий компонент в зависимости от типа вопроса
  switch(question.type) {
    case 'single':
      return (
        <SingleChoiceQuestion 
          question={question} 
          onAnswerChange={(questionId, answer) => onAnswerChange(questionId, answer)} 
        />
      );
    
    case 'multiple':
      return (
        <MultipleChoiceQuestion 
          question={question} 
          onAnswerChange={(questionId, answers) => onAnswerChange(questionId, answers)} 
        />
      );
    
    case 'text':
      return (
        <TextInputQuestion 
          question={question} 
          onAnswerChange={(questionId, answer) => onAnswerChange(questionId, answer)} 
        />
      );
    
    case 'rating':
      return (
        <RatingQuestion 
          question={question} 
          onAnswerChange={(questionId, rating) => onAnswerChange(questionId, rating)} 
        />
      );
    
    case 'boolean':
      return (
        <BooleanQuestion 
          question={question} 
          onAnswerChange={(questionId, answer) => onAnswerChange(questionId, answer)} 
        />
      );
    
    default:
      return <div>Неизвестный тип вопроса</div>;
  }
}
