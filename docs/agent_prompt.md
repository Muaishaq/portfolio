# Cursor AI Agent Prompt — Muaishaq Portfolio Rebuild
# READ THIS FULLY BEFORE TOUCHING ANY FILE OR WRITING ANY CODE
# Ask me for clarity Where los before Starting anything
# Please before you Start anything Let me know if there is anything i need to do mannually first and also make sure you explain to me want you are about to do asking for my opinion if thats okay before you procced

---

## Your Role
You are a senior front-end engineer rebuilding a personal portfolio website. The owner (Muhammed Ishaq, aka Muaishaq) has linked his current Profile Card Repository in Github Becuase it has all the files of both the profile card and his Current Portfolio site. Your job is to study those existing files, extract every asset and piece of content from them, then build a completely new, modern, standout site using React + Vite, but make sure the new style is far better than the previous — following SPEC.md and TODO.md exactly.

---

## Files You Have Been Given

The following files from the owner's CURRENT site are available in your project folder. Study them before writing a single line of new code:

### Main Portfolio (current site — source of truth for assets & structure):
- `existing/portfolio/index.html`       ← current portfolio HTML, all sections & content
- `existing/portfolio/style.css`        ← current styling (do NOT copy — for reference only)
- `existing/portfolio/img/`             ← contains profile photo: IMG-20240411-WA0121.jpg
- `existing/portfolio/Videos/`          ← project demo videos (do NOT embed — use project cards)

### Profile Card (standalone mini-project to be rebuilt & integrated):
- `existing/profile-card/index.html`    ← current profile card HTML
- `existing/profile-card/style.css`     ← current profile card CSS
- `existing/profile-card/Profile Picture/IMG-20240411-WA0121.jpg` ← profile photo

### CV:
- `existing/cv/Muhammed_Ishaq_CV.pdf`   ← latest updated CV (use for any content references)

---

## What To Do With Existing Files

| File/Folder | Action |
|-------------|--------|
| Profile photo (IMG-20240411-WA0121.jpg) | Copy to `public/img/profile.jpg` — USE this as the real photo |
| Portfolio content (index.html) | Extract any content not already in SPEC.md |
| Portfolio videos (Videos/) | Do NOT embed — reference only in project card descriptions |
| Profile card (index.html + style.css) | Rebuild as a React component — see SPEC.md Section 16 |
| CV PDF | Copy to `public/cv/Muhammed_Ishaq_CV.pdf` — link from CV download button |
| Old CSS (style.css) | Reference only — do NOT import or copy into new project |

---

## Project Overview
Rebuild the personal portfolio of **Muhammed Ishaq (Muaishaq)** — CS graduate, AI Engineer, Full-Stack Developer, and two-time student president from Nigeria(President Faculty of Computing Federal University Dutsin-Ma Katsina State and President NACOS FUDMA CHAPTER). The new site must be modern, unique, dark-futuristic, and professional.

**Stack:** React + Vite
**Deployment Target:** Netlify
**Design Theme:** Dark & futuristic — black backgrounds (#080b12), neon cyan (#00f5c4) primary accent, neon blue (#00c4f5) secondary, purple highlights (#7b5cf0)
**Fonts:** Space Grotesk (display/body) + JetBrains Mono (code/labels/tags)

---

## Before You Write Any Code

1. Read `SPEC.md` fully — defines every section, all content, all design tokens and component rules
2. Read `TODO.md` fully — defines the exact build order and checklist
3. Copy profile photo to `public/img/profile.jpg`
4. Copy CV PDF to `public/cv/Muhammed_Ishaq_CV.pdf`
5. Scaffold the Vite + React project, install dependencies
6. Build section by section following TODO.md phases

---

## Critical Rules
- Every piece of content in SPEC.md must appear in the final site — nothing skipped
- Mobile responsive down to 375px viewport width
- No placeholder text like "Lorem ipsum" anywhere
- No UI component libraries (no MUI, Chakra, Ant Design) — custom CSS only via CSS Modules
- I want TypeScript and you can also use JavaScript Where necessary
- Profile photo is REAL — it exists at `existing/profile-card/Profile Picture/IMG-20240411-WA0121.jpg`. Copy and use it.
- CV download button must link to `/cv/Muhammed_Ishaq_CV.pdf`
- All social links must use exact URLs from SPEC.md
- Contact form opens mailto on submit — no backend needed
- Respect `prefers-reduced-motion` for all animations
- Use semantic HTML (nav, main, section, article, footer)
- Git commit after completing each major section

---

## Profile Card Component — Special Instructions
The existing Profile Card (`existing/profile-card/`) must be rebuilt as a React component (`src/components/ProfileCard.jsx`) matching the new dark-futuristic design system. It should:
- Be a standalone shareable card (also embeddable in the About section or as a route `/card`)
- Show: profile photo, name, title, bio, social links, "See My Work" + "Hire Me" + "Download CV" buttons
- Use the new dark theme (NOT the old light/red theme)
- Full spec in SPEC.md Section 16

---

## Deployment Instructions (After Build)
1. Run `npm run build` — confirm zero errors
2. Ensure `netlify.toml` exists with SPA redirect rule
3. Push to GitHub: `muaishaq/portfolio-v2`
4. Connect repo to Netlify — build command: `npm run build`, publish dir: `dist`

---

## When Done
- Lighthouse audit: target 90+ on Performance, Accessibility, Best Practices
- Test at 375px, 768px, 1280px, 1920px
- Confirm all links work, form opens mailto, CV downloads, photo loads
- Report any SPEC.md items that could not be completed and why
