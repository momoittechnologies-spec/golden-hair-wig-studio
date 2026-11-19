export interface Branch {
  id: string;
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
}

export interface Service {
  id: string;
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
  experienceTagline: "100% Natural Look • Just 1 Hour Transformation",
  proprietor: "Mr. Swarup",
  primaryPhone: "+91 8617264887",
  secondaryPhone: "+91 8609256195",
  rawPrimaryPhone: "918617264887",
  rawSecondaryPhone: "918609256195",
  email: "support@goldenhairstudio.com",
  rating: "5.0",
  reviewCount: "850+",
  clientsServed: "5,000+",
  experienceYears: "10+ Years",
  transformationTime: "60 Minutes",
};

export const BRANCHES: Branch[] = [
  {
    id: "kadapa-hq",
    name: "Kadapa (Headquarters)",
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
  },
  {
    id: "proddatur",
    name: "Proddatur Branch",
    isHQ: false,
    address: "Opp. RTC Bus Stand Road, Near Clock Tower Commercial Area",
    landmark: "Central Commercial Hub",
    city: "Proddatur",
    state: "Andhra Pradesh",
    pincode: "516360",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM",
    googleMapsUrl: "https://maps.google.com/?q=Proddatur+Andhra+Pradesh",
    image: "/images/client/poster_banner.jpg",
  },
  {
    id: "madanapalle",
    name: "Madanapalle Branch",
    isHQ: false,
    address: "Bangalore Road, Near NTR Circle",
    landmark: "Prime Road Commercial Plaza",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    pincode: "517325",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM",
    googleMapsUrl: "https://maps.google.com/?q=Madanapalle+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
  },
  {
    id: "nandyal",
    name: "Nandyal Branch",
    isHQ: false,
    address: "Main Road, Near Sanjeeva Nagar Gate / Gandhi Chowk",
    landmark: "Opposite Commercial Complex",
    city: "Nandyal",
    state: "Andhra Pradesh",
    pincode: "518501",
    phones: ["+91 8617264887", "+91 8609256195"],
    whatsapp: "918617264887",
    timings: "Open All 7 Days: 9:30 AM – 8:30 PM",
    googleMapsUrl: "https://maps.google.com/?q=Nandyal+Andhra+Pradesh",
    image: "/images/client/services_card.jpg",
  },
];

