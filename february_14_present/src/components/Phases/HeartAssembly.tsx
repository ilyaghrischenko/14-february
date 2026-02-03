import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FallingHearts } from '../Background/FallingHearts';

interface HeartAssemblyProps {
    onComplete: () => void;
    playHeartbeat?: () => void;
}

export const HeartAssembly: React.FC<HeartAssemblyProps> = ({ onComplete, playHeartbeat }) => {
    const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

    useEffect(() => {
        // Play romantic heartbeat sound on mount
        if (playHeartbeat) {
            playHeartbeat();
        }

        // Auto-transition after animation completes + pause
        const timer = setTimeout(() => {
            onComplete();
        }, 6000);

        return () => clearTimeout(timer);
    }, [onComplete, playHeartbeat]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Falling Hearts Background - matches rest of app */}
            <div className="absolute inset-0 z-0">
                <FallingHearts />
            </div>

            {/* Main Heart Animation */}
            <motion.div
                className="relative z-10 flex items-center justify-center"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-[85vw] max-w-[600px] h-auto overflow-visible"
                >
                    {/* Outer glow path */}
                    <motion.path
                        d={heartPath}
                        fill="transparent"
                        stroke="#ec4899"
                        strokeWidth="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5 }}
                        style={{ filter: 'blur(10px)' }}
                    />

                    {/* Main outline path */}
                    <motion.path
                        d={heartPath}
                        fill="transparent"
                        stroke="#ec4899"
                        strokeWidth="0.4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                        style={{ filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.8))' }}
                    />

                    {/* Filled heart */}
                    <motion.path
                        d={heartPath}
                        fill="#ec4899"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        style={{
                            transformOrigin: "center",
                            filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.5))'
                        }}
                    />
                </svg>

                {/* Text overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white font-black text-[10vw] sm:text-7xl text-center leading-none font-mono pointer-events-none"
                        style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(236,72,153,0.8)' }}
                    >
                        Я ТЕБЯ<br />ЛЮБЛЮ
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};