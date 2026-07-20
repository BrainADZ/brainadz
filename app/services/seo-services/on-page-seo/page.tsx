/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  Code2,
  FileSearch,
  Heading1,
  Link2,
  ListTree,
  MousePointerClick,
  Search,
  Sparkles,
  Tags,
  Target,
  TextSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "On Page SEO Services | Content & Page Optimisation | BrainADZ",
  description:
    "On Page SEO services by BrainADZ improve search intent alignment, titles, headings, content depth, internal links, schema, snippets and landing-page conversions.",
  alternates: {
    canonical: "/services/on-page-seo",
  },
  openGraph: {
    title: "On Page SEO Services | BrainADZ Marketing",
    description:
      "Improve rankings, relevance and conversions with structured On Page SEO for service pages, landing pages, blogs and commercial content.",
    type: "website",
    url: "/services/on-page-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "On Page SEO Services | BrainADZ Marketing",
    description:
      "Search-intent mapping, content optimisation, internal linking, metadata, schema and conversion-focused On Page SEO.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Search Intent", href: "#search-intent" },
  { label: "Optimisation", href: "#optimisation" },
  { label: "Content Quality", href: "#content-quality" },
  { label: "Internal Links", href: "#internal-links" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Clearer keyword relevance",
    description:
      "Align each page with one defined search purpose so rankings are not weakened by overlap or mixed intent.",
    icon: Target,
  },
  {
    title: "Stronger organic visibility",
    description:
      "Improve titles, headings, content depth and supporting signals that help search engines understand page value.",
    icon: Search,
  },
  {
    title: "Better user journeys",
    description:
      "Guide visitors from the search result to the right information, proof and next action without unnecessary friction.",
    icon: MousePointerClick,
  },
  {
    title: "More measurable outcomes",
    description:
      "Connect page-level visibility and engagement with enquiries, assisted conversions and commercial performance.",
    icon: BarChart3,
  },
];

const SEARCH_INTENT_LAYERS = [
  {
    number: "01",
    title: "Query intent",
    description:
      "Understand whether the searcher wants information, comparison, a solution, a product, a service or an immediate action.",
    focus: "Why the search happens",
    icon: TextSearch,
  },
  {
    number: "02",
    title: "Page ownership",
    description:
      "Assign each valuable search theme to one primary page so multiple URLs do not compete for the same intent.",
    focus: "Which page should rank",
    icon: ListTree,
  },
  {
    number: "03",
    title: "Content format",
    description:
      "Choose the right page type, depth, headings, media and proof based on the format already satisfying the search result.",
    focus: "How the answer should appear",
    icon: BookOpenCheck,
  },
  {
    number: "04",
    title: "Conversion alignment",
    description:
      "Match the call to action with the visitor’s stage instead of forcing the same commercial action on every search.",
    focus: "What the user should do next",
    icon: MousePointerClick,
  },
];

