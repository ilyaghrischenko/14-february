import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './components/Layout/Container';
import { Message } from './components/Terminal/Message';
import { InputLine } from './components/Terminal/InputLine';
import { BootSequence } from './components/Terminal/BootSequence';
import { HintButton } from './components/Terminal/HintButton';
import { FinalReward } from './components/Terminal/FinalReward';
import { ProgressBar } from './components/Terminal/ProgressBar';
import { FallingHearts } from './components/Background/FallingHearts';
import { MuteButton } from './components/UI/MuteButton';
import { SupportButton } from './components/UI/SupportButton';
import { LoveLetter } from './components/Phases/LoveLetter';
import { HeartAssembly } from './components/Phases/HeartAssembly';
import { useSoundManager } from './hooks/useSoundManager';
import { levels } from './data/levels';
import { GamePhase } from './types';
import { Shield, AlertTriangle } from 'lucide-react';

function App() {
    const [gamePhase, setGamePhase] = useState<GamePhase>('boot');
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [attemptCount, setAttemptCount] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [shouldShake, setShouldShake] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessages, setSuccessMessages] = useState<string[]>([]);
    const [isMuted, setIsMuted] = useState(true); // Start muted due to browser autoplay policies
    const [audioInitialized, setAudioInitialized] = useState(false);

    const currentLevel = levels[currentLevelIndex];

    // Sound manager
    const { initializeAudio, playKeyPress, playSuccess, playError, playBoot, playClick, playHeartbeat } = useSoundManager({ isMuted });

    // Initialize audio on first user interaction
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!audioInitialized) {
                initializeAudio();
                setAudioInitialized(true);
                setIsMuted(false); // Unmute on first interaction
            }
        };

        document.addEventListener('click', handleFirstInteraction, { once: true });
        document.addEventListener('keydown', handleFirstInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        };
    }, [audioInitialized, initializeAudio]);

    const handleBootComplete = () => {
        playBoot();
        setGamePhase('playing');
    };

    const normalizeAnswer = (answer: string): string => {
        return answer.trim().toLowerCase();
    };

    const handleSubmit = (userAnswer: string) => {
        const normalizedUserAnswer = normalizeAnswer(userAnswer);
        const normalizedCorrectAnswer = normalizeAnswer(currentLevel.answer);

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            // Correct answer!
            playSuccess();
            setSuccessMessages([
                ...successMessages,
                `✓ Уровень ${currentLevelIndex + 1} пройден! Протокол подтверждён.`,
            ]);
            setErrorMessage('');
            setAttemptCount(0);
            setShowHint(false);

            // Move to next level or transition to letter phase
            setTimeout(() => {
                if (currentLevelIndex < levels.length - 1) {
                    setCurrentLevelIndex(currentLevelIndex + 1);
                } else {
                    // All levels complete - go to love letter
                    setGamePhase('letter');
                }
            }, 1500);
        } else {
            // Wrong answer
            playError();
            const newAttemptCount = attemptCount + 1;
            setAttemptCount(newAttemptCount);
            setErrorMessage(currentLevel.errorMessage);
            setShouldShake(true);

            // Show hint button after 2 failed attempts
            if (newAttemptCount >= 2) {
                setShowHint(true);
            }
        }
    };

    const handleShowHint = () => {
        setErrorMessage(`💡 Подсказка: ${currentLevel.hint}`);
    };

    const handleLetterProceed = () => {
        setGamePhase('heart');
    };

    const handleHeartComplete = () => {
        setGamePhase('complete');
    };

    return (
        <div className="crt-screen min-h-[100dvh]">
            <FallingHearts />
            <MuteButton isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} playClick={playClick} />
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel p-6 sm:p-8 md:p-10 space-y-6"
                >
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b border-pink-500/30 pb-4 space-y-2"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 neon-text">
                                    LOVE PROTOCOL
                                </h1>
                            </div>

                            {gamePhase === 'playing' && (
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="text-emerald-400 font-mono text-xs sm:text-sm"
                                >
                                    ● ONLINE
                                </motion.div>
                            )}
                        </div>

                        {gamePhase === 'playing' && (
                            <ProgressBar
                                currentLevel={currentLevelIndex + 1}
                                totalLevels={levels.length}
                            />
                        )}
                    </motion.div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                        {gamePhase === 'boot' && (
                            <motion.div
                                key="boot"
                                exit={{ opacity: 0 }}
                                className="min-h-[300px]"
                            >
                                <BootSequence onComplete={handleBootComplete} />
                            </motion.div>
                        )}

                        {gamePhase === 'playing' && (
                            <motion.div
                                key="playing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6"
                            >
                                {/* Previous success messages */}
                                {successMessages.map((msg, index) => (
                                    <Message
                                        key={`success-${index}`}
                                        text={msg}
                                        type="success"
                                    />
                                ))}

                                {/* Current Question */}
                                <motion.div
                                    key={currentLevelIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-start gap-3 bg-neutral-950/50 border border-pink-500/20 rounded-lg p-4">
                                        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                                        <div className="space-y-2">
                                            <p className="text-pink-400 font-mono text-sm sm:text-base">
                                                ВОПРОС #{currentLevelIndex + 1}
                                            </p>
                                            <p className="text-pink-300 font-mono text-base sm:text-lg font-semibold">
                                                {currentLevel.question}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    <AnimatePresence>
                                        {errorMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-red-950/30 border border-red-500/50 rounded-lg p-3">
                                                    <Message
                                                        text={errorMessage}
                                                        type={errorMessage.includes('Подсказка') ? 'info' : 'error'}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Input */}
                                    <InputLine
                                        onSubmit={handleSubmit}
                                        placeholder="Введите ответ..."
                                        shouldShake={shouldShake}
                                        onShakeComplete={() => setShouldShake(false)}
                                        onKeyPress={playKeyPress}
                                    />

                                    {/* Hint Button */}
                                    <AnimatePresence>
                                        {showHint && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="flex justify-center"
                                            >
                                                <HintButton onClick={handleShowHint} playClick={playClick} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Support Button - appears after 3 errors */}
                                    <AnimatePresence>
                                        {attemptCount >= 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                            >
                                                <SupportButton currentQuestion={currentLevel.question} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Attempt Counter */}
                                    {attemptCount > 0 && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-red-400 text-center text-sm font-mono"
                                        >
                                            Попыток: {attemptCount} {attemptCount >= 2 ? '⚠️' : ''}
                                        </motion.p>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}

                        {gamePhase === 'letter' && (
                            <motion.div
                                key="letter"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <LoveLetter onProceed={handleLetterProceed} playClick={playClick} />
                            </motion.div>
                        )}

                        {gamePhase === 'complete' && (
                            <motion.div
                                key="complete"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <FinalReward />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="border-t border-pink-500/30 pt-4 text-center"
                    >
                        <p className="text-emerald-400/50 font-mono text-xs">
                            {gamePhase === 'complete'
                                ? '💕 С Днём Святого Валентина, любимая! 💕'
                                : 'Система защиты любовных воспоминаний v2.14.26'
                            }
                        </p>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Heart Assembly - Fullscreen overlay */}
            <AnimatePresence>
                {gamePhase === 'heart' && (
                    <HeartAssembly onComplete={handleHeartComplete} playHeartbeat={playHeartbeat} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;