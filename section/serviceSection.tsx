import Link from "next/link";
import Image from "next/image";
import {
  Clapperboard,
  Code2,
  Megaphone,
  MousePointer2,
  Palette,
  Search,
  Share2,
  ShoppingCart,
} from "lucide-react";
import ServiceCard, { ServiceCardData } from "../components/ServiceCard";

const HOME_SERVICES: ServiceCardData[] = [
  {
    num: "1",
    title: "WEBSITE DEVELOPMENT",
    desc: "High-performance websites built for speed, SEO, and conversions - from landing pages to full business sites.",
    icon: <Code2 className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/website-development",
  },
  {
    num: "2",
    title: "GRAPHIC DESIGN",
    desc: "Brand identity, social creatives, and marketing designs that look premium and stay consistent across platforms.",
    icon: <Palette className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/graphic-design",
  },
  {
    num: "3",
    title: "UI UX",
    desc: "User-focused UI/UX that improves clarity, trust, and flow - so visitors take action faster and stay longer.",
    icon: <MousePointer2 className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/ui-ux",
  },
  {
    num: "4",
    title: "SEO OPTIMIZATION",
    desc: "Technical + on-page SEO that improves rankings, traffic quality, and long-term visibility for your business.",
    icon: <Search className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/seo",
  },
  {
    num: "5",
    title: "DIGITAL MARKETING",
    desc: "Performance-driven marketing for growth - targeting, creatives, funnels, and optimization across key channels.",
    icon: <Megaphone className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/digital-marketing",
  },
  {
    num: "6",
    title: "VIDEO EDITING",
    desc: "Reels, ads, and brand videos with scroll-stopping edits, pacing, and storytelling that drives engagement.",
    icon: <Clapperboard className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/video-editing",
  },
  {
    num: "7",
    title: "SMM",
    desc: "Content planning, posting, and community building - crafted to match your brand voice and boost reach.",
    icon: <Share2 className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/social-media-management",
  },
  {
    num: "8",
    title: "E-COMMERCE SOLUTIONS",
    desc: "Store setup, product pages, and conversion upgrades - built to increase add-to-carts and drive more sales.",
    icon: <ShoppingCart className="h-12 w-12" strokeWidth={1.8} />,
    href: "/services/ecommerce",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <Image
        src="/homepage/serviceIcon.png"
        alt=""
        width={144}
        height={100}
        className="
          pointer-events-none absolute right-[-30px] top-10
          block h-[100px] w-36 opacity-90 md:hidden
        "
        loading="lazy"
      />
      <Image
        src="/homepage/serviceIcon.png"
        alt=""
        width={280}
        height={184}
        className="
          pointer-events-none absolute right-[-30px] top-0
          hidden h-36 w-[168px] opacity-90 md:right-[-10px] md:top-20
          md:block md:h-[184px] md:w-[280px]
        "
        loading="lazy"
      />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AAB7]/40 bg-[#00AAB7]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00AAB7] md:text-xs">
            DIGITAL EXCELLENCE
          </p>

          <h2 className="text-3xl font-extrabold text-black/80 md:text-5xl">
            OUR SERVICES
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-black/75 md:text-lg">
            From strategy to execution, we help brands build a strong digital
            presence that looks premium, loads fast, and converts better.
            Whether you need a new website, creatives, growth marketing, or
            consistent content - our team delivers end-to-end solutions built
            for results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

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
            View More Services <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
