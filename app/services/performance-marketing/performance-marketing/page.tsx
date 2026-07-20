/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Layers3,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Services | Growth Campaign Management | BrainADZ",
  description:
    "Performance marketing services by BrainADZ cover cross-channel paid media, conversion tracking, landing pages, creative testing, lead quality, revenue analysis and scalable optimisation.",
  alternates: {
    canonical: "/services/performance-marketing",
  },
  openGraph: {
    title: "Performance Marketing Services | BrainADZ Marketing",
    description:
      "Build measurable acquisition across search, social, video, shopping and remarketing with stronger tracking, landing pages and revenue-focused optimisation.",
    type: "website",
    url: "/services/performance-marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Services | BrainADZ Marketing",
    description:
      "Cross-channel paid media, conversion systems, creative testing, qualified leads, revenue analysis and scalable growth.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Growth Model", href: "#growth-model" },
  { label: "Channels", href: "#channels" },
  { label: "Measurement", href: "#measurement" },
  { label: "Creative", href: "#creative" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Coordinate every paid channel",
    description:
      "Assign search, social, video, shopping and remarketing clear roles inside one acquisition strategy.",
    icon: Layers3,
  },
  {
    title: "Track meaningful outcomes",
    description:
      "Connect campaign activity with leads, purchases, revenue, customer quality and downstream business results.",
    icon: BarChart3,
  },
  {
    title: "Improve the full funnel",
    description:
      "Optimise audiences, keywords, creative, landing pages, forms, calls, checkout journeys and sales feedback together.",
    icon: Workflow,
  },
  {
    title: "Scale with commercial control",
    description:
      "Expand spend only when measurement, conversion quality, creative supply and operating capacity can support growth.",
    icon: TrendingUp,
  },
];

const GROWTH_MODEL = [
  {
    number: "01",
    title: "Create demand",
    description:
      "Use social, video and display to introduce the problem, product or offer to relevant audiences before they actively search.",
    focus: "Discovery and awareness",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Capture intent",
    description:
      "Reach prospects actively searching for products, services, categories or solutions through high-intent paid search and shopping.",
    focus: "Demand capture",
    icon: Search,
  },
  {
    number: "03",
    title: "Convert attention",
    description:
      "Align the ad, offer, landing page, form, call or checkout experience with the user’s intent and level of readiness.",
    focus: "Lead and purchase conversion",
    icon: MousePointerClick,
  },
  {
    number: "04",
    title: "Improve customer value",
    description:
      "Use qualification, repeat purchase, revenue and retention signals to optimise beyond the first click or conversion.",
    focus: "Commercial growth",
    icon: LineChart,
  },
];

