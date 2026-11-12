'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SymptomChecker from '@/components/SymptomChecker';
import DoctorProfile from '@/components/DoctorProfile';
import Treatments from '@/components/Treatments';
import SurgicalExpertise from '@/components/SurgicalExpertise';
import SportsMedicine from '@/components/SportsMedicine';
import PatientJourney from '@/components/PatientJourney';
import AppointmentSection from '@/components/AppointmentSection';
import Testimonials from '@/components/Testimonials';
import ClinicGallery from '@/components/ClinicGallery';
import PatientEducation from '@/components/PatientEducation';
import FAQSection from '@/components/FAQSection';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import { Calendar, Phone, MessageSquare, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>(undefined);

  const handleOpenBooking = (category?: string) => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setModalCategory(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 relative">
      
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust Badges Strip */}
        <section className="bg-navy-950 border-y border-gold-500/20 py-4 sm:py-5 text-white">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-center">
              <div className="p-3 rounded-xl bg-navy-900/50 border border-gold-500/20">
                <span className="block text-xl sm:text-2xl font-bold font-heading text-gold-400">6+</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Years Experience</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/50 border border-gold-500/20">
                <span className="block text-xl sm:text-2xl font-bold font-heading text-gold-400">Robotic</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Knee Alignment</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/50 border border-gold-500/20">
                <span className="block text-xl sm:text-2xl font-bold font-heading text-gold-400">FIFA</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Certified Sports Med</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/50 border border-gold-500/20">
                <span className="block text-xl sm:text-2xl font-bold font-heading text-gold-400">Cashless</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Insurance Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Symptom Navigator */}
        <SymptomChecker onOpenBooking={handleOpenBooking} />

        {/* Doctor Profile */}
        <DoctorProfile onOpenBooking={() => handleOpenBooking()} />

        {/* Comprehensive Treatments Section */}
        <Treatments onOpenBooking={handleOpenBooking} />

        {/* Surgical Expertise */}
        <SurgicalExpertise onOpenBooking={handleOpenBooking} />

        {/* Sports Medicine Specialization */}
        <SportsMedicine onOpenBooking={handleOpenBooking} />

        {/* 4-Step Patient Journey */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* Appointment Engine */}
        <AppointmentSection />

        {/* Patient Testimonials */}
        <Testimonials />

        {/* Clinic & Facility Gallery */}
        <ClinicGallery />

        {/* Medically Reviewed Articles / Blog */}
        <PatientEducation onOpenBooking={() => handleOpenBooking()} />

        {/* FAQs */}
        <FAQSection />

        {/* Location & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        defaultCategory={modalCategory}
      />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-gold-500/30 p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+919937012543"
          className="flex-1 py-2 px-3 bg-navy-900 border border-slate-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>Call Desk</span>
        </a>

        <a
          href="https://wa.me/919937012543"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2 px-3 gold-gradient-bg text-navy-950 rounded-lg text-xs font-bold flex items-center justify-center space-x-1 shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>

    </div>
  );
}

