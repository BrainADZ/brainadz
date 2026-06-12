"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const ACCENT = "#00AAB7";

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
    <main className="w-full bg-white text-black overflow-x-hidden">
      <HeroSection />
      <PortfolioTabsSection />
    </main>
  );
}

/* ========================= HERO ========================= */

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden mt-[-90px] pt-10">
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
    <section id="portfolio" className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 py-10 md:py-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {TABS.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={[
                  "h-11 px-6 rounded-full text-sm font-semibold border transition-all duration-200",
                  isActive
                    ? "text-black border-transparent"
                    : "text-black/75 border-black/10 bg-[#F3F4F6] hover:bg-[#ECEFF1]",
                ].join(" ")}
                style={
                  isActive
                    ? {
                      background: ACCENT,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
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

        <div className="mt-10 rounded-[28px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
            Selected Category
          </p>

          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-black">
            {activeMeta.title}
          </h3>

          <div className="mt-3 h-0.5 w-24" style={{ background: ACCENT }} />

          <p className="mt-4 text-sm md:text-base text-black/70 max-w-3xl">
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
          className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)]"
        >
          <div className="border-b border-black/10 bg-[#F6F7F8] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>

              <div className="hidden sm:flex flex-1 justify-center">
                <div className="w-full max-w-[220px] truncate rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-black/45">
                  {item.href || "www.project-link.com"}
                </div>
              </div>

              <div className="text-[11px] font-medium text-black/40">Preview</div>
            </div>
          </div>

          <div className="relative aspect-14/8 w-full overflow-hidden bg-[#F8F8F8]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>

          <div className="p-5">
            <h4 className="text-lg font-bold text-black">{item.title}</h4>

            {item.href ? (
              <div className="mt-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-black transition-all duration-200"
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
          className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F7F7F7]">
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
