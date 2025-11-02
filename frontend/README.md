# Divy Kairoth Portfolio - Content Management Guide

## Overview
This portfolio website is built with React 18, Tailwind CSS, and Framer Motion, inspired by Campfire.ai's design aesthetic. It features smooth scroll animations, parallax effects, and a modern, clean interface.

## 🎨 Design System

### Colors
- **Primary Dark**: `#122F26` - Main background, text on white
- **Accent Green**: `#B3EF96` - CTAs, highlights
- **Accent Orange**: `#FE8630` - Secondary accent, animations
- **Light Background**: `#F9F8F8` / `white` - Sections background
- **Text on Dark**: `#E8F6ED` - Text on dark backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Sizes**: 5xl - 7xl for hero, 4xl - 6xl for sections
- **Body Text**: lg - xl for descriptions

## 📁 File Structure

```
/app/frontend/src/
├── components/
│   ├── LogoIntro.jsx          # Intro animation (2.5s)
│   ├── Navigation.jsx          # Sticky nav with dropdown menu
│   ├── Hero.jsx               # Main hero section
│   ├── CircleCluster.jsx      # Animated circles (parallax ball)
│   ├── FloatingCards.jsx      # Snapshot cards
│   ├── VideoLaptop.jsx        # Laptop with video placeholder
│   ├── ConnectDialog.jsx      # Contact form dialog
│   ├── MovingStrip.jsx        # Horizontal scrolling text
│   └── ProjectsSection.jsx    # Stacking project cards
├── config/
│   └── animation.js           # Animation timings & easings
├── App.js                     # Main app component
└── index.css                  # Global styles & CSS variables
```

## 🔄 How to Update Content

### 1. Personal Information

**File**: `src/components/Hero.jsx`

```jsx
// Line ~60-65: Update tagline
<p className="text-sm...">
  Product Manager · Builder · Creator  // ← Change this
</p>

// Line ~68-72: Update headline
<h1>
  <span>Passionate for </span>
  <span className="gradient-text">building public facing products</span>
  // ← Edit both parts
</h1>

// Line ~75-79: Update description
<p>
  Turning ideas into scalable products...  // ← Change this
</p>
```

**File**: `src/components/FloatingCards.jsx`

```jsx
// Line ~10-50: Update snapshot cards
const cards = [
  {
    id: 1,
    title: 'Divy Kairoth',        // ← Your name
    subtitle: 'Product Manager',   // ← Your title
    description: 'Building products from 0→1',  // ← Your tagline
    // ...
  },
  // ... update other cards (Projects, Ideas, Gallery, Blog)
];
```

### 2. Projects

**File**: `src/components/ProjectsSection.jsx`

```jsx
// Line ~15-40: Update featured projects
const featuredProjects = [
  {
    id: 1,
    title: 'Mindlessly',                  // ← Project name
    subtitle: 'Chrome Extension',         // ← Project type
    description: 'A productivity tool...', // ← Description
    tags: ['Chrome Extension', ...],       // ← Tech tags
    github: 'https://github.com/...',     // ← GitHub link
    link: '#',                            // ← Live demo link
    color: 'var(--accent-orange)',        // ← Accent color
  },
  // ... add more projects
];
```

### 3. Moving Strip Keywords

**File**: `src/components/MovingStrip.jsx`

```jsx
// Line ~14-24: Update keywords
const keywords = [
  'PRODUCT STRATEGY',    // ← Change these
  'AI',
  'CONSUMER PRODUCTS',
  'CONTENT',
  'RUNNING',
  // ... repeat for continuous scroll
];
```

### 4. Navigation Links

**File**: `src/components/Navigation.jsx`

```jsx
// Line ~37-44: Update nav links
const navLinks = [
  { title: 'About', href: '#about' },      // ← Update titles & hrefs
  { title: 'Projects', href: '#projects' },
  { title: 'Ideas', href: '#ideas' },
  // ...
];

// Line ~47-51: Update social links
const socialLinks = [
  { icon: Linkedin, href: 'https://...', label: 'LinkedIn' },  // ← Update URLs
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];
```

