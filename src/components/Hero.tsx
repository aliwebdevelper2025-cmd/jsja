import React from 'react';
import { Calendar, Compass, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE, BRANCH_INFO } from '../data/services';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#24211b]">
      {/* Background ambient warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c8a97e]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
            {/* Quiet unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c8a97e]">
              <span>Sector I-8 Markaz</span>
              <span aria-hidden="true" className="text-[#595346]">·</span>
              <span>Islamabad</span>
              <span aria-hidden="true" className="text-[#595346]">·</span>
              <span>Sanctuary & Salon Atelier</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-[#f8f5f0] tracking-tight [text-wrap:balance]">
              Where therapeutic calm meets bespoke grandeur.
            </h1>

            {/* Refined Body */}
            <p className="text-base sm:text-lg text-[#b8b0a2] leading-relaxed max-w-xl">
              Escape the frantic pace of the capital. Levish brings signature body massages, heated volcanic stone rituals, Japanese scalp spas, and couture hair artistry to the heart of I-8 Markaz.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs tracking-wider uppercase font-semibold text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d8be96] rounded transition-all shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                Reserve Treatment
              </button>
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-xs tracking-wider uppercase font-medium text-[#e4ded5] hover:text-white border border-[#3d372e] hover:border-[#c8a97e]/60 rounded transition-colors whitespace-nowrap bg-[#151411]/50 backdrop-blur-sm"
              >
                Browse Price List
              </button>
            </div>

            {/* Quick trust notes */}
            <div className="pt-2 flex items-center gap-6 text-xs text-[#8f877a]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c8a97e]" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c8a97e]" />
                <span>100% Organic Oils</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-[#2b2721] bg-[#141310] shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Tranquil luxury massage suite at Levish Spa in I-8 Markaz, Islamabad"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Subtle contrast scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b]/90 via-[#0e0d0b]/25 to-transparent" />

              {/* In-photo status caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] tracking-wider uppercase text-[#c8a97e] font-medium">
                    Private Sanctuary Room
                  </div>
                  <div className="text-sm font-medium text-[#f5f2ec]">
                    Aroma suites with heated basalt stones & rain shower
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-[#a39c8e] block">Session Rates From</span>
                  <span className="font-mono text-base font-semibold text-[#f8f5f0] tabular-nums">
                    Rs. 3,500
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI & Proof Strip in full-width row below hero split */}
        <div className="mt-14 pt-8 border-t border-[#23201a] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#c8a97e]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Location</span>
            </div>
            <p className="text-sm font-medium text-[#f0ebe3]">I-8 Markaz, Islamabad</p>
            <p className="text-xs text-[#8c8477]">2nd Floor, Al-Baber Centre</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#c8a97e]">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Hours</span>
            </div>
            <p className="text-sm font-medium text-[#f0ebe3]">10:00 AM – 10:00 PM</p>
            <p className="text-xs text-[#8c8477]">Open 7 Days a Week</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#c8a97e]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Experience</span>
            </div>
            <p className="text-sm font-medium text-[#f0ebe3]">Certified Specialists</p>
            <p className="text-xs text-[#8c8477]">Male & Female Therapists</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#c8a97e]">
              <Compass className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Reputation</span>
            </div>
            <p className="text-sm font-medium text-[#f0ebe3] font-mono tabular-nums">4.9 / 5.0 Star Rating</p>
            <p className="text-xs text-[#8c8477]">840+ Islamabad Clients</p>
          </div>
        </div>

      </div>
    </section>
  );
};
