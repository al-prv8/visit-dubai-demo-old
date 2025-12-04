import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-40 relative bg-obsidian">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
            <div className="mb-24">
                <SectionHeading 
                  title="Member Stories" 
                  subtitle="Perspectives" 
                  alignment="center"
                />
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 relative">
          {/* Vertical Dividers */}
          <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-champagne-400/30 to-transparent hidden lg:block" />
          <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-gradient-to-b from-transparent via-champagne-400/30 to-transparent hidden lg:block" />

          {TESTIMONIALS.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 150}>
              <div className="relative group text-center px-4 pt-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <Quote className="w-8 h-8 text-champagne-400 fill-champagne-400/20" />
                </div>

                <div className="mb-8 relative z-10">
                  <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed italic group-hover:text-champagne-100 transition-colors duration-500">
                    "{item.quote}"
                  </p>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                   <p className="text-xs font-bold text-white uppercase tracking-[0.15em]">
                     {item.author}
                   </p>
                   <p className="text-[10px] text-champagne-400 uppercase tracking-widest">
                     {item.role}, {item.location}
                   </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};