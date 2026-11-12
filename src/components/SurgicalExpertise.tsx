'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, CheckCircle2, Award, Zap, Layers, Activity } from 'lucide-react';

interface SurgicalExpertiseProps {
  onOpenBooking: (category?: string) => void;
}

export default function SurgicalExpertise({ onOpenBooking }: SurgicalExpertiseProps) {
  const surgicalProcedures = [
    {
      title: 'Robotic-Assisted Knee Replacement',
      highlight: 'Sub-Millimeter Precision',
      desc: 'Real-time 3D optical tracking allows dynamic ligament balancing and kinematic alignment, minimizing tissue injury for faster post-operative discharge.',
      tag: 'Gold Standard',
    },
    {
      title: 'Unicondylar (Partial) Knee Replacement',
      highlight: 'ACL & PCL Preserving',
      desc: 'Resurfacing only the damaged compartment while retaining the patient’s natural cruciate ligaments for normal joint proprioception.',
      tag: 'Rapid Recovery',
    },
    {
      title: 'Arthroscopic ACL & Ligament Reconstruction',
      highlight: 'Keyhole Athletic Restoration',
      desc: 'High-definition endoscopic reconstruction of torn cruciate ligaments using anatomical autografts for high-stability return to sports.',
      tag: 'Minimally Invasive',
    },
    {
      title: 'Meniscus Repair & Biological Preservation',
      highlight: 'Joint Cushion Protection',
      desc: 'Preserving the natural shock-absorbing meniscus with all-inside suture anchors rather than resection, protecting against long-term arthritis.',
      tag: 'Tissue Sparing',
    },
    {
      title: 'Shoulder Arthroscopy & Rotator Cuff Repair',
      highlight: 'Nocturnal Pain Elimination',
      desc: 'All-arthroscopic double-row tendon anchoring to bone without separating the overlying deltoid muscle, restoring arm elevation.',
      tag: 'Keyhole Repair',
    },
    {
      title: 'Complex Fracture Fixation & Trauma',
      highlight: 'Rigid Biological Healing',
      desc: 'Intramedullary interlocking nailing and anatomical titanium locking plates for accelerated union of complex bone fractures.',
      tag: 'Trauma Care',
    },
  ];

  return (
    <section id="surgery" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 navy-hero-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/15 border border-gold-400/30 px-3.5 py-1.5 rounded-full mb-3">
            <Cpu className="w-4 h-4 text-gold-400" />
            <span>Fellowship-Trained Surgical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Precision in Surgery. <span className="gold-gradient-text italic font-normal">Excellence in Recovery.</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300 font-light">
            Every procedure is planned with digital precision and biological tissue preservation to ensure minimal pain, anatomical restoration, and rapid return to independent movement.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {surgicalProcedures.map((proc, idx) => (
            <div
              key={proc.title}
              className="bg-navy-800/90 rounded-2xl p-7 border border-gold-500/25 hover:border-gold-400/70 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
                    {proc.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-gold-400 transition">
                  {proc.title}
                </h3>
                <span className="block text-xs text-gold-300 font-medium mb-3">
                  {proc.highlight}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                  {proc.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-navy-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Rapid Recovery Protocol</span>
                <button
                  onClick={() => onOpenBooking(proc.title)}
                  className="text-xs font-semibold text-gold-400 hover:text-white transition"
                >
                  Consult Surgeon →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Affiliation & Cashless Note Banner */}
        <div className="bg-navy-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Hospital Affiliations & Cashless Mediclaim
              </span>
              <h4 className="text-lg font-heading font-bold text-white">
                Surgical Procedures at Leading NABH-Accredited Hospitals
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                OPD consultations, clinical checkups, and post-op follow-ups are conducted daily at Dr. Maharana Bone & Joint Clinic (Modern Health Care, Unit-6). Surgeries are performed at premier hospital centres in Bhubaneswar equipped with modular robotic suites and complete cashless TPA insurance support.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking('Surgical Consultation')}
              className="py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow shrink-0"
            >
              Book Surgical Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

