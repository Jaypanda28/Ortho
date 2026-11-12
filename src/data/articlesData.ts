export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  reviewer: string;
  content: string[];
  keyTakeaways: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'what-is-robotic-knee-replacement',
    title: 'What Is Robotic Knee Replacement? Precision, Kinematics & Recovery',
    category: 'Knee Surgery',
    readTime: '5 min read',
    date: 'Updated November 2026',
    excerpt: 'Discover how robotic-assisted surgical technology allows sub-millimeter prosthetic positioning tailored to your unique anatomical joint line.',
    author: 'Medical Editorial Board',
    reviewer: 'Dr. Pradeepta Kumar Maharana, DNB Ortho, Fellowship Robotic TKR',
    keyTakeaways: [
      'Robotic surgery is surgeon-controlled; the robotic arm acts as an ultra-precise positioning guide.',
      'Enables dynamic ligament balancing throughout the 0° to 120° arc of motion.',
      'Significantly less post-operative soft tissue trauma and quicker rehabilitation.',
      'Longer implant longevity due to optimal anatomical alignment.'
    ],
    content: [
      'Robotic-assisted knee replacement represents the most significant technological leap forward in orthopaedic surgery over the past decade. Contrary to common belief, the robot does not perform the surgery independently. Instead, it serves as a high-precision digital extension of the surgeon’s hands and clinical judgment.',
      'Prior to surgery, advanced computed tomography (CT) or optical tracking maps the exact 3D contours of your knee joint. During the procedure, infrared cameras track bone movement in real-time. This provides the surgeon with instantaneous millimeter-level feedback on implant sizing, bone resection depth, and ligament tension.',
      'By removing only the damaged arthritic cartilage and bone while respecting the surrounding collateral ligaments and tendon envelopes, patients experience markedly lower post-operative pain, reduced surgical swelling, and a much more natural-feeling joint.',
      'Most patients undergoing robotic knee replacement are encouraged to stand and walk with a support frame within hours of the procedure under our Rapid Recovery joint protocol.'
    ]
  },
  {
    id: 'art-2',
    slug: 'total-vs-partial-knee-replacement',
    title: 'Total vs. Partial Knee Replacement: Which Approach Is Right for You?',
    category: 'Joint Restoration',
    readTime: '6 min read',
    date: 'Updated November 2026',
    excerpt: 'Learn when partial (unicondylar) knee replacement is preferable to a total joint replacement and how to identify single-compartment disease.',
    author: 'Orthopaedic Clinical Insights',
    reviewer: 'Dr. Pradeepta Kumar Maharana, DNB Ortho',
    keyTakeaways: [
      'The knee consists of three compartments: medial (inside), lateral (outside), and patellofemoral (kneecap).',
      'If arthritis is confined to only one compartment with intact cruciate ligaments, partial knee replacement can be ideal.',
      'Partial knee replacement preserves both the ACL and PCL, resulting in a more natural knee proprioception.',
      'Total knee replacement remains the definitive gold standard for multi-compartment advanced arthritis.'
    ],
    content: [
      'When knee arthritis strikes, it rarely affects all three compartments of the knee simultaneously in its early stages. Many patients suffer primarily from medial (inner) compartment cartilage erosion while the rest of the joint remains healthy.',
      'In a Partial Knee Replacement (unicondylar arthroplasty), only the damaged worn compartment is resurfaced with a small metal and polyethylene implant. The healthy bone, undamaged cartilage, and critically, the natural Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) are left intact.',
      'The advantage? Patients retain their natural joint kinematics, sensory nerve receptors, and joint proprioception. The incision is smaller, blood loss is minimal, and recovery is typically twice as fast as a total replacement.',
      'However, if arthritis has spread to multiple compartments or if there is severe ligamentous laxity or angular deformity exceeding 15 degrees, a Total Knee Replacement remains the safest, most durable, and definitive solution.'
    ]
  },
  {
    id: 'art-3',
    slug: 'understanding-acl-injuries-and-arthroscopy',
    title: 'Understanding ACL Tears & Arthroscopic Reconstruction in Athletes',
    category: 'Sports Medicine',
    readTime: '7 min read',
    date: 'Updated November 2026',
    excerpt: 'Everything athletes and active individuals need to know about anterior cruciate ligament tears, graft choices, and safe return to sports.',
    author: 'Sports Medicine Review',
    reviewer: 'Dr. Pradeepta Kumar Maharana, FIFA-Certified Sports Medicine Specialist',
    keyTakeaways: [
      'ACL tears frequently occur during non-contact deceleration, pivoting, or landing.',
      'A distinct "popping" sound accompanied by immediate joint swelling within 2 hours is highly suggestive of an ACL tear.',
      'Keyhole arthroscopy reconstructs the torn ligament using an autograft (hamstring or patellar tendon).',
      'Return to high-impact cutting sports requires meeting objective neuromuscular criteria, usually at 6 to 9 months.'
    ],
    content: [
      'The Anterior Cruciate Ligament (ACL) is the primary stabilizer preventing anterior translation and rotational subluxation of the tibia relative to the femur. Twisting knee injuries in football, cricket, basketball, or sudden pivoting at work can cause this critical stabilizer to rupture.',
      'Because the ACL has poor intra-articular vascularity, a complete rupture cannot heal on its own. While sedentary older individuals may occasionally manage with dedicated physiotherapy, young, active individuals and athletes with an unstable knee risk damaging their protective meniscus cushions and developing early-onset arthritis.',
      'Arthroscopic ACL Reconstruction utilizes high-definition arthroscopic optical systems through two 5mm incisions. An autograft (usually the patient’s own hamstring tendons) is routed through precise anatomical bone tunnels and secured with titanium cortical buttons and biodegradable interference screws.',
      'Dr. Maharana emphasizes a comprehensive rehabilitation pathway incorporating neuromuscular control, quad-to-hamstring strength balance, and FIFA 11+ injury prevention drills before clearing an athlete to return to match play.'
    ]
  },
  {
    id: 'art-4',
    slug: 'common-causes-of-shoulder-pain',
    title: 'Common Causes of Shoulder Pain: From Impingement to Rotator Cuff Tears',
    category: 'Shoulder Care',
    readTime: '5 min read',
    date: 'Updated November 2026',
    excerpt: 'Why does your shoulder ache when reaching overhead or sleeping on your side? Understand the biomechanics of shoulder pathology.',
    author: 'Musculoskeletal Health Team',
    reviewer: 'Dr. Pradeepta Kumar Maharana, Fellowship Knee & Shoulder Arthroscopy',
    keyTakeaways: [
      'Shoulder pain at night is the hallmark indicator of rotator cuff pathology.',
      'Subacromial impingement is early inflammation; untreated, it can progress to full-thickness tendon tearing.',
      'Frozen shoulder (adhesive capsulitis) causes profound loss of external rotation and is common in diabetic patients.',
      'Early clinical evaluation prevents irreversible muscle retraction and fatty infiltration.'
    ],
    content: [
      'The shoulder joint relies heavily on four stabilizing muscles known collectively as the Rotator Cuff (Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis). Unlike the deep socket of the hip, the shoulder is like a golf ball balanced on a golf tee, granting remarkable mobility at the expense of inherent bony stability.',
      'When repeated overhead activities or age-related tendon degeneration occur, the supraspinatus tendon can rub against the underside of the acromion bone—a condition known as Subacromial Impingement.',
      'If ignored, micro-tears can coalesce into full-thickness rotator cuff tears. Symptoms include difficulty combing hair, reaching into the backseat of a car, and sharp nocturnal pain when resting on the injured shoulder.',
      'Modern arthroscopic repair allows us to re-anchor the detached tendon securely to the humerus using biocompatible suture anchors through keyhole portals, preserving the overlying deltoid muscle and accelerating functional recovery.'
    ]
  },
  {
    id: 'art-5',
    slug: 'when-does-knee-pain-require-specialist-evaluation',
    title: 'When Does Knee Pain Require Specialist Evaluation? 5 Red Flag Signs',
    category: 'Patient Education',
    readTime: '4 min read',
    date: 'Updated November 2026',
    excerpt: 'Not all knee pain requires surgery, but certain red flags demand immediate specialist consultation to prevent long-term joint damage.',
    author: 'Clinic Patient Care',
    reviewer: 'Dr. Pradeepta Kumar Maharana, Orthopaedic Consultant',
    keyTakeaways: [
      'Inability to bear weight immediately following trauma requires an urgent X-ray.',
      'True joint locking (knee getting stuck in flexion) points toward an unstable meniscus bucket-handle tear.',
      'Night pain waking you from sleep signifies advanced joint degeneration or inflammatory synovitis.',
      'Visible deformity or bowed legs indicates progressive joint collapse.'
    ],
    content: [
      'Occasional knee soreness after heavy yard work, walking up a steep incline, or strenuous sports is common and frequently responds to rest, ice, and gentle stretching. However, persistent or deteriorating symptoms should never be ignored.',
      'Here are five signs that warrant an immediate consultation with an orthopaedic specialist: 1) The knee locks mechanically or gives way without warning; 2) Significant swelling occurs within two hours of a twisting injury; 3) You cannot bear weight on the leg for more than four steps; 4) Pain persists past 10 days despite rest; 5) You notice visible bowing (curving) of the leg.',
      'At Dr. Maharana Bone & Joint Clinic, our philosophy begins with comprehensive clinical examination. Before discussing any surgical options, we thoroughly review previous imaging, assess conservative therapy alternatives, and partner with you on a personalised mobility roadmap.'
    ]
  },
  {
    id: 'art-6',
    slug: 'how-to-protect-your-joint-health',
    title: 'How to Protect Your Joint Health: Evidence-Based Nutrition & Exercise',
    category: 'Prevention & Wellness',
    readTime: '5 min read',
    date: 'Updated November 2026',
    excerpt: 'Proven lifestyle modifications, anti-inflammatory nutrition, and joint-friendly exercises to keep cartilage resilient and healthy for decades.',
    author: 'Orthopaedic Wellness Team',
    reviewer: 'Dr. Pradeepta Kumar Maharana, Nutrition & Fitness Consultant',
    keyTakeaways: [
      'Every kilogram of excess body weight exerts 4 kilograms of mechanical pressure across the knee joints during walking.',
      'Low-impact aerobic exercises like cycling and swimming nourish cartilage without pounding compressive stress.',
      'Adequate Vitamin D3 and calcium levels are foundational for preventing subchondral bone collapse.',
      'Strengthening the quadriceps and hamstrings unloads compressive forces from the knee joint surfaces.'
    ],
    content: [
      'Cartilage has no direct blood supply; it relies entirely on the diffusion of nutrients from synovial fluid, a process driven by cyclic joint motion. This is why "motion is lotion" for aching joints.',
      'Weight management is the single most powerful conservative intervention for knee joint longevity. Losing just 5 kilograms can relieve up to 20 kilograms of repetitive impact force per step, dramatically easing pain and slowing arthritis progression.',
      'Focus on an anti-inflammatory diet rich in Omega-3 fatty acids, vibrant vegetables, adequate hydration, and monitored Vitamin D3 and B12 supplementation. Combining this with non-weight-bearing quadriceps isometric exercises provides the ultimate natural shock absorber for your knees.'
    ]
  }
];

