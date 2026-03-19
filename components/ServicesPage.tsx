import React from 'react';
import { services } from './serviceData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from './SEO';

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-950">
      <SEO 
        title="Our Services" 
        description="We offer fast websites, #1 Google rankings, and profitable ads to grow your business. Check out our full list of digital growth services." 
        canonical="https://ais-pre-t4eqrud2gdezald763ebt5-278818541891.asia-southeast1.run.app/services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How We Help You <span className="text-blue-500">Grow</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            We don't just 'do marketing'. We build growth engines that bring you more customers and more profit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-6 p-3 bg-slate-800 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {service.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Expected Outcome</p>
                <p className="text-white font-medium">{service.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your growth journey?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free strategy call today and we'll show you exactly how we can help your business reach its full potential.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
            Book My Free Call <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
