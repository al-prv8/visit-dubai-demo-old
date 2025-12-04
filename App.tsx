import React from 'react';
import { Header } from './components/Header';
import { ChatWidget } from './components/ChatWidget';
import { FeaturesSection } from './components/FeaturesSection';
import { MembershipSection } from './components/MembershipSection';
import { CuratedSection } from './components/CuratedSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { ScrollReveal } from './components/ui/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian text-champagne-100 font-sans selection:bg-champagne-400/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] right-0 w-[70vw] h-[70vw] bg-champagne-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] bg-white/[0.01] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <Header />

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 relative z-20">
               <ScrollReveal>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="h-[1px] w-12 bg-champagne-400"></span>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-champagne-400 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                      The Art of Living
                    </span>
                  </div>
               </ScrollReveal>

               <ScrollReveal delay={200}>
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white tracking-tight mb-8">
                    Curated <br />
                    <span className="italic ml-4 md:ml-12 font-light bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#F9F5EB] to-[#B59326] drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                      Existence.
                    </span>
                  </h1>
               </ScrollReveal>
               
               <ScrollReveal delay={400}>
                  <p className="text-lg text-white/60 max-w-xl font-light leading-relaxed mb-10 pl-6 border-l border-champagne-400/30 md:pl-0 md:border-none">
                    Lumina orchestrates the impossible. A symbiotic blend of neural-network precision and human concierge mastery.
                  </p>
               </ScrollReveal>
               
               <ScrollReveal delay={600}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button 
                      variant="primary" 
                      className="bg-champagne-400 text-obsidian hover:bg-champagne-300 border-none shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)]"
                    >
                      Begin Application
                    </Button>
                    <Button 
                      variant="outline"
                      href="#experiences"
                      className="rounded-full px-8 border-white/20 text-white hover:border-white transition-colors hover:bg-white/5"
                    >
                      Explore Collection
                    </Button>
                  </div>
               </ScrollReveal>
            </div>

            {/* Abstract Hero Visual */}
            <div className="lg:col-span-4 relative h-[600px] flex items-center justify-center lg:justify-end">
               <ScrollReveal delay={800} className="w-full relative">
                 {/* Floating Abstract Cards */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-md transform rotate-6 animate-float" style={{ animationDelay: '0s' }} />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-bl from-champagne-400/10 to-transparent border border-champagne-400/20 rounded-2xl backdrop-blur-sm transform -rotate-6 animate-float" style={{ animationDelay: '1.5s' }} />
                 
                 <div className="relative z-10 transform translate-y-12 lg:translate-y-0">
                   <ChatWidget />
                 </div>
               </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Brand Strip */}
        <div className="border-y border-white/[0.03] py-12 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
              {['VOGUE', 'Kinfolk', 'Monocle', 'Bloomberg', 'Architectural Digest'].map((brand, i) => (
                <span key={i} className="font-serif text-2xl text-white/20 cursor-default hover:text-champagne-400 transition-colors duration-500">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <FeaturesSection />
        <CuratedSection />
        <MembershipSection />
        <TestimonialsSection />
        <FAQSection />

      </main>
      <Footer />
    </div>
  );
};

export default App;