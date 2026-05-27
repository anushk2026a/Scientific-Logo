'use client';

import { motion } from 'framer-motion';

interface Plan {
  badge: string;
  name: string;
  subtitle?: string;
  price: string;
  priceSuffix: string;
  popular: boolean;
  deliverables: string[];
  note?: string | null;
}
interface PricingContent {
  sectionLabel: string;
  heading: string;
  ctaButton: string;
  ctaHref: string;
  deliverablesLabel: string;
  plans: Plan[];
}

export default function Pricing({ content }: { content: PricingContent }) {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 overflow-x-auto pt-5">
          {content.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border p-6 relative"
              style={{
                backgroundColor: plan.popular ? 'var(--color-surface-2)' : 'var(--color-surface)',
                borderColor: plan.popular ? 'var(--color-gold)' : 'var(--color-border)',
                boxShadow: plan.popular ? '0 0 30px rgba(201,168,76,0.15)' : 'none',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-4 py-1.5 rounded-full font-body font-semibold uppercase tracking-wider"
                  style={{ background: 'var(--gradient-gold)', color: '#0a0a0a' }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-4">
                {!plan.popular && (
                  <span className="text-xs section-label block mb-2">{plan.badge}</span>
                )}
                <h3 className="font-heading font-semibold text-lg" style={{ color: 'var(--color-text)' }}>
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    {plan.subtitle}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <span className="font-heading font-bold text-2xl gold-text">{plan.price}</span>
                <span className="text-xs ml-1" style={{ color: 'var(--color-text-muted)' }}>{plan.priceSuffix}</span>
              </div>

              <p className="text-xs font-body font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-gold)' }}>
                {content.deliverablesLabel}
              </p>
              <ul className="space-y-2 mb-6 flex-1" role="list">
                {plan.deliverables.map((item, j) => (
                  <li key={j} className="flex gap-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    <span style={{ color: 'var(--color-gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs italic mb-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                  {plan.note}
                </p>
              )}

              <motion.a
                href={content.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold py-3 px-4 rounded-md text-xs text-center mt-auto"
                aria-label={content.ctaButton}
              >
                {content.ctaButton}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
