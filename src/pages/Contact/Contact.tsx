import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import SectionTitle from '../../components/common/SectionTitle';
import { contactInfo } from '../../data/navigationData';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="pt-20">
            <section className="py-20 bg-dark-lighter/30">
                <div className="container-custom text-center">
                    <SectionTitle title="Contact Us" subtitle="Let's discuss your next ambitious project." center />
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                            <p className="text-gray-400 mb-10 leading-relaxed">
                                Whether you have a question about our services, pricing, or just want to say hello, we are ready to answer all your questions.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Office</h4>
                                    <p className="text-gray-400">{contactInfo.address}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                                    <p className="text-gray-400">{contactInfo.email}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                                    <p className="text-gray-400">{contactInfo.phone}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="First Name" placeholder="John" required />
                                    <Input label="Last Name" placeholder="Doe" required />
                                </div>
                                <Input label="Email" type="email" placeholder="john@example.com" required />
                                <Input label="Subject" placeholder="Project Inquiry" required />
                                <Input label="Message" multiline placeholder="Tell us about your project..." required />

                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
