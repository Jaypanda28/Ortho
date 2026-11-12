import React from 'react';
import { FAQS } from '@/data/faqsData';

export default function SEOStructuredData() {
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Dr. Maharana Bone & Joint Clinic',
    alternateName: 'Maharana Bone & Joint Clinic',
    url: 'https://drpradeeptamaharana.com',
    logo: 'https://drpradeeptamaharana.com/images/logo-circle.png',
    image: 'https://drpradeeptamaharana.com/images/clinic.jpg',
    telephone: '+919937012543',
    email: 'contact@drpradeeptamaharana.com',
    medicalSpecialty: [
      'Orthopedic',
      'SportsMedicine',
      'Surgical'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Modern Health Care, Ekamra Marg, Near Airport New Road, Unit-6, Ganga Nagar',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.2520',
      longitude: '85.8230'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '18:00',
        closes: '22:00'
      }
    ],
    priceRange: '₹₹',
    hasMap: 'https://maps.google.com/?q=Dr+Maharana+bone+and+joint+clinic+Bhubaneswar'
  };

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Pradeepta Kumar Maharana',
    alternateName: 'Dr. Pradeepta Kumar Moharana',
    jobTitle: 'Consultant Orthopaedic & Robotic Joint Replacement Surgeon',
    medicalSpecialty: 'OrthopedicSurgery',
    alumniOf: [
      'DNB Orthopaedics',
      'MBBS'
    ],
    knowsAbout: [
      'Robotic Knee Replacement',
      'Total Knee Replacement',
      'Partial Knee Replacement',
      'Knee Arthroscopy',
      'Shoulder Arthroscopy',
      'ACL Reconstruction',
      'Sports Medicine',
      'Fracture Trauma Fixation',
      'Non-Surgical Joint Preservation'
    ],
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Dr. Maharana Bone & Joint Clinic'
    },
    telephone: '+919937012543',
    email: 'contact@drpradeeptamaharana.com',
    image: 'https://drpradeeptamaharana.com/images/doctor-scrubs.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Modern Health Care, Ekamra Marg, Unit-6, Ganga Nagar',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'IN'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

