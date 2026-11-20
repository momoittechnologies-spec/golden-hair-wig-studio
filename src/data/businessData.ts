export interface Branch {
  id: string;
  slug: string;
  name: string;
  isHQ?: boolean;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phones: string[];
  whatsapp: string;
  timings: string;
  googleMapsUrl: string;
  image: string;
  description: string;
  isAddressConfirmed: boolean;
  landmarksAround: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  durability: string;
  idealFor: string;
  description: string;
  benefits: string[];
  process: string[];
  maintenance: string;
  image: string;
  category: 'men' | 'women' | 'all';
  faqs: { question: string; answer: string }[];
}

export interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  clientType: string;
  ageGroup: string;
  serviceUsed: string;
  timeTaken: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "Golden Hair Wig Studio",
  shortName: "Golden Hair Studio",
  tagline: "Non-Surgical Hair Replacement & Premium Hair Systems",
  experienceTagline: "Natural-Looking Hair. Renewed Confidence.",
  proprietor: "Mr. Swarup",
  primaryPhone: "+91 8617264887",
  secondaryPhone: "+91 8609256195",
  rawPrimaryPhone: "918617264887",
  rawSecondaryPhone: "918609256195",
  email: "contact@goldenhairstudio.com",
  rating: "4.9",
  reviewCount: "500+ Verified Consultations",
  experienceYears: "10+ Years Dedicated Experience",
  transformationTime: "60 Minutes",
  cosmeticDisclaimer: "Hair systems and patches are non-surgical, external cosmetic hair replacement solutions. They do not stimulate biological hair growth or alter underlying follicular health. Results, maintenance intervals, and wear duration vary depending on individual scalp characteristics, lifestyle, and climate.",
};

export const BRANCHES: Branch[] = [
  {
    id: "kadapa-hq",
    slug: "kadapa",
    name: "Kadapa (Studio Headquarters)",
    isHQ: true,
    address: "1st Floor, Door No: 4-622-1, Railway Station Road",
    landmark: "Beside Shirdi Sai Sweets, Near Old / New RTC Bus Stand",
    city: "Kadapa",
    state: "Andhra Pradesh",
    pincode: "516001",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:00 AM – 9:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Beside+Shirdi+Sai+Sweets+Railway+Station+Road+Kadapa",
    image: "/images/client/poster_banner.jpg",
    isAddressConfirmed: true,
    description: "Our flagship Kadapa headquarters is equipped with private VIP styling suites, an extensive inventory of French and Swiss lace systems, and dedicated servicing bays led directly by Proprietor Mr. Swarup.",
    landmarksAround: ["Shirdi Sai Sweets", "RTC Bus Stand", "Railway Station Road", "Kadapa Main Bazaar"]
  },
  {
    id: "proddatur",
    slug: "proddatur",
    name: "Proddatur Studio Hub",
    isHQ: false,
    address: "Commercial Center, RTC Bus Stand Road",
    landmark: "Near Clock Tower Area (Exact Door No. shared upon appointment booking)",
    city: "Proddatur",
    state: "Andhra Pradesh",
    pincode: "516360",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Proddatur+Andhra+Pradesh",
    image: "/images/client/poster_banner.jpg",
    isAddressConfirmed: false,
    description: "Serving clients in Proddatur and nearby towns with premium non-surgical hair replacement, custom patch fittings, and routine monthly maintenance sessions in a discreet environment.",
    landmarksAround: ["RTC Bus Stand Road", "Clock Tower Commercial Circle", "Mydukur Road"]
  },
  {
    id: "madanapalle",
    slug: "madanapalle",
    name: "Madanapalle Studio Hub",
    isHQ: false,
    address: "Bangalore Road Commercial Plaza",
    landmark: "Near NTR Circle (Exact Door No. shared upon appointment booking)",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    pincode: "517325",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Madanapalle+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
    isAddressConfirmed: false,
    description: "Conveniently accessible for clients across Annamayya and Chittoor districts, offering custom hair systems, tape attachment, and ladies crown extensions.",
    landmarksAround: ["NTR Circle", "Bangalore Road", "Madanapalle Bus Station"]
  },
  {
    id: "nandyal",
    slug: "nandyal",
    name: "Nandyal Studio Hub",
    isHQ: false,
    address: "Main Commercial Road",
    landmark: "Near Sanjeeva Nagar Gate / Gandhi Chowk (Exact Door No. shared upon appointment booking)",
    city: "Nandyal",
    state: "Andhra Pradesh",
    pincode: "518501",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Nandyal+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
    isAddressConfirmed: false,
    description: "Providing high-density non-surgical hair bonding, clipping systems, and professional re-servicing for clients in Nandyal and Kurnool regions.",
    landmarksAround: ["Gandhi Chowk", "Sanjeeva Nagar Gate", "RTC Bus Stand Nandyal"]
  },
];

