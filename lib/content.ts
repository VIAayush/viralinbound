// Central content model for the Viral Inbound concept demo.
// Every string here is either (a) drawn from verified Viral Inbound capability
// information, or (b) explicitly a demo/proposed construct — see the `status`
// fields, which drive the Strategy Notes labels rendered by <StrategyNote>.

export type Status = "existing" | "proposed" | "demo";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_PRODUCTS: NavItem[] = [
  { label: "VILMS", href: "/products/vilms", description: "Education & institute management" },
  { label: "SuperShowroom", href: "/products/supershowroom", description: "Digital product showroom" },
  { label: "Gifting Solutions", href: "/products/gifting-solutions", description: "Corporate gifting workflow" },
];

export const NAV_SERVICES: NavItem[] = [
  { label: "Branding", href: "/#services-brand", description: "Strategy & identity" },
  { label: "UI/UX", href: "/#services-experience", description: "Research & interface design" },
  { label: "Websites", href: "/#services-build", description: "Design & development" },
  { label: "SEO", href: "/#services-grow", description: "Visibility & organic growth" },
  { label: "Conversion Optimization", href: "/#services-experience", description: "Behavior-informed improvement" },
  { label: "Digital Solutions", href: "/#products", description: "Products built for specific workflows" },
];

export const NAV_INDUSTRIES: NavItem[] = [
  { label: "Education", href: "/#industries" },
  { label: "Corporate", href: "/#industries" },
  { label: "Retail", href: "/#industries" },
  { label: "SMEs", href: "/#industries" },
];

// ---------------------------------------------------------------------------
// Solution ecosystem (Section 4)
// ---------------------------------------------------------------------------

export interface EcosystemItem {
  name: string;
  description: string;
}

export interface EcosystemCategory {
  key: string;
  label: string;
  summary: string;
  items: EcosystemItem[];
}

