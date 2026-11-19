import React, { useState } from 'react';
import { Award, ArrowRight } from 'lucide-react';

interface StageCard {
  id: string;
  stageName: string;
  hairLossLevel: string;
  symptoms: string;
  recommendedSolution: string;
  recommendedTechnique: string;
  duration: string;
  suitability: 'men' | 'women';
}

const STAGES: StageCard[] = [
  {
    id: 'stage-1',
    stageName: 'Norwood Grade 2-3',
    hairLossLevel: 'Mild to Moderate Frontal Receding',
    symptoms: 'M-shaped receding temples, thinning hairline, but crown is intact.',
    recommendedSolution: 'Frontal Swiss Lace Contour Patch',
    recommendedTechnique: 'Hair Bonding or Hair Taping',
    duration: '45 Minutes',
    suitability: 'men'
  },
  {
    id: 'stage-2',
    stageName: 'Norwood Grade 4-5',
    hairLossLevel: 'Advanced Frontal & Crown Thinning',
    symptoms: 'Bald crown vertex expanding towards receding frontal hairline.',
    recommendedSolution: 'Full Crown Miraj Swiss Lace System',
    recommendedTechnique: 'Hair Bonding Process (Semi-Permanent)',
    duration: '60 Minutes',
    suitability: 'men'
  },
  {
    id: 'stage-3',
    stageName: 'Norwood Grade 6-7',
    hairLossLevel: 'Extensive Scalp Baldness',
    symptoms: 'Complete loss of hair on crown and top, hair remains only on sides and back.',
    recommendedSolution: 'Full Top Bio-Skin & Monofilament System',
    recommendedTechnique: 'Hair Bonding or Weaving',
    duration: '60 Minutes',
    suitability: 'men'
  },
  {
    id: 'stage-4',
    stageName: 'Ludwig Grade 1-3',
    hairLossLevel: "Women's Crown & Partition Thinning",
    symptoms: 'Widening center partition, visible scalp under bright lights, overall thinning.',
    recommendedSolution: 'Silk-Base Invisible Crown Topper',
    recommendedTechnique: 'Clip-in Integration or Tape-in',
    duration: '40 Minutes',
    suitability: 'women'
  }
];

interface HairLossStageGuideProps {
  onOpenBooking: () => void;
}

export const HairLossStageGuide: React.FC<HairLossStageGuideProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  const filteredStages = STAGES.filter(s => {
    if (filter === 'all') return true;
    return s.suitability === filter;
  });

  return (
    <section className="py-16 lg:py-24 bg-obsidian-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Interactive Hair Loss Self-Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Identify Your Stage & Recommended Solution
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every scalp condition is unique. Explore which custom hair system matches your exact stage of hair loss.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1 rounded-2xl bg-obsidian-900 border border-slate-800 mt-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Stages
            </button>
            <button
              onClick={() => setFilter('men')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'men'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Men's Norwood Scale
            </button>
            <button
              onClick={() => setFilter('women')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'women'
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Women's Ludwig Scale
            </button>
          </div>
        </div>

        {/* Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStages.map((stage) => (
            <div
              key={stage.id}
              className="bg-obsidian-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-gold-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-gold-500/15 text-gold-400 border border-gold-500/30">
                    {stage.stageName}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-medium">
                    {stage.suitability === 'women' ? "Women" : "Men"}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {stage.hairLossLevel}
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {stage.symptoms}
                </p>

                <div className="space-y-2 p-3 bg-obsidian-950 rounded-xl border border-slate-800/80 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">Recommended System:</span>
                    <span className="text-white font-bold">{stage.recommendedSolution}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">Best Attachment Method:</span>
                    <span className="text-gold-400 font-semibold">{stage.recommendedTechnique}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">Session Time:</span>
                    <span className="text-slate-300">{stage.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-obsidian-850 hover:bg-gold-gradient hover:text-obsidian-950 border border-slate-700 hover:border-gold-500 text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult for This Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
