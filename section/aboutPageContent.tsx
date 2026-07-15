"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Target,
  Palette,
  BarChart3,
  Handshake,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const FAST_FACTS = [
  {
    value: 550,
    suffix: "+",
    label: "clients served across diverse industries",
  },
  {
    value: 600,
    suffix: "+",
    label: "projects delivered across digital and creative",
  },
  {
    value: 150,
    suffix: "+",
    label: "full-time experts working as one team",
  },
  {
    value: 10,
    suffix: "+",
    label: "years of marketing and technology experience",
  },
];
const ORIGIN_STORY_TABS = [
  {
    period: "2014-2017",
    heading: "The Beginning of BrainADZ",
    image: "/journey/2.jpeg",
    alt: "BrainADZ early creative and digital marketing journey",
    description:
      "BrainADZ started with a clear vision to help businesses grow through creative thinking, digital strategy, and result-focused marketing. In the early years, the team focused on building strong client relationships, understanding business challenges, and delivering practical marketing solutions that created real visibility.",
  },
  {
    period: "2018-2020",
    heading: "Expanding Digital Capabilities",
    image: "/journey/1.jpeg",
    alt: "BrainADZ digital marketing and creative growth",
    description:
      "As digital platforms evolved, BrainADZ expanded into SEO, social media marketing, performance ads, website development, branding, and creative campaigns. The focus shifted from only visibility to complete digital growth, helping brands generate leads, build trust, and improve their online presence.",
  },
  {
    period: "2021-2023",
    heading: "Growth Through Strategy and Technology",
    image: "/journey/3.jpeg",
    alt: "BrainADZ technology driven marketing solutions",
    description:
      "BrainADZ strengthened its services with automation, analytics, CRM solutions, creative production, and performance-driven execution. The company worked with businesses across different industries, combining marketing, design, technology, and data to deliver measurable business outcomes.",
  },
  {
    period: "2024-present",
    heading: "Integrated Marketing for Modern Brands",
    image: "/journey/4.jpeg",
    alt: "BrainADZ modern integrated marketing team",
    description:
      "Today, BrainADZ works as an integrated marketing partner for brands that want stronger visibility, better leads, and scalable digital growth. With a team-driven approach, the company continues to build campaigns, websites, content, automation systems, and digital strategies that help businesses grow faster.",
  },
];
const CORE_VALUES = [
  {
    title: "Strategy First",
    description:
      "We plan every campaign with clear goals, audience understanding, market research, and a strong growth direction.",
    icon: Target,
  },
  {
    title: "Creative That Performs",
    description:
      "We design content, visuals, ads, and brand campaigns that look premium and drive real business action.",
    icon: Palette,
  },
  {
    title: "Data-Driven Growth",
    description:
      "We track performance, study insights, optimize campaigns, and improve every digital move with measurable data.",
    icon: BarChart3,
  },
  {
    title: "Client Partnership",
    description:
      "We work like an extended growth team, building long-term trust through communication, planning, and execution.",
    icon: Handshake,
  },
  {
    title: "Innovation With Tech",
    description:
      "We use websites, automation, CRM, AI tools, and smart systems to make marketing faster and more effective.",
    icon: Cpu,
  },
  {
    title: "Accountable Execution",
    description:
      "We believe in transparent updates, responsible delivery, clear reporting, and results businesses can measure.",
    icon: ShieldCheck,
  },
];
export default function AboutPageContent() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* HERO SECTION */}
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
            <Link href="/" className="text-[#E1122B] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">About</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            About BrainADZ
          </h1>

          <div className="mt-auto max-w-[650px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
              Creators, partners and clients putting digital growth to work in
              the real world
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Get the latest BrainADZ news
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <FastFactsSection />
      <OriginStorySection />
      <CoreValuesSection />
      <MarketingApproachSection />
    </main>
  );
}

