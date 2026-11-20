import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { ServicesSection } from '../components/ServicesSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { PatchAnatomy3D } from '../components/PatchAnatomy3D';
import { HairLossStageGuide } from '../components/HairLossStageGuide';
import { BranchesSection } from '../components/BranchesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstagramShowcase } from '../components/InstagramShowcase';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, CalendarCheck, Phone, MessageCircle, Award, Sparkles, Clock, MapPin, CheckCircle2 } from 'lucide-react';
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

      {/* 1. Premium Cinematic Hero Slider (Light Luxury Aesthetic) */}
      <HeroSlider onOpenBooking={() => onOpenBooking()} />

      {/* 2. Subtle Service Marquee immediately AFTER hero slider */}
      <MarqueeBanner />

      {/* 3. Verified Trust and Reassurance Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E8E2D8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-gold-700 tracking-wider uppercase">
              Why Rayalaseema Trusts Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
              Personalized Hair Replacement with Complete Confidence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Trust Card 1 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all duration-200 hover:shadow-sm space-y-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] group-hover:border-gold-300 flex items-center justify-center text-gold-600 shadow-2xs">
                <Award className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-serif font-black text-2xl text-neutral-900 block">
                10+ Years
              </span>
              <strong className="text-xs font-bold text-gold-700 block uppercase tracking-wide">
                Specialized Craftsmanship
              </strong>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct leadership of Prop. Mr. Swarup with thousands of satisfied clients across Andhra Pradesh.
              </p>
            </div>

            {/* Trust Card 2 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all duration-200 hover:shadow-sm space-y-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] group-hover:border-gold-300 flex items-center justify-center text-gold-600 shadow-2xs">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-serif font-black text-2xl text-neutral-900 block">
                60 Minutes
              </span>
              <strong className="text-xs font-bold text-gold-700 block uppercase tracking-wide">
                Instant Transformation
              </strong>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Walk in with visible scalp thinning, walk out with a full head of styled hair in a single sitting with zero pain.
              </p>
            </div>

            {/* Trust Card 3 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all duration-200 hover:shadow-sm space-y-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] group-hover:border-gold-300 flex items-center justify-center text-gold-600 shadow-2xs">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-serif font-black text-2xl text-neutral-900 block">
                4 Hub Studios
              </span>
              <strong className="text-xs font-bold text-gold-700 block uppercase tracking-wide">
                Rayalaseema Network
              </strong>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Fully equipped private VIP styling cabins in Kadapa (HQ), Proddatur, Madanapalle, and Nandyal.
              </p>
            </div>

            {/* Trust Card 4 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all duration-200 hover:shadow-sm space-y-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] group-hover:border-gold-300 flex items-center justify-center text-gold-600 shadow-2xs">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-serif font-black text-2xl text-neutral-900 block">
                100% Virgin Hair
              </span>
              <strong className="text-xs font-bold text-gold-700 block uppercase tracking-wide">
                Undetectable Realism
              </strong>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Premium human hair knotted onto breathable Swiss lace. Custom matched to your hair density and texture.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Hair Replacement Solutions */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 5. Why Choose Golden Hair Wig Studio (Comparison vs Surgery) */}
      <ComparisonSection onOpenBooking={() => onOpenBooking()} />

      {/* 6. Authentic Before & After Transformations */}
      <InteractiveBeforeAfter onOpenBooking={() => onOpenBooking()} />

      {/* Interactive 3D Swiss Lace Architecture & Norwood Stage Diagnostic */}
      <PatchAnatomy3D />
      <HairLossStageGuide onOpenBooking={() => onOpenBooking()} />

      {/* 7. Our Simple Consultation and Fitting Process (4 Steps) */}
      <ProcessStepsSection onOpenBooking={() => onOpenBooking()} />

      {/* 8. Service Locations (Kadapa, Proddatur, Madanapalle, Nandyal) */}
      <BranchesSection onOpenBooking={onOpenBooking} />

      {/* J. Verified Customer Reviews & Google Rating */}
      <TestimonialsSection />

      {/* K. Official Instagram Community Showcase */}
      <InstagramShowcase />

      {/* L. Hair Replacement FAQs */}
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
