import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const articles = [
    {
        title: "The Guide",
        subtitle: "How to spend a perfect weekend in Dubai",
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1000&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Gastronomy",
        subtitle: "Top Michelin Star restaurants to visit",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Culture",
        subtitle: "Discovering the historic Al Fahidi District",
        image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1000&auto=format&fit=crop",
        link: "#"
    }
];

export const MoreAboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-bg">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-12">
                        More about Dubai
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className="group cursor-pointer">
                                <div className="h-[280px] rounded-t-2xl overflow-hidden relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="glass-card border border-white/5 border-t-0 p-6 rounded-b-2xl group-hover:bg-white/5 transition-colors shadow-lg">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                                        {article.title}
                                    </span>
                                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-primary-light transition-colors font-serif">
                                        {article.subtitle}
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/10 mb-4" />
                                    <span className="text-sm text-white/60 group-hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wider text-xs">
                                        Read Article <span className="text-primary">&rarr;</span>
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
