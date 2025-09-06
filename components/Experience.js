// components/Experience.js
'use client';

import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '../styles/Experience.module.css';
import SectionWrapper from '../components/SectionWrapper'

const experienceData = [
  {
    role: 'Freelance Web Developer',
    company: 'Various Clients',
    year: '2023 – Present',
    description:
      'Built fast and responsive websites using Next.js, React, and headless CMS tools. Designed clean UX flows, optimized SEO, and deployed to Vercel for brands and startups.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Personal Projects',
    year: '2022 – 2023',
    description:
      'Created design systems and wireframes using Figma. Focused on accessibility, motion design, and component-based layout structures across projects.',
  },
  {
    role: 'Technical Writer',
    company: 'Open Source',
    year: '2021 – 2022',
    description:
      'Authored clear and concise documentation for open-source tools. Focused on developer onboarding, component APIs, and contribution guidelines.',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionWrapper id="experience" className="bg-white">
      <div className="bg-white" id="experience">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Experience</h2>
            <p className="lead text-muted">Timeline of work and projects</p>
          </div>

          <div className={styles.timeline} ref={ref}>
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                className={styles.cardWrapper}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className={styles.marker} />
                <div className={styles.card}>
                  <h5 className="fw-bold mb-1">{exp.role}</h5>
                  <p className="mb-0 text-muted">{exp.company} · {exp.year}</p>
                  <p className="mt-2 mb-0">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
