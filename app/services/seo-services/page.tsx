/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Link2,
  MapPin,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services | Organic Search Growth | BrainADZ Marketing",
  description:
    "BrainADZ SEO services cover SEO audits, on-page SEO, technical SEO, off-page SEO, link building, local SEO, ecommerce SEO, enterprise SEO and international SEO.",
  alternates: {
    canonical: "/services/seo-services",
  },
  openGraph: {
    title: "SEO Services | BrainADZ Marketing",
    description:
      "Improve search visibility, technical health, content relevance and organic conversions with a structured SEO programme.",
    type: "website",
    url: "/services/seo-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | BrainADZ Marketing",
    description:
      "SEO audits, technical optimisation, content improvement, authority building, local SEO, ecommerce SEO and organic growth reporting.",
  },
};

const SEO_SERVICES = [
  {
    title: "SEO Audit Services",
    slug: "seo-audit-services",
    description:
      "Identify technical, content, authority, indexing and conversion issues through a structured website and search-performance audit.",
    icon: FileSearch,
    result: "Opportunity Map",
  },
  {
    title: "On-Page SEO",
    slug: "on-page-seo",
    description:
      "Improve page titles, headings, copy, internal links, media, metadata and search intent across important landing pages.",
    icon: Search,
    result: "Page Relevance",
  },
  {
    title: "Technical SEO",
    slug: "technical-seo",
    description:
      "Improve crawling, indexing, site architecture, structured data, Core Web Vitals and technical search accessibility.",
    icon: Settings2,
    result: "Technical Health",
  },
  {
    title: "Off-Page SEO",
    slug: "off-page-seo",
    description:
      "Strengthen brand authority through relevant mentions, digital PR opportunities, citations and trusted external signals.",
    icon: Globe2,
    result: "Brand Authority",
  },
  {
    title: "Link-Building Services",
    slug: "link-building-services",
    description:
      "Build relevant, editorially useful backlinks through research, outreach, content assets and relationship-led acquisition.",
    icon: Link2,
    result: "Link Equity",
  },
  {
    title: "Local SEO Services",
    slug: "local-seo-services",
    description:
      "Improve local discovery through Google Business Profile, location pages, citations, reviews and service-area optimisation.",
    icon: MapPin,
    result: "Local Visibility",
  },
  {
    title: "Ecommerce SEO Services",
    slug: "ecommerce-seo-services",
    description:
      "Optimise categories, products, filters, internal linking and technical ecommerce systems for qualified organic traffic.",
    icon: ShoppingCart,
    result: "Organic Revenue",
  },
  {
    title: "Enterprise SEO Services",
    slug: "enterprise-seo-services",
    description:
      "Coordinate SEO across large websites, multiple teams, templates, markets and complex publishing or development workflows.",
    icon: Building2,
    result: "Scalable SEO",
  },
  {
    title: "International SEO Services",
    slug: "international-seo-services",
    description:
      "Structure multilingual and multi-country websites with hreflang, regional targeting and market-specific search strategies.",
    icon: Globe2,
    result: "Global Reach",
  },
];

const SEO_JOURNEY_STAGES = [
  {
    title: "Discover",
    text: "Audit search visibility, competitors, keywords, crawling, indexing, content gaps and business priorities.",
    icon: FileSearch,
  },
  {
    title: "Build Relevance",
    text: "Align page architecture, search intent, content, metadata and internal linking with the right opportunities.",
    icon: Target,
  },
  {
    title: "Strengthen Authority",
    text: "Improve trust through useful content, relevant links, local signals, mentions and stronger brand evidence.",
    icon: ShieldCheck,
  },
  {
    title: "Measure & Grow",
    text: "Track visibility, rankings, qualified traffic, conversions and technical progress to guide the next priorities.",
    icon: Gauge,
  },
];