const CHANNEL_CAPABILITIES = [
  {
    eyebrow: "Google Ads",
    title: "Capture active demand and optimise toward measurable action",
    description:
      "Search, Shopping, Display, YouTube and eligible automated Google campaign types are structured around intent, conversion value and business priorities.",
    points: [
      "Search and keyword strategy",
      "Shopping and Merchant Center readiness",
      "Display and YouTube roles",
      "Remarketing and audience signals",
      "Bidding, budgets and conversion value",
    ],
    icon: Search,
  },
  {
    eyebrow: "Meta Ads",
    title: "Create demand through audience, creative and offer testing",
    description:
      "Facebook and Instagram campaigns use objective-led structures, prospecting, remarketing, native forms and conversion-focused creative.",
    points: [
      "Prospecting and warm audiences",
      "Creative and format testing",
      "Website and native-form journeys",
      "Pixel and server-side signal planning",
      "Lead, purchase and revenue feedback",
    ],
    icon: Users,
  },
  {
    eyebrow: "YouTube and video",
    title: "Build consideration using sight, sound, motion and proof",
    description:
      "Video campaigns support awareness, education, product demonstration, remarketing and measurable website action.",
    points: [
      "In-stream, in-feed and Shorts planning",
      "Video hooks and message sequencing",
      "Audience and content signals",
      "View, watch-time and conversion analysis",
      "Horizontal and vertical creative",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "LinkedIn Ads",
    title: "Reach professional audiences for high-value B2B acquisition",
    description:
      "Professional targeting, Lead Gen Forms, content offers, demos and CRM feedback support longer B2B sales journeys.",
    points: [
      "Job, company and industry targeting",
      "Lead Gen Forms and landing pages",
      "High-value offer strategy",
      "Sales acceptance and pipeline tracking",
      "Account and audience exclusions",
    ],
    icon: Target,
  },
  {
    eyebrow: "Ecommerce performance",
    title: "Optimise product demand, order value and customer economics",
    description:
      "Paid search, shopping, social, video and remarketing are connected with catalogue quality, stock, margin and customer value.",
    points: [
      "Product and category prioritisation",
      "Feed and catalogue readiness",
      "Revenue and order-value measurement",
      "New versus returning customers",
      "Stock and margin-aware budgets",
    ],
    icon: ShoppingCart,
  },
  {
    eyebrow: "Remarketing and retention support",
    title: "Continue the journey with relevant timing and exclusions",
    description:
      "Website visitors, viewers, cart users, leads and customers receive stage-appropriate messages across eligible platforms.",
    points: [
      "Audience windows and recency",
      "Converted-user exclusions",
      "Creative sequencing",
      "Dynamic product remarketing",
      "Cross-sell and repeat-purchase context",
    ],
    icon: Workflow,
  },
];

const BUSINESS_MODELS = [
  {
    title: "Lead generation",
    description:
      "Generate and qualify enquiries through paid search, social, forms, calls, bookings and CRM-connected optimisation.",
    points: [
      "Valid and qualified lead definitions",
      "Cost per qualified lead",
      "Sales response and routing",
      "Opportunity and pipeline feedback",
    ],
    icon: Users,
  },
  {
    title: "Ecommerce growth",
    description:
      "Acquire customers through product, category, offer and channel strategies connected to revenue and profitability.",
    points: [
      "Revenue and product reporting",
      "Average order value",
      "New-customer acquisition",
      "Margin and stock context",
    ],
    icon: ShoppingCart,
  },
  {
    title: "B2B pipeline",
    description:
      "Use high-intent search, professional audiences, content offers and CRM stages for longer sales cycles.",
    points: [
      "Account and role targeting",
      "Demo and consultation journeys",
      "MQL and SQL reporting",
      "Pipeline and revenue outcomes",
    ],
    icon: Target,
  },
  {
    title: "Local and multi-location",
    description:
      "Coordinate service-area, store and location campaigns with local landing pages, calls and lead routing.",
    points: [
      "Location-specific campaign structure",
      "Call and direction actions",
      "Regional budget ownership",
      "Store or branch-level reporting",
    ],
    icon: Megaphone,
  },
];

const MEASUREMENT_CAPABILITIES = [
  {
    eyebrow: "Conversion architecture",
    title: "Define which actions should guide campaign optimisation",
    description:
      "Primary conversions, secondary events, values and attribution inputs are organised so platforms optimise toward useful outcomes.",
    points: [
      "Lead, purchase and booking events",
      "Primary versus secondary actions",
      "Revenue and conversion values",
      "Duplicate and test-event controls",
      "Platform and analytics consistency",
    ],
    icon: Target,
  },
  {
    eyebrow: "Lead quality and CRM feedback",
    title: "Separate form volume from sales-ready opportunity",
    description:
      "Valid, qualified, disqualified, opportunity and customer stages are connected to campaign sources where the CRM and process support it.",
    points: [
      "Lead-stage definitions",
      "Source and campaign fields",
      "Sales rejection reasons",
      "Offline conversion planning",
      "Opportunity and customer feedback",
    ],
    icon: Users,
  },
  {
    eyebrow: "Ecommerce and revenue measurement",
    title: "Connect paid spend with order and customer quality",
    description:
      "Purchase value, average order value, product mix, new customers, refunds and repeat purchase can inform ecommerce decisions.",
    points: [
      "Purchase and revenue validation",
      "Product and category contribution",
      "New versus returning customers",
      "Refund and cancellation context",
      "Customer value readiness",
    ],
    icon: ShoppingCart,
  },
  {
    eyebrow: "Attribution and incrementality",
    title: "Use attribution as context rather than unquestioned truth",
    description:
      "Platform, analytics and CRM reports are compared while tests and business evidence are used to understand incremental contribution.",
    points: [
      "Platform and analytics comparison",
      "Assisted and view-through context",
      "Holdout and regional-test readiness",
      "Branded demand separation",
      "Channel overlap analysis",
    ],
    icon: BarChart3,
  },
];

const CREATIVE_LAYERS = [
  {
    title: "Audience insight",
    description:
      "Use customer problems, objections, motivations and buying stages to shape each creative concept.",
    icon: Users,
  },
  {
    title: "Offer and message",
    description:
      "Clarify the value, proof, differentiation and reason to act now without creating misleading urgency.",
    icon: Megaphone,
  },
  {
    title: "Format system",
    description:
      "Prepare static, carousel, video, vertical, horizontal and platform-specific adaptations from a shared concept.",
    icon: Layers3,
  },
  {
    title: "Testing backlog",
    description:
      "Compare distinct hooks, benefits, proof and offers instead of minor cosmetic changes to one idea.",
    icon: Sparkles,
  },
];

const OPTIMISATION_CONTROLS = [
  {
    title: "Channel role",
    description:
      "Each channel has a defined job, budget owner and success metric so total performance remains understandable.",
    icon: Layers3,
  },
  {
    title: "Conversion quality",
    description:
      "Campaigns are judged by valid leads, customers, order value and revenue quality—not only platform conversion totals.",
    icon: Target,
  },
  {
    title: "Creative supply",
    description:
      "Testing and refresh plans provide enough new inputs for growth without flooding accounts with repetitive assets.",
    icon: Sparkles,
  },
  {
    title: "Budget discipline",
    description:
      "Budgets are scaled, protected, reduced or redirected according to marginal performance and operational capacity.",
    icon: Gauge,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Measurement before scale",
    text: "Conversion events, values and downstream quality are validated before automated bidding or larger budgets are trusted.",
  },
  {
    title: "One decision framework",
    text: "Channels use shared commercial definitions so teams do not optimise competing versions of success.",
  },
  {
    title: "Operational readiness",
    text: "Lead response, stock, fulfilment, creative production and sales capacity are reviewed before additional demand is created.",
  },
  {
    title: "Controlled experimentation",
    text: "Tests use clear hypotheses, stable measurement and enough time or volume to support a useful conclusion.",
  },
];

const REJECTED_TACTICS = [
  "Reporting clicks and impressions as the main business result",
  "Scaling budgets before conversion tracking is validated",
  "Treating every platform conversion as equal quality",
  "Using one creative concept across every channel indefinitely",
  "Combining prospecting and remarketing without clear reporting",
  "Ignoring landing pages, forms and sales response",
  "Changing bids, budgets and targeting simultaneously without diagnosis",
  "Guaranteeing fixed leads, ROAS or revenue",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define commercial goals and conversion quality",
    description:
      "We confirm the business model, audience, channels, margin or lead value, sales process, primary conversions and growth constraints.",
    timing: "Discovery",
    output: "Performance goals and KPI framework",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Audit campaigns, data and conversion journeys",
    description:
      "Accounts, tracking, CRM or ecommerce data, creative, landing pages, forms, calls and sales feedback are reviewed.",
    timing: "Audit",
    output: "Performance opportunity and risk map",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Design channel and budget architecture",
    description:
      "Channels, campaign roles, audiences, keywords, product groups, budgets and success metrics are organised around the growth model.",
    timing: "Strategy",
    output: "Cross-channel media roadmap",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Build campaigns, creative and tracking",
    description:
      "Campaigns, assets, audiences, conversion events, landing pages, routing and reporting requirements are configured and quality checked.",
    timing: "Setup",
    output: "Launch-ready performance system",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Launch and establish reliable baselines",
    description:
      "Early traffic, conversion accuracy, lead or order quality, creative response, budget pacing and operational readiness are monitored.",
    timing: "Launch phase",
    output: "Channel and conversion baseline",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Optimise and scale commercial outcomes",
    description:
      "Budgets, audiences, keywords, product groups, creative, offers and pages are refined using qualified and revenue-based evidence.",
    timing: "Ongoing",
    output: "Optimisation report and growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Channel contribution",
    description:
      "Understand how search, social, video, shopping and remarketing contribute across the customer journey.",
    metrics: [
      "Spend and conversions by channel",
      "Prospecting versus remarketing",
      "Direct and assisted contribution",
      "Budget utilisation and pacing",
    ],
    icon: Layers3,
  },
  {
    title: "Acquisition efficiency",
    description:
      "Review the cost and quality of acquired leads, customers and transactions across campaigns and audiences.",
    metrics: [
      "Cost per lead or acquisition",
      "Cost per qualified lead",
      "ROAS and conversion value",
      "New-customer acquisition cost",
    ],
    icon: Target,
  },
  {
    title: "Creative and conversion performance",
    description:
      "Identify which messages, formats, offers and landing experiences improve useful response.",
    metrics: [
      "Creative and asset contribution",
      "Landing-page conversion rate",
      "Form, call and checkout behaviour",
      "Experiment and refresh priorities",
    ],
    icon: Sparkles,
  },
  {
    title: "Commercial growth",
    description:
      "Connect paid media with pipeline, revenue, order value, margin and customer quality where data allows.",
    metrics: [
      "Pipeline and opportunity value",
      "Revenue and average order value",
      "Margin or contribution context",
      "Scaling recommendations and constraints",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in Performance Marketing services?",
    answer:
      "The service can include strategy, paid search, paid social, video, shopping, remarketing, campaign setup, creative planning, landing pages, conversion tracking, lead or revenue quality, optimisation and cross-channel reporting.",
  },
  {
    question: "How is Performance Marketing different from PPC?",
    answer:
      "PPC usually refers to paid advertising where advertisers pay for clicks or other media interactions. Performance Marketing is broader and connects paid media with conversion journeys, creative, tracking, CRM or ecommerce data and commercial outcomes.",
  },
  {
    question: "Which channels do you manage?",
    answer:
      "Depending on the business, the programme can include Google Ads, Meta Ads, YouTube Ads, LinkedIn Ads, Google Shopping, Display and remarketing. The channel mix is selected according to demand, audience, budget and measurement readiness.",
  },
  {
    question: "Do you manage landing pages?",
    answer:
      "Yes. We can review or create campaign landing pages, forms, calls, booking journeys and ecommerce experiences when post-click performance is limiting campaign results.",
  },
  {
    question: "Do you connect campaigns with CRM or sales data?",
    answer:
      "Yes, where the CRM, ecommerce platform and technical access support it. Lead stages, customer outcomes, revenue and offline conversions can be used to improve campaign decisions.",
  },
  {
    question: "How do you decide the budget split between channels?",
    answer:
      "Budget allocation considers available demand, audience size, conversion quality, marginal efficiency, sales value, creative readiness, seasonality and the strategic role of each channel.",
  },
  {
    question: "How quickly can Performance Marketing generate results?",
    answer:
      "Campaigns can begin generating traffic and conversions after launch, but reliable optimisation requires enough data and stable tracking. Timing depends on demand, budget, conversion rate, sales cycle, offer and campaign maturity.",
  },
  {
    question: "How do you measure Performance Marketing success?",
    answer:
      "Measurement can include leads, qualified leads, purchases, revenue, ROAS, customer acquisition cost, pipeline, average order value, new customers and other business-specific outcomes.",
  },
  {
    question: "Can Performance Marketing work for both B2B and B2C businesses?",
    answer:
      "Yes. B2B programmes usually emphasise qualified pipeline, longer sales cycles and CRM feedback, while B2C programmes often focus on purchases, revenue, customer acquisition and repeat value.",
  },
  {
    question: "Do you guarantee a specific ROAS, lead volume or revenue?",
    answer:
      "No responsible agency can guarantee fixed outcomes because performance depends on market demand, competition, budget, offer, tracking, creative, website experience and sales or fulfilment operations. We provide transparent optimisation around agreed commercial goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing Services",
  serviceType: "Cross-Channel Performance Marketing Management",
  description:
    "Performance marketing services covering paid search, paid social, video, shopping, remarketing, landing pages, conversion tracking, creative testing, lead quality, revenue analysis and reporting.",
  url: "https://www.brainadz.marketing/services/performance-marketing",
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
    name: "Performance Marketing Capabilities",
    itemListElement: CHANNEL_CAPABILITIES.map((capability) => ({
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

export default function PerformanceMarketingServicesPage() {
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
          src="/performance-marketing/performance-marketing-hero.jpg"
          alt="Performance marketing campaign management across search, social, video and ecommerce channels"
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
            <span className="text-white">Performance Marketing Services</span>
          </nav>

          <h1 className="mt-7 max-w-[1120px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Performance Marketing Services
          </h1>

          <div className="mt-auto max-w-[900px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build measurable growth across search, social, video, shopping and
              remarketing through stronger tracking, conversion journeys and revenue-focused optimisation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your performance strategy
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Performance Marketing page navigation"
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
              Performance Marketing overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn paid media into a measurable acquisition and growth system
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance Marketing connects paid media with conversion, sales and
                revenue outcomes. BrainADZ coordinates channels, audiences, creative,
                landing pages, tracking, CRM or ecommerce data and budget decisions
                around one commercial growth framework.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Campaigns are not evaluated in isolation. We examine how demand is
                created, captured, converted and retained, then redirect investment
                toward the combinations producing useful marginal growth.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your growth system
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/performance-marketing-overview.jpg"
                  alt="Cross-channel performance marketing dashboard for acquisition, conversion and revenue"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Performance Marketing connects channel activity with qualified
                conversions, customers and commercial growth.
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
        id="growth-model"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Growth model
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Coordinate demand creation, capture, conversion and customer value
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Sustainable growth comes from connecting channels across the journey
              rather than asking every campaign to produce the same immediate result.
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
        id="channels"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Channel capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give every platform a clear commercial role
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Channel selection is based on demand, audience, buying cycle, creative
              readiness, conversion quality and available budget.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CHANNEL_CAPABILITIES.map((capability) => {
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
                  Business models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt performance strategy to the way the business earns value
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Lead generation, ecommerce, B2B and multi-location businesses require
              different conversion definitions and budget decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {BUSINESS_MODELS.map((model) => {
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
        id="measurement"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Measurement and attribution
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build a measurement system the campaigns can trust
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Automated bidding and cross-channel optimisation depend on accurate
              conversion definitions and reliable business-quality feedback.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MEASUREMENT_CAPABILITIES.map((capability) => {
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
        id="creative"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/performance-marketing-creative-system.jpg"
                alt="Performance marketing creative system across static, video and platform formats"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Creative performance system
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Turn audience insight into repeatable creative testing
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Performance creative connects audience problems, clear offers and
              platform-ready formats with a structured backlog of new concepts.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CREATIVE_LAYERS.map((item) => {
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

      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Growth controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Scale only when the growth system can support more demand
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Measurement, creative, conversion experience and operating capacity are
              checked before larger budgets are introduced.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Review your performance setup
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {OPTIMISATION_CONTROLS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[18px] font-semibold text-black">
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

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                  <CircleAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    Performance discipline
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
                Performance Marketing process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From commercial goals to controlled cross-channel growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strategy, campaign build, creative, measurement and business feedback
              remain connected through one growth roadmap.
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
                  Performance reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect channel activity with acquisition quality and commercial growth
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains where growth came from, what limited it and how the
              next budget decision should change.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/performance-marketing-reporting-dashboard.jpg"
                  alt="Performance marketing dashboard for channels, leads, revenue and budget"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Performance reporting should connect media delivery with acquisition,
                conversion quality and commercial contribution.
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
                Performance Marketing FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before building cross-channel paid growth
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand channels, budgets, tracking, CRM data, landing pages,
              timelines and reporting before starting.
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