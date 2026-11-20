import React from 'react';
import { Award, Scissors, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessStepsSectionProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    stepNumber: "01",
    title: "Confidential Scalp & Hairline Analysis",
    duration: "15 Minutes",
    description: "Visit our private styling room for an evaluation. Mr. Swarup and our specialists analyze scalp contour, natural hair color, density, wave pattern, and grey ratio.",
    icon: ShieldCheck,
    tag: "Free Consultation"
  },
  {
    stepNumber: "02",
    title: "Custom System Selection & Texture Match",
    duration: "15 Minutes",
    description: "Select between Ultra-Thin Swiss Lace (for invisible front hairlines), Micro-Skin (for high durability), or Clip-on systems. We match 100% virgin human hair to your biological texture.",
    icon: Award,
    tag: "Personalized Fit"
  },
  {
    stepNumber: "03",
    title: "Painless 1-Hour Precision Attachment",
    duration: "45–60 Minutes",
    description: "Using dermatologically approved hypoallergenic bonding resins, medical tape, or micro-silicone clips, the hair system is safely secured. 100% painless, zero cuts, and zero needles.",
    icon: Clock,
    tag: "Just 1 Hour"
  },
  {
    stepNumber: "04",
    title: "Master Salon Cut, Fade & Custom Styling",
    duration: "20 Minutes",
    description: "Our certified hair specialists cut, texturize, and seamlessly blend the system into your natural side hair for an undetectable look and renewed confidence.",
    icon: Scissors,
    tag: "Instant Natural Look"
  }
];

export const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="py-16 lg:py-22 bg-[#FAF8F4] relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>The 60-Minute Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Our Simple Consultation & Fitting Process
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            From stepping through our studio doors to walking out with a full head of styled hair, here is our transparent 4-step process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E2D8] p-6 flex flex-col justify-between hover:border-gold-400 hover:shadow-md transition-all duration-300 relative group"
              >
                <div>
                  {/* Step Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif font-black text-3xl sm:text-4xl text-gold-600 opacity-90">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF8F4] text-neutral-700 border border-[#E8E2D8]">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] text-gold-600">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] text-neutral-500 font-medium">Time: {step.duration}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-neutral-900 mb-2 leading-snug group-hover:text-gold-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="pt-4 mt-4 border-t border-[#F5F0E8] flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>100% Non-Surgical & Safe</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action strip */}
        <div className="mt-12 text-center bg-white rounded-2xl border border-[#E8E2D8] p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-base font-bold text-neutral-900">Ready for your transformation today?</h4>
            <p className="text-xs text-neutral-500">Private appointments available at Kadapa, Proddatur, Madanapalle & Nandyal.</p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};
