"use client";

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const filters = ["All", "Gastronomy", "Adventure", "Shopping", "Art & Culture", "Relaxation", "Nature"];

const items = [
    { type: "Adventure", image: "/find-adventure.png", title: "Desert Safari", subtitle: "Dune Bashing & Sunset" },
    { type: "Nature", image: "/find-nature.png", title: "Miracle Garden", subtitle: "Floral Wonderland" },
    { type: "Gastronomy", image: "/find-gastronomy.png", title: "Underwater Dining", subtitle: "Michelin Star Experience" },
    { type: "Shopping", image: "/find-shopping.png", title: "Fashion Avenue", subtitle: "Global Luxury Brands" },
    { type: "Art & Culture", image: "/find-culture.png", title: "Museum of the Future", subtitle: "Witness Tomorrow" },
    { type: "Relaxation", image: "/find-relaxation.png", title: "Royal Beach Club", subtitle: "Serenity by the Sea" },
];

export const FindThingsToDoSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems = activeFilter === "All"
        ? items
        : items.filter(item => item.type === activeFilter);

    return (
        <section className="py-24 bg-bg relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <ScrollReveal>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Curated Experiences
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Find things to do
                        </h2>
                    </ScrollReveal>

                    {/* Filters */}
                    <ScrollReveal delay={100} className="mt-8 md:mt-0">
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeFilter === filter
                                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                        : 'bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <ScrollReveal key={`${item.title}-${index}`} delay={index * 100}>
                            <div className="group relative h-[400px] overflow-hidden rounded-[2rem] cursor-pointer border border-white/5 bg-surface-50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-3 py-1 rounded-full glass border border-white/10 text-[10px] text-primary font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
                                        {item.type}
                                    </span>
                                    <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm font-medium">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
