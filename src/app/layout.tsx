import type { Metadata } from 'next';
import './globals.css';
import SEOStructuredData from '@/components/SEOStructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://drpradeeptamaharana.com'),
  title: 'Dr. Pradeepta Kumar Maharana — Dr. Maharana Bone & Joint Clinic | Bhubaneswar',
  description:
    'Dr. Pradeepta Kumar Maharana (MBBS, DNB Ortho, Fellowship Robotic Knee Replacement & Arthroscopy) is a leading orthopaedic consultant & surgeon in Bhubaneswar, Odisha. Advanced knee replacement, sports medicine, shoulder care, and trauma surgery.',
  keywords: [
    'Dr Pradeepta Kumar Maharana',
    'Orthopaedic Doctor in Bhubaneswar',
    'Orthopaedic Surgeon in Bhubaneswar',
    'Knee Replacement Specialist Bhubaneswar',
    'Robotic Knee Replacement Bhubaneswar',
    'Arthroscopy Surgeon Bhubaneswar',
    'Sports Medicine Specialist Bhubaneswar',
    'Bone and Joint Clinic Bhubaneswar',
    'Shoulder Specialist Bhubaneswar',
    'Fracture Treatment Bhubaneswar',
  ],
  authors: [{ name: 'Dr. Pradeepta Kumar Maharana' }],
  creator: 'Dr. Maharana Bone & Joint Clinic',
  openGraph: {
    title: 'Dr. Maharana Bone & Joint Clinic | Orthopaedic & Surgical Care',
    description:
      'Personalised orthopaedic care, robotic joint replacement, arthroscopy, and FIFA-certified sports medicine in Bhubaneswar, Odisha.',
    url: 'https://drpradeeptamaharana.com',
    siteName: 'Dr. Maharana Bone & Joint Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo-circle.png',
        width: 1024,
        height: 1024,
        alt: 'Dr. Maharana Bone & Joint Clinic Official Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo-circle.png" type="image/png" />
      </head>
      <body className="antialiased text-navy-900 bg-white selection:bg-gold-500 selection:text-navy-950">
        <SEOStructuredData />
        {children}
      </body>
    </html>
  );
}

