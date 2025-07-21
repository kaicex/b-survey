"use client";

import React from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { ReviewIntro } from '@/components/Survey/Screens/ReviewIntro';
import { useSurvey } from '@/contexts/SurveyContext';
import { useRouter } from 'next/navigation';

export default function ReviewIntroPage() {
  const { survey } = useSurvey();
  const router = useRouter();

  const handleNext = () => {
    router.push('/survey/question-one');
  };

  const handleBack = () => {
    router.push('/survey/second-intro');
  };

  if (!survey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка опроса...</div>
      </div>
    );
  }

  return (
    <SurveyPageLayout currentStep={3} totalSteps={25}>
      <ReviewIntro onNext={handleNext} onBack={handleBack} />
    </SurveyPageLayout>
  );
}
