import React from 'react';
import { ExternalLink, Play, Heart, Users, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { InstagramIcon } from './SocialIcons';

interface InstagramPostPreview {
  id: number;
  title: string;
  category: string;
  image: string;
  views: string;
  likes: string;
}

const INSTAGRAM_POSTS: InstagramPostPreview[] = [
  {
    id: 1,
    title: "1-Hour French Lace Fitting & Seamless Skin Fade Haircut Blend",
    category: "Transformation Reel",
    image: "/images/slider/slide_1.jpg",
    views: "18.4K",
    likes: "1.2K"
  },
  {
    id: 2,
    title: "Undetectable Front Hairline Test Under Direct Sunlight & Wind",
    category: "Realism Test",
    image: "/images/slider/slide_3.jpg",
    views: "24.1K",
    likes: "1.8K"
  },
  {
    id: 3,
    title: "Crown Thinning to Full Volume with Zero Surgery in 60 Mins",
    category: "Client Story",
    image: "/images/slider/slide_2.jpg",
    views: "15.9K",
    likes: "980"
  },
  {
    id: 4,
    title: "Monthly Ultrasonic Servicing, Scalp Detox & Fresh Re-Bonding",
    category: "Studio Tutorial",
    image: "/images/client/services_card.jpg",
    views: "12.3K",
    likes: "750"
  }
];

export const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Cluster */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-neutral-800 text-xs font-semibold shadow-xs">
              <span className="p-1 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                <InstagramIcon className="w-3 h-3 text-white" />
              </span>
              <span>Official Instagram Community</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="text-gold-700 font-bold">{BUSINESS_INFO.instagramHandle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
              Watch Real Transformations on Instagram
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Follow our daily journey on Instagram. Watch genuine client reveals, behind-the-scenes studio sessions, and expert hair care guidance directly from Mr. Swarup.
            </p>
          </div>

          {/* Follow Button */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98 flex-shrink-0 group"
            aria-label={`Follow ${BUSINESS_INFO.instagramHandle} on Instagram`}
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>Follow {BUSINESS_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Visual Posts & Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-[#FAF8F4] border border-[#E8E2D8] hover:border-rose-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              aria-label={`Watch ${post.title} on Instagram`}
            >
              {/* Image Preview with Play Overlay */}
              <div className="relative h-60 overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle Gradient & Play Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-neutral-800 shadow-2xs">
                  {post.category}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-xs text-white">
                  <InstagramIcon className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Center Play Badge on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xs text-rose-600 flex items-center justify-center shadow-md transform scale-90 group-hover:scale-105 transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" aria-hidden="true" />
                  </div>
                </div>

                {/* Bottom Metrics Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white drop-shadow-xs">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3 fill-current text-white/80" />
                    <span>{post.views} views</span>
                  </span>
                  <span className="flex items-center gap-1 text-rose-300">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                </div>
              </div>

              {/* Post Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs font-medium text-neutral-800 line-clamp-2 leading-relaxed group-hover:text-rose-600 transition-colors">
                  {post.title}
                </p>

                <div className="pt-3 mt-2 border-t border-[#E8E2D8] flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="text-gold-700 font-semibold group-hover:underline">
                    Watch on Instagram →
                  </span>
                  <span className="text-neutral-400">@kadapa</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner with Social Proof */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <p className="text-neutral-700 font-medium">
              Want to see daily haircut styles, custom hairline fades, and hair system maintenance tips?
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 transition-colors whitespace-nowrap"
          >
            <span>Follow @goldenhair_studio_kadapa on Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
