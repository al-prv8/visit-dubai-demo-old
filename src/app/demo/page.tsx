"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { DEMO_SCRIPT, ScriptStep } from '@/components/demo/demo-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, ArrowRight, Play, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';

// --- Widget Wrapper for Animation ---
const WidgetContainer = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md mx-auto"
    >
        {children}
    </motion.div>
);

export default function DemoPage() {
    const { speak, isSpeaking, stop } = useTextToSpeech();
    const [currentStepId, setCurrentStepId] = useState<string>('start');
    const [history, setHistory] = useState<string[]>([]);

    // Auto-start mechanic
    const [hasStarted, setHasStarted] = useState(false);

    const step = DEMO_SCRIPT[currentStepId];

    // Effect to handle system speaking when step changes
    useEffect(() => {
        if (!hasStarted) return;

        if (step) {
            // Small delay to feel natural
            const timeout = setTimeout(() => {
                speak(step.text, () => {
                    // On finished speaking
                    if (step.autoAdvance && step.nextStepId) {
                        setCurrentStepId(step.nextStepId);
                    }
                });
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentStepId, hasStarted, speak, step]);

    const handleOptionClick = (nextId: string) => {
        if (isSpeaking) stop();
        setHistory([...history, currentStepId]);
        setCurrentStepId(nextId);
    };

    const startDemo = () => {
        setHasStarted(true);
    };

    const resetDemo = () => {
        stop();
        setHasStarted(false);
        setCurrentStepId('start');
        setHistory([]);
    };

    // --- Render Logic for Widgets ---
    const renderWidget = () => {
        if (!step) return null;

        switch (step.triggerWidget) {
            case 'flights':
                return (
                    <WidgetContainer>
                        <FlightWidget />
                    </WidgetContainer>
                );
            case 'hotel':
                return (
                    <WidgetContainer>
                        <StayWidget />
                    </WidgetContainer>
                );
            case 'ride':
                return (
                    <WidgetContainer>
                        <RideWidget />
                    </WidgetContainer>
                );
            case 'dining':
                return (
                    <WidgetContainer>
                        <div className="glass-card rounded-3xl overflow-hidden">
                            <ActivityWidget
                                title="Waterfront Kitchen"
                                subtitle="$30-50 | American"
                                image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                category="Dining"
                            />
                        </div>
                    </WidgetContainer>
                );
            case 'shopping':
                return (
                    <WidgetContainer>
                        <div className="glass-card rounded-3xl overflow-hidden">
                            <ActivityWidget
                                title="SPF 50 Sunscreen"
                                subtitle="124k ratings"
                                price="$8.97"
                                image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop"
                                category="Shopping"
                            />
                        </div>
                    </WidgetContainer>
                );
            case 'experiences':
                return (
                    <WidgetContainer>
                        <div className="glass-card rounded-3xl overflow-hidden">
                            <ActivityWidget
                                title="Sunrise Paddle Boarding"
                                subtitle="Guided Tour"
                                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                                category="Experiences"
                            />
                        </div>
                    </WidgetContainer>
                );
            case 'itinerary':
            case 'summary':
                return (
                    <WidgetContainer>
                        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">✓</div>
                                <h3 className="text-xl text-white font-serif">Trip Confirmed</h3>
                            </div>
                            <div className="space-y-2 text-sm text-white/60">
                                <p>• AA Flight 294 (SFO → MIA)</p>
                                <p>• The Setai, Ocean View Suite</p>
                                <p>• Black SUV Pickup</p>
                                <p>• Dinner @ Waterfront Kitchen</p>
                                <p>• Sunsport SPF 50 Ordered</p>
                                <p>• Paddleboarding Added</p>
                            </div>
                        </div>
                    </WidgetContainer>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-bg relative overflow-hidden flex flex-col items-center justify-center p-6">

            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            {/* Header / Exit */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/dashboard" className="text-white/40 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 rotate-180" /> Exit Demo
                </Link>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12">

                {/* 1. VISUALIZER (The "Voice") */}
                <div className="relative">
                    <motion.div
                        animate={{
                            scale: hasStarted && isSpeaking ? [1, 1.2, 1] : 1,
                            opacity: hasStarted && isSpeaking ? 0.8 : 0.3
                        }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-32 h-32 rounded-full bg-primary/20 blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center bg-black/40 backdrop-blur-md relative z-10">
                        {hasStarted ? (
                            <div className="flex gap-1 items-center h-8">
                                {[1, 2, 3, 4, 3, 2, 1].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: isSpeaking ? [10, 25, 10] : 4 }}
                                        transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                        className="w-1 bg-primary rounded-full"
                                    />
                                ))}
                            </div>
                        ) : (
                            <Play className="w-8 h-8 text-primary ml-1" />
                        )}
                    </div>
                </div>

                {/* 2. DYNAMIC WIDGET STAGE */}
                <div className="h-[400px] w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {renderWidget()}
                    </AnimatePresence>
                </div>

                {/* 3. CAPTION & CONTROLS */}
                <div className="w-full max-w-xl text-center space-y-8">

                    {/* Caption */}
                    <AnimatePresence mode="wait">
                        {hasStarted && (
                            <motion.p
                                key={step?.text}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed min-h-[5rem]"
                            >
                                "{step?.text}"
                            </motion.p>
                        )}
                    </AnimatePresence>


                    {/* User Interaction Area */}
                    {!hasStarted ? (
                        <button
                            onClick={startDemo}
                            className="bg-primary text-surface px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
                        >
                            Start Demo
                        </button>
                    ) : (
                        <div className="flex gap-4 justify-center">
                            {step?.options && step.options.map((opt) => (
                                <button
                                    key={opt.label}
                                    onClick={() => handleOptionClick(opt.nextStepId)}
                                    // Disable while speaking to prevent accidental skips? Maybe better to allow interrupt.
                                    // disabled={isSpeaking} 
                                    className={`
                                        px-6 py-2 rounded-full border transition-all duration-300
                                        ${isSpeaking
                                            ? 'border-white/10 text-white/20 cursor-not-allowed'
                                            : 'border-primary text-primary hover:bg-primary hover:text-surface'}
                                    `}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {hasStarted && (
                        <button onClick={resetDemo} className="text-xs text-white/20 hover:text-white/60 flex items-center gap-2 mx-auto mt-8">
                            <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
}
