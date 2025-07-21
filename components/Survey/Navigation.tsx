"use client";

import React from 'react';

interface NavigationProps {
  canProceed: boolean;
  onNext: () => void;
  onBack?: () => void;
  showBack?: boolean;
}

export function Navigation({ canProceed, onNext, onBack, showBack = false }: NavigationProps) {
  return (
    <div className="w-full flex flex-row gap-4">
      {/* Кнопка Back */}
      {showBack && onBack && (
        <button 
          onClick={onBack} 
          className="
            h-14 rounded-xl font-inter font-medium text-[20px] transition-all cursor-pointer w-1/2
            bg-[#E0E0E0] hover:bg-[#828282] text-[#828282] hover:text-white
          "
        >
          Back
        </button>
      )}
      
      {/* Кнопка Next */}
      <button
        className={`
          h-14 rounded-xl font-inter font-medium text-[20px] transition-all
          ${showBack ? 'w-1/2' : 'w-full'}
          ${canProceed 
            ? 'bg-[#6f4bff] hover:bg-[#6f4bff]/90 cursor-pointer text-white' 
            : 'bg-[#BDBDBD] cursor-not-allowed text-white'}
        `}
        disabled={!canProceed}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
