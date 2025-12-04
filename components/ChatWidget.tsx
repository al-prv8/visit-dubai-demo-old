import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { INITIAL_CHAT_MESSAGES } from '../constants';

export const ChatWidget: React.FC = () => {
  return (
    <div className="w-full max-w-[380px] mx-auto relative group perspective-1000">
      {/* Glow Effect behind */}
      <div className="absolute inset-0 bg-champagne-400/20 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
      
      {/* Main Glass Panel */}
      <div className="relative overflow-hidden rounded-[2rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/[0.08] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
        
        {/* Decorative Top Line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse shadow-[0_0_10px_rgba(200,174,135,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Lumina AI</span>
          </div>
          <Sparkles className="w-4 h-4 text-white/20" />
        </div>

        {/* Messages */}
        <div className="h-[320px] flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          {INITIAL_CHAT_MESSAGES.map((msg, i) => (
            <div 
              key={msg.id} 
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div 
                className={`
                  max-w-[90%] p-4 text-xs leading-relaxed font-light backdrop-blur-sm
                  ${msg.sender === 'user' 
                    ? 'bg-white/[0.08] text-white border border-white/5 rounded-2xl rounded-tr-sm' 
                    : 'text-white/70 border-l border-white/10 pl-4'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/[0.02] border-t border-white/[0.05]">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask Lumina..."
              className="w-full bg-transparent border-b border-white/10 py-3 pr-10 text-xs text-white placeholder-white/20 focus:outline-none focus:border-champagne-400/50 transition-colors font-light"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
              <Send className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};