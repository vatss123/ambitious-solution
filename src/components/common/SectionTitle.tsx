import React from 'react';
import { cn } from '../../utils/helpers';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    center = false,
    className,
}) => {
    return (
        <div className={cn('mb-12', center ? 'text-center' : '', className)}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-400 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={cn("h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full", center ? "mx-auto" : "")}
            />
        </div>
    );
};

export default SectionTitle;
