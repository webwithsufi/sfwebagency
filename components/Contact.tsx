
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft, ChevronDown } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    "Custom Website Building",
    "Google Ranking (SEO)",
    "Google Ads (PPC)",
    "Facebook & Social Ads",
    "Full Brand Marketing",
    "Sales & Lead Generation",
    "Other / General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call - In a real app, this would send data to dmwithsufi@gmail.com via a backend/service
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Contact Nexus
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to outpace <br />your competition?</h3>
          <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed max-w-lg">
            Our specialists help brands scale through high-end web development and marketing systems. 
            Send us your query and let's build something great.
          </p>

          <div className="space-y-8">
            {[
              { icon: <Mail size={20} />, label: "Email", value: "dmwithsufi@gmail.com", color: "text-indigo-400" },
              { icon: <Phone size={20} />, label: "Voice", value: "+1 (555) 890-2341", color: "text-purple-400" },
              { icon: <MapPin size={20} />, label: "HQ", value: "Available Globally", color: "text-pink-400" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl glass-card flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                <CheckCircle size={48} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">Success!</h4>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                Your message has been sent to dmwithsufi@gmail.com. We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-2 mx-auto text-indigo-400 font-bold hover:text-white transition-colors uppercase text-xs tracking-widest"
              >
                <ArrowLeft size={16} /> Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Service Interest</label>
                <div className="relative">
                  <select 
                    required 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#020617]">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#020617]">{service}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Project Goals</label>
                <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-slate-700" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-5 accent-gradient text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-2xl shadow-indigo-600/20 disabled:opacity-50"
              >
                {loading ? 'Sending Request...' : 'Initiate Contact'} <Send size={16} />
              </button>
              <p className="text-[10px] text-center text-slate-600 font-bold uppercase tracking-widest">
                Direct to: dmwithsufi@gmail.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
