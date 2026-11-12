export interface Treatment {
  id: string;
  category: 'surgical' | 'non-surgical' | 'sports' | 'spine';
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  symptoms: string[];
  diagnosticApproach: string[];
  treatmentOptions: string[];
  surgicalTechnique?: string;
  recoveryTimeline: string;
  whenToConsult: string;
  faqs: { q: string; a: string }[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'knee-replacement',
    category: 'surgical',
    title: 'Knee Replacement',
    tagline: 'Total, Partial & Robotic-Assisted Joint Restoration',
    shortDesc: 'State-of-the-art total and partial knee replacement using advanced robotic-assisted alignment for long-term mobility and minimal pain.',
    fullDesc: 'Severe knee osteoarthritis causes unbearable pain, joint stiffness, and loss of walking endurance. Dr. Pradeepta Kumar Maharana brings fellowship-trained expertise in Robotic Knee Replacement and Total Knee Arthroplasty to restore physiological joint kinematics with sub-millimeter precision and tissue preservation.',
    badge: 'Robotic & Conventional',
    iconName: 'Activity',
    symptoms: [
      'Severe pain while walking, climbing stairs, or standing',
      'Persistent pain even while resting or sleeping',
      'Chronic swelling and inflammation not responding to medication',
      'Knee deformity (bowing inward or outward - Varus/Valgus)',
      'Severe stiffness preventing bending or straightening the leg'
    ],
    diagnosticApproach: [
      'Comprehensive weight-bearing 3-view digital knee X-rays (AP, Lateral, Skyline)',
      'Assessment of mechanical axis and ligament balance',
      'CT scan based 3D modelling for robotic pre-operative planning'
    ],
    treatmentOptions: [
      'Robotic-Assisted Total Knee Replacement (TKR)',
      'Unicondylar (Partial) Knee Replacement for single-compartment disease',
      'Cruciate-retaining and posterior-stabilised modern prosthetic implants',
      'Accelerated Rapid Recovery rehabilitation pathway'
    ],
    surgicalTechnique: 'Utilises optical tracking and robotic arm assistance to ensure exact implant positioning aligned with the patient’s natural soft-tissue envelope.',
    recoveryTimeline: 'Walking with support on Day 1; independent daily activities in 2–4 weeks; full functional recovery in 8–12 weeks.',
    whenToConsult: 'When knee pain severely limits everyday walking, stair climbing, and conservative medications or injections no longer offer relief.',
    faqs: [
      {
        q: 'What is the advantage of Robotic Knee Replacement?',
        a: 'Robotic technology provides real-time 3D feedback and sub-millimeter precision, reducing soft tissue trauma, ensuring optimal ligament balance, and promoting faster functional recovery.'
      },
      {
        q: 'How long does a modern knee implant last?',
        a: 'Modern high-grade cobalt-chrome and titanium implants with highly cross-linked polyethylene inserts typically last 20 to 25+ years with proper post-operative care.'
      }
    ]
  },
  {
    id: 'arthroscopy',
    category: 'surgical',
    title: 'Arthroscopic Surgery',
    tagline: 'Minimally Invasive Keyhole Joint Procedures',
    shortDesc: 'Precision keyhole arthroscopy for knee and shoulder joints, including meniscus repair, ACL reconstruction, and cartilage preservation.',
    fullDesc: 'Arthroscopy is an advanced minimally invasive surgical technique that uses high-definition miniature cameras and specialized micro-instruments through tiny keyhole incisions. Dr. Maharana specialises in complex ligamentous reconstructions and tissue-preserving repairs with reduced post-operative discomfort.',
    badge: 'Keyhole Precision',
    iconName: 'Sparkles',
    symptoms: [
      'Sudden popping or tearing sensation during sports or movement',
      'Knee giving way, instability, or feeling loose',
      'Joint locking or inability to fully straighten the knee',
      'Persistent effusion (fluid swelling) after a twisting injury'
    ],
    diagnosticApproach: [
      'High-resolution 3T MRI scanning of the affected joint',
      'Specialised clinical stability tests (Lachman, Pivot Shift, McMurray tests)',
      'Diagnostic diagnostic arthroscopic visualization'
    ],
    treatmentOptions: [
      'ACL (Anterior Cruciate Ligament) Reconstruction',
      'PCL, MCL, and multi-ligament joint reconstructions',
      'Meniscus repair using inside-out and all-inside suture anchors',
      'Articular cartilage restorative procedures (microfracture, chondroplasty)'
    ],
    surgicalTechnique: 'Performed via 2 to 3 micro-portals (sub-centimeter) under regional anesthesia with minimal blood loss and rapid discharge.',
    recoveryTimeline: 'Walking with brace within 24 hours; structured rehabilitation over 3 to 6 months for return to competitive sports.',
    whenToConsult: 'Immediately after an acute twisting knee injury with swelling, or if the knee repeatedly gives way or catches.',
    faqs: [
      {
        q: 'Is hospital stay long for arthroscopy?',
        a: 'Most arthroscopic procedures are daycare or 24-hour overnight stays, allowing patients to return home the very next day.'
      },
      {
        q: 'Can a torn meniscus be saved instead of cut?',
        a: 'Dr. Maharana strongly prioritizes meniscus preservation and biological repair whenever the vascularity and tear pattern permit, protecting against future arthritis.'
      }
    ]
  },
  {
    id: 'shoulder-care',
    category: 'surgical',
    title: 'Shoulder Care & Arthroscopy',
    tagline: 'Restoring Shoulder Strength, Stability & Arc of Motion',
    shortDesc: 'Specialized evaluation and management of rotator cuff tears, shoulder impingement, recurrent dislocations, and frozen shoulder.',
    fullDesc: 'The shoulder is the body’s most mobile and complex joint. Disorders of the rotator cuff, labrum, and capsule can cause crippling night pain and weakness. Dr. Maharana provides structured conservative rehabilitation as well as advanced arthroscopic rotator cuff repairs and labral stabilisations.',
    badge: 'Rotator Cuff & Labrum',
    iconName: 'Shield',
    symptoms: [
      'Dull aching pain deep within the shoulder, especially at night',
      'Inability to sleep on the affected shoulder',
      'Sharp pain when lifting the arm overhead or reaching behind the back',
      'Feeling of shoulder slipping out of joint (subluxation or dislocation)',
      'Progressive loss of motion (frozen shoulder / adhesive capsulitis)'
    ],
    diagnosticApproach: [
      'Targeted rotator cuff strength and impingement tests (Neer, Hawkins-Kennedy, Jobe tests)',
      'Dedicated shoulder MRI to assess tendon retraction and muscle atrophy',
      'Plain radiographs to rule out acromial spurs and glenohumeral arthritis'
    ],
    treatmentOptions: [
      'Ultrasound-guided subacromial injections and hydrodilatation',
      'Arthroscopic Rotator Cuff Repair using suture anchors',
      'Bankart repair for recurrent shoulder dislocations',
      'Subacromial decompression and acromioplasty'
    ],
    surgicalTechnique: 'All-arthroscopic double-row tendon re-attachment preserving the deltoid muscle attachment for swift recovery.',
    recoveryTimeline: 'Sling protection for 4–6 weeks; passive assisted motion started early; full functional restoration in 3–4 months.',
    whenToConsult: 'If you have persistent shoulder pain lasting more than 2 weeks, weakness lifting your arm, or disturbed sleep due to pain.',
    faqs: [
      {
        q: 'How do I know if my rotator cuff is torn?',
        a: 'A torn rotator cuff typically presents with marked weakness when lifting the arm, sudden sharp pain, and severe pain when lying on that side. An MRI confirms the diagnosis.'
      }
    ]
  },
  {
    id: 'sports-injuries',
    category: 'sports',
    title: 'Sports Injury Management',
    tagline: 'FIFA-Certified Sports Medicine & Return-to-Play',
    shortDesc: 'Comprehensive athletic injury care, ligament restoration, muscle strain recovery, and scientifically calibrated return-to-sport programs.',
    fullDesc: 'As a FIFA-Certified Sports Medicine Specialist, Dr. Pradeepta Kumar Maharana delivers athlete-focused care from acute injury management on the pitch to biomechanical correction and sports nutrition. Every athlete receives an individualised treatment roadmap designed to safely accelerate their return to peak physical performance.',
    badge: 'FIFA-Certified Specialist',
    iconName: 'Trophy',
    symptoms: [
      'Acute joint sprains, sudden ligament tears, and joint effusions',
      'Muscle strains in hamstrings, quadriceps, or calves',
      'Tendonitis (patellar jumper’s knee, Achilles tendinopathy)',
      'Recurrent sports-related joint instability and apprehension'
    ],
    diagnosticApproach: [
      'Kinematic movement screening and joint laxity quantification',
      'Dynamic high-resolution ultrasound & 3T MRI diagnostics',
      'Cardiopulmonary and functional performance assessments'
    ],
    treatmentOptions: [
      'Biological regenerative injections (PRP / Platelet-Rich Plasma)',
      'Precision sports physiotherapy and neuromuscular retraining',
      'Minimally invasive arthroscopic ligament repairs',
      'Graduated criteria-based Return-to-Play (RTP) protocols'
    ],
    recoveryTimeline: 'Mild sprains: 2–4 weeks; Ligament reconstructions: structured 6–9 month return-to-competition protocol.',
    whenToConsult: 'Any sports-related joint swelling, sudden pop, muscle pull, or recurrent joint instability during exercise.',
    faqs: [
      {
        q: 'What makes FIFA-certified sports medicine different?',
        a: 'It combines rigorous global standards of injury prevention, evidence-based biomechanical rehabilitation, and tailored return-to-play criteria to minimise re-injury rates.'
      }
    ]
  },
  {
    id: 'fracture-care',
    category: 'surgical',
    title: 'Fracture Care & Trauma',
    tagline: 'Expert Bone Healing, Internal Fixation & Trauma Care',
    shortDesc: 'Prompt evaluation and anatomic fixation of simple and complex fractures using biological plating, intramedullary nails, and modern casting.',
    fullDesc: 'Fractures require meticulous biological handling to preserve blood supply while restoring anatomical bone alignment. Dr. Maharana offers comprehensive trauma care ranging from non-operative functional casting to rigid open reduction internal fixation (ORIF) with titanium implants.',
    badge: 'Trauma & Bone Healing',
    iconName: 'Zap',
    symptoms: [
      'Intense localized bone pain following a fall, road accident, or direct blow',
      'Visible deformity, limb shortening, or unnatural angulation',
      'Rapid swelling, bruising, and inability to bear weight or move the limb',
      'Bony tenderness and crepitus (grating feeling on touch)'
    ],
    diagnosticApproach: [
      'High-resolution multi-view digital radiographs',
      '3D Reconstruction CT scans for complex intra-articular fractures (wrist, ankle, tibial plateau, hip)'
    ],
    treatmentOptions: [
      'Anatomical internal fixation with low-profile titanium locking plates and screws',
      'Intramedullary interlocking nailing for long bone fractures (femur, tibia, humerus)',
      'Conservative casting and waterproof synthetic immobilization',
      'Management of non-unions, delayed unions, and malunited fractures'
    ],
    recoveryTimeline: 'Initial bone bridging in 6–8 weeks; complete remodeling and bone consolidation in 3–6 months with progressive weight bearing.',
    whenToConsult: 'Any severe fall or trauma accompanied by pain, swelling, deformity, or inability to use the injured limb.',
    faqs: [
      {
        q: 'Do fracture plates and screws need to be removed later?',
        a: 'In most adults, modern biocompatible titanium implants remain safely in the body permanently without issue unless they cause local friction or irritation.'
      }
    ]
  },
  {
    id: 'spine-care',
    category: 'spine',
    title: 'Spine Care & Back Pain',
    tagline: 'Evidence-Based Non-Surgical Spine Management',
    shortDesc: 'Comprehensive assessment and targeted conservative treatment for cervical neck pain, lumbar back pain, disc herniations, and sciatica.',
    fullDesc: 'Over 85% of spine disorders can be successfully managed without spinal surgery. Dr. Maharana adopts a conservative-first approach focusing on core stabilization, postural alignment, epidural/nerve root blocks when indicated, and personalized lifestyle ergonomics.',
    badge: 'Conservative & Relieve',
    iconName: 'Compass',
    symptoms: [
      'Persistent dull or sharp lower back pain worsening with sitting or bending',
      'Shooting radiating pain down the leg (sciatica) or arm (cervical radiculopathy)',
      'Numbness, tingling sensations, or "pins and needles" in the toes or fingers',
      'Morning stiffness in the lumbar spine relieved by movement'
    ],
    diagnosticApproach: [
      'Neurological sensory, motor, and deep tendon reflex evaluation',
      'High-definition lumbar or cervical spine MRI for nerve root compression',
      'Dynamic flexion-extension spinal radiographs'
    ],
    treatmentOptions: [
      'Structured physical rehabilitation focusing on core muscle balance',
      'Targeted spinal injections (transforaminal / epidural blocks)',
      'Ergonomic workstation assessment and posture retraining',
      'Pharmacological neuropathic pain modulators'
    ],
    recoveryTimeline: 'Acute episodes resolve in 2–6 weeks with targeted therapy; chronic maintenance programs ensure sustained relief.',
    whenToConsult: 'When back or neck pain persists past 10 days, radiates into the limbs, or causes tingling or weakness.',
    faqs: [
      {
        q: 'Do most disc herniations require surgery?',
        a: 'No, the vast majority of lumbar disc herniations resolve naturally through conservative care, targeted exercises, and anti-inflammatory therapy over 6 to 12 weeks.'
      }
    ]
  },
  {
    id: 'non-surgical-care',
    category: 'non-surgical',
    title: 'Non-Surgical Joint Care',
    tagline: 'Preserving Natural Joints Through Innovative Conservative Care',
    shortDesc: 'Comprehensive joint preservation protocols including viscosupplementation, PRP injections, custom bracing, and arthritis rehabilitation.',
    fullDesc: 'Surgery is only one option in modern orthopaedics. At Dr. Maharana Bone & Joint Clinic, non-surgical intervention is our first line of defence for early to moderate osteoarthritis, tendinopathies, and chronic joint stiffness. We help patients delay or completely avoid surgery.',
    badge: 'Joint Preservation',
    iconName: 'HeartPulse',
    symptoms: [
      'Early to moderate joint pain on initiating movement',
      'Morning joint stiffness lasting under 30 minutes',
      'Mild swelling or grating sound in the knees during squatting',
      'Discomfort during weather changes or prolonged walking'
    ],
    diagnosticApproach: [
      'Kellgren-Lawrence grading of joint space narrowing via digital radiography',
      'Serum inflammatory markers and metabolic bone profile testing',
      'Biomechanical gait analysis and foot posture assessment'
    ],
    treatmentOptions: [
      'Intra-articular Viscosupplementation (Hyaluronic Acid gel injections)',
      'Autologous Platelet-Rich Plasma (PRP) therapy',
      'Custom unloader knee bracing and orthotic insoles',
      'Dedicated joint lubrication and strength preservation protocols'
    ],
    recoveryTimeline: 'Symptomatic relief observed within 7–14 days; sustained benefits for 6 to 12 months with periodic monitoring.',
    whenToConsult: 'At the first sign of regular knee or joint aching to prevent progressive joint cartilage loss.',
    faqs: [
      {
        q: 'What is viscosupplementation (gel injection)?',
        a: 'It involves injecting medical-grade hyaluronic acid directly into the knee joint to supplement the natural synovial fluid, reducing friction and cushioning impact.'
      }
    ]
  }
];

