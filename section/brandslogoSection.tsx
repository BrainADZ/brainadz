import Image from "next/image";
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
    <div className="flex h-[172px] w-[188px] shrink-0 flex-col items-center justify-between rounded-[14px] border border-black/10 bg-white px-5 py-7 shadow-[0_16px_42px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-[#d71920] hover:bg-[#fff8f8] sm:h-[158px] sm:w-[220px] lg:h-[174px] lg:w-[222px]">
      <div className="flex min-h-[70px] w-full items-center justify-center">
        <Image
          src={logo.src}
          alt={logo.name}
          width={170}
          height={78}
          className="max-h-[62px] w-auto max-w-[150px] object-contain sm:max-h-[72px] sm:max-w-[170px]"
          loading="lazy"
          sizes="(max-width: 640px) 150px, 170px"
        />
      </div>

      <p className="max-w-full truncate text-center text-[13px] font-semibold leading-none text-black/72 sm:text-[15px]">
        {logo.name}
      </p>
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
        className={`flex w-max items-center gap-5 will-change-transform group-hover:[animation-play-state:paused] sm:gap-6 ${
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
    <section className="overflow-hidden bg-white py-16 text-[#111111] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-5 text-center">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d71920]/18 bg-[#fff7f7] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#d71920]">
          <span className="h-2 w-2 rounded-full bg-[#d71920]" />
          Brand Partners
        </div>

        <h2 className="mx-auto max-w-[760px] text-[38px] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[48px] lg:text-[58px]">
          Strategic Alliances that <span className="text-[#d71920]">Power Innovation</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-black/58">
          Trusted collaborations across marketing, technology, creative, and
          growth-led brand experiences.
        </p>
      </div>

      <div className="mt-14 space-y-5 sm:mt-16 sm:space-y-6">
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
