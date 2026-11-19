import React from 'react';
import { Star, Quote, Play } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-obsidian-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Verified Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Loved by Over 5,000+ Men & Women
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read authentic reviews from clients who transformed their appearances, careers, and personal lives across Rayalaseema.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-obsidian-950 border border-gold-500/30 shadow-lg mt-2">
            <div className="flex items-center gap-1.5 text-gold-400">
              <span className="font-serif font-bold text-xl sm:text-2xl text-white">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-slate-800"></div>
            <div className="text-left text-xs">
              <div className="font-bold text-white">Google & Justdial Verified</div>
              <div className="text-slate-400">{BUSINESS_INFO.reviewCount} Reviews Across 4 Branches</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-obsidian-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 shadow-xl relative group"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-700 group-hover:text-gold-500/40 transition-colors" />
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  "{testimonial.title}"
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {testimonial.comment}
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{testimonial.name}</span>
                    <span className="text-[11px] text-slate-400">{testimonial.location}</span>
                  </div>
                  <span className="text-[10px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">
                    {testimonial.service}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Transformation Preview Strip */}
        <div className="mt-12 bg-obsidian-950 rounded-3xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 justify-center md:justify-start">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Video Walkthrough & Client Smiles</span>
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Watch Mr. Swarup Complete a 60-Minute Transformation
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                See the seamless hairline blending, step-by-step bonding, and the instant smile when our clients look into the mirror for the first time.
              </p>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20please%20share%20some%20real%20video%20transformations%20and%20pricing%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow flex items-center gap-2 flex-shrink-0 hover:opacity-95 transition-opacity"
            >
              <span>Request Video Demos on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
