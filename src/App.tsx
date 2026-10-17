import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCatalog } from './components/ServiceCatalog';
import { MassageQuiz } from './components/MassageQuiz';
import { PackagesSection } from './components/PackagesSection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CartDrawer } from './components/CartDrawer';
import { ServiceItem, BookingDetails } from './types';
import { SERVICES_DATA, BRANCH_INFO } from './data/services';
import { MessageSquare, Check, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<ServiceItem[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bookingInitialServices, setBookingInitialServices] = useState<ServiceItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleBookSingle = (service: ServiceItem) => {
    setBookingInitialServices([service]);
    setIsBookingOpen(true);
  };

  const handleAddToCart = (service: ServiceItem) => {
    const exists = cartItems.some((i) => i.id === service.id);
    if (exists) {
      setCartItems((prev) => prev.filter((i) => i.id !== service.id));
      showToast(`Removed "${service.name}" from your ritual.`);
    } else {
      setCartItems((prev) => [...prev, service]);
      showToast(`Added "${service.name}" to your customized ritual.`);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed "${item.name}"`);
    }
  };

  const handleProceedFromCartToBooking = () => {
    setIsCartOpen(false);
    setBookingInitialServices(cartItems);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    if (cartItems.length > 0) {
      setBookingInitialServices(cartItems);
    } else {
      // Default to Deep Tissue Massage
      setBookingInitialServices([SERVICES_DATA[0]]);
    }
    setIsBookingOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0d0b] text-[#ede8e1] flex flex-col selection:bg-[#c8a97e] selection:text-black">
      {/* Top Bar with Strict Contract */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenGeneralBooking}
          onExploreServices={scrollToServices}
        />

        <ServiceCatalog
          onBookSingle={handleBookSingle}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItems.map((i) => i.id)}
        />

        <MassageQuiz onSelectService={handleBookSingle} />

        <PackagesSection onBookPackage={handleBookSingle} />

        <LocationSection />

        <ReviewsSection />
      </main>

      {/* Clean Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServices={bookingInitialServices}
        onBookingComplete={(booking) => {
          // Clear cart on booking confirmation
          setCartItems([]);
        }}
      />

      {/* Cart / Customized Ritual Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onProceedToBooking={handleProceedFromCartToBooking}
        onAddSpecialRitual={(addon) => {
          setCartItems((prev) => [...prev, addon]);
          showToast(`Added upgrade: ${addon.name}`);
        }}
      />

      {/* Floating Discrete WhatsApp Concierge Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-30">
        <a
          href={`https://wa.me/${BRANCH_INFO.whatsapp}?text=Hello%20Levish%20I-8%20Markaz,%20I%20would%20like%20to%20inquire%20about%20your%20spa%20and%20massage%20treatments.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#0e0d0b] font-semibold text-xs tracking-wide shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all"
          title="Direct WhatsApp with I-8 Markaz Branch"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline font-sans">WhatsApp I-8 Concierge</span>
        </a>
      </aside>

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#1d1b16] border border-[#3e372b] px-4 py-3 rounded-xl shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="w-2 h-2 rounded-full bg-[#c8a97e]" />
          <span className="text-xs text-[#eee8dd]">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#8c8477] hover:text-white ml-2 text-xs"
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
