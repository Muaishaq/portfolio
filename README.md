# Muhammed Ishaq Portfolio v2

Modern, dark-futuristic portfolio website for Muhammed Ishaq (Muaishaq) — AI Engineer, Full-Stack Developer & CS Graduate from FUDMA, Nigeria.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Component styling
- **Netlify** - Deployment platform

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment

This project is configured for Netlify deployment:

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. **SPA redirect:** Configured in `netlify.toml`

The site is deployed at: https://muaishaq.netlify.app

## Project Structure

```
src/
  components/      # React components (Navbar, Hero, About, etc.)
  styles/          # Global styles and CSS modules
  App.jsx          # Main app component
  main.jsx         # React entry point
public/
  img/             # Images (profile photo)
  cv/              # CV PDF
```

## Design System

- **Theme:** Dark & futuristic
- **Primary accent:** Neon cyan (#00f5c4)
- **Secondary accent:** Neon blue (#00c4f5)
- **Fonts:** Space Grotesk (display/body) + JetBrains Mono (code/labels)

## Development Notes

- All components use CSS Modules for styling
- Responsive design (mobile-first approach)
- Animations respect `prefers-reduced-motion`
- Semantic HTML throughout
- No external UI component libraries (custom CSS only)

## Author

Built by Muhammed Ishaq (Muaishaq)
- GitHub: github.com/muaishaq
- LinkedIn: linkedin.com/in/muaishaq
- Email: techiemuaishaq@gmail.com
