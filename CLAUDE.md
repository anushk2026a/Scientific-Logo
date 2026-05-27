# CLAUDE.md — Scientific Logo Clone (scientificlogo.com)
**https://scientificlogo.com this is the website we are cloning entirely** 
## Project Overview

Clone of **scientificlogo.com** — Dr. Subhash Bothare's Scientific Logo consulting landing page.
This is a **Next.js** single-page website that is a pixel-perfect clone in terms of theme, colors, typography, animations, layout, and content structure.

**Critical Architecture Rule:** ALL text displayed anywhere on the site — headings, body copy, button labels, nav links, badges, warnings, FAQs, footer text, tooltip text — is loaded from a **single JSON text file** (`/public/content.json`). No string literals in components. Zero hardcoded text in JSX.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + custom CSS variables (no inline styles)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts — `Playfair Display` (headings) + `DM Sans` (body)
- **Language:** TypeScript
- **Content:** All text from `/public/content.json` fetched at runtime

---

## File Structure

```
/
├── public/
│   └── content.json          ← THE SINGLE SOURCE OF ALL TEXT
├── src/
│   app/
│   ├── layout.tsx
│   ├── page.tsx              ← Assembles all sections
│   ├── globals.css           ← CSS variables, base styles, animations
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── WhatYouGet.tsx
│       ├── WarningSection.tsx
│       ├── AboutExpert.tsx
│       ├── Achievements.tsx
│       ├── WhoIsThisFor.tsx
│       ├── Process.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
└── CLAUDE.md
```

---

## `/public/content.json` — Complete Text File Specification

This is the **single source of truth** for ALL text. Structure it exactly as below. Every component reads from this file. Fetch it once in `page.tsx` and pass content as props.

