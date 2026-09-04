export const site = {
  name: "The Wellness Co.",
  tagline: "Integrative Wellness & Longevity",
  phone: "+91 95994 40939",
  phoneHref: "tel:+919599440939",
  tollFree: "1-800-121-2429",
  whatsapp: "919599440939",
  email: "hello@thewellnessco.in",
  instagram: "https://www.instagram.com/thewellnessco.intl/",
  facebook: "https://www.facebook.com/thewellnessco.in/",
  stats: {
    clinics: "14",
    cities: "8",
    therapies: "30+",
    rating: "4.8",
  },
  hours: "Monday – Sunday, 10:30 AM – 7:30 PM",
};

export const primaryNav = [
  { label: "Therapies", href: "/therapies" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export const megaTherapies = {
  columns: [
    {
      title: "Integrative & Lifestyle Wellness",
      href: "/therapies?category=integrative-lifestyle-wellness",
      items: [
        { label: "IV Drip Therapy", href: "/therapies/iv-drip-therapy" },
        { label: "Whole Body Cryotherapy", href: "/therapies/whole-body-cryotherapy" },
        { label: "Hyperbaric Oxygen Therapy", href: "/therapies/hyperbaric-oxygen-therapy" },
        { label: "EMS Training", href: "/therapies/ems-training" },
      ],
    },
    {
      title: "Diagnostics & Consultations",
      href: "/therapies?category=wellness-diagnostics-consultations",
      items: [
        { label: "Advanced Genetic Screening", href: "/therapies/advanced-genetic-screening" },
        { label: "Telomere Biological Age Test", href: "/therapies/telomere-biological-age-test" },
        { label: "Blood Work Panels", href: "/therapies/blood-work-panels" },
        { label: "Doctor's Consultations", href: "/therapies/doctors-consultations" },
      ],
    },
    {
      title: "Weight Loss & Slimming",
      href: "/therapies?category=weight-loss-slimming",
      items: [
        { label: "Cryo EMS Slimming", href: "/therapies/cryo-ems-slimming" },
        { label: "Integrative Slimming Programs", href: "/therapies/integrative-slimming-programs" },
        { label: "Nutritional Counseling", href: "/therapies/nutritional-counseling" },
      ],
    },
    {
      title: "Face Wellness & Anti-Ageing",
      href: "/therapies?category=face-wellness-anti-aging",
      items: [
        { label: "Hydrafacial SYNDEO", href: "/therapies/hydrafacial-syndeo" },
        { label: "Morpheus8", href: "/therapies/morpheus8" },
        { label: "Red Light Therapy", href: "/therapies/red-light-therapy" },
        { label: "Ultherapy", href: "/therapies/ultherapy" },
      ],
    },
  ],
  featured: {
    label: "Featured Therapy",
    name: "IV Drip Therapy",
    desc: "Hydration & nutrient infusion, delivered direct.",
    href: "/therapies/iv-drip-therapy",
  },
};

export const megaLocations = {
  cities: [
    {
      name: "Delhi NCR",
      count: 3,
      items: [
        { label: "Defence Colony, Delhi", href: "/locations/defence-colony-delhi" },
        { label: "Golf Course Road, Gurugram", href: "/locations/golf-course-road-gurugram" },
        { label: "Punjabi Bagh, New Delhi", href: "/locations/punjabi-bagh-new-delhi" },
      ],
    },
    {
      name: "Mumbai",
      count: 2,
      items: [
        { label: "Bandra (Khar West)", href: "/locations/bandra-mumbai" },
        { label: "Marine Drive", href: "/locations/marine-drive-mumbai" },
      ],
    },
    {
      name: "Bengaluru",
      count: 3,
      items: [
        { label: "St. Mark's Road", href: "/locations/st-marks-road-bengaluru" },
        { label: "Sadashiva Nagar", href: "/locations/sadashiva-nagar-bengaluru" },
        { label: "Jayanagar", href: "/locations/jayanagar-bengaluru" },
      ],
    },
    {
      name: "More Cities",
      count: null,
      sub: "Hyderabad · Chennai · Ludhiana · Ahmedabad",
      items: [
        { label: "Banjara Hills, Hyderabad", href: "/locations/banjara-hills-hyderabad" },
        { label: "TTK Road, Chennai", href: "/locations/ttk-road-chennai" },
        { label: "Sindhu Bhavan Marg, Ahmedabad", href: "/locations/sindhu-bhavan-marg-ahmedabad" },
      ],
    },
  ],
};
