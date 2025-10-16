'use client';

import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
  const roles = ['Full Stack Developer', 'Problem Solver', 'Web Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const rolesLength = roles.length;

  // ===== Typewriter Logic =====
  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const pauseFull = 1000;
    const pauseEmpty = 400;

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseFull);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % rolesLength);
      }, pauseEmpty);
      return () => clearTimeout(t);
    }

    const speed = deleting ? 35 : 60;
    const timer = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [subIndex, deleting, roleIndex, rolesLength]);

  // ===== Mouse Background Movement =====
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };

    const onLeave = () => {
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '35%');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // ===== Animation Variants =====
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={heroRef} className="hero position-relative bg-dark text-white d-flex align-items-center">
      <Container className="text-center px-3">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <motion.h1
              className="display-4 fw-bold mb-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
            >
              Hi, I&apos;m George K.
            </motion.h1>

            <motion.p
              className="lead mb-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="muted">I&apos;m a </span>
              <span className="typed">
                {roles[roleIndex].slice(0, subIndex)}
                <span className={`caret ${blink ? 'show' : ''}`} />
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button variant="outline-light" size="lg" href="#projects">
                View My Work
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        :global(:root) {
          --nav-h: 56px;
          --bg: #0f172a;
          --teal: #14b8a6;
          --indigo: #6366f1;
          --muted: rgba(255, 255, 255, 0.72);
        }

        .hero {
          min-height: 70vh;
          padding-top: var(--nav-h);
          --mx: 50%;
          --my: 35%;
          background:
            radial-gradient(32rem 32rem at var(--mx) var(--my), rgba(20, 184, 166, 0.18), transparent 60%),
            radial-gradient(36rem 36rem at calc(100% - 15%) calc(100% - 20%), rgba(99, 102, 241, 0.15), transparent 65%),
            var(--bg);
          transition: background-position 0.2s ease-out;
          isolation: isolate;
          overflow: hidden;
        }

        .muted {
          color: var(--muted);
        }

        .typed {
          font-weight: 700;
          background: linear-gradient(90deg, #fff 0%, #a5f3fc 50%, #c7d2fe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .caret {
          display: inline-block;
          width: 10px;
          height: 1.1em;
          margin-left: 2px;
          background: currentColor;
          transform: translateY(3px);
          opacity: 0;
        }

        .caret.show {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 60vh;
            padding: var(--nav-h) 1rem 2rem;
          }

          .hero :global(.display-4) {
            font-size: 2.5rem;
          }

          .hero :global(.lead) {
            font-size: 1.1rem;
          }

          .hero :global(.btn-lg) {
            font-size: 1rem;
            padding: 0.5rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            min-height: 50vh;
          }

          .hero :global(.display-4) {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }

          .hero :global(.lead) {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .hero :global(.btn-lg) {
            font-size: 0.9rem;
            padding: 0.4rem 1.2rem;
          }

          .caret {
            width: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up-1,
          .fade-up-2,
          .fade-up-3 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
