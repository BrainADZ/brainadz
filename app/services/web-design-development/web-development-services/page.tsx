/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Braces,
  Check,
  ChevronDown,
  CircleGauge,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  FileSearch,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  LayoutDashboard,
  Link2,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TestTubeDiagonal,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | BrainADZ Marketing",
  description:
    "Professional web development services by BrainADZ Marketing for responsive websites, web applications, ecommerce platforms, CMS solutions, integrations and scalable digital products.",
  alternates: {
    canonical: "/services/web-design-development/web-development",
  },
  openGraph: {
    title: "Web Development Services | BrainADZ Marketing",
    description:
      "Build responsive, secure and scalable websites and web applications with BrainADZ Marketing.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technologies", href: "#technologies" },
  { label: "Standards", href: "#standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Responsive experiences",
    description:
      "Deliver consistent website experiences across desktop, tablet and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable architecture",
    description:
      "Build a flexible technical foundation that can support future features, users and business growth.",
    icon: Layers3,
  },
  {
    title: "Reliable performance",
    description:
      "Improve loading speed, code quality and technical stability across important website journeys.",
    icon: Zap,
  },
  {
    title: "Business-ready integrations",
    description:
      "Connect websites with CRM, ERP, payment, marketing and other business systems.",
    icon: Link2,
  },
];

const CAPABILITIES = [
  {
    title: "Custom website development",
    description:
      "We develop websites around your actual business requirements instead of forcing every project into a rigid template. The structure, features and content flow are planned according to your audience and growth goals.",
    points: [
      "Custom front-end and back-end development",
      "Responsive multi-device implementation",
      "Service, corporate and product websites",
      "Reusable and maintainable code structure",
    ],
  },
  {
    title: "Web application development",
    description:
      "We build browser-based applications with structured workflows, user roles, dashboards, data management and business-specific functionality.",
    points: [
      "Customer and internal web applications",
      "Role-based dashboards and portals",
      "Workflow and approval systems",
      "Secure data and account management",
    ],
  },
  {
    title: "CMS development and integration",
    description:
      "Content management systems make it easier for internal teams to update pages, blogs, media and website information without depending on developers for every change.",
    points: [
      "Custom and headless CMS integration",
      "WordPress and platform-based development",
      "Reusable content blocks and page templates",
      "Content roles and publishing workflows",
    ],
  },
  {
    title: "Ecommerce development",
    description:
      "We build ecommerce experiences around product discovery, customer trust, checkout simplicity and operational requirements.",
    points: [
      "Product catalogue and category development",
      "Cart, checkout and payment integration",
      "Customer accounts and order management",
      "Inventory and shipping coordination",
    ],
  },
  {
    title: "API and third-party integrations",
    description:
      "Websites and applications are connected with external platforms and internal systems to reduce manual work and create more consistent data flows.",
    points: [
      "CRM, ERP and marketing integrations",
      "Payment and shipping gateway integration",
      "Authentication and external API connections",
      "Custom webhooks and data synchronization",
    ],
  },
  {
    title: "Website modernization and migration",
    description:
      "Existing websites can be rebuilt or migrated to a stronger technology stack while preserving important content, URLs and business functionality.",
    points: [
      "Legacy website redevelopment",
      "Platform and framework migration",
      "Content and URL migration planning",
      "Performance and usability improvements",
    ],
  },
  {
    title: "Maintenance and technical support",
    description:
      "Ongoing support keeps websites secure, updated and aligned with changing business requirements after the initial launch.",
    points: [
      "Bug fixes and technical updates",
      "Feature enhancements and improvements",
      "Performance and uptime monitoring",
      "Security and dependency maintenance",
    ],
  },
];

