'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, HeartPulse, GraduationCap, Globe, Clock, UserCheck } from 'lucide-react';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export default function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const credentials = [
    { title: 'MBBS', desc: 'Bachelor of Medicine & Bachelor of Surgery' },
    { title: 'DNB (Orthopaedics)', desc: 'Diplomate of National Board in Orthopaedic Surgery' },
    { title: 'Fellowship in Robotic Knee Replacement', desc: 'Sub-millimeter precision kinematic joint reconstruction' },
    { title: 'Fellowship in Knee & Shoulder Arthroscopy', desc: 'Keyhole ligament repair & sports joint preservation' },
    { title: 'FIFA-Certified Sports Medicine Specialist', desc: 'Global standards for athletic trauma & return-to-play' },
    { title: 'Nutrition & Fitness Consultant', desc: 'Biomechanical joint protection & musculoskeletal wellness' },
  ];

  return (
    <section id="doctor" className="py-20 bg-white relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <UserCheck className="w-4 h-4" />
            <span>Consultant Orthopaedic & Joint Surgeon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Expertise Rooted in Care
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Dedicated to patient-centred mobility, anatomical joint preservation, and transparent surgical decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Authentic Photograph with Gold Borders */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gold Decorative Backing Border */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-gold-500/40 -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-navy-900/10 bg-slate-100 aspect-[4/5]">
                <Image
                  src="/images/doctor-formal.jpg"
                  alt="Dr. Pradeepta Kumar Maharana - Orthopaedic Consultant Bhubaneswar"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                    Chief Orthopaedic Specialist
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Dr. Pradeepta Kumar Maharana
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Bhubaneswar, Odisha • Modern Health Care
                  </p>
                </div>
              </div>

              {/* Verified Trust Badge Floating */}
              <div className="absolute -top-3 right-2 sm:-right-4 bg-white border border-gold-500/50 shadow-xl rounded-xl p-2.5 sm:p-3 flex items-center space-x-2.5 z-10">
                <div className="w-8 h-8 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy-900">Verified Credentials</span>
                  <span className="block text-[10px] text-slate-500">6 Years Clinical Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Qualifications Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quote Block with Gold Accent */}
            <div className="border-l-4 border-gold-500 pl-4 py-1 italic text-slate-700 text-base sm:text-lg leading-relaxed bg-surface-light rounded-r-xl p-4">
              “Dr. Pradeepta Kumar Maharana is an orthopaedic consultant in Bhubaneswar with expertise in joint replacement, sports injuries, arthroscopy and comprehensive orthopaedic care. His approach emphasises evidence-based treatment, prevention and personalised care protocols.”
            </div>

            <p className="text-sm text-textSecondary leading-relaxed">
              Dr. Maharana believes that surgery is never the only reflex. He approaches each patient with thorough listening, comprehensive clinical evaluation, and honest discussions about non-surgical alternatives before considering any operative intervention.
            </p>

            {/* Verified Qualifications Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-gold-600" />
                <span>Verified Qualifications & Fellowships</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-gold-400 hover:shadow-sm transition"
                  >
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-navy-900 leading-snug">
                          {cred.title}
                        </span>
                        <span className="block text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {cred.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Practice Info Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-navy-50 border border-navy-100 text-center">
                <span className="block text-xl font-bold font-heading text-navy-900">6+</span>
                <span className="text-[11px] text-slate-600 uppercase font-semibold">Years Experience</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-50 border border-navy-100 text-center">
                <span className="block text-xl font-bold font-heading text-navy-900">3</span>
                <span className="text-[11px] text-slate-600 uppercase font-semibold">Languages (Odia, Hindi, Eng)</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-gold-50 border border-gold-200 text-center">
                <span className="block text-xl font-bold font-heading text-gold-800">FIFA</span>
                <span className="text-[11px] text-gold-700 uppercase font-semibold">Sports Medicine Certified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:shadow-gold transition flex items-center justify-center space-x-2"
              >
                <span>Consult Dr. Maharana</span>
              </button>

              <a
                href="#treatments"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-900 border border-slate-300 hover:border-gold-500 text-center transition"
              >
                View Surgical & Treatment Options
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

