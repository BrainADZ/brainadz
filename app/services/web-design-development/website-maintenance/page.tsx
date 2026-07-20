/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  Bug,
  CalendarCheck2,
  Check,
  ChevronDown,
  CircleGauge,
  CloudCog,
  DatabaseBackup,
  FileCheck2,
  FileSearch,
  Gauge,
  HardDrive,
  KeyRound,
  Layers3,
  LifeBuoy,
  Link2,
  ListChecks,
  LockKeyhole,
  MonitorCheck,
  RefreshCw,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTubeDiagonal,
  TimerReset,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Maintenance Services | BrainADZ Marketing",
  description:
    "Professional website maintenance services by BrainADZ Marketing for security updates, backups, uptime monitoring, bug fixes, performance optimization, content updates and technical support.",
  alternates: {
    canonical: "/services/web-design-development/website-maintenance",
  },
  openGraph: {
    title: "Website Maintenance Services | BrainADZ Marketing",
    description:
      "Keep your website secure, updated, available and performing reliably with structured website maintenance and technical support.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Maintenance Areas", href: "#maintenance-areas" },
  { label: "Support Plans", href: "#support-plans" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Improved website reliability",
    description:
      "Identify technical issues early and keep important website journeys working consistently.",
    icon: MonitorCheck,
  },
  {
    title: "Stronger security",
    description:
      "Maintain platform, plugin, dependency and access controls through scheduled technical reviews.",
    icon: ShieldCheck,
  },
  {
    title: "Protected website data",
    description:
      "Create scheduled backups and recovery processes for important website files, content and databases.",
    icon: DatabaseBackup,
  },
  {
    title: "Ongoing performance",
    description:
      "Review loading speed, resource usage and technical issues that can affect user experience.",
    icon: Gauge,
  },
];

const CAPABILITIES = [
  {
    title: "Website updates and technical maintenance",
    description:
      "We keep the website platform, code, themes, plugins and dependencies updated according to the technology and maintenance scope.",
    points: [
      "CMS, theme and plugin updates",
      "Framework and dependency updates",
      "Compatibility and regression checks",
      "Technical configuration maintenance",
    ],
  },
  {
    title: "Website security maintenance",
    description:
      "Security maintenance focuses on reducing avoidable risks through access controls, updates, monitoring and technical review.",
    points: [
      "Security update implementation",
      "Administrative access review",
      "Malware and suspicious activity checks",
      "SSL and security configuration review",
    ],
  },
  {
    title: "Backup and recovery management",
    description:
      "Website files, databases and important configurations are backed up according to an agreed schedule and retention plan.",
    points: [
      "Scheduled website backups",
      "Database and file backup review",
      "Backup storage verification",
      "Website restoration support",
    ],
  },
  {
    title: "Uptime and availability monitoring",
    description:
      "Important website pages and services are monitored so outages and availability issues can be identified more quickly.",
    points: [
      "Website uptime monitoring",
      "Server and response checks",
      "SSL expiry monitoring",
      "Availability incident alerts",
    ],
  },
  {
    title: "Bug fixing and troubleshooting",
    description:
      "Technical issues affecting pages, forms, layouts, integrations and user journeys are investigated and resolved according to priority.",
    points: [
      "Frontend display issue resolution",
      "Form and functionality troubleshooting",
      "Integration error investigation",
      "Browser and device issue fixing",
    ],
  },
  {
    title: "Website performance optimization",
    description:
      "Performance maintenance reviews loading behaviour, assets, scripts, databases and hosting conditions that can affect speed.",
    points: [
      "Page-loading performance review",
      "Image and asset optimization",
      "Caching and resource configuration",
      "Database and code improvements",
    ],
  },
  {
    title: "Content and page updates",
    description:
      "Routine website updates can include approved text, image, document, banner, product and page changes.",
    points: [
      "Page content updates",
      "Image and document replacement",
      "Banner and campaign changes",
      "Product and service information updates",
    ],
  },
  {
    title: "Hosting and server support",
    description:
      "Technical coordination can cover website hosting, domain, SSL, deployment and server-related issues within the agreed support scope.",
    points: [
      "Hosting and deployment support",
      "Domain and DNS coordination",
      "SSL setup and renewal checks",
      "Server configuration assistance",
    ],
  },
];

