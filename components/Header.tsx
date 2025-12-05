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
              ? 'w-[90%] md:w-[90%] lg:w-[800px] px-6 py-3 glass-heavy rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'w-full px-6 md:px-12 bg-transparent border-transparent'}
          `}
        >

          {/* Logo */}
          <a href="#" className="relative group shrink-0 z-50">
            <span className="font-serif text-xl tracking-[0.2em] text-primary font-medium group-hover:text-white transition-colors duration-500 whitespace-nowrap">
              LUMINA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-xs' : 'text-xs'}`}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-primary transition-colors z-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Action - Only show on large screens */}
          <div className="hidden md:block shrink-0">
            <a href="#membership" className={`
                   text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap
                   ${isScrolled ? 'text-primary' : 'text-white hover:text-primary'}
                `}>
              Login
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`
          fixed inset-0 z-[60] glass-heavy
          transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1)
          ${mobileMenuOpen ? 'opacity-100 visible clip-circle-full' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-primary transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-serif text-5xl text-white/80 hover:text-primary italic transition-all duration-500 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 px-8 py-4 rounded-full hover:bg-primary hover:text-surface transition-all">
            Member Login
          </a>
        </div>
      </div>
    </>
  );
};