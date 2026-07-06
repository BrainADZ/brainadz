import Link from "next/link";

const SERVICES = [
  {
    title: "Digital Marketing",
    description:
      "SEO, social media, content strategy, and digital campaigns designed to strengthen your online presence and connect with the right audience.",
    href: "/services/digital-marketing",
    icon: "/home/social-media.svg",
  },
  {
    title: "Creative & Media",
    description:
      "Brand creatives, videos, reels, campaign concepts, and visual content that help your brand communicate with clarity and impact.",
    href: "/services/creative-media",
    icon: "/home/mobile.svg",
  },
  {
    title: "Website Development",
    description:
      "Fast, responsive, and conversion-focused websites built to support your brand, business goals, and digital growth.",
    href: "/services/web-design-development",
    icon: "/home/digital-services.svg",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven paid campaigns, lead generation, retargeting, and funnel optimization focused on measurable business results.",
    href: "/services/performance-marketing",
    icon: "/home/performance.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white text-[#151515]">
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">
        
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-7 border-b border-black/10 pb-10 md:mb-14 md:flex-row md:items-end md:justify-between md:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#d71920]" />

              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#d71920]">
                Our Services
              </span>
            </div>

            <h2 className="max-w-[850px] text-[38px] font-normal leading-[1.1] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]">
              Ideas, technology and marketing
              <span className="block text-[#d71920]">
                working together.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-7 text-black/60 md:text-right">
            We bring strategy, creativity, and technology together to build
            stronger digital experiences for ambitious brands.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid border-l border-t border-black/10 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex min-h-[410px] flex-col overflow-hidden border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-[#fff8f8] sm:min-h-[440px] lg:p-9"
            >
              {/* Red top accent */}
              <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#d71920] transition-all duration-300 group-hover:w-full" />

              {/* Icon */}
              <div className="flex h-[82px] w-[82px] items-center justify-center border border-black/10 bg-[#f8f8f8]">
                <img
                  src={service.icon}
                  alt=""
                  className="h-13 w-13 object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3 className="max-w-[280px] text-[25px] font-normal leading-[1.25] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#d71920] lg:text-[28px]">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-[340px] text-[15px] leading-7 text-black/60">
                  {service.description}
                </p>
              </div>

              {/* Minimal arrow */}
              <div className="mt-auto pt-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-[20px] transition-colors duration-300 group-hover:border-[#d71920] group-hover:bg-[#d71920] group-hover:text-white">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Single Button */}
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/services"
            className="inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#d71920] px-8 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#193175]"
          >
            View All Services
            <span className="text-[18px]">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}