import React from 'react';
import { Car } from 'lucide-react';

export const RideWidget: React.FC = () => {
    return (
        <div className="h-full p-5 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <div className="relative z-10 text-center">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-3">Ride Agent</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Car className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-serif text-white">Ride</h3>
                </div>
                <p className="text-white font-medium text-sm">Advance Reserve</p>
                <p className="text-white/40 text-[10px] mt-1">San Francisco<br />International Airport</p>
            </div>
        </div>
    );
};
