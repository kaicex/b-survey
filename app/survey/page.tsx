"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SurveyPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Перенаправляем на первый экран интро
    router.replace('/survey/intro');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Перенаправление...</div>
    </div>
  );
}
