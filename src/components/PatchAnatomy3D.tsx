import React, { useState } from 'react';
import { Layers, Wind, ShieldCheck, Eye, CheckCircle2, Info, Crown } from 'lucide-react';

interface LayerSpec {
  id: string;
  name: string;
  tagline: string;
  depth: string;
  material: string;
  icon: any;
  color: string;
  glowColor: string;
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
    color: 'from-amber-400 to-gold-600',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    keyFeatures: [
      'Micro-bleached invisible knots at the hairline',
      'Matches your natural hair color, gray percentage & density',
      'Can be washed, blow-dried, dyed, or combed in any direction',
      'Natural crown swirl and graduation for 100% realism'
    ],
    description: 'Each individual human hair strand is meticulously hand-tied onto the micro-base by master artisans, perfectly duplicating how real hair emerges from the human scalp.'
  },
  {
    id: 'layer-poly',
    name: '2. Ultra-Thin Bio-Skin Perimeter',
    tagline: '0.03mm micro-thin anatomical bonding rim',
    depth: 'Middle Structural Layer',
    material: 'Medical-Grade Polyurethane (Bio-Compatible)',
    icon: ShieldCheck,
    color: 'from-blue-400 to-indigo-600',
    glowColor: 'rgba(99, 102, 241, 0.3)',
    keyFeatures: [
      'Flexible contouring to the exact shape of your skull',
      'Provides firm anchor zone for safe medical bonding or tapes',
      'Waterproof, sweat-proof, and helmet-proof security',
      'Tear-resistant durability lasting months of continuous wear'
    ],
    description: 'The perimeter rim utilizes a state-of-the-art bio-polymeric membrane that melds seamlessly against your scalp without any perceptible ridges or noticeable boundaries.'
  },
  {
    id: 'layer-lace',
    name: '3. Breathable Swiss Lace & Monofilament Mesh',
    tagline: 'Honeycomb micro-pores allowing scalp respiration',
    depth: 'Base Scalp-Contact Layer',
    material: 'Ultra-Fine French / Swiss Diamond Net',
    icon: Wind,
    color: 'from-emerald-400 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.3)',
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
    <section id="patch-anatomy" className="py-16 lg:py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Background Decorative Tech Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Hair System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Why It Looks & Feels 100% Undetectable
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Unlike cheap traditional wigs that feel like plastic helmets, our custom Swiss Lace systems feature a three-layer micro-engineering design that lets your scalp breathe naturally while delivering an invisible hairline.
          </p>
        </div>

        {/* View Toggle Bar */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setIsExploded(true)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
              isExploded
                ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Exploded 3D Anatomy View</span>
          </button>
          <button
            onClick={() => setIsExploded(false)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
              !isExploded
                ? 'bg-gold-gradient text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Assembled Compact View</span>
          </button>
        </div>

        {/* Interactive Exploder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual: 3D Layer Stack Projection */}
          <div className="lg:col-span-7 bg-obsidian-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 relative backdrop-blur-md shadow-2xl">
            
            <div className="relative h-[340px] sm:h-[420px] flex items-center justify-center perspective-[1000px]">
              
              {/* Layer 1: Top Hair System */}
              <div
                onClick={() => setSelectedLayerId('layer-hair')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-36 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-hair'
                    ? 'border-gold-400 shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-105 z-30'
                    : 'border-slate-700/80 hover:border-gold-500/50 z-20 opacity-85'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(-110px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(-20px) rotateX(45deg) rotateZ(-18deg)',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(15, 23, 42, 0.85) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-gold-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 text-gold-400" />
                    <span>LAYER 1: Human Hair</span>
                  </span>
                  <span className="text-[10px] bg-gold-500/20 px-2 py-0.5 rounded text-gold-400 border border-gold-500/30">
                    Active Layer
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Virgin Remy Human Hair • 100% Undetectable Hairline
                </div>
                {/* Hair strands visual graphic */}
                <div className="mt-3 flex items-center gap-1 opacity-70">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500"></div>
                </div>
              </div>

              {/* Layer 2: Bio-Skin Perimeter */}
              <div
                onClick={() => setSelectedLayerId('layer-poly')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-36 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-poly'
                    ? 'border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.4)] scale-105 z-30'
                    : 'border-slate-700/80 hover:border-indigo-500/50 z-15 opacity-85'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(5px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(0px) rotateX(45deg) rotateZ(-18deg)',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-indigo-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>LAYER 2: Bio-Skin Rim</span>
                  </span>
                  <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300 border border-indigo-500/30">
                    0.03mm Poly
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Anatomical Scalp Contour • Adhesive Anchor Zone
                </div>
                <div className="mt-3 flex items-center gap-1 opacity-70">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500"></div>
                </div>
              </div>

              {/* Layer 3: Swiss Lace Scalp Base */}
              <div
                onClick={() => setSelectedLayerId('layer-lace')}
                className={`absolute w-64 sm:w-80 h-32 sm:h-36 rounded-2xl p-4 border transition-all duration-700 cursor-pointer ${
                  selectedLayerId === 'layer-lace'
                    ? 'border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-105 z-30'
                    : 'border-slate-700/80 hover:border-emerald-500/50 z-10 opacity-85'
                }`}
                style={{
                  transform: isExploded
                    ? 'translateY(120px) rotateX(45deg) rotateZ(-18deg)'
                    : 'translateY(20px) rotateX(45deg) rotateZ(-18deg)',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold text-emerald-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-emerald-400" />
                    <span>LAYER 3: Swiss Lace Base</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 border border-emerald-500/30">
                    Breathable
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Direct Scalp Contact • Diamond Air Net & Sweat Evacuation
                </div>
                <div className="mt-3 flex items-center gap-1 opacity-70">
                  <div className="h-1.5 w-full rounded bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500"></div>
                </div>
              </div>

            </div>

            {/* Hint text at bottom of 3D canvas */}
            <div className="text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-gold-400" />
              <span>Click on any layer above to inspect its clinical specifications</span>
            </div>

          </div>

          {/* Right Details Panel: Deep technical breakdown */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Layer Selection Pills */}
            <div className="space-y-3">
              {LAYERS.map((layer) => {
                const Icon = layer.icon;
                const isCurrent = layer.id === selectedLayerId;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 ${
                      isCurrent
                        ? 'bg-obsidian-900 border-gold-500/60 shadow-gold-glow scale-[1.01]'
                        : 'bg-obsidian-950/60 border-slate-800 hover:border-slate-700 hover:bg-obsidian-900/40 text-slate-400'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${layer.color} text-obsidian-950 flex-shrink-0 shadow-md`}>
                      <Icon className="w-5 h-5 text-obsidian-950" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                          {layer.name}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase font-medium">
                          {layer.depth}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">
                        {layer.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Deep Dive Card */}
            <div className="bg-obsidian-900 rounded-2xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-slate-400">Material Composition:</span>
                <span className="text-xs font-bold text-gold-300">{activeLayer.material}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeLayer.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Key Engineering Advantages:
                </span>
                {activeLayer.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
