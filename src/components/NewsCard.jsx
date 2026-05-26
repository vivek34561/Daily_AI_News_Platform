import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Bookmark, Calendar, ArrowRight, Lightbulb, Compass, Share2 } from 'lucide-react';

export const NewsCard = ({ news }) => {
  const { theme, bookmarkedIds, toggleBookmark } = useDashboard();
  const [isExpanded, setIsExpanded] = useState(false);

  const isBookmarked = bookmarkedIds.includes(news.id);

  // Impact level badge styling
  const getImpactBadge = (level) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-500/10 text-red-400 border border-red-500/20';
      case 'medium':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
    }
  };

  const sentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '📈';
      case 'negative':
        return '📉';
      default:
        return '📊';
    }
  };

  return (
    <article className={`
      relative rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between
      ${isExpanded ? 'ring-1 ring-cyan-500/35' : ''}
      ${theme === 'dark' 
        ? 'glass-card text-slate-100 hover:border-slate-700/60 hover:shadow-cyan-950/10 hover:shadow-xl' 
        : 'glass-card-light text-slate-800 hover:border-slate-350 hover:shadow-slate-200 hover:shadow-xl'
      }
    `}>
      {/* Top Meta info */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base" title="Source Provider">
              {news.sourceLogo}
            </span>
            <span className="text-[11px] font-bold text-slate-400 tracking-wider">
              {news.source}
            </span>
          </div>

          <button
            onClick={() => toggleBookmark(news.id)}
            className={`
              p-1.5 rounded-lg border transition-all duration-300
              ${isBookmarked 
                ? 'bg-cyan-500/10 border-cyan-400/25 text-cyan-400' 
                : 'bg-transparent border-slate-700/10 text-slate-400 hover:text-slate-200'
              }
            `}
            title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Headline */}
        <h3 className="text-sm font-bold leading-snug tracking-tight hover:text-cyan-400 cursor-pointer transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}>
          {news.headline}
        </h3>

        {/* Summary Description */}
        <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
          {news.summary}
        </p>

        {/* Expansion Drawer (Why It Matters) */}
        {isExpanded && (
          <div className={`
            p-3.5 rounded-2xl border text-xs leading-relaxed animate-fadeIn space-y-2 mt-4
            ${theme === 'dark' ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/50'}
          `}>
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-cyan-400 text-[10px]">
              <Lightbulb className="w-3.5 h-3.5 fill-current" />
              <span>Sovereign Impact Matrix</span>
            </div>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
              {news.whyItMatters}
            </p>
            <div className="flex justify-between items-center pt-2 text-[10px] text-slate-400 font-mono border-t border-slate-700/10 mt-2">
              <span>Sentiment: {sentimentIcon(news.sentiment)} {news.sentiment}</span>
              <a 
                href={news.readMoreLink} 
                target="_blank" 
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold"
              >
                Full Intel <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-slate-700/10 pt-3.5 mt-5">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <Calendar className="w-3 h-3" />
          <span>{news.publishTime}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Country flag pill */}
          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-md ${
            news.country === 'India' 
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
              : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
          }`}>
            {news.country === 'India' ? '🇮🇳 IN' : '🌍 GL'}
          </span>

          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-md ${getImpactBadge(news.impactLevel)}`}>
            {news.impactLevel}
          </span>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-md hover:bg-slate-700/15 text-slate-400 hover:text-slate-200 transition-colors"
            title="Toggle Details"
          >
            <ArrowRight className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-90 text-cyan-400' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
};
