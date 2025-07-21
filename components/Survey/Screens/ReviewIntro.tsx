"use client";

import React from 'react';
import { Navigation } from '@/components/Survey/Navigation';

interface ReviewIntroProps {
  onNext: () => void;
  onBack: () => void;
}

export function ReviewIntro({ onNext, onBack }: ReviewIntroProps) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4 pt-9">
      {/* 1. Заголовок */}
      <h1 className="font-inter font-semibold text-3xl text-[#080a16] mb-6 text-center max-w-2xl">
        Partners from all the 50 states already trust Boomerang.
      </h1>
      
      {/* 2. Блок с цитатой и лого Yahoo - стиль из question-seven */}
      <div className="bg-[#E8E3FF] rounded-2xl px-8 py-6 mb-12 max-w-2xl mx-auto w-full">
        <p className="font-inter font-semibold text-xl text-[#080a16] text-center leading-[1.4] relative">
          <span className="text-[#6f4bff]">&ldquo;</span>Boomerang gave me a stable<br />passive income source<span className="text-[#6f4bff]">&rdquo;</span>
        </p>
        <div className="flex justify-center mt-4">
          <img src="/images/yahoo.svg" alt="Yahoo" className="h-10" />
        </div>
      </div>
      
      {/* 3. Рейтинг со звездами и brances.png по бокам */}
      <div className="flex items-center gap-8 mb-8 w-full max-w-xl justify-center">
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
          <div className="flex items-end gap-3 mb-2">
            <span className="font-inter font-medium text-5xl text-[#080a16] tracking-tight">4.8</span>
            <div className="font-inter font-medium text-base text-[#080a16] leading-tight">
              <p className="m-0">rating from</p>
              <p className="m-0">2082 reviews</p>
            </div>
          </div>
          <div className="flex">
            <span className="text-2xl tracking-wider">⭐⭐⭐⭐⭐</span>
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
      
      {/* 4. Логотипы - уменьшенный размер */}
      <div className="flex justify-center w-full mb-4">
        <img src="/images/Logos.svg" alt="Logos" className="max-w-full h-12" />
      </div>
      
      {/* 5. Backed и лого Semrush */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-inter font-medium text-xl text-[#080a16]">Backed</span>
        <img src="/images/semrush_logo.svg" alt="Semrush" className="h-10" />
      </div>

      {/* Навигация */}
      <div className="w-full mt-6">
        <Navigation canProceed={true} onNext={onNext} onBack={onBack} showBack={true} />
      </div>
    </div>
  );
}
