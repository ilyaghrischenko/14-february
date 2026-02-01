import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Heart {
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
    rotation: number;
}

export const FallingHearts: React.FC = () => {
    // Generate random hearts
    const hearts = useMemo(() => {
        const heartArray: Heart[] = [];
        const heartCount = 70; // Large quantity of hearts

        for (let i = 0; i < heartCount; i++) {
            heartArray.push({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: Math.random() * 10,
                duration: 10 + Math.random() * 10, // 10-20 seconds
                size: 15 + Math.random() * 25, // 15-40px
                opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7
                rotation: Math.random() * 360,
            });
        }

        return heartArray;
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{
                        y: -100,
                        x: 0,
                        rotate: heart.rotation,
                        opacity: 0,
                    }}
                    animate={{
                        y: '110vh',
                        x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
                        rotate: [heart.rotation, heart.rotation + 360],
                        opacity: [0, heart.opacity, heart.opacity, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: 'linear',
                        x: {
                            duration: heart.duration / 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                        rotate: {
                            duration: heart.duration,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                    style={{
                        position: 'absolute',
                        left: heart.left,
                        fontSize: `${heart.size}px`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};