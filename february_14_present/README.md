# 💕 Valentine's Day Login Quest - Love Protocol

A cyber-romance terminal interface where your girlfriend answers personal questions to decrypt the location of a real-world Valentine's Day gift.

## ✨ Features

- **Cyber-Romance Theme**: Terminal-style interface with neon pink aesthetics
- **CRT Screen Effects**: Authentic retro terminal with scanlines and glitch effects
- **Falling Hearts Animation**: Beautiful red hearts falling in the background
- **🔊 Sound Design**: Keyboard typing sounds, success chimes, error glitches
- **💌 Love Letter Phase**: Emotional letter reveal after quiz completion
- **💖 Heart Assembly Animation**: Cinematic "I LOVE YOU" moment
- **🆘 Tech Support Button**: After 3 errors, can message you via Telegram/WhatsApp
- **🔇 Mute Control**: Toggle sound on/off (top-right corner)
- **Responsive Design**: Flawless on both iPhone 17 Pro Max and Desktop
- **Progressive Difficulty**: Questions get more challenging as she progresses
- **Hint System**: After 2 failed attempts, a hint button appears
- **Shake Animation**: Visual feedback on wrong answers
- **Typing Effects**: Terminal-style text animations
- **Final Reward**: Photo grid puzzle revealing gift location
- **All Text in Russian**: Complete localization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Guide

### 1. Customize Questions & Answers

Edit `src/data/levels.ts`:

```typescript
export const levels: Level[] = [
  {
    id: 1,
    question: 'Your question in Russian?',
    answer: 'correctanswer', // ALWAYS LOWERCASE
    hint: 'Your hint in Russian...',
    errorMessage: 'Error message in Russian.',
  },
  // Add more levels...
];
```

**IMPORTANT**:
- Answers are automatically converted to lowercase and trimmed
- User can enter "Sasha", " sasha ", "SASHA" - all will work
- Make sure your correct answer is lowercase in the data

### 2. Customize Final Reward Message

Edit `src/data/levels.ts`:

```typescript
export const finalRewardText = `
Your personalized message here...
Tell her where the gift is hidden!
`;
```

### 3. Add Your Photos

1. Create a `public/photos` folder
2. Add 6 photos (photo1.jpg, photo2.jpg, etc.)
3. Edit `src/components/Terminal/FinalReward.tsx`:

```typescript
const photos = [
  '/photos/your-photo-1.jpg',
  '/photos/your-photo-2.jpg',
  // etc...
];
```

4. Customize the captions:

```typescript
{index === 0 && 'Your caption in Russian'}
```

### 4. Configure Tech Support (IMPORTANT!)

📝 **File**: `src/components/UI/SupportButton.tsx`

Replace these values:
```typescript
const telegramUsername = 'YOUR_TELEGRAM_USERNAME'; // Your @username (without @)
const whatsappNumber = '1234567890'; // Your number with country code
```

**See SUPPORT_SETUP.md for detailed instructions!**

### 5. Customize Love Letter (IMPORTANT!)

📝 **File**: `src/components/Phases/LoveLetter.tsx`

Replace the placeholder text with your actual love letter:
```typescript
const letterText = `
Your heartfelt message here...
`;
```

**See EMOTIONAL_PHASES.md for detailed guide!**

