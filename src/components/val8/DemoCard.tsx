import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVal8 } from './Val8Context';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { CheckoutWidget } from '@/components/dashboard/CheckoutWidget';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';
import { TimezoneWidget } from '@/components/dashboard/TimezoneWidget';

// Wrapper for animation
const WidgetContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export const DemoCard: React.FC = () => {
    const { demoStep, demoPhase } = useVal8();

    // Mapping steps to widgets with cumulative logic
    // Step 0: Context (Weather, Location, Timezone, Calendar)
    // Step 1: Flight
    // Step 2: Hotel
    // Step 3: Ride
    // Step 4: Dining
    // Step 5: Essentials
    // Step 6: Experiences/Summary

    return (
        <div className="h-full w-full p-6 overflow-y-auto custom-scrollbar">
            {/* Dynamic Grid Container - Relaxed Row Height to prevents overlaps */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-max grid-flow-row-dense pb-20">
                <AnimatePresence>

                    {/* STEP 1: CONTEXT OVERVIEW - Appear after Date Response (Step 1) */}
                    {((demoStep > 1) || (demoStep === 1 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <React.Fragment key="overview-fragment">
                            {/* Calendar (2 cols) */}
                            <WidgetContainer key="calendar" className="md:col-span-12 lg:col-span-3 min-h-[240px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full">
                                    <CalendarWidget />
                                </div>
                            </WidgetContainer>

                            {/* Weather (2 cols) */}
                            <WidgetContainer key="weather" className="md:col-span-12 lg:col-span-3 min-h-[240px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full">
                                    <WeatherWidget temperature="95" />
                                </div>
                            </WidgetContainer>
                        </React.Fragment>
                    )}


                    {/* STEP 2: FLIGHT - Appear after Flight Response (Step 2) */}
                    {((demoStep > 2) || (demoStep === 2 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="flight" className="md:col-span-12 lg:col-span-6 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <FlightWidget status={demoStep >= 3 ? 'completed' : 'pending'} />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 4: HOTEL - Appear after Hotel Response (Step 4) */}
                    {((demoStep > 4) || (demoStep === 4 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="hotel" className="md:col-span-12 lg:col-span-4 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <StayWidget />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 5: RIDE - Appear after Ride Response (Step 5) */}
                    {((demoStep > 5) || (demoStep === 5 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="ride" className="md:col-span-12 lg:col-span-4 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <RideWidget />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 6: DINING - Appear after Dining Response (Step 6) */}
                    {((demoStep > 6) || (demoStep === 6 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="dining" className="md:col-span-12 lg:col-span-4 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <ActivityWidget
                                    title="Waterfront Kitchen"
                                    subtitle="$30-50 | American"
                                    image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                    category="Dining"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 7: SHOPPING - Appear after Shopping Response (Step 7) */}
                    {((demoStep > 7) || (demoStep === 7 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="shopping" className="md:col-span-12 lg:col-span-4 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <ActivityWidget
                                    title="SPF 50 Sunscreen"
                                    subtitle="124k ratings"
                                    price="$8.97"
                                    image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop"
                                    category="Shopping"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 8: EXPERIENCES - Appear after Experience Response (Step 8) */}
                    {((demoStep > 8) || (demoStep === 8 && (demoPhase === 'processing' || demoPhase === 'responding'))) && (
                        <WidgetContainer key="experiences" className="md:col-span-12 lg:col-span-8 min-h-[240px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <ActivityWidget
                                    title="Sunrise Paddle Boarding"
                                    subtitle="Guided Tour"
                                    image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                                    category="Experiences"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 9: CHECKOUT - Appear after Final Summary (Step 9) */}
                    {demoStep >= 9 && (
                        <WidgetContainer key="checkout" className="md:col-span-12 h-full min-h-[400px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full">
                                <CheckoutWidget />
                            </div>
                        </WidgetContainer>
                    )}



                </AnimatePresence>
            </div>
        </div>
    );
};
