'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faqsData';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-surface-light border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-gold-600" />
            <span>Common Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Clear, transparent answers about clinic visits, appointment booking, surgery alternatives, and insurance support.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 transition"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-500 text-navy-950 border-gold-500' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-textSecondary leading-relaxed border-t border-slate-100 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="p-6 bg-white rounded-2xl border border-gold-500/30 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-heading font-bold text-navy-900">
              Have another question not listed here?
            </h4>
            <p className="text-xs text-textSecondary mt-0.5">
              Call our reception desk directly or send us a WhatsApp message.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+919937012543"
              className="py-2.5 px-4 rounded-xl border border-slate-300 text-xs font-semibold text-navy-900 hover:border-gold-500 flex items-center space-x-1.5 transition"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>+91 99370 12543</span>
            </a>
            <a
              href="https://wa.me/919937012543"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

