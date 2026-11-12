'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/testimonialsData';
import { Quote, Star, CheckCircle, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <Shield className="w-4 h-4 text-gold-600" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Stories of Restored Mobility
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Real feedback from patients treated by Dr. Pradeepta Kumar Maharana for robotic joint surgery, sports ligament injuries, and conservative care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-surface-light border border-slate-200/90 rounded-2xl p-8 hover:border-gold-500/50 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gold-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-500/30" />
                </div>

                <p className="text-base font-heading italic text-navy-900 font-semibold mb-3 leading-snug">
                  "{test.quote}"
                </p>

                <p className="text-xs text-textSecondary leading-relaxed font-light mb-6">
                  {test.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy-900 flex items-center space-x-1.5">
                    <span>{test.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <span className="text-[11px] text-slate-500 block">{test.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-gold-700 bg-gold-500/15 px-2.5 py-1 rounded-full">
                    {test.treatmentType}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">{test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

