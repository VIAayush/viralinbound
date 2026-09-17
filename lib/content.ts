// Central content model for the Viral Inbound concept demo.
// Every string here is either (a) drawn from verified Viral Inbound capability
// information, or (b) explicitly a demo/proposed construct — see the `status`
// fields, which drive the Strategy Notes labels rendered by <StrategyNote>.

export type Status = "existing" | "proposed" | "demo";

// ---------------------------------------------------------------------------
// Problem section — problem, its consequence, and what actually addresses it
// ---------------------------------------------------------------------------

export interface ProblemItem {
  problem: string;
  consequence: string;
  solution: string;
}

export const PROBLEMS: ProblemItem[] = [
  { problem: "Website that doesn't convert", consequence: "Traffic arrives, but leads don't.", solution: "Conversion optimization" },
  { problem: "Disconnected business processes", consequence: "Teams duplicate work and lose context.", solution: "A connected digital workflow" },
  { problem: "Poor user experience", consequence: "Visitors leave before they understand the offer.", solution: "UI/UX design" },
  { problem: "Manual workflows", consequence: "Time-consuming, error-prone operations.", solution: "A purpose-built digital product" },
  { problem: "Difficult product discovery", consequence: "Customers can't find what they'd actually buy.", solution: "SuperShowroom" },
  { problem: "Scattered customer information", consequence: "No single view of a lead or client.", solution: "A connected CRM workflow" },
  { problem: "No visibility into user behavior", consequence: "Decisions get made on guesswork.", solution: "Data-informed optimization" },
  { problem: "Digital products that don't solve the actual business problem", consequence: "Expensive tools nobody actually uses.", solution: "Product thinking built around real workflows" },
];

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
  visual: "stats" | "workflow" | "grid";
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
    visual: "stats",
  },
  {
    key: "corporate",
    name: "Corporate",
    problem: "Corporate gifting requests move through scattered emails, manual quotations and no order visibility.",
    solutionLabel: "Gifting Solutions",
    solutionDescription: "Manage gifting from catalogue to quotation to fulfilment.",
    ctaLabel: "Explore Corporate Solution",
    href: "/products/gifting-solutions",
    visual: "workflow",
  },
  {
    key: "retail",
    name: "Retail / Business",
    problem: "A product range is hard to browse online and doesn't reflect how the business actually sells.",
    solutionLabel: "SuperShowroom",
    solutionDescription: "Present the product range in a structured, digital showroom.",
    ctaLabel: "Explore Retail Solution",
    href: "/products/supershowroom",
    visual: "grid",
  },
  {
    key: "smes",
    name: "SMEs",
    problem: "A website exists, but it doesn't generate leads or reflect where the business is headed.",
    solutionLabel: "Websites + Conversion Optimization",
    solutionDescription: "Rebuild the digital presence around a clear path to a lead.",
    ctaLabel: "Explore SME Solution",
    href: "/#services-build",
    visual: "workflow",
  },
  {
    key: "product-businesses",
    name: "Product Businesses",
    problem: "Customers can't easily discover, compare or enquire about the product range online.",
    solutionLabel: "SuperShowroom + Branding",
    solutionDescription: "Give the product range a digital presence built to be explored.",
    ctaLabel: "Explore Product Solution",
    href: "/products/supershowroom",
    visual: "grid",
  },
];

// ---------------------------------------------------------------------------
// Solution finder (Section 7) — a two-step configurator: goal x business type
// ---------------------------------------------------------------------------

export interface FinderGoal {
  key: "build" | "grow" | "digitize";
  label: string;
  description: string;
}

export const FINDER_GOALS: FinderGoal[] = [
  { key: "build", label: "Build", description: "A brand and a digital presence worth trusting" },
  { key: "grow", label: "Grow", description: "More visibility and a better-converting site" },
  { key: "digitize", label: "Digitize", description: "Replace a manual workflow with a product" },
];

export interface FinderBusinessType {
  key: "education" | "corporate" | "retail" | "sme";
  label: string;
}

export const FINDER_BUSINESS_TYPES: FinderBusinessType[] = [
  { key: "education", label: "Education" },
  { key: "corporate", label: "Corporate" },
  { key: "retail", label: "Retail / Product" },
  { key: "sme", label: "SME" },
];

export interface FinderRecommendation {
  title: string;
  description: string;
  why: string;
  tags: string[];
  href: string;
  /** Exact match against FORM_HELP_OPTIONS, used to prefill the lead form. */
  helpOption: string;
}

