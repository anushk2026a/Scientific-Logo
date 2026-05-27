'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

interface TestimonialItem { name: string; business: string; stars: number; quote: string; avatar: string; }
interface TestimonialsContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  ctaButton: string;
  ctaHref: string;
  prevLabel: string;
  nextLabel: string;
  items: TestimonialItem[];
  placeholderNote: string;
}

export default function Testimonials({ content }: { content: TestimonialsContent }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = content.items.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = content.items[current];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">{content.sectionLabel}</p>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl mb-3" style={{ color: 'var(--color-text)' }}>
            {content.heading}
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {content.subheading}
          </p>
        </motion.div>

        <div
          className="relative rounded-2xl border p-8 md:p-12"
          style={{ backgroundColor: 'var(--color-surface-2)', borderColor: 'var(--color-border)' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1 mb-6" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--color-gold)' }}>★</span>
                ))}
              </div>
              <blockquote className="font-heading text-base sm:text-xl md:text-2xl leading-relaxed mb-8 italic" style={{ color: 'var(--color-text)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-body font-bold text-sm"
                  style={{ background: 'var(--gradient-gold)', color: '#0a0a0a' }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>{t.business}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-yellow-500 text-sm"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              aria-label="Previous testimonial"
            >
              {content.prevLabel}
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {content.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: i === current ? 'var(--color-gold)' : 'var(--color-border)' }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-yellow-500 text-sm"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              aria-label="Next testimonial"
            >
              {content.nextLabel}
            </button>
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
          {content.placeholderNote}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <motion.a
            href={content.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold px-8 py-4 rounded-md text-sm inline-block"
            aria-label={content.ctaButton}
          >
            {content.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
