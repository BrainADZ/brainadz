"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden text-white
        mt-[-80]            
        min-h-[70vh]
        bg-[url('/hero.jpeg')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* dark + gradient overlay for readability */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6">
        <div className="flex min-h-[calc(90vh-80px)] items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-[800px]">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-lime-300">
              We make sure you get found.
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-42xl md:text-3xl lg:text-4xl">
              Drive Traffic, Leads &amp; Revenue with Expert
              Digital Marketing Services
            </h1>

            <p className="mt-5 max-w-[640px] text-sm leading-relaxed text-white/85 sm:text-base">
              To succeed in business, you first need to succeed in search results.
              Our digital marketing services connect you with your customers’ journey
              from end to end — from discovery to retention. Join hundreds of marquee
              brands who have experienced transformational growth with Techmagnate.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-[#00AAB7]
                  px-6 py-3 text-sm font-semibold text-white
                  transition hover:brightness-110
                "
              >
                Speak to an SEO Expert <span aria-hidden>→</span>
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/70
                  bg-white/10 px-6 py-3
                  text-sm font-semibold text-white
                  backdrop-blur-sm
                  transition hover:bg-white/20
                "
              >
                Our Services <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* right side intentionally empty – image already in bg */}
          <div className="hidden flex-1 lg:block" />
        </div>
      </div>
    </section>
  );
}
