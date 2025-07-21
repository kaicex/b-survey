"use client";

import React from 'react';
import { IntroScreen } from './IntroScreen';
import { Navigation } from '@/components/Survey/Navigation';

interface SecondIntroProps {
  onNext: () => void;
  onBack: () => void;
}

export function SecondIntro({ onNext, onBack }: SecondIntroProps) {
  return (
    <div className="w-full">
      <IntroScreen 
        title="Yay, glad you're here!"
        imageUrl="/images/01.svg"
        content={
          <p className="font-inter font-medium text-[20px] text-[#333] leading-[1.6] text-center">
            Your <span className="text-[#333]">Solopreneur</span> experience is{" "}
            <span className="text-[#6f4bff]">exactly what we are searching for</span>.
            {" "}As our data shows warm leads convert better by experienced{" "}
            <span className="text-[#333]">solopreneurs</span> who have sales skills. 
            We're thrilled you're here; a few more questions and we'll match you with these leads.
          </p>
        }
      />
      
      {/* Кнопки навигации */}
      <div className="mt-10">
        <Navigation 
          canProceed={true} 
          onNext={onNext}
          onBack={onBack}
          showBack={true}
        />
      </div>
    </div>
  );
}
