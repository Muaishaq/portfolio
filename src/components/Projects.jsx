import styles from './Projects.module.css';

// Projects component - Featured TechTrust + 5 regular project cards
// Features: ASCII architecture diagram, responsive grid, external links
const Projects = () => {
  // Featured project: TechTrust
  const featuredProject = {
    badge: '★ Flagship Project',
    icon: '🛡️',
    title: 'TechTrust — AI Developer Credential Verification',
    description: `An AI-powered platform that verifies developer credentials and matches them with recruiters. Built as Team Leader during the Huawei ICT Academy Innovation Competition (National Finals, Jan 29, 2025) and submitted as final year project at FUDMA under Dr. Umar Ilaysu. Integrates a MindSpore MLP neural network with GitHub API to assess developer skill authenticity. Looking forward to expanding and improving TechTrust further.`,
    stack: 'Node.js | MongoDB | MindSpore MLP | GitHub API | Express.js',
    link: 'https://github.com/muaishaq',
    label: 'Final Year Project · 2025',
    architecture: `
┌─────────────────────────────────────────┐
│           TechTrust Architecture        │
├─────────────────────────────────────────┤
│  ┌─────────────┐    ┌──────────────┐   │
│  │   GitHub    │    │  MindSpore   │   │
│  │     API     │───▶│     MLP      │   │
│  └─────────────┘    └──────────────┘   │
│         │                  │           │
│         ▼                  ▼           │
│  ┌──────────────────────────────┐     │
│  │     Credential Verification   │     │
│  │         Engine (Node.js)      │     │
│  └──────────────────────────────┘     │
│                  │                     │
│                  ▼                     │
│  ┌──────────────────────────────┐     │
│  │        MongoDB Database      │     │
│  └──────────────────────────────┘     │
└─────────────────────────────────────────┘
    `,
  };

  // Regular projects from SPEC.md section 8
  const regularProjects = [
    {
      title: 'Muaishaq Forex Academy',
      description: 'Forex education web platform',
      stack: 'HTML | CSS | JavaScript',
      year: '2024',
      link: 'https://github.com/muaishaq',
    },
    {
      title: 'FUDMA Student Portal Clone',
      description: 'UX redesign + improved responsiveness',
      stack: 'HTML | CSS | JavaScript',
      year: '2024',
      link: 'https://github.com/muaishaq',
    },
    {
      title: 'Football Quiz App',
      description: 'Interactive quiz, timed rounds, leaderboard',
      stack: 'JavaScript | HTML | CSS',
      year: 'SIWES 2025',
      link: 'https://github.com/muaishaq',
    },
    {
      title: 'To-Do List App',
      description: 'Local storage, priority tags, animations',
      stack: 'JavaScript | CSS3 | LocalStorage',
      year: 'SIWES 2025',
      link: 'https://github.com/muaishaq',
    },
    {
      title: 'Background Color Generator',
      description: 'Dynamic DOM color tool',
      stack: 'HTML | CSS | JavaScript',
      year: 'SIWES 2025',
      link: 'https://github.com/muaishaq',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>MY WORK</span>
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.divider}></div>
        </div>

        {/* Featured TechTrust card - full width, 2-col layout */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredContent}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>{featuredProject.icon}</span>
              {featuredProject.badge}
            </div>

            {/* Title */}
            <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>

            {/* Description */}
            <p className={styles.featuredDescription}>{featuredProject.description}</p>

            {/* Stack */}
            <div className={styles.stack}>
              <span className={styles.stackLabel}>Stack:</span>
              <span className={styles.stackValue}>{featuredProject.stack}</span>
            </div>

            {/* Label */}
            <div className={styles.label}>{featuredProject.label}</div>

            {/* GitHub link */}
            <a
              href={featuredProject.link}
              className={styles.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* ASCII architecture diagram - hides on mobile */}
          <div className={styles.architecturePanel}>
            <pre className={styles.architecture}>{featuredProject.architecture}</pre>
          </div>
        </div>

        {/* Regular project cards - auto-fit grid */}
        <div className={styles.grid}>
          {regularProjects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Year badge */}
                <div className={styles.yearBadge}>{project.year}</div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{project.title}</h3>

                {/* Description */}
                <p className={styles.cardDescription}>{project.description}</p>

                {/* Stack */}
                <div className={styles.cardStack}>{project.stack}</div>

                {/* GitHub link */}
                <a
                  href={project.link}
                  className={styles.cardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
