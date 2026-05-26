import React, { createContext, useContext, useState, useEffect } from 'react';
import { newsData } from '../data/newsData';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedImpact, setSelectedImpact] = useState('All');
  
  // Dynamic list of unique dates in data, sorted descending (latest first)
  const availableDates = [...new Set(newsData.map(news => news.date))].sort((a, b) => new Date(b) - new Date(a));
  
  // Set default to latest available date
  const [selectedDate, setSelectedDate] = useState(availableDates[0] || '2026-05-26');
  
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "🔥 DeepMind's Co-Scientist model has launched!", unread: true },
    { id: 2, text: "🚨 Smuggled Nvidia server crackdowns reported in Taiwan.", unread: true },
    { id: 3, text: "🚀 Sarvam and Krutrim speed up India's LLM race.", unread: false }
  ]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const newNotif = {
        id: Date.now(),
        text: `🔄 Database refreshed successfully! Sync'd date-wise nodes.`,
        unread: true
      };
      setNotifications(prev => [newNotif, ...prev]);
    }, 1500);
  };

  const clearNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || news.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesCountry = selectedCountry === 'All' || news.country.toLowerCase() === selectedCountry.toLowerCase();
    const matchesImpact = selectedImpact === 'All' || news.impactLevel.toLowerCase() === selectedImpact.toLowerCase();
    
    // Bookmark views bypass date filter to show all saved, standard feeds match date
    const matchesDate = selectedCountry === 'Saved' || news.date === selectedDate;

    return matchesSearch && matchesCategory && matchesCountry && matchesImpact && matchesDate;
  });

  return (
    <DashboardContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      selectedCountry,
      setSelectedCountry,
      selectedImpact,
      setSelectedImpact,
      selectedDate,
      setSelectedDate,
      availableDates,
      bookmarkedIds,
      toggleBookmark,
      theme,
      toggleTheme,
      isRefreshing,
      triggerRefresh,
      notifications,
      unreadCount,
      clearNotifications,
      filteredNews,
      allNews: newsData
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
