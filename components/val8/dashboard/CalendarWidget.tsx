import React from 'react';

export const CalendarWidget: React.FC = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const currentDay = 8;
    const tripStart = 6;
    const tripEnd = 9;

    return (
        <div className="h-full p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">June 2025</h3>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/40 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1 flex-1">
                {days.map(day => {
                    const isTrip = day >= tripStart && day <= tripEnd;
                    const isCurrent = day === currentDay;

                    return (
                        <div
                            key={day}
                            className={`
                        flex items-center justify-center text-xs rounded-full w-6 h-6 mx-auto
                        ${isCurrent ? 'bg-white text-surface font-bold' : ''}
                        ${isTrip && !isCurrent ? 'bg-primary/20 text-primary' : ''}
                        ${!isTrip && !isCurrent ? 'text-white/60' : ''}
                    `}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
