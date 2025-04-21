import { CaseStudyGrid } from './components/case-study-grid';
import Link from 'next/link';

const previewCaseStudies = [
  {
    title: "Aspire 1 Nutrition",
    description: "Complete Shopify store transformation with custom design, compelling copywriting, and AI-generated product imagery.",
    imageUrl: "/images/case-studies/Aspire 1 Nutrition Case Study (1).webp",
    results: [
      "Custom Shopify store design",
      "AI-powered product imagery",
      "Strategic copywriting implementation"
    ],
    link: "/case-studies/aspire-1-nutrition"
  },
  {
    title: "MN Online Coach",
    description: "Strategic landing page development and conversion optimization for a coaching business's client acquisition funnel.",
    imageUrl: "/images/case-studies/MN Online Coach Case Study (2) (1).webp",
    results: [
      "Custom landing page design",
      "Strategic copywriting",
      "Conversion rate optimization"
    ],
    link: "/case-studies/mn-online-coach"
  },
  {
    title: "Rich & Niche",
    description: "Optimized Facebook ad campaign through strategic creative testing and performance analysis.",
    imageUrl: "/images/case-studies/Rich+Niche Ad Case Study (1).webp",
    results: [
      "136% increase in result rate (2.76% to 6.51%)",
      "223% increase in total clicks",
      "25% reduction in cost per click"
    ],
    link: "/case-studies/rich-and-niche"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600">
            Success Stories
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their online presence and achieve remarkable results
          </p>
        </div>
        
        <div className="mt-16">
          <CaseStudyGrid caseStudies={previewCaseStudies} />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
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