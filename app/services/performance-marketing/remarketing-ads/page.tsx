/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  Eye,
  FileSearch,
  Filter,
  Layers3,
  ListFilter,
  Megaphone,
  PackageSearch,
  Repeat2,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Remarketing Ads Services | Retargeting Campaigns | BrainADZ",
  description:
    "Remarketing Ads services by BrainADZ cover website and engagement audiences, audience windows, exclusions, dynamic product ads, creative sequencing, frequency control and conversion reporting.",
  alternates: {
    canonical: "/services/remarketing-ads",
  },
  openGraph: {
    title: "Remarketing Ads Services | BrainADZ Marketing",
    description:
      "Re-engage relevant visitors, viewers, cart users and customer audiences with structured cross-channel remarketing campaigns.",
    type: "website",
    url: "/services/remarketing-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remarketing Ads Services | BrainADZ Marketing",
    description:
      "Cross-channel remarketing strategy, audience segmentation, exclusions, dynamic ads, frequency control and performance reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Audience Journey", href: "#audience-journey" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Dynamic Ads", href: "#dynamic-ads" },
  { label: "Creative", href: "#creative" },
  { label: "Controls", href: "#controls" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Recover valuable interest",
    description:
      "Reconnect with people who viewed important pages, products, videos or offers but did not complete the intended action.",
    icon: Repeat2,
  },
  {
    title: "Match the message to intent",
    description:
      "Use different audience windows, exclusions and creative sequences for visitors at different decision stages.",
    icon: Target,
  },
  {
    title: "Reduce wasted repetition",
    description:
      "Control converted users, recent purchasers, unsuitable visitors, frequency and audience overlap across campaigns.",
    icon: Filter,
  },
  {
    title: "Measure beyond last-click revenue",
    description:
      "Review assisted outcomes, qualified conversions and the incremental value of remarketing where measurement allows.",
    icon: BarChart3,
  },
];

const JOURNEY_STAGES = [
  {
    number: "01",
    title: "Content or video engagement",
    description:
      "Re-engage people who consumed useful content or watched meaningful portions of a video but have not yet visited a commercial page.",
    focus: "Early consideration",
    icon: Eye,
  },
  {
    number: "02",
    title: "Service or product interest",
    description:
      "Reach users who viewed priority product, service or category pages with proof, comparison and next-step messaging.",
    focus: "Active evaluation",
    icon: Search,
  },
  {
    number: "03",
    title: "Form, cart or checkout intent",
    description:
      "Use short windows and high-relevance messages for users who began a form, added to cart or reached checkout without completing.",
    focus: "Conversion recovery",
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Customer and post-purchase",
    description:
      "Exclude recent buyers where appropriate, or use separate cross-sell, replenishment, renewal and loyalty journeys.",
    focus: "Retention and customer value",
    icon: UserCheck,
  },
];

