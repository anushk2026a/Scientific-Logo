'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { IMAGES } from '@/lib/images';

interface NavLink { label: string; href: string; }
interface NavContent { links: NavLink[]; ctaButton: string; ctaHref: string; }
interface SiteContent { brandName: string; logoAlt: string; tagline: string; }

export default function Navbar({ content, site }: { content: NavContent; site: SiteContent }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: 'rgba(10,10,10,0.92)', borderColor: 'var(--color-gold-dark)' }}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label={site.brandName} onClick={closeMenu}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden gold-border-glow">
              <Image src={IMAGES.logo} alt={site.logoAlt} fill className="object-cover" unoptimized />
            </div>
            <span className="font-heading font-semibold text-sm hidden sm:block" style={{ color: 'var(--color-gold)' }}>
              {site.brandName}
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {content.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.a
              href={content.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-block btn-gold px-5 py-2.5 rounded-md text-xs"
              aria-label={content.ctaButton}
            >
              {content.ctaButton}
            </motion.a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300 origin-center"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  transform: open ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300 origin-center"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden border-b"
            style={{ backgroundColor: 'rgba(10,10,10,0.98)', borderColor: 'var(--color-gold-dark)', backdropFilter: 'blur(12px)' }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col py-4 px-6" role="list">
                {content.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3.5 text-base border-b transition-colors hover:text-yellow-400"
                      style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', borderColor: 'var(--color-border)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-5 pb-2">
                  <a
                    href={content.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="btn-gold block w-full py-3.5 rounded-md text-sm text-center"
                    aria-label={content.ctaButton}
                  >
                    {content.ctaButton}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
