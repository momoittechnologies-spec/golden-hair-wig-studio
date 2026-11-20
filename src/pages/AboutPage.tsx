import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Phone, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 bg-white">
      <SEOHead
        title="About Golden Hair Wig Studio | Founder Mr. Swarup"
        description="Learn about Golden Hair Wig Studio, led by Proprietor Mr. Swarup. Providing ethical, non-surgical hair replacement with private VIP styling cabins across Andhra Pradesh."
        canonicalPath="/about"
      />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
          Restoring Confidence Through Precision Craftsmanship
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Founded under the visionary leadership of <strong>Mr. Swarup</strong>, Golden Hair Wig Studio was established to offer discreet, high-caliber, non-surgical hair replacement solutions across Rayalaseema.
        </p>
      </div>

      {/* Founder Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm bg-[#FAF8F4]">
            <img
              src="/images/client/poster_banner.jpg"
              alt="Golden Hair Wig Studio Founder Mr. Swarup"
              className="w-full h-96 sm:h-[460px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] shadow-sm">
              <span className="text-gold-700 text-xs font-bold uppercase tracking-wider block">Proprietor & Master Stylist</span>
              <span className="text-lg font-serif font-bold text-neutral-900 block">Mr. Swarup</span>
              <span className="text-xs text-neutral-600 block mt-0.5">Over a decade of hair system customization expertise</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">Leadership & Care</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-900">
              A Personal Approach to Hair Restoration
            </h2>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Hair loss often affects personal confidence, social interactions, and professional presence. Recognizing that painful surgical transplants are not suitable or desired by everyone, Mr. Swarup dedicated himself to mastering the art of non-surgical cosmetic hair replacement.
          </p>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Every hair system at Golden Hair Wig Studio is crafted from 100% human hair hand-knotted onto micro-thin Swiss lace or breathable polyurethane membranes. Each unit is styled, layered, and colored to seamlessly match the client's facial architecture and natural hair pattern.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-1">
              <ShieldCheck className="w-5 h-5 text-gold-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-neutral-900">100% Confidentiality</h3>
              <p className="text-xs text-neutral-600">Private VIP styling cabins where your identity and consultations remain completely private.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-1">
              <Heart className="w-5 h-5 text-gold-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-neutral-900">Zero Judgment Environment</h3>
              <p className="text-xs text-neutral-600">Compassionate, respectful consultation for both men and women across all age groups.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Book Consultation with Mr. Swarup</span>
            </button>
            <a
              href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hygiene & Standards */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-1">Studio Standards</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            Hygiene, Safety & Material Quality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-neutral-900">Dermatologically Safe Resins</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We exclusively use medical-grade, hypoallergenic bonding adhesives and tapes designed specifically for scalp application.
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-neutral-900">Sterilized Tools & Bays</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every cutting bay, razor, and styling brush is thoroughly sanitized before each client session.
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-neutral-900">Skin Patch Testing</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              For clients with history of skin sensitivities, we conduct a quick adhesive patch test prior to full application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
