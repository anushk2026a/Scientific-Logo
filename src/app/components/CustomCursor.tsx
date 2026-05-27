'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(cursorX, { damping: 35, stiffness: 400, mass: 0.3 });
  const dotY = useSpring(cursorY, { damping: 35, stiffness: 400, mass: 0.3 });
  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.8 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring — trails behind */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
          border: '1.5px solid var(--color-gold)',
          opacity: 0.7,
          boxShadow: '0 0 10px rgba(201,168,76,0.35)',
        }}
        aria-hidden="true"
      />

      {/* Inner dot — snaps tighter */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-gold)',
          boxShadow: '0 0 8px rgba(201,168,76,0.9)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
