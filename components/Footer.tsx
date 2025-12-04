import React from 'react';
import { Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section with Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
           <div>
              <span className="font-serif text-5xl md:text-7xl text-champagne-400 tracking-tighter block mb-8">LUMINA</span>
              <p className="text-white/40 max-w-sm font-light leading-relaxed text-sm">
                Orchestrating the impossible. A symbiotic blend of neural-network precision and human concierge mastery for the modern elite.
              </p>
           </div>

           <div className="flex flex-col justify-end">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-champagne-400 mb-8">
                Join the Waitlist
              </h4>
              <form className="relative max-w-md group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-champagne-400 transition-colors pr-12 font-light"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-champagne-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-400 transition-all duration-700 group-hover:w-full" />
              </form>
           </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
             <div className="flex flex-col gap-4">
               <span className="text-xs font-bold uppercase tracking-widest text-white/20 mb-2">Explore</span>
               {NAV_ITEMS.map(item => (
                 <a key={item.label} href={item.href} className="text-xs uppercase tracking-widest text-white/60 hover:text-champagne-400 transition-colors">
                   {item.label}
                 </a>
               ))}
             </div>
             
             <div className="flex flex-col gap-4">
               <span className="text-xs font-bold uppercase tracking-widest text-white/20 mb-2">Connect</span>
               <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-champagne-400 transition-colors group">
                 <Instagram className="w-4 h-4" /> Instagram
               </a>
               <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-champagne-400 transition-colors group">
                 <Twitter className="w-4 h-4" /> Twitter
               </a>
               <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-champagne-400 transition-colors group">
                 <Linkedin className="w-4 h-4" /> LinkedIn
               </a>
             </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4">
             <div className="flex items-center gap-8 mb-2">
                <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white">Terms of Service</a>
             </div>
             <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2025 Lumina Inc.</p>
             <a href="https://wa.me/8801600086773" target="_blank" rel="noopener noreferrer" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-champagne-400 transition-colors">
               Designed by Al Mamun Sikder
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
};