export const SERVICES: Service[] = [
  {
    id: "hair-bonding",
    slug: "hair-bonding",
    title: "Non-Surgical Hair Bonding",
    subtitle: "Secure, semi-permanent attachment for active lifestyles",
    badge: "Most Popular",
    duration: "45–60 Mins",
    durability: "3 to 4 Weeks per bonding cycle",
    idealFor: "Active lifestyles, daily commuters, gym enthusiasts, and continuous day-and-night wear",
    description: "Hair Bonding is our most requested non-surgical hair replacement method. A custom-tailored 100% human hair system is bonded to the scalp perimeter using dermatologically tested, hypoallergenic adhesive resins. It integrates seamlessly with your existing hair for a totally undetectable front hairline.",
    benefits: [
      "Allows swimming, shampooing, workouts, and helmet wearing without displacement",
      "Virtually invisible micro-thin front hairline",
      "Exact matching of natural hair color, density, wave, and curl",
      "Zero surgical incisions, zero needles, and zero downtime"
    ],
    process: [
      "Personal scalp contour mapping & custom patch sizing",
      "Hair color, caliber, and density matching",
      "Application of dermatologically safe scalp barrier & bonding resin",
      "Precision cut, seamless blend, and custom salon styling"
    ],
    maintenance: "Requires professional servicing every 25 to 30 days to clean the scalp, recondition hair fibers, and apply fresh bonding adhesive.",
    image: "/images/client/services_card.jpg",
    category: "men",
    faqs: [
      {
        question: "Can I shower and wear a bike helmet with bonded hair?",
        answer: "Yes. Once the bonding adhesive cures (typically within 24 hours), it is waterproof and heat-resistant, permitting normal showers and daily helmet use."
      },
      {
        question: "Does the bonding glue harm my existing hair or scalp?",
        answer: "No. We utilize dermatologically approved, medical-grade adhesives designed specifically for scalp contact. A patch test is conducted for sensitive skin."
      }
    ]
  },
  {
    id: "hair-clipping",
    slug: "hair-clipping",
    title: "Daily Hair Clipping Systems",
    subtitle: "Flexible daily wear with zero glues or chemicals on scalp",
    badge: "Easiest Daily Maintenance",
    duration: "30–45 Mins",
    durability: "1 to 2 Years system lifespan with home removal",
    idealFor: "Clients desiring the freedom to remove the system before sleep or who prefer zero adhesives",
    description: "The Hair Clipping method uses miniature, silicone-cushioned stainless steel clips sewn along the perimeter of the hair system. The clips clasp gently and securely onto your existing side and back hair without tension, allowing you to attach or remove the piece at home in under 15 seconds.",
    benefits: [
      "Zero adhesives, tapes, or chemical contact with your scalp skin",
      "Easily taken off before bedtime and reattached in the morning",
      "Significantly extends system lifespan (often up to 1.5 - 2 years)",
      "Maximum scalp ventilation and breathing during sleep"
    ],
    process: [
      "Balding zone measurement and density matching",
      "Strategic placement of silicone-padded micro-clips",
      "One-on-one demonstration of self-removal and clipping technique",
      "Custom layering to blend naturally with your native hair"
    ],
    maintenance: "Wash gently at home with sulfate-free shampoo every 7–10 days; visit studio every 2–3 months for deep conditioning.",
    image: "/images/client/poster_banner.jpg",
    category: "men",
    faqs: [
      {
        question: "Can the clip system slip off in windy weather?",
        answer: "No. The medical silicone grips hold natural hair firmly without pulling, ensuring stability in routine daily wind and light exercise."
      },
      {
        question: "Do I need to visit the studio every month for clips?",
        answer: "No monthly studio visits are mandatory. You manage cleaning at home and only visit periodically for deep conditioning or haircut touchups."
      }
    ]
  },
  {
    id: "hair-taping",
    slug: "hair-taping",
    title: "Medical Hair Taping Method",
    subtitle: "Gentle, easily replaceable double-sided attachment",
    badge: "Sensitive Scalp Friendly",
    duration: "30–45 Mins",
    durability: "1 to 2 Weeks per tape cycle",
    idealFor: "Individuals with sensitive skin or who prefer DIY bi-weekly home maintenance",
    description: "Hair Taping utilizes hypo-allergenic, medical-grade double-sided adhesive contour strips placed along the polyurethane perimeter of the system. It offers firm hold with gentle release, making it ideal for clients with sensitive skin.",
    benefits: [
      "Very gentle on sensitive or allergy-prone skin",
      "Resistant to perspiration and everyday humidity",
      "Easy peel-and-apply maintenance you can perform yourself",
      "Breathable central lace for effective heat dissipation"
    ],
    process: [
      "Scalp sanitation and anti-bacterial prep",
      "Application of protective scalp barrier",
      "Contour tape strip alignment along perimeter borders",
      "Placement, hairline alignment, and final blending"
    ],
    maintenance: "Tape replacement recommended every 10–14 days for peak hygiene and secure adhesion.",
    image: "/images/client/services_card.jpg",
    category: "men",
    faqs: [
      {
        question: "Can I replace the tapes myself at home?",
        answer: "Yes! We teach you the exact solvent-release and re-taping process so you can service your hair system independently at home."
      }
    ]
  },
  {
    id: "hair-weaving",
    slug: "hair-weaving",
    title: "Non-Surgical Hair Weaving",
    subtitle: "Interlocked perimeter anchor with zero glues on skin",
    badge: "100% Non-Adhesive",
    duration: "60–75 Mins",
    durability: "4 to 6 Weeks between tightening sessions",
    idealFor: "Clients who want continuous 24/7 security without adhesive chemicals",
    description: "In Hair Weaving, a thin, flat micro-track is created along the perimeter of your existing hair, and the base of the hair system is interlocked securely along this track using specialized thread. No adhesives make contact with your scalp.",
    benefits: [
      "Completely adhesive-free — zero chemicals touching your skin",
      "Exceptionally secure — withstands vigorous workouts and swimming",
      "Allows normal showering and active lifestyle routines",
      "Seamless integration with side hair"
    ],
    process: [
      "Perimeter micro-track preparation with existing hair",
      "Careful interlocking and tension-balanced stitching",
      "Comfort inspection to prevent any traction stress",
      "Styling and finishing razor blend"
    ],
    maintenance: "Tightening and track repositioning required every 30–45 days as your biological perimeter hair grows.",
    image: "/images/client/services_card.jpg",
    category: "men",
    faqs: [
      {
        question: "Does weaving hurt or cause tension headaches?",
        answer: "When executed by our trained specialists, the tension is balanced comfortably so that it feels natural within a few hours of fitting."
      }
    ]
  },
  {
    id: "ladies-extensions",
    slug: "ladies-extensions",
    title: "Ladies Hair Toppers & Extensions",
    subtitle: "Crown volume restoration and invisible length enhancement",
    badge: "Women's Specialist",
    duration: "45–60 Mins",
    durability: "1 to 2 Years system lifespan",
    idealFor: "Women experiencing crown thinning, widening partitions, or seeking instant volume",
    description: "Engineered specifically for women facing diffuse thinning across the crown or a widening center part. Our lightweight, breathable silk-base toppers and 100% human hair extensions blend invisibly with your natural locks.",
    benefits: [
      "Instantly conceals visible scalp along partitions",
      "Crafted from 100% virgin human hair that can be curled, colored, or heat-styled",
      "Ultra-lightweight silk mesh prevents scalp sweating",
      "Private VIP consultation suites for complete privacy"
    ],
    process: [
      "Crown thinning assessment & partition mapping",
      "Texture, color, and length matching (16\" to 30\")",
      "Gentle clip-in or micro-bead integration",
      "Face-framing haircut and salon styling"
    ],
    maintenance: "Simple routine home maintenance with periodic salon conditioning visits.",
    image: "/images/client/services_card.jpg",
    category: "women",
    faqs: [
      {
        question: "Can I style and wash the topper like my own hair?",
        answer: "Yes, because it is made of 100% human hair, you can wash, condition, blow-dry, and heat-style it just like your own hair."
      }
    ]
  },
  {
    id: "patch-servicing",
    slug: "patch-servicing",
    title: "System Servicing & Re-Styling",
    subtitle: "Comprehensive hygiene, conditioning, and fresh re-fitting",
    badge: "Essential Routine Care",
    duration: "30–45 Mins",
    durability: "Fresh 3–4 week hold",
    idealFor: "All existing hair system wearers needing routine monthly maintenance",
    description: "Regular servicing maintains optimal scalp hygiene and keeps hair fibers soft, bouncy, and undetectable. Service includes gentle detachment, ultrasonic base cleansing, argan oil deep conditioning, scalp exfoliation, and fresh bonding.",
    benefits: [
      "Substantially prolongs the usable lifespan of your hair system",
      "Restores natural sheen and removes environmental buildup",
      "Thorough scalp cleansing and anti-bacterial tonic treatment",
      "Precision haircut touchup and fresh restyling included"
    ],
    process: [
      "Painless solvent-release detachment",
      "Ultrasonic base cleaning and adhesive residue removal",
      "Scalp wash, conditioning massage, and sanitization",
      "Fresh bonding/taping and precision restyling"
    ],
    maintenance: "Recommended every 25 to 30 days for continuous comfort.",
    image: "/images/client/poster_banner.jpg",
    category: "all",
    faqs: [
      {
        question: "How long does a routine service session take?",
        answer: "Typically 35 to 45 minutes from arrival to freshly styled exit."
      }
    ]
  }
];

