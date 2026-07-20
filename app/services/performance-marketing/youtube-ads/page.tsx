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
  Gauge,
  Layers3,
  Megaphone,
  MonitorPlay,
  MousePointerClick,
  Play,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Tv,
  Users,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube Ads Services | Video Advertising Management | BrainADZ",
  description:
    "YouTube Ads services by BrainADZ cover video campaign strategy, in-stream, in-feed, bumper and Shorts ads, audience planning, creative testing, conversion tracking and reporting.",
  alternates: {
    canonical: "/services/youtube-ads",
  },
  openGraph: {
    title: "YouTube Ads Services | BrainADZ Marketing",
    description:
      "Build measurable YouTube advertising campaigns across in-stream, in-feed, bumper and Shorts formats with stronger creative and conversion tracking.",
    type: "website",
    url: "/services/youtube-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Ads Services | BrainADZ Marketing",
    description:
      "YouTube video campaign strategy, creative testing, audience planning, conversion measurement and performance reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Objectives", href: "#objectives" },
  { label: "Ad Formats", href: "#ad-formats" },
  { label: "Creative", href: "#creative" },
  { label: "Targeting", href: "#targeting" },
  { label: "Tracking", href: "#tracking" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Build visual awareness",
    description:
      "Use sight, sound, motion and product demonstration to make the brand easier to recognise and remember.",
    icon: Eye,
  },
  {
    title: "Reach relevant viewers",
    description:
      "Combine audience, content, demographic and first-party signals with objective-led video campaign delivery.",
    icon: Users,
  },
  {
    title: "Create deeper consideration",
    description:
      "Use long-form, in-feed and sequenced video messages to explain products, services and buying reasons more clearly.",
    icon: Video,
  },
  {
    title: "Drive measurable action",
    description:
      "Connect YouTube activity with website conversions, leads, purchases and downstream business outcomes.",
    icon: BarChart3,
  },
];

const OBJECTIVE_MODELS = [
  {
    number: "01",
    title: "Reach",
    description:
      "Maximise relevant exposure using formats and bidding designed to reach more unique viewers within the available budget.",
    focus: "Awareness at scale",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Views and engagement",
    description:
      "Increase meaningful video consumption and interaction among people likely to consider the brand or offer.",
    focus: "Attention and consideration",
    icon: Play,
  },
  {
    number: "03",
    title: "Website action",
    description:
      "Use video campaigns and eligible Google campaign types to encourage visits, enquiries, sign-ups or other website actions.",
    focus: "Traffic and conversion",
    icon: MousePointerClick,
  },
  {
    number: "04",
    title: "Sales and revenue",
    description:
      "Optimise toward purchases, valuable conversion events or revenue signals when measurement quality and conversion volume are sufficient.",
    focus: "Commercial outcomes",
    icon: TrendingUp,
  },
];

