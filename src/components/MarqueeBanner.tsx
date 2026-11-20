import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const verifiedOfferings = [
    "NON-SURGICAL HAIR REPLACEMENT",
    "NATURAL-LOOKING HAIR SYSTEMS",
    "HAIR PATCH FITTING",
    "HAIR BONDING",
    "HAIR SYSTEM MAINTENANCE",
    "PERSONALIZED CONSULTATIONS"
  ];

  return (
    <aside
      aria-label="Core Services Summary"
      className="w-full bg-[#FAF8F4] border-y border-[#E8E2D8] py-3.5 overflow-hidden group select-none"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {/* First track */}
        <div className="flex items-center gap-8 px-4 text-xs font-bold tracking-wider text-neutral-800 uppercase flex-shrink-0">
          {verifiedOfferings.map((item, index) => (
            <React.Fragment key={`marquee-1-${index}`}>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600 inline-block" aria-hidden="true" />
                <span className="text-neutral-800 hover:text-gold-700 transition-colors">{item}</span>
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Seamless duplicate track for infinite scroll without jumps */}
        <div className="flex items-center gap-8 px-4 text-xs font-bold tracking-wider text-neutral-800 uppercase flex-shrink-0" aria-hidden="true">
          {verifiedOfferings.map((item, index) => (
            <React.Fragment key={`marquee-2-${index}`}>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600 inline-block" />
                <span className="text-neutral-800 hover:text-gold-700 transition-colors">{item}</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};
