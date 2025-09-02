import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        setSubmitted(true);
        // Here you would typically send the form data to your backend or email service
    };

    return (
        <section id="contact" className="bg-white py-5">
            <Container>
                <Row className="justify-content-center text-center mb-4">
                    <Col md={8}>
                        <h2 className="fw-bold">Contact</h2>
                        <p className="lead">Feel free to reach out for collaborations or just a friendly hello!</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={7} lg={6}>
                        {submitted ? (
                            <Alert variant="success">Thank you for your message! I&apos;ll get back to you soon.</Alert>
                        ) : (
                            <Form onSubmit={handleSubmit} className="shadow rounded-4 p-4 bg-light">
                                <Form.Group className="mb-3" controlId="contactName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="contactEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@email.com"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="contactMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Type your message here..."
                                        required
                                    />
                                </Form.Group>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Button type="submit" variant="primary" className="w-100 fw-bold">
                                    Send Message
                                </Button>
                            </Form>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}