export const COMPARISON_TABLE = [
  {
    feature: "Time to Full Results",
    goldenStudio: "Just 60 Minutes (Instant)",
    transplantSurgery: "9 to 12 Months waiting period",
    cheapWigs: "Instant, but synthetic & unstyled"
  },
  {
    feature: "Surgical Invasiveness",
    goldenStudio: "100% Non-Surgical Cosmetic Procedure",
    transplantSurgery: "Surgical incisions, local anesthesia & stitches",
    cheapWigs: "Non-surgical, but uncomfortable elastic"
  },
  {
    feature: "Hair Density Outcome",
    goldenStudio: "Full, Custom-Selected Density",
    transplantSurgery: "Limited by donor hair supply (often sparse)",
    cheapWigs: "Overly dense and unnatural plastic sheen"
  },
  {
    feature: "Investment Level",
    goldenStudio: "Accessible Regional Pricing (₹8,000 – ₹18,000)",
    transplantSurgery: "Substantial Medical Cost (₹60,000 – ₹2,50,000+)",
    cheapWigs: "Low cost, but degrades rapidly"
  },
  {
    feature: "Reversibility",
    goldenStudio: "100% Reversible; Adjust styles anytime",
    transplantSurgery: "Permanent scalp scarring; non-reversible",
    cheapWigs: "Reversible, but uncustomizable"
  },
  {
    feature: "Active Sports & Helmets",
    goldenStudio: "Secure hold with professional bonding",
    transplantSurgery: "Strict limitations for several months",
    cheapWigs: "Prone to slipping in wind or helmets"
  }
];

