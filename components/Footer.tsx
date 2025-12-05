import React from 'react';
import { Instagram, Twitter, Linkedin, Send, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="glass-heavy rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

          {/* Large Watermark */}
          <div className="absolute -bottom-20 -right-20 text-[15rem] font-serif text-white/[0.02] leading-none select-none pointer-events-none">
            LUMINA
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

            {/* Brand & Newsletter */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="font-serif text-5xl text-primary tracking-tighter block mb-6">LUMINA</span>
                <p className="text-white/50 max-w-sm font-light leading-relaxed text-sm mb-12">
                  Orchestrating the impossible. A symbiotic blend of neural-network precision and human concierge mastery for the modern elite.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                  Join the Waitlist
                </h4>
                <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors pr-12 font-light"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-700 group-hover:w-full" />
                </form>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-7 flex flex-col md:flex-row justify-between gap-12 lg:pl-12">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full">
                {/* Navigation */}
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/30">Explore</span>
                  <div className="flex flex-col gap-4">
                    {NAV_ITEMS.map(item => (
                      <a key={item.label} href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full w-fit">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/30">Connect</span>
                  <div className="flex flex-col gap-4">
                    <a href="#" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                      <Instagram className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" /> Instagram
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                      <Twitter className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" /> Twitter
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors group">
                      <Linkedin className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/30">Legal</span>
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Cookie Policy</a>
                  </div>
                </div>
              </div>

              {/* Back to Top */}
              <div className="flex flex-col justify-end items-end">
                <button
                  onClick={scrollToTop}
                  className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 transition-all duration-500"
                >
                  <ArrowUp className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2025 Lumina Inc. All rights reserved.</p>
            <a href="https://wa.me/8801600086773" target="_blank" rel="noopener noreferrer" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
              Designed by Al Mamun Sikder
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};