import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { SEOHead } from '../components/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 bg-white text-neutral-800">
      <SEOHead
        title="Terms of Aesthetic Service & Cosmetic Disclaimer"
        description="Terms of service, cosmetic non-surgical disclaimers, and maintenance expectations for Golden Hair Wig Studio."
        canonicalPath="/terms"
      />

      <div className="space-y-4 border-b border-[#E8E2D8] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Aesthetic Service Terms & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
          Terms of Service & Cosmetic Disclaimers
        </h1>
        <p className="text-xs text-neutral-500">
          Last Updated: November 2026 • Golden Hair Wig Studio (Proprietor: Mr. Swarup)
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-neutral-600">
        
        {/* Core Cosmetic Disclaimer */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-600" aria-hidden="true" />
            <span>Important Cosmetic Disclaimer</span>
          </div>
          <p className="text-neutral-700 leading-relaxed">
            {BUSINESS_INFO.cosmeticDisclaimer}
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900">
            1. Consultation-First Pricing Model
          </h2>
          <p>
            Because every individual exhibits distinct head shapes, crown thinning areas, and natural hair textures, final pricing is determined during your in-person scalp evaluation. Standard regional price guidance typically ranges from ₹8,000 to ₹18,000 depending on base type (Swiss lace, micro-skin, mono-filament) and human hair length. No hidden charges are imposed, and pricing is confirmed transparently before any cutting or bonding begins.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900">
            2. System Maintenance & Wear Expectations
          </h2>
          <p>
            Hair systems are cosmetic garments made of delicate human hair fibers. Wear duration and bond retention vary based on:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
            <li><strong>Scalp Perspiration & Sebum:</strong> Heavy sweating, gym workouts, or oily skin types may require servicing every 20–25 days rather than the standard 30 days.</li>
            <li><strong>Home Care:</strong> Using sulfate-free shampoos, light conditioners, and avoiding excessive aggressive towel-rubbing significantly extends system life.</li>
            <li><strong>Re-servicing:</strong> Bonded systems must be detached, cleaned, and re-bonded periodically to maintain scalp hygiene and aesthetic freshness.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900">
            3. Patch Testing & Scalp Health
          </h2>
          <p>
            While all our resins and contour tapes are dermatologically tested and FDA-compliant, the studio strongly encourages sensitive-skin clients to undergo a 24-hour adhesive patch test before full fitting. The studio is not liable for allergic reactions if a client declines patch testing despite known dermatological sensitivities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900">
            4. Appointment Scheduling & Rescheduling
          </h2>
          <p>
            To maintain our commitment to private, unhurried VIP styling sessions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
            <li>Appointments can be rescheduled or cancelled anytime via WhatsApp or phone with at least 2 hours prior notice.</li>
            <li>Walk-ins are welcomed at our Kadapa studio, though advance booking is recommended to guarantee zero waiting time.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};
