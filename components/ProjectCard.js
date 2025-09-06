'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaJsSquare,
  FaChartBar,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiVercel,
  SiAuth0,
  SiOpenapiinitiative,
} from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

export default function ProjectCard({ p, className = "" }) {
  const [flipped, setFlipped] = useState(false);

  const techIcons = {
    react: <FaReact title="React" />,
    node: <FaNodeJs title="Node.js" />,
    github: <FaGithub title="GitHub" />,
    bootstrap: <FaBootstrap title="Bootstrap" />,
    js: <FaJsSquare title="JavaScript" />,
    chartjs: <FaChartBar title="Chart.js" />,
    nextjs: <SiNextdotjs title="Next.js" />,
    vercel: <SiVercel title="Vercel" />,
    auth: <SiAuth0 title="Auth0" />,
    restapi: <SiOpenapiinitiative title="REST API" />,
  };

  return (
    <div
      className={`flip-card ${flipped ? 'is-flipped' : ''} ${className}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${p.title} project card. Press to flip for links.`}
      style={{ height: '100%' }}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-face flip-card-front">
          <div className="screenshot" style={{ backgroundImage: `url(${p.image})` }} />
          <div className="p-3 text-center">
            <h5 className="fw-bold mb-2">{p.title}</h5>
            <div className="d-flex justify-content-center gap-2 mt-2 flex-wrap">
              {p.tech?.map((tech, idx) => (
                <span key={idx} style={{ fontSize: '1.2rem' }}>
                  {techIcons[tech]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back">
          <div className="p-3 d-flex flex-column justify-content-between h-100">
            <div>
              <h5 className="fw-bold mb-2">{p.title}</h5>
              <p className="text-muted small m-0">{p.description}</p>
            </div>

            <div className="text-center mt-3 d-flex justify-content-center gap-2 flex-wrap">
              {p.demoUrl && (
                <Button
                  as={Link}
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                >
                  Live Demo
                </Button>
              )}

              {p.githubUrl && (
                <Button
                  as={Link}
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-dark"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                >
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          border-radius: 1rem;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          height: 100%;
          min-height: 380px;
          cursor: pointer;
          outline: none;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 380px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.2, 0.75, 0.25, 1);
        }
        @media (hover: hover) and (pointer: fine) {
          .flip-card:hover .flip-card-inner,
          .flip-card:focus-visible .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 320px;
        }
        .flip-card-front {
          background: #fff;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background: #f8f9fa;
        }
        .screenshot {
          height: 65%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .button-row {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .button-row :global(a.btn) {
          flex: 0 1 auto;
          min-width: 120px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
