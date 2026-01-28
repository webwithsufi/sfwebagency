
import React from 'react';
import { Search, Code, TrendingUp, MousePointer2, Users, Target } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Custom Website Building",
    description: "We build fast, beautiful websites that look great on phones and computers. Your site will be easy to use and designed to help you sell more."
  },
  {
    icon: <Search className="w-6 h-6 text-indigo-400" />,
    title: "Google Ranking (SEO)",
    description: "We help your business show up at the top of Google searches. When people look for what you offer, they find you first, not your competitors."
  },
  {
    icon: <Target className="w-6 h-6 text-pink-400" />,
    title: "Google Ads (PPC)",
    description: "Get instant traffic to your website. We manage your Google ads to make sure every dollar you spend brings in new leads and ready-to-buy customers."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Facebook & Social Ads",
    description: "We find your perfect customers on Facebook and Instagram. Our ads stop the scroll and turn social media users into loyal fans of your brand."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    title: "Full Brand Marketing",
    description: "Not sure where to start? We create a complete plan to grow your brand, reach more people, and build a professional image that people trust."
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-orange-400" />,
    title: "Sales & Lead Generation",
    description: "We don't just get you clicks; we get you customers. We optimize your site to turn random visitors into phone calls, emails, and sales."
  }
];

export const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl reveal reveal-left">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">How We Help You Grow</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Everything you need to <br/><span className="gradient-text">win more clients.</span></h3>
        </div>
        <p className="reveal reveal-right text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
          No confusing tech talk. Just real results, more customers, and a professional website that works for your business 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className={`reveal reveal-up delay-${(index % 3) * 100} group p-10 glass-card rounded-[2.5rem] flex flex-col h-full`}>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed text-[15px] font-medium flex-grow">
              {service.description}
            </p>
            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={scrollToContact}
                className="text-indigo-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
              >
                Learn More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
