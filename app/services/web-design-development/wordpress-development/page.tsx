/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Check,
  ChevronDown,
  CircleGauge,
  Database,
  FileCheck2,
  FileSearch,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  Link2,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  Newspaper,
  Palette,
  PanelsTopLeft,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Development Services | BrainADZ Marketing",
  description:
    "Professional WordPress development services by BrainADZ Marketing for custom websites, themes, WooCommerce stores, CMS setup, plugin integrations, migration and ongoing maintenance.",
  alternates: {
    canonical: "/services/web-design-development/wordpress-development",
  },
  openGraph: {
    title: "WordPress Development Services | BrainADZ Marketing",
    description:
      "Build a responsive, manageable and scalable WordPress website with custom design, functionality and integrations.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Website Types", href: "#website-types" },
  { label: "WordPress Features", href: "#wordpress-features" },
  { label: "Quality Standards", href: "#quality-standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Easy content management",
    description:
      "Give internal teams a practical system for updating pages, blogs, media and website information.",
    icon: LayoutDashboard,
  },
  {
    title: "Custom brand experience",
    description:
      "Build the website around your identity, content and customer journey instead of using a generic layout.",
    icon: Palette,
  },
  {
    title: "Flexible functionality",
    description:
      "Extend the website through custom features, plugins, forms, ecommerce and third-party integrations.",
    icon: Plug,
  },
  {
    title: "Growth-ready foundation",
    description:
      "Create a scalable structure for additional pages, content, products, campaigns and future functionality.",
    icon: Layers3,
  },
];

const CAPABILITIES = [
  {
    title: "Custom WordPress website development",
    description:
      "We develop WordPress websites around your brand, audience, content structure and business requirements instead of relying on unmodified templates.",
    points: [
      "Custom page and section development",
      "Responsive desktop and mobile implementation",
      "Reusable content blocks and layouts",
      "Business-specific website functionality",
    ],
  },
  {
    title: "Custom WordPress theme development",
    description:
      "A custom theme provides greater control over visual identity, page structure, performance and long-term maintainability.",
    points: [
      "Brand-aligned theme design",
      "Reusable page templates",
      "Custom headers, footers and navigation",
      "Structured theme component development",
    ],
  },
  {
    title: "WordPress CMS configuration",
    description:
      "The administrative system is configured so internal teams can manage relevant website content without affecting the overall design.",
    points: [
      "Page and post management",
      "Custom content fields",
      "User roles and publishing access",
      "Media and document management",
    ],
  },
  {
    title: "WooCommerce development",
    description:
      "WordPress can be extended into an ecommerce platform for product management, checkout, payments and order operations.",
    points: [
      "Product and category setup",
      "Cart and checkout configuration",
      "Payment and shipping integrations",
      "Order and customer management",
    ],
  },
  {
    title: "Plugin integration and customization",
    description:
      "Suitable plugins are selected, configured or customized according to the website's functional requirements.",
    points: [
      "Forms and lead-generation plugins",
      "SEO and analytics integrations",
      "Security and backup tools",
      "Custom plugin configuration",
    ],
  },
  {
    title: "Third-party integrations",
    description:
      "WordPress websites can be connected with CRM, email, payment, communication and business systems through available APIs or supported connectors.",
    points: [
      "CRM and lead synchronization",
      "Email and WhatsApp integrations",
      "Payment gateway connections",
      "External API and webhook integration",
    ],
  },
  {
    title: "WordPress migration and redevelopment",
    description:
      "Existing websites can be moved, redesigned or rebuilt while protecting important content, URLs and business functionality.",
    points: [
      "Hosting and domain migration",
      "Content and media transfer",
      "Website redesign and redevelopment",
      "URL and redirect planning",
    ],
  },
  {
    title: "WordPress maintenance and support",
    description:
      "Ongoing maintenance keeps the website updated, secure, backed up and compatible with changing plugin and platform requirements.",
    points: [
      "Core, theme and plugin updates",
      "Backup and recovery support",
      "Bug fixes and security monitoring",
      "Content and feature enhancements",
    ],
  },
];

