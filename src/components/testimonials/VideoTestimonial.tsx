'use client';

import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface VideoTestimonialProps {
  videoUrl: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ videoUrl }) => {
  // Extract YouTube video ID from URL, including Shorts URLs
  const getYouTubeId = (url: string) => {
    // Handle YouTube Shorts URLs
    if (url.includes('/shorts/')) {
      const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      return shortsMatch ? shortsMatch[1] : null;
    }
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <img
                src="/images/testimonials/RichUXpp.png"
                alt="Rich UX"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Rich UX</h4>
            <p className="text-sm text-gray-600">Owner, Rich + Niche</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        
        {embedUrl ? (
          <div className="relative pt-[56.25%] w-full overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title="Video testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-red-500">Video could not be loaded. Please check the URL.</p>
            <p className="text-sm text-gray-500 mt-2">URL: {videoUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTestimonial; 