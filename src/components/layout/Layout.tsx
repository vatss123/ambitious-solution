import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    useScrollToTop();

    return (
        <div className="min-h-screen flex flex-col bg-dark overflow-hidden">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
