/* eslint-disable @next/next/no-img-element */
"use client";

import ContactCtaSection from "@/section/Ctas";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

type Social = {
  linkedin?: string;
  facebook?: string;
};

type TeamMember = {
  name: string;
  designation: string;
  image: string;
  social: Social;
};

const ACCENT = "#00AAB7";

/** ✅ Update team members */
const TEAM: TeamMember[] = [
  {
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/creativehead.jpeg",
    social: { linkedin: "#", facebook: "#" },
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
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Aastha Singh",
    designation: "Business Development Manager",
    image: "/teams/bdm.webp",
    social: { linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/" },
  },
  {
    name: "Shivam Goyal",
    designation: "Data Manager",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Rishabh Pratap",
    designation: "Software Developer",
    image: "/teams/sd.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Deepak Awasthi",
    designation: "SEO Manager",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Jai Karan",
    designation: "Social Media Manager",
    image: "/teams/smm.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Nisha Kushwaha",
    designation: "Social Media Manager",
    image: "/teams/ItHead.webp",
    social: { linkedin: "#", facebook: "#" },
  },

  {
    name: "A.Rahman",
    designation: "Sr. Graphic Designer",
    image: "/teams/sgd3.webp",
    social: { linkedin: "#", facebook: "#" },
  },
    {
    name: "Virendar Kumar",
    designation: "Sr. Graphic Designer",
    image: "/teams/sgd4.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Aashish Saini",
    designation: "Sr. Graphic Designer",
    image: "/teams/sgd.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Chirag Quareshi",
    designation: "Sr. Graphic Designer",
    image: "/teams/sgd2.png",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Akshansa Raw",
    designation: "Sr. Video Editor",
    image: "/teams/smm.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Komal Kushwaha",
    designation: "Graphic Designer",
    image: "/teams/creativehead.jpeg",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Lovneet Pawar",
    designation: "Social Media Executive",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Shivangi",
    designation: "Ads Manager",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Mithun Rai",
    designation: "Sr. Accountant",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Simran",
    designation: "Accountant",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },
  {
    name: "Simran",
    designation: "Accountant",
    image: "/teams/seo.webp",
    social: { linkedin: "#", facebook: "#" },
  },


];

export default function TeamPage() {
  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-black/10 bg-black/80 mt-[-70px]">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,170,183,0.10)_0,transparent_70%)]" />
          <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,170,183,0.08)_0,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-4 pt-24 pb-12 sm:px-6 md:pt-24 md:pb-16">


          <div className="mt-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Meet the People Behind <span style={{ color: ACCENT }}>BrainADZ</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
              A focused team that blends strategy, creativity, and execution to build
              outcomes that actually move the needle.
            </p>

            <div className="mt-4 mb-4 h-0.5 w-24" style={{ backgroundColor: ACCENT }} />
          </div>
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/80">Team</span>
          </nav>
        </div>

      </section>

      {/* ===== ABOUT STRIP: text left + image right ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left text */}
            <div className="lg:col-span-5">
              <p className="mb-3 inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
                Our Team
              </p>

              <h2 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">
                Built on ownership. <span className="text-[#00AAB7]">Powered by consistency.</span>
              </h2>

              <div className="mt-3 h-0.5 w-20" style={{ backgroundColor: ACCENT }} />

              <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed max-w-2xl">
                At BrainADZ, we work like partners—not vendors. Every project gets
                dedicated attention, fast communication, and a system-driven workflow
                that keeps quality consistent across delivery.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-black/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  Strategy-first planning with execution clarity
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  Clean design + performance thinking together
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  One team, accountable delivery
                </li>
              </ul>
            </div>

            {/* Right image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden bg-white ">
                <div className="relative aspect-2/1 w-full">
                  <img
                    src="/teams/teams.png" /* ✅ change */
                    alt="BrainADZ Team"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-black/50">
                {/* Replace image: <span className="font-semibold">/teams/team-banner.jpg</span> */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM GRID (same card design) ===== */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
                Team Members
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">
                The Team That Delivers
              </h2>
              <div className="mt-3 h-0.5 w-20" style={{ backgroundColor: ACCENT }} />
            </div>

            <Link
              href="/contact"
              className="
                inline-flex h-11 items-center justify-center
                border border-black/15 bg-white px-6
                text-sm font-semibold text-black
                transition-all duration-200
                hover:border-[#00AAB7] hover:text-[#00AAB7]
              "
            >
              Work With Us
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <TeamCard key={m.name + m.designation} {...m} />
            ))}
          </div>
        </div>
      </section>
      <ContactCtaSection />
    </main>
  );
}

/* =========================
   SAME CARD DESIGN (FB + LinkedIn only)
========================= */

function TeamCard({ name, designation, image, social }: TeamMember) {
  return (
    <div className="group">
      <div
        className="
          relative overflow-hidden bg-white
          shadow-[0_18px_45px_rgba(0,0,0,0.10)]
          rounded-[200px_4px_200px_200px]
          transition-all duration-300 ease-out
          group-hover:rounded-none cursor-pointer
        "
      >
        <div className="relative aspect-square w-full">
          <img
            src={image}
            alt={`${name} - ${designation}`}
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-[1.03]
            "
            loading="lazy"
          />

          {/* plus button + social menu */}
          <div className="absolute right-4 top-4 group/btn">
            <div
              className="
                relative grid h-9 w-9 place-items-center
                rounded-full bg-white text-black
                border border-black/10
                shadow-[0_10px_22px_rgba(0,0,0,0.12)]
                transition-all duration-200
                group-hover/btn:scale-105
              "
              style={{ outlineColor: ACCENT }}
            >
              <span className="text-xl leading-none transition-opacity duration-200 group-hover/btn:opacity-0">
                +
              </span>
              <span className="absolute text-xl leading-none opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100">
                –
              </span>
            </div>

            <div className="absolute right-0 top-full h-4 w-14" />

            <div
              className="
                absolute right-0 mt-2 w-[52px]
                rounded-full bg-white border border-black/10
                shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                p-2

                opacity-0 translate-y-1 pointer-events-none
                origin-top

                transition-all duration-200 ease-out
                delay-150

                group-hover/btn:opacity-100
                group-hover/btn:translate-y-0
                group-hover/btn:pointer-events-auto
                group-hover/btn:delay-0
              "
            >
              <div className="flex flex-col items-center gap-2">
                {social.facebook && (
                  <SocialIcon href={social.facebook} label="Facebook">
                    <FaFacebookF />
                  </SocialIcon>
                )}
                {social.linkedin && (
                  <SocialIcon href={social.linkedin} label="LinkedIn">
                    <FaLinkedinIn />
                  </SocialIcon>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Name / designation */}
      <div className="pt-5 text-center">
        <p className="text-[20px] font-extrabold text-black leading-snug">{name}</p>
        <p className="mt-1 text-sm text-black/60">{designation}</p>

        <div className="mx-auto mt-3 h-0.5 w-9 bg-black/10">
          <div className="h-full w-1/2" style={{ backgroundColor: ACCENT }} />
        </div>
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
      style={{ outlineColor: ACCENT }}
    >
      <span className="text-[16px]">{children}</span>
    </Link>
  );
}
