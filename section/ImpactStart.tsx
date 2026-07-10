/* eslint-disable @next/next/no-img-element */
"use client";

type ImpactStat = {
  value: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

const IMPACT_STATS: ImpactStat[] = [
  {
    value: "550+",
    label: "CLIENTS SERVED",
    description:
      "trusted by businesses across industries for digital marketing, branding, creative, website, and performance-driven growth solutions",
    image: "/slider.jpg",
    imageAlt: "BrainADZ Marketing clients and brand growth",
    imageClassName: "object-cover object-center",
  },
  {
    value: "600+",
    label: "PROJECTS DELIVERED",
    description:
      "successfully completed across digital campaigns, website development, creative design, paid ads, social media, and brand experiences",
    image: "/Mask-Group-22.jpg",
    imageAlt: "BrainADZ Marketing project delivery",
    imageClassName: "object-cover object-center",
  },
  {
    value: "98%",
    label: "ON-TIME PROJECTS DELIVERED",
    description:
      "delivered with structured planning, clear execution, team coordination, and a result-focused workflow for every client project",
    image: "/perfomance.png",
    imageAlt: "On-time project delivery by BrainADZ Marketing",
    imageClassName: "object-contain p-8",
  },
  {
    value: "10+",
    label: "YEARS OF EXPERIENCE",
    description:
      "building marketing strategies, creative campaigns, websites, digital platforms, and performance systems for growing businesses",
    image: "/gallery/5.jpeg",
    imageAlt: "BrainADZ Marketing experience and team expertise",
    imageClassName: "object-cover object-center",
  },
  {
    value: "150+",
    label: "FULL-TIME EXPERTS",
    description:
      "working across strategy, SEO, paid ads, social media, design, content, video, development, automation, and client servicing",
    image: "/scale.png",
    imageAlt: "BrainADZ Marketing full-time expert team",
    imageClassName: "object-contain p-8",
  },
  {
    value: "360°",
    label: "MARKETING SOLUTIONS",
    description:
      "covering digital marketing, creative and media services, website development, performance marketing, automation, and brand growth execution",
    image: "/gallery/1.jpeg",
    imageAlt: "360 degree marketing solutions by BrainADZ Marketing",
    imageClassName: "object-cover object-center",
  },
];

export default function ImpactStartsHereSection() {
  return (
    <section className="overflow-hidden bg-white py-16 text-[#111111] md:py-20">
      <div className="mx-auto mb-12 grid max-w-[1800px] gap-7 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <h2 className="text-[42px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[58px]">
          <span className="text-[#d71920]">Impact</span>
          <span className="block text-[#193175]">Starts Here</span>
        </h2>

        <div className="lg:pb-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d71920]/18 bg-[#fff7f7] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#d71920]">
            <span className="h-2 w-2 rounded-full bg-[#d71920]" />
            One ecosystem. Multiple outcomes.
          </div>

          <p className="mt-5 max-w-[820px] text-[16px] leading-7 text-black/62">
            BrainADZ Group combines growth marketing, digital products, live
            event execution, and exhibition fabrication to create measurable
            outcomes across every customer touchpoint.
          </p>
        </div>
      </div>

      <div
        className="impact-carousel overflow-hidden"
        aria-label="BrainADZ impact statistics"
      >
        <div className="impact-track flex w-max">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex shrink-0 gap-3 pr-3"
              aria-hidden={groupIndex === 1}
            >
              {IMPACT_STATS.map((stat) => (
                <ImpactCard
                  key={`${groupIndex}-${stat.label}`}
                  stat={stat}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .impact-track {
          animation: impact-scroll 42s linear infinite;
          will-change: transform;
        }

        .impact-carousel:hover .impact-track {
          animation-play-state: paused;
        }

        @keyframes impact-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function ImpactCard({ stat }: { stat: ImpactStat }) {
  return (
    <article className="flex h-[560px] w-[390px] shrink-0 flex-col overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[#d71920] sm:h-[620px] sm:w-[500px]">
      <div className="flex h-[218px] shrink-0 flex-col justify-between px-7 py-7 sm:h-[235px] sm:px-8 sm:py-8">
        <div className="flex items-start gap-6">
          <p className="shrink-0 text-[50px] font-medium leading-none tracking-[-0.05em] text-[#d71920] sm:text-[64px]">
            {stat.value}
          </p>

          <h3 className="max-w-[205px] pt-1 text-[16px] font-semibold leading-7 text-[#193175] sm:text-[18px]">
            {stat.label}
          </h3>
        </div>

        <p className="max-w-[430px] text-[15px] leading-6 text-black/58 sm:text-[16px] sm:leading-7">
          {stat.description}
        </p>
      </div>

      <div className="relative flex-1 overflow-hidden border-t border-black/10 bg-[#f7f7f7]">
        <img
          src={stat.image}
          alt={stat.imageAlt}
          className={`absolute inset-0 h-full w-full ${stat.imageClassName || ""}`}
        />
      </div>
    </article>
  );
}
