/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

type Tech = { src: string; label: string };

const TECHS: Tech[] = [
  { src: "/tech/wp.svg", label: "WordPress" },
  { src: "/tech/shopify.svg", label: "Shopify" },
  { src: "/tech/php.svg", label: "PHP" },
  { src: "/tech/py.svg", label: "Python" },
  { src: "/tech/js.svg", label: "JavaScript" },
  { src: "/tech/ts.svg", label: "TypeScript" },
  { src: "/tech/react.svg", label: "React" },
  { src: "/tech/next.svg", label: "Next Js" },
  { src: "/tech/node.svg", label: "Node.js" },
  { src: "/tech/mongo.svg", label: "Mongodb" },
  { src: "/tech/sql.svg", label: "SQL" },
  { src: "/tech/django.svg", label: "Django" },
  { src: "/tech/ps.svg", label: "Photoshop" },
  { src: "/tech/ai.svg", label: "AI" },
  { src: "/tech/figma.svg", label: "Figma" },
  { src: "/tech/xd.svg", label: "Adobe XD" },
  { src: "/tech/ae.svg", label: "After Effects" },
  { src: "/tech/pr.svg", label: "Premier Pro" },
  { src: "/tech/filmora.svg", label: "Filmora" },
  { src: "/tech/cd.svg", label: "Coral Draw" },
  { src: "/tech/html.svg", label: "HTML5" },
  { src: "/tech/css.svg", label: "CSS3" },
  { src: "/tech/tw.svg", label: "Tailwind CSS" },
  { src: "/tech/ads.svg", label: "Google Ads" },
];

export default function TechExpertiseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#00AAB7] py-16 md:py-20 text-white">
      {/* ✅ premium background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* deep gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.20),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_55%,rgba(0,0,0,0.18),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.18),transparent_55%)]" />
        {/* subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] bg-size-[18px_18px]" />
      </div>

      {/* ✅ moving headline text */}
      <div className="relative">
        <Marquee direction="left" text="DIGITAL MARKETING KING & WEB DESIGNING AGENCY" outlined />
        <div className="-mt-4 md:-mt-7">
          <Marquee direction="right" text="DIGITAL MARKETING KING & WEB DESIGNING AGENCY" outlined={false} />
        </div>

        {/* soft fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#00AAB7] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#00AAB7] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        {/* optional small heading */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
            Our Tech Stack
          </p>
        </div>

        {/* ✅ tiles */}
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-8">
          {TECHS.map((t) => (
            <TechTile key={t.label} tech={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee({
  text,
  direction,
  outlined = true,
}: {
  text: string;
  direction: "left" | "right";
  outlined?: boolean;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={[
          "flex w-max items-center whitespace-nowrap",
          direction === "left"
            ? "animate-[marqLeft_26s_linear_infinite]"
            : "animate-[marqRight_26s_linear_infinite]",
        ].join(" ")}
      >
        <MarqueeText text={text} outlined={outlined} />
        <MarqueeText text={text} outlined={outlined} />
        <MarqueeText text={text} outlined={outlined} />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marqLeft { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
            @keyframes marqRight { 0%{transform:translateX(-33.333%)} 100%{transform:translateX(0)} }
          `,
        }}
      />
    </div>
  );
}

function MarqueeText({ text, outlined }: { text: string; outlined: boolean }) {
  return (
    <span
      className={[
        "px-10 py-2",
        "text-[38px] md:text-[70px] lg:text-[88px]",
        "font-extrabold uppercase tracking-[0.06em]",
        "drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        outlined ? "text-transparent opacity-70" : "text-white opacity-95",
      ].join(" ")}
      style={outlined ? { WebkitTextStroke: "2px rgba(255,255,255,0.9)" } : undefined}
    >
      {text}
    </span>
  );
}

function TechTile({ tech }: { tech: Tech }) {
  return (
    <div
      className="
        group relative
        flex flex-col items-center justify-center
        h-[118px]
        rounded-xl
        border border-white/20
        bg-black/35
        backdrop-blur-sm
        shadow-[0_14px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/35
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]
      "
    >
      {/* glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/15" />
        <div className="absolute -inset-6 rounded-[18px] bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>

<img
  src={tech.src}
  alt={tech.label}
  loading="lazy"
  className="
    relative z-10 h-10 w-10 object-contain
    opacity-90
    grayscale
    drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]
    transition duration-300
    group-hover:grayscale-0
    group-hover:opacity-100
  "
/>


      <div className="relative z-10 mt-3 text-sm font-semibold text-white">
        {tech.label}
      </div>

      <div className="relative z-10 mt-2 h-[2px] w-10 bg-white/15 transition group-hover:bg-white/70" />
    </div>
  );
}
