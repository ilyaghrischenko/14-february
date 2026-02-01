import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MuteButtonProps {
    isMuted: boolean;
    onToggle: () => void;
}

export const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onToggle }) => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className="fixed top-4 right-4 z-50 p-3 rounded-full
                 bg-neutral-900/80 border border-pink-500/30
                 hover:border-pink-500/60 transition-all duration-300
                 backdrop-blur-sm
                 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
            style={{
                boxShadow: isMuted
                    ? '0 0 10px rgba(239, 68, 68, 0.3)'
                    : '0 0 10px rgba(236, 72, 153, 0.3)'
            }}
        >
            <motion.div
                animate={{ rotate: isMuted ? 0 : 360 }}
                transition={{ duration: 0.3 }}
            >
                {isMuted ? (
                    <VolumeX className="w-5 h-5 text-red-400" />
                ) : (
                    <Volume2 className="w-5 h-5 text-pink-400" />
                )}
            </motion.div>
        </motion.button>
    );
};