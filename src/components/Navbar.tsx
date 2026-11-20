import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Menu, X, ChevronDown, CalendarCheck, Clock, ShieldCheck, Star } from 'lucide-react';
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

  return (
    <>
      {/* Top Utility Bar (Clean Light Warm Ivory) */}
      <div className="bg-[#FAF8F4] border-b border-[#E8E2D8] text-xs py-1.5 px-4 relative z-50 text-neutral-600 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-neutral-800 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-600"></span>
              </span>
              <span>Rayalaseema's Premier Hair Studio:</span>
            </span>
            <span className="text-neutral-500 text-[11px]">
              Kadapa (HQ) • Proddatur • Madanapalle • Nandyal
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-xs">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-rose-600 font-medium flex items-center gap-1.5 transition-colors text-[11px]"
              title="Follow Golden Hair Studio on Instagram"
            >
              <span className="p-0.5 rounded-xs bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                <InstagramIcon className="w-2.5 h-2.5 text-white" />
              </span>
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>

            <span className="text-[#D8D0C3]">|</span>

            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-gold-700 font-medium flex items-center gap-1 transition-colors text-[11px]"
              title="Read & Write Google Reviews"
            >
              <GoogleIcon className="w-3 h-3" />
              <span>4.9★ Google Reviews</span>
            </a>

            <span className="text-[#D8D0C3] hidden lg:inline">|</span>

            <div className="hidden lg:flex items-center gap-1 text-neutral-500 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>Mon-Sun: 9:00 AM - 9:00 PM</span>
            </div>

            <span className="text-[#D8D0C3]">|</span>

            <a
              href={getDirectCallUrl()}
              className="text-neutral-800 hover:text-gold-600 font-semibold flex items-center gap-1.5 transition-colors text-[11px]"
              aria-label={`Call studio at ${BUSINESS_INFO.primaryPhone}`}
            >
              <Phone className="w-3 h-3 text-gold-600" aria-hidden="true" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky White Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-200 border-b ${
          isScrolled
            ? 'border-[#E8E2D8] shadow-sm py-2.5'
            : 'border-[#E8E2D8] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on Left */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-0.5 flex-shrink-0"
            aria-label="Golden Hair Wig Studio - Home"
          >
            <img
              src="/images/logo.png"
              alt="Golden Hair Wig Studio"
              className="h-8 sm:h-9 xl:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Centered Desktop Navigation with generous breathing room */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-5 2xl:gap-7 text-[13px] 2xl:text-sm font-medium text-neutral-700 ml-5 xl:ml-8 flex-shrink-0">
            <Link
              to="/"
              className={`hover:text-gold-600 transition-colors py-1 ${
                location.pathname === '/' ? 'text-gold-600 font-semibold' : ''
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
                className={`flex items-center gap-1 py-1 hover:text-gold-600 transition-colors focus:outline-none ${
                  location.pathname.startsWith('/services/non-surgical') || location.pathname.startsWith('/services/mens-hair') || location.pathname.startsWith('/services/hair-patch')
                    ? 'text-gold-600 font-semibold'
                    : ''
                }`}
                aria-expanded={activeDropdown === 'replacement'}
                aria-haspopup="true"
              >
                <span>HAIR REPLACEMENT</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold-600 transition-transform" aria-hidden="true" />
              </button>

              {activeDropdown === 'replacement' && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl border border-[#E8E2D8] shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/services/non-surgical-hair-replacement"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium transition-colors"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Non-Surgical Hair Replacement</strong>
                    <span className="text-[11px] text-neutral-500">1-Hour complete restoration</span>
                  </Link>
                  <Link
                    to="/services/mens-hair-systems"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium transition-colors"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Systems for Men</strong>
                    <span className="text-[11px] text-neutral-500">Natural hairline & modern fade cuts</span>
                  </Link>
                  <Link
                    to="/services/hair-patch"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium transition-colors"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Patch Solutions</strong>
                    <span className="text-[11px] text-neutral-500">Targeted crown & frontal coverage</span>
                  </Link>
                  <Link
                    to="/guides"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium transition-colors"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Educational Guides & FAQ</strong>
                    <span className="text-[11px] text-neutral-500">Patch vs Transplant & Cost Factors</span>
                  </Link>
                  <Link
                    to="/#how-it-works"
                    className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium transition-colors border-t border-[#F5F0E8] mt-1"
                    role="menuitem"
                  >
                    <strong className="block text-gold-600 font-semibold">How It Works (4 Steps)</strong>
                    <span className="text-[11px] text-neutral-500">From mapping to final styling</span>
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
                className={`flex items-center gap-1 py-1 hover:text-gold-600 transition-colors focus:outline-none ${
                  location.pathname === '/services' || location.pathname.startsWith('/services/hair-bonding') || location.pathname.startsWith('/services/hair-clipping') || location.pathname.startsWith('/services/hair-system-maintenance') || location.pathname.startsWith('/services/hair-wigs')
                    ? 'text-gold-600 font-semibold'
                    : ''
                }`}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>OUR SERVICES</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl border border-[#E8E2D8] shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/services/hair-bonding"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Bonding</strong>
                    <span className="text-[11px] text-neutral-500">Semi-permanent active wear</span>
                  </Link>
                  <Link
                    to="/services/hair-clipping"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Clipping</strong>
                    <span className="text-[11px] text-neutral-500">Zero-glue daily removable</span>
                  </Link>
                  <Link
                    to="/services/hair-patch"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Patch Fitting</strong>
                    <span className="text-[11px] text-neutral-500">Precision custom contouring</span>
                  </Link>
                  <Link
                    to="/services/hair-system-maintenance"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair System Maintenance</strong>
                    <span className="text-[11px] text-neutral-500">Monthly hygiene & re-bonding</span>
                  </Link>
                  <Link
                    to="/services/hair-wigs"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Hair Wigs & Toupees</strong>
                    <span className="text-[11px] text-neutral-500">100% natural human hair</span>
                  </Link>
                  <Link
                    to="/services"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-gold-600 font-semibold border-t border-[#F5F0E8] mt-1"
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
              className={`hover:text-gold-600 transition-colors py-1 ${
                location.pathname === '/gallery' ? 'text-gold-600 font-semibold' : ''
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
                className={`flex items-center gap-1 py-1 hover:text-gold-600 transition-colors focus:outline-none ${
                  location.pathname.startsWith('/locations') ? 'text-gold-600 font-semibold' : ''
                }`}
                aria-expanded={activeDropdown === 'locations'}
                aria-haspopup="true"
              >
                <span>OUR LOCATIONS</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              </button>

              {activeDropdown === 'locations' && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl border border-[#E8E2D8] shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <Link
                    to="/locations/kadapa"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Kadapa (Headquarters)</strong>
                    <span className="text-[11px] text-neutral-500">Railway Station Road</span>
                  </Link>
                  <Link
                    to="/locations/proddatur"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Proddatur Branch</strong>
                    <span className="text-[11px] text-neutral-500">Near Clock Tower</span>
                  </Link>
                  <Link
                    to="/locations/madanapalle"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Madanapalle Branch</strong>
                    <span className="text-[11px] text-neutral-500">Near NTR Circle</span>
                  </Link>
                  <Link
                    to="/locations/nandyal"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-neutral-700 hover:text-gold-700 font-medium"
                    role="menuitem"
                  >
                    <strong className="block text-neutral-900 font-semibold">Nandyal Branch</strong>
                    <span className="text-[11px] text-neutral-500">Near Gandhi Chowk</span>
                  </Link>
                  <Link
                    to="/locations"
                    className="block px-3.5 py-2 rounded-xl hover:bg-[#FAF8F4] text-xs text-gold-600 font-semibold border-t border-[#F5F0E8] mt-1"
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
              className={`hover:text-gold-600 transition-colors py-1 ${
                location.pathname === '/about' ? 'text-gold-600 font-semibold' : ''
              }`}
            >
              ABOUT US
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`hover:text-gold-600 transition-colors py-1 ${
                location.pathname === '/contact' ? 'text-gold-600 font-semibold' : ''
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Action on Right (Call Link & Consultation Button) */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <a
              href={getDirectCallUrl()}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-neutral-700 hover:text-gold-600 text-xs font-semibold hover:bg-[#FAF8F4] border border-transparent hover:border-[#E8E2D8] transition-colors"
              aria-label="Direct Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center gap-1.5 whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-[#FAF8F4] border border-[#E8E2D8] focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="xl:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white border-t border-[#E8E2D8] z-50 overflow-y-auto px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200"
          >
            {/* Quick Actions in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#E8E2D8]">
              <a
                href={getDirectCallUrl()}
                className="py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Studio</span>
              </a>
              <a
                href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-[#E8EEE8] border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Accordion Navigation */}
            <nav className="space-y-1 text-sm font-medium text-neutral-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4]"
              >
                Home
              </Link>

              {/* Hair Replacement Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('replacement')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4] text-left"
                >
                  <span className="font-semibold text-neutral-900">Hair Replacement</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileAccordion === 'replacement' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'replacement' && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#FAF8F4] rounded-xl mt-1 text-xs text-neutral-600">
                    <Link
                      to="/services/non-surgical-hair-replacement"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Non-Surgical Hair Replacement
                    </Link>
                    <Link
                      to="/services/mens-hair-systems"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Systems for Men
                    </Link>
                    <Link
                      to="/services/hair-patch"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Patch Solutions
                    </Link>
                    <Link
                      to="/guides"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-neutral-800 font-semibold"
                    >
                      • Educational Guides & FAQ
                    </Link>
                    <Link
                      to="/#how-it-works"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gold-700 font-semibold"
                    >
                      • How It Works (4 Steps)
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('services')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4] text-left"
                >
                  <span className="font-semibold text-neutral-900">Our Services</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'services' && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#FAF8F4] rounded-xl mt-1 text-xs text-neutral-600">
                    <Link
                      to="/services/hair-bonding"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Bonding Process
                    </Link>
                    <Link
                      to="/services/hair-clipping"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Clipping (Daily Wear)
                    </Link>
                    <Link
                      to="/services/hair-patch"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Patch Fitting
                    </Link>
                    <Link
                      to="/services/hair-system-maintenance"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair System Maintenance
                    </Link>
                    <Link
                      to="/services/hair-wigs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Hair Wigs & Toupees
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gold-700 font-semibold"
                    >
                      • View All Services →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4]"
              >
                Transformations
              </Link>

              {/* Locations Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('locations')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4] text-left"
                >
                  <span className="font-semibold text-neutral-900">Our Locations</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileAccordion === 'locations' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'locations' && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#FAF8F4] rounded-xl mt-1 text-xs text-neutral-600">
                    <Link
                      to="/locations/kadapa"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Kadapa (Headquarters)
                    </Link>
                    <Link
                      to="/locations/proddatur"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Proddatur Branch
                    </Link>
                    <Link
                      to="/locations/madanapalle"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Madanapalle Branch
                    </Link>
                    <Link
                      to="/locations/nandyal"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-gold-600"
                    >
                      • Nandyal Branch
                    </Link>
                    <Link
                      to="/locations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gold-700 font-semibold"
                    >
                      • View All 4 Studios →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4]"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl hover:bg-[#FAF8F4]"
              >
                Contact
              </Link>
            </nav>

            {/* Bottom Button & Social Links in Drawer */}
            <div className="pt-4 border-t border-[#E8E2D8] space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white border border-[#E8E2D8] hover:border-rose-300 text-neutral-800 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
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
                  className="py-2.5 px-3 rounded-xl bg-white border border-[#E8E2D8] hover:border-gold-400 text-neutral-800 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
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
                className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
