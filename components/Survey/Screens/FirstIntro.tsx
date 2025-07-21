"use client";

import React from 'react';

interface FirstIntroProps {
  children?: React.ReactNode;
}

export function FirstIntro({ children }: FirstIntroProps) {
  return (
    <div className="mb-16 flex">
      <div className="w-1 bg-[#6f4bff] mr-4 self-stretch rounded-sm"></div>
      <p className="text-[#333] text-[20px] leading-7 font-medium">
        As a SaaS platform, we have requests from local businesses for implementation. We're hiring partners to{' '}
        <span className="text-[#6f4bff] font-medium">onboard those clients</span> and{' '}
        <span className="text-[#6f4bff] font-medium">get recurring revenue</span> for it.
      </p>
    </div>
  );
}
