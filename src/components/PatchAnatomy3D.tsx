import React, { useState } from 'react';
import { Layers, Wind, ShieldCheck, Eye, CheckCircle2, Crown } from 'lucide-react';

interface LayerSpec {
  id: string;
  name: string;
  tagline: string;
  depth: string;
  material: string;
  icon: any;
  keyFeatures: string[];
  description: string;
}

const LAYERS: LayerSpec[] = [
  {
    id: 'layer-hair',
    name: '1. 100% Natural Remy Virgin Hair',
    tagline: 'Hand-knotted follicle by follicle for real scalp simulation',
    depth: 'Top Aesthetic Layer',
    material: 'Virgin Indian Human Hair (Cuticle Intact)',
    icon: Crown,
    keyFeatures: [
      'Micro-bleached invisible knots at the front hairline',
      'Matches your natural hair color, gray percentage & density',
      'Can be washed, blow-dried, heat-styled, or combed naturally',
      'Natural crown swirl and graduation for 100% realism'
    ],
    description: 'Each individual human hair strand is hand-tied onto the micro-base by master artisans, perfectly duplicating how real hair emerges from the human scalp.'
  },
  {
    id: 'layer-poly',
    name: '2. Ultra-Thin Bio-Skin Perimeter',
    tagline: '0.03mm micro-thin anatomical bonding rim',
    depth: 'Middle Structural Layer',
    material: 'Medical-Grade Polyurethane (Bio-Compatible)',
    icon: ShieldCheck,
    keyFeatures: [
      'Flexible contouring to the exact shape of your skull',
      'Provides firm anchor zone for safe medical bonding or tapes',
      'Waterproof, sweat-proof, and helmet-proof security',
      'Tear-resistant durability lasting months of continuous wear'
    ],
    description: 'The perimeter rim utilizes a bio-polymeric membrane that melds seamlessly against your scalp without any perceptible ridges or noticeable boundaries.'
  },
  {
    id: 'layer-lace',
    name: '3. Breathable Swiss Lace Scalp Base',
    tagline: 'Honeycomb micro-pores allowing total scalp respiration',
    depth: 'Base Scalp-Contact Layer',
    material: 'Ultra-Fine French / Swiss Diamond Net',
    icon: Wind,
    keyFeatures: [
      'Total heat and sweat evaporation — keeps scalp cool',
      'Zero itching, zero odor, and zero scalp irritation',
      'Feather-light total weight (weighs less than 28 grams)',
      'Water permeable for easy scalp washing during showers'
    ],
    description: 'The foundation of the system is an ultra-fine, transparent Swiss lace base that allows air, water, and perspiration to pass through freely. Your scalp breathes naturally 24/7.'
  }
];

export const PatchAnatomy3D: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-hair');
  const [isExploded, setIsExploded] = useState<boolean>(true);

  const activeLayer = LAYERS.find(l => l.id === selectedLayerId) || LAYERS[0];

  return (
    <section id="patch-anatomy" className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <Layers className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Interactive System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Why It Looks & Feels 100% Undetectable
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Unlike cheap traditional wigs that feel like plastic helmets, our custom Swiss Lace systems feature a three-layer micro-engineering design that lets your scalp breathe naturally.
          </p>
        </div>

        {/* View Toggle Bar */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setIsExploded(true)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              isExploded
                ? 'bg-gold-500 text-white shadow-xs'
                : 'bg-[#FAF8F4] text-neutral-700 border border-[#E8E2D8] hover:bg-[#F5F0E8]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Exploded 3D Anatomy</span>
          </button>
          <button
            type="button"
            onClick={() => setIsExploded(false)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              !isExploded
                ? 'bg-gold-500 text-white shadow-xs'
                : 'bg-[#FAF8F4] text-neutral-700 border border-[#E8E2D8] hover:bg-[#F5F0E8]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Assembled View</span>
          </button>
        </div>

        {/* Interactive Exploder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual: 3D Layer Stack Projection */}
          <div className="lg:col-span-7 bg-[#FAF8F4] rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 relative shadow-sm">
            
            <div className="relative h-[320px] sm:h-[400px] flex items-center justify-center perspective-[1000px]">
              
              {/* Layer 1: Top Hair System */}
              <div
                onClick={() => setSelectedLayerId('layer-hair')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-34 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-hair'
                    ? 'border-gold-500 shadow-md scale-105 z-30 bg-white'
                    : 'border-[#E8E2D8] hover:border-gold-400 z-20 bg-white/90'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(-100px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(-20px) rotateX(45deg) rotateZ(-18deg)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1.5">
                  <span className="flex items-center gap-1.5 text-gold-700">
                    <Crown className="w-3.5 h-3.5 text-gold-600" />
                    <span>LAYER 1: Human Hair</span>
                  </span>
                  <span className="text-[10px] bg-[#FAF8F4] px-2 py-0.5 rounded text-neutral-600 border border-[#E8E2D8]">
                    100% Remy
                  </span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  Virgin Remy Human Hair • Undetectable Hairline
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500"></div>
                </div>
              </div>

              {/* Layer 2: Bio-Skin Perimeter */}
              <div
                onClick={() => setSelectedLayerId('layer-poly')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-34 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-poly'
                    ? 'border-gold-500 shadow-md scale-105 z-30 bg-white'
                    : 'border-[#E8E2D8] hover:border-gold-400 z-15 bg-white/90'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(10px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(0px) rotateX(45deg) rotateZ(-18deg)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1.5">
                  <span className="flex items-center gap-1.5 text-neutral-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                    <span>LAYER 2: Bio-Skin Rim</span>
                  </span>
                  <span className="text-[10px] bg-[#FAF8F4] px-2 py-0.5 rounded text-neutral-600 border border-[#E8E2D8]">
                    0.03mm Poly
                  </span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  Anatomical Scalp Contour • Adhesive Anchor Zone
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-300"></div>
                </div>
              </div>

              {/* Layer 3: Swiss Lace Scalp Base */}
              <div
                onClick={() => setSelectedLayerId('layer-lace')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-34 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-lace'
                    ? 'border-gold-500 shadow-md scale-105 z-30 bg-white'
                    : 'border-[#E8E2D8] hover:border-gold-400 z-10 bg-white/90'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(120px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(20px) rotateX(45deg) rotateZ(-18deg)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1.5">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <Wind className="w-3.5 h-3.5 text-emerald-600" />
                    <span>LAYER 3: Swiss Lace Base</span>
                  </span>
                  <span className="text-[10px] bg-[#FAF8F4] px-2 py-0.5 rounded text-neutral-600 border border-[#E8E2D8]">
                    Breathable Net
                  </span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  Honeycomb Micro-Pores • Scalp Perspiration Escape
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-300"></div>
                </div>
              </div>

            </div>

            <p className="text-center text-xs text-neutral-400 mt-2">
              💡 Tap any layer to inspect material composition and benefits
            </p>
          </div>

          {/* Right Details Panel: Active Layer Information */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                {activeLayer.depth}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">
                {activeLayer.material}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-neutral-900">
              {activeLayer.name}
            </h3>

            <p className="text-xs text-gold-700 font-medium">
              {activeLayer.tagline}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {activeLayer.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-[#E8E2D8]">
              <span className="text-xs font-bold text-neutral-900 block">
                Engineering Highlights:
              </span>
              {activeLayer.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
