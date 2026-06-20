import styles from './Certifications.module.css';

// Certifications component - 8 certification cards with verified badges
// Features: credential links, verified badges, grouped LinkedIn/Microsoft certs
const Certifications = () => {
  // Certifications data from SPEC.md section 11
  const certifications = [
    {
      name: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      date: 'Jun 2025',
      skills: 'Prompt Engineering',
      credential: 'https://linkedin.com/learning/certificates/54fcc425...',
    },
    {
      name: 'Generative AI: The Evolution of Thoughtful Online Search',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'Search Engine Technology',
      credential: 'https://linkedin.com/learning/certificates/e6d94b99...',
    },
    {
      name: 'Introduction to Artificial Intelligence',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'AI Fundamentals',
    },
    {
      name: 'Ethics in the Age of Generative AI',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'Computer Ethics · Responsible AI',
      credential: 'https://linkedin.com/learning/certificates/843b0b0e...',
    },
    {
      name: 'Learning Microsoft 365 Copilot for Work',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'Office 365',
      credential: 'https://linkedin.com/learning/certificates/657adfd9...',
    },
    {
      name: 'Streamlining Your Work with Microsoft Copilot',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'AI for Business · Microsoft Copilot',
      credential: 'https://linkedin.com/learning/certificates/fe7d0b56...',
    },
    {
      name: 'What Is Generative AI?',
      issuer: 'LinkedIn',
      date: 'Jun 2025',
      skills: 'Generative AI Tools · Artificial Intelligence',
      credential: 'https://linkedin.com/learning/certificates/5113905c...',
    },
    {
      name: 'HTML Certification',
      issuer: 'Online Assessment Platform',
      date: '2024–2025',
      skills: 'HTML5 · Web Development',
    },
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>VERIFIED LEARNING</span>
          <h2 className={styles.title}>Certifications</h2>
          <p className={styles.subtitle}>Continuous learning — verified.</p>
          <div className={styles.divider}></div>
        </div>

        {/* Certification cards grid */}
        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.card}>
              {/* Verified badge */}
              <div className={styles.verifiedBadge}>✓</div>

              {/* Certification name */}
              <h3 className={styles.certName}>{cert.name}</h3>

              {/* Issuer */}
              <div className={styles.issuer}>{cert.issuer}</div>

              {/* Date */}
              <div className={styles.date}>{cert.date}</div>

              {/* Skills */}
              <div className={styles.skills}>{cert.skills}</div>

              {/* Credential link if available */}
              {cert.credential && (
                <a
                  href={cert.credential}
                  className={styles.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
