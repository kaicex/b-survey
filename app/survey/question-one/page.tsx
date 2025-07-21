"use client";

import React from 'react';
import { useSurvey } from '@/contexts/SurveyContext';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionOnePage() {
  const { survey, currentQuestion, answers, setAnswer } = useSurvey();
  const router = useRouter();

  // Данные для первого вопроса о часах онбординга
  const questionData = {
    id: 'hours-onboarding',
    title: 'How many hours can you dedicate to onboard new clients?',
    type: 'single-choice' as const,
    options: [
      {
        id: 'less-than-2',
        text: '<2 hours / week',
        value: 'less-than-2-hours',
        icon: '⏳'
      },
      {
        id: '2-to-4',
        text: '2-4 hours / week',
        value: '2-4-hours',
        icon: '⏰'
      },
      {
        id: '4-to-8',
        text: '4-8 hours / week',
        value: '4-8-hours',
        icon: '⌚'
      },
      {
        id: 'more-than-8',
        text: '> 8 hours / week',
        value: 'more-than-8-hours',
        icon: '📅'
      }
    ]
  };

  // Получаем сохраненный ответ для этого вопроса
  const savedAnswer = answers[questionData.id];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswer(questionId, answer);
  };

  const handleNext = () => {
    // Переходим к следующему вопросу или странице
    router.push('/survey/question-two');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущей странице (review-intro)
    router.push('/survey/review-intro');
  };

  // Проверяем, есть ли ответ для активации кнопки Next
  const canProceed = Boolean(savedAnswer);

  return (
    <SurveyPageLayout currentStep={4} totalSteps={25}>
      {/* Заголовок вопроса */}
      <h1 className="font-inter font-semibold text-3xl text-[#080a16] leading-[1.2] mb-14 text-left max-w-2xl mx-auto">
        {questionData.title}
      </h1>
      
      {/* Варианты ответов в одну колонку */}
      <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
        {questionData.options.map((option) => {
          const isSelected = typeof savedAnswer === 'string' && 
            questionData.options.find(opt => opt.value === savedAnswer)?.id === option.id;
          
          return (
            <div 
              key={option.id}
              onClick={() => handleAnswerChange(questionData.id, option.value)}
              className={`
                flex items-center justify-between p-6 rounded-xl cursor-pointer transition-all border-[1px]
                ${isSelected 
                  ? 'border-[#6f4bff] bg-[#F8F7FF]' 
                  : 'border-transparent bg-white hover:bg-gray-50'}
              `}
            >
              <span className={`font-inter font-medium text-xl leading-[1.2] ${isSelected ? 'text-[#6f4bff]' : 'text-[#080a16]'}`}>
                {option.text}
              </span>
              <div className="text-3xl">{option.icon}</div>
            </div>
          );
        })}
      </div>

      {/* Навигация */}
      <div className="mt-10">
        <Navigation 
          canProceed={canProceed}
          onNext={handleNext}
          onBack={handleBack}
          showBack={true}
        />
      </div>
    </SurveyPageLayout>
  );
}
