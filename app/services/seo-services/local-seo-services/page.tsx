/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Gauge,
  Globe2,
  Landmark,
  Link2,
  ListChecks,
  Map,
  MapPin,
  MousePointerClick,
  Navigation,
  PhoneCall,
  Route,
  Search,
  ShieldCheck,
  Star,
  Store,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Services | Google Maps & Local Search | BrainADZ",
  description:
    "Local SEO services by BrainADZ improve Google Business Profile visibility, map-pack rankings, citations, reviews, location pages and local lead tracking.",
  alternates: {
    canonical: "/services/local-seo-services",
  },
  openGraph: {
    title: "Local SEO Services | BrainADZ Marketing",
    description:
      "Improve local search visibility, Google Maps presence and qualified enquiries with a structured Local SEO strategy.",
    type: "website",
    url: "/services/local-seo-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services | BrainADZ Marketing",
    description:
      "Local SEO strategy for Google Business Profile, map rankings, citations, reviews, location pages and lead tracking.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Business Types", href: "#business-types" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "Readiness", href: "#readiness" },
  { label: "FAQs", href: "#faqs" },
];

const LOCAL_SEO_BENEFITS = [
  {
    title: "Stronger map visibility",
    description:
      "Improve how consistently your business appears across Google Maps, local packs and location-led searches.",
    icon: Map,
  },
  {
    title: "More qualified local leads",
    description:
      "Reach nearby customers who are actively searching for your service, product, branch or service area.",
    icon: Target,
  },
  {
    title: "Greater local trust",
    description:
      "Build confidence through accurate business information, useful reviews, relevant pages and credible local signals.",
    icon: BadgeCheck,
  },
  {
    title: "Clearer performance insight",
    description:
      "Connect rankings and profile activity with calls, direction requests, form submissions and real enquiries.",
    icon: BarChart3,
  },
];

const CORE_LOCAL_SEO_SERVICES = [
  {
    eyebrow: "Google Business Profile",
    title: "Turn your business profile into a complete local conversion asset",
    description:
      "We optimize the information, categories, services, products, media and ongoing activity that help Google understand your business and help searchers choose it.",
    points: [
      "Primary and secondary category review",
      "Business description, services and product setup",
      "Address, service-area, hours and attribute accuracy",
      "Photo, post, Q&A and profile-content guidance",
      "Duplicate, suspension-risk and profile-hygiene review",
    ],
    icon: Store,
  },
  {
    eyebrow: "Local search strategy",
    title: "Map keywords to the way local customers actually search",
    description:
      "Local keyword research goes beyond city-name variations. We organize service, problem, urgency, neighbourhood and near-me intent into a practical search architecture.",
    points: [
      "Service-plus-location keyword discovery",
      "Implicit and explicit local-intent analysis",
      "Competitor and map-result gap review",
      "Keyword-to-page and keyword-to-profile mapping",
      "Priority selection based on relevance and opportunity",
    ],
    icon: Search,
  },
  {
    eyebrow: "Location landing pages",
    title: "Create useful location pages without thin or duplicated content",
    description:
      "We optimize branch, city and service-area pages with unique local proof, relevant service detail and conversion paths instead of doorway-page templates.",
    points: [
      "Unique branch, city and service-area content",
      "Local headings, metadata and internal links",
      "Embedded maps, directions and branch details",
      "Local proof, FAQs, testimonials and project signals",
      "LocalBusiness and supporting structured data",
    ],
    icon: Landmark,
  },
  {
    eyebrow: "Citations and NAP",
    title: "Keep your business identity consistent across the local ecosystem",
    description:
      "We audit and manage your name, address and phone details across important directories, aggregators and industry platforms to reduce ambiguity.",
    points: [
      "NAP consistency and duplicate-listing audit",
      "Core directory and industry citation cleanup",
      "Branch-specific citation management",
      "Incorrect address and phone-number correction",
      "Citation inventory and status reporting",
    ],
    icon: ListChecks,
  },
  {
    eyebrow: "Reviews and reputation",
    title: "Support a review system that builds trust and business insight",
    description:
      "We help establish ethical review-request and response workflows while using recurring customer feedback to improve profile content and conversion readiness.",
    points: [
      "Review acquisition workflow guidance",
      "Response framework for positive and negative reviews",
      "Review velocity and sentiment observation",
      "Branch-level reputation monitoring",
      "Policy-safe review practices without incentives or gating",
    ],
    icon: Star,
  },
  {
    eyebrow: "Local authority",
    title: "Strengthen prominence with relevant local and industry signals",
    description:
      "We pursue credible mentions, partnerships and links that support local authority rather than relying on low-quality directory volume.",
    points: [
      "Local and industry link prospecting",
      "Association, supplier and partner opportunities",
      "Community, event and sponsorship mentions",
      "Local digital PR and expert contribution ideas",
      "Link-quality review and transparent reporting",
    ],
    icon: Link2,
  },
];

