export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  rating?: number;
  category?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "OPMA has transformed our business operations. Their AI-driven solutions have helped us increase efficiency by 40% while reducing operational costs.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    imageUrl: "/images/testimonials/sarah-johnson.jpg",
    rating: 5,
    category: "success-story",
    featured: true
  },
  {
    id: '2',
    quote: "The automation solutions provided by OPMA have revolutionized how we handle our daily operations. It's like having an extra team member working 24/7.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions Ltd",
    imageUrl: "/images/testimonials/michael-chen.jpg",
    rating: 5,
    category: "automation"
  },
  // Add more testimonials as they come in
];

// Helper functions to filter testimonials
export const getFeaturedTestimonials = () => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialsByCategory = (category: string) => {
  return testimonials.filter(testimonial => testimonial.category === category);
};

export const getRandomTestimonials = (count: number) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}; 