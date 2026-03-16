
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { GrowthTool } from './components/GrowthTool.tsx';
import { Blog } from './components/Blog.tsx';
import { BlogPost } from './components/BlogPost.tsx';
import { ServiceDetail } from './components/ServiceDetail.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = ({ onSelectService, onReadPost }: any) => (
  <>
    <Helmet>
      <title>SF Growth Agency | Elite SEO, Web Dev & Digital Marketing</title>
      <meta name="description" content="SF Growth Agency is a premium digital agency specializing in aggressive SEO, high-performance web engineering, and data-driven marketing strategies to scale your business." />
      <link rel="canonical" href="https://sf-growth-agency.vercel.app/" />
    </Helmet>
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services onSelectService={onSelectService} />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="ai-strategy" className="py-20 relative">
      <div className="absolute inset-0 bg-indigo-500/[0.02] -z-10" />
      <GrowthTool />
    </section>
    <section id="blog">
      <Blog onReadPost={onReadPost} />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        // Clear state to prevent re-scroll on refresh
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleReadBlog = (post: any) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  const handleSelectService = (service: any) => {
    navigate(`/services/${service.slug}`, { state: { service } });
  };

  const handleShowPrivacy = () => {
    navigate('/privacy');
  };

  const handleBackToHome = (targetId?: string) => {
    navigate('/');
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      <ScrollToTop />
      <div 
        className="fixed top-0 left-0 h-1 accent-gradient z-[100] transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Animated Background Spheres Container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora-sphere w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-600/20 -top-20 -left-20" />
        <div className="aurora-sphere w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 top-[40%] -right-20" />
        <div className="aurora-sphere w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-blue-600/10 -bottom-20 left-[20%]" />
      </div>

      <Navbar scrolled={scrolled || location.pathname !== '/'} />
      
      <main className={location.pathname !== '/' ? 'pt-20' : ''}>
        <Routes>
          <Route path="/" element={<Home onSelectService={handleSelectService} onReadPost={handleReadBlog} />} />
          <Route path="/blog/:id" element={<BlogPost onBack={handleBackToHome} />} />
          <Route path="/services/:id" element={<ServiceDetail onBack={handleBackToHome} />} />
          <Route path="/privacy" element={<PrivacyPolicy onBack={() => handleBackToHome()} />} />
        </Routes>
      </main>

      <Footer onShowPrivacy={handleShowPrivacy} />
    </div>
  );
};

export default App;
