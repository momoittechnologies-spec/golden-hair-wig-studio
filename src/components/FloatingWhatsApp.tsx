import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 lg:bottom-6 right-5 z-40">
      <a
        href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Golden Hair Studio Specialist"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-charcoal"
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white/20" aria-hidden="true" />
        <span className="hidden sm:inline font-semibold">WhatsApp Chat</span>
      </a>
    </aside>
  );
};
