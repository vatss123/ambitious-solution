import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/common/Button';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

            <div className="container-custom relative z-10 items-center justify-center">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                            Welcome to the Future
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                            Transforming Ideas into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Digital Reality
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We help ambitious brands scale with cutting-edge web development,
                            stunning design, and strategic digital solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button size="lg" to="/contact">
                                Start Your Project
                            </Button>
                            <Button variant="outline" size="lg" to="/services">
                                Explore Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
