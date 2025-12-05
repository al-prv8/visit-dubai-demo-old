import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  light = false,
  className = 'mb-12'
}) => {
  return (
    <div className={`space-y-4 ${className} ${alignment === 'center' ? 'flex flex-col items-center text-center' : 'text-left'}`}>
      <div className="flex items-center gap-3">
        {alignment === 'left' && <span className="h-[1px] w-8 bg-primary"></span>}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {subtitle}
        </span>
        {alignment === 'center' && <span className="h-[1px] w-8 bg-primary"></span>}
      </div>
      <h2 className={`font-serif text-3xl md:text-5xl font-medium ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
    </div>
  );
};