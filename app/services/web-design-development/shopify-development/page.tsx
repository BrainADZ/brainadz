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
  Palette,
  PanelsTopLeft,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Store,
  Tag,
  Target,
  TestTubeDiagonal,
  Truck,
  UsersRound,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Development Services | BrainADZ Marketing",
  description:
    "Professional Shopify development services by BrainADZ Marketing for custom stores, theme development, product catalogues, app integrations, payments, migration and ongoing ecommerce support.",
  alternates: {
    canonical: "/services/web-design-development/shopify-development",
  },
  openGraph: {
    title: "Shopify Development Services | BrainADZ Marketing",
    description:
      "Build a responsive, conversion-focused and manageable Shopify store with custom design, integrations and scalable ecommerce functionality.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Store Types", href: "#store-types" },
  { label: "Commerce Features", href: "#commerce-features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Standards", href: "#standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Faster store launch",
    description:
      "Use Shopify’s managed commerce foundation to move from planning to a functional online store efficiently.",
    icon: Rocket,
  },
  {
    title: "Simple store management",
    description:
      "Manage products, collections, customers, orders, discounts and store content through one administrative system.",
    icon: LayoutDashboard,
  },
  {
    title: "Conversion-focused journeys",
    description:
      "Improve product discovery, cart usability and checkout clarity across important customer touchpoints.",
    icon: ShoppingCart,
  },
  {
    title: "Scalable commerce ecosystem",
    description:
      "Extend store functionality through suitable apps, integrations, custom sections and future enhancements.",
    icon: Layers3,
  },
];

const CAPABILITIES = [
  {
    title: "Shopify store strategy and setup",
    description:
      "We plan the store around your products, customers, market, operations and commercial goals before configuring the Shopify environment.",
    points: [
      "Business and catalogue requirement analysis",
      "Store settings and market configuration",
      "Navigation and collection planning",
      "Launch roadmap and feature prioritization",
    ],
  },
  {
    title: "Custom Shopify theme development",
    description:
      "We create or customize Shopify themes around your brand identity, content structure and customer journey rather than relying on an unchanged template.",
    points: [
      "Custom homepage and page sections",
      "Responsive collection and product templates",
      "Reusable Shopify theme components",
      "Brand-aligned typography and visual system",
    ],
  },
  {
    title: "Product catalogue development",
    description:
      "Products, variants, collections and filters are organized so customers can browse and compare relevant items more easily.",
    points: [
      "Product and variant configuration",
      "Collections, tags and categories",
      "Product media and specification layouts",
      "Search, sorting and filtering structure",
    ],
  },
  {
    title: "Cart and checkout configuration",
    description:
      "The purchase journey is configured to keep pricing, discounts, delivery information and customer actions clear.",
    points: [
      "Cart and drawer-cart configuration",
      "Discount and promotional logic",
      "Shipping and tax setup",
      "Checkout and order confirmation flow",
    ],
  },
  {
    title: "Shopify app integration",
    description:
      "Suitable applications are selected and configured for reviews, marketing, subscriptions, support, loyalty and other store requirements.",
    points: [
      "App requirement assessment",
      "Installation and configuration",
      "Theme and app compatibility review",
      "App-related workflow testing",
    ],
  },
  {
    title: "Payment and shipping integration",
    description:
      "Supported payment options, shipping rules and fulfilment workflows are configured according to your market and operations.",
    points: [
      "Payment method configuration",
      "Shipping rates and delivery zones",
      "Courier and logistics integrations",
      "Order and shipment notifications",
    ],
  },
  {
    title: "Shopify migration and redevelopment",
    description:
      "Existing stores can be moved or rebuilt on Shopify while protecting important products, content, customers and URLs where possible.",
    points: [
      "Product and collection migration",
      "Customer and order data planning",
      "Content and media transfer",
      "Redirect and URL migration strategy",
    ],
  },
  {
    title: "Shopify maintenance and optimization",
    description:
      "Ongoing support keeps the store updated and aligned with customer behaviour, campaigns and operational requirements.",
    points: [
      "Theme and app troubleshooting",
      "Store feature enhancements",
      "Conversion and usability improvements",
      "Performance and technical monitoring",
    ],
  },
];