const SOLUTIONS = [
  {
    title: "Corporate websites",
    description:
      "Professional websites that communicate services, capabilities, trust and company positioning clearly.",
    points: [
      "Company profiles",
      "Service pages",
      "Lead generation",
      "Multi-location sites",
    ],
    icon: Globe2,
  },
  {
    title: "Web applications",
    description:
      "Custom browser-based platforms for customer workflows, internal operations and digital service delivery.",
    points: [
      "User dashboards",
      "Admin panels",
      "Data workflows",
      "Role management",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Ecommerce platforms",
    description:
      "Online stores built around product discovery, purchasing, payments and order management.",
    points: [
      "Product catalogue",
      "Shopping cart",
      "Online payments",
      "Order tracking",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Customer portals",
    description:
      "Secure online environments where customers can access information, services, documents and account activity.",
    points: [
      "Account access",
      "Service requests",
      "Document sharing",
      "Customer support",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Business dashboards",
    description:
      "Centralized dashboards that make operational data, tasks and performance information easier to manage.",
    points: [
      "KPI dashboards",
      "Team workflows",
      "Data visualization",
      "Operational reporting",
    ],
    icon: BarChart3,
  },
  {
    title: "Campaign landing pages",
    description:
      "Focused web pages designed around marketing campaigns, offers, lead capture and measurable conversion actions.",
    points: [
      "Lead forms",
      "Offer pages",
      "Campaign tracking",
      "Conversion journeys",
    ],
    icon: Target,
  },
];

const TECHNOLOGIES = [
  {
    title: "Frontend development",
    description:
      "Modern interfaces built for responsiveness, accessibility, performance and maintainable user experiences.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    icon: Code2,
  },
  {
    title: "Backend development",
    description:
      "Secure server-side systems for business logic, authentication, data processing and application workflows.",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "Server actions",
    ],
    icon: Server,
  },
  {
    title: "Database systems",
    description:
      "Structured data storage designed according to application relationships, performance and operational requirements.",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Data modelling",
    ],
    icon: Database,
  },
  {
    title: "CMS platforms",
    description:
      "Flexible content systems that allow teams to manage pages, blogs, products and website information.",
    technologies: [
      "WordPress",
      "Headless CMS",
      "Custom CMS",
      "Content APIs",
    ],
    icon: Blocks,
  },
  {
    title: "Cloud and deployment",
    description:
      "Reliable deployment environments, domain configuration and application delivery workflows.",
    technologies: [
      "Cloud hosting",
      "VPS deployment",
      "CI/CD",
      "SSL setup",
    ],
    icon: Cloud,
  },
  {
    title: "Integrations",
    description:
      "Connections between websites and external tools for payments, communication, automation and business operations.",
    technologies: [
      "CRM APIs",
      "Payment gateways",
      "Webhooks",
      "Third-party tools",
    ],
    icon: GitBranch,
  },
];

const ENGINEERING_STANDARDS = [
  {
    title: "Performance",
    description:
      "Code, assets and page delivery are optimized to reduce unnecessary loading and support smoother user journeys.",
    output: "Faster digital experience",
    icon: Gauge,
  },
  {
    title: "Security",
    description:
      "Authentication, data handling, access control and deployment practices are planned around appropriate security measures.",
    output: "Protected application foundation",
    icon: LockKeyhole,
  },
  {
    title: "Responsive quality",
    description:
      "Layouts and functionality are tested across screen sizes to maintain readability, usability and visual consistency.",
    output: "Multi-device usability",
    icon: Smartphone,
  },
  {
    title: "Maintainability",
    description:
      "Reusable components, clear structure and documented workflows make future development and updates easier.",
    output: "Scalable codebase",
    icon: Braces,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery and requirement analysis",
    description:
      "We understand the business goal, target users, website scope, content, integrations, functionality and technical constraints.",
    timing: "Days 1–4",
    output: "Project requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the architecture",
    description:
      "Pages, user journeys, data structure, features, integrations and technology choices are organized before development begins.",
    timing: "Week 1",
    output: "Technical architecture",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Prepare UI and development system",
    description:
      "Approved layouts, reusable components, responsive rules and development standards are converted into an implementation plan.",
    timing: "Week 1–2",
    output: "Development-ready system",
    icon: PanelsTopLeft,
  },
  {
    number: "04",
    title: "Develop the frontend",
    description:
      "The approved interface is developed into responsive, accessible and reusable components across pages and user journeys.",
    timing: "Build phase",
    output: "Functional frontend",
    icon: Code2,
  },
  {
    number: "05",
    title: "Build backend and integrations",
    description:
      "Business logic, databases, user roles, forms, APIs and third-party integrations are developed and connected.",
    timing: "Build phase",
    output: "Connected application",
    icon: Database,
  },
  {
    number: "06",
    title: "Test and refine",
    description:
      "The website is tested across devices, browsers, forms, functionality, performance, security and important conversion journeys.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "07",
    title: "Deploy and launch",
    description:
      "The final build is deployed, domains and SSL are configured, analytics are checked and launch readiness is confirmed.",
    timing: "Launch phase",
    output: "Live website",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Support and improve",
    description:
      "Post-launch monitoring, fixes, updates and future improvements are managed according to the agreed support scope.",
    timing: "Ongoing",
    output: "Maintained platform",
    icon: Wrench,
  },
];

const DELIVERABLES = [
  {
    title: "Requirement documentation",
    description:
      "A clear summary of project scope, users, functionality, integrations, assumptions and development priorities.",
    icon: ListChecks,
  },
  {
    title: "Technical architecture",
    description:
      "A structured plan covering pages, components, application layers, data flow and technology decisions.",
    icon: Layers3,
  },
  {
    title: "Responsive frontend",
    description:
      "Developed interfaces that adapt across desktop, tablet and mobile screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend functionality",
    description:
      "Server-side logic, authentication, forms, workflows, data management and application functionality.",
    icon: Server,
  },
  {
    title: "CMS or admin panel",
    description:
      "A manageable system for updating content, users, products, records or operational information.",
    icon: LayoutDashboard,
  },
  {
    title: "Third-party integrations",
    description:
      "Configured integrations with payments, CRM, ERP, communication tools and other required platforms.",
    icon: Link2,
  },
  {
    title: "Testing and quality report",
    description:
      "Structured checks covering responsiveness, functionality, forms, browser compatibility and critical user journeys.",
    icon: FileCheck2,
  },
  {
    title: "Deployment and handover",
    description:
      "Live deployment, domain setup, production configuration and project handover documentation.",
    icon: Rocket,
  },
  {
    title: "Analytics and tracking",
    description:
      "Implementation or coordination of relevant website analytics, conversion tracking and campaign measurement tools.",
    icon: SearchCheck,
  },
  {
    title: "Post-launch support",
    description:
      "Agreed technical assistance for fixes, maintenance, updates and future enhancements after launch.",
    icon: Settings2,
  },
];

const FAQS = [
  {
    question: "What is included in your web development service?",
    answer:
      "The service can include requirement planning, frontend development, backend development, CMS setup, database development, API integrations, ecommerce functionality, testing, deployment and post-launch support. The final scope depends on the website or application requirements.",
  },
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop corporate websites, service websites, ecommerce platforms, web applications, customer portals, dashboards, landing pages and custom digital platforms.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our technology selection depends on the project. Common options include Next.js, React, TypeScript, Node.js, Express, MongoDB, MySQL, PostgreSQL, WordPress and relevant cloud or deployment platforms.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer:
      "We can build fully custom websites or work with suitable CMS and platform frameworks. The approach is selected according to budget, timeline, functionality, content management and future scalability requirements.",
  },
  {
    question: "Will the website be mobile responsive?",
    answer:
      "Yes. Responsive development is included so the website adapts across desktop, tablet and mobile screen sizes. Important journeys and functionality are tested on multiple viewport sizes.",
  },
  {
    question: "Can you redesign and redevelop our existing website?",
    answer:
      "Yes. We can review the existing website, retain useful content and functionality, improve the structure and rebuild it using a more suitable design and technology foundation.",
  },
  {
    question: "Can you integrate our CRM, ERP or payment gateway?",
    answer:
      "Yes. Integration is possible when the required system provides suitable APIs, documentation or connection methods. Integration scope is reviewed before development begins.",
  },
  {
    question: "Do you provide a content management system?",
    answer:
      "Yes. Depending on the project, we can provide WordPress, a headless CMS or a custom admin panel so your team can update relevant website content and records.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "We develop websites with clean page structure, metadata support, responsive layouts, performance considerations and crawlable content. Complete keyword strategy and ongoing SEO can be included as a separate service.",
  },
  {
    question: "How long does web development take?",
    answer:
      "Timelines depend on the number of pages, functionality, integrations, content readiness, review cycles and testing requirements. A focused business website may take several weeks, while custom applications require a longer phased development process.",
  },
  {
    question: "Do you provide website hosting and deployment?",
    answer:
      "Yes. We can support domain connection, SSL, hosting setup, VPS deployment, cloud deployment and production configuration according to the selected technology.",
  },
  {
    question: "Do you provide support after the website goes live?",
    answer:
      "Yes. Post-launch support can include bug fixes, security updates, dependency updates, content assistance, monitoring and future feature development according to the agreed maintenance plan.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  serviceType: "Web Development",
  description:
    "Professional web development services for responsive websites, web applications, ecommerce platforms, CMS solutions and business integrations.",
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

export default function WebDevelopmentPage() {
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
          alt="BrainADZ web development and engineering team"
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

            <span className="text-white">Web Development</span>
          </nav>

          <h1 className="mt-7 max-w-[940px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Web Development Services
          </h1>

          <div className="mt-auto max-w-[810px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build responsive, secure and scalable websites and web
              applications designed around your customers, operations and
              business growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your web project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Web development page navigation"
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

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Build a stronger digital foundation for your business
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Web development turns business requirements and approved
                designs into reliable digital experiences. BrainADZ combines
                frontend engineering, backend development, databases,
                integrations and deployment into one structured development
                process.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Whether you need a corporate website, ecommerce platform,
                customer portal or custom web application, the development is
                planned around usability, performance, security and future
                scalability.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your web requirements
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/web-development/development-dashboard.jpg"
                  alt="Web development project and application dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Website engineering, application development and technical
                delivery
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
            Complete web development from frontend to deployment
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
                  src="/web-development/code-development.jpg"
                  alt="Custom website and web application development"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Custom frontend, backend, CMS and integration development
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Sparkles className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Development aligned with the business
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Technology decisions are based on functionality,
                      maintainability, scalability and operational
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Solutions
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Web solutions built around real business needs
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The right solution depends on the users, business workflow,
              content requirements, transaction model and long-term digital
              roadmap.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {SOLUTIONS.map((solution, index) => {
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

      {/* Technologies Section */}
      <section
        id="technologies"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Technologies
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Modern technologies selected for the right purpose
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Technology is selected according to project complexity,
              functionality, content management, integrations, scalability and
              long-term maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TECHNOLOGIES.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.title}
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
                    {technology.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {technology.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                    {technology.technologies.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-5 text-white/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section
        id="standards"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Engineering Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Built for performance, security and maintainability
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A successful website must remain usable and manageable after the
              launch. Development standards support long-term reliability and
              future improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ENGINEERING_STANDARDS.map((standard, index) => {
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
              A structured process from requirements to launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Planning, engineering, testing and deployment work as one
              connected process so development remains transparent and
              predictable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your development project
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
                Complete technical delivery from build to handover
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined around the approved scope and can
                include the complete website, application functionality,
                integrations, documentation and launch support.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Built for long-term ownership
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Clear structure, reusable components and documented
                  deployment make future updates and development easier.
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
              Questions before starting web development?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about technologies, CMS platforms,
              integrations, development timelines, deployment and support.
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
