"use client";

import React from 'react';
import { LogOut, MessageSquare, ArrowLeft } from 'lucide-react';
import { useVal8 } from './Val8Context';
import { BentoGrid, BentoItem } from '@/components/dashboard/BentoGrid';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { SchedulingWidget } from '@/components/dashboard/SchedulingWidget';
import { TimezoneWidget } from '@/components/dashboard/TimezoneWidget';

import { WidgetDetailView } from './WidgetDetailView';

export interface DashboardState {
    flight: {
        origin: string;
        destination: string;
        carrier: string;
        class: string;
        date: string;
        flightNumber: string;
        price: string;
    };
    stay: {
        hotelName: string;
        roomType: string;
        guests: number;
        checkIn: string;
        checkOut: string;
        price: string;
    };
    ride: {
        pickup: string;
        serviceLevel: string;
        dropoff: string;
        price: string;
    };
    weather: {
        unit: 'C' | 'F';
        alerts: boolean;
    };
    location: {
        current: string;
    };
    timezone: {
        primary: string;
        secondary: string;
    };
}

const INITIAL_STATE: DashboardState = {
    flight: {
        origin: "SFO",
        destination: "MIA",
        carrier: "Emirates",
        class: "First Class",
        date: "June 5 - June 9",
        flightNumber: "AI 270C",
        price: "$6,200"
    },
    stay: {
        hotelName: "One&Only Royal Mirage",
        roomType: "Penthouse Suite",
        guests: 2,
        checkIn: "June 6",
        checkOut: "June 9",
        price: "$5,800"
    },
    ride: {
        pickup: "San Francisco Int'l",
        serviceLevel: "Luxury",
        dropoff: "Home",
        price: "Included"
    },
    weather: {
        unit: 'F',
        alerts: true
    },
    location: {
        current: "Miami, Florida"
    },
    timezone: {
        primary: "Eastern Time",
        secondary: "Tokyo"
    }
};

export const Dashboard: React.FC = () => {
    const { user, logout, setView, handleWidgetAction } = useVal8();
    const [selectedWidget, setSelectedWidget] = React.useState<'flight' | 'stay' | 'ride' | 'calendar' | 'activity' | 'checkout' | 'weather' | 'location' | 'timezone' | 'scheduling' | null>(null);
    const [data, setData] = React.useState<DashboardState>(INITIAL_STATE);

    const handleSave = (partialData: Partial<DashboardState>) => {
        setData(prev => ({ ...prev, ...partialData }));
    };

    if (!user) return null;

    return (
        <div className="h-full flex flex-col bg-bg relative">
            <WidgetDetailView
                type={selectedWidget}
                data={data}
                onSave={handleSave}
                onClose={() => setSelectedWidget(null)}
            />

            {/* Content - Bento Grid */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {/* Using a 12-column grid for precise layout matching the reference */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[180px]">

                    {/* --- ROW 1 --- */}

                    {/* Calendar (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('calendar')}>
                        <CalendarWidget />
                    </div>

                    {/* Location (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden p-5 flex flex-col justify-between cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('location')}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-text-primary dark:text-white font-serif text-xl">{data.location.current.split(',')[0]}</h3>
                                <p className="text-text-secondary dark:text-white/60 text-[10px] uppercase tracking-wider">{data.location.current.split(',')[1] || 'USA'}</p>
                            </div>
                            <div className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">
                                Completed
                            </div>
                        </div>
                        <p className="text-text-muted dark:text-white/40 text-xs">{data.stay.checkIn}-{data.stay.checkOut}</p>
                    </div>

                    {/* Weather (2 cols) */}
                    <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('weather')}>
                        <WeatherWidget />
                    </div>

                    {/* Timezones (2 cols - Stacked) */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <div className="flex-1 rounded-3xl overflow-hidden cursor-pointer" onClick={() => setSelectedWidget('timezone')}>
                            <TimezoneWidget city="Primary" time="14:20" offset={data.timezone.primary} />
                        </div>
                        <div className="flex-1 rounded-3xl overflow-hidden cursor-pointer" onClick={() => setSelectedWidget('timezone')}>
                            <TimezoneWidget city="Secondary" time="11:20" offset={data.timezone.secondary} />
                        </div>
                    </div>

                    {/* Hotel (4 cols - Wide Right) */}
                    <div className="md:col-span-4 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('stay')}>
                        <StayWidget data={data.stay} />
                    </div>

                    {/* --- ROW 2 --- */}

                    {/* Flight (6 cols - Wide Left) */}
                    <div className="md:col-span-6 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('flight')}>
                        <FlightWidget data={data.flight} />
                    </div>

                    {/* Ride (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('ride')}>
                        <RideWidget data={data.ride} />
                    </div>

                    {/* Scheduling (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('scheduling')}>
                        <SchedulingWidget />
                    </div>

                    {/* --- ROW 3 --- */}

                    {/* Dining (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('activity')}>
                        <ActivityWidget
                            title="Waterfront Kitchen"
                            subtitle="$30-50 | American"
                            image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                            category="Dining"
                        />
                    </div>

                    {/* Shopping (3 cols) */}
                    <div className="md:col-span-3 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('activity')}>
                        <ActivityWidget
                            title="SPF 50 Sunscreen"
                            subtitle="124k ratings"
                            price="$8.97"
                            image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop"
                            category="Shopping"
                        />
                    </div>

                    {/* Local Interest (6 cols - Wide) */}
                    <div className="md:col-span-6 glass-card rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setSelectedWidget('activity')}>
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
