'use client';

import { ServiceGrid } from './components/service-grid';
import Link from 'next/link';
import {
  ChartBarIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const previewServices = [
  {
    title: "Digital Marketing",
    description: "Transform your online presence with our comprehensive digital marketing solutions. We combine creative strategy with data-driven insights to deliver exceptional results and measurable ROI.",
    features: [
      "Professional website design & development",
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Social media marketing & management",
      "Content marketing & strategy",
      "Email marketing campaigns",
      "Brand development & strategy",
      "Analytics & performance tracking",
      "Conversion rate optimization",
      "Online reputation management"
    ],
    icon: <ChartBarIcon className="w-full h-full" />,
    isFeature: true
  },
  {
    title: "AI Solutions",
    description: "Leverage the power of artificial intelligence to enhance your business operations.",
    features: [
      "AI-powered chatbots",
      "Predictive analytics",
      "Smart automation",
      "Data insights"
    ],
    icon: <SparklesIcon className="w-full h-full" />,
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with intelligent automation solutions.",
    features: [
      "Email automation",
      "Lead nurturing",
      "Campaign management",
      "Performance tracking"
    ],
    icon: <RocketLaunchIcon className="w-full h-full" />,
  }
];

export const MenuPreview = () => {
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
            Our Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your online presence
          </p>
        </div>
        <div className="mt-16">
          <ServiceGrid services={previewServices} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
          >
            View All Services
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}; 