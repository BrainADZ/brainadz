/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Filter,
  Gauge,
  GitBranch,
  Layers3,
  ListChecks,
  Megaphone,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TextSearch,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Services | Search PPC Management | BrainADZ",
  description:
    "Google Ads services by BrainADZ cover search strategy, keyword research, campaign structure, responsive search ads, bidding, conversion tracking and ongoing PPC optimisation.",
  alternates: {
    canonical: "/services/google-ads",
  },
  openGraph: {
    title: "Google Ads Services | BrainADZ Marketing",
    description:
      "Generate qualified search demand with structured Google Ads campaigns, accurate conversion measurement and continuous optimisation.",
    type: "website",
    url: "/services/google-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Services | BrainADZ Marketing",
    description:
      "Google Search Ads strategy, campaign management, conversion tracking, bidding and performance reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Search Strategy", href: "#search-strategy" },
  { label: "Campaign Setup", href: "#campaign-setup" },
  { label: "Tracking", href: "#tracking" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Capture active demand",
    description:
      "Reach people searching for the products, services and solutions your business is ready to provide.",
    icon: Search,
  },
  {
    title: "Control commercial intent",
    description:
      "Separate brand, non-brand, service, location and high-value search themes into clear campaign structures.",
    icon: Target,
  },
  {
    title: "Measure real outcomes",
    description:
      "Connect ad clicks with qualified leads, calls, sales and downstream business results through accurate tracking.",
    icon: BarChart3,
  },
  {
    title: "Improve performance continuously",
    description:
      "Use query, bidding, ad, landing-page and conversion-quality data to guide the next optimisation cycle.",
    icon: TrendingUp,
  },
];

const SEARCH_STRATEGY_LAYERS = [
  {
    number: "01",
    title: "Search demand",
    description:
      "Identify the commercial searches, questions, brand terms, service needs and location combinations relevant to the business.",
    focus: "What people search",
    icon: TextSearch,
  },
  {
    number: "02",
    title: "Keyword control",
    description:
      "Group closely related keywords by intent while using match types, negatives and search-term reviews to control reach.",
    focus: "Which searches trigger ads",
    icon: Filter,
  },
  {
    number: "03",
    title: "Message alignment",
    description:
      "Match responsive search ad assets with the user’s problem, offer, proof and next action.",
    focus: "Why the user should click",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Landing-page fit",
    description:
      "Send each search theme to a page that continues the same promise and supports a clear conversion path.",
    focus: "What happens after the click",
    icon: MousePointerClick,
  },
];

