"use client";

import React, { useEffect, useState } from 'react';
import { ChatInterface } from '@/components/val8/ChatInterface';
import { Val8Provider, useVal8 } from '@/components/val8/Val8Context';
import { User, Maximize2, Minimize2, X } from 'lucide-react';
import { BookingFlow } from '@/components/val8/BookingFlow';
import { PostBookingSummary } from '@/components/val8/PostBookingSummary';
import { DemoCard } from '@/components/val8/DemoCard';
import { Dashboard } from '@/components/val8/Dashboard';
import { ExitModal } from '@/components/val8/ExitModal';
import { LoginModal } from '@/components/val8/LoginModal';
import { motion, AnimatePresence } from 'framer-motion';

const WidgetHeader = ({ onClose }: { onClose: () => void }) => {
    const { isDemoMode, setIsDemoMode, setView, view, user, setDemoStep, setShowLoginModal } = useVal8();

    const handleProfileClick = () => {
        if (!user) {
            setShowLoginModal(true);
        }
    };

    const handleToggleFullscreen = () => {
        // Toggle view logic
        const nextView = view === 'chat' ? 'dashboard' : 'chat';
        setView(nextView);

        // Send resize message to parent
        // If we are moving to dashboard or demo, we want fullscreen/large mode
        // If we are moving to chat, we usually want compact mode, UNLESS we are in demo mode on mobile (split)

        // Simpler logic: 'dashboard' view implies broader content, so request FullScreen
        const isFullscreen = nextView === 'dashboard';
        window.parent.postMessage({ type: 'LUMINE_WIDGET_MODE', mode: isFullscreen ? 'fullscreen' : 'standard' }, '*');
    };

    return (
        <div className="h-16 bg-surface-alt/50 dark:bg-white/5 backdrop-blur-md border-b border-border-subtle dark:border-white/5 flex items-center justify-between px-6 shrink-0 relative z-20">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDemoMode ? 'bg-[#C5A572]' : 'bg-primary'}`}>
                    <span className="font-serif font-bold text-surface text-lg">V</span>
                </div>
                <div>
                    <h1 className="text-text-primary dark:text-white font-serif text-lg tracking-wide">{isDemoMode ? 'Visit Dubai AI' : 'Val8'}</h1>
                    <p className={`text-[10px] uppercase tracking-widest font-medium ${isDemoMode ? 'text-[#C5A572]' : 'text-primary'}`}>
                        {isDemoMode ? 'Powered by Prv8' : 'Powered by PRV8.'}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => {
                        const newMode = !isDemoMode;
                        setIsDemoMode(newMode);
                        if (newMode) {
                            setView('dashboard');
                            setDemoStep(0);
                            // Auto-trigger fullscreen for demo
                            window.parent.postMessage({ type: 'LUMINE_WIDGET_MODE', mode: 'fullscreen' }, '*');
                        } else {
                            // Restore standard size when exiting demo
                            setView('chat');
                            window.parent.postMessage({ type: 'LUMINE_WIDGET_MODE', mode: 'standard' }, '*');
                        }
                    }}
                    className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-medium transition-colors border ${isDemoMode ? 'bg-[#C5A572] text-black border-[#C5A572]' : 'bg-surface-alt/50 dark:bg-white/5 text-text-muted dark:text-white/40 border-border-subtle dark:border-white/10 hover:text-text-primary dark:hover:text-white'}`}
                >
                    {isDemoMode ? 'Exit Demo' : 'Demo'}
                </button>
                <button
                    onClick={handleProfileClick}
                    className="w-8 h-8 rounded-full bg-surface-alt/50 dark:bg-surface-100 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-alt dark:hover:bg-surface-200 transition-colors"
                >
                    {user ? (
                        <div className="w-full h-full rounded-full bg-primary text-surface flex items-center justify-center font-bold text-xs">
                            {user?.name?.charAt(0)}
                        </div>
                    ) : (
                        <User className="w-4 h-4" />
                    )}
                </button>
                <button
                    onClick={handleToggleFullscreen}
                    className="w-8 h-8 rounded-full bg-surface-alt/50 dark:bg-surface-100 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-alt dark:hover:bg-surface-200 transition-colors"
                >
                    {view === 'chat' ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-surface-alt/50 dark:bg-surface-100 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-alt dark:hover:bg-surface-200 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

const WidgetContent = () => {
    const {
        view,
        isDemoMode,
        setIsExpanded,
        chatHistory,
        bookingState,
        setShowExitModal,
        activeAction,
        addMessage,
        clearActiveAction,
        isExpanded: isExpandedContext
    } = useVal8();

    const [showLoader, setShowLoader] = useState(true); // Start with loader

    // Handle initial load simulation
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle incoming widget actions (e.g. if we add capability to send actions via postMessage later)
    useEffect(() => {
        if (activeAction) {
            addMessage({
                sender: 'user',
                text: activeAction
            });

            setTimeout(() => {
                addMessage({
                    sender: 'val8',
                    text: `I can certainly help you with "${activeAction}". What specific details would you like to know?`
                });
            }, 1000);

            clearActiveAction();
        }
    }, [activeAction, addMessage, clearActiveAction]);

    // Handle Exit Logic
    // In Widget Mode, ExitModal sets isExpanded(false). We detect this and close the iframe.
    useEffect(() => {
        if (!isExpandedContext) {
            // Context says closed, so we close the iframe
            window.parent.postMessage({ type: 'LUMINE_WIDGET_CLOSE' }, '*');
            // Reset state for next open (optional, but good practice)
            // We might need to handle this cleaner if the provider doesn't unmount
            setIsExpanded(true);
        }
    }, [isExpandedContext, setIsExpanded]);

    const handleCloseRequest = () => {
        if (chatHistory.length > 0 && bookingState !== 'confirmed' && bookingState !== 'post-booking') {
            setShowExitModal(true);
        } else {
            // Direct close
            window.parent.postMessage({ type: 'LUMINE_WIDGET_CLOSE' }, '*');
        }
    };

    // Determine container classes based on view (matches Val8Widget logic)
    // If Dashboard/Demo (Fullscreen Mode):
    // - Mobile: Full Screen (inset-0, rounded-none)
    // - Desktop: Inset Modal (w-[90vw], h-[85vh], rounded-[32px])
    // If Chat (Compact Mode):
    // - Always fill the configured iframe size (rounded-[32px] handled by container)
    // NOTE: The iframe itself is 100vw/100vh in Fullscreen Mode.

    const isFullscreenMode = view === 'dashboard';

    return (
        <motion.div
            layout
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className={`
                overflow-hidden glass-panel border border-border-subtle dark:border-white/10 shadow-2xl flex flex-col bg-surface dark:bg-[#050505]/95 backdrop-blur-3xl
                ${isFullscreenMode
                    ? 'w-full h-full md:w-[90vw] md:h-[85vh] md:m-auto md:rounded-[32px] rounded-none'
                    : 'h-full w-full rounded-[32px]'
                }
            `}
        >
            <WidgetHeader onClose={handleCloseRequest} />

            <div className="flex-1 relative overflow-hidden flex flex-col">
                {/* DEMO MODE BACKGROUND */}
                {isDemoMode && (
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1512453979798-5ea904ac22de?q=80&w=2670&auto=format&fit=crop"
                            alt="Dubai Background"
                            className="w-full h-full object-cover opacity-20 transform scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {showLoader ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-surface dark:bg-[#050505] z-50"
                        >
                            <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 relative">
                                <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping" />
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            </div>
                            <h3 className="text-lg font-serif text-text-primary dark:text-white mb-2">Preparing your experience...</h3>
                            <p className="text-xs text-text-muted dark:text-white/40 font-light tracking-wide">Connecting to global concierge network</p>
                        </motion.div>
                    ) : view === 'dashboard' ? (
                        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col relative z-10 overflow-hidden animate-in fade-in">
                            {/* 
                              RESTORED LOGIC: In Dashboard View (which happens in Demo), 
                              show Split View so ChatInterface is still visible for the Demo script 
                            */}
                            <div className="flex flex-col md:flex-row h-full">
                                <div className={`
                                    w-full md:w-[400px] 
                                    flex-col bg-surface dark:bg-[#050505] backdrop-blur-xl relative z-10
                                    border-b md:border-b-0 md:border-r border-border-subtle dark:border-white/10
                                    ${isDemoMode ? 'flex h-[40%] md:h-full' : 'hidden md:flex h-full'}
                                `}>
                                    <ChatInterface />
                                    <BookingFlow />
                                    <PostBookingSummary />
                                </div>
                                <div className="flex-1 bg-surface-alt dark:bg-black/20 relative z-0 flex flex-col h-full overflow-hidden">
                                    {isDemoMode ? <DemoCard /> : <Dashboard />}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 relative z-10 overflow-hidden flex flex-col">
                            <ChatInterface />
                            <BookingFlow />
                            <PostBookingSummary />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Modals */}
                <ExitModal />
                <LoginModal />
            </div>
        </motion.div>
    );
}

export default function WidgetPage() {
    return (
        <div className="h-screen w-screen flex flex-col bg-transparent p-0 overflow-hidden">
            <Val8Provider initialExpanded={true}>
                <WidgetContent />
            </Val8Provider>
        </div>
    );
}

