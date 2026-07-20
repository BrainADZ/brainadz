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
  title: "Short Video Editing Services | BrainADZ Marketing",
  description:
    "Professional short video editing services by BrainADZ Marketing for Instagram Reels, YouTube Shorts, social ads, product videos, talking-head content and branded short-form campaigns.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Editing Services", href: "#editing-services" },
  { label: "Retention System", href: "#retention-system" },
  { label: "Platforms", href: "#platforms" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger opening hooks",
    description:
      "Shape the first seconds around a clear visual, statement or payoff that gives viewers a reason to continue.",
    icon: Zap,
  },
  {
    title: "Faster, cleaner pacing",
    description:
      "Remove dead space and organize every cut so the video moves naturally without feeling rushed or confusing.",
    icon: Gauge,
  },
  {
    title: "Clearer brand communication",
    description:
      "Use captions, graphics, product details and brand elements to make the message easier to understand and remember.",
    icon: PanelsTopLeft,
  },
  {
    title: "More content from every shoot",
    description:
      "Turn interviews, product footage, podcasts and long videos into multiple short-form assets for different platforms.",
    icon: RefreshCcw,
  },
];

const EDITING_SERVICES = [
  {
    title: "Instagram Reel editing",
    description:
      "Platform-ready Reels shaped around strong hooks, clean pacing, branded captions and mobile-first visual storytelling.",
    points: [
      "Hook-led opening sequences",
      "Dynamic cuts and caption styling",
      "Music, transitions and CTA frames",
    ],
    icon: Smartphone,
  },
  {
    title: "YouTube Shorts editing",
    description:
      "High-retention vertical edits for educational, entertainment, product and creator-led Shorts content.",
    points: [
      "Short-form narrative structure",
      "Readable mobile captions",
      "Loop-friendly endings where relevant",
    ],
    icon: SquarePlay,
  },
  {
    title: "Talking-head video editing",
    description:
      "Polished expert, founder and creator videos with tightened dialogue, visual support and natural audience-facing pacing.",
    points: [
      "Pause and filler-word reduction",
      "Jump cuts, punch-ins and B-roll",
      "Key-point captions and callouts",
    ],
    icon: CirclePlay,
  },
  {
    title: "Product and demo videos",
    description:
      "Concise edits that present product features, use cases, benefits and proof through clear visual sequencing.",
    points: [
      "Feature and benefit highlights",
      "Product close-ups and callouts",
      "Offer, CTA and end-frame design",
    ],
    icon: ImagePlay,
  },
  {
    title: "Short-form ad editing",
    description:
      "Performance-oriented video edits built around campaign hooks, offer clarity, product proof and placement requirements.",
    points: [
      "Multiple hook variations",
      "UGC-style and branded formats",
      "Platform-safe ad adaptations",
    ],
    icon: Target,
  },
  {
    title: "Content repurposing",
    description:
      "Convert long-form videos, podcasts, webinars, interviews and event footage into focused short clips and content series.",
    points: [
      "High-value moment identification",
      "Topic-based clip extraction",
      "Multi-platform format adaptation",
    ],
    icon: Film,
  },
];

const RETENTION_STEPS = [
  {
    number: "01",
    title: "Lead with the strongest moment",
    description:
      "Open with the most useful statement, visual result, tension point or question instead of spending valuable seconds on a slow introduction.",
    output: "Opening hook",
    icon: Zap,
  },
  {
    number: "02",
    title: "Build a clear mini-story",
    description:
      "Organize the clip around a simple progression such as problem, insight and solution so the viewer always understands what comes next.",
    output: "Short-form structure",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Control pace and attention",
    description:
      "Use precise cuts, visual changes, B-roll, punch-ins and pauses to maintain momentum without creating unnecessary noise.",
    output: "Retention-focused edit",
    icon: TimerReset,
  },
  {
    number: "04",
    title: "Make the message readable",
    description:
      "Add captions, labels and graphic emphasis that support comprehension even when the video is watched without sound.",
    output: "Caption and graphic layer",
    icon: TextCursorInput,
  },
  {
    number: "05",
    title: "Finish with a purposeful action",
    description:
      "Close with a conclusion, loop, next step or CTA that matches the content objective and does not feel disconnected from the video.",
    output: "Closing and CTA",
    icon: Target,
  },
];

