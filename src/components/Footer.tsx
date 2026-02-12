import {
    Facebook, Instagram, Twitter,
    Mail, Phone, MapPin, ArrowUpRight, Send, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <img
                            src="https://dukanileo.com/wp-content/uploads/2025/01/cropped-TOP-PNG-DUKANILEO.webp"
                            alt="Logo"
                            className="h-12 w-auto mb-8 invert"
                        />
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Dukanileo is your premier partner for Kariakoo goods and direct imports from China.
                            We bridge the gap between quality manufacturers and your doorstep.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                            Quick <span className="text-primary">Links</span>
                        </h4>
                        <ul className="flex flex-col gap-4 text-white/60 font-medium">
                            <li><Link to="/shop" className="hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">Shop Online <ArrowUpRight size={14} /></Link></li>
                            <li><Link to="/about" className="hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">About Our Brand <ArrowUpRight size={14} /></Link></li>
                            <li><Link to="/wholesale" className="hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">Wholesale Programs <ArrowUpRight size={14} /></Link></li>
                            <li><Link to="/become-vendor" className="hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">Become a Vendor <ArrowUpRight size={14} /></Link></li>
                            <li><Link to="/contact" className="hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">Contact Support <ArrowUpRight size={14} /></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                            Contact <span className="text-primary">Us</span>
                        </h4>
                        <ul className="flex flex-col gap-6 text-white/60 font-medium">
                            <li className="flex items-start gap-4">
                                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                    <MapPin size={20} />
                                </div>
                                <span>Kariakoo, Dar es Salaam, <br />Tanzania</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                    <Phone size={20} />
                                </div>
                                <span>+255-693-069-288</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                    <Mail size={20} />
                                </div>
                                <span>info@dukanileo.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">Newsletter</h4>
                        <p className="text-white/60 mb-6 text-sm">Subscribe to get the latest arrivals and exclusive wholesale offers.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all outline-none text-white text-sm"
                            />
                            <button className="absolute right-2 top-2 bg-primary text-white p-2 rounded-xl hover:scale-105 transition-all">
                                <Send size={20} />
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-4 border border-white/10 p-4 rounded-2xl bg-white/5">
                            <div className="bg-primary rounded-full p-2">
                                <Shield size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase">100% Secure</p>
                                <p className="text-[10px] text-white/40">Guaranteed Purchases</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Dukanileo E-shop. All rights reserved. Recoded with ❤️ by Antigravity.
                    </p>
                    <div className="flex gap-8 text-white/40 text-sm">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
