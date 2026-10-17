import React from 'react';
import { Sparkles, Calendar, Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0e0d0b]/90 backdrop-blur-md border-b border-[#26231e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <span className="font-serif text-2xl tracking-[0.2em] font-normal text-[#f4efe8] group-hover:text-[#c8a97e] transition-colors">
              LEVISH
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a97e] font-sans font-medium border-l border-[#3a352c] pl-2.5">
              Spa & Salon
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-[#a9a296]">
            <a href="#services" className="hover:text-[#f4efe8] transition-colors whitespace-nowrap shrink-0">
              Treatments
            </a>
            <a href="#massage-guide" className="hover:text-[#f4efe8] transition-colors whitespace-nowrap shrink-0">
              Massage Selector
            </a>
            <a href="#packages" className="hover:text-[#f4efe8] transition-colors whitespace-nowrap shrink-0">
              Spa Rituals
            </a>
            <a href="#location" className="hover:text-[#f4efe8] transition-colors whitespace-nowrap shrink-0">
              I-8 Markaz
            </a>
            <a href="#testimonials" className="hover:text-[#f4efe8] transition-colors whitespace-nowrap shrink-0">
              Reviews
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg text-[#d8d2c6] hover:text-[#f4efe8] hover:bg-[#1f1d19] transition-colors"
                title="View Selected Treatments"
                aria-label="View Selected Treatments"
              >
                <ShoppingBag className="w-5 h-5 text-[#c8a97e]" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#c8a97e] text-[#0e0d0b] text-[11px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d6ba92] rounded transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Ritual</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#a9a296] hover:text-[#f4efe8] hover:bg-[#1f1d19] rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#26231e] bg-[#12110e] px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm tracking-wide text-[#c4bdb2]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c8a97e] transition-colors"
            >
              Treatments & Services
            </a>
            <a
              href="#massage-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c8a97e] transition-colors"
            >
              Massage Therapy Advisor
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c8a97e] transition-colors"
            >
              Curated Spa Packages
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c8a97e] transition-colors"
            >
              I-8 Markaz Sanctuary & Timings
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c8a97e] transition-colors"
            >
              Islamabad Guest Reviews
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
