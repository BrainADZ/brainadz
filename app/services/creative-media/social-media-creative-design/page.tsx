/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarRange,
  Check,
  ChevronDown,
  ClipboardCheck,
  CopyCheck,
  FileArchive,
  FileSearch,
  GalleryHorizontalEnd,
  Gauge,
  ImageIcon,
  Images,
  LayoutGrid,
  Layers3,
  Megaphone,
  MessageCircleMore,
  MonitorPlay,
  Palette,
  PanelTop,
  PenTool,
  RefreshCcw,
  Repeat2,
  ScanSearch,
  Smartphone,
  Sparkles,
  SquarePlay,
  Target,
  ThumbsUp,
  Users,
  Video,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Creative Design Services | BrainADZ Marketing",
  description:
    "Social media creative design services by BrainADZ Marketing for posts, carousels, stories, reel covers, campaign creatives and platform-ready content systems.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Creative Services", href: "#creative-services" },
  { label: "Content System", href: "#content-system" },
  { label: "Formats", href: "#formats" },
  { label: "Workflow", href: "#workflow" },
  { label: "Quality", href: "#quality" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "A recognizable social presence",
    description:
      "Build a consistent visual language that makes your content easier to identify across crowded social feeds.",
    icon: Sparkles,
  },
  {
    title: "Faster monthly execution",
    description:
      "Use reusable content systems, templates and approval-ready formats to move from brief to publishing with less friction.",
    icon: Gauge,
  },
  {
    title: "Creatives shaped for engagement",
    description:
      "Structure visual hierarchy, hooks and content flow around the way audiences consume posts, carousels, stories and reels.",
    icon: ThumbsUp,
  },
  {
    title: "Campaign consistency at scale",
    description:
      "Adapt one campaign idea across multiple platforms, placements and sizes without losing its core visual identity.",
    icon: Layers3,
  },
];

const CREATIVE_SERVICES = [
  {
    title: "Static post design",
    description:
      "Clear, scroll-stopping single-image creatives for brand communication, product highlights, offers, events and announcements.",
    points: [
      "Brand-led visual hierarchy",
      "Product, service and campaign posts",
      "Platform-ready export sizes",
    ],
    icon: ImageIcon,
  },
  {
    title: "Carousel design",
    description:
      "Multi-slide narratives that simplify ideas, sustain attention and guide audiences through a structured message.",
    points: [
      "Strong opening-slide hooks",
      "Connected slide-to-slide storytelling",
      "Educational, promotional and case-study formats",
    ],
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Story creative design",
    description:
      "Fast, vertical communication designed for announcements, offers, polls, reminders, launches and timely updates.",
    points: [
      "9:16 story layouts",
      "Interactive-content visual support",
      "Campaign and daily-story variations",
    ],
    icon: Smartphone,
  },
  {
    title: "Reel covers and video graphics",
    description:
      "Consistent covers, title cards, lower thirds and supporting screens that improve the presentation of short-form video content.",
    points: [
      "Reel and short-video covers",
      "Opening, transition and end frames",
      "On-screen text and graphic overlays",
    ],
    icon: SquarePlay,
  },
  {
    title: "Campaign creative adaptation",
    description:
      "Extend a master campaign visual into the required social formats while protecting clarity, hierarchy and brand consistency.",
    points: [
      "Master creative development",
      "Platform and placement adaptations",
      "Offer, audience and language variations",
    ],
    icon: Repeat2,
  },
  {
    title: "Content-series design systems",
    description:
      "Create repeatable visual formats for recurring topics so teams can publish consistently without making every post look identical.",
    points: [
      "Series identity and layout rules",
      "Reusable branded templates",
      "Flexible content and image zones",
    ],
    icon: LayoutGrid,
  },
];

const CONTENT_SYSTEM_STEPS = [
  {
    number: "01",
    title: "Brand visual foundation",
    description:
      "Translate existing brand guidelines into a social-first visual language with practical rules for typography, color, imagery and graphic elements.",
    output: "Social visual direction",
    icon: Palette,
  },
  {
    number: "02",
    title: "Content hierarchy",
    description:
      "Define how hooks, headlines, support copy, calls to action and visual proof should be prioritized across different post formats.",
    output: "Layout hierarchy rules",
    icon: PanelTop,
  },
  {
    number: "03",
    title: "Content pillars and series",
    description:
      "Give recurring themes their own recognizable treatment while maintaining one connected identity across the complete feed.",
    output: "Series design framework",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Template architecture",
    description:
      "Build flexible layouts for common content needs so production becomes faster without making the creative feel repetitive.",
    output: "Reusable template library",
    icon: CopyCheck,
  },
  {
    number: "05",
    title: "Campaign adaptation rules",
    description:
      "Establish how major campaign ideas translate into posts, stories, covers and paid placements across different social channels.",
    output: "Multi-format campaign system",
    icon: Megaphone,
  },
];

