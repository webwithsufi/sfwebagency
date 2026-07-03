
import React from 'react';
import { Hero } from './Hero.tsx';
import { About } from './About.tsx';
import { Services } from './Services.tsx';
import { Portfolio } from './Portfolio.tsx';
import { GrowthTool } from './GrowthTool.tsx';
import { Blog } from './Blog.tsx';
import { Testimonials } from './Testimonials.tsx';
import { Contact } from './Contact.tsx';
import { SEO } from './SEO.tsx';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleReadBlog = (post: any) => {
    navigate(`/blog/${post.id}`);
  };

  const handleSelectService = (service: any) => {
    navigate(`/services/${service.slug}`);
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SF Growth Agency",
    "url": "https://sf-growth-agency.vercel.app/",
    "logo": "https://sf-growth-agency.vercel.app/logo.svg",
    "description": "Elite SEO, Web Dev & Digital Marketing agency specializing in growth.",
    "sameAs": [
      "https://twitter.com/sfgrowth",
      "https://linkedin.com/company/sfgrowth"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SF Growth Agency",
    "url": "https://sf-growth-agency.vercel.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sf-growth-agency.vercel.app/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="SF Growth Agency | Digital Marketing & SEO Agency in Karachi, Pakistan" 
        description="SF Growth Agency is Karachi's top digital marketing agency offering SEO, web development, social media management, graphic design & content writing. Get more clients online. Contact us today."
        canonical="https://sf-growth-agency.vercel.app/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema]
        }}
      />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services onSelectService={handleSelectService} />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="ai-strategy" className="py-20 relative">
        <div className="absolute inset-0 bg-indigo-500/[0.02] -z-10" />
        <GrowthTool />
      </section>
      <section id="blog">
        <Blog onReadPost={handleReadBlog} />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
