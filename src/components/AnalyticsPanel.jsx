import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { growthData, sentimentStats } from '../data/newsData';
import { BarChart2, Smile, AlertTriangle } from 'lucide-react';

export const AnalyticsPanel = () => {
  const { theme } = useDashboard();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* India vs Global AI Growth Chart */}
      <div className={`
        lg:col-span-2 p-5 rounded-3xl border flex flex-col justify-between h-[300px] relative overflow-hidden
        ${theme === 'dark' 
          ? 'bg-slate-900/40 border-slate-750' 
          : 'bg-white border-slate-200'
        }
      `}>
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/10">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold tracking-tight">AI Deployment Growth Pace (IN vs Global)</h3>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold">
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /> India Focus</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500" /> Global Scale</span>
          </div>
        </div>

        <div className="flex-1 w-full h-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIndia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGlobal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                stroke={theme === 'dark' ? '#64748b' : '#94a3b8'} 
                fontSize={10} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke={theme === 'dark' ? '#64748b' : '#94a3b8'} 
                fontSize={10} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#0d111c' : '#ffffff',
                  borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                  borderRadius: '12px',
                  fontSize: '11px',
                  color: theme === 'dark' ? '#f1f5f9' : '#1e293b'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="India" 
                stroke="#06b6d4" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorIndia)" 
              />
              <Area 
                type="monotone" 
                dataKey="Global" 
                stroke="#6366f1" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorGlobal)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sentiment Analysis Widget */}
      <div className={`
        p-5 rounded-3xl border flex flex-col justify-between h-[300px]
        ${theme === 'dark' 
          ? 'bg-slate-900/40 border-slate-750' 
          : 'bg-white border-slate-200'
        }
      `}>
        <div className="flex items-center gap-2 pb-4 border-b border-slate-700/10">
          <Smile className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold tracking-tight">Global AI Market Sentiment</h3>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-4 pt-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Positive Integration</span>
            <span className="text-emerald-400 font-mono">{sentimentStats.positive}%</span>
          </div>
          <div className="w-full bg-slate-700/20 h-2.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${sentimentStats.positive}%` }} />
          </div>

          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Neutral Scaling</span>
            <span className="text-cyan-400 font-mono">{sentimentStats.neutral}%</span>
          </div>
          <div className="w-full bg-slate-700/20 h-2.5 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${sentimentStats.neutral}%` }} />
          </div>

          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Geopolitical Friction</span>
            <span className="text-red-400 font-mono">{sentimentStats.negative}%</span>
          </div>
          <div className="w-full bg-slate-700/20 h-2.5 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full rounded-full" style={{ width: `${sentimentStats.negative}%` }} />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-700/10 border border-slate-700/15 p-3 rounded-2xl text-[11px] text-slate-400">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Bullish integration continues, minor risks from export control regulations.</span>
        </div>
      </div>
    </div>
  );
};
