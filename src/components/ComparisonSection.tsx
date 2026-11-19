import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { COMPARISON_TABLE } from '../data/businessData';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-obsidian-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Clinical Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Golden Hair Studio vs. Surgical Hair Transplant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Understand why more than 85% of men and women now choose advanced non-surgical hair replacement over painful surgical procedures.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[680px] bg-obsidian-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-obsidian-900/90 border-b border-slate-800 text-xs sm:text-sm font-bold">
              <div className="col-span-4 p-4 sm:p-5 text-slate-400 uppercase tracking-wider">
                Feature / Consideration
              </div>
              <div className="col-span-4 p-4 sm:p-5 bg-gold-500/15 border-x border-gold-500/30 text-gold-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-serif text-sm sm:text-base">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Golden Hair Studio</span>
                </span>
                <span className="text-[10px] bg-gold-500 text-obsidian-950 font-bold px-2 py-0.5 rounded uppercase">
                  Winner
                </span>
              </div>
              <div className="col-span-4 p-4 sm:p-5 text-slate-400 uppercase tracking-wider">
                Surgical Hair Transplant
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {COMPARISON_TABLE.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 hover:bg-obsidian-900/40 transition-colors">
                  
                  {/* Feature Name */}
                  <div className="col-span-4 p-4 sm:p-5 font-semibold text-slate-300 flex items-center">
                    {row.feature}
                  </div>

                  {/* Golden Hair Studio Value */}
                  <div className="col-span-4 p-4 sm:p-5 bg-gold-500/5 border-x border-gold-500/20 text-white font-medium flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{row.goldenStudio}</span>
                  </div>

                  {/* Transplant Value */}
                  <div className="col-span-4 p-4 sm:p-5 text-slate-400 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>{row.transplantSurgery}</span>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Callout in Table */}
            <div className="p-5 bg-obsidian-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero surgical risks, zero scalp scarring, and immediate satisfaction guaranteed.</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-gold-glow hover:opacity-95 transition-opacity flex items-center gap-1.5"
              >
                <span>Consult with Mr. Swarup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
