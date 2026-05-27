'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem { question: string; answer: string; }
interface FAQContent { sectionLabel: string; heading: string; items: FAQItem[]; }

export default function FAQ({ content }: { content: FAQContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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

        <div className="space-y-3" role="list">
          {content.items.map((item, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: openIndex === i ? 'var(--color-gold-dark)' : 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-body font-medium text-sm pr-4" style={{ color: 'var(--color-text)' }}>
                  {item.question}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300"
                  style={{ color: 'var(--color-gold)', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
