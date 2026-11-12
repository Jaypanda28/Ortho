'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TREATMENTS, Treatment } from '@/data/treatmentsData';
import {
  Activity,
  Sparkles,
  Shield,
  Trophy,
  Zap,
  Compass,
  HeartPulse,
  ArrowRight,
  X,
  Calendar,
  CheckCircle2,
  Clock,
  HelpCircle
} from 'lucide-react';

interface TreatmentsProps {
  onOpenBooking: (category?: string) => void;
}

export default function Treatments({ onOpenBooking }: TreatmentsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'surgical' | 'sports' | 'spine' | 'non-surgical'>('all');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="treatments" className="py-20 bg-surface-light relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <Activity className="w-4 h-4" />
            <span>Comprehensive Orthopaedic Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Specialized Care for Every Joint & Bone
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Tap any treatment to view the clinical symptoms, diagnostic approach, conservative alternatives, and surgical details.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Treatments' },
            { id: 'surgical', label: 'Joint Replacement & Arthroscopy' },
            { id: 'sports', label: 'Sports Medicine' },
            { id: 'non-surgical', label: 'Non-Surgical Joint Care' },
            { id: 'spine', label: 'Spine & Back' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                selectedCategory === tab.id
                  ? 'bg-navy-900 text-white shadow-md border border-gold-500/50'
                  : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-gold-500/60 transition-all duration-300 shadow-sm hover:shadow-luxury flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-gold-400 group-hover:border-gold-500 transition-colors duration-300">
                    {getIcon(treatment.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/20">
                    {treatment.badge}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition">
                  {treatment.title}
                </h3>
                <p className="text-xs text-gold-600 font-medium mb-3">
                  {treatment.tagline}
                </p>
                <p className="text-sm text-textSecondary leading-relaxed mb-6 font-light">
                  {treatment.shortDesc}
                </p>

                {/* Key Points Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-6">
                  {treatment.symptoms.slice(0, 2).map((symp, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span className="truncate">{symp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalTreatment(treatment)}
                  className="text-xs font-semibold text-navy-900 hover:text-gold-600 flex items-center space-x-1 transition group-hover:translate-x-0.5"
                >
                  <span>Clinical Details & FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                </button>

                <button
                  onClick={() => onOpenBooking(treatment.title)}
                  className="text-xs font-semibold text-gold-700 hover:text-navy-900 px-3 py-1.5 rounded-lg bg-gold-50 hover:bg-gold-100 transition"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Treatment Modal */}
      <AnimatePresence>
        {activeModalTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden my-8"
            >
              {/* Header */}
              <div className="bg-navy-900 text-white p-6 sm:p-8 relative border-b border-gold-500/20">
                <button
                  onClick={() => setActiveModalTreatment(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {activeModalTreatment.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                  {activeModalTreatment.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {activeModalTreatment.tagline}
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Overview & Clinical Approach
                  </h4>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {activeModalTreatment.fullDesc}
                  </p>
                </div>

                {/* Common Symptoms */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    Common Symptoms Evaluated
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalTreatment.symptoms.map((s, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment & Diagnostic Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-navy-50 p-4 rounded-xl border border-navy-100">
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                      Diagnostic Modalities
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {activeModalTreatment.diagnosticApproach.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-gold-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gold-50/70 p-4 rounded-xl border border-gold-200">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gold-900 mb-2">
                      Treatment Modalities
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {activeModalTreatment.treatmentOptions.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-gold-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recovery & When to Consult */}
                <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-navy-900 block mb-1">Recovery Pathway:</span>
                    <p className="text-slate-600">{activeModalTreatment.recoveryTimeline}</p>
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block mb-1">When Specialist Care is Needed:</span>
                    <p className="text-slate-600">{activeModalTreatment.whenToConsult}</p>
                  </div>
                </div>

                {/* FAQs */}
                {activeModalTreatment.faqs.length > 0 && (
                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900">
                      Frequently Asked Questions
                    </span>
                    {activeModalTreatment.faqs.map((f, i) => (
                      <div key={i} className="bg-slate-50 p-3 rounded-lg text-xs">
                        <span className="font-semibold text-navy-900 block">{f.q}</span>
                        <p className="text-slate-600 mt-1">{f.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Evening OPD Consultations: 6:00 PM – 10:00 PM
                </span>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalTreatment(null)}
                    className="py-2.5 px-4 text-xs font-medium text-slate-600 hover:text-navy-900"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = activeModalTreatment.title;
                      setActiveModalTreatment(null);
                      onOpenBooking(title);
                    }}
                    className="flex-1 sm:flex-none py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider font-semibold text-navy-950 gold-gradient-bg shadow flex items-center justify-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book For This Service</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

