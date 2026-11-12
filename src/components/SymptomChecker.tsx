'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SYMPTOMS_GUIDE } from '@/data/treatmentsData';
import { HelpCircle, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface SymptomCheckerProps {
  onOpenBooking: (category?: string) => void;
}

export default function SymptomChecker({ onOpenBooking }: SymptomCheckerProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeSymptom = SYMPTOMS_GUIDE[selectedIdx];

  return (
    <section className="py-16 bg-surface-light border-y border-slate-200">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Patient Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900">
            Not Sure? Start With What You Feel
          </h2>
          <p className="mt-2 text-sm sm:text-base text-textSecondary">
            Describe the problem, not the medical name of a treatment. Select your symptom below to see the recommended clinical pathway.
          </p>
        </div>

        {/* Symptoms Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SYMPTOMS_GUIDE.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.symptom}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-navy-900 border-gold-500 text-white shadow-lg'
                    : 'bg-white border-slate-200 hover:border-gold-400/60 text-navy-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-gold-400' : 'text-gold-600'}`}>
                    Symptom {idx + 1}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-gold-400" />}
                </div>
                <h3 className={`font-semibold text-base mt-2 mb-1 ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                  {item.symptom}
                </h3>
                <p className={`text-xs line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.description}
                </p>
                <div className="mt-3 flex items-center text-xs font-medium space-x-1">
                  <span className={isSelected ? 'text-gold-300' : 'text-navy-700'}>
                    Usually: {item.recommendation}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-gold-400' : 'text-gold-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlighted Result Box */}
        {activeSymptom && (
          <motion.div
            key={activeSymptom.symptom}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-luxury flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Recommended Orthopaedic Pathway
              </span>
              <h4 className="text-2xl font-heading font-bold text-navy-900">
                {activeSymptom.recommendation}
              </h4>
              <p className="text-sm text-textSecondary leading-relaxed">
                {activeSymptom.description} We recommend bringing any recent X-rays or MRI films. Dr. Maharana assesses conservative alternatives first before any surgical consideration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenBooking(activeSymptom.recommendation)}
                className="py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow transition flex items-center justify-center space-x-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book For This Condition</span>
              </button>
              <a
                href="#treatments"
                className="py-3 px-5 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-900 hover:text-gold-600 border border-slate-300 hover:border-gold-400 text-center transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

