import React from 'react';
import { Check, X, ArrowRight, Award } from 'lucide-react';
import { COMPARISON_TABLE } from '../data/businessData';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-16 lg:py-22 bg-[#FAF8F4] relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Award className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Honest Cosmetic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Why Choose Golden Hair Wig Studio
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Understand why non-surgical hair replacement is the preferred choice for immediate, risk-free, high-density hair restoration.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[680px] bg-white rounded-3xl border border-[#E8E2D8] shadow-md overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-neutral-50 border-b border-[#E8E2D8] text-xs sm:text-sm font-bold">
              <div className="col-span-4 p-4 sm:p-5 text-neutral-500 uppercase tracking-wider">
                Feature / Consideration
              </div>
              <div className="col-span-4 p-4 sm:p-5 bg-[#FAF6ED] border-x border-[#E8E2D8] text-gold-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-serif text-sm sm:text-base font-bold">
                  <Award className="w-4 h-4 text-gold-600" aria-hidden="true" />
                  <span>Golden Hair Studio</span>
                </span>
                <span className="text-[10px] bg-gold-500 text-white font-bold px-2 py-0.5 rounded uppercase">
                  Preferred
                </span>
              </div>
              <div className="col-span-4 p-4 sm:p-5 text-neutral-500 uppercase tracking-wider">
                Surgical Hair Transplant
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#E8E2D8] text-xs sm:text-sm">
              {COMPARISON_TABLE.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 hover:bg-neutral-50/50 transition-colors">
                  
                  {/* Feature Name */}
                  <div className="col-span-4 p-4 sm:p-5 font-semibold text-neutral-800 flex items-center">
                    {row.feature}
                  </div>

                  {/* Golden Hair Studio Value */}
                  <div className="col-span-4 p-4 sm:p-5 bg-[#FAF6ED]/70 border-x border-[#E8E2D8] text-neutral-900 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>{row.goldenStudio}</span>
                  </div>

                  {/* Transplant Value */}
                  <div className="col-span-4 p-4 sm:p-5 text-neutral-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-neutral-400 flex-shrink-0" aria-hidden="true" />
                    <span>{row.transplantSurgery}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Comparison Bottom CTA Strip */}
        <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
          <p className="text-xs text-neutral-500">
            Consultations are private, confidential, and completely transparent with zero obligation.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors inline-flex items-center gap-2"
          >
            <span>Book Your Free Evaluation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};
