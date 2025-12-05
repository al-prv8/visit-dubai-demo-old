import React from 'react';
import { MapPin, Star } from 'lucide-react';

export const StayWidget: React.FC = () => {
    return (
        <div className="h-full relative group cursor-pointer">
            <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                alt="Hotel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />

            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20 backdrop-blur-md">
                Completed
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <span className="text-[10px] text-white">H</span>
                    </div>
                    <span className="text-xs text-white/80 font-medium">Hotel Agent</span>
                </div>
                <h3 className="text-white font-serif text-xl mb-1">King Suite Beach View</h3>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                    <span>2 Adults</span>
                    <span>•</span>
                    <span>June 6 - June 9</span>
                </div>
            </div>
        </div>
    );
};
