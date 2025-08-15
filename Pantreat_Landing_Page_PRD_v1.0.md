# PRD: Pantreat Marketing Landing Page (v1.0)

Last updated: 2025-08-14  
Owner: Michael Hemker  
Stage: Spec Approved → Design/Build

---

## 1) Overview

Pantreat is an AI-powered cooking assistant that reduces food waste and grocery spend by generating recipes from what you already have, tracking pantry inventory, preventing expirations, and making cooking social and fun.  
This PRD defines a high-production, visually premium landing page with interactive 3D mockups to drive awareness, email signups, and app downloads.

---

## 2) Objectives & KPIs

Primary objectives:
- Communicate the value proposition: “Save money, cut waste, cook more—without the friction.”
- Establish credibility with a premium look-and-feel (3D, motion, polish).
- Convert visitors into:
  - Waitlist signups (pre-launch) OR
  - App downloads (post-launch)
  - Secondary: Newsletter signups, referral shares

KPIs (initial targets):
- CVR to primary CTA: 8–12%
- Bounce rate: < 40%
- Avg time on page: > 1:45
- LCP < 2.5s, CLS < 0.1, Lighthouse Performance > 90 (desktop), > 85 (mobile)
- Email capture error rate < 1%
- Scroll depth: 60% median

---

## 3) Target Audience

- Age 20–35, beginner to intermediate cooks
- Budget-conscious (lower to middle income)
- Tech-savvy, mobile-first
- Pain points: time/energy constraints, decision fatigue, poor ingredient management, food spoilage

---

## 4) Positioning & Messaging

Core promise:
- “Turn what you already have into dinners you’ll actually make.”

Supporting value props:
- Save money and time: Smart meal plans, optimized ingredient overlap
- Reduce waste: Expiration tracking, proactive reminders
- Friction-free: Generate recipes from text, voice, or auto from pantry
- Social & fun: Share meals, friendly leaderboards, gamified progress

Suggested headline/hero copy options (for A/B testing):
- A: “Save money. Stop wasting food. Cook what’s already in your kitchen.”
- B: “Your AI kitchen co-pilot: From pantry to plate, waste less and spend less.”
- Subhead: “Pantreat creates recipes from the ingredients you have, tracks your pantry, and helps you cook more with less effort.”

Trust/proof points:
- “Average households waste 15–25% of groceries annually.”
- “Potential savings: $1,500+ per year.”
- Social proof (when available): ratings, testimonials, logos of press, community stats.

---

## 5) Information Architecture

Single-page structure (with anchor navigation):
1. Hero (3D device mockup + CTA)
2. Social proof strip (logos, quick stats)
3. How it works (3 steps with visuals)
4. Key features (Recipe AI, Pantry Tracking, Waste Alerts, Social/Gamification)
5. Interactive demo widgets:
   - Mini “Money Saved” calculator
   - Lightweight “Build a recipe from your pantry” teaser
6. Deep-dive sections with 3D scenes:
   - Recipe Generation
   - AI Cooking Experience
   - Inventory & Expiration Tracking
   - Social & Rewards
7. Testimonials/Community
8. Pricing/Availability (or “Join the waitlist” state)
9. FAQ
10. Final CTA + App store badges (when live)
11. Footer (links: Terms, Privacy, Support, Social)

---

## 6) Page Components & Acceptance Criteria

Hero section:
- 3D interactive phone mockup showing Pantreat UI (idle orbit + subtle parallax)
- Headline + subhead + primary CTA (“Get Early Access” / “Download App”)
- Secondary CTA: “See how it works”
- Acceptance:
  - 60 FPS on modern devices or gracefully degrades to video/png sequence
  - LCP element within 2.5s on 4G connections

How it works (3 steps):
- Step 1: Add your pantry (text, voice, receipt scan)
- Step 2: Get recipes (custom filters)
- Step 3: Cook with AI walkthrough (timers, voice)
- Acceptance:
  - Clear 1–2 sentence explanation per step
  - Sub-10 second comprehension test (users understand workflow quickly)

