/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Eye,
  FileSearch,
  Filter,
  Gauge,
  ImageIcon,
  Layers3,
  Megaphone,
  Monitor,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Display Ads Services | Google Display Campaign Management | BrainADZ",
  description:
    "Display Ads services by BrainADZ cover responsive display creative, audience and contextual targeting, optimized targeting, placements, exclusions, frequency, conversion tracking and reporting.",
  alternates: {
    canonical: "/services/display-ads",
  },
  openGraph: {
    title: "Display Ads Services | BrainADZ Marketing",
    description:
      "Build measurable Google Display campaigns with stronger creative assets, audience signals, placement controls, frequency management and conversion reporting.",
    type: "website",
    url: "/services/display-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Display Ads Services | BrainADZ Marketing",
    description:
      "Responsive display creative, audience strategy, contextual targeting, placement controls, frequency management and campaign reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Campaign Roles", href: "#campaign-roles" },
  { label: "Creative", href: "#creative" },
  { label: "Targeting", href: "#targeting" },
  { label: "Placements", href: "#placements" },
  { label: "Measurement", href: "#measurement" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Reach audiences beyond search",
    description:
      "Introduce or reinforce the offer while relevant audiences browse websites, apps and eligible Google-owned properties.",
    icon: Megaphone,
  },
  {
    title: "Use flexible creative",
    description:
      "Combine images, logos, headlines, descriptions and video assets that can adapt across supported display inventory.",
    icon: Sparkles,
  },
  {
    title: "Control delivery quality",
    description:
      "Review audiences, content, placements, exclusions, devices and frequency to protect relevance and brand suitability.",
    icon: ShieldCheck,
  },
  {
    title: "Measure useful outcomes",
    description:
      "Connect impressions and clicks with qualified conversions, revenue and downstream business results.",
    icon: BarChart3,
  },
];

const CAMPAIGN_ROLES = [
  {
    number: "01",
    title: "Prospecting",
    description:
      "Reach new audiences using audience signals, contextual inputs and conversion-led automation aligned with the campaign goal.",
    focus: "New customer discovery",
    icon: Target,
  },
  {
    number: "02",
    title: "Remarketing",
    description:
      "Re-engage eligible visitors and customer segments using recency, exclusions, frequency and message progression.",
    focus: "Return and recovery",
    icon: Users,
  },
  {
    number: "03",
    title: "Awareness",
    description:
      "Build relevant reach and visual recognition when the campaign objective values exposure, recall or category education.",
    focus: "Reach and visibility",
    icon: Eye,
  },
  {
    number: "04",
    title: "Conversion support",
    description:
      "Use Display to support longer journeys, reinforce proof and contribute to leads or sales where tracking is reliable.",
    focus: "Assisted and direct action",
    icon: MousePointerClick,
  },
];

