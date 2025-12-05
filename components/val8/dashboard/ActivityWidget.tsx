import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActivityWidgetProps {
    title: string;
    subtitle: string;
    image: string;
    price?: string;
    category?: string;
}

export const ActivityWidget: React.FC<ActivityWidgetProps> = ({ title, subtitle, image, price, category }) => {
    return (
        <div className="h-full relative group cursor-pointer overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
                {category && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                        {category}
                    </span>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-medium text-lg leading-tight mb-1">{title}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-white/60 text-xs">{subtitle}</p>
                    {price && <p className="text-white font-medium text-sm">{price}</p>}
                </div>
            </div>
        </div>
    );
};
