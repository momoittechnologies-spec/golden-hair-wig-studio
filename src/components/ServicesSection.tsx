import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES, type Service } from '../data/businessData';

interface ServicesSectionProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  const filteredServices = SERVICES.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'men') return service.category === 'hair-replacement' || service.category === 'core-services';
    if (filter === 'women') return service.slug === 'ladies-extensions' || service.slug === 'non-surgical-hair-replacement';
    return true;
  });

  return (
    <section id="services" className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Scissors className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Master Hair Replacement Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Our Hair Replacement Solutions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            From semi-permanent active-wear bonding to daily removable clip-in systems, each procedure is tailored for natural realism using 100% human hair.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] mt-4 shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gold-500 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Solutions
            </button>
            <button
              type="button"
              onClick={() => setFilter('men')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'men'
                  ? 'bg-gold-500 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Men's Systems
            </button>
            <button
              type="button"
              onClick={() => setFilter('women')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'women'
                  ? 'bg-gold-500 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Women's Solutions
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
            >
              <div className="space-y-4">
                {/* Header with badge & duration */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-gold-700 border border-[#E8E2D8] text-[11px] font-bold">
                    {service.badge}
                  </span>
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-neutral-900 group-hover:text-gold-700 transition-colors">
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs text-gold-700 font-medium">
                  {service.subtitle}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Quick Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#E8E2D8]">
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-5 mt-4 border-t border-[#E8E2D8] grid grid-cols-2 gap-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 text-neutral-500" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenBooking(undefined, service.id)}
                  className="py-2.5 px-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Book Fitting
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
