"use client";

import React, { useState } from 'react';

export interface Option {
  id: string;
  text: string;
  value: string;
  icon?: string; // Добавляем поле для иконки
}

interface SingleChoiceQuestionProps {
  question: {
    id: string;
    title: string;
    options: Option[];
  };
  onAnswerChange: (questionId: string, answer: string) => void;
  initialValue?: string; // Добавляем возможность передать начальное значение
}

export function SingleChoiceQuestion({ question, onAnswerChange, initialValue }: SingleChoiceQuestionProps) {
  // Если есть initialValue, находим ID опции с таким значением
  const initialOptionId = initialValue 
    ? question.options.find(opt => opt.value === initialValue)?.id || null
    : null;
  
  const [selectedOption, setSelectedOption] = useState<string | null>(initialOptionId);
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    // Находим выбранный option и передаем его value в обработчик
    const selectedOptionValue = question.options.find(opt => opt.id === optionId)?.value || '';
    onAnswerChange(question.id, selectedOptionValue);
  };

  return (
    <div className="w-full">
      {/* Заголовок вопроса */}
      <h1 className="font-inter font-medium text-[#080a16] text-[20px] leading-[1.2] mb-4">
        {question.title}
      </h1>
      
      {/* Варианты ответов в сетке 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        {question.options.map((option) => (
          <div 
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`
              flex flex-col items-center p-6 py-8 rounded-xl border-[1px] cursor-pointer transition-all
              ${selectedOption === option.id 
                ? 'border-[#6f4bff] bg-[#F8F7FF]' 
                : 'border-[#E0E0E0] hover:border-[#828282] bg-white'}
            `}
          >
            {/* Иконка */}
            <div className="mb-3 flex items-center justify-center">
              {/* Используем эмодзи как в дизайне */}
              <div className="text-4xl">{option.icon}</div>
            </div>
            
            {/* Текст опции */}
            <span className={`font-inter font-medium text-[20px] leading-[1.2] text-center ${selectedOption === option.id ? 'text-[#6f4bff]' : 'text-[#080a16]'}`}>
              {option.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
