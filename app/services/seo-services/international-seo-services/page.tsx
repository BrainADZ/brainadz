/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ClipboardCheck,
  Code2,
  FileSearch,
  Globe2,
  Languages,
  Link2,
  Map,
  Monitor,
  Network,
  PanelsTopLeft,
  Route,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International SEO Services | Global Search Growth | BrainADZ",
  description:
    "International SEO services by BrainADZ help brands manage country and language targeting, hreflang, global site architecture, localisation, regional authority and market-level reporting.",
  alternates: {
    canonical: "/services/international-seo",
  },
  openGraph: {
    title: "International SEO Services | BrainADZ Marketing",
    description:
      "Expand organic visibility across countries and languages with structured international SEO strategy, localisation and technical governance.",
    type: "website",
    url: "/services/international-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "International SEO Services | BrainADZ Marketing",
    description:
      "International SEO for hreflang, country targeting, localisation, regional authority and global performance reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Localisation", href: "#localisation" },
  { label: "Governance", href: "#governance" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const INTERNATIONAL_BENEFITS = [
  {
    title: "Clear market targeting",
    description:
      "Help search engines and users understand which country, language and regional audience each page is intended to serve.",
    icon: Target,
  },
  {
    title: "Stronger local relevance",
    description:
      "Adapt search targeting, content, proof and conversion paths to the real needs of each priority market.",
    icon: Map,
  },
  {
    title: "Reduced duplication risk",
    description:
      "Use consistent architecture, canonical and hreflang rules to manage similar regional and language variants safely.",
    icon: Network,
  },
  {
    title: "Measurable global growth",
    description:
      "Compare visibility, traffic, leads and revenue by market instead of combining every region into one global total.",
    icon: BarChart3,
  },
];

const ARCHITECTURE_MODELS = [
  {
    number: "01",
    title: "Country-code domains",
    description:
      "Separate country-code domains can create strong local signals but require independent authority, technical maintenance and market operations.",
    focus: "Maximum market separation",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Subdirectories",
    description:
      "Country or language folders consolidate authority under one domain while supporting clear international URL structures and governance.",
    focus: "Shared authority and control",
    icon: Route,
  },
  {
    number: "03",
    title: "Subdomains",
    description:
      "Regional or language subdomains can support operational separation but often require stronger internal linking and authority coordination.",
    focus: "Operational independence",
    icon: Network,
  },
  {
    number: "04",
    title: "Hybrid structures",
    description:
      "Complex organisations may use different models across brands, markets or platforms and need explicit rules to prevent overlap.",
    focus: "Portfolio-specific architecture",
    icon: PanelsTopLeft,
  },
];

const INTERNATIONAL_CAPABILITIES = [
  {
    eyebrow: "Market and demand research",
    title: "Prioritise countries and languages using real search opportunity",
    description:
      "We compare market demand, competition, existing visibility, commercial readiness and operational capacity before recommending expansion.",
    points: [
      "Country and language keyword research",
      "Local search-result and competitor analysis",
      "Existing market-performance review",
      "Demand, competition and business-fit scoring",
      "Market-entry and rollout priorities",
    ],
    icon: Search,
  },
  {
    eyebrow: "International site architecture",
    title: "Choose a global structure that supports authority and operations",
    description:
      "Domains, subdomains, folders, navigation and market selectors are planned around SEO, platform constraints and long-term governance.",
    points: [
      "ccTLD, subdomain and subdirectory evaluation",
      "Country, language and region URL standards",
      "Global navigation and market-selector review",
      "Cross-market internal-linking rules",
      "Migration and architecture-change planning",
    ],
    icon: Network,
  },
  {
    eyebrow: "Hreflang implementation",
    title: "Connect equivalent country and language versions accurately",
    description:
      "We design and validate hreflang systems that reflect real alternate pages, reciprocal relationships and canonical consistency.",
    points: [
      "Language and country code mapping",
      "HTML, HTTP header or sitemap implementation",
      "Reciprocal and self-referencing validation",
      "Canonical and hreflang conflict resolution",
      "x-default and fallback-page strategy",
    ],
    icon: Code2,
  },
  {
    eyebrow: "International content strategy",
    title: "Map global and market-specific demand to the right pages",
    description:
      "Shared topics, market-specific searches and local commercial priorities are organised without creating uncontrolled page duplication.",
    points: [
      "Global versus local page ownership",
      "Market-specific content-gap analysis",
      "Regional service and product targeting",
      "Duplicate and cannibalisation controls",
      "Local content-cluster planning",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Localisation and adaptation",
    title: "Adapt the complete search and conversion experience",
    description:
      "Localisation covers search terminology, examples, currencies, units, proof, policies and calls to action—not only translated paragraphs.",
    points: [
      "Local keyword and terminology alignment",
      "Currency, units and market conventions",
      "Regional proof and trust signals",
      "Local offers, policies and contact paths",
      "Quality review with local expertise",
    ],
    icon: Languages,
  },
  {
    eyebrow: "Regional authority building",
    title: "Strengthen trust within each priority market",
    description:
      "We develop relevant local links, citations, media mentions, partnerships and brand signals instead of relying entirely on global-domain authority.",
    points: [
      "Regional publisher and industry outreach",
      "Local business and market citations",
      "Partner, association and supplier opportunities",
      "Country-specific digital PR",
      "Regional backlink and mention monitoring",
    ],
    icon: Link2,
  },
];

const LOCALISATION_LAYERS = [
  {
    title: "Search language",
    description:
      "Use the terminology, phrasing, spelling and product language that people in the market actually search.",
    icon: Search,
  },
  {
    title: "Commercial context",
    description:
      "Reflect local currencies, delivery models, regulations, buying processes, service coverage and conversion expectations.",
    icon: Building2,
  },
  {
    title: "Trust and proof",
    description:
      "Show relevant certifications, testimonials, case evidence, partners, contact details and operational credibility for the market.",
    icon: ShieldCheck,
  },
  {
    title: "User experience",
    description:
      "Make market selection, navigation, forms, support and mobile journeys intuitive for regional users.",
    icon: Monitor,
  },
];

const TECHNICAL_CONTROLS = [
  {
    title: "Canonical consistency",
    text: "Each market or language version should use a canonical strategy that supports its intended indexable status.",
  },
  {
    title: "Hreflang reciprocity",
    text: "Alternate references should be valid, reciprocal and aligned with the correct language-country relationship.",
  },
  {
    title: "Redirect behaviour",
    text: "Automatic redirects should not block users or crawlers from accessing alternative market and language versions.",
  },
  {
    title: "Index and sitemap hygiene",
    text: "International sitemaps, status codes, directives and market URLs should remain accurate as pages launch, change or retire.",
  },
];

const GOVERNANCE_LAYERS = [
  {
    title: "Global standards",
    description:
      "Shared rules for architecture, templates, metadata, hreflang, schema, internal links, redirects and quality assurance.",
    icon: ShieldCheck,
  },
  {
    title: "Market ownership",
    description:
      "Clear accountability for local keyword research, content approval, proof, offers, legal requirements and performance.",
    icon: Users,
  },
  {
    title: "Localisation workflow",
    description:
      "Defined processes for briefs, translation, local adaptation, review, publishing, updates and deprecation.",
    icon: Workflow,
  },
  {
    title: "Release validation",
    description:
      "Technical and content checks before launch, after deployment and whenever shared templates or routing systems change.",
    icon: ClipboardCheck,
  },
];

const MARKET_MODELS = [
  {
    title: "Single-language, multi-country brands",
    description:
      "Support country-specific offers, locations, policies and proof even when several markets share the same primary language.",
    points: [
      "Country-specific keyword differences",
      "Duplicate-content and hreflang controls",
      "Regional conversion paths",
      "Country-level reporting",
    ],
    icon: Map,
  },
  {
    title: "Multilingual websites",
    description:
      "Build language versions around local search behaviour rather than direct, word-for-word translation.",
    points: [
      "Language-specific keyword research",
      "Translation and adaptation workflows",
      "Hreflang and canonical governance",
      "Local-language content quality",
    ],
    icon: Languages,
  },
  {
    title: "Global ecommerce platforms",
    description:
      "Manage regional catalogues, currencies, inventory, delivery, product data and international product-page indexation.",
    points: [
      "Regional category and product mapping",
      "Currency and availability alignment",
      "Product variant and duplicate controls",
      "Market-level revenue reporting",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "International B2B organisations",
    description:
      "Coordinate global expertise with regional industries, distributors, offices, sales teams and longer enquiry journeys.",
    points: [
      "Country and industry-intent mapping",
      "Office, distributor and service coverage",
      "Regional case studies and proof",
      "Lead and assisted-conversion tracking",
    ],
    icon: Building2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Assess current international visibility",
    description:
      "We review markets, language versions, architecture, hreflang, rankings, traffic, conversions, authority and operational readiness.",
    timing: "Discovery",
    output: "International SEO baseline",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Prioritise markets and search demand",
    description:
      "Countries, languages, products, services and search themes are scored by opportunity, competition, business value and market readiness.",
    timing: "Market strategy",
    output: "Market and keyword opportunity map",
    icon: Target,
  },
  {
    number: "03",
    title: "Define architecture and technical rules",
    description:
      "We establish URL structures, navigation, hreflang, canonicals, sitemaps, redirects and market-selector behaviour.",
    timing: "Technical planning",
    output: "International architecture specification",
    icon: Code2,
  },
  {
    number: "04",
    title: "Build localisation and content plans",
    description:
      "Priority pages receive market-specific briefs covering keywords, terminology, proof, offers, internal links and conversion requirements.",
    timing: "Content planning",
    output: "Market-specific content roadmap",
    icon: Languages,
  },
  {
    number: "05",
    title: "Launch, validate and build authority",
    description:
      "Technical and content changes are tested, released and monitored while regional links, citations and mentions are developed.",
    timing: "Execution",
    output: "Validated market launches",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Measure markets and expand winners",
    description:
      "Visibility, traffic, conversions and technical health are reviewed by country and language to guide the next expansion cycle.",
    timing: "Ongoing review",
    output: "Market report and expansion backlog",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Market and language visibility",
    description:
      "Track keyword coverage and search performance separately across priority countries, languages and regional page groups.",
    metrics: [
      "Rankings by country and language",
      "Non-brand and brand visibility",
      "Winning and declining market pages",
      "Competitive market movement",
    ],
    icon: Search,
  },
  {
    title: "International technical health",
    description:
      "Monitor the technical systems that determine whether the correct regional pages are crawled, indexed and selected.",
    metrics: [
      "Hreflang errors and coverage",
      "Canonical and duplicate conflicts",
      "Indexed URLs by market",
      "Redirect, sitemap and status-code health",
    ],
    icon: Code2,
  },
  {
    title: "Localised content performance",
    description:
      "Evaluate whether adapted pages attract relevant users and satisfy market-specific search and conversion needs.",
    metrics: [
      "Landing-page traffic by market",
      "Query and topic coverage",
      "Engagement and conversion rate",
      "Content gaps and refresh priorities",
    ],
    icon: FileSearch,
  },
  {
    title: "International business contribution",
    description:
      "Connect organic performance with leads, transactions, revenue and assisted outcomes using market-level tracking.",
    metrics: [
      "Leads or revenue by country",
      "Market-level conversion performance",
      "New-customer contribution",
      "Expansion initiative performance",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your International SEO service?",
    answer:
      "International SEO can include country and language research, international site architecture, hreflang, canonical and sitemap governance, market-specific keyword mapping, content localisation, regional authority building, launch validation and country-level reporting. The final scope depends on your markets, platform and operating model.",
  },
  {
    question: "What is the difference between International SEO and Local SEO?",
    answer:
      "International SEO manages visibility across countries and languages, including architecture, hreflang, localisation and regional authority. Local SEO focuses on location-based searches, Google Business Profile, map visibility, citations, reviews and local landing pages within a defined service area or branch network.",
  },
  {
    question: "Should we use country domains, subdomains or subdirectories?",
    answer:
      "The right structure depends on existing authority, market operations, platform capability, legal requirements, brand strategy and maintenance capacity. Subdirectories often consolidate authority efficiently, while country-code domains provide stronger separation but require more independent investment.",
  },
  {
    question: "What is hreflang used for?",
    answer:
      "Hreflang helps search engines understand equivalent language or country versions of a page and select the most appropriate version for a user. It does not replace canonicals, redirects, localisation or a clear international architecture.",
  },
  {
    question: "Can translated content rank internationally?",
    answer:
      "Translated content can rank when it is accurate, useful and aligned with local search intent. Direct translation alone is often insufficient because keywords, terminology, examples, proof, offers and conversion expectations vary by market.",
  },
  {
    question: "Do we need separate pages for countries using the same language?",
    answer:
      "Only when the markets have meaningful differences in search demand, products, services, pricing, regulations, proof or conversion journeys. Near-identical country pages created only by changing the country name can create duplication and weak user value.",
  },
  {
    question: "Can you support international ecommerce SEO?",
    answer:
      "Yes. International ecommerce work can include regional categories and products, currencies, availability, shipping, variants, product data, hreflang, canonical rules, faceted navigation and market-level revenue reporting.",
  },
  {
    question: "How long does International SEO take to show results?",
    answer:
      "Technical corrections can improve market selection after recrawling, while new-country visibility and authority usually require sustained work. Timing depends on competition, domain authority, localisation quality, platform limitations, market demand and implementation speed.",
  },
  {
    question: "How do you measure International SEO performance?",
    answer:
      "We report visibility, clicks, landing-page performance, technical health, conversions and revenue by country, language and market page group. This prevents strong results in one region from hiding weak performance in another.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International SEO Services",
  serviceType: "International Search Engine Optimization",
  description:
    "International SEO services covering country and language targeting, global architecture, hreflang, localisation, regional authority and market-level reporting.",
  url: "https://www.brainadz.marketing/services/international-seo",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Global brands, multilingual websites, international ecommerce businesses and multi-region B2B organisations",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "International SEO Capabilities",
    itemListElement: INTERNATIONAL_CAPABILITIES.map((capability) => ({
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

export default function InternationalSeoServicesPage() {
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
          src="/seo/international-seo-hero.jpg"
          alt="International SEO strategy for countries, languages and global search growth"
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
            <span className="text-white">International SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            International SEO Services
          </h1>

          <div className="mt-auto max-w-[850px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Expand organic visibility across countries and languages with clear
              market targeting, hreflang, localised content and scalable global governance.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your global search growth
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="International SEO page navigation"
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
              International SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Help every market find the right version of your brand
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                International SEO connects global website structure with local search
                behaviour. BrainADZ aligns countries, languages, page variants,
                hreflang, content and regional authority so each market receives the
                most relevant search experience.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The work is not limited to translation. Strong international
                performance depends on market selection, architecture, local
                terminology, proof, policies, conversion paths and the ability to
                manage change consistently across regions.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your international setup
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/international-seo-overview.jpg"
                  alt="International SEO overview showing countries, languages and market performance"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                International SEO connects market targeting, localisation, technical
                signals and regional performance.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {INTERNATIONAL_BENEFITS.map((benefit) => {
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

      <section
        id="architecture"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  International site architecture
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Choose a market structure the business can sustain
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Every architecture model has different authority, operational and
              maintenance implications. The right choice depends on the organisation,
              not on one universal SEO rule.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {ARCHITECTURE_MODELS.map((item) => {
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
                  International SEO capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Coordinate technical targeting, local relevance and regional authority
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              International growth requires one connected system. Market research,
              architecture, hreflang, localisation and authority cannot be managed as isolated tasks.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {INTERNATIONAL_CAPABILITIES.map((capability) => {
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

      <section
        id="localisation"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/international-seo-localisation.jpg"
                alt="International SEO localisation across language, currency and market experience"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Search-led localisation
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Localise the complete market experience, not only the words
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A translated page can remain commercially irrelevant. Localised pages
              need the search language, context, trust and user experience expected
              within the target market.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {LOCALISATION_LAYERS.map((item) => {
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

      <section className="border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                International technical controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Keep regional signals consistent as the website changes
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Hreflang cannot compensate for incorrect canonicals, blocked pages,
              broken redirects or inconsistent market URLs. The complete technical
              system must agree.
            </p>
          </div>

          <div className="rounded-[14px] border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="flex items-center gap-4 border-b border-black/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                <Code2 className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  Technical validation
                </p>
                <h3 className="mt-1 text-[24px] font-semibold text-black">
                  Four systems that must remain aligned
                </h3>
              </div>
            </div>

            <div className="mt-2 divide-y divide-black/10">
              {TECHNICAL_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-4 py-5 sm:grid-cols-[48px_1fr] sm:items-start"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1122B]/20 bg-[#fff1f1] text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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
                  International business models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt international SEO to how the organisation actually sells
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Country variants, multilingual content, ecommerce catalogues and B2B
              lead journeys require different architecture and localisation rules.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {MARKET_MODELS.map((model) => {
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

      <section
        id="governance"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/international-seo-governance.jpg"
                alt="International SEO governance across global and regional teams"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Global and local governance
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Balance global consistency with local market expertise
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Central teams protect architecture and standards, while regional teams
              supply market knowledge, proof, terminology and commercial context.
              Both roles need clear ownership.
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

      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                International SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From market opportunity to validated international growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Markets are prioritised, structured, localised and measured through one
              roadmap so expansion remains technically controlled and commercially relevant.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your international roadmap
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
                  International SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure every market separately before judging global growth
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Global totals can hide weak markets, technical conflicts and localised
              pages that fail to convert. Reporting keeps country and language performance visible.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/international-seo-reporting-dashboard.jpg"
                  alt="International SEO reporting dashboard by country and language"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Market-level reporting connects international technical health,
                visibility and commercial outcomes.
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

      <section
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                International SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before expanding across markets
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand architecture, hreflang, localisation, country pages,
              ecommerce support, timelines and market reporting before starting.
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