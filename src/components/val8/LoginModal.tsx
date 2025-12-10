"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { useVal8 } from './Val8Context';

export const LoginModal: React.FC = () => {
    const { showLoginModal, setShowLoginModal, login } = useVal8();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    if (!showLoginModal) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, name || 'Guest');
    };

    return (
        <AnimatePresence>
            <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-surface/80 dark:bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-sm glass-card shadow-2xl relative overflow-hidden bg-surface dark:bg-black/80"
                >
                    <button
                        onClick={() => setShowLoginModal(false)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-alt dark:bg-white/5 flex items-center justify-center text-text-muted dark:text-white/40 hover:text-text-primary dark:hover:text-white hover:bg-surface-200 dark:hover:bg-white/10 transition-colors z-10"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-serif text-text-primary dark:text-white mb-2">
                                {isSignUp ? 'Join Val8' : 'Welcome Back'}
                            </h2>
                            <p className="text-text-secondary dark:text-white/60 text-sm">
                                {isSignUp
                                    ? 'Create an account to save your trips and preferences.'
                                    : 'Sign in to access your dashboard.'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {isSignUp && (
                                <div className="space-y-2">
                                    <label className="text-xs text-white/60 uppercase tracking-wider">Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-white/40" />
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full bg-surface-alt dark:bg-white/5 border border-border-subtle dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-text-primary dark:text-white placeholder-text-muted dark:placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-xs text-text-secondary dark:text-white/60 uppercase tracking-wider">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-white/40" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full bg-surface-alt dark:bg-white/5 border border-border-subtle dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-text-primary dark:text-white placeholder-text-muted dark:placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-text-secondary dark:text-white/60 uppercase tracking-wider">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-white/40" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-surface-alt dark:bg-white/5 border border-border-subtle dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-text-primary dark:text-white placeholder-text-muted dark:placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-surface py-4 rounded-xl font-medium text-sm hover:bg-primary-soft transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 mt-6"
                            >
                                {isSignUp ? 'Create Account' : 'Sign In'} <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="text-xs text-text-secondary dark:text-white/40 hover:text-primary transition-colors"
                            >
                                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
