'use client';

import { motion } from 'framer-motion';

interface Step { number: string; title: string; description: string; }
interface ProcessContent { sectionLabel: string; heading: string; steps: Step[]; }

export default function Process({ content }: { content: ProcessContent }) {
  return (
    <section id="framework" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{content.sectionLabel}</p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl" style={{ color: 'var(--color-text)' }}>
            {content.heading}
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 top-6 bottom-6 w-px"
            style={{ backgroundColor: 'var(--color-gold-dark)' }}
          />
          <div className="space-y-10">
            {content.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 relative"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-sm z-10"
                  style={{ backgroundColor: 'var(--color-bg)', border: '2px solid var(--color-gold)', color: 'var(--color-gold)' }}
                >
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="font-body font-semibold text-base mb-1" style={{ color: 'var(--color-text)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
