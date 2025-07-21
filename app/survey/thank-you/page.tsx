"use client";

import React from 'react';
import Link from 'next/link';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { useSurvey } from '@/contexts/SurveyContext';

export default function ThankYouPage() {
  const { survey } = useSurvey();

  if (!survey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка...</div>
      </div>
    );
  }

  return (
    <SurveyPageLayout 
      currentStep={25} 
      totalSteps={25}
    >
      <div className="w-full flex flex-col items-center">
        {/* Иконка успеха */}
        <div className="w-20 h-20 rounded-full bg-[#6f4bff] bg-opacity-10 flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6f4bff]">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h1 className="font-inter font-semibold text-[32px] text-[#080a16] text-center mb-6">
          Спасибо за участие!
        </h1>
        
        <p className="font-inter font-medium text-[20px] text-[#333] leading-[1.6] text-center mb-8">
          Ваши ответы были успешно сохранены. Мы ценим ваше мнение и время, которое вы уделили нашему опросу.
        </p>
        
        {/* Кнопка возврата на главную */}
        <Link href="/" className="w-full max-w-xs">
          <button className="w-full h-14 rounded-xl font-inter font-medium text-[20px] bg-[#6f4bff] hover:bg-[#6f4bff]/90 cursor-pointer text-white transition-all">
            На главную
          </button>
        </Link>
      </div>
    </SurveyPageLayout>
  );
}
