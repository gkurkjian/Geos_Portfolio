'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/gkurkjian',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gkurkjian',
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      href: 'https://twitter.com/your_handle',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:george@example.com',
    },
  ];

  return (
    <section id="contact" className="py-6 bg-white">
      <Container>
        {/* Heading */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold">Contact</h2>
            <p className="text-muted">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </Col>
        </Row>

        {/* Content Row */}
        <Row className="g-4 align-items-stretch">
          {/* Contact Form */}
          <Col md={7}>
            <Card className="p-4 shadow-sm border-0 rounded-4 h-100">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="you@email.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Social Media */}
          <Col md={5}>
            <motion.div
              className="social-box h-100 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h5 className="fw-semibold text-center mb-2">Connect with me</h5>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                {socialLinks.map(({ icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon-btn icon-${label.toLowerCase()}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Styles */}
      <style jsx>{`
        .social-box {
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .icon-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: white;
          transition: all 0.3s ease;
        }

        .icon-github {
          background: #333;
        }

        .icon-linkedin {
          background: #0077b5;
        }

        .icon-twitter {
          background: #1da1f2;
        }

        .icon-email {
          background: #6366f1;
        }

        .icon-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 767px) {
          .icon-btn {
            width: 44px;
            height: 44px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
