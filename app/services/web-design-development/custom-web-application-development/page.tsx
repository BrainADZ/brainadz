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
  KeyRound,
  Layers3,
  LayoutDashboard,
  Link2,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  PanelsTopLeft,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Target,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Custom Web Application Development Services | BrainADZ Marketing",
  description:
    "Custom web application development services by BrainADZ Marketing for business portals, dashboards, workflow systems, SaaS platforms, API integrations and scalable web products.",
  alternates: {
    canonical:
      "/services/web-design-development/custom-web-application-development",
  },
  openGraph: {
    title:
      "Custom Web Application Development Services | BrainADZ Marketing",
    description:
      "Build secure, scalable and business-specific web applications designed around your users, workflows and operational requirements.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Application Types", href: "#application-types" },
  { label: "Core Features", href: "#core-features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Business-specific workflows",
    description:
      "Build application journeys around your actual processes, teams and customer requirements.",
    icon: Workflow,
  },
  {
    title: "Centralized operations",
    description:
      "Bring users, data, approvals, tasks and reporting into one manageable digital platform.",
    icon: LayoutDashboard,
  },
  {
    title: "Scalable architecture",
    description:
      "Create a technical foundation that can support additional users, modules and integrations.",
    icon: Layers3,
  },
  {
    title: "Connected business systems",
    description:
      "Integrate the application with CRM, ERP, payment, communication and third-party platforms.",
    icon: Link2,
  },
];

const CAPABILITIES = [
  {
    title: "Custom application strategy",
    description:
      "We translate business requirements into a practical application plan covering users, workflows, modules, integrations and measurable outcomes.",
    points: [
      "Business process and user analysis",
      "Feature and module prioritization",
      "Application scope and roadmap",
      "Technology and integration planning",
    ],
  },
  {
    title: "Frontend application development",
    description:
      "Responsive interfaces are developed around usability, information hierarchy and the actions users need to complete.",
    points: [
      "Responsive web application interfaces",
      "Reusable component development",
      "Interactive forms and dashboards",
      "Accessible and consistent user journeys",
    ],
  },
  {
    title: "Backend and API development",
    description:
      "Secure backend systems manage business logic, authentication, permissions, data processing and application workflows.",
    points: [
      "Custom backend architecture",
      "REST API development",
      "Business logic and workflow automation",
      "Third-party API connections",
    ],
  },
  {
    title: "Database architecture",
    description:
      "Application data is structured according to relationships, access patterns, reporting needs and future growth.",
    points: [
      "Database design and data modelling",
      "MongoDB, MySQL or PostgreSQL setup",
      "Data validation and relationships",
      "Backup and migration planning",
    ],
  },
  {
    title: "User roles and access control",
    description:
      "Different users receive controlled access to the modules, information and actions relevant to their responsibilities.",
    points: [
      "Role-based access control",
      "Admin, team and customer roles",
      "Permission and approval rules",
      "Secure authentication workflows",
    ],
  },
  {
    title: "Dashboard and reporting systems",
    description:
      "Operational information is organized into dashboards that help teams understand activity, performance and pending actions.",
    points: [
      "Custom KPI dashboards",
      "Filters and reporting views",
      "Downloadable reports",
      "Real-time or scheduled data updates",
    ],
  },
  {
    title: "Automation and integrations",
    description:
      "Applications are connected with external systems and automated actions to reduce repetitive manual work.",
    points: [
      "CRM and ERP integrations",
      "Email, SMS and WhatsApp workflows",
      "Payment and document integrations",
      "Webhooks and automated notifications",
    ],
  },
  {
    title: "Maintenance and product evolution",
    description:
      "Post-launch support keeps the application stable while new modules and improvements are developed as requirements change.",
    points: [
      "Bug fixes and performance updates",
      "Feature development and enhancements",
      "Security and dependency maintenance",
      "Monitoring and technical support",
    ],
  },
];