export const FAQS = [
  {
    question: "How long does a non-surgical hair replacement fitting take?",
    answer: "A standard custom fitting and styling session takes approximately 60 minutes. You arrive for your private consultation and leave the studio with a complete, styled head of natural human hair."
  },
  {
    question: "Will anyone be able to notice that I am wearing a hair system?",
    answer: "No. We utilize ultra-fine Swiss and French lace bases combined with micro-thin polyurethane borders. Every hair strand is hand-tied with invisible micro-knots, allowing your natural scalp color to show through seamlessly."
  },
  {
    question: "Can I shower, swim, exercise, and wear a helmet normally?",
    answer: "Yes. With our professional Hair Bonding and Weaving procedures, the hair system is securely attached with water-resistant, dermatologically tested materials. You can participate in sports, ride two-wheelers with helmets, and shower with confidence."
  },
  {
    question: "Does non-surgical hair replacement cure or reverse biological hair loss?",
    answer: "No. Hair systems are external, cosmetic prosthetic additions designed to restore aesthetic appearance and density. They do not stimulate biological follicle regrowth or treat underlying alopecia."
  },
  {
    question: "What is the key difference between Hair Bonding and Hair Clipping?",
    answer: "Hair Bonding stays fixed to your scalp continuously for 3 to 4 weeks before needing a routine service. Hair Clipping uses gentle silicone-backed clips attached to your natural side hair, allowing you to remove the system before sleeping and reattach it in seconds."
  },
  {
    question: "Do you have discreet solutions for women experiencing hair thinning?",
    answer: "Yes. We offer specialized silk-base crown toppers and 100% virgin human hair extensions designed to conceal crown thinning and widening partitions in complete privacy."
  },
  {
    question: "How frequently will I need maintenance or servicing?",
    answer: "Bonded systems require monthly servicing (every 25–30 days) for scalp hygiene and adhesive renewal. Clip-in systems can be washed at home and need studio reconditioning only every 2–3 months."
  },
  {
    question: "Do I need to schedule an appointment before visiting?",
    answer: "We strongly recommend booking in advance via WhatsApp or phone call. This guarantees dedicated time with Mr. Swarup or our senior stylists in a private VIP styling suite."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh R.",
    location: "Kadapa",
    age: "31",
    rating: 5,
    title: "Gained my confidence back before my wedding",
    comment: "I had significant crown thinning and was worried about my wedding photographs. Swarup sir explained everything transparently and completed my hair bonding in an hour. Looks completely natural in daylight photos.",
    service: "Non-Surgical Hair Bonding",
    verified: true
  },
  {
    id: 2,
    name: "Venkat S.",
    location: "Proddatur",
    age: "28",
    rating: 5,
    title: "Completely natural front hairline",
    comment: "I ride my motorcycle every day for work and wear a helmet. The bonded system from Golden Hair Studio stays completely secure and comfortable. Excellent support from the team.",
    service: "Swiss Lace Hair System",
    verified: true
  },
  {
    id: 3,
    name: "Sujatha K.",
    location: "Madanapalle",
    age: "38",
    rating: 5,
    title: "Wonderful solution for crown partition thinning",
    comment: "I was hesitant for months about seeking hair help. The private consultation suite and gentle silk topper completely eased my worries. Very respectful and professional service.",
    service: "Ladies Crown Topper",
    verified: true
  },
  {
    id: 4,
    name: "Kishore K.",
    location: "Nandyal",
    age: "34",
    rating: 5,
    title: "Affordable and reliable monthly servicing",
    comment: "Monthly servicing is quick, clean, and priced very fairly. The staff in Nandyal treats clients with genuine care and attentiveness.",
    service: "Hair Taping & Servicing",
    verified: true
  }
];
