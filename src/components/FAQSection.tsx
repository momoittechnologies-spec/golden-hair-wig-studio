import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/businessData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-22 bg-white relative border-t border-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F4] border border-[#E8E2D8] text-gold-700 text-xs font-semibold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Hair Replacement FAQs
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our non-surgical hair systems, hygiene, maintenance, and daily lifestyle compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-gold-400 shadow-sm'
                    : 'bg-[#FAF8F4] border-[#E8E2D8] hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-gold-800' : 'text-neutral-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-white border border-[#E8E2D8] text-neutral-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-gold-700 border-gold-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#F5F0E8] pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
