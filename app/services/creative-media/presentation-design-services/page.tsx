/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardCheck,
  Compass,
  CopyCheck,
  FileArchive,
  FileCheck2,
  FileSearch,
  FolderKanban,
  Grid3X3,
  ImageIcon,
  Images,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  MessageSquareText,
  MonitorPlay,
  PackageCheck,
  Palette,
  PanelsTopLeft,
  PenTool,
  Presentation,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  TextCursorInput,
  Users,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Presentation Design Services | BrainADZ Marketing",
  description:
    "Professional presentation design services by BrainADZ Marketing for sales decks, investor presentations, company profiles, corporate decks and reusable slide templates.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Deck Types", href: "#deck-types" },
  { label: "Slide System", href: "#slide-system" },
  { label: "Data & Story", href: "#data-story" },
  { label: "Process", href: "#process" },
  { label: "Handover", href: "#handover" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "A clearer business story",
    description:
      "Turn complex information into a focused narrative that helps the audience understand the message and remember the key points.",
    icon: BookOpenText,
  },
  {
    title: "Stronger visual credibility",
    description:
      "Present ideas with polished layouts, consistent branding and professional slide design that supports confidence in the business.",
    icon: ShieldCheck,
  },
  {
    title: "Better audience attention",
    description:
      "Use hierarchy, pacing, imagery and visual contrast to keep meetings, pitches and presentations easier to follow.",
    icon: Target,
  },
  {
    title: "Reusable presentation assets",
    description:
      "Give teams editable templates and practical slide systems that reduce repeated design work across future presentations.",
    icon: CopyCheck,
  },
];

