/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Check,
  ChevronDown,
  CircleGauge,
  CreditCard,
  Database,
  FileCheck2,
  FileSearch,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  Link2,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  PackageCheck,
  PanelsTopLeft,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Store,
  Target,
  TestTubeDiagonal,
  Truck,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | BrainADZ Marketing",
  description:
    "Professional ecommerce development services by BrainADZ Marketing for custom online stores, product catalogues, secure payments, order management, integrations and scalable digital commerce.",
  alternates: {
    canonical:
      "/services/web-design-development/e-commerce-development",
  },
  openGraph: {
    title: "E-Commerce Development Services | BrainADZ Marketing",
    description:
      "Build a responsive, secure and scalable ecommerce platform designed for product discovery, smooth checkout and business growth.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Store Types", href: "#store-types" },
  { label: "Commerce Features", href: "#commerce-features" },
  { label: "Standards", href: "#standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Better product discovery",
    description:
      "Help customers find relevant products through clear navigation, categories, filters and search.",
    icon: Search,
  },
  {
    title: "Simpler checkout journey",
    description:
      "Reduce unnecessary friction across cart, address, payment and order confirmation steps.",
    icon: ShoppingCart,
  },
  {
    title: "Connected operations",
    description:
      "Integrate inventory, payments, shipping, CRM and other business systems into one commerce workflow.",
    icon: Link2,
  },
  {
    title: "Scalable store foundation",
    description:
      "Build a platform that can support more products, customers, campaigns and future functionality.",
    icon: Layers3,
  },
];

const CAPABILITIES = [
  {
    title: "Custom ecommerce development",
    description:
      "We build online stores around your catalogue, customer journey, operational requirements and growth plans instead of forcing every business into the same structure.",
    points: [
      "Custom storefront and backend development",
      "Product, category and collection architecture",
      "Responsive desktop and mobile implementation",
      "Reusable and scalable commerce components",
    ],
  },
  {
    title: "Product catalogue development",
    description:
      "Products are organized through clear categories, attributes, variants and filters so customers can explore the catalogue more efficiently.",
    points: [
      "Product categories and collections",
      "Variants, sizes, colours and attributes",
      "Product images and specification layouts",
      "Search, filters and sorting functionality",
    ],
  },
  {
    title: "Cart and checkout development",
    description:
      "The purchase journey is designed to remain simple, transparent and usable across different devices and customer types.",
    points: [
      "Shopping cart and saved cart logic",
      "Guest and registered customer checkout",
      "Coupon, discount and tax configuration",
      "Order confirmation and notification flow",
    ],
  },
  {
    title: "Payment gateway integration",
    description:
      "Secure payment options are integrated according to the market, customer preference and selected commerce platform.",
    points: [
      "Online payment gateway integration",
      "UPI, card and net-banking support",
      "Cash-on-delivery configuration",
      "Payment status and failure handling",
    ],
  },
  {
    title: "Inventory and order management",
    description:
      "Products, stock levels, orders and fulfilment statuses are organized through a manageable administrative workflow.",
    points: [
      "Inventory and stock tracking",
      "Order status management",
      "Customer and order history",
      "Low-stock and operational alerts",
    ],
  },
  {
    title: "Shipping and logistics integration",
    description:
      "Shipping rules, serviceability and fulfilment updates can be connected with relevant delivery and logistics providers.",
    points: [
      "Shipping rate configuration",
      "PIN code and location serviceability",
      "Courier and logistics API integration",
      "Shipment tracking and customer updates",
    ],
  },
  {
    title: "CRM and marketing integration",
    description:
      "Commerce activity can be connected with customer, campaign and communication systems to support follow-up and retention.",
    points: [
      "CRM and lead data synchronization",
      "Email and WhatsApp integration",
      "Abandoned cart and remarketing setup",
      "Customer segmentation and campaign data",
    ],
  },
  {
    title: "Ecommerce maintenance and optimization",
    description:
      "Ongoing support keeps the store updated, secure and aligned with customer behaviour and operational changes.",
    points: [
      "Bug fixes and technical updates",
      "Checkout and conversion improvements",
      "Catalogue and feature enhancements",
      "Performance and security maintenance",
    ],
  },
];

