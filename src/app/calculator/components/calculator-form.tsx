'use client';

import { useState } from 'react';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
  category: string;
}

const INITIAL_TASKS: Task[] = [
  // Content Creation
  { id: '1', name: 'Blog Writing', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7, category: 'Content Creation' },
  { id: '2', name: 'Social Media Posts', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.6, category: 'Content Creation' },
  { id: '3', name: 'Email Newsletters', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.5, category: 'Content Creation' },
  { id: '4', name: 'Video Content', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.4, category: 'Content Creation' },
  
  // Marketing Operations
  { id: '5', name: 'Campaign Planning', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.6, category: 'Marketing Operations' },
  { id: '6', name: 'Analytics & Reporting', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.8, category: 'Marketing Operations' },
  { id: '7', name: 'SEO Optimization', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7, category: 'Marketing Operations' },
  { id: '8', name: 'Ad Management', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.5, category: 'Marketing Operations' },
  
  // Customer Engagement
  { id: '9', name: 'Social Media Engagement', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.6, category: 'Customer Engagement' },
  { id: '10', name: 'Email Responses', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7, category: 'Customer Engagement' },
  { id: '11', name: 'Community Management', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.5, category: 'Customer Engagement' },
  { id: '12', name: 'Customer Support', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.4, category: 'Customer Engagement' },
];

interface CalculatorFormProps {
  onSubmit: (data: { tasks: Task[]; includeAISavings: boolean }) => void;
}

export function CalculatorForm({ onSubmit }: CalculatorFormProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [includeAISavings, setIncludeAISavings] = useState(true);
  const [activeTab, setActiveTab] = useState('Content Creation');

  const categories = Array.from(new Set(tasks.map(task => task.category)));
  const filteredTasks = tasks.filter(task => task.category === activeTab);

  const getTotalHours = () => {
    return tasks.reduce((total, task) => total + task.hoursPerWeek, 0);
  };

  const handleHoursChange = (taskId: string, hours: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, hoursPerWeek: hours } : task
    ));
  };

  const handleAIToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, usesAI: !task.usesAI } : task
    ));
  };

  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ tasks, includeAISavings });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
      <div className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-6 py-10 text-center text-white">
        <h2 className="text-3xl font-bold">Transform Your Marketing Efficiency</h2>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Select your current marketing tasks below to reveal your potential time and cost savings. Every hour saved is an hour gained for strategic growth.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-10">
        {/* Quick Summary */}
        <div className="mb-10 p-5 bg-indigo-900/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-indigo-100">Your Current Weekly Time Investment:</span>
            <span className="text-2xl font-bold text-indigo-300">{getTotalHours()} hrs</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-10">
          <div className="border-b border-gray-700/50">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleTabChange(category)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === category
                      ? 'border-indigo-400 text-indigo-300'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300/50'}
                  `}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Task Inputs */}
        <div className="space-y-8">
          {filteredTasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-4 p-5 bg-indigo-900/20 backdrop-blur-sm rounded-lg border border-indigo-500/10">
              <div className="flex-1">
                <label className="block text-sm font-medium text-indigo-100">{task.name}</label>
              </div>
              <div className="flex items-center space-x-6">
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={task.hoursPerWeek}
                  onChange={(e) => handleHoursChange(task.id, parseFloat(e.target.value) || 0)}
                  className="w-24 rounded-md border-indigo-500/30 shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm bg-indigo-900/40 text-white font-medium px-3 py-2 border-2"
                  placeholder="Hours"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.usesAI}
                    onChange={() => handleAIToggle(task.id)}
                    className="h-4 w-4 text-indigo-400 focus:ring-indigo-400 border-indigo-500/50 rounded"
                  />
                  <label className="ml-2 text-sm text-indigo-200">Use AI</label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Savings Toggle */}
        <div className="mt-10 flex items-center">
          <input
            type="checkbox"
            checked={includeAISavings}
            onChange={(e) => setIncludeAISavings(e.target.checked)}
            className="h-4 w-4 text-indigo-400 focus:ring-indigo-400 border-indigo-500/50 rounded"
          />
          <label className="ml-2 text-sm text-indigo-200">
            Include AI automation savings in calculations
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reveal Your Potential Savings
          </button>
        </div>
      </form>
    </div>
  );
} 