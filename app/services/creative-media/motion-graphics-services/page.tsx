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
  Clock3,
  FileCheck2,
  FileSearch,
  Film,
  Gauge,
  ImagePlay,
  Layers3,
  MessageSquareText,
  MonitorPlay,
  Move3D,
  Music2,
  PanelsTopLeft,
  Play,
  Ratio,
  RefreshCcw,
  ScanSearch,
  Shapes,
  Sparkles,
  SquarePlay,
  Target,
  TextCursorInput,
  TimerReset,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Motion Graphics Services | BrainADZ Marketing",
  description:
    "Motion graphics services by BrainADZ Marketing for animated explainers, social media videos, product communication, logo animation, kinetic typography and campaign content.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Production", href: "#production" },
  { label: "Formats", href: "#formats" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Explain ideas faster",
    description:
      "Use movement, pacing and visual sequencing to make complex messages easier to follow and remember.",
    icon: CirclePlay,
  },
  {
    title: "Hold audience attention",
    description:
      "Create purposeful visual motion that gives viewers a reason to keep watching instead of scrolling away.",
    icon: Gauge,
  },
  {
    title: "Strengthen brand recall",
    description:
      "Build recognizable animation styles, transitions and visual behaviors around the identity of your brand.",
    icon: Sparkles,
  },
  {
    title: "Adapt across channels",
    description:
      "Turn one motion direction into platform-ready versions for campaigns, presentations, websites and social media.",
    icon: Ratio,
  },
];

const MOTION_CAPABILITIES = [
  {
    title: "Animated brand content",
    description:
      "Bring brand communication to life with a repeatable motion language that feels connected to your visual identity.",
    points: [
      "Logo reveals and brand idents",
      "Animated graphic systems and transitions",
      "Motion guidelines for recurring content",
    ],
    icon: WandSparkles,
  },
  {
    title: "Explainer motion graphics",
    description:
      "Break services, products, processes and business ideas into clear animated stories that move in a logical sequence.",
    points: [
      "Service and product explainers",
      "Process, workflow and feature animation",
      "Script-led visual storytelling",
    ],
    icon: MessageSquareText,
  },
  {
    title: "Social media motion design",
    description:
      "Create high-retention motion assets shaped for reels, stories, paid campaigns, launch announcements and recurring content.",
    points: [
      "Animated posts, stories and reel assets",
      "Campaign teasers and promotional edits",
      "Platform-specific pacing and dimensions",
    ],
    icon: SquarePlay,
  },
  {
    title: "Product and feature animation",
    description:
      "Show product value through animated callouts, feature highlights, comparisons, interface movement and visual demonstrations.",
    points: [
      "Product highlights and feature callouts",
      "Before-and-after or comparison sequences",
      "Interface, dashboard and screen animation",
    ],
    icon: Move3D,
  },
  {
    title: "Kinetic typography",
    description:
      "Turn headlines, statistics, hooks and key messages into text-led motion that feels energetic without losing readability.",
    points: [
      "Typography-led campaign videos",
      "Animated statistics and key messages",
      "Quote, announcement and event content",
    ],
    icon: TextCursorInput,
  },
  {
    title: "Motion support for video",
    description:
      "Add structure and visual polish to edited footage through titles, lower thirds, transitions, callouts and branded graphic packages.",
    points: [
      "Openers, closers and title sequences",
      "Lower thirds, captions and supers",
      "Graphic overlays and transitions",
    ],
    icon: Film,
  },
];

