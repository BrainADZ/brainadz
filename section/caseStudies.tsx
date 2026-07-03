"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type CaseStudy = {
  client: string;
  shortName: string;
  summary: string;
  outcomeOne: string;
  outcomeOneLabel: string;
  outcomeTwo: string;
  outcomeTwoLabel: string;
  image: string;
  background: string;
  foreground: string;
};

type CarouselPosition =
  | "center"
  | "left"
  | "right"
  | "farLeft"
  | "farRight"
  | "hidden";

type PositionStyle = {
  x: number;
  scale: number;
  rotate: number;
  zIndex: number;
  visibility: "visible" | "hidden";
};

const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Khadi Organique",
    shortName: "KO",
    summary:
      "Built a premium e-commerce experience that makes a large natural-care catalogue easier to discover and shop.",
    outcomeOne: "E-commerce",
    outcomeOneLabel: "product-first shopping journey",
    outcomeTwo: "Mobile-first",
    outcomeTwoLabel: "responsive buying experience",
    image: "/portfolio/web/1.png",
    background: "#e7ff8e",
    foreground: "#111111",
  },
  {
    client: "National Engineers",
    shortName: "NE",
    summary:
      "Developed an industrial brand presence that communicates manufacturing capability, products, and trust at a glance.",
    outcomeOne: "Industrial",
    outcomeOneLabel: "capability-led storytelling",
    outcomeTwo: "Responsive",
    outcomeTwoLabel: "desktop and mobile delivery",
    image: "/portfolio/web/4.png",
    background: "#bdf8f5",
    foreground: "#111111",
  },
  {
    client: "Country Home",
    shortName: "CH",
    summary:
      "Designed a clean commerce experience for home and hospital textiles with simple discovery and purchase flows.",
    outcomeOne: "Commerce",
    outcomeOneLabel: "catalogue and category UX",
    outcomeTwo: "Trust-led",
    outcomeTwoLabel: "clear shopping assurances",
    image: "/portfolio/web/5.png",
    background: "#d9efff",
    foreground: "#111111",
  },
  {
    client: "Rubber Hose India",
    shortName: "RHI",
    summary:
      "Structured a technical product website for an industrial hose manufacturer with stronger visibility and navigation.",
    outcomeOne: "SEO-ready",
    outcomeOneLabel: "structured product content",
    outcomeTwo: "B2B UX",
    outcomeTwoLabel: "faster technical discovery",
    image: "/portfolio/web/6.png",
    background: "#ffe45c",
    foreground: "#111111",
  },
  {
    client: "Jaskirat Exports",
    shortName: "JE",
    summary:
      "Created a bold export catalogue platform covering multiple equipment categories with a modern visual system.",
    outcomeOne: "2 markets",
    outcomeOneLabel: "India and China divisions",
    outcomeTwo: "Scalable",
    outcomeTwoLabel: "multi-category product system",
    image: "/portfolio/web/3.png",
    background: "#ffbd4b",
    foreground: "#111111",
  },
  {
    client: "Comac India",
    shortName: "CI",
    summary:
      "Redesigned an industrial product website around clear categories, stronger navigation, and faster enquiry journeys.",
    outcomeOne: "B2B",
    outcomeOneLabel: "clear product architecture",
    outcomeTwo: "Lead-ready",
    outcomeTwoLabel: "focused enquiry pathways",
    image: "/portfolio/web/2.png",
    background: "#ff3150",
    foreground: "#ffffff",
  },
];

const DESKTOP_POSITIONS: Record<CarouselPosition, PositionStyle> = {
  center: {
    x: 0,
    scale: 1,
    rotate: 0,
    zIndex: 5,
    visibility: "visible",
  },
  left: {
    x: -420,
    scale: 0.88,
    rotate: -14,
    zIndex: 4,
    visibility: "visible",
  },
  right: {
    x: 420,
    scale: 0.88,
    rotate: 14,
    zIndex: 4,
    visibility: "visible",
  },
  farLeft: {
    x: -760,
    scale: 0.78,
    rotate: -18,
    zIndex: 3,
    visibility: "visible",
  },
  farRight: {
    x: 760,
    scale: 0.78,
    rotate: 18,
    zIndex: 3,
    visibility: "visible",
  },
  hidden: {
    x: 0,
    scale: 0.6,
    rotate: 0,
    zIndex: 1,
    visibility: "hidden",
  },
};

