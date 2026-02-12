/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

type Tile = {
  src: string;
  alt: string;
  className: string;
};

const TILES: Tile[] = [
  { src: "/gallery/1.jpeg", alt: "Gallery 1", className: "col-span-3 row-span-6 col-start-1 row-start-3" },
  { src: "/gallery/2.jpeg", alt: "Gallery 2", className: "col-span-3 row-span-3 col-start-4 row-start-1" },
  { src: "/gallery/FINAL cruve file 161.png", alt: "Gallery 3", className: "col-span-3 row-span-6 col-start-4 row-start-4" },
  { src: "/gallery/FINAL cruve file 157.png", alt: "Gallery 4", className: "col-span-4 row-span-4 col-start-7 row-start-2" },
  { src: "/gallery/5.jpeg", alt: "Gallery 5", className: "col-span-4 row-span-3 col-start-7 row-start-6" },
  { src: "/gallery/FINAL cruve file 160.png", alt: "Gallery 6", className: "col-span-3 row-span-6 col-start-11 row-start-1" },
  { src: "/gallery/8.jpeg", alt: "Gallery 7", className: "col-span-3 row-span-3 col-start-11 row-start-7" },
];

const LOGOS = [
  { src: "/logo/mainlogo.png", alt: "BrainADZ Marketing" },
  { src: "/logo/exhibits.png", alt: "BrainADZ Exhibits" },
  { src: "/logo/live.png", alt: "BrainADZ Live" },
];

export default function CollageSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Top heading block */}
      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-start mb-12 md:mb-16">
          <h2 className="text-3xl md:text-3xl font-extrabold leading-tight text-black">
            We Build Growth-Driven <br />
            Marketing, Live Experiences <br />
            & Exhibition Presence
          </h2>

          <p className="text-sm md:text-[15px] leading-relaxed text-black/70 md:pl-10">
            BrainADZ Group works across three specialist verticals — performance marketing and web, live event
            production with LED screens and on-ground setup, and exhibition stall design & fabrication. One team,
            premium execution, measurable outcomes.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        {/* Logos (B/W default, hover color) */}
        <div className="mb-12 md:mb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {LOGOS.map((l) => (
              <div
                key={l.alt}
                className="
                  group
                  flex items-center justify-center
                  border border-black/10 bg-white
                  py-6 px-4
                  transition-all duration-200 ease-out
                  hover:border-black/20
                "
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  className="
                    h-20 w-auto
                    max-w-[280px] md:max-w-[320px]
                    object-contain
                    opacity-90
                    grayscale
                    transition-all duration-200 ease-out
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:scale-[1.03]
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Collage (Desktop) */}
        <div
          className="
            hidden md:grid
            gap-3
            h-[648px]
            grid-cols-13
            grid-rows-[repeat(9,72px)]
          "
        >
          {TILES.map((t, i) => (
            <TileCard key={i} {...t} />
          ))}
        </div>

        {/* Mobile fallback */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {TILES.map((t, i) => (
            <div key={i} className="relative aspect-4/3 overflow-hidden bg-black">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 50vw, 0px"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TileCard({ src, alt, className }: Tile) {
  return (
    <div
      className={[
        "group relative overflow-hidden bg-black", // bg-black optional (edges nice)
        "transform-[translateZ(0)] backface-hidden will-change-transform",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform duration-300 ease-out
          scale-[1.01] group-hover:scale-[1.05]
          grayscale group-hover:grayscale-0
        "
        sizes="(max-width: 1200px) 33vw, 25vw"
      />

      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-black/55
          transition-opacity duration-300 ease-out
          group-hover:opacity-0
        "
      />
    </div>
  );
}

