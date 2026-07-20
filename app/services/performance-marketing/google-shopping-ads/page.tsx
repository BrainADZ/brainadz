/* eslint-disable @typescript-eslint/no-unused-vars */
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
  FileCheck2,
  FileSearch,
  Filter,
  Gauge,
  ImageIcon,
  Layers3,
  ListChecks,
  PackageCheck,
  PackageSearch,
  Percent,
  ReceiptText,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Shopping Ads Services | Product Campaign Management | BrainADZ",
  description:
    "Google Shopping Ads services by BrainADZ cover Merchant Center, product feeds, Standard Shopping, Performance Max retail campaigns, bidding, promotions, tracking and profitability-led reporting.",
  alternates: {
    canonical: "/services/google-shopping-ads",
  },
  openGraph: {
    title: "Google Shopping Ads Services | BrainADZ Marketing",
    description:
      "Promote ecommerce products through Merchant Center-powered Shopping and Performance Max campaigns with stronger feeds, product control and revenue measurement.",
    type: "website",
    url: "/services/google-shopping-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Shopping Ads Services | BrainADZ Marketing",
    description:
      "Merchant Center, product feeds, Standard Shopping, Performance Max, bidding, promotions and product-level reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Campaign Model", href: "#campaign-model" },
  { label: "Merchant Center", href: "#merchant-center" },
  { label: "Product Feed", href: "#product-feed" },
  { label: "Campaign Setup", href: "#campaign-setup" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Show products before the click",
    description:
      "Present product imagery, pricing and merchant information to users while they compare relevant shopping results.",
    icon: ShoppingBag,
  },
  {
    title: "Use product data as targeting",
    description:
      "Strengthen titles, categories, identifiers and attributes that help Google match products with relevant demand.",
    icon: PackageSearch,
  },
  {
    title: "Control product investment",
    description:
      "Separate products by margin, category, stock, priority and performance so budget follows commercial opportunity.",
    icon: Filter,
  },
  {
    title: "Measure revenue quality",
    description:
      "Connect campaign spend with purchases, order value, product mix, new customers and profitability context.",
    icon: BarChart3,
  },
];

const CAMPAIGN_MODELS = [
  {
    number: "01",
    title: "Standard Shopping",
    description:
      "Use product groups, bids, priorities and campaign controls when the retailer needs more direct visibility into product-level Shopping management.",
    focus: "Retail control and segmentation",
    icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Performance Max retail",
    description:
      "Use Merchant Center product data with Google’s cross-channel campaign system to optimise toward conversion volume or value.",
    focus: "Cross-channel automation",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Local inventory",
    description:
      "Promote eligible in-store products and local availability when Merchant Center, store data and business operations support local retail journeys.",
    focus: "Online-to-store demand",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Product-led testing",
    description:
      "Compare campaign structures, product groups, asset coverage, offers and bidding approaches using controlled commercial hypotheses.",
    focus: "Evidence-led growth",
    icon: TrendingUp,
  },
];

const MERCHANT_CENTER_CAPABILITIES = [
  {
    eyebrow: "Account and store setup",
    title: "Connect Merchant Center with the ecommerce business correctly",
    description:
      "We review business information, website verification, Google Ads linking, shipping, returns, taxes where applicable and product-source configuration.",
    points: [
      "Merchant Center account review",
      "Website verification and claiming",
      "Google Ads account linking",
      "Shipping and return settings",
      "Business and destination configuration",
    ],
    icon: Settings2,
  },
  {
    eyebrow: "Product source management",
    title: "Choose a reliable method for keeping product data current",
    description:
      "Product information can be supplied through ecommerce platform connections, files, sheets, APIs or supported automated sources depending on the catalogue and technical setup.",
    points: [
      "Platform and app integrations",
      "Scheduled product files",
      "Google Sheets and structured sources",
      "API and custom feed readiness",
      "Source refresh and ownership rules",
    ],
    icon: Workflow,
  },
  {
    eyebrow: "Diagnostics and policy readiness",
    title: "Resolve product issues before they restrict campaign delivery",
    description:
      "Merchant Center diagnostics, disapprovals, warnings, destination eligibility and policy-related product issues are reviewed continuously.",
    points: [
      "Needs-attention and diagnostics review",
      "Product disapproval investigation",
      "Price and availability mismatch checks",
      "Image and landing-page compliance",
      "Destination and country eligibility",
    ],
    icon: FileCheck2,
  },
  {
    eyebrow: "Promotions and merchant programmes",
    title: "Use eligible retail features without weakening commercial control",
    description:
      "Promotions, sale pricing, shipping offers and other Merchant Center programmes are aligned with real store terms and campaign economics.",
    points: [
      "Promotion-feed and offer readiness",
      "Sale price and price-drop accuracy",
      "Shipping and delivery clarity",
      "Free listing eligibility context",
      "Offer and promotion reporting",
    ],
    icon: Percent,
  },
];

