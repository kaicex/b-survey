"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { IntroScreen } from '@/components/Survey/Screens/IntroScreen';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionSixPage() {
  const router = useRouter();

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-seven');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-five');
  };

  return (
    <SurveyPageLayout currentStep={9} totalSteps={25}>
      <IntroScreen 
        title="Noted!"
        imageUrl="/images/03.svg"
        content={
          <p className="font-inter font-medium text-xl text-[#333] leading-[1.6] text-center">
            We&apos;ve acknowledged your areas of expertise. Next, let&apos;s explore your work preferences to find the leads matches for you.
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
