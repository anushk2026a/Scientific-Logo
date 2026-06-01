import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import StarBackground from './components/StarBackground';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Scientific Logo Design (SLD) — Where Science, Branding & Astro Intelligence Meet',
  description: "Transform your business identity with scientifically researched logo solutions led by Dr. Nirav Patel, PhD Business Consultation Specialist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ cursor: 'none' }}>
        <StarBackground />
        <CustomCursor />
        {children}
        <FloatingWhatsApp href="https://wa.me/919936639959" />
      </body>
    </html>
  );
}
