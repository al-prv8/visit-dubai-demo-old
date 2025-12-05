import React from 'react';
import { LogOut, MessageSquare, ArrowLeft } from 'lucide-react';
import { useVal8 } from './Val8Context';
import { BentoGrid, BentoItem } from './dashboard/BentoGrid';
import { WeatherWidget } from './dashboard/WeatherWidget';
import { FlightWidget } from './dashboard/FlightWidget';
import { StayWidget } from './dashboard/StayWidget';
import { CalendarWidget } from './dashboard/CalendarWidget';
import { ActivityWidget } from './dashboard/ActivityWidget';
import { RideWidget } from './dashboard/RideWidget';
import { SchedulingWidget } from './dashboard/SchedulingWidget';
import { TimezoneWidget } from './dashboard/TimezoneWidget';

export const Dashboard: React.FC = () => {
    const { user, logout, setView, handleWidgetAction } = useVal8();

    if (!user) return null;

    return (
        <div className="h-full flex flex-col bg-bg">
            {/* Header Removed for Split View */}

            {/* Content - Bento Grid */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {/* Using a 12-column grid for precise layout matching the reference */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[180px]">

                    {/* --- ROW 1 --- */}

                    {/* Calendar (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Show my full itinerary")}>
                        <CalendarWidget />
                    </div>

                    {/* Location (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden p-5 flex flex-col justify-between cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Tell me more about Miami")}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-white font-serif text-xl">Miami</h3>
                                <p className="text-white/60 text-[10px] uppercase tracking-wider">Florida</p>
                            </div>
                            <div className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">
                                Completed
                            </div>
                        </div>
                        <p className="text-white/40 text-xs">June 6-9</p>
                    </div>

                    {/* Weather (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("What is the detailed forecast?")}>
                        <WeatherWidget />
                    </div>

                    {/* Timezones (2 cols - Stacked) */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <div className="flex-1 rounded-3xl overflow-hidden cursor-pointer" onClick={() => handleWidgetAction("Set a reminder for Eastern Time")}>
                            <TimezoneWidget city="Eastern Daytime" time="14:20" offset="UTC -4:00" />
                        </div>
                        <div className="flex-1 rounded-3xl overflow-hidden cursor-pointer" onClick={() => handleWidgetAction("Set a reminder for Pacific Time")}>
                            <TimezoneWidget city="Pacific Daytime" time="11:20" offset="UTC -7:00" />
                        </div>
                    </div>

                    {/* Hotel (4 cols - Wide Right) */}
                    <div className="md:col-span-4 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Show hotel details")}>
                        <StayWidget />
                    </div>

                    {/* --- ROW 2 --- */}

                    {/* Flight (6 cols - Wide Left) */}
                    <div className="md:col-span-6 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Manage my flight")}>
                        <FlightWidget />
                    </div>

                    {/* Ride (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Book a ride")}>
                        <RideWidget />
                    </div>

                    {/* Scheduling (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Schedule an event")}>
                        <SchedulingWidget />
                    </div>

                    {/* --- ROW 3 --- */}

                    {/* Dining (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Reserve a table at Waterfront Kitchen")}>
                        <ActivityWidget
                            title="Waterfront Kitchen"
                            subtitle="$30-50 | American"
                            image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                            category="Dining"
                        />
                    </div>

                    {/* Shopping (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Buy SPF 50 Sunscreen")}>
                        <ActivityWidget
                            title="SPF 50 Sunscreen"
                            subtitle="124k ratings"
                            price="$8.97"
                            image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop"
                            category="Shopping"
                        />
                    </div>

                    {/* Local Interest (6 cols - Wide) */}
                    <div className="md:col-span-6 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => handleWidgetAction("Plan a beach day")}>
                        <ActivityWidget
                            title="Miami's Best Beaches"
                            subtitle="Curated list of seaside sanctuaries"
                            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                            category="Local Interest"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
