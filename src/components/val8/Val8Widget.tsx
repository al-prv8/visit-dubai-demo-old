"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Minimize2, Maximize2, User, Sparkles } from 'lucide-react';
import { useVal8, Val8Provider } from './Val8Context';
import { ChatInterface } from './ChatInterface';
import { BookingFlow } from './BookingFlow';
import { PostBookingSummary } from './PostBookingSummary';
import { ExitModal } from './ExitModal';
import { LoginModal } from './LoginModal';
import { Dashboard } from './Dashboard';
import { DemoCard } from './DemoCard';

const Val8WidgetContent: React.FC = () => {
    const {
        isExpanded,
        setIsExpanded,
        bookingState,
        chatHistory,
        setShowExitModal,
        view,
        setView,
        user,
        setShowLoginModal,
        activeAction,
        clearActiveAction,
        addMessage,
        isDemoMode,
        setIsDemoMode,
        setDemoStep
    } = useVal8();
    const [showLoader, setShowLoader] = useState(false);

    // Handle incoming widget actions
    React.useEffect(() => {
        if (activeAction) {
            // Add user message
            addMessage({
                sender: 'user',
                text: activeAction
            });

            // Simulate AI response
            setTimeout(() => {
                addMessage({
                    sender: 'val8',
                    text: `I can certainly help you with "${activeAction}". What specific details would you like to know?`
                });
            }, 1000);

            clearActiveAction();
        }
    }, [activeAction, addMessage, clearActiveAction]);

    const handleExpand = () => {
        setIsExpanded(true);
        setShowLoader(true);
        // Simulate loading delay
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    };

    const handleClose = () => {
        if (chatHistory.length > 0 && bookingState !== 'confirmed' && bookingState !== 'post-booking') {
            setShowExitModal(true);
        } else {
            setIsExpanded(false);
        }
    };

    const handleProfileClick = () => {
        if (!user) {
            setShowLoginModal(true);
        }
    };

    return (

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed z-50 overflow-hidden flex flex-col bg-surface dark:bg-[#050505]/95 backdrop-blur-3xl border border-border-subtle dark:border-white/10 shadow-2xl
                                   max-md:inset-0 max-md:w-full max-md:h-[100dvh] max-md:rounded-none max-md:bottom-0 max-md:right-0 max-md:border-0
                                   md:bottom-6 md:right-6 md:w-[400px] md:h-[700px] md:rounded-[32px]"
                        style={window.innerWidth >= 768 ? {
                            position: 'fixed',
                            ...(view === 'dashboard' ? {
                                top: '7.5vh',
                                bottom: '7.5vh',
                                left: '5vw',
                                right: '5vw',
                                width: 'auto',
                                height: 'auto',
                                transform: 'none'
                            } : {
                                top: 'auto',
                                bottom: '1.5rem',
                                left: 'auto',
                                right: '1.5rem',
                                width: '400px',
                                height: '700px',
                                transform: 'none'
                            })
                        } : {}}
                    >
                        {/* Header */}
                        <div className="h-16 bg-surface-alt/50 dark:bg-white/5 backdrop-blur-md border-b border-border-subtle dark:border-white/5 flex items-center justify-between px-6 shrink-0 relative z-20">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDemoMode ? 'bg-[#C5A572]' : 'bg-primary'}`}>
                                    <span className="font-serif font-bold text-surface text-lg">V</span>
                                </div>
                                <div>
                                    <h1 className="text-text-primary dark:text-white font-serif text-lg tracking-wide">{isDemoMode ? 'Visit Dubai AI' : 'Val8'}</h1>
                                    <p className={`text-[10px] uppercase tracking-widest font-medium ${isDemoMode ? 'text-[#C5A572]' : 'text-primary'}`}>
                                        {isDemoMode ? 'Official Concierge' : 'Powered by PRV8.'}
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
                                    onClick={() => setView(view === 'chat' ? 'dashboard' : 'chat')}
                                    className="w-8 h-8 rounded-full bg-surface-alt/50 dark:bg-surface-100 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-alt dark:hover:bg-surface-200 transition-colors"
                                >
                                    {view === 'chat' ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="w-8 h-8 rounded-full bg-surface-alt/50 dark:bg-surface-100 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-alt dark:hover:bg-surface-200 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 relative overflow-hidden">
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
                                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 relative">
                                            <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping" />
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        </div>
                                        <h3 className="text-lg font-serif text-text-primary dark:text-white mb-2">Preparing your experience...</h3>
                                        <p className="text-xs text-text-muted dark:text-white/40 font-light tracking-wide">Connecting to global concierge network</p>
                                    </motion.div>
                                ) : view === 'dashboard' ? (
                                    <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col md:flex-row relative z-10 animate-in fade-in">
                                        {/* Left Panel: Chat Interface - Hidden on Mobile in Dashboard View */}
                                        <div className="hidden md:flex w-[400px] border-r border-border-subtle dark:border-white/10 flex-col bg-surface dark:bg-[#050505] backdrop-blur-xl relative z-10">
                                            <ChatInterface />
                                            <BookingFlow />
                                            <PostBookingSummary />
                                        </div>

                                        {/* Right Panel: Content (Dashboard OR Demo Card) - Full Width on Mobile */}
                                        <div className="flex-1 bg-surface-alt dark:bg-black/20 relative z-0 flex flex-col">
                                            {isDemoMode ? <DemoCard /> : <Dashboard />}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full relative z-10">
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
                )}
            </AnimatePresence>

            {/* Launcher */}
            <AnimatePresence>
                {!isExpanded && (
                    <motion.button
                        layoutId="launcher"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleExpand}
                        className="bg-surface text-text-primary dark:text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-border-subtle dark:border-white/10 group z-50
                                 max-md:bottom-4 max-md:right-4 max-md:transform max-md:scale-90"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <span className="font-serif font-bold text-surface text-lg">V</span>
                        </div>
                        <span className="font-medium tracking-wide pr-2">Plan Your Trip</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Val8Widget: React.FC = () => {
    return (
        <Val8Provider>
            <Val8WidgetContent />
        </Val8Provider>
    );
};