```json
{
  "site": {
    "brandName": "Scientific Logo by Subhash",
    "tagline": "Financial Growth Ki Guarantee",
    "logoAlt": "Scientific Logo by Subhash"
  },

  "nav": {
    "links": [
      { "label": "What You Get", "href": "#discover" },
      { "label": "About", "href": "#about" },
      { "label": "Process", "href": "#framework" },
      { "label": "Pricing", "href": "#pricing" },
      { "label": "FAQ", "href": "#faq" }
    ],
    "ctaButton": "Book 1:1 Call",
    "ctaHref": "https://scientificlogo.com/step/vibration-alignment-program/"
  },

  "hero": {
    "badge": "India's #1 Scientific Logo Consultant",
    "headline": "Your Business Logo isn't just a Design — It's a Frequency that Controls Your Business Flow",
    "ctaButton": "Book 1:1 Call",
    "ctaHref": "https://scientificlogo.com/step/vibration-alignment-program/",
    "scrollLabel": "Scroll",
    "trustBadges": [
      "⭐ Rated 4.9/5",
      "15,000+ Logos Analyzed",
      "90-Day Money Back",
      "Ph.D. Expert"
    ],
    "warningBanner": "⚠️ अगर आपका Logo सही Vibrational Frequency पर Tuned नहीं है, तो Universe से आने वाला Growth Signal Block हो जाता है — और आपका Business Financially Stuck महसूस करता है।"
  },

  "whatYouGet": {
    "sectionLabel": "What You Get",
    "heading": "What You'll Discover in the 1:1 Scientific Logo Consultation Call",
    "cards": [
      {
        "icon": "🔬",
        "title": "Business Vibration Assessment",
        "description": "Complete analysis of your logo's vibrational alignment with your business goals and growth trajectory."
      },
      {
        "icon": "🔸",
        "title": "Logo Geometry Analysis",
        "description": "Sacred geometry principles applied to assess balance, proportion, and energetic flow in your logo design."
      },
      {
        "icon": "🎨",
        "title": "Color Frequency Reading",
        "description": "Deep analysis of how your logo's color palette influences customer psychology and cash flow patterns."
      },
      {
        "icon": "✍️",
        "title": "Typography Observation",
        "description": "Graphological analysis of your logo's fonts and how they project authority, trust, and growth energy."
      },
      {
        "icon": "🔄",
        "title": "Energy Flow Mapping",
        "description": "Complete mapping of energy pathways in your brand identity and how they affect business outcomes."
      },
      {
        "icon": "🧠",
        "title": "Subconscious Impact Study",
        "description": "Understanding how your logo programs your clients' subconscious buying and referral behaviour."
      }
    ]
  },

  "warningSection": {
    "sectionLabel": "The Warning Signs",
    "heading": "Impact of Vibrational Misaligned Logo",
    "subheading": "अगर आपके लोगो में ग़लत वाइब्रेशन हुई तो...",
    "cards": [
      {
        "icon": "⚠️",
        "title": "Unstable Cash Flow",
        "description": "Revenue fluctuates wildly. No consistent pattern. Growth feels random and unreliable."
      },
      {
        "icon": "🚫",
        "title": "Low New Customer Attraction",
        "description": "Marketing spend goes up but client acquisition stays flat. Your brand doesn't magnetically pull people in."
      },
      {
        "icon": "💥",
        "title": "Employee & Coordination Conflicts",
        "description": "Team friction, high turnover, miscommunication — your logo's energy creates workplace dissonance."
      },
      {
        "icon": "💸",
        "title": "High Operational Costs",
        "description": "Expenses keep rising. Profitability shrinks. Money leaks from places you can't identify."
      },
      {
        "icon": "👨‍💼",
        "title": "Customer Retention Drop",
        "description": "Clients don't return. No repeat business. Word-of-mouth referrals have dried up completely."
      },
      {
        "icon": "🔒",
        "title": "Growth Block & Expansion Resistance",
        "description": "Doing everything right but growth has plateaued. Invisible ceiling you can't break through."
      }
    ]
  },

  "about": {
    "sectionLabel": "The Expert",
    "name": "Dr. Subhash Bothare",
    "title": "Ph.D. in Business Consulting — Scientific Logo Specialist",
    "bio": "Completed Ph.D. in Business Consulting, specializing in the Science of Vibrations, Shapes, and Colors and their impact on business success through logo design. Creator of the Vibration Alignment Protocol (VAP) — the only scientific framework for logo-to-business performance mapping. Analyzed 15,000+ logos. Served 2,000+ business owners globally. Trained 1,500+ marketers. Consulted 150+ agency owners. Based in Mumbai. Featured across business consulting platforms.",
    "imageAlt": "Dr. Subhash Bothare",
    "stats": [
      { "value": 15000, "suffix": "+", "label": "Logos Analyzed" },
      { "value": 2000, "suffix": "+", "label": "Clients Served" },
      { "value": 1500, "suffix": "+", "label": "Marketers Trained" },
      { "value": 150, "suffix": "+", "label": "Agency Owners" }
    ]
  },

  "achievements": {
    "sectionLabel": "Recognition & Awards",
    "heading": "Some Achievements",
    "subheading": "Recognized by India's highest authorities",
    "items": [
      {
        "imageAlt": "Dr. Subhash Bothare Ph.D. Ceremony",
        "title": "Ph.D. Degree — Burlington State University",
        "subtitle": "International Intellectual Conference, New Delhi"
      },
      {
        "imageAlt": "Dr. Subhash Bothare with Ramnath Kovind",
        "title": "Meeting with Ramnath Kovind",
        "subtitle": "Former President of India"
      },
      {
        "imageAlt": "Dr. Subhash Bothare with Nitin Gadkari",
        "title": "Meeting with Nitin Gadkari",
        "subtitle": "Union Minister, Government of India"
      }
    ]
  },

  "whoIsThisFor": {
    "sectionLabel": "Who Is This For?",
    "heading": "Is This Consultation Right for You?",
    "notFor": {
      "label": "❌ This is NOT for you if...",
      "points": [
        "You think logo is just a picture and has no impact on business",
        "You are not willing to invest in your brand's energy correction",
        "You expect overnight magic without following the protocol",
        "You are not open to scientific analysis of ancient wisdom",
        "You are looking for cheap logo design service, not transformation"
      ]
    },
    "isFor": {
      "label": "✅ This IS for you if...",
      "points": [
        "You are a serious business owner committed to removing hidden growth blockers",
        "You believe in the science behind vibrational alignment and energy flow",
        "You are ready to invest in a proven, systematic transformation protocol",
        "You want Ph.D.-level expert analysis, not generic design opinions",
        "You want financial growth backed by scientific logo correction"
      ]
    }
  },

  "process": {
    "sectionLabel": "The Process",
    "heading": "Loose Framework of 45 Min Consultation Call",
    "steps": [
      {
        "number": "1",
        "title": "Signature Analysis",
        "description": "Deep graphological assessment of your personal signature's energy alignment with your business vibration."
      },
      {
        "number": "2",
        "title": "Wristwatch Analysis",
        "description": "Analysis of your wristwatch position and its energetic influence on your decision-making frequency."
      },
      {
        "number": "3",
        "title": "Logo Analysis",
        "description": "Complete 11-indicator VAP analysis of your logo's vibrational impact across all business performance parameters."
      },
      {
        "number": "4",
        "title": "Visiting Card Analysis",
        "description": "Assessment of your visiting card's layout, color, typography and energetic flow for networking success."
      },
      {
        "number": "5",
        "title": "VAP Compatibility Explore",
        "description": "Exploration of how the Vibration Alignment Protocol applies specifically to your business sector and goals."
      },
      {
        "number": "6",
        "title": "Financial Growth Roadmap",
        "description": "Personalised roadmap with actionable steps for aligning your brand identity with financial growth trajectory."
      }
    ]
  },

  "pricing": {
    "sectionLabel": "Investment",
    "heading": "Choose Your Transformation Path",
    "ctaButton": "Book 1:1 Call",
    "ctaHref": "https://scientificlogo.com/step/vibration-alignment-program/",
    "deliverablesLabel": "✨ Deliverables",
    "plans": [
      {
        "badge": "Starter Plan",
        "name": "Logo Correction Only Program",
        "price": "₹45,000",
        "priceSuffix": "+ GST",
        "popular": false,
        "tag": null,
        "deliverables": [
          "Existing Logo Vibration Audit",
          "Scientific Logo Correction"
        ],
        "note": "Focused purely on aligning your existing logo's vibration. New logo design & remedies are part of higher plans."
      },
      {
        "badge": "Most Popular",
        "name": "Silver Plan",
        "subtitle": "Business Turnover: ₹10 Cr – ₹100 Cr",
        "price": "₹90,000",
        "priceSuffix": "+ GST",
        "popular": true,
        "tag": null,
        "deliverables": [
          "Scientific Logo Design",
          "Signature Remedy",
          "Wristwatch Remedy",
          "Business Card Design",
          "Invoice Design",
          "Letterhead Design",
          "Sign Board Design",
          "Meditation for Alignment",
          "Dedicated Success Manager",
          "90 Days Hand-Holding Support"
        ],
        "note": null
      },
      {
        "badge": "Premium Choice",
        "name": "Gold Plan",
        "subtitle": "Business Turnover: ₹100 Cr+",
        "price": "₹1,80,000",
        "priceSuffix": "+ GST",
        "popular": false,
        "tag": null,
        "deliverables": [
          "Everything in Silver Plan +",
          "Online Session With Subhash Sir",
          "Personal Brand Audit :-",
          "Personal Name Correction",
          "Mobile Number Numerology",
          "1:1 Sales Strategy Session with Subhash Sir"
        ],
        "note": null
      },
      {
        "badge": "Exclusive",
        "name": "Platinum Plan 💎",
        "subtitle": "Business Turnover: ₹100 Cr+ & IPO Companies",
        "price": "₹4,50,000",
        "priceSuffix": "+ GST • For IPO Companies",
        "popular": false,
        "tag": null,
        "deliverables": [
          "Everything in Gold Plan +",
          "Offline Session With Subhash Sir"
        ],
        "note": null
      }
    ]
  },

  "testimonials": {
    "sectionLabel": "Real Results",
    "heading": "Clients Ki Zubani — Unki Kahani",
    "subheading": "Real business owners. Real transformations. Real results.",
    "ctaButton": "Book 1:1 Call",
    "ctaHref": "https://scientificlogo.com/step/vibration-alignment-program/",
    "prevLabel": "❮",
    "nextLabel": "❯"
  },

  "faq": {
    "sectionLabel": "Common Questions",
    "heading": "Frequently Asked Questions",
    "items": [
      {
        "question": "What is the Vibration Alignment Protocol?",
        "answer": "VAP is a proprietary scientific framework developed by Dr. Subhash Bothare that analyzes your logo across 11 business performance indicators using Color Psychology, Sacred Geometry, Numerology, Graphology and Vastu Shastra."
      },
      {
        "question": "Is this scientific or spiritual?",
        "answer": "It is 100% scientific. VAP integrates measurable ancient sciences with modern business psychology to create a structured, repeatable framework for business growth."
      },
      {
        "question": "How long to see results?",
        "answer": "Most clients see measurable improvements within 30 to 90 days of implementing the VAP recommendations."
      },
      {
        "question": "What if I don't see results?",
        "answer": "The Gold Program comes with a full 90-day money-back guarantee. No questions asked."
      },
      {
        "question": "Is the process online or offline?",
        "answer": "Completely online via Google Meet video call consultations and digital analysis reports. No travel required."
      },
      {
        "question": "How is this different from regular logo design?",
        "answer": "Regular logo design focuses only on aesthetics. VAP analyzes the energetic and psychological impact of your logo on all 11 business performance indicators backed by Ph.D.-level research."
      },
      {
        "question": "Who is this for?",
        "answer": "Business owners, founders, entrepreneurs, and professionals who are serious about removing hidden growth blockers and scaling their business through scientific logo alignment."
      },
      {
        "question": "How do I get started?",
        "answer": "Pay the ₹9,000 booking amount. You'll receive a Google Meet link. Submit your logo and business details. Get your complete analysis in a 45-minute consultation call."
      }
    ]
  },

  "cta": {
    "sectionLabel": "Take Action Now",
    "heading": "Join 2,000+ business owners who transformed their financial growth through Scientific Logo alignment.",
    "button": "Book 1:1 Call",
    "href": "https://scientificlogo.com/step/vibration-alignment-program/"
  },

  "footer": {
    "brand": "Scientific Logo by Subhash",
    "description": "Transforming businesses through the science of visual identity. India's pioneering VAP consultant. Financial Growth Ki Guarantee.",
    "copyright": "© 2026 Accuspeed Solutions Private Limited. All rights reserved.",
    "email": "info@scientificlogo.com",
    "sections": [
      {
        "heading": "Quick Links",
        "links": [
          { "label": "What You Get", "href": "#discover" },
          { "label": "About", "href": "#about" },
          { "label": "Pricing", "href": "#pricing" },
          { "label": "FAQ", "href": "#faq" }
        ]
      },
      {
        "heading": "Programs",
        "links": [
          { "label": "Starter Plan (upto ₹10 Cr)", "href": "#pricing" },
          { "label": "Silver Plan (₹10 Cr – ₹100 Cr)", "href": "#pricing" },
          { "label": "Gold Plan (₹100 Cr+)", "href": "#pricing" },
          { "label": "Platinum Plan (IPO Companies)", "href": "#pricing" }
        ]
      },
      {
        "heading": "Connect",
        "links": [
          { "label": "Instagram", "href": "https://www.instagram.com/scientificlogobysubhash?igsh=MWE0ejIydWZhMWNqNA==" },
          { "label": "YouTube", "href": "https://www.youtube.com/@scientificlogobysubhash" },
          { "label": "Facebook", "href": "https://www.facebook.com/share/1GEZEC3vLF/?mibextid=wwXIfr" },
          { "label": "WhatsApp", "href": "https://wa.me/919936639959" }
        ]
      }
    ]
  }
}
```

