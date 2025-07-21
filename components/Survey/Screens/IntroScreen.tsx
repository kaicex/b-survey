"use client";

import React from 'react';

interface IntroScreenProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
}

export function IntroScreen({ title, content, imageUrl }: IntroScreenProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Изображение (если есть) */}
      {imageUrl && (
        <div className="mb-6 w-full flex justify-center">
          <img src={imageUrl} alt="Intro image" className="max-w-full" />
        </div>
      )}

      {/* Заголовок */}
      <h1 className="font-inter font-semibold text-[32px] text-[#080a16] text-center mb-6">
        {title}
      </h1>

      {/* Контентная часть с текстом и выделением */}
      <div className="font-inter font-medium text-[20px] text-[#333] leading-[1.6] text-center">
        {content}
      </div>
    </div>
  );
}
