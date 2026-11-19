import React, { useState } from 'react';
import { Sparkles, Clock, Calendar, Check, ArrowRight, ShieldCheck, Info, X } from 'lucide-react';
import { SERVICES, type Service } from '../data/businessData';

interface ServicesSectionProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = SERVICES.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'men') return service.category === 'men' || service.category === 'all';
    if (filter === 'women') return service.category === 'women' || service.category === 'all';
    return true;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Hair Replacement Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Tailored Solutions For Every Stage of Hair Loss
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From semi-permanent active wear to 10-second daily removable systems, we offer all 4 globally recognized attachment methodologies and specialized women's crown volumizers.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-obsidian-900 border border-slate-800 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Procedures
            </button>
            <button
              onClick={() => setFilter('men')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'men'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Men's Systems
            </button>
            <button
              onClick={() => setFilter('women')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'women'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Women's Hair & Toppers
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-obsidian-900/90 rounded-3xl border border-slate-800 hover:border-gold-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gold-400/90 font-medium mt-1 mb-3">
                  {service.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Highlight Specs */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/80">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Durability:</strong> {service.durability}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Ideal for:</strong> {service.idealFor}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-1.5 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-gold-400" />
                  <span>View Details</span>
                </button>
                <button
                  onClick={() => onOpenBooking(undefined, service.id)}
                  className="py-2.5 px-4 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-gold-glow hover:opacity-95 transition-opacity flex items-center justify-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 rounded-3xl border border-gold-500/25 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Mr. Swarup's 100% Quality & Discretion Guarantee</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              Not sure which method fits your lifestyle?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Visit our studio for a complimentary, zero-obligation scalp scan and hair density consultation in our private cabins. We will recommend the perfect solution for your routine.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Get Free Expert Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-obsidian-950 rounded-3xl border border-gold-500/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-obsidian-850 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30">
                {selectedService.badge}
              </span>
              <span className="text-xs text-slate-400">Duration: {selectedService.duration}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-gold-400 font-medium mb-4">
              {selectedService.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-4 mb-6 bg-obsidian-900 p-4 rounded-2xl border border-slate-800 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-400 block mb-0.5">Holding Durability:</span>
                  <span className="text-white font-bold">{selectedService.durability}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Recommended Lifestyle:</span>
                  <span className="text-white font-bold">{selectedService.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Step-by-step process */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Procedure Steps (In Just 45–60 Mins):
              </h4>
              <div className="space-y-2">
                {selectedService.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 mb-6">
              <strong>Maintenance Guideline:</strong> {selectedService.maintenance}
            </div>

            {/* Modal actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const serviceId = selectedService.id;
                  setSelectedService(null);
                  onOpenBooking(undefined, serviceId);
                }}
                className="flex-1 py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2"
              >
                <span>Book Appointment for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-xl bg-obsidian-900 border border-slate-700 text-slate-300 hover:text-white text-sm font-semibold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
