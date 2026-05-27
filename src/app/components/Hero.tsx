'use client';

import { motion } from 'framer-motion';

interface HeroContent {
  badge: string;
  headline: string;
  ctaButton: string;
  ctaHref: string;
  scrollLabel: string;
  videoEmbedUrl: string;
  trustBadges: string[];
  warningBanner: string;
}

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs mb-8"
          style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {content.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
          style={{ color: 'var(--color-text)' }}
        >
          {content.headline.split('—')[0].trim()}
          {content.headline.includes('—') && (
            <>
              {' '}—{' '}
              <em className="gold-text not-italic">
                {content.headline.split('—')[1].trim()}
              </em>
            </>
          )}
        </motion.h1>

        <motion.a
          href={content.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold px-8 py-4 rounded-md text-sm mb-10 inline-block"
          aria-label={content.ctaButton}
        >
          {content.ctaButton}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full max-w-3xl rounded-xl overflow-hidden gold-border-glow mb-10"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
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

      <div className="w-full overflow-hidden mt-10" style={{ backgroundColor: 'rgba(232,160,32,0.12)', borderTop: '1px solid rgba(232,160,32,0.3)', borderBottom: '1px solid rgba(232,160,32,0.3)' }}>
        <div className="py-3">
          <p className="animate-marquee text-sm" style={{ color: 'var(--color-warning)', fontFamily: 'var(--font-body)' }}>
            {content.warningBanner}
          </p>
        </div>
      </div>
    </section>
  );
}
