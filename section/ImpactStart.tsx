import Image from "next/image";
import type { ReactNode } from "react";

const ACCENT = "#00AAB7";

function Counter({
  target,
  suffix = "",
  decimals = 0,
  color,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  color?: string;
}) {
  const formatted = target.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span style={{ color: color ?? "black" }}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function ImpactStartsHereSection() {
  return (
    <section className="overflow-x-hidden bg-white text-black">
      <div
        className="mx-auto max-w-[1500px] px-4 py-16 md:py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(0,170,183,0.08), transparent 40%), radial-gradient(circle at 80% 10%, rgba(0,0,0,0.04), transparent 35%)",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
              <span className="relative inline-block">Impact</span>
              <br />
              Starts
              <br />
              Here
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/70">
              <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              One ecosystem. Multiple outcomes.
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
              BrainADZ Group brings together growth marketing, live event
              execution, and exhibition fabrication under one ecosystem. From
              performance-driven digital campaigns and websites, to LED screen
              setups, standees, and large-scale exhibition stalls - we help
              brands scale with clarity, consistency, and impact.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-0">
            <StatCard
              className="md:col-span-3 md:border-r"
              value={<Counter target={8.2} decimals={1} suffix=" MN+" />}
              lines={["Audience Reach", "Annually"]}
            />

            <BgImageStatCard
              className="md:col-span-2 md:row-span-2 md:border-r"
              value={<Counter target={200} suffix="+" color="white" />}
              lines={["Projects Delivered", "Across India"]}
              imageSrc="/Mask-Group-22.jpg"
            />

            <StatCard
              className="md:col-span-3 md:border-r"
              value={<Counter target={300} suffix="%" color={ACCENT} />}
              lines={["Growth Lift For", "Key Campaigns"]}
              accent
            />

            <StatCard
              className="md:col-span-3"
              value={<Counter target={62} suffix=" MN+" color={ACCENT} />}
              lines={["Monthly Content", "Engagement"]}
              accent
              showAccentLine
            />

            <WhiteHighlightCard
              className="md:col-start-7 md:row-start-2 md:col-span-3 md:border-t md:border-r"
              value={<Counter target={12} suffix=" MN+" />}
              lines={["Leads & Conversions", "Driven For Brands"]}
            />

            <AccentImageCard
              className="md:col-start-10 md:row-start-2 md:col-span-3 md:border-t"
              value={<Counter target={15} suffix=" BN+" color="black" />}
              lines={["Brand Visibility", "Generated Annually"]}
              imageSrc="/Mask-Group-39.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardShell({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`
        relative border border-black/10
        transition-transform duration-300
        hover:-translate-y-[2px]
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
  value: ReactNode;
  lines: string[];
  accent?: boolean;
  showAccentLine?: boolean;
}) {
  return (
    <CardShell className={`min-h-[190px] p-8 ${className}`}>
      {showAccentLine && (
        <div className="absolute left-0 top-0 h-full w-[3px]" style={{ background: ACCENT }} />
      )}

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-2xl"
        style={{ background: accent ? "rgba(0,170,183,0.18)" : "rgba(0,0,0,0.05)" }}
      />

      <div className="relative flex h-full flex-col justify-center">
        <div className="text-3xl font-semibold md:text-4xl" style={{ color: accent ? ACCENT : "black" }}>
          {value}
        </div>

        <div className="mt-4 space-y-1 text-sm text-black/70">
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

function BgImageStatCard({
  className = "",
  value,
  lines,
  imageSrc,
}: {
  className?: string;
  value: ReactNode;
  lines: string[];
  imageSrc: string;
}) {
  return (
    <CardShell className={`min-h-[420px] overflow-hidden p-8 ${className}`}>
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 18vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,170,183,0.22), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      <div className="relative z-10 flex h-full flex-col justify-start">
        <div className="text-3xl font-semibold text-white md:text-4xl">{value}</div>
        <div className="mt-4 space-y-1 text-sm text-white/85">
          {lines.map((line) => (
            <div key={line}>{line}</div>
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
  value: ReactNode;
  lines: string[];
}) {
  return (
    <CardShell className={`min-h-[210px] p-8 ${className}`}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-70"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,170,183,0.10), transparent)",
        }}
      />

      <div className="relative flex h-full flex-col justify-start">
        <div className="text-3xl font-semibold md:text-4xl">
          {value} <span className="text-[#00AAB7]">+</span>
        </div>
        <div className="mt-4 space-y-1 text-sm text-black/70">
          {lines.map((line) => (
            <div key={line}>{line}</div>
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
  value: ReactNode;
  lines: string[];
  imageSrc: string;
}) {
  return (
    <CardShell className={`min-h-[210px] overflow-hidden p-8 ${className}`}>
      <div className="absolute inset-0" style={{ background: ACCENT }} />
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-full w-40 rotate-12 opacity-15 blur-xl"
        style={{ background: "rgba(255,255,255,0.55)" }}
      />

      <div className="relative z-10">
        <div className="text-3xl font-semibold text-black md:text-4xl">{value}</div>
        <div className="mt-4 space-y-1 text-sm text-black/80">
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}