// Keyed as "{goal}-{businessType}" — every combination is intentional, not generated.
export const FINDER_MATRIX: Record<string, FinderRecommendation> = {
  "build-education": {
    title: "Branding + Website Design & Development",
    description: "A credible identity and a website built for how institutes are actually evaluated.",
    why: "Before enrollment or operations tooling matters, an institute needs a digital presence parents and students trust.",
    tags: ["Branding", "Websites"],
    href: "/#services-brand",
    helpOption: "Website design & development",
  },
  "build-corporate": {
    title: "Branding + Website Design & Development",
    description: "A clear identity and a website built to represent the business properly.",
    why: "Brand and web presence come first — growth and product work compound on top of a credible foundation.",
    tags: ["Branding", "Websites"],
    href: "/#services-brand",
    helpOption: "Website design & development",
  },
  "build-retail": {
    title: "Branding + SuperShowroom",
    description: "A strong identity paired with a structured digital showroom for the product range.",
    why: "A product range needs a credible brand and a proper digital home before growth work can compound.",
    tags: ["Branding", "SuperShowroom"],
    href: "/products/supershowroom",
    helpOption: "SuperShowroom",
  },
  "build-sme": {
    title: "Branding + Website Design & Development",
    description: "Start with a clear identity, then a website built to carry it.",
    why: "Most SMEs need a credible digital foundation before any growth or product work makes sense.",
    tags: ["Branding", "Websites"],
    href: "/#services-brand",
    helpOption: "Website design & development",
  },
  "grow-education": {
    title: "SEO + Conversion Optimization",
    description: "Visibility and a conversion path built around how families actually enquire.",
    why: "Once the digital presence exists, growth work determines whether it actually brings enrollments.",
    tags: ["SEO", "Conversion Optimization"],
    href: "/#services-grow",
    helpOption: "SEO / Conversion optimization",
  },
  "grow-corporate": {
    title: "SEO + Conversion Optimization",
    description: "Turn an existing presence into a consistent pipeline of qualified leads.",
    why: "Growth work is what converts an existing website into a reliable source of pipeline.",
    tags: ["SEO", "Conversion Optimization"],
    href: "/#services-grow",
    helpOption: "SEO / Conversion optimization",
  },
  "grow-retail": {
    title: "SEO + Conversion Optimization",
    description: "Make sure the right customers actually find the showroom.",
    why: "A showroom only compounds once visibility and conversion are actively managed.",
    tags: ["SEO", "Conversion Optimization"],
    href: "/#services-grow",
    helpOption: "SEO / Conversion optimization",
  },
  "grow-sme": {
    title: "SEO + Conversion Optimization",
    description: "Make sure the site converts the traffic it's already getting.",
    why: "For most SMEs, the fastest path to more leads is fixing conversion on existing traffic before spending more to acquire it.",
    tags: ["SEO", "Conversion Optimization"],
    href: "/#services-grow",
    helpOption: "SEO / Conversion optimization",
  },
  "digitize-education": {
    title: "VILMS",
    description: "Student management, attendance, records, communication and reports in one platform.",
    why: "VILMS replaces registers and spreadsheets with one platform built around real academic workflows.",
    tags: ["VILMS"],
    href: "/products/vilms",
    helpOption: "VILMS",
  },
  "digitize-corporate": {
    title: "Gifting Solutions",
    description: "Catalogue, client, quotation and order tracking in one connected workflow.",
    why: "Gifting Solutions replaces scattered emails and manual quotations with one connected workflow.",
    tags: ["Gifting Solutions"],
    href: "/products/gifting-solutions",
    helpOption: "Gifting Solutions",
  },
  "digitize-retail": {
    title: "SuperShowroom",
    description: "A structured, digital way to present and sell a product range.",
    why: "SuperShowroom turns a static catalogue into a structured, explorable digital showroom.",
    tags: ["SuperShowroom"],
    href: "/products/supershowroom",
    helpOption: "SuperShowroom",
  },
  "digitize-sme": {
    title: "Website + Conversion Optimization",
    description: "Rebuild the digital presence around a clear, trackable path to a lead.",
    why: "SMEs rarely have one workflow narrow enough to justify a dedicated product yet — a conversion-focused website is usually the highest-leverage move.",
    tags: ["Websites", "Conversion Optimization"],
    href: "/#services-build",
    helpOption: "Website design & development",
  },
};

export function getFinderRecommendation(goal: string, businessType: string): FinderRecommendation | undefined {
  return FINDER_MATRIX[`${goal}-${businessType}`];
}

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
