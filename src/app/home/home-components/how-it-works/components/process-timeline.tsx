import { StepCard } from './step-card';

interface ProcessTimelineProps {
  steps: {
    number: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
      
      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </div>
  );
}; 