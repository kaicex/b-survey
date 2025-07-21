"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function QuestionSevenPage() {
  const router = useRouter();

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-eight');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-six');
  };

  return (
    <SurveyPageLayout currentStep={10} totalSteps={25}>
      <div className="w-full flex flex-col items-center pt-8">
        {/* Логотип CNBC */}
        <div className="mb-8 w-full flex justify-center">
          <Image 
            src="/cnbc-logo.svg" 
            alt="CNBC Logo" 
            width={120} 
            height={60}
            className="h-auto"
          />
        </div>

        {/* Цитата в фиолетовом блоке */}
        <div className="bg-[#E8E3FF] rounded-2xl px-8 py-6 mb-8 max-w-2xl mx-auto">
          <p className="font-inter font-semibold text-xl text-[#080a16] text-center leading-[1.4]">
            "89% of small businesses hire outside partners to launch loyalty technology"
          </p>
        </div>

        {/* Основной текст */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="font-inter font-medium text-xl text-[#333] leading-[1.6] text-center">
            Local merchants rarely keep in-house tech staff. They pay integrators to set up and maintain loyalty platforms— exactly the gap Boomerang helps you fill (and profit from).
          </p>
        </div>

        {/* Источник */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="font-inter font-normal text-sm text-[#828282] leading-[1.4] text-center">
            Based on a CNBC/Momentive survey of 2 300 U.S. SMB owners, Q4 2024.
          </p>
        </div>
      </div>

      {/* Навигация */}
      <div className="mt-4">
        <Navigation 
          canProceed={true}
          onNext={handleNext}
          onBack={handleBack}
          showBack={true}
        />
      </div>
    </SurveyPageLayout>
  );
}
