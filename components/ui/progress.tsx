"use client"

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface SurveyProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
}

const SurveyProgress = ({ 
  currentQuestion, 
  totalQuestions,
  className 
}: SurveyProgressProps) => {
  // Рассчитываем процент завершения
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-small text-gray-3">
        {currentQuestion}/{totalQuestions}
      </div>
      <ProgressBar value={progressPercentage} className={className} />
    </div>
  );
};

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-[280px] overflow-hidden rounded-full bg-gray-5", /* Размер и фон согласно ТЗ */
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-violet transition-all" /* Цвет согласно ТЗ */
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { SurveyProgress, ProgressBar };
