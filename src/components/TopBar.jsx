import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Search, Bell, RefreshCw, Menu, CheckCircle } from 'lucide-react';

export const TopBar = ({ toggleSidebar }) => {
  const { 
    searchQuery, 
    setSearchQuery, 
    unreadCount, 
    notifications, 
    clearNotifications,
    isRefreshing,
    triggerRefresh,
    theme
  } = useDashboard();

  const [showNotifPanel, setShowNotifPanel] = useState(false);

  return (
    <header className={`
      sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b border-slate-700/20 backdrop-blur-md
      ${theme === 'dark' ? 'bg-slate-900/60 text-slate-100' : 'bg-white/60 text-slate-800'}
    `}>
      {/* Mobile Menu & Search Icon */}
      <div className="flex items-center gap-4 flex-1 md:flex-none">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-xl bg-slate-850 border border-slate-700/20 text-slate-400 hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar */}
        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search raw intelligence, algorithms, policy filings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`
              w-full py-2 pl-10 pr-4 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-slate-950/40 text-slate-100 placeholder-slate-500 border border-slate-800/60' 
                : 'bg-slate-100 text-slate-900 placeholder-slate-400 border border-slate-200'
              }
            `}
          />
        </div>
      </div>

      {/* Action Utilities */}
      <div className="flex items-center gap-4">
        {/* Mobile Search input for narrow screens */}
        <div className="relative block sm:hidden max-w-xs">
          <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`
              w-32 focus:w-44 py-1.5 pl-8 pr-3 text-xs rounded-xl focus:outline-none transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-slate-950/40 text-slate-100 placeholder-slate-500 border border-slate-800/60' 
                : 'bg-slate-100 text-slate-900 placeholder-slate-400 border border-slate-200'
              }
            `}
          />
        </div>

        {/* Live Refresh Trigger */}
        <button
          onClick={triggerRefresh}
          disabled={isRefreshing}
          className={`
            p-2 rounded-xl transition-all duration-300 flex items-center gap-2 text-xs font-semibold
            ${isRefreshing ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800/30 text-slate-400 hover:text-slate-200 border border-slate-700/25'}
          `}
          title="Refresh intelligence feeds"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="hidden md:inline">{isRefreshing ? 'Syncing...' : 'Sync Feed'}</span>
        </button>

        {/* Notifications Menu Trigger */}
        <div className="relative">
          <button
            onClick={() => setShowNotifPanel(!showNotifPanel)}
            className={`
              p-2.5 rounded-xl border border-slate-700/25 bg-slate-800/30 text-slate-400 hover:text-slate-200 transition-colors relative
            `}
            title="Intelligence Alerts"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-slate-900">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Floating Dropdown Panel */}
          {showNotifPanel && (
            <div className={`
              absolute right-0 mt-3 w-80 rounded-2xl border shadow-xl backdrop-blur-2xl p-4 transition-all duration-300 z-50
              ${theme === 'dark' 
                ? 'bg-slate-950/95 border-slate-800 text-slate-100' 
                : 'bg-white/95 border-slate-200 text-slate-900'
              }
            `}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/10 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Intelligence Alerts</span>
                {unreadCount > 0 && (
                  <button 
                    onClick={clearNotifications}
                    className="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3" /> Mark as Read
                  </button>
                )}
              </div>
              <ul className="space-y-2.5 max-h-60 overflow-y-auto">
                {notifications.map((notif) => (
                  <li 
                    key={notif.id} 
                    className={`
                      p-2.5 rounded-xl text-xs flex gap-2.5 items-start transition-all
                      ${notif.unread ? 'bg-cyan-500/10 border-l-2 border-cyan-400' : 'bg-slate-800/15'}
                    `}
                  >
                    <span className="text-sm mt-0.5">{notif.unread ? '🔵' : '⚪'}</span>
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>{notif.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
