import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
  Clock,
  ShieldCheck,
  Star,
  Home,
  Scissors,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { InstagramIcon, GoogleIcon } from './SocialIcons';

interface NavbarProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle Escape key to close any open dropdowns or mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(prev => prev === key ? null : key);
  };

  const isHairReplacementActive =
    location.pathname.startsWith('/services/non-surgical') ||
    location.pathname.startsWith('/services/mens-hair') ||
    location.pathname.startsWith('/services/hair-patch') ||
    location.pathname === '/guides';

  const isOurServicesActive =
    location.pathname === '/services' ||
    location.pathname.startsWith('/services/hair-bonding') ||
    location.pathname.startsWith('/services/hair-clipping') ||
    location.pathname.startsWith('/services/hair-system-maintenance') ||
    location.pathname.startsWith('/services/hair-wigs');

  const isLocationsActive = location.pathname.startsWith('/locations');

  return (
    <>
      {/* Top Utility Bar (Clean Light Warm Ivory with Pixel-Perfect Alignment) */}
      <div className="bg-[#FAF8F4] border-b border-[#E8E2D8] text-xs py-2 relative z-50 text-neutral-600 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="text-neutral-900 font-bold text-xs tracking-tight">
              Rayalaseema's Premier Hair Studio:
            </span>
            <span className="text-neutral-500 text-[11px] font-medium hidden md:inline">
              Kadapa (HQ) • Proddatur • Madanapalle • Nandyal
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-rose-600 font-semibold flex items-center gap-1.5 transition-colors text-[11px]"
              title="Follow Golden Hair Studio on Instagram"
            >
              <span className="p-0.5 rounded-[3px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                <InstagramIcon className="w-2.5 h-2.5 text-white" />
              </span>
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>

            <span className="h-3 w-px bg-[#E0D8CC]" aria-hidden="true" />

            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-gold-700 font-semibold flex items-center gap-1 transition-colors text-[11px]"
              title="Read & Write Google Reviews"
            >
              <GoogleIcon className="w-3 h-3" />
              <span>4.9★ Reviews</span>
            </a>

            <span className="h-3 w-px bg-[#E0D8CC] hidden lg:inline" aria-hidden="true" />

            <div className="hidden lg:flex items-center gap-1 text-neutral-500 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>Mon-Sun: 9:00 AM - 9:00 PM</span>
            </div>

            <span className="h-3 w-px bg-[#E0D8CC]" aria-hidden="true" />

            <a
              href={getDirectCallUrl()}
              className="text-neutral-900 hover:text-gold-700 font-bold flex items-center gap-1.5 transition-colors text-[11px]"
              aria-label={`Call studio at ${BUSINESS_INFO.primaryPhone}`}
            >
              <Phone className="w-3 h-3 text-gold-600 fill-gold-600/20" aria-hidden="true" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky White Header */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all duration-200 ${
          isScrolled ? 'shadow-xs' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-17 sm:h-18 lg:h-20">
          
          {/* Logo on Left */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xl p-1 -ml-1 flex-shrink-0"
            aria-label="Golden Hair Wig Studio - Home"
          >
            <img
              src="/images/logo.png"
              alt="Golden Hair Wig Studio"
              className="h-9 sm:h-10 lg:h-11 xl:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Centered Desktop Navigation with Professional Rounded Pills */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold text-neutral-700 ml-4 xl:ml-6 flex-shrink-0">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide ${
                location.pathname === '/'
                  ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                  : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
              }`}
            >
              HOME
            </Link>

            {/* HAIR REPLACEMENT Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('replacement')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide focus:outline-none ${
                  isHairReplacementActive
                    ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                    : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
                }`}
                aria-expanded={activeDropdown === 'replacement'}
                aria-haspopup="true"
              >
                <span>HAIR REPLACEMENT</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                    activeDropdown === 'replacement' ? 'rotate-180 text-gold-600' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {activeDropdown === 'replacement' && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#E8E2D8] shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/services/non-surgical-hair-replacement"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Non-Surgical Hair Replacement</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">1-Hour complete restoration</span>
                  </Link>
                  <Link
                    to="/services/mens-hair-systems"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Systems for Men</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Natural hairline & modern fade cuts</span>
                  </Link>
                  <Link
                    to="/services/hair-patch"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Patch Solutions</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Targeted crown & frontal coverage</span>
                  </Link>
                  <Link
                    to="/guides"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Educational Guides & FAQ</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Patch vs Transplant & Cost Factors</span>
                  </Link>
                  <Link
                    to="/#how-it-works"
                    className="block px-3.5 py-2 rounded-xl hover:bg-gold-50/70 text-xs text-gold-700 hover:text-gold-800 font-bold border-t border-[#F5F0E8] mt-1 transition-colors"
                    role="menuitem"
                  >
                    How It Works (4 Steps) →
                  </Link>
                </div>
              )}
            </div>

            {/* OUR SERVICES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide focus:outline-none ${
                  isOurServicesActive
                    ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                    : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
                }`}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>OUR SERVICES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-gold-600' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#E8E2D8] shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/services/hair-bonding"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Bonding</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Semi-permanent active wear</span>
                  </Link>
                  <Link
                    to="/services/hair-clipping"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Clipping</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Zero-glue daily removable</span>
                  </Link>
                  <Link
                    to="/services/hair-patch"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Patch Fitting</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Precision custom contouring</span>
                  </Link>
                  <Link
                    to="/services/hair-system-maintenance"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair System Maintenance</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Monthly hygiene & re-bonding</span>
                  </Link>
                  <Link
                    to="/services/hair-wigs"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Hair Wigs & Toupees</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">100% natural human hair</span>
                  </Link>
                  <Link
                    to="/services"
                    className="block px-3.5 py-2 rounded-xl hover:bg-gold-50/70 text-xs text-gold-700 hover:text-gold-800 font-bold border-t border-[#F5F0E8] mt-1 transition-colors"
                    role="menuitem"
                  >
                    View All Services Overview →
                  </Link>
                </div>
              )}
            </div>

            {/* TRANSFORMATIONS */}
            <Link
              to="/gallery"
              className={`px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide ${
                location.pathname === '/gallery'
                  ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                  : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
              }`}
            >
              TRANSFORMATIONS
            </Link>

            {/* OUR LOCATIONS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('locations')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide focus:outline-none ${
                  isLocationsActive
                    ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                    : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
                }`}
                aria-expanded={activeDropdown === 'locations'}
                aria-haspopup="true"
              >
                <span>OUR LOCATIONS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                    activeDropdown === 'locations' ? 'rotate-180 text-gold-600' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {activeDropdown === 'locations' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl border border-[#E8E2D8] shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/locations/kadapa"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Kadapa (Headquarters)</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">SLB Enclave, Y.S. Nagar</span>
                  </Link>
                  <Link
                    to="/locations/proddatur"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Proddatur Branch</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">DCSR Colony, Nadimpalli</span>
                  </Link>
                  <Link
                    to="/locations/madanapalle"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Madanapalle Branch</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Near Vijaya Lodge & DTDC</span>
                  </Link>
                  <Link
                    to="/locations/nandyal"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-800 transition-colors group"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 group-hover:text-gold-800 font-semibold">Nandyal Branch</strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Near Palla's Hotel, Atmakur Rd</span>
                  </Link>
                  <Link
                    to="/locations"
                    className="block px-3.5 py-2 rounded-xl hover:bg-gold-50/70 text-xs text-gold-700 hover:text-gold-800 font-bold border-t border-[#F5F0E8] mt-1 transition-colors"
                    role="menuitem"
                  >
                    View All 4 Studios Map →
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide ${
                location.pathname === '/about'
                  ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                  : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
              }`}
            >
              ABOUT US
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`px-3 py-1.5 rounded-xl transition-all duration-150 tracking-wide ${
                location.pathname === '/contact'
                  ? 'text-gold-800 bg-gold-50/90 font-bold border border-gold-200/70 shadow-2xs'
                  : 'text-neutral-700 hover:text-gold-800 hover:bg-[#FAF8F4]'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Action on Right (Desktop Book Button & Mobile Quick Call / Drawer Toggle) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Desktop Consultation CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => onOpenBooking()}
                className="px-4 xl:px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs xl:text-sm shadow-xs hover:shadow-md transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Direct Call Button (Instant 1-Tap Dialing on Mobile Header) */}
            <div className="lg:hidden">
              <a
                href={getDirectCallUrl()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF8F4] hover:bg-gold-50 border border-[#E8E2D8] hover:border-gold-300 text-neutral-800 font-bold text-xs transition-all active:scale-95 shadow-2xs"
                aria-label={`Call Studio at ${BUSINESS_INFO.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-600 fill-gold-600/20" aria-hidden="true" />
                <span className="text-xs font-bold text-neutral-900">Call</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-800 hover:text-neutral-900 hover:bg-[#FAF8F4] border border-[#E8E2D8] focus:outline-none focus:ring-2 focus:ring-gold-500 active:scale-95 transition-all shadow-2xs"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neutral-900" /> : <Menu className="w-5 h-5 text-neutral-800" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Dark Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[68px] sm:top-[72px] bg-black/40 z-40 transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer (Solid opaque white background, high contrast, clean typography) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[68px] sm:top-[72px] bottom-0 h-[calc(100dvh-68px)] sm:h-[calc(100dvh-72px)] bg-white border-t border-[#E8E2D8] z-50 overflow-y-auto px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200 shadow-2xl pb-28 select-none"
        >
          {/* Quick Contact Action Bar in Drawer */}
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-[#E8E2D8]">
            <a
              href={getDirectCallUrl()}
              className="py-3 px-3.5 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 text-neutral-900 text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs"
            >
              <Phone className="w-4 h-4 text-gold-600 fill-gold-600/20" />
              <span>Call Studio</span>
            </a>
            <a
              href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3.5 rounded-xl bg-[#E8EEE8] border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Structured Mobile Navigation with Icons and High-Contrast Text */}
          <nav className="space-y-1.5 text-sm font-semibold">
            {/* 1. Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-3 px-3.5 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/'
                  ? 'bg-gold-50 text-gold-800 border border-gold-200/80 shadow-2xs'
                  : 'text-neutral-900 hover:bg-[#FAF8F4] active:bg-[#FAF8F4]'
              }`}
            >
              <Home className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
              <span>Home</span>
            </Link>

            {/* 2. Hair Replacement Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('replacement')}
                className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold text-left transition-all ${
                  mobileAccordion === 'replacement' || isHairReplacementActive
                    ? 'bg-[#FAF8F4] text-neutral-900'
                    : 'text-neutral-900 hover:bg-[#FAF8F4]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Scissors className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                  <span>Hair Replacement Solutions</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    mobileAccordion === 'replacement' ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
              </button>

              {mobileAccordion === 'replacement' && (
                <div className="pl-3 pr-2 py-2 space-y-1.5 bg-[#FAF8F4] border border-[#E8E2D8] rounded-2xl mt-1 text-xs">
                  <Link
                    to="/services/non-surgical-hair-replacement"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Non-Surgical Hair Replacement
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        Instant 60-min undetectable front hairline
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services/mens-hair-systems"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Hair Systems for Men
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        French & Swiss lace with modern fade blend
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services/hair-patch"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Hair Patch Solutions
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        Targeted crown & partition bald spot coverage
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/#how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white text-gold-700 font-bold border-t border-[#E8E2D8]/80 transition-colors"
                  >
                    <span>How It Works (4-Step Process)</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Our Core Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('services')}
                className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold text-left transition-all ${
                  mobileAccordion === 'services' || isOurServicesActive
                    ? 'bg-[#FAF8F4] text-neutral-900'
                    : 'text-neutral-900 hover:bg-[#FAF8F4]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                  <span>Our Core Services</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    mobileAccordion === 'services' ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
              </button>

              {mobileAccordion === 'services' && (
                <div className="pl-3 pr-2 py-2 space-y-1.5 bg-[#FAF8F4] border border-[#E8E2D8] rounded-2xl mt-1 text-xs">
                  <Link
                    to="/services/hair-bonding"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Hair Bonding Process
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        3–4 weeks continuous hold, swim & gym safe
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services/hair-clipping"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Hair Clipping (Daily Wear)
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        10-second self-removal with zero glue
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services/hair-wigs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        Women's Wigs & Silk Toppers
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        100% human hair toppers for crown thinning
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services/hair-system-maintenance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                  >
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-gold-800">
                        System Servicing & Re-bonding
                      </span>
                      <span className="block text-[11px] text-neutral-500 font-normal">
                        Deep ultrasonic wash, scalp detox & adhesive renewal
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white text-gold-700 font-bold border-t border-[#E8E2D8]/80 transition-colors"
                  >
                    <span>View Complete Services Directory →</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Client Transformations (Results) */}
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/gallery'
                  ? 'bg-gold-50 text-gold-800 border border-gold-200/80 shadow-2xs'
                  : 'text-neutral-900 hover:bg-[#FAF8F4] active:bg-[#FAF8F4]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                <span>Client Transformations</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-100 text-gold-800 border border-gold-200">
                1-Hour Results
              </span>
            </Link>

            {/* 5. Educational Hair Guides & FAQ */}
            <Link
              to="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/guides'
                  ? 'bg-gold-50 text-gold-800 border border-gold-200/80 shadow-2xs'
                  : 'text-neutral-900 hover:bg-[#FAF8F4] active:bg-[#FAF8F4]'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                <span>Educational Guides & FAQ</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            </Link>

            {/* 6. Our Studio Locations Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('locations')}
                className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold text-left transition-all ${
                  mobileAccordion === 'locations' || isLocationsActive
                    ? 'bg-[#FAF8F4] text-neutral-900'
                    : 'text-neutral-900 hover:bg-[#FAF8F4]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                  <span>Our Studio Locations</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    mobileAccordion === 'locations' ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
              </button>

              {mobileAccordion === 'locations' && (
                <div className="pl-3 pr-2 py-2 space-y-1.5 bg-[#FAF8F4] border border-[#E8E2D8] rounded-2xl mt-1 text-xs">
                  {BRANCHES.map((b) => (
                    <Link
                      key={b.id}
                      to={`/locations/${b.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white active:bg-white text-neutral-800 hover:text-gold-800 font-semibold transition-colors group"
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <strong className="block font-bold text-neutral-900 group-hover:text-gold-800">
                            {b.city}
                          </strong>
                          {b.isHQ && (
                            <span className="text-[9px] bg-gold-500 text-white px-1.5 py-0.2 rounded font-bold">
                              HQ
                            </span>
                          )}
                        </div>
                        <span className="block text-[11px] text-neutral-500 font-normal">
                          {b.landmark}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 flex-shrink-0" />
                    </Link>
                  ))}

                  <Link
                    to="/locations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white text-gold-700 font-bold border-t border-[#E8E2D8]/80 transition-colors"
                  >
                    <span>View All 4 Studios Map Directory →</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </Link>
                </div>
              )}
            </div>

            {/* 7. About Mr. Swarup */}
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/about'
                  ? 'bg-gold-50 text-gold-800 border border-gold-200/80 shadow-2xs'
                  : 'text-neutral-900 hover:bg-[#FAF8F4] active:bg-[#FAF8F4]'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                <span>About Mr. Swarup & Studio</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            </Link>

            {/* 8. Contact & Branch Directions */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/contact'
                  ? 'bg-gold-50 text-gold-800 border border-gold-200/80 shadow-2xs'
                  : 'text-neutral-900 hover:bg-[#FAF8F4] active:bg-[#FAF8F4]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-gold-600 flex-shrink-0" />
                <span>Contact & Directions</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            </Link>
          </nav>

          {/* Bottom Button & Social Links in Drawer */}
          <div className="pt-4 border-t border-[#E8E2D8] space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-rose-300 text-neutral-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
                aria-label="Follow on Instagram"
              >
                <span className="p-0.5 rounded-xs bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                  <InstagramIcon className="w-2.5 h-2.5 text-white" />
                </span>
                <span>Instagram</span>
              </a>

              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-gold-400 text-neutral-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
                aria-label="Rate Us on Google"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Google Review</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </button>

            <div className="text-center pt-1 text-[11px] text-neutral-500 font-medium">
              Open All 7 Days: 9:00 AM – 9:00 PM
            </div>
          </div>
        </div>
      )}
    </>
  );
};
