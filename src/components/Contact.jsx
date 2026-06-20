import { useState } from 'react';
import styles from './Contact.module.css';

// Contact component - 2-column layout with info cards and mailto form
// Features: contact cards, social links, form that opens mailto on submit
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit - opens mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:techiemuaishaq@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
  };

  // Contact cards data
  const contactCards = [
    {
      icon: '✉️',
      label: 'Email (main)',
      value: 'techiemuaishaq@gmail.com',
      link: 'mailto:techiemuaishaq@gmail.com',
    },
    {
      icon: '✉️',
      label: 'Email (alt)',
      value: 'muhammedishaqjamb20@gmail.com',
      link: 'mailto:muhammedishaqjamb20@gmail.com',
    },
    {
      icon: '📞',
      label: 'Phone/WhatsApp',
      value: '+234 806 863 8021',
      link: 'tel:+2348068638021',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/muaishaq',
      link: 'https://linkedin.com/in/muaishaq',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/muaishaq',
      link: 'https://github.com/muaishaq',
    },
  ];

  // Social links data
  const socialLinks = [
    { name: 'Twitter/X', icon: '𝕏', link: 'https://twitter.com/muaishaq' },
    { name: 'Instagram', icon: '📷', link: 'https://instagram.com/muaishaq' },
    { name: 'Tech Instagram', icon: '📷', link: 'https://instagram.com/techie_muaisaq' },
    { name: 'Facebook', icon: '👥', link: 'https://facebook.com/muaishaq' },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 2-column layout: info left, form right */}
        <div className={styles.content}>
          {/* Left column - contact info */}
          <div className={styles.infoColumn}>
            <p className={styles.intro}>
              I'm actively looking for internship opportunities, freelance
              projects, and AI training work (DataAnnotation, Remotasks).
              If you have a role, a project, or just want to connect — I respond fast.
            </p>

            {/* Contact cards */}
            <div className={styles.contactCards}>
              {contactCards.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className={styles.contactCard}
                  target={card.link.startsWith('http') ? '_blank' : undefined}
                  rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <div className={styles.cardContent}>
                    <div className={styles.cardLabel}>{card.label}</div>
                    <div className={styles.cardValue}>{card.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
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

          {/* Right column - contact form */}
          <div className={styles.formColumn}>
            <h3 className={styles.formTitle}>Send Me an Email</h3>
            <p className={styles.formSubtitle}>I'm very responsive to messages</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={styles.input}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