const CREATIVE_CAPABILITIES = [
  {
    eyebrow: "Responsive display ads",
    title: "Build asset combinations for different display spaces",
    description:
      "We prepare multiple images, logos, headlines, descriptions and optional videos so Google can assemble eligible combinations for available inventory.",
    points: [
      "Short and long headline coverage",
      "Distinct descriptions and CTAs",
      "Landscape, square and portrait images",
      "Square and landscape logos",
      "Video assets where relevant",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Static uploaded display ads",
    title: "Use fixed layouts where creative control is required",
    description:
      "Uploaded image or supported HTML formats can be used when the campaign needs an approved layout, precise visual system or controlled message hierarchy.",
    points: [
      "Common display-size planning",
      "Fixed brand and message hierarchy",
      "Mobile and desktop variants",
      "Readable CTA and safe zones",
      "File and policy compliance checks",
    ],
    icon: ImageIcon,
  },
  {
    eyebrow: "Video-supported display creative",
    title: "Add motion where demonstration improves understanding",
    description:
      "Short videos can strengthen responsive display campaigns when the product, process or proof benefits from movement and sound-aware storytelling.",
    points: [
      "Fast product or problem clarity",
      "Caption-ready communication",
      "Brand visibility in early frames",
      "Short-duration mobile assets",
      "Consistent landing-page message",
    ],
    icon: Video,
  },
  {
    eyebrow: "Creative testing",
    title: "Compare meaningful visual and message concepts",
    description:
      "Testing focuses on different reasons to respond—benefits, proof, product use, offers and objections—not only cosmetic design changes.",
    points: [
      "Benefit and outcome concepts",
      "Product and lifestyle imagery",
      "Proof and testimonial messages",
      "Offer and urgency variations",
      "Asset-level performance review",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Placement-ready adaptation",
    title: "Prepare assets for varied inventory and devices",
    description:
      "Creative is reviewed for small-screen readability, cropping, native-style placements and different visual contexts across websites and apps.",
    points: [
      "Mobile-first legibility",
      "Image crop and focal-point checks",
      "Logo and brand clarity",
      "CTA visibility",
      "Safe-area and background contrast",
    ],
    icon: Smartphone,
  },
  {
    eyebrow: "Creative refresh system",
    title: "Replace fatigue before frequency damages response",
    description:
      "Asset performance, repetition and audience response are monitored so new concepts can be introduced before the campaign becomes stale.",
    points: [
      "Creative-fatigue indicators",
      "Asset refresh calendar",
      "Winning-theme expansion",
      "Low-value asset replacement",
      "Audience-stage message updates",
    ],
    icon: TrendingUp,
  },
];

const CREATIVE_FRAMEWORK = [
  {
    title: "Stop",
    description:
      "Use a clear image, motion or visual contrast that earns attention without relying on misleading shock.",
    icon: Eye,
  },
  {
    title: "Explain",
    description:
      "Communicate the product, service or customer problem quickly enough for limited-attention display environments.",
    icon: Megaphone,
  },
  {
    title: "Prove",
    description:
      "Use benefits, outcomes, credentials, demonstrations or credible social proof to reduce uncertainty.",
    icon: ShieldCheck,
  },
  {
    title: "Direct",
    description:
      "Make the next step and landing-page destination consistent with the promise shown in the ad.",
    icon: MousePointerClick,
  },
];

const TARGETING_CAPABILITIES = [
  {
    eyebrow: "Audience segments",
    title: "Use audience signals according to intent and campaign objective",
    description:
      "In-market, affinity, demographic, custom and first-party segments can support audience planning where they match the commercial goal.",
    points: [
      "In-market and interest-based audiences",
      "Custom audience segments",
      "Demographic and life-stage context",
      "Customer and website data segments",
      "Audience exclusions where appropriate",
    ],
    icon: Users,
  },
  {
    eyebrow: "Optimized targeting",
    title: "Give automation useful starting signals without losing review discipline",
    description:
      "Optimized targeting can look beyond manually selected signals to find additional audiences likely to convert. We evaluate its contribution separately from the initial signals.",
    points: [
      "Audience and keyword signals",
      "Landing-page and creative context",
      "Conversion-goal alignment",
      "Audience insight review",
      "Manual signal versus expansion analysis",
    ],
    icon: Target,
  },
  {
    eyebrow: "Contextual targeting",
    title: "Reach content environments related to the offer",
    description:
      "Topics, placements and display keywords can help guide campaigns toward relevant content contexts when contextual alignment supports the objective.",
    points: [
      "Topic and content-category planning",
      "Display keyword themes",
      "Managed placement selection",
      "Website, app and video context",
      "Contextual exclusions",
    ],
    icon: Search,
  },
  {
    eyebrow: "First-party data",
    title: "Use eligible business data for re-engagement and insight",
    description:
      "Website visitors and customer data segments can support remarketing, exclusions and audience understanding subject to consent, policy and list-size requirements.",
    points: [
      "Website visitor segments",
      "Customer-list readiness",
      "Converted-user exclusions",
      "Recency and membership windows",
      "Consent and eligibility review",
    ],
    icon: Workflow,
  },
  {
    eyebrow: "Location and device controls",
    title: "Align delivery with markets and experiences the business can support",
    description:
      "Geographies, languages, devices and schedules are configured according to service coverage, landing-page readiness and customer behaviour.",
    points: [
      "Country, region and city targeting",
      "Language and market alignment",
      "Mobile, tablet and desktop review",
      "Time and day performance",
      "Regional budget differences",
    ],
    icon: Monitor,
  },
  {
    eyebrow: "Audience separation",
    title: "Keep prospecting and remarketing performance understandable",
    description:
      "New-audience acquisition, website remarketing and customer activity are separated where measurement and budget ownership require clarity.",
    points: [
      "Prospecting versus remarketing",
      "Customer and purchaser exclusions",
      "Audience-overlap review",
      "Recency-based remarketing groups",
      "New-customer reporting context",
    ],
    icon: Filter,
  },
];

const PLACEMENT_CONTROLS = [
  {
    title: "Placement reporting",
    description:
      "Review websites, apps, videos and other inventory where ads served, using performance and suitability evidence.",
    icon: FileSearch,
  },
  {
    title: "Placement exclusions",
    description:
      "Exclude specific websites, apps, channels, videos or categories that create weak traffic or unsuitable brand context.",
    icon: Filter,
  },
  {
    title: "Content suitability",
    description:
      "Apply inventory and content exclusions according to brand, sector, audience and regulatory requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Frequency management",
    description:
      "Limit or monitor repeated exposure by campaign, ad group or ad when frequency no longer supports the objective.",
    icon: Gauge,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Audience purpose",
    text: "Each audience or contextual input has a defined role, expected behaviour and measurement plan before budget is assigned.",
  },
  {
    title: "Placement evidence",
    text: "Placements are excluded using brand-suitability or performance evidence rather than broad assumptions that unnecessarily remove reach.",
  },
  {
    title: "Creative supply",
    text: "Campaigns receive enough distinct assets for testing and refresh without flooding the account with near-identical variations.",
  },
  {
    title: "Conversion reliability",
    text: "Automated bidding and optimized targeting are not scaled until primary conversion events and business quality are trustworthy.",
  },
];

const REJECTED_TACTICS = [
  "Running one creative set indefinitely",
  "Treating all websites and apps as equal-quality inventory",
  "Optimising only for impressions or cheap clicks",
  "Using broad audiences without conversion-quality review",
  "Retargeting converted users with the original acquisition message",
  "Ignoring frequency and creative fatigue",
  "Excluding placements from assumptions without evidence",
  "Scaling optimized targeting before conversion tracking is reliable",
];

const MEASUREMENT_LAYERS = [
  {
    title: "Delivery",
    description:
      "Measure reach, impressions, frequency, CPM, devices and inventory distribution according to the campaign role.",
    icon: Megaphone,
  },
  {
    title: "Engagement",
    description:
      "Review clicks, click-through rate, landing-page visits and post-click behaviour without treating engagement as the final outcome.",
    icon: MousePointerClick,
  },
  {
    title: "Conversion",
    description:
      "Track primary leads, purchases or other valuable actions and validate whether the events fire accurately.",
    icon: Target,
  },
  {
    title: "Business quality",
    description:
      "Connect campaign conversions with qualified leads, customers, order value, revenue and available downstream feedback.",
    icon: BarChart3,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the campaign role and success metric",
    description:
      "We confirm whether Display should build awareness, acquire prospects, support consideration, remarket or generate measurable conversions.",
    timing: "Discovery",
    output: "Display campaign objective and KPI plan",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Research audiences, content and placements",
    description:
      "Audience signals, contextual themes, markets, first-party segments, exclusions and brand-suitability requirements are mapped.",
    timing: "Strategy",
    output: "Targeting and suitability framework",
    icon: Search,
  },
  {
    number: "03",
    title: "Build the creative asset system",
    description:
      "Images, logos, headlines, descriptions, videos and uploaded formats are planned around placements, devices and testing themes.",
    timing: "Creative planning",
    output: "Display creative brief and asset matrix",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Configure campaigns and measurement",
    description:
      "Campaigns, ad groups, audiences, content, optimized targeting, bids, budgets, exclusions, frequency and conversion events are configured.",
    timing: "Setup",
    output: "Launch-ready Display campaigns",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Validate delivery and traffic quality",
    description:
      "Early placements, devices, audiences, frequency, clicks, landing behaviour and conversion signals are reviewed after launch.",
    timing: "Launch phase",
    output: "Display delivery and quality baseline",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Optimise creative, audiences and spend",
    description:
      "Assets, placements, audiences, contextual signals, exclusions, bids and budgets are refined using performance and business-quality evidence.",
    timing: "Ongoing",
    output: "Optimisation report and test backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Reach and frequency",
    description:
      "Understand how broadly the campaign delivers and whether repeated exposure remains appropriate for the objective.",
    metrics: [
      "Reach, impressions and frequency",
      "CPM and budget utilisation",
      "Device and geography delivery",
      "Audience and inventory distribution",
    ],
    icon: Megaphone,
  },
  {
    title: "Audience and placement quality",
    description:
      "Identify which audience signals, websites, apps and content environments generate useful engagement or conversions.",
    metrics: [
      "Audience-segment performance",
      "Placement and app performance",
      "Contextual targeting contribution",
      "Exclusion and suitability actions",
    ],
    icon: Users,
  },
  {
    title: "Creative performance",
    description:
      "Compare asset themes, formats and messages to find combinations that earn attention and support action.",
    metrics: [
      "Asset and ad performance",
      "Responsive versus uploaded formats",
      "Creative fatigue patterns",
      "Refresh and production priorities",
    ],
    icon: Sparkles,
  },
  {
    title: "Conversion and budget decisions",
    description:
      "Connect campaign delivery with direct, assisted and qualified outcomes so spend can be expanded or reduced responsibly.",
    metrics: [
      "Conversions and cost per action",
      "Qualified leads or revenue",
      "Prospecting versus remarketing",
      "Budget and scaling recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Display Ads service?",
    answer:
      "The service can include campaign strategy, audience and contextual planning, responsive display creative, uploaded display ads, placement and content controls, frequency management, conversion tracking, optimisation and reporting.",
  },
  {
    question: "Where can Google Display ads appear?",
    answer:
      "Display campaigns can serve across eligible websites, apps and Google-owned properties supported by the Google Display Network and campaign settings. Actual inventory depends on targeting, exclusions, assets, geography and account eligibility.",
  },
  {
    question: "What are responsive display ads?",
    answer:
      "Responsive display ads use uploaded assets such as images, logos, headlines, descriptions and optional videos. Google automatically combines and adapts eligible assets to fit available ad spaces.",
  },
  {
    question: "Can you use fixed banner designs?",
    answer:
      "Yes. Uploaded display ads can be used when fixed creative control is required and the format meets Google Ads specifications. Responsive ads are usually included to expand inventory coverage.",
  },
  {
    question: "What is optimized targeting?",
    answer:
      "Optimized targeting allows Google to look beyond manually selected audience signals to find additional users likely to meet the campaign goal. The original audiences and keywords act as starting signals rather than strict limits.",
  },
  {
    question: "Can Display Ads target specific websites or apps?",
    answer:
      "Yes. Managed placements can target selected websites, apps, videos or channels where supported. Campaigns can also use audience or contextual targeting that leads to automatic placements.",
  },
  {
    question: "How do you control unsuitable placements?",
    answer:
      "We use placement reporting, placement exclusions, content exclusions, inventory controls and account-level or campaign-level suitability settings according to brand and performance requirements.",
  },
  {
    question: "Can you limit how often someone sees a Display ad?",
    answer:
      "Yes. Frequency caps can limit impressions for an individual user at campaign, ad-group or ad level over a daily, weekly or monthly period, subject to current Google Ads functionality.",
  },
  {
    question: "Are Display Ads useful for lead generation?",
    answer:
      "Display can generate leads, but performance depends on the audience, offer, creative, landing page, bidding and conversion signal. It is also commonly used for awareness, consideration and remarketing support.",
  },
  {
    question: "Do you guarantee a fixed number of impressions or conversions?",
    answer:
      "No responsible Display Ads provider can guarantee fixed business outcomes. Delivery and performance depend on audience size, inventory, competition, budget, creative, tracking and conversion experience. We provide transparent optimisation around agreed goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Display Ads Services",
  serviceType: "Google Display Advertising Management",
  description:
    "Display Ads services covering responsive and uploaded creative, audience and contextual targeting, optimized targeting, placements, exclusions, frequency, conversion tracking and reporting.",
  url: "https://www.brainadz.marketing/services/display-ads",
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
    name: "Display Ads Capabilities",
    itemListElement: CREATIVE_CAPABILITIES.map((capability) => ({
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

export default function DisplayAdsServicesPage() {
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
          src="/performance-marketing/display-ads-hero.jpg"
          alt="Google Display Ads campaign management across websites, apps and devices"
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
            <span className="text-white">Display Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Display Ads Services
          </h1>

          <div className="mt-auto max-w-[860px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Reach, re-engage and convert relevant audiences through stronger visual
              assets, controlled placements and measurable Google Display campaigns.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your Display campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Display Ads page navigation"
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
              Display Ads overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Build visual reach without losing audience and placement control
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Google Display campaigns reach audiences across eligible websites,
                apps and Google-owned properties. BrainADZ connects campaign role,
                creative assets, audience signals, contextual inputs, placements,
                frequency and conversion measurement into one controlled programme.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance is reviewed beyond impressions and clicks. We evaluate
                whether audiences, placements and creative produce useful engagement,
                qualified conversions and a commercially justified level of spend.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your Display opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/display-ads-overview.jpg"
                  alt="Display Ads dashboard showing audience, placement and conversion performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective Display management connects audience intent, placement
                quality, creative response and business outcomes.
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
        id="campaign-roles"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Display campaign roles
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Give every Display campaign one clear job in the customer journey
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Prospecting, remarketing, awareness and conversion support need
              different audiences, creative, frequency and reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {CAMPAIGN_ROLES.map((item) => {
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
        id="creative"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Display creative management
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build flexible assets without losing message quality
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Responsive Display campaigns need varied, high-quality assets, while
              uploaded ads need format coverage and precise production control.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CREATIVE_CAPABILITIES.map((capability) => {
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
                      <li key={point} className="flex items-start gap-3 text-[14px] leading-6 text-black/68">
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
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/display-ads-creative-strategy.jpg"
                alt="Responsive Display Ads creative strategy using images, headlines and logos"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Creative response framework
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Earn attention, explain value and direct the next action
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Display users are usually not actively searching. Creative must
              communicate context quickly and give a credible reason to continue.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CREATIVE_FRAMEWORK.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="targeting"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audience and contextual targeting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Combine audience signals with content and conversion context
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Targeting should reflect the campaign role. Prospecting, remarketing
              and awareness require different levels of automation and control.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {TARGETING_CAPABILITIES.map((capability) => {
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
                      <li key={point} className="flex items-start gap-3 text-[14px] leading-6 text-black/68">
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
        id="placements"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Placement and delivery controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Protect campaign quality across websites, apps and content environments
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Display scale requires ongoing placement review, content suitability and
              frequency management—not a one-time exclusion list.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Review your Display placements
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLACEMENT_CONTROLS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6">
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
                <article key={item.title} className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6">
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
                    Display campaign discipline
                  </p>
                  <h3 className="mt-1 text-[24px] font-semibold">Tactics we do not use</h3>
                </div>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {REJECTED_TACTICS.map((tactic) => (
                  <li key={tactic} className="flex items-start gap-3 rounded-[10px] border border-white/10 bg-white/[0.035] p-4 text-[14px] leading-6 text-white/68">
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
        id="measurement"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/display-ads-measurement.jpg"
                alt="Display Ads measurement across reach, engagement and conversions"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Display measurement
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Separate delivery, engagement and business contribution
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Display can influence awareness and consideration before the final
              conversion. Reporting should preserve attribution context without
              overstating every impression or view-through outcome.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {MEASUREMENT_LAYERS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[14px] border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">{item.description}</p>
                  </article>
                );
              })}
            </div>
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
                Display Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From campaign role to controlled audience and creative growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Objective, targeting, assets, placements, conversion data and budgets
              remain connected through one campaign roadmap.
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
                    <span className="text-[24px] font-medium text-[#E1122B]">{step.number}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold text-black sm:text-[28px]">{step.title}</h3>
                    <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">{step.description}</p>
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
                  Display Ads reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect audience and placement delivery with useful outcomes
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains where ads appeared, who responded, which assets
              contributed and whether campaign spend supports the business goal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/display-ads-reporting-dashboard.jpg"
                  alt="Display Ads reporting dashboard for audiences, placements, creative and conversions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Display reporting should separate reach, audience quality, placement
                performance, creative response and conversion contribution.
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
                        <h3 className="text-[24px] font-semibold leading-tight text-black">{area.title}</h3>
                        <p className="mt-3 text-[14px] leading-7 text-black/58 sm:text-[15px]">{area.description}</p>
                      </div>
                    </div>
                    <ul className="mt-6 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">
                      {area.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-3 text-[14px] leading-6 text-black/68">
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
                Display Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before launching Google Display campaigns
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand responsive assets, placements, optimized targeting,
              frequency, lead generation and campaign measurement.
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