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
  shortTitle: string;
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
  category: 'hair-replacement' | 'core-services' | 'specialized';
  faqs: { question: string; answer: string }[];
}

export const BUSINESS_INFO = {
  name: "Golden Hair Wig Studio",
  shortName: "Golden Hair Studio",
  tagline: "Personalized Non-Surgical Hair Replacement",
  experienceTagline: "Natural-Looking Hair Replacement, Designed for Your Confidence",
  proprietor: "Mr. Swarup",
  primaryPhone: "+91 8617264887",
  secondaryPhone: "+91 8609256195",
  rawPrimaryPhone: "918617264887",
  rawSecondaryPhone: "918609256195",
  email: "contact@goldenhairstudio.com",
  rating: "4.9",
  reviewCount: "500+ Consultations",
  experienceYears: "10+ Years",
  transformationTime: "60 Minutes",
  cosmeticDisclaimer: "Hair systems and patches are non-surgical, external cosmetic hair replacement solutions. They do not stimulate biological hair growth or alter underlying follicular health. Results, maintenance intervals, and wear duration vary depending on individual scalp characteristics, lifestyle, and climate.",
};

export const BRANCHES: Branch[] = [
  {
    id: "kadapa-hq",
    slug: "kadapa",
    name: "Kadapa Headquarters",
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
    description: "Our flagship Kadapa headquarters features private VIP styling suites, an extensive inventory of French and Swiss lace systems, and dedicated servicing bays led directly by Proprietor Mr. Swarup.",
    landmarksAround: ["Shirdi Sai Sweets", "RTC Bus Stand Kadapa", "Railway Station Road", "Seven Roads Circle"]
  },
  {
    id: "proddatur",
    slug: "proddatur",
    name: "Proddatur Studio Hub",
    isHQ: false,
    address: "Commercial Center, RTC Bus Stand Road",
    landmark: "Near Clock Tower Area (Exact Door No. confirmed upon appointment booking)",
    city: "Proddatur",
    state: "Andhra Pradesh",
    pincode: "516360",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Proddatur+Andhra+Pradesh",
    image: "/images/client/poster_banner.jpg",
    isAddressConfirmed: false,
    description: "Serving clients in Proddatur, Mydukur, and Jammalamadugu with custom non-surgical hair replacement, personalized patch fittings, and routine monthly servicing in a discreet, private environment.",
    landmarksAround: ["RTC Bus Stand Road", "Clock Tower Commercial Circle", "Mydukur Road", "Gandhi Road"]
  },
  {
    id: "madanapalle",
    slug: "madanapalle",
    name: "Madanapalle Studio Hub",
    isHQ: false,
    address: "Bangalore Road Commercial Plaza",
    landmark: "Near NTR Circle (Exact Door No. confirmed upon appointment booking)",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    pincode: "517325",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Madanapalle+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
    isAddressConfirmed: false,
    description: "Conveniently accessible for clients across Annamayya and Chittoor districts, offering custom hair systems, zero-glue clip systems, and ladies crown extensions.",
    landmarksAround: ["NTR Circle", "Bangalore Road", "Madanapalle Bus Station", "C.T.M. Road"]
  },
  {
    id: "nandyal",
    slug: "nandyal",
    name: "Nandyal Studio Hub",
    isHQ: false,
    address: "Main Commercial Road",
    landmark: "Near Sanjeeva Nagar Gate / Gandhi Chowk (Exact Door No. confirmed upon appointment booking)",
    city: "Nandyal",
    state: "Andhra Pradesh",
    pincode: "518501",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM (By Appointment)",
    googleMapsUrl: "https://maps.google.com/?q=Nandyal+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
    isAddressConfirmed: false,
    description: "Providing high-density non-surgical hair bonding, clipping systems, and professional re-servicing for clients across Nandyal and Kurnool districts.",
    landmarksAround: ["Gandhi Chowk", "Sanjeeva Nagar Gate", "RTC Bus Stand Nandyal", "Atmakur Bus Stand"]
  },
];

