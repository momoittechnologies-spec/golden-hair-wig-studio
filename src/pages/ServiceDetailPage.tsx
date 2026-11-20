import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ShieldCheck, CheckCircle2, Phone, MessageCircle, CalendarCheck, MapPin, ChevronRight, HelpCircle } from 'lucide-react';
import { SERVICES, BRANCHES, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface ServiceDetailPageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = SERVICES.find(
    s => s.slug === serviceId || s.id === serviceId
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <SEOHead
        title={`${service.title} | Non-Surgical Hair Replacement`}
        description={`${service.title} in Kadapa, Proddatur, Madanapalle & Nandyal. ${service.description}`}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
        <Link to="/" className="hover:text-gold-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <Link to="/services" className="hover:text-gold-700">Services</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-gold-700 font-semibold">{service.title}</span>
      </nav>

      {/* Hero Service Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold">
            <span>{service.badge}</span>
            <span>•</span>
            <span className="text-neutral-600">{service.duration} Procedure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-gold-700 font-medium">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {service.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="text-[11px] text-neutral-500 uppercase font-semibold block">Application Time</span>
              <span className="text-base font-bold text-neutral-900 mt-1 block">{service.duration}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="text-[11px] text-neutral-500 uppercase font-semibold block">Durability / Cycle</span>
              <span className="text-base font-bold text-neutral-900 mt-1 block">{service.durability}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8]">
              <span className="text-[11px] text-neutral-500 uppercase font-semibold block">Hair Grade</span>
              <span className="text-base font-bold text-gold-700 mt-1 block">100% Human Hair</span>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={() => onOpenBooking(undefined, service.id)}
              className="py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Book Fitting Consultation</span>
            </button>

            <a
              href={buildWhatsAppUrl({ serviceTitle: service.title, enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={getDirectCallUrl()}
              className="py-3.5 px-5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-600" aria-hidden="true" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm bg-[#FAF8F4]">
            <img
              src={service.image}
              alt={`${service.title} at Golden Hair Wig Studio`}
              className="w-full h-96 sm:h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] shadow-sm">
              <div className="flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
                <span>Proprietor Swarup's Recommendation</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ideal for: {service.idealFor}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suitability & Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-4">
          <h2 className="text-xl font-serif font-bold text-neutral-900 flex items-center gap-2">
            <span>Key Advantages of {service.title}</span>
          </h2>
          <ul className="space-y-3 pt-2">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-4">
          <h2 className="text-xl font-serif font-bold text-neutral-900 flex items-center gap-2">
            <span>Step-by-Step Procedure Flow</span>
          </h2>
          <ol className="space-y-4 pt-2">
            {service.process.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#E8E2D8] text-gold-700 font-bold text-xs flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Routine Maintenance Guidance */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>Routine Maintenance Expectations</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-neutral-900">
              Keeping Your Hair System Undetectable & Hygienic
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {service.maintenance}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking(undefined, 'hair-system-maintenance')}
            className="py-3 px-5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 font-semibold text-xs whitespace-nowrap shadow-xs transition-colors"
          >
            Schedule Service Session
          </button>
        </div>
      </div>

      {/* Service-Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gold-600" aria-hidden="true" />
            <span>Frequently Asked Questions About {service.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-2">
                <h3 className="text-sm font-bold text-neutral-900">
                  {faq.question}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available at All 4 Hubs */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] mb-16">
        <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
          Available at All 4 Studio Locations
        </h3>
        <p className="text-xs text-neutral-600 mb-6">
          You can receive this procedure at any of our four regional studios across Andhra Pradesh:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANCHES.map(b => (
            <Link
              key={b.id}
              to={`/locations/${b.slug}`}
              className="p-4 rounded-2xl bg-white border border-[#E8E2D8] hover:border-gold-400 transition-colors block group shadow-xs"
            >
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold text-sm group-hover:text-gold-700">
                <MapPin className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                <span>{b.city}</span>
                {b.isHQ && (
                  <span className="text-[9px] bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 px-1 py-0.2 rounded font-bold">HQ</span>
                )}
              </div>
              <span className="text-[11px] text-neutral-500 block mt-1 truncate">{b.landmark}</span>
              <span className="text-[11px] text-gold-700 font-semibold block mt-2 group-hover:underline">
                View Studio Details →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Related Services */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-neutral-900">
          Other Non-Surgical Solutions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServices.map(rel => (
            <Link
              key={rel.id}
              to={`/services/${rel.slug}`}
              className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all block group shadow-xs"
            >
              <span className="text-[10px] bg-white border border-[#E8E2D8] text-gold-700 px-2 py-0.5 rounded font-bold uppercase">
                {rel.badge}
              </span>
              <h4 className="text-base font-serif font-bold text-neutral-900 mt-2 group-hover:text-gold-700 transition-colors">
                {rel.title}
              </h4>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                {rel.subtitle}
              </p>
              <span className="text-xs text-gold-700 font-semibold mt-3 inline-block group-hover:underline">
                Read procedure guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
