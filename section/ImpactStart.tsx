/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useMemo, useState } from "react";

const ACCENT = "#00AAB7";

/* ==================== Counter Hook ==================== */
function useCountUp(target: number, duration = 1200, startOn = true) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!startOn) return;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startOn]);

  return val;
}

/* ==================== Counter Component ==================== */
function Counter({
  target,
  suffix = "",
  decimals = 0,
  duration = 1200,
  color,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  color?: string;
}) {
  const v = useCountUp(target, duration, true);

  // ✅ smoother formatting during animation (no weird flicker)
  const formatted = useMemo(() => {
    const safe = Number.isFinite(v) ? v : 0;
    return safe.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [v, decimals]);

  return (
    <span style={{ color: color ?? "black" }}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function ImpactStartsHereSection() {
  return (
    <section className="bg-white text-black overflow-x-hidden">
      <div
        className="mx-auto max-w-[1500px] px-4 py-16 md:py-20"
        // ✅ subtle premium texture (not messy)
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(0,170,183,0.08), transparent 40%), radial-gradient(circle at 80% 10%, rgba(0,0,0,0.04), transparent 35%)",
        }}
      >
        {/* ===== TOP CONTENT ===== */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xl md:text-5xl font-extrabold leading-[1.02] tracking-tight">
              <span className="relative inline-block">
                Impact
                {/* ✅ accent underline */}
               
              </span>
              <br />
              Starts
              <br />
              Here
            </h2>
          </div>

          <div className="lg:col-span-7">
            {/* ✅ small badge (clean hierarchy) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              One ecosystem. Multiple outcomes.
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
              BrainADZ Group brings together growth marketing, live event execution,
              and exhibition fabrication under one ecosystem. From performance-driven
              digital campaigns and websites, to LED screen setups, standees,
              and large-scale exhibition stalls — we help brands scale with clarity,
              consistency, and impact.
            </p>
          </div>
        </div>

        {/* ===== GRID ===== */}
        <div className="mt-14">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-0">
            <StatCard
              className="md:col-span-3 md:border-r"
              value={<Counter target={8.2} decimals={1} suffix=" MN+" />}
              lines={["Audience Reach", "Annually"]}
            />

            {/* ✅ 200+ block: image as FULL background (same container height) */}
            <BgImageStatCard
              className="md:col-span-2 md:row-span-2 md:border-r"
              value={<Counter target={200} decimals={0} suffix="+" color="white" />}
              lines={["Projects Delivered", "Across India"]}
              imageSrc="/Mask-Group-22.jpg"
            />

            <StatCard
              className="md:col-span-3 md:border-r"
              value={<Counter target={300} decimals={0} suffix="%" color={ACCENT} />}
              lines={["Growth Lift For", "Key Campaigns"]}
              accent
            />

            <StatCard
              className="md:col-span-3"
              value={<Counter target={62} decimals={0} suffix=" MN+" color={ACCENT} />}
              lines={["Monthly Content", "Engagement"]}
              accent
              showAccentLine
            />

            <WhiteHighlightCard
              className="md:col-start-7 md:row-start-2 md:col-span-3 md:border-t md:border-r"
              value={<Counter target={12} decimals={0} suffix=" MN+" />}
              lines={["Leads & Conversions", "Driven For Brands"]}
            />

            <AccentImageCard
              className="md:col-start-10 md:row-start-2 md:col-span-3 md:border-t"
              value={<Counter target={15} decimals={0} suffix=" BN+" color="black" />}
              lines={["Brand Visibility", "Generated Annually"]}
              imageSrc="/Mask-Group-39.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function CardShell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        relative border border-black/10
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function StatCard({
  className = "",
  value,
  lines,
  accent,
  showAccentLine,
}: {
  className?: string;
  value: React.ReactNode;
  lines: string[];
  accent?: boolean;
  showAccentLine?: boolean;
}) {
  return (
    <CardShell className={`p-8 min-h-[190px] ${className}`}>
      {/* ✅ optional left accent line */}
      {showAccentLine && (
        <div className="absolute left-0 top-0 h-full w-[3px]" style={{ background: ACCENT }} />
      )}

      {/* ✅ tiny corner glow (subtle) */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl opacity-40"
        style={{ background: accent ? "rgba(0,170,183,0.20)" : "rgba(0,0,0,0.06)" }}
      />

      <div className="relative flex h-full flex-col justify-center">
        <div
          className="text-3xl md:text-4xl font-semibold"
          style={{ color: accent ? ACCENT : "black" }}
        >
          {value}
        </div>

        <div className="mt-4 text-sm text-black/70 space-y-1">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

/**
 * ✅ Image as background, not separate block.
 * Same container height, content sits on top.
 */
function BgImageStatCard({
  className = "",
  value,
  lines,
  imageSrc,
}: {
  className?: string;
  value: React.ReactNode;
  lines: string[];
  imageSrc: string;
}) {
  return (
    <CardShell
      className={`
        overflow-hidden p-8 min-h-[420px]
        ${className}
      `}
    >
      {/* background image full */}
      <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,170,183,0.22), transparent 55%)",
        }}
      />

      {/* ✅ thin border highlight (premium) */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-start">
        <div className="text-3xl md:text-4xl font-semibold text-white">{value}</div>
        <div className="mt-4 text-sm text-white/85 space-y-1">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

function WhiteHighlightCard({
  className = "",
  value,
  lines,
}: {
  className?: string;
  value: React.ReactNode;
  lines: string[];
}) {
  return (
    <CardShell className={`p-8 min-h-[210px] ${className}`}>
      {/* ✅ subtle top gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-70"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,170,183,0.10), transparent)",
        }}
      />

      <div className="relative flex h-full flex-col justify-start">
        <div className="text-3xl md:text-4xl font-semibold">
          {value} <span className="text-[#00AAB7]">•</span>
        </div>
        <div className="mt-4 text-sm text-black/70 space-y-1">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

function AccentImageCard({
  className = "",
  value,
  lines,
  imageSrc,
}: {
  className?: string;
  value: React.ReactNode;
  lines: string[];
  imageSrc: string;
}) {
  return (
    <CardShell
      className={`overflow-hidden p-8 min-h-[210px] ${className}`}
    >
      {/* accent base */}
      <div className="absolute inset-0" style={{ background: ACCENT }} />

      {/* background image overlay */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* ✅ gentle light sweep */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-full w-40 rotate-12 opacity-20 blur-2xl"
        style={{ background: "rgba(255,255,255,0.55)" }}
      />

      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-semibold text-black">{value}</div>
        <div className="mt-4 text-sm text-black/80 space-y-1">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}
