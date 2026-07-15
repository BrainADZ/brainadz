/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileSearch,
  LineChart,
  Megaphone,
  Search,
  Target,
  Workflow,
} from "lucide-react";

const CONSULTING_SERVICES = [
  {
    title: "Digital Growth Strategy",
    description:
      "Business-focused marketing roadmap with audience planning, positioning, funnel strategy, and growth priorities.",
    icon: Target,
  },
  {
    title: "Performance Marketing Advisory",
    description:
      "Campaign structure, targeting, tracking, landing page direction, lead quality improvement, and ROI planning.",
    icon: Megaphone,
  },
  {
    title: "SEO & Content Consulting",
    description:
      "Technical SEO, keyword planning, content architecture, blog strategy, internal linking, and organic visibility growth.",
    icon: Search,
  },
  {
    title: "Website Conversion Consulting",
    description:
      "UX flow, landing pages, lead capture, CTA structure, content hierarchy, and conversion improvement planning.",
    icon: Code2,
  },
  {
    title: "CRM & Marketing Automation",
    description:
      "Lead tracking, follow-up workflows, WhatsApp journeys, enquiry management, automation, and CRM process planning.",
    icon: Workflow,
  },
  {
    title: "Analytics & Reporting System",
    description:
      "Performance dashboards, conversion tracking, campaign reporting, KPI mapping, and data-backed decision support.",
    icon: LineChart,
  },
];

const BUSINESS_CHALLENGES = [
  "Marketing spend is increasing but qualified leads are not improving.",
  "Website traffic comes, but enquiries and conversions stay low.",
  "SEO, ads, content, and social media are working separately.",
  "Campaign reports show numbers but not clear business direction.",
  "Follow-up process is slow, manual, or not properly tracked.",
  "The team needs a clear roadmap before scaling marketing budget.",
];

const CONSULTING_FRAMEWORK = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "We audit your website, campaigns, SEO, content, funnel, tracking, and current business goals.",
  },
  {
    step: "02",
    title: "Prioritize",
    description:
      "We identify what matters first, what is wasting budget, and where the fastest growth opportunities exist.",
  },
  {
    step: "03",
    title: "Build Roadmap",
    description:
      "We create a clear action plan for campaigns, website, content, automation, reporting, and execution.",
  },
  {
    step: "04",
    title: "Guide Execution",
    description:
      "We support your team with strategy direction, campaign improvements, performance reviews, and optimization.",
  },
];

const DELIVERABLES = [
  "Marketing audit report",
  "Competitor and market gap analysis",
  "SEO and content roadmap",
  "Paid ads improvement plan",
  "Website conversion suggestions",
  "Lead funnel and CRM recommendations",
  "Monthly performance review",
  "Clear action priority sheet",
];

const HERO_STATS = [
  {
    value: "360",
    label: "Marketing, website, content, tracking and funnel review",
  },
  {
    value: "ROI",
    label: "Performance-first planning for every growth recommendation",
  },
  {
    value: "CRM",
    label: "Lead process, automation and follow-up improvement guidance",
  },
];

export default function ConsultingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <ConsultingHero />
      <ConsultingProblemSection />
      <ConsultingServicesSection />
      <ConsultingFrameworkSection />
      <ConsultingDeliverablesSection />
    </main>
  );
}

