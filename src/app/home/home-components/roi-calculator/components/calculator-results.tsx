'use client';

interface CalculatorResultsProps {
  data: {
    hours: number;
    aiEnabled: boolean;
  };
  onReset: () => void;
}

const HOURLY_RATE = 50; // $50 per hour
const EFFICIENCY_BOOST = 0.4; // 40% efficiency boost with AI

export const CalculatorResults = ({ data, onReset }: CalculatorResultsProps) => {
  const annualHours = data.hours * 52;
  const annualCost = annualHours * HOURLY_RATE;
  
  const aiAnnualHours = data.aiEnabled ? annualHours * (1 - EFFICIENCY_BOOST) : annualHours;
  const aiAnnualCost = aiAnnualHours * HOURLY_RATE;
  const potentialSavings = annualCost - aiAnnualCost;

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="text-lg font-medium text-gray-900">Annual Calculations</h3>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Annual Hours</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{annualHours.toLocaleString()} hrs</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Annual Cost</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">${annualCost.toLocaleString()}</dd>
          </div>
          {data.aiEnabled && (
            <>
              <div>
                <dt className="text-sm font-medium text-gray-500">Hours with AI</dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900">{aiAnnualHours.toLocaleString()} hrs</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Cost with AI</dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900">${aiAnnualCost.toLocaleString()}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Potential Annual Savings</dt>
                <dd className="mt-1 text-2xl font-semibold text-green-600">${potentialSavings.toLocaleString()}</dd>
              </div>
            </>
          )}
        </dl>
      </div>

      <button
        onClick={onReset}
        className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Calculate Again
      </button>
    </div>
  );
}; 