const STORE_TYPES = [
  {
    title: "B2C ecommerce stores",
    description:
      "Customer-facing online stores built for product discovery, convenient purchases and repeat engagement.",
    points: [
      "Retail products",
      "Direct purchases",
      "Customer accounts",
      "Promotional campaigns",
    ],
    icon: ShoppingBag,
  },
  {
    title: "B2B ecommerce platforms",
    description:
      "Business ordering systems with company accounts, bulk pricing, enquiry workflows and controlled access.",
    points: [
      "Bulk ordering",
      "Tiered pricing",
      "Business accounts",
      "Quote requests",
    ],
    icon: UsersRound,
  },
  {
    title: "Multi-vendor marketplaces",
    description:
      "Platforms that connect multiple sellers with customers through centralized catalogue and order workflows.",
    points: [
      "Vendor onboarding",
      "Seller dashboards",
      "Commission rules",
      "Order distribution",
    ],
    icon: Store,
  },
  {
    title: "D2C brand stores",
    description:
      "Branded commerce experiences designed to give manufacturers and product companies direct customer ownership.",
    points: [
      "Brand storytelling",
      "Direct sales",
      "Customer data",
      "Retention journeys",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Subscription commerce",
    description:
      "Recurring purchase systems for products, memberships and scheduled customer deliveries.",
    points: [
      "Recurring billing",
      "Subscription plans",
      "Renewal management",
      "Customer preferences",
    ],
    icon: RefreshCw,
  },
  {
    title: "Product catalogue portals",
    description:
      "Digital catalogues for businesses that need product discovery, specifications and enquiry generation without direct checkout.",
    points: [
      "Product browsing",
      "Technical details",
      "Downloadable files",
      "Enquiry workflows",
    ],
    icon: Boxes,
  },
];

const COMMERCE_FEATURES = [
  {
    title: "Product management",
    description:
      "Manage product details, categories, pricing, variants, stock, images and availability from one system.",
    output: "Organized product catalogue",
    icon: Boxes,
  },
  {
    title: "Customer accounts",
    description:
      "Allow customers to manage profiles, addresses, orders, wishlists and relevant account activity.",
    output: "Personalized customer access",
    icon: UsersRound,
  },
  {
    title: "Secure payments",
    description:
      "Connect relevant payment methods with proper status handling, confirmation and transaction workflows.",
    output: "Reliable payment journey",
    icon: CreditCard,
  },
  {
    title: "Order management",
    description:
      "Track orders from placement and payment through packing, dispatch, delivery and completion.",
    output: "Controlled fulfilment process",
    icon: PackageCheck,
  },
  {
    title: "Shipping integration",
    description:
      "Calculate delivery options, check serviceability and provide shipment updates through logistics systems.",
    output: "Connected delivery workflow",
    icon: Truck,
  },
  {
    title: "Analytics and reporting",
    description:
      "Review products, orders, revenue, customer activity and campaign-supported commerce performance.",
    output: "Measurable store insights",
    icon: BarChart3,
  },
];

const COMMERCE_STANDARDS = [
  {
    title: "Mobile-first usability",
    description:
      "Product discovery, cart and checkout journeys are designed to remain easy to use across smaller screens.",
    output: "Consistent mobile shopping",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance",
    description:
      "Pages, product media and application resources are optimized to reduce unnecessary loading delays.",
    output: "Faster store experience",
    icon: Gauge,
  },
  {
    title: "Security",
    description:
      "Customer accounts, data handling, payments and administrative access are developed with appropriate safeguards.",
    output: "Protected commerce platform",
    icon: LockKeyhole,
  },
  {
    title: "Scalability",
    description:
      "Store architecture is planned to support catalogue expansion, traffic growth and additional integrations.",
    output: "Growth-ready foundation",
    icon: Layers3,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business and store discovery",
    description:
      "We understand your products, customers, pricing, fulfilment, payment requirements, current systems and commercial priorities.",
    timing: "Days 1–4",
    output: "Commerce requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the customer journey",
    description:
      "Product discovery, categories, search, product pages, cart, checkout and post-purchase journeys are mapped.",
    timing: "Week 1",
    output: "Store journey and sitemap",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Define the technical architecture",
    description:
      "The commerce platform, database, integrations, user roles and operational workflows are finalized.",
    timing: "Week 1",
    output: "Technical architecture",
    icon: Database,
  },
  {
    number: "04",
    title: "Design the storefront system",
    description:
      "Approved layouts, components, product presentation and responsive behaviour are prepared for implementation.",
    timing: "Design phase",
    output: "Development-ready interface",
    icon: PanelsTopLeft,
  },
  {
    number: "05",
    title: "Develop the ecommerce platform",
    description:
      "The storefront, catalogue, customer accounts, cart, checkout, backend and required functionality are developed.",
    timing: "Build phase",
    output: "Functional ecommerce store",
    icon: ShoppingCart,
  },
  {
    number: "06",
    title: "Connect payments and operations",
    description:
      "Payment gateways, shipping providers, CRM, communication tools and required business systems are integrated.",
    timing: "Build phase",
    output: "Connected commerce workflow",
    icon: Link2,
  },
  {
    number: "07",
    title: "Test the complete purchase journey",
    description:
      "Products, filters, cart, checkout, payment, order creation, notifications and operational workflows are tested.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "08",
    title: "Launch and support",
    description:
      "The store is deployed, production settings are verified and post-launch monitoring begins according to the support plan.",
    timing: "Launch phase",
    output: "Live ecommerce platform",
    icon: Rocket,
  },
];

const DELIVERABLES = [
  {
    title: "Ecommerce requirement document",
    description:
      "A clear summary of products, audiences, store functionality, operations, integrations and project scope.",
    icon: ListChecks,
  },
  {
    title: "Store architecture",
    description:
      "A structured plan covering catalogue, categories, customer journeys, application layers and integrations.",
    icon: Layers3,
  },
  {
    title: "Responsive storefront",
    description:
      "Customer-facing product, category, cart and checkout interfaces for desktop, tablet and mobile.",
    icon: MonitorSmartphone,
  },
  {
    title: "Product catalogue system",
    description:
      "A manageable structure for products, variants, categories, pricing, inventory, media and specifications.",
    icon: Boxes,
  },
  {
    title: "Cart and checkout",
    description:
      "Complete purchase functionality covering cart, discounts, address, shipping, payment and confirmation.",
    icon: ShoppingCart,
  },
  {
    title: "Payment integration",
    description:
      "Configured payment methods with transaction status, confirmation and failure-handling workflows.",
    icon: CreditCard,
  },
  {
    title: "Order management panel",
    description:
      "Administrative tools for reviewing orders, customers, payment status, fulfilment and shipment progress.",
    icon: LayoutDashboard,
  },
  {
    title: "Shipping integration",
    description:
      "Configured delivery rules, serviceability, courier connections and shipment-tracking workflows.",
    icon: Truck,
  },
  {
    title: "Marketing integrations",
    description:
      "Relevant analytics, CRM, email, WhatsApp, remarketing and campaign-tracking connections.",
    icon: Target,
  },
  {
    title: "Testing and deployment",
    description:
      "Quality checks, production configuration, launch support and technical handover.",
    icon: FileCheck2,
  },
];

const FAQS = [
  {
    question: "What is included in your ecommerce development service?",
    answer:
      "The service can include ecommerce strategy, catalogue architecture, responsive storefront development, product management, customer accounts, cart and checkout, payment integration, shipping integration, order management, testing, deployment and post-launch support.",
  },
  {
    question: "What types of ecommerce websites do you build?",
    answer:
      "We build B2C stores, B2B ecommerce platforms, D2C brand stores, multi-vendor marketplaces, subscription commerce systems and product catalogue portals.",
  },
  {
    question: "Which ecommerce platforms do you work with?",
    answer:
      "The platform is selected according to your requirements. We can work with custom Next.js and Node.js solutions, Shopify, WooCommerce, WordPress-based commerce and other suitable platforms.",
  },
  {
    question: "Can you build a completely custom ecommerce platform?",
    answer:
      "Yes. A custom platform can be developed when your catalogue, user roles, pricing, workflows or integrations cannot be handled effectively by standard ecommerce platforms.",
  },
  {
    question: "Will the ecommerce website work on mobile devices?",
    answer:
      "Yes. The storefront, product pages, cart and checkout are developed responsively for desktop, tablet and mobile devices.",
  },
  {
    question: "Can you integrate online payment gateways?",
    answer:
      "Yes. Payment gateway integration can include cards, UPI, net banking, wallets and other supported payment methods depending on the selected provider and market.",
  },
  {
    question: "Can you integrate shipping and courier services?",
    answer:
      "Yes. Shipping rates, serviceability, shipment creation and tracking can be connected with suitable logistics providers when APIs or supported integrations are available.",
  },
  {
    question: "Can customers track their orders?",
    answer:
      "Yes. Order status and shipment tracking can be displayed through customer accounts, order pages, email, SMS or WhatsApp notifications depending on the project scope.",
  },
  {
    question: "Can you connect the store with our CRM or ERP?",
    answer:
      "Yes. Customer, order, inventory and product information can be connected with CRM, ERP and other operational systems when suitable APIs or integration methods are available.",
  },
  {
    question: "Can you migrate our existing ecommerce website?",
    answer:
      "Yes. Products, customers, orders, content and URLs can be migrated when the source platform provides suitable export or database access. Migration requirements are reviewed before development begins.",
  },
  {
    question: "Is the ecommerce website SEO-friendly?",
    answer:
      "The store can include crawlable product and category pages, metadata support, structured URLs, responsive layouts and technical SEO foundations. Ongoing ecommerce SEO can be handled as a separate service.",
  },
  {
    question: "How long does ecommerce development take?",
    answer:
      "Timelines depend on catalogue size, platform, custom functionality, integrations, design requirements, content readiness and testing. A standard store may take several weeks, while a custom marketplace or B2B platform requires a longer phased process.",
  },
  {
    question: "Do you provide ecommerce maintenance after launch?",
    answer:
      "Yes. Maintenance can include bug fixes, updates, security checks, catalogue support, performance improvements, integration monitoring and future feature development.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce Development Services",
  serviceType: "E-Commerce Development",
  description:
    "Professional ecommerce development services for online stores, product catalogues, secure payments, order management, shipping integrations and scalable digital commerce.",
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

export default function EcommerceDevelopmentPage() {
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
          alt="BrainADZ ecommerce development and engineering team"
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

            <span className="text-white">E-Commerce Development</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            E-Commerce Development Services
          </h1>

          <div className="mt-auto max-w-[820px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build a responsive, secure and scalable ecommerce platform that
              makes product discovery, checkout and order management easier.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your ecommerce project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Ecommerce development page navigation"
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
            Turn product discovery into a smoother buying experience
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Ecommerce development connects customer experience with
                catalogue management, payments, inventory and fulfilment.
                BrainADZ builds online stores around the complete journey—from
                product discovery and comparison to checkout, order updates and
                repeat purchases.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Whether you need a focused D2C store, a B2B ordering platform or
                a custom marketplace, the technical foundation is planned
                around usability, security, operations and future growth.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your store requirements
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/ecommerce-development/store-dashboard.jpg"
                  alt="Ecommerce store, product and order management dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Product management, customer journeys and ecommerce operations
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
            Complete ecommerce development from catalogue to fulfilment
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
                  src="/ecommerce-development/storefront.jpg"
                  alt="Responsive ecommerce storefront developed by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Responsive storefront, checkout and ecommerce functionality
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Zap className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Every step affects conversion
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Product pages, cart, checkout, payments and delivery
                      information are planned as one connected buying journey.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Store Types Section */}
      <section
        id="store-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Store Types
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Commerce platforms for different selling models
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Store architecture changes according to customer type, pricing,
              product complexity, seller model and operational requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {STORE_TYPES.map((store, index) => {
              const Icon = store.icon;

              return (
                <article
                  key={store.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {store.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {store.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {store.points.map((point) => (
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

      {/* Commerce Features Section */}
      <section
        id="commerce-features"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Commerce Features
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Core functionality for a connected online store
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Each feature supports a specific part of the customer or
              operational journey, from catalogue management to order
              fulfilment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {COMMERCE_FEATURES.map((feature, index) => {
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

      {/* Standards Section */}
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
                  Development Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Built for usability, security and long-term growth
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Ecommerce quality depends on more than visual design. Performance,
              security and maintainability directly affect customer trust and
              business operations.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {COMMERCE_STANDARDS.map((standard, index) => {
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
              A structured process from catalogue to launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Customer journeys, operations, integrations and development work
              as one connected process so the store remains usable and
              manageable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your ecommerce project
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
                Complete ecommerce delivery from build to handover
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined around the selected platform,
                catalogue, integrations and operational requirements of your
                ecommerce business.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Built for customer trust
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Clear product information, secure payments, transparent
                  checkout and reliable order communication support stronger
                  purchase confidence.
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
              Questions before building your ecommerce store?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about platforms, payments, shipping,
              integrations, migration, development timelines and maintenance.
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
