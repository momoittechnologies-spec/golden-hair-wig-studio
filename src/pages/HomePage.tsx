import React from 'react';
import { Hero } from '../components/Hero';
import { HomeImageSlider } from '../components/HomeImageSlider';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { PatchAnatomy3D } from '../components/PatchAnatomy3D';
import { HairLossStageGuide } from '../components/HairLossStageGuide';
import { ServicesSection } from '../components/ServicesSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { BranchesSection } from '../components/BranchesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onOpenBooking: (branchId?: string, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEOHead
        title="Natural-Looking Hair. Renewed Confidence."
        description="Experience personalized non-surgical hair replacement solutions at Golden Hair Wig Studio. Instant 1-hour natural hair patch, hair bonding, hair clipping, and ladies extensions in Kadapa, Proddatur, Madanapalle, and Nandyal."
        canonicalPath="/"
      />

      {/* Infinite Animated Luxury Text Marquee Ribbon */}
      <MarqueeBanner />

      {/* Main Luxury Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* Real High-Quality Photography Studio Slider */}
      <div id="gallery-slider">
        <HomeImageSlider onOpenBooking={() => onOpenBooking()} />
      </div>

      {/* 4-Step Transformation Journey */}
      <ProcessStepsSection onOpenBooking={() => onOpenBooking()} />

      {/* Real 1-Hour Transformations Interactive Drag Slider */}
      <InteractiveBeforeAfter onOpenBooking={() => onOpenBooking()} />

      {/* 3D Interactive Swiss Lace Anatomy Exploder */}
      <PatchAnatomy3D />

      {/* Interactive Hair Loss Stage Guide (Norwood & Ludwig Scale) */}
      <HairLossStageGuide onOpenBooking={() => onOpenBooking()} />

      {/* Core Services: Bonding, Clipping, Taping, Weaving, Extensions */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* Reverse Marquee Ribbon */}
      <div className="border-y border-gold-500/20 py-1 bg-charcoal-900/60 overflow-hidden">
        <MarqueeBanner />
      </div>

      {/* Honest Comparison: Studio System vs Surgical Hair Transplant */}
      <ComparisonSection onOpenBooking={() => onOpenBooking()} />

      {/* Multi-Branch Hub: Kadapa HQ, Proddatur, Madanapalle, Nandyal */}
      <BranchesSection onOpenBooking={onOpenBooking} />

      {/* Verified Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* Comprehensive FAQ Section */}
      <FAQSection />
    </>
  );
};
