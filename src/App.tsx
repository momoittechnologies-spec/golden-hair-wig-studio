import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { GuidesPage } from './pages/GuidesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingBranchId, setBookingBranchId] = useState<string | undefined>();
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>();

  const handleOpenBooking = (branchId?: string, serviceId?: string) => {
    setBookingBranchId(branchId);
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans selection:bg-[#B58D4A]/20 selection:text-[#242424] antialiased">
        {/* Responsive Translucent Glass Navbar with Brand Crest */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route Pages */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/locations" element={<LocationsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/locations/:branchId" element={<LocationDetailPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/gallery" element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/guides" element={<GuidesPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Desktop & Mobile WhatsApp CTA Button */}
        <FloatingWhatsApp />

        {/* Sticky Mobile Bottom Bar (Call, WhatsApp, Consultation) */}
        <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

        {/* Accessible Consultation Enquiry Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialBranchId={bookingBranchId}
          initialServiceId={bookingServiceId}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
