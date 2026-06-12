import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF6F4] py-12 md:py-20">
      <Image
        src="/homepage/top_png.png"
        alt=""
        width={120}
        height={184}
        className="pointer-events-none absolute right-6 top-[-90px] h-36 w-24 opacity-90 md:top-[-40px] md:h-[184px] md:w-[120px]"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[44px] font-extrabold leading-[0.95] tracking-tight text-black/80 md:text-[56px]">
              WHO WE ARE
            </h2>

            <p className="mt-4 text-[18px] font-semibold leading-snug text-[#00AAB7] md:text-[20px]">
              BrainADZ Marketing is an agile and{" "}
              <br className="hidden md:block" />
              future-forward marketing
            </p>

            <p className="mt-2 text-[15px] text-black/75 md:text-[16px]">
              fueled by ideas that spark momentum.
            </p>

            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-black/60 md:text-[15px]">
              <p>
                We craft bold brand strategies and ad campaigns that don&apos;t
                just turn heads - they move markets.
              </p>

              <p>
                Our in-house branding experts infuse insight, innovation, and
                cultural relevance to develop campaigns that do more than
                communicate - they catalyze growth. For this - they leverage
                advanced technology, data analytics, and strategy in tandem.
              </p>
            </div>

            <a
              href="/about"
              className="
                mt-8 inline-flex items-center gap-3
                rounded-full border border-[#00AAB7] bg-white
                px-6 py-2.5 text-sm font-semibold tracking-wide
                text-[#00AAB7] transition-all duration-300 ease-out
                hover:bg-[#00AAB7] hover:text-white
              "
            >
              READ MORE
            </a>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/homepage/about.png"
                  alt="BrainADZ Team"
                  width={760}
                  height={360}
                  className="h-[280px] w-full object-contain md:h-[360px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-white/5" />
              </div>

              <div className="absolute left-4 top-4 rounded-md bg-white/80 px-3 py-1 text-xs font-semibold text-black/70">
                BrainADZ
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/homepage/top_png.png"
        alt=""
        width={120}
        height={184}
        className="pointer-events-none absolute bottom-[-40px] left-8 hidden h-36 w-24 rotate-90 opacity-90 md:block md:h-[184px] md:w-[120px]"
        loading="lazy"
      />
    </section>
  );
}
