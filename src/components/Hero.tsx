import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, ArrowRight, Play, Package } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-soft rounded-l-[120px] -z-10 translate-x-20"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                >
                    <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-lg border border-soft mb-10 hover:scale-105 transition-transform cursor-pointer">
                        <span className="bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter">NEW</span>
                        <span className="text-[11px] font-extrabold tracking-widest uppercase text-secondary">CHINA IMPORTS 2026 ARRIVED</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter">
                        PREMIUM <br />
                        <span className="text-primary italic">PRODUCTS</span><br />
                        DIRECT TO YOU.
                    </h1>

                    <p className="text-muted text-xl md:text-2xl mb-12 max-w-xl font-medium leading-relaxed">
                        Revolutionizing how Tanzania shops. High-quality furniture, professional cooking tools, and elite electronics from the world class brands.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        <button className="bg-secondary text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[2px] shadow-2xl hover:bg-primary transition-all hover:scale-110 flex items-center gap-4">
                            Explore Shop <ArrowRight size={20} />
                        </button>
                        <button className="flex items-center gap-4 group">
                            <div className="w-16 h-16 rounded-full border-2 border-soft flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                <Play size={20} className="fill-secondary group-hover:fill-white transition-all ml-1" />
                            </div>
                            <span className="font-black text-sm uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Watch Story</span>
                        </button>
                    </div>

                    <div className="mt-20 grid grid-cols-3 gap-10 border-t border-soft pt-12">
                        {[
                            { label: 'Articles', value: '45k+', icon: <Package size={18} className="text-primary" /> },
                            { label: 'Satisfied', value: '12k+', icon: <Shield size={18} className="text-primary" /> },
                            { label: 'Shipping', value: 'Direct', icon: <Globe size={18} className="text-primary" /> }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    {stat.icon}
                                    <span className="text-2xl font-black text-secondary">{stat.value}</span>
                                </div>
                                <span className="text-[10px] font-black text-muted uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "backOut" }}
                    className="relative lg:block"
                >
                    <div className="relative z-10 rounded-[80px] overflow-hidden shadow-2xl border-[16px] border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Elite Furniture"
                            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Floating Glass Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl z-20 max-w-[240px] border border-white"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-primary p-2 rounded-xl text-white"><Zap size={20} /></div>
                            <span className="font-black text-xs uppercase tracking-widest text-secondary">HOT DEAL</span>
                        </div>
                        <p className="text-primary font-black text-4xl mb-2 tracking-tighter">-45%</p>
                        <p className="text-[11px] font-bold text-muted uppercase leading-relaxed">Save huge on all Kariakoo imports this week only.</p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[32px] shadow-2xl z-20 flex items-center gap-6 border border-soft"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-soft">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white font-black text-xs">
                                +1k
                            </div>
                        </div>
                        <div>
                            <p className="font-black text-lg text-secondary">Trusted</p>
                            <p className="text-[10px] font-bold text-muted uppercase">By 12,000 Users</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
