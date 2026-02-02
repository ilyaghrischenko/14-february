# ✅ Customization Checklist

Before deploying your Valentine's Quest, make sure you've customized everything!

## 1. Questions & Answers

📝 **File**: `src/data/levels.ts`

- [ ] Customize question 1
- [ ] Set answer 1 (lowercase)
- [ ] Write hint 1 (Russian)
- [ ] Customize question 2
- [ ] Set answer 2 (lowercase)
- [ ] Write hint 2 (Russian)
- [ ] Customize question 3
- [ ] Set answer 3 (lowercase)
- [ ] Write hint 3 (Russian)
- [ ] Customize question 4
- [ ] Set answer 4 (lowercase)
- [ ] Write hint 4 (Russian)
- [ ] *(Optional)* Add more levels by duplicating the structure

## 2. Final Reward Message

📝 **File**: `src/data/levels.ts`

- [ ] Write personalized final message in Russian
- [ ] Include gift location hint
- [ ] Add romantic message
- [ ] Sign with your name/nickname

## 3. Love Letter (NEW!)

📝 **File**: `src/components/Phases/LoveLetter.tsx`

- [ ] Replace placeholder text with your actual love letter
- [ ] Write 3-5 heartfelt paragraphs
- [ ] Make it personal and meaningful
- [ ] Keep it in Russian
- [ ] End with intrigue leading to "I LOVE YOU"

## 4. Photos

📸 **Folder**: `public/photos/`

- [ ] Add photo1.jpg
- [ ] Add photo2.jpg
- [ ] Add photo3.jpg
- [ ] Add photo4.jpg
- [ ] Add photo5.jpg
- [ ] Add photo6.jpg

📝 **File**: `src/components/Terminal/FinalReward.tsx`

- [ ] Update photo paths (if using different names)
- [ ] Customize caption 1
- [ ] Customize caption 2
- [ ] Customize caption 3
- [ ] Customize caption 4
- [ ] Customize caption 5
- [ ] Customize caption 6

## 5. Testing

🧪 **Before Deployment**

- [ ] Test all questions and answers
- [ ] Verify answers work with different cases (UPPER, lower, MiXeD)
- [ ] Test hint system (fail twice to trigger)
- [ ] **Test support button (fail 3 times to trigger)**
- [ ] **Test sound effects (keyboard, success, error)**
- [ ] **Test mute button (top right corner)**
- [ ] **Test love letter appears after last question**
- [ ] **Test "Продолжить" button on love letter**
- [ ] **Test heart assembly animation (auto-proceeds)**
- [ ] Verify shake animation on wrong answer
- [ ] Check all photos load correctly
- [ ] Test on mobile (real device, not just browser)
- [ ] Test on desktop
- [ ] Verify Russian text displays correctly
- [ ] Check progress bar updates
- [ ] Test final reward screen

## 6. Support Configuration

🆘 **Setup Tech Support Button**

📝 **File**: `src/components/UI/SupportButton.tsx`

- [ ] Replace `YOUR_TELEGRAM_USERNAME` with your actual Telegram username (without @)
- [ ] Replace `1234567890` with your WhatsApp number (international format, no spaces)
- [ ] Test the support button opens correct messenger
- [ ] Verify pre-filled message text is correct

See **SUPPORT_SETUP.md** for detailed instructions!

## 7. Optional Customization

🎨 **Advanced Tweaks**

- [ ] Change color scheme (tailwind.config.js)
- [ ] Adjust animation speeds (framer-motion props)
- [ ] Modify boot sequence messages (data/levels.ts)
- [ ] Add more or fewer questions
- [ ] Change fonts (index.html Google Fonts)

## 7. Deployment Prep

🚀 **Ready to Share**

- [ ] Build project (`npm run build`)
- [ ] Test production build (`npm run preview`)
- [ ] Choose deployment platform (Vercel/Netlify/GitHub Pages)
- [ ] Deploy
- [ ] Test deployed link on mobile
- [ ] Test deployed link on desktop
- [ ] Share with your girlfriend! 💕

## Quick Test Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Common Issues

**Photos not loading?**
- Check file names match exactly (photo1.jpg, not Photo1.JPG)
- Verify files are in `public/photos/` folder
- Clear browser cache

**Wrong answer not triggering shake?**
- Check answer is lowercase in levels.ts
- Verify normalization function is working

**Text not in Russian?**
- Ensure file encoding is UTF-8
- Check fonts support Cyrillic characters

**Mobile zoom on input?**
- Verify input font-size is 16px (already set in code)

---

## Need Help?

Check the main README.md for detailed instructions!

Good luck with your Valentine's Quest! 💕