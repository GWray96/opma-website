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
      <div className="relative overflow-hidden pt-28 md:pt-36 pb-8 md:pb-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-200">
              <span className="md:hidden">
                Save 20+ Hours Weekly:
                <br />
                Your Marketing ROI Calculator
              </span>
              <span className="hidden md:block">Save 20+ Hours Weekly: Your Marketing ROI Calculator</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover exactly how much time and money you're losing on repetitive tasks. Our calculator shows you the real cost of manual work and how AI automation can transform your marketing efficiency.
            </p>
          </div>
        </div>
      </div>
      
      {/* Calculator Section */}
      <div className="py-8 md:py-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </div>
    </div>
  );
} 