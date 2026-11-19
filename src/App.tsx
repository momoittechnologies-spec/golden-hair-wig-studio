import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Hero } from './components/Hero';
import { HomeImageSlider } from './components/HomeImageSlider';
import { ProcessStepsSection } from './components/ProcessStepsSection';
import { InteractiveBeforeAfter } from './components/InteractiveBeforeAfter';
import { PatchAnatomy3D } from './components/PatchAnatomy3D';
import { HairLossStageGuide } from './components/HairLossStageGuide';
import { ServicesSection } from './components/ServicesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BranchesSection } from './components/BranchesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { BookingModal } from './components/BookingModal';

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
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-obsidian-950">
      {/* Translucent Glass Navbar with Official Logo */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Infinite Animated Luxury Text Marquee Ribbon */}
      <MarqueeBanner />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Big Homepage Image Slider with High-Quality Generated Photography */}
        <div id="gallery-slider">
          <HomeImageSlider onOpenBooking={() => handleOpenBooking()} />
        </div>

        {/* 4-Step Transformation Journey (Fills empty space with clear value) */}
        <ProcessStepsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Real 1-Hour Transformations Interactive Drag Slider */}
        <InteractiveBeforeAfter onOpenBooking={() => handleOpenBooking()} />

        {/* 3D Interactive Swiss Lace Anatomy Exploder */}
        <PatchAnatomy3D />

        {/* Interactive Hair Loss Stage Guide (Norwood & Ludwig Scale) */}
        <HairLossStageGuide onOpenBooking={() => handleOpenBooking()} />

        {/* Core Services: Bonding, Clipping, Taping, Weaving, Extensions */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Second Reverse Marquee Ribbon for Dynamic Visual Rhythm */}
        <div className="border-y border-gold-500/20 py-1 bg-obsidian-900/60 overflow-hidden">
          <MarqueeBanner />
        </div>

        {/* Honest Comparison: Studio System vs Surgical Hair Transplant */}
        <ComparisonSection onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Branch Hub: Kadapa HQ, Proddatur, Madanapalle, Nandyal */}
        <BranchesSection onOpenBooking={handleOpenBooking} />

        {/* Verified Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Comprehensive FAQ Section */}
        <FAQSection />
      </main>

      {/* Global Luxury Footer with Official Logo & Powered by MOMO IT TECHNOLOGIES */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Book) */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive VIP Appointment Booking Modal with Confetti & WhatsApp */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialBranchId={bookingBranchId}
        initialServiceId={bookingServiceId}
      />
    </div>
  );
}

export default App;
