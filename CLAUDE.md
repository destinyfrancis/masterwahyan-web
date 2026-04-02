# masterwahyan-web — Claude Project Notes

## Project
Personal brand website for Master Wahyan (八字命理師).
Deploy target: Cloudflare Pages → masterwahyan.com

---

## Tech Stack
- React 18 + Vite 5 + TypeScript
- Tailwind CSS v3
- Lucide React v1.x (icons)
- Node 20.11.0 (local)

## Known Incompatibilities — DO NOT USE
- **framer-motion v12** — causes fatal module init crash (`Cannot read properties of undefined (reading 'S')`). The entire React tree fails to mount. Removed completely; use CSS keyframe animations instead.
- **create-vite latest (v9+)** — requires Node >=20.19.0. Use `create-vite@5` with Node 20.11.
- **shadcn-ui CLI** — peer dep conflicts with React 18 + this stack. Install Radix UI primitives directly instead.
- **Three.js / @react-three/fiber / @react-three/drei** — Removed completely (2026-04-03). Hero uses pure CSS planet orbits (HeroStatic.tsx). SolarSystem.tsx, HeroSection.tsx, ErrorBoundary.tsx deleted.

## Animations
All scroll/entrance animations use plain CSS keyframes defined in `src/index.css`:
- `.animate-fade-rise` — 0.8s ease-out (hero text entrance)
- `.animate-fade-rise-delay` — 0.2s delay
- `.animate-fade-rise-delay-2` — 0.4s delay
- `.animate-fade-rise-delay-3` — 0.6s delay
- `.animate-scroll-bounce` — infinite bounce for scroll indicator
- `.animate-wa-ping` — WhatsApp button pulse ring
- `orbit-spin` — CSS keyframe for planetary orbits (6 planets, staggered delays, GPU-accelerated with `willChange: transform`)

## Contact Links (src/lib/utils.ts)
- WhatsApp: `https://wa.me/message/3CH6O4BQWF7CO1`
- Instagram: `https://www.instagram.com/masterwahyan/`
- App Store: placeholder `https://apps.apple.com/app/id1234567890`

## Color Palette
- Gold: `#C9A96E`
- Hero background: `#0A0D1A`
- Near-white background: `hsl(0 0% 98%)`

## Fonts
- Display/headings: `Instrument Serif` (Google Fonts, loaded in index.html)
- Body: `Inter` (Google Fonts)
- Always apply via inline `style={{ fontFamily: '...' }}` or Tailwind `font-display`/`font-body` classes

## Build & Deploy
```bash
npm run build      # tsc + vite build → dist/
npm run preview    # serve dist/ locally
```
Cloudflare Pages: build command `npm run build`, output dir `dist`, Node 20.
`public/_redirects` contains `/* /index.html 200` for SPA routing.

## File Structure
```
src/
  components/
    Navigation.tsx        — sticky nav, liquid-glass, IntersectionObserver, mobile hamburger
    HeroStatic.tsx        — CSS-only hero with solar system (dark bg + star dots + sun + 6 planets with orbit-spin animation)
    SolarSystem.tsx       — Three.js solar system (EXCLUDED from App.tsx, keep for future reference)
    HeroSection.tsx       — Three.js hero wrapper (EXCLUDED, keep for future reference)
    ErrorBoundary.tsx     — class-based error boundary for Three.js
    ServicesSection.tsx   — 6 pricing cards
    AppShowcase.tsx       — Bazi Master Pro app mockup
    FAQSection.tsx        — custom accordion, no framer-motion
    TestimonialsSection.tsx
    Footer.tsx
    WhatsAppButton.tsx    — fixed green floating button
  lib/utils.ts            — cn(), WHATSAPP_URL, INSTAGRAM_URL, APP_STORE_URL
  index.css               — CSS variables, Tailwind directives, all custom animations (including orbit-spin keyframe)
```

## Sections & Anchors
| Section | id | Background |
|---------|----|-----------|
| Hero | `#hero` | `#0A0D1A` |
| Services | `#services` | near-white |
| App | `#app` | `hsl(220 20% 97%)` secondary |
| FAQ | `#faq` | near-white |
| Testimonials | `#testimonials` | secondary |
| Footer | — | `#0A0D1A` |

## Navigation Behaviour
`IntersectionObserver` on `#hero`: when hero is visible → nav is `liquid-glass` transparent; when hero scrolls out → nav becomes `bg-white/95 backdrop-blur shadow-sm`.

## Liquid Glass Effect
Defined as `.liquid-glass` in `index.css`. Used on Navigation when over dark hero.

## CSS Solar System Implementation (HeroStatic.tsx)
Pure CSS planet orbits with 6 planets:
- **Mercury** (3s orbit, 5px blue)
- **Venus** (7s orbit, 6px yellow)
- **Earth** (12s orbit, 6px blue)
- **Mars** (20s orbit, 5px red)
- **Jupiter** (45s orbit, 10px orange)
- **Saturn** (90s orbit, 9px pale-yellow)

Each planet wraps in a div with `orbit-spin` animation (defined in index.css) and staggered `animationDelay` for visual variety. All use `willChange: transform` for GPU acceleration → zero jank.

Sun positioned at center with gold glow. Orbital rings rendered as static 1px borders for reference.

## Testimonials & Profile Update (2026-04-02)

### Testimonials
✅ **Replaced dummy testimonials with 9 real customer feedback**
- Source: Extracted from 184 WhatsApp/Telegram/IG screenshots using GLM-OCR (mlx-community/GLM-OCR-bf16)
- Raw OCR output saved to: `/Volumes/4TB/francistam/Documents/feedback_output/`
  - `ocr_progress.json`: Full OCR results for all 184 images
  - `testimonials_raw.md`: Unfiltered human-readable version
  - `testimonials_website.json`: Top 20 curated testimonials
- **Implementation**: Updated `TestimonialsSection.tsx` with 9 best testimonials covering:
  - 命盤批算 (Bazi reading) — 3 testimonials
  - 流年驗證 (Year-by-year verification) — 2 testimonials  
  - 感情分析 (Relationship analysis) — 2 testimonials
  - 婚姻 (Marriage) — 1 testimonial
  - 奇門遁甲 (Qi Men Dun Jia) — 1 testimonial
- **Privacy**: Displays as "匿名客戶" (Anonymous customer) with random initial avatar
- ✅ Build passes with no TypeScript errors

### Profile Image
✅ **Added professional profile picture to Hero section**
- Image: `/public/profile.jpg` (circular, gold-bordered with glow effect)
- Placement: Top of HeroStatic, above main heading
- Styling: 
  - Responsive sizes: w-32 h-32 (mobile) → w-40 h-40 (tablet)
  - Gold border: `rgba(201,169,110,0.5)` with glow shadow
  - Entrance animation: `animate-fade-rise` (0.8s fade-in)
- ✅ Build passes, preview server running on http://localhost:4175

## Remaining TODOs
- [ ] Replace App Store URL placeholder when live
- [ ] Add real favicon (currently uses Vite default)
- [ ] SEO: add Open Graph meta tags in index.html
- [ ] Performance: consider lazy-loading sections below the fold (currently not critical — page fast)
- [ ] Optional: Test Three.js solar system in isolated branch, consider re-integrating if stability improves in future Three.js versions
