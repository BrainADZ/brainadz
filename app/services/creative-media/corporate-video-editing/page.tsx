/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Corporate Video Corporate Video Types | BrainADZ Marketing",
  description:
    "Corporate video editing services by BrainADZ Marketing for company profile films, leadership messages, internal communications, training videos, CSR stories and event content.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Video Types", href: "#services" },
  { label: "Communication System", href: "#editing-system" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Governance", href: "#delivery" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Clear corporate messaging",
    description:
      "Organize interviews, facts and supporting footage around one communication objective so the message stays easy to understand.",
    icon: MessageSquareText,
  },
  {
    title: "Credible brand presentation",
    description:
      "Use restrained editing, consistent graphics and professional finishing that supports trust rather than distracting from the subject.",
    icon: BadgeCheck,
  },
  {
    title: "Efficient stakeholder reviews",
    description:
      "Structure feedback, approvals and version control so leadership, marketing and compliance teams can review the same clear edit.",
    icon: FolderCheck,
  },
  {
    title: "More value from each production",
    description:
      "Extend approved footage into shorter internal, social, event and campaign versions wherever the source material supports it.",
    icon: RefreshCcw,
  },
];

const CORPORATE_VIDEO_TYPES = [
  {
    title: "Company profile films",
    description:
      "Present the organization, capabilities, facilities, people and market relevance through a structured corporate narrative.",
    points: [
      "Company story and positioning",
      "Leadership, facility and team footage",
      "Branded titles and closing message",
    ],
    icon: MonitorPlay,
  },
  {
    title: "Leadership and founder messages",
    description:
      "Edit executive communication with measured pacing, clean audio and visual authority while protecting the speaker's natural delivery.",
    points: [
      "CEO, founder and leadership addresses",
      "Teleprompter and multi-take assembly",
      "Name straps, captions and supporting visuals",
    ],
    icon: Camera,
  },
  {
    title: "Internal communication videos",
    description:
      "Turn operational updates, announcements and culture messages into concise videos that employees can follow across locations.",
    points: [
      "Business and department updates",
      "Employee communication and culture films",
      "Town-hall and policy summaries",
    ],
    icon: MessageSquareText,
  },
  {
    title: "Training and onboarding videos",
    description:
      "Build step-by-step learning content with clear chapters, demonstrations, labels and visual reinforcement for repeatable use.",
    points: [
      "Employee onboarding modules",
      "Product, process and safety training",
      "Chaptered and captioned delivery",
    ],
    icon: CirclePlay,
  },
  {
    title: "CSR and impact films",
    description:
      "Combine field footage, beneficiary voices and verified outcomes into responsible stories that communicate purpose with credibility.",
    points: [
      "Community and sustainability stories",
      "Impact data and contextual graphics",
      "Human-led documentary pacing",
    ],
    icon: Target,
  },
  {
    title: "Event and conference videos",
    description:
      "Create polished recaps, speaker edits and highlight films from conferences, exhibitions, launches and corporate gatherings.",
    points: [
      "Event highlight and recap films",
      "Speaker and panel-session edits",
      "Teasers and post-event cutdowns",
    ],
    icon: Clapperboard,
  },
];

const COMMUNICATION_SYSTEM = [
  {
    number: "01",
    title: "Define the business objective",
    description:
      "Clarify why the video is being created, who needs to act on it and which approved messages must remain central throughout the edit.",
    output: "Objective and audience map",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Organize the evidence",
    description:
      "Review interviews, footage, documents, data and brand references to identify the strongest proof points and any missing context.",
    output: "Content and footage map",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Build the corporate narrative",
    description:
      "Arrange statements, scenes and supporting visuals into a logical sequence with the right level of detail for the intended audience.",
    output: "Narrative structure",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Apply the brand language",
    description:
      "Introduce approved typography, colors, lower thirds, data graphics, music and motion in a way that feels professional and controlled.",
    output: "Branded communication layer",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Align stakeholders and finish",
    description:
      "Consolidate review comments, lock the approved message and complete picture, sound, captions, compliance checks and final versions.",
    output: "Approved corporate master",
    icon: BadgeCheck,
  },
];

