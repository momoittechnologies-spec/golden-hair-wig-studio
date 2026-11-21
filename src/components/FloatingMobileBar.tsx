import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Scissors, MessageCircle, CalendarCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border-t border-black/[0.08] shadow-[0_-2px_16px_rgba(0,0,0,0.04)] pt-1.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] select-none"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center justify-around px-2">
        
        {/* Tab 1: Home */}
        <Link
          to="/"
          className="group flex flex-col items-center justify-center py-0.5 active:scale-90 transition-transform duration-150 focus:outline-none"
          aria-label="Home"
        >
          <div className="relative flex items-center justify-center">
            <Home
              className={`w-5 h-5 transition-colors duration-200 ${
                isHomeActive ? 'text-[#B58D4A]' : 'text-[#8E8E93] group-hover:text-neutral-700'
              }`}
              strokeWidth={isHomeActive ? 2.2 : 1.8}
              aria-hidden="true"
            />
          </div>
          <span
            className={`text-[10px] tracking-tight mt-0.5 transition-colors duration-200 ${
              isHomeActive ? 'font-semibold text-[#B58D4A]' : 'font-medium text-[#8E8E93]'
            }`}
          >
            Home
          </span>
        </Link>

        {/* Tab 2: Services */}
        <Link
          to="/services"
          className="group flex flex-col items-center justify-center py-0.5 active:scale-90 transition-transform duration-150 focus:outline-none"
          aria-label="Services"
        >
          <div className="relative flex items-center justify-center">
            <Scissors
              className={`w-5 h-5 transition-colors duration-200 ${
                isServicesActive ? 'text-[#B58D4A]' : 'text-[#8E8E93] group-hover:text-neutral-700'
              }`}
              strokeWidth={isServicesActive ? 2.2 : 1.8}
              aria-hidden="true"
            />
          </div>
          <span
            className={`text-[10px] tracking-tight mt-0.5 transition-colors duration-200 ${
              isServicesActive ? 'font-semibold text-[#B58D4A]' : 'font-medium text-[#8E8E93]'
            }`}
          >
            Services
          </span>
        </Link>

        {/* Tab 3: WhatsApp */}
        <a
          href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center py-0.5 active:scale-90 transition-transform duration-150 focus:outline-none"
          aria-label="WhatsApp"
        >
          <div className="relative flex items-center justify-center">
            <span
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"
              aria-hidden="true"
            />
            <MessageCircle
              className="w-5 h-5 text-emerald-600 transition-colors duration-200"
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 tracking-tight mt-0.5">
            WhatsApp
          </span>
        </a>

        {/* Tab 4: Book Free */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="group flex flex-col items-center justify-center py-0.5 active:scale-90 transition-transform duration-150 focus:outline-none"
          aria-label="Book Free Consultation"
        >
          <div className="relative flex items-center justify-center">
            <CalendarCheck
              className="w-5 h-5 text-[#B58D4A] transition-colors duration-200"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
          <span className="text-[10px] font-semibold text-[#B58D4A] tracking-tight mt-0.5">
            Book Free
          </span>
        </button>

      </div>
    </nav>
  );
};
