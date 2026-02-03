import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface HintButtonProps {
    onClick: () => void;
    disabled?: boolean;
    playClick?: () => void;
}

export const HintButton: React.FC<HintButtonProps> = ({ onClick, disabled = false, playClick }) => {
    const handleClick = () => {
        playClick?.();
        onClick();
    };

    return (
        <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            disabled={disabled}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500
                 text-neutral-900 font-bold rounded font-display uppercase tracking-wider
                 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300
                 shadow-lg hover:shadow-amber-500/50
                 flex items-center gap-2 text-sm
                 min-h-[44px]" // iOS touch target
        >
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
        </motion.button>
    );
};