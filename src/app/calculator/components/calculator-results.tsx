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
      <div className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-4 sm:px-6 py-8 sm:py-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold">Your Marketing Efficiency Transformation</h2>
        <p className="mt-3 sm:mt-4 text-indigo-100 max-w-2xl mx-auto text-sm sm:text-base">
          Here's how much time and money you could save by implementing AI automation and expert outsourcing. Ready to transform your marketing efficiency?
        </p>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Results Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-indigo-500/20">
            <h3 className="text-base sm:text-lg font-medium text-indigo-100 mb-2">Monthly Time Saved</h3>
            <p className="text-2xl sm:text-3xl font-bold text-indigo-300">{savings.monthly.saved.toFixed(1)} hrs</p>
            <p className="text-xs sm:text-sm text-indigo-200 mt-2">That's {(savings.monthly.saved / 4).toFixed(1)} hours every week!</p>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-indigo-500/20">
            <h3 className="text-base sm:text-lg font-medium text-indigo-100 mb-2">Yearly Time Saved</h3>
            <p className="text-2xl sm:text-3xl font-bold text-indigo-300">{savings.annual.saved.toFixed(1)} hrs</p>
            <p className="text-xs sm:text-sm text-indigo-200 mt-2">That's {Math.round(savings.annual.saved / 40)} full work weeks!</p>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-indigo-500/20">
            <h3 className="text-base sm:text-lg font-medium text-indigo-100 mb-2">Time Efficiency Gain</h3>
            <p className="text-2xl sm:text-3xl font-bold text-indigo-300">{savings.weekly.percentage}%</p>
            <p className="text-xs sm:text-sm text-indigo-200 mt-2">More time for strategic growth</p>
          </div>
        </div>

        {/* What You Could Do With This Time */}
        <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-indigo-500/10">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-100 mb-4">What You Could Do With {Math.round(savings.annual.saved / 40)} Extra Work Weeks Per Year</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-500/30">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-indigo-100">Strategic Planning</h4>
                <p className="text-xs sm:text-sm text-indigo-200 mt-1">Dedicate {Math.round(savings.monthly.saved / 8)} full days each month to high-level strategy</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-indigo-100">Business Development</h4>
                <p className="text-xs sm:text-sm text-indigo-200 mt-1">Invest {(savings.weekly.saved).toFixed(1)} hours weekly in growing your business</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-teal-900/50 flex items-center justify-center border border-teal-500/30">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-indigo-100">Work-Life Balance</h4>
                <p className="text-xs sm:text-sm text-indigo-200 mt-1">Gain back {Math.round(savings.annual.saved / 24)} months of time annually for personal life</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-amber-900/50 flex items-center justify-center border border-amber-500/30">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-indigo-100">Professional Growth</h4>
                <p className="text-xs sm:text-sm text-indigo-200 mt-1">Use {Math.round(savings.monthly.saved)} hours monthly for learning and skill development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-indigo-100 mb-4 sm:mb-6">
            Imagine what you could achieve with an extra {Math.round(savings.annual.saved)} hours every year. Let's transform your marketing efficiency together.
          </p>
          <button
            onClick={onReset}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate Another Scenario
          </button>
        </div>
      </div>
    </div>
  );
} 