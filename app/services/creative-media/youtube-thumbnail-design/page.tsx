/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CirclePlay,
  ClipboardCheck,
  CopyCheck,
  Eye,
  FileArchive,
  FileImage,
  FileSearch,
  Gauge,
  ImageIcon,
  Layers3,
  LayoutTemplate,
  MonitorPlay,
  MousePointerClick,
  Palette,
  PanelTop,
  RefreshCcw,
  ScanSearch,
  Smartphone,
  Sparkles,
  Target,
  TextCursorInput,
  TimerReset,
  WandSparkles,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Design Services | BrainADZ Marketing",
  description:
    "Professional YouTube thumbnail design services by BrainADZ Marketing for videos, Shorts, podcasts, tutorials, product content and channel-wide visual systems.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Click Strategy", href: "#click-strategy" },
  { label: "Content Types", href: "#content-types" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger first impressions",
    description:
      "Present every video with a clear, polished visual that gives viewers an immediate reason to stop and look.",
    icon: Eye,
  },
  {
    title: "Clearer video positioning",
    description:
      "Use one focused visual promise so viewers quickly understand the subject, benefit or story behind the video.",
    icon: Target,
  },
  {
    title: "Consistent channel identity",
    description:
      "Build recognizable thumbnail patterns that connect different videos without making every upload look identical.",
    icon: Layers3,
  },
  {
    title: "Faster publishing workflow",
    description:
      "Work with repeatable layouts, organized source files and clear approval stages to keep the upload schedule moving.",
    icon: Gauge,
  },
];

