/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

type Founder = {
  name: string;
  title: string;
  photo: string;
  p1: string;
  p2: string;
};

const FOUNDER: Founder = {
  name: "Preeti Jaiswal",
  title: "Founder & MD, BrainADZ Marketing",
  photo: "/teams/Co-Founder.png",
  p1: "BrainADZ was built with a simple belief: marketing should make business clearer, sharper, and easier to trust. Every campaign, website, and brand experience we create starts with understanding the client, the market, and the outcome that matters.",
  p2: "Our role is to bring strategy, creativity, technology, media, and execution together in one accountable workflow. We focus on transparent communication, measurable work, and long-term partnerships that help brands grow with confidence.",
};

export default function FounderDeskSameToSame() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 text-black sm:px-8 md:py-6 lg:px-12">
      <img
        src="/mddesk.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/58" />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.2fr_0.5fr] lg:items-start lg:gap-8">
        {/* Left: copy */}
        <div className="max-w-[640px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/50">
              MD Desk
            </p>
          </div>

          <h2 className="mt-5 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-black sm:text-[44px] lg:text-[50px]">
            Words From The
            <br />
            Founder <span className="text-[#E1122B]">&amp;</span> MD
          </h2>

          <div className="mt-6 space-y-4 text-[15.5px] leading-[1.65] text-black/62 sm:text-[16px]">
            <p>{FOUNDER.p1}</p>
            <p>{FOUNDER.p2}</p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/company-overview"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E1122B] px-6 text-[12px] font-semibold text-white transition-colors duration-300 hover:bg-[#193175]"
            >
              Know Our Story

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        {/* Right: founder card */}
        <Link
          href="/company-overview"
          aria-label={`Read more about ${FOUNDER.name}`}
          className="group block w-full max-w-[340px] justify-self-start lg:justify-self-end"
        >
          <div className="relative aspect-3/4 overflow-hidden bg-black">
            <img
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />

            <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#E1122B]" />

            <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Linkedin className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </div>

          <div className="border border-t-0 border-black/10 px-5 py-4">
            <p className="text-[18px] font-semibold leading-tight tracking-[-0.01em] text-black">
              {FOUNDER.name}
            </p>

            <p className="mt-1.5 text-[12px] font-medium tracking-[0.08em] text-black/45">
              {FOUNDER.title}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
