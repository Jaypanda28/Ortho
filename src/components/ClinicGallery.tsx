'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Eye, MapPin } from 'lucide-react';

export default function ClinicGallery() {
  const images = [
    {
      src: '/images/clinic.jpg',
      title: 'Modern Health Care Clinic Facility',
      category: 'Clinic Exterior & Reception',
      location: 'Ekamra Marg, Unit-6, Ganga Nagar, Bhubaneswar',
    },
    {
      src: '/images/doctor-formal.jpg',
      title: 'Consultation Chamber & Doctor Suite',
      category: 'Doctor Profile',
      location: 'Dr. Maharana Bone & Joint Clinic',
    },
    {
      src: '/images/doctor-scrubs.jpg',
      title: 'Surgical Team & Operating Suite',
      category: 'Surgical Care',
      location: 'NABH-Accredited Robotic Surgical Facility',
    },
  ];

  return (
    <section className="py-20 bg-surface-light border-y border-slate-200">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <Camera className="w-4 h-4 text-gold-600" />
            <span>Clinic & Clinical Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Inside Dr. Maharana Bone & Joint Clinic
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            A hygienic, patient-friendly consultation atmosphere located at Modern Health Care, Ekamra Marg, Bhubaneswar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-[4/3] flex flex-col justify-end"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="relative z-10 p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-gold-500/20 px-2 py-0.5 rounded inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-base text-white leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-300 mt-1">
                  <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

