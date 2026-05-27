'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';

interface AchievementItem { imageAlt: string; title: string; subtitle: string; }
interface AchievementsContent { sectionLabel: string; heading: string; subheading: string; items: AchievementItem[]; }

const imageMap = [IMAGES.achievement1, IMAGES.achievement2, IMAGES.achievement3];

export default function Achievements({ content }: { content: AchievementsContent }) {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{content.sectionLabel}</p>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl mb-3" style={{ color: 'var(--color-text)' }}>
            {content.heading}
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {content.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden gold-border-glow mb-5">
                <Image
                  src={imageMap[i]}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-semibold text-base mb-1" style={{ color: 'var(--color-text)' }}>
                {item.title}
              </h3>
              <div className="w-8 h-0.5 mx-auto mb-2" style={{ backgroundColor: 'var(--color-gold)' }} />
              <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