const APPLICATION_TYPES = [
  {
    title: "Customer portals",
    description:
      "Secure platforms where customers can access services, documents, requests, orders and account information.",
    points: [
      "Account access",
      "Service requests",
      "Document sharing",
      "Status tracking",
    ],
    icon: UsersRound,
  },
  {
    title: "Admin panels",
    description:
      "Centralized systems for managing users, content, records, settings, approvals and operational activity.",
    points: [
      "User management",
      "Data control",
      "System settings",
      "Operational reports",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Workflow applications",
    description:
      "Digital systems that organize tasks, approvals, responsibilities and process movement between teams.",
    points: [
      "Task assignment",
      "Approval stages",
      "Status workflows",
      "Team notifications",
    ],
    icon: Workflow,
  },
  {
    title: "SaaS platforms",
    description:
      "Subscription-based web products that provide software functionality to different customers or organizations.",
    points: [
      "Tenant accounts",
      "Subscription plans",
      "User permissions",
      "Usage management",
    ],
    icon: Cloud,
  },
  {
    title: "Business dashboards",
    description:
      "Applications that convert business and operational data into useful performance views and decision-support tools.",
    points: [
      "KPI monitoring",
      "Data visualization",
      "Custom filters",
      "Exportable reports",
    ],
    icon: BarChart3,
  },
  {
    title: "Internal management systems",
    description:
      "Custom applications designed to manage company-specific processes, records, teams and operational requirements.",
    points: [
      "Employee workflows",
      "Project tracking",
      "Resource management",
      "Internal records",
    ],
    icon: PanelsTopLeft,
  },
];

const CORE_FEATURES = [
  {
    title: "Authentication",
    description:
      "Secure sign-in, password recovery, session management and account verification for application users.",
    output: "Controlled user access",
    icon: KeyRound,
  },
  {
    title: "Role management",
    description:
      "Permission systems that define which modules, records and actions each user type can access.",
    output: "Role-based application control",
    icon: ShieldCheck,
  },
  {
    title: "Data management",
    description:
      "Structured forms, records, validation, search and filtering for important application information.",
    output: "Organized business data",
    icon: Database,
  },
  {
    title: "Workflow automation",
    description:
      "Automated status changes, notifications, approvals and actions based on user activity or business rules.",
    output: "Reduced manual processing",
    icon: Zap,
  },
  {
    title: "Dashboards",
    description:
      "Custom views that summarize tasks, activity, KPIs and important operational information.",
    output: "Clear operational visibility",
    icon: LayoutDashboard,
  },
  {
    title: "System integrations",
    description:
      "Connections with external platforms and internal systems through APIs, webhooks and data synchronization.",
    output: "Connected digital ecosystem",
    icon: GitBranch,
  },
];

const ARCHITECTURE_STANDARDS = [
  {
    title: "Scalable structure",
    description:
      "Application modules, services and data models are organized to support future functionality and increased usage.",
    output: "Growth-ready architecture",
    icon: Layers3,
  },
  {
    title: "Secure access",
    description:
      "Authentication, permissions, validation and data handling are implemented with appropriate safeguards.",
    output: "Protected application access",
    icon: LockKeyhole,
  },
  {
    title: "Responsive interface",
    description:
      "Application screens remain usable across desktop, tablet and relevant mobile devices.",
    output: "Multi-device usability",
    icon: MonitorSmartphone,
  },
  {
    title: "Maintainable code",
    description:
      "Reusable components, clear separation of concerns and documented structure support future development.",
    output: "Easier long-term maintenance",
    icon: Braces,
  },
  {
    title: "Reliable performance",
    description:
      "Queries, interfaces, APIs and application resources are optimized according to expected user activity.",
    output: "Faster application response",
    icon: Gauge,
  },
  {
    title: "Deployment readiness",
    description:
      "Environment configuration, version control and release processes are organized for stable deployment.",
    output: "Controlled application releases",
    icon: Rocket,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business process discovery",
    description:
      "We understand the current process, users, challenges, data sources, approvals, integrations and expected application outcomes.",
    timing: "Days 1–5",
    output: "Business requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define the application scope",
    description:
      "Features, modules, user roles, workflows, priorities and project phases are organized into a practical development roadmap.",
    timing: "Week 1",
    output: "Feature and scope document",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Plan architecture and data",
    description:
      "Frontend, backend, database, authentication, integrations and deployment requirements are technically planned.",
    timing: "Week 1–2",
    output: "Technical architecture",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Design the user experience",
    description:
      "Application screens, dashboards, forms, navigation and user journeys are organized around tasks and usability.",
    timing: "Design phase",
    output: "Development-ready UI",
    icon: PanelsTopLeft,
  },
  {
    number: "05",
    title: "Develop the application",
    description:
      "Frontend screens, backend logic, databases, user roles and core workflows are developed module by module.",
    timing: "Build phase",
    output: "Functional application",
    icon: Code2,
  },
  {
    number: "06",
    title: "Connect integrations",
    description:
      "Required APIs, CRM, ERP, payments, communication tools and external services are connected and verified.",
    timing: "Build phase",
    output: "Integrated application",
    icon: Link2,
  },
  {
    number: "07",
    title: "Test complete workflows",
    description:
      "Functionality, permissions, forms, data, integrations, responsiveness, performance and error scenarios are tested.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "08",
    title: "Deploy and onboard",
    description:
      "The application is deployed, production settings are verified and relevant users receive access and usage guidance.",
    timing: "Launch phase",
    output: "Live web application",
    icon: Rocket,
  },
  {
    number: "09",
    title: "Maintain and improve",
    description:
      "Application usage, technical performance and new requirements are reviewed for future fixes and enhancements.",
    timing: "Ongoing",
    output: "Supported digital product",
    icon: Wrench,
  },
];

const DELIVERABLES = [
  {
    title: "Requirement specification",
    description:
      "A structured document covering business goals, users, workflows, features, data and application priorities.",
    icon: FileSearch,
  },
  {
    title: "Feature roadmap",
    description:
      "A phased plan defining core modules, launch priorities and future development opportunities.",
    icon: ListChecks,
  },
  {
    title: "Technical architecture",
    description:
      "A documented plan covering frontend, backend, database, integrations, access and deployment.",
    icon: Layers3,
  },
  {
    title: "Responsive application UI",
    description:
      "Task-focused application screens developed for desktop, tablet and relevant mobile usage.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend and APIs",
    description:
      "Server-side logic, secure endpoints, workflows, validation and application services.",
    icon: Server,
  },
  {
    title: "Database system",
    description:
      "Structured data models, relationships, validation and storage configured for application requirements.",
    icon: Database,
  },
  {
    title: "Role-based access",
    description:
      "Authentication and permission controls for administrators, teams, customers and other user groups.",
    icon: ShieldCheck,
  },
  {
    title: "Dashboard and reports",
    description:
      "Operational views, KPIs, filters, data summaries and downloadable reports.",
    icon: BarChart3,
  },
  {
    title: "Third-party integrations",
    description:
      "Required connections with business tools, communication systems, payments and external platforms.",
    icon: GitBranch,
  },
  {
    title: "Testing and deployment",
    description:
      "Quality assurance, production setup, launch support and technical handover.",
    icon: FileCheck2,
  },
  {
    title: "Documentation",
    description:
      "Technical, administrative or user guidance according to the agreed project scope.",
    icon: Blocks,
  },
  {
    title: "Post-launch support",
    description:
      "Agreed assistance for fixes, monitoring, updates and future feature development.",
    icon: Settings2,
  },
];

const FAQS = [
  {
    question:
      "What is included in custom web application development?",
    answer:
      "The service can include requirement analysis, application architecture, UI development, backend development, databases, user authentication, role management, dashboards, API integrations, testing, deployment and post-launch support.",
  },
  {
    question:
      "What types of custom web applications do you develop?",
    answer:
      "We develop customer portals, admin panels, workflow systems, SaaS platforms, dashboards, internal management systems and other browser-based applications.",
  },
  {
    question:
      "How is a custom web application different from a website?",
    answer:
      "A website mainly presents information and supports basic interactions. A web application usually includes user accounts, data processing, dashboards, workflows, permissions and business-specific functionality.",
  },
  {
    question:
      "Can you automate our existing manual business process?",
    answer:
      "Yes. We can review spreadsheets, forms, approvals and repetitive activities and convert suitable processes into structured digital workflows.",
  },
  {
    question:
      "Can different users have different access levels?",
    answer:
      "Yes. Role-based access can be configured so administrators, employees, customers, vendors and other users only access relevant modules and actions.",
  },
  {
    question:
      "Can the application integrate with our CRM or ERP?",
    answer:
      "Yes. Integration is possible when the required CRM, ERP or external platform provides suitable APIs, webhooks or supported connection methods.",
  },
  {
    question:
      "Which technologies do you use for web applications?",
    answer:
      "Technology is selected according to the project. Common options include Next.js, React, TypeScript, Node.js, Express, MongoDB, MySQL and PostgreSQL.",
  },
  {
    question:
      "Will the web application work on mobile devices?",
    answer:
      "Yes. The interface can be developed responsively for desktop, tablet and mobile devices. Complex operational applications may still be optimized primarily for larger screens when appropriate.",
  },
  {
    question:
      "Can the application support multiple companies or branches?",
    answer:
      "Yes. Multi-company, multi-branch or multi-tenant structures can be developed when required, with controlled data and user access.",
  },
  {
    question:
      "How long does custom web application development take?",
    answer:
      "Timelines depend on modules, workflows, user roles, integrations and testing complexity. A focused MVP may take several weeks, while a larger platform is usually delivered in phases.",
  },
  {
    question:
      "Can you build an MVP first?",
    answer:
      "Yes. Core features can be prioritized into an MVP so the application can be tested with real users before additional modules are developed.",
  },
  {
    question:
      "Do you provide support after launch?",
    answer:
      "Yes. Post-launch support can include bug fixes, performance monitoring, security updates, user assistance and future feature development.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Application Development Services",
  serviceType: "Custom Web Application Development",
  description:
    "Custom web application development services for portals, dashboards, workflow systems, SaaS platforms, integrations and scalable digital products.",
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

export default function CustomWebApplicationDevelopmentPage() {
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

      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ custom web application development team"
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

            <span className="text-white">
              Custom Web Application Development
            </span>
          </nav>

          <h1 className="mt-7 max-w-[1100px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Custom Web Application Development Services
          </h1>

          <div className="mt-auto max-w-[830px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build secure, scalable and business-specific web applications
              designed around your users, workflows, data and operational
              requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your application project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Custom web application page navigation"
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

      {/* Overview */}
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
            Turn complex business processes into connected digital systems
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Custom web applications help businesses manage workflows,
                users, data and services through one centralized digital
                platform. BrainADZ designs and develops applications according
                to the way your organization actually works.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From customer portals and admin panels to SaaS platforms and
                internal management systems, every module is planned around
                usability, security, integrations and future scalability.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your application idea
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/custom-web-application/application-dashboard.jpg"
                  alt="Custom web application dashboard and business workflow"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Custom workflows, dashboards, users and business data
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

      {/* Capabilities */}
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
            Complete application development from strategy to support
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
                  src="/custom-web-application/application-development.jpg"
                  alt="Custom web application engineering and development"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Frontend, backend, databases and application integrations
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Workflow className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Built around your process
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Features and user journeys are based on real operational
                      needs instead of generic software assumptions.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Application Types */}
      <section
        id="application-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Application Types
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Custom platforms for different business requirements
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The application structure depends on users, workflows, data,
              permissions, operational complexity and long-term product goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {APPLICATION_TYPES.map((application, index) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {application.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {application.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {application.points.map((point) => (
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

      {/* Core Features */}
      <section
        id="core-features"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Core Features
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Essential functionality for a reliable web application
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Core features are configured according to the users, data and
              operational actions the application must manage.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CORE_FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
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
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {feature.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {feature.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Architecture Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Built for security, scalability and maintainability
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A custom application should remain stable and manageable as
              users, data, integrations and features continue to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ARCHITECTURE_STANDARDS.map((standard, index) => {
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

      {/* Process */}
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
              A structured process from business requirement to launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Business analysis, architecture, design, development and testing
              work as one connected delivery process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your application roadmap
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

      {/* Deliverables */}
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
                Complete application delivery from planning to support
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined around the users, modules,
                integrations and operational workflows included in the
                approved project scope.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <RefreshCw
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Designed to evolve
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Modular architecture allows the application to grow through
                  new workflows, users, reports and integrations over time.
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

      {/* FAQs */}
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
              Questions before developing a custom application?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about workflows, technologies, user roles,
              integrations, MVP development, timelines and support.
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
