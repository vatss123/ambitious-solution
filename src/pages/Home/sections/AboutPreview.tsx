import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/common/Button';

const AboutPreview: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black min-h-[600px] flex items-center">
            {/* Background Image Setup (Flipped horizontally so laptop is on right) */}
            <div className="absolute inset-y-0 right-0 w-full md:w-4/5 lg:w-2/3 z-0">
                {/* 
                  The container is placed on the right side of the screen.
                  We use an inner div to apply the horizontal flip.
                */}
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat -scale-x-100"
                    style={{
                        backgroundImage: `url('/images/who-we-are-bg.png')`,
                        backgroundPosition: 'left center',
                    }}
                />
                {/* Gradient to fade the left edge of the image into the dark background */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            </div>

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />

            <div className="container-custom relative z-10 w-full">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Who We Are
                        </h2>
                        <div className="mb-6 inline-block">
                            <p className="text-gray-300 text-lg mb-2 inline-block">
                                Driven by innovation, unified by passion.
                            </p>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
                        </div>

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
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
