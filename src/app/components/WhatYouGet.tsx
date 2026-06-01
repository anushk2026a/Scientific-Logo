'use client';

import { motion } from 'framer-motion';

interface Card { icon: string; title: string; description: string; }
interface WhatYouGetContent { sectionLabel: string; heading: string; cards: Card[]; }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatYouGet({ content }: { content: WhatYouGetContent }) {
  return (
    <section id="why-sld" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{content.sectionLabel}</p>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl" style={{ color: 'var(--color-text)' }}>
            {content.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'var(--color-gold)' }}
              className="p-6 rounded-xl border transition-colors duration-300 cursor-default"
              style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}
              >
                {card.icon}
              </div>
              <h3 className="font-body font-semibold text-base mb-2" style={{ color: 'var(--color-text)' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
