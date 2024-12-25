# Simple Santa Tracker Setup Guide

This guide will help you create your own Santa Tracker website using Next.js and OpenStreetMap.

## Step 1: Initial Setup
```bash
# Create your project directory
mkdir santa-tracker
cd santa-tracker

# Initialize project
npm init -y
npm install next@latest react@latest react-dom@latest
```

## Step 2: Install Required Dependencies
```bash
npm install leaflet react-leaflet @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
npm install -D autoprefixer postcss tailwindcss
```

## Step 3: Configure Next.js for GitHub Pages
Create `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: true,
  },
  basePath: '/sNickTrackER',
  reactStrictMode: true
};

module.exports = nextConfig;
```

## Step 4: Project Structure
Create these folders:
```
santa-tracker/
├── app/                  # Next.js app files
├── components/          # React components
├── public/             # Static files
└── lib/                # Utilities
```

## Step 5: Deploy to GitHub
1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```

## Step 6: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select GitHub Actions as source
4. Your site will be live at: https://[username].github.io/[repo-name]/

## Features
- 🎅 Live Santa tracking
- 🗺️ Interactive OpenStreetMap
- 📍 Location management
- ⏰ Christmas countdown
- 🎁 Gift delivery tracking

## Troubleshooting
- Ensure all dependencies are installed
- Check GitHub Pages settings are correct
- Verify basePath in next.config.js matches your repository name

## Live Demo
Visit: https://w4ester.github.io/sNickTrackER/