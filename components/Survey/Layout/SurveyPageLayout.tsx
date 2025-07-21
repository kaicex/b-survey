"use client";

import React from 'react';
import { SurveyHeader } from '../SurveyHeader';

interface SurveyPageLayoutProps {
  currentStep: number;
  totalSteps: number;
  children: React.ReactNode;
  showFooter?: boolean;
}

export function SurveyPageLayout({ 
  currentStep, 
  totalSteps, 
  children, 
  showFooter = true 
}: SurveyPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Основной контейнер */}
      <div className="flex flex-col min-h-screen">
        {/* Шапка с логотипом и прогрессом */}
        <div className="bg-white py-4 sticky top-0 z-10">
          <SurveyHeader 
            currentQuestion={currentStep} 
            totalQuestions={totalSteps}
          />
        </div>

        {/* Основное содержание */}
        <div className="flex-1">
          <div className="container mx-auto max-w-[600px] pt-8">
            {children}
          </div>
        </div>
      </div>

      {/* Футер с текстом согласия */}
      {showFooter && (
        <footer className="container mx-auto max-w-[600px] py-4 px-0">
          <p className="font-inter font-normal text-[#BDBDBD] text-[12px] leading-[1.2]">
            By continuing you agree with terms of service and privacy policy
          </p>
        </footer>
      )}
    </div>
  );
}
