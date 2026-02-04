import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import ServiceCard from '../../components/cards/ServiceCard';
import CTA from '../Home/sections/CTA';

const servicesData = [
    {
        id: '1',
        title: 'Web Application Development',
        description: 'Scalable, secure, and high-performance web apps using React, Next.js, and Node.js.',
        icon: 'Code2',
    },
    {
        id: '2',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile solutions for iOS and Android.',
        icon: 'Phone',
    },
    {
        id: '3',
        title: 'UI/UX Design',
        description: 'User-centric design that ensures high engagement and retention.',
        icon: 'MousePointer2',
    },
    {
        id: '4',
        title: 'Cloud Solutions',
        description: 'AWS/Azure infrastructure setup, migration, and optimization.',
        icon: 'Rocket',
    },
    {
        id: '5',
        title: 'E-commerce Platforms',
        description: 'Custom e-commerce solutions that drive sales and revenue.',
        icon: 'Code2',
    },
    {
        id: '6',
        title: 'SEO & Digital Marketing',
        description: 'Strategies to increase visibility and drive organic traffic.',
        icon: 'Rocket',
    },
];

const Services: React.FC = () => {
    return (
        <div className="pt-20">
            <section className="py-20 bg-dark-lighter/30">
                <div className="container-custom text-center">
                    <SectionTitle
                        title="Our Services"
                        subtitle="End-to-end digital solutions for modern businesses."
                        center
                    />
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                {...service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Services;
