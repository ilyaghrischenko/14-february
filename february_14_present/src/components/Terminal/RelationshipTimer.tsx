import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';

export const RelationshipTimer: React.FC = () => {
    const START_DATE = new Date('2021-05-17T18:00:00'); // Format: YYYY-MM-DD

    const [timeUnits, setTimeUnits] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeDifference = () => {
            const now = new Date();
            const diffMs = now.getTime() - START_DATE.getTime();

            // Calculate each unit
            const seconds = Math.floor(diffMs / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            setTimeUnits({
                days: days,
                hours: hours % 24,
                minutes: minutes % 60,
                seconds: seconds % 60,
            });
        };

        // Calculate immediately
        calculateTimeDifference();

        // Update every second
        const interval = setInterval(calculateTimeDifference, 1000);

        return () => clearInterval(interval);
    }, []);

    // Pluralization helper
    const pluralize = (value: number, singular: string, plural: string) => {
        return value === 1 ? singular : plural;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="w-full border-t border-pink-500/20 bg-neutral-950/80 backdrop-blur-sm"
        >
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <motion.p
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-emerald-500/70 font-mono text-xs sm:text-sm uppercase tracking-wider"
                    >
                        Время_Безотказной_Работы_Системы // Длительность_Любовного_Протокола
                    </motion.p>
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                </div>

                {/* Timer Display - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {/* Days */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.7, type: 'spring', stiffness: 200 }}
                        className="bg-neutral-900/50 border border-pink-500/20 rounded-lg p-3 text-center"
                    >
                        <motion.div
                            key={timeUnits.days}
                            initial={{ scale: 1.2, color: '#ec4899' }}
                            animate={{ scale: 1, color: '#fb7185' }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl sm:text-4xl font-black font-mono text-pink-400 tabular-nums"
                            style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
                        >
                            {timeUnits.days}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-emerald-500/70 font-mono mt-1">
                            {pluralize(timeUnits.days, 'день', 'дней')}
                        </div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                        className="bg-neutral-900/50 border border-pink-500/20 rounded-lg p-3 text-center"
                    >
                        <motion.div
                            key={timeUnits.hours}
                            initial={{ scale: 1.2, color: '#ec4899' }}
                            animate={{ scale: 1, color: '#fb7185' }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl sm:text-4xl font-black font-mono text-pink-400 tabular-nums"
                            style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
                        >
                            {String(timeUnits.hours).padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-emerald-500/70 font-mono mt-1">
                            {pluralize(timeUnits.hours, 'час', 'часов')}
                        </div>
                    </motion.div>

                    {/* Minutes */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.9, type: 'spring', stiffness: 200 }}
                        className="bg-neutral-900/50 border border-pink-500/20 rounded-lg p-3 text-center"
                    >
                        <motion.div
                            key={timeUnits.minutes}
                            initial={{ scale: 1.2, color: '#ec4899' }}
                            animate={{ scale: 1, color: '#fb7185' }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl sm:text-4xl font-black font-mono text-pink-400 tabular-nums"
                            style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
                        >
                            {String(timeUnits.minutes).padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-emerald-500/70 font-mono mt-1">
                            {pluralize(timeUnits.minutes, 'минута', 'минут')}
                        </div>
                    </motion.div>

                    {/* Seconds */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.0, type: 'spring', stiffness: 200 }}
                        className="bg-neutral-900/50 border border-pink-500/20 rounded-lg p-3 text-center"
                    >
                        <motion.div
                            key={timeUnits.seconds}
                            initial={{ scale: 1.2, color: '#ec4899' }}
                            animate={{ scale: 1, color: '#fb7185' }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl sm:text-4xl font-black font-mono text-pink-400 tabular-nums"
                            style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
                        >
                            {String(timeUnits.seconds).padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-emerald-500/70 font-mono mt-1">
                            {pluralize(timeUnits.seconds, 'секунда', 'секунд')}
                        </div>
                    </motion.div>
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-center mt-4"
                >
                    <p className="text-pink-400/80 font-mono text-xs sm:text-sm">
                        <span className="text-emerald-500/70">СТАТУС:</span> ❤️ УСПЕШНО РАБОТАЕТ ❤️
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};