const PRODUCTION_LAYERS = [
  {
    number: "01",
    title: "Narrative and timing",
    description:
      "Define what the viewer should understand, the sequence of information and the duration available to communicate it.",
    output: "Motion brief",
    icon: Clock3,
  },
  {
    number: "02",
    title: "Storyboard",
    description:
      "Map the visual flow scene by scene so the message, transitions and hierarchy are clear before animation begins.",
    output: "Approved storyboard",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Styleframes",
    description:
      "Establish typography, color, imagery, illustration, composition and the visual treatment of key scenes.",
    output: "Visual direction",
    icon: Shapes,
  },
  {
    number: "04",
    title: "Animation system",
    description:
      "Create movement rules for entrances, exits, transitions, camera behavior and the rhythm of graphic elements.",
    output: "Motion language",
    icon: ImagePlay,
  },
  {
    number: "05",
    title: "Sound and finishing",
    description:
      "Support the visual rhythm with music, sound effects, voice-over alignment and final timing refinements where required.",
    output: "Finished master",
    icon: AudioLines,
  },
  {
    number: "06",
    title: "Versioning and export",
    description:
      "Prepare the approved animation in the required sizes, durations, codecs and platform-specific output formats.",
    output: "Delivery package",
    icon: FileCheck2,
  },
];

const FORMAT_GROUPS = [
  {
    category: "Social and Paid Media",
    description:
      "Fast, attention-led motion assets created for mobile-first feeds, stories and campaign placements.",
    items: [
      "9:16 reels and stories",
      "1:1 and 4:5 feed assets",
      "Animated ad creatives",
      "Launch teasers",
      "Offer animations",
      "Reel covers and end cards",
    ],
    icon: SquarePlay,
  },
  {
    category: "Brand and Campaign",
    description:
      "Motion communication that gives brand launches, events and integrated campaigns a connected visual identity.",
    items: [
      "Logo animation",
      "Campaign key visual motion",
      "Brand idents",
      "Event screen content",
      "Promotional openers",
      "Animated brand templates",
    ],
    icon: Sparkles,
  },
  {
    category: "Explainers and Corporate",
    description:
      "Structured animation that simplifies products, services, data and internal communication for professional audiences.",
    items: [
      "Animated explainers",
      "Process videos",
      "Corporate presentation motion",
      "Data animation",
      "Training content",
      "Internal communication videos",
    ],
    icon: MonitorPlay,
  },
  {
    category: "Video Graphic Packages",
    description:
      "Reusable graphic elements that improve consistency and production quality across edited video content.",
    items: [
      "Title cards",
      "Lower thirds",
      "Animated captions",
      "Transitions",
      "Callout graphics",
      "Openers and closers",
    ],
    icon: Clapperboard,
  },
];

const DELIVERY_SPECS = [
  {
    label: "Aspect Ratios",
    value: "9:16, 4:5, 1:1 and 16:9",
    description:
      "Versions can be planned for vertical, portrait, square and landscape publishing environments.",
    icon: Ratio,
  },
  {
    label: "Typical Durations",
    value: "6 seconds to 3+ minutes",
    description:
      "Duration is selected around the message, platform behavior and attention available—not a fixed template.",
    icon: TimerReset,
  },
  {
    label: "Output Formats",
    value: "MP4, MOV, GIF and image sequences",
    description:
      "Final export format, codec, frame rate and transparency requirements are aligned before production.",
    icon: FileCheck2,
  },
  {
    label: "Audio Support",
    value: "Music, SFX and voice-over sync",
    description:
      "Sound design and voice-over integration can be included where they materially improve the communication.",
    icon: Music2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the message and channel",
    description:
      "We review the audience, communication objective, available brand assets, publishing platform, duration and technical requirements.",
    timing: "Day 1",
    output: "Motion brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Structure the story",
    description:
      "The message is organized into a logical sequence with scene timing, key copy, transitions and the intended viewer action.",
    timing: "Day 1-2",
    output: "Script and storyboard",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Develop the visual direction",
    description:
      "Key frames are designed to establish composition, typography, color, graphic style and the look of the final animation.",
    timing: "Project based",
    output: "Approved styleframes",
    icon: Shapes,
  },
  {
    number: "04",
    title: "Animate and synchronize",
    description:
      "Scenes are animated with controlled pacing, transitions, text timing, graphic movement and audio alignment where applicable.",
    timing: "Production cycle",
    output: "First motion draft",
    icon: Play,
  },
  {
    number: "05",
    title: "Review and refine",
    description:
      "Feedback is consolidated into focused revisions covering timing, visual accuracy, text, scene order and final polish.",
    timing: "Review cycle",
    output: "Final approved master",
    icon: RefreshCcw,
  },
  {
    number: "06",
    title: "Export every required version",
    description:
      "The approved animation is rendered and quality-checked for the agreed aspect ratios, durations, platforms and file specifications.",
    timing: "Final delivery",
    output: "Platform-ready files",
    icon: FileCheck2,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Storyboard approval before animation",
    description:
      "Message flow and scene order are locked early to reduce avoidable structural revisions during production.",
    icon: BadgeCheck,
  },
  {
    title: "Brand-consistent movement",
    description:
      "Motion behavior is matched to the brand personality instead of relying on random transitions or effects.",
    icon: Layers3,
  },
  {
    title: "Readable at real viewing speed",
    description:
      "Text duration, contrast and visual hierarchy are checked at the pace viewers will actually experience.",
    icon: ScanSearch,
  },
  {
    title: "Platform-ready technical delivery",
    description:
      "Exports are checked for ratio, resolution, duration, frame rate and file requirements before handover.",
    icon: FileCheck2,
  },
];

