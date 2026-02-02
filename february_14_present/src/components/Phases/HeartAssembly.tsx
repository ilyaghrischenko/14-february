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
    const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 6000); // 6 секунд на всё про всё

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Фон: Пульсирующий градиент */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/50 via-black to-black"
            />

            {/* Контейнер сердца */}
            <motion.div
                className="relative z-10 flex items-center justify-center"
                initial={{ scale: 0, rotate: -15 }} // Чуть повернул для динамики при появлении
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.2,
                    type: "spring",
                    bounce: 0.5
                }}
            >
                {/* SVG: overflow-visible убирает "обрезание" теней, w-full делает его большим */}
                <svg
                    viewBox="0 0 24 24"
                    className="w-[85vw] max-w-[600px] h-auto overflow-visible"
                >
                    {/* 1. Внешнее свечение (размытый контур) */}
                    <motion.path
                        d={heartPath}
                        fill="transparent"
                        stroke="#ec4899"
                        strokeWidth="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ filter: 'blur(10px)' }} // Создает эффект неона
                    />

                    {/* 2. Основной контур (Четкая линия) */}
                    <motion.path
                        d={heartPath}
                        fill="transparent"
                        stroke="#ec4899" // Розовый неон
                        strokeWidth="0.4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{ filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.8))' }}
                    />

                    {/* 3. Заливка (Появляется плавно) */}
                    <motion.path
                        d={heartPath}
                        fill="#ec4899"
                        initial={{ opacity: 0, scale: 0.8, transformOrigin: "center" }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
                        style={{ filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.5))' }}
                    />
                </svg>

                {/* Текст внутри сердца */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        // Размер текста адаптивный: маленький на мобилке, огромный на ПК
                        className="text-white font-black text-[10vw] sm:text-7xl text-center leading-none font-mono pointer-events-none"
                        style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(236,72,153,0.8)'
                        }}
                    >
                        Я ТЕБЯ<br />ЛЮБЛЮ
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Летающие сердечки на фоне */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-500/40"
                    style={{ fontSize: Math.random() * 20 + 20 + 'px' }} // Разный размер
                    initial={{
                        y: "110vh",
                        x: `${(i * 13) % 100}vw`,
                        opacity: 0,
                        rotate: Math.random() * 360
                    }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.8, 0],
                        rotate: Math.random() * 360 + 360
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        delay: i * 0.3,
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