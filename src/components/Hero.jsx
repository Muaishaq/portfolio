import styles from './Hero.module.css';

// Hero component - Main landing section with animations
// Features: grid-dot background, blurred orbs, pill badge, name, subtitle, stats, CTAs
const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background effects */}
      <div className={styles.background}>
        <div className={styles.gridDots}></div>
        <div className={styles.orbCyan}></div>
        <div className={styles.orbPurple}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        {/* Pill badge with pulsing dot */}
        <div className={styles.badge}>
          <span className={styles.pulsingDot}></span>
          Available for Opportunities
        </div>

        {/* Name with cyan glow on "Ishaq" */}
        <h1 className={styles.name}>
          <span className={styles.firstName}>Muhammed</span>
          <span className={styles.lastName}>Ishaq</span>
        </h1>

        {/* Subtitle in JetBrains Mono */}
        <p className={styles.subtitle}>
          AI Engineer / Full-Stack Developer / Computer Scientist
        </p>

        {/* Body paragraph */}
        <p className={styles.description}>
          I build intelligent systems and scalable web applications.
          From training neural networks to shipping production-ready
          full-stack platforms — I turn complex problems into clean,
          working solutions.
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryButton}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Let's Talk
          </a>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Years Building</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6+</span>
            <span className={styles.statLabel}>Projects Shipped</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2×</span>
            <span className={styles.statLabel}>Student President</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1st</span>
            <span className={styles.statLabel}>Class CS Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
