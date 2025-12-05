import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';

export const FlightWidget: React.FC = () => {
    return (
        <div className="h-full p-6 flex flex-col relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                    alt="Flight"
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-blue-900/20" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-white font-medium text-sm opacity-80">Flight Agent</h3>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                        Completed
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-white/60 text-sm mb-4">Ready to book your flight!</p>
                    <div className="flex items-center gap-6">
                        <Plane className="w-8 h-8 text-white rotate-45" />
                        <div className="flex items-center gap-3">
                            <span className="text-4xl font-bold text-white tracking-tight">SFO</span>
                            <ArrowRight className="w-5 h-5 text-white/40" />
                            <span className="text-4xl font-bold text-white tracking-tight">MIA</span>
                        </div>
                        <span className="text-2xl text-white/40 font-light ml-2">AI 270C</span>
                    </div>
                    <p className="text-white/40 text-xs mt-2 pl-14">June 5 to June 9 • Airbus A350</p>
                </div>
            </div>
        </div>
    );
};
