import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { finalRewardText } from '../../data/levels';

export const FinalReward: React.FC = () => {
    // REPLACE THESE WITH YOUR ACTUAL PHOTO PATHS
    const photos = [
        '/photos/photo1.jpg', // REPLACE
        '/photos/photo2.jpg', // REPLACE
        '/photos/photo3.jpg', // REPLACE
        '/photos/photo4.jpg', // REPLACE
        '/photos/photo5.jpg', // REPLACE
        '/photos/photo6.jpg', // REPLACE
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
        >
            {/* Success Header */}
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-center space-y-4"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                    }}
                    className="inline-block"
                >
                    <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto" />
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 neon-text">
                    ДОСТУП РАЗРЕШЁН
                </h1>

                <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <p className="text-emerald-400 font-mono text-lg">
                        СИСТЕМА ВЗЛОМАНА ЛЮБОВЬЮ
                    </p>
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>
            </motion.div>

            {/* Message Box */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-panel p-6 sm:p-8"
            >
        <pre className="text-pink-400 font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
          {finalRewardText}
        </pre>
            </motion.div>

            {/* Photo Grid - Polaroid Style */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
            >
                <h2 className="text-2xl font-display font-bold text-center text-pink-400 neon-text">
                    Наши воспоминания 💕
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                rotate: Math.random() * 10 - 5,
                                scale: 1
                            }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 10,
                            }}
                            className="relative group cursor-pointer"
                        >
                            <div className="bg-white p-2 sm:p-3 shadow-2xl rounded-sm">
                                {/* Photo placeholder - REPLACE WITH ACTUAL IMAGES */}
                                <div className="aspect-square bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-sm overflow-hidden">
                                    <img
                                        src={photo}
                                        alt={`Память ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback if image doesn't exist
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="flex items-center justify-center h-full text-pink-400">
                            <Heart class="w-12 h-12" />
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                </div>

                                {/* Polaroid caption */}
                                <p className="text-center text-xs sm:text-sm text-neutral-800 font-mono mt-2">
                                    {/* CUSTOMIZE THESE CAPTIONS */}
                                    {index === 0 && 'Первое свидание'}
                                    {index === 1 && 'Наш первый поцелуй'}
                                    {index === 2 && 'Вместе навсегда'}
                                    {index === 3 && 'Самый счастливый день'}
                                    {index === 4 && 'Ты и я'}
                                    {index === 5 && 'Наша любовь'}
                                </p>
                            </div>

                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-sm pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Decorative hearts */}
            <div className="flex justify-center gap-4 text-4xl">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    >
                        💕
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};