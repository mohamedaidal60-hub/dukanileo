import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sofa, Utensils, Smartphone, ArrowRight, Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        name: 'Clothing & Fashion',
        icon: <ShoppingBag size={40} />,
        count: '1,200+ Articles',
        desc: 'Quality clothing and accessories directly imported from China.',
        color: '#439665',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Modern Furniture',
        icon: <Sofa size={40} />,
        count: '450+ Luxury Items',
        desc: 'Stylish and durable furniture for modern homes and offices.',
        color: '#F7941F',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
    }
];

const secondaryCategories = [
    { name: 'Kitchen & Cooking', icon: <Utensils size={24} />, count: '800+', image: 'https://images.unsplash.com/photo-1556911220-e150213ff337?auto=format&fit=crop&w=600&q=80' },
    { name: 'Smart Electronics', icon: <Smartphone size={24} />, count: '600+', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80' }
];

const featuredProducts = [
    {
        id: 1,
        name: 'Eames Lounge Chair & Ottoman',
        brand: 'Premium Import',
        price: 'Sh 1,250,000',
        oldPrice: 'Sh 1,500,000',
        rating: 5,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
        tag: 'NEW'
    },
    {
        id: 2,
        name: 'Modern Velvet Sofa Set',
        brand: 'Luxury Living',
        price: 'Sh 4,800,000',
        oldPrice: 'Sh 5,200,000',
        rating: 5,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        tag: 'SALE'
    },
    {
        id: 3,
        name: 'Ultra High-Def Smart TV 65"',
        brand: 'Direct Tech',
        price: 'Sh 3,200,000',
        oldPrice: 'Sh 3,800,000',
        rating: 4,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
        tag: 'HOT'
    },
    {
        id: 4,
        name: 'Professional Kitchen Cookware',
        brand: 'Chef Choice',
        price: 'Sh 450,000',
        oldPrice: 'Sh 600,000',
        rating: 5,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        tag: 'POPULAR'
    }
];

const Rating = ({ stars }: { stars: number }) => (
    <div className="flex items-center gap-1 group/stars cursor-pointer">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                className={`${i < stars ? 'text-primary fill-primary' : 'text-soft fill-soft'} transition-transform group-hover/stars:scale-110`}
            />
        ))}
    </div>
);

const HomeContent = () => {
    return (
        <div className="section-padding">
            <div className="container">

                {/* BIG CATEGORY SHOWCASE */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-primary font-black uppercase tracking-[4px] text-xs mb-3 block">Premium Selection</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">World-Class <span className="gradient-text">Wholesale</span> Categories</h2>
                            <p className="text-muted text-lg leading-relaxed">We bring you the absolute best from Kariakoo and direct world markets. Quality tested, vendor certified, and ready for your home or business.</p>
                        </div>
                        <Link to="/shop" className="btn-outline flex items-center gap-3">Explore All <ArrowRight size={20} /></Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
                            >
                                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 w-full p-10 text-white">
                                    <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{cat.name}</h3>
                                    <p className="text-white/70 mb-8 max-w-sm font-medium">{cat.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="bg-primary/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{cat.count}</span>
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-primary group-hover:text-white transition-all transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {secondaryCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="group relative h-[300px] rounded-[32px] overflow-hidden shadow-xl cursor-pointer"
                            >
                                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                    <div className="bg-primary/30 backdrop-blur-md p-4 rounded-2xl mb-4">{cat.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{cat.name}</h3>
                                    <p className="text-sm font-black text-primary uppercase tracking-[2px]">{cat.count} Items Available</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FEATURED PRODUCTS REFINED */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-[4px] text-xs mb-3 block">Top Rated</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Most Wanted <span className="text-primary">Articles</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="product-card group relative"
                            >
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-6">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />

                                    {/* Floating Tag */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                            {product.tag}
                                        </span>
                                    </div>

                                    {/* Actions Overay */}
                                    <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        <button className="bg-white p-3 rounded-full shadow-lg text-black hover:bg-primary hover:text-white transition-colors">
                                            <Heart size={18} />
                                        </button>
                                        <button className="bg-white p-3 rounded-full shadow-lg text-black hover:bg-primary hover:text-white transition-colors">
                                            <Eye size={18} />
                                        </button>
                                    </div>

                                    {/* Add to Cart Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                        <button className="w-full bg-secondary text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl hover:bg-primary">
                                            <ShoppingCart size={16} /> Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="px-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-[10px] font-black text-primary uppercase mb-1 tracking-widest">{product.brand}</p>
                                            <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 pb-2 border-b border-soft">
                                        <div className="flex flex-col">
                                            <span className="text-black font-black text-xl">{product.price}</span>
                                            <span className="text-muted text-xs line-through">{product.oldPrice}</span>
                                        </div>
                                        <div className="text-right">
                                            <Rating stars={product.rating} />
                                            <span className="text-[10px] text-muted font-bold tracking-tight uppercase">{product.reviews} Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeContent;
