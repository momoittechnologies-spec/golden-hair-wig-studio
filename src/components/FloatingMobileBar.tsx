import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D8] px-4 py-2.5 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
          className="py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] text-[#242424] hover:bg-neutral-100 font-semibold text-xs flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-gold-600" />
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20would%20like%20to%20consult%20Mr.%20Swarup%20for%20hair%20replacement.`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-[#E8EEE8] border border-emerald-300 text-emerald-800 font-semibold text-xs flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Book Consultation Modal */}
        <button
          onClick={onOpenBooking}
          className="py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Free</span>
        </button>
      </div>
    </div>
  );
};
