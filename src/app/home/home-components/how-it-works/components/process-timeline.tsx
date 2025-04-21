import { StepCard } from './step-card';
import { ComponentType, ReactElement } from 'react';

interface ProcessTimelineProps {
  steps: {
    number: number;
    title: string;
    description: string;
    icon: ComponentType<any> | ReactElement;
  }[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
      {/* Horizontal connecting line with gradient and shimmer effect */}
      <div className="absolute left-0 top-1/2 -z-10 hidden h-1 w-full -translate-y-1/2 overflow-hidden md:block">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 animate-shimmer" />
        </div>
      </div>

      {/* Steps */}
      {steps.map((step) => (
        <div
          key={step.number}
          className="relative flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay={step.number * 100}
        >
          <StepCard {...step} />
        </div>
      ))}
    </div>
  );
} 