import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-obsidian-950 border-t border-gold-500/20 text-slate-400 text-xs pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Golden Hair Wig Studio Official Logo"
                className="w-12 h-12 object-contain rounded-full border border-gold-500/50 shadow-gold-glow"
              />
              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  GOLDEN HAIR WIG STUDIO
                </span>
                <span className="text-[10px] text-gold-400 font-semibold tracking-wider uppercase">
                  Non-Surgical Hair Replacement
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Rayalaseema's premier destination for instant, 100% natural hair restoration. 
              Under the visionary leadership of <strong>Mr. Swarup</strong>, we have restored youthful confidence for over 5,000+ happy clients across Andhra Pradesh.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
                className="px-3.5 py-2 rounded-xl bg-obsidian-900 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Core Procedures
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Hair Bonding Process</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Hair Clipping Process</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Hair Taping Process</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Hair Weaving Process</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Ladies Hair Extensions</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Crown Volumizing Toppers</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">System Servicing & Styling</a></li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Quick Exploration
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#transformations" className="hover:text-gold-400 transition-colors">1-Hour Real Transformations</a></li>
              <li><a href="#patch-anatomy" className="hover:text-gold-400 transition-colors">Swiss Lace Anatomy</a></li>
              <li><a href="#why-us" className="hover:text-gold-400 transition-colors">Hair Studio vs Transplant</a></li>
              <li><a href="#branches" className="hover:text-gold-400 transition-colors">Branch Locations & Maps</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Client FAQs & Maintenance</a></li>
              <li><button onClick={onOpenBooking} className="text-gold-400 hover:text-gold-300 font-semibold">Book Free Consultation</button></li>
            </ul>
          </div>

          {/* Studio Branches Summary */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Our 4 Branches
            </h4>
            <ul className="space-y-3">
              {BRANCHES.map(b => (
                <li key={b.id}>
                  <strong className="text-slate-200 block">{b.name}</strong>
                  <span className="text-[11px] text-slate-400 block">{b.landmark}</span>
                  <a href={b.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline text-[10px]">
                    Open in Maps →
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>100% Non-Surgical, Non-Invasive Aesthetic Hair Replacement. All Rights Reserved.</span>
          </div>

          <div>
            © {new Date().getFullYear()} Golden Hair Wig Studio. Kadapa • Proddatur • Madanapalle • Nandyal.
          </div>
        </div>

      </div>
    </footer>
  );
};
