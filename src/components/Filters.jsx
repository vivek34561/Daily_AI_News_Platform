import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { SlidersHorizontal, Eye } from 'lucide-react';

export const Filters = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    selectedImpact, 
    setSelectedImpact,
    selectedCountry,
    setSelectedCountry,
    filteredNews,
    theme
  } = useDashboard();

  const categories = [
    'All', 'Research', 'Product Launches', 'Startups', 
    'Open Source', 'Government Policy', 'Funding', 'Robotics', 'AI Agents'
  ];

  const impacts = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="space-y-4">
      {/* Category Pills Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Horizontal Scrolling Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/10' 
                    : theme === 'dark' 
                      ? 'bg-slate-900/30 hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-850' 
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 border border-slate-200/50'
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Action Counters / Impact Dropdowns */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Eye className="w-3.5 h-3.5" />
            <span>Showing {filteredNews.length} articles</span>
          </div>

          <div className="relative">
            <select
              value={selectedImpact}
              onChange={(e) => setSelectedImpact(e.target.value)}
              className={`
                appearance-none px-3.5 py-1.5 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 pr-8 font-semibold transition-all duration-300
                ${theme === 'dark' 
                  ? 'bg-slate-900/40 text-slate-200 border border-slate-800/80' 
                  : 'bg-white text-slate-700 border border-slate-200'
                }
              `}
            >
              <option value="All">All Impact</option>
              <option value="High">🔴 High</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
