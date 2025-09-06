'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'Poslty Blog',
    image: '/assets/projects/postly-blog.png',
    description: 'Next.js 14, App Router, server components, responsive UI.',
    demoUrl: 'https://poslty-blog.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Poslty_Blog',
    tech: ['nextjs', 'js', 'vercel'],
  },
  {
    title: 'Art-Museum Project',
    image: 'assets/projects/art-museum.png',
    description: 'Product listing, cart, and checkout mock with REST API.',
    demoUrl: 'https://web-422-assignment6-gkurkjian.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/WEB422-Assignment6',
    tech: ['react', 'restapi', 'bootstrap'],
  },
  {
    title: 'Weather-App',
    image: 'assets/projects/weather-app.png',
    description: 'Analytics dashboard with auth and charts.',
    demoUrl: 'https://weather-app-geo.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Weather_App',
    tech: ['react', 'node', 'chartjs'],
  },
  {
    title: 'Software As A Service',
    image: 'assets/projects/saas.png',
    description: 'SaaS landing page with responsive design and pricing tables.',
    demoUrl: 'https://saas-authenticated-login-register.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Saas',
    tech: ['nextjs', 'bootstrap', 'auth'],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold">Projects</h2>
            <p className="lead text-muted">Selected work with live demos and source code.</p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((p) => (
            <Col key={p.title} xs={12} sm={6} lg={4} xl={3}>
              <ProjectCard p={p} className="h-100" />
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
}
