/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Filter,
  Gauge,
  Layers3,
  ListChecks,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PPC Audit Services | Paid Media Account Audit | BrainADZ",
  description:
    "PPC audit services by BrainADZ review account structure, tracking, search terms, audiences, bids, budgets, creative, landing pages and lead quality with a prioritised action plan.",
  alternates: {
    canonical: "/services/ppc-audit-services",
  },
  openGraph: {
    title: "PPC Audit Services | BrainADZ Marketing",
    description:
      "Identify paid media waste, tracking gaps and growth opportunities through a structured PPC account audit and remediation roadmap.",
    type: "website",
    url: "/services/ppc-audit-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Audit Services | BrainADZ Marketing",
    description:
      "Paid search and paid social audit covering structure, tracking, targeting, budget, creative, landing pages and lead quality.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Audit Scope", href: "#audit-scope" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Measurement", href: "#measurement" },
  { label: "Priorities", href: "#priorities" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Find wasted spend",
    description:
      "Identify irrelevant traffic, weak audience controls, inefficient budgets and campaign overlap that reduce paid media efficiency.",
    icon: Filter,
  },
  {
    title: "Validate measurement",
    description:
      "Check whether conversion events, revenue, lead quality and attribution inputs are reliable enough for optimisation.",
    icon: ShieldCheck,
  },
  {
    title: "Prioritise fixes",
    description:
      "Separate critical account risks from medium-term improvements and lower-impact housekeeping.",
    icon: ListChecks,
  },
  {
    title: "Create a growth roadmap",
    description:
      "Translate findings into a practical action plan covering immediate fixes, rebuilds, tests and scaling opportunities.",
    icon: TrendingUp,
  },
];

const AUDIT_SCOPE = [
  {
    number: "01",
    title: "Account structure",
    description:
      "Review campaigns, ad groups, ad sets, naming, segmentation, channel roles and account organisation.",
    focus: "Control and clarity",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Traffic quality",
    description:
      "Assess keywords, search terms, audiences, locations, placements, devices, schedules and exclusions.",
    focus: "Who and what receives spend",
    icon: Search,
  },
  {
    number: "03",
    title: "Conversion system",
    description:
      "Validate primary and secondary actions, tags, values, lead quality and downstream sales feedback.",
    focus: "What success means",
    icon: Target,
  },
  {
    number: "04",
    title: "Commercial efficiency",
    description:
      "Review bids, budgets, CPA, ROAS, revenue quality, lead value and campaign contribution.",
    focus: "Where money creates value",
    icon: BarChart3,
  },
];

