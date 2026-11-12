'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 sm:pb-8 border-t border-gold-500/30 relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Col 1: Brand & Doctor (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500/70 shadow-lg bg-navy-900 shrink-0">
                <Image
                  src="/images/logo-circle.png"
                  alt="Dr. Maharana Bone & Joint Clinic Official Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block font-heading font-bold text-white text-lg tracking-tight leading-none">
                  DR. MAHARANA
                </span>
                <span className="block text-[10px] tracking-widest text-gold-400 font-semibold uppercase mt-1">
                  BONE & JOINT CLINIC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Premium orthopaedic, joint replacement, arthroscopy, and FIFA-certified sports medicine practice led by Dr. Pradeepta Kumar Maharana. Dedicated to restoring natural mobility with evidence-based compassion.
            </p>

            <div className="pt-2 text-xs text-gold-300 font-semibold">
              <span className="block text-white font-heading text-sm">Dr. Pradeepta Kumar Maharana</span>
              <span className="text-[11px] text-slate-400">MBBS, DNB (Ortho), Fellowship Robotic TKR & Arthroscopy</span>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>OPD: 6:00 PM – 10:00 PM All Days</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gold-300 transition">Home</a></li>
              <li><a href="#doctor" className="hover:text-gold-300 transition">About Doctor</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Treatments</a></li>
              <li><a href="#surgery" className="hover:text-gold-300 transition">Surgical Expertise</a></li>
              <li><a href="#sports-medicine" className="hover:text-gold-300 transition">Sports Medicine</a></li>
              <li><a href="#patient-guide" className="hover:text-gold-300 transition">Patient Guide</a></li>
              <li><a href="#knowledge" className="hover:text-gold-300 transition">Medical Blog</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition">Clinic Location</a></li>
            </ul>
          </div>

          {/* Col 3: Orthopaedic Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#treatments" className="hover:text-gold-300 transition">Robotic Knee Replacement</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Partial Knee Replacement (UKA)</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Knee Arthroscopy & ACL Repair</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Meniscus Biological Repair</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Rotator Cuff Keyhole Surgery</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Complex Fracture & Trauma Care</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Non-Surgical Spine Management</a></li>
              <li><a href="#treatments" className="hover:text-gold-300 transition">Viscosupplementation & Gel Injections</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Modern Health Care, Ekamra Marg, Near Airport New Road, Unit-6, Ganga Nagar, Bhubaneswar, Odisha 751001
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919937012543" className="hover:text-gold-300 transition font-medium">
                  +91 99370 12543
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:contact@drpradeeptamaharana.com" className="hover:text-gold-300 transition break-all">
                  contact@drpradeeptamaharana.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/admin"
                className="inline-flex items-center space-x-1.5 text-[11px] text-slate-400 hover:text-gold-400 border border-navy-800 hover:border-gold-500/40 px-3 py-1.5 rounded-lg transition"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                <span>Admin & Staff Portal</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © 2026 Dr. Maharana Bone & Joint Clinic. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span>Dr. Pradeepta Kumar Maharana</span>
            <span>•</span>
            <span>Bhubaneswar, Odisha</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Medical Guidance Disclaimer */}
        <div className="mt-4 pt-4 border-t border-navy-900 text-center text-[11px] text-slate-600">
          Information on this site is for general guidance and medical education. It does not replace a direct personal clinical consultation with a doctor.
        </div>

      </div>
    </footer>
  );
}

