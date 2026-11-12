'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTICLES, Article } from '@/data/articlesData';
import { BookOpen, Search, Clock, ShieldCheck, ArrowRight, X, Calendar, Sparkles } from 'lucide-react';

interface PatientEducationProps {
  onOpenBooking: () => void;
}

export default function PatientEducation({ onOpenBooking }: PatientEducationProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['All', 'Knee Surgery', 'Joint Restoration', 'Sports Medicine', 'Shoulder Care', 'Patient Education', 'Prevention & Wellness'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="knowledge" className="py-20 bg-white relative">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full mb-3">
            <BookOpen className="w-4 h-4 text-gold-600" />
            <span>Medically Reviewed Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 tracking-tight">
            Patient Education & Clinical Insights
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-textSecondary font-light">
            Empowering patients with evidence-based orthopaedic guidance, surgical transparency, and joint health protection.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === c
                    ? 'bg-navy-900 text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:text-navy-900 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search joint topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-surface-light border border-slate-200/90 rounded-2xl p-6 hover:border-gold-500/60 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-gold-700 uppercase tracking-wider text-[10px] bg-gold-500/10 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-navy-900 group-hover:text-gold-600 transition mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-textSecondary font-light leading-relaxed mb-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-navy-900 group-hover:text-gold-600">
                <span className="flex items-center space-x-1 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Medically Reviewed</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Read Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden my-8"
            >
              <div className="bg-navy-900 text-white p-6 sm:p-8 relative border-b border-gold-500/20">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-3 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-slate-300 mt-3 pt-3 border-t border-navy-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Reviewed by {activeArticle.reviewer}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Key Takeaways */}
                <div className="bg-gold-50/70 border border-gold-200 rounded-xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold-900 flex items-center space-x-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <span>Clinical Key Takeaways</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeArticle.keyTakeaways.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-gold-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Content */}
                <div className="space-y-4 text-sm text-textSecondary leading-relaxed font-light">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 italic">
                  Medical Disclaimer: Information on this website is for general educational guidance and does not substitute for an individual in-person consultation with Dr. Pradeepta Kumar Maharana.
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-xs font-medium text-slate-600 hover:text-navy-900"
                >
                  Close Article
                </button>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider font-semibold text-navy-950 gold-gradient-bg shadow flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation with Dr. Maharana</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