export const ECOSYSTEM: EcosystemCategory[] = [
  {
    key: "build",
    label: "Build",
    summary: "Give the business a brand and a digital presence worth trusting.",
    items: [
      { name: "Branding", description: "Positioning, identity and a visual system the business can grow into." },
      { name: "UI/UX", description: "Interfaces designed around how people actually decide and act." },
      { name: "Web Development", description: "Websites and applications built to perform, not just to exist." },
    ],
  },
  {
    key: "grow",
    label: "Grow",
    summary: "Turn traffic into pipeline with visibility and evidence, not guesswork.",
    items: [
      { name: "SEO", description: "Structured visibility built around real search intent." },
      { name: "Conversion Optimization", description: "Behavior-informed changes to where visitors actually drop off." },
      { name: "Analytics", description: "Measurement that shows what's working and what isn't." },
    ],
  },
  {
    key: "digitize",
    label: "Digitize",
    summary: "Replace manual, scattered operations with a purpose-built product.",
    items: [
      { name: "VILMS", description: "Institute and student management, built around real academic workflows." },
      { name: "SuperShowroom", description: "A structured, digital way to present and sell a product range." },
      { name: "Gifting Solutions", description: "Catalogue to quotation to order, in one connected workflow." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Products (Section 5, 6, product pages)
// ---------------------------------------------------------------------------

export interface PricingTier {
  name: string;
  price: string;
  cadence?: string;
  detail: string;
}

export interface WorkflowStep {
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: Status;
  audience: string[];
  capabilities: string[];
  workflow: WorkflowStep[];
  pricing: PricingTier[] | null;
  pricingNote: string;
  ctaLabel: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "vilms",
    name: "VILMS",
    shortName: "VILMS",
    tagline: "Education & institute management",
    description:
      "A digital platform designed to simplify education and institute management — from student records to daily communication.",
    status: "existing",
    audience: ["Schools", "Institutes", "Education organizations", "Teachers", "Mentors", "Administrators"],
    capabilities: [
      "Student management",
      "Attendance",
      "Institute operations",
      "Records",
      "Communication",
      "Reports",
    ],
    workflow: [
      { label: "Dashboard" },
      { label: "Students" },
      { label: "Attendance" },
      { label: "Reports" },
    ],
    pricing: [
      { name: "Base", price: "₹499", cadence: "/month", detail: "Up to 500 students" },
      { name: "Growth", price: "₹1,199", cadence: "/month", detail: "Up to 2,000 students" },
      { name: "Scale", price: "₹2,499", cadence: "/month", detail: "Up to 5,000 students" },
      { name: "Institute", price: "₹4,999", cadence: "/month", detail: "Up to 15,000 students" },
    ],
    pricingNote: "Confirmed pricing, current as of this concept demo.",
    ctaLabel: "Explore VILMS",
  },
  {
    slug: "supershowroom",
    name: "SuperShowroom",
    shortName: "SuperShowroom",
    tagline: "Digital product showroom",
    description:
      "A digital showroom experience that helps businesses present their products in a more structured and engaging way.",
    status: "existing",
    audience: ["Businesses", "Product companies", "Retailers", "Showrooms", "Sales teams"],
    capabilities: [
      "Digitizing how a business presents its product range",
      "Structured product discovery for customers",
      "A more engaging alternative to a static catalogue",
    ],
    workflow: [
      { label: "Products" },
      { label: "Digital Showroom" },
      { label: "Customer" },
      { label: "Enquiry" },
    ],
    pricing: [
      { name: "Essential", price: "₹15,000", cadence: "/year", detail: "Demo concept — confirm inclusions before production." },
      { name: "Pro Showroom", price: "₹25,000", cadence: "/year", detail: "Demo concept — confirm inclusions before production." },
      { name: "Elite", price: "₹35,000", cadence: "/year", detail: "Demo concept — confirm inclusions before production." },
      { name: "Plus", price: "₹50,000+", cadence: "/year", detail: "Demo concept — confirm inclusions before production." },
    ],
    pricingNote: "Package prices are existing references; specific inclusions per tier are a demo concept and should be confirmed before production.",
    ctaLabel: "Explore SuperShowroom",
  },
  {
    slug: "gifting-solutions",
    name: "Gifting Solutions",
    shortName: "Gifting",
    tagline: "Corporate gifting workflow",
    description:
      "A corporate gifting workflow connecting catalogues, clients, quotations and orders — from product discovery to fulfilment.",
    status: "existing",
    audience: ["Corporate procurement teams", "Gifting vendors", "Sales teams managing client accounts"],
    capabilities: [
      "Corporate product catalogue",
      "Product SKU management",
      "Company-specific product visibility",
      "Client management",
      "Quotations",
      "Orders",
      "Order tracking",
      "Client portal",
    ],
    workflow: [
      { label: "Catalogue" },
      { label: "Client" },
      { label: "Quote" },
      { label: "Order" },
      { label: "Tracking" },
    ],
    pricing: null,
    pricingNote: "Demo concept — confirm product capability and pricing structure before production.",
    ctaLabel: "Explore Gifting Solutions",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------------------
// Services (Section 9)
// ---------------------------------------------------------------------------

export interface ServiceCategory {
  key: string;
  label: string;
  summary: string;
  items: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: "brand",
    label: "Brand",
    summary: "Defining how a business is positioned and recognized.",
    items: ["Brand Strategy", "Brand Identity"],
  },
  {
    key: "experience",
    label: "Experience",
    summary: "Designing around how people actually use and decide.",
    items: ["UI/UX", "Research", "Conversion Optimization"],
  },
  {
    key: "build",
    label: "Build",
    summary: "Turning strategy and design into a working product.",
    items: ["Websites", "Web Applications", "Digital Products"],
  },
  {
    key: "grow",
    label: "Grow",
    summary: "Making sure the work performs after it ships.",
    items: ["SEO", "Analytics", "Performance Optimization"],
  },
];

// ---------------------------------------------------------------------------
// Industries (Section 8)
// ---------------------------------------------------------------------------

export interface Industry {
  key: string;
  name: string;
  problem: string;
  solutionLabel: string;
  solutionDescription: string;
  ctaLabel: string;
  href: string;
}

export const INDUSTRIES: Industry[] = [
  {
    key: "education",
    name: "Education",
    problem: "Student records, attendance and communication are spread across registers, spreadsheets and phone calls.",
    solutionLabel: "VILMS",
    solutionDescription: "Simplify institutional operations and student management.",
    ctaLabel: "Explore Education Solution",
    href: "/products/vilms",
  },
  {
    key: "corporate",
    name: "Corporate",
    problem: "Corporate gifting requests move through scattered emails, manual quotations and no order visibility.",
    solutionLabel: "Gifting Solutions",
    solutionDescription: "Manage gifting from catalogue to quotation to fulfilment.",
    ctaLabel: "Explore Corporate Solution",
    href: "/products/gifting-solutions",
  },
  {
    key: "retail",
    name: "Retail / Business",
    problem: "A product range is hard to browse online and doesn't reflect how the business actually sells.",
    solutionLabel: "SuperShowroom",
    solutionDescription: "Present the product range in a structured, digital showroom.",
    ctaLabel: "Explore Retail Solution",
    href: "/products/supershowroom",
  },
  {
    key: "smes",
    name: "SMEs",
    problem: "A website exists, but it doesn't generate leads or reflect where the business is headed.",
    solutionLabel: "Websites + Conversion Optimization",
    solutionDescription: "Rebuild the digital presence around a clear path to a lead.",
    ctaLabel: "Explore SME Solution",
    href: "/#services-build",
  },
  {
    key: "product-businesses",
    name: "Product Businesses",
    problem: "Customers can't easily discover, compare or enquire about the product range online.",
    solutionLabel: "SuperShowroom + Branding",
    solutionDescription: "Give the product range a digital presence built to be explored.",
    ctaLabel: "Explore Product Solution",
    href: "/products/supershowroom",
  },
];

// ---------------------------------------------------------------------------
// Solution finder (Section 7)
// ---------------------------------------------------------------------------

export interface FinderOption {
  key: string;
  label: string;
  recommendationTitle: string;
  recommendationDescription: string;
  tags: string[];
  href: string;
  /** Exact match against FORM_HELP_OPTIONS, used to prefill the lead form. */
  helpOption: string;
}

export const FINDER_OPTIONS: FinderOption[] = [
  {
    key: "digital-presence",
    label: "I need to build my digital presence",
    recommendationTitle: "Branding + Website Design & Development",
    recommendationDescription: "Start with a clear identity, then a website built to carry it.",
    tags: ["Branding", "Websites"],
    href: "/#services-brand",
    helpOption: "Website design & development",
  },
  {
    key: "improve-website",
    label: "I need to improve my website",
    recommendationTitle: "UI/UX + Conversion Optimization",
    recommendationDescription: "Diagnose where visitors drop off, then redesign around that evidence.",
    tags: ["UI/UX", "Conversion Optimization"],
    href: "/#services-experience",
    helpOption: "UI/UX",
  },
  {
    key: "better-ux",
    label: "I need better user experience",
    recommendationTitle: "UI/UX Design + Research",
    recommendationDescription: "Understand how people actually use the product before redesigning it.",
    tags: ["UI/UX", "Research"],
    href: "/#services-experience",
    helpOption: "UI/UX",
  },
  {
    key: "more-leads",
    label: "I need more leads",
    recommendationTitle: "SEO + Conversion Optimization",
    recommendationDescription: "Combine visibility with a site that converts the traffic it earns.",
    tags: ["SEO", "Conversion Optimization"],
    href: "/#services-grow",
    helpOption: "SEO / Conversion optimization",
  },
  {
    key: "digitize-operations",
    label: "I need to digitize business operations",
    recommendationTitle: "Explore Our Products",
    recommendationDescription: "VILMS, SuperShowroom and Gifting Solutions are each built around a specific operational workflow.",
    tags: ["VILMS", "SuperShowroom", "Gifting Solutions"],
    href: "/#products",
    helpOption: "Not sure yet",
  },
  {
    key: "education-system",
    label: "I need an education management system",
    recommendationTitle: "VILMS",
    recommendationDescription: "Student management, attendance, records, communication and reports in one platform.",
    tags: ["VILMS"],
    href: "/products/vilms",
    helpOption: "VILMS",
  },
  {
    key: "digital-showroom",
    label: "I need a digital showroom",
    recommendationTitle: "SuperShowroom",
    recommendationDescription: "A structured, digital way to present and sell a product range.",
    tags: ["SuperShowroom"],
    href: "/products/supershowroom",
    helpOption: "SuperShowroom",
  },
  {
    key: "gifting-solution",
    label: "I need a corporate gifting solution",
    recommendationTitle: "Gifting Solutions",
    recommendationDescription: "Catalogue, client, quotation and order tracking in one connected workflow.",
    tags: ["Gifting Solutions"],
    href: "/products/gifting-solutions",
    helpOption: "Gifting Solutions",
  },
];

// ---------------------------------------------------------------------------
// Case studies (Section 12) — demo placeholders only
// ---------------------------------------------------------------------------

export interface CaseStudy {
  key: string;
  sector: string;
  title: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    key: "education-concept",
    sector: "Education",
    title: "Institute Operations, Consolidated",
    challenge: "Student records, attendance and parent communication were split across registers and phone calls.",
    approach: "Mapped the institute's actual daily workflow before proposing a platform structure.",
    solution: "A VILMS implementation covering student management, attendance and reporting.",
    outcome: "Outcome metrics to be added from verified project data.",
  },
  {
    key: "retail-concept",
    sector: "Retail / Product Business",
    title: "A Catalogue Rebuilt as a Showroom",
    challenge: "The product range existed only as a PDF catalogue, difficult to browse or share.",
    approach: "Restructured the range around how customers actually compare and decide.",
    solution: "A SuperShowroom deployment with a structured, explorable product experience.",
    outcome: "Outcome metrics to be added from verified project data.",
  },
  {
    key: "corporate-concept",
    sector: "Corporate",
    title: "Corporate Gifting, End to End",
    challenge: "Gifting requests were handled over email with no shared visibility into quotes or order status.",
    approach: "Defined the workflow from catalogue access to client-specific quotation.",
    solution: "A Gifting Solutions rollout connecting catalogue, quotation and order tracking.",
    outcome: "Outcome metrics to be added from verified project data.",
  },
];

// ---------------------------------------------------------------------------
// How we work (Section 11)
// ---------------------------------------------------------------------------

export interface ProcessStep {
  index: string;
  title: string;
  summary: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { index: "01", title: "Discover", summary: "Understand the business.", detail: "Start with the actual operational problem, not an assumed solution." },
  { index: "02", title: "Strategize", summary: "Define the right solution.", detail: "Decide whether the answer is a service, a product, or both." },
  { index: "03", title: "Design", summary: "Create the experience.", detail: "Design around real workflows and real users, not a template." },
  { index: "04", title: "Build", summary: "Develop and integrate.", detail: "Build and connect the pieces so they work as one system." },
  { index: "05", title: "Optimize", summary: "Measure and improve.", detail: "Use real usage data to refine what's already live." },
];

// ---------------------------------------------------------------------------
// Why Viral Inbound (Section 15)
// ---------------------------------------------------------------------------

export interface Pillar {
  title: string;
  description: string;
}

export const WHY_PILLARS: Pillar[] = [
  { title: "Strategy + Execution", description: "Not just recommendations — the same team builds and implements what it proposes." },
  { title: "Design + Technology", description: "User experience and technical implementation are handled together, not handed off between vendors." },
  { title: "Business Context", description: "Work starts with the business problem, not a template or a trend." },
  { title: "Data-Informed Optimization", description: "Analytics and user behavior inform what gets changed, and why." },
  { title: "Product Thinking", description: "Solutions are built around workflows — the way VILMS, SuperShowroom and Gifting Solutions each address one — rather than isolated features." },
];

// ---------------------------------------------------------------------------
// AI / Intelligent experience (Section 16) — all forward-looking
// ---------------------------------------------------------------------------

export interface AiConcept {
  title: string;
  description: string;
  status: Status;
}

export const AI_CONCEPTS: AiConcept[] = [
  { title: "AI Website Audit", description: "An automated first read of a site's performance, UX and SEO fundamentals.", status: "demo" },
  { title: "AI Solution Finder", description: "A guided way to route a visitor to the right service or product.", status: "demo" },
  { title: "Lead Qualification", description: "Scoring inbound leads by fit and intent before they reach sales.", status: "proposed" },
  { title: "Personalized Recommendations", description: "Tailoring what a returning visitor sees based on prior interest.", status: "proposed" },
  { title: "Automated Follow-up", description: "Timely, relevant follow-up triggered by on-site behavior.", status: "proposed" },
];

// ---------------------------------------------------------------------------
// FAQ (Section 19)
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "What does Viral Inbound do?",
    answer: "Viral Inbound combines brand strategy, UI/UX design, website development and growth services with a set of purpose-built digital products — VILMS, SuperShowroom and Gifting Solutions.",
  },
  {
    question: "Do you build websites?",
    answer: "Yes. Website design and development, including SEO foundations and CMS setup, is a core service.",
  },
  {
    question: "Do you provide UI/UX?",
    answer: "Yes. UI/UX design and research are handled as their own discipline, informed by how people actually use the product.",
  },
  {
    question: "Do you work with existing websites?",
    answer: "Yes. Work can start with an existing site — through conversion optimization, redesign, or a technical rebuild — rather than only from a blank canvas.",
  },
  {
    question: "Do you develop digital products?",
    answer: "Yes. VILMS, SuperShowroom and Gifting Solutions are examples of purpose-built digital products developed around specific business workflows.",
  },
  {
    question: "What is VILMS?",
    answer: "VILMS is a digital platform for education and institute management, covering student management, attendance, records, communication and reports.",
  },
  {
    question: "What is SuperShowroom?",
    answer: "SuperShowroom is a digital showroom that helps businesses present and sell their products in a structured, more engaging way than a static catalogue.",
  },
  {
    question: "What is Gifting Solutions?",
    answer: "Gifting Solutions is a corporate gifting workflow connecting product catalogue, client management, quotations, orders and order tracking.",
  },
  {
    question: "How does the process work?",
    answer: "Every engagement moves through the same five stages: Discover, Strategize, Design, Build and Optimize — detailed in the How We Work section above.",
  },
  {
    question: "How can I start a project?",
    answer: "Book a strategy call using the form below, or reach out directly — a specialist will follow up to understand the requirement before proposing an approach.",
  },
];

// ---------------------------------------------------------------------------
// Verified contact / social — only real, confirmed details are used here.
// ---------------------------------------------------------------------------

export const CONTACT = {
  whatsappNumber: "918968430834",
  whatsappHref: "https://wa.me/918968430834",
  email: "hello@viralinbound.com",
  phoneDisplay: "+91 89684 30834",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/viralinbound" },
  { label: "Instagram", href: "https://instagram.com/viralinbound" },
  { label: "X", href: "https://x.com/viralinbound" },
];

export const FORM_INDUSTRY_OPTIONS = [
  "Education",
  "Corporate",
  "Retail / Product Business",
  "SME / Services",
  "Other",
];

export const FORM_TIMELINE_OPTIONS = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

export const FORM_HELP_OPTIONS = [
  "Branding",
  "Website design & development",
  "UI/UX",
  "SEO / Conversion optimization",
  "VILMS",
  "SuperShowroom",
  "Gifting Solutions",
  "Not sure yet",
];
