import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';

const About: React.FC = () => {
    return (
        <div className="pt-20">
            <section className="py-20 bg-dark-lighter/30">
                <div className="container-custom text-center">
                    <SectionTitle title="About Us" subtitle="Building the digital future, one pixel at a time." center />
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h3>
                            <p className="text-gray-400 leading-loose mb-6">
                                At Ambitious Solution, we strive to empower businesses with technology that is not just functional, but transformative. We believe that great software is born at the intersection of robust engineering and beautiful design.
                            </p>
                            <p className="text-gray-400 leading-loose">
                                Our team consists of industry veterans who are passionate about solving complex problems. We don't just build websites; we build digital experiences that leave a lasting impact.
                            </p>
                        </motion.div>
                        <div className="relative h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-white/10">
                            <span className="text-gray-500 font-medium">Team Image / Office Shot</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-dark-lighter/30">
                <div className="container-custom text-center">
                    <h3 className="text-3xl font-display font-bold text-white mb-12">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "Always pushing boundaries." },
                            { title: "Quality", desc: "Excellence in every line of code." },
                            { title: "Integrity", desc: "Honest, transparent partnerships." },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                            >
                                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                                <p className="text-gray-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
