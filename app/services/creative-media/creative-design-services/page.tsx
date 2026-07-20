/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleGauge,
  Compass,
  FileSearch,
  ImageIcon,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PenTool,
  RefreshCcw,
  Rocket,
  ScanSearch,
  Shapes,
  Sparkles,
  Target,
  TimerReset,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Design Services | BrainADZ Marketing",
  description:
    "Creative design services by BrainADZ Marketing for campaigns, product launches, social media, brand communication, digital content and integrated marketing.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Creative System", href: "#creative-system" },
  { label: "Process", href: "#process" },
  { label: "Engagement", href: "#engagement" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Ideas with a clear purpose",
    description:
      "Build every concept around the audience, message and action the communication needs to create.",
    icon: Lightbulb,
  },
  {
    title: "One idea across formats",
    description:
      "Extend a strong master direction into social, digital, sales, print and campaign-ready adaptations.",
    icon: Layers3,
  },
  {
    title: "Stronger campaign recall",
    description:
      "Use distinctive visual language and storytelling to make important campaigns easier to recognize and remember.",
    icon: Sparkles,
  },
  {
    title: "Faster creative production",
    description:
      "Create an organized design system that supports recurring requirements without starting from zero each time.",
    icon: TimerReset,
  },
];

const CREATIVE_SOLUTIONS = [
  {
    title: "Campaign concept development",
    description:
      "Translate campaign objectives into a central creative idea that can guide messaging, visuals and execution across channels.",
    points: [
      "Campaign themes, hooks and visual territories",
      "Master creative direction and key visual",
      "Format planning for integrated rollout",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Product and service launches",
    description:
      "Create launch communication that introduces the offer clearly, builds interest and gives every channel a connected visual story.",
    points: [
      "Launch identity and announcement creatives",
      "Feature, benefit and comparison communication",
      "Pre-launch, launch-day and follow-up assets",
    ],
    icon: Rocket,
  },
  {
    title: "Social-first creative systems",
    description:
      "Develop flexible creative directions designed for the speed, variety and platform behavior of social media publishing.",
    points: [
      "Static, carousel, story and reel-cover systems",
      "Recurring series and monthly campaign themes",
      "Platform-specific adaptations and templates",
    ],
    icon: MonitorSmartphone,
  },
  {
    title: "Brand communication design",
    description:
      "Turn brand messages into consistent visual communication for marketing, sales, internal and customer-facing requirements.",
    points: [
      "Brand campaigns and awareness communication",
      "Corporate profiles, decks and sales material",
      "Employer-brand and internal campaigns",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Promotional and seasonal creatives",
    description:
      "Build high-attention creative systems for offers, festivals, events, exhibitions and time-sensitive marketing moments.",
    points: [
      "Offer campaigns and promotional graphics",
      "Festival and occasion-led visual themes",
      "Event, exhibition and activation creatives",
    ],
    icon: Megaphone,
  },
  {
    title: "Visual storytelling and explainers",
    description:
      "Simplify complex messages through structured layouts, visual sequencing, illustration and information-led design.",
    points: [
      "Infographics and process communication",
      "Illustrated explainers and visual narratives",
      "Data-led and educational content design",
    ],
    icon: BookOpenText,
  },
];

const CREATIVE_SYSTEM_LAYERS = [
  {
    number: "01",
    title: "Message architecture",
    description:
      "Define the single most important message, supporting proof points and the action the audience should take.",
    output: "Message hierarchy",
    icon: Target,
  },
  {
    number: "02",
    title: "Creative territory",
    description:
      "Explore visual routes, metaphors, references and storytelling approaches that can express the idea distinctively.",
    output: "Concept direction",
    icon: Compass,
  },
  {
    number: "03",
    title: "Art direction",
    description:
      "Set the typography, color behavior, imagery, composition, graphic language and overall emotional tone.",
    output: "Visual language",
    icon: Palette,
  },
  {
    number: "04",
    title: "Master creative",
    description:
      "Develop the key visual that becomes the reference point for every campaign asset and channel adaptation.",
    output: "Approved key visual",
    icon: WandSparkles,
  },
  {
    number: "05",
    title: "Format adaptation",
    description:
      "Translate the master direction into different dimensions and content formats without weakening the central idea.",
    output: "Campaign asset system",
    icon: LayoutTemplate,
  },
];

const CREATIVE_COVERAGE = [
  {
    category: "Campaign Creative",
    description:
      "Connected assets that carry one campaign idea across awareness, engagement and conversion-focused communication.",
    items: [
      "Key visuals",
      "Campaign banners",
      "Offer creatives",
      "Launch communication",
      "Retargeting assets",
      "Event promotion",
    ],
    icon: Megaphone,
  },
  {
    category: "Social Content Design",
    description:
      "Repeatable visual systems that give ongoing content variety while protecting brand consistency.",
    items: [
      "Static posts",
      "Carousel systems",
      "Story creatives",
      "Reel covers",
      "Content series",
      "Profile assets",
    ],
    icon: MonitorSmartphone,
  },
  {
    category: "Brand and Corporate",
    description:
      "Professional communication designed for brand building, sales conversations and stakeholder engagement.",
    items: [
      "Brand campaigns",
      "Company profiles",
      "Sales presentations",
      "Corporate reports",
      "Case studies",
      "Internal campaigns",
    ],
    icon: BriefcaseBusiness,
  },
  {
    category: "Content Visualisation",
    description:
      "Design that organizes information and makes complex subjects faster to understand and easier to remember.",
    items: [
      "Infographics",
      "Visual explainers",
      "Process graphics",
      "Data visualisation",
      "Illustrated content",
      "Educational assets",
    ],
    icon: ImageIcon,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover the communication challenge",
    description:
      "We review the objective, audience, offer, context, existing brand material, competitive landscape and practical production requirements.",
    timing: "Day 1",
    output: "Creative brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Find the central creative idea",
    description:
      "We identify the message angle and creative territory with the strongest potential to connect the campaign objective with audience interest.",
    timing: "Day 1-2",
    output: "Concept routes",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build the visual direction",
    description:
      "Typography, imagery, color, composition and graphic devices are combined into a clear art direction for review.",
    timing: "Project based",
    output: "Visual direction",
    icon: Shapes,
  },
  {
    number: "04",
    title: "Create the master design",
    description:
      "The selected direction is developed into a polished key visual with the right hierarchy, brand alignment and campaign flexibility.",
    timing: "Project based",
    output: "Master creative",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Adapt and produce",
    description:
      "The approved master is extended into the required platforms, dimensions, content variations and production formats.",
    timing: "Production cycle",
    output: "Complete asset set",
    icon: Blocks,
  },
  {
    number: "06",
    title: "Review and strengthen",
    description:
      "Feedback and campaign learning are used to refine the assets, improve clarity and strengthen future creative iterations.",
    timing: "Final review",
    output: "Approved delivery",
    icon: RefreshCcw,
  },
];

const ENGAGEMENT_MODELS = [
  {
    label: "Focused Project",
    title: "For a defined campaign or requirement",
    description:
      "Best for launches, seasonal campaigns, presentations, event communication or a specific set of creative deliverables.",
    features: [
      "Defined creative brief and timeline",
      "Agreed concept and asset scope",
      "Structured review and final delivery",
    ],
    icon: Target,
  },
  {
    label: "Creative Sprint",
    title: "For fast-moving campaign execution",
    description:
      "A concentrated creative cycle for brands that need a campaign idea, key visual and multiple adaptations within a short working window.",
    features: [
      "Rapid concept development",
      "Master creative plus adaptations",
      "Priority production workflow",
    ],
    icon: CircleGauge,
  },
  {
    label: "Monthly Creative Desk",
    title: "For recurring design requirements",
    description:
      "Ongoing creative support for social media, campaigns, sales material and regular brand communication across the month.",
    features: [
      "Monthly priority and asset planning",
      "Consistent visual governance",
      "Flexible ongoing production support",
    ],
    icon: Layers3,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Strategy before decoration",
    description:
      "Creative decisions are linked to the message, audience and business purpose rather than appearance alone.",
    icon: ScanSearch,
  },
  {
    title: "Ideas built to scale",
    description:
      "Master directions are designed to work across multiple formats, channels and campaign stages.",
    icon: Layers3,
  },
  {
    title: "Marketing-aware execution",
    description:
      "Our design approach considers platform behavior, campaign timing, production realities and content performance.",
    icon: CircleGauge,
  },
  {
    title: "Reliable production quality",
    description:
      "Every approved asset is checked for consistency, dimensions, hierarchy and final-use requirements.",
    icon: BadgeCheck,
  },
];

const WORK_ITEMS = [
  {
    title: "Integrated campaign creative",
    category: "Campaign and Digital",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Integrated campaign creative designed by BrainADZ",
  },
  {
    title: "Social-first visual system",
    category: "Social Content",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Social-first creative system developed by BrainADZ",
  },
  {
    title: "Brand communication series",
    category: "Brand and Marketing",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Brand communication design series created by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in creative design services?",
    answer:
      "Creative design services can include concept development, campaign themes, message hierarchy, art direction, key visual creation, social and digital adaptations, visual storytelling and final production files. The exact scope is finalized around the communication objective and required channels.",
  },
  {
    question: "How is creative design different from regular graphic design?",
    answer:
      "Graphic design often focuses on producing a defined visual asset, while creative design also develops the central idea, storytelling approach and visual direction behind a campaign. A creative design engagement can therefore begin before the layout stage and guide multiple deliverables through one connected concept.",
  },
  {
    question: "Can you develop a complete campaign concept?",
    answer:
      "Yes. We can develop the campaign theme, communication angle, key message, visual territory, master creative and channel adaptations. Copywriting, campaign planning, motion assets or production support can also be coordinated when included in the scope.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Yes. We can create new campaign ideas within an established brand system, including existing typography, colors, imagery and design rules. When guidelines allow flexibility, we can also introduce campaign-specific devices without weakening brand recognition.",
  },
  {
    question: "Do you create one master design for multiple platforms?",
    answer:
      "Yes. We usually establish a master creative or key visual first, then adapt it to the dimensions, content hierarchy and behavior of each required platform. This keeps the campaign connected while avoiding simple resizing that ignores format differences.",
  },
  {
    question: "How many creative concepts do you present?",
    answer:
      "The number of routes depends on the scope, complexity and agreed process. Some assignments need one focused direction developed from a clear brief, while larger campaigns may include multiple concept territories before one route is selected for development.",
  },
  {
    question: "Can you support recurring monthly creative needs?",
    answer:
      "Yes. The monthly creative desk model supports recurring social, campaign, sales and brand communication requirements. Priorities, expected volumes, review cycles and delivery rhythm are defined at the beginning of the engagement.",
  },
  {
    question: "What files are delivered after approval?",
    answer:
      "Final assets can be supplied as JPG, PNG, PDF or other required publishing formats. Editable source files, print-ready files or organized campaign packages can be included when specified in the project scope.",
  },
];

export default function CreativeDesignServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ creative design and campaign team workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.80)_32%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.30)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link
              href="/"
              className="text-[#E1122B] transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Creative Design Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Creative Design Services
          </h1>

          <div className="mt-auto max-w-[780px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build campaign ideas, visual stories and adaptable creative systems
              that make your brand communication more distinctive, connected and
              effective across every format.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start a creative project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Creative design page navigation"
          className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10"
        >
          <div className="flex min-h-20 min-w-max items-center">
            {PAGE_NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex h-16 shrink-0 items-center border-b-2 px-4 text-[14px] font-medium transition-colors hover:text-[#E1122B] focus-visible:outline-none sm:px-5 sm:text-[15px] ${
                  index === 0
                    ? "border-[#E1122B] text-[#E1122B]"
                    : "border-transparent text-black/65"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/contact"
              className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B] sm:px-7"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Overview */}
      <section
        id="overview"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Move beyond isolated designs with one connected creative idea
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Creative design starts before the layout. It identifies what the
                brand needs to communicate, finds an idea people can understand
                and builds a visual direction strong enough to work across
                multiple campaign assets.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                BrainADZ combines campaign thinking, art direction, graphic
                design and production planning to turn business messages into
                creative systems that remain consistent without becoming
                repetitive.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your creative brief
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Creative campaign design work by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected creative communication work by BrainADZ
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {OVERVIEW_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[16px] font-semibold leading-6 text-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-black/58">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative solutions */}
      <section
        id="solutions"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative Solutions
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Creative support shaped around the communication challenge
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The right creative solution depends on what the audience needs to
              notice, understand, feel or do. We build the scope around that
              outcome instead of forcing every brief into the same format.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_SOLUTIONS.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-black">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {solution.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {solution.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative system */}
      <section
        id="creative-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative System
                </p>
              </div>
              <h2 className="mt-5 max-w-[900px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                From one message to a complete visual campaign language
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Strong campaigns are not a collection of unrelated layouts. They
              use a defined message, creative territory and master visual system
              that can flex across formats while remaining instantly connected.
            </p>
          </div>

          <div className="mt-12 border-t border-white/15">
            {CREATIVE_SYSTEM_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between gap-5 sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {layer.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
                      {layer.title}
                    </h3>
                    <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-white/58 sm:text-[15px]">
                      {layer.description}
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/40">
                      Output
                    </p>
                    <p className="mt-2 text-[14px] leading-6 text-white/70">
                      {layer.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative coverage */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Creative Coverage
            </p>
          </div>

          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Creative formats for campaigns, content and brand communication
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CREATIVE_COVERAGE.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.category}
                  className="grid gap-6 rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition-colors hover:border-[#E1122B]/35 hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                      {group.category}
                    </h3>
                    <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {group.description}
                    </p>

                    <ul className="mt-6 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                            strokeWidth={1.8}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A clear route from business brief to campaign-ready assets
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow protects the strength of the central idea while
              keeping review, adaptation and production practical for real
              campaign timelines.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your creative workflow
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between gap-5 sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div>
                      <dt className="text-[12px] font-medium uppercase text-black/42">
                        Timing
                      </dt>
                      <dd className="mt-2 text-[14px] leading-6 text-black/68">
                        {step.timing}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-medium uppercase text-black/42">
                        Output
                      </dt>
                      <dd className="mt-2 text-[14px] leading-6 text-black/68">
                        {step.output}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section
        id="engagement"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Engagement Models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1000px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right creative setup for the way your team works
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Choose a focused project, rapid campaign sprint or ongoing monthly
              support depending on the volume, speed and continuity your brand
              requires.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.label}
                  className={`rounded-[14px] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                    index === 1
                      ? "border-[#E1122B] bg-[#fff8f8] shadow-[0_20px_60px_rgba(225,18,43,0.10)]"
                      : "border-black/10 bg-[#fbfbfb] hover:border-[#E1122B]/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.20)]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <span className="rounded-full border border-[#E1122B]/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E1122B]">
                      {model.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[24px] font-semibold leading-tight text-black">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {model.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {model.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BrainADZ */}
      <section className="border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Why BrainADZ
                </p>
              </div>
              <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Creative thinking supported by dependable execution
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Our creative, content and marketing teams work together so the
              concept is not only visually strong, but also practical to approve,
              adapt, publish and build upon.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {WHY_BRAINADZ.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-[#E1122B]/60 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-[18px] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Selected Work
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Creative systems built for real brand communication
              </h2>
            </div>

            <p className="max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace the temporary image paths below with campaign, launch and
              creative-system projects from the BrainADZ portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#f3f3f3]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold leading-tight text-black">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Questions before starting a creative project?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about concepts, campaign systems, adaptations,
              revisions and ongoing creative support.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Ask another question
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-black/10"
                open={index === 0}
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-black/55 transition-transform duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                    strokeWidth={1.7}
                  />
                </summary>

                <div className="px-1 pb-7 sm:px-4">
                  <p className="max-w-[860px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