const SEO_ROADMAP = [
  {
    label: "Days 1–15",
    title: "Audit & Baseline",
    points: [
      "Review technical SEO, indexing and crawl behaviour",
      "Map rankings, traffic, conversions and competitors",
      "Prioritise quick wins, risks and implementation needs",
    ],
  },
  {
    label: "Days 16–45",
    title: "Foundation & Content",
    points: [
      "Improve priority pages and search-intent alignment",
      "Fix technical issues and internal-linking gaps",
      "Create content briefs and authority opportunities",
    ],
  },
  {
    label: "Days 46–90",
    title: "Authority & Growth",
    points: [
      "Publish, optimise and expand high-value content",
      "Strengthen local, ecommerce or international signals",
      "Measure organic impact and define the next roadmap",
    ],
  },
];

const REPORTING_ROWS = [
  { label: "Technical Health", value: "Improving", width: "86%" },
  { label: "Search Visibility", value: "Growing", width: "78%" },
  { label: "Priority Rankings", value: "Tracked", width: "72%" },
  { label: "Organic Conversions", value: "Measured", width: "82%" },
];

const AUDIT_ITEMS = [
  "Crawling, indexing, robots directives and XML sitemaps",
  "Site architecture, internal linking and URL structure",
  "Search intent, keyword targeting and content quality",
  "Metadata, headings, media and structured data",
  "Core Web Vitals, mobile usability and page performance",
  "Backlink quality, local signals and competitor authority",
  "Organic traffic, landing pages, events and conversions",
  "Migration, international, ecommerce or enterprise risks",
];

const FUNNEL_COLORS = ["#E1122B", "#E1122B", "#E1122B", "#E1122B"];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization Services",
  description:
    "SEO services covering technical SEO, on-page SEO, SEO audits, off-page SEO, link building, local SEO, ecommerce SEO, enterprise SEO and international SEO.",
  url: "https://www.brainadz.marketing/services/seo-services",
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
    name: "SEO Service Stack",
    itemListElement: SEO_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function SEOServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HeroSection />
      <SEOServicesSection />
      <SEOJourneySection />
      <SEORoadmapSection />
      <SEOReportingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
      <img
        src="/banner/2.webp"
        alt="SEO strategy, technical optimisation and organic search growth"
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
            className="text-[#E1122B] transition hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/70">/</span>
          <span className="text-white">SEO Services</span>
        </nav>

        <h1 className="mt-7 max-w-[900px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
          SEO Services
        </h1>

        <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
          <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
            Build stronger search visibility through technical clarity, useful
            content, trusted authority and measurable organic growth.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#E1122B] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:min-h-14 sm:px-6"
          >
            Discuss your SEO goals
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="rounded-sm border border-black/10 bg-white p-4">
      <div className="flex items-center justify-between gap-4 text-[13px]">
        <span className="text-black/64">{label}</span>
        <span className="font-semibold text-[#E1122B]">{value}</span>
      </div>
      <div className="mt-3 h-2 bg-black/10">
        <div className="h-full bg-[#E1122B]" style={{ width }} />
      </div>
    </div>
  );
}

