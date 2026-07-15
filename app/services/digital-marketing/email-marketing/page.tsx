/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  FileSearch,
  Filter,
  MailCheck,
  PanelsTopLeft,
  Send,
  Workflow,
} from "lucide-react";
import EmailInteractiveSections from "./EmailInteractiveSections";
import { EMAIL_FAQS } from "./data";

export const metadata: Metadata = {
  title: "Email Marketing Services | Automation Agency | BrainADZ",
  description:
    "Email marketing strategy, campaign design, newsletters, segmentation, automation, deliverability, testing and reporting by BrainADZ.",
  keywords: [
    "email marketing services",
    "email marketing agency",
    "email automation services",
    "newsletter marketing services",
    "email campaign management",
  ],
  alternates: { canonical: "/services/digital-marketing/email-marketing" },
  openGraph: {
    title: "Email Marketing Services | BrainADZ Marketing",
    description:
      "Strategic campaigns, automated customer journeys and measurable email performance.",
    type: "website",
    images: [{ url: "/image2.jpeg", alt: "BrainADZ email marketing services" }],
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Smarter segmentation",
    description: "Group subscribers by behavior, interests and lifecycle stage for more relevant communication.",
    icon: Filter,
  },
  {
    title: "Automated journeys",
    description: "Turn welcome, nurture, recovery and retention emails into reliable always-on workflows.",
    icon: Workflow,
  },
  {
    title: "Inbox-ready campaigns",
    description: "Combine responsive design, list hygiene and deliverability checks before every important send.",
    icon: MailCheck,
  },
  {
    title: "Measurable improvement",
    description: "Use clicks, conversions and revenue signals to improve every campaign cycle.",
    icon: BarChart3,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit and align",
    description: "We review your list health, current platform, past campaigns, customer journey and business goals.",
    timing: "Days 1-3",
    output: "Audit and goal brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the system",
    description: "We define segments, campaign themes, automation opportunities, sending rhythm and success metrics.",
    timing: "Week 1",
    output: "Strategy and calendar",
    icon: CalendarRange,
  },
  {
    number: "03",
    title: "Create and approve",
    description: "Our team develops the copy, responsive email design and landing experience in a clear review workflow.",
    timing: "Every cycle",
    output: "Approved campaign assets",
    icon: PanelsTopLeft,
  },
  {
    number: "04",
    title: "Build, test and send",
    description: "Campaigns and automations are configured, tested across devices and scheduled for the right audience.",
    timing: "Ongoing",
    output: "Quality-checked sends",
    icon: Send,
  },
  {
    number: "05",
    title: "Measure and improve",
    description: "We review engagement and conversion patterns, then turn the findings into the next testing plan.",
    timing: "Monthly",
    output: "Report and next steps",
    icon: BarChart3,
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Email Marketing Services",
  serviceType: "Email Marketing and Marketing Automation",
  provider: { "@type": "Organization", name: "BrainADZ Marketing" },
  description: "Email strategy, campaigns, automation, testing and reporting.",
  areaServed: "India",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: EMAIL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function EmailMarketingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img src="/image2.jpeg" alt="Email marketing campaign planning by BrainADZ" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.4)_58%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.28)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] font-medium leading-none">
            <Link href="/" className="text-[#E1122B] transition hover:text-white">Home</Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Email Marketing</span>
          </nav>
          <h1 className="mt-7 max-w-[760px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">Email Marketing Services</h1>
          <div className="mt-auto max-w-[690px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] leading-[1.38] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">Turn every send into a useful customer touchpoint with strategic campaigns, automated journeys and measurable growth.</p>
            <Link href="/contact" className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black">
              Grow with email marketing <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav aria-label="Email marketing page navigation" className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-20 min-w-max items-center">
            {PAGE_NAV_ITEMS.map((item, index) => (
              <a key={item.href} href={item.href} className={`inline-flex h-16 shrink-0 items-center border-b-2 px-4 text-[14px] font-medium transition-colors hover:text-[#E1122B] sm:px-5 sm:text-[15px] ${index === 0 ? "border-[#E1122B] text-[#E1122B]" : "border-transparent text-black/65"}`}>{item.label}</a>
            ))}
            <Link href="/contact" className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-black sm:px-7">Get Started</Link>
          </div>
        </nav>
      </div>

      <section id="overview" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Overview</p></div>
          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">Build customer relationships beyond the inbox</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[680px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">Email marketing works best as a connected system, not a stream of isolated newsletters. BrainADZ combines audience strategy, useful content, responsive design, automation and performance insights to help every message earn attention and action.</p>
              <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Build your email strategy <ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
            </div>
            <figure><div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]"><img src="/image5.jpg" alt="Email campaign strategy and performance planning" className="h-full w-full object-cover object-center" /></div></figure>
          </div>
          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {OVERVIEW_BENEFITS.map((benefit) => { const Icon = benefit.icon; return (
              <article key={benefit.title} className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]">
                <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]"><Icon className="h-7 w-7" strokeWidth={1.5} /></div>
                <h3 className="mt-8 text-[16px] font-semibold leading-6 text-black">{benefit.title}</h3><p className="mt-2 max-w-[320px] text-[14px] leading-6 text-black/58">{benefit.description}</p>
              </article>
            ); })}
          </div>
        </div>
      </section>

      <EmailInteractiveSections part="features" />

      <section id="process" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Process</p></div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">A clear path from strategy to every send</h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">A structured workflow keeps campaigns accurate, timely and useful while giving your team clear visibility into approvals and performance.</p>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Plan your email workflow <ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
          </div>
          <div className="border-t border-black/10">
            {PROCESS_STEPS.map((step) => { const Icon = step.icon; return (
              <article key={step.number} className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8">
                <div className="flex items-start justify-between gap-5 sm:block"><span className="text-[24px] font-medium text-[#E1122B]">{step.number}</span><div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5"><Icon className="h-5 w-5" strokeWidth={1.6} /></div></div>
                <div><h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">{step.title}</h3><p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{step.description}</p></div>
                <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><div><dt className="text-[12px] font-medium uppercase text-black/42">Timing</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.timing}</dd></div><div><dt className="text-[12px] font-medium uppercase text-black/42">Output</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.output}</dd></div></dl>
              </article>
            ); })}
          </div>
        </div>
      </section>

      <EmailInteractiveSections part="faqs" />
    </main>
  );
}
