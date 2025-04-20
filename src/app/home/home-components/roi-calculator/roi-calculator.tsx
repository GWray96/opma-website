'use client';

import { useState } from 'react';
import { CalculatorForm } from './components/calculator-form';
import { CalculatorResults } from './components/calculator-results';

interface CalculatorData {
  hours: number;
  aiEnabled: boolean;
}

export const ROICalculator = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData | null>(null);

  const handleSubmit = (data: CalculatorData) => {
    setCalculatorData(data);
  };

  const handleReset = () => {
    setCalculatorData(null);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Marketing ROI Calculator
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Calculate your potential savings and ROI with AI-powered marketing automation
        </p>
      </div>

      <div className="mt-8">
        {!calculatorData ? (
          <CalculatorForm onSubmit={handleSubmit} />
        ) : (
          <CalculatorResults data={calculatorData} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}; 