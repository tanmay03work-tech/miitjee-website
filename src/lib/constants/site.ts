// ─────────────────────────────────────────
// MIITJEE — Site-wide Constants
// ─────────────────────────────────────────

export const SITE_NAME = "MIITJEE";
export const SITE_TAGLINE = "Where Champions Are Made";
export const SITE_DESCRIPTION =
  "MIITJEE is Jharkhand's leading coaching institute for JEE, NEET, and Foundation programmes. Expert faculty, proven results, and personalised coaching to help students achieve their dreams.";

// Phone / WhatsApp
export const PRIMARY_PHONE = "+918906000160";
export const PRIMARY_PHONE_DISPLAY = "89060 00160";
export const WHATSAPP_NUMBER = "918906000160";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MIITJEE%2C%20I%20want%20to%20know%20more%20about%20your%20coaching%20programs.`;

// Email
export const PRIMARY_EMAIL = "miitjeejamshedpur@gmail.com";

// Address
export const PRIMARY_ADDRESS = "40 SNP Area, Near Sakchi Golchakkar, Jamshedpur - 831001";


// Social links (placeholders — update when real)
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/miitjee",
  instagram: "https://instagram.com/miitjee",
  youtube: "https://youtube.com/@miitjee",
  twitter: "https://twitter.com/miitjee",
} as const;

// ─────────────────────────────────────────
// Navigation Items
// ─────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
  active?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "JEE Main + Advanced",
        href: "/programs/jee",
        icon: "⚙️",
        description: "Engineering entrance preparation",
      },
      {
        label: "NEET / AIIMS",
        href: "/programs/neet",
        icon: "🩺",
        description: "Medical entrance preparation",
      },
      {
        label: "Foundation (Cl. 6–10)",
        href: "/programs/foundation",
        icon: "📚",
        description: "Build a strong academic base",
      },
    ],
  },
  {
    label: "Results",
    href: "/results",
  },
  {
    label: "Test Series",
    href: "/test-series",
    children: [
      {
        label: "NEET Mock Test Series (Free)",
        href: "/test-series/neet",
        icon: "🩺",
        description: "5 free NEET mock papers",
        active: true,
      },
      {
        label: "JEE Test Series",
        href: "#",
        icon: "⚙️",
        description: "Coming soon",
        badge: "Coming Soon",
        disabled: true,
      },
    ],
  },
  {
    label: "Scholarship",
    href: "/scholarship",
  },
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Branches",
    href: "/branches",
  },
];

// Footer link groups
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Results", href: "/results" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "JEE Main + Advanced", href: "/programs/jee" },
    { label: "NEET / AIIMS", href: "/programs/neet" },
    { label: "Foundation (Cl. 6–10)", href: "/programs/foundation" },
    { label: "NEET Test Series (Free)", href: "/test-series/neet" },
    { label: "MANTHAN Scholarship", href: "/scholarship" },
  ],
  branches: [
    { label: "Sakchi, Jamshedpur", href: "/branches" },
    { label: "Bistupur, Jamshedpur", href: "/branches" },
    { label: "Bokaro Steel City", href: "/branches" },
    { label: "Dhanbad", href: "/branches" },
  ],
} as const;
