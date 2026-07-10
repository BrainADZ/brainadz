import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="bg-white px-5 py-10 text-white sm:px-8 lg:py-12">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid overflow-hidden bg-[#273D7D] md:grid-cols-[32%_68%]">
          <div className="relative min-h-[210px] md:min-h-[310px]">
            <Image
              src="/home-roadmap-cta.webp"
              alt="BrainADZ marketing consultation"
              fill
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 32vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex min-h-[310px] flex-col justify-center gap-8 px-6 py-9 sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[760px]">
              <h2 className="text-[30px] font-semibold leading-[1.14] tracking-[-0.035em] sm:text-[42px] lg:text-[46px]">
                Plan your next marketing move with BrainADZ
              </h2>

              <p className="mt-5 max-w-[780px] text-[15px] font-medium leading-7 text-white/72 sm:text-[17px]">
                Get a clear roadmap for campaigns, creative, website, SEO, and
                performance before you scale your next project.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[64px] w-full shrink-0 items-center justify-between gap-8 border border-white/65 px-6 text-[15px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B] sm:w-[260px]"
            >
              Enquire Now
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