const OPTIMISATION_AREAS = [
  {
    eyebrow: "Titles and metadata",
    title: "Improve search snippets without writing for algorithms alone",
    description:
      "We refine titles and meta descriptions around page intent, differentiation and click value while keeping claims accurate and natural.",
    points: [
      "Primary topic and intent alignment",
      "Distinct titles across competing pages",
      "Compelling but accurate meta descriptions",
      "Brand and location modifiers where relevant",
      "Snippet testing and rewrite priorities",
    ],
    icon: Tags,
  },
  {
    eyebrow: "Headings and page structure",
    title: "Make the page easy to scan, understand and evaluate",
    description:
      "Heading hierarchy is organised around the real questions, comparisons and decision points users need instead of keyword repetition.",
    points: [
      "One clear H1 and logical H2-H3 hierarchy",
      "Topic sections mapped to search needs",
      "Scannable layout and answer-first content",
      "FAQ and supporting-section placement",
      "Heading overlap and duplication cleanup",
    ],
    icon: Heading1,
  },
  {
    eyebrow: "Content optimisation",
    title: "Strengthen usefulness, depth and topical completeness",
    description:
      "We improve existing content by filling meaningful gaps, removing repetition and adding the evidence required to satisfy the target search.",
    points: [
      "Search-result and competitor gap analysis",
      "Entity, subtopic and question coverage",
      "Proof, examples, statistics and use cases",
      "Content consolidation and refresh planning",
      "Readability and information-order improvements",
    ],
    icon: BookOpenCheck,
  },
  {
    eyebrow: "Image and media SEO",
    title: "Support understanding with purposeful visual content",
    description:
      "Images, diagrams and videos are reviewed for relevance, naming, alternative text, loading behaviour and their role in the page journey.",
    points: [
      "Descriptive filenames and alt text",
      "Relevant captions and surrounding context",
      "Image dimensions and loading review",
      "Media placement around key explanations",
      "Decorative versus informative image handling",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Structured data",
    title: "Use schema that accurately reflects visible page content",
    description:
      "We review eligible markup for services, articles, products, FAQs, breadcrumbs and organisations without adding unsupported claims.",
    points: [
      "Schema eligibility and template review",
      "Visible-content and markup alignment",
      "Validation and error resolution",
      "Breadcrumb and organisation markup",
      "Ongoing structured-data monitoring",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Conversion elements",
    title: "Make organic landing pages easier to act on",
    description:
      "Calls to action, proof, forms, contact details and next-step links are aligned with the page objective and visitor readiness.",
    points: [
      "Primary and secondary CTA placement",
      "Trust signals and proof integration",
      "Form and contact-path clarity",
      "Mobile conversion usability",
      "Page-specific enquiry tracking",
    ],
    icon: MousePointerClick,
  },
];

const CONTENT_QUALITY_CHECKS = [
  {
    title: "Original value",
    description:
      "The page adds useful explanation, experience, evidence or perspective instead of restating what already exists elsewhere.",
  },
  {
    title: "Topical completeness",
    description:
      "Important questions, subtopics, entities and decision factors are covered to the depth appropriate for the intent.",
  },
  {
    title: "Trust and proof",
    description:
      "Claims are supported with examples, credentials, sources, case evidence, product details or transparent business information.",
  },
  {
    title: "Content freshness",
    description:
      "Time-sensitive information, statistics, screenshots, offers and operational details are reviewed and updated when necessary.",
  },
];

const INTERNAL_LINKING_AREAS = [
  {
    title: "Authority distribution",
    description:
      "Direct internal authority toward high-priority pages through contextual, relevant and crawlable links.",
    icon: Link2,
  },
  {
    title: "Topic relationships",
    description:
      "Connect services, categories, guides, case studies and FAQs so users and search engines can understand subject relationships.",
    icon: ListTree,
  },
  {
    title: "Anchor clarity",
    description:
      "Use descriptive anchor text that explains the destination without relying on repetitive exact-match wording.",
    icon: Tags,
  },
  {
    title: "Orphan-page prevention",
    description:
      "Identify valuable pages with weak or missing internal links and integrate them into the appropriate site journeys.",
    icon: FileSearch,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit page performance and intent",
    description:
      "We review rankings, search queries, competing URLs, content quality, metadata, headings, internal links, schema and conversion behaviour.",
    timing: "Initial phase",
    output: "Page-level issue and opportunity map",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Assign keywords and page ownership",
    description:
      "We map primary and supporting search themes to the right pages, resolving cannibalisation and identifying missing landing pages.",
    timing: "Strategy phase",
    output: "Keyword-to-page map",
    icon: Target,
  },
  {
    number: "03",
    title: "Build the optimisation brief",
    description:
      "Each priority page receives recommendations for metadata, headings, content sections, proof, internal links, schema and calls to action.",
    timing: "Planning phase",
    output: "Implementation-ready page brief",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Implement and quality check",
    description:
      "Approved changes are published and reviewed for accuracy, formatting, internal links, mobile usability, schema and indexability.",
    timing: "Execution cycle",
    output: "Optimised live pages",
    icon: Check,
  },
  {
    number: "05",
    title: "Measure and refine",
    description:
      "We monitor query coverage, clicks, engagement and conversion signals, then improve pages that are gaining visibility or losing relevance.",
    timing: "Ongoing review",
    output: "Performance report and refresh backlog",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Keyword and query coverage",
    description:
      "Measure how priority pages appear across target topics, supporting questions and search-intent variations.",
    metrics: [
      "Ranking distribution by page",
      "New and declining search queries",
      "Cannibalisation and overlap",
      "Impression and click growth",
    ],
    icon: Search,
  },
  {
    title: "Page-level organic performance",
    description:
      "Evaluate the visibility and engagement of individual pages rather than relying only on total website traffic.",
    metrics: [
      "Organic sessions and landing-page clicks",
      "Engagement and content consumption",
      "Entry-page and exit behaviour",
      "Page groups gaining or losing traffic",
    ],
    icon: BarChart3,
  },
  {
    title: "Snippet and SERP performance",
    description:
      "Review whether titles, descriptions and eligible enhancements are improving click-through performance.",
    metrics: [
      "Click-through rate by query and page",
      "Title and description rewrite impact",
      "Rich-result and schema visibility",
      "SERP feature opportunities",
    ],
    icon: TextSearch,
  },
  {
    title: "Conversion contribution",
    description:
      "Connect optimised pages with enquiries, assisted actions and commercial outcomes where tracking is available.",
    metrics: [
      "Forms, calls and CTA interactions",
      "Landing-page conversion rate",
      "Assisted conversion contribution",
      "High-value page opportunities",
    ],
    icon: MousePointerClick,
  },
];

const FAQS = [
  {
    question: "What is included in your On Page SEO service?",
    answer:
      "An On Page SEO engagement can include keyword-to-page mapping, search-intent analysis, title and meta-description optimisation, heading structure, content improvement, internal linking, image optimisation, structured data, conversion alignment and page-level reporting. The exact scope depends on your website, content quality and commercial priorities.",
  },
  {
    question: "How is On Page SEO different from Technical SEO?",
    answer:
      "On Page SEO focuses on the relevance, usefulness, structure and conversion quality of individual pages. Technical SEO focuses more on crawling, rendering, indexing, performance, canonicals, structured-data infrastructure and site-wide technical controls. Both areas often need to work together.",
  },
  {
    question: "Do you rewrite complete website pages?",
    answer:
      "We can provide detailed optimisation briefs, edit existing content or create complete page copy depending on the agreed scope. In many cases, the best result comes from improving strong existing information rather than replacing the entire page.",
  },
  {
    question: "How many keywords should one page target?",
    answer:
      "A page should primarily serve one clear search intent, but that intent can include several closely related keywords, questions and variations. We avoid forcing unrelated topics onto one URL or creating separate pages for every minor keyword variation.",
  },
  {
    question: "Can On Page SEO fix keyword cannibalisation?",
    answer:
      "Yes. We identify pages competing for the same search intent and recommend consolidation, retargeting, internal-link changes, canonical adjustments or content differentiation depending on the cause and value of each URL.",
  },
  {
    question: "Are meta descriptions a ranking factor?",
    answer:
      "Meta descriptions are not generally treated as a direct ranking factor, but they can influence how users understand and click a search result. We optimise them for relevance, differentiation and realistic click value.",
  },
  {
    question: "Do you add schema markup during On Page SEO?",
    answer:
      "Where relevant, yes. We review schema types such as Service, Article, Product, FAQ, Breadcrumb and Organisation. Markup must reflect visible page content and follow current eligibility requirements.",
  },
  {
    question: "How long does On Page SEO take to show results?",
    answer:
      "Some pages can improve after they are recrawled and re-evaluated, while competitive topics usually require more time. Results depend on current rankings, content quality, technical condition, authority, competition and how quickly recommendations are implemented.",
  },
  {
    question: "How do you measure On Page SEO performance?",
    answer:
      "We measure rankings, query coverage, impressions, clicks, click-through rate, landing-page engagement, schema visibility and conversion activity. Reporting focuses on the performance of the specific pages and search themes that were optimised.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "On Page SEO Services",
  serviceType: "On Page Search Engine Optimization",
  description:
    "On Page SEO services covering search-intent mapping, titles, metadata, headings, content optimisation, internal linking, structured data and conversion alignment.",
  url: "https://www.brainadz.marketing/services/on-page-seo",
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
    name: "On Page SEO Deliverables",
    itemListElement: OPTIMISATION_AREAS.map((service) => ({
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

export default function OnPageSeoServicesPage() {
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
          src="/seo/on-page-seo-hero.jpg"
          alt="On Page SEO strategy for content structure, relevance and organic growth"
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
            <span className="text-white">On Page SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            On Page SEO Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve page relevance, content quality and organic conversions with
              search-intent mapping, structured optimisation and clearer user journeys.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Improve your priority pages
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="On Page SEO page navigation"
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
              On Page SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Make every important page easier to understand, rank and act on
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                On Page SEO connects search demand with page purpose. BrainADZ
                aligns keywords, headings, content, metadata, internal links,
                structured data and calls to action so each page communicates one
                clear answer to users and search engines.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The work goes beyond inserting keywords. Strong optimisation improves
                information quality, removes overlap, strengthens topical relevance
                and helps visitors continue toward the most useful next step.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your priority pages
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/on-page-seo-overview.jpg"
                  alt="On Page SEO overview showing content structure, metadata and keyword mapping"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective On Page SEO aligns search intent, page quality and conversion paths.
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

      {/* Search intent */}
      <section
        id="search-intent"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Search-intent strategy
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Give each page one clear search purpose
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Strong On Page SEO starts before rewriting. We first decide what the
              searcher needs, which page should satisfy it and what action makes sense
              after the answer.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {SEARCH_INTENT_LAYERS.map((item) => {
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

      {/* Optimisation areas */}
      <section
        id="optimisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  On Page SEO optimisation
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Improve every element that shapes page relevance and action
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each element has a specific role. Metadata earns attention, headings
              organise understanding, content satisfies intent and calls to action move
              the user forward.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {OPTIMISATION_AREAS.map((area) => {
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

      {/* Content quality */}
      <section
        id="content-quality"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/on-page-content-quality.jpg"
                alt="On Page SEO content quality review and topic coverage"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Content quality
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Strengthen the page with information worth ranking
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Search visibility is difficult to sustain when a page is generic,
              repetitive or unsupported. We improve the substance of the page, not
              only the placement of target phrases.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTENT_QUALITY_CHECKS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5"
                >
                  <h3 className="text-[16px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-black/58">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal linking */}
      <section
        id="internal-links"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Internal linking
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect related pages into a clear topic and conversion journey
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Internal links help search engines discover relationships and help users
              move from broad information to the most relevant service, product or
              next action.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INTERNAL_LINKING_AREAS.map((item) => {
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
                On Page SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A clear path from page audit to measurable improvement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every recommendation is tied to a page, intent, priority and expected
              outcome so implementation stays focused and reviewable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start with a page review
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
                  On Page SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure page visibility, engagement and conversion contribution
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting focuses on the pages and search themes that were actually
              optimised so progress can be connected to specific changes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/on-page-seo-reporting-dashboard.jpg"
                  alt="On Page SEO reporting dashboard showing rankings, clicks and conversions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Page-level reporting connects search performance with user behaviour and outcomes.
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
                On Page SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before optimising your pages
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand page targeting, content updates, metadata, schema, timelines
              and measurement before starting.
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