const FEED_CAPABILITIES = [
  {
    eyebrow: "Product titles",
    title: "Write product titles that are accurate and commercially descriptive",
    description:
      "Titles are structured around product identity, important attributes, brand and variant information without adding misleading promotional language.",
    points: [
      "Product type and core descriptor",
      "Brand and model information",
      "Colour, size and variant attributes",
      "High-value query relevance",
      "Title consistency across website and feed",
    ],
    icon: PackageSearch,
  },
  {
    eyebrow: "Descriptions and attributes",
    title: "Give Google enough detail to understand and classify each item",
    description:
      "Descriptions and structured attributes communicate material, features, use, condition, identifiers, variants and other product facts.",
    points: [
      "Accurate product descriptions",
      "GTIN, brand and MPN readiness",
      "Google category and product type",
      "Variant and item-group consistency",
      "Condition and required attributes",
    ],
    icon: ListChecks,
  },
  {
    eyebrow: "Images and product media",
    title: "Use clear product imagery that meets Shopping requirements",
    description:
      "Primary and additional images are reviewed for clarity, product visibility, consistency and policy compliance across the catalogue.",
    points: [
      "High-quality primary product images",
      "Additional angle and detail images",
      "Consistent variant representation",
      "Promotional overlay avoidance",
      "Product video readiness where supported",
    ],
    icon: ImageIcon,
  },
  {
    eyebrow: "Price, stock and destination",
    title: "Keep the advertised offer consistent with the product page",
    description:
      "Price, sale price, availability, currency, delivery and destination data should match the live shopping experience.",
    points: [
      "Price and sale-price validation",
      "Stock and availability synchronisation",
      "Product landing-page matching",
      "Variant URL and selection review",
      "Shipping and minimum-order context",
    ],
    icon: ReceiptText,
  },
];

