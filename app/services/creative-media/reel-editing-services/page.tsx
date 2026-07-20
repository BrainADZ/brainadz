/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  Check,
  ChevronDown,
  CirclePlay,
  Clapperboard,
  FileArchive,
  FileCheck2,
  FileSearch,
  Film,
  Gauge,
  ImagePlay,
  Layers3,
  MessageSquareText,
  Music2,
  PanelsTopLeft,
  Play,
  Ratio,
  RefreshCcw,
  ScanSearch,
  Smartphone,
  SquarePlay,
  Target,
  TextCursorInput,
  TimerReset,
  WandSparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reel Reel Editing Services | BrainADZ Marketing",
  description:
    "Professional Reel editing services by BrainADZ Marketing for product Reels, founder videos, educational content, campaign creatives, trend adaptations and monthly social media publishing.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Reel Services", href: "#editing-services" },
  { label: "Editing System", href: "#retention-system" },
  { label: "Reel Formats", href: "#formats" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Scroll-stopping openings",
    description:
      "Start every Reel with a clear visual or message that earns attention before the viewer scrolls away.",
    icon: Zap,
  },
  {
    title: "Stronger viewing flow",
    description:
      "Shape cuts, pauses, B-roll and on-screen movement so the Reel stays active without becoming visually noisy.",
    icon: Gauge,
  },
  {
    title: "Consistent brand style",
    description:
      "Use repeatable captions, graphics, covers and end frames that make every Reel recognizable as part of one brand.",
    icon: PanelsTopLeft,
  },
  {
    title: "Reliable reel production",
    description:
      "Turn planned shoots and existing footage into an organized pipeline of publishing-ready Reels each month.",
    icon: RefreshCcw,
  },
];

const EDITING_SERVICES = [
  {
    title: "Product Reels",
    description:
      "Fast, benefit-led edits that show product details, use cases, demonstrations, comparisons and clear reasons to choose.",
    points: [
      "Feature and benefit callouts",
      "Product close-ups and motion",
      "Offer and CTA end frames",
    ],
    icon: ImagePlay,
  },
  {
    title: "Educational and explainer Reels",
    description:
      "Structured short videos that turn useful information, tips and complex topics into clear mobile-first content.",
    points: [
      "Topic-led opening hooks",
      "Step-by-step visual support",
      "Readable captions and key points",
    ],
    icon: FileSearch,
  },
  {
    title: "Founder and talking-head Reels",
    description:
      "Confident expert-led edits with tightened dialogue, B-roll, punch-ins and branded visual emphasis.",
    points: [
      "Pause and filler-word reduction",
      "Jump cuts and visual variation",
      "Insight captions and callouts",
    ],
    icon: CirclePlay,
  },
  {
    title: "Trend-adapted Reels",
    description:
      "Use relevant formats, audio patterns and editing structures while keeping the final Reel aligned with the brand message.",
    points: [
      "Trend format adaptation",
      "Brand-safe creative execution",
      "Original product or service angle",
    ],
    icon: WandSparkles,
  },
  {
    title: "Event and behind-the-scenes Reels",
    description:
      "Turn launches, exhibitions, office moments, shoots and events into energetic recap and culture-led content.",
    points: [
      "Highlight and moment selection",
      "Beat-synced montage editing",
      "Event branding and closing frames",
    ],
    icon: Clapperboard,
  },
  {
    title: "Performance ad Reels",
    description:
      "Conversion-focused vertical edits built around a strong hook, visible proof, offer clarity and campaign CTA.",
    points: [
      "Multiple opening-hook versions",
      "Product proof and benefit emphasis",
      "Placement-safe campaign exports",
    ],
    icon: Target,
  },
];

const RETENTION_STEPS = [
  {
    number: "01",
    title: "Define the first-frame promise",
    description:
      "Open with the result, problem, statement or visual that immediately tells viewers why the next few seconds are worth watching.",
    output: "Hook and opening frame",
    icon: Zap,
  },
  {
    number: "02",
    title: "Arrange the core story beats",
    description:
      "Build a simple sequence around one idea so the Reel progresses clearly instead of feeling like disconnected footage and effects.",
    output: "Reel narrative structure",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Create purposeful visual change",
    description:
      "Use B-roll, punch-ins, angle changes, speed control and transitions only where they improve pace or make the message easier to follow.",
    output: "Pacing and pattern interrupts",
    icon: TimerReset,
  },
  {
    number: "04",
    title: "Add captions and brand cues",
    description:
      "Support silent viewing with accurate captions, text hierarchy, logo use, colors and graphic treatments consistent with the brand.",
    output: "Caption and graphic system",
    icon: TextCursorInput,
  },
  {
    number: "05",
    title: "Close with a loop or next action",
    description:
      "Finish with a useful conclusion, seamless loop, product reminder or CTA that feels connected to the Reel rather than added afterward.",
    output: "Ending, loop and CTA",
    icon: Target,
  },
];

