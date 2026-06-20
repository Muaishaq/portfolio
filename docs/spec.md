# SPEC.md — Muaishaq Portfolio v2
# Full Design & Content Specification
# Last updated: June 2026

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| Full Name | Muhammed Ishaq (Muaishaq) |
| Primary Title | AI Engineer & Full-Stack Developer & Computer Scientist |
| Tagline | "Code. Build. Elevate." |
| DOB | 29 January 2005 |
| Location | Keffi, Nigeria |
| Email (main) | techiemuaishaq@gmail.com |
| Email (alt) | muhammedishaqjamb20@gmail.com |
| Phone / WhatsApp | +234 806 863 8021 |
| Portfolio URL | muaishaq.netlify.app |
| LinkedIn | linkedin.com/in/muaishaq |
| GitHub | github.com/muaishaq |
| Instagram (personal) | instagram.com/muaishaq |
| Instagram (tech) | instagram.com/techie_muaisaq |
| Twitter / X | twitter.com/muaishaq |
| Facebook | facebook.com/muaishaq |
| Status | Open to Work — Internships, Freelance, AI Training Roles |

---

## 2. Design System

### 2.1 Color Tokens
```css
--bg-primary:     #080b12;
--bg-secondary:   #0d1120;
--bg-card:        #0f1623;
--bg-card-hover:  #141d2e;
--neon-cyan:      #00f5c4;
--neon-blue:      #00c4f5;
--neon-purple:    #7b5cf0;
--text-primary:   #e8edf5;
--text-muted:     #6b7a99;
--border-subtle:  rgba(0,245,196,0.12);
--border-active:  rgba(0,245,196,0.28);
```

### 2.2 Typography
- Display/Headings: Space Grotesk, 600–700
- Body: Space Grotesk, 400, line-height 1.75
- Code/Labels/Tags/Mono: JetBrains Mono, 400–500
- Base: 16px

### 2.3 Signature Visual
Hero grid-dot background: CSS `background-image` repeating dots at 40px intervals using `rgba(0,245,196,0.04)`, masked with radial gradient fading toward edges.

### 2.4 Animations
- Page load: fade-up stagger on hero elements (0.1s delays, 0.6s duration)
- Scroll-triggered: fade-up via IntersectionObserver
- Skill bars: animate 0 → final % on scroll into view
- Card hover: `translateY(-4px)` + border lightens, 200ms ease
- Hero badge dot: opacity pulse 2s infinite
- All animations: respect `prefers-reduced-motion: reduce`

---

## 3. Site Sections (in order)

1. `<nav>` Fixed navigation
2. `#home` Hero
3. `#about` About Me
4. `#skills` Skills & Tech Stack
5. `#projects` Projects
6. `#leadership` Leadership & Impact
7. `#education` Education & Experience
8. `#certifications` Certifications
9. `#interests` Interests & Passions
10. `#contact` Contact
11. `<footer>` Footer

---

## 4. Navigation

### Desktop (≥900px)
- Logo left: `muaishaq.dev` in JetBrains Mono, cyan
- Links: About / Skills / Projects / Leadership / Education / Certifications / Contact
- CTA right: "Hire Me" outlined cyan button → `#contact`
- Fixed, `backdrop-filter: blur(20px)`, bottom border, height 64px
- Active section link highlights cyan on scroll

### Mobile (<900px)
- Logo only + hamburger icon
- Fullscreen overlay: dark bg, centered links stacked, ✕ close button

---

## 5. Hero Section

```
[pill badge]  ● Available for Opportunities

[H1]
Muhammed
Ishaq

[subtitle — JetBrains Mono]
AI Engineer  /  Full-Stack Developer  /  Computer Scientist

[body]
I build intelligent systems and scalable web applications.
From training neural networks to shipping production-ready
full-stack platforms — I turn complex problems into clean,
working solutions.

[buttons]
"View My Work"  →  #projects  (filled cyan)
"Let's Talk"    →  #contact   (outlined)

[stats]
3+   Years Building
6+   Projects Shipped
2×   Student President
1st  Class CS Graduate
```

---

## 6. About Section

### Layout: 2-column (image left, text right). Mobile: stack.

### Image
- Use REAL photo: `public/img/profile.jpg` (copied from existing files)
- Corner accent brackets (cyan CSS borders top-left / bottom-right)
- Badge bottom-right: "🎓 CS Graduate 2026"

