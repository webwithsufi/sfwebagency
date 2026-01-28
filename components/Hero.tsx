
import React from 'react';
import { ArrowRight, Sparkles, MoveUpRight, Globe2, Rocket, BarChart } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-44 pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="reveal reveal-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Sparkles size={14} className="animate-pulse" />
            <span>Scale Beyond Boundaries</span>
          </div>

          <h1 className="reveal reveal-up delay-100 text-6xl md:text-[8.5rem] font-black leading-[0.85] tracking-tighter text-white mb-10 uppercase">
            GET MORE <br />
            <span className="gradient-text italic">CUSTOMERS.</span>
          </h1>
          
          <p className="reveal reveal-up delay-200 max-w-2xl text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-medium px-4">
            We bridge the gap between imagination and market dominance 
            with elite web development and hyper-targeted SEO strategy.
          </p>

          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row items-center gap-8">
            <a 
              href="#contact" 
              onClick={(e) => scrollToId(e, '#contact')}
              className="px-12 py-5 accent-gradient text-white rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(99,102,241,0.5)]"
            >
              Build My Brand
            </a>
            <a 
              href="#ai-strategy" 
              onClick={(e) => scrollToId(e, '#ai-strategy')}
              className="group flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase hover:text-indigo-400 transition-colors"
            >
              AI Growth Engine <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Rocket size={24} className="text-indigo-400" />, title: "Market Dominance", label: "Outperform your competition" },
            { icon: <Globe2 size={24} className="text-purple-400" />, title: "Global Reach", label: "Fast, modern web engineering" },
            { icon: <BarChart size={24} className="text-pink-400" />, title: "Precision SEO", label: "Focus on ROI-driven traffic" }
          ].map((item, i) => (
            <div key={i} className={`reveal reveal-up delay-${(i + 4) * 100} glass-card p-10 rounded-[3rem] group`}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
