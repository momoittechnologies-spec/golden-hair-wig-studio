import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 bg-white text-neutral-800">
      <SEOHead
        title="Privacy & Client Data Policy"
        description="Privacy policy and confidential data handling commitment for Golden Hair Wig Studio clients across Andhra Pradesh."
        canonicalPath="/privacy-policy"
      />

      <div className="space-y-4 border-b border-[#E8E2D8] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Client Confidentiality Commitment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
          Privacy Policy & Data Protection
        </h1>
        <p className="text-xs text-neutral-500">
          Last Updated: November 2026 • Golden Hair Wig Studio (Proprietor: Mr. Swarup)
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-neutral-600">
        
        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>1. Information We Collect</span>
          </h2>
          <p>
            When you contact Golden Hair Wig Studio via our website, WhatsApp, phone call, or visit our studios in Kadapa, Proddatur, Madanapalle, or Nandyal, we collect only the necessary information to coordinate your personal aesthetic consultation:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
            <li>Your contact name and preferred telephone / WhatsApp mobile number.</li>
            <li>Your chosen studio location and service of interest (e.g. hair bonding, clipping, or topper).</li>
            <li>Any voluntary details regarding your hair thinning history or scheduling preferences.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900 flex items-center gap-2">
            <Eye className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>2. Strict Client Photo Consent Policy</span>
          </h2>
          <p>
            Hair restoration is a deeply personal aesthetic choice. We maintain a strict photo privacy protocol:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
            <li><strong>No involuntary photography:</strong> No photographs or videos are ever taken without your explicit, written verbal permission.</li>
            <li><strong>Complete privacy option:</strong> If you wish for your consultation and procedure to remain 100% confidential without any imagery recorded, your request is strictly honored.</li>
            <li><strong>Facial blurring upon request:</strong> Clients who generously consent to display their transformation results may request complete facial obscuration to protect their anonymity.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-neutral-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>3. How We Use & Protect Your Contact Data</span>
          </h2>
          <p>
            Your mobile phone number and contact inquiries are used solely by Mr. Swarup and our studio desk to communicate appointment availability, provide pricing guidance, and send routine maintenance reminders. We will <strong>never sell, lease, or share</strong> your contact details with external advertising brokers or third-party marketing networks.
          </p>
        </section>

      </div>
    </div>
  );
};
