"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { SecondIntro } from '@/components/Survey/Screens/SecondIntro';
import { useSurvey } from '@/contexts/SurveyContext';
import { useRouter } from 'next/navigation';

export default function SecondIntroPage() {
  const { survey } = useSurvey();
  const router = useRouter();

  const handleNext = () => {
    router.push('/survey/review-intro');
  };

  const handleBack = () => {
    router.push('/survey/intro');
  };

  if (!survey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка опроса...</div>
      </div>
    );
  }

  return (
    <SurveyPageLayout currentStep={2} totalSteps={25}>
      <SecondIntro onNext={handleNext} onBack={handleBack} />
    </SurveyPageLayout>
  );
}