### 6. Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    // Change primary color from pink to another
    colors: {
      primary: colors.purple, // or any other color
    }
  }
}
```

## 📱 Mobile Optimization

The app is optimized for iPhone 17 Pro Max:

- ✅ Uses `100dvh` to handle iOS address bar
- ✅ Safe area insets for Dynamic Island
- ✅ Input font-size: 16px (prevents iOS zoom)
- ✅ Touch targets: 44x44px minimum
- ✅ Responsive typography

## 🖥️ Desktop Features

- Centered terminal window (max-width: 672px)
- Animated background outside terminal
- Hover effects on buttons
- Larger touch targets

## 🎯 Game Flow

1. **Boot Sequence**: Fake terminal initialization with typing effects (+ boot sound)
2. **Authentication Loop**:
   - Display question
   - User enters answer (keyboard sounds on typing)
   - Wrong answer → Shake animation + error glitch sound
   - Correct answer → Success chime sound
   - 2 errors → Hint button appears
   - 3 errors → Tech Support button appears (Telegram/WhatsApp)
3. **Progress Tracking**: Visual progress bar with hearts
4. **Love Letter Phase** (NEW!): Romantic letter reveal after completing all questions
5. **Heart Assembly Animation** (NEW!): Cinematic "Я ТЕБЯ ЛЮБЛЮ" moment (5.5 seconds)
6. **Audio Control**: Mute button in top-right corner
7. **Final Reward**:
   - Success animation
   - Reveal message with gift location
   - Photo grid in Polaroid style

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
valentine-quest/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Container.tsx       # Responsive wrapper
│   │   ├── Background/
│   │   │   └── FallingHearts.tsx   # Animated falling hearts
│   │   ├── UI/
│   │   │   ├── MuteButton.tsx      # Sound toggle button
│   │   │   └── SupportButton.tsx   # Tech support contact
│   │   ├── Phases/
│   │   │   ├── LoveLetter.tsx      # ⚠️ CUSTOMIZE YOUR LOVE LETTER
│   │   │   └── HeartAssembly.tsx   # Animated "I LOVE YOU" moment
│   │   └── Terminal/
│   │       ├── BootSequence.tsx    # Initial loading animation
│   │       ├── Message.tsx         # Typing effect component
│   │       ├── InputLine.tsx       # Input with shake animation
│   │       ├── HintButton.tsx      # Animated hint button
│   │       ├── ProgressBar.tsx     # Level progress indicator
│   │       └── FinalReward.tsx     # Victory screen with photos
│   ├── hooks/
│   │   └── useSoundManager.ts      # Web Audio API sound effects
│   ├── data/
│   │   └── levels.ts               # Questions, answers, hints
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main game orchestrator
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Custom styles + Tailwind
├── public/
│   └── photos/                     # Your photos go here
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md
├── CHECKLIST.md
├── SUPPORT_SETUP.md                # Tech support configuration guide
├── EMOTIONAL_PHASES.md             # Love letter & heart animation guide
└── vite.config.ts
```

## 🎨 Design System

### Colors
- **Background**: Deep Black (`bg-neutral-950`)
- **Primary Text**: Neon Pink (`text-pink-400`)
- **Secondary Text**: Terminal Green (`text-emerald-400`)
- **Borders**: Semi-transparent Pink (`border-pink-500/30`)

### Typography
- **Display Font**: Orbitron (Headers)
- **Body Font**: JetBrains Mono (Terminal text)

### Effects
- Glassmorphism panels
- Neon text glow
- CRT scanlines
- Terminal cursor blink
- Shake animations on errors

## 🔒 Input Validation

The app includes robust input validation:

```typescript
const normalizeAnswer = (answer: string): string => {
  return answer.trim().toLowerCase();
};
```

This means:
- Whitespace is ignored
- Case doesn't matter
- " Sasha ", "SASHA", "sasha" all match "sasha"

## 🚨 Important Notes

1. **All text must be in Russian** - This is crucial for the romantic theme
2. **Photos are required** - The final reward won't look good without real photos
3. **Test on mobile** - Always test on an actual iPhone or Android device
4. **Customize questions** - Make them personal and meaningful
5. **Keep answers simple** - Short, memorable answers work best

## 💡 Tips for Best Experience

1. **Questions**: Choose questions only she would know
2. **Difficulty**: Start easy, get progressively harder
3. **Hints**: Make hints helpful but not too obvious
4. **Photos**: Choose your best couple photos
5. **Gift Location**: Be creative with the final reveal message

## 🎁 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Upload 'dist' folder to gh-pages branch
```

## 📝 License

This is a personal project for Valentine's Day. Feel free to customize and use for your own romantic purposes! 💕

## 🤝 Support

If you encounter any issues:
1. Check all file paths are correct
2. Ensure photos are in `public/photos/`
3. Verify all Russian text is properly encoded (UTF-8)
4. Test on actual mobile device, not just browser dev tools

---

Made with ❤️ for your special someone

**Happy Valentine's Day! 💕**