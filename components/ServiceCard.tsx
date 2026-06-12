import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceCardData = {
  num?: string;
  title: string;
  desc: string;
  icon: ReactNode;
  href: string;
};

const HOVER_BG = "#FFFFFF";
const CARD_BG = "#00AAB7";

export default function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <div
      className="
        group relative overflow-hidden
        border border-black/10
        shadow-[0_18px_55px_rgba(0,0,0,0.18)]
        transition-transform duration-300
        hover:-translate-y-1
      "
      style={{ backgroundColor: CARD_BG }}
    >
      <div
        className="absolute -left-10 -bottom-10 h-20 w-20 rounded-full z-0"
        style={{ backgroundColor: HOVER_BG }}
      />

      <div
        className="
          absolute -left-16 -bottom-16 h-36 w-36 rounded-full z-0
          origin-bottom-left scale-100
          transition-transform duration-500 ease-out
          group-hover:scale-[8]
        "
        style={{ backgroundColor: HOVER_BG }}
      />

      <div
        className="
          pointer-events-none absolute inset-0 z-[1]
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_55%)]
        "
      />

      <div className="relative z-10 flex min-h-[340px] flex-col p-6">
        <div className="flex items-start justify-between">
          <div className="grid h-16 w-16 place-items-center">
            <span className="text-white transition-colors duration-300 group-hover:text-[#00AAB7]">
              {service.icon}
            </span>
          </div>

          {service.num ? (
            <div
              className="text-[54px] font-extrabold leading-none text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}
            >
              {service.num}
            </div>
          ) : null}
        </div>

        <div className="mt-7 flex-1">
          <h3
            className="
              text-lg font-extrabold uppercase tracking-[0.14em]
              text-[#FCF300] transition-colors duration-300
              group-hover:text-black
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-4 text-sm leading-relaxed text-white
              transition-colors duration-300
              group-hover:text-black/80
            "
          >
            {service.desc}
          </p>
        </div>

        <div
          className="
            mt-6 translate-y-0 opacity-100
            transition-all duration-300
            md:translate-y-2 md:opacity-0
            md:group-hover:translate-y-0 md:group-hover:opacity-100
          "
        >
          <Link
            href={service.href}
            className="
              inline-flex items-center gap-2
              rounded-full bg-white/85
              px-5 py-2 text-sm font-semibold text-black
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              transition-all duration-200
              hover:bg-white hover:-translate-y-0.5
            "
          >
            Know More <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