const LOCAL_VISIBILITY_FRAMEWORK = [
  {
    number: "01",
    title: "Relevance",
    description:
      "Align your website, Google Business Profile, categories, services and content with the exact local needs behind target searches.",
    focus: "Service accuracy and intent match",
    icon: Compass,
  },
  {
    number: "02",
    title: "Proximity",
    description:
      "Proximity cannot be manufactured, but correct locations, service areas, branch pages and geographic signals help Google evaluate eligibility accurately.",
    focus: "Location clarity and coverage",
    icon: Navigation,
  },
  {
    number: "03",
    title: "Prominence",
    description:
      "Build stronger local authority through reviews, citations, links, brand mentions, complete profiles and a credible website presence.",
    focus: "Trust and local authority",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Conversion readiness",
    description:
      "Make every local visit easier to convert with clear calls to action, accurate contact details, proof, mobile usability and dependable tracking.",
    focus: "Calls, enquiries and visits",
    icon: MousePointerClick,
  },
];

const BUSINESS_TYPES = [
  {
    title: "Single-location businesses",
    description:
      "Build one dominant local presence around a primary branch, defined catchment area and the services most likely to generate qualified enquiries.",
    points: [
      "One primary Google Business Profile",
      "Focused local keyword map",
      "Core location and service-page optimization",
      "Local citations, reviews and authority development",
    ],
    icon: Building2,
  },
  {
    title: "Multi-location businesses",
    description:
      "Create a scalable system that gives every eligible branch unique local relevance while protecting brand consistency and central reporting.",
    points: [
      "Branch-level profile governance",
      "Unique location-page templates and content rules",
      "Duplicate and cannibalization controls",
      "Location-level rankings, actions and lead reporting",
    ],
    icon: Users,
  },
  {
    title: "Service-area businesses",
    description:
      "Clarify where you operate, what you provide and how customers can contact you without publishing thin pages for every nearby area.",
    points: [
      "Policy-aligned service-area profile setup",
      "Priority-area and service-intent mapping",
      "Service-area landing-page strategy",
      "Call, form and qualified-enquiry measurement",
    ],
    icon: Route,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit local visibility",
    description:
      "We review your website, Google Business Profile, map presence, competitors, citations, reviews, tracking and existing location architecture.",
    timing: "Initial phase",
    output: "Local SEO audit and issue inventory",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define markets and intent",
    description:
      "We prioritize services, branches, cities, service areas and search themes according to commercial value, local relevance and realistic opportunity.",
    timing: "Strategy phase",
    output: "Keyword, market and page map",
    icon: Target,
  },
  {
    number: "03",
    title: "Fix profile and website foundations",
    description:
      "We resolve critical profile, NAP, indexing, content, internal-linking, schema and conversion issues that limit local eligibility or trust.",
    timing: "Foundation phase",
    output: "Optimized local search foundation",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Build local relevance and authority",
    description:
      "We improve location content, citations, review workflows, profile activity and credible local signals based on the approved roadmap.",
    timing: "Ongoing execution",
    output: "Stronger relevance and prominence",
    icon: Globe2,
  },
  {
    number: "05",
    title: "Measure leads and refine priorities",
    description:
      "We connect visibility with actions and enquiries, then use ranking, profile and conversion data to decide the next cycle of work.",
    timing: "Monthly review",
    output: "Performance report and action plan",
    icon: BarChart3,
  },
];

