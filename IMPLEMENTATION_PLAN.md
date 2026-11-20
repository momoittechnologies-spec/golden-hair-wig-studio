# Strategic Implementation Plan: Golden Hair Wig Studio Portal
**Target Locations:** Kadapa (HQ), Proddatur, Madanapalle, Nandyal (Andhra Pradesh, India)  
**Production Host:** Cloudflare Pages (`https://golden-hair-wig-studio.pages.dev/`)  
**Repository:** `momoittechnologies-spec/golden-hair-wig-studio`  
**Date:** November 20, 2026  
**Author:** Senior Full-Stack Developer, UI/UX Designer, CRO Strategist, Technical SEO Expert, Accessibility Engineer & QA Lead

---

## 1. Project Objectives & Architectural Vision

The mission is to transform Golden Hair Wig Studio from a single-page prototype into a **luxury, trustworthy, mobile-first, multi-page business portal**. The platform must establish undeniable regional authority across Kadapa, Proddatur, Madanapalle, and Nandyal, rank in local search engines, and maximize conversion into authentic WhatsApp consultations and phone calls.

### Core Architectural Pillars
1. **Multi-Route Navigation (React Router v7/v6):**
   - Clean client-side routing with deep-link preservation on Cloudflare Pages via `_redirects`.
   - Dedicated landing pages for each service and branch location to capture high-intent regional organic search queries.
2. **Elevated Editorial Design System:**
   - Strict palette: Deep Charcoal (`#151515`), Warm Ivory (`#F8F5EF`), Muted Gold (`#B89454`), Soft Beige (`#EDE5D8`), and Pure White (`#FFFFFF`).
   - High text contrast exceeding WCAG 2.2 AA standards (minimum 4.5:1 for body copy).
   - Fluid typography, generous whitespace, refined micro-interactions, and full `prefers-reduced-motion` compliance.
3. **Hyper-Localized SEO & Structured Data:**
   - Standalone URL hierarchy: `/locations/:city` and `/services/:serviceSlug`.
   - Comprehensive `LocalBusiness` / `HairSalon` Schema.org JSON-LD definitions with coordinates, verified Kadapa HQ address, and branch contact details.
   - Dynamic document titles, meta descriptions, canonical tags, `sitemap.xml`, and `robots.txt`.
4. **Frictionless CRO & Privacy-First WhatsApp Engine:**
   - Floating WhatsApp button and sticky mobile action bar with zero viewport obstruction.
   - Pre-filled, context-aware WhatsApp click-to-chat links carrying the active location and chosen service.
   - Two-step consultation enquiry modal with robust Indian mobile number validation (`+91` 10-digit regex) and graceful international handling.
5. **Medical Ethics & Cosmetic Transparency:**
   - Clear and honest disclaimers that hair systems are external non-surgical cosmetic prosthetics that require periodic maintenance, without making false claims of biological hair regrowth.
   - Transparent maintenance expectations and allergy patch testing guidance.

---

## 2. Information Architecture & URL Routing Matrix

```
/ (Homepage)
├── /services (Services Directory & Comparison)
│   ├── /services/hair-bonding (Non-Surgical Hair Bonding for Active Lifestyles)
│   ├── /services/hair-clipping (Removable Daily Clip-On Hair Systems)
│   ├── /services/hair-patch (Custom Micro-Skin & Lace Hair Patches)
│   ├── /services/hair-weaving (Non-Surgical Hair Weaving & Tracking)
│   ├── /services/hair-system-maintenance (Servicing, Cleaning, Re-Taping & Re-Bonding)
│   └── /services/ladies-hair-extensions (Crown Fillers, Volume Toppers & Wigs)
├── /locations (Regional Branch Overview)
│   ├── /locations/kadapa (HQ Studio — Railway Station Road)
│   ├── /locations/proddatur (Branch Hub — Proddatur Town)
│   ├── /locations/madanapalle (Branch Hub — Madanapalle Center)
│   └── /locations/nandyal (Branch Hub — Nandyal District)
├── /about (Studio Philosophy, Hygiene Protocols & Mr. Swarup's Story)
├── /gallery (Verified Transformations & Interactive Before/After Comparisons)
├── /contact (Branch Directory, Direct Phone Lines & Consultation Form)
├── /privacy-policy (Client Privacy, Image Consent & Scalp Safety Disclaimers)
└── /terms (Cosmetic Services Disclaimer, Maintenance Terms & Cancellation Policies)
```

---

## 3. Phased Execution Roadmap

### Phase 2: Design System & Token Configuration
- Update `tailwind.config.js` with exact tokens:
  - `charcoal`: `#151515` (primary surface & text)
  - `ivory`: `#F8F5EF` (soft luxury background)
  - `gold`: `#B89454` (refined warm accent)
  - `gold-light`: `#D4AF37` / `#C5A059`
  - `beige`: `#EDE5D8` (card borders and neutral containers)
  - `white`: `#FFFFFF`
