import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';
import ServiceCard from '../../../components/cards/ServiceCard';
import Button from '../../../components/common/Button';
import { serviceCategories } from '../../../data/servicesData';

// Get the first 3 services from the first category to feature on the homepage
const services = serviceCategories[0].services.slice(0, 3);

const ServicesPreview: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0f18]">
            {/* Attractive Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Generated Background Image with blending overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
                    style={{ backgroundImage: `url('/images/services-bg.png')` }}
                />
                {/* Dark gradient to ensure cards readability against the background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/80 to-[#0a0f18]/90" />

                {/* Subtle Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />

                {/* Glowing Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 mix-blend-screen" />
            </div>

            <div className="container-custom relative z-10">
                <SectionTitle
                    title="Our Services"
                    subtitle="Comprehensive solutions tailored to your unique business challenges."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="secondary" to="/services">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
