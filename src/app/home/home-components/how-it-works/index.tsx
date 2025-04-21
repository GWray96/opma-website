'use client';

import { ProcessTimeline } from './components/process-timeline';
import {
  Square3Stack3DIcon,
  CalendarDaysIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: 1,
    title: "Choose Your Growth Plan",
    description: "Select your personalized marketing package where you get direct access to my expertise combined with cutting-edge AI tools to transform your marketing.",
    icon: <Square3Stack3DIcon className="w-full h-full" />,
  },
  {
    number: 2,
    title: "Strategic Onboarding Call",
    description: "In our focused 30-minute session, we'll map out your marketing goals and create your custom roadmap, ensuring you get the personal attention your business deserves.",
    icon: <CalendarDaysIcon className="w-full h-full" />,
  },
  {
    number: 3,
    title: "Seamless Execution",
    description: "I personally handle your marketing while implementing AI automation, giving you the perfect blend of dedicated expertise and time-saving technology.",
    icon: <RocketLaunchIcon className="w-full h-full" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-purple-200/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-indigo-200/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-200">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Your journey to efficient, AI-powered marketing starts here
          </p>
        </div>
        <div className="mt-16">
          <ProcessTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}; 