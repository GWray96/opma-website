import { Metadata } from 'next';
import { ROICalculator } from './components/calculator';

export const metadata: Metadata = {
  title: 'Marketing Time Savings Calculator | OPMA',
  description: 'Calculate how much time you could save by outsourcing your marketing tasks and implementing AI automation.',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-800/50 to-purple-900/50"></div>
      </div>
      
      {/* Hero Section with proper spacing */}
      <div className="relative overflow-hidden pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-200">
              <span className="sm:hidden">
                Save 20+ Hours Weekly:
                <br />
                Your Marketing ROI Calculator
              </span>
              <span className="hidden sm:block">Save 20+ Hours Weekly: Your Marketing ROI Calculator</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto px-4 sm:px-0">
              Let us handle your marketing while we implement AI automation in your business. Our calculator reveals exactly how many hours and dollars you'll save through expert outsourcing and smart automation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Calculator Section */}
      <div className="py-6 sm:py-8 md:py-10 lg:py-12 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </div>
    </div>
  );
} 