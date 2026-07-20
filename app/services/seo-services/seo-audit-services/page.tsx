/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bug,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  FileSearch,
  Gauge,
  Globe2,
  Link2,
  ListChecks,
  Monitor,
  MousePointerClick,
  Network,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Audit Services | Technical, Content & Authority Audit | BrainADZ",
  description:
    "SEO audit services by BrainADZ uncover technical, content, architecture, authority, tracking and conversion issues with evidence, priorities and an implementation roadmap.",
  alternates: {
    canonical: "/services/seo-audit-services",
  },
  openGraph: {
    title: "SEO Audit Services | BrainADZ Marketing",
    description:
      "Get a complete SEO audit covering crawling, indexing, content, internal linking, authority, user experience and implementation priorities.",
    type: "website",
    url: "/services/seo-audit-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Audit Services | BrainADZ Marketing",
    description:
      "Evidence-led SEO audits with technical findings, content gaps, priority scoring and an actionable implementation roadmap.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Audit Scope", href: "#audit-scope" },
  { label: "Evidence", href: "#evidence" },
  { label: "Prioritisation", href: "#prioritisation" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

const AUDIT_BENEFITS = [
  {
    title: "Clear issue visibility",
    description:
      "See which technical, content and authority problems are actually affecting important pages and search performance.",
    icon: Search,
  },
  {
    title: "Evidence-based priorities",
    description:
      "Separate critical blockers from low-impact warnings using business value, affected scale, risk and implementation effort.",
    icon: Target,
  },
  {
    title: "Implementation clarity",
    description:
      "Turn audit findings into practical tickets, owners, acceptance criteria and a realistic release sequence.",
    icon: Workflow,
  },
  {
    title: "Safer SEO decisions",
    description:
      "Validate assumptions before redesigns, migrations, content expansion or large technical changes create additional risk.",
    icon: ShieldCheck,
  },
];

const AUDIT_AREAS = [
  {
    eyebrow: "Technical SEO audit",
    title: "Identify crawl, rendering and indexation barriers",
    description:
      "We examine the systems that determine whether search engines can discover, process and index the right version of your pages.",
    points: [
      "Robots.txt, XML sitemap and crawl-path review",
      "Status codes, redirects and canonical signals",
      "Indexation, duplication and parameter analysis",
      "JavaScript rendering and source HTML checks",
      "Core Web Vitals and mobile performance",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Site architecture audit",
    title: "Review how pages, topics and authority connect",
    description:
      "The website structure is evaluated for crawl depth, page hierarchy, taxonomy, internal links and the clarity of topic relationships.",
    points: [
      "Navigation and hierarchy review",
      "Internal-link distribution and anchor context",
      "Orphan and deeply buried page detection",
      "Category, service and content relationships",
      "URL structure and duplication patterns",
    ],
    icon: Network,
  },
  {
    eyebrow: "On-page and content audit",
    title: "Find pages with weak intent, overlap or incomplete value",
    description:
      "We compare keyword ownership, search intent, headings, metadata, content depth and page usefulness across priority landing pages.",
    points: [
      "Keyword-to-page and intent alignment",
      "Title, heading and metadata review",
      "Thin, outdated and duplicated content",
      "Cannibalisation and consolidation opportunities",
      "E-E-A-T, proof and content-quality signals",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Authority and backlink audit",
    title: "Evaluate the quality and distribution of external authority",
    description:
      "We review referring domains, anchors, lost links, suspicious patterns and competitor authority gaps without relying on one third-party metric.",
    points: [
      "Referring-domain and backlink quality review",
      "Anchor-text and target-page distribution",
      "Lost, broken and reclaimable links",
      "Competitor authority and link-gap analysis",
      "Risk signals and manual-action context",
    ],
    icon: Link2,
  },
  {
    eyebrow: "Analytics and tracking audit",
    title: "Confirm that organic performance can be measured correctly",
    description:
      "Search Console, analytics and conversion tracking are checked for gaps that could distort traffic, lead or revenue reporting.",
    points: [
      "GA4 and Search Console configuration review",
      "Organic landing-page and channel validation",
      "Form, call and CTA event tracking",
      "Cross-domain and referral exclusions",
      "Conversion and attribution consistency",
    ],
    icon: BarChart3,
  },
  {
    eyebrow: "UX and conversion audit",
    title: "Check whether organic landing pages support the next action",
    description:
      "We review mobile usability, content hierarchy, trust signals, forms and calls to action on pages expected to generate enquiries or sales.",
    points: [
      "Mobile layout and interaction review",
      "CTA visibility and page-path clarity",
      "Form friction and contact accessibility",
      "Trust, proof and decision-support content",
      "Landing-page conversion opportunities",
    ],
    icon: MousePointerClick,
  },
];

const EVIDENCE_SOURCES = [
  {
    title: "Crawl data",
    description:
      "A controlled crawl reveals status codes, canonicals, directives, links, depth, duplicate patterns and template-level issues.",
    icon: Bug,
  },
  {
    title: "Search Console",
    description:
      "Index coverage, search queries, page performance and inspection data show how Google currently processes the site.",
    icon: Search,
  },
  {
    title: "Analytics and conversions",
    description:
      "Traffic, landing-page behaviour and conversion events help connect SEO issues with actual business outcomes.",
    icon: BarChart3,
  },
  {
    title: "Performance data",
    description:
      "Field and laboratory metrics identify loading, responsiveness and layout stability problems by template and device.",
    icon: Gauge,
  },
  {
    title: "Rendered-page checks",
    description:
      "Source HTML, rendered HTML and user-visible content are compared to validate JavaScript and indexing assumptions.",
    icon: Monitor,
  },
  {
    title: "Competitor evidence",
    description:
      "Search results, content coverage, architecture and authority profiles reveal realistic gaps and opportunities.",
    icon: Globe2,
  },
];

const PRIORITY_FRAMEWORK = [
  {
    number: "01",
    title: "Business impact",
    description:
      "How strongly does the issue affect high-value services, categories, locations, leads, transactions or revenue?",
    focus: "Commercial importance",
    icon: Target,
  },
  {
    number: "02",
    title: "SEO impact",
    description:
      "Does the issue block crawling, indexing, relevance, authority, user experience or measurable search visibility?",
    focus: "Search-performance effect",
    icon: Activity,
  },
  {
    number: "03",
    title: "Affected scale",
    description:
      "Is the problem limited to one page, repeated across a template or present across a major section of the website?",
    focus: "Number of affected URLs",
    icon: Database,
  },
  {
    number: "04",
    title: "Effort and dependency",
    description:
      "What development, content, platform, stakeholder or release dependencies are required to resolve the issue safely?",
    focus: "Implementation reality",
    icon: Workflow,
  },
];

const VALIDATION_CHECKS = [
  {
    title: "Reproduce the issue",
    text: "Confirm the behaviour with the appropriate crawler, browser, source, rendered output or platform data.",
  },
  {
    title: "Define affected scope",
    text: "Identify the page group, template, directory, device or market affected instead of reporting an isolated example.",
  },
  {
    title: "Explain the consequence",
    text: "Connect the finding to crawling, indexing, relevance, experience, authority, measurement or conversion impact.",
  },
  {
    title: "Specify the fix",
    text: "Provide the recommended state, implementation guidance, ownership and acceptance criteria required for validation.",
  },
];

const AUDIT_DELIVERABLES = [
  {
    title: "Executive audit summary",
    description:
      "A concise view of the most important findings, business risks, growth constraints and recommended sequence of action.",
    icon: FileCheck2,
  },
  {
    title: "Detailed findings register",
    description:
      "A transparent issue list with evidence, examples, affected scope, impact, priority, owner and recommended resolution.",
    icon: ListChecks,
  },
  {
    title: "Implementation roadmap",
    description:
      "A phased backlog separating urgent blockers, high-value improvements, supporting work and lower-priority maintenance.",
    icon: Workflow,
  },
  {
    title: "Developer-ready tickets",
    description:
      "Technical findings can be translated into clear requirements, examples, acceptance criteria and QA steps.",
    icon: Code2,
  },
  {
    title: "Content opportunity map",
    description:
      "Priority pages, cannibalisation, consolidation, refresh and new-content opportunities are organised around search intent.",
    icon: FileSearch,
  },
  {
    title: "Review and handover session",
    description:
      "The findings are explained to SEO, content, development and business stakeholders so ownership and next actions are clear.",
    icon: ClipboardCheck,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Confirm goals, markets and access",
    description:
      "We define priority services, products, locations, competitors, platform constraints and the data sources available for the audit.",
    timing: "Discovery",
    output: "Audit scope and access checklist",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Collect technical and performance evidence",
    description:
      "The website is crawled and reviewed using Search Console, analytics, rendered-page checks, performance data and platform information.",
    timing: "Data collection",
    output: "Technical evidence set",
    icon: Database,
  },
  {
    number: "03",
    title: "Review content, architecture and authority",
    description:
      "Priority page groups are assessed for intent, overlap, content quality, internal linking, hierarchy and external authority.",
    timing: "Analysis",
    output: "Page and authority findings",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Validate and prioritise findings",
    description:
      "Each issue is confirmed, assigned an affected scope and scored by business impact, SEO impact, scale, risk and effort.",
    timing: "Prioritisation",
    output: "Impact-ranked issue register",
    icon: Target,
  },
  {
    number: "05",
    title: "Deliver the roadmap and handover",
    description:
      "Findings are organised into implementation phases and explained to the teams responsible for development, content and measurement.",
    timing: "Delivery",
    output: "SEO audit report and roadmap",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Support implementation validation",
    description:
      "Where included, we review proposed fixes, staging changes and released updates to confirm that the intended SEO state has been achieved.",
    timing: "Optional follow-through",
    output: "QA notes and validated fixes",
    icon: Check,
  },
];

const FAQS = [
  {
    question: "What is included in your SEO audit service?",
    answer:
      "An SEO audit can include technical crawling and indexation, site architecture, JavaScript rendering, Core Web Vitals, on-page targeting, content quality, internal linking, backlinks, analytics, conversion tracking and organic landing-page UX. The final scope depends on the website type, scale, platform and business priorities.",
  },
  {
    question: "Is an SEO audit only a technical audit?",
    answer:
      "No. A complete SEO audit should consider technical access, page relevance, content quality, architecture, internal links, external authority, measurement and conversion pathways. A technical-only review can miss major content or commercial problems.",
  },
  {
    question: "What do I receive after the audit?",
    answer:
      "You receive an executive summary, detailed findings with evidence, priority scoring, affected URLs or templates, recommended fixes and an implementation roadmap. Depending on scope, the audit can also include developer tickets, content briefs and a stakeholder handover session.",
  },
  {
    question: "How long does an SEO audit take?",
    answer:
      "Timing depends on website size, technical complexity, data access and the depth of analysis required. A focused audit for a smaller website may be completed faster than a large ecommerce, marketplace, publisher or JavaScript platform with many templates and URL states.",
  },
  {
    question: "Will the audit fix the issues automatically?",
    answer:
      "The audit identifies, validates and prioritises issues. Implementation can be handled by your development and content teams, or BrainADZ can support selected fixes, ticket creation, staging review and post-release validation under a separate implementation scope.",
  },
  {
    question: "Do you audit Next.js and JavaScript websites?",
    answer:
      "Yes. We can review server-rendered, statically generated and client-rendered websites, including Next.js. Checks can cover source and rendered HTML, routing, metadata, internal links, canonicals, structured data, hydration, lazy loading and indexability.",
  },
  {
    question: "Can you audit an ecommerce website?",
    answer:
      "Yes. Ecommerce audits can include category and product architecture, faceted navigation, parameters, variants, pagination, product states, structured data, crawl efficiency, internal linking, index quality and organic revenue tracking.",
  },
  {
    question: "How often should an SEO audit be completed?",
    answer:
      "A full audit is useful before major SEO investment, redesigns, migrations, platform changes or recovery work. Ongoing websites also benefit from periodic focused audits when performance changes, templates are updated or new sections are launched.",
  },
  {
    question: "How do you prioritise audit findings?",
    answer:
      "Findings are prioritised using business importance, SEO impact, affected scale, implementation effort, dependencies and risk. This prevents minor warnings from receiving the same attention as issues blocking valuable pages or entire templates.",
  },
  {
    question: "Can an SEO audit guarantee ranking improvements?",
    answer:
      "No audit can guarantee rankings. An audit reduces uncertainty by identifying technical, content and authority constraints, but results depend on implementation quality, competition, content value, authority, search demand and ongoing optimisation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Audit Services",
  serviceType: "Search Engine Optimization Audit",
  description:
    "SEO audit services covering technical SEO, site architecture, content, internal linking, authority, analytics, conversion tracking and implementation prioritisation.",
  url: "https://www.brainadz.marketing/services/seo-audit-services",
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
    name: "SEO Audit Coverage",
    itemListElement: AUDIT_AREAS.map((area) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: area.eyebrow,
        description: area.description,
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

export default function SeoAuditServicesPage() {
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
          src="/seo/seo-audit-services-hero.jpg"
          alt="SEO audit analysis covering technical, content and authority issues"
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
            <span className="text-white">SEO Audit Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            SEO Audit Services
          </h1>

          <div className="mt-auto max-w-[800px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Find the technical, content, authority and measurement issues holding
              back organic growth—with evidence, priorities and an implementation-ready roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Audit your website
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="SEO audit page navigation"
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
              SEO audit overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Replace assumptions with a clear view of what is limiting organic performance
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                An SEO audit should explain more than what a crawler reports.
                BrainADZ combines technical evidence, search data, content analysis,
                authority review and conversion context to identify the issues that
                matter to real pages and business outcomes.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Every finding is validated, connected to an affected scope and
                prioritised by impact, scale, risk and effort. The result is a roadmap
                your SEO, content and development teams can actually use.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your audit scope
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/seo-audit-overview.jpg"
                  alt="SEO audit dashboard with technical, content and performance findings"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                A useful SEO audit connects evidence, impact, ownership and the next action.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {AUDIT_BENEFITS.map((benefit) => {
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

      {/* Audit scope */}
      <section
        id="audit-scope"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Complete audit scope
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Review every system that can restrict search visibility and conversion
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The audit scope is adapted to the website. A service site, ecommerce
              store, publisher and JavaScript platform should not receive the same generic checklist.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {AUDIT_AREAS.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {area.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {area.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {area.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {area.points.map((point) => (
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

      {/* Evidence */}
      <section
        id="evidence"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Audit evidence
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use multiple data sources before declaring an SEO issue
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A crawler warning, a ranking change or one tool score is not enough.
              Findings are stronger when separate evidence sources support the same conclusion.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVIDENCE_SOURCES.map((source) => {
              const Icon = source.icon;

              return (
                <article
                  key={source.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {source.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {source.description}
                  </p>
                </article>
              );
            })}
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
                  Impact-based prioritisation
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Fix the issues that matter before chasing every warning
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Audit tools can produce hundreds of findings. The priority framework
              prevents low-value cleanup from delaying changes that affect important pages and templates.
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

      {/* Finding validation */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/seo-audit-finding-validation.jpg"
                alt="SEO audit finding validation and implementation requirements"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Finding validation
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Every finding should explain the problem, impact and expected fix
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A screenshot and a tool label are not an implementation brief. We
              document the behaviour, affected scope, consequence and required state
              so teams can resolve and verify the issue.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALIDATION_CHECKS.map((item) => (
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

      {/* Deliverables */}
      <section
        id="deliverables"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  SEO audit deliverables
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give every team the level of detail needed to take action
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Business stakeholders need priorities. SEO teams need context.
              Developers and content teams need precise implementation requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AUDIT_DELIVERABLES.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
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
                SEO audit process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From discovery and evidence to a phased implementation roadmap
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The process keeps the audit connected to business priorities,
              implementation ownership and post-release validation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your SEO audit
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
                SEO audit FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before auditing your website
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand scope, deliverables, implementation, timing, ecommerce and
              JavaScript auditing before the project begins.
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