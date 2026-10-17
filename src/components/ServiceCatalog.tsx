import React, { useState, useMemo } from 'react';
import { Search, Clock, Sparkles, Plus, Check, Info, Heart, ArrowRight } from 'lucide-react';
import { ServiceItem, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/services';

interface ServiceCatalogProps {
  onBookSingle: (service: ServiceItem) => void;
  onAddToCart: (service: ServiceItem) => void;
  cartItemIds: string[];
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
  onBookSingle,
  onAddToCart,
  cartItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailItem, setActiveDetailItem] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'massage', label: 'Spa & Body Massages' },
    { id: 'salon', label: 'Salon & Hair' },
    { id: 'facial', label: 'Facials & Skincare' },
    { id: 'grooming', label: 'Hands & Feet' },
    { id: 'packages', label: 'Curated Packages' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8a97e] font-semibold">
            <span>Ritual Menu</span>
            <span aria-hidden="true">·</span>
            <span>I-8 Markaz Branch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f5f2ec] tracking-tight">
            Curated Services & Therapies
          </h2>
          <p className="text-sm sm:text-base text-[#a8a193] max-w-2xl leading-relaxed">
            Every session is conducted in serene private chambers with customizable organic essential oils, steam therapies, and certified wellness practitioners.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f887b]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search massages, facials..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#171612] border border-[#2e2a22] rounded-lg text-sm text-[#eee9e0] placeholder-[#7d7568] focus:outline-none focus:border-[#c8a97e] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#a9a296] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Interactive Category Segmented Controls (buttons with click handlers) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#23201a]">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-[#c8a97e] text-[#0e0d0b] font-semibold shadow-sm'
                : 'text-[#9c9486] hover:text-[#f4efe8] hover:bg-[#1a1814]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16 bg-[#141310] border border-[#26231d] rounded-xl p-8">
          <p className="text-base text-[#b8b0a2] mb-3">No treatments match "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs uppercase tracking-wider text-[#c8a97e] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Services Grid (3 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredServices.map((service) => {
          const isAdded = cartItemIds.includes(service.id);

          return (
            <article
              key={service.id}
              className="group bg-[#151411] border border-[#2b2720] hover:border-[#4a4235] rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual slot if image exists */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden bg-[#1f1d19]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151411] via-[#151411]/20 to-transparent" />
                    
                    {/* Unboxed subtle metadata at top right */}
                    <div className="absolute top-3 right-3 text-[11px] tracking-wider uppercase font-medium text-[#c8a97e] bg-[#0e0d0b]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#352f25]">
                      {service.categoryLabel}
                    </div>
                  </div>
                )}

                {/* Content body */}
                <div className="p-6 space-y-3.5">
                  {/* Clean unboxed metadata row */}
                  <div className="flex items-center gap-2 text-xs text-[#8f887b]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c8a97e]" />
                      <span className="font-mono tabular-nums">{service.duration}</span>
                    </span>
                    {service.pressureLevel && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{service.pressureLevel} Pressure</span>
                      </>
                    )}
                    {service.genderSuitability && service.genderSuitability !== 'All' && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{service.genderSuitability}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#f7f4ee] font-medium leading-snug group-hover:text-[#c8a97e] transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#a39c8f] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Benefit highlights */}
                  <ul className="pt-2 space-y-1.5 border-t border-[#222019]">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-[#beb7ab] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#c8a97e] shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Price and Interactive CTA Actions */}
              <div className="p-6 pt-0 border-t border-[#23201a] mt-4 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-[#857e72] uppercase tracking-wider block">Investment</span>
                  <div className="font-mono text-lg font-semibold text-[#f8f5f0] tabular-nums">
                    Rs. {service.price.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveDetailItem(service)}
                    className="p-2 text-[#9a9284] hover:text-[#eee9e0] hover:bg-[#201d18] rounded-md transition-colors"
                    title="View treatment details & steps"
                    aria-label="View treatment details"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onAddToCart(service)}
                    className={`p-2 rounded-md transition-all ${
                      isAdded
                        ? 'bg-[#2b271f] text-[#c8a97e] border border-[#524838]'
                        : 'text-[#d6cfc3] hover:text-white bg-[#1f1d18] hover:bg-[#2b2821]'
                    }`}
                    title={isAdded ? 'Remove from customized ritual' : 'Add to customized ritual'}
                    aria-label={isAdded ? 'Added to ritual' : 'Add to ritual'}
                  >
                    {isAdded ? <Check className="w-4 h-4 text-[#c8a97e]" /> : <Plus className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => onBookSingle(service)}
                    className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d9bfa0] rounded-md transition-colors whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Service Detail Modal */}
      {activeDetailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#151411] border border-[#332e25] rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#c8a97e] font-medium">
                  {activeDetailItem.categoryLabel}
                </div>
                <h3 className="font-serif text-2xl text-[#f8f5f0]">
                  {activeDetailItem.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveDetailItem(null)}
                className="text-[#8c8477] hover:text-white text-lg p-1"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#b8b0a2] leading-relaxed">
              {activeDetailItem.description}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#1b1915] border border-[#2b271f] rounded-lg text-xs">
              <div>
                <span className="text-[#878073] block mb-1">Standard Duration</span>
                <span className="font-mono text-sm text-[#eee9e0] font-medium tabular-nums">{activeDetailItem.duration}</span>
              </div>
              <div>
                <span className="text-[#878073] block mb-1">Price in I-8 Markaz</span>
                <span className="font-mono text-sm text-[#c8a97e] font-semibold tabular-nums">
                  Rs. {activeDetailItem.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-[#d6cfc3] font-semibold">
                Core Physiological & Wellness Benefits
              </h4>
              <ul className="space-y-2 text-xs text-[#a9a296]">
                {activeDetailItem.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#c8a97e] font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#24211b] flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  onAddToCart(activeDetailItem);
                  setActiveDetailItem(null);
                }}
                className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#d6cfc3] hover:text-white bg-[#1f1d18] rounded-md transition-colors"
              >
                {cartItemIds.includes(activeDetailItem.id) ? 'In Your Ritual' : '+ Add to Ritual'}
              </button>
              <button
                onClick={() => {
                  const item = activeDetailItem;
                  setActiveDetailItem(null);
                  onBookSingle(item);
                }}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d9bfa0] rounded-md transition-colors"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
