// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
//
// interface HeartAssemblyProps {
//     onComplete: () => void;
// }
//
// export const HeartAssembly: React.FC<HeartAssemblyProps> = ({ onComplete }) => {
//     useEffect(() => {
//         // Auto-transition after animation completes + pause
//         const timer = setTimeout(() => {
//             onComplete();
//         }, 5500); // 3s animation + 2.5s pause
//
//         return () => clearTimeout(timer);
//     }, [onComplete]);
//
//     // SVG heart path for drawing animation
//     const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
//
//     return (
//         <div className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
//             {/* Radial gradient background pulse */}
//             <motion.div
//                 animate={{
//                     opacity: [0.3, 0.6, 0.3],
//                     scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                 }}
//                 className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-rose-500/10 to-transparent"
//             />
//
//             {/* Main heart container */}
//             <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{
//                     duration: 1.5,
//                     ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
//                 }}
//                 className="relative z-10"
//             >
//                 {/* SVG Heart with path drawing animation */}
//                 <svg
//                     width="300"
//                     height="300"
//                     viewBox="0 0 24 24"
//                     className="drop-shadow-2xl"
//                 >
//                     {/* Outer glow */}
//                     <motion.path
//                         d={heartPath}
//                         fill="none"
//                         stroke="rgba(236, 72, 153, 0.5)"
//                         strokeWidth="0.5"
//                         initial={{ pathLength: 0, opacity: 0 }}
//                         animate={{
//                             pathLength: 1,
//                             opacity: [0, 1, 1, 0],
//                             scale: [1, 1.2, 1.2, 1.3],
//                         }}
//                         transition={{
//                             pathLength: { duration: 2, ease: 'easeInOut' },
//                             opacity: { duration: 2, times: [0, 0.5, 0.9, 1] },
//                             scale: { duration: 2, ease: 'easeOut' },
//                         }}
//                         style={{
//                             filter: 'blur(8px)',
//                             transformOrigin: 'center',
//                         }}
//                     />
//
//                     {/* Main heart path drawing */}
//                     <motion.path
//                         d={heartPath}
//                         fill="none"
//                         stroke="#ec4899"
//                         strokeWidth="0.3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{
//                             duration: 2,
//                             ease: 'easeInOut',
//                         }}
//                         style={{
//                             filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))',
//                         }}
//                     />
//
//                     {/* Heart fill with delay */}
//                     <motion.path
//                         d={heartPath}
//                         fill="#ec4899"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{
//                             delay: 2,
//                             duration: 0.5,
//                             ease: 'easeOut',
//                         }}
//                         style={{
//                             transformOrigin: 'center',
//                             filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))',
//                         }}
//                     />
//                 </svg>
//
//                 {/* Text inside heart */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{
//                         delay: 2.5,
//                         duration: 0.8,
//                         ease: 'easeOut',
//                     }}
//                     className="absolute inset-0 flex items-center justify-center"
//                 >
//                     <motion.p
//                         animate={{
//                             scale: [1, 1.05, 1],
//                         }}
//                         transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                         }}
//                         className="text-white font-display font-black text-3xl sm:text-4xl md:text-5xl text-center leading-tight"
//                         style={{
//                             textShadow: `
//                 0 0 10px rgba(255, 255, 255, 0.8),
//                 0 0 20px rgba(255, 255, 255, 0.5),
//                 0 0 30px rgba(236, 72, 153, 0.5)
//               `,
//                         }}
//                     >
//                         Я ТЕБЯ<br />ЛЮБЛЮ
//                     </motion.p>
//                 </motion.div>
//             </motion.div>
//
//             {/* Particle hearts floating around */}
//             {[...Array(12)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     initial={{
//                         x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//                         y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
//                         opacity: 0,
//                     }}
//                     animate={{
//                         y: -100,
//                         opacity: [0, 1, 1, 0],
//                     }}
//                     transition={{
//                         duration: 4 + Math.random() * 2,
//                         delay: Math.random() * 2,
//                         repeat: Infinity,
//                         ease: 'linear',
//                     }}
//                     className="absolute text-4xl"
//                     style={{
//                         left: `${Math.random() * 100}%`,
//                     }}
//                 >
//                     💕
//                 </motion.div>
//             ))}
//
//             {/* Sparkles */}
//             {[...Array(20)].map((_, i) => {
//                 const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
//                 const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 500;
//
//                 return (
//                     <motion.div
//                         key={`sparkle-${i}`}
//                         initial={{
//                             opacity: 0,
//                             scale: 0,
//                             x: centerX,
//                             y: centerY,
//                         }}
//                         animate={{
//                             opacity: [0, 1, 0],
//                             scale: [0, 1, 0],
//                             x: centerX + (Math.random() - 0.5) * 400,
//                             y: centerY + (Math.random() - 0.5) * 400,
//                         }}
//                         transition={{
//                             duration: 1.5,
//                             delay: 2.5 + Math.random() * 0.5,
//                             ease: 'easeOut',
//                         }}
//                         className="absolute w-2 h-2 bg-yellow-300 rounded-full"
//                         style={{
//                             boxShadow: '0 0 10px rgba(253, 224, 71, 0.8)',
//                         }}
//                     />
//                 );
//             })}
//
//             {/* Pulsing rings */}
//             {[...Array(3)].map((_, i) => (
//                 <motion.div
//                     key={`ring-${i}`}
//                     className="absolute rounded-full border-2 border-pink-500/30"
//                     style={{
//                         width: '300px',
//                         height: '300px',
//                         left: '50%',
//                         top: '50%',
//                         marginLeft: '-150px',
//                         marginTop: '-150px',
//                     }}
//                     initial={{ scale: 1, opacity: 0.6 }}
//                     animate={{
//                         scale: [1, 2, 2.5],
//                         opacity: [0.6, 0.3, 0],
//                     }}
//                     transition={{
//                         duration: 2,
//                         delay: 2 + i * 0.3,
//                         repeat: 1,
//                         ease: 'easeOut',
//                     }}
//                 />
//             ))}
//
//             {/* Fade out overlay for transition */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0 }}
//                 exit={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 bg-neutral-950 z-50 pointer-events-none"
//             />
//         </div>
//     );
// };

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeartAssemblyProps {
    onComplete: () => void;
}

