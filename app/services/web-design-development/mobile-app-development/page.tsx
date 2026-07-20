/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  ChevronDown,
  CircleGauge,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCheck2,
  FileSearch,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  Link2,
  ListChecks,
  LockKeyhole,
  MapPin,
  MessageSquareText,
  MonitorSmartphone,
  PanelsTopLeft,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services | BrainADZ Marketing",
  description:
    "Mobile app development services by BrainADZ Marketing for Android, iOS and cross-platform applications, custom APIs, secure integrations and scalable digital products.",
  alternates: {
    canonical: "/services/web-design-development/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | BrainADZ Marketing",
    description:
      "Build intuitive, secure and scalable mobile applications for Android, iOS and cross-platform users.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "App Types", href: "#app-types" },
  { label: "Core Features", href: "#core-features" },
  { label: "Quality Standards", href: "#quality-standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "User-focused experience",
    description:
      "Build mobile journeys around the actions, expectations and habits of real users.",
    icon: Smartphone,
  },
  {
    title: "Cross-platform reach",
    description:
      "Reach Android and iOS audiences through a suitable native or cross-platform development approach.",
    icon: Globe2,
  },
  {
    title: "Connected functionality",
    description:
      "Integrate mobile applications with APIs, databases, payments, CRM and business systems.",
    icon: Link2,
  },
  {
    title: "Growth-ready architecture",
    description:
      "Create a scalable technical foundation for future users, features and integrations.",
    icon: Layers3,
  },
];

const CAPABILITIES = [
  {
    title: "Mobile app strategy and planning",
    description:
      "We convert the business objective into a practical mobile product roadmap covering users, platforms, features, integrations and launch priorities.",
    points: [
      "Business and audience requirement analysis",
      "Feature and module prioritization",
      "Android, iOS and platform planning",
      "MVP and future product roadmap",
    ],
  },
  {
    title: "Android app development",
    description:
      "Android applications are developed around device compatibility, responsive layouts, application performance and Google Play requirements.",
    points: [
      "Custom Android application development",
      "Device and screen-size compatibility",
      "API and backend integration",
      "Google Play release support",
    ],
  },
  {
    title: "iOS app development",
    description:
      "We develop iOS applications with consistent user journeys, secure data handling and compatibility across relevant Apple devices.",
    points: [
      "Custom iPhone application development",
      "iOS interface implementation",
      "Backend and API integration",
      "App Store submission support",
    ],
  },
  {
    title: "Cross-platform app development",
    description:
      "Cross-platform development allows businesses to serve Android and iOS users through a shared development foundation where suitable.",
    points: [
      "Shared Android and iOS codebase",
      "Consistent multi-platform interface",
      "Faster feature synchronization",
      "Reduced duplicate development effort",
    ],
  },
  {
    title: "Backend and API development",
    description:
      "Mobile applications are supported by secure backend services that manage users, data, notifications, transactions and business logic.",
    points: [
      "Custom backend architecture",
      "REST API development",
      "Authentication and user management",
      "Business logic and data processing",
    ],
  },
  {
    title: "Third-party integrations",
    description:
      "Applications can connect with payment gateways, maps, messaging, analytics and other business platforms.",
    points: [
      "Payment gateway integration",
      "Maps and location services",
      "CRM and ERP connections",
      "Analytics and communication tools",
    ],
  },
  {
    title: "App modernization and migration",
    description:
      "Existing applications can be updated, rebuilt or migrated to improve usability, stability and maintainability.",
    points: [
      "Legacy application redevelopment",
      "UI and user journey modernization",
      "Framework and technology migration",
      "Performance and security improvements",
    ],
  },
  {
    title: "Maintenance and app support",
    description:
      "Post-launch support keeps the application compatible, secure and aligned with evolving user and business requirements.",
    points: [
      "Bug fixes and version updates",
      "Operating system compatibility",
      "Performance and crash monitoring",
      "Feature enhancements and support",
    ],
  },
];

