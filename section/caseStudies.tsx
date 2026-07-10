/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

type WorkCategory =
  | "Digital Marketing"
  | "Website Development"
  | "Creative Media"
  | "SEO"
  | "Performance Marketing";

type FilterKey = "All" | WorkCategory;

type CaseStudyItem = {
  title: string;
  category: WorkCategory;
  media: string;
  mediaType: "image" | "video";
  href: string;
};

const FILTERS: FilterKey[] = [
  "All",
  "Digital Marketing",
  "Website Development",
  "Creative Media",
  "SEO",
  "Performance Marketing",
];

const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: "Apps Discover",
    category: "Digital Marketing",
    media: "/portfolio/app-discover.jpg",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Blind Relief Association",
    category: "Creative Media",
    media: "/portfolio/Blind-Relief-Association.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Calm Thumbnail",
    category: "Creative Media",
    media: "/portfolio/calm_thumbnail.webp",
    mediaType: "image",
    href: "/case-studies",
  },
    {
    title: "Allure Website",
    category: "Website Development",
    media: "/portfolio/Allure-website-creativenexus.in-Thumbnail.webp",
    mediaType: "image",
    href: "/case-studies",
  },

  {
    title: "Everest Global",
    category: "Performance Marketing",
    media: "/portfolio/Everest-global-3.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Framework",
    category: "Website Development",
    media: "/portfolio/Framework-Thumbnail.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Muskaan Consulting Service",
    category: "Creative Media",
    media: "/portfolio/Muskaan.jpg",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Native Krea",
    category: "Website Development",
    media: "/portfolio/native-krea-creativenexus.in-thumbnail.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Water Treatment Supply",
    category: "SEO",
    media: "/portfolio/watertreatmentsupply-1024x1024-1.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Capri Loans Impact Report",
    category: "Creative Media",
    media: "/portfolio/CapriLoans_CreativeNexus-Impact-Report-1.png",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Nore",
    category: "Website Development",
    media: "/portfolio/Nore-Thumbnail.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Tiger Logistics",
    category: "Creative Media",
    media:
      "/portfolio/Creative-nexus_Tiger-Logistics-branding-Annual-Report-Website-Development-Secrets_Video-Production-Filmmaking_Digital-Marketing.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Robinsons",
    category: "Creative Media",
    media: "/portfolio/Robinsons-1.webp",
    mediaType: "image",
    href: "/case-studies",
  },
  {
    title: "Blume Planters",
    category: "Creative Media",
    media: "/portfolio/Blume.mp4",
    mediaType: "video",
    href: "/case-studies",
  },
  {
    title: "ICICI Report",
    category: "Creative Media",
    media: "/portfolio/Icici.mp4",
    mediaType: "video",
    href: "/case-studies",
  },
  {
    title: "Growgether",
    category: "Creative Media",
    media: "/portfolio/Growgether.mp4",
    mediaType: "video",
    href: "/case-studies",
  },
];

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const visibleCaseStudies = useMemo(() => {
    if (activeFilter === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-[#ffffff] py-6 text-black sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1800px] px-5 px:4 md:px-8 lg:px-12">
        <div className="text-center">
          <div>
            <p className="text-[12px] font-semibold uppercase text-[#d71920]">
              Our Work
            </p>
            <h2 className="mt-3 text-[38px] font-semibold leading-[1.05] text-black sm:text-[48px] lg:text-[58px]">
              Case Studies
            </h2>
          </div>

          <div className="no-scrollbar -mx-5 mt-7 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={[
                    "h-10 shrink-0 rounded-sm border px-4 text-[12px] font-semibold uppercase transition-colors",
                    isActive
                      ? "border-[#d71920] bg-[#d71920] text-white"
                      : "border-black/10 bg-white text-black/65 hover:border-[#d71920] hover:text-[#d71920]",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visibleCaseStudies.map((item, index) => (
            <CaseStudyCard
              key={`${item.title}-${item.category}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#d71920] px-5 text-[13px] font-semibold text-[#d71920] transition-colors hover:bg-[#d71920] hover:text-white"
          >
            View All Case Studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  item,
  index,
}: {
  item: CaseStudyItem;
  index: number;
}) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 80}
      className="group mb-8 inline-block w-full break-inside-avoid"
    >
      <a
        href={item.href}
        aria-label={`View ${item.title} project`}
        className="block"
      >
        <div className="overflow-hidden bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-[border-radius] duration-500 ease-out group-hover:rounded-lg">
          {item.mediaType === "video" ? (
            <video
              src={item.media}
              aria-label={`${item.title} project video`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:rotate-1"
            />
          ) : (
            <img
              src={item.media}
              alt={`${item.title} project preview`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:rotate-1"
            />
          )}
        </div>

        <div className="pt-4">
          <h3 className="text-[18px] font-semibold leading-tight text-black">
            {item.title}
          </h3>

          <div className="relative mt-1 h-5 overflow-hidden text-[12px] font-medium">
            <span className="absolute left-0 top-0 text-black/50 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0">
              {item.category}
            </span>
            <span className="absolute left-0 top-0 inline-flex translate-y-4 items-center gap-1 text-[#d71920] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
