
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft, ChevronDown, AlertTriangle, ExternalLink, Settings, Rocket, Copy, Check, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  // --- INSTANT ACTIVATION STEP ---
  // 1. Go to https://web3forms.com/
  // 2. Enter your email (dmwithsufi@gmail.com)
  // 3. Paste the Access Key you receive in your email below:
  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 
  // -------------------------------

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSetupError, setIsSetupError] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [copied, setCopied] = useState(false);

  const services = [
    "Custom Website Building",
    "Google Ranking (SEO)",
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
    setIsSetupError(false);

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setIsSetupError(true);
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Lead: ${selectedService} Inquiry`);
    formData.append("from_name", "Nexus Growth Agency");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setLoading(false);
      } else {
        throw new Error(data.message || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Connection error. Please try again.");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dmwithsufi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="reveal reveal-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Growth Terminal
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tighter leading-tight">Let's build your <br /><span className="gradient-text italic">digital empire.</span></h3>
          <p className="text-slate-400 mb-10 sm:mb-12 text-base sm:text-lg font-medium leading-relaxed max-w-lg">
            Direct access to Sufi's core strategy team. Our average response time for new inquiries is 4 business hours.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div onClick={copyEmail} className="flex items-center gap-4 sm:gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-slate-500 mb-0.5 sm:mb-1">Direct Email</p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-bold text-sm sm:text-base">dmwithsufi@gmail.com</p>
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-slate-500 mb-0.5 sm:mb-1">Voice / WhatsApp</p>
                <p className="text-white font-bold text-sm sm:text-base">+1 (555) 890-2341</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden reveal reveal-right border-white/5">
          {submitted ? (
            <div className="text-center py-10 sm:py-12 animate-in fade-in zoom-in duration-700">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                <CheckCircle size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Transmission Received</h4>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm sm:text-base">
                Your data has been secured. Our growth specialists will reach out to your provided email shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-2 mx-auto text-indigo-400 font-bold hover:text-white transition-colors uppercase text-[10px] tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Terminal
              </button>
            </div>
          ) : isSetupError ? (
            <div className="py-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                  <Zap size={24} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">Instant Activation</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Skip the Formspree Wait</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                {[
                  { step: "01", text: "Go to Web3Forms.com (it's instant)." },
                  { step: "02", text: "Enter your email: dmwithsufi@gmail.com" },
                  { step: "03", text: "Check your inbox for your Access Key." },
                  { step: "04", text: "Paste that key into Contact.tsx and save." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <span className="text-indigo-500 font-black text-xs">{item.step}</span>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://web3forms.com/#generate-key" 
                  target="_blank" 
                  className="w-full py-4 accent-gradient text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
                >
                  Get Instant Access Key <ExternalLink size={14} />
                </a>
                <button 
                  onClick={() => setIsSetupError(false)}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  Return to Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-xs font-bold animate-in fade-in slide-in-from-top-2">
                  <AlertTriangle size={16} /> {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Client Name</label>
                  <input 
                    name="name"
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input 
                    name="email"
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700" 
                    placeholder="contact@company.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Required Service</label>
                <div className="relative">
                  <select 
                    name="service"
                    required 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#020617]">Select service tier...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#020617]">{service}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Project Brief</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none placeholder:text-slate-700" 
                  placeholder="Goals, budget, and timeline..."
                ></textarea>
              </div>

              {/* Anti-spam honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-4 sm:py-5 accent-gradient text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-2xl shadow-indigo-600/20 disabled:opacity-50"
              >
                {loading ? 'Encrypting Data...' : 'Launch Strategy Request'} <Send size={16} />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-[8px] text-slate-600 font-black uppercase tracking-widest">
                <Settings size={10} className="animate-spin-slow" /> Security Layer: Active
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
