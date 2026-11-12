'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Search, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export default function PatientJourney({ onOpenBooking }: PatientJourneyProps) {
  const steps = [
    {
      number: '01',
      title: 'First, We Listen',
      subtitle: 'Your Story & Mobility Goals',
      desc: 'We take the time to understand your pain, daily physical demands, and what activities you want to return to doing. We pace the consultation around you.',
      icon: <Headphones className="w-6 h-6 text-gold-600" />
    },
    {
      number: '02',
      title: 'Then, We Examine',
      subtitle: 'Precise Clinical & Imaging Review',
      desc: 'Detailed physical examination of joint stability, gait, and thorough review of your digital X-rays or MRI films with a clear, jargon-free explanation.',
      icon: <Search className="w-6 h-6 text-gold-600" />
    },
    {
      number: '03',
      title: 'Together, We Plan',
      subtitle: 'Transparent Non-Surgical & Surgical Options',
      desc: 'We map out treatment choices, recovery timelines, and costs before you decide. Surgery is never the only option; conservative care is prioritized.',
      icon: <Sparkles className="w-6 h-6 text-gold-600" />
    },
    {
      number: '04',
      title: 'Always, We Support',
      subtitle: 'Dedicated Follow-Up & Rehabilitation',
      desc: 'From physiotherapy protocols and joint protection exercises to long-term follow-ups, our clinic team stands beside you through your full recovery.',
      icon: <HeartHandshake className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <section id="patient-guide" className="py-24 bg-surface-light border-t border-slate-200">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            The Patient Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Committed to Better Mobility & Better Care
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            From the very first question to your final follow-up, your comfort and active recovery guide every clinical decision.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-gold-500/60 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-heading font-bold text-gold-500/40 group-hover:text-gold-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold text-gold-600 block mb-3">
                  {step.subtitle}
                </span>
                <p className="text-xs text-textSecondary leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-[11px] text-slate-500 group-hover:text-navy-900 font-medium">
                <span>Phase {step.number} of Care</span>
                <ArrowRight className="w-3 h-3 ml-1 text-gold-500" />
              </div>
            </div>
          ))}
        </div>

        {/* What to Bring Guide Box */}
        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Preparing For Your Visit
            </span>
            <h4 className="text-xl font-heading font-bold text-white">
              What Should You Bring to the Clinic?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Please carry previous medical reports, prescriptions, physical X-ray films, CT scans, and MRI discs if available. Comfortable loose clothing is recommended for joint examination.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow shrink-0"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

