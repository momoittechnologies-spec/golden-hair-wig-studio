import React from 'react';
import { Star, Quote, CheckCircle2, ExternalLink, MessageSquarePlus } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';
import { GoogleIcon } from './SocialIcons';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-22 bg-[#FAF8F4] relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span>Google Verified Reviews • 4.9 Star Rating</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Trusted by 500+ Clients Across Rayalaseema
          </h2>
          
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Read authentic Google feedback from clients who transformed their hair, self-esteem, and daily confidence at our studios in Kadapa, Proddatur, Madanapalle, and Nandyal.
          </p>

          {/* Google Rating Showcase Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-sm mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] flex items-center justify-center shadow-2xs">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-2xl text-neutral-900">4.9</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Google Verified Rating • 500+ Consultations
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-[#E8E2D8]"></div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                aria-label="Write a Google Review for Golden Hair Wig Studio"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Write a Google Review</span>
                <ExternalLink className="w-3 h-3 text-white/80" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                aria-label="View Google Reviews for Golden Hair Wig Studio"
              >
                <span>Read All Reviews</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] p-6 flex flex-col justify-between hover:border-gold-400 hover:shadow-md transition-all duration-200 relative group"
            >
              <div>
                {/* Top Google Badge & Star Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <div className="flex text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
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

        {/* Bottom Review CTA Callout Banner */}
        <div className="rounded-2xl bg-white border border-[#E8E2D8] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Share Your Hair Transformation Story</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-neutral-900">
              Have you visited Mr. Swarup at Golden Hair Wig Studio?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Your feedback helps clients across Kadapa, Proddatur, Madanapalle, and Nandyal take the courageous first step toward regaining their natural hair and confidence.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 flex-shrink-0 group whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Rate Us on Google ★★★★★</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
