import HomeHero from './home/home-components/home-hero';
import SingleTestimonial from '@/components/testimonials/SingleTestimonial';
import { featuredTestimonial } from '@/components/testimonials/featuredTestimonial';
import HomePainPoints from './home/home-components/home-pain-points';

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
    </div>
  );
} 