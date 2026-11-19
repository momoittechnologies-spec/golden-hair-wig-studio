import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-obsidian-950/95 backdrop-blur-xl border-t border-gold-500/25 px-4 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
          className="py-2.5 rounded-xl bg-obsidian-900 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-xs flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20would%20like%20to%20consult%20Mr.%20Swarup%20for%20hair%20replacement.`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 font-semibold text-xs flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
          <span>WhatsApp</span>
        </a>

        {/* Book Consultation Modal */}
        <button
          onClick={onOpenBooking}
          className="py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-gold-glow flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Free</span>
        </button>
      </div>
    </div>
  );
};
