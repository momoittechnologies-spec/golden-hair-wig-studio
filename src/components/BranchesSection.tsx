import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { BRANCHES, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface BranchesSectionProps {
  onOpenBooking: (branchId?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenBooking }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);

  const selectedBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <section id="branches" className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>4 Studio Hubs Across Andhra Pradesh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Our Studio Locations
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Equipped with private VIP consultation suites, sterilized equipment, and certified hair technicians led directly by Proprietor Mr. Swarup.
          </p>
        </div>

        {/* Branch Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {BRANCHES.map((branch) => {
            const isCurrent = branch.id === selectedBranchId;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setSelectedBranchId(branch.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                  isCurrent
                    ? 'bg-[#FAF6ED] border-gold-500 shadow-xs'
                    : 'bg-[#FAF8F4] border-[#E8E2D8] hover:bg-[#F5F0E8] text-neutral-600'
                }`}
              >
                {branch.isHQ && (
                  <span className="absolute -top-2.5 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full bg-gold-500 text-white shadow-xs uppercase tracking-wider">
                    HQ
                  </span>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className={`w-4 h-4 ${isCurrent ? 'text-gold-700' : 'text-neutral-400'}`} />
                  <span className={`text-sm sm:text-base font-bold ${isCurrent ? 'text-neutral-900' : 'text-neutral-700'}`}>
                    {branch.city}
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 truncate">
                  {branch.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Showcase Card (Clean Light Aesthetic) */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F4] rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 shadow-md relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Branch Details & Contact info */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  {selectedBranch.isHQ ? 'Studio Headquarters' : 'Authorized Studio Hub'}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-neutral-500 font-medium">{selectedBranch.city}, AP</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-neutral-900">
                {selectedBranch.name}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {selectedBranch.description}
              </p>

              {/* Address Block */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] text-xs space-y-1.5 shadow-2xs">
                <div className="font-semibold text-neutral-900">{selectedBranch.address}</div>
                <div className="text-neutral-500">{selectedBranch.landmark}</div>
                <div className="text-gold-700 font-medium">{selectedBranch.city}, {selectedBranch.state} - {selectedBranch.pincode}</div>
                <div className="pt-2 border-t border-[#F5F0E8] flex items-center gap-2 text-neutral-600">
                  <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>{selectedBranch.timings}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenBooking(selectedBranch.id)}
                  className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Book at {selectedBranch.city}
                </button>

                <a
                  href={buildWhatsAppUrl({ branchName: selectedBranch.name, enquiryType: 'consultation' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  to={`/locations/${selectedBranch.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Branch Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>

                <a
                  href={selectedBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl text-neutral-500 hover:text-gold-700 text-xs flex items-center gap-1"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Branch Photo */}
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm">
                <img
                  src={selectedBranch.image}
                  alt={`Golden Hair Studio ${selectedBranch.city}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
