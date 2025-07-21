"use client";

import React, { useState } from 'react';

interface BooleanQuestionProps {
  question: {
    id: string;
    title: string;
    yesLabel?: string;
    noLabel?: string;
  };
  onAnswerChange: (questionId: string, answer: boolean | null) => void;
}

export function BooleanQuestion({ question, onAnswerChange }: BooleanQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  
  const handleAnswerSelect = (answer: boolean) => {
    setSelectedAnswer(answer);
    onAnswerChange(question.id, answer);
  };

  const yesLabel = question.yesLabel || 'Да';
  const noLabel = question.noLabel || 'Нет';

  return (
    <div className="w-full">
      <h1 className="mb-8">{question.title}</h1>
      
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleAnswerSelect(true)}
          className={`
            flex-1 py-4 px-6 rounded-xl border transition-all
            ${selectedAnswer === true
              ? 'border-violet bg-violet bg-opacity-5'
              : 'border-gray-5 hover:border-gray-3'}
          `}
        >
          <div className="flex items-center justify-center">
            <div 
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 border
                ${selectedAnswer === true
                  ? 'border-violet'
                  : 'border-gray-3'}`}
            >
              {selectedAnswer === true && (
                <div className="w-3 h-3 rounded-full bg-violet"></div>
              )}
            </div>
            <span className="text-lg">{yesLabel}</span>
          </div>
        </button>
        
        <button
          onClick={() => handleAnswerSelect(false)}
          className={`
            flex-1 py-4 px-6 rounded-xl border transition-all
            ${selectedAnswer === false
              ? 'border-violet bg-violet bg-opacity-5'
              : 'border-gray-5 hover:border-gray-3'}
          `}
        >
          <div className="flex items-center justify-center">
            <div 
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 border
                ${selectedAnswer === false
                  ? 'border-violet'
                  : 'border-gray-3'}`}
            >
              {selectedAnswer === false && (
                <div className="w-3 h-3 rounded-full bg-violet"></div>
              )}
            </div>
            <span className="text-lg">{noLabel}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
