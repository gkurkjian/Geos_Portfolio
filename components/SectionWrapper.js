'use client';

import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>

      <style jsx>{`
        .section-wrapper {
          padding-top: 6rem;
          padding-bottom: 6rem;
          background: #fff;
        }

        @media (max-width: 768px) {
          .section-wrapper {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
