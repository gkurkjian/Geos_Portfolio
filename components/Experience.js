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
    role: 'Back-end Developer',
    company: 'Personal Projects',
    year: '2022 – Present',
    description:
      'Developed RESTful APIs and integrated database systems to handle user data efficiently. Implemented CRUD operations, authentication, and optimized performance for smooth client-server interaction.',
  },
  {
    role: 'Front-end Developer',
    company: 'Personal Projects',
    year: '2021 – Present',
    description:
      'Created modern and interactive user interfaces using Nextjs, React, JavaScript, and CSS. Focused on responsive design, accessibility, and seamless integration with back-end services.',
  },
];


export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionWrapper id="experience" className="bg-white">
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
    </SectionWrapper>
  );
}
