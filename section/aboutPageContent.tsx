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
    cardBg: "#0FA9B6",
    textColor: "#ffffff",
    mutedText: "rgba(255,255,255,0.82)",
    iconBg: "rgba(255,255,255,0.18)",
    iconColor: "#ffffff",
    borderColor: "rgba(15,169,182,0.8)",
    shadowColor: "rgba(15,169,182,0.35)",
  },
  {
    title: "Creative That Performs",
    description:
      "We design content, visuals, ads, and brand campaigns that look premium and drive real business action.",
    icon: Palette,
    cardBg: "#FFF4EA",
    textColor: "#111111",
    mutedText: "rgba(17,17,17,0.72)",
    iconBg: "rgba(0,0,0,0.08)",
    iconColor: "#BD5939",
    borderColor: "rgba(255,244,234,0.9)",
    shadowColor: "rgba(255,244,234,0.28)",
  },
  {
    title: "Data-Driven Growth",
    description:
      "We track performance, study insights, optimize campaigns, and improve every digital move with measurable data.",
    icon: BarChart3,
    cardBg: "#5A5E4B",
    textColor: "#ffffff",
    mutedText: "rgba(255,255,255,0.78)",
    iconBg: "rgba(255,255,255,0.16)",
    iconColor: "#D9DD48",
    borderColor: "rgba(90,94,75,0.85)",
    shadowColor: "rgba(90,94,75,0.36)",
  },
  {
    title: "Client Partnership",
    description:
      "We work like an extended growth team, building long-term trust through communication, planning, and execution.",
    icon: Handshake,
    cardBg: "#D9DD48",
    textColor: "#111111",
    mutedText: "rgba(17,17,17,0.72)",
    iconBg: "rgba(0,0,0,0.09)",
    iconColor: "#111111",
    borderColor: "rgba(217,221,72,0.9)",
    shadowColor: "rgba(217,221,72,0.28)",
  },
  {
    title: "Innovation With Tech",
    description:
      "We use websites, automation, CRM, AI tools, and smart systems to make marketing faster and more effective.",
    icon: Cpu,
    cardBg: "#1B66A8",
    textColor: "#ffffff",
    mutedText: "rgba(255,255,255,0.8)",
    iconBg: "rgba(255,255,255,0.16)",
    iconColor: "#ffffff",
    borderColor: "rgba(27,102,168,0.85)",
    shadowColor: "rgba(27,102,168,0.36)",
  },
  {
    title: "Accountable Execution",
    description:
      "We believe in transparent updates, responsible delivery, clear reporting, and results businesses can measure.",
    icon: ShieldCheck,
    cardBg: "#BD5939",
    textColor: "#ffffff",
    mutedText: "rgba(255,255,255,0.8)",
    iconBg: "rgba(255,255,255,0.16)",
    iconColor: "#ffffff",
    borderColor: "rgba(189,89,57,0.85)",
    shadowColor: "rgba(189,89,57,0.36)",
  },
];
export default function AboutPageContent() {
  return (
    <main className="bg-black text-white">
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
            <Link href="/" className="text-[#1467f5] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">About</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
            About BrainADZ
          </h1>

          <div className="mt-auto max-w-[650px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
              Creators, partners and clients putting digital growth to work in
              the real world
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-[4px] bg-[#1467f5] px-5 text-[15px] font-medium text-white transition hover:bg-[#0f56d6] sm:min-h-14 sm:px-6"
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
      <section className="overflow-hidden bg-black text-white">
        <div className="grid min-h-[760px] lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
            <Image
              src="/homepage/about-ai-collaboration.png"
              alt="Human creativity collaborating with artificial intelligence"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/30" />

            <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-10 sm:top-8">
              <span className="text-[36px] font-light leading-none tracking-[-0.04em] sm:text-[48px]">
                BrainADZ
              </span>
              <span className="relative text-[34px] font-light italic leading-none text-white sm:text-[44px]">
                AI
                <span className="absolute -right-4 -top-2 text-[18px] not-italic text-[#42d7ee]">
                  +
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center px-5 py-14 sm:px-9 lg:px-10 lg:py-16 xl:px-16">
            <div className="w-full">
              <p className="text-[30px] font-light leading-tight text-white/90 sm:text-[38px] lg:text-[42px]">
                Integrated Marketing Solutions
              </p>

              <h2 className="mt-3 max-w-[830px] text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[48px] lg:text-[54px]">
                Building Brands That Grow Across Every Digital Touchpoint
              </h2>

              <p className="mt-7 max-w-[900px] text-[17px] font-normal leading-8 text-white/82 sm:text-[18px]">
                <strong className="font-semibold text-white">
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
      <section className="border-y border-white/10 bg-black py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-[42px] font-light leading-none sm:text-[52px] lg:text-[58px]">
            Fast facts
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-y-0">
            {FAST_FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="text-[58px] font-light leading-none tracking-[-0.04em] text-[#1467f5] sm:text-[68px] lg:text-[74px]">
                  <CountUp end={fact.value} suffix={fact.suffix} />
                </p>
                <p className="mt-2 max-w-[310px] text-[15px] leading-6 text-white/70 sm:text-[16px]">
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
    <section className="bg-black py-16 text-white  sm:py-20  lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="text-[46px] font-light leading-none tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]">
              Origin story
            </h2>
          </div>

          <div className="max-w-[820px]">
            <p className="text-[16px] font-normal leading-7 text-white/82 sm:text-[17px]">
              For more than a decade, BrainADZ has been helping brands move
              forward with creativity, technology and performance-focused
              marketing. From strategy and design to websites, campaigns,
              automation and measurable growth, our journey has always been
              built around practical innovation.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 text-[16px] font-medium text-[#1467f5] transition hover:text-white"
            >
              Learn more about our rich history
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex overflow-x-auto border-b border-white/18">
            {ORIGIN_STORY_TABS.map((tab, index) => (
              <button
                key={tab.period}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`min-w-[190px] border-b-4 px-4 pb-4 text-left text-[16px] font-normal transition sm:min-w-[210px] ${
                  activeTab === index
                    ? "border-[#1467f5] text-white"
                    : "border-transparent text-white/70 hover:text-white"
                }`}
              >
                {tab.period}
              </button>
            ))}
          </div>

          <div className="grid gap-10 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pt-16">
            <div className="max-w-[760px]">
              <h3 className="text-[28px] font-normal leading-tight tracking-[-0.02em] text-white sm:text-[34px]">
                {activeStory.heading}
              </h3>

              <p className="mt-8 text-[16px] leading-8 text-white/78 sm:text-[17px]">
                {activeStory.description}
              </p>
            </div>

            <div className="relative min-h-[300px] overflow-hidden bg-white/5 sm:min-h-[390px] lg:min-h-[430px]">
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
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute left-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#0FA9B6]/18 blur-[110px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[380px] w-[380px] rounded-full bg-[#BD5939]/16 blur-[120px]" />
      <div className="absolute left-[35%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#D9DD48]/8 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1620px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="max-w-[690px] text-[38px] font-light leading-[1.06] tracking-[-0.05em] text-white sm:text-[50px] lg:text-[62px]">
              Values that shape every campaign
            </h2>
          </div>

          <div className="max-w-[780px] lg:pt-8">
            <p className="text-[16px] font-normal leading-7 text-white/76 sm:text-[17px]">
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
                className="group relative min-h-[265px] overflow-hidden rounded-[26px] border p-6 transition-all duration-500 hover:-translate-y-1.5 sm:p-7"
                style={{
                  background: `linear-gradient(145deg, ${value.cardBg} 0%, ${value.cardBg} 62%, rgba(255,255,255,0.10) 100%)`,
                  borderColor: value.borderColor,
                  boxShadow: `0 14px 38px rgba(0,0,0,0.24)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 55px ${value.shadowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 14px 38px rgba(0,0,0,0.24)`;
                }}
              >
                <div className="absolute right-[-45px] top-[-45px] h-32 w-32 rounded-full bg-white/14" />
                <div className="absolute bottom-[-70px] left-[-55px] h-40 w-40 rounded-full bg-black/10 blur-xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.18),transparent_24%)]" />

                <div className="relative z-10">
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[22px] border border-white/20 bg-white/10 backdrop-blur-xl transition duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
                    <Icon
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      strokeWidth={1.7}
                      style={{ color: value.iconColor }}
                    />
                  </div>

                  <h3
                    className="mt-9 max-w-[360px] text-[25px] font-semibold leading-tight tracking-[-0.035em] sm:text-[29px]"
                    style={{ color: value.textColor }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="mt-4 max-w-[430px] text-[14px] leading-6 sm:text-[15px]"
                    style={{ color: value.mutedText }}
                  >
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
    <section className="overflow-hidden bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
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

          <div className="left-0 top-[-6px] mt-6 rounded-[22px] bg-[#181818] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-8 lg:absolute lg:mt-0 lg:w-[410px]">
            <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
              We Keep Our Eye On The ROI
            </h2>

            <p className="mt-5 text-[14px] font-medium leading-6 text-white/88 sm:text-[15px]">
              Every marketing solution we build begins with a strong business
              case. We connect each campaign to its ROI, set measurable
              performance targets, and track them from day one.
            </p>

            <p className="mt-4 text-[14px] font-medium leading-6 text-white/82 sm:text-[15px]">
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
            <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[27px]">
              We Own Responsibilities
            </h3>

            <p className="mt-5 text-[15px] font-medium leading-7 text-white/82 sm:text-[16px]">
              We bring together strategy, creative thinking, technology,
              performance marketing, design, development, and content execution
              to manage projects with complete ownership.
            </p>

            <p className="mt-4 text-[15px] font-medium leading-7 text-white/78 sm:text-[16px]">
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
