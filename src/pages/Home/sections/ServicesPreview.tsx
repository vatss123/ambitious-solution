import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';
import ServiceCard from '../../../components/cards/ServiceCard';
import Button from '../../../components/common/Button';

// Mock data - normally comes from Redux/API
const services = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Custom React & TypeScript applications built for performance and scale.',
        icon: 'Code2',
    },
    {
        id: '2',
        title: 'UI/UX Design',
        description: 'Intuitive and engaging user interfaces that drive conversions.',
        icon: 'MousePointer2',
    },
    {
        id: '3',
        title: 'Digital Strategy',
        description: 'Data-driven insights to position your brand for market leadership.',
        icon: 'Rocket',
    },
];

const ServicesPreview: React.FC = () => {
    return (
        <section className="py-24 bg-dark-lighter/30 relative">
            <div className="container-custom">
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
