
import React from 'react';
import { SEO } from './SEO';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { GrowthTool } from './GrowthTool';

interface AIStrategyPageProps {
  onBack: (targetId?: string) => void;
}

export const AIStrategyPage: React.FC<AIStrategyPageProps> = ({ onBack }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sf-growth-agency.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Strategy Engine",
        "item": "https://sf-growth-agency.vercel.app/ai-strategy"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <SEO 
        title="AI Strategy Engine" 
        description="Use our AI Strategy Engine to see how much more money your business could be making. Get a simple roadmap to scale your revenue in 2026." 
        canonical="https://sf-growth-agency.vercel.app/ai-strategy"
        schema={breadcrumbSchema}
      />

      <button 
        onClick={() => onBack()}
        className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-[10px] tracking-widest mb-12 hover:text-white transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
      </button>

      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-indigo-500/20 mb-6">
          <Sparkles size={14} /> AI-Powered Growth Tool
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight uppercase">
          AI Strategy <span className="gradient-text">Engine</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto px-4">
          Calculate your potential, identify bottlenecks, and get a data-driven roadmap to scale your revenue.
        </p>
      </div>

      <div className="glass-card p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
        <GrowthTool />
      </div>

      <div className="mt-16 sm:mt-20 p-8 sm:p-16 glass-card rounded-[2rem] sm:rounded-[3rem] text-center bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready for a <span className="gradient-text">Human Audit?</span></h2>
        <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg font-medium max-w-2xl mx-auto px-4">
          Our AI provides the roadmap, but our experts provide the execution. Get a free manual audit from our growth team.
        </p>
        <button 
          onClick={() => onBack('#contact')}
          className="px-8 py-4 sm:px-10 sm:py-5 accent-gradient text-white rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform"
        >
          Book Your Free Audit
        </button>
      </div>
    </div>
  );
};
