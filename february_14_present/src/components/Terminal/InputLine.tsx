import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';

interface InputLineProps {
    onSubmit: (value: string) => void;
    placeholder?: string;
    shouldShake: boolean;
    onShakeComplete: () => void;
    disabled?: boolean;
    showLockIcon?: boolean;
    onKeyPress?: () => void;
}

export const InputLine: React.FC<InputLineProps> = ({
                                                        onSubmit,
                                                        placeholder = 'Введите ответ...',
                                                        shouldShake,
                                                        onShakeComplete,
                                                        disabled = false,
                                                        showLockIcon = true,
                                                        onKeyPress,
                                                    }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Auto-focus input on mount
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim() && !disabled) {
            onSubmit(value);
            setValue('');
        }
    };

    const shakeVariants = {
        shake: {
            x: [0, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        stable: {
            x: 0,
        },
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            animate={shouldShake ? 'shake' : 'stable'}
            variants={shakeVariants}
            onAnimationComplete={() => {
                if (shouldShake) {
                    onShakeComplete();
                }
            }}
            className="w-full"
        >
            <div className="relative flex items-center gap-3">
                {showLockIcon && (
                    <motion.div
                        animate={{
                            rotate: shouldShake ? [0, -10, 10, -10, 10, 0] : 0,
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <Lock className="w-5 h-5 text-pink-500" />
                    </motion.div>
                )}

                <div className="flex-1 relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onKeyPress?.();
                        }}
                        disabled={disabled}
                        placeholder={placeholder}
                        className="w-full bg-neutral-950/50 border border-pink-500/30 rounded px-4 py-3
                       text-pink-400 placeholder-pink-400/30 font-mono text-base
                       input-glow transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed
                       focus:border-pink-500"
                        style={{ fontSize: '16px' }} // Prevent iOS zoom
                    />

                    {/* Animated border glow */}
                    <motion.div
                        className="absolute inset-0 rounded pointer-events-none"
                        animate={{
                            boxShadow: shouldShake
                                ? [
                                    '0 0 0px rgba(239, 68, 68, 0)',
                                    '0 0 20px rgba(239, 68, 68, 0.6)',
                                    '0 0 0px rgba(239, 68, 68, 0)',
                                ]
                                : '0 0 0px rgba(239, 68, 68, 0)',
                        }}
                        transition={{ duration: 0.4 }}
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={disabled || !value.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500
                     text-white font-bold rounded font-display uppercase tracking-wider
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:from-pink-600 hover:to-rose-600 transition-all duration-300
                     shadow-lg hover:shadow-pink-500/50
                     flex items-center gap-2 text-sm sm:text-base
                     min-h-[44px]" // iOS touch target
                >
                    <Heart className="w-4 h-4" />
                    <span className="hidden sm:inline">Войти</span>
                    <span className="sm:hidden">OK</span>
                </motion.button>
            </div>
        </motion.form>
    );
};