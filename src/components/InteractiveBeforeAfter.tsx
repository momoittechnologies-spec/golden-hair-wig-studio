import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal, CheckCircle2, ArrowRight, Award } from 'lucide-react';

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
    method: "Hair Bonding Process (Swiss Lace)",
    beforeLabel: "BEFORE: Crown & Front Loss",
    afterLabel: "AFTER: 100% Natural Density",
    beforeDesc: "Visible scalp, receding temples, loss of personal and professional confidence.",
    afterDesc: "Fully undetectable front hairline, natural swirl, seamless blend with existing side hair.",
    beforeImg: "/images/transformations/case1_before.jpg",
    afterImg: "/images/transformations/case1_after.jpg",
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
    beforeDesc: "Hair thinning making client appear older than his biological age.",
    afterDesc: "Natural fringe with micro-silicone comfort clips. Easily removable at bedtime.",
    beforeImg: "/images/transformations/case2_hairline_before.jpg",
    afterImg: "/images/transformations/case2_hairline_after.jpg",
  },
  {
    id: 'case-3',
    category: "Women's Thinning & Crown Partition",
    title: "Ladies Silk-Base Crown Volume & Density",
    subtitle: "Concealing Widened Partitions with 100% Virgin Human Hair",
    duration: "45 Minutes",
    method: "Silk Topper & Invisible Clip Integration",
    beforeLabel: "BEFORE: Widening Scalp Parting",
    afterLabel: "AFTER: Lush, Full Crown Volume",
    beforeDesc: "Diffuse crown thinning making scalp plainly visible under ambient lighting.",
    afterDesc: "Seamless silk partition that mimics real scalp pores. Heat-styling and blow-dry friendly.",
    beforeImg: "/images/transformations/case3_before.jpg",
    afterImg: "/images/transformations/case3_after.jpg",
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
    <section id="transformations" className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Award className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Interactive Real Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Authentic Before & After Transformations
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider across the image to observe how Golden Hair Studio restores full hair density, natural texture, and confidence in a single 60-minute visit.
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeCaseIndex === idx
                  ? 'bg-gold-500 text-white shadow-xs'
                  : 'bg-[#FAF8F4] hover:bg-[#F5F0E8] text-neutral-700 border border-[#E8E2D8]'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card (Clean White/Ivory Card) */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F4] rounded-3xl border border-[#E8E2D8] p-4 sm:p-6 shadow-md relative">
          
          {/* Metadata bar above the slider */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-[#E8E2D8] text-xs">
            <div>
              <h3 className="font-serif font-bold text-neutral-900 text-base sm:text-lg">{activeCase.title}</h3>
              <p className="text-neutral-500 text-xs">{activeCase.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-white text-gold-700 border border-[#E8E2D8] font-semibold text-[11px]">
                Time: {activeCase.duration}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white text-neutral-600 border border-[#E8E2D8] font-medium text-[11px]">
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
            className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#E8E2D8] bg-white shadow-inner"
          >
            {/* "AFTER" Full Image (Base layer) */}
            <div className="absolute inset-0 w-full h-full bg-neutral-100">
              <img
                src={activeCase.afterImg}
                alt="After Golden Hair System"
                className="w-full h-full object-cover object-top pointer-events-none"
              />
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-emerald-300 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
                  className="w-full h-full object-cover object-top pointer-events-none"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-amber-300 text-amber-800 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md">
                  {activeCase.beforeLabel}
                </div>
              </div>
            </div>

            {/* Divider Line & Draggable Gold Thumb */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-500 shadow-md pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center shadow-md border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Helper Hint Pill on top */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E8E2D8] text-[11px] text-neutral-700 pointer-events-none flex items-center gap-1.5 shadow-xs">
              <MoveHorizontal className="w-3 h-3 text-gold-600" />
              <span>Slide left or right to compare</span>
            </div>

          </div>

          {/* Description footer below slider */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-white p-4 rounded-xl border border-[#E8E2D8]">
            <div>
              <div className="font-semibold text-neutral-800 uppercase tracking-wider mb-0.5">Before Assessment</div>
              <p className="text-neutral-500 leading-relaxed">{activeCase.beforeDesc}</p>
            </div>
            <div>
              <div className="font-semibold text-gold-700 uppercase tracking-wider mb-0.5">Golden Hair Studio Result</div>
              <p className="text-neutral-600 leading-relaxed">{activeCase.afterDesc}</p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <span className="text-xs text-neutral-500 text-center sm:text-left">
              Want a similar transformation? Personal consultations are completely private.
            </span>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5"
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
