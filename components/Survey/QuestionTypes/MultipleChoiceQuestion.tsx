"use client";

import React, { useState } from 'react';
import { Option } from './SingleChoiceQuestion';

interface MultipleChoiceQuestionProps {
  question: {
    id: string;
    title: string;
    options: Option[];
  };
  onAnswerChange: (questionId: string, answers: string[]) => void;
}

export function MultipleChoiceQuestion({ question, onAnswerChange }: MultipleChoiceQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => {
      const isSelected = prev.includes(optionId);
      let newSelected: string[];
      
      if (isSelected) {
        // Убираем опцию, если она уже выбрана
        newSelected = prev.filter(id => id !== optionId);
      } else {
        // Добавляем опцию, если она ещё не выбрана
        newSelected = [...prev, optionId];
      }
      
      // Получаем значения выбранных опций
      const selectedValues = question.options
        .filter(opt => newSelected.includes(opt.id))
        .map(opt => opt.value);
      
      // Передаем значения в обработчик
      onAnswerChange(question.id, selectedValues);
      
      return newSelected;
    });
  };

  return (
    <div className="w-full">
      <h1 className="mb-8">{question.title}</h1>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <div 
            key={option.id}
            onClick={() => handleOptionToggle(option.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer
              ${selectedOptions.includes(option.id) 
                ? 'border-violet bg-violet bg-opacity-5' 
                : 'border-gray-5 hover:border-gray-3'}`}
          >
            <div className="flex items-center">
              <div 
                className={`w-6 h-6 rounded-md flex items-center justify-center mr-3 border
                  ${selectedOptions.includes(option.id) 
                    ? 'border-violet bg-violet' 
                    : 'border-gray-3'}`}
              >
                {selectedOptions.includes(option.id) && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span>{option.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