const REPORTING_AREAS = [
  {
    title: "Local ranking and map-pack reporting",
    description:
      "Track priority keywords by target location, device and search context to understand coverage, volatility and competitive movement.",
    metrics: [
      "Map-pack and organic local positions",
      "Keyword coverage by branch or market",
      "Visibility changes across target areas",
      "Competitor movement and opportunity gaps",
    ],
    icon: MapPin,
  },
  {
    title: "Google Business Profile action tracking",
    description:
      "Measure how searchers interact with eligible profile actions and compare performance across time, services and locations.",
    metrics: [
      "Calls and website clicks",
      "Direction requests where applicable",
      "Profile views and search discovery",
      "Photo, post and interaction trends",
    ],
    icon: PhoneCall,
  },
  {
    title: "Local lead and enquiry tracking",
    description:
      "Connect local landing pages and profile traffic with meaningful business outcomes instead of reporting rankings in isolation.",
    metrics: [
      "Form submissions and tracked calls",
      "Landing-page conversion performance",
      "Branch or service-area lead attribution",
      "Qualified-enquiry and CRM alignment",
    ],
    icon: CheckCircle2,
  },
];

const READINESS_CHECKLIST = [
  "A verified and accessible Google Business Profile for each eligible location",
  "Correct business name, address, phone, hours and website information",
  "Clear ownership of profile access, calls, enquiries and customer responses",
  "A crawlable website with indexable service and location information",
  "Unique content for priority locations instead of duplicated doorway pages",
  "Consistent NAP details across key directories and business platforms",
  "A policy-safe process for requesting and responding to customer reviews",
  "Call, form and analytics tracking that can identify local conversions",
  "Realistic target markets based on actual branches or service coverage",
  "Operational capacity to respond quickly to local leads and profile messages",
];

