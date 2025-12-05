import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceCard as IExperienceCard } from '../types';

interface ExperienceCardProps {
  data: IExperienceCard;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="group h-[600px] w-full cursor-pointer">

      {/* Main Glass Container */}
      <div className="h-full w-full glass-card rounded-3xl border border-white/10 p-4 flex flex-col gap-6 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

        {/* Inset Image Container */}
        <div className="relative h-[60%] w-full overflow-hidden rounded-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] 
                scale-100 group-hover:scale-110 
                opacity-90 group-hover:opacity-100"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />

          {/* Floating Tag on Image */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {data.subtitle}
            </span>
          </div>
        </div>

        {/* Content Section - Separated below image */}
        <div className="flex flex-col justify-between flex-1 px-2 pb-2">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight group-hover:text-primary-soft transition-colors">
                {data.title}
              </h3>
              <div className="p-2 rounded-full border border-white/10 text-white/40 group-hover:text-primary group-hover:border-primary transition-all duration-500 bg-white/5 shrink-0 ml-4">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
              {data.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 mt-auto">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white transition-colors">
              {data.ctaText} <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};