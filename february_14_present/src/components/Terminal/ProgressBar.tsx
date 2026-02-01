import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProgressBarProps {
    currentLevel: number;
    totalLevels: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentLevel, totalLevels }) => {
    const progress = (currentLevel / totalLevels) * 100;

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
        <span className="text-pink-400 font-mono">
          Уровень {currentLevel} / {totalLevels}
        </span>
                <span className="text-emerald-400 font-mono">
          {Math.round(progress)}%
        </span>
            </div>

            <div className="relative h-3 bg-neutral-900 rounded-full overflow-hidden border border-pink-500/30">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 relative"
                >
                    {/* Animated shine effect */}
                    <motion.div
                        animate={{
                            x: ['-100%', '200%'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>

                {/* Heart markers for each level */}
                <div className="absolute inset-0 flex items-center justify-between px-1">
                    {[...Array(totalLevels)].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: index < currentLevel ? 1 : 0.7 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Heart
                                className={`w-3 h-3 ${
                                    index < currentLevel
                                        ? 'text-white fill-white'
                                        : 'text-pink-500/30'
                                }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};