Features grid:
- Cards with concise benefits and micro-animations
- Acceptance:
  - Each card < 140 chars body copy
  - Hover and/or scroll trigger micro-animations < 300ms duration

Interactive demo widgets:
- Money Saved Calculator:
  - Inputs: household size, monthly grocery spend
  - Output: estimated annual savings range (based on 15–25% baseline waste)
- Pantry-to-Recipe Teaser:
  - User selects 2–5 common ingredients (chips UI)
  - Displays 1 example recipe card (mock data), no backend required
- Acceptance:
  - Update results instantly
  - All inputs accessible and keyboard-navigable

3D deep-dive sections:
- Recipe Generation scene: ingredients swirling → curated recipes
- Cooking Experience scene: progress ring, voice icon waves, step overlay
- Inventory scene: pantry shelves, expiring tags
- Social scene: cards feed, reactions, leaderboard badges
- Acceptance:
  - All scenes have static fallbacks (poster images)
  - Max total 3D budget ~3–5 MB with compression and code splitting

Testimonials:
- Rotating quotes from beta users (placeholders until real)
- Acceptance:
  - Auto-rotate with pause on hover/focus
  - Markup supports Schema.org Review when real data available

Pricing/Availability:
- Pre-launch: “Free during beta” + waitlist capture
- Post-launch: Tier matrix or simple “Free + Pro” teaser
- Acceptance:
  - Transparent and concise language (no dark patterns)
  - Compliant with local price display rules if used

FAQ:
- 6–8 common questions (privacy, data use, platforms, price, availability, dietary coverage)
- Acceptance:
  - Accordion is accessible (ARIA, keyboard controls)

Footer:
- Terms, Privacy, Contact/Support, Social links, Copyright
- Acceptance:
  - Legal pages accessible and indexed, canonical URLs set

---

## 7) 3D & Motion Design Specification

Goals:
- Premium aesthetic, subtle, performant, brand-reinforcing
- Delight without distracting from conversion

Approach:
- Primary: Interactive WebGL (React Three Fiber) with progressive enhancement
- Secondary fallback: High-bitrate MP4/WebM loop or Lottie animation
- Asset formats: glTF/GLB + Draco or Meshopt; texture atlases, WebP/AVIF images
- Budget:
  - Hero scene ≤ 1.5 MB compressed
  - Each deep-dive scene ≤ 1.0 MB compressed
  - Total 3D payload ≤ 5 MB, lazy loaded by section
- Performance:
  - Target 60 FPS on modern devices; gracefully drop effects for low-power
  - Preload hero poster, defer 3D until idle/interaction
  - OffscreenCanvas where supported

Concept references (to guide 3D content—no external assets included here):
- Photoreal device mockup (iPhone/Pixel) with Pantreat UI
- Stylized pantry shelf with ingredients and expiration tags
- Ingredient particles morphing into recipe cards
- Progress dial micro-interactions for cooking steps

Motion guidelines:
- Easing: standard (easeInOut), durations 200–600ms
- Scroll-driven sequences: clamp to section; avoid scroll jank
- Reduced motion: respect prefers-reduced-motion, disable non-essential animations

---

## 8) Visual & Brand Direction

Look & feel:
- Clean, modern, minimal, high-contrast, subtle gradients
- Fresh, food-forward accents (greens/herbs), warm neutrals for “home kitchen” vibe

Typography:
- Headings: geometric sans (e.g., Poppins/Inter/Manrope)
- Body: humanist sans (e.g., Inter/Source Sans)
- Line length 60–75 chars; system fallbacks defined

