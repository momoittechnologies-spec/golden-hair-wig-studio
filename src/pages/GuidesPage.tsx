import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, CheckCircle2, AlertCircle, Clock, Sparkles, HelpCircle, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

interface GuidesPageProps {
  onOpenBooking: () => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'transplant-vs-patch' | 'maintenance' | 'cost-factors'>('transplant-vs-patch');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 bg-white text-neutral-800">
      <SEOHead
        title="Hair Replacement Educational Guides & Advice"
        description="Authoritative guides on Non-Surgical Hair Replacement vs Hair Transplants, monthly system maintenance, and hair patch cost factors across Andhra Pradesh."
        canonicalPath="/guides"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>Educational Resources & Patient Knowledge</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
          Hair Replacement Guides & Knowledge Base
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Honest, transparent guidance from Proprietor Mr. Swarup and our senior styling team to help you make informed decisions regarding your hair restoration journey.
        </p>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setActiveTab('transplant-vs-patch')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'transplant-vs-patch'
                ? 'bg-gold-500 text-white shadow-xs'
                : 'bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-700 hover:text-neutral-900'
            }`}
          >
            Hair Patch vs Hair Transplant
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('maintenance')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'maintenance'
                ? 'bg-gold-500 text-white shadow-xs'
                : 'bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-700 hover:text-neutral-900'
            }`}
          >
            System Maintenance Guide
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cost-factors')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'cost-factors'
                ? 'bg-gold-500 text-white shadow-xs'
                : 'bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-700 hover:text-neutral-900'
            }`}
          >
            Hair Patch Cost Factors
          </button>
        </div>
      </div>

      {/* Guide 1: Hair Patch vs Hair Transplant */}
      {activeTab === 'transplant-vs-patch' && (
        <article className="space-y-10 animate-in fade-in duration-300">
          <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              Hair Patch Systems vs Surgical Hair Transplants
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              When confronting significant hair loss, clients in Andhra Pradesh frequently compare surgical hair transplants (FUE/FUT) with advanced non-surgical hair replacement systems. Here is an honest, factual breakdown to assist your evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Non-Surgical Hair System</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral-900">
                The Non-Surgical Advantage
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-700">⏱️ Immediate Results:</span>
                  <span>Walk out with a full, thick head of hair in just 60 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-700">🛡️ 100% Painless:</span>
                  <span>Zero needles, zero scalp incisions, zero scarring, and zero recovery downtime.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-700">💇 High Density:</span>
                  <span>Achieves dense, youthful hair coverage regardless of donor area quality.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-700">🔄 100% Reversible:</span>
                  <span>Can be modified, restyled, or removed at any time with no permanent impact.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-700">💰 Accessible Cost:</span>
                  <span>Typical initial cost ranges from ₹8,000 to ₹18,000.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Surgical Hair Transplant (FUE / FUT)</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral-900">
                Surgical Considerations & Limitations
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-neutral-900">⏳ Long Wait:</span>
                  <span>Requires 9 to 12 months for transplanted follicles to establish and grow.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-neutral-900">💉 Invasiveness:</span>
                  <span>Surgical procedure requiring local anesthesia, donor punches, and healing time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-neutral-900">📉 Donor Dependent:</span>
                  <span>Effectiveness is strictly limited by the density of your remaining donor follicles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-neutral-900">⚠️ Risk of Thinning:</span>
                  <span>Surrounding native hair can continue to recede, often requiring repeat surgeries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-neutral-900">💸 Significant Expense:</span>
                  <span>Transplant surgeries typically range from ₹60,000 to ₹2,50,000+.</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      )}

      {/* Guide 2: System Maintenance */}
      {activeTab === 'maintenance' && (
        <article className="space-y-10 animate-in fade-in duration-300">
          <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              Hair System Care, Hygiene & Monthly Maintenance
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              A custom non-surgical hair system is an investment in your daily confidence. Proper home care paired with professional monthly servicing ensures the hair remains soft, vibrant, and completely undetectable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-3 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
                01
              </span>
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Monthly Studio Servicing (Every 25–30 Days)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For bonded systems, visit our Kadapa, Proddatur, Madanapalle, or Nandyal studio monthly. Our stylist gently releases the system, removes adhesive residue, cleanses your scalp, and applies fresh medical-grade contour tape or bonding resin.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-3 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
                02
              </span>
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Home Shampooing & Conditioning
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Wash your hair system 1 to 2 times weekly using mild, sulfate-free shampoos. Gently press water through the hair fibers without vigorous circular scrubbing. Apply a leave-in conditioner to retain moisture and shine.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-3 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 font-bold flex items-center justify-center text-sm">
                03
              </span>
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Active Lifestyle & Helmets
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                You can swim, work out at the gym, and wear full-face motorcycle helmets with complete security. After heavy workouts or sweating, rinse the scalp with cool water and gently pat dry with a microfiber towel.
              </p>
            </div>
          </div>
        </article>
      )}

      {/* Guide 3: Cost Factors */}
      {activeTab === 'cost-factors' && (
        <article className="space-y-10 animate-in fade-in duration-300">
          <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] space-y-4 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              Understanding Hair Patch Cost Factors in Andhra Pradesh
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              At Golden Hair Wig Studio, pricing is transparent and consultation-first. Initial systems typically range between ₹8,000 and ₹18,000 depending on customized specifications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-2 shadow-xs">
              <h3 className="text-base font-serif font-bold text-neutral-900">
                1. Base Material Construction
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ultra-thin French and Swiss lace membranes offer maximum breathability and invisible front hairlines. Micro-skin polyurethane bases provide maximum ease of cleaning and durability. Monofilament hybrid bases offer a balance of structure and natural density.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-2 shadow-xs">
              <h3 className="text-base font-serif font-bold text-neutral-900">
                2. Hair Grade & Fiber Length
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We exclusively utilize 100% human virgin hair with intact cuticles. Longer lengths (for ladies volume toppers or executive styles) require higher hair volumes, subtly influencing the system cost.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-2 shadow-xs">
              <h3 className="text-base font-serif font-bold text-neutral-900">
                3. Attachment Method (Bonding vs Clipping)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Semi-permanent bonding utilizes medical-grade scalp adhesives requiring monthly studio re-servicing. Clip-on systems utilize micro-poly clips that allow daily self-removal with zero recurring adhesive costs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-2 shadow-xs">
              <h3 className="text-base font-serif font-bold text-neutral-900">
                4. Custom Scalp Perimeter Size
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Crown-only thinning patches require less surface area than full-crown or temple-to-crown coverage units. During your private evaluation, Mr. Swarup measures the precise thinning perimeter to prevent unnecessary expense.
              </p>
            </div>
          </div>
        </article>
      )}

      {/* Consultation Action Card */}
      <div className="p-8 rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] text-center space-y-4">
        <h3 className="text-2xl font-serif font-bold text-neutral-900">
          Have Questions About Which Option Suits You Best?
        </h3>
        <p className="text-xs text-neutral-600 max-w-lg mx-auto">
          Schedule a private 1-on-1 scalp evaluation with Mr. Swarup at our studios in Kadapa, Proddatur, Madanapalle, or Nandyal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors"
          >
            Book Free Consultation
          </button>
          <a
            href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-[#E8EEE8] hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Ask Mr. Swarup on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
