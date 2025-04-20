'use client';

import React from 'react';
import Image from 'next/image';
import VideoTestimonial from './VideoTestimonial';

interface TestimonialProps {
  quote?: string;
  videoUrl?: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  rating: number;
  size?: string;
  className?: string;
}

const SingleTestimonial: React.FC<TestimonialProps> = (props) => {
  if (props.videoUrl) {
    return <VideoTestimonial {...props} videoUrl={props.videoUrl} />;
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-full overflow-hidden relative bg-gray-200">
            <Image
              src={props.imageUrl}
              alt={props.author}
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="ml-4 text-left">
            <h4 className="text-lg font-semibold text-white">{props.author}</h4>
            <p className="text-sm text-gray-400">{props.role} @ {props.company}</p>
          </div>
        </div>

        <div className="flex mb-6">
          {[...Array(props.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-lg text-gray-300 italic">"{props.quote}"</blockquote>
      </div>
    </div>
  );
};

export default SingleTestimonial; 