import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="hidden lg:block fixed bottom-8 right-6 z-40">
      <a
        href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Golden Hair Studio Specialist"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white/20" aria-hidden="true" />
        <span className="font-semibold">WhatsApp Consultation</span>
      </a>
    </aside>
  );
};