### 5. Introduction Video

**File**: `src/components/VideoLaptop.jsx`

```jsx
// Line ~75-82: Uncomment and add video URL
<video
  className="w-full h-full object-cover"
  controls
  poster="/path-to-thumbnail.jpg"    // ← Add thumbnail image
>
  <source src="/path-to-video.mp4" type="video/mp4" />  // ← Add video file
  Your browser does not support the video tag.
</video>
```

**Note**: Place video file in `/app/frontend/public/` folder and reference as `/video.mp4`

### 6. Project Images/Thumbnails

**To add project images**:

1. Place images in `/app/frontend/public/images/`
2. Update in `ProjectsSection.jsx`:

```jsx
// Replace placeholder with actual image
<motion.div className="relative...">
  <img 
    src="/images/project-mindlessly.png"  // ← Your image path
    alt="Mindlessly project"
    className="w-full h-full object-cover"
  />
</motion.div>
```

### 7. Avatar/Profile Picture

**File**: `src/components/FloatingCards.jsx`

```jsx
// Line ~55-62: Replace "DK" with image
<div className="w-16 h-16 rounded-full...">
  <img 
    src="/images/avatar.jpg"  // ← Your photo
    alt="Divy Kairoth"
    className="w-full h-full object-cover"
  />
</div>
```

## 🎬 Animation Configuration

**File**: `src/config/animation.js`

```javascript
export const ANIMATION_CONFIG = {
  intro: {
    letterStagger: 0.04,      // Delay between letters
    letterDuration: 0.35,     // Letter fade-in duration
    totalDuration: 2.5,       // Total intro animation time
  },
  // ... modify timings as needed
};
```

## 🚀 Deployment

### Static Export for GoDaddy

1. Build the project:
```bash
cd /app/frontend
yarn build
```

2. The `build/` folder contains static HTML/CSS/JS files

3. Upload contents of `build/` folder to your GoDaddy hosting

### Asset Replacement Checklist

Before deployment, replace these placeholders:

- [ ] Introduction video (`/public/video.mp4`)
- [ ] Profile avatar (`/public/images/avatar.jpg`)
- [ ] Project thumbnails (`/public/images/project-*.png`)
- [ ] Update all personal information (name, bio, links)
- [ ] Update project details and links
- [ ] Add real social media URLs
- [ ] Test all animations and scroll behavior

## 🎨 Color Customization

To change the color scheme, update these CSS variables in `src/index.css`:

```css
:root {
  --bg-dark: #122F26;        /* Main dark background */
  --accent-green: #B3EF96;   /* Primary accent */
  --accent-orange: #FE8630;  /* Secondary accent */
  --muted-white: #F9F8F8;    /* Light sections */
  --text-on-dark: #E8F6ED;   /* Text on dark bg */
}
```

## 📱 Responsive Design

The portfolio is optimized for:
- Desktop: 1920px+ (full experience)
- Tablet: 768px - 1919px
- Mobile: iPhone 13 (390px × 844px)

Key breakpoints are handled using Tailwind's responsive classes (`md:`, `lg:`).

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format, compress to <500KB
2. **Video**: Keep under 10MB, use poster images
3. **Lazy Loading**: Images below fold are lazy-loaded automatically
4. **Animations**: Respect `prefers-reduced-motion` for accessibility

## 🐛 Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure Framer Motion is installed: `yarn add framer-motion`

### Images not loading?
- Verify files are in `/public/` folder
- Use absolute paths like `/images/file.jpg`

### Build fails?
- Run `yarn install` to ensure all dependencies
- Check for syntax errors in modified files

## 📞 Support

For questions or issues with content updates, refer to:
- React Docs: https://react.dev
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com

---

**Version**: 1.0  
**Last Updated**: January 2025  
**Built with**: React 18, Tailwind CSS, Framer Motion
