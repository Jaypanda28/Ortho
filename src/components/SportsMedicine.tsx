'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Activity, Heart, Shield, CheckCircle2, Flame, Utensils, Calendar } from 'lucide-react';

interface SportsMedicineProps {
  onOpenBooking: (category?: string) => void;
}

export default function SportsMedicine({ onOpenBooking }: SportsMedicineProps) {
  const pillars = [
    {
      icon: <Trophy className="w-5 h-5 text-gold-600" />,
      title: 'FIFA-Certified Evaluation',
      desc: 'Standardized assessment of acute ligament sprains, muscle tears, and cartilage trauma adhering to international athletic guidelines.'
    },
    {
      icon: <Activity className="w-5 h-5 text-gold-600" />,
      title: 'Return-to-Play Criteria',
      desc: 'Objective limb symmetry testing, agility drills, and strength thresholds before clearing an athlete to resume competitive matches.'
    },
    {
      icon: <Shield className="w-5 h-5 text-gold-600" />,
      title: 'Injury Prevention & Biomechanics',
      desc: 'Neuromuscular conditioning, landing mechanics retraining, and FIFA 11+ warm-up strategies to dramatically reduce re-injury risks.'
    },
    {
      icon: <Utensils className="w-5 h-5 text-gold-600" />,
      title: 'Sports Nutrition & Conditioning',
      desc: 'Comprehensive nutritional counseling to accelerate soft tissue repair, maintain lean muscle mass, and optimize athletic energy.'
    }
  ];

  return (
    <section id="sports-medicine" className="py-20 bg-white relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <Trophy className="w-4 h-4 text-gold-600" />
            <span>Athletic Excellence & Rehabilitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Get Back to What Moves You
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Whether you are a competitive professional athlete, school player, or passionate weekend runner, Dr. Pradeepta Kumar Maharana brings FIFA-certified sports science to guide your recovery.
          </p>
        </div>

        {/* Feature Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-surface-light border border-slate-200/90 hover:border-gold-500/50 hover:shadow-luxury transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-navy-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Featured Card */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 border border-gold-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block">
                SPECIALIST PROFILE
              </span>
              <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                FIFA-Certified Sports Medicine & Performance Care
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Sports injuries require specialized physiological understanding. A torn ligament or strained tendon is not merely a structural injury—it affects balance, muscle firing order, and athletic confidence.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>ACL, PCL & Meniscus Arthroscopic Repair</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Rotator Cuff & Shoulder Dislocation Stabilisation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Ankle Sprains & Recurrent Joint Instability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Personalised Nutrition & Musculoskeletal Conditioning</span>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-700/80">
                <button
                  onClick={() => onOpenBooking('Sports Injury')}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow transition flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Sports Injury Evaluation</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

