import React from 'react';
import { useDashboard } from '../context/DashboardContext';

export const SkeletonLoader = () => {
  const { theme } = useDashboard();

  return (
    <div className={`
      animate-pulse rounded-3xl p-5 border flex flex-col justify-between h-52 space-y-4
      ${theme === 'dark' ? 'bg-slate-900/35 border-slate-800' : 'bg-slate-100 border-slate-200'}
    `}>
      <div className="space-y-3">
        {/* Header row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-slate-700/50" />
            <div className="h-3 w-16 rounded-md bg-slate-700/50" />
          </div>
          <div className="h-6 w-6 rounded-md bg-slate-700/50" />
        </div>

        {/* Title Lines */}
        <div className="h-4 w-5/6 rounded-md bg-slate-700/50" />
        <div className="h-4 w-3/4 rounded-md bg-slate-700/50" />

        {/* Desc Line */}
        <div className="h-3 w-full rounded-md bg-slate-700/30" />
      </div>

      {/* Footer row */}
      <div className="flex justify-between items-center pt-3 border-t border-slate-700/10">
        <div className="h-3 w-14 rounded-md bg-slate-700/50" />
        <div className="flex gap-2">
          <div className="h-4 w-10 rounded-md bg-slate-700/50" />
          <div className="h-4 w-12 rounded-md bg-slate-700/50" />
        </div>
      </div>
    </div>
  );
};
