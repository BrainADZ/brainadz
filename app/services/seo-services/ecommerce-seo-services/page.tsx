/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  FileSearch,
  Gauge,
  Layers3,
  Link2,
  PackageSearch,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Network,
  SlidersHorizontal,
  Store,
  Tags,
  Target,
  TrendingUp,
  Truck,
  Warehouse,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecommerce SEO Services | Product & Category SEO | BrainADZ",
  description:
    "Ecommerce SEO services by BrainADZ improve category pages, product pages, faceted navigation, product schema, crawl efficiency and organic revenue tracking.",
  alternates: {
    canonical: "/services/ecommerce-seo-services",
  },
  openGraph: {
    title: "Ecommerce SEO Services | BrainADZ Marketing",
    description:
      "Grow ecommerce visibility and revenue with category-page SEO, product-page optimisation, crawl control, structured data and commercial reporting.",
    type: "website",
    url: "/services/ecommerce-seo-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce SEO Services | BrainADZ Marketing",
    description:
      "Ecommerce SEO for product discovery, category growth, technical crawl management, product schema and organic revenue measurement.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Crawl Control", href: "#crawl-control" },
  { label: "Store Models", href: "#store-models" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "Readiness", href: "#readiness" },
  { label: "FAQs", href: "#faqs" },
];

const ECOMMERCE_SEO_BENEFITS = [
  {
    title: "More product discovery",
    description:
      "Help shoppers find relevant categories, products and buying guides across commercial and transactional searches.",
    icon: Search,
  },
  {
    title: "Stronger category growth",
    description:
      "Build high-value collection pages that rank for broader demand and guide users toward the right products.",
    icon: Layers3,
  },
  {
    title: "Cleaner crawl efficiency",
    description:
      "Control filters, parameters, duplicates and product states so search engines spend time on pages that matter.",
    icon: Gauge,
  },
  {
    title: "Measurable organic revenue",
    description:
      "Connect search visibility with product views, add-to-cart activity, transactions and revenue contribution.",
    icon: TrendingUp,
  },
];

const COMMERCE_ARCHITECTURE = [
  {
    number: "01",
    title: "Search demand mapping",
    description:
      "Organise category, subcategory, product, brand and informational demand around the way customers research and buy.",
    focus: "Keyword-to-page ownership",
    icon: Target,
  },
  {
    number: "02",
    title: "Category hierarchy",
    description:
      "Create a clear taxonomy that supports crawl depth, merchandising, internal linking and scalable content expansion.",
    focus: "Navigation and page hierarchy",
    icon: Network,
  },
  {
    number: "03",
    title: "Product relationships",
    description:
      "Connect variants, related products, brands, collections and alternatives without creating avoidable duplication.",
    focus: "Product and variant logic",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Conversion pathways",
    description:
      "Align search landing pages with filters, proof, product discovery and calls to action that help shoppers continue confidently.",
    focus: "Organic landing experience",
    icon: ShoppingCart,
  },
];

