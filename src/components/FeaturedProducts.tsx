import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Eames Lounge Chair & Ottoman',
            price: 'Sh 1,250,000',
            category: 'Furniture',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80',
            isNew: true
        },
        {
            id: 2,
            name: 'Ultra HD Smart TV 55"',
            price: 'Sh 2,800,000',
            category: 'Electronics',
            rating: 4,
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
            isNew: false
        },
        {
            id: 3,
            name: 'Premium Silk Summer Dress',
            price: 'Sh 85,000',
            category: 'Clothing',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
            isNew: true
        },
        {
            id: 4,
            name: 'Minimalist Dining Set',
            price: 'Sh 3,500,000',
            category: 'Furniture',
            rating: 4,
            image: 'https://images.unsplash.com/photo-1530018607912-eff23149f91e?auto=format&fit=crop&w=600&q=80',
            isNew: false
        },
    ];

    return (
        <section className="section-padding bg-soft">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Products</span></h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted max-w-2xl mx-auto">Explore our most popular items, hand-picked for quality and style. Direct from the best manufacturers to your doorstep.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[24px] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-soft"
                        >
                            <div className="relative aspect-square overflow-hidden bg-white p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />

                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        New Arrival
                                    </div>
                                )}

                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                    <button className="bg-white p-3 rounded-full shadow-md text-secondary hover:bg-primary hover:text-white transition-colors">
                                        <Heart size={18} />
                                    </button>
                                    <button className="bg-white p-3 rounded-full shadow-md text-secondary hover:bg-primary hover:text-white transition-colors">
                                        <Eye size={18} />
                                    </button>
                                </div>

                                <div className="absolute -bottom-16 group-hover:bottom-4 left-0 w-full px-4 transition-all duration-500">
                                    <button className="w-full bg-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors">
                                        <ShoppingCart size={18} /> Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{product.category}</p>
                                <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < product.rating ? "text-primary fill-primary" : "text-soft fill-soft"}
                                        />
                                    ))}
                                    <span className="text-[10px] text-muted font-bold ml-2">(4.8)</span>
                                </div>

                                <p className="text-xl font-black text-secondary">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-secondary text-secondary px-10 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all">
                        See All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
