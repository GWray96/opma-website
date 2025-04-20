'use client';

import { ServiceGrid } from './components/service-grid';
import Link from 'next/link';
import {
  GlobeAltIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const previewServices = [
  {
    title: "Website Development",
    description: "Create a professional and engaging website that represents your brand.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Content management system",
      "Performance optimization"
    ],
    icon: <GlobeAltIcon className="w-full h-full" />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    features: [
      "Social media management",
      "Content strategy",
      "Email marketing",
      "Analytics and reporting"
    ],
    icon: <ChartBarIcon className="w-full h-full" />,
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with automated solutions.",
    features: [
      "Email automation",
      "Social media scheduling",
      "Lead nurturing",
      "Campaign management"
    ],
    icon: <RocketLaunchIcon className="w-full h-full" />,
  }
];

export const MenuPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your online presence
          </p>
        </div>
        <div className="mt-16">
          <ServiceGrid services={previewServices} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View all services
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