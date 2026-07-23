/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="bg-white py-12 text-white  lg:py-16">
      <div className="mx-auto max-w-full px-0">
        <div className="grid overflow-hidden bg-[#0e276f] md:grid-cols-[32%_68%]">
          <div className="relative min-h-[220px] md:min-h-[330px]">
            <img
              src="/cta.png"
              alt="BrainADZ digital growth planning"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex min-h-[330px] flex-col justify-center gap-8 px-6 py-9 sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[760px]">
              <h2 className="text-[30px] font-semibold leading-[1.14] tracking-[-0.035em] sm:text-[42px] lg:text-[46px]">
                Build connected digital solutions with BrainADZ Marketing
              </h2>

              <p className="mt-5 max-w-[780px] text-[15px] font-medium leading-7 text-white/72 sm:text-[17px]">
                Bring strategy, creative, websites, campaigns, SEO, and
                performance together to create a scalable growth system.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-16 w-full shrink-0 items-center justify-between gap-8 border border-white/65 px-6 text-[15px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B] sm:w-[260px]"
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
