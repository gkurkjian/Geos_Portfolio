'use client';

import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  const roles = ['Full Stack Developer', 'Problem Solver', 'Open-Source Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const pauseFull = 900;
    const pauseEmpty = 400;

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseFull);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, pauseEmpty);
      return () => clearTimeout(t);
    }

    const speed = deleting ? 35 : 70;
    const timer = setTimeout(() => setSubIndex((s) => s + (deleting ? -1 : 1)), speed);
    return () => clearTimeout(timer);
  }, [subIndex, deleting, roleIndex, roles]);

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

  return (
    <div ref={heroRef} className="hero position-relative bg-dark text-white py-5 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center w-100">
          <Col md={10} lg={8}>
            <h1 className="display-3 fw-bold fade-up-1">Hi, I&apos;m George K.</h1>

            <p className="lead mb-4 fade-up-2">
              <span className="muted">I&apos;m a </span>
              <span className="typed">
                {roles[roleIndex].slice(0, subIndex)}
                <span className={`caret ${blink ? 'show' : ''}`} />
              </span>
            </p>

            <Button variant="outline-light" size="lg" href="#projects" className="fade-up-3">
              View My Work
            </Button>
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

        .fade-up-1,
        .fade-up-2,
        .fade-up-3 {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.7s ease forwards;
        }
        .fade-up-1 {
          animation-delay: 0.05s;
        }
        .fade-up-2 {
          animation-delay: 0.2s;
        }
        .fade-up-3 {
          animation-delay: 0.35s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
