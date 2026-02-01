import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

interface SupportButtonProps {
    currentQuestion: string;
}

export const SupportButton: React.FC<SupportButtonProps> = ({ currentQuestion }) => {
    const handleSupport = () => {
        // CUSTOMIZE THIS WITH YOUR CONTACT INFO
        const telegramUsername = 'suuudaaaaa'; // Replace with your @username (without @)
        const whatsappNumber = '380970878346'; // Replace with your number (with country code, no + or spaces)

        const message = `Админ, у меня баг в системе! 🆘

Я застряла на вопросе: "${currentQuestion}"

Помоги, пожалуйста! 🥺💕`;

        const encodedMessage = encodeURIComponent(message);

        // Try Telegram first (more popular in Ukraine/Russia)
        const telegramUrl = `https://t.me/${telegramUsername}?text=${encodedMessage}`;

        // Fallback to WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Detect if mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // On mobile, try Telegram deep link first
            window.location.href = telegramUrl;

            // Fallback to WhatsApp after 2 seconds if Telegram not installed
            setTimeout(() => {
                const openWhatsApp = confirm('Telegram не установлен. Открыть WhatsApp?');
                if (openWhatsApp) {
                    window.location.href = whatsappUrl;
                }
            }, 2000);
        } else {
            // On desktop, show options
            const useTelegram = confirm('Связаться через Telegram? (Отмена = WhatsApp)');
            if (useTelegram) {
                window.open(telegramUrl, '_blank');
            } else {
                window.open(whatsappUrl, '_blank');
            }
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSupport}
            className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500
                 text-white font-bold rounded-lg font-display uppercase tracking-wider
                 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300
                 shadow-lg hover:shadow-cyan-500/50
                 flex items-center justify-center gap-3 text-sm sm:text-base
                 min-h-[44px] border-2 border-cyan-400/50
                 relative overflow-hidden group"
        >
            {/* Animated background effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                    x: ['-100%', '200%'],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <MessageCircle className="w-5 h-5" />
            </motion.div>

            <span className="relative z-10">Связаться с Администратором</span>

            <Send className="w-4 h-4" />

            {/* Pulsing border */}
            <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            />
        </motion.button>
    );
};