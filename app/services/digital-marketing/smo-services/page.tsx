/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutGrid,
  MessagesSquare,
} from "lucide-react";
import FeaturesSection from "./FeaturesSection";
import FaqSection from "./FaqSection";
import PlatformsSection from "./PlatformsSection";
import ProcessSection from "./ProcessSection";
import { SMO_FAQS } from "./data";

export const metadata: Metadata = {
  title: "SMO Services | Social Media Optimization | BrainADZ",
  description:
    "Social media optimization services covering profile optimization, content systems, community management and performance reporting.",
  keywords: [
    "SMO services",
    "social media optimization services",
    "social media management agency",
    "organic social media growth",
  ],
  alternates: {
    canonical: "/services/digital-marketing/smo-services",
  },
  openGraph: {
    title: "SMO Services | BrainADZ Marketing",
    description:
      "Build a more discoverable, consistent and engaging organic social presence.",
    type: "website",
    images: [{ url: "/about/about.avif", alt: "BrainADZ social media optimization services" }],
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Platforms", href: "#platforms" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Optimized brand profiles",
    description:
      "Make every profile complete, recognizable and easier for the right audience to discover and trust.",
    icon: BadgeCheck,
  },
  {
    title: "Consistent content system",
    description:
      "Turn brand goals into clear content pillars, platform-ready formats and a reliable publishing rhythm.",
    icon: LayoutGrid,
  },
  {
    title: "Stronger community signals",
    description:
      "Keep conversations active through thoughtful responses, social listening and useful audience interaction.",
    icon: MessagesSquare,
  },
  {
    title: "Continuous improvement",
    description:
      "Use reach, engagement and profile actions to refine what your brand creates and publishes next.",
    icon: ChartNoAxesCombined,
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Optimization Services",
  serviceType: "Social Media Optimization and Management",
  provider: { "@type": "Organization", name: "BrainADZ Marketing" },
  description:
    "Social media optimization covering profiles, content, publishing, community management and reporting.",
  areaServed: "India",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SMO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function SmoServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ team planning social media optimization"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] font-medium leading-none">
            <Link href="/" className="text-[#E1122B] transition hover:text-white">Home</Link>
            <span className="text-white/70">/</span>
            <span className="text-white">SMO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            SMO Services
          </h1>

          <div className="mt-auto max-w-[680px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.38] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Strengthen your organic social presence with optimized profiles,
              consistent content and communities built for lasting engagement.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Optimize your social presence
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav aria-label="SMO page navigation" className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-20 min-w-max items-center">
            {PAGE_NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex h-16 shrink-0 items-center border-b-2 px-4 text-[14px] font-medium transition-colors hover:text-[#E1122B] focus-visible:outline-none sm:px-5 sm:text-[15px] ${
                  index === 0 ? "border-[#E1122B] text-[#E1122B]" : "border-transparent text-black/65"
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

      <section id="overview" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Overview</p>
          </div>
          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Make every social profile easier to discover and trust
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[680px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Social media optimization brings your profiles, brand voice,
                content formats and community activity into one focused system.
                BrainADZ improves the organic experience people see before they
                follow, engage, visit your website or contact your business.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your optimization roadmap
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Optimized social media account and content management"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {OVERVIEW_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[16px] font-semibold leading-6 text-black">{benefit.title}</h3>
                  <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-black/58">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <PlatformsSection />
      <ProcessSection />
      <FaqSection />
    </main>
  );
}
