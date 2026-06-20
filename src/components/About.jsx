import { useState } from 'react';
import styles from './About.module.css';

// About component - Personal information with profile photo
// Features: 2-column layout, real photo, corner accents, meta grid
const About = () => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading error - fallback to initials
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHO I AM</span>
          <h2 className={styles.title}>Building the future, one system at a time</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 2-column grid: image left, text right */}
        <div className={styles.content}>
          {/* Image with corner accents */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              {!imageError ? (
                <img
                  src="/img/profile.jpg"
                  alt="Muhammed Ishaq"
                  className={styles.profileImage}
                  onError={handleImageError}
                />
              ) : (
                <div className={styles.fallback}>
                  <span className={styles.initials}>MI</span>
                </div>
              )}
              
              {/* Corner accent brackets */}
              <div className={styles.cornerTopLeft}></div>
              <div className={styles.cornerBottomRight}></div>
              
              {/* Badge */}
              <div className={styles.badge}>🎓 CS Graduate 2026</div>
            </div>
          </div>

          {/* Text content */}
          <div className={styles.textContent}>
            {/* Body paragraphs from SPEC.md section 6 */}
            <p className={styles.paragraph}>
              I'm Muhammed Ishaq — a Computer Science graduate from the Federal
              University Dutsin-Ma (FUDMA), Nigeria, with a deep focus on AI
              engineering and full-stack development. I designed and built
              TechTrust, an AI-powered developer credential verification platform
              integrating a MindSpore MLP neural network with GitHub API data —
              developed as Team Leader during the Huawei ICT Academy Innovation
              Competition, where our team reached the National Finals on
              January 29, 2026.
            </p>

            <p className={styles.paragraph}>
              Beyond code, I served as President of both my Faculty of Computing
              and the NACOS FUDMA Chapter — leading 2,000+ students, organizing
              national-level hackathons, launching clubs, and driving a culture
              of practical tech excellence. Before my presidency I also served as
              Sports Director for the Faculty of Computing.
            </p>

            <p className={styles.paragraph}>
              I am currently exploring the intersection of AI, robotics, and
              full-stack systems — and actively seeking internship and online
              freelance opportunities where I can contribute and grow fast.
            </p>

            {/* Meta grid */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location:</span>
                <span className={styles.metaValue}>Keffi, Nigeria</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Email:</span>
                <a href="mailto:techiemuaishaq@gmail.com" className={styles.metaLink}>
                  techiemuaishaq@gmail.com
                </a>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Status:</span>
                <span className={styles.status}>✦ Open to Work</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Phone:</span>
                <a href="tel:+2348068638021" className={styles.metaLink}>
                  +234 806 863 8021
                </a>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Degree:</span>
                <span className={styles.metaValue}>B.Sc. Computer Science, FUDMA</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Tech Instagram:</span>
                <a href="https://instagram.com/techie_muaisaq" className={styles.metaLink} target="_blank" rel="noopener noreferrer">
                  @techie_muaisaq
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