const MAINTENANCE_AREAS = [
  {
    title: "Platform maintenance",
    description:
      "Keep the website platform, framework, themes, plugins and dependencies current and compatible.",
    points: [
      "System updates",
      "Plugin updates",
      "Dependency review",
      "Compatibility checks",
    ],
    icon: RefreshCw,
  },
  {
    title: "Security maintenance",
    description:
      "Review access, software versions, suspicious activity and technical configurations that affect website security.",
    points: [
      "Access review",
      "Security patches",
      "Malware checks",
      "SSL monitoring",
    ],
    icon: LockKeyhole,
  },
  {
    title: "Backup management",
    description:
      "Maintain recoverable copies of website data and confirm that backup processes are functioning correctly.",
    points: [
      "File backups",
      "Database backups",
      "Retention checks",
      "Restore support",
    ],
    icon: DatabaseBackup,
  },
  {
    title: "Performance maintenance",
    description:
      "Review website speed, page resources, server response and other factors affecting user experience.",
    points: [
      "Speed checks",
      "Asset optimization",
      "Caching review",
      "Database cleanup",
    ],
    icon: Zap,
  },
  {
    title: "Functional maintenance",
    description:
      "Test important pages, forms, links, buttons, integrations and user journeys for technical issues.",
    points: [
      "Form testing",
      "Link checks",
      "Checkout testing",
      "Integration review",
    ],
    icon: TestTubeDiagonal,
  },
  {
    title: "Content maintenance",
    description:
      "Keep approved website information, images, documents and promotional content accurate and current.",
    points: [
      "Content changes",
      "Image updates",
      "Document uploads",
      "Banner changes",
    ],
    icon: FileCheck2,
  },
];

const SUPPORT_PLANS = [
  {
    title: "Essential maintenance",
    description:
      "Suitable for smaller informational websites that need scheduled technical checks, updates and backups.",
    features: [
      "Scheduled platform updates",
      "Website backup checks",
      "Basic uptime monitoring",
      "Minor technical fixes",
    ],
    response: "Scheduled support",
    icon: Settings2,
  },
  {
    title: "Business maintenance",
    description:
      "Suitable for active business websites that require regular content updates, monitoring and technical assistance.",
    features: [
      "Regular technical maintenance",
      "Performance monitoring",
      "Content update allocation",
      "Priority issue handling",
    ],
    response: "Priority support",
    icon: LifeBuoy,
  },
  {
    title: "Ecommerce maintenance",
    description:
      "Designed for online stores where products, checkout, payments, integrations and order journeys require ongoing review.",
    features: [
      "Store functionality checks",
      "Payment and checkout review",
      "App or plugin monitoring",
      "Catalogue support",
    ],
    response: "Commerce-focused support",
    icon: Activity,
  },
  {
    title: "Custom application support",
    description:
      "Suitable for custom websites, portals and applications with ongoing feature, integration and deployment requirements.",
    features: [
      "Application monitoring",
      "Bug fixing allocation",
      "Integration troubleshooting",
      "Feature enhancement support",
    ],
    response: "Technical product support",
    icon: CloudCog,
  },
];

