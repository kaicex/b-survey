"use client";

import React, { useState } from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionTwelvePage() {
  const router = useRouter();
  const [zipcode, setZipcode] = useState<string>('');

  const handleZipcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Разрешаем только цифры и ограничиваем до 5 символов
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipcode(value);
  };

  const handleNext = () => {
    // Переходим к следующему вопросу (пока что на thank-you)
    router.push('/survey/thank-you');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-eleven');
  };

  // Проверяем, введен ли zipcode для активации кнопки Next
  const canProceed = zipcode.length === 5;

  return (
    <SurveyPageLayout currentStep={15} totalSteps={25}>
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[400px]">
        {/* Заголовок */}
        <h1 className="font-inter font-semibold text-3xl text-[#080a16] leading-[1.2] text-center mb-8">
          What's your ZIP code?
        </h1>

        {/* Подзаголовок */}
        <p className="font-inter font-medium text-xl text-[#828282] text-center mb-12">
          We'll match you with local opportunities in your area
        </p>

        {/* Инпут для ZIP кода */}
        <div className="w-full mb-8">
          <input
            type="text"
            value={zipcode}
            onChange={handleZipcodeChange}
            placeholder="Enter ZIP code"
            className="w-full px-6 py-4 text-center font-inter font-medium text-2xl text-[#080a16] bg-white border-2 border-[#E0E0E0] rounded-2xl focus:border-[#6f4bff] focus:outline-none transition-colors"
            maxLength={5}
          />
        </div>

        {/* Дополнительная информация */}
        <p className="font-inter font-normal text-sm text-[#828282] text-center">
          Your ZIP code helps us find the best local leads for you
        </p>
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
