import { Testimonial, getFeaturedTestimonials, getTestimonialsByCategory, getRandomTestimonials } from './testimonialsData';
import TestimonialCard from './TestimonialCard';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  layout?: 'grid' | 'carousel' | 'featured';
  count?: number;
  category?: string;
  className?: string;
}

export default function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle = "Discover how OPMA is transforming businesses worldwide",
  layout = 'grid',
  count = 3,
  category,
  className = '',
}: TestimonialsSectionProps) {
  // Get testimonials based on props
  let testimonials: Testimonial[] = [];
  if (category) {
    testimonials = getTestimonialsByCategory(category);
  } else if (layout === 'featured') {
    testimonials = getFeaturedTestimonials();
  } else {
    testimonials = getRandomTestimonials(count);
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid gap-6 ${
          layout === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 