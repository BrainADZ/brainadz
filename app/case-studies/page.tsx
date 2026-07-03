"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const ACCENT = "#1467f5";

/* ========================= TABS ========================= */

type TabKey =
  | "Web Design"
  | "SEO"
  | "Instagram Profiles"
  | "Facebook Profiles"
  | "Youtube Profiles"
  | "Linkedin Profiles"

  | "Graphic Design";

const TABS: TabKey[] = [
  "Web Design",
  "SEO",
  "Instagram Profiles",
  "Facebook Profiles",
  "Youtube Profiles",
  "Linkedin Profiles",

  "Graphic Design",
];

/* ========================= DATA ========================= */

type PortfolioItem = {
  title: string;
  image: string;
  href?: string;
};

const PORTFOLIO_DATA: Record<TabKey, PortfolioItem[]> = {
    "Web Design": [
    {
      title: "Khadi Organic",
      image: "/portfolio/web/1.png",
      href: "http://khadiorganique.com/",
    },
    {
      title: "Comac India",
      image: "/portfolio/web/2.png",
      href: "https://comacindia.com/"
    },
    {
      title: "Jaskirat Exports",
      image: "/portfolio/web/3.png",
      href: "https://jaskiratexports.com/",
    },
    {
      title: "National Engineers & Steel Fabricators",
      image: "/portfolio/web/4.png",
      href: "https://nationalengrs.com/",
    },
    {
      title: "Country Home",
      image: "/portfolio/web/5.png",
      href: "https://countryhome.co.in/",
    },
    {
      title: "Rubber House India",
      image: "/portfolio/web/6.png",
      href: "https://rubberhoseindia.com/",
    },
    {
      title: "Synergy Infra",
      image: "/portfolio/web/7.png",
      href: "https://synergyinfra.ltd/",
    },
    {
      title: "Atlas Machine",
      image: "/portfolio/web/8.png",
      href: "https://atlasmachinery.co.in/",
    },
    {
      title: "Silent Meadows",
      image: "/portfolio/web/9.png",
      href: "https://silentmeadows.in/silentmeadows/",
    },
  ],
  SEO: [
    {
      title: "National Engineers SEO",
      image: "/portfolio/seo/seo-1.jpg",
      href: "https://nationalengrs.com",
    },
    {
      title: "Dairy Best Organic Reach",
      image: "/portfolio/seo/seo-2.jpg",
      href: "https://livlite.co.in",
    },
    {
      title: "Lords Xtra Search Performance",
      image: "/portfolio/seo/seo-3.jpg",
      href: "https://lordsxtra.in",
    },
  ],

  "Instagram Profiles": [
        {
      title: "Cremica",
      image: "/portfolio/instagram/7.png",
      href: "https://www.instagram.com/cremicafoods/",
    },
        {
      title: "Eclectic Bay India",
      image: "/portfolio/instagram/5.png",
      href: "https://www.instagram.com/eclecticbayindia/",
    },
    {
      title: "Comac India",
      image: "/portfolio/instagram/1.png",
      href: "https://www.instagram.com/comacindia/",
    },
    {
      title: "Navin Polycon",
      image: "/portfolio/instagram/2.png",
      href: "https://www.instagram.com/navin.polycon/",
    },
    {
      title: "Stas Chem Group",
      image: "/portfolio/instagram/3.png",
      href: "https://www.instagram.com/staschemgroup/",
    },
    {
      title: "Ok Cookware",
      image: "/portfolio/instagram/4.png",
      href: "https://www.instagram.com/okcookware/",
    },

  ],

  "Facebook Profiles": [
    {
      title: "Water Expo Campaigns",
      image: "/portfolio/facebook/fb-1.jpg",
      href: "https://facebook.com/",
    },
    {
      title: "Dhariwala Foods Page",
      image: "/portfolio/facebook/fb-2.jpg",
      href: "https://facebook.com/",
    },
    {
      title: "BrainADZ Live",
      image: "/portfolio/facebook/fb-3.jpg",
      href: "https://facebook.com/",
    },
  ],

  "Youtube Profiles": [
    {
      title: "Exhibits Video Portfolio",
      image: "/portfolio/youtube/yt-1.jpg",
      href: "https://youtube.com/",
    },
    {
      title: "Product Demo Videos",
      image: "/portfolio/youtube/yt-2.jpg",
      href: "https://youtube.com/",
    },
    {
      title: "WAPTEMA Event Promotions",
      image: "/portfolio/youtube/yt-3.jpg",
      href: "https://youtube.com/",
    },
  ],

  "Linkedin Profiles": [
    {
      title: "BrainADZ Corporate Branding",
      image: "/portfolio/linkedin/li-1.jpg",
      href: "https://linkedin.com/",
    },
    {
      title: "Exhibition Project Showcase",
      image: "/portfolio/linkedin/li-2.jpg",
      href: "https://linkedin.com/",
    },
    {
      title: "Company Updates & Milestones",
      image: "/portfolio/linkedin/li-3.jpg",
      href: "https://linkedin.com/",
    },
  ],



  "Graphic Design": [
    {
      title: "Graphic 1",
      image: "/portfolio/graphic/graphic-1.jpg",
    },
    {
      title: "Graphic 2",
      image: "/portfolio/graphic/graphic-2.jpg",
    },
    {
      title: "Graphic 3",
      image: "/portfolio/graphic/graphic-3.jpg",
    },
    {
      title: "Graphic 4",
      image: "/portfolio/graphic/graphic-4.jpg",
    },
    {
      title: "Graphic 5",
      image: "/portfolio/graphic/graphic-5.jpg",
    },
    {
      title: "Graphic 6",
      image: "/portfolio/graphic/graphic-6.jpg",
    },
  ],
};

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <CaseStudiesHero />
      <PortfolioTabsSection />
    </main>
  );
}

