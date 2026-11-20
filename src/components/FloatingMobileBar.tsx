import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Scissors, Sparkles, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');
  const isResultsActive = location.pathname === '/gallery';

  return (
    <nav
      aria-label="Mobile Bottom Navigation Bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E8E2D8] shadow-[0_-4px_24px_rgba(0,0,0,0.07)] pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] px-1 select-none"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-around">
        
        {/* Tab 1: Home */}
        <Link
          to="/"
          className="group flex flex-col items-center justify-center py-1 active:scale-90 transition-transform duration-100 ease-out focus:outline-none"
          aria-label="Navigate to Home"
        >
          <div
            className={`w-12 sm:w-14 h-7 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isHomeActive
                ? 'bg-gold-100 text-gold-900 shadow-2xs'
                : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/60'
            }`}
          >
            <Home className="w-4.5 h-4.5 sm:w-5 sm:h-5" aria-hidden="true" />
          </div>
          <span
            className={`text-[10px] sm:text-[11px] tracking-tight mt-0.5 transition-colors ${
              isHomeActive ? 'font-bold text-neutral-900' : 'font-medium text-neutral-500'
            }`}
          >
            Home
          </span>
        </Link>

        {/* Tab 2: Services */}
        <Link
          to="/services"
          className="group flex flex-col items-center justify-center py-1 active:scale-90 transition-transform duration-100 ease-out focus:outline-none"
          aria-label="Browse Services"
        >
          <div
            className={`w-12 sm:w-14 h-7 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isServicesActive
                ? 'bg-gold-100 text-gold-900 shadow-2xs'
                : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/60'
            }`}
          >
            <Scissors className="w-4.5 h-4.5 sm:w-5 sm:h-5" aria-hidden="true" />
          </div>
          <span
            className={`text-[10px] sm:text-[11px] tracking-tight mt-0.5 transition-colors ${
              isServicesActive ? 'font-bold text-neutral-900' : 'font-medium text-neutral-500'
            }`}
          >
            Services
          </span>
        </Link>

        {/* Tab 3: Results (Transformations) */}
        <Link
          to="/gallery"
          className="group flex flex-col items-center justify-center py-1 active:scale-90 transition-transform duration-100 ease-out focus:outline-none"
          aria-label="View Client Transformations"
        >
          <div
            className={`w-12 sm:w-14 h-7 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isResultsActive
                ? 'bg-gold-100 text-gold-900 shadow-2xs'
                : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/60'
            }`}
          >
            <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5" aria-hidden="true" />
          </div>
          <span
            className={`text-[10px] sm:text-[11px] tracking-tight mt-0.5 transition-colors ${
              isResultsActive ? 'font-bold text-neutral-900' : 'font-medium text-neutral-500'
            }`}
          >
            Results
          </span>
        </Link>

        {/* Tab 4: WhatsApp (Instant Direct Consultation) */}
        <a
          href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center py-1 active:scale-90 transition-transform duration-100 ease-out focus:outline-none"
          aria-label="Direct WhatsApp Consultation with Mr. Swarup"
        >
          <div className="w-12 sm:w-14 h-7 sm:h-8 rounded-full flex items-center justify-center text-emerald-700 bg-emerald-50/90 hover:bg-emerald-100/90 transition-all duration-200 relative">
            <span className="absolute top-1 right-2.5 sm:right-3 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" aria-hidden="true" />
            <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-600" aria-hidden="true" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 tracking-tight mt-0.5 transition-colors">
            WhatsApp
          </span>
        </a>

        {/* Tab 5: Book Free (Instant Consultation Booking Modal) */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="group flex flex-col items-center justify-center py-1 active:scale-90 transition-transform duration-100 ease-out focus:outline-none"
          aria-label="Book Free Private Consultation"
        >
          <div className="w-12 sm:w-14 h-7 sm:h-8 rounded-full flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-white shadow-2xs transition-all duration-200">
            <CalendarCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" aria-hidden="true" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-gold-800 tracking-tight mt-0.5 transition-colors">
            Book Free
          </span>
        </button>

      </div>
    </nav>
  );
};
