import React from 'react';
import { BRANCH_INFO } from '../data/services';
import { Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0b0a08] border-t border-[#211e18] text-[#9c9486] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.2em] font-normal text-[#f4efe8] block">
                LEVISH
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c8a97e] block">
                Salon & Luxury Spa
              </span>
            </div>
            <p className="text-xs text-[#878072] leading-relaxed">
              A private luxury haven in Sector I-8 Markaz, dedicated to authentic body massage therapy, Japanese head spas, and bespoke hair styling.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-[#201d17] hover:bg-[#2b271f] text-[#c8a97e] border border-[#3b3529] rounded text-[11px] font-semibold uppercase tracking-wider transition-colors"
              >
                Instant Reservation
              </button>
            </div>
          </div>

          {/* Treatments Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#eee8dd] font-semibold">
              Signature Therapies
            </h4>
            <ul className="space-y-2 text-[#8c8477]">
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">Deep Tissue Recovery Massage</a></li>
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">Volcanic Basalt Stone Therapy</a></li>
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">Swedish Harmonic Relaxation</a></li>
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">7-Step Medical HydraFacial</a></li>
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">Japanese Waterfall Head Spa</a></li>
              <li><a href="#services" className="hover:text-[#c8a97e] transition-colors">Imperial Turkish Hammam</a></li>
            </ul>
          </div>

          {/* Location & Hours Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#eee8dd] font-semibold">
              I-8 Markaz Branch
            </h4>
            <div className="space-y-2 text-[#8c8477]">
              <p className="text-[#beb7aa]">{BRANCH_INFO.address}</p>
              <p>Mon – Sun: {BRANCH_INFO.hours.weekdays}</p>
              <p>Friday Break: {BRANCH_INFO.hours.fridayPrayerBreak}</p>
              <p className="text-[#a1998b]">Basement & Valet Parking Available</p>
            </div>
          </div>

          {/* Direct Concierge Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#eee8dd] font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-[#8c8477]">
              <p>Mobile: <span className="font-mono text-[#f0ebe3] font-medium">{BRANCH_INFO.phoneDisplay}</span></p>
              <p>Landline: <span className="font-mono text-[#f0ebe3]">{BRANCH_INFO.landline}</span></p>
              <p>Email: <span className="text-[#f0ebe3]">{BRANCH_INFO.email}</span></p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BRANCH_INFO.whatsapp}?text=Hello%20Levish%20I-8%20Markaz,%20I%20would%20like%20to%20inquire%20about%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge Line</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-12 mt-12 border-t border-[#1a1813] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6e685d]">
          <p>© {new Date().getFullYear()} Levish Salon & Luxury Spa. All rights reserved. I-8 Markaz, Islamabad.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Hygiene & Sanitization Certified</span>
            <span aria-hidden="true">·</span>
            <span>Private Suites</span>
            <span aria-hidden="true">·</span>
            <span>Islamabad, PK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
