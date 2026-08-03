/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileSearch,
  Gauge,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  RotateCcw,
  Search,
  ShoppingCart,
  Target,
  Users,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Performance Marketing Services | PPC, Paid Ads & Lead Generation | BrainADZ",
  description:
    "BrainADZ performance marketing services for Google Ads, Meta Ads, LinkedIn Ads, SEM, YouTube Ads, Shopping Ads, ecommerce PPC, lead generation, remarketing, display advertising, landing page optimisation and PPC audits.",
  alternates: {
    canonical: "/services/performance-marketing",
  },
  openGraph: {
    title: "Performance Marketing Services | BrainADZ Marketing",
    description:
      "Build measurable paid-media growth through stronger campaign structure, conversion tracking, landing pages, lead quality and continuous optimisation.",
    type: "website",
    url: "/services/performance-marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Services | BrainADZ Marketing",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, SEM, YouTube, ecommerce PPC, remarketing, landing pages and paid-media audits.",
  },
};

const PERFORMANCE_SERVICES = [
  {
    title: "Google Ads",
    slug: "google-ads",
    description:
      "Capture high-intent searches and drive measurable leads or sales through structured Google Search, Performance Max and conversion-led campaigns.",
    icon: Search,
    result: "High Intent",
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    description:
      "Build demand and generate conversions across Facebook and Instagram using audience strategy, creative testing and funnel-based campaigns.",
    icon: Users,
    result: "Social Demand",
  },
  {
    title: "LinkedIn Ads",
    slug: "linkedin-ads",
    description:
      "Reach professional audiences using role, company, industry and account targeting for B2B lead generation and pipeline growth.",
    icon: Target,
    result: "B2B Leads",
  },
  {
    title: "Search Engine Marketing (SEM)",
    slug: "search-engine-marketing",
    description:
      "Coordinate paid search strategy, keywords, bids, ads, landing pages and conversion tracking around clear commercial outcomes.",
    icon: BarChart3,
    result: "Search Growth",
  },
  {
    title: "YouTube Ads",
    slug: "youtube-ads",
    description:
      "Use video campaigns to create awareness, demonstrate value, support consideration and move relevant viewers toward action.",
    icon: Video,
    result: "Video Reach",
  },
  {
    title: "Google Shopping Ads",
    slug: "google-shopping-ads",
    description:
      "Promote products through optimised shopping feeds, product groups, bidding strategies and revenue-focused campaign structures.",
    icon: ShoppingCart,
    result: "Product Sales",
  },
  {
    title: "Ecommerce PPC",
    slug: "ecommerce-ppc",
    description:
      "Connect paid search, shopping, social and remarketing with product performance, order value, customer acquisition and revenue.",
    icon: LayoutDashboard,
    result: "Revenue Growth",
  },
  {
    title: "Lead Generation Services",
    slug: "lead-generation-services",
    description:
      "Generate and improve qualified enquiries through paid campaigns, landing pages, forms, calls, WhatsApp and sales-feedback loops.",
    icon: Megaphone,
    result: "Qualified Leads",
  },
  {
    title: "Remarketing Ads",
    slug: "remarketing-ads",
    description:
      "Re-engage visitors, viewers, cart users and warm prospects with relevant messages based on behaviour, stage and recency.",
    icon: RotateCcw,
    result: "Re-Engagement",
  },
  {
    title: "Display Advertising",
    slug: "display-advertising",
    description:
      "Build visibility and consideration through audience, placement and contextual display campaigns with controlled reach and frequency.",
    icon: MonitorSmartphone,
    result: "Brand Visibility",
  },
  {
    title: "Landing Page Optimization",
    slug: "landing-page-optimization",
    description:
      "Improve campaign conversion through clearer messaging, stronger offers, responsive layouts, faster pages, forms and CTA testing.",
    icon: MousePointerClick,
    result: "More Conversions",
  },
  {
    title: "PPC Audit Services",
    slug: "ppc-audit-services",
    description:
      "Review account structure, targeting, search terms, tracking, creative, landing pages, budgets and wasted-spend opportunities.",
    icon: FileSearch,
    result: "Account Clarity",
  },
];

const FUNNEL_STAGES = [
  {
    title: "Create Demand",
    text: "Use Meta, YouTube and Display campaigns to introduce the brand, product or offer to relevant audiences before active search begins.",
    icon: Megaphone,
  },
  {
    title: "Capture Intent",
    text: "Use Google Ads, SEM and Shopping campaigns to reach people actively searching for products, services or solutions.",
    icon: Search,
  },
  {
    title: "Convert Traffic",
    text: "Align ads, offers, landing pages, forms, calls and checkout journeys so paid attention turns into useful business action.",
    icon: MousePointerClick,
  },
  {
    title: "Optimise & Scale",
    text: "Use lead quality, revenue, ROAS, CPA and remarketing signals to improve campaigns and scale only the combinations that work.",
    icon: Gauge,
  },
];

