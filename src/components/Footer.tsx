import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES, SERVICES } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#FAF8F4] border-t border-[#E8E2D8] text-neutral-600 text-xs pt-16 pb-24 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8E2D8]">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="Golden Hair Wig Studio Crest"
                className="w-11 h-11 object-contain rounded-full border border-[#E8E2D8] shadow-xs group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-serif font-bold text-lg text-neutral-900 block group-hover:text-gold-700 transition-colors">
                  GOLDEN HAIR WIG STUDIO
                </span>
                <span className="text-[10px] text-gold-700 font-semibold tracking-wider uppercase">
                  Non-Surgical Hair Replacement
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              Rayalaseema's premier destination for personalized non-surgical hair replacement solutions. 
              Under the direct leadership of <strong>Mr. Swarup</strong>, we deliver undetectable natural human hair systems, discreet fittings, and ongoing maintenance support across Andhra Pradesh.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={getDirectCallUrl()}
                className="px-3 py-2 rounded-xl bg-white border border-[#E8E2D8] text-neutral-800 hover:text-gold-700 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                aria-label={`Call Golden Hair Wig Studio at ${BUSINESS_INFO.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#E8EEE8] border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                aria-label="Direct WhatsApp consultation"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Dedicated Service Links */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/non-surgical-hair-replacement" className="hover:text-gold-700 transition-colors block">
                  Non-Surgical Replacement
                </Link>
              </li>
              <li>
                <Link to="/services/mens-hair-systems" className="hover:text-gold-700 transition-colors block">
                  Hair Systems for Men
                </Link>
              </li>
              <li>
                <Link to="/services/hair-patch" className="hover:text-gold-700 transition-colors block">
                  Hair Patch Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/hair-bonding" className="hover:text-gold-700 transition-colors block">
                  Hair Bonding Process
                </Link>
              </li>
              <li>
                <Link to="/services/hair-clipping" className="hover:text-gold-700 transition-colors block">
                  Hair Clipping (Daily Wear)
                </Link>
              </li>
              <li>
                <Link to="/services/hair-system-maintenance" className="hover:text-gold-700 transition-colors block">
                  System Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/hair-wigs" className="hover:text-gold-700 transition-colors block">
                  Hair Wigs & Toupees
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hubs */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">
              Our 4 Hubs
            </h4>
            <ul className="space-y-3">
              {BRANCHES.map(b => (
                <li key={b.id}>
                  <Link to={`/locations/${b.slug}`} className="group block">
                    <span className="text-neutral-900 font-semibold group-hover:text-gold-700 transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-600" aria-hidden="true" />
                      <span>{b.city}</span>
                      {b.isHQ && (
                        <span className="text-[9px] bg-gold-100 text-gold-800 px-1 py-0.2 rounded font-bold border border-gold-200">HQ</span>
                      )}
                    </span>
                    <span className="text-[11px] text-neutral-500 block pl-4 truncate">{b.landmark}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/locations" className="text-gold-700 font-semibold hover:underline block pt-1">
                  View All Studio Addresses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Navigation */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">
              About & Legal
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-gold-700 transition-colors block">About Mr. Swarup</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-700 transition-colors block">1-Hour Transformations</Link></li>
              <li><Link to="/guides" className="hover:text-gold-700 transition-colors block font-medium text-gold-700">Educational Hair Guides</Link></li>
              <li><Link to="/contact" className="hover:text-gold-700 transition-colors block">Contact & Location Maps</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold-700 transition-colors block">Privacy & Photo Consent</Link></li>
              <li><Link to="/terms" className="hover:text-gold-700 transition-colors block">Cosmetic Service Terms</Link></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-gold-700 hover:text-gold-800 font-semibold text-left pt-1 block"
                >
                  Book Free Consultation →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Cosmetic Disclaimer Strip */}
        <div className="pt-8 pb-6 border-b border-[#E8E2D8] text-[11px] text-neutral-500 space-y-2">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong>Cosmetic Non-Surgical Disclaimer:</strong> Hair systems, toupees, and custom hair patches are non-surgical cosmetic prosthetics. They do not stimulate biological hair growth or alter underlying medical follicular health. Attachment longevity and maintenance schedules vary according to individual scalp perspiration, sebum production, and routine lifestyle care.
            </p>
          </div>
        </div>

        {/* Bottom Bar & Powered by MOMO IT TECHNOLOGIES */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-neutral-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Golden Hair Wig Studio. Kadapa (HQ) • Proddatur • Madanapalle • Nandyal. All rights reserved.
          </div>

          {/* Powered by MOMO IT TECHNOLOGIES Badge linking to momoittechnologies.com */}
          <a
            href="https://www.momoittechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-50 border border-[#E8E2D8] hover:border-gold-400 text-neutral-700 shadow-2xs transition-all duration-200 group whitespace-nowrap flex-shrink-0"
            aria-label="Powered by MOMO IT TECHNOLOGIES - Visit Website"
          >
            <span className="text-[11px] font-medium text-neutral-500">Powered by</span>
            <span className="font-bold text-neutral-900 group-hover:text-gold-700 tracking-wide uppercase text-xs">
              MOMO IT TECHNOLOGIES
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};
