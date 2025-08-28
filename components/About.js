// components/About.js
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div className="bg-light py-5" id="about">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="fw-bold">About Me</h2>
            <p className="lead">
              I&apos;m George K., a full stack developer with a passion for building clean,
              performant, and user-focused applications. I blend design and code to craft digital experiences that matter.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4}>
            <h5>🎯 Mission</h5>
            <p>Creating impactful digital solutions with precision and creativity.</p>
          </Col>
          <Col md={4}>
            <h5>🚀 Vision</h5>
            <p>To lead with innovation, design with intent, and develop with purpose.</p>
          </Col>
          <Col md={4}>
            <h5>💡 Values</h5>
            <p>Clarity, curiosity, collaboration — and clean code always.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
