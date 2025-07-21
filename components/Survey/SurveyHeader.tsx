"use client";

import React from 'react';
import Link from 'next/link';

interface SurveyHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
}

// Временно используем текст вместо изображения логотипа
// const imgColor = "http://localhost:3845/assets/cce412f1e2e8a38ef5b5f079311ad39a1426f325.png";

export function SurveyHeader({ currentQuestion, totalQuestions }: SurveyHeaderProps) {
  // Для большого количества вопросов можем ограничить количество долек
  const visibleSegments = Math.min(totalQuestions, 22);
  
  return (
    <div className="container mx-auto max-w-[600px] px-0">
      <div className="flex flex-row items-center justify-between w-full">
        <Link href="/survey/intro" className="cursor-pointer">
          <div className="text-[#828282] text-[20px] font-bold hover:text-[#6f4bff] transition-colors">Boomerang</div>
        </Link>
        <div className="flex flex-row gap-2 items-center">
          <div className="font-inter font-normal text-[#828282] text-[14px]">{currentQuestion}/{totalQuestions}</div>
          <div className="w-[220px] h-3 flex items-center gap-[2px]">
            {Array.from({ length: visibleSegments }).map((_, index) => {
              // Определяем активна ли долька
              const isActive = index < currentQuestion;
              
              return (
                <div 
                  key={index} 
                  className={`h-full flex-1 transition-colors ${isActive ? 'bg-[#6f4bff]' : 'bg-[#E0E0E0]'} ${index === 0 ? 'rounded-l-sm' : ''} ${index === visibleSegments - 1 ? 'rounded-r-sm' : ''}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
