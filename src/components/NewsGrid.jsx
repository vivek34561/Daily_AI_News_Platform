import React, { useEffect, useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { NewsCard } from './NewsCard';
import { SkeletonLoader } from './SkeletonLoader';
import { Inbox, Bookmark, Cpu } from 'lucide-react';

export const NewsGrid = () => {
  const { filteredNews, selectedCountry, bookmarkedIds, allNews, isRefreshing, theme } = useDashboard();
  const [isLoading, setIsLoading] = useState(false);

  // Sync loader with refresh state to show skeletons
  useEffect(() => {
    if (isRefreshing) {
      setIsLoading(true);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isRefreshing]);

  // Determine what list of news to show
  let displayNews = filteredNews;
  if (selectedCountry === 'Saved') {
    displayNews = allNews.filter(n => bookmarkedIds.includes(n.id));
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map(id => <SkeletonLoader key={id} />)}
      </div>
    );
  }

  if (displayNews.length === 0) {
    return (
      <div className={`
        flex flex-col items-center justify-center p-12 rounded-3xl border text-center space-y-4
        ${theme === 'dark' ? 'bg-slate-900/10 border-slate-800' : 'bg-slate-50 border-slate-200'}
      `}>
        {selectedCountry === 'Saved' ? (
          <>
            <Bookmark className="w-12 h-12 text-slate-500 animate-bounce" />
            <h3 className="text-base font-bold">No saved intelligence nodes</h3>
            <p className="text-xs text-slate-400 max-w-sm">
              Tap the bookmark icon on any news card to compile custom intelligence briefings.
            </p>
          </>
        ) : (
          <>
            <Inbox className="w-12 h-12 text-slate-500 animate-pulse" />
            <h3 className="text-base font-bold">Zero signals matched your filters</h3>
            <p className="text-xs text-slate-400 max-w-sm">
              Adjust your search keywords or clear the category and impact levels to discover active feeds.
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {displayNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};
