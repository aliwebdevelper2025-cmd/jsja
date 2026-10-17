import { ServiceItem, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_spa_massage_luxury_1792157877203.jpg';
export const MASSAGE_IMAGE = '/src/assets/images/service_massage_therapy_1792157877363.jpg';
export const SALON_IMAGE = '/src/assets/images/service_salon_hair_1792157877319.jpg';
export const FACIAL_IMAGE = '/src/assets/images/service_hydra_facial_1792157878128.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  // Massages & Spa
  {
    id: 'deep-tissue-massage',
    name: 'Deep Tissue Recovery Massage',
    category: 'massage',
    categoryLabel: 'Therapeutic Massage',
    duration: '60 / 90 min',
    price: 7500,
    description: 'Intense muscle-release therapy targeting chronic tension in the neck, back, and shoulders using therapeutic botanicals.',
    benefits: ['Relieves deep muscle knots', 'Post-workout recovery', 'Releases stored tension & fatigue'],
    popular: true,
    image: MASSAGE_IMAGE,
    pressureLevel: 'Firm',
    genderSuitability: 'All'
  },
  {
    id: 'swedish-massage',
    name: 'Swedish Harmonic Relaxation Massage',
    category: 'massage',
    categoryLabel: 'Body Massage',
    duration: '60 min',
    price: 6500,
    description: 'Long gliding strokes with warm sweet almond and jasmine essential oils, engineered to soothe the central nervous system.',
    benefits: ['Enhances blood circulation', 'Deep mental calm & serenity', 'Full body de-stress'],
    popular: true,
    image: HERO_IMAGE,
    pressureLevel: 'Gentle',
    genderSuitability: 'All'
  },
  {
    id: 'hot-stone-massage',
    name: 'Volcanic Basalt Hot Stone Therapy',
    category: 'massage',
    categoryLabel: 'Signature Spa',
    duration: '75 min',
    price: 8500,
    description: 'Smooth, heated black volcanic stones strategically placed on meridian points, combined with rhythmic warm oil massage.',
    benefits: ['Deep penetrating heat therapy', 'Melts stubborn stiffness', 'Spiritual grounding & relaxation'],
    popular: true,
    image: MASSAGE_IMAGE,
    pressureLevel: 'Medium',
    genderSuitability: 'All'
  },
  {
    id: 'aromatherapy-candle-massage',
    name: 'Warm Soy Candle Aromatherapy Massage',
    category: 'massage',
    categoryLabel: 'Aroma Therapy',
    duration: '60 min',
    price: 7000,
    description: 'Melted warm botanical soy wax infused with French lavender, sandalwood, and neroli dripped gently onto the body.',
    benefits: ['Hydrates dry skin intensely', 'Aromatherapeutic sensory reset', 'Silky, supple skin finish'],
    pressureLevel: 'Gentle',
    genderSuitability: 'All'
  },
  {
    id: 'turkish-hammam-scrub',
    name: 'Imperial Turkish Hammam & Kessa Scrub',
    category: 'massage',
    categoryLabel: 'Hammam & Body Scrub',
    duration: '75 min',
    price: 9000,
    description: 'Traditional heated stone bath ritual with eucalyptus black soap foam, vigorous exfoliation mitt, and scalp dousing.',
    benefits: ['Removes dead skin layers', 'Detoxifies pores via steam', 'Velvety smooth skin revival'],
    pressureLevel: 'Firm',
    genderSuitability: 'All'
  },
  {
    id: 'head-neck-shoulder-express',
    name: 'Targeted Cranial, Neck & Shoulder Relief',
    category: 'massage',
    categoryLabel: 'Express Relief',
    duration: '35 min',
    price: 3500,
    description: 'Focused acupressure treatment addressing desk posture stiffness, tension headaches, and digital eye strain.',
    benefits: ['Rapid headache relief', 'Loosens stiff cervical spine', 'Fast-acting corporate reset'],
    pressureLevel: 'Medium',
    genderSuitability: 'All'
  },

  // Salon & Hair
  {
    id: 'signature-haircut-styling',
    name: 'Master Director Cut & Sculptural Styling',
    category: 'salon',
    categoryLabel: 'Hair Studio',
    duration: '45 min',
    price: 3500,
    description: 'Tailored hair architecture consultation followed by precision scissor work, detox shampoo wash, and blowdry finish.',
    benefits: ['Facial silhouette balancing', 'Bespoke modern styling', 'Nutritive scalp rinse'],
    popular: true,
    image: SALON_IMAGE,
    genderSuitability: 'All'
  },
  {
    id: 'keratin-protein-treatment',
    name: 'Liquid Silk Keratin & Caviar Infusion',
    category: 'salon',
    categoryLabel: 'Hair Treatment',
    duration: '120 min',
    price: 18000,
    description: 'Formaldehyde-free intensive smoothing treatment that eliminates frizz, seals cuticles, and restores luminous mirror shine.',
    benefits: ['Zero frizz for up to 5 months', 'Seals split ends', 'Glossy mirror-like reflection'],
    popular: true,
    image: SALON_IMAGE,
    genderSuitability: 'All'
  },
  {
    id: 'royal-beard-sculpt-steam',
    name: 'Imperial Beard Sculpt & Hot Herbal Towel',
    category: 'salon',
    categoryLabel: 'Men\'s Grooming',
    duration: '35 min',
    price: 2200,
    description: 'Razor sharp line work, beard fade, botanical oil treatment, and triple hot towel infusion with eucalyptus mist.',
    benefits: ['Crisp architectural lines', 'Soothes coarse beard hair', 'Prevents ingrown hairs'],
    genderSuitability: 'Men'
  },
  {
    id: 'scalp-detox-hair-spa',
    name: 'Japanese Head Spa & Scalp Clarifying Ritual',
    category: 'salon',
    categoryLabel: 'Hair & Scalp Spa',
    duration: '50 min',
    price: 4500,
    description: 'Micro-camera scalp analysis, purifying tea-tree scrub, ultrasonic mist halo, and revitalizing acupressure head massage.',
    benefits: ['Clears scalp buildup & sebum', 'Promotes healthy follicles', 'Deeply relaxing sensory water halo'],
    genderSuitability: 'All'
  },

  // Facials & Aesthetics
  {
    id: 'hydrafacial-glow-ritual',
    name: '7-Step Medical Grade HydraFacial Infusion',
    category: 'facial',
    categoryLabel: 'Aesthetic Skincare',
    duration: '60 min',
    price: 8500,
    description: 'Vortex suction extraction, glycolic peel, hyaluronic acid drench, and antioxidant infusion with cold cryo-globe finish.',
    benefits: ['Instant red-carpet dewy glow', 'Pain-free blackhead extraction', 'Zero downtime or redness'],
    popular: true,
    image: FACIAL_IMAGE,
    genderSuitability: 'All'
  },
  {
    id: '24k-gold-radiance-facial',
    name: '24K Pure Gold Collagen Facial',
    category: 'facial',
    categoryLabel: 'Luxury Skincare',
    duration: '75 min',
    price: 11000,
    description: 'Exquisite treatment featuring 99.9% pure gold leaf application, peptides, and jade stone lymph drainage.',
    benefits: ['Stimulates cellular renewal', 'Tightens loose contours', 'Unparalleled luminous radiance'],
    image: FACIAL_IMAGE,
    genderSuitability: 'All'
  },
  {
    id: 'activated-charcoal-deep-pore',
    name: 'Activated Bamboo Charcoal Detox Facial',
    category: 'facial',
    categoryLabel: 'Skin Clarification',
    duration: '50 min',
    price: 5000,
    description: 'Deep ultrasonic pore cleansing, volcanic clay mask, and blue LED light therapy to combat urban Islamabad pollution.',
    benefits: ['Eliminates oily shine', 'Purifies congested pores', 'Calms active blemishes'],
    genderSuitability: 'All'
  },

  // Grooming & Mani-Pedi
  {
    id: 'rose-milk-deluxe-pedicure',
    name: 'Deluxe Rose Water & Milk Foot Sanctuary',
    category: 'grooming',
    categoryLabel: 'Nail & Foot Spa',
    duration: '50 min',
    price: 3800,
    description: 'Warm organic milk and fresh rose petal soak, dead sea salt buffing, cuticle detail, and 15-minute foot reflexology.',
    benefits: ['Softens cracked heels', 'Alleviates foot fatigue', 'Polished neat grooming'],
    genderSuitability: 'All'
  },
  {
    id: 'paraffin-hand-therapy-manicure',
    name: 'Warm Paraffin Wax Infusion Manicure',
    category: 'grooming',
    categoryLabel: 'Hand Spa',
    duration: '45 min',
    price: 3200,
    description: 'Gentle cuticle restoration, nail shaping, hand exfoliation, and a warm dip in soothing lavender paraffin wax.',
    benefits: ['Relieves stiff finger joints', 'Intense moisture lock', 'Silky, refined hands'],
    genderSuitability: 'All'
  },

  // Packages
  {
    id: 'levish-executive-escape',
    name: 'The Levish Executive Escape',
    category: 'packages',
    categoryLabel: 'Exclusive Package',
    duration: '150 min',
    price: 16500,
    description: 'Our premier all-in-one reset: 60-min Deep Tissue or Swedish Massage + 7-Step HydraFacial Glow + Master Haircut & Scalp Polish.',
    benefits: ['Complete bodily transformation', 'Total cost savings of Rs. 3,000', 'Private VIP suite access'],
    popular: true,
    image: HERO_IMAGE,
    genderSuitability: 'All'
  },
  {
    id: 'tranquil-couple-oasis',
    name: 'Tranquil Oasis Couple\'s Sanctuary',
    category: 'packages',
    categoryLabel: 'Couple Experience',
    duration: '120 min',
    price: 17000,
    description: 'Side-by-side synchronized full body Swedish massages in our private couple suite, accompanied by soothing aromatherapy and herbal teas.',
    benefits: ['Private dual spa chamber', 'Warm botanical oils of choice', 'Includes complimentary Moroccan kahwa'],
    genderSuitability: 'All'
  },
  {
    id: 'weekend-revitalizer',
    name: 'Weekend De-Stress & Rejuvenation Ritual',
    category: 'packages',
    categoryLabel: 'Weekend Special',
    duration: '110 min',
    price: 12500,
    description: 'Hot Stone Back Therapy + Japanese Scalp Clarifying Detox + Rose Milk Foot Pedicure.',
    benefits: ['Comprehensive top-to-toe wellness', 'High customer satisfaction', 'Optimal for busy executives'],
    genderSuitability: 'All'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    author: 'Hamza Farooq',
    location: 'Sector F-8, Islamabad',
    treatment: 'Deep Tissue Recovery Massage',
    comment: 'Without doubt the finest spa experience in Islamabad. The massage therapy at Levish I-8 Markaz completely eradicated my chronic lower back stiffness after weeks of intense gym workouts. Pristine hygiene and truly professional therapists.',
    rating: 5,
    date: 'October 2026'
  },
  {
    id: 't-2',
    author: 'Dr. Ayesha Malik',
    location: 'Sector I-8/2, Islamabad',
    treatment: '7-Step HydraFacial & Japanese Head Spa',
    comment: 'Having a peaceful sanctuary like this right in I-8 Markaz is a blessing. The HydraFacial left my skin glowing for days, and the scalp massage was so deeply relaxing I fell asleep within 10 minutes. 10/10 service.',
    rating: 5,
    date: 'September 2026'
  },
  {
    id: 't-3',
    author: 'Bilal Jahangir',
    location: 'Sector G-11, Islamabad',
    treatment: 'Levish Executive Escape Package',
    comment: 'The executive package is tremendous value. Hot stone massage followed by haircut and beard sculpt. The ambiance has a very calming, 5-star hotel feel, and parking in I-8 Markaz was surprisingly hassle-free with their valet assist.',
    rating: 5,
    date: 'October 2026'
  }
];

export const BRANCH_INFO = {
  name: 'Levish Salon & Luxury Spa',
  tagline: 'Islamabad’s Premier Wellness Sanctuary & Hair Atelier',
  address: '2nd Floor, Al-Baber Centre, Executive Arcade, Sector I-8 Markaz, Islamabad',
  city: 'Islamabad, Pakistan',
  phone: '+92 300 8555188',
  phoneDisplay: '+92 (300) 855-5188',
  landline: '+92 51 4862190',
  whatsapp: '923008555188',
  email: 'concierge@levishspa.pk',
  hours: {
    weekdays: '10:00 AM – 10:00 PM',
    weekends: '10:00 AM – 10:30 PM',
    fridayPrayerBreak: '1:00 PM – 2:30 PM (Friday)',
  },
  amenities: [
    'Private Individual Massage Chambers',
    'Certified Male & Female Therapists',
    'Organic Cold-Pressed Essential Oils',
    'Heated Volcanic Stone Suites',
    'Japanese Waterfall Head Spa Station',
    'Complimentary Saffron Green Tea & Arabic Kahwa',
    'Dedicated Valet & Basement Parking in I-8 Markaz',
    'Discreet VIP Couple Rooms'
  ]
};
