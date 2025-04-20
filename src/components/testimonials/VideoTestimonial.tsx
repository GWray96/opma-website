'use client';

import React from 'react';
import Image from 'next/image';

interface VideoTestimonialProps {
  videoUrl: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  rating: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  videoUrl,
  author,
  role,
  company,
  imageUrl,
  rating
}) => {
  // Extract YouTube video ID from URL
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
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
      <div className="flex flex-col items-center text-center">
        {/* Author Info */}
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-full overflow-hidden relative bg-gray-200">
            <Image
              src={imageUrl}
              alt={author}
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="ml-4 text-left">
            <h4 className="text-lg font-semibold text-white">{author}</h4>
            <p className="text-sm text-gray-400">{role} @ {company}</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex mb-6">
          {[...Array(rating)].map((_, i) => (
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

        {/* Video Embed */}
        {embedUrl ? (
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title={`Video testimonial by ${author}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-red-400">Video could not be loaded</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTestimonial; 