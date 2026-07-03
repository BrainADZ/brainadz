/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Gauge,
  PanelsTopLeft,
  Target,
} from "lucide-react";
import FeaturesSection from "./FeaturesSection";
import FaqSection from "./FaqSection";
import PlatformsSection from "./PlatformsSection";
import ProcessSection from "./ProcessSection";

export const metadata: Metadata = {
  title: "SMM Services | BrainADZ Marketing",
  description: "Social media marketing services by BrainADZ Marketing.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Platforms", href: "#platforms" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Consistent brand presence",
    description:
      "Keep every social profile active, recognizable and aligned with one clear brand voice.",
    icon: PanelsTopLeft,
  },
  {
    title: "Faster content execution",
    description:
      "Move from planning to publishing with an organized calendar and a reliable creative workflow.",
    icon: Gauge,
  },
  {
    title: "Smarter audience targeting",
    description:
      "Reach the people most likely to engage through platform, audience and content insights.",
    icon: Target,
  },
  {
    title: "Measurable business growth",
    description:
      "Connect reach and engagement with enquiries, campaign performance and meaningful next steps.",
    icon: ChartNoAxesCombined,
  },
];

export default function SmmServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* hero section */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
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
            <Link href="/" className="text-[#1467f5] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">SMM Services</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
            SMM Services
          </h1>

          <div className="mt-auto max-w-[650px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.38] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build your brand with social media campaigns made for reach,
              engagement and real business growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-[4px] bg-[#1467f5] px-5 text-[15px] font-medium text-white transition hover:bg-[#0f56d6] sm:min-h-14 sm:px-6"
            >
              Grow your social presence
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-21 z-40 bg-black text-white">
        <nav
          aria-label="SMM page navigation"
          className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10"
        >
          <div className="flex min-h-20 min-w-max items-center border-y border-white/15">
            {PAGE_NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex h-16 shrink-0 items-center px-4 text-[14px] font-normal transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none sm:px-5 sm:text-[15px] ${
                  index === 0 ? "text-[#1467f5]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/contact"
              className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center bg-[#1467f5] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#0f56d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-7 sm:text-[15px]"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-white/12 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <p className="text-[13px] font-medium uppercase text-white/52">
            Overview
          </p>

          <h2 className="mt-4 max-w-[1180px] text-[38px] font-normal leading-[1.08] text-[#4d7cff] sm:text-[50px] lg:text-[60px]">
            Build stronger connections with social media
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[680px] text-[15px] leading-7 text-white/68 sm:text-[16px] sm:leading-8">
                Social media marketing is more than publishing posts. BrainADZ
                combines channel strategy, platform-native content, community
                management and performance insights to make your brand easier
                to notice, trust and choose.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-8 rounded-sm border border-[#1467f5] px-4 text-[14px] font-medium text-[#6995ff] transition-colors hover:bg-[#1467f5] hover:text-white sm:px-5"
              >
                Build your social strategy
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden bg-[#101010]">
                <img
                  src="/smm/panel.jpg"
                  alt="Instagram content and account management by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* <figcaption className="mt-2 text-[13px] leading-5 text-white/48">
                Social media content and account management by BrainADZ
              </figcaption> */}
            </figure>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-12 border-t border-white/12 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {OVERVIEW_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title}>
                  <Icon
                    className="h-14 w-14 text-[#4d7cff]"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-8 text-[16px] font-semibold leading-6 text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-white/62">
                    {benefit.description}
                  </p>
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