const REPORTING_ROWS = [
  { label: "Conversion Tracking", value: "Validated", width: "90%" },
  { label: "Lead Quality", value: "Reviewed", width: "82%" },
  { label: "Cost Efficiency", value: "Optimised", width: "76%" },
  { label: "Budget Control", value: "Monitored", width: "88%" },
];

const AUDIT_ITEMS = [
  "Campaign, ad group and account structure",
  "Keywords, search terms, audiences and exclusions",
  "Conversion tracking, attribution and duplicate events",
  "Creative quality, ad messaging and format coverage",
  "Landing pages, forms, calls and checkout experience",
  "Budget allocation, bidding and wasted-spend patterns",
  "Remarketing windows, frequency and converted-user exclusions",
  "Lead quality, CRM feedback, revenue and sales outcomes",
];

const FUNNEL_COLORS = ["#E1122B", "#E1122B", "#E1122B", "#E1122B"];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing Services",
  serviceType: "Paid Media and Performance Marketing Management",
  description:
    "Performance marketing services covering Google Ads, Meta Ads, LinkedIn Ads, SEM, YouTube Ads, Shopping Ads, ecommerce PPC, lead generation, remarketing, display advertising, landing page optimisation and PPC audits.",
  url: "https://www.brainadz.marketing/services/performance-marketing",
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
    name: "Performance Marketing Service Stack",
    itemListElement: PERFORMANCE_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function PerformanceMarketingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HeroSection />
      <PerformanceServicesSection />
      <FunnelSection />
      <ReportingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
      <img
        src="/banner/3.webp"
        alt="Performance marketing team managing paid media campaigns, conversion tracking and business growth"
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
          <span className="text-white">Performance Marketing</span>
        </nav>

        <h1 className="mt-7 max-w-[900px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
          Performance Marketing
        </h1>

        <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
          <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
            Paid campaigns built around qualified leads, measurable sales and
            controlled business growth.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#E1122B] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:min-h-14 sm:px-6"
          >
            Discuss your campaign goals
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

function PerformanceServicesSection() {
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
              Performance service stack
            </p>

            <h2 className="mt-5 max-w-[720px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Paid media services built for reach, qualified action and
              measurable growth.
            </h2>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              Explore our performance marketing services across search, social,
              video, ecommerce, remarketing, landing pages and account audits.
              Each service is connected with tracking, conversion quality and
              commercial outcomes.
            </p>

            <div className="relative mt-9 h-[300px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] sm:h-[360px] lg:h-[430px]">
              <img
                src="/performance-marketing/performance-marketing-services.jpg"
                alt="Performance marketing services across Google, Meta, LinkedIn, YouTube and ecommerce channels"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="max-w-[430px] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
                  One performance system for media, creative, landing pages,
                  tracking and optimisation.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-white"
                >
                  Review your paid-media setup
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {PERFORMANCE_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/performance-marketing/${service.slug}`}
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

function FunnelSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-220px] h-[520px] w-[520px] rounded-full bg-[#E1122B]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              Paid growth map
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[52px]">
              Every campaign has a clear role inside the conversion journey.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
            Awareness campaigns create demand, search captures intent, landing
            pages convert traffic and remarketing continues the journey. We
            connect these stages so channels do not compete without a shared
            business objective.
          </p>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/10 bg-white/2.5 p-5 sm:mt-16 sm:p-7 lg:p-9">
          <div className="relative">
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[linear-gradient(180deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:hidden" />

            <div className="absolute left-8 right-8 top-[34px] hidden h-px bg-[linear-gradient(90deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:block" />

            <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
              {FUNNEL_STAGES.map((stage, index) => {
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
              <span>Demand</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Intent</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Conversion</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportingSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
        <div className="rounded-md border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
                Performance visibility
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[38px]">
                Reporting that connects spend with useful outcomes.
              </h2>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-[#E1122B] text-white">
              <LineChart className="h-7 w-7" strokeWidth={1.7} />
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <ReportBox label="Media spend" value="Mapped" />
            <ReportBox label="Qualified actions" value="Tracked" />
            <ReportBox label="CPA / ROAS" value="Reviewed" />
            <ReportBox label="Next experiments" value="Prioritised" />
          </div>

          <div className="mt-7 space-y-3">
            {REPORTING_ROWS.map((row) => (
              <MetricRow key={row.label} {...row} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
            PPC audit checklist
          </p>

          <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
            We inspect the complete paid-media system, not only the ad account.
          </h2>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
            Performance problems can come from targeting, tracking, creative,
            landing pages, budgets or sales follow-up. The audit identifies
            waste, measurement gaps and the highest-priority opportunities.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
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