const APP_TYPES = [
  {
    title: "Ecommerce applications",
    description:
      "Mobile shopping experiences for product discovery, cart management, payments and order tracking.",
    points: [
      "Product catalogue",
      "Cart and checkout",
      "Online payments",
      "Order tracking",
    ],
    icon: ShoppingBag,
  },
  {
    title: "On-demand applications",
    description:
      "Applications that connect users with services, bookings, delivery or location-based fulfilment.",
    points: [
      "Service booking",
      "Live status",
      "Location tracking",
      "Provider assignment",
    ],
    icon: MapPin,
  },
  {
    title: "Customer applications",
    description:
      "Branded applications that give customers access to accounts, services, documents and support.",
    points: [
      "Customer login",
      "Account activity",
      "Service requests",
      "Support access",
    ],
    icon: UsersRound,
  },
  {
    title: "Business applications",
    description:
      "Internal mobile tools designed for teams, field staff, approvals and operational workflows.",
    points: [
      "Employee access",
      "Field operations",
      "Task management",
      "Approval workflows",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Subscription applications",
    description:
      "Digital products with recurring plans, user access levels and subscription-based services.",
    points: [
      "Subscription plans",
      "Recurring payments",
      "Member access",
      "Renewal management",
    ],
    icon: RefreshCw,
  },
  {
    title: "Community applications",
    description:
      "Applications built around communication, profiles, content sharing and audience engagement.",
    points: [
      "User profiles",
      "Content feeds",
      "Messaging",
      "Community activity",
    ],
    icon: MessageSquareText,
  },
];

const CORE_FEATURES = [
  {
    title: "User authentication",
    description:
      "Secure registration, login, password recovery, verification and account access workflows.",
    output: "Controlled user access",
    icon: KeyRound,
  },
  {
    title: "Push notifications",
    description:
      "Deliver relevant alerts, updates, reminders and transactional communication to application users.",
    output: "Timely user engagement",
    icon: BellRing,
  },
  {
    title: "Payment integration",
    description:
      "Support purchases, bookings, subscriptions and other mobile transactions through suitable payment providers.",
    output: "Connected payment journey",
    icon: CreditCard,
  },
  {
    title: "Location services",
    description:
      "Use maps, GPS, addresses and location-based functionality for relevant customer or operational journeys.",
    output: "Location-aware experiences",
    icon: MapPin,
  },
  {
    title: "Data synchronization",
    description:
      "Keep mobile, backend and connected system information consistent through APIs and structured data flows.",
    output: "Reliable application data",
    icon: Database,
  },
  {
    title: "Analytics and reporting",
    description:
      "Track application usage, engagement, conversions, errors and important business activity.",
    output: "Measurable product insights",
    icon: BarChart3,
  },
];

const QUALITY_STANDARDS = [
  {
    title: "Application performance",
    description:
      "Screens, APIs, media and data loading are optimized to support responsive application behaviour.",
    output: "Faster mobile experience",
    icon: Gauge,
  },
  {
    title: "Security",
    description:
      "Authentication, permissions, data transfer and sensitive application functions use appropriate safeguards.",
    output: "Protected application access",
    icon: LockKeyhole,
  },
  {
    title: "Device compatibility",
    description:
      "Application layouts and functionality are tested across relevant devices, operating systems and screen sizes.",
    output: "Consistent device experience",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable architecture",
    description:
      "Application modules, APIs and data systems are organized to support future users and features.",
    output: "Growth-ready product",
    icon: Layers3,
  },
  {
    title: "Reliable integrations",
    description:
      "Third-party services and internal systems are tested for data accuracy, status handling and error conditions.",
    output: "Stable connected workflows",
    icon: GitBranch,
  },
  {
    title: "Maintainable code",
    description:
      "Reusable components, modular architecture and clear structure support future updates and development.",
    output: "Easier product evolution",
    icon: Code2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Product discovery",
    description:
      "We understand the business goal, target users, platforms, features, integrations, competitors and expected product outcome.",
    timing: "Days 1–5",
    output: "Mobile product brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define scope and roadmap",
    description:
      "Core features, user roles, launch priorities, MVP requirements and future development phases are organized.",
    timing: "Week 1",
    output: "Feature roadmap",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Plan user journeys",
    description:
      "Navigation, onboarding, key screens, actions, forms and application flows are mapped around user requirements.",
    timing: "Week 1–2",
    output: "User flow and architecture",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Design the mobile interface",
    description:
      "Application screens, components, interactions and responsive behaviour are designed for the selected platforms.",
    timing: "Design phase",
    output: "Development-ready app UI",
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Develop the application",
    description:
      "The mobile interface, navigation, features, state management and device functionality are developed.",
    timing: "Build phase",
    output: "Functional mobile application",
    icon: Code2,
  },
  {
    number: "06",
    title: "Build backend and integrations",
    description:
      "APIs, databases, authentication, notifications, payments and required third-party systems are connected.",
    timing: "Build phase",
    output: "Connected mobile product",
    icon: Server,
  },
  {
    number: "07",
    title: "Test across devices",
    description:
      "Functionality, usability, permissions, integrations, device compatibility and important error scenarios are tested.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "08",
    title: "Publish and launch",
    description:
      "Production settings, store information, builds and release requirements are prepared for application launch.",
    timing: "Launch phase",
    output: "Published mobile application",
    icon: Rocket,
  },
  {
    number: "09",
    title: "Monitor and improve",
    description:
      "Application performance, crashes, feedback and new requirements are reviewed for future releases.",
    timing: "Ongoing",
    output: "Supported mobile product",
    icon: Wrench,
  },
];

const DELIVERABLES = [
  {
    title: "Mobile product brief",
    description:
      "A structured summary of business goals, users, platforms, application features and technical requirements.",
    icon: FileSearch,
  },
  {
    title: "Feature roadmap",
    description:
      "A prioritized plan covering MVP features, launch requirements and future product development.",
    icon: ListChecks,
  },
  {
    title: "User flows",
    description:
      "Mapped application journeys covering onboarding, navigation, tasks, transactions and important user actions.",
    icon: Workflow,
  },
  {
    title: "Mobile application UI",
    description:
      "Complete application screens and components prepared for Android, iOS or cross-platform development.",
    icon: Smartphone,
  },
  {
    title: "Android application",
    description:
      "A functional Android build developed and tested according to the approved project scope.",
    icon: Smartphone,
  },
  {
    title: "iOS application",
    description:
      "A functional iOS build developed and tested according to the approved project scope.",
    icon: Sparkles,
  },
  {
    title: "Backend and APIs",
    description:
      "Server-side logic, authentication, data management and application services.",
    icon: Server,
  },
  {
    title: "Database system",
    description:
      "Structured application data models, validation, storage and synchronization workflows.",
    icon: Database,
  },
  {
    title: "Third-party integrations",
    description:
      "Required connections with payments, maps, CRM, analytics, messaging and external systems.",
    icon: Link2,
  },
  {
    title: "Testing and QA",
    description:
      "Quality assurance covering functionality, devices, integrations, permissions and important application journeys.",
    icon: FileCheck2,
  },
  {
    title: "Store publication support",
    description:
      "Coordination for application builds, store assets, configuration and release submission.",
    icon: Cloud,
  },
  {
    title: "Post-launch support",
    description:
      "Agreed support for bug fixes, monitoring, updates and future application enhancements.",
    icon: Settings2,
  },
];

const FAQS = [
  {
    question: "What is included in your mobile app development service?",
    answer:
      "The service can include mobile product planning, UI design, Android development, iOS development, cross-platform development, backend APIs, database development, integrations, testing, store publication and post-launch support.",
  },
  {
    question: "Do you develop Android and iOS applications?",
    answer:
      "Yes. We can develop applications for Android, iOS or both platforms depending on your audience and project requirements.",
  },
  {
    question: "What is cross-platform mobile app development?",
    answer:
      "Cross-platform development uses a shared development foundation to build applications for both Android and iOS. It can reduce duplicate effort while maintaining consistent core functionality.",
  },
  {
    question: "Should we choose native or cross-platform development?",
    answer:
      "The right approach depends on application complexity, performance requirements, device functionality, budget, timeline and future roadmap. We recommend the approach after reviewing the product requirements.",
  },
  {
    question: "Can you develop the backend for the mobile app?",
    answer:
      "Yes. We can develop backend APIs, databases, authentication, user management, notifications and business logic required by the mobile application.",
  },
  {
    question: "Can the app integrate with our existing website or CRM?",
    answer:
      "Yes. Applications can connect with existing websites, CRM, ERP and other platforms when suitable APIs or supported integration methods are available.",
  },
  {
    question: "Can you integrate payment gateways in the app?",
    answer:
      "Yes. Payment gateways can be integrated for purchases, subscriptions, bookings and other transactions according to platform and provider requirements.",
  },
  {
    question: "Can the mobile app send push notifications?",
    answer:
      "Yes. Push notifications can support reminders, order updates, announcements, offers and other relevant customer communication.",
  },
  {
    question: "Will the app work on different mobile devices?",
    answer:
      "The application is tested across relevant screen sizes, operating system versions and device conditions defined in the project scope.",
  },
  {
    question: "Can you build an MVP mobile app first?",
    answer:
      "Yes. Core features can be developed as an MVP so the product can be tested with real users before investing in additional functionality.",
  },
  {
    question: "How long does mobile app development take?",
    answer:
      "Timelines depend on platforms, number of screens, features, backend requirements, integrations and testing complexity. A focused MVP may take several weeks, while a larger application is usually developed in phases.",
  },
  {
    question: "Do you help publish apps on Google Play and the App Store?",
    answer:
      "Yes. We can support application build preparation, store configuration, listing assets and submission coordination. Final approval remains with Google and Apple.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Maintenance can include bug fixes, operating system compatibility updates, performance monitoring, security updates and future feature development.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services",
  serviceType: "Mobile App Development",
  description:
    "Mobile app development services for Android, iOS and cross-platform applications, custom APIs, secure integrations and scalable digital products.",
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

export default function MobileAppDevelopmentPage() {
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
          alt="BrainADZ mobile app development team"
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

            <span className="text-white">Mobile App Development</span>
          </nav>

          <h1 className="mt-7 max-w-[1050px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Mobile App Development Services
          </h1>

          <div className="mt-auto max-w-[830px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build intuitive, secure and scalable mobile applications for
              Android, iOS and cross-platform users.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your mobile app project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Mobile app development page navigation"
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
            Turn your digital product idea into a useful mobile experience
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Mobile applications create direct digital access to your
                products, services and business workflows. BrainADZ combines
                product planning, interface design, application development,
                APIs and integrations into one structured delivery process.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From ecommerce and customer applications to internal business
                tools, each product is planned around user needs, platform
                requirements, security and long-term scalability.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your mobile app idea
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/mobile-app-development/app-dashboard.jpg"
                  alt="Mobile application interface and management dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Mobile product planning, application development and
                performance management
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
            Complete mobile development from strategy to support
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
                  src="/mobile-app-development/app-development.jpg"
                  alt="Android and iOS mobile application development"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Android, iOS, backend and mobile application integrations
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Smartphone className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Mobile-first product thinking
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Every screen and interaction is planned around smaller
                      screens, touch behaviour and user context.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section
        id="app-types"
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
                Mobile applications for different business models
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Application architecture and features are selected according to
              the users, transactions, services and operational journeys the
              product must support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {APP_TYPES.map((app, index) => {
              const Icon = app.icon;

              return (
                <article
                  key={app.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {app.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {app.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {app.points.map((point) => (
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

      {/* Core Features Section */}
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
                Essential functionality for a connected mobile product
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Features are configured according to user requirements, business
              rules, device capabilities and connected backend systems.
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

      {/* Quality Standards Section */}
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
                Built for performance, security and product growth
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Mobile application quality depends on stable code, secure access,
              device compatibility and reliable connected services.
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
              A structured process from product idea to app launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Product planning, design, application development, backend
              engineering and testing work as one connected delivery process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your mobile roadmap
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
                Complete mobile product delivery from planning to support
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined according to the selected platforms,
                application features, backend requirements and integrations.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Built for future releases
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Modular development supports future features, operating
                  system updates and evolving product requirements.
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
              Questions before developing a mobile application?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about platforms, native and cross-platform
              development, APIs, publishing, timelines and support.
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
