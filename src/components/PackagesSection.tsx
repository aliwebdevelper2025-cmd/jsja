import React from 'react';
import { Sparkles, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA, MASSAGE_IMAGE } from '../data/services';

interface PackagesSectionProps {
  onBookPackage: (service: ServiceItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onBookPackage }) => {
  const packages = SERVICES_DATA.filter((s) => s.category === 'packages');

  return (
    <section id="packages" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#24211b]">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#c8a97e] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Ritual Bundles</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ee]">
          Signature Spa Journeys
        </h2>
        <p className="text-sm sm:text-base text-[#a8a194] leading-relaxed">
          Comprehensive multi-treatment sessions combining deep body massages, aesthetic skincare facials, and grooming in secluded VIP chambers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => {
          const isFeatured = idx === 0;

          return (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? 'bg-[#181611] border-2 border-[#c8a97e]/60 shadow-2xl scale-[1.02]'
                  : 'bg-[#14130f] border border-[#2b271f] hover:border-[#423c31]'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c8a97e] text-[#0e0d0b] text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Requested in I-8
                </div>
              )}

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className="text-[11px] tracking-wider uppercase text-[#c8a97e] font-medium">
                    {pkg.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl text-[#fbf8f2] leading-snug">
                    {pkg.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-bold text-[#fbf8f3] tabular-nums">
                    Rs. {pkg.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#8c8477] font-mono">/ {pkg.duration}</span>
                </div>

                <p className="text-xs text-[#aba395] leading-relaxed">
                  {pkg.description}
                </p>

                <div className="pt-4 border-t border-[#29241b] space-y-2.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#dcd6ca] font-semibold">
                    Package Inclusions:
                  </div>
                  <ul className="space-y-2 text-xs text-[#b0a99c]">
                    {pkg.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c8a97e] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#23201a]">
                <button
                  onClick={() => onBookPackage(pkg)}
                  className={`w-full py-3 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-[#c8a97e] text-[#0e0d0b] hover:bg-[#d8be97]'
                      : 'bg-[#1e1c17] text-[#ebe5db] hover:bg-[#2b2720] border border-[#352f25]'
                  }`}
                >
                  <span>Reserve This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-[#151410] border border-[#2b271f] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#201d16] text-[#c8a97e] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#f5f2ec]">Bespoke Group & Bridal / Groom Packages</h4>
            <p className="text-xs text-[#9c9486]">
              Planning a pre-wedding wellness day or corporate executive retreat in Islamabad? Contact our I-8 concierge for custom packages.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/923008555188?text=Hello%20Levish%20I-8%20Markaz,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20group/bridal%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#c8a97e] border border-[#c8a97e]/60 hover:bg-[#c8a97e]/10 rounded-lg transition-colors whitespace-nowrap shrink-0"
        >
          WhatsApp Concierge
        </a>
      </div>
    </section>
  );
};
