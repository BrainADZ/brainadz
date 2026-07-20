import TeamShowcaseSection from "@/section/teamShowcase";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const TEAM_STATS = [
  {
    value: "ONE",
    label: "A connected team working with shared ownership and clear accountability",
  },
  {
    value: "360°",
    label: "Strategy, creative, technology and performance aligned under one system",
  },
  {
    value: "SYNC",
    label: "Fast communication, transparent workflows and consistent project delivery",
  },
];

const WORKING_PRINCIPLES = [
  {
    title: "Strategy before activity",
    description:
      "We first understand the objective, audience and business priority before choosing channels or deliverables.",
    icon: Target,
  },
  {
    title: "Ownership at every step",
    description:
      "Every responsibility has a clear owner, defined checkpoints and measurable expectations from start to finish.",
    icon: ShieldCheck,
  },
  {
    title: "Ideas built for execution",
    description:
      "Creative thinking is connected with timelines, platforms, technology and practical business requirements.",
    icon: Lightbulb,
  },
  {
    title: "One collaborative workflow",
    description:
      "Designers, developers, marketers and strategists work together instead of operating in isolated departments.",
    icon: Workflow,
  },
];

const TEAM_VALUES = [
  {
    title: "Ownership",
    description:
      "We take responsibility for the work, the process and the final outcome—not just the assigned task.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "Strong work comes from open communication, shared context and respect for every discipline involved.",
    icon: Handshake,
  },
  {
    title: "Consistency",
    description:
      "Reliable systems, clear standards and disciplined execution help us maintain quality across every project.",
    icon: CheckCircle2,
  },
  {
    title: "Curiosity",
    description:
      "We keep learning, questioning and improving so our thinking stays relevant in a fast-changing digital world.",
    icon: Sparkles,
  },
];

export default function TeamPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <TeamHero />
      <TeamIntroductionSection />

      <div id="team-members" className="scroll-mt-24">
        <TeamShowcaseSection ctaHref="/contact" ctaLabel="Work With Us" />
      </div>

      <TeamValuesSection />
      {/* <TeamCtaSection /> */}
    </main>
  );
}

function TeamHero() {
  return (
    <>
      {/* TEAM HERO SECTION */}
      <section className="relative min-h-[440px] overflow-hidden bg-black sm:min-h-[520px] lg:min-h-[580px]">
        <Image
          src="/teams/teams.png"
          alt="BrainADZ team working together"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.84)_34%,rgba(0,0,0,0.50)_65%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.42)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[520px] sm:px-8 lg:min-h-[580px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link
              href="/"
              className="text-[#E1122B] transition hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Our Team</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            The people behind ideas, execution and measurable growth.
          </h1>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-white/88 sm:text-[22px] lg:text-[25px]">
              We bring strategy, creativity, technology and performance together
              through one focused team built around ownership and consistency.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#team-members"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
              >
                Meet our team
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-white/45 bg-black/25 px-7 text-[13px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B]"
              >
                Work with us
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM STATS SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] text-black">
        <div className="mx-auto grid max-w-[1800px] px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          {TEAM_STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8 first:sm:pl-0 last:sm:border-r-0"
            >
              <p className="text-[38px] font-medium leading-none tracking-[-0.05em] text-[#E1122B] sm:text-[48px]">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[380px] text-[15px] leading-6 text-black/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TeamIntroductionSection() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              How we work
            </p>
          </div>

          <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Built on ownership. Powered by collaboration.
          </h2>

          <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-black/62">
            At BrainADZ, we work like partners, not vendors. Every project gets
            focused attention, fast communication and a system-driven workflow
            that keeps strategy and execution moving in the same direction.
          </p>

          <div className="mt-8 overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] shadow-[0_16px_42px_rgba(0,0,0,0.05)]">
            <div className="relative h-[260px] sm:h-[340px]">
              <Image
                src="/teams/teams.png"
                alt="BrainADZ team collaboration"
                fill
                className="object-cover object-center"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.58)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 border-t border-white/20 pt-4">
                <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/65">
                  One connected team
                </p>
                <p className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[26px]">
                  Different skills. One shared responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {WORKING_PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 80}
                className="group min-h-[270px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </div>

                  <span className="text-[13px] font-semibold text-black/28">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-black">
                  {principle.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-black/58">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamValuesSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Our culture
              </p>
            </div>

            <h2 className="mt-5 max-w-[850px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              The values that shape how we think, work and deliver.
            </h2>
          </div>

          <p className="max-w-[650px] text-[16px] leading-8 text-black/60">
            Our culture is practical, accountable and growth-focused. These
            values guide everyday decisions across every role and project.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TEAM_VALUES.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 70}
                className="group min-h-[290px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.7} />
                </div>

                <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Value {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-[25px] font-semibold leading-tight tracking-[-0.035em] text-black">
                  {value.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-black/58">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// function TeamCtaSection() {
//   return (
//     <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//       <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[18px] bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.08]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
//           <div>
//             <div className="flex items-center gap-3">
//               <span className="h-0.5 w-8 bg-[#E1122B]" />
//               <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
//                 Start a conversation
//               </p>
//             </div>

//             <h2 className="mt-5 max-w-[900px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
//               Bring your next challenge to a team built to solve it together.
//             </h2>

//             <p className="mt-6 max-w-[720px] text-[16px] leading-8 text-white/62">
//               Connect with BrainADZ to discuss your marketing, design,
//               technology or digital growth requirements.
//             </p>
//           </div>

//           <Link
//             href="/contact"
//             className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
//           >
//             Talk to our team
//             <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
//           </Link>
//         </div>

//         <div className="relative z-10 mt-12 flex flex-wrap gap-3 border-t border-white/12 pt-7 text-[14px] text-white/60">
//           <span className="inline-flex items-center gap-2">
//             <Users className="h-4 w-4 text-[#E1122B]" />
//             Strategy
//           </span>
//           <span className="text-white/25">/</span>
//           <span>Creative</span>
//           <span className="text-white/25">/</span>
//           <span>Technology</span>
//           <span className="text-white/25">/</span>
//           <span>Performance</span>
//         </div>
//       </div>
//     </section>
//   );
// }