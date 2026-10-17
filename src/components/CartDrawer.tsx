import React from 'react';
import { X, Trash2, ArrowRight, Sparkles, Clock, Plus } from 'lucide-react';
import { ServiceItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ServiceItem[];
  onRemoveItem: (id: string) => void;
  onProceedToBooking: () => void;
  onAddSpecialRitual: (item: ServiceItem) => void;
}

const SPA_ADDONS: ServiceItem[] = [
  {
    id: 'addon-steam-sauna',
    name: 'Private Eucalyptus Herbal Steam Bath',
    category: 'massage',
    categoryLabel: 'Ritual Add-on',
    duration: '20 min',
    price: 1500,
    description: 'Post-massage detoxifying steam cabin infused with eucalyptus & peppermint.',
    benefits: ['Opens pores', 'Prolongs muscle relaxation'],
  },
  {
    id: 'addon-jasmine-oil',
    name: 'Saffron & Wild Jasmine Cold-Pressed Oil Upgrade',
    category: 'massage',
    categoryLabel: 'Aroma Upgrade',
    duration: 'Integrated',
    price: 1200,
    description: 'Rare therapeutic botanical oil blend imported for deep hydration.',
    benefits: ['Intense nourishment', 'Subtle natural fragrance'],
  },
];

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onProceedToBooking,
  onAddSpecialRitual,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#141310] border-l border-[#2e2921] w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#242019] flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#c8a97e] font-semibold">
              Personalized Sanctuary Bundle
            </span>
            <h3 className="font-serif text-xl text-[#f7f4ee]">
              Your Selected Ritual ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8f887c] hover:text-white transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Items */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-sm text-[#9e9688]">No treatments currently added to your ritual.</p>
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-wider text-[#c8a97e] hover:underline"
              >
                Browse Treatments
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1b1915] border border-[#2b271f] rounded-xl p-4 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#c8a97e] block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-sm font-semibold text-[#f5f2ec]">{item.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-[#878073]">
                      <Clock className="w-3.5 h-3.5 text-[#c8a97e]" />
                      <span className="font-mono tabular-nums">{item.duration}</span>
                    </div>
                  </div>

                  <div className="text-right space-y-2 shrink-0">
                    <span className="font-mono text-sm font-semibold text-[#f8f5f0] tabular-nums block">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#7c7569] hover:text-red-400 transition-colors p-1"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Add-On Upgrades */}
          {items.length > 0 && (
            <div className="pt-4 border-t border-[#23201a] space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d1cabf] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#c8a97e]" />
                <span>Recommended Enhancements</span>
              </div>
              <div className="space-y-2">
                {SPA_ADDONS.map((addon) => {
                  const alreadyAdded = items.some((i) => i.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      className="p-3 rounded-lg bg-[#181612] border border-[#26221a] flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <span className="text-[#eee8dd] font-medium block">{addon.name}</span>
                        <span className="font-mono text-[#c8a97e] tabular-nums">
                          + Rs. {addon.price.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => onAddSpecialRitual(addon)}
                        disabled={alreadyAdded}
                        className={`px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                          alreadyAdded
                            ? 'bg-[#2b2720] text-[#787164] cursor-not-allowed'
                            : 'bg-[#24211a] hover:bg-[#332e24] text-[#e8e2d8]'
                        }`}
                      >
                        {alreadyAdded ? 'Added' : '+ Add'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Totals and CTA */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#242019] bg-[#12110e] space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-wider text-[#8a8376]">Combined Investment</span>
              <span className="font-mono text-2xl font-bold text-[#f8f5f0] tabular-nums">
                Rs. {totalAmount.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToBooking();
              }}
              className="w-full py-3.5 px-4 rounded-lg bg-[#c8a97e] hover:bg-[#d8be97] text-[#0e0d0b] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Schedule This Ritual</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