const STORE_TYPES = [
  {
    title: "D2C brand stores",
    description:
      "Branded Shopify stores that allow manufacturers and product businesses to sell directly to customers.",
    points: [
      "Brand storytelling",
      "Direct purchases",
      "Customer ownership",
      "Retention journeys",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Fashion and apparel stores",
    description:
      "Visual product experiences built around collections, variants, sizing and frequent catalogue updates.",
    points: [
      "Size variants",
      "Colour options",
      "Collection pages",
      "Product lookbooks",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Beauty and wellness stores",
    description:
      "Commerce journeys designed to explain product benefits, usage, ingredients and related product routines.",
    points: [
      "Product education",
      "Routine bundles",
      "Customer reviews",
      "Repeat purchase",
    ],
    icon: Palette,
  },
  {
    title: "Lifestyle product stores",
    description:
      "Flexible Shopify stores for home, accessories, electronics and other multi-category product catalogues.",
    points: [
      "Product categories",
      "Feature comparison",
      "Promotional offers",
      "Cross-selling",
    ],
    icon: Store,
  },
  {
    title: "Subscription stores",
    description:
      "Recurring purchase experiences configured through suitable subscription workflows and applications.",
    points: [
      "Recurring orders",
      "Subscription plans",
      "Renewal journeys",
      "Customer preferences",
    ],
    icon: RefreshCw,
  },
  {
    title: "Wholesale and B2B stores",
    description:
      "Controlled commerce experiences for business customers, bulk orders and account-specific purchasing journeys.",
    points: [
      "Business accounts",
      "Bulk purchasing",
      "Custom pricing",
      "Order enquiries",
    ],
    icon: UsersRound,
  },
];

const COMMERCE_FEATURES = [
  {
    title: "Product management",
    description:
      "Manage products, variants, pricing, inventory, images, descriptions and availability through Shopify.",
    output: "Organized product catalogue",
    icon: Boxes,
  },
  {
    title: "Collections and search",
    description:
      "Help customers discover relevant products through structured collections, tags, search and filtering.",
    output: "Better product discovery",
    icon: Search,
  },
  {
    title: "Cart and checkout",
    description:
      "Create a clear purchase journey from product selection and cart review through payment and confirmation.",
    output: "Simpler buying experience",
    icon: ShoppingCart,
  },
  {
    title: "Customer accounts",
    description:
      "Allow customers to access relevant profile details, addresses, orders and account activity.",
    output: "Connected customer experience",
    icon: UsersRound,
  },
  {
    title: "Order management",
    description:
      "Manage payment status, fulfilment, cancellations, returns and customer order communication.",
    output: "Controlled order workflow",
    icon: PackageCheck,
  },
  {
    title: "Discounts and promotions",
    description:
      "Configure discount codes, promotional pricing, bundles and campaign-related store offers.",
    output: "Flexible promotional campaigns",
    icon: Tag,
  },
];

const INTEGRATIONS = [
  {
    title: "Payment systems",
    description:
      "Configure supported payment providers and transaction workflows according to the target market.",
    points: [
      "Cards and digital payments",
      "Payment confirmation",
      "Failure handling",
      "Refund workflows",
    ],
    icon: CreditCard,
  },
  {
    title: "Shipping and logistics",
    description:
      "Connect shipping rates, delivery zones, courier services and shipment communication.",
    points: [
      "Delivery rules",
      "Courier integration",
      "Tracking updates",
      "Fulfilment status",
    ],
    icon: Truck,
  },
  {
    title: "CRM and customer data",
    description:
      "Connect store activity with customer management and lead follow-up systems.",
    points: [
      "Customer synchronization",
      "Lead workflows",
      "Audience segmentation",
      "Sales visibility",
    ],
    icon: Link2,
  },
  {
    title: "Email and messaging",
    description:
      "Support order communication, cart recovery, campaigns and customer engagement.",
    points: [
      "Email automation",
      "WhatsApp workflows",
      "Order notifications",
      "Retention campaigns",
    ],
    icon: Workflow,
  },
  {
    title: "Analytics and advertising",
    description:
      "Connect relevant analytics, conversion tracking and advertising platforms.",
    points: [
      "Store analytics",
      "Conversion events",
      "Campaign tracking",
      "Remarketing audiences",
    ],
    icon: BarChart3,
  },
  {
    title: "Inventory and operations",
    description:
      "Coordinate product, stock and order data with suitable operational systems.",
    points: [
      "Inventory tools",
      "ERP connections",
      "Product data flow",
      "Order synchronization",
    ],
    icon: Plug,
  },
];

const QUALITY_STANDARDS = [
  {
    title: "Responsive storefront",
    description:
      "Product pages, navigation, cart and customer journeys remain usable across desktop, tablet and mobile.",
    output: "Consistent multi-device shopping",
    icon: MonitorSmartphone,
  },
  {
    title: "Store performance",
    description:
      "Theme code, images, sections and applications are reviewed to reduce unnecessary loading delays.",
    output: "Faster commerce experience",
    icon: Gauge,
  },
  {
    title: "Secure configuration",
    description:
      "Store access, customer data, apps and integrations are configured with appropriate permissions and controls.",
    output: "Protected store foundation",
    icon: LockKeyhole,
  },
  {
    title: "Maintainable theme system",
    description:
      "Reusable sections and controlled customizations make ongoing store updates easier.",
    output: "Manageable Shopify store",
    icon: Settings2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Store discovery",
    description:
      "We understand your products, audience, market, fulfilment, payment requirements, content and growth priorities.",
    timing: "Days 1–4",
    output: "Shopify requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan store architecture",
    description:
      "Navigation, collections, product structure, customer journeys and operational requirements are organized.",
    timing: "Week 1",
    output: "Store architecture",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Define Shopify setup",
    description:
      "Theme approach, apps, markets, payments, shipping, taxes and integration requirements are finalized.",
    timing: "Week 1",
    output: "Technical setup plan",
    icon: ListChecks,
  },
  {
    number: "04",
    title: "Design the storefront",
    description:
      "Homepage, collection pages, product pages, cart and supporting templates are designed around the brand.",
    timing: "Design phase",
    output: "Development-ready UI",
    icon: Palette,
  },
  {
    number: "05",
    title: "Develop the Shopify theme",
    description:
      "Approved layouts are converted into responsive Shopify sections, templates and reusable components.",
    timing: "Build phase",
    output: "Functional Shopify theme",
    icon: PanelsTopLeft,
  },
  {
    number: "06",
    title: "Configure catalogue and features",
    description:
      "Products, variants, collections, navigation, discounts, customer settings and store functionality are configured.",
    timing: "Build phase",
    output: "Commerce-ready store",
    icon: Boxes,
  },
  {
    number: "07",
    title: "Connect apps and integrations",
    description:
      "Payments, shipping, analytics, CRM, communication tools and approved applications are connected.",
    timing: "Integration phase",
    output: "Connected store ecosystem",
    icon: Plug,
  },
  {
    number: "08",
    title: "Test purchase journeys",
    description:
      "Products, search, cart, checkout, payment, orders, notifications and responsive behaviour are tested.",
    timing: "Quality phase",
    output: "Tested release candidate",
    icon: TestTubeDiagonal,
  },
  {
    number: "09",
    title: "Launch the store",
    description:
      "Domain, production settings, policies, tracking and final launch requirements are reviewed and activated.",
    timing: "Launch phase",
    output: "Live Shopify store",
    icon: Rocket,
  },
  {
    number: "10",
    title: "Support and optimize",
    description:
      "Store performance, technical issues, campaigns and future improvements are managed according to the support scope.",
    timing: "Ongoing",
    output: "Supported commerce platform",
    icon: Wrench,
  },
];

const DELIVERABLES = [
  {
    title: "Shopify requirement document",
    description:
      "A structured summary of store goals, products, audiences, operations, features and integrations.",
    icon: FileSearch,
  },
  {
    title: "Store architecture",
    description:
      "A clear plan covering navigation, collections, product templates, customer journeys and store pages.",
    icon: Layers3,
  },
  {
    title: "Custom Shopify theme",
    description:
      "A responsive storefront developed around the approved brand and ecommerce experience.",
    icon: Palette,
  },
  {
    title: "Reusable store sections",
    description:
      "Manageable homepage, campaign and content sections that can be reused across the store.",
    icon: PanelsTopLeft,
  },
  {
    title: "Product catalogue setup",
    description:
      "Configured products, variants, collections, tags, media, pricing and inventory information.",
    icon: Boxes,
  },
  {
    title: "Cart and checkout setup",
    description:
      "Configured cart, discounts, delivery rules, checkout settings and order confirmation journeys.",
    icon: ShoppingCart,
  },
  {
    title: "Payment configuration",
    description:
      "Supported payment options configured and tested according to store and market requirements.",
    icon: CreditCard,
  },
  {
    title: "Shipping configuration",
    description:
      "Delivery zones, rates, shipping rules and relevant logistics integrations.",
    icon: Truck,
  },
  {
    title: "Shopify app setup",
    description:
      "Approved applications installed, configured and tested with the storefront theme.",
    icon: Plug,
  },
  {
    title: "Analytics and tracking",
    description:
      "Relevant analytics, conversion events and advertising platform connections.",
    icon: BarChart3,
  },
  {
    title: "Testing and launch",
    description:
      "Quality checks, production configuration, domain connection and launch support.",
    icon: FileCheck2,
  },
  {
    title: "Maintenance support",
    description:
      "Agreed assistance for troubleshooting, theme changes, app issues and future store improvements.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your Shopify development service?",
    answer:
      "The service can include store planning, custom theme development, product catalogue setup, collections, cart and checkout configuration, payment setup, shipping, app integrations, migration, testing, launch and post-launch support.",
  },
  {
    question: "Do you create custom Shopify stores?",
    answer:
      "Yes. We can create a custom Shopify storefront based on your brand, products, content structure and customer journey instead of using an unchanged theme.",
  },
  {
    question: "Can you customize an existing Shopify theme?",
    answer:
      "Yes. Existing themes can be customized through layout changes, new sections, product templates, visual updates and suitable functionality enhancements.",
  },
  {
    question: "Can you migrate our existing store to Shopify?",
    answer:
      "Yes. Products, collections, customers, content, media and relevant order data can be migrated when the source platform provides suitable access or exports.",
  },
  {
    question: "Can Shopify support a large product catalogue?",
    answer:
      "Yes. Product architecture, collections, tagging, filtering and navigation can be planned for larger catalogues. Store complexity should be reviewed before development begins.",
  },
  {
    question: "Can you integrate payment gateways with Shopify?",
    answer:
      "Yes. Supported payment providers can be configured according to the business location, target market and selected Shopify plan.",
  },
  {
    question: "Can you connect courier and shipping services?",
    answer:
      "Yes. Shipping rates, delivery zones, fulfilment and tracking can be connected through supported Shopify features, applications or provider integrations.",
  },
  {
    question: "Can Shopify connect with our CRM or ERP?",
    answer:
      "Yes. Shopify can connect with CRM, ERP, inventory and customer platforms when suitable applications, APIs or supported integration methods are available.",
  },
  {
    question: "Can you create a multilingual Shopify store?",
    answer:
      "Yes. Multi-language and multi-market requirements can be configured using suitable Shopify features, theme support and approved applications.",
  },
  {
    question: "Can you add subscription functionality?",
    answer:
      "Yes. Subscription products and recurring purchase journeys can be configured through suitable applications and payment-supported workflows.",
  },
  {
    question: "Will the Shopify store be mobile responsive?",
    answer:
      "Yes. The storefront, product pages, navigation, cart and supporting content are developed and tested across desktop, tablet and mobile screen sizes.",
  },
  {
    question: "Is Shopify suitable for SEO?",
    answer:
      "Shopify supports editable page information, product and collection content, responsive themes and technical SEO foundations. Ongoing keyword strategy and SEO work can be handled separately.",
  },
  {
    question: "How long does Shopify development take?",
    answer:
      "Timelines depend on catalogue size, custom theme requirements, apps, integrations, content readiness and review cycles. A focused store may take several weeks, while complex stores require a longer phased process.",
  },
  {
    question: "Do you provide support after the store launches?",
    answer:
      "Yes. Support can include theme troubleshooting, app configuration, catalogue assistance, technical fixes, conversion improvements and future feature development.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Development Services",
  serviceType: "Shopify Development",
  description:
    "Professional Shopify development services for custom stores, theme development, product catalogues, app integrations, payments, migration and ecommerce support.",
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

export default function ShopifyDevelopmentPage() {
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
          alt="BrainADZ Shopify store development team"
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

            <span className="text-white">Shopify Development</span>
          </nav>

          <h1 className="mt-7 max-w-[1040px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Shopify Development Services
          </h1>

          <div className="mt-auto max-w-[840px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build a responsive, conversion-focused and manageable Shopify
              store with custom design, ecommerce functionality and connected
              business systems.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your Shopify project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Shopify development page navigation"
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
            Build a Shopify store designed for customers and daily operations
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Shopify provides a managed foundation for building and running
                an online store. BrainADZ combines store strategy, custom theme
                development, catalogue setup, applications and integrations
                into one structured ecommerce delivery process.
              </p>

              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From product discovery and brand presentation to checkout,
                fulfilment and retention, each store is planned around customer
                experience and operational requirements.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your Shopify store
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/shopify-development/shopify-dashboard.jpg"
                  alt="Shopify store and ecommerce management dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Product catalogue, orders, customers and Shopify store
                management
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
            Complete Shopify development from strategy to optimization
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
                  src="/shopify-development/shopify-storefront.jpg"
                  alt="Custom responsive Shopify storefront by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Custom Shopify theme, product pages, cart and store
                functionality
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Zap className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      A storefront built for buying
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Product discovery, presentation, cart and checkout are
                      planned as one connected customer journey.
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
                Shopify stores for different products and selling models
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The catalogue, content and customer journey are structured
              according to the product category and commercial model.
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
                Core Shopify functionality for daily ecommerce operations
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Store features are configured around product management,
              customer journeys, fulfilment and promotional requirements.
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

      {/* Integrations Section */}
      <section
        id="integrations"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Integrations
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect Shopify with the systems your business uses
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Suitable apps and APIs connect the storefront with payment,
              fulfilment, marketing and operational workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {INTEGRATIONS.map((integration, index) => {
              const Icon = integration.icon;

              return (
                <article
                  key={integration.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {integration.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {integration.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {integration.points.map((point) => (
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

      {/* Standards Section */}
      <section
        id="standards"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
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
                Built for usability, performance and ongoing management
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Theme quality, app selection and store configuration directly
              affect customer experience and long-term maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
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
              A structured process from store planning to launch
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Catalogue planning, theme development, store configuration,
              integrations and testing work as one connected delivery process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your Shopify roadmap
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
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
                Complete Shopify delivery from setup to support
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Deliverables are defined according to the catalogue, theme,
                applications, integrations and operational requirements
                included in the project.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Designed for ongoing store management
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Reusable theme sections and organized store settings make
                  future catalogue and campaign updates easier.
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
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
              Questions before developing a Shopify store?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about themes, catalogue setup, payments,
              applications, migration, integrations and maintenance.
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
