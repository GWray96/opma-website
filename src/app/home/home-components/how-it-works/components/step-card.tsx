import { ComponentType, ReactElement, isValidElement } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ComponentType<any> | ReactElement;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="group relative w-full max-w-md rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      {/* Step number */}
      <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white shadow-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3 transition-colors group-hover:from-blue-500/20 group-hover:to-purple-500/20">
          {isValidElement(icon) ? (
            <div className="h-10 w-10 text-white">{icon}</div>
          ) : (
            // @ts-ignore - We know this is a ComponentType if it's not a ReactElement
            <icon className="h-10 w-10 text-white" />
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-center text-lg font-semibold text-white">{title}</h3>
      <p className="text-center text-sm text-gray-300">{description}</p>
    </div>
  );
} 