const CORPORATE_CAPABILITIES = [
  {
    title: "Interview-led storytelling",
    description:
      "Shape leadership, employee, customer and partner interviews into a concise narrative without losing the speaker's meaning or credibility.",
    items: [
      "Multi-take and multi-camera assembly",
      "Question removal and response shaping",
      "Natural pacing and continuity",
      "Supporting B-roll placement",
    ],
    icon: Film,
  },
  {
    title: "Executive message editing",
    description:
      "Create calm, authoritative leadership videos with clean framing, balanced delivery and visual support appropriate for corporate audiences.",
    items: [
      "Speech and pause refinement",
      "Teleprompter take combination",
      "Name, title and topic supers",
      "Opening and closing brand frames",
    ],
    icon: Video,
  },
  {
    title: "Business-context visuals",
    description:
      "Use facilities, teams, products, processes, archive material and screen recordings to support claims and maintain visual interest.",
    items: [
      "Facility and operational B-roll",
      "Product and process cutaways",
      "Archive and stock integration",
      "Screen and document highlights",
    ],
    icon: ImagePlay,
  },
  {
    title: "Data and information graphics",
    description:
      "Translate approved statistics, timelines, structures and business information into clear on-screen graphics that remain easy to verify.",
    items: [
      "Metric and milestone callouts",
      "Process and location graphics",
      "Timeline and comparison visuals",
      "Readable captions and subtitles",
    ],
    icon: Captions,
  },
  {
    title: "Corporate motion package",
    description:
      "Create a consistent visual system for intros, lower thirds, section cards, transitions, logo motion and end frames across the film.",
    items: [
      "Logo reveal and end card",
      "Lower-third and title system",
      "Section and chapter cards",
      "Restrained branded transitions",
    ],
    icon: Sparkles,
  },
  {
    title: "Professional picture and sound",
    description:
      "Balance footage from different cameras and locations while protecting natural skin tones, product colors and clear spoken communication.",
    items: [
      "Color correction and shot matching",
      "Dialogue cleanup and leveling",
      "Music and ambient-sound treatment",
      "Final broadcast-safe mix review",
    ],
    icon: Palette,
  },
];

const PROJECT_REQUIREMENTS = [
  {
    title: "Communication brief and audience",
    description:
      "The purpose, viewers, desired response and internal stakeholders are defined before footage and messaging decisions are made.",
    icon: FileCheck2,
  },
  {
    title: "Approved script or talking points",
    description:
      "Final or near-final scripts, interview questions, claims and leadership talking points reduce avoidable message changes during editing.",
    icon: MessageSquareText,
  },
  {
    title: "Brand, legal and compliance assets",
    description:
      "Logos, fonts, brand guidelines, disclaimers, approved terminology and required credits keep the video aligned and reviewable.",
    icon: PanelsTopLeft,
  },
  {
    title: "Footage and delivery requirements",
    description:
      "Camera files, audio, archive assets, language needs, aspect ratios, resolution, deadline and distribution channels are confirmed at intake.",
    icon: FileArchive,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery and stakeholder alignment",
    description:
      "We confirm the communication objective, audience, decision-makers, approval sequence, confidentiality needs and final distribution plan.",
    timing: "Project start",
    output: "Corporate edit brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Content and footage audit",
    description:
      "Interviews, scripts, brand assets, supporting footage and claims are reviewed for quality, completeness and narrative usefulness.",
    timing: "Planning stage",
    output: "Content map and edit direction",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Narrative and rough cut",
    description:
      "The core story is assembled with the strongest statements and scenes, allowing stakeholders to review structure before final finishing.",
    timing: "First production cycle",
    output: "Reviewable rough cut",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Stakeholder review and picture lock",
    description:
      "Consolidated, time-coded feedback is applied to messaging, timing, names, claims and scene selection until the approved sequence is locked.",
    timing: "Approval cycle",
    output: "Approved picture cut",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "Branding, finishing and compliance",
    description:
      "Graphics, captions, sound and color are completed, followed by a final check of approved terminology, credits and technical requirements.",
    timing: "Final production cycle",
    output: "Finished corporate master",
    icon: SlidersHorizontal,
  },
  {
    number: "06",
    title: "Versions, delivery and archive",
    description:
      "The approved film is exported in the required languages, ratios and durations with clear naming for publishing, internal use and future access.",
    timing: "Project close",
    output: "Organized delivery package",
    icon: FolderCheck,
  },
];

