"use client";

import React, { useState } from 'react';

interface RatingQuestionProps {
  question: {
    id: string;
    title: string;
    maxRating: number;
  };
  onAnswerChange: (questionId: string, answer: number) => void;
}

export function RatingQuestion({ question, onAnswerChange }: RatingQuestionProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    onAnswerChange(question.id, rating);
  };

  const maxRating = question.maxRating || 5;
  const ratings = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <h1 className="mb-8">{question.title}</h1>
      
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingSelect(rating)}
            onMouseEnter={() => setHoverRating(rating)}
            onMouseLeave={() => setHoverRating(null)}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium
              transition-all duration-200
              ${selectedRating === rating 
                ? 'bg-violet text-white scale-110' 
                : hoverRating && rating <= hoverRating 
                  ? 'bg-violet/20 text-violet' 
                  : 'bg-gray-7 text-gray-1 hover:bg-gray-5'}
            `}
          >
            {rating}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-gray-3 mt-2 px-4">
        <span>Очень плохо</span>
        <span>Отлично</span>
      </div>
    </div>
  );
}
