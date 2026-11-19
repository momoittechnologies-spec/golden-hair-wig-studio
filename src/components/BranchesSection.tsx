import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { BRANCHES, BUSINESS_INFO } from '../data/businessData';

interface BranchesSectionProps {
  onOpenBooking: (branchId?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenBooking }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);

  const selectedBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <section id="branches" className="py-16 lg:py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>4 Premium Studio Locations Across Rayalaseema</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Visit Your Nearest Golden Hair Studio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Equipped with private VIP consultation rooms, sterilized equipment, and experienced hair technicians personally trained by Proprietor Mr. Swarup.
          </p>
        </div>

        {/* Branch Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {BRANCHES.map((branch) => {
            const isCurrent = branch.id === selectedBranchId;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isCurrent
                    ? 'bg-obsidian-900 border-gold-500 shadow-gold-glow scale-[1.02]'
                    : 'bg-obsidian-950/80 border-slate-800 hover:border-slate-700 hover:bg-obsidian-900/40 text-slate-400'
                }`}
              >
                {branch.isHQ && (
                  <span className="absolute -top-2.5 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full bg-gold-gradient text-obsidian-950 shadow-sm uppercase tracking-wider">
                    HQ
                  </span>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className={`w-4 h-4 ${isCurrent ? 'text-gold-400' : 'text-slate-500'}`} />
                  <span className={`text-sm sm:text-base font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                    {branch.city}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {branch.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Showcase Card */}
        <div className="max-w-4xl mx-auto bg-obsidian-900 rounded-3xl border border-gold-500/30 p-6 sm:p-8 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Branch Details & Contact info */}
            <div className="md:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-gold-500/20 text-gold-400 text-xs font-bold border border-gold-500/30">
                  {selectedBranch.isHQ ? 'Headquarters & Training Center' : 'Regional Branch'}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  <span>{selectedBranch.timings}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  {selectedBranch.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedBranch.address}
                </p>
                <p className="text-xs text-gold-400/90 mt-1">
                  Landmark: {selectedBranch.landmark}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {selectedBranch.city}, {selectedBranch.state} - {selectedBranch.pincode}
                </p>
              </div>

              {/* Verified Features */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Private Styling Cabins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Scalp Examination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Senior Certified Stylists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full Stock of Hair Systems</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking(selectedBranch.id)}
                  className="px-5 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:opacity-95 transition-opacity"
                >
                  Book Appointment at {selectedBranch.city}
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20want%20to%20visit%20your%20${selectedBranch.city}%20branch.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={selectedBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-400" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Right: Studio Phone & Map Card */}
            <div className="md:col-span-5 bg-obsidian-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              
              <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Branch Directly</span>
              </div>

              <div className="space-y-2">
                {selectedBranch.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block p-3 rounded-xl bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 text-slate-200 hover:text-gold-300 font-semibold text-sm transition-all flex items-center justify-between"
                  >
                    <span>{phone}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Tap to Call</span>
                  </a>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300">Appointment Guidelines:</div>
                <p>• Prior appointment recommended to ensure zero waiting time.</p>
                <p>• Same-day emergency transformations available upon call.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
