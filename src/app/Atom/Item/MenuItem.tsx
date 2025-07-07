'use client'

import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
  fontClass?: string;
};

export default function MenuItem({ text, onClick, fontClass = '' }: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center
        ${fontClass}
        text-base sm:text-lg md:text-xl lg:text-2xl 
        mb-3 sm:mb-4 md:mb-6 
        transition-all duration-200 
        hover:text-blue-500 
        cursor-pointer
        active:scale-95
        touch-manipulation
      `}
    >
      <span className="mr-2 md:mr-3 text-sm sm:text-base">▼</span>
      <span>{text}</span>
    </div>
  );
}