### Text
```
[eyebrow]  WHO I AM
[H2]  Building the future, one system at a time

I'm Muhammed Ishaq — a Computer Science graduate from the Federal
University Dutsin-Ma (FUDMA), Nigeria, with a deep focus on AI
engineering and full-stack development. I designed and built
TechTrust, an AI-powered developer credential verification platform
integrating a MindSpore MLP neural network with GitHub API data —
developed as Team Leader during the Huawei ICT Academy Innovation
Competition, where our team reached the National Finals on
January 29, 2026.

Beyond code, I served as President of both my Faculty of Computing
and the NACOS FUDMA Chapter — leading 2,000+ students, organizing
national-level hackathons, launching clubs, and driving a culture
of practical tech excellence. Before my presidency I also served as
Sports Director for the Faculty of Computing.

I am currently exploring the intersection of AI, robotics, and
full-stack systems — and actively seeking internship and online
freelance opportunities where I can contribute and grow fast.

[meta grid — 2 cols]
Location:       Keffi, Nigeria
Email:          techiemuaishaq@gmail.com
Status:         ✦ Open to Work  (cyan)
Phone:          +234 806 863 8021
Degree:         B.Sc. Computer Science, FUDMA
Tech Instagram: @techie_muaisaq
```

---

## 7. Skills Section

### 6 Cards in responsive grid

```
Card 1 — AI & Machine Learning           Bar: 82%
Tags: MindSpore | MLP Neural Nets | Python | AI Engineering

Card 2 — Back-End Development            Bar: 80%
Tags: Node.js | Express.js | MongoDB | REST APIs | GitHub API

Card 3 — Front-End Development           Bar: 90%
Tags: HTML5 | CSS3 | JavaScript | React | Bootstrap | Tailwind CSS | TypeScript

Card 4 — Data & Analysis                 Bar: 75%
Tags: Data Mining | Outlier Analysis | Simulation | Cloud Computing

Card 5 — Security & Systems              Bar: 72%
Tags: Cybersecurity | Systems Analysis | Git & GitHub | Agile

Card 6 — Forex Trading                   Bar: 85%
Tags: Technical Analysis | Risk Management | Forex Markets
```

Tag colors: cyan (default) / purple (AI tags) / blue (DB/API) / gray (tools)
Skill bars: start at 0, animate to % on scroll-into-view.

---

## 8. Projects Section

### Featured (full width, 2-col internal): TechTrust
```
Badge: ★ Flagship Project
Icon: 🛡️
Title: TechTrust — AI Developer Credential Verification
Description:
An AI-powered platform that verifies developer credentials and
matches them with recruiters. Built as Team Leader during the
Huawei ICT Academy Innovation Competition (National Finals,
Jan 29, 2025) and submitted as final year project at FUDMA under
Dr. Umar Ilaysu. Integrates a MindSpore MLP neural network with
GitHub API to assess developer skill authenticity. Looking forward
to expanding and improving TechTrust further.
Stack: Node.js | MongoDB | MindSpore MLP | GitHub API | Express.js
Link: github.com/muaishaq
Label: Final Year Project · 2025
Right panel: ASCII architecture diagram (JetBrains Mono)
```

### Regular Cards (auto-fit grid)
```
2. Muaishaq Forex Academy — forex education web platform
   Stack: HTML | CSS | JavaScript  · 2024

3. FUDMA Student Portal Clone — UX redesign + improved responsiveness
   Stack: HTML | CSS | JavaScript  · 2024

4. Football Quiz App — interactive quiz, timed rounds, leaderboard
   Stack: JavaScript | HTML | CSS  · SIWES 2025

5. To-Do List App — local storage, priority tags, animations
   Stack: JavaScript | CSS3 | LocalStorage  · SIWES 2025

6. Background Color Generator — dynamic DOM color tool
   Stack: HTML | CSS | JavaScript  · SIWES 2025
```

NOTE: Do NOT embed .mp4 video files. Use project cards with GitHub links only.

---

## 9. Leadership Section

### 4 Cards (responsive grid). Each: top cyan gradient line, year badge, title, org, achievements with → bullets.

