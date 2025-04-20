'use client';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
  category: string;
}

interface CalculatorResultsProps {
  tasks: Task[];
  includeAISavings: boolean;
  onReset: () => void;
}

export function CalculatorResults({ tasks, includeAISavings, onReset }: CalculatorResultsProps) {
  const calculateSavings = () => {
    const totalHoursPerWeek = tasks.reduce((sum, task) => sum + task.hoursPerWeek, 0);
    const annualHours = totalHoursPerWeek * 52;
    const monthlyHours = totalHoursPerWeek * 4;

    // Calculate AI savings if enabled
    let aiSavings = 0;
    if (includeAISavings) {
      aiSavings = tasks.reduce((sum, task) => {
        if (task.usesAI) {
          return sum + (task.hoursPerWeek * task.aiEfficiency);
        }
        return sum;
      }, 0);
    }

    // Calculate outsourcing savings (assuming 70% time reduction)
    const outsourcingSavings = totalHoursPerWeek * 0.7;
    const totalSavings = outsourcingSavings + aiSavings;

    return {
      weekly: {
        current: totalHoursPerWeek,
        saved: totalSavings,
        percentage: Math.round((totalSavings / totalHoursPerWeek) * 100)
      },
      monthly: {
        current: monthlyHours,
        saved: totalSavings * 4,
        percentage: Math.round((totalSavings / totalHoursPerWeek) * 100)
      },
      annual: {
        current: annualHours,
        saved: totalSavings * 52,
        percentage: Math.round((totalSavings / totalHoursPerWeek) * 100)
      }
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
      <div className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-6 py-10 text-center text-white">
        <h2 className="text-3xl font-bold">Your Marketing Efficiency Transformation</h2>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Here's how much time and money you could save by implementing AI automation and expert outsourcing. Ready to transform your marketing efficiency?
        </p>
      </div>

      <div className="p-8 md:p-10">
        {/* Results Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20">
            <h3 className="text-lg font-medium text-indigo-100 mb-2">Weekly Time Saved</h3>
            <p className="text-3xl font-bold text-indigo-300">{savings.weekly.saved.toFixed(1)} hrs</p>
            <p className="text-sm text-indigo-200 mt-2">That's {savings.weekly.percentage}% of your current time!</p>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20">
            <h3 className="text-lg font-medium text-indigo-100 mb-2">Annual Cost Savings</h3>
            <p className="text-3xl font-bold text-indigo-300">${(savings.annual.saved * 50).toLocaleString()}</p>
            <p className="text-sm text-indigo-200 mt-2">Based on $50/hr rate</p>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20">
            <h3 className="text-lg font-medium text-indigo-100 mb-2">Monthly Cost Savings</h3>
            <p className="text-3xl font-bold text-indigo-300">${(savings.monthly.saved * 50).toLocaleString()}</p>
            <p className="text-sm text-indigo-200 mt-2">That's ${(savings.monthly.saved * 50 / 4).toLocaleString()} per week</p>
          </div>
        </div>

        {/* What You Could Do With This Time */}
        <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-6 mb-12 border border-indigo-500/10">
          <h3 className="text-xl font-bold text-indigo-100 mb-4">What You Could Do With This Time</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-500/30">
                <svg className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-indigo-100">Focus on Strategy</h4>
                <p className="text-indigo-200 mt-1">Spend more time on high-level planning and business growth strategies</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                <svg className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-indigo-100">Increase Productivity</h4>
                <p className="text-indigo-200 mt-1">Complete more tasks in less time with AI-powered automation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-900/50 flex items-center justify-center border border-teal-500/30">
                <svg className="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-indigo-100">Improve Work-Life Balance</h4>
                <p className="text-indigo-200 mt-1">Reduce stress and enjoy more personal time with family and friends</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-900/50 flex items-center justify-center border border-amber-500/30">
                <svg className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-indigo-100">Increase Revenue</h4>
                <p className="text-indigo-200 mt-1">Focus on revenue-generating activities and client acquisition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-indigo-100 mb-6">
            Imagine what you could achieve with {savings.weekly.saved.toFixed(1)} extra hours every week. Let's transform your marketing efficiency together.
          </p>
          <button
            onClick={onReset}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
} 