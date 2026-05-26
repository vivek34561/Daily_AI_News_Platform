import React, { useState } from 'react';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { TrendingTicker } from './components/TrendingTicker';
import { TopTrendCard } from './components/TopTrendCard';
import { Filters } from './components/Filters';
import { NewsGrid } from './components/NewsGrid';
import { AnalyticsPanel } from './components/AnalyticsPanel';
import { GitHubTrending } from './components/GitHubTrending';

const DashboardContent = () => {
  const { theme } = useDashboard();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={`
      flex h-screen w-screen overflow-hidden font-sans transition-colors duration-300
      ${theme === 'dark' ? 'bg-[#060913] text-slate-100' : 'bg-slate-50 text-slate-900'}
    `}>
      {/* Decorative Glow Dots for Dark Mode */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vh] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vh] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none z-0" />
        </>
      )}

      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Primary Dashboard Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        {/* Sticky Headers */}
        <TopBar toggleSidebar={toggleSidebar} />
        <TrendingTicker />

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Top Headline Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/10 pb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Aether News Dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real-time sovereign AI news, scientific models, and export compliance intelligence.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/10 border border-slate-700/10 text-xs font-bold text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sovereign Nodes Sync: Active</span>
            </div>
          </div>

          {/* Highlighted Hero Trend */}
          <TopTrendCard />

          {/* Data Analytics & Growth Comparison Charts */}
          <AnalyticsPanel />

          {/* Two-Column Grid: Feeds + Sidebar Repos */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Feeds Column */}
            <div className="xl:col-span-3 space-y-6">
              <Filters />
              <NewsGrid />
            </div>

            {/* Side Panel Widgets */}
            <div className="xl:col-span-1 space-y-6">
              <GitHubTrending />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}

export default App;