---

## Design System

### Colors (CSS Variables in `globals.css`)

```css
:root {
  --color-bg:         #0a0a0a;       /* Deep black background */
  --color-surface:    #111111;       /* Card/surface background */
  --color-surface-2:  #1a1a1a;       /* Elevated surface */
  --color-border:     #222222;       /* Subtle borders */
  --color-gold:       #c9a84c;       /* Primary gold accent */
  --color-gold-light: #e8c97e;       /* Lighter gold for highlights */
  --color-gold-dark:  #8a6f2e;       /* Darker gold for shadows */
  --color-text:       #f0ece0;       /* Primary off-white text */
  --color-text-muted: #9a9585;       /* Muted/secondary text */
  --color-warning:    #e8a020;       /* Warning amber */
  --color-danger:     #cc4444;       /* Red for "NOT for" section */
  --color-success:    #4a8c4a;       /* Green for "IS for" section */
  --color-white:      #ffffff;
  --gradient-gold: linear-gradient(135deg, #c9a84c 0%, #e8c97e 50%, #c9a84c 100%);
  --gradient-hero: radial-gradient(ellipse at top center, #1a1408 0%, #0a0a0a 70%);
}
```

### Typography

```css
/* In globals.css */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

--font-heading: 'Playfair Display', Georgia, serif;
--font-body:    'DM Sans', sans-serif;
```

