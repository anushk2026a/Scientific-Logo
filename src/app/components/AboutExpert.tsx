'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { IMAGES } from '@/lib/images';

interface Stat { value: number; suffix: string; label: string; }
interface AboutContent {
  sectionLabel: string;
  name: string;
  title: string;
  bio: string;
  imageAlt: string;
  stats: Stat[];
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function AboutExpert({ content }: { content: AboutContent }) {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="section-label text-center mb-16"
        >
          {content.sectionLabel}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: '0 0 0 3px var(--color-gold), 0 0 40px rgba(201,168,76,0.2)' }}
              />
              <Image
                src={IMAGES.expertPhoto}
                alt={content.imageAlt}
                fill
                className="object-cover rounded-full"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2" style={{ color: 'var(--color-text)' }}>
              {content.name}
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}>
              {content.title}
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
              {content.bio}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {content.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <p className="font-heading font-bold text-2xl md:text-3xl gold-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