const AD_FORMATS = [
  {
    eyebrow: "Skippable in-stream ads",
    title: "Earn attention before the viewer chooses whether to continue",
    description:
      "Skippable in-stream ads appear around video content and allow the viewer to skip after the opening seconds, making the hook and early value proposition critical.",
    points: [
      "Strong opening five seconds",
      "Product, problem or offer clarity",
      "Branding before likely skip points",
      "Clear visual and spoken CTA",
      "Horizontal and vertical asset planning",
    ],
    icon: MonitorPlay,
  },
  {
    eyebrow: "Non-skippable in-stream ads",
    title: "Deliver one concise message without a skip option",
    description:
      "Non-skippable formats are suited to controlled reach and complete-message delivery when the concept can communicate value within a short duration.",
    points: [
      "Single-message creative structure",
      "Tight duration and pacing",
      "Brand and offer memorability",
      "Reach-focused campaign alignment",
      "Frequency and fatigue monitoring",
    ],
    icon: Tv,
  },
  {
    eyebrow: "In-feed video ads",
    title: "Reach viewers while they actively discover content",
    description:
      "In-feed ads use a thumbnail and headline to attract people browsing YouTube Search, Home or related discovery surfaces.",
    points: [
      "High-clarity thumbnail strategy",
      "Search and discovery relevance",
      "Strong headline and description",
      "Long-form content promotion",
      "Channel and watch-page continuity",
    ],
    icon: Search,
  },
  {
    eyebrow: "Bumper ads",
    title: "Reinforce one memorable idea in six seconds",
    description:
      "Bumper ads are short, non-skippable messages that support broad awareness, recall and reinforcement within larger video plans.",
    points: [
      "One idea per six-second asset",
      "Immediate brand recognition",
      "Visual simplicity and contrast",
      "Campaign sequencing support",
      "Reach and frequency controls",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "YouTube Shorts ads",
    title: "Use mobile-first vertical creative inside the Shorts experience",
    description:
      "Shorts ads appear between organic short-form videos and require fast, native-feeling creative that can communicate before the user swipes.",
    points: [
      "Vertical 9:16 creative priority",
      "Immediate visual hook",
      "Sound-on and caption-ready message",
      "Native mobile pacing",
      "Format-level reporting review",
    ],
    icon: Smartphone,
  },
  {
    eyebrow: "Multi-format video campaigns",
    title: "Use different formats to support the same objective",
    description:
      "A complete video campaign can combine in-stream, in-feed and Shorts inventory where the campaign type and assets support that mix.",
    points: [
      "Format-specific creative versions",
      "Shared objective and message hierarchy",
      "Cross-format reach and view planning",
      "Placement and asset performance review",
      "Consistent landing-page journey",
    ],
    icon: Layers3,
  },
];

const CREATIVE_LAYERS = [
  {
    title: "Opening hook",
    description:
      "The first seconds communicate the problem, desire, visual surprise or result clearly enough to prevent immediate loss of attention.",
    icon: Sparkles,
  },
  {
    title: "Brand integration",
    description:
      "The brand appears naturally and early enough to remain memorable even when the viewer skips or watches briefly.",
    icon: Megaphone,
  },
  {
    title: "Value and proof",
    description:
      "Demonstration, examples, social proof, results or process visibility explain why the offer deserves consideration.",
    icon: Eye,
  },
  {
    title: "Next action",
    description:
      "The video, CTA and destination make the next step clear and consistent with the campaign objective.",
    icon: MousePointerClick,
  },
];

const CREATIVE_FORMATS = [
  {
    title: "Product demonstration",
    description:
      "Show how the product works, what changes after use and which details distinguish it from alternatives.",
  },
  {
    title: "Problem and solution",
    description:
      "Make the audience recognise the problem quickly, then position the offer as a practical next step.",
  },
  {
    title: "Customer proof",
    description:
      "Use testimonials, case evidence, outcomes or real-use context to reduce uncertainty and strengthen trust.",
  },
  {
    title: "Founder or expert-led",
    description:
      "Use credible people, expertise and direct explanation to make complex offers easier to understand.",
  },
  {
    title: "Short-form native",
    description:
      "Build vertical, fast-paced creative that feels appropriate inside Shorts while remaining clear and branded.",
  },
  {
    title: "Long-form education",
    description:
      "Use in-feed promotion to bring interested viewers toward deeper demonstrations, explainers, webinars or channel content.",
  },
];

const TARGETING_CAPABILITIES = [
  {
    title: "Audience signals",
    description:
      "Use demographics, interests, life events, custom segments, customer data and remarketing where they support the campaign goal.",
    icon: Users,
  },
  {
    title: "Content context",
    description:
      "Topics, keywords, placements and channel context can support reach or consideration campaigns where content targeting is appropriate.",
    icon: Search,
  },
  {
    title: "First-party audiences",
    description:
      "Website visitors, customer lists, channel engagement and existing converters can support exclusions, remarketing and audience insight.",
    icon: Target,
  },
  {
    title: "Location and language",
    description:
      "Campaign delivery is controlled around the markets, languages and service areas the business can genuinely support.",
    icon: Settings2,
  },
];

const TRACKING_LAYERS = [
  {
    title: "Website conversions",
    description:
      "Google Ads tags and conversion actions measure forms, calls, purchases and other meaningful website outcomes.",
    icon: MousePointerClick,
  },
  {
    title: "View and engagement signals",
    description:
      "TrueView views, watch time, completion, earned actions and interactions help explain how audiences respond to the video.",
    icon: Play,
  },
  {
    title: "Lead and sales feedback",
    description:
      "CRM, offline conversion and revenue information can distinguish real business outcomes from surface-level website actions.",
    icon: Users,
  },
  {
    title: "Format-level measurement",
    description:
      "Campaign and ad-format segmentation helps separate Shorts, in-stream, in-feed and other delivery patterns where reporting supports it.",
    icon: BarChart3,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Objective and format alignment",
    text: "The campaign objective determines which formats, networks, bidding strategies and optimisation signals are appropriate.",
  },
  {
    title: "Creative-to-format fit",
    text: "Horizontal, vertical and short-duration assets are planned intentionally instead of relying on one video to perform everywhere.",
  },
  {
    title: "Measurement readiness",
    text: "Conversion tags, primary actions and downstream business feedback are validated before conversion-led scaling.",
  },
  {
    title: "Audience and frequency control",
    text: "Reach, repetition and creative fatigue are reviewed so awareness does not become wasteful overexposure.",
  },
];

const REJECTED_TACTICS = [
  "Uploading one horizontal video for every YouTube format",
  "Using a slow brand introduction before communicating value",
  "Reporting impressions without reviewing attention or conversion quality",
  "Optimising conversion campaigns with unverified website events",
  "Using narrow targeting without enough delivery or conversion data",
  "Scaling spend before creative and measurement are stable",
  "Ignoring Shorts-specific vertical creative and reporting",
  "Treating every paid video view as equal business value",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the objective and viewer journey",
    description:
      "We confirm the campaign goal, audience, offer, expected action, budget, creative resources and the role video should play in the wider funnel.",
    timing: "Discovery",
    output: "Video campaign objective and KPI plan",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Research audiences and content context",
    description:
      "Audience signals, market demand, competitor activity, channel context and first-party data are reviewed to shape campaign targeting.",
    timing: "Research",
    output: "Audience and targeting framework",
    icon: Search,
  },
  {
    number: "03",
    title: "Build the creative and format plan",
    description:
      "Hooks, scripts, durations, aspect ratios, thumbnails, calls to action and format-specific asset requirements are organised.",
    timing: "Creative planning",
    output: "YouTube creative production brief",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Configure campaigns and measurement",
    description:
      "Objectives, campaign subtypes, formats, bidding, budgets, audiences, conversion actions and destinations are configured and checked.",
    timing: "Campaign setup",
    output: "Launch-ready YouTube campaigns",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Launch and validate delivery",
    description:
      "Early reach, views, watch behaviour, placements, conversion signals, budget pacing and creative response are monitored.",
    timing: "Launch phase",
    output: "Stable delivery baseline",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Optimise creative, audiences and spend",
    description:
      "Formats, videos, audiences, bids, budgets, frequency and destinations are refined using attention and business-outcome evidence.",
    timing: "Ongoing",
    output: "Optimisation report and test backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Reach and delivery",
    description:
      "Understand how broadly campaigns deliver and whether frequency remains appropriate for the objective and audience.",
    metrics: [
      "Impressions, reach and frequency",
      "CPM and budget utilisation",
      "Device and placement patterns",
      "Audience and geography delivery",
    ],
    icon: Megaphone,
  },
  {
    title: "Attention and view quality",
    description:
      "Review how viewers respond after the impression instead of relying on reach alone.",
    metrics: [
      "TrueView views and view rate",
      "Watch time and completion signals",
      "Earned actions and interactions",
      "Format and creative engagement",
    ],
    icon: Play,
  },
  {
    title: "Conversion performance",
    description:
      "Connect YouTube activity with website actions and reliable downstream business outcomes.",
    metrics: [
      "Conversions and conversion rate",
      "Cost per conversion",
      "Qualified leads or purchases",
      "Conversion value and revenue signals",
    ],
    icon: Target,
  },
  {
    title: "Creative and scaling decisions",
    description:
      "Identify which hooks, videos, formats and audience combinations should be refreshed, reduced or expanded.",
    metrics: [
      "Video and asset contribution",
      "Shorts versus other format patterns",
      "Creative fatigue and refresh needs",
      "Budget and campaign recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your YouTube Ads service?",
    answer:
      "The service can include campaign strategy, audience research, ad-format planning, creative briefs, video ad setup, bidding, conversion tracking, optimisation and reporting. The exact scope depends on whether the goal is awareness, views, engagement, website action, leads or sales.",
  },
  {
    question: "Which YouTube ad formats do you manage?",
    answer:
      "We can manage skippable in-stream, non-skippable in-stream, in-feed video, bumper and YouTube Shorts ads, subject to campaign type, objective, account eligibility and available creative assets.",
  },
  {
    question: "What is the difference between in-stream and in-feed ads?",
    answer:
      "In-stream ads play around video content, while in-feed ads appear in YouTube discovery environments such as Search, Home and related browsing surfaces. In-feed ads rely strongly on the thumbnail and headline because the viewer chooses to open the video.",
  },
  {
    question: "Do YouTube Shorts ads need vertical videos?",
    answer:
      "Vertical 9:16 video is strongly recommended for Shorts because it matches the mobile-first full-screen experience. Horizontal and square assets may be supported in some campaign setups, but vertical creative is generally better suited to the format.",
  },
  {
    question: "Do you create YouTube ad videos?",
    answer:
      "The service can include creative strategy, scripts, storyboards, production briefs, editing and format adaptations. The production scope depends on the number of concepts, shoot requirements, animation and monthly testing needs.",
  },
  {
    question: "Can YouTube Ads generate leads and sales?",
    answer:
      "Yes. YouTube campaigns and eligible Google campaign types can optimise toward website conversions when conversion tracking is configured correctly. Performance depends on the offer, audience, creative, landing page, budget and quality of the conversion signal.",
  },
  {
    question: "How long should a YouTube ad be?",
    answer:
      "The right duration depends on format and objective. Bumper ads are six seconds, Shorts creative is usually brief and vertical, while skippable in-stream and in-feed videos can support longer explanations. The message should earn attention quickly regardless of total length.",
  },
  {
    question: "How do you measure YouTube Ads performance?",
    answer:
      "Measurement can include reach, frequency, TrueView views, view rate, watch time, completion, clicks, website conversions, qualified leads, purchases, conversion value and format-level performance.",
  },
  {
    question: "Can YouTube Ads target specific channels or topics?",
    answer:
      "Some reach and consideration campaign types can use content signals such as topics, keywords or placements. Availability and suitability depend on the campaign objective and subtype, and conversion-focused campaign setups may rely more heavily on audience and automated delivery.",
  },
  {
    question: "Do you guarantee a fixed number of views, leads or sales?",
    answer:
      "No responsible video advertising service can guarantee fixed business results. Performance depends on the objective, audience, creative, budget, competition, measurement, website experience and sales process. We provide transparent planning, optimisation and reporting.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "YouTube Ads Services",
  serviceType: "YouTube Video Advertising Management",
  description:
    "YouTube Ads services covering campaign objectives, in-stream, in-feed, bumper and Shorts formats, audience planning, creative testing, conversion tracking, optimisation and reporting.",
  url: "https://www.brainadz.marketing/services/youtube-ads",
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
    name: "YouTube Ads Capabilities",
    itemListElement: AD_FORMATS.map((format) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: format.eyebrow,
        description: format.description,
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

export default function YouTubeAdsServicesPage() {
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
          src="/performance-marketing/youtube-ads-hero.jpg"
          alt="YouTube Ads campaign management across video formats and devices"
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
            <span className="text-white">YouTube Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            YouTube Ads Services
          </h1>

          <div className="mt-auto max-w-[840px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Use video to build awareness, deepen consideration and generate
              measurable action across in-stream, in-feed, bumper and Shorts formats.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your YouTube campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="YouTube Ads page navigation"
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
              YouTube Ads overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn video attention into a structured path toward action
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                YouTube Ads combine reach, storytelling and measurable response across
                multiple video formats. BrainADZ connects the campaign objective,
                audience, creative, format, bidding and destination so the video has a
                clear role in the customer journey.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Performance is reviewed beyond impression and view totals. We examine
                watch behaviour, creative response, website actions and downstream
                business outcomes to guide the next campaign decision.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your video advertising opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/youtube-ads-overview.jpg"
                  alt="YouTube Ads campaign dashboard showing views, audiences and conversions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective YouTube advertising connects attention, creative response
                and measurable business outcomes.
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

      {/* Objectives */}
      <section
        id="objectives"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Video campaign objectives
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Choose the campaign objective before selecting the format
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              The objective influences campaign subtype, bidding, available formats,
              delivery and the metrics that should define success.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {OBJECTIVE_MODELS.map((item) => {
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

      {/* Ad formats */}
      <section
        id="ad-formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  YouTube ad formats
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Match the video format with the campaign goal and viewing environment
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Different formats change how viewers encounter the message, whether they
              can skip and how much creative context is available.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {AD_FORMATS.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {format.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {format.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {format.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {format.points.map((point) => (
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

      {/* Creative */}
      <section
        id="creative"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/youtube-ads-creative-strategy.jpg"
                alt="YouTube Ads creative strategy across horizontal and vertical video"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Video creative strategy
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Communicate value before attention moves elsewhere
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              YouTube creative must work in the first seconds, remain understandable
              with different viewing behaviours and adapt to horizontal and vertical
              environments without losing the central message.
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

      {/* Creative models */}
      <section className="border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative campaign models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build multiple creative reasons to watch and respond
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Strong testing compares different communication ideas, not only minor
              edits to the same script or design.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_FORMATS.map((format, index) => (
              <article
                key={format.title}
                className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
              >
                <span className="text-[13px] font-semibold text-[#E1122B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                  {format.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-black/58">
                  {format.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting */}
      <section
        id="targeting"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audience and targeting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use audience and context signals that support the campaign objective
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Audience strategy changes by objective. Awareness and consideration can
              use broader context, while conversion-led campaigns depend more heavily
              on reliable optimisation signals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TARGETING_CAPABILITIES.map((item) => {
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

      {/* Tracking */}
      <section
        id="tracking"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/youtube-ads-conversion-tracking.jpg"
                alt="YouTube Ads view, watch-time and conversion tracking"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Measurement and conversion tracking
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Measure attention and action without confusing one for the other
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Views and watch behaviour explain attention. Conversion and business
              data explain whether that attention contributed to a valuable outcome.
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

      {/* Quality control */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Campaign quality controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Protect performance with objective, creative and measurement discipline
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Video automation performs best when the campaign goal, assets, audience
              signals and conversion definitions are clear.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your YouTube campaigns
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
                YouTube Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From video objective to measurable campaign improvement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Audience, creative, format, measurement and budget decisions remain
              connected through one campaign roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start your YouTube campaign plan
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
                  YouTube Ads reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect reach and watch behaviour with measurable business outcomes
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains how campaigns delivered, how viewers responded and
              which creative, formats and audiences deserve the next investment.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/youtube-ads-reporting-dashboard.jpg"
                  alt="YouTube Ads reporting dashboard for views, watch time and conversions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                YouTube reporting should separate delivery, attention, conversion
                quality and creative scaling decisions.
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
                YouTube Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before launching YouTube advertising
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand ad formats, Shorts, creative production, targeting,
              conversion tracking and campaign measurement before starting.
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