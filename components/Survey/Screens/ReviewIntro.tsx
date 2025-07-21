"use client";

import React from 'react';
import { Navigation } from '@/components/Survey/Navigation';

interface ReviewIntroProps {
  onNext: () => void;
  onBack: () => void;
}

export function ReviewIntro({ onNext, onBack }: ReviewIntroProps) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4">
      {/* 1. Заголовок */}
      <h1 className="font-inter font-semibold text-[32px] text-[#080a16] mb-12 text-center max-w-2xl">
        Partners from all the 50 states already trust Boomerang.
      </h1>
      
      {/* 2. Блок с цитатой и лого Yahoo */}
      <div className="w-full max-w-xl bg-[#F8F7FF] border border-[#E0E0E0] rounded-xl p-8 relative mb-12">
        <p className="font-inter font-medium text-[22px] text-[#333] leading-[1.5] text-center px-6 mb-8">
          &ldquo;Boomerang gave me a stable passive income source&rdquo;
        </p>
        <div className="flex justify-center">
          <img src="/images/yahoo.svg" alt="Yahoo" className="h-12" />
        </div>
      </div>
      
      {/* 2.5. Аватары отзывов */}
      <div className="w-full max-w-md mb-8 flex justify-center">
        <img src="/images/reviews.svg" alt="Reviews avatars" className="max-w-full" />
      </div>
      
      {/* 3. Рейтинг со звездами и brances.png по бокам */}
      <div className="flex items-center gap-8 mb-14 w-full max-w-xl justify-center">
        {/* Левое изображение (отзеркаленное) */}
        <div className="w-24 h-24 relative overflow-visible mix-blend-multiply">
          <img 
            src="/images/brances.png" 
            alt="Branch" 
            className="absolute w-full h-full object-contain transform scale-x-[-1]" 
            style={{ objectPosition: 'center' }}
          />
        </div>
        
        {/* Рейтинг */}
        <div className="flex flex-col items-center">
          <div className="flex items-end gap-2 mb-3">
            <span className="font-inter font-semibold text-[36px] text-[#080a16] leading-[1.1]">4.8</span>
            <div className="font-inter font-medium text-[16px] text-[#080a16] leading-[1.2]">
              <p className="m-0">rating from</p>
              <p className="m-0">2082 reviews</p>
            </div>
          </div>
          <div className="flex">
            <span className="text-3xl">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        
        {/* Правое изображение (обычное) */}
        <div className="w-24 h-24 relative overflow-visible mix-blend-multiply">
          <img 
            src="/images/brances.png" 
            alt="Branch" 
            className="absolute w-full h-full object-contain" 
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
      
      {/* 4. Логотипы */}
      <div className="flex justify-center w-full mb-14">
        <img src="/images/Logos.svg" alt="Logos" className="max-w-full h-16" />
      </div>
      
      {/* 5. Backed и лого Semrush */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-inter font-medium text-[22px] text-[#080a16]">Backed</span>
        <img src="/images/semrush_logo.svg" alt="Semrush" className="h-12" />
      </div>

      {/* Навигация */}
      <div className="w-full mt-6">
        <Navigation canProceed={true} onNext={onNext} onBack={onBack} showBack={true} />
      </div>
    </div>
  );
}
