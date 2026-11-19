import React from 'react';
import { Award, ShieldCheck, Clock, Scissors, Crown, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const MARQUEE_ITEMS = [
  { text: "KADAPA (HEADQUARTERS)", icon: MapPin },
  { text: "PRODDATUR BRANCH", icon: MapPin },
  { text: "MADANAPALLE BRANCH", icon: MapPin },
  { text: "NANDYAL BRANCH", icon: MapPin },
  { text: "INSTANT 1-HOUR TRANSFORMATION", icon: Clock },
  { text: "100% VIRGIN REMY HUMAN HAIR", icon: Crown },
  { text: "UNDETECTABLE SWISS LACE BASE", icon: ShieldCheck },
  { text: "SHOWER, SWIM & GYM SAFE", icon: CheckCircle2 },
  { text: "ZERO SURGERY • ZERO PAIN", icon: Award },
  { text: `PROPRIETOR: ${BUSINESS_INFO.proprietor}`, icon: Scissors },
  { text: `CALL: ${BUSINESS_INFO.primaryPhone}`, icon: PhoneIcon },
];

function PhoneIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-y border-gold-500/25 py-3 shadow-md select-none group">
      {/* Left/Right Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-obsidian-950 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-obsidian-950 to-transparent z-10"></div>

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0">
          {MARQUEE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`m1-${idx}`} className="flex items-center gap-2.5">
                <span className="p-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
                  {item.text}
                </span>
                <span className="text-gold-500/50 text-xs ml-4 font-serif">◆</span>
              </div>
            );
          })}
        </div>

        {/* Duplicate Sequence for Seamless Infinite Loop */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0">
          {MARQUEE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`m2-${idx}`} className="flex items-center gap-2.5">
                <span className="p-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
                  {item.text}
                </span>
                <span className="text-gold-500/50 text-xs ml-4 font-serif">◆</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
