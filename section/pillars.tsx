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

/** ✅ CEO (Left Big) */
const CEO: Pillar = {
  name: "Preeti Jaiswal",
  designation: "Chief Executive Officer",
  image: "/teams/Co-Founder.png",
  social: { linkedin: "#", instagram: "#", facebook: "#", twitter: "#" },
};

/** ✅ 6 members (Right Grid) */
const PILLARS: Pillar[] = [
  {
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/creativeHead.jpeg",
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
    name: "Rishabh Pratap",
    designation: "Software Developer",
    image: "/teams/sd.webp",
    social: { linkedin: "#" },
  },
  {
    name: "Deepak Awasthi",
    designation: "Seo Expert",
    image: "/teams/seo.webp",
    social: { linkedin: "#" },
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

              <div
                className="mt-3 h-0.5 w-24"
                style={{ backgroundColor: ACCENT }}
              />

              <p className="mt-4 max-w-3xl text-sm md:text-base text-black/70">
                The leadership team that sets our execution standards — driving
                strategy, delivery, and client outcomes across marketing, tech,
                and operations.
              </p>

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

        {/* ✅ 2 Container Layout */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.95fr] items-center">
          {/* ✅ Left: CEO big (HIDE on mobile) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-6">
              <PillarCardLarge {...CEO} />
            </div>
          </div>

          {/* ✅ Right: Team grid */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="h-0.5 w-24 bg-black/10">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>
            </div>

            {/* ✅ Mobile: 2 cards per row */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
              {PILLARS.slice(0, 6).map((p, idx) => (
                <PillarCard key={`${p.name}-${p.designation}-${idx}`} {...p} />
              ))}
            </div>
          </div>
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

/** ✅ Large CEO Card (image shorter + text below image) */
function PillarCardLarge({ name, designation, image, social }: Pillar) {
  const hasAnySocial =
    !!social.facebook ||
    !!social.twitter ||
    !!social.instagram ||
    !!social.linkedin;

  return (
    <div
      className="
        relative overflow-hidden bg-white
        border border-black/10
        shadow-[0_25px_65px_rgba(0,0,0,0.14)]
        rounded-[26px]
      "
    >
      {/* Image (shorter) */}
      <div className="relative aspect-[1/1.1] w-full">
        <img
          src={image}
          alt={`${name} - ${designation}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Badge */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{ backgroundColor: ACCENT }}
          >
            CEO
          </span>
        </div>

        {/* Social */}
        {hasAnySocial && (
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            {social.linkedin && (
              <SocialIcon href={social.linkedin} label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>
            )}
            {social.instagram && (
              <SocialIcon href={social.instagram} label="Instagram">
                <FaInstagram />
              </SocialIcon>
            )}
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
          </div>
        )}
      </div>

      {/* ✅ Text BELOW image */}
      <div className="px-6 py-6 text-left">
        <p className="text-[22px] md:text-[26px] font-extrabold text-black leading-snug">
          {name}
        </p>
        <p className="mt-1 text-sm md:text-base text-black/70">{designation}</p>

        <div className="mt-4 h-0.5 w-14 bg-black/10">
          <div className="h-full w-1/2" style={{ backgroundColor: ACCENT }} />
        </div>
      </div>
    </div>
  );
}

/** ✅ Small team cards (image shorter + text below image) */
function PillarCard({ name, designation, image, social }: Pillar) {
  const hasAnySocial =
    !!social.facebook ||
    !!social.twitter ||
    !!social.instagram ||
    !!social.linkedin;

  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden bg-white
          border border-black/10
          shadow-[0_10px_28px_rgba(0,0,0,0.08)]
          rounded-[20px]
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
        "
      >
        {/* Accent frame */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `inset 0 0 0 2px ${ACCENT}` }}
        />

        {/* Image (shorter) */}
        <div className="relative aspect-[1/1.1] w-full">
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

          {/* Top-right: social menu */}
          <div className="absolute right-3 top-3 group/btn">
            <div
              className="
                relative grid h-9 w-9 place-items-center
                rounded-full bg-white/95 text-black
                border border-black/10
                shadow-[0_10px_22px_rgba(0,0,0,0.14)]
                transition-all duration-200
                group-hover/btn:scale-105
              "
              title="Social links"
            >
              <span className="text-[20px] leading-none">+</span>
            </div>

            {hasAnySocial && (
              <div
                className="
                  absolute right-0 mt-2 w-12
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
                    <SocialIcon href={social.facebook} label="Facebook" compact>
                      <FaFacebookF />
                    </SocialIcon>
                  )}
                  {social.twitter && (
                    <SocialIcon href={social.twitter} label="X" compact>
                      <FaXTwitter />
                    </SocialIcon>
                  )}
                  {social.instagram && (
                    <SocialIcon
                      href={social.instagram}
                      label="Instagram"
                      compact
                    >
                      <FaInstagram />
                    </SocialIcon>
                  )}
                  {social.linkedin && (
                    <SocialIcon href={social.linkedin} label="LinkedIn" compact>
                      <FaLinkedinIn />
                    </SocialIcon>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Text BELOW image */}
        <div className="px-3 py-3 text-center">
          <p className="text-[15px] font-extrabold text-black leading-snug line-clamp-1">
            {name}
          </p>
          <p className="mt-0.5 text-[13px] text-black/60 leading-snug line-clamp-1">
            {designation}
          </p>

          <div className="mx-auto mt-2 h-0.5 w-8 bg-black/10">
            <div className="h-full w-1/2" style={{ backgroundColor: ACCENT }} />
          </div>
        </div>
      </div>


    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
  compact,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className={`
        grid place-items-center
        rounded-full border border-black/10 bg-white
        text-black/70
        shadow-[0_10px_18px_rgba(0,0,0,0.10)]
        transition-all duration-200
        hover:scale-105 hover:text-black
        ${compact ? "h-8 w-8" : "h-9 w-9"}
      `}
    >
      <span className={compact ? "text-[14px]" : "text-[16px]"}>
        {children}
      </span>
    </Link>
  );
}