const CAMPAIGN_CAPABILITIES = [
  {
    eyebrow: "Product and category segmentation",
    title: "Organise campaigns around commercial product groups",
    description:
      "Products are segmented by category, brand, margin, price, stock, seasonality, best-seller status and strategic priority.",
    points: [
      "Category and brand segmentation",
      "Margin and contribution groups",
      "Best-seller and hero products",
      "Seasonal and promotional groups",
      "Low-stock and clearance controls",
    ],
    icon: Boxes,
  },
  {
    eyebrow: "Standard Shopping management",
    title: "Use product groups and campaign controls where direct visibility matters",
    description:
      "Standard Shopping campaigns are structured around inventory targets, priorities, product groups, bids and negative-keyword insights.",
    points: [
      "Product-group subdivisions",
      "Campaign priority planning",
      "Search-term and negative controls",
      "Device, location and schedule review",
      "Bid and budget ownership",
    ],
    icon: ShoppingCart,
  },
  {
    eyebrow: "Performance Max for retail",
    title: "Strengthen automation with better product, asset and conversion inputs",
    description:
      "Retail Performance Max campaigns are organised around product groups, asset groups, audience signals, conversion values and commercial goals.",
    points: [
      "Listing-group structure",
      "Asset-group and creative coverage",
      "Audience and search-theme inputs",
      "Brand and URL controls where available",
      "Conversion-value and customer goals",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Bidding and budget strategy",
    title: "Align automation with conversion value and business economics",
    description:
      "Budgets and bidding targets are set around purchase volume, revenue, margin, stock, seasonality and the amount of reliable data available.",
    points: [
      "Maximise conversion value readiness",
      "Target ROAS planning",
      "Budget allocation by product priority",
      "Learning-period change discipline",
      "Peak-period and seasonality planning",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Promotions and pricing strategy",
    title: "Coordinate campaign activity with genuine retail offers",
    description:
      "Sale periods, merchant promotions, price drops, bundles and shipping offers are planned around stock, margin and customer demand.",
    points: [
      "Promotional calendar alignment",
      "Sale-price and offer verification",
      "Campaign-specific product groups",
      "Pre-sale and peak-period budget planning",
      "Post-promotion efficiency review",
    ],
    icon: Percent,
  },
  {
    eyebrow: "Purchase and customer measurement",
    title: "Optimise toward useful revenue rather than order count alone",
    description:
      "Purchase events, conversion value, average order value, new-customer performance and available profitability signals are reviewed.",
    points: [
      "Purchase and revenue validation",
      "Average order value monitoring",
      "New versus returning customers",
      "Refund and cancellation context",
      "Product-level contribution analysis",
    ],
    icon: BarChart3,
  },
];

const STORE_MODELS = [
  {
    title: "Large catalogues",
    description:
      "Use product labels, categories and automation to manage thousands of products without losing commercial segmentation.",
    points: [
      "Custom-label strategy",
      "Category and margin groups",
      "Feed rules and automation",
      "Product-level exception reporting",
    ],
    icon: Boxes,
  },
  {
    title: "Premium products",
    description:
      "Use strong product data, high-quality imagery and value-led measurement for lower-volume, higher-value purchases.",
    points: [
      "Detailed attributes and imagery",
      "Longer conversion windows",
      "Brand and category demand",
      "Revenue-quality optimisation",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Seasonal retailers",
    description:
      "Prepare feeds, stock, promotions and budgets ahead of demand peaks and reduce spend as availability changes.",
    points: [
      "Seasonal product labels",
      "Promotion and sale preparation",
      "Peak budget readiness",
      "Stock-aware campaign controls",
    ],
    icon: Percent,
  },
  {
    title: "Omnichannel retail",
    description:
      "Coordinate online inventory, eligible local product information and store-related goals across the retail programme.",
    points: [
      "Online and local product readiness",
      "Store data and location alignment",
      "Local inventory eligibility",
      "Online-to-store reporting context",
    ],
    icon: PackageCheck,
  },
];

const OPTIMISATION_CONTROLS = [
  {
    title: "Product health",
    description:
      "Review approved, limited, disapproved, out-of-stock and underperforming items before changing bids or budgets.",
    icon: FileCheck2,
  },
  {
    title: "Search and demand insight",
    description:
      "Use search terms, category demand, product reporting and competitive context to improve feed and campaign decisions.",
    icon: Search,
  },
  {
    title: "Commercial segmentation",
    description:
      "Use labels and product groups to separate high-margin, priority, seasonal, clearance and low-stock inventory.",
    icon: Filter,
  },
  {
    title: "Conversion-value quality",
    description:
      "Validate purchase values, new-customer signals, refunds and product economics before scaling automated bidding.",
    icon: BarChart3,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Feed before bidding",
    text: "Product data, price, availability, identifiers and landing-page consistency are corrected before bidding changes are expected to solve delivery problems.",
  },
  {
    title: "Stock-aware budgets",
    text: "Campaign investment is redirected when priority products cannot support additional demand or when availability is unreliable.",
  },
  {
    title: "Product-level diagnosis",
    text: "Account performance is reviewed by product, category, label and campaign instead of relying only on total ROAS.",
  },
  {
    title: "Controlled automation",
    text: "Performance Max and Smart Bidding inputs are improved before targets and budgets are changed repeatedly.",
  },
];

const REJECTED_TACTICS = [
  "Launching Shopping campaigns with unresolved feed errors",
  "Using generic titles that omit important product attributes",
  "Advertising prices or stock that do not match the website",
  "Combining every product into one undifferentiated group",
  "Scaling only from total account ROAS",
  "Ignoring margin, refunds and new-customer quality",
  "Changing Performance Max targets during unstable learning periods",
  "Using promotional text or merchant logos inside primary product images",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Review catalogue, economics and Merchant Center",
    description:
      "We confirm product range, margins, stock, average order value, markets, Merchant Center health, conversion tracking and business priorities.",
    timing: "Discovery",
    output: "Retail campaign and data readiness brief",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Audit product data and diagnostics",
    description:
      "Titles, descriptions, attributes, identifiers, images, pricing, availability, destinations and policy issues are reviewed.",
    timing: "Feed audit",
    output: "Product data improvement roadmap",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Define product groups and campaign roles",
    description:
      "Products are labelled and segmented according to category, value, margin, stock, seasonality and growth priority.",
    timing: "Strategy",
    output: "Product and campaign architecture",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Build Shopping and retail campaigns",
    description:
      "Standard Shopping or Performance Max campaigns, listing groups, assets, budgets, bidding and conversion goals are configured.",
    timing: "Setup",
    output: "Launch-ready Shopping campaigns",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Validate delivery and purchase data",
    description:
      "Product eligibility, spend, search demand, asset coverage, purchase events, values and stock changes are monitored after launch.",
    timing: "Launch phase",
    output: "Product-level performance baseline",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Optimise product profitability and scale",
    description:
      "Feeds, product groups, bids, budgets, promotions and assets are refined using product, customer and revenue-quality evidence.",
    timing: "Ongoing",
    output: "Optimisation report and growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Merchant Center health",
    description:
      "Understand catalogue coverage, product eligibility and the issues preventing items from serving correctly.",
    metrics: [
      "Approved and disapproved products",
      "Warnings and limited destinations",
      "Price and availability mismatches",
      "Feed freshness and source status",
    ],
    icon: FileCheck2,
  },
  {
    title: "Product performance",
    description:
      "Identify which products and categories generate useful demand, revenue and conversion value.",
    metrics: [
      "Impressions, clicks and cost by product",
      "Orders and revenue by category",
      "Product-level ROAS",
      "Best-seller and low-performing groups",
    ],
    icon: PackageSearch,
  },
  {
    title: "Commercial quality",
    description:
      "Review whether campaign growth supports healthy order value, customer acquisition and product economics.",
    metrics: [
      "Average order value",
      "New versus returning customers",
      "Margin and contribution context",
      "Refund and cancellation patterns",
    ],
    icon: ReceiptText,
  },
  {
    title: "Budget and scaling decisions",
    description:
      "Show where spend should be expanded, protected, reduced or redirected according to inventory and performance.",
    metrics: [
      "Budget utilisation and lost opportunity",
      "Campaign and product-group contribution",
      "Stock and promotion constraints",
      "Next scaling and testing priorities",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Google Shopping Ads service?",
    answer:
      "The service can include Merchant Center setup or review, product feed optimisation, Standard Shopping, Performance Max retail campaigns, product segmentation, bidding, budgets, promotions, purchase tracking, optimisation and reporting.",
  },
  {
    question: "Do I need Google Merchant Center for Shopping ads?",
    answer:
      "Yes. Retailers need product information in Google Merchant Center and must link the relevant Merchant Center and Google Ads accounts before running Shopping or retail Performance Max campaigns.",
  },
  {
    question: "What is the difference between Standard Shopping and Performance Max?",
    answer:
      "Standard Shopping provides more direct campaign, product-group and bidding control within Shopping inventory. Performance Max uses Merchant Center products with broader Google channel automation and optimises using goals, assets, audience inputs and conversion data.",
  },
  {
    question: "Do Shopping ads use keywords?",
    answer:
      "Shopping ads primarily use Merchant Center product attributes and campaign settings rather than keyword targeting. Search terms and negative keyword controls can still provide important insight and control depending on campaign type.",
  },
  {
    question: "Do you optimise product feeds?",
    answer:
      "Yes. Feed work can include titles, descriptions, categories, product types, identifiers, variants, images, price, availability and custom labels, together with Merchant Center diagnostics and policy issues.",
  },
  {
    question: "What are custom labels?",
    answer:
      "Custom labels are optional feed attributes that retailers can use to group products by business-defined categories such as margin, season, bestseller status, price band or clearance. They support campaign segmentation and reporting.",
  },
  {
    question: "Can Shopping ads promote local store inventory?",
    answer:
      "Eligible retailers can use local inventory data and supported campaign setups to promote products available in physical stores. Merchant Center, store information, inventory data and policy requirements must all be configured correctly.",
  },
  {
    question: "How do you measure Shopping campaign performance?",
    answer:
      "Measurement can include product impressions, clicks, cost, orders, revenue, conversion value, ROAS, average order value, new customers, stock, product-group contribution and available profitability context.",
  },
  {
    question: "How quickly can Google Shopping Ads generate sales?",
    answer:
      "Campaigns can begin generating product traffic and orders after approval and launch, but stable performance requires enough demand and conversion data. Results depend on product competitiveness, pricing, feed quality, stock, website experience, budget and measurement.",
  },
  {
    question: "Do you guarantee a specific ROAS or revenue?",
    answer:
      "No responsible Shopping Ads provider can guarantee fixed results because performance depends on demand, competition, price, stock, margin, feed quality, website conversion, tracking and budget. We provide transparent optimisation around agreed commercial goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Shopping Ads Services",
  serviceType: "Google Shopping and Retail Campaign Management",
  description:
    "Google Shopping Ads services covering Merchant Center, product feeds, Standard Shopping, Performance Max retail campaigns, bidding, promotions, tracking and product-level reporting.",
  url: "https://www.brainadz.marketing/services/google-shopping-ads",
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
    name: "Google Shopping Ads Capabilities",
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

export default function GoogleShoppingAdsServicesPage() {
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

      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/performance-marketing/google-shopping-ads-hero.jpg"
          alt="Google Shopping Ads campaign management using Merchant Center product data"
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
            <span className="text-white">Google Shopping Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[1080px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Google Shopping Ads Services
          </h1>

          <div className="mt-auto max-w-[880px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Promote ecommerce products through stronger Merchant Center data,
              structured retail campaigns and product-level optimisation connected to revenue quality.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your Shopping campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Google Shopping Ads page navigation"
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

      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Google Shopping overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn product data into high-intent retail advertising
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Google Shopping Ads use Merchant Center product information to promote
                products across eligible Google experiences. BrainADZ connects feed
                quality, campaign structure, bidding, budgets, stock and purchase data
                so product advertising remains commercially controlled.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance is reviewed by product and category—not only total account
                revenue. We identify which items attract demand, convert efficiently
                and support further investment after margin and inventory constraints.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your Shopping opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/google-shopping-ads-overview.jpg"
                  alt="Google Shopping campaign dashboard with product-level performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Strong Shopping campaigns connect product data, demand, conversion
                value and inventory with retail budget decisions.
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
                  <p className="mt-2 text-[14px] leading-6 text-black/58">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="campaign-model"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Retail campaign model
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Select the campaign model according to control, reach and retail goals
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Standard Shopping and Performance Max use Merchant Center inventory
              differently. The correct structure depends on account maturity, product
              economics and the level of control required.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {CAMPAIGN_MODELS.map((item) => {
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
                  <h3 className="mt-10 text-[25px] font-semibold text-white">
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

      <section
        id="merchant-center"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Merchant Center management
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build a reliable product-data foundation before campaign scaling
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Merchant Center controls the product information and eligibility that
              power Shopping campaigns. Account and data issues can limit delivery
              before bidding is considered.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MERCHANT_CENTER_CAPABILITIES.map((capability) => {
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

                  <p className="mt-6 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      <section
        id="product-feed"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/google-shopping-product-feed.jpg"
                alt="Google Merchant Center product feed optimization for titles, images and attributes"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Product feed optimisation
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Make every product easier to understand, match and approve
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Shopping campaigns rely on product attributes rather than conventional
              keyword targeting. Feed quality directly affects relevance, eligibility
              and product-level reporting.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEED_CAPABILITIES.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">
                        {item.eyebrow}
                      </h3>
                    </div>
                    <h4 className="mt-5 text-[20px] font-semibold leading-7 text-black">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-[14px] leading-6 text-black/58">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="campaign-setup"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Shopping campaign management
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give products, budgets and automation clear commercial inputs
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Campaign structure should reflect inventory, margins, product demand and
              conversion data rather than treating every item as equally valuable.
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

                  <p className="mt-6 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Retail business models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt Shopping management to the catalogue and buying model
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Catalogue size, price, seasonality and physical-store operations change
              how product data and campaigns should be organised.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STORE_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight text-black">
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
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Product optimisation controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Optimise product eligibility, demand and commercial value together
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Feed health, product performance, stock and conversion quality are
              reviewed before budgets or targets are changed.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Review your Shopping account
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {OPTIMISATION_CONTROLS.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-[14px] border border-black/10 bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[18px] font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article key={item.title} className="rounded-[14px] border border-black/10 bg-white p-6">
                  <span className="text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold text-black">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">{item.text}</p>
                </article>
              ))}
            </div>

            <aside className="mt-6 rounded-[18px] bg-black p-7 text-white sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B]">
                  <CircleAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    Retail campaign discipline
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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]" />
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Google Shopping process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From catalogue readiness to profitable product scaling
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Merchant Center, feeds, campaigns, purchase tracking and product
              economics remain connected through one retail growth roadmap.
            </p>
          </div>

          <div className="border-t border-black/10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold text-black sm:text-[28px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div>
                      <dt className="text-[12px] uppercase text-black/42">Phase</dt>
                      <dd className="mt-2 text-[14px] text-black/68">{step.timing}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase text-black/42">Output</dt>
                      <dd className="mt-2 text-[14px] text-black/68">{step.output}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
                  Shopping campaign reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect product visibility with orders, customers and inventory
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains catalogue health, product-level demand, commercial
              quality and where retail budgets should move next.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/google-shopping-reporting-dashboard.jpg"
                  alt="Google Shopping reporting dashboard for product health, revenue and budget"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Shopping reporting should connect product eligibility, demand,
                conversion value and stock with scaling decisions.
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
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-[24px] font-semibold leading-tight text-black">
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
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      <section
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Google Shopping Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before promoting products on Google
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand Merchant Center, feeds, Standard Shopping, Performance Max,
              custom labels, local inventory and retail measurement.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Ask another question
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group border-b border-black/10">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/55 transition-all duration-300 group-open:rotate-45 group-open:bg-[#fff1f1] group-open:text-[#E1122B]">
                    <span className="relative block h-4 w-4">
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