'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, Phone, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

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

export default function AppointmentModal({ isOpen, onClose, defaultCategory }: AppointmentModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState(defaultCategory || CATEGORIES[0]);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Update category when defaultCategory changes
  React.useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

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
        setErrorMsg(data.error || 'Failed to submit booking. Please call the clinic directly.');
      }
    } catch (err) {
      setErrorMsg('Connection error. Please call +91 99370 12543 directly.');
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
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-navy-900 text-white p-6 relative border-b border-gold-500/20">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 mb-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/70 shadow shrink-0 bg-navy-950">
                <Image src="/images/logo-circle.png" alt="Logo" fill sizes="32px" className="object-cover" />
              </div>
              <div className="flex items-center space-x-1.5 text-gold-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dr. Maharana Bone & Joint Clinic</span>
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Book an Appointment</h3>
            <p className="text-sm text-slate-300 mt-1">
              Consult with Dr. Pradeepta Kumar Maharana (OPD: 6:00 PM – 10:00 PM All Days)
            </p>
          </div>

          <div className="p-6 md:p-8">
            {confirmedData ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg mx-auto mb-3 bg-navy-900">
                  <Image src="/images/logo-circle.png" alt="Emblem" fill sizes="64px" className="object-cover" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
                  REQUEST SUBMITTED • PENDING CLINIC CONFIRMATION
                </span>
                <h4 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                  Thank You, {confirmedData.fullName}!
                </h4>
                <p className="text-sm text-textSecondary max-w-md mx-auto mb-6">
                  Your appointment request has been securely registered in our clinic calendar. Our reception desk will contact you via call or WhatsApp to confirm your exact consultation slot.
                </p>

                {/* Reference Card */}
                <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 max-w-md mx-auto text-left mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-navy-100">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Reference ID</span>
                    <span className="font-mono text-base font-bold text-gold-700 bg-white px-2 py-0.5 rounded border border-gold-300">
                      {confirmedData.referenceId}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Date & Time:</span>
                      <span className="font-semibold text-navy-900">{confirmedData.date} at {confirmedData.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Consultation:</span>
                      <span className="font-semibold text-navy-900">{confirmedData.category}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Phone:</span>
                      <span className="font-semibold text-navy-900">{confirmedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Clinic OPD:</span>
                      <span className="font-semibold text-navy-900">Modern Health Care, Unit-6</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Call CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919937012543?text=${encodeURIComponent(
                      `Hello Dr. Maharana Clinic, I have submitted an appointment request (Ref: ${confirmedData.referenceId}) for ${confirmedData.fullName} on ${confirmedData.date} at ${confirmedData.timeSlot} for ${confirmedData.category}. Please confirm my booking.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Clinic Team</span>
                  </a>

                  <a
                    href="tel:+919937012543"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-2.5 rounded-lg transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 99370 12543</span>
                  </a>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-500 hover:text-navy-900 underline"
                  >
                    Close or Book another appointment
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar Pattnaik"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Patient Age
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="115"
                      placeholder="e.g. 52"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Consultation Category */}
                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Consultation Reason / Specialty *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 bg-white"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                      />
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Available Evening Slot * (6 PM – 10 PM)
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 bg-white"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Specific Problem / Notes */}
                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Describe your symptoms or previous reports (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Left knee pain while climbing stairs for 3 months, have recent X-ray..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Anxious about visiting or previous surgery? Mention it here and the appointment will be paced around your comfort.
                  </p>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-navy-950 gold-gradient-bg hover:opacity-95 shadow-gold transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>CONFIRM APPOINTMENT REQUEST</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    * Booking requests are reviewed by clinic staff. Official confirmation is sent via SMS/WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

