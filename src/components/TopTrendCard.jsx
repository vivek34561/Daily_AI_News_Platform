import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Flame, Brain, Share2, Compass, Shield } from 'lucide-react';

export const TopTrendCard = () => {
  const { theme } = useDashboard();

  return (
    <div className={`
      relative overflow-hidden rounded-3xl p-6 border transition-all duration-350 hover:shadow-2xl
      ${theme === 'dark' 
        ? 'bg-slate-900/40 border-slate-750' 
        : 'bg-white border-slate-200'
      }
    `}>
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 rounded-full bg-gradient-to-tr from-violet-500/10 to-indigo-500/25 blur-3xl" />

      {/* Main Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/20 text-orange-500 uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-current" />
              Trend of the Day
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
              Agentic AI
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
            The Rise of "Agentic Science" & Decentralized Physical Robotics
          </h2>

          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Today's global intelligence landscape signals a double-pivot. AI workflows are transitioning from chat interfaces to autonomous science orchestrators (e.g., DeepMind's Co-Scientist generating hypotheses in production). Simultaneously, open-source physical robotics has hit commercial scale, with Hugging Face logging over 10,000 developer unit sales of the Reachy Mini.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${theme === 'dark' ? 'bg-slate-950/30 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <span>Multi-Agent Protocols</span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${theme === 'dark' ? 'bg-slate-950/30 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Open Hardware</span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${theme === 'dark' ? 'bg-slate-950/30 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sandboxed Execution</span>
            </div>
          </div>
        </div>

        {/* Highlight Stats Block */}
        <div className={`
          w-full lg:w-72 p-5 rounded-2xl border flex flex-col gap-4 relative overflow-hidden shrink-0
          ${theme === 'dark' 
            ? 'bg-slate-950/60 border-slate-850' 
            : 'bg-slate-50 border-slate-100'
          }
        `}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Projected Impact Level</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-mono bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">CRITICAL</span>
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-700/10 pt-3">
            <div>
              <span className="text-[10px] text-slate-400 block">Sovereign Adoption</span>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Rapid (India)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Investment Pace</span>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Exponential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
