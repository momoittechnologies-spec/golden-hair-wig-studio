import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CalendarCheck, ArrowRight, Pause, Play } from 'lucide-react';

export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  isMainH1?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'NON-SURGICAL HAIR REPLACEMENT',
    headline: 'Look Natural. Feel Confident.',
    description:
      'Discover personalized hair replacement solutions designed to complement your appearance and lifestyle.',
    primaryCtaText: "Explore Men's Solutions",
    primaryCtaLink: '/services/mens-hair-systems',
    secondaryCtaText: 'Book Consultation',
    desktopImage: '/images/slider/slide_1.webp',
    mobileImage: '/images/slider/slide_1_mobile.webp',
    alt: 'Confident Indian man with natural-looking hair replacement at Golden Hair Studio',
    isMainH1: true,
  },
  {
    id: 2,
    eyebrow: "PERSONALIZED WOMEN'S HAIR SOLUTIONS",
    headline: 'Beautiful Hair, Your Way.',
    description:
      'Explore elegant wigs, toppers, and personalized hair solutions for your individual style.',
    primaryCtaText: "Explore Women's Solutions",
    primaryCtaLink: '/services/hair-wigs',
    secondaryCtaText: 'Book Consultation',
    desktopImage: '/images/slider/slide_2.webp',
    mobileImage: '/images/slider/slide_2_mobile.webp',
    alt: 'High-quality portrait of an Indian woman with beautiful natural-looking hair',
    isMainH1: false,
  },
  {
    id: 3,
    eyebrow: 'CUSTOM HAIR SYSTEMS',
    headline: 'Designed Around You.',
    description:
      'Explore personalized hair systems, professional fitting options, and ongoing maintenance support.',
    primaryCtaText: 'Explore Hair Systems',
    primaryCtaLink: '/services/non-surgical-hair-replacement',
    secondaryCtaText: 'Book Consultation',
    desktopImage: '/images/slider/slide_3.webp',
    mobileImage: '/images/slider/slide_3_mobile.webp',
    alt: 'Professional hair specialist styling a natural-looking hair system in studio',
    isMainH1: false,
  },
];

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  // Detect prefers-reduced-motion
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

  // Autoplay management: automatically advances every 5 seconds unless manually paused, hovered on desktop, or prefers-reduced-motion is enabled
  useEffect(() => {
    if (isManuallyPaused || isHovered || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isManuallyPaused, isHovered, prefersReducedMotion, nextSlide, currentSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section
      ref={sliderContainerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Golden Hair Studio Solutions Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full bg-[#FAF8F4] border-b border-[#E8E2D8] overflow-hidden focus:outline-none select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Relative Slider Container */}
        <div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${HERO_SLIDES.length}: ${slide.headline}`}
                aria-hidden={!isActive}
                className={`w-full transition-opacity ${
                  prefersReducedMotion ? 'duration-0' : 'duration-700 ease-in-out'
                } ${
                  isActive
                    ? 'opacity-100 relative z-10 pointer-events-auto'
                    : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                }`}
              >
                {/* DESKTOP SPLIT LAYOUT (>= 1024px): 45% Text on Left, 55% Image on Right */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
                  {/* Left 45% Content Column */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Eyebrow Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-[12px] font-bold tracking-wider text-[#B58D4A] uppercase shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B58D4A]" aria-hidden="true" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    {/* Headline */}
                    {slide.isMainH1 ? (
                      <h1 className="text-4xl lg:text-[46px] xl:text-[52px] font-serif font-bold text-[#242424] tracking-tight leading-[1.12]">
                        {slide.headline}
                      </h1>
                    ) : (
                      <h2 className="text-4xl lg:text-[46px] xl:text-[52px] font-serif font-bold text-[#242424] tracking-tight leading-[1.12]">
                        {slide.headline}
                      </h2>
                    )}

                    {/* Description */}
                    <p className="text-base lg:text-[17px] text-[#555555] leading-relaxed font-normal max-w-lg">
                      {slide.description}
                    </p>

                    {/* Clean Action Buttons (Max 2 CTAs) */}
                    <div className="flex items-center gap-3.5 pt-2">
                      <Link
                        to={slide.primaryCtaLink}
                        className="px-6 py-3.5 rounded-xl bg-[#B58D4A] hover:bg-[#96713B] text-white font-bold text-sm tracking-wide shadow-xs hover:shadow transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 group"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>

                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F4] border border-[#E8E2D8] hover:border-[#B58D4A] text-[#242424] font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-2xs"
                      >
                        <CalendarCheck className="w-4 h-4 text-[#B58D4A]" aria-hidden="true" />
                        <span>{slide.secondaryCtaText}</span>
                      </button>
                    </div>

                    {/* Desktop Slider Controls Anchor (Cleanly Below Content) */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#E8E2D8]/70 mt-6 max-w-md">
                      {/* Pagination Indicator Pills */}
                      <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
                        {HERO_SLIDES.map((s, dotIdx) => {
                          const isDotActive = dotIdx === currentSlide;
                          return (
                            <button
                              key={s.id}
                              role="tab"
                              aria-selected={isDotActive}
                              aria-label={`Go to slide ${dotIdx + 1}: ${s.headline}`}
                              onClick={() => setCurrentSlide(dotIdx)}
                              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B58D4A] ${
                                isDotActive
                                  ? 'w-7 bg-[#B58D4A] shadow-2xs'
                                  : 'w-2 bg-[#D8D0C3] hover:bg-[#B58D4A]/50'
                              }`}
                            />
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Autoplay Pause / Play Control */}
                        <button
                          type="button"
                          onClick={() => setIsManuallyPaused((prev) => !prev)}
                          aria-label={isManuallyPaused ? 'Resume autoplay slideshow' : 'Pause autoplay slideshow'}
                          title={isManuallyPaused ? 'Resume autoplay' : 'Pause autoplay'}
                          className="p-1.5 rounded-full text-[#555555] hover:text-[#B58D4A] hover:bg-white border border-transparent hover:border-[#E8E2D8] transition-colors"
                        >
                          {isManuallyPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                        </button>

                        <span className="h-3 w-px bg-[#E0D8CC]" aria-hidden="true" />

                        {/* Prev / Next Arrows */}
                        <button
                          type="button"
                          onClick={prevSlide}
                          aria-label="Previous Slide"
                          className="p-2 rounded-full bg-white hover:bg-[#FAF8F4] border border-[#E8E2D8] hover:border-[#B58D4A] text-[#242424] hover:text-[#B58D4A] transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#B58D4A]"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next Slide"
                          className="p-2 rounded-full bg-white hover:bg-[#FAF8F4] border border-[#E8E2D8] hover:border-[#B58D4A] text-[#242424] hover:text-[#B58D4A] transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#B58D4A]"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right 55% Photographic Image Frame (No Text Overlay, 100% Clear Portrait) */}
                  <div className="lg:col-span-7">
                    <div className="relative w-full h-[460px] xl:h-[500px] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm bg-white">
                      <img
                        src={slide.desktopImage}
                        alt={slide.alt}
                        fetchPriority={idx === 0 ? 'high' : 'auto'}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding={idx === 0 ? 'sync' : 'async'}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* DEDICATED MOBILE LAYOUT (< 1024px): Full-Width Image at Top, Clean Text Section Below */}
                <div className="lg:hidden flex flex-col space-y-4">
                  {/* Top Photographic Frame (No text overlapping face/hair) */}
                  <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-xs bg-white">
                    <img
                      src={slide.mobileImage}
                      alt={slide.alt}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding={idx === 0 ? 'sync' : 'async'}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Bottom Clean Text Block */}
                  <div className="space-y-2.5 pt-1">
                    {/* Small Eyebrow */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-[11px] font-bold tracking-wider text-[#B58D4A] uppercase shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B58D4A]" aria-hidden="true" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    {/* Concise Headline */}
                    {slide.isMainH1 ? (
                      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#242424] tracking-tight leading-tight">
                        {slide.headline}
                      </h1>
                    ) : (
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#242424] tracking-tight leading-tight">
                        {slide.headline}
                      </h2>
                    )}

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Mobile Action Buttons (Clear, Uncrowded) */}
                    <div className="flex flex-col gap-2 pt-2">
                      <Link
                        to={slide.primaryCtaLink}
                        className="w-full py-3 rounded-xl bg-[#B58D4A] hover:bg-[#96713B] text-white font-bold text-xs sm:text-sm text-center shadow-xs flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>

                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FAF8F4] border border-[#E8E2D8] text-[#242424] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors"
                      >
                        <CalendarCheck className="w-3.5 h-3.5 text-[#B58D4A]" aria-hidden="true" />
                        <span>{slide.secondaryCtaText}</span>
                      </button>
                    </div>

                    {/* Mobile Controls (Pagination dots + pause + arrows) */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#E8E2D8]/70 mt-3">
                      <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
                        {HERO_SLIDES.map((s, dotIdx) => {
                          const isDotActive = dotIdx === currentSlide;
                          return (
                            <button
                              key={s.id}
                              role="tab"
                              aria-selected={isDotActive}
                              aria-label={`Go to slide ${dotIdx + 1}: ${s.headline}`}
                              onClick={() => setCurrentSlide(dotIdx)}
                              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B58D4A] ${
                                isDotActive
                                  ? 'w-6 bg-[#B58D4A]'
                                  : 'w-1.5 bg-[#D8D0C3] hover:bg-[#B58D4A]/50'
                              }`}
                            />
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setIsManuallyPaused((prev) => !prev)}
                          aria-label={isManuallyPaused ? 'Resume autoplay' : 'Pause autoplay'}
                          className="p-1 rounded-full text-[#555555] hover:text-[#B58D4A] transition-colors"
                        >
                          {isManuallyPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          type="button"
                          onClick={prevSlide}
                          aria-label="Previous Slide"
                          className="p-1.5 rounded-full bg-white border border-[#E8E2D8] text-[#242424] hover:text-[#B58D4A] shadow-2xs"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next Slide"
                          className="p-1.5 rounded-full bg-white border border-[#E8E2D8] text-[#242424] hover:text-[#B58D4A] shadow-2xs"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
