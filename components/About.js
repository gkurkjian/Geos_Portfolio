import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
  return (
    <section className="bg-white py-6 py-lg-7" id="about">
      <Container>
        {/* Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              I&apos;m George K., a full stack developer passionate about building clean, performant, and user-focused applications. I blend design and code to craft digital experiences that matter.
            </p>
          </Col>
        </Row>

        {/* Mission / Vision / Values */}
        <Row className="g-4 justify-content-center text-center">
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm h-100 p-4 rounded-4">
              <div className="fs-1 mb-2">🎯</div>
              <h5 className="fw-bold mb-2">Mission</h5>
              <p className="text-muted small mb-0">
                Creating impactful digital solutions with precision and creativity.
              </p>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm h-100 p-4 rounded-4">
              <div className="fs-1 mb-2">🚀</div>
              <h5 className="fw-bold mb-2">Vision</h5>
              <p className="text-muted small mb-0">
                To lead with innovation, design with intent, and develop with purpose.
              </p>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm h-100 p-4 rounded-4">
              <div className="fs-1 mb-2">💡</div>
              <h5 className="fw-bold mb-2">Values</h5>
              <p className="text-muted small mb-0">
                Clarity, curiosity, collaboration — and clean code always.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        section {
          scroll-margin-top: 80px;
        }

        @media (min-width: 992px) {
          .py-lg-7 {
            padding-top: 6rem !important;
            padding-bottom: 6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