function ConsultingHero() {
  return (
    <>
      {/* CONSULTING HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[560px]">
        <img
          src="/gallery/8.jpeg"
          alt="BrainADZ consulting team planning a digital marketing strategy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_32%,rgba(0,0,0,0.48)_62%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.38)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[560px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link href="/" className="text-[#E1122B] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Consulting</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Consulting that turns marketing confusion into a clear growth plan.
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-white/88 sm:text-[22px] lg:text-[25px]">
              We audit, plan and optimize your digital marketing system across
              strategy, campaigns, SEO, websites, automation and reporting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>

              <Link
                href="#consulting-services"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-white/45 bg-black/25 px-7 text-[13px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B]"
              >
                View services
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING STATS SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] text-black">
        <div className="mx-auto grid max-w-[1800px] px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8 first:sm:pl-0 last:sm:border-r-0"
            >
              <p className="text-[38px] font-medium leading-none tracking-[-0.05em] text-[#E1122B] sm:text-[48px]">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[360px] text-[15px] leading-6 text-black/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ConsultingProblemSection() {
  return (
    <>
      {/* CONSULTING PROBLEM SECTION */}
      <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Why consulting</p></div>

            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Good marketing needs clarity before execution.
            </h2>

            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-black/62">
              Most brands do not fail because they lack effort. They struggle
              because strategy, platforms, content, ads, tracking and follow-up
              are not connected properly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {BUSINESS_CHALLENGES.map((challenge, index) => (
              <div
                key={challenge}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 80}
                className="min-h-[190px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                  <FileSearch className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Gap {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[16px] font-medium leading-7 text-black/68">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultingServicesSection() {
  return (
    <>
      {/* CONSULTING SERVICES SECTION */}
      <section
        id="consulting-services"
        className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Consulting services</p></div>

              <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Expert guidance across your complete growth system.
              </h2>
            </div>

            <p className="max-w-[650px] text-[16px] leading-8 text-black/60">
              Every consulting area is connected with business impact, so your
              marketing becomes easier to understand, manage and scale.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CONSULTING_SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 80}
                  className="group min-h-[310px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-[#E1122B]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.7} />
                    </div>

                    <span className="text-[13px] font-semibold text-black/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-9 text-[25px] font-semibold leading-tight tracking-[-0.035em] text-black">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-black/58">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5 text-[14px] font-medium text-black/54">
                    <CheckCircle2 className="h-5 w-5 text-[#E1122B]" />
                    <span>Strategy plus practical action plan</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultingFrameworkSection() {
  return (
    <>
      {/* CONSULTING FRAMEWORK SECTION */}
      <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Our framework</p></div>

              <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                From audit to action, every step stays clear.
              </h2>

              <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-black/62">
                Our consulting process removes guesswork. You get diagnosis,
                practical priorities, an execution roadmap and performance
                reviews that help your team move faster.
              </p>
            </div>

            <div className="space-y-4">
              {CONSULTING_FRAMEWORK.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="grid gap-6 rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.04)] transition duration-300 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_20px_48px_rgba(0,0,0,0.07)] sm:p-7 lg:grid-cols-[150px_1fr]"
                >
                  <div className="flex items-center gap-4 lg:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E1122B] text-[15px] font-semibold text-white">
                      {item.step}
                    </div>
                    <div className="mt-5 hidden h-px w-full bg-black/10 lg:block" />
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
                    <h3 className="text-[30px] font-semibold leading-tight tracking-[-0.035em] text-black">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-7 text-black/58">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultingDeliverablesSection() {
  return (
    <>
      {/* CONSULTING DELIVERABLES SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
          <div className="relative overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <Image
              src="/homepage/about-ai-collaboration.png"
              alt="BrainADZ consulting and AI enabled marketing planning"
              width={900}
              height={620}
              className="h-[380px] w-full object-cover sm:h-[520px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.48)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 border-t border-white/18 pt-5">
              <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-white/58">
                Consulting output
              </p>
              <p className="mt-2 max-w-[560px] text-[28px] font-semibold leading-tight tracking-[-0.035em] text-white">
                A practical roadmap your team can execute.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">What you get</p></div>

            <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Clear recommendations, documented priorities and action points.
            </h2>

            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
              You get practical direction that connects creative, media, SEO,
              website, automation and reporting into one measurable growth plan.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((item, index) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={(index % 2) * 60}
                  className="flex min-h-[78px] items-start gap-4 rounded-[10px] border border-black/10 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition duration-300 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                  <p className="text-[15px] font-medium leading-6 text-black/68">
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