Color system:
- Primary: Fresh green (e.g., #22C55E)
- Accents: Herb green (#16A34A), Citrus (#F59E0B), Neutral slate grays
- States: Focus/hover/pressed; accessible contrasts (WCAG AA)

Imagery:
- Real food textures, clean counters, diverse hands/cookware
- Avoid heavy stock feel; prioritize authenticity and inclusivity

---

## 9) Content Strategy & Copy Outline

Sections and sample copy:

- Hero:
  - H1: “Cook smarter. Waste less. Save more.”
  - Sub: “Pantreat turns your pantry into personalized recipes—complete with waste alerts, filters, and an AI cooking guide.”
  - CTA: “Get Early Access”

- Social proof strip:
  - “Join thousands of home cooks saving money with Pantreat.” [placeholder until validated]
  - Stat chips: “Up to $1,500 saved/yr”, “15–25% less waste”, “5 min to your first meal plan”

- How it works:
  - “Add your pantry in minutes—text, voice, or receipt scan.”
  - “Pantreat curates recipes tailored to your time, diet, and cuisine.”
  - “Cook step-by-step with hands-free voice and built-in timers.”

- Features:
  - “Recipe generation from what you have”
  - “Smart inventory + expiration alerts”
  - “Filters for time, diet, nutrition, cuisine”
  - “Social feed, leaderboards, and meal sharing”

- Interactive widgets:
  - “How much could you save?” calculator
  - “What can I cook with…” pantry picker teaser

- Deep dives:
  - Clear, benefit-first copy. Screens show real UI flows.

- Testimonials:
  - “I cooked 4 nights this week and spent less on groceries.” — [Name], [City] (placeholder)

- FAQ:
  - “How does Pantreat track expirations?”
  - “Is my data private?”
  - “Does it support vegetarian, vegan, gluten-free?”
  - “What platforms are supported?”

- Final CTA:
  - “Ready to waste less food and save more?” [CTA]

Tone: encouraging, pragmatic, zero guilt, low-friction.

---

## 10) Technical Requirements

Stack:
- Next.js (App Router), React 18
- Styling: Tailwind CSS or CSS Modules
- 3D: React Three Fiber + drei; GSAP/Framer Motion for UI micro-animations
- Forms: React Hook Form + Zod validation
- Images: next/image with AVIF/WebP, responsive sizes
- CMS (optional): Sanity/Contentful for FAQs, testimonials, copy blocks

Performance:
- SSG/ISR for main page
- Edge caching via CDN
- Code-split 3D scenes; lazy load non-critical
- Preconnect/preload for key assets
- Targets: LCP < 2.5s, FID/INP responsive, CLS < 0.1, TBT < 200ms

Accessibility:
- WCAG 2.2 AA
- Proper landmarks, headings, alt text
- Keyboard and screen reader support
- Respect reduced motion

SEO:
- Semantic HTML, descriptive titles/meta
- Open Graph/Twitter cards with poster images
- JSON-LD: WebSite + Product + FAQPage
- Clean URLs, canonical tags
- Sitemap + robots

Analytics & tracking:
- GA4 or PostHog
- Event tracking: CTA clicks, scroll depth, widget interactions, outbound store clicks
- UTM capture and attribution
- Privacy-compliant cookie banner if required

Integrations:
- Email: ConvertKit/Mailchimp/Beehiiv (double opt-in)
- App Store badges when live
- Social share OG images per section (for deep links)

Security & privacy:
- HTTPS, HSTS, modern TLS
- CSP (script-src nonce/sha256), SRI for critical third-party
- GDPR/CCPA compliant consent flows; clear privacy policy

Localization:
- Phase 1: English (US)
- Prepare i18n scaffolding; copy from CMS

---

## 11) Data & Form Requirements

Email capture:
- Fields: email (required), optional “how did you hear about us?”
- Validation: RFC-compliant, inline error states
- Success: in-page confirmation, no full-page redirect; optional referral code generation
- Double opt-in flow supported

Calculator:
- Inputs: household size (1–6+), monthly spend ($)
- Output: estimated annual savings range using 15–25% waste baseline
- Disclaimer: “Estimates for illustration only; results vary.”

---

## 12) A/B Test Plan (Phase 1)

- Hero headline (A vs B variants above)
- CTA copy: “Get Early Access” vs “Start Saving Today”
- 3D interactive vs. video fallback default
- Social proof presence early vs. later
- Calculator position: above fold vs. mid-page

Success metric: lift in primary CTA CTR and overall conversion.

---

## 13) Acceptance Criteria (Global)

- Lighthouse scores: Performance ≥ 90 (desktop), ≥ 85 (mobile); Accessibility ≥ 95; SEO ≥ 95; Best Practices ≥ 95
- Visual QA across modern browsers and iOS/Android WebView
- All interactive elements have focus states and ARIA where needed
- TTI < 2s on fast 4G; page weight (initial) ≤ 1.5 MB excluding 3D lazy loads
- Error states handled gracefully; no JS blocking of content
- 3D scenes do not block main thread during initial paint

---

## 14) Dependencies & Assets

- High-fidelity mobile UI screens of:
  - Home (social), Recipe results, Cooking walkthrough, Pantry inventory, Expiration alerts
- 3D assets:
  - Device model (phone), pantry shelf, ingredient props (low poly/high-quality textures)
  - Scene lighting presets, HDRIs (optimized)
- Brand assets:
  - Logo (SVG), color tokens, typography
- Legal pages: Privacy Policy, Terms of Service

---

## 15) Timeline (Aggressive)

- Week 1: Finalize PRD, copy draft, wireframes, 3D concept blockouts
- Week 2: Visual design, 3D asset production, front-end scaffolding, hero build
- Week 3: Section builds, widgets, integrations, CMS wiring, SEO
- Week 4: QA, performance tuning, accessibility pass, A/B setup, launch

---

## 16) Risks & Mitigations

- 3D performance on low-end devices → Progressive enhancement + video fallback + reduced detail mode
- Asset bloat → Strict budgets, texture compression, lazy loading
- Copy not converting → A/B tests, rapid iteration via CMS
- Claims compliance → Use ranges with sources; avoid definitive savings claims until validated

---

## 17) Out of Scope (v1)

- Full blog or resources hub
- Multi-language content
- Complex account-based personalization
- Server-side live demo using real AI backend (v1 uses mocked demo)

---

## 18) Success Metrics Post-Launch (30/60/90)

- 30 days: ≥ 10% CVR to email or download; bounce < 45%
- 60 days: +20% lift via A/B improvements; ≥ 2 validated testimonials
- 90 days: Organic traffic growth ≥ 30%; store conversion tracking integrated

---

## 19) Open Questions

- Pre-launch or live? Which primary CTA now?
- Which email provider do you prefer (ConvertKit/Mailchimp/Beehiiv)?
- Do we have initial testimonials or should we use placeholders?
- Any brand constraints (existing logo/colors/typography)?
- Mobile-first vs. equal emphasis on desktop?
- App store pages ready date for badge placement?

---

## 20) Build Notes (Dev Checklist)

- Next.js App Router project, TypeScript, ESLint, Prettier
- Components: Hero3D, ProofStrip, HowItWorks, FeaturesGrid, Calculator, PantryDemo, DeepDiveRecipe3D, DeepDivePantry3D, Testimonials, FAQ, Footer
- Env flags for “reduced motion,” “no webgl,” and “beta vs live”
- Analytics events: cta_click, email_submit, calc_change, demo_select, scroll_50, scroll_90
- SEO: meta, OG, JSON-LD (FAQPage, Product), sitemap
- Accessibility: tab order, aria-expanded, aria-controls, alt on images, focus rings
- CI checks: type check, lint, Lighthouse CI (budget assertions)

---

If you want, I can also provide:
- A wireframe sketch for each section
- A 3D asset brief with exact scene lists, poly budgets, and lighting notes
- A copy deck you can paste into a CMS or Next.js constants files
