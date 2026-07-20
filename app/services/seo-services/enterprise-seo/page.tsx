/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  PanelsTopLeft,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise SEO Services | Scalable Organic Growth | BrainADZ",
  description:
    "Enterprise SEO services by BrainADZ help large websites manage technical scale, templates, content governance, internal linking, platform changes and executive reporting.",
  alternates: {
    canonical: "/services/enterprise-seo",
  },
  openGraph: {
    title: "Enterprise SEO Services | BrainADZ Marketing",
    description:
      "Build scalable organic growth systems for large websites, complex platforms, multiple teams and high-value page portfolios.",
    type: "website",
    url: "/services/enterprise-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise SEO Services | BrainADZ Marketing",
    description:
      "Enterprise SEO for technical scale, content governance, templates, migrations, automation and measurable portfolio growth.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Scale", href: "#scale" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Governance", href: "#governance" },
  { label: "Prioritisation", href: "#prioritisation" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const ENTERPRISE_BENEFITS = [
  {
    title: "Scalable SEO control",
    description:
      "Manage crawling, indexing, templates and internal links across large page inventories without relying on page-by-page fixes.",
    icon: Settings2,
  },
  {
    title: "Clear team governance",
    description:
      "Define ownership, standards, approvals and QA across SEO, content, product, engineering and regional teams.",
    icon: Users,
  },
  {
    title: "Higher-impact execution",
    description:
      "Prioritise changes by affected scale, business value, search opportunity, risk and implementation dependency.",
    icon: Target,
  },
  {
    title: "Executive visibility",
    description:
      "Connect portfolio-level organic performance with revenue, leads, product adoption and strategic business priorities.",
    icon: BarChart3,
  },
];

const SCALE_CHALLENGES = [
  {
    number: "01",
    title: "Large URL inventories",
    description:
      "Thousands or millions of product, category, article, location, profile or parameter URLs require clear index-quality rules.",
    focus: "Crawl and index scale",
    icon: Database,
  },
  {
    number: "02",
    title: "Shared templates",
    description:
      "One template decision can improve or damage entire page groups, making technical and content QA critical before release.",
    focus: "Template-level impact",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Multiple stakeholders",
    description:
      "SEO changes depend on product, engineering, design, content, legal, analytics, brand and regional teams with different priorities.",
    focus: "Cross-functional ownership",
    icon: Users,
  },
  {
    number: "04",
    title: "Complex change environments",
    description:
      "Migrations, redesigns, platform releases, acquisitions and international expansion can alter visibility across large portfolios.",
    focus: "Change and release risk",
    icon: GitBranch,
  },
];

const ENTERPRISE_CAPABILITIES = [
  {
    eyebrow: "Technical SEO at scale",
    title: "Control crawling, rendering and indexation across complex platforms",
    description:
      "We create scalable technical rules and monitoring systems for large inventories, dynamic URLs, JavaScript applications and shared templates.",
    points: [
      "Crawl-budget and index-quality management",
      "Robots, canonicals and sitemap governance",
      "JavaScript rendering and hydration review",
      "Parameter, pagination and duplicate controls",
      "Template-level technical QA",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Information architecture",
    title: "Organise large content and product portfolios around demand",
    description:
      "Taxonomy, navigation, hierarchy and internal links are aligned with customer journeys, search demand and commercial page ownership.",
    points: [
      "Taxonomy and hierarchy review",
      "Keyword-to-page portfolio mapping",
      "Crawl depth and orphan-page control",
      "Hub, category and detail-page relationships",
      "Enterprise internal-linking systems",
    ],
    icon: Network,
  },
  {
    eyebrow: "Template optimisation",
    title: "Improve page groups through repeatable template standards",
    description:
      "Metadata, headings, content modules, schema, links and conversion elements are optimised at the template level where scale makes manual editing impractical.",
    points: [
      "Metadata and heading rules",
      "Reusable content-module requirements",
      "Schema and breadcrumb standards",
      "Related-content and linking logic",
      "Template acceptance criteria",
    ],
    icon: PanelsTopLeft,
  },
  {
    eyebrow: "Content governance",
    title: "Coordinate quality across teams, markets and content types",
    description:
      "We establish planning, creation, review, refresh and consolidation standards that keep large content inventories useful and differentiated.",
    points: [
      "Search-intent and content-brief standards",
      "Editorial and subject-matter workflows",
      "Content lifecycle and refresh rules",
      "Duplication and cannibalisation controls",
      "Market and brand consistency guidelines",
    ],
    icon: ClipboardCheck,
  },
  {
    eyebrow: "Platform changes and migrations",
    title: "Protect organic performance during high-risk releases",
    description:
      "SEO requirements are integrated into redesigns, replatforming, domain changes, acquisitions and major routing or architecture updates.",
    points: [
      "Pre-migration inventory and benchmarks",
      "Redirect and URL-mapping governance",
      "Staging and release-readiness review",
      "Launch monitoring and incident response",
      "Post-migration validation and recovery",
    ],
    icon: GitBranch,
  },
  {
    eyebrow: "SEO automation and monitoring",
    title: "Detect enterprise issues before they become portfolio-wide losses",
    description:
      "Repeatable checks, alerts and dashboards help teams identify technical, template and content changes across large page sets.",
    points: [
      "Automated crawl and index monitoring",
      "Template and metadata change detection",
      "Structured-data error tracking",
      "Page-group performance alerts",
      "Prioritised issue dashboards",
    ],
    icon: Activity,
  },
];

const OPERATING_MODELS = [
  {
    title: "Multi-brand organisations",
    description:
      "Create shared SEO standards while preserving distinct product, audience and brand strategies across multiple websites or business units.",
    points: [
      "Portfolio and domain-role definition",
      "Shared standards with brand-level flexibility",
      "Cross-domain duplication controls",
      "Central and brand-level reporting",
    ],
    icon: Building2,
  },
  {
    title: "Marketplaces and large catalogues",
    description:
      "Manage category, listing, profile, product, filter and parameter pages with scalable index and template controls.",
    points: [
      "Taxonomy and faceted-navigation governance",
      "Inventory and thin-page rules",
      "Programmatic template standards",
      "Crawl efficiency and index quality",
    ],
    icon: Boxes,
  },
  {
    title: "Publishers and content platforms",
    description:
      "Coordinate high publishing velocity, archives, topic hubs, evergreen updates and content lifecycle decisions.",
    points: [
      "Topic-cluster and archive architecture",
      "Freshness and consolidation workflows",
      "Author, article and entity standards",
      "Editorial performance segmentation",
    ],
    icon: Layers3,
  },
  {
    title: "Multi-region enterprises",
    description:
      "Align central strategy with regional markets, language variants and local teams without creating uncontrolled duplication.",
    points: [
      "Global and regional ownership models",
      "Market-specific page governance",
      "Shared templates and local content rules",
      "Regional performance accountability",
    ],
    icon: Globe2,
  },
];

const GOVERNANCE_LAYERS = [
  {
    title: "Standards",
    description:
      "Documented rules for templates, metadata, content, schema, redirects, internal links, migrations and quality assurance.",
    icon: ShieldCheck,
  },
  {
    title: "Ownership",
    description:
      "Clear responsibility across SEO, engineering, product, content, analytics, regional teams and executive stakeholders.",
    icon: Users,
  },
  {
    title: "Workflow",
    description:
      "Defined intake, review, approval, implementation, testing and release processes for SEO-impacting changes.",
    icon: Workflow,
  },
  {
    title: "Measurement",
    description:
      "Shared definitions for visibility, traffic, conversions, portfolio health, implementation progress and business contribution.",
    icon: BarChart3,
  },
];

const PRIORITY_FRAMEWORK = [
  {
    number: "01",
    title: "Commercial value",
    description:
      "Prioritise the products, services, markets and page groups most closely connected to revenue, leads or strategic growth.",
    focus: "Business importance",
    icon: Target,
  },
  {
    number: "02",
    title: "Affected scale",
    description:
      "A template issue affecting hundreds of thousands of URLs may deserve attention before a severe issue on one low-value page.",
    focus: "Portfolio reach",
    icon: Database,
  },
  {
    number: "03",
    title: "Search opportunity",
    description:
      "Estimate the visibility, demand and competitive upside available when the issue or opportunity is addressed.",
    focus: "Organic potential",
    icon: Search,
  },
  {
    number: "04",
    title: "Effort and dependency",
    description:
      "Account for engineering capacity, platform constraints, stakeholder approvals, release schedules and operational risk.",
    focus: "Execution reality",
    icon: Gauge,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Align enterprise goals and stakeholders",
    description:
      "We define business priorities, target markets, portfolio structure, decision-makers, implementation teams and current operating constraints.",
    timing: "Discovery",
    output: "Goals, stakeholders and scope map",
    icon: Users,
  },
  {
    number: "02",
    title: "Benchmark technical and portfolio performance",
    description:
      "Large page groups, templates, indexation patterns, traffic segments, conversion paths and competitors are analysed to establish the baseline.",
    timing: "Assessment",
    output: "Enterprise SEO benchmark",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Build the enterprise roadmap",
    description:
      "Opportunities are organised into technical, content, architecture, platform and governance workstreams with impact and dependency scoring.",
    timing: "Strategy",
    output: "Prioritised multi-workstream roadmap",
    icon: Target,
  },
  {
    number: "04",
    title: "Define standards and implementation requirements",
    description:
      "Recommendations are translated into template requirements, content standards, technical tickets, workflow changes and QA criteria.",
    timing: "Enablement",
    output: "Standards and implementation briefs",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Support releases and portfolio execution",
    description:
      "We work with teams through development, content production, staging, launch and validation for high-impact initiatives.",
    timing: "Execution",
    output: "Released and validated improvements",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Monitor, report and reprioritise",
    description:
      "Portfolio health, implementation progress and business outcomes are reviewed so the next roadmap cycle reflects current evidence.",
    timing: "Ongoing",
    output: "Executive report and updated roadmap",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Portfolio visibility",
    description:
      "Track performance across business units, brands, markets, page types and strategic search themes.",
    metrics: [
      "Visibility by page group and market",
      "Non-brand and brand search growth",
      "Winning and declining portfolios",
      "Competitive share-of-search movement",
    ],
    icon: Search,
  },
  {
    title: "Technical and index health",
    description:
      "Monitor large-scale conditions that affect discoverability, rendering, index quality and template performance.",
    metrics: [
      "Submitted versus indexed URLs",
      "Crawl and response-code trends",
      "Canonical and duplication patterns",
      "Template and Core Web Vitals health",
    ],
    icon: Activity,
  },
  {
    title: "Implementation progress",
    description:
      "Show which recommendations are planned, approved, in development, released, validated or blocked.",
    metrics: [
      "Roadmap status by workstream",
      "Released and validated changes",
      "Dependencies and blocked initiatives",
      "Issue age and implementation velocity",
    ],
    icon: Workflow,
  },
  {
    title: "Business contribution",
    description:
      "Connect organic portfolio performance with enterprise goals using the most reliable available conversion and revenue data.",
    metrics: [
      "Organic leads, transactions or revenue",
      "Contribution by market and page type",
      "Assisted and multi-touch outcomes",
      "Strategic initiative performance",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Enterprise SEO service?",
    answer:
      "Enterprise SEO can include large-scale technical audits, crawl and index management, template optimisation, information architecture, content governance, internal linking, migrations, automation, cross-functional workflows and executive reporting. The final scope depends on the organisation, platform, page inventory and business priorities.",
  },
  {
    question: "How is Enterprise SEO different from regular SEO?",
    answer:
      "Enterprise SEO manages greater scale, complexity and organisational dependency. Changes often affect large page groups and require coordination across engineering, product, content, analytics, legal, regional and executive teams. Governance and implementation systems are therefore as important as recommendations.",
  },
  {
    question: "Do you work with in-house SEO teams?",
    answer:
      "Yes. BrainADZ can support an existing in-house team with strategy, specialist audits, roadmap prioritisation, technical requirements, content governance, migrations, executive reporting or implementation validation.",
  },
  {
    question: "Can you support websites with millions of URLs?",
    answer:
      "Yes, provided the scope and data access are appropriate. Large websites require page-group analysis, sampling, templates, log or crawl data, Search Console segmentation and scalable monitoring rather than manual review of every URL.",
  },
  {
    question: "Do you provide developer-ready SEO requirements?",
    answer:
      "Yes. Technical recommendations can be translated into implementation requirements, examples, affected templates, acceptance criteria, QA steps and release validation guidance.",
  },
  {
    question: "Can you support enterprise website migrations?",
    answer:
      "Yes. We can support domain changes, replatforming, redesigns, acquisitions, URL restructures and major routing changes through inventory creation, benchmarks, redirect mapping, staging review, launch monitoring and post-release validation.",
  },
  {
    question: "How do you prioritise Enterprise SEO work?",
    answer:
      "Work is prioritised using commercial importance, affected scale, search opportunity, technical risk, effort, dependencies and implementation readiness. This helps teams focus on changes with the strongest realistic enterprise impact.",
  },
  {
    question: "How do you measure Enterprise SEO performance?",
    answer:
      "Measurement can include portfolio visibility, crawl and index health, page-group traffic, conversions, revenue, implementation progress and competitive movement. Reporting is segmented by the organisation's actual brands, markets, products and strategic initiatives.",
  },
  {
    question: "How long does Enterprise SEO take to show results?",
    answer:
      "Some technical or template fixes can create early movement after implementation, while large content, architecture and authority initiatives require sustained work. Enterprise timelines are strongly influenced by release cycles, dependencies, platform constraints and organisational decision speed.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise SEO Services",
  serviceType: "Enterprise Search Engine Optimization",
  description:
    "Enterprise SEO services covering technical scale, information architecture, templates, content governance, migrations, automation, workflows and executive reporting.",
  url: "https://www.brainadz.marketing/services/enterprise-seo",
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
    "@type": "BusinessAudience",
    audienceType:
      "Large organisations, multi-brand companies, marketplaces, publishers and multi-region enterprises",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise SEO Capabilities",
    itemListElement: ENTERPRISE_CAPABILITIES.map((capability) => ({
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

export default function EnterpriseSeoServicesPage() {
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
          src="/seo/enterprise-seo-hero.jpg"
          alt="Enterprise SEO strategy for large websites, complex platforms and multiple teams"
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
            <span className="text-white">Enterprise SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Enterprise SEO Services
          </h1>

          <div className="mt-auto max-w-[840px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build scalable organic growth across large websites, complex
              platforms, multiple teams and high-value page portfolios.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your enterprise SEO
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Enterprise SEO page navigation"
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
              Enterprise SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn SEO from isolated recommendations into an enterprise operating system
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Enterprise SEO manages organic performance across large inventories,
                shared templates, complex platforms and multiple decision-making
                teams. BrainADZ connects technical strategy, content operations,
                platform requirements and measurement into one scalable programme.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The goal is not to produce a larger list of recommendations. It is to
                create standards, workflows and priorities that make high-impact SEO
                changes easier to approve, implement, validate and repeat.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your enterprise SEO model
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/enterprise-seo-overview.jpg"
                  alt="Enterprise SEO overview showing large website portfolios, teams and performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Enterprise SEO connects portfolio strategy, implementation systems
                and measurable business outcomes.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {ENTERPRISE_BENEFITS.map((benefit) => {
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

      {/* Enterprise scale */}
      <section
        id="scale"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Enterprise complexity
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Scale changes how SEO must be planned, implemented and governed
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Large websites are not simply small websites with more pages. Shared
              systems, multiple teams and portfolio-wide risks require a different
              operating model.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {SCALE_CHALLENGES.map((item) => {
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
                  Enterprise SEO capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build scalable controls across technology, content and operations
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each capability is designed for repeatability. The strongest
              enterprise improvements change templates, systems and workflows rather
              than isolated URLs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {ENTERPRISE_CAPABILITIES.map((capability) => {
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

      {/* Operating models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Enterprise operating models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt the SEO system to the organisation and website portfolio
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Different enterprise models require different governance, page rules,
              ownership structures and definitions of success.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {OPERATING_MODELS.map((model) => {
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

      {/* Governance */}
      <section
        id="governance"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/enterprise-seo-governance.jpg"
                alt="Enterprise SEO governance across product, engineering, content and analytics teams"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                SEO governance
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Make SEO requirements part of normal enterprise delivery
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Enterprise SEO becomes sustainable when teams know the standards,
              ownership, workflow and measurement expectations before changes reach production.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {GOVERNANCE_LAYERS.map((item) => {
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

      {/* Prioritisation */}
      <section
        id="prioritisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Enterprise prioritisation
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Focus enterprise capacity on the changes with the strongest realistic impact
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              The roadmap balances commercial importance, portfolio scale, organic
              opportunity and the realities of enterprise implementation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {PRIORITY_FRAMEWORK.map((item) => {
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
                Enterprise SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From enterprise alignment to released and measurable improvements
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strategy, standards, implementation and reporting remain connected
              through one shared operating roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your enterprise roadmap
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
                  Enterprise SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give leadership and delivery teams the level of visibility each needs
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Executive reporting explains business contribution and strategic
              progress, while operating reports show portfolio health, issues and implementation status.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/enterprise-seo-reporting-dashboard.jpg"
                  alt="Enterprise SEO reporting dashboard for portfolio visibility and implementation"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Enterprise reporting connects portfolio health, released work and business outcomes.
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
                Enterprise SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before building an enterprise SEO programme
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand scale, governance, development requirements, migrations,
              prioritisation and performance measurement before starting.
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