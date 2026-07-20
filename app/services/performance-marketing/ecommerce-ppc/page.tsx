/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Layers3,
  LineChart,
  MousePointerClick,
  PackageSearch,
  Percent,
  ReceiptText,
  Repeat2,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecommerce PPC Services | Paid Shopping Growth | BrainADZ",
  description:
    "Ecommerce PPC services by BrainADZ cover paid acquisition, product and category strategy, feed readiness, bidding, remarketing, revenue tracking, profitability and scalable campaign growth.",
  alternates: {
    canonical: "/services/ecommerce-ppc",
  },
  openGraph: {
    title: "Ecommerce PPC Services | BrainADZ Marketing",
    description:
      "Grow ecommerce sales through product-level paid media strategy, accurate revenue measurement, stronger merchandising and profitability-led optimisation.",
    type: "website",
    url: "/services/ecommerce-ppc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce PPC Services | BrainADZ Marketing",
    description:
      "Paid ecommerce acquisition, product and category strategy, remarketing, revenue tracking and profitability-led reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Growth Model", href: "#growth-model" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Merchandising", href: "#merchandising" },
  { label: "Measurement", href: "#measurement" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Acquire profitable customers",
    description:
      "Build campaigns around contribution, repeat purchase potential and customer value instead of revenue volume alone.",
    icon: Users,
  },
  {
    title: "Prioritise the right products",
    description:
      "Allocate spend toward products, categories and offers with stronger demand, margin, stock and conversion potential.",
    icon: PackageSearch,
  },
  {
    title: "Measure real commerce outcomes",
    description:
      "Connect clicks with orders, revenue, basket value, new customers, refunds and profitability signals.",
    icon: ReceiptText,
  },
  {
    title: "Scale with control",
    description:
      "Expand budgets only when tracking, product economics, stock, creative and conversion performance remain stable.",
    icon: TrendingUp,
  },
];

const GROWTH_MODEL = [
  {
    number: "01",
    title: "Demand capture",
    description:
      "Reach people actively searching for products, categories and solutions through high-intent paid search and shopping environments.",
    focus: "Existing purchase intent",
    icon: Search,
  },
  {
    number: "02",
    title: "Demand creation",
    description:
      "Use social and video advertising to introduce products, demonstrate value and build consideration before the customer searches.",
    focus: "New product discovery",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Conversion recovery",
    description:
      "Bring back product viewers, cart users and recent visitors with relevant messages, exclusions and controlled frequency.",
    focus: "Remarketing and recovery",
    icon: Repeat2,
  },
  {
    number: "04",
    title: "Customer value",
    description:
      "Use repeat purchase, average order value and customer-quality signals to move beyond one-order campaign evaluation.",
    focus: "Longer-term profitability",
    icon: WalletCards,
  },
];

