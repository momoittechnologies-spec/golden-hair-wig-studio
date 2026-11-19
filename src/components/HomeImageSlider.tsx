import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Award, CalendarCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface SlideData {
  id: number;
  image: string;
  category: string;
  title: string;
  highlight: string;
  description: string;
  badges: string[];
  primaryCtaText: string;
  primaryCtaAction: 'booking' | 'anatomy' | 'services' | 'branches';
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: '/images/slider/slide_1.jpg',
    category: "Men's Premier Restoration",
    title: "Instant Transformation in",
    highlight: "Just 60 Minutes",
    description: "Look 10 years younger with 100% natural, undetectable human hair systems. Customized to your exact hair color, wave, and face contour with zero surgery.",
    badges: ["Instant 1-Hour Transformation", "Zero Pain & Zero Injections", "Natural Hairline Realism"],
    primaryCtaText: "Book Free Consultation",
    primaryCtaAction: 'booking',
  },
  {
    id: 2,
    image: '/images/slider/slide_2.jpg',
    category: "Precision Studio Craftsmanship",
    title: "Master Swiss Lace & Micro-Bio",
    highlight: "Skin Systems",
    description: "Each hair follicle is hand-knotted by expert technicians onto ultra-breathable micro-mesh. Scalp-safe bonding allows complete freedom to swim, shower, and workout.",
    badges: ["Breathable Swiss Lace", "Shower, Swim & Gym Safe", "100% Remy Human Hair"],
    primaryCtaText: "Explore 3D Hair System",
    primaryCtaAction: 'anatomy',
  },
  {
    id: 3,
    image: '/images/slider/slide_3.jpg',
    category: "Exclusively for Women",
    title: "Lush Crown Volume & Silk-Base",
    highlight: "Ladies Hair Toppers",
    description: "Instant relief for widening hairline partitions and crown thinning. Lightweight silk toppers blend seamlessly with your native hair length for voluminous bounce.",
    badges: ["Silk-Base Parting Mimic", "100% Virgin Hair Extensions", "Blow-Dry & Heat Friendly"],
    primaryCtaText: "Explore Women's Solutions",
    primaryCtaAction: 'services',
  },
  {
    id: 4,
    image: '/images/client/poster_banner.jpg',
    category: "Rayalaseema's #1 Studio Network",
    title: "Over 5,000+ Scalps Restored Across",
    highlight: "4 Prime Branches",
    description: "Serving Kadapa (HQ), Proddatur, Madanapalle, and Nandyal. Private VIP cabins, certified senior stylists, and genuine compassionate care by Mr. Swarup.",
    badges: ["Kadapa HQ • Proddatur", "Madanapalle • Nandyal", "⭐ 5.0 Google Rating (850+)"],
    primaryCtaText: "Locate Nearest Branch",
    primaryCtaAction: 'branches',
  }
];

interface HomeImageSliderProps {
  onOpenBooking: () => void;
}

export const HomeImageSlider: React.FC<HomeImageSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const handleCtaClick = (action: string) => {
    if (action === 'booking') {
      onOpenBooking();
    } else if (action === 'anatomy') {
      const el = document.getElementById('patch-anatomy');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'services') {
      const el = document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'branches') {
      const el = document.getElementById('branches');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-obsidian-950 py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Slider Canvas */}
        <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-obsidian-900">
          
          {/* Slide Background Images with Crossfade */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
              />

              {/* Multi-layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/40"></div>
            </div>
          ))}

          {/* Slide Text & Action Overlay (Pinned to Left on Desktop) */}
          <div className="relative z-20 h-full flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-14 max-w-2xl">
            {SLIDES.map((slide, idx) => {
              if (idx !== currentSlide) return null;
              return (
                <div key={slide.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Award className="w-3.5 h-3.5 text-gold-400" />
                    <span>{slide.category}</span>
                  </div>

                  {/* Title & Gold Highlight */}
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
                    {slide.title}{' '}
                    <span className="text-gold-gradient block sm:inline">
                      {slide.highlight}
                    </span>
                  </h2>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow">
                    {slide.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {slide.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-obsidian-900/85 text-slate-300 border border-slate-700/80 backdrop-blur-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => handleCtaClick(slide.primaryCtaAction)}
                      className="px-6 py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20am%20interested%20in%20your%20${slide.category}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 text-xs sm:text-sm font-semibold flex items-center gap-2 backdrop-blur-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Consultation</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Chevrons */}
          <div className="absolute z-30 bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-full bg-obsidian-900/80 hover:bg-obsidian-850 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-full bg-obsidian-900/80 hover:bg-obsidian-850 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicator Dots / Bars */}
          <div className="absolute z-30 bottom-6 left-6 sm:left-14 flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-8 bg-gold-gradient shadow-gold-glow'
                    : 'w-2 bg-slate-600/70 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