/* ========================= HERO ========================= */

function CaseStudiesHero() {
  return (
    <section className="relative min-h-[460px] overflow-hidden bg-black sm:min-h-[520px] lg:min-h-[580px]">
      <Image
        src="/portfolio/web/1.png"
        alt="Selected website project delivered by BrainADZ"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.84)_34%,rgba(0,0,0,0.42)_68%,rgba(0,0,0,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.46)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[520px] sm:px-8 lg:min-h-[580px] lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[14px] font-medium leading-none"
        >
          <Link href="/" className="text-[#6995ff] transition hover:text-white">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span className="text-white">Case Studies</span>
        </nav>

        <h1 className="mt-7 max-w-[800px] text-[36px] font-normal leading-[1.04] text-white sm:text-[48px] lg:text-[62px]">
          Case Studies
        </h1>

        <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
          <p className="text-[18px] leading-[1.5] text-white/84 sm:text-[21px] lg:text-[24px]">
            Explore real work across websites, search, social media and creative
            systems, built to move brands from challenge to measurable progress.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#portfolio"
              className="inline-flex min-h-14 items-center justify-center gap-7 rounded-[4px] bg-[#1467f5] px-6 text-[15px] font-medium text-white transition hover:bg-[#0f56d6]"
            >
              Explore our work
              <FiArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-7 rounded-[4px] border border-white/24 bg-black/30 px-6 text-[15px] font-medium text-white transition hover:border-[#1467f5] hover:bg-[#1467f5]"
            >
              Start a project
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LegacyHeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #003F42 0%, #005E63 35%, #00AAB7 120%)",
        }}
      />

      <div className="absolute inset-0 opacity-40">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1600 520"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,520 0,250 220,160 420,240 520,190 720,300 920,220 1100,320 1300,200 1600,320 1600,520"
            fill="#007E85"
          />
          <polygon
            points="0,520 0,320 260,240 420,320 560,260 760,360 980,280 1180,380 1400,300 1600,380 1600,520"
            fill="#005E63"
          />
          <polygon
            points="0,520 0,380 240,330 430,380 600,330 820,420 1040,350 1240,430 1460,370 1600,420 1600,520"
            fill="#003F42"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Portfolio
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Work • Results • Execution
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-white">
              Explore our <span style={{ color: "#E9FFFE" }}>selected work</span>{" "}
              across brands & industries.
            </h1>

            <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/85">
              Websites, growth campaigns, creatives, on-ground activations, and
              exhibition execution — built with consistency, speed, and strong
              systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#portfolio"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black bg-white transition-all duration-200 hover:opacity-95"
              >
                View Portfolio <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white border border-white/25 bg-white/10 transition-all duration-200 hover:bg-white/15"
              >
                Start a Project <FiArrowRight />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <MiniStat label="Web + UI/UX" value="High-converting" />
              <MiniStat label="Marketing" value="Performance-led" />
              <MiniStat label="Exhibits + Live" value="Turnkey execution" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-[520px] ml-auto">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <h2 className="text-white/90 text-lg font-semibold uppercase tracking-[0.16em]">
                  Connect with our Experts
                </h2>

                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Share your requirement — we’ll get back with the best approach.
                </p>

                <div className="mt-6 h-px w-full bg-white/15" />

                <form className="mt-6 space-y-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40 focus:bg-white/15"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40 focus:bg-white/15"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40 focus:bg-white/15"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40 focus:bg-white/15"
                    />
                  </div>

                  <select
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white outline-none focus:border-white/40 focus:bg-white/15"
                  >
                    <option value="" disabled className="text-black">
                      Choose services
                    </option>
                    <option value="seo-performance" className="text-black">
                      SEO + Performance
                    </option>
                    <option value="social-creatives" className="text-black">
                      Social + Creatives
                    </option>
                    <option value="web-uiux" className="text-black">
                      Web + UI/UX
                    </option>
                    <option value="exhibits-live" className="text-black">
                      Exhibits + Live
                    </option>
                  </select>

                  <button
                    type="submit"
                    className="mt-2 inline-flex h-[46px] w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-black hover:opacity-95"
                  >
                    Request a Callback
                  </button>
                </form>
              </div>

              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl"
                style={{ background: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
      <p className="text-xs text-white/75">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

/* ========================= TABS SECTION ========================= */

function PortfolioTabsSection() {
  const [active, setActive] = useState<TabKey>("Web Design");

  const activeMeta = useMemo(() => {
    const map: Record<TabKey, { title: string; desc: string }> = {
      "Web Design": {
        title: "Web Design",
        desc: "UI/UX, landing pages, and conversion-ready websites.",
      },
      SEO: {
        title: "SEO",
        desc: "Audits, growth systems, content ops, and performance improvements.",
      },
      "Instagram Profiles": {
        title: "Instagram Profiles",
        desc: "Content systems, profile growth, and creative consistency.",
      },
      "Facebook Profiles": {
        title: "Facebook Profiles",
        desc: "Page management, campaigns support, and content publishing.",
      },
      "Youtube Profiles": {
        title: "YouTube Profiles",
        desc: "Channel optimization, content planning, thumbnails, and reels.",
      },
      "Linkedin Profiles": {
        title: "LinkedIn Profiles",
        desc: "B2B positioning, profile revamps, and content frameworks.",
      },

      "Graphic Design": {
        title: "Graphic Design",
        desc: "Branding, ad creatives, and visual-first design output.",
      },
    };
    return map[active];
  }, [active]);

  const items = PORTFOLIO_DATA[active];

  return (
    <section id="portfolio" className="w-full scroll-mt-24 bg-[#080808] text-white">
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {TABS.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={[
                  "min-h-12 rounded-[4px] border px-5 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "border-[#1467f5] text-white"
                    : "border-white/12 bg-black text-white/70 hover:border-[#1467f5] hover:text-white",
                ].join(" ")}
                style={
                  isActive
                    ? {
                      background: ACCENT,
                    }
                    : undefined
                }
                aria-pressed={isActive}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/12 pt-10">
          <p className="text-xs font-semibold uppercase text-white/50">
            Selected Category
          </p>

          <h3 className="mt-3 text-2xl font-medium text-white md:text-3xl">
            {activeMeta.title}
          </h3>

          <div className="mt-3 h-0.5 w-24" style={{ background: ACCENT }} />

          <p className="mt-4 max-w-3xl text-sm text-white/62 md:text-base">
            {activeMeta.desc}
          </p>

          {active === "Graphic Design" ? (
            <GraphicGrid items={items} />
          ) : (
            <BrowserGrid items={items} />
          )}
        </div>
      </div>
    </section>
  );
}

/* ========================= BROWSER STYLE GRID ========================= */

function BrowserGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="group overflow-hidden rounded-[6px] border border-white/12 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-[#1467f5]/70"
        >
          <div className="border-b border-white/10 bg-[#101010] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>

              <div className="hidden sm:flex flex-1 justify-center">
                <div className="w-full max-w-[220px] truncate rounded-[3px] border border-white/10 bg-black px-3 py-1 text-[11px] text-white/45">
                  {item.href || "www.project-link.com"}
                </div>
              </div>

              <div className="text-[11px] font-medium text-white/40">Preview</div>
            </div>
          </div>

          <div className="relative aspect-14/8 w-full overflow-hidden bg-[#080808]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>

          <div className="p-5">
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>

            {item.href ? (
              <div className="mt-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] border border-[#1467f5]/45 px-4 py-2 text-sm font-semibold text-[#6995ff] transition-all duration-200 hover:bg-[#1467f5] hover:text-white"
                  style={{ background: `${ACCENT}1A` }}
                >
                  Visit Project <FiExternalLink />
                </a>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

/* ========================= GRAPHIC ONLY GRID ========================= */

function GraphicGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="group overflow-hidden rounded-[6px] border border-white/12 bg-black transition-colors hover:border-[#1467f5]/70"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden bg-[#080808]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
