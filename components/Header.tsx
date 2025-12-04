import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled ? 'py-4' : 'py-8'}
        `}
      >
        <div 
          className={`
            flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled 
              ? 'w-[90%] md:w-[90%] lg:w-[800px] px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
              : 'w-full px-6 md:px-12 bg-transparent border-transparent'}
          `}
        >
          
            {/* Logo */}
            <a href="#" className="relative group shrink-0 z-50">
              <span className="font-serif text-xl tracking-[0.2em] text-champagne-400 font-medium group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                LUMINA
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-xs' : 'text-xs'}`}>
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="font-medium uppercase tracking-[0.2em] text-white/60 hover:text-champagne-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-champagne-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white/80 hover:text-champagne-400 transition-colors z-50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>

             {/* Action - Only show on large screens */}
             <div className="hidden md:block shrink-0">
                <a href="#membership" className={`
                   text-[10px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap
                   ${isScrolled ? 'text-champagne-400' : 'text-white hover:text-champagne-400'}
                `}>
                  Login
                </a>
             </div>
          
        </div>
      </header>

      {/* Mobile Overlay */}
      <div 
        className={`
          fixed inset-0 z-[60] bg-obsidian/98 backdrop-blur-3xl
          transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1)
          ${mobileMenuOpen ? 'opacity-100 visible clip-circle-full' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-champagne-400 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {NAV_ITEMS.map((item, i) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-serif text-5xl text-white/80 hover:text-champagne-400 italic transition-all duration-500 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
           <a href="#" className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-champagne-400 border border-champagne-400/30 px-8 py-4 rounded-full hover:bg-champagne-400 hover:text-obsidian transition-all">
             Member Login
           </a>
        </div>
      </div>
    </>
  );
};