```
Card 1: President, Faculty of Computing  |  FUDMA  |  2025–2026
→ Represented 2,000+ students in faculty governance
→ Organized inter-departmental tech events and seminars
→ Bridged communication between students and faculty management
→ Previously served as Sports Director before ascending to President

Card 2: President, NACOS FUDMA Chapter  |  NACOS  |  2025–2026
→ Organized NACOS FUDMA General Congress 2026 — "Beyond Theory"
→ Launched Tech Guild and Tech Lite clubs for student developers
→ Organized the first-ever state-wide Hackathon in Katsina State — 4-Stage competition, ₦4.5M+ budget
→ Partnered with 4 tech hubs: Lumilab Innovation Hub, Kirkira Innovation Hub (GRA), Kebram Tech, Katsina State Directorate of ICT
→ Invited 6 universities: Umar Musa Yar'adua University, Federal College of Education Katsina, Hassan Usman Katsina Polytechnic, Al-Qalam University Katsina, Isah Kaita College of Education, Katsina State Institute of Technology and Management
→ Formalized partnerships between NACOS FUDMA and all participating tech hubs after outreach visits
→ Unveiled the first-ever NACOS FUDMA official jersey — produced by Si14, with 40% production cost sponsored by Rilz Smith
→ Constitutionally amended Tech Guild and faculty wear directives

Card 3: Team Leader — Huawei ICT Innovation Competition  |  Huawei ICT Academy  |  2025-2026
→ Led FUDMA team in the Huawei ICT Academy Innovation Competition
→ Progressed to the National Finals held on January 29, 2026
→ TechTrust was developed as the team's flagship innovation submission

Card 4: Football Team Captain  |  FUDMA Departmental Team  |  2025
→ Captained departmental football team from first year through graduation
→ Led team strategy, morale, and competition representation for 5+ years

Card 5: Brand Ambassador  |  Si14  |  2026
→ Selected as Brand Ambassador for Si14 — the brand that produced the first-ever NACOS FUDMA official jersey
→ Rilz Smith (solar company) sponsored 40% of jersey production costs
```

---

## 10. Education & Experience Section

### Layout: 2-column timeline. Cyan dots for Education, blue dots for Experience.

### Education
```
2022 – 2026
B.Sc. Computer Science
Federal University Dutsin-Ma (FUDMA), Katsina State
Coursework: Software Development · Data Structures & Algorithms ·
AI/ML · Cloud Computing · Cybersecurity · Systems Analysis ·
Data Mining · Simulation & Modelling
CGPA: Awaiting final results (In Sha Allah)

2024 – 2025
HTML Certification
Online Assessment Platform

2015 – 2020
Secondary School Certificate (WAEC/NECO)
Command Secondary School
Focus: Science & Mathematics
```

### Experience
```
2023 – Present
Freelance Web Developer  |  Self-Employed
Building responsive custom websites using HTML, CSS, JS, Node.js.

2025
SIWES Industrial Attachment
Built 3 mini-projects. Major perspective shift in dev approach.

2022 – 2025
University Web Development Project Lead  |  FUDMA
Group Leader — coordinated team deliverables and architecture.
```

---

## 11. Certifications Section

Display as a clean card grid or list. Each item: cert name (bold), issuer, date, skills (muted).

```
1. Career Essentials in Generative AI
   Microsoft & LinkedIn · Jun 2025
   Skills: Prompt Engineering
   Credential: linkedin.com/learning/certificates/54fcc425...

2. Generative AI: The Evolution of Thoughtful Online Search
   LinkedIn · Jun 2025
   Skills: Search Engine Technology
   Credential: linkedin.com/learning/certificates/e6d94b99...

3. Introduction to Artificial Intelligence
   LinkedIn · Jun 2025

4. Ethics in the Age of Generative AI
   LinkedIn · Jun 2025
   Skills: Computer Ethics · Responsible AI
   Credential: linkedin.com/learning/certificates/843b0b0e...

5. Learning Microsoft 365 Copilot for Work
   LinkedIn · Jun 2025
   Skills: Office 365
   Credential: linkedin.com/learning/certificates/657adfd9...

6. Streamlining Your Work with Microsoft Copilot
   LinkedIn · Jun 2025
   Skills: AI for Business · Microsoft Copilot
   Credential: linkedin.com/learning/certificates/fe7d0b56...

7. What Is Generative AI?
   LinkedIn · Jun 2025
   Skills: Generative AI Tools · Artificial Intelligence
   Credential: linkedin.com/learning/certificates/5113905c...

8. HTML Certification
   Online Assessment Platform · 2024–2025
```

Each cert card: show credential link if available (opens in new tab). Verified badge icon on each.

---

## 12. Interests Section

### 6 Cards
```
🤖 AI Engineering      — intelligent systems, real-world problems
🌐 Full-Stack Dev      — end-to-end platforms, DB to front-end
⚙️ Robotics           — hardware + sensors + intelligent software
                         [badge: "expanding soon" — purple tint]
💹 Forex Trading      — technical analysis, global markets
📱 Content Creation   — sharing tech journey across social platforms
⚽ Football           — 5-year team captain, leadership on the pitch
```

Robotics card: purple border accent, "expanding soon" purple badge.

---

## 13. Contact Section

### Layout: 2-column (info left, form right). Mobile: stack.

