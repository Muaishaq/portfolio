import styles from './Education.module.css';

// Education & Experience component - 2-column timeline with cyan/blue dots
// Features: JetBrains Mono headers, color-coded markers, responsive layout
const Education = () => {
  // Education data from SPEC.md section 10
  const education = [
    {
      year: '2022 – 2026',
      title: 'B.Sc. Computer Science',
      institution: 'Federal University Dutsin-Ma (FUDMA), Katsina State',
      details: 'Coursework: Software Development · Data Structures & Algorithms · AI/ML · Cloud Computing · Cybersecurity · Systems Analysis · Data Mining · Simulation & Modelling',
      cgpa: 'Awaiting final results (In Sha Allah)',
    },
    {
      year: '2024 – 2025',
      title: 'HTML Certification',
      institution: 'Online Assessment Platform',
      details: 'Completed online assessment and earned certification in HTML.',
    },
    {
      year: '2015 – 2020',
      title: 'Secondary School Certificate (WAEC/NECO)',
      institution: 'Command Secondary School',
      details: 'Focus: Science & Mathematics',
    },
  ];

  // Experience data from SPEC.md section 10
  const experience = [
    {
      year: '2023 – Present',
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      details: 'Building responsive custom websites using HTML, CSS, JS, Node.js.',
    },
    {
      year: '2025',
      title: 'SIWES Industrial Attachment',
      organization: 'Student Industrial Work Experience Scheme',
      details: 'Built 3 mini-projects. Major perspective shift in dev approach.',
    },
    {
      year: '2022 – 2025',
      title: 'University Web Development Project Lead',
      organization: 'FUDMA',
      details: 'Group Leader — coordinated team deliverables and architecture.',
    },
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>MY JOURNEY</span>
          <h2 className={styles.title}>Education & Experience</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 2-column timeline grid */}
        <div className={styles.timelineGrid}>
          {/* Education column */}
          <div className={styles.column}>
            <h3 className={`${styles.columnHeader} ${styles.educationHeader}`}>
              // education
            </h3>
            <div className={styles.timeline}>
              {education.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={`${styles.marker} ${styles.educationMarker}`}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.year}>{item.year}</div>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <div className={styles.institution}>{item.institution}</div>
                    <p className={styles.details}>{item.details}</p>
                    {item.cgpa && <div className={styles.cgpa}>{item.cgpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div className={styles.column}>
            <h3 className={`${styles.columnHeader} ${styles.experienceHeader}`}>
              // experience
            </h3>
            <div className={styles.timeline}>
              {experience.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={`${styles.marker} ${styles.experienceMarker}`}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.year}>{item.year}</div>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <div className={styles.organization}>{item.organization}</div>
                    <p className={styles.details}>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
