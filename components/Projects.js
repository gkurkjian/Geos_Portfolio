'use client';

import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Poslty Blog',
    image: '/assets/projects/postly-blog.png',
    description: 'Next.js 14, App Router, server components, responsive UI.',
    demoUrl: 'https://poslty-blog.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Poslty_Blog',
  },
  {
    title: 'Art-Museum Project',
    image: 'assets/projects/art-museum.png',
    description: 'Product listing, cart, and checkout mock with REST API.',
    demoUrl: 'https://web-422-assignment6-gkurkjian.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/WEB422-Assignment6',
  },
  {
    title: 'Weather-App',
    image: 'assets/projects/weather-app.png',
    description: 'Analytics dashboard with auth and charts.',
    demoUrl: 'https://weather-app-geo.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Weather_App',
  },
  {
    title: 'Software As A Service',
    image: 'assets/projects/saas.png',
    description: 'SaaS landing page with responsive design and pricing tables.',
    demoUrl: 'https://saas-authenticated-login-register.vercel.app/',
    githubUrl: 'https://github.com/gkurkjian/Saas',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-light py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <div className="col-md-8">
            <h2 className="fw-bold">Projects</h2>
            <p className="lead">Selected work with live demos and source code.</p>
          </div>
        </Row>

        <div className="d-flex flex-nowrap overflow-auto gap-4 pb-3">
        {projects.map((p) => (
            <div
            key={p.title}
            className="flex-shrink-0"
            style={{ width: '300px', flex: '0 0 auto' }}
            >
            <ProjectCard p={p} className="h-100" />
            </div>
        ))}
        </div>

      </Container>
    </section>
  );
}
