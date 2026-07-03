import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Cpu,
  Eye,
  Network,
  ShieldCheck,
  Sparkles,
    Megaphone,
  TrendingUp,
  Search,
  UsersRound,
  Palette,
  Video,
  Code2,
  BadgeCheck,
  BarChart3,
} from "lucide-react";
import type { ComponentType } from "react";

type Expertise = {
  title: string;
  copy: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const EXPERTISE: Expertise[] = [
  {
    title: "Digital Marketing Strategy",
    copy: "We create complete digital marketing strategies that align your brand, audience, content, and campaigns with clear business goals, helping you build visibility, engagement, and consistent growth.",
    icon: Megaphone,
  },
  {
    title: "Performance Marketing",
    copy: "We run result-focused Google Ads, Meta Ads, lead generation campaigns, retargeting, and conversion funnels designed to deliver measurable enquiries, sales, and ROI.",
    icon: TrendingUp,
  },
  {
    title: "SEO & Content Marketing",
    copy: "We help brands improve search visibility through keyword planning, on-page SEO, technical SEO, blog content, website content, and search-focused growth strategies.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    copy: "We manage social media with platform-ready content, campaign planning, creative posts, reels, audience engagement, and brand communication that keeps your business active and relevant.",
    icon: UsersRound,
  },
  {
    title: "Creative Design",
    copy: "From brand creatives and social media designs to ad banners, campaign visuals, brochures, packaging creatives, and corporate designs, we create visuals that make your brand stand out.",
    icon: Palette,
  },
  {
    title: "Video & Media Production",
    copy: "We produce reels, product videos, ad films, motion graphics, corporate videos, and campaign-led visual content that helps brands communicate better across digital platforms.",
    icon: Video,
  },
  {
    title: "Website Development",
    copy: "We build fast, responsive, SEO-friendly, and conversion-focused websites, landing pages, business portals, and e-commerce platforms designed around performance and user experience.",
    icon: Code2,
  },
  {
    title: "Branding & Identity",
    copy: "We help businesses build a strong brand presence through logo design, brand positioning, visual identity, messaging, brand guidelines, and creative communication systems.",
    icon: BadgeCheck,
  },
  {
    title: "Marketing Automation & Analytics",
    copy: "We use data, tracking, CRM workflows, automation, and campaign analytics to improve decision-making, reduce manual work, and make marketing performance easier to measure.",
    icon: BarChart3,
  },
];

export default function TechExpertiseSection() {
  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        <h2 className="mx-auto max-w-[900px] text-center text-[42px] font-normal leading-[1.28] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]">
          Deep Technical Expertise,
          <br />
          Supporting Modern Systems
        </h2>

        <div className="mt-20 grid gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-14 lg:gap-y-14">
          {EXPERTISE.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .expertise-card::before {
              content: "";
              position: absolute;
              inset: 0;
              border: 1px solid rgba(255, 255, 255, 0.32);
              border-radius: 18px;
              opacity: 0;
              transform: scale(0.94);
              transition:
                opacity 220ms ease,
                transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
              pointer-events: none;
            }

            .expertise-card:hover::before,
            .expertise-card:focus-within::before {
              opacity: 1;
              transform: scale(1);
            }

            .expertise-title {
              position: relative;
              display: inline-block;
            }

            .expertise-title::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: -7px;
              height: 1px;
              width: 0;
              background: rgba(255, 255, 255, 0.92);
              transition: width 480ms cubic-bezier(0.22, 1, 0.36, 1);
            }

            .expertise-card:hover .expertise-title::after,
            .expertise-card:focus-within .expertise-title::after {
              width: 100%;
            }
          `,
        }}
      />
    </section>
  );
}

function ExpertiseCard({ item }: { item: Expertise }) {
  const Icon = item.icon;

  return (
    <article className="expertise-card group relative min-h-[272px] rounded-[18px] transition-colors duration-300 hover:bg-white/1.5 focus-within:bg-white/1.5">
      <div className="relative z-10 px-7 py-8 lg:px-8 lg:py-9">
        <div className="relative mb-9 flex h-7 w-7 items-center justify-center text-white">
          <Icon
            className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(36,112,255,0.95)]"
            strokeWidth={1.8}
          />
          <span className="absolute ml-5 mt-3 h-2 w-2 rounded-full bg-[#1677ff] shadow-[0_0_12px_rgba(22,119,255,0.95)]" />
        </div>

        <h3 className="expertise-title text-[24px] font-semibold leading-tight text-white">
          {item.title}
        </h3>

        <p className="mt-8 text-[18px] font-medium leading-[1.45] text-white/45">
          {item.copy}
        </p>
      </div>
    </article>
  );
}