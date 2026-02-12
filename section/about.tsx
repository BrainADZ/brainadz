/* eslint-disable @next/next/no-img-element */
"use client";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#FBF6F4] py-12 md:py-20 overflow-hidden">
            {/* top-right small png (your file) */}
            <img
                src="/homepage/top_png.png" // ✅ change path
                alt="Decor"
                className="pointer-events-none absolute right-6 top-[-90] md:top-[-40] h-36 w-24 md:h-46 md:w-30 opacity-90"
                loading="lazy"
            />

            <div className="mx-auto max-w-[1500px] px-5 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-6">
                        <h2 className="text-[44px] md:text-[56px] font-extrabold leading-[0.95] tracking-tight text-black/80">
                            WHO WE ARE
                        </h2>

                        <p className="mt-4 text-[18px] md:text-[20px] font-semibold leading-snug text-[#00AAB7]">
                            BrainADZ Marketing is an agile and <br className="hidden md:block" />
                            future-forward marketing
                        </p>

                        <p className="mt-2 text-[15px] md:text-[16px] text-black/75">
                            fueled by ideas that spark momentum.
                        </p>

                        <div className="mt-6 space-y-4 text-[14.5px] md:text-[15px] leading-relaxed text-black/60">
                            <p>
                                We craft bold brand strategies and ad campaigns that don’t just
                                turn heads — they move markets.
                            </p>

                            <p>
                                Our in-house branding experts infuse insight, innovation, and
                                cultural relevance to develop campaigns that do more than
                                communicate — they catalyze growth. For this — they leverage
                                advanced technology, data analytics, and strategy in tandem.
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href="/about"
                            className="
    mt-8 inline-flex items-center gap-3
    rounded-full
    border border-[#00AAB7]
    bg-white
    px-6 py-2.5
    text-sm font-semibold tracking-wide
    text-[#00AAB7]
    transition-all duration-300 ease-out

    hover:bg-[#00AAB7]
    hover:text-white
  "
                        >


                            READ MORE
                        </a>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-6">
                        <div className="relative">
                            {/* torn-paper style frame */}
                            <div
                                className="
                  relative overflow-hidden
                "
                            >
                                <img
                                    src="/homepage/about.png" // ✅ change path (same image you have)
                                    alt="BrainADZ Team"
                                    className="h-[280px] w-full object-contain md:h-[360px]"
                                    loading="lazy"
                                />

                                {/* subtle grayscale like screenshot */}
                                <div className="pointer-events-none absolute inset-0 bg-white/5" />
                            </div>

                            {/* small accent chip on image (optional, remove if you don't want) */}
                            <div className="absolute left-4 top-4 rounded-md bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                                BrainADZ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        {/* top-right small png (your file) */}
            <img
                src="/homepage/top_png.png" // ✅ change path
                alt="Decor"
                className="pointer-events-none absolute left-8 bottom-[-40] h-36 w-24 md:h-46 md:w-30 opacity-90 rotate-90 hidden md:block"
                loading="lazy"
            />
        </section>
    );
}