const REMARKETING_CAPABILITIES = [
  {
    eyebrow: "Audience architecture",
    title: "Build audiences around meaningful behaviour",
    description:
      "We organise website, app, video, social engagement and customer-list audiences around intent, recency and the action already completed.",
    points: [
      "Website visitor and page-group audiences",
      "Video and social engagement audiences",
      "Form, cart and checkout-stage audiences",
      "Customer-list and CRM segments",
      "Converted-user and purchaser exclusions",
    ],
    icon: Users,
  },
  {
    eyebrow: "Membership windows",
    title: "Use recency windows that reflect the buying cycle",
    description:
      "Audience duration is planned around how quickly customers decide, when urgency matters and when continued advertising becomes irrelevant.",
    points: [
      "Short-window high-intent audiences",
      "Medium-window consideration audiences",
      "Longer-window complex buying journeys",
      "Product and service-specific duration rules",
      "Recency-based message progression",
    ],
    icon: Clock3,
  },
  {
    eyebrow: "Cross-channel campaign strategy",
    title: "Give Google, Meta and YouTube clear remarketing roles",
    description:
      "Search, display, social and video remarketing are coordinated according to audience behaviour, creative format and campaign objective.",
    points: [
      "Google Search audience observation or targeting",
      "Display and video re-engagement",
      "Meta website and engagement custom audiences",
      "Customer-list activation where eligible",
      "Cross-platform exclusion planning",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Audience exclusions",
    title: "Stop showing the wrong message to the wrong person",
    description:
      "Exclusions protect recent customers, completed leads, employees, unsuitable visitors and overlapping audience journeys from unnecessary spend.",
    points: [
      "Recent purchaser and converter exclusions",
      "Employee, agency and internal traffic controls",
      "Low-value or unsuitable visitor exclusions",
      "Audience overlap and hierarchy review",
      "Cross-sell exceptions where relevant",
    ],
    icon: ShieldCheck,
  },
  {
    eyebrow: "Creative sequencing",
    title: "Move the message forward instead of repeating the first ad",
    description:
      "Creative changes by audience stage to answer objections, add proof, clarify the offer and create a stronger reason to return.",
    points: [
      "Reminder and continuity messages",
      "Testimonial and proof sequences",
      "Comparison and objection handling",
      "Offer and urgency variations",
      "Post-purchase and cross-sell creative",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Conversion measurement",
    title: "Connect remarketing delivery with meaningful outcomes",
    description:
      "Website, platform and CRM events are reviewed so campaigns optimise toward completed and qualified actions rather than simple return visits.",
    points: [
      "Lead, purchase and revenue tracking",
      "Qualified conversion feedback",
      "View-through and assisted context",
      "Audience-stage conversion reporting",
      "Incrementality testing readiness",
    ],
    icon: BarChart3,
  },
];

const CHANNEL_MODELS = [
  {
    title: "Search remarketing",
    description:
      "Use prior visitor or customer signals when people return to search, while keeping keyword intent and bidding strategy central.",
    points: [
      "Audience observation and performance insight",
      "Bid or value strategy context",
      "Returning-user search behaviour",
      "Converted-user exclusions",
    ],
    icon: Search,
  },
  {
    title: "Display remarketing",
    description:
      "Reach eligible prior visitors across websites and apps with responsive or dynamic creative and controlled repetition.",
    points: [
      "Responsive display creative",
      "Audience-window segmentation",
      "Placement and frequency review",
      "Dynamic feed integration where relevant",
    ],
    icon: Megaphone,
  },
  {
    title: "Social remarketing",
    description:
      "Use website, video, page and account engagement signals to reconnect through Facebook and Instagram campaigns.",
    points: [
      "Website and engagement custom audiences",
      "Instant-form and message audiences",
      "Creative sequencing by recency",
      "Customer and converter exclusions",
    ],
    icon: Users,
  },
  {
    title: "Video remarketing",
    description:
      "Build consideration using viewers, channel engagement and site behaviour across short-form and in-stream video journeys.",
    points: [
      "Video viewer segmentation",
      "Watch-depth and engagement audiences",
      "Proof and education sequences",
      "Website-action measurement",
    ],
    icon: Eye,
  },
];

const DYNAMIC_AD_LAYERS = [
  {
    title: "Catalogue or feed quality",
    description:
      "Product IDs, titles, prices, images, availability and destination URLs must remain accurate and consistent.",
    icon: PackageSearch,
  },
  {
    title: "Event-to-item matching",
    description:
      "View, cart and purchase events should pass identifiers that match the correct catalogue or business data items.",
    icon: Workflow,
  },
  {
    title: "Product exclusions",
    description:
      "Unavailable, unsuitable, recently purchased or low-priority products should be excluded according to business rules.",
    icon: ListFilter,
  },
  {
    title: "Creative safeguards",
    description:
      "Templates, branding, overlays and fallback assets should remain usable across different products and placements.",
    icon: ShieldCheck,
  },
];

const CREATIVE_SEQUENCE = [
  {
    title: "Reminder",
    description:
      "Reconnect the audience with the exact category, service, product or content they previously explored.",
  },
  {
    title: "Proof",
    description:
      "Introduce testimonials, demonstrations, credentials, comparisons or outcomes that reduce uncertainty.",
  },
  {
    title: "Objection handling",
    description:
      "Answer common concerns around price, process, compatibility, timing, delivery, support or risk.",
  },
  {
    title: "Offer",
    description:
      "Use a valid incentive, bundle, consultation or urgency message when it supports the economics and customer journey.",
  },
  {
    title: "Alternative path",
    description:
      "Offer another product, service tier, content resource or contact method when the first route is not converting.",
  },
  {
    title: "Customer journey",
    description:
      "Switch recent converters into onboarding, replenishment, renewal, cross-sell or loyalty communication where appropriate.",
  },
];

const CONTROL_LAYERS = [
  {
    title: "Frequency",
    description:
      "Monitor how often audiences receive ads and refresh or reduce delivery when repetition no longer creates useful response.",
    icon: Repeat2,
  },
  {
    title: "Audience overlap",
    description:
      "Define hierarchy and exclusions so the same user is not competing across multiple remarketing campaigns unnecessarily.",
    icon: Layers3,
  },
  {
    title: "Consent and eligibility",
    description:
      "Use tags, customer data and audience features according to platform rules, consent requirements and the business’s privacy obligations.",
    icon: ShieldCheck,
  },
  {
    title: "Conversion exclusions",
    description:
      "Remove completed leads and purchasers from acquisition messages unless a separate post-conversion strategy applies.",
    icon: UserCheck,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Audience validity",
    text: "Segment rules, event activity, list size, platform eligibility and recency are checked before campaign conclusions are drawn.",
  },
  {
    title: "Message progression",
    text: "Audiences receive the next useful message rather than the same acquisition creative throughout the full membership window.",
  },
  {
    title: "Budget proportion",
    text: "Remarketing spend is controlled relative to audience size and available conversion opportunity so small lists are not oversaturated.",
  },
  {
    title: "Incremental context",
    text: "Reported conversions are reviewed with assisted paths, customer behaviour and holdout testing where practical to avoid overstating impact.",
  },
];

const REJECTED_TACTICS = [
  "Showing the same ad for the complete audience window",
  "Remarketing to every website visitor as equal intent",
  "Continuing acquisition ads after a lead or purchase",
  "Using customer data without appropriate rights or consent",
  "Overspending against small audience pools",
  "Ignoring frequency, overlap and creative fatigue",
  "Counting all view-through outcomes as fully incremental",
  "Running dynamic ads with mismatched product IDs or stale feeds",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Map the customer journey and conversion stages",
    description:
      "We define important visits, engagement actions, form or cart stages, purchase events, buying timelines and post-conversion journeys.",
    timing: "Discovery",
    output: "Remarketing journey map",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Audit tags, events, lists and consent readiness",
    description:
      "Website tags, pixels, conversion events, customer data sources, audience eligibility and exclusions are reviewed.",
    timing: "Data review",
    output: "Audience and tracking readiness audit",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Design audience windows and campaign roles",
    description:
      "Audiences are segmented by behaviour, intent, recency and conversion status across the channels best suited to re-engagement.",
    timing: "Strategy",
    output: "Audience and channel framework",
    icon: Target,
  },
  {
    number: "04",
    title: "Build creative sequences and dynamic systems",
    description:
      "Reminder, proof, objection, offer and product-specific assets are prepared with feed and event matching where required.",
    timing: "Campaign build",
    output: "Launch-ready remarketing campaigns",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Launch and validate audience delivery",
    description:
      "Audience population, event matching, exclusions, frequency, conversion activity and creative delivery are monitored after launch.",
    timing: "Launch phase",
    output: "Validated audience and delivery baseline",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Optimise sequence, spend and incrementality",
    description:
      "Windows, exclusions, creative, bids, budgets and post-conversion paths are refined using qualified and incremental outcome evidence.",
    timing: "Ongoing",
    output: "Optimisation report and test backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Audience health",
    description:
      "Understand whether audiences are large enough, current enough and segmented clearly enough for useful campaign delivery.",
    metrics: [
      "Audience size and growth",
      "Membership-window distribution",
      "List eligibility and match status",
      "Overlap and exclusion coverage",
    ],
    icon: Users,
  },
  {
    title: "Delivery and frequency",
    description:
      "Review how often remarketing audiences see ads and where repetition, fatigue or underdelivery appears.",
    metrics: [
      "Reach, impressions and frequency",
      "Spend by audience stage",
      "Placement and device delivery",
      "Creative fatigue patterns",
    ],
    icon: Repeat2,
  },
  {
    title: "Conversion recovery",
    description:
      "Measure completed actions from different remarketing stages while preserving assisted and view-through context.",
    metrics: [
      "Conversions by audience window",
      "Cost per recovered conversion",
      "Cart, form and checkout recovery",
      "Qualified lead or revenue outcomes",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Incremental and budget decisions",
    description:
      "Assess whether remarketing adds useful value and where spend should be reduced, expanded or redirected.",
    metrics: [
      "Assisted and attributed outcomes",
      "Holdout or comparison insights",
      "New versus returning customer context",
      "Budget and sequence recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Remarketing Ads service?",
    answer:
      "The service can include audience strategy, website and engagement audiences, membership windows, customer-list segments, exclusions, dynamic ads, creative sequencing, frequency management, conversion tracking, optimisation and reporting across relevant advertising platforms.",
  },
  {
    question: "Which platforms can be used for remarketing?",
    answer:
      "Remarketing can be used across eligible Google Ads, YouTube, Facebook and Instagram campaign types. The exact features and audience requirements depend on the platform, campaign type, data source and account eligibility.",
  },
  {
    question: "What is the difference between remarketing and retargeting?",
    answer:
      "The terms are commonly used interchangeably. In practice, both refer to re-engaging people who previously interacted with a website, app, content, social account, video, customer list or business.",
  },
  {
    question: "What are audience membership windows?",
    answer:
      "A membership window controls how long an eligible user remains in an audience after the qualifying interaction. Short windows can suit cart or form abandonment, while longer windows may support complex B2B or high-consideration purchases.",
  },
  {
    question: "What is dynamic remarketing?",
    answer:
      "Dynamic remarketing uses a product or business-data feed together with website or app events to show ads containing items related to what a user previously viewed or considered. Accurate identifiers, event matching and feed data are essential.",
  },
  {
    question: "Can you remarket using a customer list?",
    answer:
      "Eligible platforms can use customer data that the business collected directly, such as email addresses or phone numbers, subject to platform policies, consent requirements and account eligibility. The business must have the appropriate rights to use and upload that data.",
  },
  {
    question: "Should recent purchasers see remarketing ads?",
    answer:
      "Recent purchasers are usually excluded from acquisition or cart-recovery messages. They may enter a separate post-purchase journey for onboarding, replenishment, renewal, loyalty or relevant cross-sell offers.",
  },
  {
    question: "How do you prevent remarketing ads from becoming annoying?",
    answer:
      "We use audience windows, exclusions, creative sequencing, budget controls and frequency monitoring. Creative is refreshed or delivery is reduced when repetition no longer generates useful response.",
  },
  {
    question: "How do you measure remarketing performance?",
    answer:
      "Reporting can include audience health, reach, frequency, conversions, cart or form recovery, qualified leads, revenue, assisted outcomes and incremental comparison where suitable testing is possible.",
  },
  {
    question: "Does remarketing guarantee more conversions?",
    answer:
      "No. Remarketing can improve re-engagement, but results depend on audience quality, offer, timing, creative, website experience, tracking and the strength of the original demand. We provide transparent optimisation rather than guaranteed outcomes.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remarketing Ads Services",
  serviceType: "Cross-Channel Remarketing and Retargeting Advertising",
  description:
    "Remarketing Ads services covering website and engagement audiences, audience windows, exclusions, dynamic product ads, creative sequencing, frequency control, measurement and reporting.",
  url: "https://www.brainadz.marketing/services/remarketing-ads",
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
    name: "Remarketing Ads Capabilities",
    itemListElement: REMARKETING_CAPABILITIES.map((capability) => ({
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

export default function RemarketingAdsServicesPage() {
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
          src="/performance-marketing/remarketing-ads-hero.jpg"
          alt="Remarketing Ads campaign strategy for visitors, viewers, cart users and customers"
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
            <span className="text-white">Remarketing Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Remarketing Ads Services
          </h1>

          <div className="mt-auto max-w-[850px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Re-engage relevant visitors, viewers, cart users and customer audiences
              with better timing, stronger sequencing and controlled cross-channel delivery.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your remarketing campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Remarketing Ads page navigation"
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
              Remarketing overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Bring interested audiences back with the next useful message
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Remarketing reconnects with people who already interacted with the
                business. BrainADZ segments audiences by behaviour, intent, recency
                and conversion status so campaigns continue the journey instead of
                repeating the original acquisition ad.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The programme coordinates website audiences, engagement data,
                customer lists, dynamic product systems, exclusions, frequency and
                conversion measurement across relevant advertising platforms.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your remarketing opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/remarketing-ads-overview.jpg"
                  alt="Remarketing audience journey from engagement to conversion and customer retention"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective remarketing uses audience stage, recency, exclusions and
                message progression to guide re-engagement.
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

      {/* Audience journey */}
      <section
        id="audience-journey"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audience journey
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Treat each previous interaction as a different level of intent
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              A video viewer, service-page visitor, cart user and recent customer need
              different timing, messages and exclusions.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {JOURNEY_STAGES.map((item) => {
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
                  Remarketing campaign capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build audience, channel and message controls around real behaviour
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Strong remarketing requires more than installing a pixel. Audience
              logic, windows, exclusions, creative and measurement must remain aligned.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {REMARKETING_CAPABILITIES.map((capability) => {
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

      {/* Channel models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Cross-channel remarketing
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use each platform where its remarketing role is strongest
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Search, display, social and video platforms encounter prior audiences in
              different contexts and should use channel-appropriate messages.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CHANNEL_MODELS.map((model) => {
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

      {/* Dynamic ads */}
      <section
        id="dynamic-ads"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/remarketing-dynamic-ads.jpg"
                alt="Dynamic remarketing using product feeds and visitor events"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Dynamic remarketing
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Reconnect audiences with relevant products and services automatically
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Dynamic remarketing depends on accurate feeds and item-level events.
              When identifiers, availability or destinations do not match, the
              campaign cannot reliably personalise the ad experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DYNAMIC_AD_LAYERS.map((item) => {
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

      {/* Creative */}
      <section
        id="creative"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Remarketing creative sequence
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give returning audiences a new reason to continue
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The audience already knows something about the business. Creative should
              add clarity, proof or urgency instead of restarting the conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_SEQUENCE.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
              >
                <span className="text-[13px] font-semibold text-[#E1122B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-black/58">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section
        id="controls"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Delivery and privacy controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Re-engage responsibly without oversaturating the audience
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Remarketing uses prior interaction and customer data signals. Audience
              eligibility, consent, repetition and conversion status require clear controls.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your remarketing setup
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTROL_LAYERS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
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
                  <CircleAlert className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    Remarketing discipline
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
                Remarketing Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From audience mapping to incremental campaign improvement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Data, windows, creative, exclusions and reporting remain connected
              through one controlled re-engagement roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your remarketing plan
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
                  Remarketing reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure audience recovery without overstating attributed conversions
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains audience health, repetition, recovered conversions
              and the evidence available for incremental budget decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/remarketing-ads-reporting-dashboard.jpg"
                  alt="Remarketing Ads reporting dashboard for audiences, frequency and recovered conversions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Remarketing reporting should connect audience stage and frequency
                with qualified and incremental outcomes.
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
                Remarketing Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before re-engaging previous audiences
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand platforms, audience windows, customer lists, dynamic ads,
              frequency, purchaser exclusions and measurement before starting.
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