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
    description: "Visit our private studio room for a complimentary examination. Mr. Swarup and senior specialists analyze your scalp contour, native hair color, density, curl pattern, and gray hair ratio.",
    icon: ShieldCheck,
    tag: "Free Consultation"
  },
  {
    stepNumber: "02",
    title: "Custom System Selection & Texture Match",
    duration: "15 Minutes",
    description: "Select between Ultra-Thin Swiss Lace (for invisible front hairlines), Bio-Skin (for maximum hold), or Clip-on systems. We match 100% genuine virgin human hair to your biological texture.",
    icon: Award,
    tag: "Personalized Fit"
  },
  {
    stepNumber: "03",
    title: "Painless 1-Hour Precision Attachment",
    duration: "45–60 Minutes",
    description: "Using US FDA-approved hypoallergenic bonding resins, medical tape, or micro-silicone clips, the hair system is safely secured directly to your scalp. 100% painless, zero cuts, and zero needles.",
    icon: Clock,
    tag: "Just 1 Hour"
  },
  {
    stepNumber: "04",
    title: "Master Salon Cut, Fade & Custom Styling",
    duration: "20 Minutes",
    description: "Our certified hair artisans cut, texturize, and seamlessly blend the system into your existing side and back hair. Walk out looking 10 years younger with absolute natural confidence.",
    icon: Scissors,
    tag: "Instant Youthful Look"
  }
];

export const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 lg:py-24 bg-obsidian-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>The 60-Minute Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How Your Transformation Happens
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From stepping through our studio doors to walking out with a full head of styled hair, here is our simple, transparent 4-step process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-obsidian-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-gold-500/50 transition-all duration-300 shadow-xl relative group"
              >
                <div>
                  {/* Step Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif font-black text-3xl sm:text-4xl text-gold-gradient opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-obsidian-900 border border-slate-800 text-gold-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">Time: {step.duration}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Painless & Safe</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action strip */}
        <div className="mt-12 text-center bg-obsidian-950 rounded-2xl border border-gold-500/25 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Ready for your transformation today?</h4>
            <p className="text-xs text-slate-400">Same-day appointments available at Kadapa, Proddatur, Madanapalle & Nandyal.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:opacity-95 transition-opacity flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
