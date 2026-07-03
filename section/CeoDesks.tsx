import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

type Founder = {
  name: string;
  title: string;
  photo: string;
  experience: string;
  p1: string;
  p2: string;
};

const FOUNDER: Founder = {
  name: "Preeti Jaiswal",
  title: "Founder & MD, BrainADZ",
  photo: "/teams/Co-Founder.png",
  experience: "13+",
  p1: "BrainADZ was built with a simple belief: marketing should make business clearer, sharper, and easier to trust. Every campaign, website, and brand experience we create starts with understanding the client, the market, and the outcome that matters.",
  p2: "Our role is to bring strategy, creativity, technology, media, and execution together in one accountable workflow. We focus on transparent communication, measurable work, and long-term partnerships that help brands grow with confidence.",
};

const STATS = [
  { value: FOUNDER.experience, label: "Years of industry experience" },
  { value: "200+", label: "Projects delivered across sectors" },
  { value: "8.2MN+", label: "Audience reach generated annually" },
];

export default function FounderDeskSameToSame() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1800px] border-y border-white/10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[520px] overflow-hidden border-white/10 bg-[#090909] sm:min-h-[620px] lg:min-h-[760px] lg:border-r">
          <Image
            src={FOUNDER.photo}
            alt={FOUNDER.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 46vw"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/75 px-5 py-5 backdrop-blur sm:px-8">
            <p className="text-[24px] font-semibold leading-tight tracking-[-0.02em]">
              {FOUNDER.name}
            </p>
            <p className="mt-1 text-[14px] font-medium text-white/62">
              {FOUNDER.title}
            </p>
          </div>
        </div>

        <div className="flex items-center px-5 py-14 sm:px-8 md:py-16 lg:px-12 xl:px-20">
          <div className="w-full max-w-[920px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/68">
              MD Desk
              <span className="h-1.5 w-1.5 rounded-full bg-[#1467f5]" />
              Leadership Note
            </p>

            <h2 className="mt-8 max-w-[820px] text-[42px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[54px] lg:text-[68px]">
              Words From The Founder &amp; MD
            </h2>

            <div className="mt-8 flex items-start gap-5">
              <Quote
                className="mt-1 h-9 w-9 shrink-0 text-[#1467f5]"
                strokeWidth={1.6}
              />
              <div className="space-y-6 text-[17px] leading-8 text-white/68 sm:text-[18px]">
                <p>{FOUNDER.p1}</p>
                <p>{FOUNDER.p2}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 border-y border-white/10 py-7 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[36px] font-medium leading-none tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-3 max-w-[190px] text-[13px] font-medium leading-5 text-white/48">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-[12px] font-semibold text-black transition-colors hover:bg-[#1467f5] hover:text-white"
              >
                Start A Conversation
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 px-7 text-[12px] font-semibold text-white transition-colors hover:border-[#1467f5] hover:bg-[#1467f5]"
              >
                <FaLinkedinIn className="text-[15px]" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
