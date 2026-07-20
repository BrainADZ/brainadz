/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Check,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  FileBarChart,
  FileCheck2,
  FileSearch,
  GalleryHorizontalEnd,
  GitCompareArrows,
  Grid3X3,
  ImageIcon,
  LayoutDashboard,
  ListTree,
  MessageSquareText,
  Milestone,
  PackageCheck,
  PanelsTopLeft,
  PencilRuler,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TextSearch,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Infographic Design Services | BrainADZ Marketing",
  description:
    "Professional infographic design services by BrainADZ Marketing for data visualization, process graphics, comparison charts, timelines, reports, presentations, websites and social media.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Infographic Types", href: "#infographic-types" },
  { label: "Storytelling", href: "#storytelling" },
  { label: "Formats", href: "#formats" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Faster information understanding",
    description:
      "Turn dense text, statistics and processes into a visual structure audiences can scan and understand more quickly.",
    icon: TextSearch,
  },
  {
    title: "Clearer message hierarchy",
    description:
      "Guide attention from the central insight to supporting facts, comparisons and the intended next step.",
    icon: ListTree,
  },
  {
    title: "More shareable content",
    description:
      "Create useful visual assets that can support reports, presentations, websites, campaigns and social publishing.",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Consistent brand communication",
    description:
      "Present information through a repeatable visual language aligned with your colors, typography and communication style.",
    icon: BadgeCheck,
  },
];

