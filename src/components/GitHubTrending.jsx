import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { gitHubRepos } from '../data/newsData';
import { Star, GitFork, ArrowUpRight } from 'lucide-react';

export const GitHubTrending = () => {
  const { theme } = useDashboard();

  const getLanguageColor = (lang) => {
    switch (lang.toLowerCase()) {
      case 'python': return 'bg-blue-500';
      case 'typescript': return 'bg-indigo-500';
      case 'go': return 'bg-cyan-500';
      default: return 'bg-yellow-500';
    }
  };

  return (
    <div className={`
      p-5 rounded-3xl border flex flex-col justify-between space-y-4
      ${theme === 'dark' 
        ? 'bg-slate-900/40 border-slate-750' 
        : 'bg-white border-slate-200'
      }
    `}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-700/10">
        <div className="flex items-center gap-2">
          <GitFork className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold tracking-tight">Viral AI Repositories</h3>
        </div>
        <a 
          href="https://github.com/trending" 
          target="_blank" 
          rel="noreferrer"
          className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center font-bold uppercase tracking-wider gap-0.5"
        >
          View All <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <ul className="space-y-4 flex-1">
        {gitHubRepos.map((repo, idx) => (
          <li 
            key={idx} 
            className={`
              p-3.5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5
              ${theme === 'dark' 
                ? 'bg-slate-950/40 border-slate-850 hover:border-slate-800' 
                : 'bg-slate-50 border-slate-100 hover:border-slate-200'
              }
            `}
          >
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs font-bold leading-tight font-mono text-cyan-400 hover:underline cursor-pointer truncate">
                {repo.name}
              </span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 shrink-0">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{repo.stars}</span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 leading-snug mt-1.5 line-clamp-2">
              {repo.desc}
            </p>

            <div className="flex items-center gap-2 mt-3.5 text-[10px] text-slate-500 font-mono">
              <span className={`h-2 w-2 rounded-full ${getLanguageColor(repo.lang)}`} />
              <span>{repo.lang}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