const FORMAT_GROUPS = [
  {
    title: "Organic Feed Content",
    description:
      "Everyday and campaign-led creatives designed to maintain consistency while supporting different communication goals.",
    items: [
      "Single-image posts",
      "Educational carousels",
      "Product and service posts",
      "Testimonials and case studies",
      "Festival and occasion creatives",
      "Announcements and event posts",
    ],
    icon: Images,
  },
  {
    title: "Vertical Social Content",
    description:
      "Mobile-first 9:16 assets for fast consumption, timely communication and stronger short-form content presentation.",
    items: [
      "Stories and status creatives",
      "Reel and Shorts covers",
      "Video title and end frames",
      "Offer and reminder stories",
      "Poll and question backgrounds",
      "Vertical campaign adaptations",
    ],
    icon: Smartphone,
  },
  {
    title: "Paid Social Creatives",
    description:
      "Performance-focused variants that communicate the value proposition quickly and support structured testing.",
    items: [
      "Lead-generation creatives",
      "Traffic and conversion ads",
      "Offer and retargeting visuals",
      "Audience-specific variations",
      "Headline and CTA variants",
      "Placement-specific resizes",
    ],
    icon: Target,
  },
  {
    title: "Profile and Channel Assets",
    description:
      "Branded visual elements that improve the overall presentation and consistency of social profiles and channels.",
    items: [
      "Profile and cover graphics",
      "Highlight cover systems",
      "Pinned-post creatives",
      "YouTube channel artwork",
      "LinkedIn banner design",
      "Launch and campaign grids",
    ],
    icon: MonitorPlay,
  },
];

const PLATFORM_APPROACH = [
  {
    platform: "Instagram",
    role: "Discovery and engagement",
    formats: "Posts, carousels, stories, reel covers and campaign grids",
  },
  {
    platform: "Facebook",
    role: "Community and campaign communication",
    formats: "Feed posts, offers, event creatives, stories and ad variations",
  },
  {
    platform: "LinkedIn",
    role: "Professional authority and B2B communication",
    formats: "Thought-leadership carousels, corporate posts, banners and case studies",
  },
  {
    platform: "YouTube",
    role: "Video discovery and channel presentation",
    formats: "Thumbnails, channel graphics, covers, title cards and end screens",
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Review the brand and content requirement",
    description:
      "We understand the brand rules, target audience, platforms, monthly priorities, campaigns, content themes and internal approval process.",
    timing: "Input stage",
    output: "Creative brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the visual direction",
    description:
      "References, design cues, hierarchy and format requirements are organized into a clear direction before recurring production begins.",
    timing: "Direction stage",
    output: "Visual approach",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Design the priority creatives",
    description:
      "The team develops the key posts, carousel structures, stories, campaign visuals and supporting assets according to the approved plan.",
    timing: "Creation stage",
    output: "First design set",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Review and refine",
    description:
      "Feedback is consolidated into a controlled revision cycle so changes remain clear and the complete content set stays visually aligned.",
    timing: "Review stage",
    output: "Approved creatives",
    icon: RefreshCcw,
  },
  {
    number: "05",
    title: "Adapt and prepare outputs",
    description:
      "Approved master designs are resized, reformatted and quality-checked for each platform, placement and publishing requirement.",
    timing: "Adaptation stage",
    output: "Platform-ready files",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Organize and hand over",
    description:
      "Final files are named, grouped and delivered according to the content calendar so publishing teams can locate and use them quickly.",
    timing: "Delivery stage",
    output: "Organized creative package",
    icon: FileArchive,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Platform-safe composition",
    description:
      "Important text, products and calls to action are positioned to remain visible around interface overlays, crops and mobile previews.",
    icon: Smartphone,
  },
  {
    title: "Consistent brand execution",
    description:
      "Colors, typography, graphic devices and imagery are reviewed against the approved social design system before delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Readable content hierarchy",
    description:
      "Headlines, proof points and CTAs are balanced for fast scanning instead of forcing too much information into one creative.",
    icon: MessageCircleMore,
  },
  {
    title: "Correct output preparation",
    description:
      "Dimensions, file formats, image quality and naming conventions are checked for the intended social channel and publishing workflow.",
    icon: ClipboardCheck,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Design connected to content strategy",
    description:
      "Creative decisions are shaped by the message, format, audience and campaign objective rather than decoration alone.",
    icon: CalendarRange,
  },
  {
    title: "Built for real social workflows",
    description:
      "Layouts account for frequent publishing, fast updates, approvals, resizes and the practical needs of internal marketing teams.",
    icon: Users,
  },
  {
    title: "One system across many formats",
    description:
      "Posts, carousels, stories, covers and ads remain connected without becoming repetitive or visually rigid.",
    icon: Layers3,
  },
  {
    title: "Creative support that can scale",
    description:
      "The scope can support individual campaigns, monthly content requirements or high-volume multi-brand production.",
    icon: WandSparkles,
  },
];

