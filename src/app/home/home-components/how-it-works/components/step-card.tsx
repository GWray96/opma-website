import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="group relative w-full">
      {/* Card */}
      <div className="relative z-10 h-full rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-blue-600">Step</span>
            <span className="text-sm font-medium text-blue-600">{number}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Hover gradient border */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-30"></div>
      </div>
    </div>
  );
} 