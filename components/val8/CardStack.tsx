import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { HotelCard } from './Val8Context';

export const CardStack: React.FC<{ cards: HotelCard[], onSelect: (hotel: HotelCard) => void, onRemove: (id: string) => void }> = ({ cards, onSelect, onRemove }) => {
    return (
        <div className="relative h-[420px] w-full flex items-center justify-center mt-4 mb-8">
            <AnimatePresence>
                {cards.map((card, index) => {
                    const isTop = index === cards.length - 1;
                    return (
                        <motion.div
                            key={card.id}
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{
                                scale: 1 - (cards.length - 1 - index) * 0.05,
                                y: (cards.length - 1 - index) * -15,
                                opacity: 1 - (cards.length - 1 - index) * 0.2,
                                zIndex: index
                            }}
                            exit={{ x: 300, opacity: 0, rotate: 20 }}
                            drag={isTop ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 100) {
                                    onRemove(card.id);
                                }
                            }}
                            className="absolute w-[90%] h-[380px] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing ring-1 ring-white/5"
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            {/* Image */}
                            <div className="h-[60%] relative group">
                                <img src={card.image} alt={card.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                    <Star className="w-3 h-3 text-primary fill-primary" />
                                    <span className="text-xs text-white font-medium">{card.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-[40%] bg-[#0a0a0a]/95 backdrop-blur-xl relative">
                                {/* Decorative glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                <div>
                                    <h3 className="text-lg font-serif text-white mb-1">{card.name}</h3>
                                    <div className="flex items-center gap-1 text-white/50 mb-3">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-xs font-light">{card.location}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {card.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-xs text-white/40">Starting from</span>
                                        <p className="text-primary font-medium">{card.price} <span className="text-xs text-white/40 font-light">/ night</span></p>
                                    </div>
                                    <button
                                        onClick={() => onSelect(card)}
                                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 text-surface shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {cards.length === 0 && (
                <div className="text-center text-white/40 text-sm">
                    <p>No more recommendations.</p>
                </div>
            )}
        </div>
    );
};