- Configure typography utility classes for editorial headings (Playfair Display / Cormorant serif aesthetic) paired with modern readable sans-serif (Plus Jakarta Sans).
- Ensure focus-visible rings (`ring-2 ring-gold-light ring-offset-2`) on all interactive buttons, links, and form fields.

### Phase 3: Homepage Refinement
- Maintain high-impact hero with real transformation imagery, authentic headlines, and primary WhatsApp consultation CTA.
- Retain high-converting interactive assets:
  - Custom image slider with pause-on-hover and accessible controls.
  - Interactive Before/After slider with touch/drag and keyboard support.
  - 3D Hair Patch Anatomy interactive layer exploder.
  - Hair Loss Stage Guide (Norwood classification) to educate prospects.
  - 4-Step Journey: Private Consultation -> Scalp Mapping & Texture Matching -> Precision Custom Fitting -> Styling & Maintenance Support.
  - Verified business details and "Powered by MOMO IT TECHNOLOGIES" in the footer.

### Phase 4: Dedicated Service Pages
- Create `src/pages/ServicesPage.tsx` and `src/pages/ServiceDetailPage.tsx` fed by a typed registry in `src/data/servicesData.ts`.
- Content structure per service:
  1. H1 with high-intent keywords (e.g., "Non-Surgical Hair Bonding in Andhra Pradesh").
  2. Who is this suitable for? (Active sports, partial balding, daily removable preference).
  3. Attachment & application mechanism.
  4. Maintenance frequency & hygiene care.
  5. Honest pros & cons (no magical claims).
  6. Service-specific FAQs.
  7. Pre-filled WhatsApp consultation trigger.

### Phase 5: Dedicated Regional Location Pages
- Create `src/pages/LocationsPage.tsx` and `src/pages/LocationDetailPage.tsx` driven by `src/data/businessData.ts`.
- Content structure per branch:
  1. Localized H1 (e.g., "Golden Hair Wig Studio Kadapa — Best Hair Patch & Bonding Studio").
  2. Verified address: Kadapa HQ (`1st Floor, Door No: 4-622-1, Beside Shirdi Sai Sweets, Near RTC Bus Stand, Railway Station Road, Kadapa - 516001`).
  3. Clearly flagged placeholder status for branches requiring final shopfront door confirmation (Proddatur, Madanapalle, Nandyal), with active direct telephone routing to Mr. Swarup.
  4. Working Google Maps directions link (`https://maps.google.com/?q=...`).
  5. Branch-specific consultation booking card with instant WhatsApp pre-fill.
  6. Operating hours (`9:00 AM - 9:00 PM, Open 7 Days`).

### Phase 6: WhatsApp & Lead Conversion Engine
- Centralize WhatsApp generation in `src/utils/whatsapp.ts`:
  - Primary number: `918617264887`
  - Secondary fallback: `918609256195`
  - Dynamic encoding of client name, preferred location, preferred service, and enquiry type.
- Polished floating WhatsApp button with subtle pulse badge and accessible label.
- Sticky mobile bottom bar with click-to-call (`tel:+918617264887`) and "Book Consultation" triggers.
- Multi-step modal (`BookingModal.tsx`) with verified field validation, loading states, confetti celebration, and honest "Consultation Enquiry Sent" confirmation.

### Phase 7: Ethics, Medical Accuracy & Legal Trust
- Explicit non-medical disclaimers on every page:
  *"Hair patches and systems are non-surgical, non-invasive cosmetic hair replacement solutions. They do not stimulate biological follicle growth or cure alopecia. Suitability, bonding longevity, and maintenance cycles depend on individual scalp perspiration and skin characteristics."*
- Recommend patch testing for bonding adhesives and tapes for sensitive skin.
- Reassure complete privacy: private VIP styling cabins for all appointments.
- Add `/privacy-policy` and `/terms` pages.

### Phase 8: Technical SEO & Discoverability
- Generate `public/sitemap.xml` detailing all static and parameterized routes.
- Generate `public/robots.txt` allowing full indexing and linking to sitemap.
- Implement an SEO meta manager component (`src/components/SEOHead.tsx`) that dynamically sets `<title>`, `<meta name="description">`, Open Graph tags, canonical URLs, and Schema.org JSON-LD.
- Add multi-location Schema.org JSON-LD representing `HairSalon` / `BeautySalon` with full address data and business phone numbers.

### Phase 9: Performance, Accessibility & QA
- Image lazy loading with `loading="lazy"` and explicit dimensions to prevent layout shifts.
- Complete keyboard accessibility (`Tab`, `Escape`, `Enter`, `Space`) across modals, sliders, and navigation drawers.
- Verification via browser automated testing at 1440px (Desktop), 768px (Tablet), and 375px (Mobile).
- Zero console errors and zero horizontal layout overflow.

### Phase 10: Build, CI/CD & Cloudflare Edge Deployment
- Local `npm run build` verification.
- Git commit with descriptive semantic message.
- Git push to `origin/main`.
- Cloudflare Pages automated deployment verification on `https://golden-hair-wig-studio.pages.dev/`.
- Production verification and final QA report creation (`QA_REPORT.md` and `CONTENT_REQUIRED.md`).