const ECOMMERCE_OPTIMISATION_AREAS = [
  {
    eyebrow: "Category-page SEO",
    title: "Make collection pages useful for shoppers and search engines",
    description:
      "We optimise category and subcategory pages around commercial intent, product selection and internal discovery instead of adding generic text that shoppers ignore.",
    points: [
      "Category keyword and search-intent mapping",
      "Titles, headings, copy and metadata",
      "Merchandising-led internal linking",
      "Indexable supporting content and FAQs",
      "Pagination and canonical review",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Product-page SEO",
    title: "Improve product visibility without duplicating manufacturer copy",
    description:
      "Product pages are strengthened with unique decision-making information, complete attributes, structured data and contextual links that support both rankings and conversion.",
    points: [
      "Unique titles and product descriptions",
      "Specifications, benefits and use-case content",
      "Variant, SKU and canonical handling",
      "Product, Offer and review schema review",
      "Related product and category links",
    ],
    icon: PackageSearch,
  },
  {
    eyebrow: "Faceted navigation",
    title: "Use filters for discovery without creating unlimited crawl paths",
    description:
      "We decide which filtered combinations deserve indexable landing pages and which parameters should remain available to users without entering the search index.",
    points: [
      "Filter-demand and landing-page analysis",
      "Index, noindex and canonical rules",
      "Parameter and crawl-path controls",
      "Internal-link restrictions where required",
      "Duplicate and near-duplicate URL cleanup",
    ],
    icon: SlidersHorizontal,
  },
  {
    eyebrow: "Structured data",
    title: "Help search engines interpret product and offer information accurately",
    description:
      "We review structured data against visible page content, product states and template logic so markup remains valid and commercially meaningful at scale.",
    points: [
      "Product and Offer schema validation",
      "Price, currency and availability alignment",
      "Aggregate rating eligibility review",
      "Breadcrumb and organisation markup",
      "Template-level error monitoring",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Crawl and index management",
    title: "Direct search engines toward valuable catalogue pages",
    description:
      "Large stores generate many URLs through filters, sorting, search, pagination, tracking parameters and product states. We create rules that protect crawl efficiency and index quality.",
    points: [
      "Robots, sitemap and canonical review",
      "Internal search and parameter controls",
      "Orphan, duplicate and low-value URL detection",
      "Redirect and discontinued-product rules",
      "Index coverage and crawl diagnostics",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Content and internal links",
    title: "Create a connected buying journey from research to product choice",
    description:
      "Buying guides, comparisons, brand pages and supporting content are connected to relevant commercial pages so authority and users move naturally through the store.",
    points: [
      "Buying-guide and comparison opportunities",
      "Brand and collection-page support",
      "Contextual links to categories and products",
      "Anchor-text and crawl-depth improvements",
      "Content refresh and consolidation planning",
    ],
    icon: Link2,
  },
];

const PRODUCT_STATE_RULES = [
  {
    title: "Active products",
    description:
      "Keep indexable products complete, internally linked, included in relevant sitemaps and aligned with live price and availability data.",
    icon: ShoppingBag,
  },
  {
    title: "Temporarily out of stock",
    description:
      "Preserve useful URLs when products are expected to return, while clearly communicating stock status and offering relevant alternatives.",
    icon: RefreshCw,
  },
  {
    title: "Discontinued products",
    description:
      "Choose between retaining, redirecting or retiring URLs based on backlinks, demand, replacements and the value of historical search visibility.",
    icon: Truck,
  },
  {
    title: "Variants and duplicate SKUs",
    description:
      "Define canonical and indexation rules for colour, size, pack and model variants according to unique demand and page value.",
    icon: Tags,
  },
];

const STORE_MODELS = [
  {
    title: "D2C and brand stores",
    description:
      "Build demand beyond branded searches by connecting product benefits, category intent, educational content and conversion-focused product experiences.",
    points: [
      "Category and collection growth strategy",
      "Product storytelling and attribute depth",
      "Buying guides and comparison content",
      "Organic revenue and new-customer tracking",
    ],
    icon: Store,
  },
  {
    title: "Large catalogue stores",
    description:
      "Manage scale across thousands of SKUs, filters and product states with template controls, crawl rules and prioritised catalogue optimisation.",
    points: [
      "Taxonomy and faceted-navigation governance",
      "Template-level metadata and schema rules",
      "Crawl-budget and index-quality monitoring",
      "Automated issue detection and prioritisation",
    ],
    icon: Warehouse,
  },
  {
    title: "B2B ecommerce platforms",
    description:
      "Support technical product discovery, specification-led searches and longer buying journeys where enquiries, quote requests and assisted sales matter.",
    points: [
      "Technical category and specification targeting",
      "Bulk, commercial and industry-intent mapping",
      "Product-document and resource optimisation",
      "Lead, quote and assisted-conversion tracking",
    ],
    icon: Database,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit the store and catalogue",
    description:
      "We review architecture, templates, indexation, crawl paths, category and product pages, structured data, analytics and organic revenue performance.",
    timing: "Initial phase",
    output: "Ecommerce SEO audit and issue inventory",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Map demand to the catalogue",
    description:
      "We connect priority searches with categories, subcategories, products, brands and content while identifying gaps, overlap and cannibalisation.",
    timing: "Strategy phase",
    output: "Keyword, page and catalogue map",
    icon: Target,
  },
  {
    number: "03",
    title: "Fix technical and template controls",
    description:
      "We resolve critical crawl, canonical, parameter, sitemap, schema, rendering and template issues that affect the store at scale.",
    timing: "Foundation phase",
    output: "Implementation-ready technical roadmap",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Optimise commercial landing pages",
    description:
      "Priority category and product pages receive stronger targeting, content, internal links, structured data and merchandising support.",
    timing: "Execution cycles",
    output: "Improved category and product coverage",
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "Measure revenue and expand winners",
    description:
      "We review visibility, landing-page engagement, transactions and revenue to refine priorities and scale the page groups producing commercial value.",
    timing: "Monthly review",
    output: "Performance report and growth backlog",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Organic revenue and transaction tracking",
    description:
      "Measure whether SEO visibility contributes to ecommerce outcomes instead of reporting rankings and traffic in isolation.",
    metrics: [
      "Organic transactions and revenue",
      "Conversion rate and average order value",
      "New-customer and assisted revenue where available",
      "Revenue by category, product and landing page",
    ],
    icon: TrendingUp,
  },
  {
    title: "Category and product visibility",
    description:
      "Track how commercial page groups perform across high-value search themes, brands, categories and product demand.",
    metrics: [
      "Category and product keyword coverage",
      "Non-brand visibility and click growth",
      "Winning and declining landing pages",
      "Cannibalisation and opportunity gaps",
    ],
    icon: Search,
  },
  {
    title: "Crawl, index and schema health",
    description:
      "Monitor the technical conditions that affect catalogue discoverability and rich-result eligibility at template scale.",
    metrics: [
      "Indexed versus submitted URLs",
      "Duplicate, excluded and low-value pages",
      "Product schema errors and warnings",
      "Crawl trends, response codes and redirect issues",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Commercial landing-page performance",
    description:
      "Evaluate whether category and product pages attract qualified users and help them continue through the shopping journey.",
    metrics: [
      "Product views and add-to-cart activity",
      "Landing-page engagement and exits",
      "Internal search and filter usage where available",
      "Page-group conversion performance",
    ],
    icon: BarChart3,
  },
];

const READINESS_CHECKLIST = [
  "Access to the ecommerce platform, analytics, Search Console and product data sources",
  "A clear category hierarchy that reflects real products and customer buying behaviour",
  "Stable product URLs and documented rules for variants, stock states and discontinued items",
  "Crawlable category and product pages with important content available in rendered HTML",
  "Consistent product names, prices, currencies, availability and identifiers across templates",
  "Control over faceted-navigation URLs, sorting parameters and internal search pages",
  "Editable titles, headings, descriptions, canonicals and structured-data templates",
  "Reliable ecommerce event tracking for product views, carts, checkouts and purchases",
  "A development workflow for testing and releasing technical SEO changes safely",
  "Merchandising and content teams available to support priority category and product improvements",
];

const FAQS = [
  {
    question: "What is included in your Ecommerce SEO service?",
    answer:
      "An Ecommerce SEO engagement can include technical and catalogue audits, category-page optimisation, product-page optimisation, faceted-navigation controls, product schema, internal linking, content planning, crawl and index management, product lifecycle rules and organic revenue reporting. The final scope depends on your platform, catalogue size, implementation access and commercial priorities.",
  },
  {
    question: "How is Ecommerce SEO different from regular SEO?",
    answer:
      "Ecommerce SEO must manage large numbers of category, product, variant, filter and parameter URLs while connecting visibility directly to transactions and revenue. It also requires closer coordination with merchandising, inventory, product data, structured data and platform templates than a typical content-led website.",
  },
  {
    question: "Should every product filter be indexed?",
    answer:
      "No. Most filter combinations should remain available for users without becoming indexable search landing pages. We evaluate demand, uniqueness, inventory depth and business value to decide which filtered pages deserve dedicated URLs and which should be controlled through canonicals, noindex rules, robots directives or internal-link restrictions.",
  },
  {
    question: "How do you optimise ecommerce category pages?",
    answer:
      "We align each category with a distinct commercial search theme, improve titles and headings, add useful supporting copy, strengthen internal links, review pagination and canonicals, improve product discovery and ensure the page offers enough inventory and decision-making value to satisfy the search intent.",
  },
  {
    question: "Do product descriptions need to be unique?",
    answer:
      "Unique product content is valuable when it adds information shoppers need, such as benefits, specifications, compatibility, sizing, use cases, comparisons, delivery details or FAQs. Rewriting manufacturer text without adding useful value is less important than improving the completeness and usefulness of the page.",
  },
  {
    question: "What should happen to out-of-stock or discontinued product pages?",
    answer:
      "The correct treatment depends on whether the product will return, whether the URL has search demand or backlinks and whether a relevant replacement exists. Temporarily unavailable products can often remain live, while discontinued products may be retained, redirected or removed according to their continuing value.",
  },
  {
    question: "Can you work with Shopify, WooCommerce or custom ecommerce platforms?",
    answer:
      "Yes. The strategy is platform-independent, but implementation methods vary. We adapt recommendations to the platform's routing, template, app, plugin, structured-data, rendering and deployment constraints, and we identify where developer support is required.",
  },
  {
    question: "How long does Ecommerce SEO take to show results?",
    answer:
      "Critical crawl, indexation and template fixes may create early improvements, while category growth, product discovery and revenue gains usually require sustained implementation. Timing depends on catalogue size, competition, platform limitations, development speed, content quality and the site's existing authority.",
  },
  {
    question: "How do you measure Ecommerce SEO performance?",
    answer:
      "We combine category and product visibility with organic clicks, product views, add-to-cart activity, transactions, conversion rate and revenue. Reporting also monitors index coverage, crawl quality, structured-data health and the landing-page groups creating or losing commercial value.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce SEO Services",
  serviceType: "Ecommerce Search Engine Optimization",
  description:
    "Ecommerce SEO services covering category pages, product pages, faceted navigation, product schema, crawl management, internal linking and organic revenue tracking.",
  url: "https://www.brainadz.marketing/services/ecommerce-seo-services",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "D2C brands, large catalogue ecommerce stores and B2B ecommerce platforms",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ecommerce SEO Deliverables",
    itemListElement: ECOMMERCE_OPTIMISATION_AREAS.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.eyebrow,
        description: service.description,
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

export default function EcommerceSeoServicesPage() {
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
          src="/seo/ecommerce-seo-hero.jpg"
          alt="Ecommerce SEO strategy for category pages, product pages and organic revenue growth"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_32%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.05)_48%,rgba(0,0,0,0.32)_100%)]" />

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
            <span className="text-white">Ecommerce SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Ecommerce SEO Services
          </h1>

          <div className="mt-auto max-w-[820px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve category visibility, product discovery and organic revenue
              with an ecommerce SEO strategy built for catalogue scale, customer
              intent and technical control.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Grow your ecommerce visibility
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Ecommerce SEO page navigation"
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

      {/* Overview and benefits */}
      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Ecommerce SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn product demand into discoverable pages and measurable sales
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Ecommerce SEO connects search demand with the structure of your
                store. BrainADZ aligns category pages, product pages, filters,
                internal links, product data and technical rules so shoppers can
                discover the right catalogue pages through organic search.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The goal is not simply to increase indexed URLs. It is to improve
                the quality of the index, strengthen commercially important pages
                and connect search performance with product engagement,
                transactions and revenue.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your ecommerce SEO
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/ecommerce-seo-overview.jpg"
                  alt="Ecommerce SEO overview showing category, product and revenue performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Ecommerce SEO connects catalogue discoverability with measurable
                shopping behaviour and revenue.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {ECOMMERCE_SEO_BENEFITS.map((benefit) => {
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

      {/* Store architecture */}
      <section
        id="architecture"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce site architecture
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Build a store structure that supports demand, discovery and scale
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Search engines and shoppers need a logical path from broad category
              demand to specific products. We connect taxonomy, internal links,
              variants and conversion journeys into one clear architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {COMMERCE_ARCHITECTURE.map((item) => {
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

      {/* Core optimisation */}
      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ecommerce SEO optimisation
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Improve the templates and pages that shape organic revenue
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each optimisation area has a different role. Category pages capture
              broader demand, product pages convert specific demand and technical
              controls protect the quality of the catalogue index.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {ECOMMERCE_OPTIMISATION_AREAS.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {service.points.map((point) => (
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

      {/* Category and product execution */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/ecommerce-category-product-optimization.jpg"
                alt="Ecommerce category-page and product-page SEO optimisation"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Category-to-product alignment
              </p>
            </div>
            <h2 className="mt-5 max-w-[860px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Give every commercial page a clear role in the buying journey
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Category pages should help shoppers compare a range, while product
              pages should answer the questions required to choose a specific item.
              We prevent overlap by defining page ownership, content depth and
              internal-link relationships across the catalogue.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Category ownership",
                  text: "One clear landing page for each valuable commercial search theme.",
                },
                {
                  title: "Product completeness",
                  text: "Useful specifications, benefits, compatibility and purchase information.",
                },
                {
                  title: "Internal discovery",
                  text: "Links that connect guides, brands, categories, products and alternatives.",
                },
                {
                  title: "Conversion context",
                  text: "Availability, delivery, proof and calls to action aligned with search intent.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5"
                >
                  <h3 className="text-[16px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-black/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crawl control */}
      <section
        id="crawl-control"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Faceted navigation and crawl control
              </p>
            </div>
            <h2 className="mt-5 max-w-[860px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Keep useful filters without allowing unlimited indexable URLs
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Filters improve shopping, but every combination can generate another
              URL. We identify valuable filtered demand, protect approved landing
              pages and control low-value combinations through platform-appropriate
              technical and linking rules.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  term: "Indexable filters",
                  detail:
                    "Selected combinations with distinct demand, sufficient products and useful landing value.",
                },
                {
                  term: "Non-indexable filters",
                  detail:
                    "User-facing combinations that do not need to appear independently in search results.",
                },
                {
                  term: "Parameter controls",
                  detail:
                    "Rules for sorting, tracking, internal search and duplicate crawl paths.",
                },
                {
                  term: "Crawl monitoring",
                  detail:
                    "Ongoing checks for index growth, duplicates, exclusions and unexpected URL patterns.",
                },
              ].map((item) => (
                <div
                  key={item.term}
                  className="rounded-[14px] border border-black/10 bg-white p-5"
                >
                  <dt className="text-[16px] font-semibold text-black">
                    {item.term}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-6 text-black/58">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure>
            <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/ecommerce-faceted-navigation.jpg"
                alt="Faceted navigation and ecommerce crawl-management strategy"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
              Faceted navigation requires separate rules for user experience,
              crawling and indexation.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Product lifecycle */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Product lifecycle SEO
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use different SEO rules for different product states
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Active, unavailable, discontinued and variant products should not all
              receive the same treatment. Clear rules preserve valuable visibility
              while reducing dead ends and catalogue duplication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_STATE_RULES.map((rule) => {
              const Icon = rule.icon;

              return (
                <article
                  key={rule.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {rule.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {rule.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Store models */}
      <section
        id="store-models"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Store-specific strategy
            </p>
          </div>
          <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            The right ecommerce SEO model depends on how you sell
          </h2>
          <p className="mt-6 max-w-[840px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            A focused D2C brand, a large multi-category store and a technical B2B
            catalogue need different page strategies, operational controls and
            definitions of conversion success.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {STORE_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
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
                Ecommerce SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A prioritised path from catalogue audit to organic revenue growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Ecommerce SEO works best when technical fixes, catalogue priorities,
              merchandising and measurement follow one implementation roadmap with
              clear ownership.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start with an ecommerce SEO review
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
                  Ecommerce SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure catalogue visibility and the revenue it creates
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Commercial reporting should show which page groups attract qualified
              shoppers, where technical issues limit discovery and how organic
              search contributes to transactions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/ecommerce-seo-reporting-dashboard.jpg"
                  alt="Ecommerce SEO reporting dashboard with revenue and catalogue visibility"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Ecommerce reporting should connect technical health and search
                visibility with shopping outcomes.
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

      {/* Readiness checklist */}
      <section
        id="readiness"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Ecommerce SEO readiness checklist
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Confirm the data, platform and implementation foundations
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Ecommerce SEO depends on accurate catalogue data, editable templates,
              reliable tracking and a development workflow capable of implementing
              changes safely at scale.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Check your ecommerce SEO readiness
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="flex items-center gap-4 border-b border-black/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                <ClipboardCheck className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  Foundation review
                </p>
                <h3 className="mt-1 text-[24px] font-semibold text-black">
                  Ten checks before execution begins
                </h3>
              </div>
            </div>

            <ol className="mt-2 divide-y divide-black/10">
              {READINESS_CHECKLIST.map((item, index) => (
                <li
                  key={item}
                  className="grid gap-4 py-5 sm:grid-cols-[48px_1fr] sm:items-start"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1122B]/20 bg-[#fff1f1] text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-[14px] leading-7 text-black/68 sm:text-[15px]">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
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
                Ecommerce SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before improving ecommerce search performance
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              These answers cover the questions ecommerce teams usually ask about
              categories, products, filters, stock states, platforms and revenue
              measurement.
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
            {FAQS.map((faq, index) => (
              <details key={faq.question} className="group border-b border-black/10">
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
                  <span className="sr-only">FAQ item {index + 1}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}