export const SERVICES: Service[] = [
  {
    id: "hair-bonding",
    title: "Hair Bonding Process",
    subtitle: "Longest lasting, semi-permanent secure fit",
    badge: "Most Popular",
    duration: "45–60 Mins",
    durability: "3 to 4 Weeks per session",
    idealFor: "Active lifestyle, sports, gym, swimming & continuous wear",
    description: "Hair Bonding is our premier hair replacement procedure. The custom-tailored human hair patch is safely affixed to the scalp using US FDA-approved, dermatologically tested hypoallergenic adhesive resins. It blends seamlessly with your existing hair for a totally undetectable hairline.",
    benefits: [
      "Can swim, shampoo, workout, and wear bike helmets without shifting",
      "Seamless invisible front hairline for natural styling",
      "Custom-matched hair color, density, wave, and curl",
      "Zero pain, zero cuts, and zero surgical downtime"
    ],
    process: [
      "Scalp contouring & custom patch sizing",
      "Exact hair color, texture, and density matching",
      "Application of medical-grade scalp protector & bonding resin",
      "Precision cut, blend, and luxury salon styling"
    ],
    maintenance: "Requires servicing every 25 to 30 days for cleaning, scalp conditioning, and fresh bonding.",
    image: "/images/client/services_card.jpg",
    category: "men",
  },
  {
    id: "hair-clipping",
    title: "Hair Clipping Process",
    subtitle: "Flexible daily wear with zero glue or chemicals",
    badge: "Easiest to Manage",
    duration: "30–45 Mins",
    durability: "Removable daily at home (10 seconds)",
    idealFor: "Clients wanting convenience, office wear, or occasional functions",
    description: "The Hair Clipping system uses micro-silicone coated stainless steel clips fixed to the border of the hair system. The clips latch gently onto your existing side and back hair without tension. You can take it off before sleep and clip it back on in the morning.",
    benefits: [
      "Zero adhesives, tapes, or chemical contact with your scalp",
      "Take off before sleeping or bathing anytime you want",
      "Hair patch lasts much longer (up to 1.5 - 2 years with care)",
      "Maximum breathability for your scalp during rest"
    ],
    process: [
      "Measurement of bald crown area",
      "Positioning of silicon-cushioned comfort clips",
      "Demonstration of self-removal and 10-second re-clipping",
      "Personalized styling to integrate with side hairs"
    ],
    maintenance: "Occasional home washing with sulfate-free shampoo; studio conditioning every 2–3 months.",
    image: "/images/client/poster_banner.jpg",
    category: "men",
  },
  {
    id: "hair-taping",
    title: "Hair Taping Process",
    subtitle: "Hygienic, easy-to-replace medical tape attachment",
    badge: "Sensitive Scalp Friendly",
    duration: "30–45 Mins",
    durability: "1 to 2 Weeks per tape cycle",
    idealFor: "Clients with oily/sensitive scalp or wanting easy home servicing",
    description: "Hair Taping employs medical-grade double-sided hair system tapes around the polyurethane perimeter of the hair system. Provides a firm grip while being gentle on the skin, allowing hassle-free cleaning and re-taping at home or in studio.",
    benefits: [
      "Very gentle on sensitive or allergy-prone scalps",
      "Waterproof and sweat-resistant for routine daily activities",
      "Easy peel-and-stick maintenance you can do yourself",
      "Breathable central lace for total heat release"
    ],
    process: [
      "Scalp cleaning and sanitization",
      "Application of anti-bacterial scalp shield",
      "Perimeter tape application with ultra-bond contour strips",
      "Blending and fringe texturing"
    ],
    maintenance: "Re-taping recommended every 10–14 days for optimal hygiene and grip.",
    image: "/images/client/services_card.jpg",
    category: "men",
  },
  {
    id: "hair-weaving",
    title: "Hair Weaving Process",
    subtitle: "Braided anchor technique without scalp adhesives",
    badge: "100% Non-Chemical",
    duration: "60–75 Mins",
    durability: "4 to 6 Weeks",
    idealFor: "Those who want fixed hair without chemical glues on scalp",
    description: "In Hair Weaving, a fine, flat micro-track or braid is created with your existing perimeter hair, and the base of the hair system is meticulously interlocked or sewn along the track. No glues touch your scalp directly.",
    benefits: [
      "Zero adhesives directly on skin",
      "Extremely secure — cannot be pulled off accidentally",
      "Enables normal showers, gym workouts, and helmet use",
      "Natural movement and full hair volume"
    ],
    process: [
      "Perimeter micro-track creation with perimeter hair",
      "Hand-sewn anchoring of system base",
      "Tension balance check for maximum comfort",
      "Precision razor cutting and styling"
    ],
    maintenance: "Tightening/refitting recommended every 30–45 days as your natural base hair grows.",
    image: "/images/client/services_card.jpg",
    category: "men",
  },
  {
    id: "ladies-extensions",
    title: "Ladies Hair Extensions & Crown Toppers",
    subtitle: "Instant volume, length, and crown density restoration",
    badge: "Exclusively for Women",
    duration: "45–60 Mins",
    durability: "Long-lasting (1–2 years system life)",
    idealFor: "Female pattern thinning, widening partition, or hair length",
    description: "Specially engineered for women experiencing diffuse thinning on the crown or widening partitions. Our lightweight silk-base hair toppers and invisible tape-in / clip-in 100% human hair extensions blend seamlessly with your natural hair length.",
    benefits: [
      "Conceals visible scalp and thinning partitions instantly",
      "Matches exact natural hair texture (straight, wavy, curly)",
      "Can be curled, blow-dried, straightened, and highlighted",
      "Ultra-lightweight and breathable silk mesh base"
    ],
    process: [
      "Crown thinning analysis & partition mapping",
      "Color, length (16\" to 30\"), and density selection",
      "Gentle clip-in or micro-bead integration",
      "Layering, face-framing cut, and blowout"
    ],
    maintenance: "Simple routine home care; studio deep-conditioning as needed.",
    image: "/images/client/services_card.jpg",
    category: "women",
  },
  {
    id: "patch-servicing",
    title: "System Servicing & Re-Styling",
    subtitle: "Complete rejuvenation for your existing hair system",
    badge: "Routine Care",
    duration: "30–40 Mins",
    durability: "Instant Refresh",
    idealFor: "All existing hair system wearers needing periodic service",
    description: "Regular maintenance keeps your hair system hygienic, soft, and undetectable. Our servicing includes painless removal, solvent-free base adhesive removal, ultrasonic cleaning, deep argan oil hair conditioning, scalp exfoliation, and fresh bonding.",
    benefits: [
      "Extends the lifespan of your hair system significantly",
      "Restores silky softness and natural hair sheen",
      "Scalp hygiene, anti-dandruff, and cooling massage",
      "Professional trim and trendy re-styling included"
    ],
    process: [
      "Safe, pain-free system detachment",
      "Residue-free base cleansing and conditioning bath",
      "Scalp wash and sanitizing tonic application",
      "Re-bonding/re-taping with fresh materials"
    ],
    maintenance: "Book every 3 to 4 weeks for peak freshness.",
    image: "/images/client/poster_banner.jpg",
    category: "all",
  }
];

