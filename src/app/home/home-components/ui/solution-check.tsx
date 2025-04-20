'use client';

import React from 'react';

interface SolutionCheckProps {
  className?: string;
}

export function SolutionCheck({ className }: SolutionCheckProps) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 group">
      <svg 
        className="w-5 h-5 text-indigo-600 transform transition-transform duration-200 group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2.5" 
          d="M5 13l4 4L19 7" 
        />
      </svg>
    </div>
  );
} 