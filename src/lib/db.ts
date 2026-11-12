import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

export interface Appointment {
  id: string;
  referenceId: string;
  fullName: string;
  phone: string;
  email: string;
  age: number;
  category: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  doctorNotes?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'UNREAD' | 'REPLIED' | 'ARCHIVED';
}

export interface ClinicSettings {
  clinicName: string;
  doctorName: string;
  degrees: string;
  fellowships: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  opdTimings: string;
  daysOpen: string[];
  blockedDates: string[];
  slotDurationMinutes: number;
  availableTimeSlots: string[];
}

const DEFAULT_SETTINGS: ClinicSettings = {
  clinicName: 'Dr. Maharana Bone & Joint Clinic',
  doctorName: 'Dr. Pradeepta Kumar Maharana',
  degrees: 'MBBS, DNB (Orthopaedics)',
  fellowships: 'Fellowship in Knee & Shoulder Arthroscopy, Fellowship in Robotic Knee Replacement',
  phone: '+91 99370 12543',
  whatsapp: '919937012543',
  email: 'contact@drpradeeptamaharana.com',
  address: 'Modern Health Care, Ekamra Marg, Near Airport New Road, Unit-6, Ganga Nagar',
  landmark: 'Near Airport New Road',
  city: 'Bhubaneswar',
  state: 'Odisha',
  opdTimings: 'All days, 6:00 PM – 10:00 PM',
  daysOpen: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  blockedDates: [],
  slotDurationMinutes: 20,
  availableTimeSlots: [
    '6:00 PM',
    '6:20 PM',
    '6:40 PM',
    '7:00 PM',
    '7:20 PM',
    '7:40 PM',
    '8:00 PM',
    '8:20 PM',
    '8:40 PM',
    '9:00 PM',
    '9:20 PM',
    '9:40 PM',
  ],
};

const DEFAULT_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    referenceId: 'MBJC-9021',
    fullName: 'Rajesh Kumar Pattnaik',
    phone: '+91 98610 23412',
    email: 'rajesh.pattnaik@gmail.com',
    age: 58,
    category: 'Knee Replacement Consultation',
    date: '2026-11-12',
    timeSlot: '6:20 PM',
    notes: 'Severe bilateral osteoarthritis. Needs evaluation for robotic total knee replacement. Has previous X-rays.',
    status: 'CONFIRMED',
    createdAt: '2026-11-11T14:30:00Z',
    doctorNotes: 'Review 3-view knee X-rays. Discuss robotic alignment benefits.',
  },
  {
    id: 'apt-2',
    referenceId: 'MBJC-9022',
    fullName: 'Siddharth Behera',
    phone: '+91 94371 88920',
    email: 'siddharth.b@outlook.com',
    age: 26,
    category: 'Sports Injury',
    date: '2026-11-12',
    timeSlot: '7:00 PM',
    notes: 'Twisted knee during football practice 3 days ago. Popping sensation felt, unable to bear full weight.',
    status: 'CONFIRMED',
    createdAt: '2026-11-11T16:15:00Z',
    doctorNotes: 'Suspected ACL tear / meniscus. Check Lachman & pivot shift, recommend MRI.',
  },
  {
    id: 'apt-3',
    referenceId: 'MBJC-9023',
    fullName: 'Subhashree Mohanty',
    phone: '+91 91240 55419',
    email: 'subhashree.mohanty@yahoo.com',
    age: 44,
    category: 'Shoulder Pain',
    date: '2026-11-12',
    timeSlot: '7:40 PM',
    notes: 'Pain in right shoulder when lifting arm above shoulder level. Disturbed sleep on right side.',
    status: 'PENDING',
    createdAt: '2026-11-12T08:10:00Z',
  },
  {
    id: 'apt-4',
    referenceId: 'MBJC-9024',
    fullName: 'Debasish Dash',
    phone: '+91 97760 11982',
    email: 'debasish.dash@gmail.com',
    age: 62,
    category: 'Knee Pain',
    date: '2026-11-13',
    timeSlot: '6:40 PM',
    notes: 'Difficulty climbing stairs, crepitus in left knee. Seeking second opinion.',
    status: 'PENDING',
    createdAt: '2026-11-12T09:45:00Z',
  },
  {
    id: 'apt-5',
    referenceId: 'MBJC-9025',
    fullName: 'Ananya Tripathy',
    phone: '+91 70081 44211',
    email: 'ananya.t@gmail.com',
    age: 38,
    category: 'Spine Problems',
    date: '2026-11-13',
    timeSlot: '8:20 PM',
    notes: 'Low back stiffness radiating to right hip after long desk hours. Wants non-surgical rehab plan.',
    status: 'CONFIRMED',
    createdAt: '2026-11-12T10:00:00Z',
  },
];

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Manoj Kumar Nayak',
    phone: '+91 98530 44123',
    email: 'manoj.nayak@rediffmail.com',
    subject: 'Insurance and Cashless Mediclaim for Knee Replacement',
    message: 'Hello Doctor, do you accept Star Health Cashless insurance for Robotic Knee surgery? Which affiliated hospitals do you perform surgeries at?',
    createdAt: '2026-11-11T12:00:00Z',
    status: 'REPLIED',
  },
  {
    id: 'inq-2',
    name: 'Priyanka Rout',
    phone: '+91 94380 91234',
    email: 'priyanka.rout@gmail.com',
    subject: 'Post-ACL Surgery Rehabilitation Protocol',
    message: 'I had an ACL injury last month. Do you provide FIFA-certified sports rehabilitation guidelines and return-to-sport testing at your clinic?',
    createdAt: '2026-11-12T07:30:00Z',
    status: 'UNREAD',
  },
];

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getAppointments(): Appointment[] {
  ensureDir();
  if (!fs.existsSync(APPOINTMENTS_FILE)) {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(DEFAULT_APPOINTMENTS, null, 2), 'utf-8');
    return DEFAULT_APPOINTMENTS;
  }
  try {
    const raw = fs.readFileSync(APPOINTMENTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading appointments:', e);
    return DEFAULT_APPOINTMENTS;
  }
}

