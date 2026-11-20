import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 px-4 text-center max-w-xl mx-auto space-y-6 bg-white text-neutral-800">
      <SEOHead
        title="Page Not Found"
        description="The requested page could not be found at Golden Hair Wig Studio."
        canonicalPath="/404"
      />

      <span className="text-6xl sm:text-8xl font-serif font-black text-gold-600 block">
        404
      </span>

      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
        Page Not Found
      </h1>

      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
        The page you are looking for may have been moved or is no longer available. Please explore our services or return to the homepage.
      </p>

      <div className="flex justify-center gap-3 pt-4">
        <Link
          to="/"
          className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4 text-white" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/services"
          className="py-3 px-6 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-semibold text-xs border border-[#E8E2D8] flex items-center gap-2 transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-neutral-600" aria-hidden="true" />
          <span>Explore Services</span>
        </Link>
      </div>
    </div>
  );
};
