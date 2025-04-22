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
import { CalculatorPreview } from './home/home-components/calculator-preview';
import { Pricing } from './home/home-components/pricing';

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
      <Pricing />

      {/* ROI Calculator Section */}
      <CalculatorPreview />

      {/* FAQ Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add FAQ component */}
      </div>
    </div>
  );
} 