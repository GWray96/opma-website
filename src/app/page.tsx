import Link from 'next/link';
import HomeHero from './home/home-components/home-hero';
import SingleTestimonial from '../components/testimonials/SingleTestimonial';
import { featuredTestimonial } from '../components/testimonials/featuredTestimonial';
import { secondTestimonial } from '../components/testimonials/secondTestimonial';
import { thirdTestimonial } from '../components/testimonials/thirdTestimonial';
import { fourthTestimonial } from '../components/testimonials/fourthTestimonial';
import HomePainPoints from './home/home-components/home-pain-points';
import HomeSolutions from './home/home-components/home-solutions';
import HomeComparison from './home/home-components/home-comparison';
import { HowItWorks } from './home/home-components/how-it-works';
import { CaseStudies } from './home/home-components/case-studies';
import { MenuPreview } from './home/home-components/menu-preview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      
      {/* Featured Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative">
          <SingleTestimonial
            {...featuredTestimonial}
            size="large"
            className="mb-4 md:mb-8"
          />
        </div>
      </div>

      {/* Pain Points Section */}
      <HomePainPoints />
      
      {/* Second Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative">
          <SingleTestimonial
            {...secondTestimonial}
            size="large"
            className="mb-4 md:mb-8"
          />
        </div>
      </div>
      
      {/* Solutions Section */}
      <HomeSolutions />
      
      {/* Third Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative">
          <SingleTestimonial
            {...thirdTestimonial}
            size="large"
            className="mb-4 md:mb-8"
          />
        </div>
      </div>
      
      {/* Comparison Section */}
      <HomeComparison />

      {/* Fourth Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative">
          <SingleTestimonial
            {...fourthTestimonial}
            size="large"
            className="mb-4 md:mb-8"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Menu Preview Section */}
      <MenuPreview />

      {/* About Me Preview Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add AboutMePreview component */}
      </div>

      {/* Pricing Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add Pricing component */}
      </div>

      {/* ROI Calculator Section */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600">
              Save 20+ Hours Every Week
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your marketing efficiency with AI-powered automation and expert outsourcing. Our calculator reveals exactly how many hours you'll reclaim for strategic growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/calculator" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
            >
              Calculate Your Time Savings →
            </Link>
            <p className="text-sm text-gray-500">Takes less than 2 minutes</p>
          </div>

          {/* Time Savings Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Hours Saved Weekly</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">Less Time on Tasks</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">4x</div>
              <div className="text-sm text-gray-600">Faster Task Completion</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Automated Workflow</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add FAQ component */}
      </div>
    </div>
  );
} 