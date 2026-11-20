import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES, SERVICES } from '../data/businessData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-500/20 text-ivory/70 text-xs pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Golden Hair Wig Studio Official Brand Crest"
                className="w-12 h-12 object-contain rounded-full border border-gold-500/50 shadow-gold-glow group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-serif font-bold text-lg text-white block group-hover:text-gold-300 transition-colors">
                  GOLDEN HAIR WIG STUDIO
                </span>
                <span className="text-[10px] text-gold-400 font-semibold tracking-wider uppercase">
                  Non-Surgical Hair Replacement
                </span>
              </div>
            </Link>

            <p className="text-xs text-ivory/80 leading-relaxed max-w-sm">
              Rayalaseema's premier studio for personalized non-surgical hair replacement solutions. 
              Under the direct leadership of <strong>Mr. Swarup</strong>, we deliver natural-looking human hair systems, undetectable hairlines, and continuous maintenance support across Andhra Pradesh.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
                className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-ivory hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                aria-label={`Call Golden Hair Wig Studio at ${BUSINESS_INFO.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-500/20 transition-colors"
                aria-label="Direct WhatsApp consultation"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Dedicated Service Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-gold-400 transition-colors text-ivory/80 hover:underline block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gold-400 font-semibold hover:underline block pt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hubs */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Our 4 Hubs
            </h4>
            <ul className="space-y-3">
              {BRANCHES.map(b => (
                <li key={b.id}>
                  <Link
                    to={`/locations/${b.slug}`}
                    className="group block"
                  >
                    <span className="text-ivory font-semibold group-hover:text-gold-300 transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-500" aria-hidden="true" />
                      <span>{b.city}</span>
                      {b.isHQ && (
                        <span className="text-[9px] bg-gold-500/20 text-gold-400 px-1 py-0.2 rounded font-bold">HQ</span>
                      )}
                    </span>
                    <span className="text-[11px] text-ivory/60 block pl-4 truncate">{b.landmark}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/locations"
                  className="text-gold-400 font-semibold hover:underline block pt-1"
                >
                  All Studio Addresses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Studio & Policies
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors text-ivory/80">About Mr. Swarup</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors text-ivory/80">Real Transformations</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors text-ivory/80">Contact & Directions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold-400 transition-colors text-ivory/80">Privacy & Consent</Link></li>
              <li><Link to="/terms" className="hover:text-gold-400 transition-colors text-ivory/80">Cosmetic Service Terms</Link></li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-gold-400 hover:text-gold-300 font-semibold text-left pt-1"
                >
                  Book Free Consultation →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Cosmetic Disclaimer Strip */}
        <div className="pt-8 pb-6 border-b border-neutral-800 text-[11px] text-ivory/60 space-y-2">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong>Cosmetic Non-Surgical Disclaimer:</strong> Hair systems, toupees, and custom hair patches are non-surgical cosmetic prosthetics. They do not stimulate biological hair growth or alter underlying medical follicular conditions. Attachment longevity and maintenance schedules vary according to personal scalp perspiration, sebum production, and routine lifestyle care.
            </p>
          </div>
        </div>

        {/* Bottom Bar & Powered by MOMO IT TECHNOLOGIES */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-ivory/60 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Golden Hair Wig Studio. Kadapa (HQ) • Proddatur • Madanapalle • Nandyal. All rights reserved.
          </div>

          {/* Powered by MOMO IT TECHNOLOGIES Badge */}
          <a
            href="https://www.momoittechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-gold-500/30 hover:border-gold-500/60 text-ivory/80 shadow-sm transition-all duration-200 group"
            aria-label="Powered by MOMO IT TECHNOLOGIES - Visit Website"
          >
            <span className="text-[11px] font-medium text-ivory/60">Powered by</span>
            <span className="font-bold text-gold-gradient tracking-wide uppercase text-xs group-hover:underline">
              MOMO IT TECHNOLOGIES
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};
