/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  AppWindow,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  Component,
  Eye,
  FileCheck2,
  FileSearch,
  Layers3,
  LayoutDashboard,
  MousePointerClick,
  Palette,
  PanelsTopLeft,
  PenTool,
  ScanSearch,
  Smartphone,
  Sparkles,
  Target,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Design Services | BrainADZ Marketing",
  description:
    "Professional UI UX design services by BrainADZ Marketing for websites, mobile apps, dashboards and digital products, including user research, wireframes, prototypes, design systems and usability testing.",
  alternates: {
    canonical: "/services/web-design-development/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Services | BrainADZ Marketing",
    description:
      "Create intuitive, consistent and conversion-focused digital experiences through user research, interface design, prototypes and usability testing.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Design Solutions", href: "#design-solutions" },
  { label: "UX Research", href: "#ux-research" },
  { label: "Design Standards", href: "#design-standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Clear user journeys",
    description:
      "Organize content, navigation and actions around the goals users need to complete.",
    icon: Workflow,
  },
  {
    title: "Consistent interfaces",
    description:
      "Build reusable visual patterns that create consistency across pages, screens and product modules.",
    icon: Component,
  },
  {
    title: "Improved usability",
    description:
      "Reduce confusion and unnecessary steps through research, testing and structured interaction design.",
    icon: MousePointerClick,
  },
  {
    title: "Stronger conversions",
    description:
      "Align layouts, information hierarchy and calls to action with important business outcomes.",
    icon: Target,
  },
];

const CAPABILITIES = [
  {
    title: "UX strategy and product discovery",
    description:
      "We begin by understanding the business objective, target audience, product requirements, current challenges and the actions users need to complete.",
    points: [
      "Business and product requirement analysis",
      "Audience and user-group identification",
      "Existing experience and competitor review",
      "UX goals and success-metric planning",
    ],
  },
  {
    title: "User research and journey mapping",
    description:
      "Research and available customer information are converted into user needs, pain points, behavioural patterns and complete journey maps.",
    points: [
      "User interview and stakeholder input",
      "User persona development",
      "Customer journey mapping",
      "Pain-point and opportunity identification",
    ],
  },
  {
    title: "Information architecture",
    description:
      "Content, pages, modules and navigation are organized into a logical structure that helps users find information and complete tasks.",
    points: [
      "Website sitemap and navigation planning",
      "Application module architecture",
      "Content hierarchy and categorization",
      "Task and feature prioritization",
    ],
  },
  {
    title: "Wireframing and user flows",
    description:
      "Low-fidelity layouts define screen structure, content placement, functionality and movement between important user actions.",
    points: [
      "Page and screen wireframes",
      "User-flow diagrams",
      "Form and conversion journey planning",
      "Dashboard and workflow layouts",
    ],
  },
  {
    title: "User interface design",
    description:
      "Wireframes are converted into polished interfaces using approved brand elements, typography, colours, imagery and interaction patterns.",
    points: [
      "Responsive website interface design",
      "Mobile application screen design",
      "Dashboard and portal interfaces",
      "Conversion-focused landing pages",
    ],
  },
  {
    title: "Interactive prototyping",
    description:
      "Clickable prototypes demonstrate navigation, interactions and important journeys before development begins.",
    points: [
      "Clickable screen prototypes",
      "Navigation and interaction simulation",
      "Stakeholder presentation flows",
      "Development-ready experience validation",
    ],
  },
  {
    title: "Usability testing and optimization",
    description:
      "Designs are reviewed through structured testing and feedback to identify confusion, friction and improvement opportunities.",
    points: [
      "Task-based usability testing",
      "Navigation and content validation",
      "Form and checkout journey review",
      "Design refinement recommendations",
    ],
  },
  {
    title: "Design system development",
    description:
      "Reusable components, typography, colours and interaction rules create consistency and make future design and development more efficient.",
    points: [
      "Design tokens and visual guidelines",
      "Reusable UI component library",
      "Interaction and state documentation",
      "Responsive component behaviour",
    ],
  },
];

