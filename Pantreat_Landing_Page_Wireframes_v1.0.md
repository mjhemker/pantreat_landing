# Pantreat Landing Page Wireframes (v1.0)

Last updated: 2025-08-14  
Owner: Michael Hemker  
Reference: Pantreat_Landing_Page_PRD_v1.0.md

---

## 1) Layout System

- Breakpoints:  
  - Mobile: ≤ 640px  
  - Tablet: 641–1024px  
  - Desktop: ≥ 1025px
- Grid:  
  - Desktop: 12 columns, 80–120px max content width (clamped), 24px gutters  
  - Mobile: 4 columns, 16px gutters
- Spacing scale: 4/8/12/16/24/32/48/64
- Safe area insets respected (iOS).  
- Max line length: 60–75 characters.

Legend:  
[ ] denotes components; dashed boxes show media/3D holders.  
Annotations numbered (1), (2), etc.

---

## 2) Header / Nav

Desktop
```
+----------------------------------------------------------------------------------+
| (1) Logo                (2) How it works  Features  FAQ        (3) CTA: Get App |
+----------------------------------------------------------------------------------+
```
Mobile
```
+----------------------------------+
| (1) Logo          (3) CTA Button |
+----------------------------------+
| (2) Menu (hamburger)             |
+----------------------------------+
```
Notes:
- Sticky after scroll > 64px, shrink height.  
- CTA contrasts with background.

---

## 3) Hero Section

Desktop
```
+----------------------------------------------------------------------------------+
|                                                                                ^ |
| (4) Eyebrow: AI kitchen assistant                                               | 
| (5) H1: Cook smarter. Waste less. Save more.                                    |
| (6) Subhead: Pantreat turns your pantry into personalized recipes...             |
| (7) [ Get Early Access ]   [ See how it works ]                                  |
|                                                                                  |
|                                                      -------------------------   |
|                                                      |  (8) 3D Phone Mock     |  |
|                                                      |  (tilt/parallax)       |  |
|                                                      -------------------------   |
+----------------------------------------------------------------------------------+
```
Mobile
```
+----------------------------------+
| (4) Eyebrow                      |
| (5) H1                           |
| (6) Subhead                      |
| (7) [ Get Early Access ]         |
| (7b) [ See how it works ]        |
|                                  |
|  -----------------------------   |
|  | (8) 3D Phone Mock        |   |
|  -----------------------------   |
+----------------------------------+
```
Notes:
- (8) has static poster fallback; lazy-init WebGL on interaction/idle.

---

## 4) Social Proof Strip

Desktop
```
+----------------------------------------------------------------------------------+
| (9) Stat Chips: [$1,500 saved/yr] [15–25% less waste] [5 min to first plan]     |
| (10) Logos: [logo][logo][logo][logo]                                            |
+----------------------------------------------------------------------------------+
```
Mobile
```
+----------------------------------+
| (9) Horizontal scroll stats      |
| (10) Logos in 2 rows             |
+----------------------------------+
```

---

## 5) How It Works (3 Steps)

Desktop
```
+----------------------------------------------------------------------------------+
| (11) Step 1: Add your pantry   | (12) Step 2: Get recipes  | (13) Step 3: Cook  |
|  [icon] Short copy              |  [icon] Short copy        |  [icon] Short copy |
+----------------------------------------------------------------------------------+
```
Mobile
```
+----------------------------------+
| (11) Step 1                      |
|  [icon] Short copy               |
|----------------------------------|
| (12) Step 2                      |
|  [icon] Short copy               |
|----------------------------------|
| (13) Step 3                      |
|  [icon] Short copy               |
+----------------------------------+
```

---

## 6) Features Grid

Desktop (2 rows x 3 columns)
```
+----------------------------------------------------------------------------------+
| (14) Recipe from what you have | (15) Inventory + alerts | (16) Powerful filters |
| [icon] 2–3 lines               | [icon] 2–3 lines         | [icon] 2–3 lines      |
|--------------------------------+--------------------------+-----------------------|
| (17) Social & gamified         | (18) AI cooking guide    | (19) Hands-free voice |
| [icon] 2–3 lines               | [icon] 2–3 lines         | [icon] 2–3 lines      |
+----------------------------------------------------------------------------------+
```
Mobile (single column)
```
[ (14) ]
[ (15) ]
[ (16) ]
[ (17) ]
[ (18) ]
[ (19) ]
```

---

## 7) Interactive Widgets

A) Money Saved Calculator
```
+--------------------------------------------------+
| (20) Title: How much could you save?             |
| (21) Household size: [ - 2 + ]                   |
| (22) Monthly spend: [$ 450]                      |
|--------------------------------------------------|
| (23) Estimated annual savings: $XXX–$YYY         |
| (24) Disclaimer text                             |
+--------------------------------------------------+
```

B) Pantry-to-Recipe Teaser
```
+--------------------------------------------------+
| (25) Title: What can I cook with...              |
| (26) Ingredient chips: [egg][rice][spinach][+]   |
|--------------------------------------------------|
| (27) Example recipe card (mock)                  |
|  [Thumb]  Title                                  |
|  Time • Servings • Tags                          |
|  [View sample]                                   |
+--------------------------------------------------+
```

