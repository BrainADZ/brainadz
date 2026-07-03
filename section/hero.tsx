"use client";

import { ArrowUpRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

const awards = [
  {
    src: "/certificate/aws.webp",
    alt: "BrainADZ Live Award 1",
  },
  {
    src: "/certificate/google.png",
    alt: "BrainADZ Live Award 2",
  },
  {
    src: "/certificate/meta.webp",
    alt: "BrainADZ Live Award 3",
  },
];

export default function Hero() {
  const repeatedAwards = [...awards, ...awards];

  return (
    <section className="relative min-h-[calc(100vh-58px)] overflow-hidden bg-black text-white">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/hero-poster.jpg"
      >
        <source src="/hero/hero_video.mp4" type="video/mp4" />
      </video>

      {/* LIGHT MAIN OVERLAY */}
      <div className="absolute inset-0 bg-black/5" />

      {/* LEFT BLACK SHADOW - RIGHT SIDE LIGHTER */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_18%,rgba(0,0,0,0.48)_36%,rgba(0,0,0,0.20)_55%,rgba(0,0,0,0.06)_72%,rgba(0,0,0,0)_100%)]" />

      {/* BOTTOM FADE - REDUCED */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.08)_58%,rgba(0,0,0,0.45)_100%)]" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-58px)] max-w-450 items-start md:items-end justify-between gap-10 px-6 pt-27 md:pt-0 pb-4 md:pb-27 md:px-10">
        {/* LEFT CONTAINER */}
        <div className="w-full max-w-132.5">
          <h1 className="text-[38px] font-semibold leading-[1.16] tracking-[-1.2px] text-white sm:text-[40px] md:text-[48px] lg:text-[58px]">
            360° Marketing Solutions That Turn Brands Into Growth Engines
          </h1>

          <p className="mt-7 max-w-190 text-[14px] font-normal leading-[1.65] tracking-[-0.1px] text-white/90 md:text-[16px]">
           BrainADZ Marketing helps businesses grow with strategy, creativity, performance marketing, SEO, social media, paid ads, website development, branding, and custom digital solutions — all built to generate leads, improve visibility, and scale revenue.
          </p>

          <div className="mt-8.5">
            <a
              href="/contact"
              className="inline-flex h-14.5 min-w-71.25 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#497dd8] px-8 text-[12px] font-medium text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#1467f5]"
            >
              Get Free Marketing Consultation
              <span className="text-[20px] leading-none"><ArrowUpRight className="w-5 h-5" /></span>
            </a>
          </div>
        </div>

        {/* RIGHT CONTAINER - CAROUSEL */}
        <div className="hidden w-175 shrink-0 overflow-hidden md:block">
          <div className="relative w-full overflow-hidden">
            {/* LEFT FADE - REDUCED */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-black/20 to-transparent" />

            {/* RIGHT FADE - REDUCED */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-black/20 to-transparent" />

            <div className="hero-awards-track flex w-max gap-5">
              {repeatedAwards.map((award, index) => (
                <div
                  key={`${award.alt}-${index}`}
                  className="flex h-25 w-55 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-5 backdrop-blur-xs transition duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="max-h-18 max-w-43 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="absolute bottom-7 left-0 right-0 z-20 block overflow-hidden px-5 md:hidden">
        <div className="hero-awards-track flex w-max gap-4">
          {repeatedAwards.map((award, index) => (
            <div
              key={`mobile-${award.alt}-${index}`}
              className="flex h-19 w-40 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/15 px-4 backdrop-blur-xs"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="max-h-13.5 max-w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL ANIMATION */}
      <style jsx>{`
        .hero-awards-track {
          animation: heroAwardsScroll 24s linear infinite;
        }

        .hero-awards-track:hover {
          animation-play-state: paused;
        }

        @keyframes heroAwardsScroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
