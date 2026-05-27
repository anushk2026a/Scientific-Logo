'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';

interface NavLink { label: string; href: string; }
interface NavContent {
  links: NavLink[];
  ctaButton: string;
  ctaHref: string;
}
interface SiteContent { brandName: string; logoAlt: string; tagline: string; }

export default function Navbar({ content, site }: { content: NavContent; site: SiteContent }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', borderColor: 'var(--color-gold-dark)' }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3" aria-label={site.brandName}>
          <div className="relative w-10 h-10 rounded-full overflow-hidden gold-border-glow">
            <Image
              src={IMAGES.logo}
              alt={site.logoAlt}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="font-heading font-semibold text-sm hidden sm:block" style={{ color: 'var(--color-gold)' }}>
            {site.brandName}
          </span>
        </a>

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

        <motion.a
          href={content.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold px-5 py-2.5 rounded-md text-xs"
          aria-label={content.ctaButton}
        >
          {content.ctaButton}
        </motion.a>
      </div>
    </motion.nav>
  );
}
