'use client';

import { motion } from 'framer-motion';

interface FooterLink { label: string; href: string; }
interface FooterSection { heading: string; links: FooterLink[]; }
interface FooterContent {
  brand: string;
  description: string;
  copyright: string;
  email: string;
  sections: FooterSection[];
}
interface SiteContent { brandName: string; logoAlt: string; tagline: string; }

export default function Footer({ content, site }: { content: FooterContent; site: SiteContent }) {
  return (
    <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <div className="lg:col-span-1">
            <p className="font-heading font-semibold text-lg mb-3 gold-text">{content.brand}</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
              {content.description}
            </p>
            <a
              href={`mailto:${content.email}`}
              className="text-xs transition-colors hover:text-yellow-400"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}
              aria-label={`Email ${content.email}`}
            >
              {content.email}
            </a>
          </div>

          {content.sections.map((section, i) => (
            <div key={i}>
              <p className="section-label mb-5">{section.heading}</p>
              <ul className="space-y-3" role="list">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs transition-colors hover:text-yellow-400"
                      style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {content.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