const DESIGN_SOLUTIONS = [
  {
    title: "Website UI/UX",
    description:
      "Responsive website experiences designed around content clarity, navigation, lead generation and brand communication.",
    points: [
      "Corporate websites",
      "Service websites",
      "Landing pages",
      "Content platforms",
    ],
    icon: AppWindow,
  },
  {
    title: "Mobile app UI/UX",
    description:
      "Touch-focused mobile interfaces designed for Android, iOS and cross-platform application journeys.",
    points: [
      "App onboarding",
      "Mobile navigation",
      "Task journeys",
      "Account screens",
    ],
    icon: Smartphone,
  },
  {
    title: "Ecommerce UX",
    description:
      "Shopping journeys designed around product discovery, comparison, cart clarity, checkout and customer trust.",
    points: [
      "Product discovery",
      "Product pages",
      "Cart experience",
      "Checkout journey",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Dashboard design",
    description:
      "Data-focused interfaces that organize KPIs, tasks, filters, tables and operational actions.",
    points: [
      "KPI dashboards",
      "Admin panels",
      "Data tables",
      "Operational views",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "SaaS product design",
    description:
      "Scalable product interfaces for subscription platforms, business tools and multi-user applications.",
    points: [
      "Product modules",
      "User roles",
      "Account settings",
      "Subscription journeys",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Portal and workflow UX",
    description:
      "Task-focused experiences for customers, employees, vendors and internal approval processes.",
    points: [
      "Customer portals",
      "Employee systems",
      "Vendor dashboards",
      "Approval workflows",
    ],
    icon: UsersRound,
  },
];

const UX_RESEARCH_AREAS = [
  {
    title: "User requirements",
    description:
      "Understand who the users are, what they need and which tasks matter most within the digital product.",
    output: "Clear user priorities",
    icon: UsersRound,
  },
  {
    title: "Experience audit",
    description:
      "Review the existing website or application for navigation, hierarchy, usability and interaction problems.",
    output: "Identified UX issues",
    icon: ScanSearch,
  },
  {
    title: "Competitor analysis",
    description:
      "Evaluate relevant competitor experiences to identify useful patterns, weaknesses and differentiation opportunities.",
    output: "Market experience insights",
    icon: Eye,
  },
  {
    title: "Journey mapping",
    description:
      "Map the complete path users follow from entry and discovery through action, completion and follow-up.",
    output: "Connected user journey",
    icon: Workflow,
  },
  {
    title: "Task validation",
    description:
      "Test whether users can understand and complete important actions without unnecessary difficulty.",
    output: "Usability findings",
    icon: ClipboardCheck,
  },
  {
    title: "Performance insights",
    description:
      "Use available analytics, conversion information and behaviour data to identify design improvement opportunities.",
    output: "Evidence-based decisions",
    icon: BarChart3,
  },
];

const DESIGN_STANDARDS = [
  {
    title: "Usability",
    description:
      "Layouts and interactions are designed to help users understand information and complete actions efficiently.",
    output: "Simpler digital journeys",
    icon: MousePointerClick,
  },
  {
    title: "Accessibility",
    description:
      "Colour contrast, readable typography, focus states and interaction clarity are considered throughout the interface.",
    output: "More inclusive experience",
    icon: Accessibility,
  },
  {
    title: "Visual consistency",
    description:
      "Typography, colours, spacing, components and interface states follow one connected design system.",
    output: "Recognizable interface language",
    icon: Palette,
  },
  {
    title: "Responsive behaviour",
    description:
      "Layouts and components adapt across desktop, tablet and mobile screen sizes without losing usability.",
    output: "Consistent multi-device experience",
    icon: Smartphone,
  },
  {
    title: "Interaction clarity",
    description:
      "Buttons, forms, navigation and application states provide clear feedback and expected next actions.",
    output: "Predictable interactions",
    icon: Zap,
  },
  {
    title: "Development readiness",
    description:
      "Components, responsive states, spacing and interaction details are documented for accurate implementation.",
    output: "Efficient design handover",
    icon: FileCheck2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover the product and users",
    description:
      "We understand the business objective, target users, product requirements, technical conditions and current experience challenges.",
    timing: "Days 1–4",
    output: "UX discovery brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Research and audit",
    description:
      "Existing experiences, customer information, analytics, competitors and relevant user behaviours are reviewed.",
    timing: "Week 1",
    output: "UX research findings",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Define user journeys",
    description:
      "User groups, needs, tasks, pain points and important product journeys are mapped and prioritized.",
    timing: "Week 1",
    output: "User journey maps",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Plan information architecture",
    description:
      "Pages, screens, modules, navigation, content hierarchy and functional relationships are organized.",
    timing: "Week 1–2",
    output: "Information architecture",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Create wireframes",
    description:
      "Low-fidelity layouts define page structure, screen content, functionality and important conversion journeys.",
    timing: "Wireframe phase",
    output: "Approved wireframes",
    icon: PenTool,
  },
  {
    number: "06",
    title: "Design the user interface",
    description:
      "Approved wireframes are converted into polished responsive interfaces aligned with the brand identity.",
    timing: "Design phase",
    output: "High-fidelity UI designs",
    icon: Palette,
  },
  {
    number: "07",
    title: "Build the prototype",
    description:
      "Important screens and interactions are connected into a clickable prototype for review and validation.",
    timing: "Prototype phase",
    output: "Interactive prototype",
    icon: MousePointerClick,
  },
  {
    number: "08",
    title: "Test and refine",
    description:
      "Important journeys are reviewed through usability testing, stakeholder feedback and design-quality checks.",
    timing: "Validation phase",
    output: "Refined product experience",
    icon: TestTubeDiagonal,
  },
  {
    number: "09",
    title: "Prepare design handover",
    description:
      "Final screens, components, responsive states, specifications and interaction details are organized for development.",
    timing: "Handover phase",
    output: "Development-ready design",
    icon: FileCheck2,
  },
];

const DELIVERABLES = [
  {
    title: "UX discovery document",
    description:
      "A structured summary of business goals, users, product scope, current challenges and design priorities.",
    icon: FileSearch,
  },
  {
    title: "User personas",
    description:
      "Practical audience profiles describing user goals, behaviours, needs and common experience challenges.",
    icon: UsersRound,
  },
  {
    title: "User journey maps",
    description:
      "Mapped journeys covering discovery, actions, decisions, friction points and expected outcomes.",
    icon: Workflow,
  },
  {
    title: "Information architecture",
    description:
      "A structured plan covering pages, screens, modules, navigation and content relationships.",
    icon: Layers3,
  },
  {
    title: "User-flow diagrams",
    description:
      "Visual maps showing how users move between screens and complete important tasks.",
    icon: Target,
  },
  {
    title: "Wireframes",
    description:
      "Low-fidelity page and screen layouts defining structure, content placement and functionality.",
    icon: PenTool,
  },
  {
    title: "High-fidelity UI designs",
    description:
      "Polished responsive screens using approved typography, colours, imagery and visual components.",
    icon: Palette,
  },
  {
    title: "Interactive prototype",
    description:
      "Clickable design flows demonstrating navigation, interactions and important product journeys.",
    icon: MousePointerClick,
  },
  {
    title: "Design system",
    description:
      "Reusable components, styles, spacing, states and interface rules for consistent product development.",
    icon: Component,
  },
  {
    title: "Responsive design states",
    description:
      "Desktop, tablet and mobile layouts for important pages, screens and components.",
    icon: Smartphone,
  },
  {
    title: "Usability findings",
    description:
      "Documented observations, user difficulties and improvement recommendations from testing.",
    icon: ClipboardCheck,
  },
  {
    title: "Developer handover",
    description:
      "Organized design files, components, specifications and notes for accurate development implementation.",
    icon: FileCheck2,
  },
];

const FAQS = [
  {
    question: "What is included in your UI/UX design service?",
    answer:
      "The service can include product discovery, user research, UX audits, user personas, journey mapping, information architecture, wireframes, user flows, interface design, prototypes, usability testing, design systems and developer handover.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX design focuses on how users understand and complete tasks within a digital product. UI design focuses on the visual interface, including typography, colours, spacing, components and screen presentation.",
  },
  {
    question: "Do you design websites and mobile applications?",
    answer:
      "Yes. We design responsive websites, mobile applications, ecommerce stores, dashboards, portals, SaaS products and custom web applications.",
  },
  {
    question: "Can you redesign our existing website or application?",
    answer:
      "Yes. We can review the current experience, identify usability and visual issues, retain useful functionality and create a revised interface and user journey.",
  },
  {
    question: "Do you conduct user research?",
    answer:
      "Yes. Depending on the scope, research can include stakeholder interviews, customer interviews, analytics review, competitor analysis, surveys and usability testing.",
  },
  {
    question: "What is a wireframe?",
    answer:
      "A wireframe is a low-fidelity layout that defines page or screen structure, content placement, navigation and functionality before detailed visual design begins.",
  },
  {
    question: "What is an interactive prototype?",
    answer:
      "An interactive prototype connects designed screens into a clickable flow so stakeholders and users can experience important journeys before development.",
  },
  {
    question: "Do you create design systems?",
    answer:
      "Yes. A design system can include typography, colours, spacing, buttons, forms, navigation, cards, tables, states and reusable interface components.",
  },
  {
    question: "Will the designs be responsive?",
    answer:
      "Yes. Important pages, screens and components are designed for relevant desktop, tablet and mobile sizes according to the project scope.",
  },
  {
    question: "Do you consider accessibility in UI/UX design?",
    answer:
      "Yes. We consider readable typography, colour contrast, clear form labels, focus states, interaction clarity and other accessibility-related interface practices.",
  },
  {
    question: "Can you improve an ecommerce checkout journey?",
    answer:
      "Yes. We can review product discovery, product pages, cart, checkout, forms, payment communication and post-purchase journeys to identify usability improvements.",
  },
  {
    question: "Do you provide design files to developers?",
    answer:
      "Yes. Final designs can include organized screens, reusable components, responsive states, specifications and notes required for development handover.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "Timelines depend on the number of pages or screens, research requirements, product complexity, testing and review cycles. A focused website may take several weeks, while a larger application is usually designed in phases.",
  },
  {
    question: "Do you also develop the website or application?",
    answer:
      "Yes. BrainADZ can continue from UI/UX design into website development, web application development, ecommerce development or mobile app development.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design Services",
  serviceType: "UI/UX Design",
  description:
    "Professional UI and UX design services for websites, mobile applications, dashboards and digital products, including research, wireframes, prototypes, design systems and usability testing.",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function UIUXDesignPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICE_SCHEMA),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ UI UX design and digital product team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link
              href="/"
              className="text-[#E1122B] transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/70">/</span>

            <span className="text-white">UI/UX Design</span>
          </nav>

          <h1 className="mt-7 max-w-[1000px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            UI/UX Design Services
          </h1>

          <div className="mt-auto max-w-[860px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Create intuitive, consistent and conversion-focused digital
              experiences through research, wireframes, interface design,
              prototypes and usability testing.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your UI/UX project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="UI UX design page navigation"
          className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10"
        >
          <div className="flex min-h-20 min-w-max items-center">
            {PAGE_NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex h-16 shrink-0 items-center border-b-2 px-4 text-[14px] font-medium transition-colors hover:text-[#E1122B] focus-visible:outline-none sm:px-5 sm:text-[15px] ${
                  index === 0
                    ? "border-[#E1122B] text-[#E1122B]"
                    : "border-transparent text-black/65"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/contact"
              className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B] sm:px-7"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Overview Section */}
      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1320px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Design digital experiences people can understand and use
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                UI/UX design connects business requirements with the needs and
                expectations of users. BrainADZ combines research, information
                architecture, wireframes, interface design and testing into one
                structured design process.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From websites and ecommerce stores to dashboards and mobile
                applications, every screen is planned around clarity,
                consistency, accessibility and measurable user actions.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your design requirements
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/ui-ux-design/design-dashboard.jpg"
                  alt="UI UX design system, wireframes and digital product screens"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                User journeys, wireframes, interface design and reusable
                components
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {OVERVIEW_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-8 text-[16px] font-semibold leading-6 text-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-black/58">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        id="capabilities"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Capabilities
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Complete experience design from research to handover
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
              {CAPABILITIES.map((capability, index) => (
                <details
                  key={capability.title}
                  open={index === 0}
                  className="group border-b border-black/10 last:border-b-0 open:border-l-[3px] open:border-l-[#E1122B] open:bg-[#fff8f8]"
                >
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left text-[17px] font-medium text-black transition-colors hover:bg-[#fff8f8] focus-visible:bg-[#fff8f8] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                    <span>{capability.title}</span>

                    <ChevronDown
                      className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                      strokeWidth={1.7}
                    />
                  </summary>

                  <div className="px-5 pb-7 pt-1">
                    <p className="max-w-[700px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                      {capability.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {capability.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                            strokeWidth={1.8}
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>

            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/ui-ux-design/interface-design.jpg"
                  alt="Responsive website and application interface design"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Responsive UI design, prototypes and digital product
                experiences
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Sparkles className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Design with a clear purpose
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Every page, screen and component should help users
                      understand information or complete a meaningful action.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Design Solutions Section */}
      <section
        id="design-solutions"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Design Solutions
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                UI/UX solutions for every digital product
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The experience design approach changes according to the product,
              users, content, tasks and business outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {DESIGN_SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {solution.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {solution.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[13px] leading-5 text-black/65"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* UX Research Section */}
      <section
        id="ux-research"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  UX Research
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Make design decisions using user and business evidence
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Research reduces assumptions and helps prioritize the journeys,
              content and functionality that matter most.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {UX_RESEARCH_AREAS.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-[14px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/55 hover:bg-white/[0.06] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <span className="text-[13px] font-semibold text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {area.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {area.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Standards */}
      <section
        id="design-standards"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Design Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Designed for usability, consistency and implementation
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Strong UI/UX design must work for users, remain consistent across
              screens and give developers clear implementation direction.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {DESIGN_STANDARDS.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <article
                  key={standard.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <span className="text-[13px] font-semibold text-black/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-black">
                    {standard.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {standard.description}
                  </p>

                  <div className="mt-6 border-t border-black/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/35">
                      Outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-black/72">
                      {standard.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Process
              </p>
            </div>

            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A structured design process from research to handover
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Research, architecture, wireframes, interface design, prototypes
              and testing work as one connected product-design process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your UI/UX workflow
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between gap-5 sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div>
                      <dt className="text-[12px] font-medium uppercase text-black/42">
                        Timing
                      </dt>

                      <dd className="mt-2 text-[14px] leading-6 text-black/68">
                        {step.timing}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[12px] font-medium uppercase text-black/42">
                        Output
                      </dt>

                      <dd className="mt-2 text-[14px] leading-6 text-black/68">
                        {step.output}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section
        id="deliverables"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-[188px] lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Deliverables
                </p>
              </div>

              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Complete design delivery from research to development
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined according to the product type, number
                of screens, research scope, user journeys and development
                requirements.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <Component
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  One connected design system
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Reusable components and interface rules create consistency
                  across existing screens and future product development.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {DELIVERABLES.map((deliverable, index) => {
                const Icon = deliverable.icon;

                return (
                  <article
                    key={deliverable.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 min-h-14 min-w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>

                      <span className="text-[13px] font-semibold text-black/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[20px] font-semibold leading-tight text-black">
                      {deliverable.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-black/58">
                      {deliverable.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                FAQs
              </p>
            </div>

            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Questions before starting UI/UX design?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about research, wireframes, prototypes,
              responsive designs, accessibility, testing and developer
              handover.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Ask another question
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-black/10"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-black/55 transition-transform duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                    strokeWidth={1.7}
                  />
                </summary>

                <div className="px-1 pb-7 sm:px-4">
                  <p className="max-w-[860px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
