import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ChevronRight, CheckCircle2, CalendarCheck, ExternalLink, AlertCircle } from 'lucide-react';
import { BRANCHES, SERVICES, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface LocationDetailPageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ onOpenBooking }) => {
  const { branchId } = useParams<{ branchId: string }>();

  const branch = BRANCHES.find(
    b => b.slug === branchId || b.id === branchId
  );

  if (!branch) {
    return <Navigate to="/locations" replace />;
  }

  const otherBranches = BRANCHES.filter(b => b.id !== branch.id);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <SEOHead
        title={`Golden Hair Wig Studio in ${branch.city} | Hair Patch & Bonding`}
        description={`Visit Golden Hair Wig Studio in ${branch.city}, Andhra Pradesh. Non-surgical hair bonding, clipping, hair systems, and maintenance. Address: ${branch.address}. Phone: ${branch.phones[0]}.`}
        canonicalPath={`/locations/${branch.slug}`}
        pageJsonLd={{
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "name": `Golden Hair Wig Studio - ${branch.name}`,
          "telephone": branch.phones[0],
          "url": `https://golden-hair-wig-studio.pages.dev/locations/${branch.slug}`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": branch.address,
            "addressLocality": branch.city,
            "addressRegion": branch.state,
            "postalCode": branch.pincode,
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          ]
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
        <Link to="/" className="hover:text-gold-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <Link to="/locations" className="hover:text-gold-700">Locations</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-gold-700 font-semibold">{branch.city} Studio</span>
      </nav>

      {/* Hero Location Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>{branch.isHQ ? 'Studio Headquarters' : 'Authorized Studio Hub'}</span>
            <span>•</span>
            <span className="text-neutral-600">{branch.city}, AP</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Golden Hair Wig Studio — {branch.city}
          </h1>

          <p className="text-base sm:text-lg text-gold-700 font-medium">
            Non-Surgical Hair Replacement & System Servicing in {branch.city}
          </p>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {branch.description}
          </p>

          {/* Confirmed / Status Badge */}
          {branch.isAddressConfirmed ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs">
                <strong className="text-emerald-900 block font-semibold">Verified Studio Address:</strong>
                <span className="text-neutral-800 block mt-0.5">{branch.address}</span>
                <span className="text-neutral-600 block">{branch.landmark}</span>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs">
                <strong className="text-amber-900 block font-semibold">Appointment-Based Consultation Hub:</strong>
                <span className="text-neutral-800 block mt-0.5">{branch.address}</span>
                <span className="text-neutral-600 block">Exact door number & styling suite details are shared via WhatsApp upon appointment confirmation with Mr. Swarup.</span>
              </div>
            </div>
          )}

          {/* Quick Contact & Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking(branch.id)}
              className="py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Book Appointment at {branch.city}</span>
            </button>

            <a
              href={buildWhatsAppUrl({ branchName: branch.name, enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>WhatsApp {branch.city} Desk</span>
            </a>

            <a
              href={`tel:${branch.phones[0].replace(/\s+/g, '')}`}
              className="py-3.5 px-5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-600" aria-hidden="true" />
              <span>Call: {branch.phones[0]}</span>
            </a>
          </div>
        </div>

        {/* Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm bg-[#FAF8F4]">
            <img
              src={branch.image}
              alt={`Golden Hair Studio ${branch.name}`}
              className="w-full h-80 sm:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>{branch.timings}</span>
                </span>
                <span className="text-gold-700 font-semibold">{branch.city}</span>
              </div>

              <a
                href={branch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-[#E8E2D8] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Available at this Studio */}
      <div className="mb-16">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-serif font-bold text-neutral-900">
            Available Services at Our {branch.city} Studio
          </h2>
          <p className="text-xs text-neutral-600">
            All consultations are conducted in complete privacy with 100% natural human hair systems:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div>
                <span className="text-[10px] bg-white text-gold-700 font-bold px-2 py-0.5 rounded border border-[#E8E2D8]">
                  {s.badge}
                </span>
                <h3 className="text-lg font-serif font-bold text-neutral-900 mt-2">
                  <Link to={`/services/${s.slug}`} className="hover:text-gold-700">
                    {s.title}
                  </Link>
                </h3>
                <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                  {s.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-between">
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold-600" aria-hidden="true" />
                  <span>{s.duration}</span>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(branch.id, s.id)}
                  className="text-xs font-bold text-gold-700 hover:text-gold-800"
                >
                  Book for {branch.city} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Landmarks & Directions */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] mb-16 space-y-4">
        <h3 className="text-xl font-serif font-bold text-neutral-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gold-600" aria-hidden="true" />
          <span>Surrounding Landmarks in {branch.city}</span>
        </h3>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Easily accessible via public transit, auto-rickshaws, and private vehicles. Key landmarks around the {branch.city} hub include:
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {branch.landmarksAround.map((lm, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D8] text-neutral-700 text-xs font-medium"
            >
              📍 {lm}
            </span>
          ))}
        </div>
      </div>

      {/* Explore Other Hubs */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-neutral-900">
          Other Studios in Rayalaseema
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherBranches.map((other) => (
            <Link
              key={other.id}
              to={`/locations/${other.slug}`}
              className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all block group shadow-xs"
            >
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold text-base group-hover:text-gold-700">
                <MapPin className="w-4 h-4 text-gold-600" aria-hidden="true" />
                <span>{other.city} Studio</span>
                {other.isHQ && (
                  <span className="text-[9px] bg-white text-gold-700 px-1 py-0.2 rounded border border-[#E8E2D8] font-bold">HQ</span>
                )}
              </div>
              <span className="text-xs text-neutral-500 block mt-1 truncate">{other.landmark}</span>
              <span className="text-xs text-gold-700 font-semibold mt-3 inline-block group-hover:underline">
                View {other.city} studio →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
