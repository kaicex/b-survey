"use client";

import React from 'react';
import { useSurvey } from '@/contexts/SurveyContext';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionThreePage() {
  const { answers, setAnswer } = useSurvey();
  const router = useRouter();

  // Данные для третьего вопроса о целях
  const questionData = {
    id: 'goals-motivation',
    title: 'What are your goals with Boomerang?',
    type: 'single-choice' as const,
    options: [
      {
        id: 'extra-income',
        text: 'Extra income',
        value: 'extra-income',
        icon: '💰'
      },
      {
        id: 'work-life-balance',
        text: 'Improve work-life balance',
        value: 'work-life-balance',
        icon: '💼'
      },
      {
        id: 'launch-agency',
        text: 'Launch an agency',
        value: 'launch-agency',
        icon: '🚀'
      },
      {
        id: 'remote-work',
        text: 'Transition to remote work',
        value: 'remote-work',
        icon: '💻'
      },
      {
        id: 'passive-income',
        text: 'Get a passive income',
        value: 'passive-income',
        icon: '👑'
      },
      {
        id: 'digital-products',
        text: 'Switch to digital products',
        value: 'digital-products',
        icon: '🎓'
      }
    ]
  };

  // Получаем сохраненный ответ для этого вопроса
  const savedAnswer = answers[questionData.id];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswer(questionId, answer);
  };

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-four');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-two');
  };

  // Проверяем, есть ли ответ для активации кнопки Next
  const canProceed = Boolean(savedAnswer);

  return (
    <SurveyPageLayout currentStep={6} totalSteps={25}>
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
