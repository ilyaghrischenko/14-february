import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock, Unlock } from 'lucide-react';

interface LoveLetterProps {
    onProceed: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ onProceed }) => {
    // CUSTOMIZE THIS TEXT WITH YOUR ACTUAL LOVE LETTER
    const letterText = `Моя дорогая,

Ты прошла все уровни защиты моего сердца. Каждый вопрос, на который ты ответила, — это частичка нашей истории, нашей любви.

Я создал этот квест не просто так. Я хотел напомнить тебе обо всех моментах, которые мы пережили вместе. О наших первых встречах, о том, как мы смеялись до слёз, о тихих вечерах, проведённых вдвоём.

Ты — самое важное, что есть в моей жизни. Каждый день с тобой — это подарок. Твоя улыбка освещает мой мир, твой смех заставляет моё сердце биться быстрее.

Спасибо за то, что ты есть. Спасибо за твою любовь, терпение и понимание. Ты делаешь меня лучше.

Это только начало нашего приключения. Впереди нас ждёт ещё многое...

С бесконечной любовью,
Твой хакер сердец 💕`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
        >
            {/* Header with decrypt animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                    <Lock className="w-8 h-8 text-pink-500" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400"
                >
                    ФАЙЛ РАСШИФРОВАН
                </motion.div>

                <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                >
                    <Unlock className="w-8 h-8 text-emerald-400" />
                </motion.div>
            </motion.div>

            {/* Letter content with softer glass effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="relative overflow-hidden rounded-lg border border-pink-500/20
                   bg-gradient-to-br from-neutral-900/95 to-neutral-950/95
                   backdrop-blur-xl shadow-2xl"
                style={{
                    boxShadow: `
            0 0 30px rgba(236, 72, 153, 0.2),
            inset 0 0 80px rgba(236, 72, 153, 0.03)
          `,
                }}
            >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500/40" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pink-500/40" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-pink-500/40" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-500/40" />

                {/* Letter header */}
                <div className="border-b border-pink-500/20 p-4 sm:p-6 bg-gradient-to-r from-pink-500/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
                        <div>
                            <p className="text-pink-400 font-display font-bold text-lg">
                                СЕКРЕТНОЕ СООБЩЕНИЕ
                            </p>
                            <p className="text-emerald-400/70 font-mono text-xs">
                                Классификация: ТОП СЕКРЕТ 💕
                            </p>
                        </div>
                    </div>
                </div>

                {/* Letter body - scrollable */}
                <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 1 }}
                        className="space-y-4"
                    >
                        {letterText.split('\n\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.3 + index * 0.2 }}
                                className="text-pink-300/90 leading-relaxed text-base sm:text-lg font-mono"
                                style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.3)' }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>

                {/* Floating hearts decoration */}
                <div className="absolute top-10 right-10 opacity-10">
                    <Heart className="w-32 h-32 text-pink-500 fill-pink-500" />
                </div>
                <div className="absolute bottom-10 left-10 opacity-10">
                    <Heart className="w-24 h-24 text-pink-500 fill-pink-500" />
                </div>
            </motion.div>

            {/* Proceed button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex justify-center pt-4"
            >
                <motion.button
                    onClick={onProceed}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
                     text-white font-display font-bold text-lg rounded-lg
                     shadow-lg hover:shadow-pink-500/50 transition-all duration-300
                     uppercase tracking-wider
                     flex items-center gap-3
                     min-h-[50px] relative overflow-hidden group"
                >
                    {/* Animated background shine */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                            x: ['-200%', '200%'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    <span className="relative z-10">Продолжить</span>
                    <Heart className="w-5 h-5 relative z-10 group-hover:fill-white transition-all" />
                </motion.button>
            </motion.div>

            {/* Ambient glow effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent pointer-events-none"
            />
        </motion.div>
    );
};