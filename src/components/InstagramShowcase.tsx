import React from 'react';
import { ExternalLink, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { InstagramIcon } from './SocialIcons';

export const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Connect Card */}
        <div className="rounded-3xl bg-[#FAF8F4] border border-[#E8E2D8] p-8 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rose-100/40 via-amber-100/20 to-transparent rounded-full pointer-events-none -mr-20 -mt-20" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left: Instagram Identity & Message */}
            <div className="flex flex-col sm:flex-row items-center gap-5 max-w-2xl">
              {/* Instagram Avatar Badge */}
              <div className="p-1 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md flex-shrink-0">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white flex items-center justify-center p-2">
                  <img
                    src="/images/logo-icon.png"
                    alt="Golden Hair Studio Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#E8E2D8] text-[11px] font-bold text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded-xs bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                    <InstagramIcon className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>Official Instagram Profile</span>
                  <CheckCircle2 className="w-3 h-3 text-sky-500 fill-sky-100" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
                  Follow {BUSINESS_INFO.instagramHandle}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
                  Stay connected with Golden Hair Wig Studio. Follow our official Instagram page for daily studio updates, hair replacement advice from Mr. Swarup, and announcements across Kadapa, Proddatur, Madanapalle, and Nandyal.
                </p>
              </div>
            </div>

            {/* Right: Follow & Direct Redirect Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98 group whitespace-nowrap"
                aria-label={`Follow ${BUSINESS_INFO.instagramHandle} on Instagram`}
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#E8E2D8] text-neutral-800 font-semibold text-xs shadow-2xs transition-colors whitespace-nowrap"
                aria-label={`View ${BUSINESS_INFO.instagramHandle} Profile`}
              >
                <span>View Instagram Profile</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
