import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sofa, Utensils, Smartphone, ArrowRight } from 'lucide-react';

const Categories = () => {
    const categories = [
        {
            name: 'Clothing & Fashion',
            icon: <ShoppingBag size={40} />,
            count: '1,200+ Products',
            color: '#439665',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Premium Furniture',
            icon: <Sofa size={40} />,
            count: '450+ Products',
            color: '#F7941F',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Kitchen & Cooking',
            icon: <Utensils size={40} />,
            count: '800+ Products',
            color: '#e8c028',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Electronics',
            icon: <Smartphone size={40} />,
            count: '600+ Products',
            color: '#5d92ae',
            image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80'
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Shop By <span className="text-primary">Categories</span></h2>
                        <p className="text-muted max-w-md">Discover our wide range of premium products imported directly to give you the best quality.</p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 group mt-6 md:mt-0">
                        View All Categories <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-[32px] h-[400px] cursor-pointer"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                <div className="bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                                <p className="text-white/70 text-sm font-medium">{cat.count}</p>
                            </div>

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-primary p-3 rounded-full text-white">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
