'use client';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
}

interface CalculatorResultsProps {
  data: {
    tasks: Task[];
    includeAISavings: boolean;
  };
  onReset: () => void;
}

export const CalculatorResults = ({ data, onReset }: CalculatorResultsProps) => {
  const calculateSavings = () => {
    const { tasks, includeAISavings } = data;
    
    return tasks.reduce((acc, task) => {
      const annualHours = task.hoursPerWeek * 52;
      const savedHours = includeAISavings && task.usesAI 
        ? annualHours * task.aiEfficiency 
        : 0;
      
      return {
        totalHours: acc.totalHours + annualHours,
        savedHours: acc.savedHours + savedHours
      };
    }, { totalHours: 0, savedHours: 0 });
  };

  const { totalHours, savedHours } = calculateSavings();
  const savedDays = Math.round(savedHours / 8);
  const savingsPercentage = totalHours > 0 ? Math.round((savedHours / totalHours) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500"
          style={{ width: `${savingsPercentage}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{totalHours}</p>
          <p className="text-xs text-gray-500">Annual Hours</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">{savedHours}</p>
          <p className="text-xs text-gray-500">Hours Saved</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-indigo-600">{savingsPercentage}%</p>
          <p className="text-xs text-gray-500">Efficiency Gain</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Time Reclaimed</p>
            <p className="text-xs text-gray-500">That's {savedDays} working days you could reinvest!</p>
          </div>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            Book Strategy Call
          </button>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
      >
        Calculate Again
      </button>
    </div>
  );
}; 