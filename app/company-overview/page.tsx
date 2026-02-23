/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { FiArrowRight} from "react-icons/fi";
import BrandLogosCarouselReplica from "@/section/aboutbrands";
import { ClientsFirstSection } from "@/section/roadMap";
import GlobalPresenceSection from "@/section/Maps";
import FounderDeskSameToSame from "@/section/CeoDesks";
import TestimonialSection from "@/section/Testimonials";

const ACCENT = "#00AAB7";

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-black">
      <HeroSection />
      <AboutSection /> {/* ✅ updated same-to-same sticky image layout */}
      {/* ================= VISION & MISSION ================= */}
      <section className="w-full bg-[#F8FAFB] py-16 md:py-14">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            Our Purpose
          </p>

          <h2 className="mt-1 text-3xl md:text-4xl font-bold text-black">
            Our Vision & Mission
          </h2>

          <div className="mt-5 grid gap-8 md:grid-cols-2">

            {/* VISION */}
            <div className=" bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: ACCENT }} />
                <h3 className="text-xl font-bold text-black">Our Vision</h3>
              </div>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-black/70">
                To become a trusted digital growth partner for businesses across India
                and global markets by delivering innovative, performance-led marketing
                solutions. Our vision is to help brands build strong digital identities,
                achieve sustainable growth, and stay ahead in an ever-evolving digital
                landscape through strategy, creativity, and technology.
              </p>
            </div>

            {/* MISSION */}
            <div className=" bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: ACCENT }} />
                <h3 className="text-xl font-bold text-black">Our Mission</h3>
              </div>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-black/70">
                Our mission is to empower businesses with result-driven digital marketing
                strategies backed by clear execution and transparent reporting. We aim to
                deliver measurable outcomes through SEO, paid advertising, social media,
                web development, and creative branding — while building long-term client
                relationships based on trust, consistency, and performance.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Core Value */}
      <CoreValuesSection />
      <BrandLogosCarouselReplica />
      <ClientsFirstSection />
      <FounderDeskSameToSame/>
      <TestimonialSection/>
      <GlobalPresenceSection/>
    </main>
  );
}

