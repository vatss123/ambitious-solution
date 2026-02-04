import React from 'react';
import { cn } from '../../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    multiline = false,
    className,
    id,
    ...props
}) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const baseStyles = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm";

    return (
        <div className={cn('mb-4', className)}>
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}
            {multiline ? (
                <textarea
                    id={inputId}
                    className={cn(baseStyles, "min-h-[120px] resize-y")}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={inputId}
                    className={baseStyles}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
