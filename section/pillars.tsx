/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

type Social = {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

type Pillar = {
  name: string;
  designation: string;
  image: string;
  social: Social;
};

const ACCENT = "#00AAB7";

/** ✅ 6 members */
const PILLARS: Pillar[] = [
  {
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/creativehead.jpeg",
    social: { linkedin: "#", instagram: "#", facebook: "#", twitter: "#" },
  },
  {
    name: "Mayur Sharma",
    designation: "Marketing Head",
    image: "/teams/mh.webp",
    social: { linkedin: "#" },
  },
  {
    name: "Vinay Rathor",
    designation: "IT Head",
    image: "/teams/ItHead.webp",
    social: { linkedin: "#", instagram: "#", facebook: "#", twitter: "#" },
  },
  {
    name: "Aastha Singh",
    designation: "Business Development Manager",
    image: "/teams/bdm.webp",
    social: { linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/" },
  },
  {
    name: "Aastha Singh",
    designation: "Business Development Manager",
    image: "/teams/bdm.webp",
    social: { linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/" },
  },  {
    name: "Aastha Singh",
    designation: "Business Development Manager",
    image: "/teams/bdm.webp",
    social: { linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/" },
  },
];

export default function PillarsSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="text-left">
              <div className="flex items-center gap-3">
                <p className="inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
                  Pillars
                </p>
                <span
                  className="hidden sm:inline-flex h-2 w-2 rounded-full"
                  style={{ background: ACCENT }}
                />
                <p className="hidden sm:block text-xs text-black/55">
                  Leadership • Ownership • Consistency
                </p>
              </div>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-black leading-tight">
                Pillars of the Company
              </h2>

              <div className="mt-3 h-0.5 w-24" style={{ backgroundColor: ACCENT }} />

              {/* ✅ add more content (fills empty feel) */}
              <p className="mt-4 max-w-3xl text-sm md:text-base text-black/70">
                The leadership team that sets our execution standards — driving strategy,
                delivery, and client outcomes across marketing, tech, and operations.
              </p>

              {/* ✅ chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>Fast Execution</Chip>
                <Chip>Transparent Reporting</Chip>
                <Chip>Creative + Performance</Chip>
                <Chip>Process-Driven Delivery</Chip>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/teams"
                className="
                  inline-flex h-11 items-center justify-center
                  border border-black/15 bg-white
                  px-6 text-sm font-semibold text-black
                  transition-all duration-200
                  hover:border-[#00AAB7] hover:text-[#00AAB7]
                "
              >
                View All
              </Link>

              <Link
                href="/career"
                className="
                  inline-flex h-11 items-center justify-center
                  px-6 text-sm font-semibold text-white
                  transition-all duration-200
                  hover:opacity-90
                "
                style={{ background: ACCENT }}
              >
                Join the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <PillarCard key={p.name + p.designation} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
      style={{
        borderColor: "rgba(0,0,0,0.10)",
        background: "rgba(0,170,183,0.06)",
        color: "rgba(0,0,0,0.70)",
      }}
    >
      {children}
    </span>
  );
}

function PillarCard({ name, designation, image, social }: Pillar) {
  const hasAnySocial =
    !!social.facebook || !!social.twitter || !!social.instagram || !!social.linkedin;

  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden bg-white
          border border-black/10
          shadow-[0_18px_45px_rgba(0,0,0,0.10)]
          rounded-[22px]
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
        "
      >
        {/* Accent frame */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `inset 0 0 0 2px ${ACCENT}` }}
        />

        {/* Image */}
        <div className="relative aspect-4/5 w-full">
          <img
            src={image}
            alt={`${name} - ${designation}`}
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-[1.05]
            "
            loading="lazy"
          />

          {/* Overlay gradient (adds depth, removes empty look) */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

          {/* Top-right: social menu */}
          <div className="absolute right-4 top-4 group/btn">
            <div
              className="
                relative grid h-10 w-10 place-items-center
                rounded-full bg-white/95 text-black
                border border-black/10
                shadow-[0_10px_22px_rgba(0,0,0,0.14)]
                transition-all duration-200
                group-hover/btn:scale-105
              "
              title="Social links"
            >
              <span className="text-[22px] leading-none">+</span>
            </div>

            {hasAnySocial && (
              <div
                className="
                  absolute right-0 mt-3 w-14
                  rounded-full bg-white border border-black/10
                  shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                  p-2
                  opacity-0 translate-y-2 pointer-events-none
                  transition-all duration-200 ease-out
                  group-hover/btn:opacity-100
                  group-hover/btn:translate-y-0
                  group-hover/btn:pointer-events-auto
                "
              >
                <div className="flex flex-col items-center gap-2">
                  {social.facebook && (
                    <SocialIcon href={social.facebook} label="Facebook">
                      <FaFacebookF />
                    </SocialIcon>
                  )}
                  {social.twitter && (
                    <SocialIcon href={social.twitter} label="X">
                      <FaXTwitter />
                    </SocialIcon>
                  )}
                  {social.instagram && (
                    <SocialIcon href={social.instagram} label="Instagram">
                      <FaInstagram />
                    </SocialIcon>
                  )}
                  {social.linkedin && (
                    <SocialIcon href={social.linkedin} label="LinkedIn">
                      <FaLinkedinIn />
                    </SocialIcon>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom-left: name plate on image (fills empty) */}
          <div className="absolute left-4 bottom-4 right-4">
            <div className="rounded-xl bg-white/92 backdrop-blur border border-white/40 px-4 py-3">
              <p className="text-[18px] font-extrabold text-black leading-snug">
                {name}
              </p>
              <p className="mt-0.5 text-sm text-black/65">{designation}</p>
              <div className="mt-2 h-0.5 w-10 bg-black/10">
                <div className="h-full w-1/2" style={{ backgroundColor: ACCENT }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional tiny line below (keeps spacing consistent) */}
      <div className="mt-3 h-0.5 w-full bg-black/5">
        <div className="h-full w-[22%]" style={{ backgroundColor: ACCENT }} />
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="
        grid h-9 w-9 place-items-center
        rounded-full border border-black/10 bg-white
        text-black/70
        transition-all duration-200
        hover:scale-105 hover:text-black
      "
    >
      <span className="text-[16px]">{children}</span>
    </Link>
  );
}