**Typography Scale:**
- Hero headline: `Playfair Display`, 4xl–6xl, font-weight 700, italic for emphasis words
- Section headings: `Playfair Display`, 3xl–4xl, 600
- Section labels (small caps): `DM Sans`, 0.75rem, letter-spacing 0.15em, uppercase, gold color
- Body text: `DM Sans`, 1rem, 400, text-muted
- Card titles: `DM Sans`, 1.1rem, 600, text-primary
- Button text: `DM Sans`, 0.9rem, 600, uppercase, letter-spacing 0.05em

### Spacing

Use Tailwind spacing. Sections: `py-24 md:py-32`. Container: `max-w-6xl mx-auto px-6`.

---

## Component Rules

### Content Loading Pattern

In `page.tsx`:
```tsx
// Fetch content at build time (or runtime)
async function getContent() {
  const res = await fetch('/content.json', { cache: 'force-cache' });
  return res.json();
}

export default async function Page() {
  const content = await getContent();
  return (
    <>
      <Navbar content={content.nav} site={content.site} />
      <Hero content={content.hero} />
      {/* ... all sections get their slice of content */}
    </>
  );
}
```

Every component receives its content slice as props. **Never import content.json directly in a component.** Always prop-drill from `page.tsx`.

### Navbar
- Fixed top, full width, `backdrop-blur-md`, dark background with gold bottom border
- Logo image on left (link to `#`)
- Nav links in center: `DM Sans`, small, muted, hover gold with smooth transition
- CTA button on right: gold gradient background, dark text, slight hover scale

