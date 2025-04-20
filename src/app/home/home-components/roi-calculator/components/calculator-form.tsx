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
  { id: 'blog', name: 'Blog Content', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7 },
  { id: 'social', name: 'Social Media', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.8 },
  { id: 'email', name: 'Email Marketing', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.6 },
  { id: 'reports', name: 'Reports & Analytics', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.75 },
  { id: 'support', name: 'Customer Support', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.65 },
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
    const activeTasks = tasks.filter(task => task.hoursPerWeek > 0);
    onSubmit({ tasks: activeTasks, includeAISavings });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 hover:border-purple-100 transition-colors shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.usesAI}
                onChange={(e) => handleTaskChange(task.id, 'usesAI', e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={`task-${task.id}`} className="text-sm font-medium text-gray-700">
                {task.name}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                id={`hours-${task.id}`}
                min="0"
                max="168"
                value={task.hoursPerWeek || ''}
                onChange={(e) => handleTaskChange(task.id, 'hoursPerWeek', Number(e.target.value))}
                className="w-16 rounded-md border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                placeholder="0"
              />
              <span className="text-xs text-gray-500">hrs/wk</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="includeAISavings"
            checked={includeAISavings}
            onChange={(e) => setIncludeAISavings(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="includeAISavings" className="text-xs text-gray-600">
            Show AI automation savings
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}; 