'use client';

import { ProcessTimeline } from './components/process-timeline';
import { FaHandshake } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';

const steps = [
  {
    number: 1,
    title: "Choose Your Plan",
    description: "Select the subscription that matches your needs - from essential automation to full-service marketing management.",
    icon: <BsLightningChargeFill className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Strategy Session",
    description: "Join a 30-minute call where we'll map out your personalized marketing automation roadmap for success.",
    icon: <FaHandshake className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Fast Implementation",
    description: "Watch your marketing transform as we implement your strategy within days, not weeks or months.",
    icon: <IoRocketSharp className="w-8 h-8" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600">
            Start In 3 Simple Steps
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            From sign-up to implementation in less than a week - no long-term contracts
          </p>
        </div>

        <ProcessTimeline steps={steps} />
      </div>
    </section>
  );
}; 