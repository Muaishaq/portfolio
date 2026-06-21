import styles from './ProfileCard.module.css';

// ProfileCard component - Standalone shareable card with dark-futuristic design
// Rebuilt from existing profile-card with new theme per SPEC.md section 16
const ProfileCard = () => {
  return (
    <div className={styles.card}>
      {/* Profile photo with cyan border ring */}
      <div className={styles.photoContainer}>
        <img
          src="/img/profile.jpg"
          alt="Muhammed Ishaq"
          className={styles.profilePhoto}
        />
      </div>

      {/* Name */}
      <h2 className={styles.name}>Muhammed Ishaq</h2>

      {/* Title */}
      <p className={styles.title}>AI/ML Engineer & Full-Stack Developer, and Computer Scientist</p>

      {/* Bio */}
      <p className={styles.bio}>
        Building intelligent systems and scalable web apps.<br />
        CS Graduate · FUDMA · Keffi, Nigeria
      </p>

      {/* Social links */}
      <div className={styles.socials}>
        <a
          href="https://linkedin.com/in/muaishaq"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/muaishaq"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/muaishaq"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter/X
        </a>
        <a
          href="https://github.com/muaishaq"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Action buttons */}
      <div className={styles.buttons}>
        <a href="#projects" className={styles.primaryButton}>
          See My Work
        </a>
        <a
          href="https://linkedin.com/in/muaishaq"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButton}
        >
          Hire Me
        </a>
        <a
          href="/cv/Muhammed_Ishaq_CV.pdf"
          className={styles.secondaryButton}
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
