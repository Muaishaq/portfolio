# TODO.md — Muaishaq Portfolio v2 Build Checklist
# Agent: Complete in order. Check off each item as done.

---

## PHASE 0 — Setup Existing Files
- [ ] Create folder `existing/` in project root
- [ ] Copy owner's current portfolio HTML → `existing/portfolio/index.html`
- [ ] Copy owner's current portfolio CSS → `existing/portfolio/style.css`
- [ ] Copy profile photo → `public/img/profile.jpg`  (from existing profile card files)
- [ ] Copy CV PDF → `public/cv/Muhammed_Ishaq_CV.pdf`
- [ ] Read `existing/portfolio/index.html` — note any content not already covered in SPEC.md
- [ ] Confirm profile photo file exists and is valid before continuing
- [ ] Commit: `git init && git add . && git commit -m "chore: add existing source files"`

---

## PHASE 1 — Project Scaffold
- [ ] Run `npm create vite@latest muaishaq-portfolio -- --template react`
- [ ] `cd muaishaq-portfolio && npm install`
- [ ] Delete all boilerplate (App.css, logo.svg, default App.jsx content)
- [ ] Create `src/components/` and `src/styles/` folders
- [ ] Create `src/styles/global.css` with all CSS variables from SPEC.md section 2.1
- [ ] Add Google Fonts link to `index.html`
- [ ] Add all meta tags to `index.html` from SPEC.md section 15
- [ ] Create `netlify.toml` with SPA redirect rule
- [ ] Confirm `public/img/profile.jpg` and `public/cv/Muhammed_Ishaq_CV.pdf` are in place
- [ ] Add README.md with setup and deployment instructions
- [ ] Test: `npm run dev` → blank dark page renders
- [ ] Commit: `git commit -m "feat: project scaffold"`

---

## PHASE 2 — Global Styles
- [ ] CSS reset in `global.css` (box-sizing, margin, padding)
- [ ] Body: `--bg-primary` bg, `--text-primary` color, Space Grotesk font
- [ ] Custom scrollbar (4px, cyan thumb)
- [ ] Smooth scroll on html element
- [ ] Import `global.css` in `main.jsx`
- [ ] Commit: `git commit -m "feat: global styles"`

---

## PHASE 3 — Navbar
- [ ] Create `Navbar.jsx` + `Navbar.module.css`
- [ ] Logo: `muaishaq.dev` — "muaishaq" cyan, ".dev" muted, JetBrains Mono
- [ ] Desktop links: About / Skills / Projects / Leadership / Education / Certifications / Contact
- [ ] "Hire Me" CTA → `#contact`
- [ ] Fixed, backdrop-filter blur, border-bottom, 64px height
- [ ] Active link highlights cyan on scroll (IntersectionObserver)
- [ ] Mobile: hamburger → fullscreen overlay with centered links + ✕ button
- [ ] Clicking mobile link closes overlay and scrolls to section
- [ ] Test at 375px
- [ ] Commit: `git commit -m "feat: navbar"`

---

## PHASE 4 — Hero Section
- [ ] Create `Hero.jsx` + `Hero.module.css`
- [ ] Full viewport height, flex, left-aligned
- [ ] Grid-dot background (CSS pattern + radial mask) — SPEC.md section 2.3
- [ ] Two blurred CSS orbs (cyan top-right, purple bottom-left)
- [ ] Pill badge: "● Available for Opportunities" with pulsing dot
- [ ] H1: "Muhammed" (white) + "Ishaq" (cyan glow)
- [ ] Subtitle (JetBrains Mono): AI Engineer / Full-Stack Developer / Computer Scientist
- [ ] Body paragraph (from SPEC.md section 5)
- [ ] Two CTA buttons: "View My Work" (filled) + "Let's Talk" (outlined)
- [ ] Stats row: 3+ / 6+ / 2× / 1st with labels
- [ ] Fade-up stagger animation on load
- [ ] Respect `prefers-reduced-motion`
- [ ] Commit: `git commit -m "feat: hero section"`

---

## PHASE 5 — About Section
- [ ] Create `About.jsx` + `About.module.css`
- [ ] Background: `--bg-secondary`
- [ ] 2-column grid (image left, text right)
- [ ] Image: load `public/img/profile.jpg` (REAL photo — not a placeholder)
- [ ] If photo fails to load, fallback to "MI" initials circle
- [ ] Corner accent brackets (cyan borders top-left / bottom-right)
- [ ] Badge bottom-right: "🎓 CS Graduate 2026"
- [ ] Eyebrow: "WHO I AM"
- [ ] H2: "Building the future, one system at a time"
- [ ] Cyan divider line (48px × 2px)
- [ ] All 3 body paragraphs (SPEC.md section 6) — includes Huawei mention, 2000+ students, Sports Director role
- [ ] Meta grid: Location (Keffi) / Email / Status (✦ Open to Work, cyan) / Phone / Degree / Tech Instagram
- [ ] Stack single column on mobile
- [ ] Commit: `git commit -m "feat: about section"`

