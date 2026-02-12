/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import ServiceCard, { ServiceCardData } from "../components/ServiceCard";

const HOME_SERVICES: ServiceCardData[] = [
    {
        num: "1",
        title: "WEBSITE DEVELOPMENT",
        desc: "High-performance websites built for speed, SEO, and conversions — from landing pages to full business sites.",
        icon: "/icons/Website_Development.png",
        href: "/services/website-development",
    },
    {
        num: "2",
        title: "GRAPHIC DESIGN",
        desc: "Brand identity, social creatives, and marketing designs that look premium and stay consistent across platforms.",
        icon: "/icons/gd.png",
        href: "/services/graphic-design",
    },
    {
        num: "3",
        title: "UI UX",
        desc: "User-focused UI/UX that improves clarity, trust, and flow — so visitors take action faster and stay longer.",
        icon: "/icons/uiux.png",
        href: "/services/ui-ux",
    },
    {
        num: "4",
        title: "SEO OPTIMIZATION",
        desc: "Technical + on-page SEO that improves rankings, traffic quality, and long-term visibility for your business.",
        icon: "/icons/seo.png",
        href: "/services/seo",
    },

    {
        num: "5",
        title: "DIGITAL MARKETING",
        desc: "Performance-driven marketing for growth — targeting, creatives, funnels, and optimization across key channels.",
        icon: "/icons/marketing.svg",
        href: "/services/digital-marketing",
    },
    {
        num: "6",
        title: "VIDEO EDITING",
        desc: "Reels, ads, and brand videos with scroll-stopping edits, pacing, and storytelling that drives engagement.",
        icon: "/icons/video.svg",
        href: "/services/video-editing",
    },
    {
        num: "7",
        title: "SMM",
        desc: "Content planning, posting, and community building — crafted to match your brand voice and boost reach.",
        icon: "/icons/social.svg",
        href: "/services/social-media-management",
    },
    {
        num: "8",
        title: "E-COMMERCE SOLUTIONS",
        desc: "Store setup, product pages, and conversion upgrades — built to increase add-to-carts and drive more sales.",
        icon: "/icons/ecommerce.svg",
        href: "/services/ecommerce",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-[#FFFFFF] py-16 md:py-20 relative overflow-hidden">
            {/* top-right small png (your file) */}
            <img
                src="/homepage/serviceIcon.png"
                alt="Decor"
                className="
    pointer-events-none
    absolute right-[-30] top-10
    h-25 w-36
    opacity-90
overflow-hidden
md:hidden block
  "
                loading="lazy"
            />
            <img
                src="/homepage/serviceIcon.png"
                alt="Decor"
                className="
    pointer-events-none
    absolute right-[-30] md:right-[-10] top-0
    h-36 w-42
    md:top-20 md:h-46 md:w-70
    opacity-90
overflow-hidden hidden md:block
  "
                loading="lazy"
            />
            <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AAB7]/40 bg-[#00AAB7]/10 px-4 py-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#00AAB7]">
                        DIGITAL EXCELLENCE
                    </p>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-black/80">
                        OUR SERVICES
                    </h2>

                    {/* ✅ bigger + stronger section description */}
                    <p className="mx-auto mt-5 max-w-4xl text-base md:text-lg leading-relaxed text-black/75">
                        From strategy to execution, we help brands build a strong digital presence that looks premium,
                        loads fast, and converts better. Whether you need a new website, creatives, growth marketing,
                        or consistent content — our team delivers end-to-end solutions built for results.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {HOME_SERVICES.map((s) => (
                        <ServiceCard key={s.title} service={s} />
                    ))}
                </div>

                {/* View more button ✅ */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/services"
                        className="
              inline-flex items-center gap-2
              rounded-full bg-white px-6 py-3
              text-sm font-semibold text-black
              shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              transition-all duration-200
              hover:-translate-y-0.5
            "
                    >
                        View More Services <span aria-hidden>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
