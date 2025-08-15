# Pantreat Landing Page

A premium, responsive landing page for Pantreat - Your AI Kitchen Assistant that reduces food waste and saves money by generating recipes from pantry ingredients.

![Pantreat Landing Page](./preview.png)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Interactive Components**: Savings calculator, pantry-to-recipe demo
- **Smooth Animations**: Framer Motion for premium feel
- **3D Placeholders**: Ready for actual 3D phone mockups and scenes
- **Form Validation**: React Hook Form with Zod validation
- **SEO Optimized**: Complete meta tags, Open Graph, JSON-LD structured data
- **Accessibility**: WCAG 2.2 AA compliant, keyboard navigation, screen reader support
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance**: Optimized for Core Web Vitals

## 📋 Sections Included

1. **Header** - Sticky navigation with smooth scroll
2. **Hero** - Animated phone mockup with primary CTA
3. **Social Proof** - Stats and press logos
4. **How It Works** - 3-step process explanation
5. **Features** - 6 key feature cards with animations
6. **Interactive Widgets** - Money saved calculator & pantry demo
7. **Deep Dive Sections** - 4 detailed feature explanations with 3D placeholders
8. **Testimonials** - Auto-rotating customer reviews carousel
9. **Pricing/Waitlist** - Email capture form with validation
10. **FAQ** - Accordion with 8 common questions
11. **Final CTA** - Last conversion opportunity
12. **Footer** - Complete site links and social media

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Navigate to the project directory**
   ```bash
   cd pantreat_landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Brand Colors

Update brand colors in `src/app/globals.css`:

```css
:root {
  --primary: #22c55e;        /* Pantreat green */
  --primary-dark: #16a34a;   /* Darker green */
  --accent: #f59e0b;         /* Accent color */
  /* ... other colors */
}
```

### Content

All content is directly in the components. Key files to edit:

- **Hero copy**: `src/components/Hero.tsx`
- **Features**: `src/components/Features.tsx` 
- **FAQ content**: `src/components/FAQ.tsx`
- **Testimonials**: `src/components/Testimonials.tsx`
- **Pricing info**: `src/components/Pricing.tsx`

### 3D Assets

Replace placeholder 3D scenes in:

- `src/components/Hero.tsx` - Hero phone mockup
- `src/components/DeepDiveSections.tsx` - Feature 3D scenes

### Email Integration

Connect the email form in `src/components/Pricing.tsx` to your email service:

```typescript
const onSubmit = async (data: EmailFormData) => {
  // Replace with your email service API call
  // Examples: ConvertKit, Mailchimp, Beehiiv
}
```

## 📊 Analytics Setup

Add your analytics tracking IDs:

1. **Google Analytics**: Add GA4 measurement ID to layout
2. **Event tracking**: Already implemented for:
   - CTA clicks
   - Email submissions  
   - Calculator interactions
   - Scroll depth
   - Widget usage

## 🔧 Performance Optimizations

- **Images**: Use next/image with AVIF/WebP formats
- **Fonts**: Google Fonts with display:swap
- **Code splitting**: Components lazy-loaded where appropriate
- **Bundle analysis**: Run `npm run build` to see bundle sizes
- **Core Web Vitals**: Optimized for LCP < 2.5s, CLS < 0.1

## 🚦 Lighthouse Targets

- Performance: ≥90 (desktop), ≥85 (mobile)
- Accessibility: ≥95  
- Best Practices: ≥95
- SEO: ≥95

## 🔐 Security Features

- Content Security Policy ready
- No exposed API keys
- Sanitized form inputs
- HTTPS enforced
- Privacy-compliant tracking

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- Mobile iOS Safari 14+
- Android Chrome 90+

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

The build output is a static site that can be deployed to:
- Netlify
- AWS S3/CloudFront  
- Cloudflare Pages
- Digital Ocean App Platform

## 📄 License

This project is built for Pantreat. Customize freely for your own products.

## 🤝 Support

For questions about this landing page implementation:

1. Check the component documentation in each file
2. Review the PRD and wireframes for design decisions  
3. Test responsiveness across devices
4. Validate forms and interactive elements

---

**Built with**: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form, Zod

**Design System**: Based on Pantreat PRD v1.0 and wireframes v1.0