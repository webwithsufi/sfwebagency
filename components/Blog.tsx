
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const blogPosts = [
  {
    id: "seo-strategy-2024",
    category: "SEO Strategy",
    title: "Why Your Local Business Isn't Ranking #1 on Google in 2024",
    author: "Sufi (Growth Lead)",
    date: "March 15, 2024",
    excerpt: "The rules of SEO have changed. If you're still relying on old keyword stuffing, you're invisible. Learn the new 'Entity-Based' SEO model...",
    content: `
      <h2>The Death of Keyword Stuffing</h2>
      <p>In 2024, Google's algorithms have evolved beyond simple keyword matching. The search engine now uses <strong>Entity-Based Search</strong>, which focuses on relationships between topics rather than just strings of text. If you want to rank, you need to prove you are an authority in your niche.</p>
      
      <h3>The Importance of E-E-A-T</h3>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are the pillars of modern SEO. At Nexus Growth, we focus on building these signals through high-quality backlinking and technical site audits.</p>
      
      <blockquote>"Search engines don't rank websites; they rank answers."</blockquote>
      
      <h3>3 Steps to Dominate Local Search</h3>
      <ol>
        <li><strong>Optimized Google Business Profile:</strong> Ensure your NAP (Name, Address, Phone) data is identical across the web.</li>
        <li><strong>Hyper-Local Content:</strong> Write about events and issues specific to your city to anchor your entity in a geographic location.</li>
        <li><strong>Core Web Vitals:</strong> Google prioritizes sites that load fast and offer a smooth user experience.</li>
      </ol>
      <p>Need a professional touch? Check out our <a href="#services" class="text-indigo-400 font-bold">Google Ranking (SEO) Services</a> to get started.</p>
    `,
    target: "services"
  },
  {
    id: "site-speed-sales",
    category: "Web Development",
    title: "The 3-Second Rule: How Site Speed is Killing Your Sales",
    author: "Nexus Engineering Team",
    date: "April 02, 2024",
    excerpt: "Every millisecond your site takes to load, you lose 7% of your conversions. Here's how high-performance code turns visitors into buyers.",
    content: `
      <h2>Milliseconds Mean Millions</h2>
      <p>Amazon found that every 100ms of latency cost them 1% in sales. For a small business, a 3-second delay is often the difference between a new customer and a bounce. Our web development philosophy is built on <strong>performance first</strong>.</p>
      
      <h3>Why Modern Frameworks Matter</h3>
      <p>Using legacy builders like WordPress with 50+ plugins creates "Code Bloat." We utilize clean, modern stacks (like React and Next.js) to ensure your site is lightning fast out of the box.</p>
      
      <h3>The Conversion Funnel</h3>
      <p>A fast site isn't just for SEO; it's for trust. A professional, snappy website tells the customer that your business is competent. When a site lags, the user feels a psychological "friction" that stops them from clicking 'Buy Now'.</p>
      
      <p>Discover how we build high-speed assets in our <a href="#services" class="text-indigo-400 font-bold">Custom Website Building</a> section.</p>
    `,
    target: "services"
  },
  {
    id: "profitable-ads",
    category: "Advertising",
    title: "Stop Wasting Money: The Math Behind Profitable Google Ads",
    author: "Ad-Ops Specialist",
    date: "April 10, 2024",
    excerpt: "Most agencies focus on CPC. We focus on CPA. Discover the secret to scaling your budget without losing your profit margins.",
    content: `
      <h2>The Vanity Metric Trap</h2>
      <p>Many agencies will brag about low "Cost Per Click" (CPC). But if those clicks don't convert, they are worthless. At Nexus, we track the metrics that matter: <strong>ROAS (Return on Ad Spend)</strong> and <strong>CPA (Cost Per Acquisition)</strong>.</p>
      
      <h3>The 'Intent' Advantage</h3>
      <p>Unlike Social Media ads, where you interrupt someone's scrolling, Google Ads catch people while they are actively looking for a solution. This is "High Intent" traffic. The math is simple: target the right intent + high-converting landing page = Profit.</p>
      
      <h3>Scaling Without Breaking</h3>
      <p>When you double your ad budget, you shouldn't expect to double your work. You should expect to double your automation. We use AI-driven bidding strategies to ensure your budget is spent at the peak hours for your industry.</p>
      
      <p>Ready to scale? Explore our <a href="#services" class="text-indigo-400 font-bold">Google Ads (PPC) Management</a>.</p>
    `,
    target: "services"
  }
];

interface BlogProps {
  onReadPost: (post: any) => void;
}

export const Blog: React.FC<BlogProps> = ({ onReadPost }) => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Growth Insights</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Expertise shared. <br/><span className="gradient-text italic">Success scaled.</span></h3>
        <p className="text-slate-500 max-w-xl text-lg font-medium">
          Professional strategies written by our growth leads to help you understand the digital landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <article key={i} className="glass-card rounded-[3rem] overflow-hidden group flex flex-col h-full">
            <div className="p-8 md:p-10 flex flex-col h-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 w-fit">
                {post.category}
              </span>
              <h4 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                {post.excerpt}
              </p>
              
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <button 
                  onClick={() => onReadPost(post)}
                  className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group/btn"
                >
                  Read Full Guide <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToId(post.target)}
                  className="text-slate-600 hover:text-emerald-400 transition-colors"
                  title="Related Service"
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-all border-b border-white/10 pb-1"
        >
          Want a custom strategy for your niche? Let's talk
        </button>
      </div>
    </div>
  );
};
