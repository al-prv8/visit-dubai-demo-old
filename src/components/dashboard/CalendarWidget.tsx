import React from 'react';

interface CalendarWidgetProps {
    tripStart?: number;
    tripEnd?: number;
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ tripStart = 5, tripEnd = 9 }) => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);



    return (
        <div className="h-full p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">June 2025</h3>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/40 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={`${d}-${i}`}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1 flex-1 content-start">
                {days.map(day => {
                    const isStart = day === tripStart;
                    const isEnd = day === tripEnd;
                    const isRange = day > tripStart && day < tripEnd;
                    const isSelected = isStart || isEnd;

                    return (
                        <div
                            key={day}
                            className={`
                        flex items-center justify-center text-xs rounded-full w-full aspect-square max-w-[2rem] mx-auto transition-all
                        ${isSelected ? 'bg-white text-surface font-bold scale-110 shadow-lg shadow-white/10' : ''}
                        ${isRange ? 'bg-primary/20 text-primary' : ''}
                        ${!isSelected && !isRange ? 'text-white/60' : ''}
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
