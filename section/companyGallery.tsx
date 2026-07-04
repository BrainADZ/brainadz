import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const COMPANY_GLIMPSES = [
  {
    src: "/gallery/4.jpeg",
    title: "Together, We Build",
    label: "Our People",
    alt: "BrainADZ team outside the company office",
  },
  {
    src: "/gallery/5.jpeg",
    title: "Inside BrainADZ",
    label: "Work Culture",
    alt: "BrainADZ team celebrating together inside the office",
  },
  {
    src: "/gallery/7.jpeg",
    title: "Moments That Matter",
    label: "Celebrations",
    alt: "BrainADZ team celebrating a birthday at the office",
  },
  {
    src: "/gallery/8.jpeg",
    title: "Stronger As One",
    label: "Team Life",
    alt: "BrainADZ team gathered for an office celebration",
  },
  {
    src: "/gallery/1.jpeg",
    title: "Industry Recognition",
    label: "Milestones",
    alt: "BrainADZ receiving recognition at an exhibition awards event",
  },
  {
    src: "/gallery/2.jpeg",
    title: "Celebrating Excellence",
    label: "Achievements",
    alt: "BrainADZ team holding an industry recognition certificate",
  },
];

export default function CompanyGallerySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#1467f5]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1700px] px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-11 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4e8cff]">
              Life At BrainADZ
            </p>
            <h2 className="mt-3 max-w-[720px] text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[52px]">
              Glimpses Of The People Behind The Work
            </h2>
          </div>

          <div className="max-w-[480px] lg:text-right">
            <p className="text-[14px] font-medium leading-7 text-white/60">
              From everyday collaboration to team celebrations and industry
              milestones, these are the moments that shape our culture.
            </p>
            <Link
              href="/career"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-white transition hover:text-[#4e8cff] lg:justify-end"
            >
              Explore Our Culture
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY_GLIMPSES.map((item) => (
            <figure
              key={item.src}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#73a4ff]">
                  {item.label}
                </p>
                <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