const MONITORING_AREAS = [
  {
    title: "Website availability",
    description:
      "Monitor whether the website and important public pages remain accessible.",
    output: "Outage visibility",
    icon: MonitorCheck,
  },
  {
    title: "Server response",
    description:
      "Review website response behaviour and hosting conditions that may affect reliability.",
    output: "Infrastructure awareness",
    icon: Server,
  },
  {
    title: "Security signals",
    description:
      "Review suspicious activity, outdated components and access-related risks within the agreed scope.",
    output: "Earlier risk identification",
    icon: ShieldCheck,
  },
  {
    title: "Website performance",
    description:
      "Track loading behaviour and technical changes that may affect website experience.",
    output: "Performance visibility",
    icon: Gauge,
  },
  {
    title: "Forms and conversions",
    description:
      "Test important enquiry, contact, registration and transaction journeys.",
    output: "Reliable lead journeys",
    icon: SearchCheck,
  },
  {
    title: "Backup status",
    description:
      "Confirm that scheduled website and database backups are being created and retained.",
    output: "Recovery readiness",
    icon: HardDrive,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Website maintenance audit",
    description:
      "We review the website technology, hosting, updates, security, backups, performance, forms and current technical issues.",
    timing: "Days 1–3",
    output: "Maintenance audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define maintenance priorities",
    description:
      "Critical risks, routine tasks, content requirements and future technical needs are organized by priority.",
    timing: "Week 1",
    output: "Maintenance priority plan",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Stabilize the website",
    description:
      "Important updates, backups, access controls and existing technical issues are addressed before routine maintenance begins.",
    timing: "Initial setup",
    output: "Stable maintenance baseline",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Configure monitoring and backups",
    description:
      "Relevant uptime, backup, security and performance checks are configured according to the support scope.",
    timing: "Initial setup",
    output: "Monitoring system",
    icon: BellRing,
  },
  {
    number: "05",
    title: "Run scheduled maintenance",
    description:
      "Updates, compatibility checks, backups, testing and routine technical tasks are completed on the agreed schedule.",
    timing: "Weekly or monthly",
    output: "Maintained website",
    icon: CalendarCheck2,
  },
  {
    number: "06",
    title: "Handle issues and requests",
    description:
      "Bugs, content changes and support requests are reviewed, prioritized and resolved within the agreed allocation.",
    timing: "Ongoing",
    output: "Resolved support tasks",
    icon: Bug,
  },
  {
    number: "07",
    title: "Test important journeys",
    description:
      "Forms, links, responsive layouts, integrations and relevant customer journeys are checked after technical changes.",
    timing: "After updates",
    output: "Verified functionality",
    icon: TestTubeDiagonal,
  },
  {
    number: "08",
    title: "Report and recommend",
    description:
      "Completed tasks, identified risks, website status and recommended improvements are documented.",
    timing: "Monthly",
    output: "Maintenance report",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Website maintenance audit",
    description:
      "A structured review of technology, updates, backups, security, performance and current technical issues.",
    icon: FileSearch,
  },
  {
    title: "Maintenance task plan",
    description:
      "A prioritized schedule covering routine updates, checks, content changes and technical support tasks.",
    icon: ListChecks,
  },
  {
    title: "Platform updates",
    description:
      "Approved CMS, framework, theme, plugin and dependency updates with relevant compatibility checks.",
    icon: RefreshCw,
  },
  {
    title: "Backup management",
    description:
      "Scheduled website and database backups with retention and recovery checks according to scope.",
    icon: DatabaseBackup,
  },
  {
    title: "Security checks",
    description:
      "Review of administrative access, SSL, updates and relevant website security indicators.",
    icon: KeyRound,
  },
  {
    title: "Uptime monitoring",
    description:
      "Monitoring of website availability and important service interruptions.",
    icon: MonitorCheck,
  },
  {
    title: "Bug fixing",
    description:
      "Investigation and resolution of approved website, layout, form and integration issues.",
    icon: Bug,
  },
  {
    title: "Performance optimization",
    description:
      "Technical improvements covering assets, caching, code, databases and page-loading behaviour.",
    icon: Gauge,
  },
  {
    title: "Content updates",
    description:
      "Approved changes to website text, images, documents, banners, products and page information.",
    icon: FileCheck2,
  },
  {
    title: "Functional testing",
    description:
      "Checks covering important links, forms, responsive layouts, transactions and connected journeys.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Maintenance reporting",
    description:
      "A summary of completed work, website status, identified risks and recommended next actions.",
    icon: CircleGauge,
  },
  {
    title: "Technical support",
    description:
      "Agreed support for hosting, deployment, domain, SSL and website-related technical requests.",
    icon: LifeBuoy,
  },
];

