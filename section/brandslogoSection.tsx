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
        rounded-xl border border-gray-100 bg-white px-4
        shadow-[0_6px_18px_rgba(17,24,39,0.06)]
        h-20
        w-[150px] sm:w-40 md:w-[170px] lg:w-[180px] 2xl:w-[190px]
      "
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-16 w-auto max-w-[140px] object-contain opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
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
        className="outline-none focus-visible:ring-2 focus-visible:ring-[#ee9d54] focus-visible:ring-offset-2"
      >
        {item}
      </a>
    );
  }

  return item;
}

export default async function BrandLogosCarousel() {
  const logos = await getBrandLogos();
  if (!logos.length) return null;

  const track = [...logos, ...logos];
  const hasEnough = logos.length >= 6;

  return (
    // ✅ section relative + overflow hidden (so image doesn’t go outside)
    <section className="relative overflow-hidden bg-white py-14">
      {/* ✅ TOP RIGHT OVERLAY IMAGE */}
      <img
        src="/homepage/clienticon.svg"  // ✅ apna path yaha
        alt="Decor"
        className="
          pointer-events-none select-none
          absolute right-[-30] top-[-9]
          z-0
          w-[220px] opacity-70
          md:w-[420px] rotate-48 
          lg:w-[380px]
        "
        loading="lazy"
      />
      <img
        src="/homepage/clienticon.svg"  // ✅ apna path yaha
        alt="Decor"
        className="
          pointer-events-none select-none
          absolute left-[-19] bottom-[-5] rotate-222
          z-0
          w-[220px] opacity-70
          md:w-[420px]
          lg:w-[360px] hidden md:block
        "
        loading="lazy"
      />

      {/* ✅ content ko image ke upar lane ke liye */}
      <div className="relative z-10 px-2 lg:px-4 max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-start gap-6 text-left px-8">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AAB7]/40 bg-[#00AAB7]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00AAB7] md:text-xs">
              OUR ASSOCIATED BRANDS
            </p>

            <h2 className="mt-2 text-2xl font-medium text-gray-900 md:text-6xl font-sans">
              450+ Clients Trusted Us
            </h2>

            <h2 className="mt-2 text-xl font-semibold text-gray-900 md:text-2xl">
              Here are our esteemed allies in smart disrupting thinking.
            </h2>

            <p className="mt-2 max-w-2xl text-base text-gray-600">
              A heartfelt recognition of these visionary brands who stand with us in building impactful
              campaigns and brand building quests:
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-white">
          <div className="h-1 w-full bg-[#30B8C8] block md:hidden" />

          {/* fade edges only for mobile marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-white to-transparent sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-white to-transparent sm:hidden" />

          <div className="p-6 md:p-8">
            {/* ✅ MOBILE: marquee */}
            <div className="sm:hidden">
              <div className="group overflow-hidden">
                <div
                  className={[
                    "flex w-max items-center",
                    hasEnough ? "gap-10" : "gap-14",
                    "motion-reduce:animate-none",
                    "group-hover:[animation-play-state:paused]",
                    "animate-[logoMarquee_45s_linear_infinite]",
                    "max-sm:[animation-duration:40s]",
                  ].join(" ")}
                >
                  {track.map((logo, i) => (
                    <div key={`${logo.name}-${i}`}>
                      <LogoItem logo={logo} />
                    </div>
                  ))}
                </div>

                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes logoMarquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                    `,
                  }}
                />
              </div>
            </div>

            {/* ✅ TABLET + DESKTOP grid */}
            <div className="hidden sm:block">
              <div className="mx-auto max-w-[1500px] flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="group flex h-20 w-[180px] items-center justify-center rounded-xl bg-white shadow p-4"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-16 grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
