import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Code2, Rocket, Phone } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    index: number;
}

const icons: { [key: string]: React.ElementType } = {
    MousePointer2,
    Code2,
    Rocket,
    Phone
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
    const Icon = icons[icon] || Rocket;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
