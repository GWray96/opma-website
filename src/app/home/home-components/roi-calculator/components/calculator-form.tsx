'use client';

import { useState } from 'react';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
}

interface CalculatorFormProps {
  onSubmit: (data: { tasks: Task[]; includeAISavings: boolean }) => void;
}

const INITIAL_TASKS: Task[] = [
  { id: 'blog', name: 'Writing blog content', hoursPerWeek: 5, usesAI: false, aiEfficiency: 0.7 },
  { id: 'social', name: 'Social media posting', hoursPerWeek: 3, usesAI: false, aiEfficiency: 0.8 },
  { id: 'email', name: 'Email marketing', hoursPerWeek: 2, usesAI: false, aiEfficiency: 0.6 },
  { id: 'reports', name: 'Creating reports', hoursPerWeek: 4, usesAI: false, aiEfficiency: 0.75 },
  { id: 'support', name: 'Customer support replies', hoursPerWeek: 6, usesAI: false, aiEfficiency: 0.65 },
  { id: 'ads', name: 'Ad creative generation', hoursPerWeek: 3, usesAI: false, aiEfficiency: 0.85 },
  { id: 'leads', name: 'Lead follow-ups', hoursPerWeek: 4, usesAI: false, aiEfficiency: 0.7 },
  { id: 'analytics', name: 'Analytics review', hoursPerWeek: 2, usesAI: false, aiEfficiency: 0.8 },
  { id: 'video', name: 'Video editing/repurposing', hoursPerWeek: 5, usesAI: false, aiEfficiency: 0.75 },
  { id: 'website', name: 'Website updates', hoursPerWeek: 3, usesAI: false, aiEfficiency: 0.7 },
];

export const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [includeAISavings, setIncludeAISavings] = useState(true);

  const handleTaskChange = (taskId: string, field: keyof Task, value: any) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, [field]: value } : task
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ tasks, includeAISavings });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Select Your Marketing Tasks</h3>
        <p className="text-sm text-gray-600">
          Choose the tasks you currently handle and indicate if you're using AI/automation for any of them.
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-purple-200 transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor={`task-${task.id}`} className="text-sm font-medium text-gray-900">
                  {task.name}
                </label>
                <span className="text-sm text-gray-500">{task.hoursPerWeek} hrs/week</span>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    checked={task.usesAI}
                    onChange={(e) => handleTaskChange(task.id, 'usesAI', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor={`task-${task.id}`} className="ml-2 text-sm text-gray-600">
                    Using AI/Automation
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="includeAISavings"
          checked={includeAISavings}
          onChange={(e) => setIncludeAISavings(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
        <label htmlFor="includeAISavings" className="text-sm text-gray-600">
          Include potential time savings from AI/Automation
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:via-indigo-700 hover:to-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Calculate Time Savings
        </button>
      </div>
    </form>
  );
}; 