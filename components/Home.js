// components/Home.js
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="bg-dark text-white vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-3 fw-bold">Hi, I&apos;m George K.</h1>
            <p className="lead mb-4">
              Full Stack Developer · UI/UX Designer · Problem Solver
            </p>
            <Button variant="outline-light" size="lg" href="#projects">
              View My Work
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
