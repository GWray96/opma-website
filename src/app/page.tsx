import HomeHero from './home/home-components/home-hero';
import SingleTestimonial from '@/components/testimonials/SingleTestimonial';
import { featuredTestimonial } from '@/components/testimonials/featuredTestimonial';

export default function Home() {
  return (
    <div>
      <HomeHero />
      
      {/* Featured Testimonial Section */}
      <div className="py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <SingleTestimonial
          {...featuredTestimonial}
          size="large"
          className="mb-8"
        />
      </div>
    </div>
  );
} 