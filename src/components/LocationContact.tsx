'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function LocationContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg('Please fill in your name, phone, and message.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, subject, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMsg(data.error || 'Failed to submit message.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please call +91 99370 12543 directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span>Visit The Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Clinic Location & Contact
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Centrally situated in Bhubaneswar at Modern Health Care, Unit-6, Ganga Nagar. Easily accessible from Airport New Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clinic Contact Details & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-surface-light border border-slate-200">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                      Clinic Address
                    </span>
                    <p className="text-xs text-textSecondary leading-relaxed">
                      <strong>Dr. Maharana Bone & Joint Clinic</strong><br />
                      Modern Health Care, Ekamra Marg,<br />
                      Near Airport New Road, Unit-6,<br />
                      Ganga Nagar, Bhubaneswar, Odisha.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-light border border-slate-200">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                      OPD Timings
                    </span>
                    <p className="text-xs text-textSecondary leading-relaxed">
                      <strong>Monday – Sunday:</strong><br />
                      6:00 PM – 10:00 PM (All Days)<br />
                      <span className="text-emerald-700 font-semibold">Walk-in & Appointments Welcome</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-light border border-slate-200">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                      Phone & Call Desk
                    </span>
                    <p className="text-xs text-textSecondary leading-relaxed">
                      <a href="tel:+919937012543" className="font-bold text-navy-900 hover:text-gold-600">
                        +91 99370 12543
                      </a><br />
                      Direct reception assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-light border border-slate-200">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                      Official Email
                    </span>
                    <p className="text-xs text-textSecondary leading-relaxed">
                      <a href="mailto:contact@drpradeeptamaharana.com" className="font-semibold text-navy-900 hover:text-gold-600 break-all">
                        contact@drpradeeptamaharana.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Modern+Health+Care+Ekamra+Marg+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-navy-900 hover:bg-navy-800 text-white flex items-center space-x-2 transition shadow"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href="https://wa.me/919937012543"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white flex items-center space-x-2 transition shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919937012543"
                className="py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider border border-slate-300 hover:border-gold-500 text-navy-900 flex items-center space-x-2 transition"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Clinic Desk</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100 relative">
              <iframe
                title="Dr. Maharana Bone & Joint Clinic Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.832777174676!2d85.8152504!3d20.2520637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a79c9e376041%3A0xb690460c87fa38a0!2sModern%20Health%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-surface-light rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-luxury">
            <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
              Send a Message or Query
            </h3>
            <p className="text-xs text-textSecondary font-light mb-6">
              Have a question about surgery, insurance, or second opinion? Send us a message and our clinic will respond promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-heading font-bold text-emerald-950">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out. Dr. Maharana’s clinic staff has received your inquiry and will contact you via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-emerald-900 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyabrata Mohanty"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Subject / Concern
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cashless Insurance / Second Opinion on Knee"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your query or medical concern..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow transition flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {sending ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to Clinic</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

