import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import WarningSection from './components/WarningSection';
import AboutExpert from './components/AboutExpert';
import Achievements from './components/Achievements';
import WhoIsThisFor from './components/WhoIsThisFor';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { promises as fs } from 'fs';
import path from 'path';

async function getContent() {
  const filePath = path.join(process.cwd(), 'public', 'content.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}

export default async function Page() {
  const content = await getContent();
  return (
    <main>
      <Navbar content={content.nav} site={content.site} />
      <Hero content={content.hero} />
      <WhatYouGet content={content.whatYouGet} />
      <WarningSection content={content.warningSection} />
      <AboutExpert content={content.about} />
      <Achievements content={content.achievements} />
      <WhoIsThisFor content={content.whoIsThisFor} />
      <Process content={content.process} />
      <Pricing content={content.pricing} />
      <Testimonials content={content.testimonials} />
      <FAQ content={content.faq} />
      <CTA content={content.cta} />
      <Footer content={content.footer} site={content.site} />
    </main>
  );
}
