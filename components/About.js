'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id="about" className="bg-white">
      <Container className="px-3 px-md-4">
        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} md={8}>
            <motion.h2
              className="fw-bold mb-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="lead text-muted"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I&apos;m George K., a full stack developer passionate about building clean, performant, and user-focused applications. I blend design and code to craft digital experiences that matter.
            </motion.p>
          </Col>
        </Row>

        {/* Mission / Vision / Values */}
        <Row className="g-4 justify-content-center text-center">
          {[
            {
              icon: '🎯',
              title: 'Mission',
              text: 'Creating impactful digital solutions with precision and creativity.',
            },
            {
              icon: '🚀',
              title: 'Vision',
              text: 'To lead with innovation, design with intent, and develop with purpose.',
            },
            {
              icon: '💡',
              title: 'Values',
              text: 'Clarity, curiosity, collaboration — and clean code always.',
            },
          ].map((item, index) => (
            <Col xs={12} sm={10} md={6} lg={4} key={index}>
              <motion.div
                className="h-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-0 shadow-sm h-100 p-4 rounded-4">
                  <div className="fs-1 mb-2">{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.text}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        :global(section#about) {
          scroll-margin-top: 80px;
        }
      `}</style>
    </SectionWrapper>
  );
}
