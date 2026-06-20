import styles from './Interests.module.css';

// Interests component - 6 interest cards with hover animations
// Features: purple border for Robotics, "expanding soon" badge
const Interests = () => {
  // Interests data from SPEC.md section 12
  const interests = [
    {
      icon: '🤖',
      title: 'AI Engineering',
      description: 'intelligent systems, real-world problems',
    },
    {
      icon: '🌐',
      title: 'Full-Stack Dev',
      description: 'end-to-end platforms, DB to front-end',
    },
    {
      icon: '⚙️',
      title: 'Robotics',
      description: 'hardware + sensors + intelligent software',
      badge: 'expanding soon',
      purple: true,
    },
    {
      icon: '💹',
      title: 'Forex Trading',
      description: 'technical analysis, global markets',
    },
    {
      icon: '📱',
      title: 'Content Creation',
      description: 'sharing tech journey across social platforms',
    },
    {
      icon: '⚽',
      title: 'Football',
      description: '5-year team captain, leadership on the pitch',
    },
  ];

  return (
    <section id="interests" className={styles.interests}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>BEYOND CODE</span>
          <h2 className={styles.title}>Interests & Passions</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 6 interest cards in auto-fit grid */}
        <div className={styles.grid}>
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`${styles.card} ${interest.purple ? styles.purpleCard : ''}`}
            >
              {/* Icon */}
              <div className={styles.icon}>{interest.icon}</div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{interest.title}</h3>

              {/* Description */}
              <p className={styles.description}>{interest.description}</p>

              {/* Badge if present */}
              {interest.badge && (
                <div className={styles.badge}>{interest.badge}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
