/* eslint-disable @next/next/no-img-element */
import path from "path";
import fs from "fs/promises";

type BrandLogo = {
    name: string;
    src: string;
    href?: string;
};

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"]);

async function getBrandLogos(): Promise<BrandLogo[]> {
    const dir = path.join(process.cwd(), "public", "brands");

    try {
        const files = await fs.readdir(dir);

        return files
            .filter((f) => ALLOWED.has(path.extname(f).toLowerCase()))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((f) => {
                const name = f
                    .replace(/\.[^/.]+$/, "")
                    .replace(/[-_]+/g, " ")
                    .trim();

                return { name: name || f, src: `/brands/${f}` };
            });
    } catch {
        return [];
    }
}

function LogoItem({ logo }: { logo: BrandLogo }) {
    const item = (
        <div
            className="
        flex items-center justify-center
        rounded-2xl border border-black/5 bg-white/80 backdrop-blur
        shadow-[0_10px_24px_rgba(17,24,39,0.06)]
        h-20 w-[155px] sm:w-44 md:w-[170px] lg:w-[185px]
        px-4
        transition-transform duration-300 hover:-translate-y-0.5
      "
        >
            <img
                src={logo.src}
                alt={logo.name}
                className="max-h-14 w-auto max-w-[140px] object-contain opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
            />
        </div>
    );

    if (logo.href) {
        return (
            <a
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                aria-label={logo.name}
                className="outline-none focus-visible:ring-2 focus-visible:ring-[#00AAB7] focus-visible:ring-offset-2 rounded-2xl"
            >
                {item}
            </a>
        );
    }

    return item;
}

export default async function BrandLogosCarouselReplica() {
    const logos = await getBrandLogos();
    if (!logos.length) return null;

    const hasEnough = logos.length >= 8;

    // ✅ 2 rows: split logos (fallback if few logos)
    const half = Math.ceil(logos.length / 2);
    const row1 = logos.slice(0, half);
    const row2 = logos.slice(half);

    const row1Track = [...row1, ...row1];
    const row2Track = [...(row2.length ? row2 : row1), ...(row2.length ? row2 : row1)];

    return (
        <section className="relative overflow-hidden bg-white py-14">

            <div className="relative z-10 mx-auto  ">

                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AAB7]/40 bg-[#00AAB7]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00AAB7] md:text-xs">
                        OUR ASSOCIATED BRANDS
                    </p>

                    <h2 className="mt-2 text-2xl md:text-5xl font-semibold text-gray-900">
                        450+ Clients Trusted Us
                    </h2>

                    <p className="mt-3 mx-auto max-w-3xl text-sm md:text-base text-gray-600">
                        A heartfelt recognition of visionary brands who stand with us in building impactful
                        campaigns and growth journeys.
                    </p>
                </div>


                {/* ✅ Dual continuous carousels */}
                <div className="relative mt-10 overflow-hidden  ">
                    {/* soft fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#F8FAFB] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#F8FAFB] to-transparent" />

                    <div className="p-6 md:p-8">
                        {/* Row 1 (moves RIGHT) */}
                        <div className="group overflow-hidden">
                            <div
                                className={[
                                    "flex w-max items-center",
                                    hasEnough ? "gap-6 md:gap-7" : "gap-10",
                                    "motion-reduce:animate-none",
                                    "group-hover:[animation-play-state:paused]",
                                    "animate-[logoMarqueeRight_38s_linear_infinite]",
                                    "max-md:animate-[logoMarqueeRight_34s_linear_infinite]",
                                ].join(" ")}
                            >
                                {row1Track.map((logo, i) => (
                                    <div key={`r1-${logo.name}-${i}`}>
                                        <LogoItem logo={logo} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-6" />

                        {/* Row 2 (moves LEFT) */}
                        <div className="group overflow-hidden">
                            <div
                                className={[
                                    "flex w-max items-center",
                                    hasEnough ? "gap-6 md:gap-7" : "gap-10",
                                    "motion-reduce:animate-none",
                                    "group-hover:[animation-play-state:paused]",
                                    "animate-[logoMarqueeLeft_42s_linear_infinite]",
                                    "max-md:animate-[logoMarqueeLeft_36s_linear_infinite]",
                                ].join(" ")}
                            >
                                {row2Track.map((logo, i) => (
                                    <div key={`r2-${logo.name}-${i}`}>
                                        <LogoItem logo={logo} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Animations */}
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                  @keyframes logoMarqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  @keyframes logoMarqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                  }
                `,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