const THUMBNAIL_SERVICES = [
  {
    title: "Long-form video thumbnails",
    description:
      "High-impact thumbnails for interviews, explainers, reviews, educational videos, product content and branded episodes.",
    points: [
      "Single-message visual hierarchy",
      "Subject, context and hook balance",
      "Desktop and mobile readability",
    ],
    icon: MonitorPlay,
  },
  {
    title: "YouTube Shorts covers",
    description:
      "Vertical-first cover designs that improve the presentation of Shorts across channel pages, playlists and shared links.",
    points: [
      "9:16 cover composition",
      "Safe text and subject placement",
      "Series-based visual consistency",
    ],
    icon: Smartphone,
  },
  {
    title: "Podcast and interview thumbnails",
    description:
      "Professional layouts that organize hosts, guests, episode themes and recognizable show branding without visual clutter.",
    points: [
      "Host and guest hierarchy",
      "Episode-title visual support",
      "Repeatable show templates",
    ],
    icon: CirclePlay,
  },
  {
    title: "Product and review thumbnails",
    description:
      "Product-focused visuals for demonstrations, comparisons, unboxings, buying guides and feature-led video content.",
    points: [
      "Clear product prominence",
      "Comparison and benefit framing",
      "Clean commercial presentation",
    ],
    icon: FileImage,
  },
  {
    title: "Educational and tutorial thumbnails",
    description:
      "Structured designs that make the learning outcome, problem or transformation easy to understand at a glance.",
    points: [
      "Problem-solution framing",
      "Step, result and topic emphasis",
      "Readable technical visuals",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Thumbnail variation design",
    description:
      "Alternative visual directions for priority videos, testing plans or channels that need multiple hooks around one topic.",
    points: [
      "Concept and hook variations",
      "Image, text and composition tests",
      "Organized version naming",
    ],
    icon: CopyCheck,
  },
];

const CLICK_STRATEGY_STEPS = [
  {
    number: "01",
    title: "Identify the viewing promise",
    description:
      "Define the one idea the thumbnail must communicate: a result, problem, reveal, comparison, opinion or useful outcome.",
    output: "Primary visual promise",
    icon: Target,
  },
  {
    number: "02",
    title: "Align title and thumbnail",
    description:
      "Make the title and thumbnail work together instead of repeating the same words, so each contributes new information.",
    output: "Title-thumbnail relationship",
    icon: TextCursorInput,
  },
  {
    number: "03",
    title: "Build instant hierarchy",
    description:
      "Prioritize the main subject, supporting context and optional text so the message remains understandable in a small preview.",
    output: "Visual hierarchy plan",
    icon: PanelTop,
  },
  {
    number: "04",
    title: "Create visual contrast",
    description:
      "Use scale, spacing, expression, lighting, color separation and background control to make the key subject easy to notice.",
    output: "Attention structure",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Protect channel consistency",
    description:
      "Apply recognizable brand cues, typography and recurring design logic while allowing each video to retain its own story.",
    output: "Channel visual system",
    icon: Palette,
  },
];

const CONTENT_TYPES = [
  {
    title: "Business and B2B",
    description:
      "Credible, clean thumbnails for industry insights, founder content, company updates, webinars and thought leadership.",
    items: [
      "Founder and leadership videos",
      "Industry explainers",
      "Webinars and panel discussions",
      "Case studies and business stories",
      "Product and service education",
      "Corporate channel series",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Education and How-To",
    description:
      "Outcome-led thumbnails that make the lesson, skill, process or problem clear before the viewer opens the video.",
    items: [
      "Tutorials and walkthroughs",
      "Tips and mistake videos",
      "Course and lesson content",
      "Software and tool guides",
      "Step-by-step explainers",
      "Exam and knowledge content",
    ],
    icon: WandSparkles,
  },
  {
    title: "Products and Commerce",
    description:
      "Focused product visuals for buyers comparing options, exploring features or evaluating practical value.",
    items: [
      "Product demonstrations",
      "Reviews and unboxings",
      "Feature comparisons",
      "Buying guides",
      "Launch and offer videos",
      "Before-and-after results",
    ],
    icon: ImageIcon,
  },
  {
    title: "Shows and Entertainment",
    description:
      "Expressive, story-led thumbnails for podcasts, interviews, reactions, entertainment formats and recurring episodes.",
    items: [
      "Podcast episodes",
      "Guest interviews",
      "Reaction and opinion videos",
      "Storytelling content",
      "Entertainment series",
      "Highlight and recap videos",
    ],
    icon: Youtube,
  },
];

const TITLE_THUMBNAIL_RULES = [
  {
    title: "Complement, do not duplicate",
    description:
      "The title can explain the topic while the thumbnail communicates the result, emotion, tension or strongest proof point.",
    icon: CopyCheck,
  },
  {
    title: "Keep one visual story",
    description:
      "Avoid combining too many subjects, messages and decorative elements that compete for attention in a small preview.",
    icon: ScanSearch,
  },
  {
    title: "Use text only when useful",
    description:
      "Thumbnail text should add meaning quickly. It should not become a compressed version of the complete video title.",
    icon: TextCursorInput,
  },
  {
    title: "Design for the smallest view",
    description:
      "Every composition is checked at mobile-preview scale so the main subject and message remain clear outside the design canvas.",
    icon: Smartphone,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Review the video brief",
    description:
      "We review the topic, title direction, target viewer, video goal, source images, brand references and publishing deadline.",
    timing: "Brief stage",
    output: "Thumbnail direction brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define the visual hook",
    description:
      "We identify the clearest visual promise and decide which subject, product, expression, result or contrast should lead the design.",
    timing: "Concept stage",
    output: "Hook and composition plan",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Build the first direction",
    description:
      "The selected concept is developed with subject treatment, background control, typography, color and brand styling.",
    timing: "Design stage",
    output: "Primary thumbnail concept",
    icon: Palette,
  },
  {
    number: "04",
    title: "Refine for small-screen clarity",
    description:
      "We reduce visual noise, strengthen hierarchy and test whether the thumbnail remains understandable at realistic preview sizes.",
    timing: "Refinement stage",
    output: "Preview-optimized design",
    icon: Eye,
  },
  {
    number: "05",
    title: "Review and revise",
    description:
      "Feedback is applied against the agreed direction while protecting the message, readability and visual consistency of the design.",
    timing: "Approval stage",
    output: "Approved thumbnail",
    icon: RefreshCcw,
  },
  {
    number: "06",
    title: "Export and organize",
    description:
      "Final files are exported in the required dimensions and organized clearly for upload, archive and future series development.",
    timing: "Delivery stage",
    output: "Upload-ready files",
    icon: FileArchive,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Preview-size readability",
    description:
      "The subject, contrast and optional text are checked at realistic mobile and desktop thumbnail sizes before delivery.",
    icon: Eye,
  },
  {
    title: "Clean subject treatment",
    description:
      "Cut-outs, edges, lighting, shadows and image enhancement are refined so the central subject feels intentional and credible.",
    icon: Sparkles,
  },
  {
    title: "Channel consistency",
    description:
      "Typography, colors and recurring graphic cues are controlled so the channel develops a recognizable visual identity over time.",
    icon: Layers3,
  },
  {
    title: "Correct technical output",
    description:
      "Dimensions, file format, file size, safe composition and naming are reviewed before the final upload-ready asset is shared.",
    icon: ClipboardCheck,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Strategy before decoration",
    description:
      "The design starts with the viewer, topic and click promise rather than adding effects without a clear communication purpose.",
    icon: Target,
  },
  {
    title: "Designs shaped around content",
    description:
      "Each thumbnail reflects the actual video story, format and audience instead of forcing unrelated templates onto every upload.",
    icon: CirclePlay,
  },
  {
    title: "Built for repeatable channels",
    description:
      "We can create one-off priority thumbnails or establish a consistent production system for recurring video series.",
    icon: TimerReset,
  },
  {
    title: "Organized creative delivery",
    description:
      "Versions, final exports and editable assets can be structured clearly so internal teams can publish and reuse them efficiently.",
    icon: FileArchive,
  },
];

const WORK_ITEMS = [
  {
    title: "Educational Video Thumbnail Series",
    category: "YouTube Education",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Temporary portfolio image for educational YouTube thumbnail design",
  },
  {
    title: "Product Review Thumbnail System",
    category: "Product Content",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Temporary portfolio image for product review thumbnail design",
  },
  {
    title: "Podcast Episode Cover Direction",
    category: "Podcast Content",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Temporary portfolio image for podcast YouTube thumbnail design",
  },
];

const FAQS = [
  {
    question: "What do you need to design a YouTube thumbnail?",
    answer:
      "We usually need the video topic, working title, target audience, key message, preferred visual direction, brand references and the best available images or video stills. When the title is not final, we can still design around the strongest content promise.",
  },
  {
    question: "Can you design thumbnails without a professional photoshoot?",
    answer:
      "Yes. We can work with supplied photographs, video stills, product images, screenshots and suitable brand assets. The final result depends on the quality and relevance of the source material, so we identify any limitations before production.",
  },
  {
    question: "Do you create YouTube Shorts covers as well?",
    answer:
      "Yes. We can design vertical cover assets for Shorts and recurring short-form series. The composition is adapted for the 9:16 format and checked for safe placement across channel and mobile views.",
  },
  {
    question: "Can you create multiple thumbnail options for one video?",
    answer:
      "Yes. Multiple directions can be scoped for important uploads, campaigns or structured testing. Variants may explore different hooks, subject images, text treatments, background approaches or compositions while staying aligned with the same video.",
  },
  {
    question: "Do you help with title and thumbnail alignment?",
    answer:
      "Yes. We review the relationship between the title and visual so they complement one another. The thumbnail should add a fast visual promise rather than simply repeating the complete title as text.",
  },
  {
    question: "Can you create a consistent thumbnail style for our channel?",
    answer:
      "Yes. We can define typography, colors, layout logic, image treatment, recurring labels and series-specific rules to make the channel recognizable while keeping enough variation between individual videos.",
  },
  {
    question: "Are editable source files included?",
    answer:
      "Editable files can be included when agreed in the project scope. We also provide final upload-ready exports and can organize templates or series files for teams that publish content regularly.",
  },
  {
    question: "How quickly can a thumbnail be delivered?",
    answer:
      "Turnaround depends on the volume, source material, number of concepts and review cycle. Recurring thumbnail workflows can usually move faster once the channel style, approval process and asset system are established.",
  },
];

export default function YouTubeThumbnailDesignPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="YouTube thumbnail design team and creative workspace at BrainADZ"
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
            <span className="text-white">YouTube Thumbnail Design</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            YouTube Thumbnail Design Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn every upload into a stronger first impression with thumbnails
              designed for clarity, channel consistency and the way viewers make
              fast decisions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Design stronger thumbnails
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="YouTube thumbnail design page navigation"
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

          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Make the value of every video visible before the click
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                A YouTube thumbnail has only a moment to communicate the video’s
                promise. BrainADZ combines content understanding, visual hierarchy,
                image treatment, typography and channel consistency to create
                thumbnails that are clear, relevant and built for real viewing
                conditions.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Improve your video presentation
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="YouTube thumbnail concepts and channel creative system by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace this image with a YouTube thumbnail design showcase
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

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Thumbnail Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Thumbnail design for different video formats and channel goals
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Every format needs a different balance of subject, message, brand
              treatment and visual intensity. The design direction is shaped
              around the actual content rather than a one-template-fits-all style.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {THUMBNAIL_SERVICES.map((service) => {
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

      {/* Click Strategy */}
      <section
        id="click-strategy"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Click Strategy
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Design decisions built around how viewers scan and choose
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              A thumbnail should create interest without misrepresenting the
              content. The strongest direction makes the video’s value easy to
              understand while leaving enough curiosity for the title and video
              to complete the story.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your thumbnail system
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {CLICK_STRATEGY_STEPS.map((step) => {
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

      {/* Content Types */}
      <section
        id="content-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Content Types
                </p>
              </div>
              <h2 className="mt-5 max-w-[1000px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Visual directions shaped around the way your content earns attention
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Different niches create interest in different ways. A technical
              tutorial, podcast, product review and founder video should not use
              the same visual logic simply because they appear on YouTube.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CONTENT_TYPES.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.2)]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-[21px] font-semibold leading-tight text-black">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {group.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
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

          <div className="mt-16 border-t border-black/10 pt-12">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Title + Thumbnail System
                </p>
                <h3 className="mt-4 max-w-[760px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[40px]">
                  Let the title explain while the thumbnail creates the strongest visual reason to care
                </h3>
              </div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The best relationship is complementary. Viewers should gain more
                meaning from seeing the title and thumbnail together than from
                reading either one alone.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {TITLE_THUMBNAIL_RULES.map((rule) => {
                const Icon = rule.icon;

                return (
                  <article
                    key={rule.title}
                    className="rounded-[14px] border border-black/10 bg-[#fff] p-6 transition-colors hover:border-[#E1122B]/35 hover:bg-[#fff8f8]"
                  >
                    <Icon className="h-7 w-7 text-[#E1122B]" strokeWidth={1.6} />
                    <h4 className="mt-5 text-[18px] font-semibold leading-7 text-black">
                      {rule.title}
                    </h4>
                    <p className="mt-3 text-[14px] leading-6 text-black/58">
                      {rule.description}
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
                Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A focused workflow from video brief to upload-ready thumbnail
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow keeps the design grounded in the actual video while
              giving enough structure for recurring uploads, fast approvals and
              organized creative delivery.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Start a thumbnail brief
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
                  Thumbnail Quality
                </p>
              </div>
              <h2 className="mt-5 max-w-[860px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Checked for clarity where viewers actually see it
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A thumbnail can look impressive on a large design canvas and still
              fail in the YouTube interface. Every asset is reviewed for realistic
              preview scale, subject clarity, visual balance and technical output.
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
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Thumbnail systems designed for different stories, audiences and channels
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Replace the temporary portfolio paths below with actual YouTube
              thumbnail projects, preferably showing different content niches and
              repeatable channel systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]"
              >
                <div className="aspect-video overflow-hidden bg-[#f1f1f1]">
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
              Questions about YouTube thumbnail design?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about source images, Shorts covers, variations,
              title alignment, channel systems and editable file delivery.
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