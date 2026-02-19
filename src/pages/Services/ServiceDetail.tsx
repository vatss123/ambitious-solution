import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MousePointer2, Code2, Rocket, Phone, Smartphone, Palette, ShoppingCart, Cloud, Cpu, Layers, Search, Share2, Megaphone } from 'lucide-react';
import { serviceCategories } from '../../data/servicesData';
import Button from '../../components/common/Button';
import CTA from '../Home/sections/CTA';

const icons: { [key: string]: React.ElementType } = {
    MousePointer2,
    Code2,
    Rocket,
    Phone,
    Smartphone,
    Palette,
    ShoppingCart,
    Cloud,
    Cpu,
    Layers,
    Search,
    Share2,
    Megaphone
};

const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // Find the service based on the slug
    const service = serviceCategories
        .flatMap(category => category.services)
        .find(s => s.slug === slug);

    useEffect(() => {
        if (!service) {
            // Optional: redirect to services page if not found, or show 404
            // navigate('/services');
        }
        window.scrollTo(0, 0);
    }, [service, navigate]);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center container-custom">
                <h2 className="text-3xl text-white mb-4">Service Not Found</h2>
                <Button to="/services" variant="primary">Back to Services</Button>
            </div>
        );
    }

    const Icon = icons[service.icon] || Rocket;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-dark-lighter/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
                <div className="container-custom relative z-10">
                    <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0"
                        >
                            <Icon size={40} />
                        </motion.div>

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold font-display text-white mb-6"
                            >
                                {service.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-gray-400 max-w-3xl leading-relaxed"
                            >
                                {service.longDescription}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Features</h2>
                            <ul className="space-y-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mt-1 mr-4 flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary" />
                                        </div>
                                        <span className="text-lg text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/5 rounded-2xl p-8 border border-white/10"
                        >
                            <h2 className="text-3xl font-bold text-white mb-8">Benefits</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Ready to start?</h3>
                                <Button to="/contact" variant="primary" className="w-full justify-center">
                                    Get a Quote
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default ServiceDetail;