---

## PHASE 6 — Skills Section
- [ ] Create `Skills.jsx` + `Skills.module.css`
- [ ] Background: `--bg-primary`
- [ ] Section eyebrow + H2 + subtitle
- [ ] 6 skill cards in responsive grid (SPEC.md section 7)
- [ ] Each card: icon, title, description, tags, animated skill bar
- [ ] Tag color variants: cyan / purple / blue / gray
- [ ] Skill bars: 0 → final % on scroll via IntersectionObserver
- [ ] Card hover: lift + border lightens
- [ ] Commit: `git commit -m "feat: skills section"`

---

## PHASE 7 — Projects Section
- [ ] Create `Projects.jsx` + `Projects.module.css`
- [ ] Background: `--bg-secondary`
- [ ] Featured TechTrust card — full width, 2-col internal layout
- [ ] Featured right panel: ASCII architecture diagram (JetBrains Mono)
- [ ] Updated TechTrust description includes Huawei ICT competition + National Finals
- [ ] 5 regular project cards in auto-fit grid
- [ ] All 6 projects with correct content from SPEC.md section 8
- [ ] DO NOT embed .mp4 videos
- [ ] All GitHub links open in new tab
- [ ] Featured card right panel hides on mobile
- [ ] Commit: `git commit -m "feat: projects section"`

---

## PHASE 8 — Leadership Section
- [ ] Create `Leadership.jsx` + `Leadership.module.css`
- [ ] Background: `--bg-primary`
- [ ] 5 leadership cards (SPEC.md section 9)
- [ ] Card 1: Faculty President — includes Sports Director note, 2000+ students, 2022–2026
- [ ] Card 2: NACOS President — all achievements 2022–2026, including first-ever Katsina state-wide Hackathon with 4 tech hub partners and 6 universities
- [ ] Card 3: Huawei ICT Team Leader — National Finals Jan 29 2025
- [ ] Card 4: Football Team Captain — 2020–2026
- [ ] Card 5: Si14 Brand Ambassador — 2025 (Si14 produced jersey; Rilz Smith sponsored 40% of costs)
- [ ] Each card: top cyan gradient line, year badge, → achievement bullets
- [ ] Commit: `git commit -m "feat: leadership section"`

---

## PHASE 9 — Education & Experience Section
- [ ] Create `Education.jsx` + `Education.module.css`
- [ ] Background: `--bg-secondary`
- [ ] 2-column timeline grid
- [ ] Education column header: `// education` (cyan, JetBrains Mono)
- [ ] Experience column header: `// experience` (blue, JetBrains Mono)
- [ ] Education: cyan dot markers
- [ ] Experience: blue dot markers
- [ ] FUDMA degree: 2022–2026, includes CGPA line "Awaiting final results — In Sha Allah"
- [ ] All 3 education items + 3 experience items (SPEC.md section 10)
- [ ] Stack single column on mobile (Education above Experience)
- [ ] Commit: `git commit -m "feat: education section"`

---

## PHASE 10 — Certifications Section  ← NEW SECTION
- [ ] Create `Certifications.jsx` + `Certifications.module.css`
- [ ] Background: `--bg-primary`
- [ ] Section eyebrow: "VERIFIED LEARNING"
- [ ] H2: "Certifications"
- [ ] Subtitle: "Continuous learning — verified."
- [ ] All 8 certifications from SPEC.md section 11
- [ ] Each cert card: name (bold) / issuer / date / skills (muted) / credential link (if available)
- [ ] Credential links open in new tab
- [ ] Verified badge icon (✓) on each card in cyan
- [ ] Group the 7 LinkedIn/Microsoft certs visually (they share Jun 2025 date)
- [ ] HTML cert listed separately
- [ ] Commit: `git commit -m "feat: certifications section"`

---

## PHASE 11 — Interests Section
- [ ] Create `Interests.jsx` + `Interests.module.css`
- [ ] Background: `--bg-secondary`
- [ ] 6 interest cards in auto-fit grid (SPEC.md section 12)
- [ ] Robotics card: purple border, "expanding soon" badge
- [ ] Hover lift animation
- [ ] Commit: `git commit -m "feat: interests section"`

---

