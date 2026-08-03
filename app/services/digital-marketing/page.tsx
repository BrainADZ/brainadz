/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Gauge,
  LineChart,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  FileText,
  ImageIcon,
  type LucideIcon,
  Users,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services | BrainADZ Marketing",
  description:
    "BrainADZ digital marketing services for SEO, SMO, SMM, email marketing, SEM, content marketing, ORM, influencer marketing, WhatsApp marketing, and visual content creation.",
};

const SERVICE_NAV = [
  "Social Media Marketing Services (SMM)",
  "Social Media Optimization Services (SMO)",
  "Content Marketing Services",
  "Online Reputation Management (ORM)",
  "Influencer Marketing",
  "WhatsApp Marketing",
  "Email Marketing",
];

const DIGITAL_SERVICES = [
  {
    title: "Social Media Marketing Services (SMM)",
    slug: "social-media-marketing-services",
    description:
      "Create, manage, and grow social media campaigns across Instagram, Facebook, LinkedIn, and other relevant platforms.",
    icon: Users,
    result: "Brand Reach",
  },
  {
    title: "Social Media Optimization Services (SMO)",
    slug: "social-media-optimization-services",
    description:
      "Improve social profiles, content presentation, publishing consistency, and audience engagement across platforms.",
    icon: Share2,
    result: "Social Growth",
  },
  {
    title: "Content Marketing Services",
    slug: "content-marketing-services",
    description:
      "Build content strategies, blogs, landing-page copy, and brand stories that support visibility, trust, and organic growth.",
    icon: FileText,
    result: "Content Engine",
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "online-reputation-management",
    description:
      "Protect and improve your brand image through reviews, feedback handling, reputation monitoring, and response strategy.",
    icon: ShieldCheck,
    result: "Trust Building",
  },
  {
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    description:
      "Connect your brand with relevant creators for authentic reach, product awareness, engagement, and campaign visibility.",
    icon: Users,
    result: "Creator Reach",
  },
  {
    title: "WhatsApp Marketing",
    slug: "whatsapp-marketing",
    description:
      "Use WhatsApp campaigns, broadcasts, follow-ups, and lead communication to improve response and conversions.",
    icon: MessageCircle,
    result: "Direct Leads",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description:
      "Plan email campaigns, newsletters, automation flows, and lead-nurturing journeys that support conversion and retention.",
    icon: Mail,
    result: "Lead Nurture",
  },
];

const FUNNEL_STAGES = [
  {
    title: "Awareness",
    text: "Make the right audience notice your brand through search, social, creators and content.",
    icon: Target,
  },
  {
    title: "Engagement",
    text: "Use useful content, stronger creative and platform-specific messaging to build trust.",
    icon: MousePointerClick,
  },
  {
    title: "Enquiry",
    text: "Move users to landing pages, forms, WhatsApp, calls, offers and sales conversations.",
    icon: MessageCircle,
  },
  {
    title: "Retention",
    text: "Keep prospects and customers warm through email, WhatsApp, remarketing and content loops.",
    icon: Gauge,
  },
];

const SPRINTS = [
  {
    label: "Days 1-15",
    title: "Audit & Setup",
    points: [
      "Audit website, social, SEO and campaign gaps",
      "Define audience, goal, offer and tracking needs",
      "Fix basic profile and conversion hygiene",
    ],
  },
  {
    label: "Days 16-45",
    title: "Content & Campaign Build",
    points: [
      "Build monthly content calendar and campaign themes",
      "Create visual direction, copy and channel plan",
      "Prepare SEO, email, WhatsApp and SEM workflows",
    ],
  },
  {
    label: "Days 46-90",
    title: "Launch, Measure & Scale",
    points: [
      "Run campaign cycles and performance reviews",
      "Improve creatives, landing pages and follow-up",
      "Report leads, traffic, ranking, engagement and ROI",
    ],
  },
];

const REPORTING_ROWS = [
  { label: "Lead Quality", value: "Tracked", width: "82%" },
  { label: "Search Visibility", value: "Growing", width: "74%" },
  { label: "Social Engagement", value: "Active", width: "68%" },
  { label: "Follow-up Speed", value: "Improved", width: "88%" },
];

const AUDIT_ITEMS = [
  "Website conversion path and CTA quality",
  "SEO visibility, keywords and technical gaps",
  "Social media consistency and creative quality",
  "Lead source, form, call and WhatsApp tracking",
  "Email, remarketing and follow-up opportunities",
  "Content plan, campaign calendar and reporting format",
];
const FUNNEL_COLORS = ["#E1122B", "#E1122B", "#E1122B", "#E1122B"];
export default function DigitalMarketingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <HeroSection />

      <DigitalServicesSection />
      <FunnelSection />
      <ReportingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <>
      {/* DIGITAL MARKETING HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/banner/1.webp"
          alt="BrainADZ office and team workspace"
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
            <span className="text-white">Digital Marketing</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
            Digital Marketing
          </h1>

          <div className="mt-auto max-w-[650px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
              Creators, partners and clients putting digital growth to work in
              the real world
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#E1122B] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:min-h-14 sm:px-6"
            >
              Get the latest BrainADZ news
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </>
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

function DigitalServicesSection() {
  return (
    <section
      id="service-directory"
      className="relative border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#E1122B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          {/* LEFT STICKY CONTENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#E1122B]">
              Digital service stack
            </p>

            <h2 className="mt-5 max-w-[720px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Digital marketing services built for visibility, leads and growth.
            </h2>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              Explore our core digital marketing services designed to improve
              brand visibility, generate qualified leads, build trust, and
              support measurable business growth across every platform.
            </p>

            <div className="relative mt-9 h-[300px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] sm:h-[360px] lg:h-[430px]">
              <img
                src="/services/digital-marketing-services.jpg"
                alt="Digital marketing services by BrainADZ Marketing"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="max-w-[420px] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
                  One team for strategy, creative, campaigns and performance.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-white"
                >
                  Discuss your growth plan
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SERVICE GRID */}
          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {DIGITAL_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/digital-marketing/${service.slug}`}
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
              Funnel map
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[52px]">
              Every channel has a clear place in the customer journey.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
            Social content without follow-up leaks leads. SEO without a
            conversion path leaks traffic. Campaigns without reporting leak
            money. Our funnel map connects every digital touchpoint with a clear
            next step.
          </p>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/10 bg-white/2.5 p-5 sm:mt-16 sm:p-7 lg:p-9">
          <div className="relative">
            {/* MOBILE VERTICAL LINE */}
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[linear-gradient(180deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:hidden" />

            {/* DESKTOP MAP LINE */}
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
              <span>Awareness</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Engagement</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Conversion</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportingSection() {
  return (
    <>
      {/* REPORTING SNAPSHOT SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <div className="rounded-md border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-7">
            <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-6">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
                  Monthly visibility
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[38px]">
                  Reporting that shows what moved.
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#E1122B] text-white">
                <LineChart className="h-7 w-7" strokeWidth={1.7} />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <ReportBox label="Traffic sources" value="Mapped" />
              <ReportBox label="Lead channels" value="Tracked" />
              <ReportBox label="Campaign actions" value="Reviewed" />
              <ReportBox label="Next priorities" value="Clear" />
            </div>

            <div className="mt-7 space-y-3">
              {REPORTING_ROWS.map((row) => (
                <MetricRow key={row.label} {...row} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Audit checklist
            </p>
            <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
              We check the whole marketing path, not just one channel.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
              The first step is finding where growth is leaking. Then we decide
              which services should be fixed, launched or scaled first.
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
    </>
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