const DECK_TYPES = [
  {
    title: "Sales and business development decks",
    description:
      "Structure your offer around customer priorities, differentiators, proof and next steps for stronger sales conversations.",
    points: [
      "Sales pitch and proposal presentations",
      "Service, solution and product decks",
      "Case study and capability slides",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Investor and fundraising presentations",
    description:
      "Present the opportunity, business model, traction and financial story with a clear investor-ready narrative.",
    points: [
      "Pitch deck design and restructuring",
      "Market, traction and business-model slides",
      "Funding ask and roadmap visualization",
    ],
    icon: BarChart3,
  },
  {
    title: "Company profiles and corporate decks",
    description:
      "Build a concise and credible company story for customers, partners, vendors, institutions and internal stakeholders.",
    points: [
      "Company introduction and profile decks",
      "Credentials and capability presentations",
      "Leadership, infrastructure and milestone slides",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Reports and internal presentations",
    description:
      "Make business updates, reviews and planning discussions easier to understand through consistent information design.",
    points: [
      "Quarterly and annual review decks",
      "Strategy and planning presentations",
      "Management and board communication",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Training and educational presentations",
    description:
      "Organize learning content into clear modules, examples and visual explanations that support attention and recall.",
    points: [
      "Training modules and workshop decks",
      "Educational and onboarding presentations",
      "Process, policy and knowledge slides",
    ],
    icon: Users,
  },
  {
    title: "Conference and keynote presentations",
    description:
      "Create stage-ready slides with strong visual rhythm, reduced text and clear moments for audience emphasis.",
    points: [
      "Keynote and speaker-support slides",
      "Event and conference presentations",
      "Large-screen visual optimization",
    ],
    icon: MonitorPlay,
  },
];

const SLIDE_SYSTEM_LAYERS = [
  {
    number: "01",
    title: "Narrative architecture",
    description:
      "Define the opening, problem, evidence, solution, proof and closing sequence so every slide supports one connected business story.",
    output: "Deck storyline and flow",
    icon: Compass,
  },
  {
    number: "02",
    title: "Information hierarchy",
    description:
      "Organize headings, supporting copy, visuals and emphasis so audiences can scan and understand each slide quickly.",
    output: "Clear slide hierarchy",
    icon: TextCursorInput,
  },
  {
    number: "03",
    title: "Visual language",
    description:
      "Translate brand colors, typography, imagery, iconography and graphic elements into a consistent presentation style.",
    output: "Presentation visual system",
    icon: Palette,
  },
  {
    number: "04",
    title: "Slide-layout library",
    description:
      "Create flexible layouts for text, comparisons, timelines, processes, statistics, team profiles, case studies and calls to action.",
    output: "Reusable layout family",
    icon: LayoutTemplate,
  },
  {
    number: "05",
    title: "Editing and governance",
    description:
      "Build editable master slides and practical usage rules that help teams create new slides without breaking the visual system.",
    output: "Master template toolkit",
    icon: Layers3,
  },
];

const DATA_STORY_AREAS = [
  {
    title: "Content structuring",
    description:
      "We reduce repetition, group related information and create a logical sequence before visual styling begins.",
    details: [
      "Slide-by-slide content organization",
      "Headline and message hierarchy",
      "Long-copy simplification",
    ],
    icon: BookOpenText,
  },
  {
    title: "Data visualization",
    description:
      "Tables and raw figures are converted into charts, comparisons and visual summaries suited to the decision being discussed.",
    details: [
      "Chart and graph redesign",
      "KPI and dashboard-style slides",
      "Financial and performance visualization",
    ],
    icon: BarChart3,
  },
  {
    title: "Diagram and process design",
    description:
      "Complex systems, workflows and relationships are rebuilt as diagrams that make the information easier to explain.",
    details: [
      "Process and workflow diagrams",
      "Timelines, roadmaps and frameworks",
      "Architecture and relationship visuals",
    ],
    icon: Grid3X3,
  },
  {
    title: "Image and icon direction",
    description:
      "Visual assets are selected and treated consistently so they support the message instead of appearing decorative or disconnected.",
    details: [
      "Photography and image curation",
      "Icon and illustration styling",
      "Background cleanup and visual consistency",
    ],
    icon: Images,
  },
];

const PRESENTATION_STANDARDS = [
  {
    title: "One core message per slide",
    description:
      "Each slide is designed around one primary idea so the audience is not forced to interpret competing messages.",
    icon: Target,
  },
  {
    title: "Readable at presentation distance",
    description:
      "Type sizes, contrast and spacing are checked for screens, meeting rooms and stage presentations instead of desktop viewing alone.",
    icon: MonitorPlay,
  },
  {
    title: "Brand consistency throughout",
    description:
      "Colors, typography, image treatment and graphic devices remain coordinated across the complete deck.",
    icon: BadgeCheck,
  },
  {
    title: "Editable without visual breakage",
    description:
      "Where editable delivery is required, layouts are built to support routine content changes by internal teams.",
    icon: FileCheck2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the audience and objective",
    description:
      "We clarify who will view the presentation, what they already know, what decision is required and how the deck will be delivered.",
    timing: "Discovery",
    output: "Audience and objective brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Audit and structure the content",
    description:
      "Existing slides, notes, documents and data are reviewed to remove duplication, identify gaps and define a stronger narrative sequence.",
    timing: "Content stage",
    output: "Deck structure and slide plan",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Set the visual direction",
    description:
      "We establish typography, color, imagery, graphic treatments and representative slide styles before extending the design across the deck.",
    timing: "Style stage",
    output: "Sample slides and visual route",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Design the complete presentation",
    description:
      "Approved direction is applied slide by slide with custom layouts, charts, diagrams, image treatment and consistent hierarchy.",
    timing: "Design stage",
    output: "Complete designed deck",
    icon: Presentation,
  },
  {
    number: "05",
    title: "Review content and visual accuracy",
    description:
      "Feedback is consolidated and applied while checking numbers, labels, sequence, spacing, alignment and overall presentation rhythm.",
    timing: "Review stage",
    output: "Refined presentation",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Prepare final delivery",
    description:
      "The approved presentation is packaged in the agreed formats with fonts, linked assets, editable masters or supporting files where included.",
    timing: "Final delivery",
    output: "Presentation handover package",
    icon: PackageCheck,
  },
];

const HANDOVER_COMPONENTS = [
  {
    title: "Editable presentation file",
    description:
      "The approved deck is organized for practical updates while protecting the intended hierarchy and layout system.",
    details: [
      "PowerPoint or Google Slides delivery",
      "Editable text, charts and approved elements",
      "Clean naming and slide organization",
    ],
    icon: Presentation,
  },
  {
    title: "Master slide template",
    description:
      "Reusable layouts can be prepared for teams that regularly create proposals, reports or internal presentations.",
    details: [
      "Cover, section and closing slides",
      "Text, image, chart and comparison layouts",
      "Consistent placeholders and style rules",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Supporting visual assets",
    description:
      "Approved icons, diagrams, charts and image treatments are organized for easier reuse and future deck expansion.",
    details: [
      "Custom diagrams and graphic elements",
      "Exported charts and supporting images",
      "Organized asset folders where applicable",
    ],
    icon: FolderKanban,
  },
  {
    title: "Presentation-ready exports",
    description:
      "Additional versions can be prepared for sharing, presenting, printing or review according to the final use case.",
    details: [
      "PDF sharing and review version",
      "Screen and print-ready output",
      "Optional image exports for selected slides",
    ],
    icon: FileArchive,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Business-first slide design",
    description:
      "Design decisions are made around the audience, decision and communication objective rather than decoration alone.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Content and design together",
    description:
      "Narrative structure, copy hierarchy and visual design are treated as connected parts of one presentation experience.",
    icon: MessageSquareText,
  },
  {
    title: "Custom layouts where they matter",
    description:
      "Important ideas, data and proof points receive purpose-built slides instead of being forced into repetitive templates.",
    icon: PenTool,
  },
  {
    title: "Practical editable delivery",
    description:
      "Final files are organized so internal teams can present confidently and make routine updates more efficiently.",
    icon: BadgeCheck,
  },
];

const WORK_ITEMS = [
  {
    title: "Sales presentation and solution narrative",
    category: "Sales Deck",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Professionally designed sales presentation by BrainADZ",
  },
  {
    title: "Corporate profile and capability deck",
    category: "Corporate Presentation",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Corporate presentation and company profile designed by BrainADZ",
  },
  {
    title: "Data-led strategy presentation",
    category: "Business Report",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Data visualization and strategy presentation designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in presentation design services?",
    answer:
      "The scope can include content review, deck restructuring, visual direction, slide design, chart and diagram redesign, image treatment, branded layouts, animation guidance, editable presentation delivery and reusable master slides. The exact mix depends on whether you need a new presentation, redesign or template system.",
  },
  {
    question: "Can you redesign an existing PowerPoint presentation?",
    answer:
      "Yes. We can improve an existing deck by restructuring the flow, simplifying slides, strengthening hierarchy, updating visuals and applying a consistent design system. The original content can be retained, edited or reorganized according to the agreed scope.",
  },
  {
    question: "Do you help with presentation content and storytelling?",
    answer:
      "Yes. We can organize content, improve slide headlines, reduce repetition and recommend a clearer narrative sequence. Full copywriting, detailed research or financial modeling can be scoped separately when the presentation requires substantial new content development.",
  },
  {
    question: "Which presentation formats do you work with?",
    answer:
      "Presentations can be designed for Microsoft PowerPoint, Google Slides or PDF delivery. Final format decisions depend on how your team edits, presents and shares the deck. Keynote compatibility or other specific requirements should be confirmed before production begins.",
  },
  {
    question: "Will the final presentation be editable?",
    answer:
      "Editable delivery can be included. Text, charts, tables and approved layout components are organized for practical updates, although certain custom graphics or image-based treatments may remain as placed visual assets. Editable requirements are confirmed at the start of the project.",
  },
  {
    question: "Can you create charts, diagrams and infographics for the deck?",
    answer:
      "Yes. Raw data, tables, processes and frameworks can be converted into charts, diagrams, timelines, comparisons and infographic-style slides. Data accuracy remains dependent on the final information supplied and approved by your team.",
  },
  {
    question: "Do you create reusable PowerPoint templates?",
    answer:
      "Yes. We can create a branded master presentation with reusable cover, section, content, image, chart, comparison, case-study and closing layouts. Templates are built around the recurring presentation needs of your team rather than providing a large set of unnecessary slide variations.",
  },
  {
    question: "How long does a presentation design project take?",
    answer:
      "Timelines depend on slide count, content readiness, complexity of charts and diagrams, number of stakeholders and review cycles. A visual redesign of finalized content usually moves faster than a presentation requiring restructuring, new copy and extensive data visualization.",
  },
];

export default function PresentationDesignServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ presentation design team and creative workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.80)_30%,rgba(0,0,0,0.40)_57%,rgba(0,0,0,0.03)_100%)]" />
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
            <span className="text-white">Presentation Design Services</span>
          </nav>

          <h1 className="mt-7 max-w-[940px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Presentation Design Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn business ideas, data and complex information into clear,
              persuasive and professionally designed presentations.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Design your presentation
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Presentation design page navigation"
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
            Make every slide support the decision you want the audience to make
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Presentation design is not only about making slides look better.
                BrainADZ combines content structure, visual hierarchy, brand
                consistency, data visualization and editable slide systems to
                help teams explain ideas more clearly and present with greater
                confidence.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your presentation
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Professional business presentation designed by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace with a selected presentation-design project
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

      {/* Deck types */}
      <section
        id="deck-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Presentation Types
                </p>
              </div>
              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Presentation design for important business conversations
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Each deck is structured around its audience and purpose. The same
              slide style should not be used for an investor pitch, training
              module, sales proposal and keynote presentation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {DECK_TYPES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
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

      {/* Slide system */}
      <section
        id="slide-system"
        className="scroll-mt-[164px] border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Slide System
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
              A presentation system, not a collection of decorated slides
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-8">
              Strong decks use repeatable principles for narrative, hierarchy,
              layouts and brand expression. This keeps the presentation coherent
              while allowing important slides to receive custom treatment.
            </p>
          </div>

          <div className="border-t border-white/15">
            {SLIDE_SYSTEM_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
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

      {/* Data and story */}
      <section
        id="data-story"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Data and Storytelling
                </p>
              </div>
              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Simplify complex information without removing what matters
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Dense content, raw tables and internal terminology can make even
              strong ideas difficult to present. We reorganize the information
              so the audience can follow the logic and identify the key message.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {DATA_STORY_AREAS.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="grid gap-6 rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition-colors hover:border-[#E1122B]/35 hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {area.description}
                    </p>

                    <div className="mt-6 grid gap-y-3 border-t border-black/10 pt-5">
                      {area.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                            strokeWidth={1.8}
                          />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-[18px] border border-black/10 bg-[#fbfbfb] p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-[#E1122B]" strokeWidth={1.7} />
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                Presentation Standards
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {PRESENTATION_STANDARDS.map((standard) => {
                const Icon = standard.icon;

                return (
                  <article
                    key={standard.title}
                    className="rounded-[12px] border border-black/10 bg-white p-5"
                  >
                    <Icon className="h-6 w-6 text-[#E1122B]" strokeWidth={1.6} />
                    <h3 className="mt-5 text-[17px] font-semibold leading-6 text-black">
                      {standard.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      {standard.description}
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Design Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From rough content to a presentation-ready deck
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow separates content decisions, visual direction and
              slide production. This reduces rework and ensures the complete
              deck is built around an approved communication approach.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start your deck project
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

      {/* Handover */}
      <section
        id="handover"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Delivery and Handover
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Final files prepared for presenting, sharing and future editing
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Delivery is planned around how the presentation will be used after
              approval. Editable decks, templates and supporting assets are
              included according to the agreed project scope.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {HANDOVER_COMPONENTS.map((component) => {
              const Icon = component.icon;

              return (
                <article
                  key={component.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-white text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[20px] font-semibold leading-[1.25] text-black">
                    {component.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {component.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {component.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-[13px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{detail}</span>
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
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Why BrainADZ
            </p>
          </div>

          <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Presentation design connected to business communication
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {WHY_BRAINADZ.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#E1122B]/55 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[18px] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-white/58">
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
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Selected Work
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Presentation systems designed for clarity and credibility
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#E1122B]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-[22px] font-semibold leading-[1.25] text-black">
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
              Questions about presentation design?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about content, formats, editable files, templates,
              timelines and presentation deliverables.
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