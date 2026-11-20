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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEOHead
        title="Studio Locations in Andhra Pradesh: Kadapa, Proddatur, Madanapalle & Nandyal"
        description="Find your nearest Golden Hair Wig Studio in Kadapa (HQ), Proddatur, Madanapalle, or Nandyal. Verified addresses, direct phones, opening hours, and consultation booking."
        canonicalPath="/locations"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Regional Network • Rayalaseema, AP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
          Our Regional Studio Locations
        </h1>
        <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
          Golden Hair Wig Studio operates four dedicated studios across Andhra Pradesh, offering private styling suites, custom hairline matching, and routine monthly maintenance.
        </p>
      </div>

      {/* 4 Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {BRANCHES.map((branch) => (
          <article
            key={branch.id}
            className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
              branch.isHQ
                ? 'bg-neutral-900/95 border-gold-500/50 shadow-gold-glow/20'
                : 'bg-neutral-900/80 border-neutral-800 hover:border-gold-500/30'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{branch.city} Hub</span>
                </span>
                {branch.isHQ ? (
                  <span className="px-3 py-1 rounded-full bg-gold-gradient text-charcoal font-bold text-xs shadow-sm">
                    Studio Headquarters
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-ivory/70 text-[11px] font-semibold border border-neutral-700">
                    Regional Hub
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-serif font-bold text-white">
                <Link to={`/locations/${branch.slug}`} className="hover:text-gold-300 transition-colors">
                  {branch.name}
                </Link>
              </h2>

              <p className="text-xs text-ivory/70 leading-relaxed">
                {branch.description}
              </p>

              {/* Address Details */}
              <div className="p-4 rounded-2xl bg-charcoal border border-neutral-800 space-y-2 text-xs">
                <div>
                  <span className="text-ivory/50 block font-medium">Studio Address:</span>
                  <span className="text-ivory font-semibold block">{branch.address}</span>
                  <span className="text-ivory/70 block mt-0.5">{branch.landmark}</span>
                  <span className="text-gold-400 font-medium block mt-0.5">{branch.city}, {branch.state} - {branch.pincode}</span>
                </div>

                <div className="pt-2 border-t border-neutral-800 flex items-center gap-2 text-ivory/80">
                  <Clock className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" aria-hidden="true" />
                  <span>{branch.timings}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-neutral-800 mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={`/locations/${branch.slug}`}
                  className="py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-ivory text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Branch Page</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>

                <button
                  onClick={() => onOpenBooking(branch.id)}
                  className="py-2.5 rounded-xl bg-gold-gradient text-charcoal font-bold text-xs shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  Book Here
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1 text-xs">
                <a
                  href={`tel:${branch.phones[0].replace(/\s+/g, '')}`}
                  className="text-ivory/80 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                  <span>{branch.phones[0]}</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1"
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
      <div className="p-8 rounded-3xl bg-neutral-900 border border-gold-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Central Appointment Desk</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Need Guidance on Which Studio to Visit?
          </h3>
          <p className="text-xs text-ivory/70 max-w-xl leading-relaxed">
            Call our central line or connect on WhatsApp. Mr. Swarup and our support desk will connect you to the nearest branch and prepare custom lace patches in your exact shade.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getDirectCallUrl()}
            className="py-3 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-ivory font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400" aria-hidden="true" />
            <span>Call: {BUSINESS_INFO.primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