export function saveAppointments(data: Appointment[]): void {
  ensureDir();
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function addAppointment(appointmentData: Omit<Appointment, 'id' | 'referenceId' | 'createdAt' | 'status'>): Appointment {
  const appointments = getAppointments();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `MBJC-${randomNum}`;
  const newAppointment: Appointment = {
    ...appointmentData,
    id: `apt-${Date.now()}`,
    referenceId,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };
  appointments.unshift(newAppointment);
  saveAppointments(appointments);
  return newAppointment;
}

export function updateAppointmentStatus(id: string, status: Appointment['status'], doctorNotes?: string): Appointment | null {
  const appointments = getAppointments();
  const idx = appointments.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  appointments[idx].status = status;
  if (doctorNotes !== undefined) {
    appointments[idx].doctorNotes = doctorNotes;
  }
  saveAppointments(appointments);
  return appointments[idx];
}

export function getInquiries(): Inquiry[] {
  ensureDir();
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(DEFAULT_INQUIRIES, null, 2), 'utf-8');
    return DEFAULT_INQUIRIES;
  }
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_INQUIRIES;
  }
}

export function saveInquiries(data: Inquiry[]): void {
  ensureDir();
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function addInquiry(inquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const inquiries = getInquiries();
  const newInq: Inquiry = {
    ...inquiryData,
    id: `inq-${Date.now()}`,
    status: 'UNREAD',
    createdAt: new Date().toISOString(),
  };
  inquiries.unshift(newInq);
  saveInquiries(inquiries);
  return newInq;
}

export function getSettings(): ClinicSettings {
  ensureDir();
  if (!fs.existsSync(SETTINGS_FILE)) {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2), 'utf-8');
    return DEFAULT_SETTINGS;
  }
  try {
    const raw = fs.readFileSync(SETTINGS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(data: ClinicSettings): void {
  ensureDir();
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

