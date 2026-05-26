import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Flame, Radio } from 'lucide-react';

export const TrendingTicker = () => {
  const { theme } = useDashboard();
  
  const tickerItems = [
    "⚡ BREAKING: OpenAI reports record $5.7B Q1 revenue with 122% operating margin loss",
    "🤖 ROBOTICS: Hugging Face hits landmark milestone of 10,000 Reachy Mini robots sold globally",
    "🎓 IIT Madras AI4Bharat open-sources speech models supporting 22 Indian regional languages",
    "🇨🇳 MARKET SHIFT: China monthly Hugging Face model downloads surpass US for the first time",
    "⚖️ SEMICONDUCTORS: Taiwanese prosecutors raid 12 locations over forged server exports to China",
    "🔬 DEEPMIND: Co-Scientist multi-agent system powered by Gemini 3.5 begins scientific trials",
    "🏛️ POLICY: EU provisonal agreements defer High-Risk AI compliance deadlines to late 2027"
  ];

  // Repeat items to fill space and guarantee infinite smooth scrolling loop
  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className={`
      flex items-center gap-3 py-2 px-6 overflow-hidden border-b text-xs border-slate-700/10 font-mono
      ${theme === 'dark' ? 'bg-slate-950/40 text-cyan-400' : 'bg-slate-50 text-indigo-600'}
    `}>
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider shrink-0 bg-red-500/10 text-red-500 px-2 py-0.5 rounded-lg border border-red-500/15">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>Live</span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-ticker flex gap-12 select-none">
          {repeatedItems.map((text, idx) => (
            <span key={idx} className="flex items-center gap-2 font-medium">
              <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
