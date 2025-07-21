"use client";

import React, { useState } from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { FirstIntro } from '@/components/Survey/Screens/FirstIntro';
import { SingleChoiceQuestion } from '@/components/Survey/QuestionTypes/SingleChoiceQuestion';
import { Navigation } from '@/components/Survey/Navigation';
import { useSurvey } from '@/contexts/SurveyContext';
import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const { survey, currentQuestion, answers, setAnswer } = useSurvey();
  const router = useRouter();
  // Инициализируем состояние наличия ответа на основе сохраненных ответов
  const [hasAnswer, setHasAnswer] = useState(
    currentQuestion && answers[currentQuestion.id] ? true : false
  );

  console.log('IntroPage render:', { survey, currentQuestion, answers });

  const handleNext = () => {
    router.push('/survey/second-intro');
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    console.log('Answer changed:', questionId, answer);
    setAnswer(questionId, answer);
    setHasAnswer(true);
  };

  if (!survey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка опроса... (no survey)</div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка опроса... (no currentQuestion)</div>
      </div>
    );
  }

  if (currentQuestion.type !== 'single') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Неправильный тип вопроса: {currentQuestion.type}</div>
      </div>
    );
  }

  if (!currentQuestion.options) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Нет вариантов ответов</div>
      </div>
    );
  }

  return (
    <SurveyPageLayout currentStep={1} totalSteps={25}>
      <FirstIntro />
      
      {/* Вопрос */}
      <SingleChoiceQuestion 
        question={currentQuestion}
        onAnswerChange={handleAnswerChange}
        initialValue={answers[currentQuestion.id] as string}
      />

      {/* Навигация */}
      <div className="mt-5">
        <Navigation 
          canProceed={hasAnswer}
          onNext={handleNext}
          onBack={() => {}}
          showBack={false}
        />
      </div>
    </SurveyPageLayout>
  );
}
