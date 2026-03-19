
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar.tsx';
import { Home } from './components/Home.tsx';
import { BlogPost } from './components/BlogPost.tsx';
import { ServiceDetail } from './components/ServiceDetail.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import BlogPage from './components/BlogPage.tsx';
import { AIStrategyPage } from './components/AIStrategyPage.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = (targetId?: string) => {
    if (targetId) {
      navigate('/', { state: { scrollTo: targetId.replace('#', '') } });
    } else {
      navigate('/');
    }
  };

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

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#020617] selection:bg-indigo-500/30 selection:text-indigo-200 relative">
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
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/ai-strategy" element={<AIStrategyPage onBack={handleBack} />} />
            <Route path="/privacy" element={<PrivacyPolicy onBack={() => {}} />} />
          </Routes>
        </main>

        <Footer onShowPrivacy={() => {}} />
      </div>
    </HelmetProvider>
  );
};

export default App;
