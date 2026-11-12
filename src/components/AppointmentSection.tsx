'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MessageSquare, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

const CATEGORIES = [
  'Knee Replacement Consultation',
  'Arthroscopy & Keyhole Surgery',
  'Sports Injury & Ligament Care',
  'Shoulder Care & Rotator Cuff',
  'Fracture & Trauma Assessment',
  'Spine Care & Back Pain',
  'Non-Surgical Joint Preservation',
  'General Orthopaedic Consultation'
];

const TIME_SLOTS = [
  '6:00 PM', '6:20 PM', '6:40 PM',
  '7:00 PM', '7:20 PM', '7:40 PM',
  '8:00 PM', '8:20 PM', '8:40 PM',
  '9:00 PM', '9:20 PM', '9:40 PM'
];

export default function AppointmentSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!fullName.trim() || !phone.trim() || !date || !timeSlot) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          age: parseInt(age) || 0,
          category,
          date,
          timeSlot,
          notes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setConfirmedData(data.appointment);
      } else {
        setErrorMsg(data.error || 'Failed to submit appointment.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please call +91 99370 12543 directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setAge('');
    setNotes('');
  };

  return (
    <section id="book" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 navy-hero-pattern opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/15 border border-gold-400/30 px-3.5 py-1.5 rounded-full mb-3">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Direct Clinic Appointment Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Your Journey Towards Better Mobility Starts Here
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-300 font-light">
            Select your consultation reason and preferred evening time slot. Our reception team will review your request and confirm your appointment.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-navy-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {confirmedData ? (
            <div className="text-center py-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg mx-auto mb-3 bg-navy-950">
                <Image src="/images/logo-circle.png" alt="Clinic Emblem" fill sizes="64px" className="object-cover" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
                REQUEST REGISTERED • PENDING CLINIC CONFIRMATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                Thank You, {confirmedData.fullName}!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Your appointment request is safely stored in our clinic dashboard. Our staff will contact you shortly to confirm your time.
              </p>

              {/* Reference Box */}
              <div className="bg-navy-950 border border-gold-500/40 rounded-2xl p-5 max-w-md mx-auto text-left mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-navy-800">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Appointment Reference</span>
                  <span className="font-mono text-base font-bold text-gold-400 bg-navy-900 px-3 py-1 rounded border border-gold-500/40">
                    {confirmedData.referenceId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Date & Time:</span>
                    <span className="font-semibold text-white">{confirmedData.date} at {confirmedData.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Specialty:</span>
                    <span className="font-semibold text-white">{confirmedData.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Phone:</span>
                    <span className="font-semibold text-white">{confirmedData.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Clinic:</span>
                    <span className="font-semibold text-white">Modern Health Care, Unit-6</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919937012543?text=${encodeURIComponent(
                    `Hello Dr. Maharana Clinic, I have submitted an appointment request (Ref: ${confirmedData.referenceId}) for ${confirmedData.fullName} on ${confirmedData.date} at ${confirmedData.timeSlot} for ${confirmedData.category}. Please confirm my booking.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow transition text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Clinic Team</span>
                </a>

                <a
                  href="tel:+919937012543"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-lg transition text-xs uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99370 12543</span>
                </a>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Book another appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-900/40 border border-red-500/50 text-red-200 rounded-lg text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Das"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="115"
                    placeholder="e.g. 48"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              {/* Consultation Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Consultation Specialty / Reason *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                    Evening Slot * (6:00 PM – 10:00 PM)
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1">
                  Describe Symptoms / Relevant History (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g., Left knee pain when bending, swelling after walking, previous MRI taken..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-navy-950 border border-navy-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-8 rounded-xl font-semibold text-sm uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow-gold transition flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Registering Booking...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>CONFIRM APPOINTMENT REQUEST</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Your details are kept completely private and confidential.</span>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

