'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CTAContent {
  sectionLabel: string;
  typewriterText: string;
  subheading: string;
  button: string;
  href: string;
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        setTimeout(tick, 55);
      } else {
        setDone(true);
      }
    };
    setTimeout(tick, 400);
  }, [inView, text]);

  return (
    <h2
      ref={ref}
      className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight"
      style={{ color: 'var(--color-text)' }}
    >
      {displayed}
      <span
        className="inline-block w-0.5 h-[1em] align-middle ml-1"
        style={{
          backgroundColor: 'var(--color-gold)',
          animation: done ? 'blink 0.8s step-end infinite' : 'none',
          opacity: done ? undefined : 1,
        }}
      />
    </h2>
  );
}

export default function CTA({ content }: { content: CTAContent }) {
  return (
    <>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0d08 0%, #1a1408 50%, #0a0a0a 100%)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="section-label mb-8"
          >
            {content.sectionLabel}
          </motion.p>

          <div className="mb-6">
            <Typewriter text={content.typewriterText} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base mb-10 leading-relaxed"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {content.subheading}
          </motion.p>

          <motion.a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold px-10 py-5 rounded-full text-sm inline-block"
            aria-label={content.button}
          >
            {content.button}
          </motion.a>
        </div>
      </section>
    </>
  );
}
