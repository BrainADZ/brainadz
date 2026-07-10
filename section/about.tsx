/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PILLARS = [
  {
    title: "Strategy",
    copy: "Positioning, offer, funnel and campaign plan.",
    iconSrc: "/icons/strategy.svg",
  },
  {
    title: "Creative",
    copy: "Ad visuals, social content, reels and brand assets.",
    iconSrc: "/icons/creative.svg",
  },
  {
    title: "Performance",
    copy: "SEO, paid media, tracking and clear reporting.",
    iconSrc: "/icons/performance.svg",
  },
];

const TAGS = ["Ads", "Creative", "Marketing", "Web", "SEO", "Automation"];

const STEPS = [
  "Plan the right message",
  "Create campaign assets",
  "Track, learn and scale",
];

export default function AboutSection() {
  return (
    <section className="bg-white px-5 py-16 text-[#111111] md:px-10 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px] overflow-hidden rounded-[14px] border border-black/10 bg-white">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="relative min-h-[430px] overflow-hidden border-b border-black/10 bg-[#111111] lg:min-h-full lg:border-b-0 lg:border-r"
            data-aos="fade-up"
          >
            <img
              src="/homepage/about.png"
              alt="BrainADZ Marketing team"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.72)_100%)]" />

            <div className="absolute left-5 top-5 rounded-lg border border-white/20 bg-black/70 px-4 py-3 text-white backdrop-blur-sm sm:left-7 sm:top-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff5a64]">
                About BrainADZ
              </p>
              <p className="mt-1 text-[22px] font-semibold leading-none">
                Creative Growth Agency
              </p>
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/20 bg-white/92 p-5 text-black shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:inset-x-7 sm:bottom-7">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d71920]">
                We build attention into action
              </p>
              <p className="mt-3 text-[24px] font-normal leading-[1.14] tracking-[-0.03em] sm:text-[30px]">
                Strategy, creative and media working as one team.
              </p>
            </div>
          </div>

          <div className="bg-[#fbfbfb]">
            <div className="p-6 sm:p-8 lg:p-12 xl:p-14">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#d71920]" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#d71920]">
                  Integrated Marketing Studio
                </span>
              </div>

              <h2 className="mt-6 max-w-[920px] text-[38px] font-normal leading-[1.07] tracking-[-0.03em] sm:text-[48px] lg:text-[58px]">
                We make brands look sharper, sound clearer and grow faster.
              </h2>

              <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/64">
                BrainADZ Marketing helps businesses turn scattered digital
                activity into a clear growth system. We plan the message, build
                strong campaign creatives, improve your website and search
                presence, and use performance data to keep every campaign moving
                toward better leads, visibility and trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/64"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {PILLARS.map((pillar, index) => (
                  <article
                    key={pillar.title}
                    className="group rounded-lg border border-black/10 bg-white p-5 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:border-[#d71920] hover:bg-[#fff8f8]"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#d71920]/20 bg-[#fff1f1]">
                      <img
                        src={pillar.iconSrc}
                        alt=""
                        className="h-11 w-11 object-contain"
                      />
                    </div>

                    <h3 className="mt-6 text-[22px] font-normal leading-none tracking-[-0.03em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {pillar.copy}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="tel:+919540468023"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#d71920] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
                >
                  Book Free Consultation
                  <span aria-hidden>-&gt;</span>
                </Link>

                <Link
                  href="/company-overview"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-black/18 bg-white px-7 text-[13px] font-semibold text-black transition hover:border-[#d71920] hover:text-[#d71920]"
                >
                  Know More
                  <span aria-hidden>-&gt;</span>
                </Link>
              </div>
            </div>

            <div className="grid border-t border-black/10 bg-white sm:grid-cols-3">
              {STEPS.map((item, index) => (
                <div
                  key={item}
                  className="border-b border-black/10 px-6 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#d71920]">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-[20px] font-normal leading-[1.2] tracking-[-0.03em] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