export const HeartAssembly: React.FC<HeartAssemblyProps> = ({ onComplete }) => {
    // SVG путь для сердца
    const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

    useEffect(() => {
        // Таймер перехода к финальной стадии (5.5 секунд анимации + пауза)
        const timer = setTimeout(() => {
            onComplete();
        }, 5500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        // ИСПРАВЛЕНИЕ 1: fixed inset-0 z-50
        // Это гарантирует, что анимация перекроет весь интерфейс "терминала"
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Фоновый радиальный градиент */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/40 via-black to-black"
            />

            {/* Контейнер сердца */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.34, 1.56, 0.64, 1], // Пружинистый эффект
                }}
            >
                <svg width="300" height="300" viewBox="0 0 24 24" className="drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                    {/* Контур сердца (рисуется линией) */}
                    <motion.path
                        d={heartPath}
                        fill="transparent"
                        stroke="#ec4899"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Заливка (появляется с задержкой) */}
                    <motion.path
                        d={heartPath}
                        fill="#ec4899"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
                    />
                </svg>

                {/* Текст "I LOVE YOU" */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white font-black text-4xl text-center leading-none drop-shadow-lg font-mono"
                        style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                    >
                        Я ТЕБЯ<br />ЛЮБЛЮ
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Частицы (Сердечки на фоне) */}
            {/* ИСПРАВЛЕНИЕ 2: Используем CSS для позиций вместо window.innerWidth */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-500/40 text-2xl"
                    initial={{
                        y: "110vh",
                        x: `${(i * 10) % 100}vw`, // Равномерное распределение по ширине
                        opacity: 0,
                        scale: 0.5 + Math.random() * 0.5
                    }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4 + (i % 5), // Случайная скорость
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    ❤
                </motion.div>
            ))}
        </motion.div>
    );
};