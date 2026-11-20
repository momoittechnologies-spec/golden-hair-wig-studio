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
    recommendedSolution: 'Full Crown Swiss Lace System',
    recommendedTechnique: 'Hair Bonding Process (Semi-Permanent)',
    duration: '60 Minutes',
    suitability: 'men'
  },
  {
    id: 'stage-3',
    stageName: 'Norwood Grade 6-7',
    hairLossLevel: 'Extensive Scalp Baldness',
    symptoms: 'Complete loss of hair on crown and top, hair remains only on sides and back.',
    recommendedSolution: 'Full Top Micro-Skin & Lace System',
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
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-2');

  const filtered = STAGES.filter(s => filter === 'all' || s.suitability === filter);
  const activeStage = STAGES.find(s => s.id === selectedStageId) || STAGES[1];

  return (
    <section className="py-16 lg:py-22 bg-[#FAF8F4] relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Award className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Hair Loss Self-Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Find Your Recommended Solution
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Select your current hair thinning stage to identify the ideal non-surgical hair system and attachment method for your lifestyle.
          </p>

          {/* Gender Filter */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-[#E8E2D8] mt-3 shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-gold-500 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Stages
            </button>
            <button
              type="button"
              onClick={() => setFilter('men')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'men' ? 'bg-gold-500 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Men (Norwood)
            </button>
            <button
              type="button"
              onClick={() => setFilter('women')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'women' ? 'bg-gold-500 text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Women (Ludwig)
            </button>
          </div>
        </div>

        {/* Stage Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filtered.map((item) => {
            const isSelected = item.id === selectedStageId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedStageId(item.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-gold-500 shadow-md scale-[1.02]'
                    : 'bg-white/80 border-[#E8E2D8] hover:border-neutral-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-neutral-900">{item.stageName}</span>
                  <span className="text-[10px] bg-[#FAF8F4] px-2 py-0.5 rounded text-gold-700 font-semibold border border-[#E8E2D8]">
                    {item.duration}
                  </span>
                </div>
                <div className="text-xs text-neutral-800 font-semibold mb-1">{item.hairLossLevel}</div>
                <p className="text-[11px] text-neutral-500 line-clamp-2">{item.symptoms}</p>
              </div>
            );
          })}
        </div>

        {/* Active Stage Recommendation Box */}
        <div className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
              Recommended Solution for {activeStage.stageName}
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
              {activeStage.recommendedSolution}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              <strong>Technique:</strong> {activeStage.recommendedTechnique} • Fitting Duration: {activeStage.duration}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Consultation for this Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
