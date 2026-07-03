import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Sparkles,
  Store,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    title: "Digital Marketing Services",
    description:
      "Grow your brand online with SEO, social media marketing, content strategy, brand visibility campaigns, and digital solutions designed to attract the right audience.",
    href: "/services/digital-marketing",
    buttonLabel: "View Digital Marketing",
    icon: Megaphone,
    accentIcon: Sparkles,
  },
  {
    title: "Creative & Media Services",
    description:
      "Make your brand stand out with high-impact creatives, ad designs, videos, reels, product shoots, campaign concepts, and visual content for every digital platform.",
    href: "/services/creative-media",
    buttonLabel: "View Creative Services",
    icon: Palette,
    accentIcon: Store,
  },
  {
    title: "Website Development Services",
    description:
      "Build fast, responsive, and conversion-focused websites, landing pages, business platforms, and e-commerce experiences that support your growth goals.",
    href: "/services/web-design-development",
    buttonLabel: "View Website Services",
    icon: Code2,
    accentIcon: PanelsTopLeft,
  },
  {
    title: "Performance Marketing",
    description:
      "Generate measurable leads and sales through Google Ads, Meta Ads, paid campaigns, retargeting, funnel optimization, and data-driven performance strategies.",
    href: "/services/performance-marketing",
    buttonLabel: "View Performance Marketing",
    icon: TrendingUp,
    accentIcon: BarChart3,
  },
];

export default function ServicesSection() {
  return (
    <section className="border-y border-black/10 bg-[#f8f7f4] text-[#111111]">
      <div className="mx-auto max-w-[1800px]">
        <div className="px-5 py-14 text-center sm:px-8 md:py-20">
          <h2 className="mx-auto max-w-[900px] text-[38px] font-normal leading-[1.12] tracking-[-0.02em] sm:text-[46px] lg:text-[58px]">
            Beyond Marketing.
            <span className="mt-2 block">We Deliver Transformation.</span>
          </h2>
        </div>

        <div className="grid border-t border-black/10 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const AccentIcon = service.accentIcon;

            return (
              <article
                key={service.title}
                className={`flex min-h-[440px] flex-col border-black/10 px-7 py-9 sm:min-h-[470px] lg:px-9 lg:py-10 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index < SERVICES.length - 1 ? "border-b" : ""} ${
                  index >= 2 ? "sm:border-b-0" : ""
                } ${index < SERVICES.length - 1 ? "xl:border-r xl:border-b-0" : ""
                }`}
              >
                <div className="relative h-20 w-20">
                  <Icon
                    className="absolute bottom-0 left-0 h-14 w-14 text-black"
                    strokeWidth={1.7}
                  />
                  <AccentIcon
                    className="absolute right-0 top-0 h-8 w-8 text-[#1467f5]"
                    strokeWidth={2}
                  />
                </div>

                <div className="mt-14 flex flex-1 flex-col">
                  <h3 className="max-w-[310px] text-[22px] font-medium leading-[1.45] tracking-[-0.01em] lg:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-6 max-w-[360px] text-[16px] font-normal leading-7 text-black/70">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-9">
                    <Link
                      href={service.href}
                      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-black/80 px-7 py-3 text-center text-[12px] font-semibold text-black transition-colors hover:border-[#1467f5] hover:bg-[#1467f5] hover:text-white"
                    >
                      {service.buttonLabel}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center border-t border-black/10 px-5 py-10 md:py-12">
          <Link
            href="/services"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#1467f5] px-8 py-3 text-[12px] font-semibold text-[#1467f5] transition-colors hover:bg-[#1467f5] hover:text-white"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
