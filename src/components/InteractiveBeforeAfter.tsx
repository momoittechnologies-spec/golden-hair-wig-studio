import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  duration: string;
  method: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  // High quality realistic comparison visual data
  beforeImg: string;
  afterImg: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    category: "Men's Crown & Frontal Baldness",
    title: "Complete Crown & Front Hairline Restoration",
    subtitle: "Norwood Grade 4-5 Advanced Thinning to Full Modern Pompadour",
    duration: "60 Minutes",
    method: "Hair Bonding Process (Miraj Swiss Lace)",
    beforeLabel: "BEFORE: Crown & Front Loss",
    afterLabel: "AFTER: 100% Natural Density",
    beforeDesc: "Visible scalp, receding temples, loss of personal and professional confidence.",
    afterDesc: "Fully undetectable front hairline, natural swirl, seamless blend with existing side hair.",
    beforeImg: "/images/client/poster_banner.jpg",
    afterImg: "/images/client/poster_banner.jpg",
  },
  {
    id: 'case-2',
    category: "Men's Receding Temples & Daily Wear",
    title: "Youthful Hairline & Volumetric Fade",
    subtitle: "Fast 10-Second Daily Clip System with Zero Adhesives",
    duration: "45 Minutes",
    method: "Hair Clipping Process",
    beforeLabel: "BEFORE: Receding Forehead",
    afterLabel: "AFTER: Youthful Textured Cut",
    beforeDesc: "Hair thinning making client appear 10+ years older than his age.",
    afterDesc: "Natural fringe with micro-silicone comfort clips. Easily removable at bedtime.",
    beforeImg: "/images/client/services_card.jpg",
    afterImg: "/images/client/services_card.jpg",
  },
  {
    id: 'case-3',
    category: "Women's Thinning & Crown Partition",
    title: "Ladies Silk-Base Crown Volume & Density",
    subtitle: "Concealing Widened Partitions with 100% Virgin Remy Human Hair",
    duration: "45 Minutes",
    method: "Silk Topper & Invisible Clip Integration",
    beforeLabel: "BEFORE: Widening Scalp Parting",
    afterLabel: "AFTER: Lush, Full Crown Volume",
    beforeDesc: "Diffuse crown thinning making scalp plainly visible under lighting.",
    afterDesc: "Seamless silk partition that mimics real scalp pores. Blow-dry & style friendly.",
    beforeImg: "/images/client/services_card.jpg",
    afterImg: "/images/client/services_card.jpg",
  }
];

interface InteractiveBeforeAfterProps {
  onOpenBooking: () => void;
}

export const InteractiveBeforeAfter: React.FC<InteractiveBeforeAfterProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="transformations" className="py-16 lg:py-24 bg-obsidian-900/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Real Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            See the 1-Hour Transformation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Drag the interactive golden slider across the image to reveal how Golden Hair Studio restores full hair density, natural texture, and confidence in a single visit.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {CASE_STUDIES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCaseIndex === idx
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow scale-[1.02]'
                  : 'bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-obsidian-950 rounded-3xl border border-gold-500/30 p-4 sm:p-6 shadow-2xl relative">
          
          {/* Metadata bar above the slider */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 text-xs">
            <div>
              <h3 className="font-serif font-bold text-white text-base sm:text-lg">{activeCase.title}</h3>
              <p className="text-slate-400">{activeCase.subtitle}</p>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto flex-shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-gold-500/10 text-gold-400 border border-gold-500/20 font-medium">
                Time: {activeCase.duration}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-medium">
                {activeCase.method}
              </span>
            </div>
          </div>

          {/* Interactive Split Slider Container */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800 shadow-inner"
          >
            {/* "AFTER" Full Image (Base layer) */}
            <div className="absolute inset-0 w-full h-full bg-obsidian-950">
              <img
                src={activeCase.afterImg}
                alt="After Golden Hair System"
                className="w-full h-full object-contain sm:object-cover pointer-events-none"
              />
              <div className="absolute bottom-4 right-4 bg-obsidian-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{activeCase.afterLabel}</span>
              </div>
            </div>

            {/* "BEFORE" Image Layer (Clipped to sliderPosition) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              >
                <img
                  src={activeCase.beforeImg}
                  alt="Before Hair Restoration"
                  className="w-full h-full object-contain sm:object-cover pointer-events-none grayscale-[40%] contrast-110"
                />
                <div className="absolute bottom-4 left-4 bg-obsidian-950/85 backdrop-blur-md border border-red-500/40 text-red-400 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg">
                  {activeCase.beforeLabel}
                </div>
              </div>
            </div>

            {/* Divider Line & Draggable Gold Thumb */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_15px_rgba(212,175,55,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-gradient text-obsidian-950 font-bold flex items-center justify-center shadow-gold-glow-lg border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-5 h-5 text-obsidian-950" />
              </div>
            </div>

            {/* Helper Hint Pill on top */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-obsidian-950/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-700 text-[11px] text-slate-300 pointer-events-none flex items-center gap-1.5">
              <MoveHorizontal className="w-3 h-3 text-gold-400" />
              <span>Slide left or right to compare</span>
            </div>

          </div>

          {/* Description footer below slider */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-obsidian-900/60 p-4 rounded-xl border border-slate-800">
            <div>
              <div className="font-semibold text-red-400 uppercase tracking-wider mb-1">Before Condition</div>
              <p className="text-slate-400 leading-relaxed">{activeCase.beforeDesc}</p>
            </div>
            <div>
              <div className="font-semibold text-emerald-400 uppercase tracking-wider mb-1">Golden Hair Studio Result</div>
              <p className="text-slate-300 leading-relaxed">{activeCase.afterDesc}</p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Want a similar transformation? Consultations are completely free & confidential.
            </span>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <span>Get Your 1-Hour Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
