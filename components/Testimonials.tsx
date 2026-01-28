
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    image: "https://picsum.photos/seed/sarah/100/100",
    content: "Nexus Growth completely transformed our online presence. Our traffic grew by 300% in 4 months after their SEO overhaul.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Founder of UrbanStyle",
    image: "https://picsum.photos/seed/marcus/100/100",
    content: "The custom dashboard they built for us is a work of art. High-performance code that actually delivers sales.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at GlobaLync",
    image: "https://picsum.photos/seed/elena/100/100",
    content: "Professional, data-driven, and incredibly responsive. They are the only agency we trust with our digital strategy.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Built for Success. Trusted by Leaders.</h3>
        <p className="text-gray-400 max-w-xl mx-auto">See why fast-growing companies choose Nexus Growth to lead their digital transformation.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-8 glass rounded-[2.5rem] border-white/5 relative">
            <Quote className="absolute top-6 right-8 text-white/10 w-12 h-12" />
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-300 mb-8 italic leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-500/20" />
              <div>
                <h5 className="text-white font-bold">{t.name}</h5>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
