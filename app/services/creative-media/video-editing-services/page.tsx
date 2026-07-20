/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  Camera,
  Captions,
  Check,
  ChevronDown,
  CirclePlay,
  Clapperboard,
  FileArchive,
  FileCheck2,
  FileSearch,
  Film,
  FolderCheck,
  Gauge,
  ImagePlay,
  Layers3,
  MessageSquareText,
  MonitorPlay,
  Music2,
  Palette,
  PanelsTopLeft,
  Play,
  Ratio,
  RefreshCcw,
  ScanSearch,
  Scissors,
  SlidersHorizontal,
  Sparkles,
  Target,
  TimerReset,
  Video,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Video Editing Services | BrainADZ Marketing",
  description:
    "Professional video editing services by BrainADZ Marketing for YouTube videos, interviews, podcasts, product films, event highlights, promotional videos and multi-platform content.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Editing System", href: "#editing-system" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Delivery", href: "#delivery" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Clearer video storytelling",
    description:
      "Shape raw footage into a focused narrative with the right sequence, pace and emphasis for the intended audience.",
    icon: Clapperboard,
  },
  {
    title: "Professional post-production",
    description:
      "Combine clean cuts, color correction, sound treatment, titles and graphics into one polished viewing experience.",
    icon: SlidersHorizontal,
  },
  {
    title: "Consistent brand presentation",
    description:
      "Apply repeatable visual, audio and motion standards so every video feels connected to the same brand system.",
    icon: PanelsTopLeft,
  },
  {
    title: "More value from every shoot",
    description:
      "Create long-form masters, shorter edits and platform adaptations from the same source footage wherever the material allows.",
    icon: RefreshCcw,
  },
];

const EDITING_SERVICES = [
  {
    title: "YouTube video editing",
    description:
      "Structured long-form edits for educational, product, interview, commentary and brand-led YouTube content.",
    points: [
      "Narrative and chapter structure",
      "B-roll, titles and visual support",
      "Intro, outro and CTA integration",
    ],
    icon: MonitorPlay,
  },
  {
    title: "Interview and podcast editing",
    description:
      "Natural, conversation-led edits that remove distractions while protecting the speaker's voice, intent and credibility.",
    points: [
      "Single or multi-camera editing",
      "Dialogue cleanup and pacing",
      "Speaker titles and topic graphics",
    ],
    icon: CirclePlay,
  },
  {
    title: "Product and demonstration videos",
    description:
      "Focused product edits that explain features, operation, applications and benefits through clear visual sequencing.",
    points: [
      "Feature-led scene organization",
      "Callouts, labels and close-ups",
      "Voice-over and music alignment",
    ],
    icon: ImagePlay,
  },
  {
    title: "Promotional and campaign videos",
    description:
      "Brand and offer-led films designed to communicate one campaign message with energy, clarity and a purposeful close.",
    points: [
      "Campaign story and pacing",
      "Brand graphics and supers",
      "Multiple duration adaptations",
    ],
    icon: Target,
  },
  {
    title: "Event and highlight videos",
    description:
      "Turn event footage into concise recaps that capture atmosphere, participation, key moments and business relevance.",
    points: [
      "Best-moment footage selection",
      "Music-led highlight sequencing",
      "Opening titles and branded ending",
    ],
    icon: Camera,
  },
  {
    title: "Social and campaign cutdowns",
    description:
      "Adapt approved master videos into shorter, platform-ready edits without losing the central idea or visual continuity.",
    points: [
      "Shorter narrative versions",
      "Vertical and square adaptations",
      "Captioned and silent-view variants",
    ],
    icon: Ratio,
  },
];

const EDITING_SYSTEM = [
  {
    number: "01",
    title: "Find the strongest story",
    description:
      "Review the footage, brief and audience objective to identify the most useful narrative, proof points and emotional or informational progression.",
    output: "Story direction",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Build the structural cut",
    description:
      "Arrange interviews, scenes, demonstrations and supporting footage into a logical rough cut before decorative editing begins.",
    output: "Rough-cut structure",
    icon: Scissors,
  },
  {
    number: "03",
    title: "Refine pace and continuity",
    description:
      "Tighten timing, remove repetition and improve transitions so each scene feels intentional and the viewer can follow the message comfortably.",
    output: "Refined edit",
    icon: TimerReset,
  },
  {
    number: "04",
    title: "Add the visual language",
    description:
      "Introduce titles, captions, lower thirds, brand graphics, B-roll and motion elements that clarify rather than compete with the story.",
    output: "Graphic and motion layer",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Finish picture and sound",
    description:
      "Apply color correction, audio balancing, music treatment and final technical checks to create a cohesive master video.",
    output: "Finished master",
    icon: WandSparkles,
  },
];

