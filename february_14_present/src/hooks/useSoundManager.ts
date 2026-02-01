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
            // Using a data URL for a simple ambient tone (low frequency hum)
            // In production, replace with actual audio files
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

    return {
        initializeAudio,
        playKeyPress,
        playSuccess,
        playError,
        playBoot,
    };
};