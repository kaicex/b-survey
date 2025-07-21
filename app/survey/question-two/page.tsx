"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionTwoPage() {
  const router = useRouter();

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-three');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-one');
  };

  return (
    <SurveyPageLayout currentStep={5} totalSteps={25}>
      {/* Заголовок */}
      <h1 className="font-inter font-semibold text-3xl text-[#080a16] leading-[1.2] mb-[18px] text-left max-w-2xl mx-auto">
        Stable growth
      </h1>
      
      {/* Подзаголовок */}
      <p className="font-inter font-medium text-xl text-[#080a16] leading-[1.6] mb-14 text-left max-w-2xl mx-auto">
        Devoting 4-8 hours weekly unlocks <span className="text-[#6f4bff]">4-8 new clients</span> per month for you, adding <span className="text-[#6f4bff]">$400-$1,000</span> new recurring income.
      </p>
      
      {/* График */}
      <div className="w-full max-w-2xl mx-auto mb-16">
        <img 
          src="/images/graph-stable.png" 
          alt="Stable growth graph showing income progression from $2.5k to $9.6k over 12 months" 
          className="w-full h-auto"
        />
      </div>

      {/* Навигация */}
      <div className="mt-10">
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
