import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { BRANCHES, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface LocationsPageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <SEOHead
        title="Studio Locations in Andhra Pradesh: Kadapa, Proddatur, Madanapalle & Nandyal"
        description="Find your nearest Golden Hair Wig Studio in Kadapa (HQ), Proddatur, Madanapalle, or Nandyal. Verified addresses, direct phones, opening hours, and consultation booking."
        canonicalPath="/locations"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Regional Network • Rayalaseema, AP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
          Our Regional Studio Locations
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Golden Hair Wig Studio operates four dedicated studios across Andhra Pradesh, offering private styling suites, custom hairline matching, and routine monthly maintenance.
        </p>
      </div>

      {/* 4 Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 shadow-xs ${
              branch.isHQ
                ? 'bg-[#FAF8F4] border-gold-400/80 shadow-sm'
                : 'bg-[#FAF8F4] border-[#E8E2D8] hover:border-gold-400'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>{branch.city} Hub</span>
                </span>
                {branch.isHQ ? (
                  <span className="px-3 py-1 rounded-full bg-gold-500 text-white font-bold text-xs shadow-xs">
                    Studio Headquarters
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-white text-neutral-600 text-[11px] font-semibold border border-[#E8E2D8]">
                    Regional Hub
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-serif font-bold text-neutral-900">
                <Link to={`/locations/${branch.slug}`} className="hover:text-gold-700 transition-colors">
                  {branch.name}
                </Link>
              </h2>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {branch.description}
              </p>

              {/* Address Details */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] space-y-2 text-xs">
                <div>
                  <span className="text-neutral-500 block font-medium">Studio Address:</span>
                  <span className="text-neutral-900 font-semibold block">{branch.address}</span>
                  <span className="text-neutral-600 block mt-0.5">{branch.landmark}</span>
                  <span className="text-gold-700 font-medium block mt-0.5">{branch.city}, {branch.state} - {branch.pincode}</span>
                </div>

                <div className="pt-2 border-t border-[#E8E2D8] flex items-center gap-2 text-neutral-700">
                  <Clock className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" aria-hidden="true" />
                  <span>{branch.timings}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#E8E2D8] mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={`/locations/${branch.slug}`}
                  className="py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold border border-[#E8E2D8] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Branch Page</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenBooking(branch.id)}
                  className="py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Book Here
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1 text-xs">
                <a
                  href={`tel:${branch.phones[0].replace(/\s+/g, '')}`}
                  className="text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>{branch.phones[0]}</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-700 hover:text-gold-800 font-semibold flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Central Consultation Desk */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>Central Appointment Desk</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-neutral-900">
            Need Guidance on Which Studio to Visit?
          </h3>
          <p className="text-xs text-neutral-600 max-w-xl leading-relaxed">
            Call our central line or connect on WhatsApp. Mr. Swarup and our support desk will connect you to the nearest branch and prepare custom lace patches in your exact shade.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getDirectCallUrl()}
            className="py-3 px-5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>Call: {BUSINESS_INFO.primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
