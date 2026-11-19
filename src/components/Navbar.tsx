import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Clock, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate featured branch notice every 4 seconds in top banner
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBranchIndex((prev) => (prev + 1) % BRANCHES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-gold-500/20 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="font-semibold text-gold-400">Rayalaseema's Premier Hair Studio:</span>
            <span className="text-slate-300 transition-all duration-500 font-medium">
              {BRANCHES[activeBranchIndex].name} • {BRANCHES[activeBranchIndex].landmark}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>Mon-Sun: 9:00 AM - 9:00 PM</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
              className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl shadow-black/80 py-2.5'
            : 'bg-obsidian-950/70 backdrop-blur-md border-b border-slate-800/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Official Insignia */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Golden Hair Wig Studio Official Logo"
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full border border-gold-500/40 shadow-gold-glow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  GOLDEN HAIR
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                  WIG STUDIO
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Non-Surgical Hair Replacement
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-gold-400 transition-colors py-1">
              Services
            </a>
            <a href="#transformations" className="hover:text-gold-400 transition-colors py-1 flex items-center gap-1.5">
              <span>1-Hour Results</span>
              <span className="text-[9px] bg-red-600/90 text-white font-bold px-1.5 py-0.2 rounded uppercase">Instant</span>
            </a>
            <a href="#patch-anatomy" className="hover:text-gold-400 transition-colors py-1">
              Swiss Lace Anatomy
            </a>
            <a href="#why-us" className="hover:text-gold-400 transition-colors py-1">
              Why Us vs Surgery
            </a>
            <a href="#branches" className="hover:text-gold-400 transition-colors py-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>4 Branches</span>
            </a>
            <a href="#faq" className="hover:text-gold-400 transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20would%20like%20to%20know%20more%20about%20your%20non-surgical%20hair%20replacement%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-gold-glow flex items-center gap-1"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-obsidian-850 border border-slate-700 text-slate-200 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-950/98 border-b border-gold-500/30 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300 pb-3 border-b border-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Services
              </a>
              <a
                href="#transformations"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                1-Hour Results
              </a>
              <a
                href="#patch-anatomy"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Swiss Lace Anatomy
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Why Us vs Surgery
              </a>
              <a
                href="#branches"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                All 4 Branches
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Client FAQs
              </a>
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
                  className="py-2.5 rounded-xl bg-obsidian-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20want%20to%20consult%20regarding%20hair%20replacement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
