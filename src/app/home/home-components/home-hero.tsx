'use client';

import React from 'react';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <div className="relative overflow-hidden h-[100vh] flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-indigo-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Animated Circles - Large Screens */}
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Additional Floating Circles - Responsive Sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-52 h-52 md:w-72 md:h-72 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        
        {/* Small Screen Additional Circles */}
        <div className="md:hidden absolute top-1/2 left-1/2 w-32 h-32 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="md:hidden absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-1000"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/50 to-indigo-100/50"></div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-40">
        {/* Main Content */}
        <div className="text-center mt-12 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600">
            <span className="md:hidden">
              Marketing. Automation. AI.
              <br />
              On Demand.
            </span>
            <span className="hidden md:block">Marketing. Automation. AI. On Demand.</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-gray-800">
              <span className="md:hidden">Like Spotify — but for growing your business.</span>
              <span className="hidden md:block">Like Spotify — but for growing your business.</span>
            </span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 hidden md:block">
            A done-for-you subscription that gives you instant access to digital marketing, AI tools, and automation systems — so you can reclaim your time and scale stress-free.
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            <span className="md:hidden">All done for you. One monthly subscription.</span>
            <span className="hidden md:block">All done for you. One monthly subscription.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="group bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50 relative overflow-hidden">
              <span className="relative z-10">Start Your Subscription</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group bg-transparent border-2 border-purple-300 hover:bg-purple-100 hover:text-purple-800 text-purple-600 font-bold py-3 px-6 rounded-lg transition duration-300">
              Book Your Free Strategy Call
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              No contracts. Cancel anytime. Full flexibility.
            </p>
            <p className="text-gray-500 text-xs">
              Trained by the Rich + Niche Academy
            </p>
          </div>
          
          {/* Rich and Niche Academy Logo */}
          <div className="flex justify-center mt-8 mb-32">
            <div className="bg-purple-600 rounded-lg p-2 shadow-lg">
              <Image
                src="/images/Rich and Niche Logo.png"
                alt="Rich and Niche Academy Logo"
                width={180}
                height={60}
                className="opacity-90"
              />
            </div>
          </div>
          
          {/* Mouse Scroll Indicator */}
          <div className="mouse-icon hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <svg
              width="19"
              height="30"
              viewBox="0 0 19 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.875 20.625V9.375C16.875 7.38588 16.0848 5.47822 14.6783 4.0717C13.2718 2.66518 11.3641 1.875 9.375 1.875C7.38588 1.875 5.47822 2.66518 4.0717 4.0717C2.66518 5.47822 1.875 7.38588 1.875 9.375V20.625C1.875 22.6141 2.66518 24.5218 4.0717 25.9283C5.47822 27.3348 7.38588 28.125 9.375 28.125C11.3641 28.125 13.2718 27.3348 14.6783 25.9283C16.0848 24.5218 16.875 22.6141 16.875 20.625ZM9.375 0C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375V20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30C11.8614 30 14.246 29.0123 16.0041 27.2541C17.7623 25.496 18.75 23.1114 18.75 20.625V9.375C18.75 6.8886 17.7623 4.50403 16.0041 2.74587C14.246 0.98772 11.8614 0 9.375 0Z"
                fill="#6B7280"
                className="mouse"
              ></path>
              <path
                d="M10.0379 7.39959C9.8621 7.22377 9.62364 7.125 9.375 7.125C9.12636 7.125 8.8879 7.22377 8.71209 7.39959C8.53627 7.5754 8.4375 7.81386 8.4375 8.0625V11.8125C8.4375 12.0611 8.53627 12.2996 8.71209 12.4754C8.8879 12.6512 9.12636 12.75 9.375 12.75C9.62364 12.75 9.8621 12.6512 10.0379 12.4754C10.2137 12.2996 10.3125 12.0611 10.3125 11.8125V8.0625C10.3125 7.81386 10.2137 7.5754 10.0379 7.39959Z"
                fill="#6B7280"
                className="cursor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero; 