### Hero Section
- Full viewport height (`min-h-screen`)
- Background: `var(--gradient-hero)` + subtle gold particle or noise texture via CSS
- Badge: pill shape, gold border, tiny uppercase label
- Headline: large `Playfair Display`, centered, with line break as coded
- Wistia video embed in a rounded card with gold border glow
- Trust badges: horizontal flex row, subtle dividers, small text
- Warning banner: amber/orange background strip with Hindi text — full width, centered
- Scroll indicator: animated bounce arrow

### What You Get / Warning Section Cards
- 3-column grid (responsive: 1 on mobile, 2 on tablet, 3 on desktop)
- Dark card (`var(--color-surface)`), `1px solid var(--color-border)`
- Icon: large emoji or icon in gold-tinted circle
- Hover: border color transitions to gold, slight translateY(-4px)
- Framer Motion: stagger children with `0.1s` delay each

### About Expert Section
- Two-column layout: image left, text right (reverse on mobile)
- Image: rounded with gold border/glow ring
- Animated counters for stats (count up from 0 on scroll into view)
- Use `useInView` from Framer Motion to trigger counter animation

### Achievements Section
- 3-column horizontal gallery of award photos
- Each: image + caption title + subtitle
- Gold accent underline on title

### Who Is This For
- Two-column split: red-tinted card (NOT for) + green-tinted card (IS for)
- List items with ❌ / ✅ prefixes from content.json

### Process Section
- Vertical numbered timeline
- Each step: number in gold circle, title bold, description muted
- Connecting vertical line between steps in gold

### Pricing Section
- 4-column grid (scroll horizontally on mobile)
- Silver plan has `Most Popular` badge + gold glow border
- Each card: dark surface, deliverables as checklist with ✓
- CTA button on each card

### Testimonials
- Horizontal carousel with prev/next arrows
- Auto-play every 5s, pause on hover
- Since there are no real testimonial data in the fetched page, render 3 placeholder testimonial cards with a note to replace with real data
- Embed carousel controls from content.json labels

### FAQ
- Accordion: click to expand/collapse
- Animated height transition with Framer Motion `AnimatePresence`
- Gold `+` / `×` toggle icon

### CTA Section
- Full-width dark section with subtle gold gradient background
- Centered text + large CTA button

### Footer
- Dark background, 4-column layout
- Brand + description on left
- Three link columns from content.json
- Divider line + copyright row at bottom

---

## Animations & Motion

Use **Framer Motion** throughout. Rules:

1. **Page load:** Navbar fades in from top (`y: -20` → `y: 0`). Hero badge, headline, video, trust badges stagger in sequence (`delay: 0.2, 0.4, 0.6, 0.8`).