const FAQS = [
  {
    question: "What is included in your Local SEO service?",
    answer:
      "A Local SEO engagement can include Google Business Profile optimization, local keyword research, location-page optimization, citation and NAP management, review workflow support, local authority building, structured data, tracking and monthly reporting. The final scope depends on your locations, business model, website condition and target markets.",
  },
  {
    question: "How is Local SEO different from regular SEO?",
    answer:
      "Local SEO focuses on searches with geographic intent and includes signals beyond the website, especially Google Business Profile, map results, proximity, citations, reviews and branch-level information. Regular SEO can target broader informational or national demand without the same location-specific requirements.",
  },
  {
    question: "Can Local SEO guarantee a top-three Google Maps ranking?",
    answer:
      "No responsible agency can guarantee a fixed map-pack position. Local results vary by searcher location, relevance, competition, prominence and Google updates. We improve the signals, coverage and conversion readiness you can control and report progress transparently.",
  },
  {
    question: "How long does Local SEO take to show results?",
    answer:
      "Critical profile, NAP and website corrections can improve visibility early, while competitive map rankings, review growth and authority usually require sustained work. Timing depends on your current condition, market competition, location, website strength and implementation speed.",
  },
  {
    question: "Do you optimize Google Business Profile listings?",
    answer:
      "Yes. We review categories, services, products, descriptions, hours, attributes, media, posts, Q&A, landing-page links, duplicate risks and ongoing profile hygiene. Any ownership, verification or reinstatement action that requires the business owner is coordinated with your team.",
  },
  {
    question: "Do you create pages for every city we serve?",
    answer:
      "Only when a page serves a genuine user need and can contain unique, useful local information. We avoid mass-producing thin city pages. The strategy may use priority service-area pages, strong core service pages or branch pages depending on eligibility, coverage and search demand.",
  },
  {
    question: "How do you handle Local SEO for multiple locations?",
    answer:
      "We create a scalable framework for profile governance, branch data, location-page structure, unique content, internal linking, citations, reviews and reporting. Each eligible location needs distinct information and performance visibility without weakening the overall brand architecture.",
  },
  {
    question: "Can you remove negative Google reviews?",
    answer:
      "We cannot remove legitimate reviews or promise removal. We can help identify reviews that may violate platform policies, organize a professional response process and improve the broader review system so future customers see a balanced and credible reputation.",
  },
  {
    question: "How do you measure Local SEO performance?",
    answer:
      "We measure map-pack and local organic visibility together with Google Business Profile actions, calls, website clicks, form submissions, direction requests where relevant and qualified enquiries. Reporting focuses on whether stronger local visibility is producing useful business activity.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services",
  serviceType: "Local Search Engine Optimization",
  description:
    "Local SEO services covering Google Business Profile optimization, local keywords, location pages, citations, reviews, local authority and lead tracking.",
  url: "https://www.brainadz.marketing/services/local-seo-services",
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
    "@type": "Audience",
    audienceType:
      "Single-location businesses, multi-location businesses and service-area businesses",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local SEO Deliverables",
    itemListElement: CORE_LOCAL_SEO_SERVICES.map((service) => ({
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

export default function LocalSeoServicesPage() {
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
          src="/seo/local-seo-hero.jpg"
          alt="Local SEO visibility across Google Maps and local search results"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_32%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.05)_48%,rgba(0,0,0,0.32)_100%)]" />

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
            <span className="text-white">Local SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[950px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Local SEO Services
          </h1>

          <div className="mt-auto max-w-[780px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve your Google Maps presence, local search visibility and
              qualified enquiries with a strategy built around real locations,
              service areas and customer intent.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Improve your local visibility
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Local SEO page navigation"
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

      {/* Overview and benefits */}
      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Local SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Be easier to find when nearby customers are ready to act
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Local SEO improves how clearly search engines understand your
                business, where you operate and which local searches you should
                be eligible to appear for. BrainADZ connects your Google Business
                Profile, website, location content, citations, reviews and local
                authority into one measurable visibility system.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The goal is not ranking for every city-name variation. It is to
                build accurate local relevance, strengthen trust and make it
                easier for qualified searchers to call, visit, request directions
                or submit an enquiry.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your local presence
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/local-seo-overview.jpg"
                  alt="Local SEO overview showing map rankings and business visibility"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Local search visibility connects profile quality, website
                relevance and conversion tracking.
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {LOCAL_SEO_BENEFITS.map((benefit) => {
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

      {/* Core services */}
      <section
        id="services"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Local SEO services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Every local signal should support the same business reality
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              We align profiles, pages, business data, reviews and authority so
              customers and search engines receive a consistent answer about who
              you are, what you offer and where you operate.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CORE_LOCAL_SEO_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {service.points.map((point) => (
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

      {/* Profile and location execution */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/google-business-profile-optimization.jpg"
                alt="Google Business Profile optimization for local search visibility"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Profile-to-page alignment
              </p>
            </div>
            <h2 className="mt-5 max-w-[850px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Connect Google Business Profile activity with useful local pages
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A complete profile cannot compensate for weak landing pages, and a
              strong website cannot replace accurate profile data. We align
              categories, services, profile links, location content, internal
              links and calls to action so each asset supports the next.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Profile completeness",
                  text: "Accurate details, relevant categories, services, media and ongoing content.",
                },
                {
                  title: "Landing-page relevance",
                  text: "Clear service and location information matched to the profile and search intent.",
                },
                {
                  title: "Trust signals",
                  text: "Reviews, proof, business details, policies and local credibility in the right places.",
                },
                {
                  title: "Action tracking",
                  text: "Calls, clicks, forms and branch-level outcomes measured through consistent tagging.",
                },
              ].map((item) => (
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

      {/* Framework */}
      <section
        id="framework"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Local visibility framework
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Relevance, proximity and prominence must lead to a useful action
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Local rankings are contextual. Our framework improves the signals
              you can control while making the resulting visibility easier to
              convert into calls, enquiries and visits.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {LOCAL_VISIBILITY_FRAMEWORK.map((item) => {
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

      {/* Business types */}
      <section
        id="business-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Business-specific strategy
            </p>
          </div>
          <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            The right local architecture depends on how your business operates
          </h2>
          <p className="mt-6 max-w-[820px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            A storefront, a branch network and a service-area business should not
            use the same profile, page or reporting model. We structure the work
            around actual eligibility, customer journeys and operational reach.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {BUSINESS_TYPES.map((business) => {
              const Icon = business.icon;

              return (
                <article
                  key={business.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {business.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {business.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {business.points.map((point) => (
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

      {/* Keyword and location-page strategy */}
      <section className="border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Local intent and location pages
              </p>
            </div>
            <h2 className="mt-5 max-w-[840px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Build pages for meaningful local demand, not every place name
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              We identify when search intent requires a dedicated location page,
              when an existing service page can serve the demand and when a new
              page would only create duplication. Priority pages receive unique
              local proof, service detail, internal links and conversion paths.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  term: "Explicit intent",
                  detail: "Searches that include a city, neighbourhood, branch or area name.",
                },
                {
                  term: "Implicit intent",
                  detail: "Searches where Google infers that the user needs a nearby provider.",
                },
                {
                  term: "Service intent",
                  detail: "Specific local demand tied to a product, service, problem or urgency.",
                },
                {
                  term: "Conversion intent",
                  detail: "Signals that indicate a searcher is ready to call, visit or enquire.",
                },
              ].map((item) => (
                <div
                  key={item.term}
                  className="rounded-[14px] border border-black/10 bg-white p-5"
                >
                  <dt className="text-[16px] font-semibold text-black">
                    {item.term}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-6 text-black/58">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure>
            <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/local-keyword-location-pages.jpg"
                alt="Local keyword mapping and location landing-page strategy"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
              Local keyword mapping helps prevent duplicated pages and unclear
              search targeting.
            </figcaption>
          </figure>
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
                Local SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A prioritized path from local audit to measurable enquiry growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Local SEO becomes manageable when profile work, website changes,
              citations, reviews and reporting follow one roadmap with clear
              ownership and business priorities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start with a local SEO review
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
                  Local SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure visibility, profile actions and the leads they generate
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Ranking reports are useful only when they are connected to profile
              interactions, landing-page behavior and qualified business
              outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/local-seo-reporting-dashboard.jpg"
                  alt="Local SEO reporting dashboard with map rankings and lead tracking"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Reporting should distinguish visibility growth from meaningful
                customer actions.
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
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
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

      {/* Readiness checklist */}
      <section
        id="readiness"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Local SEO readiness checklist
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Confirm the foundations before scaling local visibility
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Missing access, inconsistent business data or weak lead handling can
              limit the value of otherwise strong Local SEO execution. This
              checklist helps identify what needs attention first.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Check your Local SEO readiness
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="flex items-center gap-4 border-b border-black/10 pb-6">
              <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                <ClipboardCheck className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  Foundation review
                </p>
                <h3 className="mt-1 text-[24px] font-semibold text-black">
                  Ten checks before execution begins
                </h3>
              </div>
            </div>

            <ol className="mt-2 divide-y divide-black/10">
              {READINESS_CHECKLIST.map((item, index) => (
                <li
                  key={item}
                  className="grid gap-4 py-5 sm:grid-cols-[48px_1fr] sm:items-start"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1122B]/20 bg-[#fff1f1] text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-[14px] leading-7 text-black/68 sm:text-[15px]">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
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
                Local SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before you improve local search visibility
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              These answers cover the Local SEO questions businesses usually ask
              about Google Maps, locations, reviews, timelines and reporting.
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
            {FAQS.map((faq, index) => (
              <details key={faq.question} className="group border-b border-black/10">
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
                  <span className="sr-only">FAQ item {index + 1}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}