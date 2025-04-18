import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "OPMA's process optimization services helped us reduce our operational costs by 25% within just three months. Their data-driven approach made all the difference.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "The automation solutions implemented by OPMA have transformed our workflow. We're now able to handle twice the volume with the same team.",
    author: "Michael Chen",
    position: "Operations Director, Global Logistics",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "Working with OPMA was a game-changer for our business. Their analytics tools provided insights we never had before, leading to better decision-making.",
    author: "Emily Rodriguez",
    position: "CFO, Innovate Solutions",
    image: "/images/testimonial-3.jpg"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                </div>
                
                <div className="mt-auto flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    {/* Replace with actual image when available */}
                    <div className="h-full w-full bg-blue-200"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 