Mobile: Widgets stack vertically, full-bleed within safe margins.

---

## 8) Deep-Dive Sections (with 3D)

1) Recipe Generation
```
+----------------------------------------------------------------------------------+
| (28) 3D: Ingredient particles -> recipe cards     | (29) Bullets (benefits)     |
|                                                  | - Uses your pantry          |
|                                                  | - Filters for time/diet     |
+----------------------------------------------------------------------------------+
```
2) AI Cooking Experience
```
+----------------------------------------------------------------------------------+
| (30) 3D: Progress ring, voice waves              | (31) Bullets                |
|                                                  | - Step-by-step + timers     |
|                                                  | - Voice for hands-free      |
+----------------------------------------------------------------------------------+
```
3) Inventory & Expiration Tracking
```
+----------------------------------------------------------------------------------+
| (32) 3D: Pantry shelves + expiring tags          | (33) Bullets                |
|                                                  | - Receipt scan / voice add  |
|                                                  | - Smart reminders           |
+----------------------------------------------------------------------------------+
```
4) Social & Rewards
```
+----------------------------------------------------------------------------------+
| (34) 3D: Feed cards, badges                      | (35) Bullets                |
|                                                  | - Share meals               |
|                                                  | - Leaderboards & points     |
+----------------------------------------------------------------------------------+
```
Mobile: 3D poster on top, bullets below.

---

## 9) Testimonials

```
+--------------------------------------------------+
| (36) Carousel:                                   |
|  [Quote]  “I cooked 4 nights this week...”       |
|  — Name, City                                    |
|  [◀︎]  • • ○  [▶︎]                               |
+--------------------------------------------------+
```

---

## 10) Pricing / Availability (or Waitlist)

```
+--------------------------------------------------+
| (37) Headline: Join the beta                     |
| (38) Copy: Free during beta                      |
| (39) Form: [ Email __________________ ] [ Join ] |
| (40) Trust copy / privacy note                   |
+--------------------------------------------------+
```

---

## 11) FAQ

```
+--------------------------------------------------+
| (41) FAQ Accordion                               |
|  > How does Pantreat track expirations?          |
|  > Is my data private?                           |
|  > Dietary coverage?                             |
|  > Platforms supported?                          |
+--------------------------------------------------+
```

---

## 12) Final CTA

```
+--------------------------------------------------+
| (42) H2: Ready to waste less and save more?      |
| (43) [ Get Early Access ]   [ Learn more ]       |
+--------------------------------------------------+
```

---

## 13) Footer

```
+----------------------------------------------------------------------------------+
| (44) Logo | (45) Links: Terms • Privacy • Support • Social • Contact            |
| (46) Copyright © Pantreat                     (47) Social icons                 |
+----------------------------------------------------------------------------------+
```

---

## 14) Component Inventory & IDs

- Header: `site-header`, CTA: `cta-primary`
- Hero: `section-hero`, 3D: `hero-3d-canvas`, fallback: `hero-poster`
- Proof strip: `section-proof`
- How it works: `section-how`
- Features: `section-features`
- Calculator: `widget-savings`
- Pantry teaser: `widget-pantry`
- Deep dives: `section-recipe3d`, `section-cooking3d`, `section-pantry3d`, `section-social3d`
- Testimonials: `section-testimonials`
- Pricing/Waitlist: `section-pricing`
- FAQ: `section-faq`
- Final CTA: `section-final-cta`
- Footer: `site-footer`

---

## 15) Content Placeholders (Max lengths)

- H1: ≤ 56 chars  
- Subhead: ≤ 140 chars  
- Feature card body: ≤ 140 chars  
- FAQ answers: ≤ 320 chars

---

## 16) Asset & 3D Fallback Notes

- Hero poster: 1600×1000 AVIF/WebP, < 200KB  
- Section posters: 1400×900, < 150KB each  
- 3D total budget ≤ 5MB, lazy-loaded per section  
- Video fallbacks: MP4/WebM 8–12s loops, muted, < 1.5MB each

---

## 17) Accessibility & Interaction Notes

- All interactive elements focusable; visible focus states.  
- Prefers-reduced-motion: disable 3D autoplay, use posters.  
- Accordion ARIA: `aria-expanded`, `aria-controls`.  
- Calculator inputs labeled; errors inline.  
- Carousel: pause on hover/focus; keyboard left/right.

---

## 18) Mobile-First Notes

- Stack sections vertically; avoid side-by-side beyond 2 items.  
- Use native inputs for number/currency.  
- Sticky footer CTA on mobile on key sections (optional A/B).

---

## 19) Quick Build Handoff Checklist

- Sections implemented as composable components aligned to IDs above.  
- Anchors in header scroll to sections; update URL hash.  
- Lazy load 3D bundles on section in-view.  
- Track events: `cta_click`, `email_submit`, `calc_change`, `demo_select`, `scroll_50`, `scroll_90`.  
- Schema: `FAQPage` JSON-LD, `Product` for Pantreat.  
- Test on Safari iOS, Chrome/Edge, Android Chrome.  
- Lighthouse budgets: as per PRD.