function SEOServicesSection() {
  return (
    <section
      id="service-directory"
      className="relative border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#E1122B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#E1122B]">
              SEO service stack
            </p>

            <h2 className="mt-5 max-w-[720px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              SEO services built for visibility, relevance and sustainable growth.
            </h2>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              Explore our SEO capabilities for technical health, content quality,
              authority, local discovery, ecommerce performance and complex
              multi-market websites.
            </p>

            <div className="relative mt-9 h-[300px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] sm:h-[360px] lg:h-[430px]">
              <img
                src="/seo-services/seo-services-stack.jpg"
                alt="SEO services for technical optimisation, content and organic search growth"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="max-w-[450px] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
                  One SEO roadmap connecting technical health, content, authority
                  and business outcomes.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-white"
                >
                  Request an SEO review
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SEO_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/seo-services/${service.slug}`}
                  id={service.slug}
                  key={service.title}
                  className="group relative min-h-[235px] overflow-hidden rounded-3xl border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] sm:p-6"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#E1122B]/10 blur-2xl transition group-hover:bg-[#E1122B]/18" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#E1122B]/25 bg-[#E1122B]/10 text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>

                      <span className="rounded-full border border-black/10 bg-[#fbfbfb] px-3 py-1 text-[11px] font-semibold text-black/48">
                        {service.result}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[20px] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[22px]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-[13px] font-semibold text-[#E1122B] transition group-hover:text-black">
                      Open service page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SEOJourneySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-220px] h-[520px] w-[520px] rounded-full bg-[#E1122B]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              Organic growth journey
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[52px]">
              Every SEO activity has a clear role in building organic growth.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
            Rankings alone do not create business value. Technical accessibility,
            useful content, trusted authority and conversion-ready landing pages
            must work together throughout the search journey.
          </p>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/10 bg-white/2.5 p-5 sm:mt-16 sm:p-7 lg:p-9">
          <div className="relative">
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[linear-gradient(180deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:hidden" />

            <div className="absolute left-8 right-8 top-[34px] hidden h-px bg-[linear-gradient(90deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:block" />

            <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
              {SEO_JOURNEY_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const color = FUNNEL_COLORS[index % FUNNEL_COLORS.length];

                return (
                  <div
                    key={stage.title}
                    className="relative flex gap-5 lg:block"
                  >
                    <div
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.35)] lg:mx-auto"
                      style={{
                        backgroundColor: color,
                        color: "#ffffff",
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <div
                      className={`relative mt-0 w-full rounded-[28px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#141414] lg:mt-8 ${
                        index % 2 === 1 ? "lg:translate-y-10" : ""
                      }`}
                    >
                      <div
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15 blur-2xl"
                        style={{ backgroundColor: color }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-5">
                          <span
                            className="rounded-full px-3 py-1 text-[12px] font-semibold"
                            style={{
                              backgroundColor: `${color}24`,
                              color,
                            }}
                          >
                            Step {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px flex-1 bg-white/10" />
                        </div>

                        <h3 className="mt-7 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[26px]">
                          {stage.title}
                        </h3>

                        <p className="mt-4 text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 hidden items-center justify-center gap-3 text-[13px] font-medium text-white/42 lg:flex">
              <span>Audit</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Relevance</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Authority</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SEORoadmapSection() {
  return (
    <section className="border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              SEO roadmap
            </p>
            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Move from diagnosis to implementation and measurable progress.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px]">
            The roadmap is prioritised around business value, technical risk,
            implementation effort and the search opportunities most likely to
            improve qualified organic visibility.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SEO_ROADMAP.map((sprint) => (
            <article
              key={sprint.label}
              className="rounded-[28px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] sm:p-7"
            >
              <span className="inline-flex rounded-full bg-[#E1122B] px-4 py-2 text-[12px] font-semibold text-white">
                {sprint.label}
              </span>

              <h3 className="mt-7 text-[26px] font-semibold tracking-[-0.035em] text-black">
                {sprint.title}
              </h3>

              <ul className="mt-6 space-y-4 border-t border-black/10 pt-6">
                {sprint.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] leading-6 text-black/62"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOReportingSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
        <div className="rounded-md border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
                Organic visibility
              </p>

              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[38px]">
                SEO reporting that explains what changed.
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#E1122B] text-white">
              <LineChart className="h-7 w-7" strokeWidth={1.7} />
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <ReportBox label="Organic landing pages" value="Reviewed" />
            <ReportBox label="Keyword groups" value="Mapped" />
            <ReportBox label="Technical actions" value="Prioritised" />
            <ReportBox label="Growth opportunities" value="Clear" />
          </div>

          <div className="mt-7 space-y-3">
            {REPORTING_ROWS.map((row) => (
              <MetricRow key={row.label} {...row} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
            SEO audit checklist
          </p>

          <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
            We check the complete organic search system, not only rankings.
          </h2>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
            The audit shows where search visibility is being limited, which
            problems require development support and which content or authority
            opportunities should be prioritised next.
          </p>

          <div className="mt-9 grid gap-3">
            {AUDIT_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-sm border border-black/10 bg-white p-4"
              >
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                <p className="text-[15px] font-medium leading-6 text-black/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-black/10 bg-white p-5">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-black/38">
        {label}
      </p>
      <p className="mt-3 text-[25px] font-semibold tracking-[-0.04em] text-black">
        {value}
      </p>
    </div>
  );
}