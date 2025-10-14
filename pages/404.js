'use client';

import { Container, Button } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <div className="error-page">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lottie-container">
            <DotLottieReact
              src="https://lottie.host/embed/577a5d47-02b6-4ad9-bca5-e0d8daef7cfc/BNVvptP1WH.json"
              loop
              autoplay
            />
          </div>

          <h1 className="display-4 fw-bold mb-3">404 - Page Not Found</h1>
          <p className="lead text-muted mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <Link href="/" passHref legacyBehavior>
            <Button variant="primary" size="lg" className="px-4">
              Go Back Home
            </Button>
          </Link>
        </motion.div>
      </Container>

      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .lottie-container {
          max-width: 500px;
          margin: 0 auto 2rem;
        }

        .lottie-container :global(.dotlottie-player) {
          width: 100% !important;
          height: auto !important;
        }

        h1 {
          color: white;
        }

        .text-muted {
          color: rgba(255, 255, 255, 0.85) !important;
        }

        @media (max-width: 768px) {
          .error-page {
            padding: 1rem;
          }

          .lottie-container {
            max-width: 300px;
          }

          h1 {
            font-size: 2rem;
          }

          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
