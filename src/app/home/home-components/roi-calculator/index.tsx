'use client';

import { useState } from 'react';
import { CalculatorForm } from './components/calculator-form';
import { CalculatorResults } from './components/calculator-results';

interface CalculatorData {
  hours: number;
  aiEnabled: boolean;
}

export const ROICalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    hours: 0,
    aiEnabled: false,
  });

  const handleSubmit = (data: CalculatorData) => {
    setCalculatorData(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Marketing ROI Calculator</h2>
        <p className="mt-2 text-sm text-gray-500">
          Calculate your potential savings and ROI from automating marketing tasks
        </p>
      </div>

      <div className="mt-8">
        {!showResults ? (
          <CalculatorForm onSubmit={handleSubmit} />
        ) : (
          <CalculatorResults data={calculatorData} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}; 