const FAQS = [
  {
    question: "What is included in website maintenance services?",
    answer:
      "Website maintenance can include platform updates, plugin or dependency updates, security checks, backups, uptime monitoring, bug fixes, content changes, performance optimization, functional testing and technical support.",
  },
  {
    question: "Why does a website need regular maintenance?",
    answer:
      "Websites depend on software, hosting, integrations and content that change over time. Regular maintenance helps reduce compatibility issues, security risks, broken functionality and avoidable downtime.",
  },
  {
    question: "How frequently should website maintenance be performed?",
    answer:
      "Frequency depends on the website. Smaller informational websites may need monthly maintenance, while ecommerce stores and custom applications may require weekly monitoring and more frequent technical review.",
  },
  {
    question: "Do you maintain WordPress websites?",
    answer:
      "Yes. WordPress maintenance can include core, theme and plugin updates, backups, security checks, performance review, content updates and technical troubleshooting.",
  },
  {
    question: "Do you maintain Shopify stores?",
    answer:
      "Yes. Shopify support can include theme changes, app troubleshooting, catalogue updates, store configuration, conversion improvements and integration support.",
  },
  {
    question: "Can you maintain custom-coded websites?",
    answer:
      "Yes. We can support suitable Next.js, React, Node.js and other custom website or application projects after reviewing the codebase, hosting environment and documentation.",
  },
  {
    question: "Do you provide website backups?",
    answer:
      "Yes. Backup schedules can include website files, databases and important configurations. The exact frequency and retention period depend on the maintenance plan and hosting environment.",
  },
  {
    question: "Can you fix a hacked or infected website?",
    answer:
      "We can investigate compromised websites, remove identified malicious files where possible, update vulnerable components and strengthen access and security configuration. Complete recovery depends on the condition of the website and available backups.",
  },
  {
    question: "Do you monitor website uptime?",
    answer:
      "Yes. Uptime monitoring can be included to identify when the website becomes unavailable. Response and resolution depend on the selected maintenance and hosting support scope.",
  },
  {
    question: "Can you improve website loading speed?",
    answer:
      "Yes. Performance work can include image optimization, caching, script review, database cleanup, code improvements and hosting recommendations. Results depend on the website technology and infrastructure.",
  },
  {
    question: "Are content updates included in maintenance?",
    answer:
      "Content updates can be included through a monthly time or task allocation. This may cover text, images, banners, documents, products and page information.",
  },
  {
    question: "Do you test forms and website functionality?",
    answer:
      "Yes. Important contact forms, lead forms, checkout journeys, links and integrations can be tested as part of scheduled maintenance.",
  },
  {
    question: "What happens if the website goes down?",
    answer:
      "The issue is investigated to identify whether it relates to hosting, domain, SSL, code, database or a third-party service. Resolution depends on access, provider response and the selected support plan.",
  },
  {
    question: "Do you provide emergency website support?",
    answer:
      "Priority or emergency support can be included in selected maintenance plans. Response expectations, availability and task limits should be defined in the maintenance agreement.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Maintenance Services",
  serviceType: "Website Maintenance",
  description:
    "Professional website maintenance services for updates, security, backups, uptime monitoring, bug fixes, performance optimization and technical support.",
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

export default function WebsiteMaintenancePage() {
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
          alt="BrainADZ website maintenance and technical support team"
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

            <span className="text-white">Website Maintenance</span>
          </nav>

          <h1 className="mt-7 max-w-[1040px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Website Maintenance Services
          </h1>

          <div className="mt-auto max-w-[850px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Keep your website secure, updated, available and performing
              reliably through structured maintenance and technical support.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Maintain your website
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Website maintenance page navigation"
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
            Protect the website your customers and business depend on
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                A website continues to change after launch. Software updates,
                hosting conditions, integrations, content and user activity can
                create new technical requirements over time.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                BrainADZ provides structured maintenance covering updates,
                backups, security, monitoring, bug fixing, performance and
                ongoing technical support so the website remains dependable.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Review your website maintenance
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/website-maintenance/maintenance-dashboard.jpg"
                  alt="Website maintenance, uptime and performance monitoring dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Website monitoring, maintenance tasks and technical reporting
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
            Complete website maintenance from updates to technical support
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
                  src="/website-maintenance/technical-maintenance.jpg"
                  alt="Website updates, security and technical maintenance"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Website updates, backups, security and issue resolution
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <TimerReset className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Preventive maintenance matters
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Regular checks help identify outdated software, broken
                      journeys and technical risks before they become larger
                      problems.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Maintenance Areas */}
      <section
        id="maintenance-areas"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Maintenance Areas
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Maintenance across every important website layer
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A dependable website requires regular attention across software,
              hosting, functionality, content and customer journeys.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {MAINTENANCE_AREAS.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {area.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {area.points.map((point) => (
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

      {/* Support Plans */}
      <section
        id="support-plans"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Support Plans
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Maintenance support matched to website complexity
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Support requirements differ between informational websites,
              ecommerce stores and custom applications.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SUPPORT_PLANS.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.title}
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
                    {plan.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[13px] leading-5 text-white/70"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Support model
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {plan.response}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section
        id="monitoring"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Monitoring
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Monitor the signals that affect website reliability
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Monitoring helps identify outages, backup failures, technical
              changes and broken customer journeys earlier.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {MONITORING_AREAS.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
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
                    {area.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {area.description}
                  </p>

                  <div className="mt-6 border-t border-black/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/35">
                      Outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-black/72">
                      {area.output}
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
              A structured maintenance cycle from audit to reporting
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Preventive checks, updates, testing, support and reporting work as
              one continuous website maintenance process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your maintenance workflow
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
                Complete maintenance coverage for website stability
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined according to the website technology,
                complexity, maintenance frequency and selected support plan.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <Sparkles
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Maintain before problems grow
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Preventive updates, backups and technical checks reduce the
                  likelihood of avoidable website failures.
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
              Questions about website maintenance and support?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about updates, backups, security,
              performance, support plans and emergency website issues.
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