const PLATFORM_FORMATS = [
  {
    title: "Brand and Educational Reels",
    description:
      "Useful, repeatable Reel formats for tips, explainers, FAQs, myths, industry insights and brand-led content series.",
    items: [
      "Educational talking-head edits",
      "List and step-based Reels",
      "Myth-versus-fact formats",
      "FAQ and problem-solution videos",
      "Series covers and numbering",
      "Instagram and Facebook versions",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Product and E-commerce Reels",
    description:
      "Visual product stories that make features, benefits, use cases, transformations and offers easy to understand quickly.",
    items: [
      "Product reveal and showcase edits",
      "Feature demonstration Reels",
      "Before-and-after sequences",
      "Comparison and benefit formats",
      "Offer and campaign variations",
      "Product-focused CTA frames",
    ],
    icon: ImagePlay,
  },
  {
    title: "Founder and Expert Reels",
    description:
      "Credible face-led content for opinions, business lessons, customer education, leadership communication and personal branding.",
    items: [
      "Founder insight clips",
      "Podcast and interview excerpts",
      "Expert advice series",
      "Case-study storytelling",
      "B-roll and text emphasis",
      "Clean professional styling",
    ],
    icon: CirclePlay,
  },
  {
    title: "Campaign and Ad Reels",
    description:
      "High-impact vertical videos for launches, promotions, lead generation, retargeting and performance marketing campaigns.",
    items: [
      "Hook-testing variations",
      "Problem-solution ad formats",
      "Offer and urgency edits",
      "UGC-style campaign structures",
      "Meta placement-safe framing",
      "Multiple CTA treatments",
    ],
    icon: Target,
  },
];

const REPURPOSING_WORKFLOW = [
  {
    title: "Map monthly reel themes",
    description:
      "Define useful content pillars, campaign priorities and repeatable Reel formats before footage and editing start moving.",
    icon: FileSearch,
  },
  {
    title: "Plan batch-ready footage",
    description:
      "Organize scripts, shot lists, products, B-roll and talking points so one shoot can support multiple Reel concepts.",
    icon: ScanSearch,
  },
  {
    title: "Use consistent edit systems",
    description:
      "Build approved caption styles, covers, transitions, audio treatment and end frames that reduce inconsistency across the month.",
    icon: Layers3,
  },
  {
    title: "Deliver calendar-ready files",
    description:
      "Export, name and organize final Reels with covers and variants so the social team can review, approve and publish efficiently.",
    icon: FileArchive,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Align the Reel objective",
    description:
      "We review the audience, platform, business goal, footage, script, references and publishing frequency before editing starts.",
    timing: "Project start",
    output: "Reel brief and direction",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Select footage and hooks",
    description:
      "The strongest statements, product shots, moments and supporting visuals are mapped into a clear short-form sequence.",
    timing: "Pre-edit",
    output: "Selects and hook map",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Build the first Reel cut",
    description:
      "We tighten the footage, establish rhythm, position B-roll and create the first complete story from opening to final action.",
    timing: "Editing",
    output: "First-cut Reel",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Add captions, graphics and sound",
    description:
      "Branded captions, visual emphasis, transitions, music, sound effects, logos and CTA elements are applied to the approved direction.",
    timing: "Creative finishing",
    output: "Branded Reel edit",
    icon: AudioLines,
  },
  {
    number: "05",
    title: "Review and refine",
    description:
      "Consolidated feedback is applied to pacing, messaging, caption accuracy, graphic treatment, sound and final-frame details.",
    timing: "Revision cycle",
    output: "Approved master Reel",
    icon: MessageSquareText,
  },
  {
    number: "06",
    title: "Export and organize versions",
    description:
      "Final Reels, covers and agreed variants are checked, named and delivered in the required format for publishing or campaigns.",
    timing: "Final delivery",
    output: "Publishing-ready files",
    icon: FileCheck2,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "First-frame clarity",
    description:
      "The opening visual and message are checked at mobile size to ensure the Reel starts with immediate context.",
    icon: Zap,
  },
  {
    title: "Safe-zone framing",
    description:
      "Faces, products, captions, logos and CTAs remain clear of common Reel interface overlays and crop risks.",
    icon: Smartphone,
  },
  {
    title: "Caption readability",
    description:
      "Spelling, timing, contrast, line breaks and text density are reviewed for comfortable silent viewing.",
    icon: TextCursorInput,
  },
  {
    title: "Sound and export checks",
    description:
      "Dialogue, music, effects, frame rate, resolution, duration and final file settings are verified before delivery.",
    icon: FileArchive,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Brand-led, not template-led",
    description:
      "Reels use repeatable systems without forcing every client into the same captions, transitions or visual personality.",
    icon: PanelsTopLeft,
  },
  {
    title: "Trend-aware execution",
    description:
      "Relevant formats are adapted selectively so the content feels current without losing clarity or long-term brand consistency.",
    icon: WandSparkles,
  },
  {
    title: "Organized feedback cycles",
    description:
      "Clear review stages and consolidated comments help multiple Reels move together without repeated confusion or version loss.",
    icon: Gauge,
  },
  {
    title: "Scalable monthly systems",
    description:
      "Approved covers, caption styles, end frames and file structures support consistent output as the Reel volume increases.",
    icon: Layers3,
  },
];

const WORK_ITEMS = [
  {
    title: "Product and Demonstration Reels",
    category: "Product reel editing",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Product Reel editing and demonstration content by BrainADZ",
  },
  {
    title: "Founder and Expert Reels",
    category: "Talking-head reel editing",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Founder and expert Reel editing by BrainADZ",
  },
  {
    title: "Campaign and Lifestyle Reels",
    category: "Branded campaign reels",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Campaign and lifestyle Reel editing by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in your Reel editing service?",
    answer:
      "The scope can include footage review, clip selection, hook development, trimming, pacing, B-roll, captions, transitions, music, sound effects, branded graphics, cover design, CTA frames and final Reel exports. The exact mix depends on the content objective and source material.",
  },
  {
    question: "Can you edit Reels from raw mobile footage?",
    answer:
      "Yes. Mobile footage can work well when it is clearly recorded, properly lit and supported by usable audio. We review the files first and recommend an edit direction that matches the available quality and coverage.",
  },
  {
    question: "Do you edit talking-head and founder Reels?",
    answer:
      "Yes. We can tighten dialogue, remove unnecessary pauses, add jump cuts, B-roll, punch-ins, captions and brand graphics while keeping the delivery natural and credible.",
  },
  {
    question: "Can you create product and promotional Reels?",
    answer:
      "Yes. Product Reels can include feature demonstrations, close-ups, benefit callouts, comparisons, offer messaging, campaign variations and CTA end frames using footage supplied by your team or created through an agreed production scope.",
  },
  {
    question: "Do you follow trending Reel formats and audio?",
    answer:
      "We can adapt relevant formats and audio patterns when they suit the brand and campaign. Trend use is selective because clarity, legal usage, audience relevance and brand consistency remain more important than copying every popular format.",
  },
  {
    question: "Can you manage a monthly volume of Reels?",
    answer:
      "Yes. For ongoing production, we can create a structured workflow covering content themes, batch footage, approved edit styles, review cycles, covers, file naming and calendar-ready delivery. The monthly volume is finalized according to footage and complexity.",
  },
  {
    question: "Do you add captions, music and sound effects?",
    answer:
      "Yes. Caption styling, music, sound effects and basic audio balancing can be included. Licensed music, custom voice-over, advanced sound restoration or original audio production are scoped separately when required.",
  },
  {
    question: "Can one Reel be adapted for Facebook or ads?",
    answer:
      "Yes. A master Reel can be adapted for Instagram, Facebook and compatible Meta ad placements. Hook, duration, CTA, safe-zone and offer variations can also be prepared when included in the campaign scope.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The number of revision rounds is agreed before work begins. Consolidated feedback is recommended so messaging, pacing and visual changes remain clear across every Reel and version.",
  },
  {
    question: "Will I receive editable project files?",
    answer:
      "Editable project files can be included when agreed in advance and when third-party assets, fonts or plugins allow transfer. Final publishing-ready Reel files are delivered as standard.",
  },
];

export default function ReelEditingServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="Reel editing team and creative workspace at BrainADZ"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_32%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.28)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link href="/" className="text-[#E1122B] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Reel Reel Editing Services</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Reel Reel Editing Services
          </h1>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn ideas, raw footage and existing content into polished Reels
              built for attention, brand consistency and reliable social media
              publishing.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Start your Reel project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Reel editing services page navigation"
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

          <h2 className="mt-5 max-w-[1210px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Create Reels that feel current, clear and unmistakably on-brand
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Effective Reels need more than trending audio and rapid transitions.
                BrainADZ combines content understanding, hook development,
                purposeful pacing, captions, sound and brand-led graphics to
                create vertical videos that communicate clearly and support a
                consistent publishing system.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your Reel workflow
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Reel editing timeline and vertical content work by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace this image with a Reel editing timeline or final Reel showcase
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

      {/* Editing services */}
      <section
        id="editing-services"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Reel Editing Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Reel editing for brands, products, experts and campaigns
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each Reel format needs a different balance of hook, pacing, visuals
              and brand treatment. Product promotions, founder insights and
              educational content should not be edited through one generic
              template.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {EDITING_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-[21px] font-semibold leading-tight text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
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

      {/* Retention system */}
      <section
        id="retention-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Reel Editing System
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A purposeful Reel structure from first frame to final action
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              A strong Reel does not depend on random transitions every second.
              It holds attention by making the opening clear, arranging the
              message well and using visual change only where it improves the
              viewing experience.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your Reel editing system
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {RETENTION_STEPS.map((step) => {
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

                  <dl className="border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <dt className="text-[12px] font-medium uppercase text-black/42">
                      Editing Output
                    </dt>
                    <dd className="mt-2 text-[14px] leading-6 text-black/68">
                      {step.output}
                    </dd>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms and repurposing */}
      <section
        id="formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Reel Formats and Use Cases
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Reel formats shaped around different content and campaign goals
              </h2>
            </div>

            <p className="max-w-[660px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The right format depends on what the Reel must communicate. Brand
              education, product demonstrations, expert content and campaign ads
              each need a different structure while following the same visual
              identity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PLATFORM_FORMATS.map((platform) => {
              const Icon = platform.icon;

              return (
                <article
                  key={platform.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)] lg:p-8"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.2)]">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-6 text-[26px] font-semibold leading-tight text-black">
                    {platform.title}
                  </h3>
                  <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {platform.description}
                  </p>
                  <ul className="mt-6 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {platform.items.map((item) => (
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

          <div className="mt-16 border-t border-black/10 pt-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Monthly Reel Production
                </p>
                <h3 className="mt-5 max-w-[760px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[40px]">
                  Build a repeatable monthly Reel workflow instead of editing one post at a time
                </h3>
              </div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Consistent Reel output becomes easier when themes, footage,
                templates, approvals and delivery are planned as one connected
                production system rather than isolated editing requests.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {REPURPOSING_WORKFLOW.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                  >
                    <Icon className="h-7 w-7 text-[#E1122B]" strokeWidth={1.6} />
                    <h4 className="mt-6 text-[18px] font-semibold leading-7 text-black">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-[14px] leading-6 text-black/58">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Reel Production Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A structured workflow from Reel idea to publishing-ready files
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every stage has a defined output and review point. This keeps
              feedback focused, protects brand consistency and makes recurring
              Reel production easier to manage.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your Reel production workflow
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Reel Quality and Delivery
                </p>
              </div>
              <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Checked for mobile viewing, platform overlays and consistent publishing
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Final Reels are reviewed in the context where audiences will
              actually see them. Hooks, captions, products, faces, logos, sound
              and CTA elements must remain clear on mobile screens and within
              platform interface overlays.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {QUALITY_CONTROLS.map((control) => {
              const Icon = control.icon;

              return (
                <article
                  key={control.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
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
              <h2 className="mt-5 max-w-[1020px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Reel edits shaped for different brands, products and campaign objectives
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace the temporary portfolio images below with actual Reel
              thumbnails, editing timelines or final vertical-video examples.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
              >
                <div className="relative aspect-video overflow-hidden bg-[#f1f1f1]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#E1122B] shadow-lg">
                      <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                    </span>
                  </div>
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
              Questions about Reel editing services?
            </h2>
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about raw footage, monthly Reel volumes, captions,
              trend adaptation, campaign versions, revisions and editable files.
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