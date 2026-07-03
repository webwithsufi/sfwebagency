import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sf-growth-agency.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://sf-growth-agency.vercel.app/blog"
      }
    ]
  };

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-20 bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <SEO 
        title="Insights & Blog" 
        description="Read our latest insights on SEO, web development, and digital marketing strategies to grow your business in 2026." 
        canonical="https://sf-growth-agency.vercel.app/blog"
        schema={breadcrumbSchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Latest <span className="text-emerald-500">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            We share our knowledge to help you stay ahead of the competition. No jargon, just results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