const POST_PRODUCTION_CAPABILITIES = [
  {
    title: "Story and sequence editing",
    description:
      "Organize footage around a clear beginning, development and outcome while protecting the most valuable information and moments.",
    items: [
      "Footage review and selects",
      "Narrative restructuring",
      "Scene and interview sequencing",
      "Pacing and continuity control",
    ],
    icon: Film,
  },
  {
    title: "Multi-camera editing",
    description:
      "Synchronize and switch between camera angles to improve energy, context and visual variety in interviews, podcasts and presentations.",
    items: [
      "Audio and camera synchronization",
      "Angle selection and continuity",
      "Speaker and reaction coverage",
      "Cutaway integration",
    ],
    icon: Video,
  },
  {
    title: "Titles, captions and graphics",
    description:
      "Add readable information layers that support comprehension, brand recognition and silent or mobile viewing.",
    items: [
      "Opening and closing titles",
      "Lower thirds and name straps",
      "Subtitles and key-point captions",
      "Product and data callouts",
    ],
    icon: Captions,
  },
  {
    title: "Color correction and grading",
    description:
      "Balance exposure, contrast, white balance and shot consistency before developing a suitable visual finish for the project.",
    items: [
      "Shot-to-shot color matching",
      "Exposure and white-balance correction",
      "Skin-tone and product-color care",
      "Project-appropriate visual grade",
    ],
    icon: Palette,
  },
  {
    title: "Sound editing and music",
    description:
      "Improve dialogue clarity and create a controlled sound bed using balanced voice, music and supporting effects.",
    items: [
      "Dialogue cleanup and leveling",
      "Music selection and timing",
      "Sound-effect placement",
      "Final mix balancing",
    ],
    icon: AudioLines,
  },
  {
    title: "Motion graphics integration",
    description:
      "Use restrained animation for titles, icons, diagrams, screens and transitions when the information benefits from movement.",
    items: [
      "Animated text and supers",
      "Logo and end-card motion",
      "Screen and interface callouts",
      "Simple explainer graphics",
    ],
    icon: Sparkles,
  },
];

const PROJECT_INPUTS = [
  {
    title: "Raw footage and recordings",
    description:
      "Camera files, phone footage, screen recordings, drone clips or archived media organized with enough context for accurate editing.",
    icon: FileArchive,
  },
  {
    title: "Script, brief or talking points",
    description:
      "A script, interview outline, campaign brief or clear objective helps us protect the intended message during structural editing.",
    icon: FileCheck2,
  },
  {
    title: "Brand and reference assets",
    description:
      "Logos, fonts, colors, previous videos, visual references and required disclaimers keep the final film aligned with the brand.",
    icon: PanelsTopLeft,
  },
  {
    title: "Delivery requirements",
    description:
      "Target platform, duration, aspect ratio, language, subtitle needs and deadline are confirmed before production begins.",
    icon: FolderCheck,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief and footage intake",
    description:
      "We confirm the audience, objective, final formats, available assets and approval process before reviewing the footage in detail.",
    timing: "Project start",
    output: "Editing brief",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Footage review and edit plan",
    description:
      "The source material is reviewed for usable scenes, key statements, technical issues and the sequence most likely to support the goal.",
    timing: "Planning stage",
    output: "Selects and edit direction",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Rough cut",
    description:
      "We assemble the core narrative and timing first, giving stakeholders a clear view of the structure before final finishing work.",
    timing: "First production cycle",
    output: "Reviewable rough cut",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Feedback and picture lock",
    description:
      "Consolidated comments are applied to the narrative, timing and scene selection until the approved visual sequence is locked.",
    timing: "Revision cycle",
    output: "Approved picture cut",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "Finishing and quality review",
    description:
      "Graphics, captions, sound, color and technical export requirements are completed and checked against the approved brief.",
    timing: "Final production cycle",
    output: "Finished master video",
    icon: SlidersHorizontal,
  },
  {
    number: "06",
    title: "Exports and handover",
    description:
      "Final videos are supplied in the agreed sizes, codecs and platform versions with organized naming for easier publishing and storage.",
    timing: "Project close",
    output: "Delivery package",
    icon: FolderCheck,
  },
];

