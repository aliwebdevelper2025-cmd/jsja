import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageSquare, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { ServiceItem, BookingDetails } from '../types';
import { BRANCH_INFO } from '../data/services';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServices: ServiceItem[];
  onBookingComplete?: (booking: BookingDetails) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServices,
  onBookingComplete,
}) => {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>(initialServices);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Schedule & Preferences, 2: Guest Details, 3: Confirmed Ticket

  // Form states
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('02:30 PM');
  const [therapistGender, setTherapistGender] = useState<'No Preference' | 'Female Specialist' | 'Male Specialist'>('No Preference');
  const [pressure, setPressure] = useState<string>('Medium');
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Synchronize initial services when prop changes
  React.useEffect(() => {
    if (initialServices.length > 0) {
      setSelectedServices(initialServices);
    }
  }, [initialServices]);

  if (!isOpen) return null;

  const totalAmount = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const availableSlots = [
    '10:30 AM',
    '12:00 PM',
    '01:30 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM',
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const bookingRef = `LEV-I8-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: BookingDetails = {
      id: bookingRef,
      customerName,
      customerPhone,
      date,
      timeSlot,
      therapistPreference: `${therapistGender} (${pressure} Pressure)`,
      genderPreference: therapistGender,
      specialNotes: notes,
      selectedServices,
      totalAmount,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(newBooking);
    if (onBookingComplete) onBookingComplete(newBooking);
    setStep(3);
  };

  const getWhatsAppBookingUrl = () => {
    if (!confirmedBooking) return '#';
    const serviceList = confirmedBooking.selectedServices.map(s => `• ${s.name} (Rs. ${s.price.toLocaleString()})`).join('\n');
    const text = encodeURIComponent(
      `*Levish Salon & Spa Appointment Booking*\n` +
      `*Ref:* ${confirmedBooking.id}\n` +
      `*Guest:* ${confirmedBooking.customerName}\n` +
      `*Phone:* ${confirmedBooking.customerPhone}\n` +
      `*Branch:* I-8 Markaz, Islamabad\n` +
      `*Date:* ${confirmedBooking.date}\n` +
      `*Time Slot:* ${confirmedBooking.timeSlot}\n` +
      `*Preference:* ${confirmedBooking.therapistPreference}\n\n` +
      `*Selected Treatments:*\n${serviceList}\n\n` +
      `*Total Estimate:* Rs. ${confirmedBooking.totalAmount.toLocaleString()}\n` +
      (confirmedBooking.specialNotes ? `*Notes:* ${confirmedBooking.specialNotes}\n` : '') +
      `\nPlease confirm availability for this slot. Thank you!`
    );
    return `https://wa.me/${BRANCH_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#151410] border border-[#302b22] rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26221a] pb-4">
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#c8a97e] font-semibold">
              Levish Sanctuary I-8 Markaz
            </span>
            <h3 className="font-serif text-2xl text-[#f7f4ee]">
              {step === 3 ? 'Appointment Reserved' : 'Schedule Your Ritual'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#8f887b] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex items-center justify-between text-xs text-[#8c8477] border-b border-[#232019] pb-3">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono ${step === 1 ? 'bg-[#c8a97e] text-[#0e0d0b] font-bold' : 'bg-[#26221a] text-[#8c8477]'}`}>
                1
              </span>
              <span className={step === 1 ? 'text-[#f5f2ec] font-medium' : ''}>Date & Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono ${step === 2 ? 'bg-[#c8a97e] text-[#0e0d0b] font-bold' : 'bg-[#26221a] text-[#8c8477]'}`}>
                2
              </span>
              <span className={step === 2 ? 'text-[#f5f2ec] font-medium' : ''}>Guest Information</span>
            </div>
          </div>
        )}

        {/* STEP 1: Date, Slot & Therapist Preferences */}
        {step === 1 && (
          <div className="space-y-6">
            
            {/* Selected Treatments Summary */}
            <div className="bg-[#1c1a15] border border-[#2d2820] rounded-xl p-4 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#999285] font-semibold block">
                Selected Ritual ({selectedServices.length})
              </span>
              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {selectedServices.map((srv) => (
                  <div key={srv.id} className="flex items-center justify-between text-xs">
                    <span className="text-[#eee8de] font-medium truncate max-w-[280px]">
                      {srv.name}
                    </span>
                    <span className="font-mono text-[#c8a97e] font-semibold tabular-nums shrink-0">
                      Rs. {srv.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#2d2820] flex items-center justify-between text-xs font-semibold">
                <span className="text-[#a8a194]">Estimated Total:</span>
                <span className="font-mono text-base text-[#f7f4ee] tabular-nums">
                  Rs. {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                Select Preferred Date
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#191813] border border-[#2f2b23] rounded-lg text-sm text-[#f0ebe2] focus:outline-none focus:border-[#c8a97e]"
              />
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                Select Time Slot (I-8 Markaz)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`py-2 px-2 text-xs font-mono rounded-lg transition-all border ${
                      timeSlot === slot
                        ? 'bg-[#c8a97e] text-[#0e0d0b] font-bold border-[#c8a97e]'
                        : 'bg-[#191813] text-[#9c9486] border-[#2e2a22] hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Therapist & Pressure Preference */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                  Therapist
                </label>
                <select
                  value={therapistGender}
                  onChange={(e) => setTherapistGender(e.target.value as any)}
                  className="w-full px-3 py-2 bg-[#191813] border border-[#2f2b23] rounded-lg text-xs text-[#f0ebe2] focus:outline-none focus:border-[#c8a97e]"
                >
                  <option value="No Preference">No Preference</option>
                  <option value="Female Specialist">Female Specialist</option>
                  <option value="Male Specialist">Male Specialist</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                  Pressure Depth
                </label>
                <select
                  value={pressure}
                  onChange={(e) => setPressure(e.target.value)}
                  className="w-full px-3 py-2 bg-[#191813] border border-[#2f2b23] rounded-lg text-xs text-[#f0ebe2] focus:outline-none focus:border-[#c8a97e]"
                >
                  <option value="Gentle">Gentle / Relaxing</option>
                  <option value="Medium">Medium / Therapeutic</option>
                  <option value="Firm">Firm / Deep Tissue</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d8be97] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Continue to Guest Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Guest Details Form */}
        {step === 2 && (
          <form onSubmit={handleConfirm} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Asad Khan"
                className="w-full px-4 py-2.5 bg-[#191813] border border-[#2f2b23] rounded-lg text-sm text-[#f0ebe2] placeholder-[#6e685c] focus:outline-none focus:border-[#c8a97e]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="0300 1234567 or +92 3xx xxxxxxx"
                className="w-full px-4 py-2.5 bg-[#191813] border border-[#2f2b23] rounded-lg text-sm text-[#f0ebe2] placeholder-[#6e685c] focus:outline-none focus:border-[#c8a97e]"
              />
              <span className="text-[11px] text-[#7d766a]">
                We send immediate SMS & WhatsApp confirmations to this number.
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#b8b1a3] font-medium block">
                Special Requests or Focus Areas (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Focus on lower back tension, prefer light lavender oil..."
                className="w-full px-4 py-2 bg-[#191813] border border-[#2f2b23] rounded-lg text-xs text-[#f0ebe2] placeholder-[#6e685c] focus:outline-none focus:border-[#c8a97e]"
              />
            </div>

            <div className="p-3 rounded-lg bg-[#1a1914] border border-[#2b271f] text-xs text-[#9c9588] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c8a97e] shrink-0" />
              <span>
                No pre-payment required. Pay comfortably at reception via Cash, Credit Card, or Bank Transfer upon arrival.
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#9f988b] hover:text-white bg-[#1e1c17] rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d8be97] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Confirm Appointment</span>
                <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmed Ticket & Direct WhatsApp Dispatch */}
        {step === 3 && confirmedBooking && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Success Banner */}
            <div className="text-center space-y-2 py-2">
              <div className="w-12 h-12 rounded-full bg-[#c8a97e]/20 text-[#c8a97e] flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-[#f8f5f0]">
                Your Sanctuary Visit is Reserved!
              </h4>
              <p className="text-xs text-[#a8a194]">
                Booking Reference: <span className="font-mono text-[#c8a97e] font-bold">{confirmedBooking.id}</span>
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#1b1914] border border-[#3b3426] rounded-xl p-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#2b261e]">
                <div>
                  <span className="text-[#80796c] block">Date & Time</span>
                  <span className="font-semibold text-[#f5f2ec]">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                </div>
                <div>
                  <span className="text-[#80796c] block">Guest Name</span>
                  <span className="font-semibold text-[#f5f2ec]">{confirmedBooking.customerName}</span>
                </div>
              </div>

              <div>
                <span className="text-[#80796c] block mb-1">Branch</span>
                <span className="font-semibold text-[#f5f2ec]">{BRANCH_INFO.address}</span>
              </div>

              <div>
                <span className="text-[#80796c] block mb-1">Therapist Preference</span>
                <span className="text-[#e2ddd3]">{confirmedBooking.therapistPreference}</span>
              </div>

              <div className="pt-3 border-t border-[#2b261e] flex items-center justify-between">
                <span className="text-[#999285]">Total Amount Due at Reception:</span>
                <span className="font-mono text-base font-bold text-[#c8a97e] tabular-nums">
                  Rs. {confirmedBooking.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Instant WhatsApp Direct Confirmation Button */}
            <div className="space-y-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send to Levish I-8 WhatsApp Concierge</span>
              </a>

              <p className="text-[11px] text-center text-[#7e766a]">
                Direct connection with reception in I-8 Markaz for instant priority confirmation.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#24211b]">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs uppercase tracking-wider text-[#9e9688] hover:text-white"
              >
                Done
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider text-[#c8a97e] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Ticket</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
