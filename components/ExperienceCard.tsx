import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceCard as IExperienceCard } from '../types';

interface ExperienceCardProps {
  data: IExperienceCard;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="group relative h-[650px] w-full overflow-hidden bg-charcoal cursor-pointer border border-white/5 hover:border-champagne-400/40 transition-colors duration-700">
       {/* Background Image */}
       <div className="absolute inset-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] 
            scale-100 group-hover:scale-110 
            opacity-80 group-hover:opacity-100
            sepia-[0.4] grayscale-[0.2] group-hover:sepia-0 group-hover:grayscale-0"
          />
          {/* Gold Tint Overlay - Visible by default, fades on hover */}
          <div className="absolute inset-0 bg-champagne-900/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-700" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700" />
       </div>
       
       {/* Content */}
       <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
          
          {/* Top Tag */}
          <div className="flex justify-between items-start">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-champagne-400 border border-champagne-400/30 bg-black/80 backdrop-blur-md px-4 py-2 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-y-4 group-hover:translate-y-0">
               {data.subtitle}
             </span>
             <div className="p-3 rounded-full bg-champagne-400 text-obsidian backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5" />
             </div>
          </div>

          {/* Bottom Info */}
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
             <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight group-hover:text-champagne-100 transition-colors drop-shadow-lg">
               {data.title}
             </h3>
             
             <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 ease-in-out overflow-hidden">
               <p className="text-white/90 text-sm font-light leading-relaxed max-w-sm mb-6 border-l-2 border-champagne-400 pl-4">
                 {data.description}
               </p>
               <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-champagne-400 hover:text-white transition-colors">
                 {data.ctaText} <ArrowUpRight className="w-3 h-3" />
               </span>
             </div>
          </div>
       </div>
    </div>
  );
};