2. **Scroll reveals:** Every section uses `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 40 }}`. Use `viewport={{ once: true, margin: "-100px" }}`.

3. **Cards:** Stagger children in card grids with `variants` + `staggerChildren: 0.1`.

4. **Counter animation:** Stats in About section count from `0` to target value over `2s` using `useMotionValue` + `useTransform` or a simple custom hook.

5. **FAQ accordion:** `AnimatePresence` + `motion.div` with `initial={{ height: 0 }}` → `animate={{ height: 'auto' }}`.

6. **Hover states:** Cards `whileHover={{ y: -4, borderColor: 'var(--color-gold)' }}`. CTA button `whileHover={{ scale: 1.03 }}`.

7. **Warning banner:** Slow horizontal marquee/ticker using CSS `@keyframes marquee` for the Hindi warning text.

---

## Images

All images are fetched from the original URLs. Define them in a separate `images.ts` (not in content.json since they are not text):

```ts
// src/lib/images.ts
export const IMAGES = {
  logo:          'https://scientificlogo.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-17-at-17.28.30.jpeg',
  expertPhoto:   'https://scientificlogo.com/wp-content/uploads/2026/05/Dr.-Subhash-Bothare.webp',
  achievement1:  'https://scientificlogo.com/wp-content/uploads/2026/05/Dr.-Subhash-Bothare-1.webp',
  achievement2:  'https://scientificlogo.com/wp-content/uploads/2026/05/Dr.-Subhash-Bothare-with-Ramnath-Kovid.webp',
  achievement3:  'https://scientificlogo.com/wp-content/uploads/2026/05/Dr.-Subhash-Bothare-with-Nitin-Gadkari.webp',
};
```

Use `next/image` with `unoptimized` for external URLs, or configure `next.config.js` to allow the source domain.

---

## Next.js Configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scientificlogo.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

---

## Key Rules to Never Break

1. **ZERO hardcoded text in any `.tsx` file.** Every string comes from `content.json` via props. This includes aria-labels, alt text for images (use `imageAlt` fields), button labels, section headings — everything.

2. **`content.json` is the single source of truth.** Client wants to change a button label? They edit only `content.json`. Nothing else changes.

3. **No `<img>` tags.** Use `next/image` always.

4. **No inline styles.** Use Tailwind classes + CSS variables only.

5. **All sections match the original site's section order exactly:** Hero → What You Get → Warning Signs → About → Achievements → Who Is This For → Process → Pricing → Testimonials → FAQ → CTA → Footer.

6. **Mobile-first responsive design.** Every section must look polished on 375px width.

7. **Smooth scroll** behavior: `scroll-behavior: smooth` in `globals.css`. Nav anchor links use `#id` from `content.json`.

8. **Accessibility:** All interactive elements have `aria-label` values (sourced from `content.json` where applicable). Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`).

9. **Performance:** Use `loading="lazy"` equivalent on all below-fold images. Fonts loaded via Google Fonts with `display=swap`.

10. **The Wistia video** in the Hero is embedded as an `<iframe>` inside a responsive container. The URL (`https://fast.wistia.net/embed/iframe/ywdyx5gcac`) should be stored in `content.json` under `hero.videoEmbedUrl`.

---

## Development Commands

```bash
npx create-next-app@latest scientific-logo-clone --typescript --tailwind --app
cd scientific-logo-clone
npm install framer-motion lucide-react
npm run dev
```

---

## Summary Checklist for Claude Code

- [ ] `content.json` created with ALL text fields as specified
- [ ] `images.ts` created with all image URLs
- [ ] `globals.css` has all CSS variables, font imports, base styles
- [ ] `next.config.js` allows external image domain
- [ ] `page.tsx` fetches `content.json` and passes slices as props to all components
- [ ] All 12 components built and accept content via props
- [ ] Framer Motion animations implemented in all sections
- [ ] Responsive at 375px, 768px, 1280px breakpoints
- [ ] All nav anchor links work (smooth scroll)
- [ ] CTA buttons point to correct href from content.json
- [ ] Counter animation in About section works on scroll into view
- [ ] FAQ accordion works with AnimatePresence
- [ ] Testimonial carousel with auto-play and arrow controls
- [ ] Warning banner has horizontal marquee animation
- [ ] Zero hardcoded text strings anywhere in TSX files
