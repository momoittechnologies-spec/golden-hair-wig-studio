import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, MessageCircle, CheckCircle2, ChevronRight, Award, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-14 lg:pb-20">
      {/* Subtle Warm Gradient Accent in Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FAF8F4] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Clear, Confident, Reassuring Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-800 text-xs font-semibold shadow-xs">
              <Award className="w-4 h-4 text-gold-600" aria-hidden="true" />
              <span>Rayalaseema's Premier Hair Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
              <span className="text-gold-700 font-bold">1-Hour Transformation</span>
            </div>

            {/* Main Headline: Exact Recommended H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-extrabold text-neutral-900 tracking-tight leading-[1.18]">
              Natural-Looking Hair Replacement.{' '}
              <span className="text-gold-700 decoration-gold-400">
                Confidence That Feels Like You.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Discover personalized non-surgical hair replacement solutions at Golden Hair Wig Studio, 
              serving <strong className="text-neutral-800 font-semibold">Kadapa, Proddatur, Madanapalle, and Nandyal</strong>.
              Experience undetectable, custom-styled human hair systems fitted in just 60 minutes with zero surgery and zero downtime.
            </p>

            {/* Key Verified Feature Pills */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" aria-hidden="true" />
                <span>100% Natural Human Hair</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" aria-hidden="true" />
                <span>Zero Pain & Zero Injections</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" aria-hidden="true" />
                <span>Shower, Gym & Helmet Safe</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" aria-hidden="true" />
                <span>Private VIP Styling Rooms</span>
              </div>
            </div>

            {/* Call to Actions (Primary & Secondary) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <Link
                to="/gallery"
                className="px-6 py-3.5 rounded-xl bg-[#FAF8F4] hover:bg-[#F5F0E8] border border-[#E8E2D8] text-neutral-800 font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
              >
                <span>View Transformations</span>
              </Link>

              <a
                href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                aria-label="Direct WhatsApp Consultation"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-500 border-t border-[#E8E2D8] w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
                <span className="font-medium text-neutral-700">Led by Prop. Mr. Swarup</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="font-semibold text-neutral-800 ml-1">4.9 / 5.0</span>
                <span className="text-neutral-500">Google Verified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card (Clean Light Aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-lg bg-[#FAF8F4]">
              <img
                src="/images/slider/slide_1.jpg"
                alt="Natural-looking hair replacement result at Golden Hair Wig Studio"
                className="w-full h-80 sm:h-[430px] object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] shadow-md flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 block">
                    Immediate Transformation
                  </span>
                  <strong className="text-sm text-neutral-900 block font-serif">
                    100% Undetectable Front Hairline
                  </strong>
                  <span className="text-xs text-neutral-500 block">
                    Kadapa • Proddatur • Madanapalle • Nandyal
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors flex-shrink-0"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