## PHASE 12 — Contact Section
- [ ] Create `Contact.jsx` + `Contact.module.css`
- [ ] Background: `--bg-primary`
- [ ] 2-column layout (info left, form right)
- [ ] BOTH email addresses shown as contact cards
- [ ] Phone, LinkedIn, GitHub contact cards
- [ ] Social links row: Twitter / Instagram / Tech Instagram / Facebook
- [ ] Contact form: Name / Email / Subject / Message / Submit
- [ ] Submit opens mailto:techiemuaishaq@gmail.com
- [ ] Stack single column on mobile
- [ ] Commit: `git commit -m "feat: contact section"`

---

## PHASE 13 — Profile Card Component  ← REBUILD FROM EXISTING
- [ ] Create `ProfileCard.jsx` + `ProfileCard.module.css`
- [ ] Reference `existing/profile-card/index.html` and `style.css` for original structure
- [ ] Completely replace old light/red theme with new dark-futuristic design
- [ ] Photo: `public/img/profile.jpg` (circular, cyan border ring)
- [ ] Name: Muhammed Ishaq
- [ ] Title: AI Engineer & Full-Stack Developer (updated from old "Front-End Developer & Forex Trader")
- [ ] Bio: "Building intelligent systems and scalable web apps. CS Graduate · FUDMA · Keffi, Nigeria"
- [ ] Socials: LinkedIn / Instagram / Twitter/X / GitHub (all 4 — old card only had 3)
- [ ] Buttons: "See My Work" / "Hire Me" / "Download CV" (same 3 as old card — updated links)
  - "See My Work" → `/#projects`
  - "Hire Me" → `/#contact`
  - "Download CV" → `/cv/Muhammed_Ishaq_CV.pdf` (download attribute)
- [ ] Card also accessible as standalone route `/card` via React Router
- [ ] Commit: `git commit -m "feat: profile card component"`

---

## PHASE 14 — Footer
- [ ] Create `Footer.jsx` + `Footer.module.css`
- [ ] Left: `muaishaq.dev · Built by Muhammed Ishaq · © 2026`
- [ ] Right: `Designed & coded with purpose · GitHub (linked)`
- [ ] Border-top: subtle cyan
- [ ] Stack + center-align on mobile
- [ ] Commit: `git commit -m "feat: footer"`

---

## PHASE 15 — App.jsx Assembly
- [ ] Import all components in correct section order
- [ ] Add React Router for `/card` route (ProfileCard standalone)
- [ ] Confirm all sections render without errors
- [ ] Confirm scroll-to-section works for all nav links
- [ ] Confirm no broken images
- [ ] Commit: `git commit -m "feat: full page assembly"`

---

## PHASE 16 — QA & Polish
- [ ] Test 375px / 768px / 1280px / 1920px viewports
- [ ] Confirm all animations work + disabled with `prefers-reduced-motion`
- [ ] Confirm skill bars animate on scroll
- [ ] Confirm hamburger opens/closes correctly
- [ ] Confirm active nav link highlights on scroll
- [ ] Confirm all external links open in new tab
- [ ] Confirm form opens mailto on submit
- [ ] Confirm CV downloads correctly from `/cv/Muhammed_Ishaq_CV.pdf`
- [ ] Confirm profile photo loads (NOT a placeholder)
- [ ] Confirm `/card` route renders ProfileCard standalone
- [ ] Check for console errors
- [ ] Add `loading="lazy"` to images

---

## PHASE 17 — Build & Deploy
- [ ] `npm run build` — zero errors, zero warnings
- [ ] `npm run preview` — confirm build works locally
- [ ] Push to GitHub: `muaishaq/portfolio-v2`
- [ ] Connect to Netlify — build: `npm run build`, publish: `dist`
- [ ] First deploy — confirm site is live at muaishaq.netlify.app
- [ ] Confirm SPA routing works (no 404 on `/card` refresh)
- [ ] Final commit: `git commit -m "chore: production ready v2"`

---

## PHASE 18 — Lighthouse & Final Report
- [ ] Run Lighthouse: Performance 90+ / Accessibility 90+ / Best Practices 90+
- [ ] Report any SPEC.md items that could not be completed and why
- [ ] Notify owner: site is live. Remind to:
      1. Update individual GitHub repo links in Projects section when repos are created
      2. Update CGPA in Education section when final results are released
      3. Update degree end date if needed (currently 2026)

---

## KNOWN GAPS

| Item | Status | Agent Action |
|------|--------|--------------|
| Profile photo | ✅ Exists in `existing/` | Copy to `public/img/profile.jpg` |
| CV PDF | ✅ Exists in `existing/` | Copy to `public/cv/Muhammed_Ishaq_CV.pdf` |
| CGPA | Pending results | Show "Awaiting final results — In Sha Allah" |
| Individual GitHub repo links | Not yet created | Use `github.com/muaishaq` for now |
| Project .mp4 videos | Skip | Use cards + GitHub links only |
| Custom domain | Not yet | Use muaishaq.netlify.app |
