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
  ImageIcon,
  Layers3,
  Megaphone,
  MousePointerClick,
  Play,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads Services | Facebook & Instagram Advertising | BrainADZ",
  description:
    "Meta Ads services by BrainADZ cover Facebook and Instagram campaign strategy, creative testing, audience planning, Pixel and Conversions API measurement, lead quality and ongoing optimisation.",
  alternates: {
    canonical: "/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Services | BrainADZ Marketing",
    description:
      "Build measurable Facebook and Instagram advertising campaigns with objective-led strategy, creative testing, reliable tracking and continuous optimisation.",
    type: "website",
    url: "/services/meta-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Services | BrainADZ Marketing",
    description:
      "Facebook and Instagram ad strategy, creative testing, audience automation, conversion tracking and performance reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Objectives", href: "#objectives" },
  { label: "Campaign Setup", href: "#campaign-setup" },
  { label: "Creative", href: "#creative" },
  { label: "Tracking", href: "#tracking" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Create and capture demand",
    description:
      "Reach people before they search, build interest and guide relevant audiences toward measurable actions.",
    icon: Megaphone,
  },
  {
    title: "Use creative as a targeting signal",
    description:
      "Test messages, formats, hooks and proof so the platform learns which combinations generate the strongest response.",
    icon: Sparkles,
  },
  {
    title: "Strengthen measurement",
    description:
      "Connect Meta Pixel, Conversions API, CRM and conversion events to improve reporting and optimisation quality.",
    icon: BarChart3,
  },
  {
    title: "Scale proven performance",
    description:
      "Expand budgets, audiences and creative only after the campaign demonstrates reliable conversion and business-quality signals.",
    icon: TrendingUp,
  },
];

const OBJECTIVE_MODELS = [
  {
    number: "01",
    title: "Awareness",
    description:
      "Build reach, recall and video exposure when the business needs more relevant people to discover the brand or offer.",
    focus: "Reach and attention",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Traffic and engagement",
    description:
      "Generate website visits, messages, video views, post engagement or other meaningful interactions aligned with the campaign goal.",
    focus: "Interest and interaction",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Leads",
    description:
      "Collect enquiries through website forms, instant forms, messaging or calls using the conversion location suited to the customer journey.",
    focus: "Prospect acquisition",
    icon: Users,
  },
  {
    number: "04",
    title: "Sales",
    description:
      "Optimise toward purchases, high-value website actions, catalogue sales or measurable revenue outcomes.",
    focus: "Conversion and value",
    icon: ShoppingBag,
  },
];

