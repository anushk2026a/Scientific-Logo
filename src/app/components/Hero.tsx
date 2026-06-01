'use client';

import { motion } from 'framer-motion';

interface HeroContent {
  badge: string;
  headline: string;
  description?: string;
  ctaButton: string;
  ctaHref: string;
  scrollLabel: string;
  videoEmbedUrl: string;
  trustBadges: string[];
  warningBanner: string;
}

export default function Hero({ content }: { content: HeroContent }) {
  const [before, after] = content.headline.split('—').map((s) => s.trim());

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center py-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs mb-6 sm:mb-8"
          style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {content.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-8 px-2"
          style={{ color: 'var(--color-text)' }}
        >
          {before}
          {after && (
            <> —{' '}<em className="gold-text not-italic">{after}</em></>
          )}
        </motion.h1>

        {/* Description */}
        {content.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base leading-relaxed mb-8 max-w-2xl px-4"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {content.description}
          </motion.p>
        )}

        {/* CTA */}
        <motion.a
          href={content.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm mb-8 sm:mb-10 inline-block"
          aria-label={content.ctaButton}
        >
          {content.ctaButton}
        </motion.a>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full max-w-3xl rounded-xl overflow-hidden gold-border-glow mb-8 sm:mb-10"
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src={content.videoEmbedUrl}
            title="Scientific Logo Consultation"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
          role="list"
          aria-label="Trust indicators"
        >
          {content.trustBadges.map((badge, i) => (
            <span
              key={i}
              role="listitem"
              className="text-xs px-3 py-1.5 rounded-full border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center gap-2"
          aria-label={content.scrollLabel}
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{content.scrollLabel}</span>
          <div className="animate-bounce-y" style={{ color: 'var(--color-gold)' }}>↓</div>
        </motion.div>
      </div>

      {/* Warning marquee banner */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: 'rgba(232,160,32,0.12)', borderTop: '1px solid rgba(232,160,32,0.3)', borderBottom: '1px solid rgba(232,160,32,0.3)' }}>
        <div className="py-2.5">
          <p className="animate-marquee text-xs sm:text-sm" style={{ color: 'var(--color-warning)', fontFamily: 'var(--font-body)' }}>
            {content.warningBanner}
          </p>
        </div>
      </div>
    </section>
  );
}
