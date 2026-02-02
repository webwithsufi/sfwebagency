
import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Terminal, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface StrategyResult {
  title: string;
  points: string[];
  timeline: string;
  priority: 'High' | 'Medium' | 'Low';
}

export const GrowthTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StrategyResult[] | null>(null);

  const generateStrategy = async () => {
    if (!niche || loading) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Safe check for process.env to prevent ReferenceError in browser
      const env = typeof process !== 'undefined' ? process.env : (window as any).process?.env;
      const apiKey = env?.API_KEY;

      if (!apiKey) {
        throw new Error("AI Engine configuration is missing (API_KEY). Please ensure it is set in your environment variables.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{
          parts: [{
            text: `Generate an elite level digital growth strategy for a business in the niche: "${niche}". Provide professional, deeply technical insights regarding SEO, Web Development, and Digital Marketing. Output exactly 3 key strategic pillars as JSON.`
          }]
        }],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                points: { type: Type.ARRAY, items: { type: Type.STRING } },
                timeline: { type: Type.STRING },
                priority: { type: Type.STRING }
              },
              required: ["title", "points", "timeline", "priority"]
            }
          }
        }
      });

      const text = response.text;
      if (!text) throw new Error("The AI returned an empty response.");
      
      const data = JSON.parse(text);
      setResult(data);
    } catch (err: any) {
      console.error("AI Growth Engine Error:", err);
      setError(err.message || "Failed to connect to the AI engine. Please verify your connection.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative glass-card p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[4rem] border-indigo-500/10 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 sm:opacity-10 pointer-events-none select-none">
          <Terminal size={120} className="text-indigo-500" />
        </div>

        <div className="text-center mb-10 sm:mb-16 relative z-10">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl accent-gradient flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl shadow-indigo-500/40">
            <Sparkles size={32} className="text-white animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">AI Growth Engine</h2>
          <p className="text-slate-500 text-sm sm:text-lg font-medium px-4 max-w-2xl mx-auto">
            Input your niche to receive a data-driven scaling roadmap in real-time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16 relative z-10">
          <input 
            type="text"
            placeholder="e.g. Real Estate Agency, SAAS platform"
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-bold text-sm sm:text-base"
            value={niche}
            onChange={(e) => {
              setNiche(e.target.value);
              if (error) setError(null);
            }}
            onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
          />
          <button 
            onClick={generateStrategy}
            disabled={loading || !niche}
            className="px-8 sm:px-12 py-4 sm:py-5 accent-gradient text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] text-xs sm:text-sm whitespace-nowrap"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {loading ? 'Analyzing...' : 'Generate Insights'}
          </button>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-10 p-5 sm:p-6 bg-red-500/10 border border-red-500/20 rounded-2xl sm:rounded-3xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <AlertCircle className="text-red-400 shrink-0 mt-1" size={20} />
            <div className="flex-1">
              <h5 className="text-red-400 font-black text-[10px] uppercase tracking-widest mb-1">System Error</h5>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{error}</p>
              <button 
                onClick={generateStrategy}
                className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white hover:text-red-400 transition-colors"
              >
                <RefreshCw size={10} /> Re-try Connection
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in zoom-in duration-1000 relative z-10">
            {result.map((strategy, i) => (
              <div key={i} className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[3rem] hover:border-indigo-500/40 transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className={`px-3 sm:px-4 py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest ${
                    strategy.priority.toLowerCase().includes('high') ? 'bg-indigo-500 text-white' : 'bg-white/10 text-slate-500'
                  }`}>
                    {strategy.priority} Priority
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-600 font-black uppercase">{strategy.timeline}</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-black text-white mb-4 sm:mb-6 leading-tight flex-grow-0 group-hover:text-indigo-400 transition-colors">
                  {strategy.title}
                </h4>
                <ul className="space-y-3 sm:space-y-5 flex-grow mb-8">
                  {strategy.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                      {p}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="mt-auto w-full py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Start Project <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
