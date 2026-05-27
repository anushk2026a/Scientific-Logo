'use client';

import { motion } from 'framer-motion';

interface Side { label: string; points: string[]; }
interface WhoIsThisForContent { sectionLabel: string; heading: string; notFor: Side; isFor: Side; }

export default function WhoIsThisFor({ content }: { content: WhoIsThisForContent }) {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl border"
            style={{ backgroundColor: 'rgba(204,68,68,0.06)', borderColor: 'rgba(204,68,68,0.3)' }}
          >
            <p className="font-body font-semibold text-base mb-6" style={{ color: 'var(--color-danger)' }}>
              {content.notFor.label}
            </p>
            <ul className="space-y-4" role="list">
              {content.notFor.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                  <span className="shrink-0 mt-0.5">❌</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl border"
            style={{ backgroundColor: 'rgba(74,140,74,0.06)', borderColor: 'rgba(74,140,74,0.3)' }}
          >
            <p className="font-body font-semibold text-base mb-6" style={{ color: 'var(--color-success)' }}>
              {content.isFor.label}
            </p>
            <ul className="space-y-4" role="list">
              {content.isFor.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                  <span className="shrink-0 mt-0.5">✅</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
