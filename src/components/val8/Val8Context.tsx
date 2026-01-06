"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// Types for the context
export type UserIntent = 'planning' | 'browsing' | 'booking' | null;

export interface TripContext {
  destination?: string;
  dates?: string;
  travelers?: number;
  preferences?: string[];
  budget?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'val8';
  text: string;
  type?: 'text' | 'options' | 'card-stack' | 'confirmation';
  options?: string[];
  cards?: HotelCard[];
  timestamp: number;
}

export interface HotelCard {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tags: string[];
  priceSuffix?: string;
  type?: 'hotel' | 'attraction' | 'event';
  startDate?: string;
  endDate?: string;
}

// Re-export type compatible with AuthContext or alias it
export interface UserProfile {
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export interface Trip {
  id: string;
  hotel: HotelCard;
  dates: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface Val8ContextType {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  userIntent: UserIntent;
  setUserIntent: (intent: UserIntent) => void;
  tripContext: TripContext;
  updateTripContext: (context: Partial<TripContext>) => void;
  chatHistory: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  bookingState: 'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking';
  setBookingState: (state: 'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking') => void;
  selectedHotel: HotelCard | null;
  setSelectedHotel: (hotel: HotelCard | null) => void;
  showExitModal: boolean;
  setShowExitModal: (show: boolean) => void;

  // Auth & View
  user: UserProfile | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  view: 'chat' | 'dashboard';
  setView: (view: 'chat' | 'dashboard') => void;
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  activeAction: string | null;
  handleWidgetAction: (action: string) => void;
  clearActiveAction: () => void;
  isDemoMode: boolean;
  setIsDemoMode: (mode: boolean) => void;
  demoStep: number;
  setDemoStep: (step: number) => void;
  demoPhase: 'idle' | 'typing' | 'processing' | 'responding';
  setDemoPhase: (phase: 'idle' | 'typing' | 'processing' | 'responding') => void;
}

const Val8Context = createContext<Val8ContextType | undefined>(undefined);

interface Val8ProviderProps {
  children: ReactNode;
  initialExpanded?: boolean;
}

export const Val8Provider: React.FC<Val8ProviderProps> = ({ children, initialExpanded = false }) => {
  const { user: authUser, login: authLogin, logout: authLogout } = useAuth();

  const [currentFrame, setCurrentFrame] = useState(1);
  const [isExpanded, setIsExpanded] = useState(initialExpanded); // Use prop for initial state
  const [userIntent, setUserIntent] = useState<UserIntent>(null);
  const [tripContext, setTripContext] = useState<TripContext>({});
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingState, setBookingState] = useState<'idle' | 'summary' | 'checkout' | 'confirmed' | 'post-booking'>('idle');
  const [selectedHotel, setSelectedHotel] = useState<HotelCard | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);

  // Demo Mode State
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [demoPhase, setDemoPhase] = useState<'idle' | 'typing' | 'processing' | 'responding'>('idle');

  // Map AuthContext user to Val8 UserProfile
  const user: UserProfile | null = authUser ? {
    name: authUser.name,
    email: authUser.email,
    isAuthenticated: true
  } : null;

  const [view, setView] = useState<'chat' | 'dashboard'>('chat');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const login = (email: string, name: string = 'Guest') => {
    authLogin(email, name);
    setShowLoginModal(false);
    setView('dashboard');
  };

  const logout = () => {
    authLogout();
    setView('chat');
  };

  const addTrip = (trip: Trip) => {
    setTrips(prev => [trip, ...prev]);
  };

  const updateTripContext = (context: Partial<TripContext>) => {
    setTripContext(prev => ({ ...prev, ...context }));
  };

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    setChatHistory(prev => [...prev, newMessage]);
  };

  const handleWidgetAction = (action: string) => {
    setActiveAction(action);
    setView('chat');
  };

  const clearActiveAction = () => {
    setActiveAction(null);
  };

  return (
    <Val8Context.Provider
      value={{
        currentFrame,
        setCurrentFrame,
        isExpanded,
        setIsExpanded,
        userIntent,
        setUserIntent,
        tripContext,
        updateTripContext,
        chatHistory,
        addMessage,
        isLoading,
        setIsLoading,
        bookingState,
        setBookingState,
        selectedHotel,
        setSelectedHotel,
        showExitModal,
        setShowExitModal,
        user,
        login,
        logout,
        view,
        setView,
        trips,
        addTrip,
        showLoginModal,
        setShowLoginModal,
        activeAction,
        handleWidgetAction,
        clearActiveAction,
        isDemoMode,
        setIsDemoMode,
        demoStep,
        setDemoStep,
        demoPhase,
        setDemoPhase
      }}
    >
      {children}
    </Val8Context.Provider>
  );
};

export const useVal8 = () => {
  const context = useContext(Val8Context);
  if (context === undefined) {
    throw new Error('useVal8 must be used within a Val8Provider');
  }
  return context;
};
