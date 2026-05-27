import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import StarBackground from './components/StarBackground';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Scientific Logo by Subhash — Financial Growth Ki Guarantee',
  description: "India's #1 Scientific Logo Consultant. Ph.D.-level VAP analysis for business growth.",
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
