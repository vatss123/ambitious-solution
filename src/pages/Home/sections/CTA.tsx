import React from 'react';
import Button from '../../../components/common/Button';

const CTA: React.FC = () => {
    return (
        <section className="py-24">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-primary-dark/50 to-secondary-dark/50 rounded-3xl p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 p-32 bg-secondary/20 blur-[100px] rounded-full" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Let's build something extraordinary together. Reach out today for a free consultation.
                        </p>
                        <Button size="lg" to="/contact">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
