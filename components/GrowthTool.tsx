
import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Terminal, ArrowRight } from 'lucide-react';
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
  const [result, setResult] = useState<StrategyResult[] | null>(null);

  const generateStrategy = async () => {
    if (!niche) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate an elite level digital growth strategy for a business in the niche: "${niche}". 
                   Provide professional, deeply technical insights. Output 3 key strategic pillars.`,
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

      const data = JSON.parse(response.text || '[]');
      setResult(data);
    } catch (error) {
      console.error("AI Generation failed:", error);
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
      <div className="relative glass-card p-12 md:p-20 rounded-[4rem] border-indigo-500/10">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Terminal size={120} className="text-indigo-500" />
        </div>

        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-3xl accent-gradient flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/30">
            <Sparkles size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">AI Growth Engine</h2>
          <p className="text-slate-500 text-lg font-medium">Market-specific roadmaps generated in seconds.</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 mb-16">
          <input 
            type="text"
            placeholder="What industry are you disrupting? (e.g. Fintech, Luxury Fashion)"
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          />
          <button 
            onClick={generateStrategy}
            disabled={loading || !niche}
            className="px-10 py-5 accent-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:brightness-110 disabled:opacity-50 shadow-xl"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            {loading ? 'Synthesizing...' : 'Generate Insights'}
          </button>
        </div>

        {result && (
          <div className="grid md:grid-cols-3 gap-8">
            {result.map((strategy, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-indigo-500/30 transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    strategy.priority === 'High' ? 'bg-indigo-500 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                    {strategy.priority} Priority
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{strategy.timeline}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-6 leading-tight flex-grow-0">{strategy.title}</h4>
                <ul className="space-y-4 flex-grow">
                  {strategy.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-[13px] text-slate-400 leading-relaxed font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="mt-8 w-full py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-indigo-600/5"
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
