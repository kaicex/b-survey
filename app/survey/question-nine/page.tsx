"use client";

import React, { useState } from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionNinePage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Варианты ответов
  const options = [
    { id: 'great', text: 'Great', icon: '👍' },
    { id: 'bad', text: 'Bad', icon: '👎' },
    { id: 'exploring', text: 'Still exploring', icon: '🤔' }
  ];

  // Реакции на выбор
  const reactions = {
    great: "Perfect! Remote work offers incredible flexibility and opens up opportunities worldwide. We can help you connect with clients who value remote collaboration and results over location.",
    bad: "We understand that in-person connections can be valuable too. Many successful partnerships combine both remote efficiency and occasional face-to-face meetings when needed.",
    exploring: "That's a smart approach! The best work style often depends on the project and client. Let's help you find opportunities that match your preferred working arrangements."
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-ten');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-eight');
  };

  // Проверяем, есть ли выбранный вариант для активации кнопки Next
  const canProceed = selectedOption !== '';

  return (
    <SurveyPageLayout currentStep={12} totalSteps={25}>
      <div className="w-full max-w-2xl mx-auto">
        {/* Вопрос */}
        <div className="mb-8">
          <p className="font-inter font-medium text-xl text-[#828282] text-left mb-4">
            Do you relate to the following?
          </p>
          <h1 className="font-inter font-semibold text-3xl text-[#080a16] leading-[1.2] text-left">
            I'm looking for remote work style rather than local in-person one
          </h1>
        </div>

        {/* Варианты ответов */}
        <div className="flex gap-4 mb-8">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            
            return (
              <button 
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  flex flex-col items-center gap-3 p-6 rounded-2xl cursor-pointer transition-all border-[1px] flex-1
                  ${isSelected 
                    ? 'border-[#6f4bff] bg-[#F8F7FF]' 
                    : 'border-transparent bg-white hover:bg-gray-50'}
                `}
              >
                <span className="text-4xl">{option.icon}</span>
                <span className={`font-inter font-medium text-xl leading-[1.2] text-center ${isSelected ? 'text-[#6f4bff]' : 'text-[#080a16]'}`}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Зарезервированное место для реакции */}
        <div className="min-h-[180px] mb-8 relative">
          {selectedOption && (
            <div className="relative">
              {/* Указатель от выбранного блока */}
              <div 
                className={`absolute -top-3 w-6 h-6 bg-[#E8E3FF] transform rotate-45 animate-fadeIn ${
                  selectedOption === 'great' ? 'left-[16.66%] -translate-x-1/2' :
                  selectedOption === 'bad' ? 'left-1/2 -translate-x-1/2' :
                  'left-[83.33%] -translate-x-1/2'
                }`}
              />
              <div className="bg-[#E8E3FF] rounded-2xl px-6 py-5 animate-fadeIn relative z-10">
                <p className="font-inter font-medium text-xl text-[#080a16] leading-[1.6] text-left">
                  {reactions[selectedOption as keyof typeof reactions]}
                </p>
              </div>
            </div>
          )}
        </div>
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </SurveyPageLayout>
  );
}