export const COMPARISON_TABLE = [
  {
    feature: "Time to Full Results",
    goldenStudio: "Just 1 Hour (Instant)",
    transplantSurgery: "9 to 12 Months waiting period",
    cheapWigs: "Instant, but looks fake and unstyled"
  },
  {
    feature: "Pain & Surgery",
    goldenStudio: "100% Painless, Zero Surgery, Zero Injections",
    transplantSurgery: "Surgical incisions, anesthesia, bleeding & stitches",
    cheapWigs: "Itchy, tight, uncomfortable elastic bands"
  },
  {
    feature: "Guaranteed Hair Density",
    goldenStudio: "100% Full, Rich Density Guaranteed",
    transplantSurgery: "Depends on donor area; often sparse/thin",
    cheapWigs: "Excessive unnatural plastic sheen"
  },
  {
    feature: "Cost Affordability",
    goldenStudio: "Extremely Affordable (₹8,000 – ₹18,000 range)",
    transplantSurgery: "Very Expensive (₹60,000 – ₹2,50,000+)",
    cheapWigs: "Cheap but deteriorates within weeks"
  },
  {
    feature: "Reversibility & Flexibility",
    goldenStudio: "100% Reversible; Change styles anytime",
    transplantSurgery: "Permanent scars; cannot be undone",
    cheapWigs: "Cannot be cut or restyled naturally"
  },
  {
    feature: "Active Life (Gym, Swim, Helmet)",
    goldenStudio: "Yes, fully secure with Medical Bonding",
    transplantSurgery: "Strict restrictions for months",
    cheapWigs: "Blows off in wind or with helmet"
  }
];

export const FAQS = [
  {
    question: "How long does the entire hair replacement procedure take?",
    answer: "The transformation takes just 60 minutes! You walk in with hair thinning or baldness, and walk out with a full head of styled, 100% natural human hair."
  },
  {
    question: "Will anyone be able to tell that I am wearing a hair system?",
    answer: "No. We utilize ultra-thin French/Swiss lace and breathable micro-skin bases where each natural hair strand is hand-tied with invisible micro-knots. The hairline appears as though it is growing directly from your scalp."
  },
  {
    question: "Can I take a bath, swim, workout, and wear a bike helmet?",
    answer: "Yes, absolutely! With our Hair Bonding and Weaving procedures, the system is securely anchored with waterproof, dermatologically approved adhesives. You can live an active lifestyle, ride bikes with helmets, shower, and swim freely."
  },
  {
    question: "Is the procedure painful or does it have any side effects?",
    answer: "It is 100% non-surgical and completely pain-free. No needles, no cuts, no anesthesia, and zero side effects. Our bonding adhesives and tapes are dermatologically tested and hypoallergenic."
  },
  {
    question: "What is the difference between Hair Bonding and Hair Clipping?",
    answer: "Hair Bonding stays fixed to your scalp for 3 to 4 weeks continuously, ideal for 24/7 wear. Hair Clipping uses gentle silicone-backed clips that anchor onto your side hair, allowing you to remove it at night and re-clip it in seconds."
  },
  {
    question: "Do you offer solutions for women suffering from hair loss?",
    answer: "Yes! We specialize in Ladies Hair Extensions, Silk-Base Crown Toppers, and volumizers designed to conceal thinning crown lines and partitions with 100% virgin natural hair."
  },
  {
    question: "How often do I need to visit for maintenance/servicing?",
    answer: "For bonded systems, servicing is recommended every 25 to 30 days. For clipping systems, you can easily clean the unit at home and visit us once every 2–3 months for deep conditioning."
  },
  {
    question: "Do I need to book an appointment before visiting?",
    answer: "While walk-ins are welcome, we recommend booking a free confidential consultation via WhatsApp or Phone to ensure Mr. Swarup and our senior stylists are available to provide dedicated attention."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh Reddy",
    location: "Kadapa",
    age: "31",
    rating: 5,
    title: "Gained my confidence back before my wedding!",
    comment: "I had severe crown baldness and was terrified about my wedding photos. Swarup sir explained everything patiently and completed my hair bonding in 1 hour. Nobody in my family could tell it wasn't my natural hair! Forever grateful to Golden Hair Studio.",
    service: "Hair Bonding Process",
    verified: true
  },
  {
    id: 2,
    name: "Venkat Sai",
    location: "Proddatur",
    age: "27",
    rating: 5,
    title: "Best decision I ever made — Looks 100% natural",
    comment: "I was considering expensive hair transplant surgery in Bangalore, but friends warned me about pain and low density. Visited Golden Hair Studio Proddatur branch. The front hairline is completely undetectable. I ride my bike every day with helmet without any issue.",
    service: "Miraj Lace Patch",
    verified: true
  },
  {
    id: 3,
    name: "Sujatha K.",
    location: "Madanapalle",
    age: "38",
    rating: 5,
    title: "Lifesaver for female crown thinning",
    comment: "I was very self-conscious about my widening hairline partition. The silk topper provided by Golden Hair Studio matched my exact hair shade and texture. Comfortable, lightweight, and very respectful staff.",
    service: "Ladies Crown Topper",
    verified: true
  },
  {
    id: 4,
    name: "Kishore Kumar",
    location: "Nandyal",
    age: "34",
    rating: 5,
    title: "Affordable, quick, and high quality",
    comment: "The Nandyal branch service is top-notch. Monthly servicing takes only 30 minutes, very economical, and Mr. Swarup's team treats every customer with VIP care.",
    service: "Hair Taping Process",
    verified: true
  }
];
