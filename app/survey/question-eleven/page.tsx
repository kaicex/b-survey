"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { IntroScreen } from '@/components/Survey/Screens/IntroScreen';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionElevenPage() {
  const router = useRouter();

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-twelve');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-ten');
  };

  return (
    <SurveyPageLayout currentStep={14} totalSteps={25}>
      <IntroScreen 
        title="You're qualified for the partner program"
        imageUrl="/images/04.svg"
        content={
          <p className="font-inter font-medium text-xl text-[#333] leading-[1.6] text-center">
            Your Solopreneur experience is exactly what we are looking for. Working remotely with local Food & Beverage inbound leads, devoting{" "}
            <span className="text-[#6f4bff] font-semibold">2-4 hours/week</span> unlocks{" "}
            <span className="text-[#6f4bff] font-semibold">4-8 new clients per month</span> for you, adding{" "}
            <span className="text-[#6f4bff] font-semibold">$400–$1,000</span> new stable recurring income.
            <br /><br />
            We are ready to sign the contract and start sharing leads with you.
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
