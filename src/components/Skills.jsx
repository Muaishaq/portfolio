import { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';

// Skills component - 6 skill cards with animated progress bars
// Features: responsive grid, scroll-triggered animations, color-coded tags
const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillRefs = useRef([]);

  // Skills data from SPEC.md section 7
  const skills = [
    {
      title: 'AI & Machine Learning',
      percentage: 82,
      tags: ['MindSpore', 'MLP Neural Nets', 'Python', 'AI Engineering'],
      tagColors: ['purple', 'purple', 'cyan', 'purple'],
    },
    {
      title: 'Back-End Development',
      percentage: 80,
      tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GitHub API'],
      tagColors: ['blue', 'blue', 'blue', 'blue', 'blue'],
    },
    {
      title: 'Front-End Development',
      percentage: 90,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'TypeScript'],
      tagColors: ['cyan', 'cyan', 'cyan', 'cyan', 'cyan', 'cyan', 'cyan'],
    },
    {
      title: 'Data & Analysis',
      percentage: 75,
      tags: ['Data Mining', 'Outlier Analysis', 'Simulation', 'Cloud Computing'],
      tagColors: ['gray', 'gray', 'gray', 'gray'],
    },
    {
      title: 'Security & Systems',
      percentage: 72,
      tags: ['Cybersecurity', 'Systems Analysis', 'Git & GitHub', 'Agile'],
      tagColors: ['gray', 'gray', 'gray', 'gray'],
    },
    {
      title: 'Forex Trading',
      percentage: 85,
      tags: ['Technical Analysis', 'Risk Management', 'Forex Markets'],
      tagColors: ['gray', 'gray', 'gray'],
    },
  ];

  // Intersection Observer to trigger skill bar animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setVisibleSkills((prev) => new Set([...prev, index]));
          }
        }
      });
    }, observerOptions);

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Get tag color class
  const getTagColor = (color) => {
    switch (color) {
      case 'purple':
        return styles.tagPurple;
      case 'blue':
        return styles.tagBlue;
      case 'gray':
        return styles.tagGray;
      default:
        return styles.tagCyan;
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>MY EXPERTISE</span>
          <h2 className={styles.title}>Skills & Tech Stack</h2>
          <div className={styles.divider}></div>
        </div>

        {/* 6 skill cards in responsive grid */}
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={styles.card}
            >
              {/* Card content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                
                {/* Animated skill bar */}
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBarBackground}>
                    <div
                      className={styles.skillBarFill}
                      style={{
                        width: visibleSkills.has(index) ? `${skill.percentage}%` : '0%',
                        transition: 'width 1s ease-out',
                      }}
                    ></div>
                  </div>
                  <span className={styles.percentage}>{skill.percentage}%</span>
                </div>

                {/* Tags */}
                <div className={styles.tags}>
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${styles.tag} ${getTagColor(skill.tagColors[tagIndex])}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
