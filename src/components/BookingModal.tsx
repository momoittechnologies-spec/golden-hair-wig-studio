import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, MapPin, User, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const selectedBranch = BRANCHES.find(b => b.id === branchId) || BRANCHES[0];
    const selectedService = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F9D976', '#D4AF37', '#AA771C', '#FFFFFF'],
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    // Build pre-formatted WhatsApp text
    const message = `*NEW CONSULTATION REQUEST - GOLDEN HAIR WIG STUDIO*
---------------------------------------
👤 *Client Name:* ${fullName.trim()}
📱 *Phone:* ${phoneNumber.trim()}
📍 *Preferred Branch:* ${selectedBranch.name} (${selectedBranch.city})
✂️ *Service Interested:* ${selectedService.title}
📅 *Preferred Date:* ${preferredDate || 'Earliest Available'}
⏰ *Preferred Slot:* ${timeSlot}
💬 *Contact Via:* ${contactMode === 'whatsapp' ? 'WhatsApp Chat' : 'Direct Phone Call'}
---------------------------------------
Please confirm my VIP appointment slot.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.rawPrimaryPhone}?text=${encodedMessage}`;

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-obsidian-950 rounded-3xl border border-gold-500/40 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-obsidian-850 text-slate-400 hover:text-white border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free & Confidential</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Book VIP Consultation
              </h3>
              <p className="text-xs text-slate-400">
                Meet Mr. Swarup or senior stylists in a private room. Instant 1-hour hair transformations available.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Select Nearest Branch</span>
                </label>
                <select
                  value={branchId}
                  onChange={(e) => setBranchId(e.target.value)}
                  className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-gold-500"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.city}) {b.isHQ ? '— HQ' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Select Procedure / Service</span>
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-gold-500"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-400" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-obsidian-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-gold-500"
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
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  How should we contact you?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContactMode('whatsapp')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      contactMode === 'whatsapp'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                        : 'bg-obsidian-900 border-slate-700 text-slate-400'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp (Instant)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactMode('call')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      contactMode === 'call'
                        ? 'bg-gold-500/20 border-gold-500 text-gold-400 font-bold'
                        : 'bg-obsidian-900 border-slate-700 text-slate-400'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Privacy Disclaimer */}
              <p className="text-[11px] text-slate-500 leading-tight">
                🔒 We respect your privacy. Your contact details remain 100% confidential and are never shared.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm VIP Consultation Slot</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white">
              Appointment Request Sent!
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Opening WhatsApp now to connect directly with Mr. Swarup and finalize your VIP consultation slot.
            </p>

            <div className="p-4 rounded-xl bg-obsidian-900 border border-slate-800 text-xs text-left space-y-1.5">
              <div><strong>Studio:</strong> {BRANCHES.find(b => b.id === branchId)?.name}</div>
              <div><strong>Procedure:</strong> {SERVICES.find(s => s.id === serviceId)?.title}</div>
              <div><strong>Phone:</strong> {phoneNumber}</div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs"
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
