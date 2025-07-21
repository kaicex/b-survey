"use client";

import { SurveyProvider } from '@/contexts/SurveyContext';
import { sampleSurvey } from '@/mocks/sampleSurvey';

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SurveyProvider initialSurvey={sampleSurvey}>
      {children}
    </SurveyProvider>
  );
}
