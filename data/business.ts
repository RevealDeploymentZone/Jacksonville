export const BUSINESS = {
  name: "AL Air Duct Cleaning Jacksonville",
  legalName: "[[LEGAL ENTITY NAME]]", // TODO: fill in legal entity name
  phone: "[[PHONE — (904) XXX-XXXX]]", // TODO: fill in phone number
  phoneRaw: "[[+1904XXXXXXX]]", // TODO: fill in raw phone number
  email: "[[EMAIL]]", // TODO: fill in email address
  streetAddress: "[[STREET or omit if service-area business]]", // TODO: fill in or remove if service-area only
  city: "Jacksonville",
  state: "FL",
  stateFull: "Florida",
  zip: "[[ZIP]]", // TODO: fill in ZIP code
  country: "US",
  lat: 30.3322, // TODO: verify exact coordinates
  lng: -81.6557, // TODO: verify exact coordinates
  hours: "Open 24 hours, 7 days a week",
  yearsInBusiness: "[[NUMBER]]", // TODO: fill in years in business
  jobsCompleted: "[[NUMBER]]", // TODO: fill in jobs completed count
  reviewCount: 0, // TODO: fill in REAL review count — see §9 warning in brief
  reviewAverage: 0, // TODO: fill in REAL review average — see §9 warning in brief
  domain: "https://jacksonville.alairductcleaning.com",
  social: {
    facebook: null, // TODO: fill in Facebook URL or leave null
    googleMaps: null, // TODO: fill in Google Business Profile URL or leave null
    yelp: null, // TODO: fill in Yelp URL or leave null
  },
  licenses: {
    dbprHvac: null, // TODO: fill in FL DBPR/CILB air conditioning contractor licence # or leave null
    dbprMoldRemediator: null, // TODO: fill in FL DBPR mold remediator licence # (MRSR) or leave null
    // IMPORTANT: FL law prohibits the same firm from performing both mold assessment AND
    // mold remediation on the same project (Chapter 468, Part XVI, Florida Statutes).
    // Have client confirm current licence status and the assessor/remediator separation
    // rule with Florida DBPR or their attorney before the mold page goes live.
    dbprMoldAssessor: null, // TODO: fill in FL DBPR mold assessor licence # or leave null
    nadca: null, // TODO: fill in NADCA member ID or leave null
    insurance: null, // TODO: fill in general liability carrier + coverage or leave null
  },
};

// Derived helpers — used in components
export const hasRealReviews =
  BUSINESS.reviewCount > 0 && BUSINESS.reviewAverage > 0;

export const hasPhone = !BUSINESS.phone.startsWith("[[");
export const hasEmail = !BUSINESS.email.startsWith("[[");
export const hasYearsInBusiness = !BUSINESS.yearsInBusiness.startsWith("[[");
export const hasJobsCompleted = !BUSINESS.jobsCompleted.startsWith("[[");

export const SERVICES = [
  {
    name: "Air Duct Cleaning",
    slug: "air-duct-cleaning",
    shortDesc: "Full duct system inspection and cleaning using NADCA-standard negative pressure methods.",
    icon: "Wind",
  },
  {
    name: "Dryer Vent Cleaning",
    slug: "dryer-vent-cleaning",
    shortDesc: "Remove lint buildup that restricts airflow, increases drying time, and causes dryer fires.",
    icon: "Flame",
  },
  {
    name: "HVAC Cleaning",
    slug: "hvac-cleaning",
    shortDesc: "Complete HVAC system cleaning covering coils, blower, and air handler components.",
    icon: "Thermometer",
  },
  {
    name: "Residential Air Duct Cleaning",
    slug: "residential-air-duct-cleaning",
    shortDesc: "Home duct cleaning tailored to Jacksonville's older and newer residential housing stock.",
    icon: "Home",
  },
  {
    name: "Commercial Air Duct Cleaning",
    slug: "commercial-air-duct-cleaning",
    shortDesc: "Commercial HVAC duct cleaning for offices, retail, restaurants, and multi-unit buildings.",
    icon: "Building2",
  },
  {
    name: "Sanitization & Deodorization",
    slug: "sanitization-deodorization",
    shortDesc: "EPA-registered antimicrobial treatment that neutralizes odors and inhibits microbial growth.",
    icon: "Sparkles",
  },
  {
    name: "Mold Inspection & Removal",
    slug: "mold-inspection-removal",
    shortDesc: "Visual mold inspection and duct cleaning with referral to licensed remediators where required.",
    icon: "ShieldCheck",
  },
];

export const AREA_CITIES = [
  // Duval County / Jacksonville neighbourhoods
  { slug: "riverside", name: "Riverside", county: "Duval" },
  { slug: "avondale", name: "Avondale", county: "Duval" },
  { slug: "san-marco", name: "San Marco", county: "Duval" },
  { slug: "mandarin", name: "Mandarin", county: "Duval" },
  { slug: "southside", name: "Southside", county: "Duval" },
  { slug: "arlington", name: "Arlington", county: "Duval" },
  { slug: "springfield", name: "Springfield", county: "Duval" },
  { slug: "ortega", name: "Ortega", county: "Duval" },
  { slug: "murray-hill", name: "Murray Hill", county: "Duval" },
  { slug: "baymeadows", name: "Baymeadows", county: "Duval" },
  { slug: "northside", name: "Northside", county: "Duval" },
  { slug: "bartram-park", name: "Bartram Park", county: "Duval" },
  // The Beaches
  { slug: "jacksonville-beach", name: "Jacksonville Beach", county: "Duval Beaches" },
  { slug: "neptune-beach", name: "Neptune Beach", county: "Duval Beaches" },
  { slug: "atlantic-beach", name: "Atlantic Beach", county: "Duval Beaches" },
  { slug: "ponte-vedra-beach", name: "Ponte Vedra Beach", county: "St. Johns" },
  // St. Johns County
  { slug: "nocatee", name: "Nocatee", county: "St. Johns" },
  { slug: "st-augustine", name: "St. Augustine", county: "St. Johns" },
  { slug: "julington-creek", name: "Julington Creek", county: "St. Johns" },
  { slug: "world-golf-village", name: "World Golf Village", county: "St. Johns" },
  { slug: "fruit-cove", name: "Fruit Cove", county: "St. Johns" },
  // Clay County
  { slug: "orange-park", name: "Orange Park", county: "Clay" },
  { slug: "fleming-island", name: "Fleming Island", county: "Clay" },
  { slug: "middleburg", name: "Middleburg", county: "Clay" },
  { slug: "oakleaf-plantation", name: "Oakleaf Plantation", county: "Clay" },
  { slug: "green-cove-springs", name: "Green Cove Springs", county: "Clay" },
  // Nassau County
  { slug: "fernandina-beach", name: "Fernandina Beach", county: "Nassau" },
  { slug: "yulee", name: "Yulee", county: "Nassau" },
  { slug: "amelia-island", name: "Amelia Island", county: "Nassau" },
];
