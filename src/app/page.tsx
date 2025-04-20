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
import { ROICalculator } from './home/home-components/roi-calculator';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      
      {/* Featured Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <SingleTestimonial
          {...featuredTestimonial}
          size="large"
          className="mb-4 md:mb-8"
        />
      </div>

      {/* Pain Points Section */}
      <HomePainPoints />
      
      {/* Second Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <SingleTestimonial
          {...secondTestimonial}
          size="large"
          className="mb-4 md:mb-8"
        />
      </div>
      
      {/* Solutions Section */}
      <HomeSolutions />
      
      {/* Third Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <SingleTestimonial
          {...thirdTestimonial}
          size="large"
          className="mb-4 md:mb-8"
        />
      </div>
      
      {/* Comparison Section */}
      <HomeComparison />

      {/* Fourth Testimonial Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <SingleTestimonial
          {...fourthTestimonial}
          size="large"
          className="mb-4 md:mb-8"
        />
      </div>

      {/* How It Works Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add HowItWorks component */}
      </div>

      {/* Case Studies Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        {/* TODO: Add CaseStudies component */}
      </div>

      {/* About Me Preview Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add AboutMePreview component */}
      </div>

      {/* Menu Preview Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        {/* TODO: Add MenuPreview component */}
      </div>

      {/* Pricing Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add Pricing component */}
      </div>

      {/* ROI Calculator Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 md:py-16">
        {/* TODO: Add FAQ component */}
      </div>
    </div>
  );
} 