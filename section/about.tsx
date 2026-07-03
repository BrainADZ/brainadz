import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Database,
  Megaphone,
} from "lucide-react";

const CAPABILITIES = [
  {
    title: "Brand Strategy",
    icon: BarChart3,
    points: ["Brand positioning", "Market planning", "Growth roadmap"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    points: ["SEO and paid ads", "Social media campaigns", "Lead generation"],
  },
  {
    title: "Web & Automation",
    icon: Database,
    points: ["Web-app development", "Marketing analytics", "AI-led workflows"],
  },
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="grid min-h-[760px] lg:grid-cols-2">
        <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
          <Image
            src="/homepage/about-ai-collaboration.png"
            alt="Human creativity collaborating with artificial intelligence"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/30" />

          <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-10 sm:top-8">
            <span className="text-[36px] font-light leading-none tracking-[-0.04em] sm:text-[48px]">
              BrainADZ
            </span>
            <span className="relative text-[34px] font-light italic leading-none text-white sm:text-[44px]">
              AI
              <span className="absolute -right-4 -top-2 text-[18px] not-italic text-[#42d7ee]">
                +
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center px-5 py-14 sm:px-9 lg:px-10 lg:py-16 xl:px-16">
          <div className="w-full">
            <p className="text-[30px] font-light leading-tight text-white/90 sm:text-[38px] lg:text-[42px]">
              Integrated Marketing Solutions
            </p>

            <h2 className="mt-3 max-w-[830px] text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[48px] lg:text-[54px]">
             Building Brands That Grow Across Every Digital Touchpoint
            </h2>

            <p className="mt-7 max-w-[900px] text-[17px] font-normal leading-8 text-white/82 sm:text-[18px]">
              <strong className="font-semibold text-white">
                BrainADZ Marketing 
              </strong>{" "}
             helps businesses build strong visibility, generate qualified leads, and scale faster through strategy, creative campaigns, performance marketing, SEO, social media, websites, automation, and data-driven execution.
            </p>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {CAPABILITIES.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.title}
                    className="min-h-[270px] rounded-[22px] border border-white/25 px-5 py-6"
                  >
                    <div className="relative inline-flex">
                      <Icon className="h-11 w-11 text-white" strokeWidth={1.5} />
                      <Bot
                        className="absolute -right-3 -top-2 h-5 w-5 text-[#1467f5]"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="mt-7 text-[18px] font-semibold leading-6">
                      {capability.title}
                    </h3>

                    <ul className="mt-6 space-y-4">
                      {capability.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[15px] leading-6 text-white/88"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-[#1467f5]"
                            strokeWidth={2.2}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="tel:+919540468023"
                className="inline-flex min-h-16 items-center justify-center rounded-full bg-white px-8 text-[12px] font-semibold text-black transition hover:bg-[#1467f5] hover:text-white"
              >
               Book Free Consultation
              </Link>

              <Link
                href="/company-overview"
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-2 border-white px-8 text-[12px] font-semibold text-white transition hover:border-[#1467f5] hover:bg-[#1467f5]"
              >
                Know More
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
