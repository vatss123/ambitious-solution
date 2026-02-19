import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../../components/cards/ServiceCard';
import CTA from '../Home/sections/CTA';
import { serviceCategories } from '../../data/servicesData';

const Services: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero / Main Title Section */}
            <section className="py-20 bg-dark-lighter/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            End-to-end digital solutions tailored to elevate your business.
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Service Categories */}
            <div className="space-y-24 py-16">
                {serviceCategories.map((category) => (
                    <section key={category.id} className="container-custom">
                        <div className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-display font-bold text-white mb-4 flex items-center gap-4"
                            >
                                <span className="w-2 h-8 bg-primary rounded-full block" />
                                {category.title}
                            </motion.h2>
                            {category.description && (
                                <p className="text-gray-400 text-lg ml-6">{category.description}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.services.map((service, index) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    index={index}
                                    slug={service.slug}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <CTA />
        </div>
    );
};

export default Services;
