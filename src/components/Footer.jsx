import styles from './Footer.module.css';

// Footer component - 3-column layout with logo, links, and socials
// Features: cyan logo, navigation links, social icons, copyright
const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/muaishaq' },
    { name: 'Instagram', icon: '📷', href: 'https://instagram.com/muaishaq' },
    { name: 'Twitter/X', icon: '𝕏', href: 'https://twitter.com/muaishaq' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/muaishaq' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 3-column layout */}
        <div className={styles.content}>
          {/* Logo column */}
          <div className={styles.column}>
            <a href="#home" className={styles.logo}>
              muaishaq<span className={styles.logoDot}>.dev</span>
            </a>
          </div>

          {/* Links column */}
          <div className={styles.column}>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials column */}
          <div className={styles.column}>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 2026 Muhammed Ishaq. Built with React + Vite.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
