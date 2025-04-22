'use client';

import Link from 'next/link';

export const CalculatorPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600">
            Save 20+ Hours Every Week
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing efficiency with AI-powered automation and expert outsourcing. Our calculator reveals exactly how many hours you'll reclaim for strategic growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link 
            href="/calculator" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
          >
            Calculate Your Time Savings →
          </Link>
          <p className="text-sm text-gray-500">Takes less than 2 minutes</p>
        </div>

        {/* Time Savings Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Strategic Planning */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">5 Days</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Planning</h3>
            <p className="text-gray-600 text-sm">Imagine having a full work week every month to focus on strategy. That's 60 days annually to grow your business.</p>
            <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Based on typical time spent on operational tasks
            </div>
          </div>

          {/* Client Growth */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">20+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">New Clients</h3>
            <p className="text-gray-600 text-sm">With 20+ extra hours weekly, you could potentially acquire 2-3 new clients monthly through focused outreach.</p>
            <div className="mt-3 text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Based on average time needed per client acquisition
            </div>
          </div>

          {/* Task Automation */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-green-600 mb-2">80%</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Automation</h3>
            <p className="text-gray-600 text-sm">Automate up to 80% of your repetitive marketing tasks. That's 4 out of 5 hours saved on routine work.</p>
            <div className="mt-3 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Typical automation rate for marketing operations
            </div>
          </div>

          {/* Revenue Impact */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 mb-2">$50K+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Impact</h3>
            <p className="text-gray-600 text-sm">With 20+ hours weekly saved, you could generate $50K+ additional revenue through new client acquisition.</p>
            <div className="mt-3 text-xs text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Based on average client value of $2.5K monthly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 