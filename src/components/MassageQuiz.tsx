import React, { useState } from 'react';
import { Compass, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/services';

interface MassageQuizProps {
  onSelectService: (service: ServiceItem) => void;
}

export const MassageQuiz: React.FC<MassageQuizProps> = ({ onSelectService }) => {
  const [goal, setGoal] = useState<'tension' | 'calm' | 'aches' | 'detox'>('tension');
  const [pressure, setPressure] = useState<'firm' | 'medium' | 'gentle'>('firm');
  const [duration, setDuration] = useState<'express' | 'standard' | 'luxury'>('standard');

  // Match optimal service based on inputs
  const recommendedService = React.useMemo(() => {
    if (goal === 'aches' || (goal === 'tension' && pressure === 'firm')) {
      return SERVICES_DATA.find((s) => s.id === 'deep-tissue-massage') || SERVICES_DATA[0];
    }
    if (goal === 'calm' && pressure === 'gentle') {
      return SERVICES_DATA.find((s) => s.id === 'swedish-massage') || SERVICES_DATA[1];
    }
    if (goal === 'detox' || duration === 'luxury') {
      return SERVICES_DATA.find((s) => s.id === 'hot-stone-massage') || SERVICES_DATA[2];
    }
    if (duration === 'express') {
      return SERVICES_DATA.find((s) => s.id === 'head-neck-shoulder-express') || SERVICES_DATA[0];
    }
    return SERVICES_DATA.find((s) => s.id === 'aromatherapy-candle-massage') || SERVICES_DATA[0];
  }, [goal, pressure, duration]);

  return (
    <section id="massage-guide" className="py-16 bg-[#13120f] border-y border-[#26231c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8a97e] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Wellness Diagnostic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f6f3ee]">
            Find Your Ideal Massage Therapy
          </h2>
          <p className="text-sm text-[#a69f91]">
            Not sure whether Swedish, Hot Stone, or Deep Tissue suits your current physical state? Select your preferences below for an instant recommendation.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="bg-[#171612] border border-[#2d2922] rounded-2xl p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Questions Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Question 1: Goal */}
              <div className="space-y-2.5">
                <label className="text-xs tracking-wider uppercase text-[#beb8ac] font-medium block">
                  1. What is your primary wellness goal today?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'tension', label: 'Chronic Stiff Knots' },
                    { id: 'calm', label: 'Mental Calm & Sleep' },
                    { id: 'aches', label: 'Gym / Muscle Fatigue' },
                    { id: 'detox', label: 'Detox & Body Warmth' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoal(opt.id as any)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-all border ${
                        goal === opt.id
                          ? 'bg-[#29241b] border-[#c8a97e] text-[#f8f5f0]'
                          : 'bg-[#1a1915] border-[#29251e] text-[#8e877a] hover:text-[#d6cfc3]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Pressure */}
              <div className="space-y-2.5">
                <label className="text-xs tracking-wider uppercase text-[#beb8ac] font-medium block">
                  2. What pressure intensity do you prefer?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'gentle', label: 'Gentle / Relaxing' },
                    { id: 'medium', label: 'Medium / Balanced' },
                    { id: 'firm', label: 'Firm / Deep Knead' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setPressure(opt.id as any)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg text-center transition-all border ${
                        pressure === opt.id
                          ? 'bg-[#29241b] border-[#c8a97e] text-[#f8f5f0]'
                          : 'bg-[#1a1915] border-[#29251e] text-[#8e877a] hover:text-[#d6cfc3]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Time Available */}
              <div className="space-y-2.5">
                <label className="text-xs tracking-wider uppercase text-[#beb8ac] font-medium block">
                  3. Preferred appointment duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'express', label: '35 min (Express)' },
                    { id: 'standard', label: '60 min (Standard)' },
                    { id: 'luxury', label: '75+ min (Extended)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDuration(opt.id as any)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg text-center transition-all border ${
                        duration === opt.id
                          ? 'bg-[#29241b] border-[#c8a97e] text-[#f8f5f0]'
                          : 'bg-[#1a1915] border-[#29251e] text-[#8e877a] hover:text-[#d6cfc3]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-5 bg-[#1b1914] border border-[#3b3427] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#c8a97e] font-semibold">
                  Personalized Match
                </span>
                <span className="text-xs text-[#8c8477]">100% Tailored</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#fbf8f3] font-medium">
                  {recommendedService.name}
                </h3>
                <p className="text-xs text-[#a9a295] leading-relaxed line-clamp-3">
                  {recommendedService.description}
                </p>
              </div>

              <div className="pt-2 flex items-baseline justify-between border-t border-[#2d2820]">
                <div>
                  <span className="text-[11px] text-[#8c8477] uppercase block">Session Price</span>
                  <span className="font-mono text-lg font-bold text-[#f5f1eb] tabular-nums">
                    Rs. {recommendedService.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#8c8477] uppercase block">Duration</span>
                  <span className="font-mono text-xs text-[#d6cfc3] tabular-nums">
                    {recommendedService.duration}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectService(recommendedService)}
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#0e0d0b] bg-[#c8a97e] hover:bg-[#d6ba92] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Book This Massage</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#827a6e]">
                Conducted in private suites with aromatherapy diffusers
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
