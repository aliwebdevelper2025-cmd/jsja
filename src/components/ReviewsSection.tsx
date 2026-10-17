import React from 'react';
import { Star, Quote, Check } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/services';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#24211b]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8a97e] font-semibold">
            <span>Verified Islamabad Patrons</span>
            <span aria-hidden="true">·</span>
            <span>Client Voices</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ee]">
            Words From Our Guests
          </h2>
          <p className="text-sm sm:text-base text-[#a39c8f] max-w-2xl leading-relaxed">
            Read authentic impressions from residents across Islamabad who rely on Levish for therapeutic recovery and aesthetic excellence.
          </p>
        </div>

        {/* Aggregated Score Strip */}
        <div className="bg-[#171612] border border-[#2b271f] rounded-xl px-5 py-4 shrink-0 flex items-center gap-4">
          <div className="text-3xl font-serif text-[#f8f5f0] font-bold font-mono tabular-nums">
            4.9
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-[#c8a97e]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <div className="text-xs text-[#8c8477]">
              Over 840 Verified Ratings in Islamabad
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="bg-[#151410] border border-[#29251e] rounded-xl p-7 flex flex-col justify-between space-y-6 hover:border-[#3d372c] transition-colors"
          >
            <div className="space-y-4">
              {/* Star rating */}
              <div className="flex items-center gap-1 text-[#c8a97e]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Treatment unboxed kicker */}
              <div className="text-xs uppercase tracking-wider text-[#c8a97e] font-medium">
                {t.treatment}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[#b8b0a2] leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>

            {/* Author details */}
            <div className="pt-4 border-t border-[#23201a] flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-[#f5f2ec] block">{t.author}</span>
                <span className="text-[#878073]">{t.location}</span>
              </div>
              <span className="text-[#6e685c] font-mono tabular-nums">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
