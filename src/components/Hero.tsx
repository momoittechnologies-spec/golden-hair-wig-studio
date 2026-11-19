import React from 'react';
import { Clock, ShieldCheck, Phone, MessageCircle, Star, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Ambience: Luxury Gold Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-[130px]"></div>
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-[110px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Clinical & Aesthetic Sales Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md shadow-sm">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Rayalaseema's Premier Hair Restoration Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="text-white font-bold">Just 1 Hour</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
              Regain Your Natural Hair & Youthful Confidence in{' '}
              <span className="text-gold-gradient underline decoration-gold-500/30 underline-offset-8">
                Just 60 Minutes.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Say goodbye to baldness anxiety and painful, costly surgeries. 
              <strong className="text-white"> Golden Hair Wig Studio</strong> delivers 100% natural, undetectable 
              human hair systems tailored to your exact hair color, curl, and scalp contour. 
              Painless, instant, and completely confidential.
            </p>

            {/* Key Clinical Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Virgin Natural Human Hair</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero Surgery & Zero Injections</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Shower, Swim & Gym Proof</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Undetectable Swiss Lace Base</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-3">
              <button
                onClick={onOpenBooking}
                className="group px-7 py-3.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-sm sm:text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Book Free Confidential Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=Hi%20Golden%20Hair%20Studio%2C%20I%20would%20like%20to%20consult%20Mr.%20Swarup%20for%20hair%20replacement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
                <span>Chat with Mr. Swarup</span>
              </a>
            </div>

            {/* Social Proof / Stats Strip */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">{BUSINESS_INFO.clientsServed}</div>
                <div className="text-xs text-slate-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-1">
                  <span>5.0</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
                <div className="text-xs text-slate-400">850+ Google Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">4 Branches</div>
                <div className="text-xs text-slate-400">Kadapa, Proddatur, Madanapalle, Nandyal</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Official Brand Crest & Studio Poster */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer gold ring border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-gold-400/40 via-gold-600/20 to-slate-800/40 shadow-2xl backdrop-blur-xl">
                
                <div className="bg-obsidian-900 rounded-[22px] overflow-hidden border border-slate-800">
                  
                  {/* Top Card Badge: Official Logo + 1 Hour Transformation */}
                  <div className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 p-3.5 sm:p-4 border-b border-gold-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/logo.png"
                        alt="Golden Hair Wig Studio Official Logo"
                        className="w-10 h-10 object-contain rounded-full border border-gold-500/50 shadow-gold-glow"
                      />
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Golden Hair Wig Studio</div>
                        <div className="text-[10px] text-gold-400">Proprietor: Mr. Swarup</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white font-bold text-xs tracking-wide shadow-sm">
                      <Clock className="w-3 h-3" />
                      <span>Just 1 Hour!</span>
                    </div>
                  </div>

                  {/* Main Transformation Image */}
                  <div className="relative group overflow-hidden bg-obsidian-950">
                    <img
                      src="/images/client/poster_banner.jpg"
                      alt="Golden Hair Studio Transformation"
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay badge at bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent flex items-center justify-between">
                      <span className="text-xs font-semibold text-gold-300 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-gold-400" />
                        <span>100% Breathable Lace Toupee</span>
                      </span>
                      <span className="text-[11px] bg-gold-500 text-obsidian-950 font-bold px-2 py-0.5 rounded">
                        4 Branches Active
                      </span>
                    </div>
                  </div>

                  {/* Bottom Studio Info Grid */}
                  <div className="p-4 bg-obsidian-950/90 space-y-3">
                    <div className="text-xs text-slate-300 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Confidential & Private:</strong> Separate private styling cabins for men and women with certified senior specialists.</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={onOpenBooking}
                        className="py-2.5 px-3 rounded-lg bg-gold-gradient text-obsidian-950 font-bold text-xs text-center hover:opacity-95 transition-opacity"
                      >
                        Book Appointment
                      </button>
                      <a
                        href={`tel:${BUSINESS_INFO.rawPrimaryPhone}`}
                        className="py-2.5 px-3 rounded-lg bg-obsidian-850 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3 h-3 text-gold-400" />
                        <span>Direct Call</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Testimonial Pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-obsidian-900/95 border border-gold-500/40 rounded-2xl p-3 shadow-2xl backdrop-blur-xl flex items-center gap-3 max-w-[280px]">
                <div className="w-10 h-10 rounded-full bg-gold-gradient text-obsidian-950 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  5.0
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-[11px] font-bold text-white leading-tight mt-0.5">
                    "Looks 100% natural — totally transformed my look!"
                  </div>
                  <div className="text-[9px] text-slate-400">Kadapa & Proddatur Clients</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