const DELIVERY_OPTIONS = [
  {
    title: "Corporate master film",
    description:
      "The primary approved video supplied at the agreed duration, resolution, frame rate and technical specification.",
    icon: Play,
  },
  {
    title: "Department and platform versions",
    description:
      "Alternate edits or ratios prepared for websites, presentations, social channels, internal portals and event screens.",
    icon: Ratio,
  },
  {
    title: "Caption and language versions",
    description:
      "Burned-in captions, subtitle files, translated graphics or localized masters created from approved language content.",
    icon: Captions,
  },
  {
    title: "Short extracts and cutdowns",
    description:
      "Approved statements, teasers and shorter edits prepared for campaigns, recruitment, internal updates or post-event communication.",
    icon: Gauge,
  },
];

const GOVERNANCE_CONTROLS = [
  "Approved claims, names and job-title accuracy",
  "Brand guideline, logo and typography compliance",
  "Required legal lines, credits and disclaimers",
  "Confidential footage and restricted-asset handling",
  "Consolidated feedback and version-control discipline",
  "Caption, transcript and translated-text accuracy",
  "Licensed music, stock and third-party asset review",
  "Final export, file naming and archive verification",
];

const WORK_ITEMS = [
  {
    category: "Company Story",
    title: "Corporate films that explain who the organization is",
    description:
      "Leadership voices, facilities, people and capabilities combined into a focused profile that supports trust and business understanding.",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Corporate company profile video editing by BrainADZ",
  },
  {
    category: "Leadership Communication",
    title: "Executive messages presented with clarity and authority",
    description:
      "Measured edits for announcements, strategy updates and stakeholder communication with clean graphics, audio and brand consistency.",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Leadership and executive video editing by BrainADZ",
  },
  {
    category: "People and Impact",
    title: "Internal, training and CSR stories built for real audiences",
    description:
      "Employee, learning and impact content organized around useful information, authentic voices and practical distribution requirements.",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Internal communication and CSR video editing by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What types of corporate videos do you edit?",
    answer:
      "We edit company profile films, leadership messages, internal communication videos, training and onboarding content, CSR and sustainability stories, customer or employee interviews, event films and corporate campaign cutdowns.",
  },
  {
    question: "Can you work with footage recorded by different teams or vendors?",
    answer:
      "Yes. We can combine footage from internal teams, professional crews, event vendors, phones, video calls and archives. We first audit resolution, frame rate, audio, continuity and usage rights so limitations are clear before the edit begins.",
  },
  {
    question: "Can you help structure the script and corporate narrative?",
    answer:
      "Yes. We can organize approved talking points, interview responses and supporting facts into a clearer narrative. Full scriptwriting, interview planning or production direction can also be scoped when the project requires them.",
  },
  {
    question: "How do you manage feedback from multiple stakeholders?",
    answer:
      "We define decision-makers and review stages at the start, then request one consolidated set of time-coded comments per round. This reduces conflicting feedback and keeps message, compliance and creative approvals synchronized.",
  },
  {
    question: "Can confidential corporate footage be handled securely?",
    answer:
      "Confidentiality requirements, file access and restricted assets should be identified during intake. We can work within an agreed handover and review process, and project-specific confidentiality documentation can be arranged where required.",
  },
  {
    question: "Do you create captions and multilingual versions?",
    answer:
      "Yes. We can prepare subtitles, burned-in captions, translated on-screen graphics and localized masters using approved transcripts or translations supplied or validated by your team. Language accuracy remains part of the approval process.",
  },
  {
    question: "Can one corporate video be adapted for different channels?",
    answer:
      "Yes. An approved master can be adapted for websites, presentations, LinkedIn, YouTube, internal portals, event screens and shorter campaign placements when the original composition and content support those versions.",
  },
  {
    question: "What do you need before starting the edit?",
    answer:
      "We typically need the communication brief, audience, approved script or talking points, raw footage, brand guidelines, logos, names and titles, required claims or disclaimers, reference videos, language needs, target duration, formats and deadline.",
  },
];

