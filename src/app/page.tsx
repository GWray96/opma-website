import Link from 'next/link';
import HomeHero from './home/home-components/home-hero';
import SingleTestimonial from '../components/testimonials/SingleTestimonial';
import { featuredTestimonial } from '../components/testimonials/featuredTestimonial';
import { secondTestimonial } from '../components/testimonials/secondTestimonial';
import { thirdTestimonial } from '../components/testimonials/thirdTestimonial';
import VideoTestimonial from '../components/testimonials/VideoTestimonial';
import HomePainPoints from './home/home-components/home-pain-points';
import HomeSolutions from './home/home-components/home-solutions';
import HomeComparison from './home/home-components/home-comparison';

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
      
      {/* Fourth Testimonial - Video */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <VideoTestimonial videoUrl="https://youtube.com/shorts/TrQqcXaLJEE?feature=shared" />
          </div>
        </div>
      </div>
    </div>
  );
} 