const WORK_ITEMS = [
  {
    title: "Social Campaign Motion",
    category: "Animated campaign content",
    image: "/portfolio/instagram/2.png",
    alt: "Animated social campaign creative by BrainADZ",
  },
  {
    title: "Product Communication",
    category: "Feature-led motion graphics",
    image: "/portfolio/instagram/3.png",
    alt: "Product feature communication designed by BrainADZ",
  },
  {
    title: "Brand Storytelling",
    category: "Visual narrative and motion system",
    image: "/portfolio/instagram/4.png",
    alt: "Brand storytelling creative work by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in your motion graphics service?",
    answer:
      "The scope can include concept development, script support, storyboard, styleframes, 2D motion design, kinetic typography, logo animation, transitions, graphic overlays, sound synchronization, revisions and platform-specific exports. The exact production scope is defined around the communication objective and available source material.",
  },
  {
    question: "Do you write the script and storyboard as well?",
    answer:
      "Yes. We can develop the full visual structure from a brief or work with an approved script supplied by your team. For larger explainers, scriptwriting, voice-over and detailed storyboard requirements are scoped before animation begins.",
  },
  {
    question: "Can you animate our existing brand designs?",
    answer:
      "Yes. Existing logos, campaign creatives, illustrations, presentation graphics, product visuals and brand assets can be adapted into motion. We first review whether the source files have the layers and resolution needed for clean animation.",
  },
  {
    question: "Do you create 2D or 3D motion graphics?",
    answer:
      "Our primary scope covers 2D motion graphics, typography, compositing, graphic transitions and interface-style animation. Selected 3D product or environmental requirements can be planned separately depending on model availability, realism, duration and rendering complexity.",
  },
  {
    question: "How long does a motion graphics project take?",
    answer:
      "Timelines depend on duration, number of scenes, illustration requirements, audio, complexity and review speed. A short social animation may move quickly, while a detailed explainer requires separate scripting, storyboard, design, animation and approval stages.",
  },
  {
    question: "How many revision rounds are included?",
    answer:
      "Revision rounds are defined in the agreed scope. Feedback is most efficient when it is consolidated by stage—script and storyboard first, visual direction second, then animation—because structural changes after full animation can affect the timeline and cost.",
  },
  {
    question: "Can one animation be resized for different platforms?",
    answer:
      "Yes. We can plan a master animation and create vertical, square, portrait or landscape adaptations. Some scenes may need recomposition rather than simple cropping so text, products and focal points remain clear in every ratio.",
  },
  {
    question: "Which final files will we receive?",
    answer:
      "Final files can include MP4, MOV, transparent-background video, GIF or image sequences where required. Resolution, frame rate, codec, duration, ratio and editable source-file handover are confirmed in the project scope.",
  },
];