const CAMPAIGN_CAPABILITIES = [
  {
    eyebrow: "Objective and funnel strategy",
    title: "Choose the objective that matches the real business outcome",
    description:
      "We align the campaign objective, conversion location, performance goal and measurement plan with the user journey instead of using one setup for every offer.",
    points: [
      "Awareness, engagement, leads and sales planning",
      "Website, instant form, message and call journeys",
      "Prospecting and remarketing separation",
      "Primary and supporting campaign roles",
      "Campaign goal and KPI definition",
    ],
    icon: Target,
  },
  {
    eyebrow: "Campaign and ad-set structure",
    title: "Build a structure that supports learning without losing control",
    description:
      "Campaigns, ad sets and ads are organised around objectives, markets, offers, audiences, creative themes and conversion events.",
    points: [
      "Account and naming conventions",
      "Campaign budget and ad-set budget planning",
      "Geography and language controls",
      "Offer and funnel segmentation",
      "Audience overlap and exclusion planning",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Audience strategy",
    title: "Combine customer knowledge with platform automation",
    description:
      "Audience controls, suggestions, custom audiences and lookalikes are used where relevant while allowing broader delivery when the optimisation signal is strong.",
    points: [
      "Broad and Advantage+ audience planning",
      "Custom and lookalike audience use",
      "Customer and website visitor exclusions",
      "Location, age and language controls",
      "Audience expansion and overlap review",
    ],
    icon: Users,
  },
  {
    eyebrow: "Placements and delivery",
    title: "Adapt creative for the placements where delivery occurs",
    description:
      "Advantage+ placements can expand delivery across Meta surfaces, while manual controls are used only when format, compliance or business constraints require them.",
    points: [
      "Feed, Stories and Reels readiness",
      "Facebook and Instagram placement coverage",
      "Creative-safe placement adaptation",
      "Placement-level performance review",
      "Manual restrictions where justified",
    ],
    icon: Settings2,
  },
  {
    eyebrow: "Budget and bidding",
    title: "Manage spend around learning, conversion volume and value",
    description:
      "Budgets and bidding are aligned with the selected objective, event volume, audience size, creative supply and campaign maturity.",
    points: [
      "Campaign and ad-set budget strategy",
      "Cost, volume and value optimisation goals",
      "Learning-period change discipline",
      "Scaling and reduction thresholds",
      "Spend pacing and delivery monitoring",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Lead and sales quality",
    title: "Optimise beyond the cheapest platform result",
    description:
      "We review form quality, CRM stages, purchases, revenue and downstream outcomes so low-cost but poor-quality conversions do not guide the account.",
    points: [
      "Qualified lead and sales definitions",
      "CRM and offline event feedback",
      "Spam and duplicate lead review",
      "Revenue and conversion-value signals",
      "Campaign quality by offer and audience",
    ],
    icon: BarChart3,
  },
];

const CREATIVE_FORMATS = [
  {
    title: "Static image ads",
    description:
      "Clear visual hierarchy, one strong message and placement-ready sizing for feed, Story and vertical environments.",
    icon: ImageIcon,
  },
  {
    title: "Short-form video",
    description:
      "Fast hooks, product or problem clarity, subtitles and visual pacing designed for mobile-first viewing.",
    icon: Video,
  },
  {
    title: "Reels and Stories",
    description:
      "Vertical creative with safe zones, direct movement, native framing and clear calls to action.",
    icon: Play,
  },
  {
    title: "Carousel and catalogue",
    description:
      "Multiple products, features, proof points or steps organised into a clear sequence or dynamic product experience.",
    icon: ShoppingBag,
  },
];

const CREATIVE_TESTING_LAYERS = [
  {
    title: "Hook",
    description:
      "The first visual or line communicates the problem, desire, offer or unexpected idea quickly enough to earn attention.",
  },
  {
    title: "Message",
    description:
      "The ad explains the value, differentiation and relevance for the intended audience without overcrowding the creative.",
  },
  {
    title: "Proof",
    description:
      "Product demonstration, testimonials, results, credentials, examples or process visibility reduce uncertainty.",
  },
  {
    title: "Action",
    description:
      "The creative and destination make the next step obvious, realistic and consistent with the campaign objective.",
  },
];

const TRACKING_LAYERS = [
  {
    title: "Meta Pixel events",
    description:
      "Browser events help measure website actions and support optimisation when event definitions and implementation are correct.",
    icon: MousePointerClick,
  },
  {
    title: "Conversions API",
    description:
      "Server, platform or CRM events can create a more direct connection between business data and Meta’s measurement systems.",
    icon: Workflow,
  },
  {
    title: "Lead and CRM outcomes",
    description:
      "Qualified lead, opportunity, booking, sale and revenue feedback improve the understanding of downstream performance.",
    icon: Users,
  },
  {
    title: "Event quality controls",
    description:
      "Deduplication, event priority, parameters and diagnostics are reviewed so reporting does not overcount or misclassify results.",
    icon: ShieldCheck,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Objective alignment",
    text: "The campaign objective, conversion location and performance goal must match the action the business actually values.",
  },
  {
    title: "Creative supply",
    text: "Campaigns need enough differentiated creative concepts to support testing without flooding the account with minor variations.",
  },
  {
    title: "Measurement reliability",
    text: "Pixel, Conversions API, CRM and website events are checked before platform-reported results are treated as business truth.",
  },
  {
    title: "Learning stability",
    text: "Budgets, audiences and ads are not repeatedly changed before enough delivery and conversion evidence is available.",
  },
];

const REJECTED_TACTICS = [
  "Running campaigns without a defined business objective",
  "Judging performance only by reach, clicks or cheap leads",
  "Using one creative concept for every audience and placement",
  "Changing budgets and audiences every day without evidence",
  "Treating all instant-form submissions as qualified leads",
  "Ignoring Pixel, Conversions API and event diagnostics",
  "Retargeting recent purchasers or converted leads unnecessarily",
  "Scaling spend before creative and conversion quality are stable",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the offer, audience and business outcome",
    description:
      "We confirm the product or service, market, customer journey, conversion value, budget expectations and the outcome campaigns should optimise toward.",
    timing: "Discovery",
    output: "Campaign objective and KPI plan",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Plan audiences, funnel and creative angles",
    description:
      "Prospecting, warm audiences, exclusions, message themes, offers, proof and destination requirements are mapped before campaign build.",
    timing: "Strategy",
    output: "Audience and creative brief",
    icon: Target,
  },
  {
    number: "03",
    title: "Build campaigns and measurement",
    description:
      "Campaigns, ad sets, ads, placements, budgets, Pixel events, Conversions API inputs and conversion definitions are configured.",
    timing: "Setup",
    output: "Launch-ready Meta Ads account",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Produce and quality-check creative",
    description:
      "Static, video, Story, Reels and carousel assets are reviewed for format, message, safe zones, destination continuity and policy readiness.",
    timing: "Creative production",
    output: "Placement-ready creative set",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Launch and stabilise delivery",
    description:
      "Early delivery, event activity, comments, lead quality, placements and creative response are monitored without unnecessary changes.",
    timing: "Launch phase",
    output: "Stable performance baseline",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Test, optimise and scale",
    description:
      "Creative, offers, audiences, budgets, placements and landing experiences are refined using conversion and business-quality evidence.",
    timing: "Ongoing",
    output: "Optimisation report and test backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Delivery and audience response",
    description:
      "Review whether campaigns reach enough relevant people and how audiences respond across placements and devices.",
    metrics: [
      "Reach, frequency and impressions",
      "CPM and placement delivery",
      "Click-through and landing-page views",
      "Audience and geography patterns",
    ],
    icon: Megaphone,
  },
  {
    title: "Creative performance",
    description:
      "Compare creative concepts, formats, hooks and messages to identify what earns attention and drives action.",
    metrics: [
      "Creative-level spend and results",
      "Video hold and completion signals",
      "Hook, format and message patterns",
      "Fatigue and refresh priorities",
    ],
    icon: Sparkles,
  },
  {
    title: "Conversion and lead quality",
    description:
      "Separate platform results from qualified business outcomes and identify where quality changes across campaigns.",
    metrics: [
      "Conversions and cost per result",
      "Qualified versus invalid leads",
      "Purchase and revenue outcomes",
      "CRM stage and conversion feedback",
    ],
    icon: Users,
  },
  {
    title: "Budget and scaling decisions",
    description:
      "Show where spend should be protected, reduced, expanded or redirected based on reliable performance evidence.",
    metrics: [
      "Spend and budget utilisation",
      "CPA, ROAS and conversion value",
      "Campaign and offer contribution",
      "Scaling and testing recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Meta Ads service?",
    answer:
      "The service can include campaign strategy, objective selection, audience planning, creative briefs, Facebook and Instagram ad setup, Pixel and Conversions API measurement, lead or sales quality review, ongoing optimisation and reporting. The final scope depends on the campaign goal and available creative and tracking infrastructure.",
  },
  {
    question: "Which Meta Ads objectives do you manage?",
    answer:
      "We can manage awareness, traffic, engagement, leads and sales campaigns. The selected objective, conversion location and performance goal are matched with the business outcome instead of choosing an objective only because it produces a low platform cost.",
  },
  {
    question: "Do Meta Ads include both Facebook and Instagram?",
    answer:
      "Yes. Campaigns can deliver across eligible Meta placements including Facebook and Instagram. Creative is prepared for the placements and formats most relevant to the campaign, such as feeds, Stories and Reels.",
  },
  {
    question: "Do you create Meta ad creatives?",
    answer:
      "The service can include creative strategy, copy, static designs, short-form video briefs and placement adaptations. The production scope is agreed according to the number of concepts, formats and monthly testing requirements.",
  },
  {
    question: "What is Advantage+ audience?",
    answer:
      "Advantage+ audience uses Meta’s automation to find people likely to achieve the campaign goal while allowing important controls such as location, minimum age, language and exclusions. Audience suggestions can guide the system without always restricting delivery to a narrow targeting definition.",
  },
  {
    question: "What are Advantage+ placements?",
    answer:
      "Advantage+ placements allow Meta to distribute ads across eligible placements where the system expects efficient results. Manual placement restrictions may still be used when creative, compliance or business requirements justify them.",
  },
  {
    question: "Do you set up Meta Pixel and Conversions API?",
    answer:
      "Yes. We can review or implement Pixel events and plan Conversions API integration using a website platform, partner integration, server setup or CRM connection where technically and legally appropriate.",
  },
  {
    question: "Can Meta Ads generate qualified leads?",
    answer:
      "Meta can generate leads through website forms, instant forms, messages and calls. Lead quality depends on the offer, audience, creative, questions, destination and follow-up process. We use qualification and CRM feedback where possible instead of optimising only for the lowest cost per form.",
  },
  {
    question: "How quickly do Meta Ads show results?",
    answer:
      "Campaigns can begin delivering soon after approval, but reliable performance requires enough reach, creative variation and conversion data. Early results depend on the objective, audience size, budget, offer, tracking and creative quality.",
  },
  {
    question: "Do you guarantee a fixed number of leads or sales?",
    answer:
      "No responsible advertiser can guarantee fixed results because performance depends on market demand, creative, budget, competition, website or form experience, tracking and sales follow-up. We provide transparent management, testing and reporting around agreed business goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads Services",
  serviceType: "Facebook and Instagram Advertising Management",
  description:
    "Meta Ads services covering campaign objectives, audience strategy, creative testing, Facebook and Instagram placements, Pixel, Conversions API, optimisation and reporting.",
  url: "https://www.brainadz.marketing/services/meta-ads",
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
    name: "Meta Ads Capabilities",
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

export default function MetaAdsServicesPage() {
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
          src="/performance-marketing/meta-ads-hero.jpg"
          alt="Meta Ads campaign management across Facebook and Instagram"
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
            <span className="text-white">Meta Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Meta Ads Services
          </h1>

          <div className="mt-auto max-w-[830px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build measurable Facebook and Instagram campaigns through objective-led
              strategy, stronger creative, reliable data and disciplined optimisation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your Meta Ads campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Meta Ads page navigation"
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
              Meta Ads overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn audience attention into measurable business action
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Meta Ads help brands create demand, build interest and generate
                measurable actions across Facebook and Instagram. BrainADZ connects
                campaign objectives, audience strategy, creative, destinations and
                conversion data into one performance system.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Results are evaluated beyond platform activity. We review whether
                creative earns attention, whether conversion events are reliable and
                whether the resulting leads or sales create real business value.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your Meta Ads opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/meta-ads-overview.jpg"
                  alt="Meta Ads Manager dashboard for Facebook and Instagram campaigns"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Meta Ads performance depends on objective, creative, audience,
                measurement and downstream conversion quality.
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
                  Campaign objectives
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Select the objective that matches the action the business values
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              The objective tells the delivery system what type of result to pursue.
              Campaigns should not optimise for traffic when the actual goal is a
              qualified lead or completed purchase.
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

      {/* Campaign setup */}
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
                  Meta campaign management
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build campaigns around objectives, creative and reliable conversion signals
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Audience and automation decisions are strongest when the campaign has a
              clear outcome, enough creative variety and trustworthy measurement.
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
                  Creative strategy
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Test different reasons for the audience to stop, trust and act
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Creative is not decoration around targeting. It communicates who the
              offer is for and gives the delivery system strong response signals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CREATIVE_FORMATS.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {format.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {format.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-[18px] border border-black/10 bg-[#fbfbfb]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <figure className="relative min-h-[320px] lg:min-h-[500px]">
                <img
                  src="/performance-marketing/meta-ads-creative-testing.jpg"
                  alt="Meta Ads creative testing across image, video, Stories and Reels"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </figure>

              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Creative testing framework
                </p>
                <h3 className="mt-4 max-w-[720px] text-[31px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[40px]">
                  Test meaningful concepts instead of minor design changes
                </h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {CREATIVE_TESTING_LAYERS.map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-[13px] border border-black/10 bg-white p-5"
                    >
                      <span className="text-[13px] font-semibold text-[#E1122B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-4 text-[18px] font-semibold text-black">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-6 text-black/58">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
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
                src="/performance-marketing/meta-ads-conversion-tracking.jpg"
                alt="Meta Pixel, Conversions API and CRM conversion tracking"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Measurement and data
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Connect platform delivery with reliable business events
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Pixel and Conversions API data can strengthen optimisation and
              measurement, but event definitions, deduplication and downstream
              outcomes must remain accurate.
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

      {/* Optimisation */}
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
              Scale campaigns after the signal and creative are strong enough
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Meta automation can improve delivery, but it still depends on the
              objective, data, creative and business feedback supplied to the system.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your Meta Ads account
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
                Meta Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From campaign objective to creative-led performance growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strategy, creative, measurement, delivery and optimisation remain
              connected through one campaign roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start your Meta campaign plan
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
                  Meta Ads reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect delivery and creative performance with real conversion quality
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains what the platform delivered, how audiences responded
              and whether the resulting business outcomes justify the spend.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/meta-ads-reporting-dashboard.jpg"
                  alt="Meta Ads reporting dashboard for campaigns, creative, leads and sales"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Meta Ads reporting should connect audience delivery and creative
                response with qualified leads, sales and scaling decisions.
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
                Meta Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before advertising on Facebook and Instagram
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand objectives, creative, Advantage+ automation, Pixel,
              Conversions API, lead quality and campaign timelines before starting.
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