const INFOGRAPHIC_TYPES = [
  {
    title: "Statistical and data infographics",
    description:
      "Convert numbers, percentages, survey findings and performance metrics into readable visual stories.",
    points: [
      "Key-statistic and insight-led layouts",
      "Charts, graphs and proportional visuals",
      "Research and campaign-result summaries",
    ],
    icon: BarChart3,
  },
  {
    title: "Process and workflow infographics",
    description:
      "Explain how a service, system, customer journey or operational workflow moves from one stage to another.",
    points: [
      "Step-by-step process visualisation",
      "Decision paths and workflow diagrams",
      "Service and production explanations",
    ],
    icon: Workflow,
  },
  {
    title: "Comparison infographics",
    description:
      "Help audiences evaluate options, features, approaches or before-and-after differences with less cognitive effort.",
    points: [
      "Feature and product comparisons",
      "Problem-versus-solution graphics",
      "Before-and-after visual structures",
    ],
    icon: GitCompareArrows,
  },
  {
    title: "Timeline and milestone infographics",
    description:
      "Organise history, growth, roadmaps and project milestones into a clear chronological sequence.",
    points: [
      "Company and product timelines",
      "Project roadmaps and launch plans",
      "Event, policy and industry histories",
    ],
    icon: Milestone,
  },
  {
    title: "Educational and explainer infographics",
    description:
      "Break down complex subjects into accessible visual sections for awareness, training and content marketing.",
    points: [
      "Concept and topic explainers",
      "How-to and best-practice graphics",
      "Awareness and educational campaigns",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Report and presentation infographics",
    description:
      "Create executive-ready visuals for reports, proposals, presentations and internal communication materials.",
    points: [
      "Executive-summary visual pages",
      "Report charts and information panels",
      "Slide-ready diagrams and data stories",
    ],
    icon: FileBarChart,
  },
];

const STORYTELLING_LAYERS = [
  {
    number: "01",
    title: "Communication objective",
    description:
      "Clarify what the audience should understand, remember or do after viewing the infographic.",
    output: "Purpose and audience brief",
    icon: Target,
  },
  {
    number: "02",
    title: "Content and source review",
    description:
      "Review supplied text, facts, statistics, references and brand requirements before building the visual structure.",
    output: "Validated content set",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Information hierarchy",
    description:
      "Separate the main insight from supporting points and organise the sequence around natural reading behaviour.",
    output: "Content hierarchy map",
    icon: ListTree,
  },
  {
    number: "04",
    title: "Visual model selection",
    description:
      "Choose the right combination of charts, diagrams, icons, timelines, illustrations and text blocks for the subject.",
    output: "Visual storytelling direction",
    icon: LayoutDashboard,
  },
  {
    number: "05",
    title: "Narrative and design execution",
    description:
      "Build a connected visual flow where every section supports the core message instead of behaving like isolated decoration.",
    output: "Complete infographic design",
    icon: PencilRuler,
  },
  {
    number: "06",
    title: "Format adaptation",
    description:
      "Rework the approved design for the channels, sizes and viewing conditions included in the final scope.",
    output: "Channel-ready asset family",
    icon: GalleryHorizontalEnd,
  },
];

const FORMAT_AREAS = [
  {
    title: "Social media infographics",
    description:
      "Create concise, mobile-friendly information graphics for feeds, carousels, stories and professional social channels.",
    details: [
      "Single-post data graphics",
      "Multi-slide infographic carousels",
      "Vertical story and reel-support visuals",
    ],
    icon: Smartphone,
  },
  {
    title: "Website and blog graphics",
    description:
      "Support landing pages, articles and resource hubs with visuals that simplify information and improve content readability.",
    details: [
      "Blog and article infographics",
      "Website process and feature diagrams",
      "Downloadable resource graphics",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Reports and presentations",
    description:
      "Turn findings, strategies and performance information into executive-ready charts, diagrams and summary pages.",
    details: [
      "Annual and research reports",
      "Pitch and corporate presentations",
      "Internal dashboards and summaries",
    ],
    icon: FileBarChart,
  },
  {
    title: "Print and event communication",
    description:
      "Prepare high-resolution information graphics for brochures, posters, exhibitions, training materials and physical displays.",
    details: [
      "Poster and brochure infographics",
      "Exhibition and display graphics",
      "Training and awareness materials",
    ],
    icon: ImageIcon,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Collect the content and context",
    description:
      "We review the objective, audience, source material, data, brand assets, required dimensions and intended use of the infographic.",
    timing: "Day 1",
    output: "Content and requirement checklist",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Structure the information",
    description:
      "The content is edited into a logical hierarchy with a clear opening insight, supporting sections and final takeaway.",
    timing: "Days 1-2",
    output: "Information architecture",
    icon: ListTree,
  },
  {
    number: "03",
    title: "Plan the visual approach",
    description:
      "We define the layout, visual metaphors, chart types, icon style, illustration approach and overall reading flow.",
    timing: "Days 2-3",
    output: "Wireframe and art direction",
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "Design the infographic",
    description:
      "The approved structure is developed into a polished branded visual with balanced typography, graphics and data presentation.",
    timing: "Production cycle",
    output: "First design draft",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Review content and visuals",
    description:
      "Feedback is consolidated around factual accuracy, hierarchy, readability, brand alignment and visual clarity.",
    timing: "Review cycle",
    output: "Approved master design",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Adapt and deliver",
    description:
      "The master infographic is resized, quality-checked and exported in the agreed formats with organised final files.",
    timing: "Final review",
    output: "Complete delivery package",
    icon: FileCheck2,
  },
];

const QUALITY_STANDARDS = [
  {
    title: "Source-aligned accuracy",
    description:
      "Every number, label and statement is checked against the client-approved content and reference material.",
    details: [
      "Consistent figures and units",
      "Clear labels and legends",
      "Client approval of final claims",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Readable information hierarchy",
    description:
      "Headline scale, spacing, contrast and grouping help audiences understand what to read first and what supports it.",
    details: [
      "Visible primary insight",
      "Structured supporting information",
      "Balanced text and visual density",
    ],
    icon: ScanSearch,
  },
  {
    title: "Appropriate data visualisation",
    description:
      "Charts and diagrams are selected according to the relationship in the data rather than visual novelty alone.",
    details: [
      "Comparison-friendly chart choices",
      "Proportionally accurate graphics",
      "Avoidance of misleading visual scale",
    ],
    icon: BarChart3,
  },
  {
    title: "Production-ready delivery",
    description:
      "Files are prepared for their real publishing environment, including digital, presentation and print requirements.",
    details: [
      "Web and social exports",
      "High-resolution print files",
      "Editable source files when scoped",
    ],
    icon: PackageCheck,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Content-first design thinking",
    description:
      "The visual system starts with the information and audience rather than forcing every subject into the same template.",
    icon: MessageSquareText,
  },
  {
    title: "Business-ready communication",
    description:
      "Infographics are designed to support marketing, sales, reporting, training and professional communication outcomes.",
    icon: Target,
  },
  {
    title: "Multi-format design capability",
    description:
      "One approved visual direction can be adapted for social, websites, presentations, reports, campaigns and print.",
    icon: Grid3X3,
  },
  {
    title: "Structured quality control",
    description:
      "Content, data, spelling, alignment, readability, dimensions and export settings are checked before delivery.",
    icon: ShieldCheck,
  },
];

const WORK_ITEMS = [
  {
    title: "Data-led social infographic series",
    category: "Social Content",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Social media infographic designed by BrainADZ",
  },
  {
    title: "Process and service explainer graphic",
    category: "Business Communication",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Process infographic designed by BrainADZ",
  },
  {
    title: "Report and presentation data story",
    category: "Corporate Design",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Corporate report infographic designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in your infographic design service?",
    answer:
      "The scope can include content review, information hierarchy, wireframing, chart and diagram selection, icon or illustration styling, branded visual design, revisions, format adaptations and final exports. The exact deliverables depend on the length, complexity and intended use of the infographic.",
  },
  {
    question: "Do you write and research the infographic content?",
    answer:
      "We can help organise, shorten and structure client-supplied content. Research and long-form copy development can also be scoped separately when required. Final statistics, claims, citations and source accuracy remain subject to client review and approval.",
  },
  {
    question: "Can you design charts and graphs from our data?",
    answer:
      "Yes. We can convert approved spreadsheets, reports and data tables into charts, graphs and visual summaries. The supplied data should be final, clearly labelled and accompanied by the relevant units, time periods and source notes.",
  },
  {
    question: "Can one infographic be adapted for social media and print?",
    answer:
      "Yes. We can create a master visual and then rebuild it for social posts, carousels, stories, presentation slides, web pages and print. Adaptation is planned separately because each format requires different proportions, text density and reading behaviour.",
  },
  {
    question: "Do you provide editable infographic files?",
    answer:
      "Editable files can be included when agreed in the project scope. Depending on the design, delivery may include Adobe Illustrator, Photoshop, PowerPoint or another suitable editable format along with ready-to-use PNG, JPG or PDF exports.",
  },
  {
    question: "Will the design follow our brand guidelines?",
    answer:
      "Yes. We use your approved logo, colours, typography, icon style and imagery rules. When formal guidelines are unavailable, we establish a practical visual direction based on your existing brand materials before developing the complete infographic.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The number of review rounds is defined in the project scope. Revisions generally cover hierarchy, wording, colours, visual treatment and approved data corrections. Major changes to the content or structure after design approval may require a revised scope.",
  },
  {
    question: "How long does an infographic design project take?",
    answer:
      "Timelines depend on the amount of information, data readiness, chart complexity, illustration requirements, number of formats and review speed. A focused single infographic can move quickly, while research-heavy or multi-page infographic systems need a more structured schedule.",
  },
];

export default function InfographicDesignServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ infographic design team and creative workspace"
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
            <span className="text-white">Infographic Design Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Infographic Design Services
          </h1>

          <div className="mt-auto max-w-[820px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Transform complex information, data and processes into clear visual
              stories designed for faster understanding and stronger communication.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start an infographic project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Infographic design page navigation"
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
            Make complex information easier to understand, remember and share
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[740px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Infographic design is more than arranging icons around numbers.
                BrainADZ structures the message, selects the right visual model and
                builds a clear reading flow so data, processes and explanations become
                useful communication assets across marketing, sales and reporting.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your information
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Infographic and data visualisation design by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace with a selected infographic design project
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

      {/* Infographic types */}
      <section
        id="infographic-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Infographic Types
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right visual structure for every kind of information
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The format is selected according to the communication problem. A
              timeline, comparison, process or statistical story should not be forced
              into the same visual template.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {INFOGRAPHIC_TYPES.map((type) => {
              const Icon = type.icon;

              return (
                <article
                  key={type.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[21px] font-semibold leading-[1.25] text-black">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {type.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {type.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[13px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#E1122B]"
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

      {/* Storytelling system */}
      <section
        id="storytelling"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Data Storytelling
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A visual narrative built around one clear communication goal
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strong infographic design connects the content, hierarchy and visual
              model before styling begins. This prevents attractive graphics from
              weakening the actual information.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Structure your visual story
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {STORYTELLING_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
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

      {/* Formats */}
      <section
        id="formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Formats & Applications
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Infographics prepared for the channel where they will be used
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Content density, proportions and typography are adapted to real viewing
              conditions instead of simply resizing one master file for every platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {FORMAT_AREAS.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="rounded-[14px] border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#E1122B]/55 hover:bg-white/[0.07]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[20px] font-semibold leading-[1.25] text-white">
                    {format.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-white/58">
                    {format.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-white/12 pt-5">
                    {format.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-[13px] leading-6 text-white/68"
                      >
                        <CircleDot
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-[#E1122B]"
                          strokeWidth={2}
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
              From source material to a clear visual communication asset
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow separates content structure from visual execution so major
              information problems are resolved before final design production begins.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your infographic
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Quality & Delivery
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Visual clarity supported by content, data and production checks
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Final quality is evaluated at the level of information accuracy,
              reading behaviour, visual proportion and the technical requirements of
              the publishing channel.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {QUALITY_STANDARDS.map((standard) => {
              const Icon = standard.icon;

              return (
                <article
                  key={standard.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[20px] font-semibold leading-[1.25] text-black">
                    {standard.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {standard.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {standard.details.map((detail) => (
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

          <h2 className="mt-5 max-w-[1140px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Infographic design connected to real communication requirements
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Selected Work
              </p>
            </div>
            <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Information transformed into structured and useful visual stories
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
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
              Questions about infographic design?
            </h2>
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about content, data, formats, editable files,
              revisions, brand consistency and production timelines.
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
