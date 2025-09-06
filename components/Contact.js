'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/gkurkjian',
      bg: '#333',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/george-kurkjian/',
      bg: '#0077b5',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:georgekurkjian@gmail.com',
      bg: '#6366f1',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Let’s Connect</h2>
          <p className="text-muted">Reach out for opportunities, questions, or just to say hello.</p>
        </motion.div>

        {/* Content Row */}
        <Row className="g-4 align-items-stretch">
          {/* Contact Form */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 shadow border-0 rounded-4 h-100">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control type="email" placeholder="you@email.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-semibold">
                  Send Message
                </Button>
              </Form>
            </Card>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="col-md-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 h-100 shadow-sm border-0 rounded-4 d-flex flex-column justify-content-center text-center">
              <h5 className="fw-semibold mb-4">Connect with me</h5>

              <div className="d-flex justify-content-center gap-4 flex-wrap">
                {socialLinks.map(({ icon, label, href, bg }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-card d-flex flex-column align-items-center text-decoration-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ color: 'inherit' }}
                  >
                    <div className="icon-circle mb-2" style={{ backgroundColor: bg }}>
                      {icon}
                    </div>
                    <span className="text-muted small">{label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .contact-section {
          padding-top: 6rem;
          padding-bottom: 7rem;
          background: #ffffff;
        }

        .icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          transition: 0.3s ease;
        }

        .icon-card {
          transition: all 0.3s ease;
        }

        @media (max-width: 767px) {
          .icon-circle {
            width: 44px;
            height: 44px;
            font-size: 1.3rem;
          }

          .icon-card span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
