'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Award, Activity, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative w-full bg-navy-900 text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Lighting & Subtle Pattern */}
      <div className="absolute inset-0 navy-hero-pattern opacity-95 pointer-events-none" />
      
      {/* Subtle Gold Geometric Accents */}
      <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-navy-700/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-gold-500/5 blur-2xl pointer-events-none" />

      {/* Decorative Gold Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#C6A15B" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#C6A15B" strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="relative max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Gold Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>ADVANCED ORTHOPAEDIC & SPORTS MEDICINE SPECIALIST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
              Restoring Movement. <br />
              <span className="gold-gradient-text italic font-normal">Rebuilding Confidence.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              Personalised orthopaedic consultation and bone & joint care focused on helping patients move towards a healthier, more active life. Expert surgical precision combined with compassionate, patient-first care.
            </p>

            {/* Doctor Credentials Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-navy-800/80 border border-gold-500/25 backdrop-blur-sm shadow-xl">
              <div className="flex items-start space-x-3 sm:space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-heading font-bold text-white leading-tight truncate">
                    Dr. Pradeepta Kumar Maharana
                  </h2>
                  <p className="text-xs text-gold-400 font-semibold mt-0.5">
                    Orthopaedic Consultant & Surgeon
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                    MBBS • DNB (Orthopaedics) • Fellowship in Knee & Shoulder Arthroscopy • Fellowship in Robotic Knee Replacement
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2 pt-2 border-t border-navy-700/60 text-[10px] sm:text-[11px] text-slate-300">
                    <span className="inline-flex items-center text-gold-300">
                      <Award className="w-3.5 h-3.5 mr-1 shrink-0" />
                      FIFA-Certified Sports Medicine
                    </span>
                    <span>•</span>
                    <span>6+ Years Experience</span>
                    <span>•</span>
                    <span>Odia, Hindi & English</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider text-navy-950 gold-gradient-bg hover:shadow-gold transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-lg group whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-navy-950 group-hover:scale-110 transition-transform shrink-0" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#treatments"
                className="w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-7 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-100 hover:text-gold-400 border border-gold-500/40 hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap text-center"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Quick Micro Assurance */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 text-[11px] sm:text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Evening OPD 6:00 PM – 10:00 PM</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Robotic-Assisted Joint Precision</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Cashless Mediclaim Affiliations</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Authentic Doctor Portrait & Luxury Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-4"
          >
            {/* Decorative Gold Circular Rings (Responsive bounds) */}
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] aspect-square">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-500/30 scale-105 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-gold-400/20 scale-110 pointer-events-none" />

              {/* Main Portrait Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold-500/60 shadow-2xl bg-gradient-to-b from-navy-800 to-navy-950 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/doctor-scrubs.jpg"
                    alt="Dr. Pradeepta Kumar Maharana - Orthopaedic Doctor & Surgeon"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge: 6+ Years Experience (Centered under circle on mobile) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 bg-navy-950/95 border border-gold-500/60 text-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl shadow-2xl backdrop-blur-md flex items-center space-x-2.5 shrink-0 z-10 whitespace-nowrap">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white leading-none whitespace-nowrap">6+ Years</span>
                  <span className="text-[9px] sm:text-[10px] text-gold-400 font-medium uppercase tracking-wider whitespace-nowrap">Orthopaedic Excellence</span>
                </div>
              </div>

              {/* Floating Badge: Robotic & Arthroscopy */}
              <div className="absolute -top-3 right-0 sm:top-4 sm:-right-4 bg-navy-950/95 border border-gold-500/60 text-white py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center space-x-2 shrink-0 z-10 whitespace-nowrap">
                <Activity className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-100 whitespace-nowrap">Robotic & Arthroscopy</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