export const SYMPTOMS_GUIDE = [
  {
    symptom: 'Knee pain when climbing stairs or squatting',
    recommendation: 'Knee Replacement / Joint Preservation',
    treatmentId: 'knee-replacement',
    description: 'Indicative of patellofemoral cartilage wear or early-to-advanced osteoarthritis.'
  },
  {
    symptom: 'Sports injury or twisted knee with a "pop"',
    recommendation: 'Arthroscopy & Ligament Repair',
    treatmentId: 'arthroscopy',
    description: 'Likely involves an ACL, MCL, or meniscus tear requiring MRI evaluation.'
  },
  {
    symptom: 'Shoulder pain when lifting arm overhead',
    recommendation: 'Shoulder Care & Rotator Cuff',
    treatmentId: 'shoulder-care',
    description: 'Classic sign of subacromial impingement, rotator cuff tendinitis, or tear.'
  },
  {
    symptom: 'Back or neck pain radiating down the leg/arm',
    recommendation: 'Spine Care & Nerve Evaluation',
    treatmentId: 'spine-care',
    description: 'Suggests nerve root impingement or disc protrusion; 90% treatable non-surgically.'
  },
  {
    symptom: 'A fall, accident, or sudden bone tenderness',
    recommendation: 'Fracture Care & Trauma Assessment',
    treatmentId: 'fracture-care',
    description: 'Requires rapid digital X-ray to diagnose hairline or displaced fractures.'
  },
  {
    symptom: 'Joint stiffness, dull ache & swelling',
    recommendation: 'Non-Surgical Joint Preservation',
    treatmentId: 'non-surgical-care',
    description: 'Ideal candidate for hyaluronic acid gel injections, PRP, and joint bracing.'
  }
];

