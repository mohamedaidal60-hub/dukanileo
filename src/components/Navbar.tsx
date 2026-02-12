import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, ShoppingCart, User, Heart, Menu, X, Phone,
    ChevronDown, LayoutGrid, Zap, Package, Headphones,
    MapPin, Globe, CreditCard
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'Clothing & Fashion', path: '/category/fashion', icon: <Package size={16} /> },
        { name: 'Modern Furniture', path: '/category/furniture', icon: <LayoutGrid size={16} /> },
        { name: 'Kitchen & Cooking', path: '/category/cooking', icon: <Package size={16} /> },
        { name: 'Electronics & TV', path: '/category/electronics', icon: <Zap size={16} /> },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white py-4'}`}>
            {/* Top Bar - Hidden on Scroll for Cleanliness */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-black text-white text-[11px] font-bold tracking-wider py-2 overflow-hidden"
                    >
                        <div className="container flex justify-between items-center">
                            <div className="flex gap-6">
                                <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-1"><MapPin size={12} /> Find Store</Link>
                                <Link to="/faq" className="hover:text-primary transition-colors flex items-center gap-1"><Headphones size={12} /> 24/7 Service</Link>
                            </div>
                            <p className="hidden md:block uppercase">
                                Free Delivery on Wholesale Orders – <span className="text-primary">Shop Now</span>
                            </p>
                            <div className="flex gap-6 items-center">
                                <span className="flex items-center gap-1"><Globe size={12} /> TZ / TSH</span>
                                <Link to="/login" className="flex items-center gap-1 hover:text-primary"><User size={12} /> My Account</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Branding & Search Area */}
            <div className="container flex items-center gap-8 py-2">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <motion.img
                        layout
                        src="https://dukanileo.com/wp-content/uploads/2025/01/cropped-TOP-PNG-DUKANILEO.webp"
                        alt="Dukanileo"
                        className={`${isScrolled ? 'h-10' : 'h-12 md:h-16'} w-auto transition-all duration-300`}
                    />
                </Link>

                {/* PROMINENT SEARCH BAR */}
                <div className="hidden lg:flex flex-grow items-center">
                    <div className="search-wrapper group relative">
                        <div className="px-4 text-muted group-focus-within:text-primary transition-colors">
                            <Search size={22} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for premium products, brands or categories..."
                            className="search-field text-lg"
                        />
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold transition-all mx-1 text-sm">
                            SEARCH
                        </button>
                    </div>
                </div>

                {/* Desktop Quick Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-soft p-3 rounded-full text-primary">
                            <Phone size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-muted font-bold uppercase tracking-widest">Support</span>
                            <span className="text-sm font-bold">+255-693-069-288</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="relative group cursor-pointer">
                            <Heart size={26} className="text-secondary group-hover:text-primary transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </div>
                        <div className="relative group cursor-pointer">
                            <ShoppingCart size={26} className="text-secondary group-hover:text-primary transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="lg:hidden p-2 text-secondary hover:bg-soft rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={30} />
                </button>
            </div>

            {/* Primary Navigation Menu */}
            <div className={`hidden lg:block border-t border-soft mt-2 py-1 bg-white`}>
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        {/* Category Dropdown Toggle */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowCategories(true)}
                            onMouseLeave={() => setShowCategories(false)}
                        >
                            <button className="flex items-center gap-3 bg-secondary text-white py-3 px-8 rounded-t-xl font-bold uppercase tracking-wider text-xs hover:bg-primary transition-all">
                                <LayoutGrid size={18} />
                                Browse Categories
                                <ChevronDown size={14} className={`transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {showCategories && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-b-2xl border border-soft overflow-hidden z-[1100]"
                                    >
                                        {categories.map((cat, i) => (
                                            <Link
                                                key={i}
                                                to={cat.path}
                                                className="flex items-center gap-4 px-6 py-4 hover:bg-soft border-b border-soft last:border-none transition-colors group"
                                            >
                                                <span className="text-muted group-hover:text-primary transition-colors">{cat.icon}</span>
                                                <span className="font-bold text-sm">{cat.name}</span>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <nav className="flex gap-10">
                            {['HOME', 'SHOP', 'WHOLESALE OFFER', 'ABOUT US', 'CONTACT'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className={`text-xs font-black tracking-widest hover:text-primary transition-all relative group py-2`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === (item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'w-full' : ''}`}></span>
                                </Link>
                            ))}
                            <Link to="/new-arrivals" className="text-xs font-black tracking-widest bg-primary text-white py-1.5 px-3 rounded-md animate-pulse">NEW ARRIVALS</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-muted uppercase tracking-tighter">
                        <CreditCard size={14} className="text-primary" />
                        <span>Secure Checkout</span>
                        <div className="w-1 h-1 rounded-full bg-soft mx-2"></div>
                        <Package size={14} className="text-primary" />
                        <span>Free Delivery</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Implementation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-[350px] bg-white z-[1200] shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b">
                                <img src="https://dukanileo.com/wp-content/uploads/2025/01/cropped-TOP-PNG-DUKANILEO.webp" alt="Logo" className="h-10 w-auto" />
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-soft rounded-full transition-colors">
                                    <X size={26} />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto flex-grow">
                                <div className="search-wrapper mb-8 py-2">
                                    <input type="text" placeholder="Search..." className="search-field px-4" />
                                    <Search size={20} className="mr-4 text-muted" />
                                </div>

                                <h3 className="text-[10px] font-black uppercase tracking-[2px] text-muted mb-6">Menu</h3>
                                <div className="flex flex-col gap-6 font-extrabold text-xl">
                                    {['HOME', 'SHOP', 'WHOLESALE', 'ABOUT US', 'CONTACT'].map((item) => (
                                        <Link key={item} to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{item}</Link>
                                    ))}
                                </div>

                                <div className="mt-12 h-px bg-soft w-full"></div>

                                <h3 className="text-[10px] font-black uppercase tracking-[2px] text-muted my-8">Categories</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {categories.map((cat, i) => (
                                        <Link key={i} to={cat.path} className="flex items-center gap-4 p-4 bg-soft rounded-2xl hover:bg-primary/10 transition-colors group">
                                            <div className="bg-white p-3 rounded-xl text-primary">{cat.icon}</div>
                                            <span className="font-bold">{cat.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-soft">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary p-3 rounded-2xl text-white shadow-lg shadow-primary/30">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase font-black tracking-widest text-muted">Customer Service</h4>
                                        <p className="font-black text-lg">+255-693-069-288</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
