import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Pause,
  Play,
  Sparkles,
  Phone,
  MessageCircle,
  Star
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { InstagramIcon } from './SocialIcons';

export interface HeroSlide {
  id: number;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  categoryPill: string;
  headline: string;
  highlight: string;
  supportingText: string;
  features: string[];
  primaryCtaText: string;
  primaryCtaAction: 'booking' | 'services' | 'ladies';
  secondaryCtaText: string;
  secondaryCtaLink: string;
  isMainH1?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    desktopImage: '/images/slider/slide_1.webp',
    mobileImage: '/images/slider/slide_1_mobile.webp',
    alt: 'Confident Indian man with natural-looking hair replacement at Golden Hair Studio',
    categoryPill: "Rayalaseema's Premier Hair Studio",
    headline: 'NATURAL-LOOKING HAIR REPLACEMENT',
    highlight: 'Confidence That Feels Like You.',
    supportingText:
      'Personalized non-surgical hair replacement solutions for men and women. Experience 100% undetectable front hairlines and custom fade blending fitted in just 60 minutes.',
    features: ['100% Natural Human Hair', 'Zero Surgery & Zero Downtime', 'Fitted in 60 Minutes', 'Private VIP Studios'],
    primaryCtaText: 'Book Consultation',
    primaryCtaAction: 'booking',
    secondaryCtaText: 'Explore Our Services',
    secondaryCtaLink: '/services',
    isMainH1: true,
  },
  {
    id: 2,
    desktopImage: '/images/slider/slide_2.webp',
    mobileImage: '/images/slider/slide_2_mobile.webp',
    alt: 'Elegant Indian woman with beautiful, voluminous natural-looking hair in luxury salon',
    categoryPill: "Dedicated Women's Solutions",
    headline: 'BEAUTIFUL HAIR. BEAUTIFUL CONFIDENCE.',
    highlight: 'Lush Crown Volume & Silk Toppers.',
    supportingText:
      'Explore personalized wigs and hair solutions designed around your style and preferences. Seamless parting realism with virgin human hair extensions.',
    features: ['Silk-Base Parting Mimic', '100% Virgin Remy Hair', 'Blow-Dry & Heat Friendly', 'Completely Non-Surgical'],
    primaryCtaText: "Explore Women's Solutions",
    primaryCtaAction: 'ladies',
    secondaryCtaText: 'Book Consultation',
    secondaryCtaLink: '#booking',
    isMainH1: false,
  },
  {
    id: 3,
    desktopImage: '/images/slider/slide_3.webp',
    mobileImage: '/images/slider/slide_3_mobile.webp',
    alt: 'Professional hair specialist hand-crafting and styling a custom Swiss lace hair system in modern studio',
    categoryPill: 'Master Studio Craftsmanship',
    headline: 'YOUR STYLE. YOUR HAIR. YOUR CONFIDENCE.',
    highlight: 'Precision Custom Hair Systems.',
    supportingText:
      'Discover personalized hair systems, fitting options, and ongoing maintenance support. Scalp-safe bonding allows complete freedom to swim, gym, and shower.',
    features: ['Breathable Swiss Lace', 'Shower, Swim & Gym Safe', 'Monthly Hygiene & Re-bonding', 'Kadapa • Proddatur • Madanapalle • Nandyal'],
    primaryCtaText: 'Explore Hair Systems',
    primaryCtaAction: 'services',
    secondaryCtaText: 'Contact Our Team',
    secondaryCtaLink: '/contact',
    isMainH1: false,
  },
];

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay management
  useEffect(() => {
    if (!isPaused && !prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold > 45px and dominant over vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const handlePrimaryCta = (action: 'booking' | 'services' | 'ladies') => {
    if (action === 'booking') {
      onOpenBooking();
    } else if (action === 'services') {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'ladies') {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sliderContainerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Golden Hair Studio Solutions Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full bg-[#FAF8F4] overflow-hidden focus:outline-none select-none border-b border-[#E8E2D8]"
    >
      {/* Slider Canvas Container */}
      <div className="relative w-full min-h-[580px] sm:min-h-[620px] lg:h-[660px] xl:h-[700px] flex items-center">
        
        {/* Slides Images Track with Light-Theme Gradients */}
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${idx + 1} of ${HERO_SLIDES.length}: ${slide.headline}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity ${
                prefersReducedMotion ? 'duration-0' : 'duration-700 ease-in-out'
              } ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              {/* Picture Element: Responsive WebP Delivery with High Priority for Slide 1 */}
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobileImage} type="image/webp" />
                <source media="(min-width: 768px)" srcSet={slide.desktopImage} type="image/webp" />
                <img
                  src={slide.desktopImage}
                  alt={slide.alt}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding={idx === 0 ? 'sync' : 'async'}
                  className={`w-full h-full object-cover object-[center_top] sm:object-center transform scale-100 ${
                    isActive && !prefersReducedMotion ? 'transition-transform duration-8000 ease-out scale-[1.03]' : ''
                  }`}
                />
              </picture>

              {/* STRICT LIGHT THEME GRADIENT OVERLAYS (Ivory/White to Transparent) */}
              {/* Desktop Left-to-Right Soft Gradient: Keeps text 100% legible against light background */}
              <div
                className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent w-7/12 pointer-events-none"
                aria-hidden="true"
              />
              {/* Desktop Bottom Ambient Gradient */}
              <div
                className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {/* Mobile Bottom-to-Top White Gradient: Keeps text legible on phone screens */}
              <div
                className="lg:hidden absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {/* Mobile Subtle Top Vignette */}
              <div
                className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          );
        })}

        {/* Slide Content Overlay (Safe Left-Aligned Text Canvas on Desktop, Centered/Bottom on Mobile) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-0">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {HERO_SLIDES.map((slide, idx) => {
              if (idx !== currentSlide) return null;
              return (
                <div
                  key={slide.id}
                  className={`space-y-4 sm:space-y-5 ${
                    prefersReducedMotion ? '' : 'animate-in fade-in slide-in-from-left-4 duration-500'
                  }`}
                >
                  {/* Category Pill with Gold Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E2D8] text-neutral-800 text-xs font-semibold shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>{slide.categoryPill}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
                    <span className="text-gold-700 font-bold">1-Hour Result</span>
                  </div>

                  {/* Main Headline (H1 on Slide 1 for SEO, H2 on others) */}
                  {slide.isMainH1 ? (
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
                      {slide.headline}{' '}
                      <span className="text-gold-700 block sm:inline mt-1 sm:mt-0 font-serif">
                        {slide.highlight}
                      </span>
                    </h1>
                  ) : (
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
                      {slide.headline}{' '}
                      <span className="text-gold-700 block sm:inline mt-1 sm:mt-0 font-serif">
                        {slide.highlight}
                      </span>
                    </h2>
                  )}

                  {/* Supporting Paragraph */}
                  <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
                    {slide.supportingText}
                  </p>

                  {/* Key Verified Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-lg pt-1">
                    {slide.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" aria-hidden="true" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Actions Group */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    {/* Primary CTA */}
                    <button
                      type="button"
                      onClick={() => handlePrimaryCta(slide.primaryCtaAction)}
                      className="px-6 sm:px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>

                    {/* Secondary CTA */}
                    <Link
                      to={slide.secondaryCtaLink === '#booking' ? '#' : slide.secondaryCtaLink}
                      onClick={(e) => {
                        if (slide.secondaryCtaLink === '#booking') {
                          e.preventDefault();
                          onOpenBooking();
                        }
                      }}
                      className="px-5 sm:px-6 py-3.5 rounded-xl bg-white/95 hover:bg-neutral-50 border border-[#E8E2D8] hover:border-gold-400 text-neutral-900 font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>

                    {/* Quick WhatsApp Action */}
                    <a
                      href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3.5 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-2xs"
                      aria-label="Direct WhatsApp Consultation with Mr. Swarup"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>

                  {/* Trust Micro-Strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-600 border-t border-[#E8E2D8]/80 max-w-xl">
                    <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                      <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
                      <span>Under Prop. Mr. Swarup</span>
                    </div>

                    <span className="text-[#D8D0C3]">|</span>

                    <a
                      href={BUSINESS_INFO.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-gold-700 transition-colors"
                      title="Read 4.9★ Google Reviews"
                    >
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="font-bold text-neutral-900 ml-0.5">4.9★</span>
                      <span className="text-neutral-500">Reviews</span>
                    </a>

                    <span className="text-[#D8D0C3] hidden sm:inline">|</span>

                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1 text-neutral-700 hover:text-rose-600 transition-colors"
                    >
                      <span className="p-0.5 rounded-[3px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                        <InstagramIcon className="w-2.5 h-2.5 text-white" />
                      </span>
                      <span className="font-medium">{BUSINESS_INFO.instagramHandle}</span>
                    </a>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Desktop Prev & Next Arrows (Floating Luxury Buttons) */}
        <div className="hidden lg:flex absolute z-30 right-8 bottom-12 items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-3 rounded-full bg-white/95 hover:bg-white border border-[#E8E2D8] hover:border-gold-400 text-neutral-800 hover:text-gold-700 shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-3 rounded-full bg-white/95 hover:bg-white border border-[#E8E2D8] hover:border-gold-400 text-neutral-800 hover:text-gold-700 shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Slider Pagination Pills & Autoplay Pause Control */}
        <div className="absolute z-30 bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 flex items-center gap-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E2D8] shadow-2xs">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to Slide ${idx + 1}: ${slide.headline}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                    isActive ? 'w-8 bg-gold-600 shadow-2xs' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              );
            })}
          </div>

          <span className="h-3 w-px bg-[#E0D8CC]" aria-hidden="true" />

          {/* Autoplay Pause / Play Toggle Control */}
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'Resume autoplay slideshow' : 'Pause autoplay slideshow'}
            title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            className="p-1 rounded-full text-neutral-600 hover:text-gold-700 focus:outline-none transition-colors"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </section>
  );
};