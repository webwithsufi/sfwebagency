import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, ArrowLeft, ChevronDown, AlertTriangle, Copy, Check, Zap, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [customBudget, setCustomBudget] = useState('');
  const [copied, setCopied] = useState(false);

  const services = [
    "Custom Website Building",
    "Google Ranking (SEO)",
    "Social Media Management",
    "Google Ads (PPC)",
    "Facebook & Social Ads",
    "Full Brand Marketing",
    "Sales & Lead Generation",
    "Other / General Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Handle custom budget logic
    if (selectedBudget === 'custom') {
      data.budget = customBudget;
    } else if (selectedBudget === 'discuss') {
      data.budget = 'Discuss Later';
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Server error: ${response.status}`);
      }

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorMessage = typeof result.error === 'object' 
          ? JSON.stringify(result.error) 
          : (result.error || "Submission failed. Please try again.");
        throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.error("Contact form error:", err);
      setError(err.message || "Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dmwithsufi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start text-center lg:text-left">
        <div className="sticky top-32 flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
            <Zap size={12} /> Priority Access
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
            Let's build your <br /><span className="gradient-text italic">digital empire.</span>
          </h3>
          <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed max-w-lg">
            Ready to get more clients online? Our team specializes in aggressive growth strategies for ambitious brands. Expect a response within 4 hours.
          </p>

          <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
            <div onClick={copyEmail} className="flex items-center gap-5 group cursor-pointer w-fit p-4 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-card flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0 border-indigo-500/20">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">Direct Line</p>
                <div className="flex items-center gap-2">
                   <p className="text-white font-bold text-base sm:text-lg">dmwithsufi@gmail.com</p>
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 group p-4 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-card flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shrink-0 border-green-500/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">WhatsApp Us</p>
                <p className="text-white font-bold text-base sm:text-lg">03203632155</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-2xl text-left">
          {submitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                <CheckCircle size={48} className="animate-bounce" />
              </div>
              <h4 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Transmission Received</h4>
              <p className="text-slate-400 font-medium mb-12 leading-relaxed text-lg">
                Your data has been encrypted and sent to our growth team. Check your inbox shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-2 mx-auto text-indigo-400 font-black hover:text-white transition-colors uppercase text-xs tracking-widest"
              >
                <ArrowLeft size={16} /> New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                <ShieldCheck size={20} className="text-indigo-500" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Secure Consultation Form</span>
              </div>

              {error && (
                <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  <AlertTriangle size={20} className="shrink-0" /> {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Identity</label>
                  <input 
                    id="contact-name"
                    name="name"
                    required 
                    type="text" 
                    aria-required="true"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Work Email</label>
                  <input 
                    id="contact-email"
                    name="email"
                    required 
                    type="email" 
                    aria-required="true"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-service" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Service Tier</label>
                  <div className="relative">
                    <select 
                      id="contact-service"
                      name="service"
                      required 
                      aria-required="true"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="bg-[#020617]">Select expertise required...</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#020617]">{service}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-budget" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Project Budget</label>
                  <div className="relative">
                    <select 
                      id="contact-budget"
                      name="budget"
                      required 
                      aria-required="true"
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="bg-[#020617]">Select budget range...</option>
                      <option value="Rs. 15,000 - 30,000" className="bg-[#020617]">Rs. 15,000 - 30,000</option>
                      <option value="Rs. 30,000 - 75,000" className="bg-[#020617]">Rs. 30,000 - 75,000</option>
                      <option value="Rs. 75,000+" className="bg-[#020617]">Rs. 75,000+</option>
                      <option value="custom" className="bg-[#020617]">Set Custom Budget</option>
                      <option value="discuss" className="bg-[#020617]">Discuss Later</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {selectedBudget === 'custom' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label htmlFor="custom-budget" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Specific Budget</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-bold">Rs.</span>
                    <input 
                      id="custom-budget"
                      type="text"
                      required
                      value={customBudget}
                      onChange={(e) => setCustomBudget(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700 font-medium"
                      placeholder="e.g. 50,000"
                    />
                  </div>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest ml-1">Enter your preferred investment amount</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Project Brief</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  rows={4} 
                  required 
                  aria-required="true"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-slate-700 font-medium" 
                  placeholder="Tell us about your current bottlenecks and growth targets..."
                ></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-5 accent-gradient text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:brightness-110 active:scale-95 shadow-[0_20px_50px_-15px_rgba(99,102,241,0.5)] disabled:opacity-50"
              >
                {loading ? 'Encrypting & Sending...' : 'Get a Free Proposal'} <Send size={18} />
              </button>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={12} className="text-emerald-500" /> SSL Secured
                </span>
                <div className="h-px bg-white/5 flex-1" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};