const CAMPAIGN_CAPABILITIES = [
  {
    eyebrow: "Commercial and catalogue strategy",
    title: "Decide which products deserve paid media investment",
    description:
      "We review product demand, margin, stock, pricing, seasonality, repeat purchase and conversion potential before assigning campaign priority.",
    points: [
      "Product and category priority mapping",
      "Margin and contribution review",
      "Stock and availability readiness",
      "Seasonal and promotional planning",
      "Hero, growth and clearance product roles",
    ],
    icon: PackageSearch,
  },
  {
    eyebrow: "Channel and campaign architecture",
    title: "Give each paid channel a clear role in the ecommerce journey",
    description:
      "Search, shopping, social, video and remarketing campaigns are structured around acquisition, consideration, recovery and customer value.",
    points: [
      "Channel-role and funnel planning",
      "Brand and non-brand separation",
      "Product and category segmentation",
      "Prospecting and remarketing controls",
      "Budget ownership by commercial priority",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Product data and feed readiness",
    title: "Strengthen the information that powers product advertising",
    description:
      "Titles, descriptions, categories, identifiers, pricing, availability and image quality are reviewed so platforms can understand and match products accurately.",
    points: [
      "Product title and attribute review",
      "Category and product-type structure",
      "Price, sale price and availability checks",
      "Identifiers and variant consistency",
      "Feed issue and disapproval monitoring",
    ],
    icon: Boxes,
  },
  {
    eyebrow: "Creative and offer testing",
    title: "Test different reasons for customers to choose the product now",
    description:
      "Product demonstrations, benefits, bundles, proof, pricing, urgency and promotional messages are tested across suitable paid formats.",
    points: [
      "Product and lifestyle creative",
      "Benefit and problem-solution angles",
      "Offer, bundle and promotion testing",
      "UGC, review and proof concepts",
      "Format and placement adaptations",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Bidding and budget management",
    title: "Align spend with revenue quality and commercial constraints",
    description:
      "Campaign budgets and bidding are managed around conversion volume, value, margin, inventory, promotional periods and account maturity.",
    points: [
      "Revenue and conversion-value bidding",
      "Budget allocation by category",
      "Target efficiency and scaling rules",
      "Learning-period change control",
      "Stock and margin-aware adjustments",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Conversion and customer measurement",
    title: "Connect campaign results with orders, revenue and customer quality",
    description:
      "Tracking is reviewed across purchase events, order value, new customers, repeat purchases, refunds and other available ecommerce outcomes.",
    points: [
      "Purchase and revenue event validation",
      "Average order value monitoring",
      "New versus returning customer review",
      "Refund and cancellation context",
      "Customer lifetime value readiness",
    ],
    icon: BarChart3,
  },
];

const COMMERCE_MODELS = [
  {
    title: "Single-product brands",
    description:
      "Concentrate spend around one core offer while testing bundles, creative angles, audiences and conversion paths.",
    points: [
      "Hero-offer campaign structure",
      "Creative and landing-page testing",
      "Bundle and upsell opportunities",
      "Repeat purchase measurement",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Multi-category stores",
    description:
      "Segment campaigns by category economics, demand and inventory instead of treating the complete catalogue equally.",
    points: [
      "Category-level budget ownership",
      "Product-group performance analysis",
      "Search and social channel roles",
      "Category landing-page alignment",
    ],
    icon: Boxes,
  },
  {
    title: "Seasonal ecommerce",
    description:
      "Plan demand, stock, offers, creative and budget around predictable sales periods without sacrificing post-event profitability.",
    points: [
      "Pre-season demand building",
      "Promotional and sale-period scaling",
      "Stock-aware campaign controls",
      "Post-season efficiency review",
    ],
    icon: Percent,
  },
  {
    title: "Repeat-purchase businesses",
    description:
      "Measure acquisition quality using reorder behaviour, customer value and retention rather than only first-order ROAS.",
    points: [
      "New-customer cost review",
      "Repeat-order and cohort analysis",
      "Subscription or reorder signals",
      "Customer-value budget decisions",
    ],
    icon: Repeat2,
  },
];

const MERCHANDISING_LAYERS = [
  {
    title: "Product-market fit",
    description:
      "The product, price and offer should satisfy a clear demand or create a convincing reason for discovery-led purchase.",
    icon: Target,
  },
  {
    title: "Catalogue clarity",
    description:
      "Titles, variants, images, attributes and category structure should help platforms and customers understand the product.",
    icon: Boxes,
  },
  {
    title: "Landing-page continuity",
    description:
      "The ad promise, product detail, pricing, delivery, proof and checkout path should remain consistent after the click.",
    icon: MousePointerClick,
  },
  {
    title: "Operational readiness",
    description:
      "Stock, fulfilment, returns, support and promotional terms must support the demand campaigns generate.",
    icon: Workflow,
  },
];

const MEASUREMENT_LAYERS = [
  {
    title: "Revenue",
    description:
      "Track completed purchase value and order volume while validating the accuracy of the ecommerce event implementation.",
    icon: ReceiptText,
  },
  {
    title: "Efficiency",
    description:
      "Review cost per order, ROAS and contribution-aware targets rather than relying on revenue without spend context.",
    icon: LineChart,
  },
  {
    title: "Basket quality",
    description:
      "Monitor average order value, item count, bundles and product mix to understand the value of acquired transactions.",
    icon: ShoppingCart,
  },
  {
    title: "Customer quality",
    description:
      "Where data allows, separate new and returning customers and evaluate repeat purchase or customer value.",
    icon: Users,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Margin-aware decisions",
    text: "Revenue and ROAS are reviewed with product margin, discounting, shipping and other available contribution factors.",
  },
  {
    title: "Stock-aware optimisation",
    text: "Budgets are reduced, redirected or paused when inventory and availability cannot support additional demand.",
  },
  {
    title: "Product-level visibility",
    text: "Performance is analysed by product, category, brand, offer and channel instead of only at total account level.",
  },
  {
    title: "New-customer context",
    text: "Campaigns are reviewed for acquisition quality so returning-customer revenue does not hide weak prospecting performance.",
  },
];

const REJECTED_TACTICS = [
  "Scaling spend based only on gross revenue",
  "Treating every product as equally profitable",
  "Advertising unavailable or low-stock products without controls",
  "Using one campaign for unrelated categories and margins",
  "Ignoring product feed errors and disapprovals",
  "Reporting ROAS without refunds, discounts or margin context",
  "Retargeting customers who recently purchased the same product",
  "Increasing budgets before conversion tracking is validated",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Review store economics and measurement",
    description:
      "We confirm products, margins, average order value, stock, fulfilment, conversion tracking, customer data and commercial priorities.",
    timing: "Discovery",
    output: "Ecommerce PPC economics and tracking brief",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Prioritise products, categories and channels",
    description:
      "Demand, competition, stock, margin, conversion potential and creative readiness are used to define the initial campaign portfolio.",
    timing: "Strategy",
    output: "Product and channel opportunity map",
    icon: Target,
  },
  {
    number: "03",
    title: "Prepare feeds, creative and destinations",
    description:
      "Product data, image assets, promotional messages, landing pages and checkout journeys are reviewed before campaign build.",
    timing: "Readiness",
    output: "Campaign-ready catalogue and assets",
    icon: PackageSearch,
  },
  {
    number: "04",
    title: "Build campaigns and conversion systems",
    description:
      "Campaigns, product groups, audiences, bids, budgets, exclusions and ecommerce conversion events are configured and checked.",
    timing: "Setup",
    output: "Launch-ready ecommerce campaigns",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Launch and establish product-level baselines",
    description:
      "Early delivery, product demand, conversion value, stock, creative response and category economics are monitored.",
    timing: "Launch phase",
    output: "Product and channel performance baseline",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Optimise profitability and scale winners",
    description:
      "Budgets, product groups, bids, creative, offers and remarketing are refined using revenue, contribution and customer-quality evidence.",
    timing: "Ongoing",
    output: "Optimisation report and growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Product and category performance",
    description:
      "Identify which products and categories attract demand, convert efficiently and deserve additional budget.",
    metrics: [
      "Revenue and orders by product",
      "Category-level spend and ROAS",
      "Winning and declining products",
      "Stock and availability context",
    ],
    icon: PackageSearch,
  },
  {
    title: "Acquisition efficiency",
    description:
      "Review how efficiently campaigns acquire transactions and customers across channels, audiences and offers.",
    metrics: [
      "Cost per order and customer",
      "ROAS and conversion value",
      "New versus returning customers",
      "Prospecting and remarketing contribution",
    ],
    icon: Users,
  },
  {
    title: "Basket and commercial quality",
    description:
      "Understand whether campaign growth improves the value and quality of transactions rather than only order volume.",
    metrics: [
      "Average order value",
      "Items and product mix per order",
      "Discount and promotion contribution",
      "Refund and cancellation context",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Budget and scaling decisions",
    description:
      "Show where spend should be expanded, protected, reduced or redirected based on product economics and demand.",
    metrics: [
      "Budget utilisation by channel",
      "Category and campaign contribution",
      "Scaling readiness and constraints",
      "Next test and investment priorities",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Ecommerce PPC service?",
    answer:
      "The service can include paid acquisition strategy, product and category prioritisation, campaign structure, feed readiness, creative testing, bidding, budgets, remarketing, purchase tracking, revenue analysis and ongoing optimisation. The exact channel mix depends on your store, products and goals.",
  },
  {
    question: "Which advertising channels are used for Ecommerce PPC?",
    answer:
      "Ecommerce PPC can include Google Search, Google Shopping, eligible automated Google campaign types, Meta Ads, YouTube and remarketing. Channel selection depends on product demand, visual appeal, search behaviour, margins, budget and tracking readiness.",
  },
  {
    question: "How is Ecommerce PPC different from Google Shopping Ads?",
    answer:
      "Google Shopping Ads are one specific product-ad channel. Ecommerce PPC is broader and coordinates search, shopping, social, video, remarketing, product economics, creative, measurement and customer acquisition across the complete paid ecommerce programme.",
  },
  {
    question: "Do you optimise product feeds?",
    answer:
      "Yes. Feed work can include titles, descriptions, categories, product types, identifiers, pricing, availability and image quality, along with issue and disapproval monitoring. The depth of feed management depends on the platform and catalogue setup.",
  },
  {
    question: "What ROAS should an ecommerce store target?",
    answer:
      "The correct ROAS depends on gross margin, discounts, shipping, payment costs, returns, repeat purchase and operating goals. A high revenue-based ROAS can still be unprofitable, so targets should reflect actual business economics.",
  },
  {
    question: "Can Ecommerce PPC help acquire new customers?",
    answer:
      "Yes. Prospecting campaigns can be separated from remarketing and returning-customer activity. Where platform and ecommerce data allow, new-customer performance can be reviewed separately so acquisition quality is clearer.",
  },
  {
    question: "Do you manage remarketing for ecommerce stores?",
    answer:
      "Yes. Remarketing can include product viewers, category visitors, cart users, checkout users and past customers, with exclusions and frequency controls based on the buying cycle and product type.",
  },
  {
    question: "How quickly can Ecommerce PPC generate sales?",
    answer:
      "Campaigns can generate traffic and orders after launch, but reliable profitability patterns require enough product-level demand and conversion data. Results depend on price, product-market fit, competition, creative, website experience, stock and tracking quality.",
  },
  {
    question: "Do you include creative production?",
    answer:
      "The service can include creative strategy, product images, static ads, video briefs, UGC concepts and placement adaptations. Production scope is agreed according to channel mix, catalogue size and testing requirements.",
  },
  {
    question: "Do you guarantee a specific ROAS or revenue?",
    answer:
      "No responsible PPC provider can guarantee a fixed ROAS or revenue because performance depends on demand, competition, pricing, margin, stock, website conversion, creative, budget and measurement. We provide transparent management and optimisation around agreed commercial goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce PPC Services",
  serviceType: "Ecommerce Pay Per Click Advertising Management",
  description:
    "Ecommerce PPC services covering paid acquisition, product and category strategy, feed readiness, creative, bidding, remarketing, revenue tracking, profitability and reporting.",
  url: "https://www.brainadz.marketing/services/ecommerce-ppc",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ecommerce PPC Capabilities",
    itemListElement: CAMPAIGN_CAPABILITIES.map((capability) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: capability.eyebrow,
        description: capability.description,
      },
    })),
  },
};

const faqSchema = {
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

export default function EcommercePpcServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/performance-marketing/ecommerce-ppc-hero.jpg"
          alt="Ecommerce PPC campaign management for product sales and profitable growth"
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
              className="text-[#E1122B] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Ecommerce PPC Services</span>
          </nav>

          <h1 className="mt-7 max-w-[940px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Ecommerce PPC Services
          </h1>

          <div className="mt-auto max-w-[850px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Grow ecommerce revenue through product-level paid acquisition,
              accurate measurement and optimisation guided by profitability and customer quality.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your ecommerce PPC
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Ecommerce PPC page navigation"
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
              Ecommerce PPC overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn paid traffic into profitable product and customer growth
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Ecommerce PPC coordinates search, shopping, social, video and
                remarketing around product demand and commercial outcomes. BrainADZ
                connects catalogue strategy, creative, campaign structure, bidding,
                website experience and revenue measurement into one paid growth system.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance is evaluated beyond total sales. We review which products
                sell, which customers are acquired, how basket value changes and
                whether the resulting revenue can support further investment.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your ecommerce growth opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/ecommerce-ppc-overview.jpg"
                  alt="Ecommerce PPC dashboard showing products, orders, revenue and profitability"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Ecommerce PPC connects product demand, conversion value, stock and
                customer quality with paid media decisions.
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

      {/* Growth model */}
      <section
        id="growth-model"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce growth model
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Coordinate acquisition, recovery and customer value
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Sustainable ecommerce growth needs more than one channel or one order.
              Paid media should create demand, capture intent, recover interest and
              improve customer value over time.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {GROWTH_MODEL.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-[14px] border border-white/14 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/70 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[26px] font-medium text-[#E1122B]">
                      {item.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E1122B]/35 bg-[#E1122B]/10 text-[#E1122B]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                  </div>
                  <h3 className="mt-10 text-[25px] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-white/58">
                    {item.description}
                  </p>
                  <p className="mt-7 border-t border-white/12 pt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.focus}
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
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce PPC capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build product-level controls across channels, creative and measurement
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Product economics, catalogue quality, campaign structure and conversion
              data must work together before spend can scale responsibly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CAMPAIGN_CAPABILITIES.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {capability.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {capability.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commerce models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce business models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt paid strategy to the way the store earns revenue
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A single-product brand, large catalogue, seasonal store and
              repeat-purchase business should not use the same campaign model.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {COMMERCE_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="group flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {model.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {model.points.map((point) => (
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Merchandising */}
      <section
        id="merchandising"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/ecommerce-ppc-merchandising.jpg"
                alt="Ecommerce merchandising, product feed and landing-page readiness"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Product and merchandising readiness
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Paid media cannot solve weak product information and operational friction
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The product, catalogue and website experience must support the promise
              the campaign makes. Merchandising readiness is reviewed before
              additional budget is used to amplify avoidable problems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {MERCHANDISING_LAYERS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Measurement */}
      <section
        id="measurement"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce measurement
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure the commercial quality behind every order
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Orders and revenue matter, but basket value, customer type, discounts,
              refunds and contribution determine whether paid growth is sustainable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MEASUREMENT_LAYERS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optimisation */}
      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Profitability controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Optimise around commercial reality, not dashboard revenue
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Ecommerce campaigns should account for product economics, stock,
              customer type and transaction quality before budgets are scaled.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your ecommerce campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6"
                >
                  <span className="text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <aside className="mt-6 rounded-[18px] bg-black p-7 text-white sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B]">
                  <CircleAlert className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    Ecommerce discipline
                  </p>
                  <h3 className="mt-1 text-[24px] font-semibold">
                    Tactics we do not use
                  </h3>
                </div>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {REJECTED_TACTICS.map((tactic) => (
                  <li
                    key={tactic}
                    className="flex items-start gap-3 rounded-[10px] border border-white/10 bg-white/[0.035] p-4 text-[14px] leading-6 text-white/68"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]"
                    />
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Ecommerce PPC process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From product economics to controlled paid growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Catalogue, channel, creative, conversion and profitability decisions
              remain connected through one ecommerce campaign roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your ecommerce PPC plan
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
                        Phase
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

      {/* Reporting */}
      <section
        id="reporting"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce PPC reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect product-level performance with customer and profit decisions
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains which products sell, which campaigns acquire useful
              customers and where additional budget can create sustainable growth.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/ecommerce-ppc-reporting-dashboard.jpg"
                  alt="Ecommerce PPC reporting dashboard for products, revenue, customers and budget"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Ecommerce reporting should connect product demand, order quality,
                customer acquisition and budget decisions.
              </figcaption>
            </figure>

            <div className="space-y-4">
              {REPORTING_AREAS.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] sm:p-7"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-black">
                          {area.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">
                      {area.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                            strokeWidth={1.8}
                          />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Ecommerce PPC FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before scaling paid ecommerce growth
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand channels, feeds, ROAS, new customers, remarketing, creative,
              timelines and profitability before starting.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Ask another question
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-black/10"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/55 transition-all duration-300 group-open:rotate-45 group-open:border-[#E1122B]/30 group-open:bg-[#fff1f1] group-open:text-[#E1122B]">
                    <span className="relative block h-4 w-4" aria-hidden="true">
                      <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                    </span>
                  </span>
                </summary>
                <div className="px-1 pb-7 sm:px-4">
                  <p className="max-w-[900px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
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