'use client';

import { motion } from 'framer-motion';

interface Card { icon: string; title: string; description: string; }
interface WarningSectionContent { sectionLabel: string; heading: string; subheading: string; cards: Card[]; }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WarningSection({ content }: { content: WarningSectionContent }) {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="section-label mb-4">{content.sectionLabel}</p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-3" style={{ color: 'var(--color-text)' }}>
            {content.heading}
          </h2>
          <p className="text-base" style={{ color: 'var(--color-warning)', fontFamily: 'var(--font-body)' }}>
            {content.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {content.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'var(--color-danger)' }}
              className="p-6 rounded-xl border transition-colors duration-300 cursor-default"
              style={{ backgroundColor: 'var(--color-surface-2)', borderColor: 'rgba(204,68,68,0.3)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: 'rgba(204,68,68,0.1)' }}
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
