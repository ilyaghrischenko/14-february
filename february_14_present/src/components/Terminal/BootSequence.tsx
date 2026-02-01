import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Message } from './Message';
import { bootMessages } from '../../data/levels';

interface BootSequenceProps {
    onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const handleMessageComplete = () => {
        if (currentMessageIndex < bootMessages.length - 1) {
            setTimeout(() => {
                setCurrentMessageIndex(currentMessageIndex + 1);
            }, 300);
        } else {
            setTimeout(() => {
                onComplete();
            }, 1500);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-1"
        >
            {bootMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <Message
                    key={index}
                    text={message}
                    type={index === bootMessages.length - 1 ? 'success' : 'system'}
                    delay={0}
                    onComplete={index === currentMessageIndex ? handleMessageComplete : undefined}
                />
            ))}
        </motion.div>
    );
};