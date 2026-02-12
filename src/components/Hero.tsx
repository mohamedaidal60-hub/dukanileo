import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-soft pt-20">
            {/* Background Decor */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full w-fit shadow-sm border border-primary/20 mb-6"
                    >
                        <Zap size={16} className="text-primary fill-primary" />
                        <span className="text-xs font-bold tracking-wider uppercase">Direct Imports from China</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                        Everything You Need, <br />
                        <span className="text-primary">All In One Place.</span>
                    </h1>

                    <p className="text-muted text-lg mb-8 max-w-lg">
                        Your premium destination for Kariakoo goods and direct quality imports.
                        Furniture, Electronics, Fashion, and more with guaranteed quality.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2">
                            Shop Now <ArrowRight size={20} />
                        </button>
                        <button className="bg-white text-secondary px-8 py-4 rounded-full font-bold shadow-md hover:bg-soft transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <Shield size={20} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase">Quality</p>
                                <p className="text-[10px] text-muted">Certified Goods</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <Globe size={20} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase">Shipping</p>
                                <p className="text-[10px] text-muted">Direct from China</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Premium Furniture"
                        className="rounded-[40px] shadow-2xl z-10 relative"
                    />
                    <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-[200px] border border-soft animate-bounce-slow">
                        <p className="text-primary font-black text-3xl mb-1">30% OFF</p>
                        <p className="text-xs font-bold text-muted uppercase">On All Furniture Items This Week</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