export default function CorporateVideoEditingPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero section */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="Corporate video editing and executive communication workspace"
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
            <span className="text-white">Corporate Video Corporate Video Types</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Corporate Video Corporate Video Types
          </h1>

          <div className="mt-auto max-w-[720px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Transform company footage into credible corporate films through clear messaging, professional post-production and controlled stakeholder approvals.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
            >
              Start your corporate video
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky page navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Corporate video editing page navigation"
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
            Corporate video should make the business easier to understand
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Corporate video editing requires more than polished visuals. BrainADZ aligns the footage, approved messaging, business context and stakeholder expectations before shaping the narrative. The result is a credible film that helps employees, customers, partners or investors understand the organization without unnecessary complexity.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Discuss your corporate brief
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Corporate video editing timeline with interview, brand and approval workflow"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Structured corporate editing from message alignment to approved delivery
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

      {/* Corporate video types */}
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
                  Corporate Video Types
                </p>
              </div>
              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Corporate video formats built around the communication objective
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Leadership communication, training content and company profile films serve different audiences. Each edit is structured around the required message, level of detail, approval process and distribution environment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CORPORATE_VIDEO_TYPES.map((service) => {
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

      {/* Communication system */}
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
                  Communication System
                </p>
              </div>
              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                From approved business message to a credible corporate film
              </h2>
              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
                Corporate editing begins with message control. Narrative, evidence, brand language and production finishing are added in sequence so the final film remains clear, accurate and suitable for stakeholder review.
              </p>
            </div>

            <div className="border-t border-white/15">
              {COMMUNICATION_SYSTEM.map((step) => {
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
              Corporate Editing Capabilities
            </p>
          </div>
          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            The capabilities behind clear corporate communication
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CORPORATE_CAPABILITIES.map((capability) => {
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
                  Project Requirements
                </p>
                <h3 className="mt-4 max-w-[620px] text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-black sm:text-[38px]">
                  Clear inputs reduce revisions and approval risk
                </h3>
                <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-black/58">
                  Corporate projects move more efficiently when approved messaging,
                  footage, brand assets and decision-makers are aligned before the
                  first cut.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {PROJECT_REQUIREMENTS.map((input) => {
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
              A controlled workflow from stakeholder alignment to final delivery
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Message approval, narrative review and production finishing are handled
              in clear stages. This gives corporate teams the right point to comment
              without reopening completed work late in the process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your corporate video workflow
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

      {/* Governance and delivery */}
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
                  Governance and Delivery
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Approved, controlled and ready for every required audience
              </h2>
            </div>
            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Corporate distribution, language versions, internal approvals and compliance requirements are planned early so the final package is complete when stakeholders sign off.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {DELIVERY_OPTIONS.map((format) => {
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
                Governance checks before corporate sign-off
              </h3>
              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-white/58">
                Message accuracy, brand compliance and technical readiness are reviewed together so the delivered film remains dependable beyond the production team.
              </p>
            </div>

            <div className="grid gap-x-8 bg-white p-7 sm:grid-cols-2 sm:p-9 lg:p-10">
              {GOVERNANCE_CONTROLS.map((control) => (
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
            Corporate editing systems built for different communication needs
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
              Questions before corporate production begins?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              These are the practical details marketing, leadership and communication teams usually need before beginning a corporate video edit.
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
