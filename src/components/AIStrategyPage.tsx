import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from './SEO';

const AIStrategyPage = () => {
  const strategies = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      title: "AI Content Strategy",
      description: "We use AI to find exactly what your customers are searching for and create content that answers their questions perfectly.",
      benefits: ["Faster content creation", "Better search rankings", "Higher user engagement"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "AI Automation",
      description: "We help you automate repetitive tasks using AI, saving you hours of work every week so you can focus on growing your business.",
      benefits: ["Save time & money", "Reduce human error", "Scale faster"]
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "AI Data Security",
      description: "We ensure your AI tools are safe and your data is protected. We help you use AI responsibly and securely.",
      benefits: ["Safe AI implementation", "Data privacy", "Compliance"]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <SEO 
        title="AI Strategy" 
        description="Future-proof your business with our AI strategy services. We help you use AI to automate tasks, create content, and grow faster." 
        canonical="/ai-strategy"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 font-bold text-sm mb-6"
          >
            <Sparkles size={16} />
            <span>Future-Proof Your Business</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI Strategy for <span className="text-indigo-500 text-glow">Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Don't get left behind. We help you use the power of AI to work smarter, not harder, and grow your business faster than ever.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit group-hover:bg-indigo-500/20 transition-colors">
                {strategy.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{strategy.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {strategy.description}
              </p>
              
              <div className="space-y-4">
                {strategy.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your AI Journey Today</h2>
            <p className="text-indigo-100/70 text-lg mb-8 max-w-2xl">
              We'll help you find the best AI tools for your specific business needs and show you how to use them to get a massive advantage over your competitors.
            </p>
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-600 transition-colors flex items-center gap-2">
              Book Your AI Audit <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -mr-32 -mt-32 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-3xl -ml-32 -mb-32 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategyPage;
