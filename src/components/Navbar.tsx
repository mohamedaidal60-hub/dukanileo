import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, ShoppingCart, User, Heart, Menu, X, Phone,
    ChevronDown, LayoutGrid, Zap, Package, Info, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'Clothing', icon: <Zap size={18} />, path: '/category/clothing' },
        { name: 'Furniture', icon: <Package size={18} />, path: '/category/furniture' },
        { name: 'Cooking', icon: <Package size={18} />, path: '/category/cooking' },
        { name: 'Electronic', icon: <Zap size={18} />, path: '/category/electronic' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism shadow-lg' : 'bg-white'}`}>
            {/* Top Bar */}
            {!isScrolled && (
                <div className="bg-black text-white text-[12px] py-2">
                    <div className="container flex justify-between items-center">
                        <div className="flex gap-4">
                            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                            <Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link>
                        </div>
                        <p className="hidden md:block">
                            <span className="text-primary font-bold">Dukanileo</span> – Your One-Stop Shop for Kariakoo Goods & Direct Imports from China!
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center gap-1">
                                <Heart size={14} className="text-primary" />
                                <span>0 Wishlist</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User size={14} className="text-primary" />
                                <span>Login / Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <div className="container py-4 flex items-center justify-between">
                <Link to="/" className="flex-shrink-0">
                    <img
                        src="https://dukanileo.com/wp-content/uploads/2025/01/cropped-TOP-PNG-DUKANILEO.webp"
                        alt="Dukanileo Logo"
                        className="h-10 md:h-14 w-auto"
                    />
                </Link>

                {/* Desktop Search */}
                <div className="hidden lg:flex flex-grow max-w-xl mx-8 relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full bg-soft border-none rounded-full py-3 px-6 pr-12 focus:ring-2 focus:ring-primary transition-all outline-none"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors">
                        <Search size={20} />
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] text-muted font-bold uppercase">24/7 Support</span>
                        <span className="text-sm font-bold">+255-693-069-288</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer hover:scale-110 transition-transform">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">0</span>
                        </div>
                        <button
                            className="lg:hidden text-secondary"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="hidden lg:block border-t border-soft">
                <div className="container flex items-center justify-between py-1">
                    <div className="flex items-center gap-8">
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-t-lg font-bold">
                                <LayoutGrid size={20} />
                                Browse Categories
                                <ChevronDown size={16} />
                            </button>
                            {/* Dropdown would go here */}
                        </div>

                        <div className="flex gap-8 font-semibold text-sm">
                            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
                            <Link to="/shop" className="hover:text-primary transition-colors">SHOP</Link>
                            <Link to="/about" className="hover:text-primary transition-colors">ABOUT US</Link>
                            <Link to="/wholesale" className="hover:text-primary transition-colors">WHOLESALE OFFER</Link>
                            <Link to="/new-arrivals" className="text-primary hover:opacity-80 transition-all font-bold">NEW ARRIVALS</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold">
                        <Zap size={16} className="text-primary" />
                        <span className="text-muted">Direct Imports from China</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-white lg:hidden"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b">
                                <img
                                    src="https://dukanileo.com/wp-content/uploads/2025/01/cropped-TOP-PNG-DUKANILEO.webp"
                                    alt="Logo"
                                    className="h-8 w-auto"
                                />
                                <button onClick={() => setIsMobileMenuOpen(false)}>
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto p-6">
                                <div className="mb-8">
                                    <h3 className="text-muted uppercase text-xs font-bold mb-4 tracking-wider">Main Navigation</h3>
                                    <div className="flex flex-col gap-4 text-xl font-bold">
                                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                        <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                                        <Link to="/wholesale" onClick={() => setIsMobileMenuOpen(false)}>Wholesale</Link>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-muted uppercase text-xs font-bold mb-4 tracking-wider">Categories</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.name}
                                                to={cat.path}
                                                className="flex flex-col items-center gap-2 p-4 bg-soft rounded-2xl hover:bg-primary/10 transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <div className="text-primary">{cat.icon}</div>
                                                <span className="text-xs font-bold">{cat.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-soft">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Phone className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-muted font-bold uppercase">Customer Support</p>
                                        <p className="font-bold">+255-693-069-288</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