function getPosition(
  index: number,
  activeIndex: number,
  total: number
): CarouselPosition {
  const offset = (index - activeIndex + total) % total;

  if (offset === 0) return "center";
  if (offset === 1) return "right";
  if (offset === 2) return "farRight";
  if (offset === total - 1) return "left";
  if (offset === total - 2) return "farLeft";
  return "hidden";
}

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const previousIndex =
    (activeIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
  const nextIndex = (activeIndex + 1) % CASE_STUDIES.length;

  const goPrevious = () => setActiveIndex(previousIndex);
  const goNext = () => setActiveIndex(nextIndex);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeTab = tabRefs.current[activeIndex];

    if (!container || !activeTab) return;

    container.scrollTo({
      left:
        activeTab.offsetLeft -
        container.clientWidth / 2 +
        activeTab.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const positionScale =
    viewportWidth >= 1400
      ? 1
      : viewportWidth >= 1100
        ? 0.82
        : viewportWidth >= 768
          ? 0.62
          : 0.48;

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    setDragX(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const nextDragX = event.clientX - dragStartX.current;
    setDragX(Math.max(-160, Math.min(160, nextDragX)));
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const shouldMoveNext = dragX < -65;
    const shouldMovePrevious = dragX > 65;

    setIsDragging(false);
    setDragX(0);

    if (shouldMoveNext) goNext();
    if (shouldMovePrevious) goPrevious();
  };

  return (
    <section className="overflow-hidden bg-black py-14 text-white md:py-18">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <h2 className="text-center text-[38px] font-normal leading-tight tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
          Innovation, Engineered by BrainADZ
        </h2>

        <div className="mt-9 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous case study"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div
            ref={tabsContainerRef}
            className="no-scrollbar flex max-w-[calc(100vw-150px)] items-center gap-3 overflow-x-auto"
          >
            {CASE_STUDIES.map((study, index) => (
              <button
                key={study.client}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-14 shrink-0 px-5 text-[15px] font-semibold transition-colors ${
                  index === activeIndex
                    ? "rounded-full bg-white text-black"
                    : "bg-[#181818] text-white hover:bg-[#292929]"
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next case study"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`relative mt-11 h-[590px] touch-pan-y select-none sm:h-[650px] lg:h-[720px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        {CASE_STUDIES.map((study, index) => {
          const position = getPosition(
            index,
            activeIndex,
            CASE_STUDIES.length
          );
          const positionStyle = DESKTOP_POSITIONS[position];
          const dragInfluence =
            position === "hidden"
              ? 0
              : position === "center"
                ? dragX
                : dragX * 0.45;
          const x = positionStyle.x * positionScale + dragInfluence;

          const cardStyle: CSSProperties = {
            zIndex: positionStyle.zIndex,
            visibility: positionStyle.visibility,
            transform: `translate3d(calc(-50% + ${x}px), 0, 0) scale(${positionStyle.scale}) rotateZ(${positionStyle.rotate}deg)`,
            transition: isDragging
              ? "none"
              : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear",
          };

          return (
            <div
              key={study.client}
              className="absolute left-1/2 top-0 w-[min(390px,calc(100vw-48px))] will-change-transform sm:w-[430px]"
              style={cardStyle}
              aria-hidden={position === "hidden"}
            >
              <CaseStudyCard
                study={study}
                active={position === "center"}
              />
            </div>
          );
        })}

        {/* <div className="pointer-events-none absolute left-[calc(50%+275px)] top-24 z-10 hidden h-[72px] w-[72px] place-items-center rounded-full bg-[#242020] text-[11px] font-semibold xl:grid">
          DRAG
        </div> */}
      </div>

      <div className="flex justify-center px-5">
        <Link
          href="/portfolio"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 px-7 text-[12px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          View All Case Studies
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  active,
}: {
  study: CaseStudy;
  active: boolean;
}) {
  return (
    <article
      className="group relative flex h-[540px] w-full flex-col overflow-hidden rounded-[22px] text-left shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:h-[600px]"
      style={{ backgroundColor: study.background, color: study.foreground }}
    >
      <div className="px-7 pt-7 sm:px-8 sm:pt-8">
        <div className="flex items-center gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white text-[14px] font-bold text-black shadow-sm">
            {study.shortName}
          </div>

          <h3 className="text-[23px] font-medium sm:text-[26px]">
            {study.client}
          </h3>
        </div>

        <p className="mt-6 text-[14px] leading-6 opacity-80 sm:text-[15px]">
          {study.summary}
        </p>

        <div className="mt-7 grid grid-cols-2 gap-7">
          <div>
            <p className="text-[24px] font-medium leading-tight">
              {study.outcomeOne}
            </p>
            <p className="mt-3 text-[13px] leading-5 opacity-75">
              {study.outcomeOneLabel}
            </p>
          </div>

          <div>
            <p className="text-[24px] font-medium leading-tight">
              {study.outcomeTwo}
            </p>
            <p className="mt-3 text-[13px] leading-5 opacity-75">
              {study.outcomeTwoLabel}
            </p>
          </div>
        </div>
      </div>

      {active ? (
        <Link
          href="/portfolio"
          onPointerDown={(event) => event.stopPropagation()}
          className="invisible absolute right-8 top-[205px] z-20 hidden min-h-12 items-center justify-center rounded-full bg-[#242020] px-6 text-[12px] font-semibold text-white shadow-lg group-hover:visible sm:inline-flex"
        >
          View case study
        </Link>
      ) : null}

      <div className="relative mx-7 mt-auto h-[235px] overflow-hidden rounded-t-[68px] bg-black sm:mx-8 sm:h-[275px]">
        <Image
          src={study.image}
          alt={`${study.client} website project`}
          fill
          draggable={false}
          className="pointer-events-none select-none object-cover object-top"
          sizes="(max-width: 640px) calc(100vw - 104px), 366px"
        />
      </div>
    </article>
  );
}
