
import React, { useState } from 'react';
import { Menu, Zap, Sparkles, X, ArrowRight, BookOpen, Info } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about', icon: <Info size={12} className="text-blue-400" /> },
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#blog', icon: <BookOpen size={12} className="text-emerald-400" /> },
    { name: 'AI Strategy', href: '#ai-strategy', icon: <Sparkles size={12} className="text-indigo-400" /> },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <nav className={`max-w-6xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 px-6 ${
          scrolled 
            ? 'py-3 bg-gray-950/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]' 
            : 'py-5 bg-transparent border border-transparent'
        }`}>
          <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-white uppercase">Nexus</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                {link.icon}{link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:flex px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
            >
              Start Project
            </a>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#020617] border-l border-white/10 p-10 transition-transform duration-500 ease-out shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <Zap size={24} className="text-indigo-500" />
              <span className="text-xl font-black tracking-tighter text-white">NEXUS</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-full">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-bold text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-indigo-500" />
              </a>
            ))}
            <div className="h-px bg-white/5 my-4" />
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-6 accent-gradient rounded-[2rem] text-center font-black text-white text-sm tracking-[0.2em] shadow-xl shadow-indigo-600/20"
            >
              START PROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