function HomeAboutSection() {
  return (
    <>
      {/* ABOUT SECTION */}
        <section className="overflow-hidden bg-white py-16 text-[#111111] sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] lg:min-h-[700px] lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
            <Image
              src="/homepage/about-ai-collaboration.png"
              alt="Human creativity collaborating with artificial intelligence"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/45" />

            <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-10 sm:top-8">
              <span className="text-[36px] font-light leading-none tracking-[-0.04em] sm:text-[48px]">
                BrainADZ
              </span>
              <span className="relative text-[34px] font-light italic leading-none text-white sm:text-[44px]">
                AI
                <span className="absolute -right-4 -top-2 text-[18px] not-italic text-[#E1122B]">
                  +
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center px-5 py-14 sm:px-9 lg:px-10 lg:py-16 xl:px-16">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Integrated Marketing Solutions
                </p>
              </div>

              <h2 className="mt-6 max-w-[830px] text-[38px] font-normal leading-[1.07] tracking-[-0.03em] text-black sm:text-[48px] lg:text-[58px]">
                Building Brands That Grow Across Every Digital Touchpoint
              </h2>

              <p className="mt-7 max-w-[900px] text-[16px] font-normal leading-8 text-black/64">
                <strong className="font-semibold text-black">
                  BrainADZ Marketing
                </strong>{" "}
                helps businesses build strong visibility, generate qualified leads,
                and scale faster through strategy, creative campaigns, performance
                marketing, SEO, social media, websites, automation, and data-driven
                execution. We combine creativity, technology, and performance-focused
                planning to help brands attract the right audience, increase engagement,
                and grow with measurable digital results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FastFactsSection() {
  return (
    <>
      {/* FAST FACTS SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] py-14 text-black sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">At a glance</p>
          </div>
          <h2 className="mt-4 text-[38px] font-semibold leading-none tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">Fast facts</h2>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-y-0">
            {FAST_FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="text-[58px] font-medium leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[68px] lg:text-[74px]">
                  <CountUp end={fact.value} suffix={fact.suffix} />
                </p>
                <p className="mt-3 max-w-[310px] text-[15px] leading-6 text-black/60 sm:text-[16px]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = counterRef.current;

    if (!counter) return;

    let animationFrame = 0;
    const duration = 1600;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 4);

          setCount(Math.round(end * easedProgress));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [end]);

  return (
    <span ref={counterRef} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}
function OriginStorySection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStory = ORIGIN_STORY_TABS[activeTab];

  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Our journey</span></div>
            <h2 className="text-[42px] font-semibold leading-none tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
              Origin story
            </h2>
          </div>

          <div className="max-w-[820px]">
            <p className="text-[16px] font-normal leading-7 text-black/62 sm:text-[17px]">
              For more than a decade, BrainADZ has been helping brands move
              forward with creativity, technology and performance-focused
              marketing. From strategy and design to websites, campaigns,
              automation and measurable growth, our journey has always been
              built around practical innovation.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 text-[15px] font-semibold text-[#E1122B] transition hover:text-black"
            >
              Learn more about our rich history
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex overflow-x-auto border-b border-black/12">
            {ORIGIN_STORY_TABS.map((tab, index) => (
              <button
                key={tab.period}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`min-w-[190px] border-b-4 px-4 pb-4 text-left text-[16px] font-normal transition sm:min-w-[210px] ${
                  activeTab === index
                    ? "border-[#E1122B] text-black"
                    : "border-transparent text-black/50 hover:text-black"
                }`}
              >
                {tab.period}
              </button>
            ))}
          </div>

          <div className="grid gap-10 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pt-16">
            <div className="max-w-[760px]">
              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] text-black sm:text-[34px]">
                {activeStory.heading}
              </h3>

              <p className="mt-8 text-[16px] leading-8 text-black/62 sm:text-[17px]">
                {activeStory.description}
              </p>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:min-h-[390px] lg:min-h-[430px]">
              <Image
                key={activeStory.image}
                src={activeStory.image}
                alt={activeStory.alt}
                fill
                loading={activeTab === 0 ? "eager" : "lazy"}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* <div className="absolute inset-0 bg-black/10" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-[#fbfbfb] px-5 py-14 text-black sm:px-8 sm:py-16 lg:px-10 lg:py-20">

      <div className="relative z-10 mx-auto max-w-[1620px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">What guides us</span></div>
            <h2 className="max-w-[690px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Values that shape every campaign
            </h2>
          </div>

          <div className="max-w-[780px] lg:pt-8">
            <p className="text-[16px] font-normal leading-7 text-black/62 sm:text-[17px]">
              At BrainADZ, our values define how we create, market, build,
              optimize, and grow brands. We combine strategy, creative thinking,
              technology, performance marketing, and accountability to deliver
              work that looks strong and performs even stronger.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {CORE_VALUES.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative min-h-[265px] overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition duration-300 group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-9 max-w-[360px] text-[25px] font-semibold leading-tight tracking-[-0.035em] text-black sm:text-[29px]">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-[430px] text-[14px] leading-6 text-black/58 sm:text-[15px]">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function MarketingApproachSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* TOP IMAGE WITH FLOATING CARD */}
        <div className="relative">
          <div className="relative ml-auto h-[360px] overflow-hidden rounded-[10px] sm:h-[430px] lg:w-[78%]">
            <Image
              src="/gallery/8.jpeg"
              alt="BrainADZ team discussing digital marketing strategy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 78vw"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="left-0 -top-1.5 mt-6 rounded-[14px] border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:p-8 lg:absolute lg:mt-0 lg:w-[410px]">
            <span className="mb-5 block h-0.5 w-8 bg-[#E1122B]" />
            <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[24px]">
              We Keep Our Eye On The ROI
            </h2>

            <p className="mt-5 text-[14px] font-medium leading-6 text-black/65 sm:text-[15px]">
              Every marketing solution we build begins with a strong business
              case. We connect each campaign to its ROI, set measurable
              performance targets, and track them from day one.
            </p>

            <p className="mt-4 text-[14px] font-medium leading-6 text-black/60 sm:text-[15px]">
              By refining your strategy, creatives, ads, websites, SEO, and
              automation, we help improve conversions and make growth visible
              in real business numbers.
            </p>
          </div>
        </div>

        {/* BOTTOM IMAGE + CONTENT */}
        <div className="mx-auto mt-14 grid max-w-[980px] items-center gap-10 sm:mt-16 lg:grid-cols-[430px_1fr] lg:gap-12">
          <div className="relative h-[270px] overflow-hidden rounded-[10px] sm:h-[315px]">
            <Image
              src="/gallery/8.jpeg"
              alt="BrainADZ team collaboration and ownership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 430px"
            />

            <div className="absolute inset-0 bg-black/12" />
          </div>

          <div>
            <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[27px]">
              We Own Responsibilities
            </h3>

            <p className="mt-5 text-[15px] font-medium leading-7 text-black/62 sm:text-[16px]">
              We bring together strategy, creative thinking, technology,
              performance marketing, design, development, and content execution
              to manage projects with complete ownership.
            </p>

            <p className="mt-4 text-[15px] font-medium leading-7 text-black/58 sm:text-[16px]">
              From campaign planning to final delivery, our team focuses on
              quality, timelines, communication, and measurable outcomes that
              support every client’s growth journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