const WORK_ITEMS = [
  {
    title: "Branded social content system",
    category: "Monthly Content Design",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Branded social media content system designed by BrainADZ",
  },
  {
    title: "Campaign carousel and post series",
    category: "Campaign Creatives",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Social campaign carousel and post designs created by BrainADZ",
  },
  {
    title: "Multi-format platform adaptations",
    category: "Social Creative Adaptation",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Multi-format social media creatives designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in social media creative design services?",
    answer:
      "The scope can include static posts, carousels, stories, reel covers, video support graphics, campaign adaptations, paid-social creatives, profile assets and reusable template systems. The final mix depends on your platforms, publishing volume, campaign plan and internal content workflow.",
  },
  {
    question: "Do you also write the content and captions?",
    answer:
      "Creative design can be provided from client-approved copy, or the scope can include content planning and copywriting support. When copy is included, headlines, slide flow, on-creative text and calls to action are developed together with the visual concept.",
  },
  {
    question: "Can you follow our existing brand guidelines?",
    answer:
      "Yes. Existing logo, color, typography, imagery and layout rules are reviewed before design begins. We can work strictly within established guidelines or develop a social-first extension when the current system does not cover recurring digital content needs.",
  },
  {
    question: "Do you design monthly social media content packages?",
    answer:
      "Yes. Monthly production can be organized around an approved calendar, content pillars and defined format mix. The workflow can include batches of posts, carousels, stories, covers and campaign adaptations with a scheduled review and delivery cycle.",
  },
  {
    question: "Can you resize one creative for multiple platforms?",
    answer:
      "Yes. A master creative can be adapted for different aspect ratios, placements and channels. Adaptation is more than automatic resizing: hierarchy, cropping, text scale and interface-safe areas are adjusted so the message remains clear in each format.",
  },
  {
    question: "Do you provide editable source files?",
    answer:
      "Editable files can be included when agreed in the project scope. The format depends on the software and template requirements. Final publishing files are normally delivered in optimized image or document formats, with organized naming for easy use by the publishing team.",
  },
  {
    question: "How are revisions handled?",
    answer:
      "Feedback is collected in consolidated review rounds against the approved brief and direction. This keeps revisions efficient and prevents conflicting changes across a complete content set. The number of rounds and turnaround expectations are defined before production starts.",
  },
  {
    question: "Can you create ad creatives for testing different messages?",
    answer:
      "Yes. Paid-social creative sets can include variations in headline, offer, visual, proof point, call to action, audience angle and format. The testing matrix should be planned with the media objective so the variations produce useful performance learning rather than cosmetic differences.",
  },
];

export default function SocialMediaCreativeDesignPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ social media creative design team workspace"
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
            <span className="text-white">Social Media Creative Design</span>
          </nav>

          <h1 className="mt-7 max-w-[1080px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Social Media Creative Design
          </h1>

          <div className="mt-auto max-w-[850px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build a consistent, platform-ready visual presence with social
              posts, carousels, stories, reel covers and campaign creatives
              designed to stop the scroll and communicate clearly.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your social creatives
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Social media creative design page navigation"
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

          <h2 className="mt-5 max-w-[1200px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn every content idea into a stronger visual experience
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Social media creative design is not only about making individual
                posts look attractive. BrainADZ builds connected visual systems
                that support content strategy, campaign communication, audience
                attention and consistent publishing across platforms.
              </p>

              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From one-off campaigns to complete monthly content requirements,
                every creative is structured around the message, format,
                platform behavior and brand identity.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your content requirement
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Social media creative design and content system by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected social media creative work by BrainADZ
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

      {/* Creative services */}
      <section
        id="creative-services"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Creative support for every recurring social content need
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The service mix can be focused on a single campaign, monthly
              content production or a broader social design system supporting
              multiple brands and channels.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {service.points.map((point) => (
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

      {/* Content system */}
      <section
        id="content-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Content System
                </p>
              </div>
              <h2 className="mt-5 max-w-[930px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                One visual system that keeps every post connected
              </h2>
            </div>

            <p className="max-w-[700px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              A social design system creates enough consistency to strengthen
              recognition and enough flexibility to support different content
              themes, campaigns, products and audience needs.
            </p>
          </div>

          <div className="mt-12 border-t border-white/15">
            {CONTENT_SYSTEM_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_240px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between gap-5 sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[780px] text-[14px] leading-7 text-white/58 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/40">
                      Output
                    </p>
                    <p className="mt-2 text-[14px] leading-6 text-white/70">
                      {step.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section
        id="formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Formats and Channels
            </p>
          </div>

          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Designed around the content format and the platform behavior
          </h2>

          <p className="mt-6 max-w-[850px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            Each format has a different role, information limit and viewing
            pattern. The creative approach changes accordingly while preserving
            one recognizable brand experience.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {FORMAT_GROUPS.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                        {group.title}
                      </h3>
                      <p className="mt-3 max-w-[700px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
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
                </article>
              );
            })}
          </div>

          <div className="mt-14 overflow-hidden rounded-[14px] border border-black/10 bg-black text-white shadow-[0_18px_55px_rgba(0,0,0,0.09)]">
            <div className="grid border-b border-white/15 px-6 py-6 sm:grid-cols-[0.65fr_0.8fr_1.55fr] sm:px-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                Platform
              </p>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:mt-0">
                Primary Role
              </p>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:mt-0">
                Typical Formats
              </p>
            </div>

            {PLATFORM_APPROACH.map((item) => (
              <article
                key={item.platform}
                className="grid gap-2 border-b border-white/15 px-6 py-6 last:border-b-0 sm:grid-cols-[0.65fr_0.8fr_1.55fr] sm:gap-6 sm:px-8"
              >
                <h3 className="text-[18px] font-semibold text-white">
                  {item.platform}
                </h3>
                <p className="text-[14px] leading-6 text-white/62">{item.role}</p>
                <p className="text-[14px] leading-6 text-white/72">
                  {item.formats}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Workflow
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A clear creative cycle from brief to publishing-ready files
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow keeps content volume manageable, feedback organized
              and every final asset aligned with the approved direction and
              publishing schedule.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your creative workflow
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {WORKFLOW_STEPS.map((step) => {
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
                        Stage
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

      {/* Quality */}
      <section
        id="quality"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative Quality
                </p>
              </div>
              <h2 className="mt-5 max-w-[860px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Designed to look right and work correctly on social platforms
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Every asset is reviewed for visual consistency, message clarity,
              interface-safe composition and the technical requirements of the
              intended placement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {QUALITY_CONTROLS.map((control) => {
              const Icon = control.icon;

              return (
                <article
                  key={control.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-semibold leading-7 text-black">
                    {control.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {control.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 grid gap-5 border-t border-black/10 pt-10 sm:grid-cols-2 xl:grid-cols-4">
            {WHY_BRAINADZ.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="p-1">
                  <Icon className="h-7 w-7 text-[#E1122B]" strokeWidth={1.6} />
                  <h3 className="mt-5 text-[18px] font-semibold leading-7 text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Selected Work
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Social creatives built for consistency, clarity and attention
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace the temporary portfolio paths below with the most relevant
              social media design projects for this service page.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#f1f1f1]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-[21px] font-semibold leading-tight text-black">
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
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
              Questions about social media creative design?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about formats, monthly production, brand
              consistency, revisions and final file delivery.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
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