const WEBSITE_TYPES = [
  {
    title: "Corporate websites",
    description:
      "Professional websites for companies that need to communicate capabilities, services, trust and business positioning.",
    points: [
      "Company profile",
      "Service pages",
      "Lead generation",
      "Contact journeys",
    ],
    icon: Globe2,
  },
  {
    title: "Service websites",
    description:
      "Focused websites that explain service offerings and convert relevant visitors into enquiries.",
    points: [
      "Service architecture",
      "Landing pages",
      "Lead forms",
      "Case studies",
    ],
    icon: Target,
  },
  {
    title: "WooCommerce stores",
    description:
      "WordPress-based ecommerce websites for managing products, payments, orders and customer activity.",
    points: [
      "Product catalogue",
      "Online payments",
      "Order management",
      "Customer accounts",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Blog and publishing websites",
    description:
      "Content-focused websites designed around articles, categories, authors, media and organic visibility.",
    points: [
      "Blog categories",
      "Author profiles",
      "Content search",
      "Publishing workflows",
    ],
    icon: Newspaper,
  },
  {
    title: "Portfolio websites",
    description:
      "Visual websites for agencies, creators, consultants and professionals to present work and capabilities.",
    points: [
      "Project galleries",
      "Case studies",
      "Profile pages",
      "Enquiry forms",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Membership websites",
    description:
      "Controlled-access platforms for members, customers, learners or communities with role-based content.",
    points: [
      "User registration",
      "Restricted content",
      "Member profiles",
      "Subscription access",
    ],
    icon: UsersRound,
  },
];

const WORDPRESS_FEATURES = [
  {
    title: "Visual content management",
    description:
      "Manage pages, sections, images and content through a structured WordPress administration system.",
    output: "Simpler content updates",
    icon: Blocks,
  },
  {
    title: "Custom fields and templates",
    description:
      "Use structured content fields and reusable templates for consistent service, product and location pages.",
    output: "Consistent page production",
    icon: FileText,
  },
  {
    title: "Form and lead management",
    description:
      "Create contact, enquiry, quote and campaign forms connected with the appropriate internal workflow.",
    output: "Organized lead capture",
    icon: Target,
  },
  {
    title: "SEO controls",
    description:
      "Manage page titles, descriptions, URLs, indexing settings and other essential on-page SEO information.",
    output: "Manageable SEO foundation",
    icon: Search,
  },
  {
    title: "User roles",
    description:
      "Provide controlled administrative access to editors, authors, managers and other website users.",
    output: "Controlled publishing access",
    icon: ShieldCheck,
  },
  {
    title: "Analytics integrations",
    description:
      "Connect relevant analytics and conversion tools to measure visitor behaviour and website performance.",
    output: "Measurable website activity",
    icon: BarChart3,
  },
];

const QUALITY_STANDARDS = [
  {
    title: "Responsive development",
    description:
      "Page layouts, navigation, forms and content remain usable across desktop, tablet and mobile screen sizes.",
    output: "Consistent multi-device experience",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance",
    description:
      "Themes, plugins, images and website resources are optimized to reduce unnecessary page loading delays.",
    output: "Faster website experience",
    icon: Gauge,
  },
  {
    title: "Security",
    description:
      "Administrative access, forms, plugins, backups and platform configuration use appropriate security practices.",
    output: "Protected WordPress foundation",
    icon: LockKeyhole,
  },
  {
    title: "Maintainability",
    description:
      "Reusable templates, controlled plugins and organized administration make future updates easier.",
    output: "Manageable website system",
    icon: Settings2,
  },
  {
    title: "Compatibility",
    description:
      "Important functionality is tested across supported browsers, devices, WordPress versions and plugin combinations.",
    output: "Reliable website functionality",
    icon: TestTubeDiagonal,
  },
  {
    title: "Scalability",
    description:
      "The content and technical structure is planned to support new pages, products, users and website features.",
    output: "Growth-ready WordPress website",
    icon: Layers3,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Website discovery",
    description:
      "We understand the business, audience, pages, content, functionality, integrations and content management requirements.",
    timing: "Days 1–4",
    output: "WordPress requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the website structure",
    description:
      "Sitemap, navigation, page hierarchy, content types, lead journeys and administrative requirements are organized.",
    timing: "Week 1",
    output: "Sitemap and content structure",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Define the WordPress system",
    description:
      "Theme approach, plugins, custom fields, user roles, integrations and hosting requirements are finalized.",
    timing: "Week 1",
    output: "Technical setup plan",
    icon: ListChecks,
  },
  {
    number: "04",
    title: "Design the website interface",
    description:
      "Page layouts, reusable sections, responsive behaviour and visual components are prepared for development.",
    timing: "Design phase",
    output: "Development-ready UI",
    icon: Palette,
  },
  {
    number: "05",
    title: "Develop the WordPress website",
    description:
      "The approved interface is developed into a responsive WordPress theme with relevant page templates and features.",
    timing: "Build phase",
    output: "Functional WordPress website",
    icon: Blocks,
  },
  {
    number: "06",
    title: "Configure CMS and integrations",
    description:
      "Content fields, forms, plugins, user roles, analytics and required third-party systems are configured.",
    timing: "Build phase",
    output: "Connected CMS workflow",
    icon: Plug,
  },
  {
    number: "07",
    title: "Add and review content",
    description:
      "Approved text, images, documents and page information are added and reviewed for consistency.",
    timing: "Content phase",
    output: "Content-ready website",
    icon: FileText,
  },
  {
    number: "08",
    title: "Test the website",
    description:
      "Pages, forms, responsiveness, browser compatibility, plugins, links and administrative workflows are tested.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "09",
    title: "Deploy and launch",
    description:
      "The website is moved to production, domains and SSL are configured and final launch checks are completed.",
    timing: "Launch phase",
    output: "Live WordPress website",
    icon: Rocket,
  },
  {
    number: "10",
    title: "Maintain and improve",
    description:
      "Updates, backups, monitoring, fixes and future improvements are managed according to the agreed maintenance plan.",
    timing: "Ongoing",
    output: "Supported WordPress platform",
    icon: Wrench,
  },
];

const DELIVERABLES = [
  {
    title: "Website requirement document",
    description:
      "A structured summary of website goals, pages, content, features, integrations and management requirements.",
    icon: FileSearch,
  },
  {
    title: "Sitemap and page structure",
    description:
      "A clear page hierarchy covering navigation, service pages, content types and important user journeys.",
    icon: Workflow,
  },
  {
    title: "Custom WordPress theme",
    description:
      "A responsive theme developed around the approved brand identity, layouts and content system.",
    icon: Palette,
  },
  {
    title: "Responsive page templates",
    description:
      "Reusable templates for services, products, blogs, locations and other recurring page types.",
    icon: PanelsTopLeft,
  },
  {
    title: "CMS configuration",
    description:
      "A manageable administrative setup for editing pages, posts, media and relevant website information.",
    icon: LayoutDashboard,
  },
  {
    title: "Plugin setup",
    description:
      "Configured plugins for forms, SEO, backups, security, analytics and other approved functionality.",
    icon: Plug,
  },
  {
    title: "Forms and lead workflows",
    description:
      "Contact, enquiry and campaign forms connected with relevant recipients or business systems.",
    icon: Target,
  },
  {
    title: "Third-party integrations",
    description:
      "Connections with CRM, email, payments, WhatsApp, analytics or other required platforms.",
    icon: Link2,
  },
  {
    title: "Content implementation",
    description:
      "Approved text, images, media and documents added across the required website pages.",
    icon: FileText,
  },
  {
    title: "Testing and quality checks",
    description:
      "Review covering responsiveness, forms, links, plugins, browser compatibility and key website journeys.",
    icon: FileCheck2,
  },
  {
    title: "Deployment and handover",
    description:
      "Production deployment, domain configuration, SSL setup and relevant administrative handover.",
    icon: Rocket,
  },
  {
    title: "Maintenance support",
    description:
      "Agreed assistance for updates, backups, fixes, monitoring and future website improvements.",
    icon: RefreshCw,
  },
];

const FAQS = [
  {
    question: "What is included in your WordPress development service?",
    answer:
      "The service can include website planning, custom WordPress design, theme development, CMS setup, plugin configuration, WooCommerce development, integrations, content implementation, testing, deployment and post-launch maintenance.",
  },
  {
    question: "Do you create custom WordPress websites?",
    answer:
      "Yes. We can create a custom WordPress website based on your brand, page structure, functionality and content requirements instead of using an unchanged prebuilt theme.",
  },
  {
    question: "Can you redesign our existing WordPress website?",
    answer:
      "Yes. We can review the current website, retain relevant content and URLs, improve the user experience and redevelop the theme or page structure.",
  },
  {
    question: "Do you develop custom WordPress themes?",
    answer:
      "Yes. Custom themes can be developed to provide greater control over design, page templates, performance and future maintenance.",
  },
  {
    question: "Can you build an ecommerce store using WordPress?",
    answer:
      "Yes. WooCommerce can be used to build product catalogues, carts, checkout journeys, payment systems, shipping workflows and order management.",
  },
  {
    question: "Can we update the website content ourselves?",
    answer:
      "Yes. WordPress is configured so authorized users can update relevant pages, posts, images and website content through the administrative dashboard.",
  },
  {
    question: "Can you create custom post types and fields?",
    answer:
      "Yes. Custom content types and fields can be created for services, products, team members, projects, locations, testimonials and other structured information.",
  },
  {
    question: "Do you integrate WordPress with CRM systems?",
    answer:
      "Yes. WordPress forms and website activity can be connected with CRM, email, communication and other business platforms when suitable APIs or integrations are available.",
  },
  {
    question: "Will the WordPress website be mobile responsive?",
    answer:
      "Yes. Page layouts, navigation, forms and website functionality are developed and tested across desktop, tablet and mobile screen sizes.",
  },
  {
    question: "Is WordPress secure?",
    answer:
      "WordPress can be secure when the platform, themes and plugins are kept updated and appropriate security, access, backup and hosting practices are followed.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "The website can include clean page structures, metadata controls, responsive layouts, crawlable content and technical SEO foundations. Ongoing SEO strategy can be handled separately.",
  },
  {
    question: "Can you migrate our website to WordPress?",
    answer:
      "Yes. Content, media, pages and important URLs can be migrated from an existing platform after reviewing the source website and available data.",
  },
  {
    question: "How long does WordPress development take?",
    answer:
      "Timelines depend on the number of pages, custom design, functionality, integrations, content readiness and review cycles. A focused business website may take several weeks, while a larger custom platform takes longer.",
  },
  {
    question: "Do you provide WordPress maintenance?",
    answer:
      "Yes. Maintenance can include WordPress core updates, theme and plugin updates, backups, security checks, bug fixes, monitoring and content support.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Development Services",
  serviceType: "WordPress Development",
  description:
    "Professional WordPress development services for custom websites, themes, WooCommerce stores, CMS configuration, integrations, migration and maintenance.",
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

export default function WordPressDevelopmentPage() {
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
          alt="BrainADZ WordPress website development team"
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

            <span className="text-white">WordPress Development</span>
          </nav>

          <h1 className="mt-7 max-w-[1040px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            WordPress Development Services
          </h1>

          <div className="mt-auto max-w-[830px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build a responsive, manageable and scalable WordPress website
              with custom design, functionality and business integrations.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your WordPress project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="WordPress development page navigation"
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
            Build a website your team can manage and your business can grow
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                WordPress combines flexible website development with practical
                content management. BrainADZ builds WordPress websites around
                your brand, customer journey and business requirements while
                keeping ongoing content updates manageable.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From corporate websites and publishing platforms to
                WooCommerce stores, each project is planned around responsive
                design, performance, security and future expansion.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your WordPress requirements
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/wordpress-development/wordpress-dashboard.jpg"
                  alt="WordPress website and content management dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Website management, content publishing and WordPress
                administration
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
            Complete WordPress development from design to maintenance
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
                  src="/wordpress-development/wordpress-website.jpg"
                  alt="Custom WordPress website development by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Custom WordPress theme, responsive pages and CMS functionality
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Sparkles className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Flexible without becoming difficult
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      The website is developed so teams can update content
                      without losing design consistency or page structure.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section
        id="website-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Website Types
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                WordPress solutions for different business requirements
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The website structure is selected according to the content,
              audience, transaction model and administrative needs of the
              business.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {WEBSITE_TYPES.map((website, index) => {
              const Icon = website.icon;

              return (
                <article
                  key={website.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {website.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {website.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {website.points.map((point) => (
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

      {/* WordPress Features Section */}
      <section
        id="wordpress-features"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  WordPress Features
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Practical controls for content, leads and website growth
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              WordPress functionality is configured according to the content,
              teams and customer journeys the website needs to support.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {WORDPRESS_FEATURES.map((feature, index) => {
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

      {/* Quality Standards */}
      <section
        id="quality-standards"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Quality Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Built for usability, security and long-term management
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              WordPress quality depends on controlled themes, reliable plugins,
              secure configuration and a manageable content system.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {QUALITY_STANDARDS.map((standard, index) => {
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
              A structured process from website planning to launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Content architecture, design, WordPress development, testing and
              deployment work as one connected delivery process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your WordPress website
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
                Complete WordPress delivery from setup to handover
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined according to the website structure,
                content, ecommerce functionality, plugins and business
                integrations included in the scope.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <RefreshCw
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Designed for ongoing management
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  The final WordPress system makes routine content updates
                  easier while protecting the approved visual structure.
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
              Questions before developing a WordPress website?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about custom themes, WooCommerce, content
              management, plugins, migration, security and maintenance.
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
