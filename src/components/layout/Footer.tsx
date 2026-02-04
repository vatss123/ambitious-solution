import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks, contactInfo, socialLinks } from '../../data/navigationData';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-darker border-t border-white/5 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-display font-bold text-white tracking-tight mb-6 block">
                            Ambitious<span className="text-primary">Solution</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Empowering businesses with cutting-edge digital solutions. We turn ambitious ideas into reality through technology and design.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Icons could be added here */}
                                    {social.name[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>{contactInfo.address}</li>
                            <li>
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ambitious Solution. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