/* ========================= HERO ========================= */

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #003F42 0%, #005E63 35%, #00AAB7 120%)",
        }}
      />

      {/* geometric mountains */}
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

      {/* subtle dot grid */}
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
          {/* LEFT */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              About BrainADZ
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Strategy • Execution • Scale
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-white">
              We build brands that{" "}
              <span style={{ color: "#E9FFFE" }}>perform</span> — online &amp;
              on-ground.
            </h1>

            <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/85">
              BrainADZ Group brings growth marketing, live execution, and
              exhibition fabrication under one ecosystem. From high-performance
              campaigns and websites to kiosks, LED setups, and large-scale
              stalls — we deliver with clarity, speed, and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black bg-white transition-all duration-200 hover:opacity-95"
              >
                Let’s Talk <FiArrowRight />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white border border-white/25 bg-white/10 transition-all duration-200 hover:bg-white/15"
              >
                View Work <FiArrowRight />
              </Link>
            </div>

            {/* quick proof points */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <MiniStat label="Campaigns & Websites" value="Performance-led" />
              <MiniStat label="Live & Outdoor" value="On-ground impact" />
              <MiniStat label="Exhibitions" value="Turnkey booths" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="relative max-w-[520px] ml-auto">
              {/* card */}
              {/* card */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <h2 className="text-white/90 text-lg font-semibold uppercase tracking-[0.16em]">
                  Connect with our Digital Marketing Experts
                </h2>



                <div className="mt-6 h-px w-full bg-white/15" />

                {/* FORM */}
                <form className="mt-6 space-y-3">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="lead-name">Name</label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur
                     focus:border-white/40 focus:bg-white/15"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="lead-email">Email</label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur
                     focus:border-white/40 focus:bg-white/15"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="lead-phone">Phone</label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur
                     focus:border-white/40 focus:bg-white/15"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="lead-company">Company</label>
                      <input
                        id="lead-company"
                        name="company"
                        type="text"
                        placeholder="Company"
                        className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur
                     focus:border-white/40 focus:bg-white/15"
                      />
                    </div>
                  </div>

                  {/* Row 3: Services dropdown */}
                  <div>
                    <label className="sr-only" htmlFor="lead-service">Choose service</label>
                    <select
                      id="lead-service"
                      name="service"
                      defaultValue=""
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white outline-none backdrop-blur
                   focus:border-white/40 focus:bg-white/15"
                    >
                      <option value="" disabled className="text-black">
                        Choose services
                      </option>
                      <option value="seo-performance" className="text-black">SEO + Performance</option>
                      <option value="social-creatives" className="text-black">Social + Creatives</option>
                      <option value="web-uiux" className="text-black">Web + UI/UX</option>
                      <option value="exhibits-live" className="text-black">Exhibits + Live</option>
                    </select>
                  </div>

                  {/* Optional submit (remove if you don’t want button inside card) */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex h-[46px] w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-black hover:opacity-95"
                  >
                    Request a Callback
                  </button>
                </form>
              </div>

              {/* accent corner */}
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

/* ========================= ABOUT (UPDATED SAME-TO-SAME) ========================= */
/**
 * ✅ Left: image long scroll, screen se chipka (no left spacing)
 * ✅ Right: content sticky/fixed on desktop
 * ✅ Mobile: stacked (image then content)
 */
function AboutSection() { 
  return (
    <section className="relative w-full bg-white ">
      <div className="grid lg:grid-cols-12">

        {/* ================= LEFT: TALL IMAGE (NO LEFT PADDING) ================= */}
        <div className="relative lg:col-span-5">

          {/* adjust height for “long image scroll” */}
          <div className="relative h-[95vh] lg:h-[155vh] w-full">
            <img
              src="/dummy about.webp" // ✅ replace with your about image
              alt="BrainADZ About"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Optional bottom CTA like reference */}
            <div className="absolute left-0 bottom-0 w-full p-4 sm:p-6">
              <div className="relative max-w-[560px] rounded-[22px] bg-[#0B3A57] text-white overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
                {/* orange top stroke */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#F59E0B]" />

                <div className="relative p-5 sm:p-6">
                  <p className="text-xl sm:text-2xl font-extrabold leading-tight">
                    Ready to speak
                    <br />
                    with a marketing expert?
                    <br />
                    Give us a ring
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-sm text-white/85">
                      <span
                        className="inline-block h-2 w-2 rounded-full mr-2"
                        style={{ background: ACCENT }}
                      />
                      Quick response • Same-day callback
                    </div>

                    <Link
                      href="/contact"
                      className="grid h-14 w-14 place-items-center rounded-full bg-white text-black transition-all duration-200 hover:scale-105 text-3xl"
                      aria-label="Contact"
                    >
                      ↗
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: STICKY CONTENT ================= */}
        <div className="relative lg:col-span-7">
          <div className="lg:sticky lg:top-24">
            <div className="px-4 sm:px-6 lg:px-14 py-10 lg:py-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight text-black">
                BrainADZ Marketing — Driving Digital Growth for 15+ Years
              </h2>

              <div className="mt-5 h-0.5 w-24" style={{ background: ACCENT }} />
              <div className="mt-6 space-y-6 text-sm md:text-base leading-relaxed text-black/70">
                <p>
                  BrainADZ Marketing is a performance-driven digital marketing agency in India,
                  helping brands grow online with strategy-first execution and measurable
                  outcomes. With over 15+ years of industry experience, we specialize in
                  building scalable digital systems for businesses across Ecommerce,
                  Manufacturing, Technology, Healthcare, Hospitality, and Service sectors.
                  From startups to established enterprises, we partner with brands looking
                  for clarity, consistency, and real growth.
                </p>

                <p>
                  Our in-house team of certified marketers, designers, developers, and growth
                  strategists delivers end-to-end digital solutions including SEO, PPC,
                  Social Media Marketing, Content Strategy, Website Development, and UI/UX
                  design. Every campaign is backed by data, clear reporting, and structured
                  timelines — ensuring transparency at every stage. Over the years, we have
                  successfully delivered hundreds of projects while earning long-term trust
                  from clients across India.
                </p>

                <p>
                  At BrainADZ, we don’t believe in shortcuts or generic marketing templates.
                  We focus on building strong digital foundations, meaningful brand presence,
                  and conversion-focused experiences. Our approach combines creative thinking
                  with performance marketing to drive visibility, engagement, and revenue.
                  When you work with BrainADZ Marketing, you get strategy, execution, and
                  accountability — aligned to one objective: sustainable business growth.
                </p>
              </div>

              {/* CTA */}
              {/* <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:opacity-95"
                  style={{ background: ACCENT }}
                >
                  Talk to an Expert <FiArrowRight />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black border border-black/15 bg-white transition-all duration-200 hover:border-black/30"
                >
                  Explore Services <FiArrowRight />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
/* ====================== CORE VALUES ====================== */

function CoreValuesSection() {
  const values: {
    title: string;
    desc: string;
    icon: string; // <img> path
  }[] = [
  {
  title: "Digital Excellence",
  desc: "We combine strategy, UI/UX design, and performance marketing to build digital systems that don’t just look good—but generate leads, engagement, and measurable business growth across platforms.",
  icon: "/icons/digital.png",
},
{
  title: "Trusted Partners",
  desc: "We work as an extended part of your internal team—offering complete transparency, proactive communication, and dependable execution so you always know what’s happening and what’s next.",
  icon: "/icons/patner.png",
},
{
  title: "End-to-End Ownership",
  desc: "From initial concept and planning to final deployment and reporting, we take full responsibility for every project—ensuring timelines, quality, and outcomes are always delivered as promised.",
  icon: "/icons/endtoend.png",
},
{
  title: "Think Big. Execute Smart.",
  desc: "We believe in bold ideas supported by data-driven strategy. Every campaign, website, or exhibition build is carefully planned, tested, and optimized to scale sustainably.",
  icon: "/icons/think.png",
},
{
  title: "Customer Growth First",
  desc: "Your growth is our priority. Everything we design and execute is aligned with real business goals—lead generation, sales performance, customer retention, and long-term brand trust.",
  icon: "/icons/Customer.png",
},
{
  title: "Keep Learning, Keep Improving",
  desc: "Digital trends evolve fast—and so do we. Our team constantly upgrades skills, tools, and workflows to deliver smarter solutions, better experiences, and stronger results every time.",
  icon: "/icons/learning.png",
},
  ];

  return (
    <section className="relative w-full bg-[#F8FAFB] py-10 md:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            What We Stand For
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
            Our Core Values
          </h2>

          <div className="mt-5 flex justify-center">
            <span
              className="h-1 w-16 rounded-full"
              style={{ background: ACCENT }}
            />
          </div>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <ValueCard key={v.title} title={v.title} desc={v.desc} icon={v.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className=" bg-white border border-black/10 p-7 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      {/* Icon */}
      <div className="flex items-center justify-start">
        <div className="h-20 w-auto rounded-xl flex items-center justify-center">
          <img
            src={icon}
            alt={title}
            className="h-full w-full   object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-extrabold text-black leading-snug">
        {title}
      </h3>

      {/* Divider */}
      <div className="mt-3 h-px w-12 bg-black/20" />

      {/* Desc */}
      <p className="mt-4 text-sm leading-relaxed text-black/70">{desc}</p>
    </div>
  );
}



// function MiniCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-black/10 bg-white px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
//       <p className="text-xs font-semibold text-black/50 uppercase tracking-[0.14em]">
//         {title}
//       </p>
//       <p className="mt-1 text-sm font-extrabold text-black">{value}</p>
//       <div className="mt-2 h-[2px] w-10 bg-black/10">
//         <div className="h-full w-1/2" style={{ background: ACCENT }} />
//       </div>
//     </div>
//   );
// }
