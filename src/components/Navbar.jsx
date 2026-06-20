import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Navbar component - Fixed navigation with desktop and mobile views
// Desktop: Logo, nav links, CTA button
// Mobile: Logo, hamburger menu, fullscreen overlay
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Navigation links configuration
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle link click - close mobile menu and scroll to section
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo - muaishaq.dev */}
        <a href="#home" className={styles.logo}>
          <span className={styles.logoMain}>muaishaq</span>
          <span className={styles.logoDot}>.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeSection === link.href.slice(1) ? styles.active : ''
                  }`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <Link
              to="/card"
              className={styles.profileCardButton}
            >
              Profile Card
            </Link>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`${styles.mobileLink} ${
                  activeSection === link.href.slice(1) ? styles.active : ''
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Buttons */}
        <div className={styles.mobileCtaButtons}>
          <Link
            to="/card"
            className={styles.mobileCta}
            onClick={toggleMobileMenu}
          >
            Profile Card
          </Link>
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={(e) => {
              handleLinkClick(e, '#contact');
              toggleMobileMenu();
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
