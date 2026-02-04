import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] border-transparent',
        secondary: 'bg-white text-brand-950 hover:bg-gray-100 border-transparent',
        outline: 'bg-transparent border-brand-500/50 text-brand-100 hover:bg-brand-500/10 hover:border-brand-500 hover:text-white',
        ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border-transparent',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
        <button
            className={cn(
                'relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {Icon && <Icon className="w-5 h-5" />}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}
        </button>
    );
};
