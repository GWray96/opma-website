import { CaseStudyGrid } from './components/case-study-grid';
import Link from 'next/link';

const previewCaseStudies = [
  {
    title: "Local Business Growth",
    description: "How we helped a local business increase their online visibility and customer engagement.",
    imageUrl: "/images/case-studies/local-business.jpg",
    results: [
      "150% increase in website traffic",
      "80% growth in social media engagement",
      "45% increase in lead generation"
    ],
    link: "/case-studies/local-business"
  },
  {
    title: "E-commerce Transformation",
    description: "Transforming an e-commerce store's online presence and sales performance.",
    imageUrl: "/images/case-studies/ecommerce.jpg",
    results: [
      "200% increase in online sales",
      "60% reduction in cart abandonment",
      "85% improvement in customer satisfaction"
    ],
    link: "/case-studies/ecommerce"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we've helped businesses transform their online presence
          </p>
        </div>
        <div className="mt-16">
          <CaseStudyGrid caseStudies={previewCaseStudies} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View all case studies
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