const DELIVERY_FORMATS = [
  {
    title: "Master video",
    description:
      "The primary approved edit supplied at the agreed resolution, duration and technical specification.",
    icon: Play,
  },
  {
    title: "Platform adaptations",
    description:
      "Landscape, square or vertical versions reframed and adjusted for the intended digital placements.",
    icon: Ratio,
  },
  {
    title: "Captioned versions",
    description:
      "Burned-in subtitle or caption versions prepared when mobile, silent-view or accessibility requirements apply.",
    icon: Captions,
  },
  {
    title: "Shorter cutdowns",
    description:
      "Condensed edits created from the approved master for campaigns, teasers, social posts or internal distribution.",
    icon: Gauge,
  },
];

const QUALITY_CONTROLS = [
  "Narrative and approved-message consistency",
  "Clean cuts, continuity and scene transitions",
  "Accurate names, captions and on-screen text",
  "Dialogue clarity and balanced audio levels",
  "Color consistency across cameras and scenes",
  "Brand asset, logo and typography compliance",
  "Platform-safe framing and readable graphics",
  "Final resolution, format and export verification",
];

const WORK_ITEMS = [
  {
    category: "Long-form content",
    title: "Structured videos that hold the complete story",
    description:
      "Educational, interview, product and thought-leadership edits organized for clarity, credibility and sustained viewing.",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Long-form video editing work by BrainADZ",
  },
  {
    category: "Brand and campaign films",
    title: "Focused edits built around one communication goal",
    description:
      "Promotional and campaign videos combining footage, graphics, sound and brand direction into a polished final asset.",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Promotional video editing and campaign work by BrainADZ",
  },
  {
    category: "Multi-format delivery",
    title: "Master videos adapted for practical distribution",
    description:
      "Approved edits extended into shorter durations and alternate ratios while retaining the core message and visual system.",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Multi-platform video editing work by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What types of videos do you edit?",
    answer:
      "We edit YouTube videos, interviews, podcasts, product demonstrations, promotional films, campaign videos, event highlights and multi-platform cutdowns. The exact approach depends on the footage, audience, duration and communication objective.",
  },
  {
    question: "Can you edit footage recorded by our internal team?",
    answer:
      "Yes. We regularly work with footage recorded by internal teams, creators, production partners and event crews. Before starting, we review the available files to identify any quality, continuity, audio or coverage limitations that may affect the final edit.",
  },
  {
    question: "Do you provide scriptwriting or only editing?",
    answer:
      "We can work from your finished script or help organize an outline, narrative structure, voice-over flow and on-screen messaging. Full script development can be included when it is required by the project scope.",
  },
  {
    question: "Can you add subtitles, titles and motion graphics?",
    answer:
      "Yes. The edit can include subtitles, lower thirds, opening titles, product callouts, animated text, logo motion and simple explainer graphics. More complex animation or 3D production is scoped separately when required.",
  },
  {
    question: "Do you improve poor-quality footage or audio?",
    answer:
      "We can improve many common issues through exposure correction, shot matching, stabilization, dialogue cleanup and audio balancing. However, severely blurred, clipped, noisy or missing material cannot always be fully restored, so limitations are flagged during footage review.",
  },
  {
    question: "How does the revision process work?",
    answer:
      "The project follows defined review stages, usually beginning with the rough cut and then moving to finishing. Consolidated, time-coded feedback helps revisions stay accurate and prevents conflicting comments from slowing the workflow.",
  },
  {
    question: "Can one video be adapted for different platforms?",
    answer:
      "Yes. An approved master can be adapted into landscape, square, vertical or shorter versions when the original composition and footage support those formats. Important text and subjects are repositioned rather than simply cropped.",
  },
  {
    question: "What files do you need to begin?",
    answer:
      "We typically need the raw footage, script or brief, logo and brand assets, preferred references, music or voice-over files when available, and the required duration, platform, ratio and deadline. We provide a clear intake checklist before production starts.",
  },
];

