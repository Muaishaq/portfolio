import styles from './Leadership.module.css';

// Leadership component - 5 leadership cards with achievements
// Features: cyan gradient lines, year badges, achievement bullets
const Leadership = () => {
  // Leadership data from SPEC.md section 9
  const leadershipRoles = [
    {
      title: 'President, Faculty of Computing',
      organization: 'FUDMA',
      year: '2025–2026',
      achievements: [
        'Represented 2,000+ students in faculty governance',
        'Organized inter-departmental tech events and seminars',
        'Bridged communication between students and faculty management',
        'Previously served as Sports Director before ascending to President',
      ],
    },
    {
      title: 'President, NACOS FUDMA Chapter',
      organization: 'NACOS',
      year: '2025–2026',
      achievements: [
        'Organized NACOS FUDMA General Congress 2026 — "Beyond Theory"',
        'Launched Tech Guild and Tech Lite clubs for student developers',
        'Organized the first-ever state-wide Hackathon in Katsina State — 4-Stage competition, ₦4.5M+ budget',
        'Partnered with 4 tech hubs: Lumilab Innovation Hub, Kirkira Innovation Hub (GRA), Kebram Tech, Katsina State Directorate of ICT',
        'Invited 6 universities: Umar Musa Yar\'adua University, Federal College of Education Katsina, Hassan Usman Katsina Polytechnic, Al-Qalam University Katsina, Isah Kaita College of Education, Katsina State Institute of Technology and Management',
        'Formalized partnerships between NACOS FUDMA and all participating tech hubs after outreach visits',
        'Unveiled the first-ever NACOS FUDMA official jersey — produced by Si14, with 40% production cost sponsored by Rilz Smith',
        'Constitutionally amended Tech Guild and faculty wear directives',
      ],
    },
    {
      title: 'Team Leader — Huawei ICT Innovation Competition',
      organization: 'Huawei ICT Academy',
      year: '2025-2026',
      achievements: [
        'Led FUDMA team in the Huawei ICT Academy Innovation Competition',
        'Progressed to the National Finals held on January 29, 2026',
        'TechTrust was developed as the team\'s flagship innovation submission',
      ],
    },
    {
      title: 'Football Team Captain',
      organization: 'FUDMA Departmental Team',
      year: '2025',
      achievements: [
        'Captained departmental football team from first year through graduation',
        'Led team strategy, morale, and competition representation for 5+ years',
      ],
    },
    {
      title: 'Brand Ambassador',
      organization: 'Si14',
      year: '2026',
      achievements: [
        'Selected as Brand Ambassador for Si14 — the brand that produced the first-ever NACOS FUDMA official jersey',
        'Rilz Smith (solar company) sponsored 40% of jersey production costs',
      ],
    },
  ];

  return (
    <section id="leadership" className={styles.leadership}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>IMPACT & LEADERSHIP</span>
          <h2 className={styles.title}>Leadership & Impact</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 5 leadership cards in responsive grid */}
        <div className={styles.grid}>
          {leadershipRoles.map((role, index) => (
            <div key={index} className={styles.card}>
              {/* Top cyan gradient line */}
              <div className={styles.gradientLine}></div>

              {/* Year badge */}
              <div className={styles.yearBadge}>{role.year}</div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{role.title}</h3>

              {/* Organization */}
              <div className={styles.organization}>{role.organization}</div>

              {/* Achievement bullets */}
              <ul className={styles.achievements}>
                {role.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className={styles.achievement}>
                    <span className={styles.bullet}>→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
