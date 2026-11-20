# Prioritized Implementation Plan: Light Theme & Portal Overhaul
**Project:** Golden Hair Wig Studio  
**Primary Market:** Andhra Pradesh, India (Kadapa HQ, Proddatur, Madanapalle, Nandyal)  
**Host:** Cloudflare Pages (`https://golden-hair-wig-studio.pages.dev/`)  
**Date:** November 20, 2026  
**Status:** In Execution

---

## 1. Non-Negotiable Core Objectives

1. **Light Theme Transformation Throughout:**
   - Eliminate all black backgrounds, dark obsidian sections, and heavy dark styling.
   - Implement the owner's exact light palette:
     * Primary Background: `#FFFFFF` (pure clean white)
     * Alternate Section Background: `#FAF8F4` (soft warm ivory)
     * Warm Ivory Cards: `#F5F0E8`
     * Soft Neutral Borders: `#E8E2D8`
     * Primary Headings: `#242424` (deep readable charcoal)
     * Body Text: `#505050` (soft charcoal; never low-contrast gold)
     * Premium Accent Gold: `#B58D4A`
     * Hover Accent: `#96713B`
     * Subtle Sage Accent: `#E8EEE8`
2. **Professional Header & Navigation Rebuild:**
   - Stationary clean white header with subtle bottom border (`#E8E2D8`).
   - Logo on left, centered navigation with accessible dropdowns:
     * **Hair Replacement:** Non-Surgical Hair Replacement, Hair Systems for Men, Hair Patch Solutions, How It Works.
     * **Our Services:** Hair Bonding, Hair Clipping, Hair Patch Fitting, Hair System Maintenance, Hair Wigs, Hair Replacement Consultation.
     * **Our Locations:** Kadapa, Proddatur, Madanapalle, Nandyal.
     * **Transformations** (`/gallery`).
     * **About Us** (`/about`).
     * **Contact** (`/contact`).
   - Right side: Call link (`tel:+918617264887`) and prominent 'Book Consultation' CTA.
   - Accessible keyboard controls, `aria-expanded`, `aria-haspopup`, and mobile drawer with nested items.
3. **Tasteful Text Marquee Relocation & Styling:**
   - Remove marquee from header and top banner.
   - Place ONE horizontal marquee immediately **AFTER the complete hero section and primary CTA**.
   - Background: `#FAF8F4`, border: `#E8E2D8`, text: `#242424`, slow seamless scroll, pause on hover/focus, static on `prefers-reduced-motion`.
4. **Homepage Information Architecture Order:**
   A. Professional sticky light navigation
   B. Clean, visually compelling hero with owner's recommended H1 (*"Natural-Looking Hair Replacement, Designed for Your Confidence"*)
   C. Subtle service marquee
   D. Trust and reassurance section (hygiene, private suites, 10+ years experience, verified facts)
   E. Our Hair Replacement Solutions
   F. Why Choose Golden Hair Wig Studio (comparison vs transplant)
   G. Authentic Before & After Transformations (split comparison)
   H. Simple 4-Step Consultation & Fitting Process
   I. Service Locations (Kadapa, Proddatur, Madanapalle, Nandyal)
   J. Verified Customer Reviews
   K. Hair Replacement FAQs
   L. Final Consultation CTA (warm ivory card)
   M. Comprehensive light footer with MOMO IT TECHNOLOGIES link
5. **Inner Pages & Location Pages Light Theme Refactor:**
   - Convert all service detail pages, location pages, about, gallery, contact, privacy, and terms pages to clean white/ivory/beige cards with dark text.
6. **SEO & Structured Data:**
   - Update `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD to match `SEO_KEYWORD_MAP.md`.

---

## 2. Controlled Execution Sequence

| Step | Action Item | Target Files | Verification Method |
| :--- | :--- | :--- | :--- |
| **Step 1** | Update Tailwind Config & Base Styles for Light Theme | `tailwind.config.js`, `src/index.css`, `index.html` | Verify CSS variables and build |
| **Step 2** | Expand Service & Branch Registry with Canonical Slugs | `src/data/businessData.ts` | Verify TypeScript types and data integrity |
| **Step 3** | Rebuild Header with Accessible Dropdowns & Call CTA | `src/components/Navbar.tsx` | Test desktop dropdowns, mobile drawer, keyboard accessibility |
| **Step 4** | Refactor Marquee Banner & Relocate After Hero | `src/components/MarqueeBanner.tsx`, `src/pages/HomePage.tsx` | Visual inspection of placement and pause on hover |
| **Step 5** | Re-theme Homepage Sections into Premium Light Aesthetic | `Hero.tsx`, `ProcessStepsSection.tsx`, `InteractiveBeforeAfter.tsx`, `PatchAnatomy3D.tsx`, `HairLossStageGuide.tsx`, `ServicesSection.tsx`, `ComparisonSection.tsx`, `BranchesSection.tsx`, `TestimonialsSection.tsx`, `FAQSection.tsx` | Responsive browser check |
| **Step 6** | Re-theme Inner Pages (Services, Locations, About, Gallery, Contact, Privacy, Terms) | `src/pages/*.tsx` | Verify routes and typography contrast |
| **Step 7** | Redesign Footer to Light / Warm Ivory with MOMO Link | `src/components/Footer.tsx` | Test link and accessibility contrast |
| **Step 8** | Re-theme Consultation Modal & Sticky Mobile Bar | `BookingModal.tsx`, `FloatingMobileBar.tsx`, `FloatingWhatsApp.tsx` | Form validation and modal flow |
| **Step 9** | Update Technical SEO & Sitemap | `public/sitemap.xml`, `src/components/SEOHead.tsx` | Verify XML sitemap and JSON-LD schema |
| **Step 10** | Production Build, QA Testing & Edge Deployment | All files, GitHub, Cloudflare Pages | Automated edge verification, `QA_REPORT.md`, `CONTENT_REQUIRED.md` |