export default function MotionGraphicsServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ motion graphics and animation production workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.80)_32%,rgba(0,0,0,0.43)_58%,rgba(0,0,0,0.08)_100%)]" />
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
            <span className="text-white">Motion Graphics Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Motion Graphics Services
          </h1>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn messages, products and brand stories into purposeful motion
              that captures attention, explains ideas clearly and performs
              across social, digital and corporate channels.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start a motion project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Motion graphics page navigation"
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

          <h2 className="mt-5 max-w-[1250px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Make every movement support the message
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Motion graphics should do more than decorate a video. The timing,
                transitions, text behavior and visual sequence should guide the
                viewer through the message and make the most important idea
                impossible to miss.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                BrainADZ combines communication planning, storyboarding, visual
                design and animation production to create motion assets that are
                clear, brand-aligned and practical to use across multiple
                platforms.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your animation brief
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="group relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/5.png"
                  alt="Motion graphics and animated campaign work by BrainADZ"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/55 bg-black/55 text-white backdrop-blur-sm">
                    <Play className="ml-1 h-6 w-6" fill="currentColor" />
                  </span>
                </div>
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected visual and campaign work by BrainADZ
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

      {/* Capabilities */}
      <section
        id="capabilities"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Motion Capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Motion design for brands, products and campaigns
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Every animation is scoped around the communication need. Some
              projects require a strong six-second hook; others need a complete
              visual story with scenes, voice-over and detailed explanation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {MOTION_CAPABILITIES.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:p-7"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {capability.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {capability.points.map((point) => (
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

      {/* Production system */}
      <section
        id="production"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Motion Production System
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Build the thinking before building the movement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Animation becomes faster and more predictable when the message,
              storyboard and visual direction are approved before detailed
              production begins.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your motion system
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {PRODUCTION_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_210px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between gap-5 sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {layer.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                      {layer.title}
                    </h3>
                    <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {layer.description}
                    </p>
                  </div>

                  <dl className="border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div>
                      <dt className="text-[12px] font-medium uppercase text-black/42">
                        Output
                      </dt>
                      <dd className="mt-2 text-[14px] leading-6 text-black/68">
                        {layer.output}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats and use cases */}
      <section
        id="formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Formats and Use Cases
            </p>
          </div>
          <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            One motion direction, prepared for every required screen
          </h2>
          <p className="mt-6 max-w-[820px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            We plan the master composition and adaptations together so important
            information stays readable and correctly positioned across vertical,
            square, portrait and landscape formats.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {FORMAT_GROUPS.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.category}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-black">
                        {group.category}
                      </h3>
                      <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-black/58">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-x-8 gap-y-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 xl:grid-cols-4">
            {DELIVERY_SPECS.map((spec) => {
              const Icon = spec.icon;

              return (
                <article
                  key={spec.label}
                  className="rounded-[14px] border border-black/10 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {spec.label}
                  </p>
                  <h3 className="mt-3 text-[19px] font-semibold leading-7 text-black">
                    {spec.value}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {spec.description}
                  </p>
                </article>
              );
            })}
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
                Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A controlled path from brief to final render
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Each approval stage protects the next. This keeps feedback focused,
              reduces unnecessary rework and gives everyone visibility into what
              is being produced.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your production
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

      {/* Quality control */}
      <section className="border-b border-black/10 bg-[#111111] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Production Quality
                </p>
              </div>
              <h2 className="mt-5 max-w-[760px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Designed to move well and communicate clearly
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Strong motion comes from disciplined decisions—not more effects.
              Every stage is checked for message clarity, brand consistency,
              timing, readability and technical delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {QUALITY_CONTROLS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-[#E1122B]/50 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[18px] font-semibold leading-7 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/52">
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
          <div className="grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Selected Work
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Visual directions built to become motion
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace these temporary portfolio images with final motion
              thumbnails or video poster frames from the corresponding project
              folders.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_16px_42px_rgba(0,0,0,0.05)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-70" />
                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                  </span>
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-[24px] font-semibold leading-tight text-black">
                  {item.title}
                </h3>
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
              Before the first frame moves
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about scope, production stages, revisions,
              adaptations and final motion-graphics delivery.
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
