export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What conditions does Dr. Pradeepta Kumar Maharana treat?',
    answer: 'Dr. Maharana specializes in comprehensive bone and joint care including: knee pain and arthritis, sports injuries (ACL, PCL, meniscus tears), shoulder pain and rotator cuff injuries, back and neck disc problems, acute fractures and trauma fixation, joint stiffness, and non-surgical joint preservation.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'What are the clinic OPD consultation timings?',
    answer: 'Dr. Maharana Bone & Joint Clinic is open all days of the week from 6:00 PM to 10:00 PM at Modern Health Care, Ekamra Marg, Near Airport New Road, Unit-6, Ganga Nagar, Bhubaneswar.'
  },
  {
    id: 'faq-3',
    category: 'Appointments',
    question: 'Can I book an appointment online or walk in directly?',
    answer: 'Yes, you can request an appointment online through our booking form on this website, call +91 99370 12543, or send a WhatsApp message. Walk-in patients are also welcome during evening clinic hours (6:00 PM – 10:00 PM).'
  },
  {
    id: 'faq-4',
    category: 'Consultation',
    question: 'What documents and reports should I bring for my consultation?',
    answer: 'Please bring all previous medical records, past prescriptions, physical X-ray films, CT scans, and MRI reports/films if you have had them done. If you take medications for blood pressure, diabetes, or blood thinners, please bring the current list.'
  },
  {
    id: 'faq-5',
    category: 'Treatments',
    question: 'Do I definitely need surgery if I visit an orthopaedic surgeon?',
    answer: 'No. At Dr. Maharana Bone & Joint Clinic, surgery is considered only one of several treatment alternatives and never the first reflex. The doctor thoroughly evaluates conservative options first, including specialized physiotherapy, viscosupplementation (gel injections), bracing, and lifestyle modifications.'
  },
  {
    id: 'faq-6',
    category: 'Insurance',
    question: 'Is insurance or cashless mediclaim accepted for surgeries?',
    answer: 'Yes, cashless hospitalization and mediclaim reimbursement support are available through affiliated NABH-accredited tertiary care hospitals in Bhubaneswar where Dr. Maharana performs surgical procedures. Please call our clinic team at +91 99370 12543 to verify your specific insurer and TPA policy.'
  },
  {
    id: 'faq-7',
    category: 'Surgery',
    question: 'What is the recovery time after Robotic Knee Replacement?',
    answer: 'Thanks to sub-millimeter robotic precision and our Rapid Recovery protocol, patients typically begin standing and walking with support on Day 1. Most patients return to light household activities within 2 to 4 weeks, with full active mobility restored within 8 to 12 weeks.'
  },
  {
    id: 'faq-8',
    category: 'Sports',
    question: 'How does FIFA-certified sports medicine benefit an athlete?',
    answer: 'FIFA certification guarantees international evidence-based standards in injury diagnosis, pitch-side recovery protocols, biomechanical screening, and objective criteria-based return-to-sport testing to prevent re-injury.'
  }
];

