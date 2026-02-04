import React from 'react';
import Hero from './sections/Hero';
import ServicesPreview from './sections/ServicesPreview';
import AboutPreview from './sections/AboutPreview';
import CTA from './sections/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <CTA />
        </>
    );
};

export default Home;
