import React from 'react';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { HomeImageSlider } from '../components/HomeImageSlider';
import { ShieldCheck, MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 bg-white">
      <SEOHead
        title="Hair Replacement Transformations & Gallery"
        description="View real 1-hour non-surgical hair replacement transformations at Golden Hair Wig Studio. Natural hairlines, Swiss lace patches, and volume toppers."
        canonicalPath="/gallery"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Real Client Results</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
          1-Hour Hair Transformations
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Explore genuine before-and-after results accomplished at Golden Hair Wig Studio. Every procedure is customized to create an undetectable, age-appropriate hairline.
        </p>
      </div>

      {/* Interactive Split Comparison Slider */}
      <div className="rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] p-6 sm:p-10 shadow-xs">
        <InteractiveBeforeAfter onOpenBooking={onOpenBooking} />
      </div>

      {/* Full Photography Showcase */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            Studio Work & Systems Gallery
          </h2>
          <p className="text-xs text-neutral-600">
            Featuring high-density human hair pieces, undetectable French lace mesh, and personalized cut styling:
          </p>
        </div>

        <HomeImageSlider onOpenBooking={onOpenBooking} />
      </div>

      {/* Consent & Ethical Photography Policy */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] flex flex-col sm:flex-row items-center gap-6">
        <div className="p-4 rounded-2xl bg-white text-gold-600 border border-[#E8E2D8] flex-shrink-0 shadow-xs">
          <ShieldCheck className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-serif font-bold text-neutral-900">
            Client Privacy & Photo Consent Commitment
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            All photography is published strictly with explicit prior consent from clients. We respect complete privacy: if you prefer your transformation to remain 100% private with no photographs taken, your wishes are respected without question.
          </p>
        </div>
      </div>

      {/* Bottom Consultation Trigger */}
      <div className="text-center space-y-4 pt-6">
        <h3 className="text-2xl font-serif font-bold text-neutral-900">
          Ready to Experience Your Own 1-Hour Transformation?
        </h3>
        <p className="text-xs text-neutral-600 max-w-md mx-auto">
          Schedule a private scalp evaluation with Mr. Swarup. No pressure, completely confidential.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Book Free Consultation</span>
          </button>
          <a
            href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
