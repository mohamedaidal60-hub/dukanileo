import React from 'react';
import HomeContent from '../components/HomeContent';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Clock, RefreshCw, Zap, Star, LayoutGrid, Package } from 'lucide-react';

const homeFeatures = [
    {
        icon: <Truck size={36} className="text-secondary" />,
        title: 'FAST SHIPMENTS',
        desc: 'Tanzania wide network',
        color: '#000'
    },
    {
        icon: <ShieldCheck size={36} className="text-primary" />,
        title: 'CERTIFIED QUALITY',
        desc: 'Direct import testing',
        color: '#F7941F'
    },
    {
        icon: <Clock size={36} className="text-secondary" />,
        title: '24/7 SUPPORT',
        desc: 'Expert help desk',
        color: '#000'
    },
    {
        icon: <RefreshCw size={36} className="text-primary" />,
        title: 'EASY RETURNS',
        desc: '7-day policy',
        color: '#F7941F'
    }
];

const Home = () => {
    return (
        <div className="relative overflow-visible">
            {/* Hero Section */}
            <Hero />

            {/* Trust Features Bar - Redesigned to be much cleaner and non-blocking */}
            <div className="container relative z-20 -mt-16 mb-16">
                <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-soft grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {homeFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 group cursor-default"
                        >
                            <div className="bg-soft p-5 rounded-[24px] rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-sm tracking-widest uppercase mb-1">{feature.title}</h4>
                                <p className="text-[11px] text-muted font-bold tracking-tight uppercase opacity-60">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <HomeContent />

            {/* Modern Banner - Big Sale */}
            <section className="container mb-32">
                <div className="relative h-[600px] rounded-[60px] overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80"
                        alt="Promotion"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center p-8 md:p-24">
                        <div className="max-w-2xl transform group-hover:translate-x-4 transition-transform duration-1000">
                            <span className="bg-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[3px] text-white mb-8 inline-block shadow-lg">
                                Exclusive Collection
                            </span>
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none">
                                THE FUTURE <br />
                                <span className="text-primary italic">OF COMFORT.</span>
                            </h2>
                            <p className="text-white/70 text-xl mb-12 leading-relaxed font-medium">
                                Experience the perfect blend of modern design and unmatched durability.
                                Our latest furniture imports are here to transform your living space.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-2xl">
                                    Shop Furniture
                                </button>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-bounce-slow">
                                        <Star size={20} className="fill-primary text-primary" />
                                    </div>
                                    <span className="text-sm font-bold tracking-widest uppercase">Best in Tanzania</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Pre-Footer */}
            <section className="bg-soft py-32 rounded-t-[100px] -mt-10 overflow-hidden relative">
                <div className="container relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-primary font-black uppercase tracking-[5px] text-xs mb-6 block">Stay Connected</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-12">BEYOND <span className="text-primary">E-COMMERCE.</span></h2>
                        <p className="text-muted text-xl md:text-2xl font-medium mb-16 px-4">
                            Dukanileo is more than a shop. We are your partner in quality imports.
                            Join 50,000+ satisfied customers today.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <button className="bg-secondary text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl">
                                Create Account
                            </button>
                            <button className="bg-primary text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl">
                                Become a Vendor
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Elements to prevent "just text" look */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>
            </section>
        </div>
    );
};

export default Home;
