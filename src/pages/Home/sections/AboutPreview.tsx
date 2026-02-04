import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';

const AboutPreview: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle
                            title="Who We Are"
                            subtitle="Driven by innovation, unified by passion."
                        />
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Ambitious Solution is more than just a dev shop. We are a collective of thinkers, makers, and dreamers dedicated to pushing the boundaries of what's possible on the web.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We believe in the power of clean code and compelling design to transform businesses. Our mission is to provide you with the tools you need to succeed in a digital-first world.
                        </p>
                        <Button variant="outline" to="/about">
                            More About Us
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            <span className="text-gray-500">Image PlaceHolder</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
