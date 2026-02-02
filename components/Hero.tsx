
import React from 'react';
import { ArrowRight, Sparkles, MoveUpRight, Globe2, Rocket, BarChart } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-28 sm:pt-44 pb-16 sm:pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="reveal reveal-up inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-10">
            <Sparkles size={12} className="animate-pulse md:size-[14px]" />
            <span className="truncate">Scale Beyond Boundaries</span>
          </div>

          <h1 className="reveal reveal-up delay-100 text-4xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black leading-[1] sm:leading-[0.85] tracking-tighter text-white mb-6 sm:mb-10 uppercase">
            GET MORE <br />
            <span className="gradient-text italic">CUSTOMERS.</span>
          </h1>
          
          <p className="reveal reveal-up delay-200 max-w-2xl text-sm sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-14 leading-relaxed font-medium px-0 sm:px-4">
            We bridge the gap between imagination and market dominance 
            with elite web development and hyper-targeted SEO strategy.
          </p>

          <div className="reveal reveal-up delay-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <a 
              href="#contact" 
              onClick={(e) => scrollToId(e, '#contact')}
              className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 accent-gradient text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(99,102,241,0.5)] text-center"
            >
              Build My Brand
            </a>
            <a 
              href="#ai-strategy" 
              onClick={(e) => scrollToId(e, '#ai-strategy')}
              className="group flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-indigo-400 transition-colors py-2"
            >
              AI Growth Engine <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: <Rocket size={20} className="text-indigo-400 md:size-6" />, title: "Market Dominance", label: "Outperform your competition" },
            { icon: <Globe2 size={20} className="text-purple-400 md:size-6" />, title: "Global Reach", label: "Fast, modern web engineering" },
            { icon: <BarChart size={20} className="text-pink-400 md:size-6" />, title: "Precision SEO", label: "Focus on ROI-driven traffic" }
          ].map((item, i) => (
            <div key={i} className={`reveal reveal-up delay-${(i + 4) * 100} glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] group h-full`}>
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-4 sm:mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-semibold text-[10px] sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
