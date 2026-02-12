import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

const homeFeatures = [
    {
        icon: <Truck size={32} className="text-primary" />,
        title: 'Nationwide Delivery',
        desc: 'Fast and reliable shipping across Tanzania'
    },
    {
        icon: <ShieldCheck size={32} className="text-primary" />,
        title: 'Secure Payment',
        desc: 'Multiple secure payment options supported'
    },
    {
        icon: <Clock size={32} className="text-primary" />,
        title: '24/7 Support',
        desc: 'Friendly customer support always available'
    },
    {
        icon: <RefreshCw size={32} className="text-primary" />,
        title: 'Easy Returns',
        desc: 'Hassle-free 7-day return policy'
    }
];

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />

            {/* Trust Features */}
            <section className="bg-white py-12 border-b border-soft">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {homeFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="bg-soft p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase mb-1">{feature.title}</h4>
                                    <p className="text-[10px] text-muted font-medium">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Categories />
            <FeaturedProducts />

            {/* Modern Banner */}
            <section className="container mb-24">
                <div className="relative h-[400px] rounded-[48px] overflow-hidden bg-secondary">
                    <img
                        src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80"
                        alt="Promotion"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent flex items-center p-12 lg:p-24">
                        <div className="max-w-xl text-white">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block"
                            >
                                Limited Time Offer
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Upgrade Your Home <br /><span className="text-primary">Experience.</span></h2>
                            <p className="text-white/70 text-lg mb-8">Get up to 40% off on all new arrivals from China. Premium quality guaranteed.</p>
                            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                                Explore The Collection
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="bg-primary py-20 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" fill="none" />
                    </svg>
                </div>
                <div className="container relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start shopping?</h2>
                    <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">Join thousands of happy customers who get their best products from Dukanileo.</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="bg-black text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                            Create Account
                        </button>
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                            Browse Wholesale
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
