import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, MessageCircle, CalendarCheck, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRANCHES, SERVICES, BUSINESS_INFO } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranchId?: string;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialBranchId,
  initialServiceId,
}) => {
  const [branchId, setBranchId] = useState<string>(initialBranchId || BRANCHES[0].id);
  const [serviceId, setServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('Morning (10:00 AM - 1:00 PM)');
  const [contactMode, setContactMode] = useState<'whatsapp' | 'call'>('whatsapp');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>('');
  const [whatsappHref, setWhatsappHref] = useState<string>('');

  useEffect(() => {
    if (initialBranchId) setBranchId(initialBranchId);
    if (initialServiceId) setServiceId(initialServiceId);
  }, [initialBranchId, initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleReset();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const validatePhone = (phone: string): boolean => {
    const clean = phone.replace(/[\s\-()]/g, '');
    const indianRegex = /^[6-9]\d{9}$/;
    const intlRegex = /^\+?[1-9]\d{7,14}$/;
    return indianRegex.test(clean) || intlRegex.test(clean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');

    if (!fullName.trim()) {
      alert('Please provide your full name.');
      return;
    }

    if (!validatePhone(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit mobile number (e.g. 9876543210).');
      return;
    }

    const selectedBranch = BRANCHES.find(b => b.id === branchId || b.slug === branchId) || BRANCHES[0];
    const selectedService = SERVICES.find(s => s.id === serviceId || s.slug === serviceId) || SERVICES[0];

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B58D4A', '#FAF8F4', '#96713B', '#FFFFFF'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    const message = `*CONSULTATION ENQUIRY - GOLDEN HAIR WIG STUDIO*
---------------------------------------
👤 *Client Name:* ${fullName.trim()}
📱 *Phone:* ${phoneNumber.trim()}
📍 *Preferred Studio:* ${selectedBranch.name} (${selectedBranch.city})
✂ *Service:* ${selectedService.title}
📅 *Preferred Date:* ${preferredDate || 'Earliest Available'}
⏰ *Preferred Slot:* ${timeSlot}
💬 *Contact Mode:* ${contactMode === 'whatsapp' ? 'WhatsApp' : 'Direct Phone Call'}
---------------------------------------
Please share appointment availability and consultation guidance.`;

    const encodedMessage = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=${encodedMessage}`;
    setWhatsappHref(targetUrl);

    setTimeout(() => {
      window.open(targetUrl, '_blank');
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPhoneError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 shadow-xl max-h-[92vh] overflow-y-auto text-neutral-900">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F4] text-neutral-500 hover:text-neutral-900 border border-[#E8E2D8] focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Golden Hair Wig Studio Crest"
                  className="w-10 h-10 object-contain rounded-full border border-[#E8E2D8]"
                />
                <div>
                  <div className="inline-flex items-center gap-1.5 text-gold-700 text-[11px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Private & Confidential</span>
                  </div>
                  <h3 id="booking-modal-title" className="text-xl font-serif font-bold text-neutral-900">
                    Schedule Studio Consultation
                  </h3>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Meet Mr. Swarup or senior stylists for a personal scalp evaluation in a private VIP styling suite.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>Select Studio Location</span>
                </label>
                <select
                  value={branchId}
                  onChange={(e) => setBranchId(e.target.value)}
                  className="w-full bg-[#FAF8F4] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-none focus:border-gold-500"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.city}) {b.isHQ ? '— Headquarters' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                  <CalendarCheck className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>Select Solution / Service</span>
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-[#FAF8F4] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-none focus:border-gold-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#FAF8F4] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    className={`w-full bg-[#FAF8F4] border rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none ${
                      phoneError ? 'border-red-400' : 'border-[#E8E2D8] focus:border-gold-500'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-red-600 mt-1">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#FAF8F4] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#FAF8F4] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    <option value="Night (7:00 PM - 9:00 PM)">Night (7:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Contact Mode Preference */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  How should our studio reach you?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContactMode('whatsapp')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      contactMode === 'whatsapp'
                        ? 'bg-[#E8EEE8] border-emerald-400 text-emerald-800 font-bold'
                        : 'bg-[#FAF8F4] border-[#E8E2D8] text-neutral-600'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span>WhatsApp (Instant)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactMode('call')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      contactMode === 'call'
                        ? 'bg-[#FAF6ED] border-gold-500 text-gold-800 font-bold'
                        : 'bg-[#FAF8F4] border-[#E8E2D8] text-neutral-600'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                    <span>Direct Call</span>
                  </button>
                </div>
              </div>

              {/* Privacy Disclosure */}
              <p className="text-[11px] text-neutral-500 leading-tight">
                🔒 Your privacy is strictly protected. Details are used solely to schedule your confidential consultation and are never shared with third parties.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Submit Consultation Enquiry</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E8EEE8] text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-xs animate-bounce">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-neutral-900">
              Consultation Enquiry Initiated!
            </h3>

            <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Opening WhatsApp now to connect directly with Mr. Swarup and our senior stylists to schedule your consultation slot.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E8E2D8] text-xs text-left space-y-1.5 text-neutral-700">
              <div><strong>Studio:</strong> {BRANCHES.find(b => b.id === branchId || b.slug === branchId)?.name}</div>
              <div><strong>Service:</strong> {SERVICES.find(s => s.id === serviceId || s.slug === serviceId)?.title}</div>
              <div><strong>Phone:</strong> {phoneNumber}</div>
            </div>

            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#F5F0E8] text-neutral-700 font-semibold text-xs border border-[#E8E2D8] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
