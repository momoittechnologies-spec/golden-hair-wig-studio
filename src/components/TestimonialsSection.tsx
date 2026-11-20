import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-22 bg-[#FAF8F4] relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-gold-600" aria-hidden="true" />
            <span>Verified Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Trusted Across Andhra Pradesh
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Read authentic experiences from clients who restored their natural appearance and confidence at our studios in Kadapa, Proddatur, Madanapalle, and Nandyal.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs mt-2">
            <div className="flex items-center gap-1.5 text-gold-700">
              <span className="font-serif font-bold text-xl text-neutral-900">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-[#E8E2D8]"></div>
            <div className="text-left text-xs">
              <div className="font-bold text-neutral-900">Verified Client Feedback</div>
              <div className="text-neutral-500">{BUSINESS_INFO.reviewCount} Across 4 Regional Studios</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] p-6 flex flex-col justify-between hover:border-gold-400 hover:shadow-md transition-all duration-200 relative group"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-neutral-300 group-hover:text-gold-500/50 transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-neutral-900 mb-2 leading-snug">
                  "{testimonial.title}"
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed italic mb-4">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author & Branch */}
              <div className="pt-3 border-t border-[#F5F0E8] flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-neutral-900 font-semibold">{testimonial.name}</strong>
                  <span className="text-[11px] text-neutral-500">{testimonial.location} Studio</span>
                </div>
                <span className="text-[10px] bg-[#FAF8F4] text-neutral-600 px-2 py-0.5 rounded border border-[#E8E2D8] font-medium">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
