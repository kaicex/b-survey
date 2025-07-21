"use client";

import React, { useState } from 'react';

interface TextInputQuestionProps {
  question: {
    id: string;
    title: string;
    placeholder?: string;
    maxLength?: number;
  };
  onAnswerChange: (questionId: string, answer: string) => void;
}

export function TextInputQuestion({ question, onAnswerChange }: TextInputQuestionProps) {
  const [text, setText] = useState<string>('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    
    if (question.maxLength && value.length > question.maxLength) {
      return;
    }
    
    setText(value);
    onAnswerChange(question.id, value);
  };

  return (
    <div className="w-full">
      <h1 className="mb-8">{question.title}</h1>
      
      <div className="mt-4">
        <textarea
          className="w-full p-4 min-h-[120px] rounded-xl border border-gray-5 focus:border-violet focus:ring focus:ring-violet focus:ring-opacity-50 outline-none resize-none"
          placeholder={question.placeholder || 'Введите свой ответ здесь...'}
          value={text}
          onChange={handleInputChange}
        />
        
        {question.maxLength && (
          <div className="mt-2 text-right text-sm text-gray-3">
            {text.length}/{question.maxLength}
          </div>
        )}
      </div>
    </div>
  );
}
