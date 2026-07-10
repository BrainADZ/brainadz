/* eslint-disable @next/next/no-img-element */
import fs from "fs/promises";
import path from "path";

type BrandLogo = {
  name: string;
  src: string;
};

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"]);

const BRAND_NAME_BY_FILE: Record<string, string> = {
  "FINAL cruve file 151.png": "Mrs. Bector's Cremica",
  "FINAL cruve file 152.png": "Comac India",
  "FINAL cruve file 153.png": "Rapido",
  "FINAL cruve file 154.png": "Khadi Organique",
  "FINAL cruve file 155.png": "Air India",
  "FINAL cruve file 156.png": "Pudumjee",
  "FINAL cruve file 157.png": "UK Government",
  "FINAL cruve file 158.png": "SITA",
  "FINAL cruve file 159.png": "Atulya",
  "FINAL cruve file 160.png": "Nexus",
  "FINAL cruve file 161.png": "Hungritos",
  "FINAL cruve file 163.png": "GreenTech",
  "FINAL cruve file 164.png": "Prakash Masala",
  "FINAL cruve file 165.png": "Dairy Best",
  "FINAL cruve file 166.png": "eRise",
  "FINAL cruve file 167.png": "Roleks",
  "FINAL cruve file 168.png": "Ankit",
  "FINAL cruve file 169.png": "Amazing Gifts",
  "FINAL cruve file 170.png": "Dharwala Foods",
  "FINAL cruve file 171.png": "Tuffbull",
  "FINAL cruve file 172.png": "Hygear",
  "FINAL cruve file 173.png": "Super Mexx",
  "FINAL cruve file 174.png": "Wonder Clean",
  "FINAL cruve file 175.png": "Aerocide Herbal",
  "FINAL cruve file 176.png": "Prestige",
  "FINAL cruve file 177.png": "Dynamo EV",
  "FINAL cruve file 178.png": "Marwari Jewellers",
};

async function getBrandLogos(): Promise<BrandLogo[]> {
  const dir = path.join(process.cwd(), "public", "brands");

  try {
    const files = await fs.readdir(dir);

    return files
      .filter((file) => ALLOWED.has(path.extname(file).toLowerCase()))
      .filter((file) => !file.toLowerCase().includes("digital marketing logo"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({
        name:
          BRAND_NAME_BY_FILE[file] ||
          file
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]+/g, " ")
            .trim(),
        src: `/brands/${file}`,
      }));
  } catch {
    return [];
  }
}

function BrandCard({ logo }: { logo: BrandLogo }) {
  return (
    <div className="flex h-28 w-36 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-5 shadow-[0_10px_28px_rgba(0,0,0,0.055)] transition-colors duration-300 hover:border-[#d71920] hover:bg-[#fff8f8] sm:h-[120px] sm:w-[166px] lg:h-32 lg:w-[178px]">
      <div className="flex w-full items-center justify-center">
        <img
          src={logo.src}
          alt={logo.name}
          width={140}
          height={62}
          className="max-h-12 w-auto max-w-28 object-contain sm:max-h-[54px] sm:max-w-[132px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function BrandMarqueeRow({
  logos,
  direction,
}: {
  logos: BrandLogo[];
  direction: "left" | "right";
}) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 will-change-transform group-hover:[animation-play-state:paused] sm:gap-5 ${
          direction === "right"
            ? "brand-marquee-right"
            : "brand-marquee-left"
        }`}
      >
        {marqueeLogos.map((logo, index) => (
          <BrandCard key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default async function BrandLogosCarousel() {
  const logos = await getBrandLogos();
  if (!logos.length) return null;

  const splitIndex = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, splitIndex);
  const bottomRow = logos.slice(splitIndex);

  return (
    <section className="overflow-hidden bg-white py-6 text-[#111111] sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 text-center">

<div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/50">
              Brand Partners
            </p>
          </div>
        <h2 className="mx-auto text-black max-w-[760px] text-[38px] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[48px] lg:text-[58px]">
          Strategic Alliances that <span className="text-[#d71920]">Power Innovation</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-black/58">
          Trusted collaborations across marketing, technology, creative, and
          growth-led brand experiences.
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
        <BrandMarqueeRow logos={topRow} direction="right" />
        <BrandMarqueeRow
          logos={bottomRow.length ? bottomRow : topRow}
          direction="left"
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes brandMarqueeLeft {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }

            @keyframes brandMarqueeRight {
              from { transform: translate3d(-50%, 0, 0); }
              to { transform: translate3d(0, 0, 0); }
            }

            .brand-marquee-left {
              animation: brandMarqueeLeft 42s linear infinite;
            }

            .brand-marquee-right {
              animation: brandMarqueeRight 46s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .brand-marquee-left,
              .brand-marquee-right {
                animation: none;
              }
            }
          `,
        }}
      />
    </section>
  );
}
