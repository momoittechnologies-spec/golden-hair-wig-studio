import React from 'react';
import { Hero } from '../components/Hero';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { HomeImageSlider } from '../components/HomeImageSlider';
import { ServicesSection } from '../components/ServicesSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { PatchAnatomy3D } from '../components/PatchAnatomy3D';
import { HairLossStageGuide } from '../components/HairLossStageGuide';
import { BranchesSection } from '../components/BranchesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, CalendarCheck, Phone, MessageCircle, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';

interface HomePageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEOHead
        title="Non-Surgical Hair Replacement | Golden Hair Wig Studio"
        description="Explore personalized non-surgical hair replacement solutions at Golden Hair Wig Studio, serving Kadapa, Proddatur, Madanapalle and Nandyal."
        canonicalPath="/"
      />

      {/* B. Clean, Visually Compelling Hero */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* C. Subtle Service Marquee immediately AFTER hero! */}
      <MarqueeBanner />

      {/* D. Trust and Reassurance Section */}
      <section className="py-12 bg-white border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="font-serif font-black text-2xl sm:text-3xl text-gold-700 block">10+ Years</span>
              <span className="text-xs text-neutral-600 mt-1 block">Dedicated Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="font-serif font-black text-2xl sm:text-3xl text-gold-700 block">60 Mins</span>
              <span className="text-xs text-neutral-600 mt-1 block">Instant Transformation</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="font-serif font-black text-2xl sm:text-3xl text-gold-700 block">4 Hubs</span>
              <span className="text-xs text-neutral-600 mt-1 block">Rayalaseema Studios</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="font-serif font-black text-2xl sm:text-3xl text-gold-700 block">100%</span>
              <span className="text-xs text-neutral-600 mt-1 block">Human Virgin Hair</span>
            </div>
          </div>
        </div>
      </section>

      {/* E. Our Hair Replacement Solutions */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* F. Why Choose Golden Hair Wig Studio (Comparison vs Surgery) */}
      <ComparisonSection onOpenBooking={() => onOpenBooking()} />

      {/* G. Authentic Before & After Transformations */}
      <InteractiveBeforeAfter onOpenBooking={() => onOpenBooking()} />

      {/* Interactive 3D Swiss Lace Architecture & Norwood Stage Diagnostic */}
      <PatchAnatomy3D />
      <HairLossStageGuide onOpenBooking={() => onOpenBooking()} />

      {/* H. Our Simple Consultation and Fitting Process (4 Steps) */}
      <ProcessStepsSection onOpenBooking={() => onOpenBooking()} />

      {/* I. Service Locations (Kadapa, Proddatur, Madanapalle, Nandyal) */}
      <BranchesSection onOpenBooking={onOpenBooking} />

      {/* J. Verified Customer Reviews */}
      <TestimonialsSection />

      {/* K. Hair Replacement FAQs */}
      <FAQSection />

      {/* L. Final Consultation CTA (Clean Warm Ivory Card) */}
      <section className="py-16 bg-[#FAF8F4] border-t border-[#E8E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E8E2D8] p-8 sm:p-12 shadow-sm text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Renewed Confidence Starts Here</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 tracking-tight max-w-2xl mx-auto">
              Schedule Your Private, Confidential Consultation Today
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Meet Mr. Swarup or our senior stylists at our studios in Kadapa, Proddatur, Madanapalle, or Nandyal. Zero pressure, completely private evaluations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Mr. Swarup</span>
              </a>

              <a
                href={getDirectCallUrl()}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call: {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

            <p className="text-[11px] text-neutral-400">
              * Non-surgical cosmetic solutions. Results and maintenance cycles vary based on individual scalp characteristics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
