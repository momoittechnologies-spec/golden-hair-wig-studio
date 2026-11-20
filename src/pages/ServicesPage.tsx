import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';
import { ComparisonSection } from '../components/ComparisonSection';

interface ServicesPageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  const filteredServices = SERVICES.filter(
    s => filter === 'all' || s.category === filter || s.category === 'all'
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <SEOHead
        title="Non-Surgical Hair Replacement Services"
        description="Explore personalized non-surgical hair replacement solutions: Hair Bonding, Hair Clipping, Hair Taping, Hair Weaving, Ladies Extensions, and System Maintenance across Andhra Pradesh."
        canonicalPath="/services"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Non-Surgical Aesthetic Hair Restoration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
          Personalized Hair Replacement Services
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          From semi-permanent active-wear bonding to zero-adhesive daily clip-on systems, each procedure is customized for undetectable hairline realism using 100% human hair.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 pt-4">
          {(['all', 'men', 'women'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                filter === cat
                  ? 'bg-gold-500 text-white shadow-xs'
                  : 'bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat === 'men' ? "Men's Systems" : "Women's Solutions"}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            className="flex flex-col rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-xs"
          >
            {/* Card Image */}
            <div className="relative h-52 overflow-hidden bg-neutral-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-neutral-900 text-[11px] font-bold shadow-xs">
                {service.badge}
              </span>
              <span className="absolute bottom-3 right-4 text-xs font-semibold text-white flex items-center gap-1 drop-shadow-xs">
                <Clock className="w-3.5 h-3.5 text-gold-300" aria-hidden="true" />
                <span>{service.duration}</span>
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-neutral-900 hover:text-gold-700 transition-colors">
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h2>
                <p className="text-xs text-gold-700 font-semibold mt-1">
                  {service.subtitle}
                </p>
                <p className="text-xs text-neutral-600 mt-3 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Key Highlights:
                  </span>
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#E8E2D8] space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold border border-[#E8E2D8] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(undefined, service.id)}
                    className="py-2.5 px-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Book Fitting</span>
                  </button>
                </div>

                <a
                  href={buildWhatsAppUrl({ serviceTitle: service.title, enquiryType: 'consultation' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Ask about {service.title} on WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Honest Comparison Table */}
      <ComparisonSection onOpenBooking={() => onOpenBooking()} />

      {/* Trust & Transparency Note */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] flex flex-col sm:flex-row items-center gap-6">
        <div className="p-4 rounded-2xl bg-white text-gold-600 border border-[#E8E2D8] flex-shrink-0 shadow-xs">
          <ShieldCheck className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-serif font-bold text-neutral-900">
            Ethical & Transparent Consultation
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {BUSINESS_INFO.cosmeticDisclaimer} Every client receives a private evaluation with Mr. Swarup or trained stylists to choose the exact attachment technique matching their lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};
