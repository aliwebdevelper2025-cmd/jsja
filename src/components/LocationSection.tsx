import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Car, Shield, CheckCircle, ExternalLink, Navigation } from 'lucide-react';
import { BRANCH_INFO } from '../data/services';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BRANCH_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#12110e] border-b border-[#24211b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8a97e] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Islamabad Flagship Branch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f5f2eb]">
            The I-8 Markaz Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] leading-relaxed">
            Situated right in the bustling heart of Sector I-8 Markaz, Levish is designed from the foundation as an acoustic sanctuary of complete quietude, hygienic comfort, and clinical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Location & Contact Card */}
            <div className="bg-[#171612] border border-[#2b271f] rounded-2xl p-7 space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#242019] text-[#c8a97e] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#8a8376] font-semibold">Physical Address</h4>
                  <p className="text-sm font-medium text-[#f6f2ec]">
                    {BRANCH_INFO.address}
                  </p>
                  <p className="text-xs text-[#9c9587]">
                    Accessible via Islamabad Expressway & Kashmir Highway, I-8 Markaz Central Plaza
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#23201a]">
                <div className="p-3 rounded-lg bg-[#242019] text-[#c8a97e] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#8a8376] font-semibold">Sanctuary Timings</h4>
                  <p className="text-sm font-medium text-[#f6f2ec]">
                    Monday – Sunday: {BRANCH_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs text-[#9c9587]">
                    {BRANCH_INFO.hours.fridayPrayerBreak}
                  </p>
                </div>
              </div>

              {/* Phone & Instant Booking Desk */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#23201a]">
                <div className="p-3 rounded-lg bg-[#242019] text-[#c8a97e] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="text-xs uppercase tracking-wider text-[#8a8376] font-semibold">Direct Concierge Lines</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-base font-semibold text-[#f8f5f0] tabular-nums">
                      {BRANCH_INFO.phoneDisplay}
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="text-xs text-[#c8a97e] hover:underline"
                    >
                      {copiedPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-[#9c9587]">
                    Landline: {BRANCH_INFO.landline}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BRANCH_INFO.phone}`}
                  className="py-3 px-4 rounded-lg bg-[#201d17] hover:bg-[#2b271f] border border-[#383126] text-xs font-semibold uppercase tracking-wider text-[#eee8dd] text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={`https://wa.me/${BRANCH_INFO.whatsapp}?text=Hello%20Levish%20I-8%20Markaz,%20I%20would%20like%20to%20reserve%20a%20spa%20session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-xs font-semibold uppercase tracking-wider text-[#68e094] text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp I-8</span>
                </a>
              </div>

            </div>

            {/* Parking & Valet Note */}
            <div className="p-5 rounded-xl bg-[#161511] border border-[#29251d] flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-[#262119] text-[#c8a97e] shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#a8a193]">
                <strong className="text-[#f5f1eb] font-semibold block mb-0.5">Complimentary Valet & Basement Parking</strong>
                Enjoy hassle-free parking directly in front of Al-Baber Centre in I-8 Markaz with our dedicated attendant.
              </div>
            </div>

          </div>

          {/* Map Preview & Sanctuary Amenities */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Visual Map Representation Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2e2a22] bg-[#171612] p-6 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#c8a97e] font-semibold">
                      Live Coordinate Verification
                    </span>
                    <h4 className="text-lg font-serif text-[#f8f5f0]">
                      Sector I-8 Markaz Commercial Centre
                    </h4>
                  </div>
                  <a
                    href="https://maps.google.com/?q=I-8+Markaz+Islamabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#c8a97e] hover:underline"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Styled Interactive Mock Map Canvas */}
                <div className="relative h-56 rounded-xl overflow-hidden border border-[#2d2922] bg-[#11100e] flex items-center justify-center">
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#c8a97e 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  
                  {/* Simulated Map Roads */}
                  <div className="absolute w-full h-[2px] bg-[#3a3429] top-1/2 -translate-y-1/2" />
                  <div className="absolute h-full w-[2px] bg-[#3a3429] left-1/2 -translate-x-1/2" />
                  <div className="absolute w-3/4 h-[1px] bg-[#2d271f] rotate-45 top-1/3" />
                  
                  {/* Pin Pinpoint */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="p-3 rounded-full bg-[#c8a97e] text-[#0e0d0b] shadow-xl animate-bounce">
                      <MapPin className="w-6 h-6 fill-current" />
                    </div>
                    <div className="mt-2 px-3 py-1 bg-[#0e0d0b]/90 border border-[#c8a97e]/60 rounded-full text-[11px] font-semibold text-[#f8f5f0] shadow-lg whitespace-nowrap">
                      Levish Spa · 2nd Fl, Al-Baber Centre
                    </div>
                  </div>

                  {/* Sector tags on map */}
                  <div className="absolute top-3 left-4 text-[10px] text-[#71695c] font-mono">
                    I-8/1 ↗
                  </div>
                  <div className="absolute bottom-3 right-4 text-[10px] text-[#71695c] font-mono">
                    ↙ I-8/4
                  </div>
                  <div className="absolute bottom-3 left-4 text-[10px] text-[#71695c] font-mono">
                    33.6685° N, 73.0760° E
                  </div>
                </div>

                <p className="text-xs text-[#9e9688] leading-relaxed">
                  Located near Habib Bank & D. Watson Chemist in I-8 Markaz. Elevator access available to the 2nd floor sanctuary suite.
                </p>
              </div>

              {/* Verified Amenity List */}
              <div className="pt-6 border-t border-[#26221a] mt-6">
                <h5 className="text-xs uppercase tracking-wider text-[#d1cabf] font-semibold mb-3">
                  Sanctuary Standards & Hygiene
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#aba396]">
                  {BRANCH_INFO.amenities.slice(0, 6).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c8a97e] shrink-0" />
                      <span className="truncate">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
