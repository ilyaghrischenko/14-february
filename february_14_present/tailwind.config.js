/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
                display: ['"Orbitron"', 'sans-serif'],
            },
            animation: {
                'scanline': 'scanline 8s linear infinite',
                'glitch': 'glitch 0.5s ease-in-out',
                'typing': 'typing 0.5s steps(20)',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}