/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Braces,
  Check,
  Code2,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  Monitor,
  Network,
  Search,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services | Crawl, Indexing & Core Web Vitals | BrainADZ",
  description:
    "Technical SEO services by BrainADZ covering crawling, indexing, canonicalisation, JavaScript SEO, Core Web Vitals, structured data, log analysis and implementation roadmaps.",
  alternates: {
    canonical: "/services/technical-seo",
  },
  openGraph: {
    title: "Technical SEO Services | BrainADZ Marketing",
    description:
      "Improve crawlability, indexation, rendering, site performance and structured data with a practical Technical SEO roadmap.",
    type: "website",
    url: "/services/technical-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Services | BrainADZ Marketing",
    description:
      "Technical SEO for crawling, indexing, Core Web Vitals, canonicalisation, JavaScript rendering, structured data and log analysis.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Core Areas", href: "#core-areas" },
  { label: "Crawl & Indexing", href: "#crawl-indexing" },
  { label: "Performance", href: "#performance" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const TECHNICAL_SEO_BENEFITS = [
  {
    title: "Cleaner search access",
    description:
      "Make important pages easier for search engines to discover, crawl, render and understand.",
    icon: Search,
  },
  {
    title: "Stronger index quality",
    description:
      "Reduce duplicate, low-value and conflicting URLs so the index reflects the pages that matter.",
    icon: Database,
  },
  {
    title: "Faster page experience",
    description:
      "Improve Core Web Vitals, mobile usability and technical performance across critical templates.",
    icon: Zap,
  },
  {
    title: "Safer implementation",
    description:
      "Turn complex findings into prioritised tickets, validation steps and release-ready recommendations.",
    icon: ShieldCheck,
  },
];

const CORE_TECHNICAL_AREAS = [
  {
    eyebrow: "Crawling and discovery",
    title: "Help search engines reach the pages that deserve attention",
    description:
      "We identify blocked resources, inefficient crawl paths, orphan pages, redirect chains and architecture issues that prevent important content from being discovered consistently.",
    points: [
      "Robots.txt and crawl-directive review",
      "XML sitemap coverage and hygiene",
      "Internal-link depth and orphan-page analysis",
      "Redirect chains, loops and broken URL paths",
      "Crawl traps, parameters and duplicate pathways",
    ],
    icon: Network,
  },
  {
    eyebrow: "Indexing and canonicalisation",
    title: "Create one clear indexable version of every important page",
    description:
      "We align canonical tags, status codes, redirects, pagination and index directives so search engines receive consistent signals about which URLs should appear in search.",
    points: [
      "Canonical-tag and duplicate-cluster review",
      "Index, noindex and robots directive validation",
      "HTTP status and redirect mapping",
      "Pagination and parameter handling",
      "Submitted, crawled and indexed URL comparison",
    ],
    icon: GitBranch,
  },
  {
    eyebrow: "JavaScript SEO",
    title: "Make rendered content and links reliably available to search engines",
    description:
      "For JavaScript-heavy websites, we compare source HTML, rendered HTML and user-visible content to find missing links, delayed content and rendering dependencies.",
    points: [
      "Source-versus-rendered HTML comparison",
      "Client-side routing and link accessibility",
      "Hydration and rendering failure checks",
      "Lazy-loaded content and image validation",
      "SSR, SSG and CSR implementation guidance",
    ],
    icon: Braces,
  },
  {
    eyebrow: "Core Web Vitals",
    title: "Improve speed and stability where users feel it most",
    description:
      "We analyse real-user and laboratory data to prioritise improvements for loading, responsiveness and visual stability across high-value page templates.",
    points: [
      "LCP, INP and CLS diagnostics",
      "Image, font and critical-resource optimisation",
      "Third-party script and main-thread review",
      "Caching, compression and delivery guidance",
      "Template-level performance prioritisation",
    ],
    icon: Gauge,
  },
  {
    eyebrow: "Structured data",
    title: "Keep schema accurate, eligible and aligned with visible content",
    description:
      "We review structured data at template level, correct validation issues and ensure markup reflects the actual page rather than creating unsupported rich-result claims.",
    points: [
      "Schema type and property selection",
      "Template-level JSON-LD validation",
      "Visible-content and markup alignment",
      "Rich-result eligibility monitoring",
      "Organisation, breadcrumb and page-type coverage",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Log-file analysis",
    title: "See how search-engine bots actually use your website",
    description:
      "Server logs reveal which URLs bots request, how often they crawl, where crawl budget is wasted and whether important sections receive enough attention.",
    points: [
      "Search-engine bot request validation",
      "Crawl-frequency and response-code analysis",
      "Important-versus-low-value crawl comparison",
      "Bot activity by directory and template",
      "Crawl waste and recrawl opportunity detection",
    ],
    icon: Server,
  },
];

const SEARCH_ACCESS_FRAMEWORK = [
  {
    number: "01",
    title: "Discover",
    description:
      "Important URLs need crawlable links, clean navigation and accurate sitemap support before any other signal can work.",
    focus: "Architecture and URL discovery",
    icon: Network,
  },
  {
    number: "02",
    title: "Render",
    description:
      "Search engines must receive the same essential content, links and metadata that users receive after the page loads.",
    focus: "HTML and JavaScript rendering",
    icon: Braces,
  },
  {
    number: "03",
    title: "Index",
    description:
      "Canonical, status, robots and duplication signals should identify one useful version of each search landing page.",
    focus: "Index eligibility and consolidation",
    icon: Database,
  },
  {
    number: "04",
    title: "Experience",
    description:
      "Fast, stable and mobile-friendly templates support users while reducing technical friction across organic landing pages.",
    focus: "Performance and usability",
    icon: Monitor,
  },
];

const CRAWL_INDEXING_CHECKS = [
  {
    title: "URL eligibility",
    text: "Confirm that priority URLs return the right status, are not blocked and contain indexable content.",
  },
  {
    title: "Signal consistency",
    text: "Align canonicals, redirects, internal links, sitemaps and robots directives around the same preferred URL.",
  },
  {
    title: "Duplicate control",
    text: "Identify parameters, alternate routes and near-duplicate templates that divide crawling and indexing signals.",
  },
  {
    title: "Index validation",
    text: "Compare known, submitted, crawled and indexed URLs to find exclusions, gaps and unexpected index growth.",
  },
];

const PERFORMANCE_PRIORITIES = [
  {
    title: "Largest Contentful Paint",
    description:
      "Improve how quickly the primary content element becomes visible through image, server and critical-resource optimisation.",
    icon: Activity,
  },
  {
    title: "Interaction to Next Paint",
    description:
      "Reduce long tasks, excessive JavaScript and third-party overhead that delay visible responses to user interactions.",
    icon: Zap,
  },
  {
    title: "Cumulative Layout Shift",
    description:
      "Reserve stable space for images, fonts, embeds and dynamic elements so pages do not move unexpectedly while loading.",
    icon: Layers3,
  },
  {
    title: "Rendered SEO content",
    description:
      "Ensure headings, links, metadata and core copy are available reliably across server and client rendering states.",
    icon: Braces,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Crawl and establish the technical baseline",
    description:
      "We combine crawler data, Search Console, analytics, performance data and platform information to understand the website's current technical condition.",
    timing: "Initial phase",
    output: "Technical issue inventory",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Validate rendering, indexing and templates",
    description:
      "Priority templates are checked for source HTML, rendered content, status codes, canonical rules, internal links, schema and index eligibility.",
    timing: "Diagnostic phase",
    output: "Template and index analysis",
    icon: Braces,
  },
  {
    number: "03",
    title: "Prioritise by impact, scale and effort",
    description:
      "Issues are grouped by business importance, number of affected URLs, implementation dependency and expected search impact.",
    timing: "Planning phase",
    output: "Prioritised implementation roadmap",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Support implementation and QA",
    description:
      "Recommendations are converted into clear development tickets, acceptance criteria and test cases, then validated before and after release.",
    timing: "Release cycles",
    output: "Validated technical changes",
    icon: Code2,
  },
  {
    number: "05",
    title: "Monitor search-engine response",
    description:
      "We track recrawling, index coverage, performance, schema and organic landing-page trends to confirm impact and identify the next priority.",
    timing: "Ongoing review",
    output: "Technical performance report",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Crawl and index health",
    description:
      "Track whether search engines can access, process and index the intended set of pages without avoidable waste or duplication.",
    metrics: [
      "Valid, excluded and error URL trends",
      "Submitted versus indexed coverage",
      "Status-code and redirect issues",
      "Orphan, duplicate and low-value URLs",
    ],
    icon: Database,
  },
  {
    title: "Core Web Vitals and performance",
    description:
      "Measure real-user performance by page type and identify templates where technical work can improve the largest share of traffic.",
    metrics: [
      "LCP, INP and CLS status",
      "Mobile and desktop field data",
      "Performance by priority template",
      "Resource and JavaScript regressions",
    ],
    icon: Gauge,
  },
  {
    title: "Rendering and structured data",
    description:
      "Monitor whether important content renders consistently and whether schema remains valid after template or platform changes.",
    metrics: [
      "Rendered-content and link checks",
      "Schema errors and warnings",
      "Rich-result eligibility trends",
      "Template deployment regressions",
    ],
    icon: Code2,
  },
  {
    title: "Implementation progress",
    description:
      "Keep technical SEO accountable through issue ownership, release status, validation evidence and clear next actions.",
    metrics: [
      "Open, in-progress and resolved issues",
      "Impact and effort priority levels",
      "Release and QA validation status",
      "Observed search impact after deployment",
    ],
    icon: Workflow,
  },
];

const FAQS = [
  {
    question: "What is included in your Technical SEO service?",
    answer:
      "A Technical SEO engagement can include crawling and indexation audits, canonical and redirect analysis, JavaScript rendering checks, Core Web Vitals diagnostics, structured-data validation, XML sitemap and robots review, log-file analysis, implementation tickets, quality assurance and ongoing technical reporting. The final scope depends on the website, platform, scale and development access.",
  },
  {
    question: "How is Technical SEO different from on-page SEO?",
    answer:
      "Technical SEO focuses on whether search engines can discover, render, understand and index the website efficiently. On-page SEO focuses more directly on page targeting, headings, copy, internal relevance and search intent. Both work together, but technical problems can prevent strong on-page work from being processed correctly.",
  },
  {
    question: "Can Technical SEO improve rankings by itself?",
    answer:
      "Technical fixes can create meaningful gains when crawling, indexing, rendering or performance problems are limiting otherwise useful pages. However, competitive rankings also depend on content relevance, authority, user value and market conditions. We report technical impact without treating technical SEO as an isolated guarantee.",
  },
  {
    question: "Do you work with JavaScript websites and Next.js?",
    answer:
      "Yes. We review server-rendered, statically generated and client-rendered implementations, including Next.js applications. The analysis covers routing, metadata, rendered HTML, internal links, canonicals, hydration, lazy loading, structured data and the availability of important content to search engines.",
  },
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are user-experience metrics focused on loading performance, interaction responsiveness and visual stability. The primary metrics are Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift. We use field and laboratory data to locate template-level causes and prioritise practical fixes.",
  },
  {
    question: "Why are pages crawled but not indexed?",
    answer:
      "A crawled page may remain unindexed because it appears duplicate, low value, thin, conflicting, poorly linked or inconsistent with canonical and robots signals. Indexing is also influenced by overall site quality and search demand. We examine the affected URL groups rather than assuming one universal cause.",
  },
  {
    question: "Do you provide implementation support for developers?",
    answer:
      "Yes. Recommendations can be converted into development tickets with affected templates, technical requirements, examples, acceptance criteria and validation steps. We can review proposed fixes, test staging environments and confirm whether released changes produce the intended technical signals.",
  },
  {
    question: "When is log-file analysis useful?",
    answer:
      "Log analysis is especially useful for large, frequently updated or technically complex websites. It shows which URLs verified search-engine bots request, how often they crawl, which status codes they encounter and whether crawl activity is concentrated on valuable or low-value areas.",
  },
  {
    question: "How do you report Technical SEO performance?",
    answer:
      "Reporting can cover crawl errors, index coverage, submitted and indexed URLs, duplicate patterns, Core Web Vitals, rendering checks, structured-data health, implementation status and organic landing-page trends. Reports distinguish diagnosed issues, completed fixes and observed outcomes.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO Services",
  serviceType: "Technical Search Engine Optimization",
  description:
    "Technical SEO services covering crawling, indexing, canonicalisation, JavaScript rendering, Core Web Vitals, structured data, log analysis and implementation support.",
  url: "https://www.brainadz.marketing/services/technical-seo",
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
      "Businesses, ecommerce websites, SaaS platforms, publishers and enterprise websites requiring technical search optimisation",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical SEO Deliverables",
    itemListElement: CORE_TECHNICAL_AREAS.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.eyebrow,
        description: service.description,
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

export default function TechnicalSeoPage() {
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
          src="/seo/technical-seo-hero.jpg"
          alt="Technical SEO analysis covering crawling indexing and website performance"
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
            <span className="text-white">Technical SEO</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Technical SEO Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve how search engines crawl, render, index and evaluate your
              website with a technical roadmap built for performance, scale and
              reliable implementation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Review your technical SEO
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Technical SEO page navigation"
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
              Technical SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Remove the technical barriers between useful pages and organic search
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Technical SEO ensures that search engines can discover, render,
                understand and index the right version of your pages. BrainADZ
                combines crawl data, index coverage, performance diagnostics,
                template analysis and implementation support into one practical
                technical roadmap.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The objective is not to generate a long list of warnings. It is to
                identify which technical conditions affect valuable page groups,
                prioritise fixes by impact and verify that released changes produce
                the intended search-engine signals.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Start with a technical review
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/technical-seo-overview.jpg"
                  alt="Technical SEO overview dashboard with crawl indexing and performance data"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Technical SEO connects crawlability, index quality, rendering and
                page experience with implementation priorities.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {TECHNICAL_SEO_BENEFITS.map((benefit) => {
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

      {/* Core areas */}
      <section
        id="core-areas"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Core technical SEO areas
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Diagnose the systems that control search access at scale
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each technical area affects a different stage of search processing.
              We connect them so crawling, rendering, canonicalisation, speed and
              structured data reinforce the same preferred pages.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CORE_TECHNICAL_AREAS.map((area) => {
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

      {/* Search access framework */}
      <section className="border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Search access framework
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                A page must be discovered, rendered and indexed before it can compete
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Technical SEO is a sequence. A failure at an early stage can prevent
              content, authority and on-page optimisation from reaching their full
              value.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {SEARCH_ACCESS_FRAMEWORK.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-[14px] border border-white/15 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/70 hover:bg-white/[0.07]"
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
                  <p className="mt-7 border-t border-white/15 pt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.focus}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crawl and indexing */}
      <section
        id="crawl-indexing"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/technical-seo-crawl-indexing.jpg"
                alt="Technical SEO crawl and indexation analysis across website URLs"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Crawl and index control
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Give search engines one consistent instruction for every URL
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Conflicting canonicals, redirects, links, sitemap entries and robots
              directives create uncertainty. We compare these signals at URL and
              template level so important pages remain eligible and duplicate paths
              are consolidated correctly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CRAWL_INDEXING_CHECKS.map((item) => (
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

      {/* Performance and JavaScript */}
      <section
        id="performance"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Performance and JavaScript SEO
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Improve the rendered page users and search engines actually receive
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Performance and rendering are template problems before they are page
              problems. We identify shared causes so one implementation can improve
              many organic landing pages at once.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {PERFORMANCE_PRIORITIES.map((priority) => {
                const Icon = priority.icon;

                return (
                  <article
                    key={priority.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-7 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-black">
                      {priority.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-black/58">
                      {priority.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/core-web-vitals-javascript-seo.jpg"
                  alt="Core Web Vitals and JavaScript SEO performance analysis"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Field data, rendered HTML and template diagnostics reveal different
                parts of the same page-experience problem.
              </figcaption>
            </figure>
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
                Technical SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From technical evidence to validated implementation
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every recommendation needs a clear reason, affected scope, owner and
              validation method. The process keeps audits connected to development
              releases and measurable search outcomes.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your technical roadmap
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
                        Timing
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
                  Technical SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Track technical health, implementation and search response together
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A technical report should show what is broken, what was released,
              whether search engines recognised the change and which issue deserves
              attention next.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/technical-seo-reporting-dashboard.jpg"
                  alt="Technical SEO reporting dashboard with crawl index and performance metrics"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Reporting separates diagnosed issues, implemented fixes and observed
                search-engine outcomes.
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
                Technical SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before starting a technical SEO project
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand audit scope, JavaScript SEO, Core Web Vitals, indexing,
              implementation support and technical reporting.
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