const CAMPAIGN_CAPABILITIES = [
  {
    eyebrow: "Keyword and market research",
    title: "Build campaign demand around real search behaviour",
    description:
      "We research keyword themes, search intent, competition, locations and likely commercial value before deciding how campaigns should be structured.",
    points: [
      "Brand and non-brand keyword research",
      "Service, product and location intent",
      "Competitor and search-result review",
      "Keyword grouping and match-type planning",
      "Negative-keyword starting lists",
    ],
    icon: Search,
  },
  {
    eyebrow: "Campaign architecture",
    title: "Create a structure that supports control and useful reporting",
    description:
      "Campaigns and ad groups are organised around business goals, geography, budgets, intent and landing pages rather than being combined into one broad account.",
    points: [
      "Campaign naming and segmentation",
      "Ad groups organised by close intent",
      "Brand, generic and competitor separation",
      "Location and schedule controls",
      "Budget ownership by priority",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Responsive search ads",
    title: "Develop flexible ad assets with a clear message hierarchy",
    description:
      "Headlines and descriptions are written to cover intent, differentiation, proof and action while avoiding repetitive asset variations.",
    points: [
      "Intent-led headline and description sets",
      "Offer, benefit and proof messaging",
      "Brand and compliance review",
      "Asset pinning only when necessary",
      "Ad-strength and performance review",
    ],
    icon: Megaphone,
  },
  {
    eyebrow: "Keyword and query management",
    title: "Use actual search terms to refine traffic quality",
    description:
      "Search-term reviews identify irrelevant demand, new keyword opportunities and patterns that should change account structure or landing pages.",
    points: [
      "Search-term quality reviews",
      "Negative-keyword expansion",
      "Match-type and keyword adjustments",
      "Query-to-ad relevance checks",
      "New intent and landing-page opportunities",
    ],
    icon: Filter,
  },
  {
    eyebrow: "Bidding and budget management",
    title: "Align bidding with conversion volume, value and data quality",
    description:
      "Bidding strategies and budgets are selected around the campaign goal, measurement maturity and available conversion signals.",
    points: [
      "Goal and bidding-strategy alignment",
      "Budget allocation by priority",
      "Conversion-volume readiness checks",
      "CPA, ROAS and value-based controls",
      "Learning-period and change management",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Conversion measurement",
    title: "Optimise toward meaningful actions instead of surface metrics",
    description:
      "We define primary and secondary conversions, validate tags and connect online campaign activity with qualified lead or sales outcomes where possible.",
    points: [
      "Form, call and purchase tracking",
      "Primary and secondary conversion actions",
      "Google tag and analytics validation",
      "Enhanced conversion readiness",
      "Offline lead and revenue feedback planning",
    ],
    icon: BarChart3,
  },
];

const CAMPAIGN_MODELS = [
  {
    title: "Brand search campaigns",
    description:
      "Protect high-intent brand searches, control messaging and direct users toward the most relevant owned experience.",
    points: [
      "Brand and brand-plus-service terms",
      "Competitor visibility monitoring",
      "Message and sitelink control",
      "Brand conversion efficiency",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Non-brand lead campaigns",
    description:
      "Capture users actively searching for services or solutions without already knowing the business.",
    points: [
      "High-intent service keywords",
      "Location and audience observation",
      "Qualified-lead measurement",
      "Landing-page intent alignment",
    ],
    icon: Users,
  },
  {
    title: "Local service campaigns",
    description:
      "Structure city, area and service combinations around the locations the business can genuinely serve.",
    points: [
      "Location-specific search themes",
      "Service-area and schedule controls",
      "Call and enquiry tracking",
      "Local landing-page alignment",
    ],
    icon: Target,
  },
  {
    title: "High-value B2B campaigns",
    description:
      "Manage lower-volume, higher-value searches with stronger qualification, proof and offline outcome feedback.",
    points: [
      "Technical and industry terminology",
      "Longer buying-cycle conversion actions",
      "CRM and lead-quality feedback",
      "Value-based optimisation planning",
    ],
    icon: Workflow,
  },
];

const TRACKING_LAYERS = [
  {
    title: "Primary conversions",
    description:
      "Actions used for campaign optimisation, such as qualified forms, confirmed calls, purchases or high-value bookings.",
    icon: Target,
  },
  {
    title: "Secondary actions",
    description:
      "Useful diagnostic events such as document downloads, important page views or contact-button interactions.",
    icon: MousePointerClick,
  },
  {
    title: "Lead-quality feedback",
    description:
      "CRM or sales-stage information that distinguishes valid enquiries from spam, duplicates and poor-fit leads.",
    icon: Users,
  },
  {
    title: "Value feedback",
    description:
      "Revenue, order value, lead value or stage-based values used to move beyond equal treatment of every conversion.",
    icon: BarChart3,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Conversion diagnostics",
    text: "Tags, event definitions, attribution settings and conversion status are reviewed before campaign performance is trusted.",
  },
  {
    title: "Search-term quality",
    text: "Traffic is assessed through actual queries, intent and downstream lead quality—not only keyword-level click data.",
  },
  {
    title: "Change discipline",
    text: "Bids, budgets, targeting and ads are not repeatedly changed without allowing enough data to evaluate the previous decision.",
  },
  {
    title: "Landing-page continuity",
    text: "The search, ad message and landing page must communicate the same service, offer and expected next action.",
  },
];

const REJECTED_TACTICS = [
  "Optimising campaigns only for clicks or impression volume",
  "Combining unrelated services inside one ad group",
  "Using broad reach without search-term and negative-keyword controls",
  "Counting every button click as an equal business conversion",
  "Making frequent bid and budget changes without enough evidence",
  "Sending all keywords to one generic landing page",
  "Hiding search terms, spend allocation or conversion definitions",
  "Reporting leads without reviewing quality, duplicates or spam",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define goals, economics and conversion actions",
    description:
      "We confirm the offer, customer, geography, lead or sales value, budget expectations and the actions campaigns should optimise toward.",
    timing: "Discovery",
    output: "Campaign goals and measurement plan",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Research search demand and competitors",
    description:
      "Keyword themes, search intent, competitor messaging, result-page conditions and landing-page requirements are analysed.",
    timing: "Research",
    output: "Keyword and opportunity map",
    icon: Search,
  },
  {
    number: "03",
    title: "Build campaigns, ads and controls",
    description:
      "Campaigns, ad groups, keywords, negatives, responsive search ads, assets, locations, schedules and budgets are configured.",
    timing: "Build",
    output: "Launch-ready Google Ads account",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Validate tracking and landing pages",
    description:
      "Conversion actions, tags, URLs, forms, calls, mobile experience and message continuity are checked before scaling spend.",
    timing: "Quality assurance",
    output: "Verified tracking and conversion path",
    icon: ListChecks,
  },
  {
    number: "05",
    title: "Launch and stabilise performance",
    description:
      "Early search terms, conversion signals, budget delivery, ad eligibility and lead quality are reviewed without overreacting to limited data.",
    timing: "Launch phase",
    output: "Stable campaign baseline",
    icon: GitBranch,
  },
  {
    number: "06",
    title: "Optimise and expand proven demand",
    description:
      "Queries, negatives, ads, bidding, budgets, locations, schedules and landing pages are refined using conversion and business-quality evidence.",
    timing: "Ongoing",
    output: "Optimisation report and growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Demand and traffic quality",
    description:
      "Understand which searches and campaign segments attract relevant users rather than reviewing click volume alone.",
    metrics: [
      "Search terms and keyword themes",
      "Click-through and engagement signals",
      "Irrelevant traffic and negative themes",
      "Location, device and schedule patterns",
    ],
    icon: TextSearch,
  },
  {
    title: "Conversion performance",
    description:
      "Review the actions generated by campaigns and the reliability of the measurement used for optimisation.",
    metrics: [
      "Conversions and conversion rate",
      "Cost per conversion",
      "Conversion action breakdown",
      "Tracking and diagnostics status",
    ],
    icon: Target,
  },
  {
    title: "Lead or sales quality",
    description:
      "Connect campaign results with CRM, sales or transaction outcomes wherever data access allows.",
    metrics: [
      "Qualified versus unqualified leads",
      "Duplicate, spam and invalid enquiries",
      "Sales-stage or purchase outcomes",
      "Cost per qualified result",
    ],
    icon: Users,
  },
  {
    title: "Budget and growth decisions",
    description:
      "Show where spend is efficient, constrained, wasteful or ready for controlled expansion.",
    metrics: [
      "Spend and budget utilisation",
      "CPA, ROAS or conversion value",
      "Campaign and service contribution",
      "Scaling and reduction recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Google Ads service?",
    answer:
      "The service can include account strategy, keyword research, campaign and ad-group structure, responsive search ads, negative keywords, bidding, budgets, conversion tracking, landing-page recommendations, ongoing optimisation and reporting. The exact scope depends on your business goals and existing account condition.",
  },
  {
    question: "Does this service include Google Shopping, YouTube and Display campaigns?",
    answer:
      "This page focuses primarily on Google Search Ads. BrainADZ provides dedicated services for Google Shopping Ads, YouTube Ads and Display Ads so each channel can use the correct strategy, creative, targeting and measurement framework.",
  },
  {
    question: "How much budget should we spend on Google Ads?",
    answer:
      "Budget depends on search demand, competition, geography, conversion rate, customer value and the amount of data required to make reliable decisions. We recommend a starting budget after reviewing keyword costs, goals and business economics rather than using one fixed amount for every advertiser.",
  },
  {
    question: "How quickly can Google Ads generate leads?",
    answer:
      "Campaigns can begin generating traffic soon after approval and launch, but reliable lead and cost patterns require enough conversion data and search-term evidence. Early results also depend on tracking quality, offer strength, landing pages, competition and budget.",
  },
  {
    question: "Do you create the ad copy?",
    answer:
      "Yes. We create responsive search ad headlines and descriptions aligned with keyword intent, offer, proof and the landing page. Messaging is reviewed and improved as performance data becomes available.",
  },
  {
    question: "Do you set up conversion tracking?",
    answer:
      "Yes. Tracking can include forms, calls, purchases and other meaningful actions using Google Ads, Google tag, Google Tag Manager or analytics integrations. Enhanced conversions and offline outcome feedback can also be planned where the required data and consent processes are available.",
  },
  {
    question: "What are negative keywords?",
    answer:
      "Negative keywords help prevent ads from showing for searches that are irrelevant or commercially unsuitable. They are developed before launch and expanded through ongoing search-term reviews.",
  },
  {
    question: "Can you improve an existing Google Ads account?",
    answer:
      "Yes. We can audit existing campaign structure, search terms, ads, keywords, bidding, budgets, tracking and landing-page alignment, then rebuild or optimise the account according to the findings.",
  },
  {
    question: "How do you measure lead quality?",
    answer:
      "Where possible, we connect campaign data with CRM or sales outcomes such as valid lead, qualified lead, opportunity, booking, sale or revenue. This helps distinguish campaigns that generate cheap forms from campaigns that generate useful business results.",
  },
  {
    question: "Do you guarantee a specific number of leads or sales?",
    answer:
      "No responsible Google Ads service can guarantee a fixed result because performance depends on demand, competition, budget, offer, website experience, tracking and sales follow-up. We provide transparent activity, measurement and optimisation around agreed business goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Services",
  serviceType: "Google Search Ads and PPC Management",
  description:
    "Google Ads services covering search strategy, keyword research, campaign structure, responsive search ads, bidding, conversion tracking, optimisation and reporting.",
  url: "https://www.brainadz.marketing/services/google-ads",
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
    name: "Google Ads Capabilities",
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

export default function GoogleAdsServicesPage() {
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
          src="/performance-marketing/google-ads-hero.jpg"
          alt="Google Ads search campaign management and PPC performance optimisation"
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
            <span className="text-white">Google Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Google Ads Services
          </h1>

          <div className="mt-auto max-w-[820px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Capture high-intent search demand with structured campaigns, accurate
              conversion measurement and optimisation focused on qualified business outcomes.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your Google Ads campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Google Ads page navigation"
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
              Google Ads overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn active search demand into measurable leads and sales
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Google Search Ads place your business in front of people already
                expressing a need. BrainADZ connects search intent, campaign
                structure, ad messaging, landing pages and conversion data so paid
                search activity remains controlled and commercially useful.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance is not judged by clicks alone. We review the queries,
                costs, conversions and downstream quality that show whether campaigns
                are attracting customers the business can actually serve.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your paid search opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/google-ads-overview.jpg"
                  alt="Google Ads search campaign dashboard and keyword performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective paid search connects query intent, ad relevance, conversion
                paths and business-quality feedback.
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

      {/* Search strategy */}
      <section
        id="search-strategy"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Search campaign strategy
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Align the search, ad and landing page around one clear intent
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              A campaign is strongest when every stage continues the same commercial
              promise instead of forcing unrelated queries into a generic user journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {SEARCH_STRATEGY_LAYERS.map((item) => {
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

      {/* Campaign capabilities */}
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
                  Google Ads campaign management
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build the controls required for reliable paid search decisions
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Account structure, ads, queries, bidding and measurement must work
              together. Weakness in one area can distort the performance of every other area.
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

      {/* Campaign models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Search campaign models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Separate campaigns by the way demand behaves
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Brand, generic, local and B2B searches have different economics,
              messages and conversion journeys. They should not be managed as one audience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CAMPAIGN_MODELS.map((model) => {
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

      {/* Tracking */}
      <section
        id="tracking"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/google-ads-conversion-tracking.jpg"
                alt="Google Ads conversion tracking, lead quality and revenue feedback"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Conversion measurement
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Give bidding systems the right definition of success
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Campaign optimisation is only as useful as the conversion data it
              receives. We separate meaningful business actions from diagnostic
              activity and strengthen the feedback loop where possible.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TRACKING_LAYERS.map((item) => {
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

      {/* Optimisation and controls */}
      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Optimisation controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Optimise with evidence, not constant account activity
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Good account management is disciplined. Changes should respond to
              search quality, conversion quality, cost and business context—not the
              need to appear busy.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your Google Ads account
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6"
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Google Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From search opportunity to controlled campaign growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Research, setup, measurement, launch and optimisation remain connected
              through one clear performance plan.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start your campaign plan
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Google Ads reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                See where demand, budget and business outcomes connect
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting separates traffic activity from conversion quality and
              explains the decisions required for the next campaign cycle.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/google-ads-reporting-dashboard.jpg"
                  alt="Google Ads reporting dashboard for search terms, conversions and budget"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Paid search reporting should connect queries and costs with qualified
                leads, sales and scaling decisions.
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Google Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before launching paid search
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand campaign scope, budgets, tracking, negative keywords, lead
              quality, timelines and optimisation before starting.
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