export default function VideoEditingServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero section */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="Professional video editing and post-production workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.8)_32%,rgba(0,0,0,0.4)_58%,rgba(0,0,0,0.05)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.3)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link href="/" className="text-[#E1122B] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Video Editing Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Video Editing Services
          </h1>

          <div className="mt-auto max-w-[720px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn raw footage into clear, polished videos through purposeful
              storytelling, professional post-production and reliable multi-format
              delivery.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Start your video project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky page navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Video editing page navigation"
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

          <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Every strong video begins with a clear story
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Video editing is not only about shortening clips or adding
                transitions. BrainADZ reviews the footage, identifies the strongest
                narrative and builds a complete post-production system around the
                audience, platform and business objective. The result is a video
                that feels intentional from the first frame to the final action.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your footage
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Video editing timeline and post-production workflow"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Structured editing from footage review to final delivery
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
        id="services"
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
              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Post-production shaped around the purpose of the video
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Different video formats need different pacing, information density
              and finishing. We build the edit around how the content will be
              watched and what the viewer should understand or do next.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {EDITING_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
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

      {/* Editing system */}
      <section
        id="editing-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="lg:sticky lg:top-[188px] lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Editing System
                </p>
              </div>
              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                From raw footage to a finished viewing experience
              </h2>
              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
                The edit is developed in layers. Structure comes first, followed
                by pace, visual communication and technical finishing so design
                choices never hide a weak story.
              </p>
            </div>

            <div className="border-t border-white/15">
              {EDITING_SYSTEM.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_190px] lg:gap-7 lg:py-8"
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
                      <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-white/56 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>

                    <div className="border-t border-white/15 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                      <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/38">
                        Output
                      </p>
                      <p className="mt-2 text-[14px] leading-6 text-white/68">
                        {step.output}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Post-Production Capabilities
            </p>
          </div>
          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            The layers that make an edit feel complete
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {POST_PRODUCTION_CAPABILITIES.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-white text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[21px] font-semibold leading-tight text-black">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {capability.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-black/10 pt-5">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/66"
                      >
                        <span aria-hidden="true" className="text-[#E1122B]">
                          -
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-16 rounded-[18px] border border-black/10 bg-[#fbfbfb] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Project Inputs
                </p>
                <h3 className="mt-4 max-w-[620px] text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[38px]">
                  A better handover creates a better edit
                </h3>
                <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-black/58">
                  Clear source files and production context reduce assumptions,
                  protect accuracy and allow more time to be spent on storytelling
                  and finishing.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {PROJECT_INPUTS.map((input) => {
                  const Icon = input.icon;

                  return (
                    <article
                      key={input.title}
                      className="rounded-[12px] border border-black/10 bg-white p-5"
                    >
                      <Icon
                        className="h-6 w-6 text-[#E1122B]"
                        strokeWidth={1.6}
                      />
                      <h4 className="mt-5 text-[17px] font-semibold leading-6 text-black">
                        {input.title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-6 text-black/56">
                        {input.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
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
              A controlled workflow from intake to final export
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Review stages are separated so structural feedback is resolved before
              time is spent on final graphics, color and sound. This keeps decisions
              clear and revisions efficient.
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

      {/* Delivery and quality */}
      <section
        id="delivery"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Delivery and Quality
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Finished for the way your team will use it
              </h2>
            </div>
            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Delivery is planned before editing begins, preventing last-minute
              crops, unreadable graphics or missing versions at the publishing
              stage.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {DELIVERY_FORMATS.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.2)]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-semibold leading-6 text-black">
                    {format.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {format.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[16px] border border-black/10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="bg-black p-7 text-white sm:p-9 lg:p-10">
              <BadgeCheck className="h-10 w-10 text-[#E1122B]" strokeWidth={1.5} />
              <h3 className="mt-8 max-w-[520px] text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[38px]">
                Quality checks before every final export
              </h3>
              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-white/58">
                Creative approval and technical readiness are both checked so the
                delivered file works beyond the editing timeline.
              </p>
            </div>

            <div className="grid gap-x-8 bg-white p-7 sm:grid-cols-2 sm:p-9 lg:p-10">
              {QUALITY_CONTROLS.map((control) => (
                <div
                  key={control}
                  className="flex items-start gap-3 border-b border-black/10 py-4 text-[14px] leading-6 text-black/68"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                    strokeWidth={1.8}
                  />
                  <span>{control}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Selected Work
            </p>
          </div>
          <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Editing systems built for different kinds of stories
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_42px_rgba(0,0,0,0.05)]"
              >
                <div className="aspect-video overflow-hidden bg-[#f2f2f2]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {item.description}
                  </p>
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
              Questions before the first cut?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              These are the practical details teams usually need before handing
              over footage for professional video editing.
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