### Left
```
Intro:
I'm actively looking for internship opportunities, freelance
projects, and AI training work (DataAnnotation, Remotasks).
If you have a role, a project, or just want to connect — I respond fast.

Contact cards (each a clickable link):
✉️  Email (main)      techiemuaishaq@gmail.com
✉️  Email (alt)       muhammedishaqjamb20@gmail.com
📞  Phone/WhatsApp    +234 806 863 8021
💼  LinkedIn          linkedin.com/in/muaishaq
🐙  GitHub            github.com/muaishaq

Social links:
𝕏  twitter.com/muaishaq
📷  instagram.com/muaishaq
📷  instagram.com/techie_muaisaq  (Tech)
👥  facebook.com/muaishaq
```

### Right — Contact Form
```
Fields: Name / Email / Subject / Message
Submit: "Send Message →" (full width, filled cyan)
On submit: open mailto:techiemuaishaq@gmail.com?subject=...&body=...
```

---

## 14. Footer
```
Left:  muaishaq.dev  ·  Built by Muhammed Ishaq  ·  © 2026
Right: Designed & coded with purpose  ·  GitHub (linked)
```

---

## 15. Technical Setup

### Vite + React
```bash
npm create vite@latest muaishaq-portfolio -- --template react
cd muaishaq-portfolio && npm install
```

### File Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Leadership.jsx
    Education.jsx
    Certifications.jsx
    Interests.jsx
    Contact.jsx
    Footer.jsx
    ProfileCard.jsx       ← rebuilt profile card component
  styles/
    global.css
    Navbar.module.css
    Hero.module.css
    About.module.css
    Skills.module.css
    Projects.module.css
    Leadership.module.css
    Education.module.css
    Certifications.module.css
    Interests.module.css
    Contact.module.css
    Footer.module.css
    ProfileCard.module.css
  App.jsx
  main.jsx
public/
  img/
    profile.jpg           ← copy from existing profile card photo
  cv/
    Muhammed_Ishaq_CV.pdf ← copy from existing CV file
netlify.toml
```

### netlify.toml
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### index.html meta tags
```html
<title>Muhammed Ishaq — AI Engineer & Full-Stack Developer</title>
<meta name="description" content="Muhammed Ishaq (Muaishaq) — AI Engineer, Full-Stack Developer & CS Graduate from FUDMA, Nigeria. Builder of TechTrust, Huawei ICT National Finalist, and student community leader."/>
<meta property="og:title" content="Muhammed Ishaq — AI Engineer & Full-Stack Developer"/>
<meta property="og:url" content="https://muaishaq.netlify.app"/>
<meta name="twitter:card" content="summary_large_image"/>
```

### Google Fonts (in index.html)
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
```

---

## 16. Profile Card Component (ProfileCard.jsx)

The old profile card (`existing/profile-card/`) must be rebuilt as a React component matching the new dark-futuristic design system. Completely replace the old light/red theme.

### Layout & Content
```
[profile photo — circular, 120px, from public/img/profile.jpg]
[name]    Muhammed Ishaq
[title]   AI Engineer & Full-Stack Developer
[bio]     Building intelligent systems and scalable web apps.
          CS Graduate · FUDMA · Keffi, Nigeria
[socials row]  LinkedIn  |  Instagram  |  Twitter/X  |  GitHub
[buttons]
  "See My Work"   → links to portfolio #projects
  "Hire Me"       → links to portfolio #contact
  "Download CV"   → links to /cv/Muhammed_Ishaq_CV.pdf (download)
```

### Design
- Dark card: background `--bg-card`, border `--border-subtle`, border-radius 16px
- Photo: cyan border ring (2px, `--neon-cyan`)
- Name: `--text-primary`, Space Grotesk 700
- Title: `--neon-cyan`, JetBrains Mono
- Bio: `--text-muted`
- Social links: muted → cyan on hover
- Buttons: match site button styles (filled primary + outlined)
- Card should also work as a standalone page at route `/card`

---

## 17. Content Gaps — Status

| Item | Status | Action |
|------|--------|--------|
| Profile photo | ✅ EXISTS | Copy from `existing/profile-card/Profile Picture/` |
| CV PDF | ✅ EXISTS | Copy from `existing/cv/Muhammed_Ishaq_CV.pdf` |
| Project videos (.mp4) | EXISTS but skip | Use project cards + GitHub links only |
| CGPA | Pending results | Show "Awaiting final results — In Sha Allah" |
| Custom domain | Not yet | Use muaishaq.netlify.app for now |
| GitHub project links | Profile-level only | Owner to update individual repo links later |
