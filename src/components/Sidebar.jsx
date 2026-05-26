import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { 
  Cpu, 
  Bookmark, 
  Globe, 
  Sun, 
  Moon, 
  Flame, 
  Compass, 
  BarChart2, 
  GitBranch, 
  MessageSquare,
  Menu,
  X
} from 'lucide-react';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { 
    selectedCountry, 
    setSelectedCountry, 
    theme, 
    toggleTheme, 
    bookmarkedIds,
    setSelectedCategory
  } = useDashboard();

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // When changing country, show all categories for that country
    setSelectedCategory('All');
  };

  const navItems = [
    { id: 'All', label: 'All Intelligence', icon: Compass, action: () => handleCountrySelect('All') },
    { id: 'India', label: 'India AI Focus', icon: Cpu, action: () => handleCountrySelect('India') },
    { id: 'Global', label: 'Global Developments', icon: Globe, action: () => handleCountrySelect('Global') }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/55 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 h-full transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:z-10
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${theme === 'dark' ? 'glass-panel text-slate-100' : 'glass-panel-light text-slate-800'}
        border-r border-slate-700/20 backdrop-blur-xl
      `}>
        {/* Header Logo */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/20">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20">
              <Flame className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-wider bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                AETHER NEWS
              </h1>
              <span className="text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                Intelligence Hub
              </span>
            </div>
          </div>
          <button 
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-700/20"
            onClick={toggleSidebar}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <span className="px-3 text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
              Core Feeds
            </span>
            <ul className="mt-2 space-y-1">
              {navItems.map((item) => {
                const isActive = selectedCountry === item.id;
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        item.action();
                        if (window.innerWidth < 768) toggleSidebar();
                      }}
                      className={`
                        flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                        ${isActive 
                          ? 'bg-gradient-to-r from-cyan-500/15 via-indigo-500/10 to-transparent text-cyan-400 border-l-2 border-cyan-400' 
                          : 'hover:bg-slate-700/10 text-slate-400 hover:text-slate-200'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <span className="px-3 text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
              Workspace
            </span>
            <ul className="mt-2 space-y-1">
              <li>
                <button
                  onClick={() => {
                    setSelectedCountry('Saved');
                    if (window.innerWidth < 768) toggleSidebar();
                  }}
                  className={`
                    flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                    ${selectedCountry === 'Saved' 
                      ? 'bg-gradient-to-r from-cyan-500/15 via-indigo-500/10 to-transparent text-cyan-400 border-l-2 border-cyan-400' 
                      : 'hover:bg-slate-700/10 text-slate-400 hover:text-slate-200'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-4 h-4" />
                    <span>Bookmarked News</span>
                  </div>
                  {bookmarkedIds.length > 0 && (
                    <span className="px-2 py-0.5 text-xs font-bold font-mono rounded-full bg-cyan-500/20 text-cyan-400">
                      {bookmarkedIds.length}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Settings & Theme Toggle */}
        <div className="p-4 border-t border-slate-700/20 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/25 border border-slate-700/15">
            <span className="text-xs font-medium text-slate-400">Appearance</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-700/20 text-slate-300 hover:text-white transition-colors"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
          </div>

          <div className="text-center">
            <span className="text-[10px] text-slate-500 font-mono">Antigravity News Engine v2.0</span>
          </div>
        </div>
      </aside>
    </>
  );
};
