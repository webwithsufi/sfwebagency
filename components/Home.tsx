
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

  return (
    <>
      <SEO 
        title="Elite SEO, Web Dev & Digital Marketing" 
        description="SF Growth Agency helps you dominate search results, build high-performance websites, and scale your business with data-driven marketing."
        canonical="https://ais-pre-t4eqrud2gdezald763ebt5-278818541891.asia-southeast1.run.app/"
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