export const SERVICES: Service[] = [
  {
    id: "non-surgical-hair-replacement",
    slug: "non-surgical-hair-replacement",
    title: "Non-Surgical Hair Replacement",
    shortTitle: "Non-Surgical Replacement",
    subtitle: "Complete instant hair restoration in just 60 minutes",
    badge: "Core Solution",
    duration: "45–60 Mins",
    durability: "Semi-permanent or daily removable",
    idealFor: "Men and women facing moderate to advanced crown thinning, receding hairline, or complete baldness",
    description: "Our signature non-surgical hair replacement procedure uses ultra-breathable micro-skin or Swiss lace bases. Every single 100% human hair strand is hand-knotted to replicate natural follicular emergence. The system is customized to your exact hair color, wave pattern, and density for an undetectable hairline.",
    benefits: [
      "Immediate results in just 60 minutes with zero downtime",
      "Undetectable front hairline that looks like natural growing hair",
      "Completely pain-free: no surgery, incisions, bleeding, or scars",
      "Full freedom for sports, gym workouts, swimming, and wearing bike helmets"
    ],
    process: [
      "Confidential scalp mapping and thinning assessment",
      "Exact hair texture, density, and color matching",
      "Precision perimeter fitting and secure attachment",
      "Custom salon haircut, fade blend, and modern styling"
    ],
    maintenance: "Depends on chosen attachment method: bonding requires servicing every 3–4 weeks; clipping can be removed and cleaned at home.",
    image: "/images/slider/slide_1.jpg",
    category: "hair-replacement",
    faqs: [
      {
        question: "How is non-surgical hair replacement different from a hair transplant?",
        answer: "A hair transplant is a surgical procedure that takes months to show sparse results and depends on donor follicles. Non-surgical replacement delivers full, thick, natural-looking density immediately in 1 hour with zero pain or surgery."
      },
      {
        question: "Does it look artificial or wig-like?",
        answer: "No. Because we use 100% human hair hand-tied on transparent Swiss lace or ultra-thin skin, your real scalp shows through naturally."
      }
    ]
  },
  {
    id: "mens-hair-systems",
    slug: "mens-hair-systems",
    title: "Hair Systems for Men",
    shortTitle: "Men's Hair Systems",
    subtitle: "Tailored masculine hairlines with modern fade styling",
    badge: "Men's Specialist",
    duration: "60 Mins",
    durability: "3 to 4 Weeks per bonding cycle",
    idealFor: "Men dealing with male pattern baldness (Norwood Stages 2 to 7) wanting a sharp, confident appearance",
    description: "Designed specifically for men, our modern hair systems combine ultra-fine French lace frontals with durable polyurethane perimeters. We specialize in contemporary fade haircuts, pompadours, and textured crops that blend seamlessly with your native side hair.",
    benefits: [
      "Customized temple angles and gradual, natural front recession",
      "Withstands high-sweat environments, sports, and daily helmet wear",
      "Available with custom grey percentage blending for mature realism",
      "Painless, reversible, and fully restylable at any time"
    ],
    process: [
      "Hair loss stage evaluation (Norwood classification)",
      "Selection of base type (Swiss lace, mono, or thin-skin)",
      "Secure medical attachment tailored to your daily routine",
      "Precision razor blending with your natural side hair"
    ],
    maintenance: "Monthly servicing recommended every 25–30 days for hygiene and adhesive renewal.",
    image: "/images/slider/slide_3.jpg",
    category: "hair-replacement",
    faqs: [
      {
        question: "Can I ride my two-wheeler with a bike helmet?",
        answer: "Yes, absolutely! With our medical bonding or weaving methods, the system will not move or slip when taking off or putting on a helmet."
      }
    ]
  },
  {
    id: "hair-patch",
    slug: "hair-patch",
    title: "Hair Patch Solutions & Fitting",
    shortTitle: "Hair Patch Solutions",
    subtitle: "Targeted crown and frontal bald spot coverage",
    badge: "Most Requested",
    duration: "45–60 Mins",
    durability: "Custom-fitted system life: 1 to 2 years with care",
    idealFor: "Individuals with circular crown thinning or frontal balding patches",
    description: "A hair patch is a localized cosmetic hair system crafted to cover specific bald areas while preserving all your healthy existing side and back hair. We hand-craft each patch to match your scalp contour exactly, securing it comfortably with bonding, clips, or tape.",
    benefits: [
      "Preserves all your healthy biological natural hair",
      "Ultra-lightweight mesh base allows total heat and sweat escape",
      "Looks completely natural under harsh direct sunlight and close inspection",
      "Cost-effective alternative to expensive surgical interventions"
    ],
    process: [
      "Accurate measurement of the balding crown zone",
      "Selection of hair base and matching virgin human hair",
      "Attachment using hypoallergenic bonding or silicone clips",
      "Layering and texturing by Mr. Swarup"
    ],
    maintenance: "Routine servicing every 3–4 weeks for bonded patches; clip patches can be maintained at home with periodic salon conditioning.",
    image: "/images/slider/slide_2.jpg",
    category: "hair-replacement",
    faqs: [
      {
        question: "How much does a hair patch cost?",
        answer: "Hair patch pricing typically ranges from ₹8,000 to ₹18,000 depending on the lace base, hair length, and attachment method. We provide transparent pricing during your consultation."
      }
    ]
  },
  {
    id: "hair-bonding",
    slug: "hair-bonding",
    title: "Hair Bonding Process",
    shortTitle: "Hair Bonding",
    subtitle: "Secure, semi-permanent attachment for continuous active wear",
    badge: "Best for Active Lifestyles",
    duration: "45–60 Mins",
    durability: "3 to 4 Weeks per session",
    idealFor: "Gym enthusiasts, swimmers, daily commuters, and continuous day-and-night wearers",
    description: "Hair Bonding secures the hair patch to your scalp perimeter using US FDA-compliant, dermatologically tested hypoallergenic adhesive resins. It blends invisibly with your surrounding hair, allowing you to live an active lifestyle without worrying about shifting.",
    benefits: [
      "Shower, shampoo, workout, and swim with complete confidence",
      "Undetectable front hairline that allows swept-back hairstyles",
      "Hypoallergenic scalp-safe bonding resins",
      "Zero downtime: walk out styled and ready for everyday life"
    ],
    process: [
      "Scalp sanitation and barrier protection",
      "Precision alignment of the custom hair patch",
      "Application of medical bonding resin along the perimeter",
      "Integration cut, blow-dry, and styling"
    ],
    maintenance: "Requires servicing every 25 to 30 days to cleanse the scalp, condition hair fibers, and apply fresh bonding adhesive.",
    image: "/images/client/services_card.jpg",
    category: "core-services",
    faqs: [
      {
        question: "Is hair bonding painful or irritating?",
        answer: "No, it is 100% painless. We use dermatologically safe scalp protectors. We also offer patch testing for sensitive skin."
      }
    ]
  },
  {
    id: "hair-clipping",
    slug: "hair-clipping",
    title: "Hair Clipping Process",
    shortTitle: "Hair Clipping",
    subtitle: "Zero-glue daily removable system for maximum flexibility",
    badge: "Easiest Daily Wear",
    duration: "30–45 Mins",
    durability: "Removable in 10 seconds; system life 1.5–2 years",
    idealFor: "Clients who prefer no adhesives on their skin or want the freedom to remove hair before sleeping",
    description: "The Hair Clipping method uses miniature, silicone-cushioned stainless steel clips sewn along the border of the hair patch. The clips latch gently onto your existing side and back hair without tension, allowing you to take it off in 10 seconds before sleep and re-clip it in the morning.",
    benefits: [
      "Zero adhesives, tapes, or chemical contact with your scalp skin",
      "Easily taken off at night for maximum scalp breathing and comfort",
      "Significantly prolongs hair patch lifespan up to 1.5 to 2 years",
      "Simple home maintenance with sulfate-free shampoo"
    ],
    process: [
      "Balding zone measurement and density matching",
      "Strategic placement of silicone-padded micro-clips",
      "One-on-one demonstration of self-removal and clipping technique",
      "Custom layering to blend naturally with your native hair"
    ],
    maintenance: "Wash gently at home every 7–10 days; visit studio every 2–3 months for deep conditioning.",
    image: "/images/client/poster_banner.jpg",
    category: "core-services",
    faqs: [
      {
        question: "Can clip systems slip off in the wind?",
        answer: "No. The medical silicone grips hold natural hair firmly without pulling, ensuring stability in routine daily wind and light exercise."
      }
    ]
  },
  {
    id: "hair-system-maintenance",
    slug: "hair-system-maintenance",
    title: "Hair System Maintenance & Servicing",
    shortTitle: "System Maintenance",
    subtitle: "Complete cleaning, scalp hygiene, conditioning, and fresh re-fitting",
    badge: "Essential Routine Care",
    duration: "30–45 Mins",
    durability: "Fresh 3–4 week hold",
    idealFor: "All existing hair system wearers needing periodic routine maintenance",
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
    category: "core-services",
    faqs: [
      {
        question: "How long does a routine service session take?",
        answer: "Typically 35 to 45 minutes from arrival to freshly styled exit."
      }
    ]
  },
  {
    id: "hair-wigs",
    slug: "hair-wigs",
    title: "Natural Human Hair Wigs",
    shortTitle: "Hair Wigs",
    subtitle: "Full-cap natural hair coverage for extensive hair loss",
    badge: "Full Coverage",
    duration: "45–60 Mins",
    durability: "Long lasting (1 to 2 years)",
    idealFor: "Clients experiencing total alopecia, medical hair loss, or extensive thinning",
    description: "Our full-cap human hair wigs are constructed with feather-light, breathable mesh caps and hand-tied 100% natural human hair. Each wig is cut, thinned, and styled specifically to complement your face shape for comfortable all-day wear.",
    benefits: [
      "Complete coverage for total alopecia or medical hair loss",
      "Feather-light breathable mesh prevents heat and sweat buildup",
      "100% human hair that can be washed, heat-styled, and parted naturally",
      "Secure, non-slip comfort bands"
    ],
    process: [
      "Head circumference mapping and cap sizing",
      "Selection of hair length, texture, and density",
      "Precision face-framing cut and salon blow-dry",
      "Daily wear and care demonstration"
    ],
    maintenance: "Gentle home washing with specialized wig shampoo; periodic studio re-conditioning.",
    image: "/images/slider/slide_1.jpg",
    category: "specialized",
    faqs: [
      {
        question: "Are these synthetic wigs or real human hair?",
        answer: "We use 100% natural virgin human hair, which looks vastly superior to synthetic plastic wigs and allows natural movement."
      }
    ]
  },
  {
    id: "ladies-extensions",
    slug: "ladies-extensions",
    title: "Ladies Hair Toppers & Extensions",
    shortTitle: "Ladies Solutions",
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
    category: "specialized",
    faqs: [
      {
        question: "Can I style and wash the topper like my own hair?",
        answer: "Yes, because it is made of 100% human hair, you can wash, condition, blow-dry, and heat-style it just like your own hair."
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
    answer: "Yes. With our professional Hair Bonding procedure, the hair system is securely attached with water-resistant, dermatologically tested materials. You can participate in sports, ride two-wheelers with helmets, and shower with confidence."
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
