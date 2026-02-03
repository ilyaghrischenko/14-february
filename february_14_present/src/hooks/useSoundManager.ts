import { useEffect, useRef, useState } from 'react';

interface SoundManagerProps {
    isMuted: boolean;
}

export const useSoundManager = ({ isMuted }: SoundManagerProps) => {
    const ambientRef = useRef<HTMLAudioElement | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize ambient sound
        if (!ambientRef.current) {
            ambientRef.current = new Audio();
            ambientRef.current.loop = true;
            ambientRef.current.volume = 0.1;
        }
    }, []);

    useEffect(() => {
        if (ambientRef.current) {
            if (isMuted) {
                ambientRef.current.pause();
            } else if (isInitialized) {
                ambientRef.current.play().catch(() => {
                    // Browser autoplay policy - will be handled by user interaction
                });
            }
        }
    }, [isMuted, isInitialized]);

    const initializeAudio = () => {
        setIsInitialized(true);
        if (!isMuted && ambientRef.current) {
            ambientRef.current.play().catch(() => {
                // Silently handle autoplay blocking
            });
        }
    };

    const playKeyPress = () => {
        if (isMuted) return;

        // Simple keyboard click sound using Web Audio API
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'square';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    };

    const playClick = () => {
        if (isMuted) return;

        // Subtle cyber-click sound
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Short, techy click (higher frequency for cyber feel)
        oscillator.frequency.value = 1200;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.08);
    };

    const playSuccess = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Success chime (C major chord simulation)
        oscillator.frequency.value = 523.25; // C5
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);

        // Add second note for richness
        setTimeout(() => {
            const osc2 = audioContext.createOscillator();
            const gain2 = audioContext.createGain();
            osc2.connect(gain2);
            gain2.connect(audioContext.destination);
            osc2.frequency.value = 659.25; // E5
            osc2.type = 'sine';
            gain2.gain.setValueAtTime(0.2, audioContext.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            osc2.start(audioContext.currentTime);
            osc2.stop(audioContext.currentTime + 0.5);
        }, 100);
    };

    const playError = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Glitch error sound
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.value = 100 + Math.random() * 200;
                oscillator.type = 'sawtooth';

                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            }, i * 50);
        }
    };

    const playBoot = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Boot up sound (rising frequency)
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.5);
        oscillator.type = 'sawtooth';

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    };

    const playHeartbeat = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Romantic ambient heartbeat sound with soft pads
        const playHeartbeatThump = (delay: number) => {
            setTimeout(() => {
                // Bass thump
                const bass = audioContext.createOscillator();
                const bassGain = audioContext.createGain();
                bass.connect(bassGain);
                bassGain.connect(audioContext.destination);

                bass.frequency.value = 60; // Low frequency for heartbeat
                bass.type = 'sine';

                bassGain.gain.setValueAtTime(0.3, audioContext.currentTime);
                bassGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

                bass.start(audioContext.currentTime);
                bass.stop(audioContext.currentTime + 0.3);

                // Soft pad/ambient layer
                const pad = audioContext.createOscillator();
                const padGain = audioContext.createGain();
                pad.connect(padGain);
                padGain.connect(audioContext.destination);

                pad.frequency.value = 220; // A3 - romantic tone
                pad.type = 'sine';

                padGain.gain.setValueAtTime(0.15, audioContext.currentTime);
                padGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);

                pad.start(audioContext.currentTime);
                pad.stop(audioContext.currentTime + 1.5);
            }, delay);
        };

        // Double heartbeat pattern: thump-thump ... pause ... thump-thump
        playHeartbeatThump(0);
        playHeartbeatThump(400);

        // Soft rising ambient sweep for romance
        const sweep = audioContext.createOscillator();
        const sweepGain = audioContext.createGain();
        sweep.connect(sweepGain);
        sweepGain.connect(audioContext.destination);

        sweep.frequency.setValueAtTime(200, audioContext.currentTime);
        sweep.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 2);
        sweep.type = 'sine';

        sweepGain.gain.setValueAtTime(0.1, audioContext.currentTime);
        sweepGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);

        sweep.start(audioContext.currentTime);
        sweep.stop(audioContext.currentTime + 2);
    };

    return {
        initializeAudio,
        playKeyPress,
        playClick,
        playSuccess,
        playError,
        playBoot,
        playHeartbeat,
    };
};