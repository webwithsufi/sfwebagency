
import React from 'react';
import { services } from './serviceData.tsx';

interface ServicesProps {
  onSelectService?: (service: any) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 sm:py-32">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 sm:mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">How We Help You Grow</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Everything you need to <br/><span className="gradient-text">win more clients.</span></h3>
        </div>
        <p className="text-slate-500 max-w-sm text-lg sm:text-sm font-medium leading-relaxed">
          No confusing tech talk. Just real results, more customers, and a professional website that works for your business 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => onSelectService?.(service)}
            className="group p-8 sm:p-10 glass-card rounded-[2rem] sm:rounded-[2.5rem] flex flex-col h-full cursor-pointer hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all duration-500">
              {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-[15px] font-medium mb-6">
              {service.description}
            </p>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                Outcome: {service.outcome}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Learn More <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
