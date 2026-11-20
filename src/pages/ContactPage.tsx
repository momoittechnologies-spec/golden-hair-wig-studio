import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, CalendarCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, BRANCHES, SERVICES } from '../data/businessData';
import { buildWhatsAppUrl, getDirectCallUrl, getSecondaryCallUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState(BRANCHES[0].name);
  const [service, setService] = useState(SERVICES[0].title);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (val: string) => {
    const clean = val.replace(/[\s\-()]/g, '');
    return /^[6-9]\d{9}$/.test(clean) || /^\+?[1-9]\d{7,14}$/.test(clean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F9D976', '#B89454', '#FFFFFF'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    const waUrl = buildWhatsAppUrl({
      clientName: fullName,
      clientPhone: phone,
      branchName: branch,
      serviceTitle: service,
      customNotes: notes,
      enquiryType: 'consultation'
    });

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 700);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SEOHead
        title="Contact Golden Hair Wig Studio | Kadapa, Proddatur, Madanapalle, Nandyal"
        description="Contact Golden Hair Wig Studio. Call +91 8617264887 or +91 8609256195. WhatsApp consultation available. Studios in Kadapa (HQ), Proddatur, Madanapalle & Nandyal."
        canonicalPath="/contact"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>We are here to assist you</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
          Connect with Golden Hair Studio
        </h1>
        <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
          Have questions regarding hair systems, bonding vs clipping, or pricing? Reach out to Proprietor Mr. Swarup and our senior stylists directly.
        </p>
      </div>

      {/* Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Phone & WhatsApp Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-neutral-900 border border-gold-500/25 space-y-4 shadow-xl">
            <h2 className="text-lg font-serif font-bold text-white">
              Direct Phone Lines
            </h2>
            <div className="space-y-3">
              <a
                href={getDirectCallUrl()}
                className="p-4 rounded-2xl bg-charcoal border border-neutral-800 hover:border-gold-500/40 flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="text-[11px] text-ivory/60 block">Primary Helpline</span>
                  <strong className="text-sm text-white group-hover:text-gold-300 transition-colors">
                    {BUSINESS_INFO.primaryPhone}
                  </strong>
                </div>
                <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
              </a>

              <a
                href={getSecondaryCallUrl()}
                className="p-4 rounded-2xl bg-charcoal border border-neutral-800 hover:border-gold-500/40 flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="text-[11px] text-ivory/60 block">Secondary Line</span>
                  <strong className="text-sm text-white group-hover:text-gold-300 transition-colors">
                    {BUSINESS_INFO.secondaryPhone}
                  </strong>
                </div>
                <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
              </a>
            </div>

            <a
              href={buildWhatsAppUrl({ enquiryType: 'consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Instant WhatsApp Consultation</span>
            </a>
          </div>

          {/* Operating Hours Card */}
          <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Studio Operating Hours</span>
            </div>
            <p className="text-sm text-white font-medium">
              Open All 7 Days: 9:00 AM – 9:00 PM
            </p>
            <p className="text-xs text-ivory/60 leading-relaxed">
              We operate continuously including Sundays to accommodate working professionals and clients traveling from surrounding taluks.
            </p>
          </div>
        </div>

        {/* Right Column: In-Page Consultation Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-6">
            {!submitted ? (
              <>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Free & 100% Confidential</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white">
                    Send a Consultation Message
                  </h2>
                  <p className="text-xs text-ivory/70">
                    Fill out this quick form to send your inquiry directly to our studio team on WhatsApp:
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ivory/90 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh"
                        className="w-full bg-charcoal border border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-ivory focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ivory/90 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (phoneError) setPhoneError('');
                        }}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-charcoal border rounded-xl px-4 py-2.5 text-xs text-ivory focus:outline-none ${
                          phoneError ? 'border-red-500' : 'border-neutral-700 focus:border-gold-500'
                        }`}
                      />
                      {phoneError && <p className="text-[11px] text-red-400 mt-1">{phoneError}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ivory/90 mb-1.5">
                        Preferred Studio
                      </label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full bg-charcoal border border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-ivory focus:outline-none focus:border-gold-500"
                      >
                        {BRANCHES.map(b => (
                          <option key={b.id} value={b.name}>{b.name} ({b.city})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ivory/90 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-charcoal border border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-ivory focus:outline-none focus:border-gold-500"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ivory/90 mb-1.5">
                      Optional Questions / Scalp Concerns
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Inquiring for hair bonding cost and Sunday appointment availability..."
                      className="w-full bg-charcoal border border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-ivory focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <p className="text-[11px] text-ivory/60 leading-tight">
                    🔒 We protect your data. Your contact information is never shared or used for spam.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gold-gradient text-charcoal font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4 text-charcoal" aria-hidden="true" />
                    <span>Send Consultation Enquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Enquiry Successfully Sent!
                </h3>
                <p className="text-xs text-ivory/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Opening WhatsApp to connect you directly with Mr. Swarup.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 rounded-xl bg-neutral-800 text-ivory text-xs font-semibold hover:bg-neutral-700"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* All 4 Branch Addresses Directory */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Studio Directory Across Andhra Pradesh
          </h2>
          <p className="text-xs text-ivory/70">
            Visit any of our studios in Rayalaseema:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map(b => (
            <div key={b.id} className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <strong className="text-base text-white block">{b.city}</strong>
                {b.isHQ && <span className="text-[9px] bg-gold-500/20 text-gold-400 px-1.5 py-0.5 rounded font-bold">HQ</span>}
              </div>
              <p className="text-xs text-ivory/80 leading-relaxed">{b.address}</p>
              <p className="text-[11px] text-ivory/60">{b.landmark}</p>
              <div className="pt-2 border-t border-neutral-800 text-xs text-gold-400 font-semibold">
                <a href={b.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Directions on Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
