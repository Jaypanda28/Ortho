export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  treatmentType: string;
  rating: number;
  quote: string;
  detail: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Bhabani Shankar Mishra',
    location: 'Saheed Nagar, Bhubaneswar',
    condition: 'Severe Knee Osteoarthritis',
    treatmentType: 'Robotic-Assisted Knee Replacement',
    rating: 5,
    quote: 'Walking without pain after 4 years of struggle. Dr. Maharana’s precision and clear guidance gave me back my independence.',
    detail: 'Before consulting Dr. Maharana, I could barely walk 50 meters without sharp knee pain and had stopped going for morning walks. Dr. Maharana carefully explained the robotic knee surgery step-by-step. I was standing on my feet the next day and returned to full routine activities within a few weeks without any stiffness.',
    date: 'October 2026'
  },
  {
    id: 'test-2',
    name: 'Amitav Mohapatra',
    location: 'Patia, Bhubaneswar',
    condition: 'Complete ACL & Meniscus Tear',
    treatmentType: 'Arthroscopic Reconstruction & FIFA Rehab',
    rating: 5,
    quote: 'As a district-level badminton player, I feared my career was over. His sports medicine expertise got me back on court.',
    detail: 'I suffered a bad twist during a tournament that tore my ACL and meniscus. Dr. Maharana performed keyhole arthroscopy with minimal scarring. His FIFA-certified sports rehabilitation roadmap and return-to-play training restored complete stability in my knee. Highly recommended for any athlete.',
    date: 'September 2026'
  },
  {
    id: 'test-3',
    name: 'Sasmita Senapati',
    location: 'Unit-4, Bhubaneswar',
    condition: 'Chronic Frozen Shoulder & Rotator Cuff Tendinitis',
    treatmentType: 'Non-Surgical Joint Care & Targeted Therapy',
    rating: 5,
    quote: 'Honest and patient-first doctor. He didn’t push for surgery and resolved my severe shoulder pain conservatively.',
    detail: 'I could not raise my right arm or sleep on my right side for six months. Dr. Maharana took the time to listen, examine my MRI, and recommended a structured injection and physiotherapy protocol. Within a month, my pain subsided by 90% and I regained full motion.',
    date: 'August 2026'
  },
  {
    id: 'test-4',
    name: 'Pradeep Routray',
    location: 'Nayapalli, Bhubaneswar',
    condition: 'Comminuted Tibia Fracture',
    treatmentType: 'Fracture Fixation & Bone Healing',
    rating: 5,
    quote: 'Immediate, calm trauma care after my bike accident. The fracture healed perfectly with no limp.',
    detail: 'Following a road accident, my leg bone was broken in multiple spots. Dr. Maharana performed interlocking titanium nailing. His meticulous post-operative follow-up and progressive weight-bearing instructions helped the bone consolidate cleanly.',
    date: 'July 2026'
  }
];

