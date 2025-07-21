"use client";

import React, { useState } from 'react';
import { SurveyPageLayout } from '@/components/Survey/Layout/SurveyPageLayout';
import { Navigation } from '@/components/Survey/Navigation';
import { useRouter } from 'next/navigation';

export default function QuestionFivePage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Данные для вопроса о категориях бизнеса
  const categories = [
    { id: 'local-businesses', text: 'Local Businesses', icon: '🏪' },
    { id: 'saas-companies', text: 'SaaS Companies', icon: '💻' },
    { id: 'food-beverage', text: 'Food & Beverage', icon: '🍔' },
    { id: 'beauty-wellness', text: 'Beauty & Wellness', icon: '💅' },
    { id: 'restaurants', text: 'Restaurants', icon: '🍽️' },
    { id: 'coffee-shops', text: 'Coffee Shops', icon: '☕' },
    { id: 'gym', text: 'Gym', icon: '🏋️' },
    { id: 'hair-salons', text: 'Hair Salons', icon: '💇' },
    { id: 'retail', text: 'Retail', icon: '🛍️' },
    { id: 'ecommerce', text: 'E-commerce', icon: '📦' },
    { id: 'hospitality', text: 'Hospitality', icon: '🏨' },
    { id: 'travel', text: 'Travel', icon: '✈️' },
    { id: 'medicine', text: 'Medicine', icon: '🏥' },
    { id: 'dental-clinics', text: 'Dental Clinics', icon: '🦷' },
    { id: 'med-spas', text: 'Med Spas', icon: '👑' },
    { id: 'mlm', text: 'MLM', icon: '🔗' },
    { id: 'automotive', text: 'Automotive', icon: '🚗' },
    { id: 'education-training', text: 'Education & Training', icon: '🎓' },
    { id: 'professional-services', text: 'Professional Services', icon: '💼' },
    { id: 'franchise-brands', text: 'Franchise Brands', icon: '🏪' },
    { id: 'channel-partner-sales', text: 'Channel & Partner Sales', icon: '🤝' },
    { id: 'other-niche', text: 'Other / Niche', icon: '✨' }
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleNext = () => {
    // Переходим к следующему вопросу
    router.push('/survey/question-six');
  };

  const handleBack = () => {
    // Возвращаемся к предыдущему вопросу
    router.push('/survey/question-four');
  };

  // Проверяем, есть ли выбранные категории для активации кнопки Next
  const canProceed = selectedCategories.length > 0;

  return (
    <SurveyPageLayout currentStep={8} totalSteps={25}>
      {/* Заголовок вопроса */}
      <h1 className="font-inter font-semibold text-3xl text-[#080a16] leading-[1.2] mb-14 text-left max-w-2xl mx-auto">
        Which industries do you have experience?
      </h1>
      
      {/* Категории как option buttons */}
      <div className="flex flex-wrap gap-3 max-w-4xl mx-auto w-full mb-16 justify-start">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <div 
              key={category.id}
              onClick={() => handleCategoryToggle(category.id)}
              className={`
                inline-flex items-center gap-2 px-6 py-1.5 rounded-full cursor-pointer transition-all border-[1px]
                ${isSelected 
                  ? 'border-[#6f4bff] bg-[#F8F7FF]' 
                  : 'border-transparent bg-white hover:bg-gray-50'}
              `}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className={`font-inter font-medium text-base leading-[1.2] ${isSelected ? 'text-[#6f4bff]' : 'text-[#080a16]'}`}>
                {category.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Навигация */}
      <div className="mt-10">
        <Navigation 
          canProceed={canProceed}
          onNext={handleNext}
          onBack={handleBack}
          showBack={true}
        />
      </div>
    </SurveyPageLayout>
  );
}
