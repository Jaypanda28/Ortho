'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Menu, X, Clock, UserCheck, MessageSquare, ChevronRight, Shield, Award } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (category?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', shortLabel: 'Home', href: '#' },
    { label: 'About Doctor', shortLabel: 'About', href: '#doctor' },
    { label: 'Treatments', shortLabel: 'Treatments', href: '#treatments' },
    { label: 'Surgical Expertise', shortLabel: 'Surgery', href: '#surgery' },
    { label: 'Sports Medicine', shortLabel: 'Sports Med', href: '#sports-medicine' },
    { label: 'Patient Guide', shortLabel: 'Guide', href: '#patient-guide' },
    { label: 'FAQs', shortLabel: 'FAQs', href: '#faq' },
    { label: 'Contact', shortLabel: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-950 text-slate-300 text-[10px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-gold-500/20">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center space-x-2 sm:space-x-5 overflow-hidden">
            <span className="flex items-center space-x-1.5 text-gold-400 font-medium whitespace-nowrap shrink-0">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0" />
              <span>OPD: 6:00 PM – 10:00 PM All Days</span>
            </span>
            <span className="hidden md:inline-block text-slate-600 shrink-0">|</span>
            <span className="hidden md:inline-block text-slate-300 truncate">
              Modern Health Care, Ekamra Marg, Unit-6, Bhubaneswar
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <a
              href="tel:+919937012543"
              className="flex items-center space-x-1 text-slate-200 hover:text-gold-400 transition font-medium whitespace-nowrap"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0" />
              <span className="hidden xs:inline">+91 99370 12543</span>
              <span className="xs:hidden">Call</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link
              href="/admin"
              className="flex items-center space-x-1 text-slate-400 hover:text-gold-400 transition text-[10px] sm:text-[11px] whitespace-nowrap"
            >
              <UserCheck className="w-3 h-3 text-gold-400/80 shrink-0" />
              <span>Staff</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-slate-200/80'
            : 'bg-white py-2.5 sm:py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 xl:gap-8">
          
          {/* 1. LEFT: OFFICIAL CLINIC LOGO & IDENTITY */}
          <Link href="#" className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 group min-w-0">
            {/* Authentic Circular Crest Logo */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 shadow-md border-2 border-gold-500/70 group-hover:border-gold-400 group-hover:scale-105 transition-all duration-300 bg-navy-900">
              <Image
                src="/images/logo-circle.png"
                alt="Maharana Bone & Joint Clinic Official Logo"
                fill
                priority
                sizes="(max-width: 640px) 36px, 48px"
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-heading font-bold text-navy-900 text-sm sm:text-base lg:text-lg xl:text-xl tracking-tight leading-none whitespace-nowrap group-hover:text-gold-600 transition">
                MAHARANA BONE & JOINT CLINIC
              </span>
              <span className="text-[8px] sm:text-[9px] xl:text-[10px] tracking-[0.14em] text-gold-600 font-semibold uppercase mt-0.5 sm:mt-1 whitespace-nowrap truncate">
                Orthopaedic & Surgical Care • Bhubaneswar
              </span>
            </div>
          </Link>

          {/* 2. MIDDLE: CLEANLY ARRANGED NAVIGATION LINKS (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-2 xl:px-4">
            <div className="flex items-center space-x-3 xl:space-x-5 2xl:space-x-7 text-xs xl:text-[13.5px] 2xl:text-sm font-medium text-navy-900 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 text-slate-700 hover:text-navy-900 transition-colors whitespace-nowrap group shrink-0"
                >
                  <span className="hidden xl:inline">{link.label}</span>
                  <span className="xl:hidden">{link.shortLabel}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-200 group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* 3. RIGHT: LOGO-SYSTEM "BOOK APPOINTMENT" CTA */}
          <div className="flex items-center shrink-0 space-x-2">
            {/* Desktop Button with Badge Icon Logo System */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => onOpenBooking()}
                className="group relative overflow-hidden py-2 px-3 sm:py-2.5 sm:px-4 xl:px-5 rounded-xl text-xs uppercase tracking-wider font-bold border border-gold-400/50 text-navy-950 gold-gradient-bg shadow-gold hover:shadow-[0_6px_22px_rgba(198,161,91,0.45)] hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2 shrink-0 whitespace-nowrap"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-md sm:rounded-lg bg-navy-950/15 flex items-center justify-center text-navy-950 group-hover:scale-110 transition-transform shrink-0">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-navy-950" />
                </span>
                <span className="whitespace-nowrap font-bold tracking-wider text-navy-950 text-[11px] sm:text-xs">
                  BOOK APPOINTMENT
                </span>
              </button>
            </div>

            {/* Mobile Booking Pill (Under 768px) */}
            <button
              onClick={() => onOpenBooking()}
              className="md:hidden py-1.5 px-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-navy-950 gold-gradient-bg border border-gold-400/60 shadow flex items-center space-x-1 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3 h-3 text-navy-950 shrink-0" />
              <span>Book</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-navy-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Luxury Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 bg-navy-900 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold-500/80 bg-navy-950 shrink-0">
                  <Image
                    src="/images/logo-circle.png"
                    alt="Logo"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-heading font-bold text-white text-sm block leading-none">
                    DR. MAHARANA
                  </span>
                  <span className="text-[9px] text-gold-400 tracking-wider uppercase font-semibold">
                    Bone & Joint Clinic
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 grid grid-cols-2 gap-2">
              <a
                href="tel:+919937012543"
                className="py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-navy-900 flex items-center justify-center space-x-1.5 shadow-sm active:bg-slate-100"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/919937012543"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 shadow-sm active:bg-emerald-700"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-800 hover:bg-navy-50 hover:text-navy-900 transition"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Drawer Footer with Book Appointment Button */}
            <div className="p-5 border-t border-slate-100 bg-white space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg shadow-gold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT NOW</span>
              </button>

              <div className="text-center text-[10px] text-slate-500 pt-1">
                <span>OPD: 6:00 PM – 10:00 PM All Days</span><br />
                <span>Modern Health Care, Unit-6, Bhubaneswar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
