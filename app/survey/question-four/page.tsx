"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { IntroScreen } from '@/components/Survey/Screens/IntroScreen';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionFourPage() {
  const router = useRouter();

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-five');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-three');
  };

  return (
    <SurveyPageLayout currentStep={7} totalSteps={25}>
      <IntroScreen 
        title="Thanks being honest"
        imageUrl="/images/02.svg"
        content={
          <p className="font-inter font-medium text-xl text-[#333] leading-[1.6] text-center">
            Now, let&apos;s dive into your expertise and preferences to find the leads that fit for you
          </p>
        }
      />
      
      {/* Кнопки навигации */}
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
