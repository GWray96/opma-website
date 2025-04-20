'use client';

import { ProcessTimeline } from './components/process-timeline';
import {
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: 1,
    title: "Discovery & Analysis",
    description: "We analyze your current online presence and identify areas for improvement.",
    icon: <ClipboardDocumentCheckIcon className="w-full h-full" />,
  },
  {
    number: 2,
    title: "Strategy Development",
    description: "We create a customized plan to enhance your online presence and automate marketing tasks.",
    icon: <RocketLaunchIcon className="w-full h-full" />,
  },
  {
    number: 3,
    title: "Implementation & Growth",
    description: "We execute the strategy and continuously optimize for better results.",
    icon: <ChartBarIcon className="w-full h-full" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our simple three-step process to transform your online presence
          </p>
        </div>
        <div className="mt-16">
          <ProcessTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}; 