const AUDIT_CAPABILITIES = [
  {
    eyebrow: "Account and campaign structure",
    title: "Check whether the account supports control and useful reporting",
    description:
      "We review campaign segmentation, naming, objectives, ad groups, ad sets, product groups, audience separation and budget ownership.",
    points: [
      "Campaign and account hierarchy",
      "Brand, non-brand and remarketing separation",
      "Service, product and geography segmentation",
      "Naming and reporting consistency",
      "Duplicate and overlapping campaign review",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Keywords, queries and audiences",
    title: "Identify where targeting creates irrelevant or low-quality traffic",
    description:
      "Search terms, match types, negative keywords, audience definitions, exclusions, placements and geography are reviewed for relevance.",
    points: [
      "Keyword and search-term quality",
      "Negative-keyword coverage",
      "Audience and exclusion logic",
      "Location, device and schedule patterns",
      "Placement and traffic-source quality",
    ],
    icon: Search,
  },
  {
    eyebrow: "Ads and creative",
    title: "Evaluate message relevance, asset coverage and creative fatigue",
    description:
      "We assess whether ads match intent, communicate differentiation, use suitable formats and provide enough variation for testing.",
    points: [
      "Ad-to-intent relevance",
      "Headline and description coverage",
      "Static, video and placement readiness",
      "Creative fatigue and repetition",
      "Offer, proof and CTA strength",
    ],
    icon: Activity,
  },
  {
    eyebrow: "Bidding and budgets",
    title: "Review whether automation has the right goals and enough data",
    description:
      "Bidding strategies, budget allocation, target settings, learning periods and campaign constraints are checked against conversion quality.",
    points: [
      "Bidding-strategy alignment",
      "Budget utilisation and pacing",
      "CPA, ROAS and value targets",
      "Learning-period change history",
      "Scaling and underfunding risks",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Landing pages and conversion paths",
    title: "Check the post-click experience for message and conversion friction",
    description:
      "Landing pages, forms, calls, booking journeys, mobile UX and ad-to-page continuity are reviewed alongside campaign performance.",
    points: [
      "Message match and page relevance",
      "Mobile and speed concerns",
      "Form fields and validation",
      "Trust, proof and CTA hierarchy",
      "Confirmation and next-step journeys",
    ],
    icon: MousePointerClick,
  },
  {
    eyebrow: "Lead and revenue quality",
    title: "Connect platform conversions with actual business outcomes",
    description:
      "Where data is available, we compare reported conversions with valid leads, opportunities, customers, revenue, refunds and sales feedback.",
    points: [
      "Valid and qualified lead rate",
      "Duplicate, spam and rejection patterns",
      "Opportunity and customer outcomes",
      "Revenue and order-value quality",
      "Offline conversion readiness",
    ],
    icon: Users,
  },
];

const PLATFORM_AREAS = [
  {
    title: "Google Ads audit",
    description:
      "Search, Shopping, Display, YouTube, remarketing, bidding, conversion actions and campaign structure.",
    points: [
      "Search terms and match types",
      "Assets, ads and extensions",
      "Shopping and feed dependencies",
      "Conversion and value settings",
    ],
    icon: Search,
  },
  {
    title: "Meta Ads audit",
    description:
      "Objectives, campaign structure, audiences, creative, placements, Pixel, Conversions API and lead quality.",
    points: [
      "Campaign and ad-set architecture",
      "Advantage+ and audience controls",
      "Creative fatigue and format coverage",
      "Pixel and CAPI diagnostics",
    ],
    icon: Activity,
  },
  {
    title: "LinkedIn Ads audit",
    description:
      "Professional targeting, campaign objectives, Lead Gen Forms, creative, bidding and pipeline quality.",
    points: [
      "Job, company and audience filters",
      "Form and landing-page journeys",
      "Lead quality and sales acceptance",
      "Cost and pipeline contribution",
    ],
    icon: Users,
  },
  {
    title: "Cross-channel audit",
    description:
      "Budget allocation, duplication, remarketing overlap, attribution, naming and total business contribution.",
    points: [
      "Channel role and budget mix",
      "Audience and conversion overlap",
      "Attribution and reporting consistency",
      "Cross-channel growth opportunities",
    ],
    icon: Workflow,
  },
];

const MEASUREMENT_LAYERS = [
  {
    title: "Conversion definitions",
    description:
      "Confirm which actions are primary, which are diagnostic and which should not guide bidding.",
    icon: Target,
  },
  {
    title: "Tag and event validation",
    description:
      "Check whether forms, calls, purchases, values and key website events fire accurately and consistently.",
    icon: FileCheck2,
  },
  {
    title: "Lead and revenue feedback",
    description:
      "Review CRM, sales and ecommerce data that can distinguish useful outcomes from weak platform conversions.",
    icon: Users,
  },
  {
    title: "Attribution context",
    description:
      "Compare platform reporting, analytics and downstream systems without assuming one source is complete business truth.",
    icon: BarChart3,
  },
];

const PRIORITY_LEVELS = [
  {
    title: "Critical",
    description:
      "Issues that invalidate reporting, waste substantial spend or expose the account to immediate performance risk.",
    examples: [
      "Broken or duplicated conversion tracking",
      "Major irrelevant traffic or location errors",
      "Incorrect revenue values",
      "Campaigns optimising toward weak events",
    ],
    icon: CircleAlert,
  },
  {
    title: "High impact",
    description:
      "Changes likely to improve efficiency, lead quality or revenue performance after critical risks are corrected.",
    examples: [
      "Campaign or audience restructuring",
      "Search-term and negative-keyword expansion",
      "Budget reallocation",
      "Landing-page and form improvements",
    ],
    icon: TrendingUp,
  },
  {
    title: "Testing opportunity",
    description:
      "Structured experiments that can improve growth once the account and measurement system are stable.",
    examples: [
      "New creative concepts",
      "Bidding and target tests",
      "Offer and landing-page experiments",
      "Channel or audience expansion",
    ],
    icon: Activity,
  },
  {
    title: "Maintenance",
    description:
      "Lower-impact hygiene and governance tasks that protect long-term account quality.",
    examples: [
      "Naming and label cleanup",
      "Documentation and access review",
      "Asset refresh schedules",
      "Routine exclusion maintenance",
    ],
    icon: Settings2,
  },
];

const DELIVERABLES = [
  {
    title: "Executive summary",
    description:
      "A concise explanation of current account health, major risks, growth constraints and the highest-value actions.",
    icon: ClipboardCheck,
  },
  {
    title: "Detailed findings",
    description:
      "Evidence-backed observations covering campaigns, traffic, conversions, creative, budgets, landing pages and lead quality.",
    icon: FileSearch,
  },
  {
    title: "Prioritised roadmap",
    description:
      "Actions organised by urgency, expected impact, implementation effort, ownership and dependency.",
    icon: ListChecks,
  },
  {
    title: "Measurement plan",
    description:
      "Recommended conversion definitions, tag corrections, CRM feedback and reporting improvements.",
    icon: BarChart3,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Evidence before opinion",
    text: "Every major recommendation is tied to account data, configuration, tracking evidence or a clearly stated hypothesis.",
  },
  {
    title: "Business context",
    text: "Findings are interpreted using margins, lead value, sales process, geography, stock and operational constraints.",
  },
  {
    title: "Actionable ownership",
    text: "Recommendations identify whether media, analytics, development, creative, CRM or sales teams need to act.",
  },
  {
    title: "No automatic rebuild",
    text: "We do not recommend rebuilding an account unless the expected benefit clearly outweighs disruption and lost learning.",
  },
];

const REJECTED_TACTICS = [
  "Judging accounts only by click-through rate",
  "Recommending more spend before tracking is reliable",
  "Treating every platform recommendation as automatically correct",
  "Ignoring sales quality and offline outcomes",
  "Calling normal learning-period volatility a critical problem",
  "Rebuilding campaigns without preserving useful history",
  "Using generic checklists without account evidence",
  "Presenting findings without clear priority or ownership",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Confirm goals, access and business context",
    description:
      "We define the audit scope, platforms, commercial targets, lead or revenue model, reporting period and required account access.",
    timing: "Discovery",
    output: "Audit scope and access checklist",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Validate conversion and analytics foundations",
    description:
      "Primary actions, tags, values, attribution settings, CRM feedback and data consistency are reviewed before performance conclusions.",
    timing: "Measurement review",
    output: "Tracking and data-quality findings",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Audit campaigns, targeting and spend",
    description:
      "Structure, queries, audiences, placements, ads, bidding, budgets, locations, devices and schedules are analysed.",
    timing: "Account analysis",
    output: "Campaign and traffic audit",
    icon: Search,
  },
  {
    number: "04",
    title: "Review creative and landing experiences",
    description:
      "Ads, assets, message match, page UX, forms and conversion journeys are checked for relevance and friction.",
    timing: "Experience review",
    output: "Creative and landing-page findings",
    icon: MousePointerClick,
  },
  {
    number: "05",
    title: "Prioritise risks and opportunities",
    description:
      "Findings are ranked by urgency, evidence, expected impact, implementation effort and dependency.",
    timing: "Prioritisation",
    output: "PPC remediation roadmap",
    icon: ListChecks,
  },
  {
    number: "06",
    title: "Present findings and implementation sequence",
    description:
      "We explain the evidence, recommended order of work, ownership and the measurements needed to confirm improvement.",
    timing: "Handover",
    output: "Audit report and action briefing",
    icon: Workflow,
  },
];

const FAQS = [
  {
    question: "What is included in a PPC audit?",
    answer:
      "A PPC audit can include account structure, keywords, search terms, audiences, locations, placements, ads, creative, bidding, budgets, conversion tracking, landing pages, lead quality, revenue quality and reporting. The exact scope depends on the platforms and business model.",
  },
  {
    question: "Which platforms can you audit?",
    answer:
      "We can audit Google Ads, Meta Ads, LinkedIn Ads and cross-channel paid media programmes. Platform coverage is confirmed before the audit begins.",
  },
  {
    question: "Do you make changes during the audit?",
    answer:
      "The standard audit focuses on analysis and recommendations. Critical changes can be implemented separately when requested and when account access, ownership and risk are clear.",
  },
  {
    question: "How much historical data is needed?",
    answer:
      "The useful period depends on spend, conversion volume, seasonality and recent account changes. We generally review enough history to identify stable patterns while separating unusual promotional or migration periods.",
  },
  {
    question: "Will you audit conversion tracking?",
    answer:
      "Yes. Conversion definitions, tags, values, duplicate events, primary and secondary actions, CRM feedback and reporting consistency are central parts of the audit.",
  },
  {
    question: "Can you audit lead quality?",
    answer:
      "Yes, when lead or CRM data is available. We can compare platform conversions with valid, qualified, disqualified, opportunity and customer outcomes.",
  },
  {
    question: "Do you provide a written action plan?",
    answer:
      "Yes. Findings are prioritised by urgency, expected impact, implementation effort and ownership so the business can act in a practical sequence.",
  },
  {
    question: "Does every PPC account need to be rebuilt?",
    answer:
      "No. Many accounts can improve through targeted corrections. A rebuild is recommended only when the existing structure prevents control, measurement or responsible optimisation.",
  },
  {
    question: "Can the audit include landing pages?",
    answer:
      "Yes. We can review message match, mobile UX, forms, trust, conversion friction and tracking on the pages used by paid campaigns.",
  },
  {
    question: "Does a PPC audit guarantee better performance?",
    answer:
      "No audit can guarantee a fixed result. It identifies evidence-based risks and opportunities. Improvement still depends on implementation quality, market conditions, budget, offer, creative, tracking and sales or ecommerce operations.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPC Audit Services",
  serviceType: "Paid Media Account Audit",
  description:
    "PPC audit services covering account structure, traffic quality, conversion tracking, bidding, budgets, creative, landing pages, lead quality and prioritised remediation.",
  url: "https://www.brainadz.marketing/services/ppc-audit-services",
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
    name: "PPC Audit Capabilities",
    itemListElement: AUDIT_CAPABILITIES.map((capability) => ({
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

export default function PpcAuditServicesPage() {
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
          src="/performance-marketing/ppc-audit-services-hero.jpg"
          alt="PPC account audit across campaigns, tracking, budgets and conversions"
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
            <span className="text-white">PPC Audit Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            PPC Audit Services
          </h1>

          <div className="mt-auto max-w-[860px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Identify tracking gaps, wasted spend and growth constraints through a
              structured paid media audit with a prioritised implementation roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a PPC audit
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="PPC audit page navigation"
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
              PPC audit overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Understand what is limiting paid media performance before spending more
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                A PPC audit examines how campaigns are structured, measured and
                optimised. BrainADZ reviews the complete paid media system—from traffic
                quality and bidding to landing pages, lead quality and revenue feedback.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Findings are prioritised by urgency, expected impact and implementation
                effort so teams know which problems require immediate correction and
                which opportunities belong in a longer growth roadmap.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Audit your paid media system
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/ppc-audit-overview.jpg"
                  alt="PPC audit dashboard showing campaign health, tracking and spend"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                A reliable PPC audit connects account settings, performance evidence
                and business-quality outcomes.
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
        id="audit-scope"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audit scope
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Review the account from configuration to commercial outcome
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Strong audits do not isolate platform settings from traffic quality,
              conversion accuracy and business value.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {AUDIT_SCOPE.map((item) => {
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
        id="capabilities"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  PPC audit capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Examine every control that influences paid media efficiency
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Campaign settings, creative, landing pages and business feedback are
              analysed together so recommendations remain practical.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {AUDIT_CAPABILITIES.map((capability) => {
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
                  Platform coverage
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Audit individual platforms and the way they work together
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Cross-channel accounts need consistent conversion definitions, budget
              roles and audience controls.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PLATFORM_AREAS.map((platform) => {
              const Icon = platform.icon;
              return (
                <article
                  key={platform.title}
                  className="flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight text-black">
                    {platform.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {platform.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {platform.points.map((point) => (
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
        id="measurement"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/ppc-audit-measurement.jpg"
                alt="PPC conversion tracking and attribution audit"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Measurement audit
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Validate the data before trusting automated optimisation
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Incorrect events, duplicated conversions and weak lead definitions can
              make inefficient campaigns appear successful.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {MEASUREMENT_LAYERS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[14px] border border-black/10 bg-white p-5">
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
        id="priorities"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audit priorities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Separate urgent risks from growth tests and maintenance
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A useful audit tells teams what to fix first, what to test next and what
              can wait.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRIORITY_LEVELS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold text-black">{item.title}</h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">{item.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {item.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-[14px] leading-6 text-black/68">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                        <span>{example}</span>
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
        id="deliverables"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Audit deliverables
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Give every finding evidence, priority and ownership
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The audit is designed to support implementation, not simply document
              problems.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Discuss your audit scope
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DELIVERABLES.map((item) => {
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
                    Audit discipline
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
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                PPC audit process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From account access to an implementation-ready roadmap
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Measurement, campaign analysis, experience review and prioritisation
              remain connected through one audit method.
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
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                PPC Audit FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before auditing paid media
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand scope, platforms, tracking, history, deliverables and
              implementation before starting.
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