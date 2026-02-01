import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MessageProps {
    text: string;
    type?: 'system' | 'error' | 'success' | 'info';
    delay?: number;
    onComplete?: () => void;
}

export const Message: React.FC<MessageProps> = ({
                                                    text,
                                                    type = 'system',
                                                    delay = 0,
                                                    onComplete
                                                }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const startTyping = () => {
            let currentIndex = 0;

            const typeNextChar = () => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.substring(0, currentIndex + 1));
                    currentIndex++;
                    timeout = setTimeout(typeNextChar, 20 + Math.random() * 30);
                } else {
                    setIsComplete(true);
                    onComplete?.();
                }
            };

            typeNextChar();
        };

        timeout = setTimeout(startTyping, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, onComplete]);

    const getTextColor = () => {
        switch (type) {
            case 'error':
                return 'text-red-400';
            case 'success':
                return 'text-emerald-400';
            case 'info':
                return 'text-cyan-400';
            default:
                return 'text-pink-400';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`font-mono text-sm sm:text-base ${getTextColor()} mb-2`}
        >
            <span className="text-emerald-400 mr-2">{'>'}</span>
            {displayedText}
            {!isComplete && <span className="terminal-cursor ml-1">▊</span>}
        </motion.div>
    );
};