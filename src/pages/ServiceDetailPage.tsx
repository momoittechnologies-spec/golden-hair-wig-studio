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
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={`${service.title} | Non-Surgical Hair Replacement`}
        description={`${service.title} in Kadapa, Proddatur, Madanapalle & Nandyal. ${service.description}`}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ivory/60 mb-8">
        <Link to="/" className="hover:text-gold-400">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <Link to="/services" className="hover:text-gold-400">Services</Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-gold-400 font-semibold">{service.title}</span>
      </nav>

      {/* Hero Service Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <span>{service.badge}</span>
            <span>•</span>
            <span className="text-ivory/80">{service.duration} Procedure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-gold-300 font-medium">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
            {service.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-[11px] text-ivory/60 uppercase font-semibold block">Application Time</span>
              <span className="text-base font-bold text-white mt-1 block">{service.duration}</span>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-[11px] text-ivory/60 uppercase font-semibold block">Durability / Cycle</span>
              <span className="text-base font-bold text-white mt-1 block">{service.durability}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-[11px] text-ivory/60 uppercase font-semibold block">Hair Grade</span>
              <span className="text-base font-bold text-gold-400 mt-1 block">100% Human Hair</span>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => onOpenBooking(undefined, service.id)}
              className="py-3.5 px-6 rounded-xl bg-gold-gradient text-charcoal font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-charcoal" aria-hidden="true" />
              <span>Book Fitting Consultation</span>
            </button>

            <a
              href={buildWhatsAppUrl({ serviceTitle: service.title, enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={getDirectCallUrl()}
              className="py-3.5 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-ivory text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" aria-hidden="true" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl">
            <img
              src={service.image}
              alt={`${service.title} at Golden Hair Wig Studio`}
              className="w-full h-96 sm:h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal/90 backdrop-blur-md border border-gold-500/25">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Proprietor Swarup's Recommendation</span>
              </div>
              <p className="text-xs text-ivory/80 leading-relaxed">
                Ideal for: {service.idealFor}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suitability & Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-4">
          <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
            <span>Key Advantages of {service.title}</span>
          </h2>
          <ul className="space-y-3 pt-2">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-4">
          <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
            <span>Step-by-Step Procedure Flow</span>
          </h2>
          <ol className="space-y-4 pt-2">
            {service.process.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80 leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 font-bold text-xs flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Routine Maintenance Guidance */}
      <div className="p-8 rounded-3xl bg-neutral-900/95 border border-gold-500/20 mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Routine Maintenance Expectations</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              Keeping Your Hair System Undetectable & Hygienic
            </h3>
            <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
              {service.maintenance}
            </p>
          </div>

          <button
            onClick={() => onOpenBooking(undefined, 'patch-servicing')}
            className="py-3 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-ivory font-semibold text-xs whitespace-nowrap"
          >
            Schedule Service Session
          </button>
        </div>
      </div>

      {/* Service-Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gold-500" aria-hidden="true" />
            <span>Frequently Asked Questions About {service.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <h3 className="text-sm font-bold text-white">
                  {faq.question}
                </h3>
                <p className="text-xs text-ivory/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available at All 4 Hubs */}
      <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 mb-16">
        <h3 className="text-xl font-serif font-bold text-white mb-2">
          Available at All 4 Studio Locations
        </h3>
        <p className="text-xs text-ivory/70 mb-6">
          You can receive this procedure at any of our four regional studios across Andhra Pradesh:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANCHES.map(b => (
            <Link
              key={b.id}
              to={`/locations/${b.slug}`}
              className="p-4 rounded-2xl bg-charcoal border border-neutral-800 hover:border-gold-500/40 transition-colors block group"
            >
              <div className="flex items-center gap-1.5 text-white font-bold text-sm group-hover:text-gold-300">
                <MapPin className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
                <span>{b.city}</span>
                {b.isHQ && (
                  <span className="text-[9px] bg-gold-500/20 text-gold-400 px-1 py-0.2 rounded font-bold">HQ</span>
                )}
              </div>
              <span className="text-[11px] text-ivory/60 block mt-1 truncate">{b.landmark}</span>
              <span className="text-[11px] text-gold-400 font-semibold block mt-2 group-hover:underline">
                View Studio Details →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Related Services */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-white">
          Other Non-Surgical Solutions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServices.map(rel => (
            <Link
              key={rel.id}
              to={`/services/${rel.slug}`}
              className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-gold-500/40 transition-all block group"
            >
              <span className="text-[10px] bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded font-bold uppercase">
                {rel.badge}
              </span>
              <h4 className="text-base font-serif font-bold text-white mt-2 group-hover:text-gold-300 transition-colors">
                {rel.title}
              </h4>
              <p className="text-xs text-ivory/60 mt-1 line-clamp-2">
                {rel.subtitle}
              </p>
              <span className="text-xs text-gold-400 font-semibold mt-3 inline-block group-hover:underline">
                Read procedure guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
