import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Menu, X, Clock, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Rotate featured branch notice in top banner
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBranchIndex((prev) => (prev + 1) % BRANCHES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Transformations', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Locations', path: '/locations', badge: '4 Hubs' },
    { label: 'Contact', path: '/contact' },
  ];

  const currentBranch = BRANCHES[activeBranchIndex];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-charcoal-950 border-b border-gold-500/20 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-ivory/80 overflow-hidden">
          <div className="flex items-center gap-2 min-w-0 max-w-full">
            <span className="flex h-2 w-2 relative flex-shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="font-semibold text-gold-500 flex-shrink-0">Rayalaseema Studios:</span>
            <span className="text-ivory/90 transition-all duration-500 font-medium text-[11px] sm:text-xs truncate">
              {currentBranch.city} • {currentBranch.isHQ ? 'Kadapa Headquarters' : 'Authorized Studio Hub'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-ivory/70">
              <Clock className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
              <span>Mon-Sun: 9:00 AM - 9:00 PM</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
              className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1 transition-colors"
              aria-label={`Call Golden Hair Wig Studio at ${BUSINESS_INFO.primaryPhone}`}
            >
              <Phone className="w-3 h-3 text-gold-500" aria-hidden="true" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal/95 backdrop-blur-xl border-b border-gold-500/25 shadow-2xl shadow-black/80 py-2.5'
            : 'bg-charcoal/80 backdrop-blur-md border-b border-neutral-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Official Insignia */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
            aria-label="Golden Hair Wig Studio - Return to Homepage"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Golden Hair Wig Studio Official Brand Crest"
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full border border-gold-500/40 shadow-gold-glow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  GOLDEN HAIR
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                  STUDIO
                </span>
              </div>
              <span className="text-[10px] text-ivory/60 tracking-wider uppercase font-medium">
                Non-Surgical Hair Replacement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-ivory/90"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-1 transition-colors relative flex items-center gap-1.5 ${
                    isActive ? 'text-gold-400 font-semibold' : 'hover:text-gold-400 text-ivory/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-gold-500/20 text-gold-400 font-bold px-1.5 py-0.5 rounded border border-gold-500/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200"
              aria-label="Direct WhatsApp consultation chat with Golden Hair Wig Studio"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500/20" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gold-gradient text-charcoal font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-charcoal" aria-hidden="true" />
                <span>Book Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-gold-gradient text-charcoal font-bold text-xs shadow-gold-glow flex items-center gap-1"
            >
              <CalendarCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-ivory hover:text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Accessible Links */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden bg-charcoal-950/98 border-b border-gold-500/30 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200"
          >
            <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-2 text-xs font-medium text-ivory/90 pb-3 border-b border-neutral-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                All Services
              </Link>
              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                1-Hour Results
              </Link>
              <Link
                to="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400 flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                <span>4 Hubs</span>
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                About Studio
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-gold-500/40 hover:text-gold-400"
              >
                Contact & Map
              </Link>
            </nav>

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gold-gradient text-charcoal font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
                  className="py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-ivory text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
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
