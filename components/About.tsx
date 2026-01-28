
import React from 'react';
import { Shield, Lightbulb, Users, Target, Rocket, Award } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    { icon: <Shield className="text-blue-400" />, title: "Radical Transparency", text: "We don't hide behind jargon. You get clear reports and honest feedback on your growth." },
    { icon: <Lightbulb className="text-amber-400" />, title: "Relentless Innovation", text: "We use the latest AI and tech tools to ensure your business stays ahead of the curve." },
    { icon: <Award className="text-emerald-400" />, title: "Result-First Thinking", text: "Clicks are nice, but sales are better. Everything we do is measured by your ROI." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 border-b border-white/5 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative reveal reveal-left">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Who We Are</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
            We don't just build sites. <br />
            <span className="gradient-text italic">We build empires.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
            Nexus Growth Agency was founded on a simple realization: most businesses are being left behind by slow tech and outdated marketing. 
            We bridge that gap with elite engineering and psychological marketing tactics that demand attention.
          </p>
          <div className="flex gap-10">
            <div className="reveal reveal-up delay-200">
              <p className="text-4xl font-black text-white mb-1">98%</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Client Retention</p>
            </div>
            <div className="reveal reveal-up delay-300">
              <p className="text-4xl font-black text-white mb-1">10x</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Average ROAS</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {values.map((v, i) => (
            <div key={i} className={`reveal reveal-right delay-${(i + 1) * 200} glass-card p-8 rounded-[2rem] flex gap-6 items-start group`}>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