const PLATFORM_FORMATS = [
  {
    title: "Instagram Reels",
    description:
      "Polished vertical content for organic reach, educational series, product communication, campaigns and branded storytelling.",
    items: [
      "9:16 vertical editing",
      "Reel covers and end frames",
      "Caption-safe composition",
      "Trend-aware pacing",
      "Brand and product callouts",
      "Organic and campaign variations",
    ],
    icon: Smartphone,
  },
  {
    title: "YouTube Shorts",
    description:
      "Fast, focused short-form videos designed for mobile viewing, repeatable publishing and channel-wide content series.",
    items: [
      "Shorts-first storytelling",
      "Topic and episode structure",
      "Fast visual context",
      "Readable subtitle design",
      "Series identity and numbering",
      "Long-form content repurposing",
    ],
    icon: SquarePlay,
  },
  {
    title: "LinkedIn and B2B",
    description:
      "Credible short edits for founder insights, business education, events, case studies and professional brand communication.",
    items: [
      "Founder and leadership clips",
      "Podcast and interview excerpts",
      "Case-study highlights",
      "Event recap videos",
      "Insight-led captions",
      "Clean corporate styling",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Paid Social Ads",
    description:
      "Conversion-focused short videos adapted for Meta placements, campaign testing, product offers and lead-generation objectives.",
    items: [
      "Multiple opening hooks",
      "Offer and proof emphasis",
      "Product demonstration edits",
      "UGC-style ad structures",
      "Placement-safe adaptations",
      "Testing-ready versions",
    ],
    icon: Target,
  },
];

const REPURPOSING_WORKFLOW = [
  {
    title: "Find high-value moments",
    description:
      "Review long-form footage for useful insights, strong opinions, demonstrations, stories, questions and audience-relevant moments.",
    icon: ScanSearch,
  },
  {
    title: "Create focused clip themes",
    description:
      "Separate selected moments into individual topics so every short video delivers one clear idea rather than an incomplete excerpt.",
    icon: FileSearch,
  },
  {
    title: "Rebuild context for short-form",
    description:
      "Add a new hook, supporting captions, B-roll and graphic context so the clip makes sense without the full original video.",
    icon: WandSparkles,
  },
  {
    title: "Adapt for each platform",
    description:
      "Prepare the framing, duration, safe zones, cover text and ending according to where the short video will be published.",
    icon: Ratio,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Review the brief and footage",
    description:
      "We understand the audience, platform, objective, source material, brand references and publishing requirements before editing begins.",
    timing: "Project start",
    output: "Edit brief and asset review",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Select the strongest structure",
    description:
      "The footage is reviewed to identify the hook, essential message, supporting moments, visual proof and the most useful closing.",
    timing: "Pre-edit",
    output: "Edit structure and selects",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Build the first cut",
    description:
      "We tighten the footage, establish pacing, add B-roll and arrange the content into a focused short-form sequence.",
    timing: "Editing",
    output: "First-cut video",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Add captions and sound",
    description:
      "Caption styling, graphics, music, sound effects, transitions and brand elements are applied according to the approved direction.",
    timing: "Finishing",
    output: "Branded edit",
    icon: AudioLines,
  },
  {
    number: "05",
    title: "Review and refine",
    description:
      "Feedback is consolidated into a clear revision cycle covering message accuracy, pacing, visual details and final CTA treatment.",
    timing: "Revision cycle",
    output: "Approved master edit",
    icon: MessageSquareText,
  },
  {
    number: "06",
    title: "Export platform versions",
    description:
      "Final files are checked and delivered in the required ratios, resolutions, durations and naming structure for publishing.",
    timing: "Final delivery",
    output: "Platform-ready exports",
    icon: FileCheck2,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Caption accuracy",
    description:
      "Spelling, timing, line breaks and key-message emphasis are reviewed before final export.",
    icon: TextCursorInput,
  },
  {
    title: "Mobile-safe framing",
    description:
      "Subjects, captions, logos and CTA elements stay clear of common interface overlays and crop risks.",
    icon: Smartphone,
  },
  {
    title: "Balanced sound",
    description:
      "Dialogue, music and sound effects are checked for clarity and comfortable listening across devices.",
    icon: Music2,
  },
  {
    title: "Clean final exports",
    description:
      "Resolution, aspect ratio, duration, frame rate and naming are verified for each requested version.",
    icon: FileArchive,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Story before effects",
    description:
      "Transitions and graphics support the message instead of distracting from the content viewers came to understand.",
    icon: Clapperboard,
  },
  {
    title: "Platform-aware execution",
    description:
      "Every edit considers the viewing environment, safe zones, audience behavior and publishing format of the selected channel.",
    icon: Ratio,
  },
  {
    title: "Reliable creative workflow",
    description:
      "Clear briefs, organized feedback and structured delivery reduce confusion when multiple videos move together.",
    icon: Gauge,
  },
  {
    title: "Scalable content systems",
    description:
      "Repeatable caption styles, end frames, templates and naming conventions help brands publish more consistently.",
    icon: Layers3,
  },
];

const WORK_ITEMS = [
  {
    title: "Product and Campaign Reels",
    category: "Short-form product editing",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Short-form product and campaign video editing by BrainADZ",
  },
  {
    title: "Founder and Expert Clips",
    category: "Talking-head editing",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Founder and expert short video editing by BrainADZ",
  },
  {
    title: "Educational Content Series",
    category: "Reels and Shorts system",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Educational Reels and YouTube Shorts editing by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in short video editing?",
    answer:
      "The scope can include footage review, clip selection, trimming, pacing, captions, B-roll, transitions, music, sound effects, motion graphics, brand elements, CTA frames and final platform exports. The exact combination depends on the source footage and content objective.",
  },
  {
    question: "Which short video platforms do you edit for?",
    answer:
      "We can prepare content for Instagram Reels, YouTube Shorts, Facebook, LinkedIn and paid social placements. One master edit can also be adapted into multiple platform versions when the content and safe-zone requirements allow it.",
  },
  {
    question: "Can you edit videos from raw mobile footage?",
    answer:
      "Yes. Mobile footage can work well when it is clearly recorded, properly lit and supported by usable audio. We review the files first and recommend the most practical edit direction based on their quality and coverage.",
  },
  {
    question: "Do you add captions, music and sound effects?",
    answer:
      "Yes. Caption design, music, sound effects and basic audio balancing can be included. Licensed music requirements, custom voice-over or advanced audio restoration are scoped separately when needed.",
  },
  {
    question: "Can you turn long videos into Reels and Shorts?",
    answer:
      "Yes. We can review podcasts, interviews, webinars, event footage and long-form videos to identify useful moments, rebuild them with short-form context and deliver a series of focused clips.",
  },
  {
    question: "Do you create different hooks for video ads?",
    answer:
      "Yes. For performance campaigns, we can develop multiple opening hooks, order changes, CTA treatments or product-led variations using the available footage. The number of versions is defined in the project scope.",
  },
  {
    question: "How should I send footage and brand assets?",
    answer:
      "You can share organized footage, logos, fonts, brand guidelines, reference links, scripts and publishing notes through a shared drive or agreed file-transfer method. Clear file names and a concise brief help the edit move faster.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The number of revision rounds is agreed before work begins. Consolidated feedback is recommended so changes remain clear and the approved structure is not repeatedly rebuilt across separate comments.",
  },
  {
    question: "Will I receive editable project files?",
    answer:
      "Editable project files can be included when agreed in advance and when third-party assets or plugins allow transfer. Final publishing files are delivered in the required resolution, ratio and format as standard.",
  },
];

export default function ShortVideoEditingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="Short video editing team and creative workspace at BrainADZ"
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
            <span className="text-white">Short Video Editing</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Short Video Editing Services
          </h1>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn raw footage and long-form content into focused Reels, Shorts
              and social videos built for attention, clarity and consistent
              publishing.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Start your short video project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Short video editing page navigation"
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
            Make every second earn the viewer&apos;s attention
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Short-form video needs more than fast cuts. BrainADZ combines
                content understanding, hook selection, pacing, captions, sound
                and visual branding to create videos that communicate one clear
                idea and feel natural on the platform where they are published.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your short-form workflow
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Short-form video editing timeline and content work by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace this image with a short video editing or timeline showcase
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
                  Editing Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Short-form editing for content, campaigns and ongoing publishing
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The edit style is shaped around the footage, audience and business
              purpose. Educational videos, product ads and founder content should
              not all be forced into the same visual formula.
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
                Retention System
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A clear editing system from hook to final action
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Retention does not come from adding random effects every second.
              It comes from presenting the right information in the right order
              and supporting it with purposeful visual change.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan a retention-focused edit
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
        id="platforms"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Platforms and Formats
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                One content system adapted to the way each platform is viewed
              </h2>
            </div>

            <p className="max-w-[660px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Platform adaptation involves more than changing the canvas size.
              The opening, caption placement, duration, visual density and CTA
              should match the actual viewing environment.
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
                  Content Repurposing
                </p>
                <h3 className="mt-5 max-w-[760px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[40px]">
                  Build more short-form content from footage you already have
                </h3>
              </div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Existing interviews, podcasts, webinars and product shoots can
                become an organized short-video library when each clip is rebuilt
                around a complete, standalone idea.
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
                Editing Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A structured workflow from raw footage to final export
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every stage has a clear purpose, review point and output. This keeps
              feedback focused and makes ongoing short-video production easier to
              manage.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your editing workflow
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
                  Quality and Delivery
                </p>
              </div>
              <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Checked for real mobile viewing and reliable publishing
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Final videos are reviewed as publishing assets, not only as editing
              timelines. Captions, framing, sound and export settings must remain
              clear on the devices and interfaces where the content will appear.
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
                Short-form edits shaped for different messages and audiences
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace the temporary portfolio images below with actual video
              thumbnails, editing timelines or final Reel and Shorts examples.
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
              Questions about short video editing?
            </h2>
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about footage, captions, platform versions,
              repurposing, revisions and editable project-file delivery.
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