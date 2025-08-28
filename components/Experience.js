// components/Experience.js
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Experience() {
  const experienceData = [
    {
      role: 'Freelance Web Developer',
      company: 'Various Clients',
      year: '2023 – Present',
      description:
        'Collaborated with clients to design and build responsive websites using platforms like Wix and modern tools like Next.js. Responsible for site structure, layout, and deployment — helping brands establish their online presence.',
    },
  ];

  return (
    <div className="bg-white py-5" id="experience">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h2 className="fw-bold">Experience</h2>
            <p className="lead">Practical work I've done with real clients.</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {experienceData.map((exp, idx) => (
            <Col md={6} key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company} · {exp.year}
                  </Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
