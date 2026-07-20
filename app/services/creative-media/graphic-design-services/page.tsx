/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  Brush,
  Check,
  ChevronDown,
  CircleGauge,
  FileImage,
  FileSearch,
  Gem,
  Layers3,
  LayoutGrid,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  Presentation,
  RefreshCcw,
  Rocket,
  Shapes,
  Sparkles,
  Target,
  TimerReset,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Graphic Design Services | BrainADZ Marketing",
  description:
    "Professional graphic design services by BrainADZ Marketing for brands, campaigns, social media, print, presentations and digital platforms.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger visual identity",
    description:
      "Create a recognizable visual language that makes every brand interaction feel consistent and intentional.",
    icon: Palette,
  },
  {
    title: "Faster creative execution",
    description:
      "Move from brief to approved design through a clear workflow built for regular campaigns and quick turnarounds.",
    icon: TimerReset,
  },
  {
    title: "Campaign-ready communication",
    description:
      "Turn offers, messages and ideas into clear visual assets designed for the channel and audience using them.",
    icon: Target,
  },
  {
    title: "Better brand consistency",
    description:
      "Keep colors, typography, layouts and messaging aligned across digital, social, sales and print communication.",
    icon: BadgeCheck,
  },
];

const DESIGN_SERVICES = [
  {
    title: "Marketing and campaign creatives",
    description:
      "High-impact creative assets built around campaign objectives, audience context and platform requirements.",
    points: [
      "Digital campaign banners and promotional graphics",
      "Launch creatives, offers and seasonal campaigns",
      "Display advertising and website campaign assets",
    ],
    icon: Rocket,
  },
  {
    title: "Social media design",
    description:
      "Consistent, platform-ready social designs that help brands publish faster without losing visual quality.",
    points: [
      "Static posts, stories and carousel layouts",
      "Reel covers, profile assets and campaign templates",
      "Monthly visual systems for regular content",
    ],
    icon: MonitorSmartphone,
  },
  {
    title: "Corporate and sales communication",
    description:
      "Professional design support for presentations, proposals, reports and sales materials used in important conversations.",
    points: [
      "Company profiles, brochures and pitch decks",
      "Sales sheets, service documents and reports",
      "Presentation templates and internal communication",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Print and packaging design",
    description:
      "Production-ready artwork created with the right dimensions, hierarchy and technical preparation for print.",
    points: [
      "Flyers, catalogues, posters and standees",
      "Packaging labels, sleeves and product inserts",
      "Exhibition panels and large-format graphics",
    ],
    icon: FileImage,
  },
  {
    title: "Brand design systems",
    description:
      "Flexible visual systems that help teams maintain consistency across repeated creative requirements.",
    points: [
      "Typography, color and layout direction",
      "Reusable templates and graphic elements",
      "Design rules for digital and print applications",
    ],
    icon: Layers3,
  },
  {
    title: "Custom visual communication",
    description:
      "Purpose-built design support for unique campaigns, products, industries and communication challenges.",
    points: [
      "Infographics and visual explainers",
      "Custom illustrations and icon systems",
      "Event, employer-brand and internal creatives",
    ],
    icon: PenTool,
  },
];

const DELIVERABLE_GROUPS = [
  {
    category: "Digital Design",
    description:
      "Responsive creative assets prepared for websites, campaigns, landing pages and digital promotion.",
    items: [
      "Website banners",
      "Display advertisements",
      "Email campaign graphics",
      "Landing-page visuals",
      "App and dashboard graphics",
    ],
    icon: MousePointerClick,
  },
  {
    category: "Social Design",
    description:
      "Platform-ready layouts created for consistent publishing, campaigns and audience engagement.",
    items: [
      "Instagram posts",
      "Carousels and stories",
      "LinkedIn creatives",
      "Reel covers",
      "YouTube channel graphics",
    ],
    icon: LayoutGrid,
  },
  {
    category: "Corporate Design",
    description:
      "Polished visual communication for sales, management, investor and stakeholder requirements.",
    items: [
      "Company profiles",
      "Pitch decks",
      "Proposals and reports",
      "Case-study layouts",
      "Corporate presentations",
    ],
    icon: Presentation,
  },
  {
    category: "Print Design",
    description:
      "Accurate, print-ready artwork for marketing, events, products and physical brand touchpoints.",
    items: [
      "Brochures and catalogues",
      "Posters and flyers",
      "Packaging and labels",
      "Standees and signage",
      "Exhibition graphics",
    ],
    icon: BookOpenText,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the requirement",
    description:
      "We clarify the objective, audience, format, content, brand guidelines, references and production specifications before starting design.",
    timing: "Day 1",
    output: "Creative brief and asset checklist",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define the visual direction",
    description:
      "We establish the layout approach, visual hierarchy, typography, color treatment and design direction suited to the communication goal.",
    timing: "Day 1-2",
    output: "Approved design direction",
    icon: Shapes,
  },
  {
    number: "03",
    title: "Create the design",
    description:
      "Our design team develops the selected concept with careful attention to composition, brand consistency and platform requirements.",
    timing: "Project based",
    output: "First creative draft",
    icon: Brush,
  },
  {
    number: "04",
    title: "Review and refine",
    description:
      "Feedback is consolidated into a structured revision cycle so changes remain clear, controlled and aligned with the original objective.",
    timing: "1-2 review cycles",
    output: "Final approved artwork",
    icon: RefreshCcw,
  },
  {
    number: "05",
    title: "Prepare final files",
    description:
      "We export the design in the correct dimensions, formats and resolutions for digital publishing, printing or future editing.",
    timing: "Final stage",
    output: "Production-ready file package",
    icon: Boxes,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Business-first design thinking",
    description:
      "Every visual decision starts with what the communication needs to achieve, not decoration alone.",
    icon: CircleGauge,
  },
  {
    title: "Cross-platform consistency",
    description:
      "Design systems are adapted for different formats while preserving one recognizable brand expression.",
    icon: Layers3,
  },
  {
    title: "Flexible creative support",
    description:
      "Work with us for individual projects, monthly design requirements or ongoing campaign execution.",
    icon: Sparkles,
  },
  {
    title: "Production-ready delivery",
    description:
      "Final files are organized and exported according to the technical requirements of the chosen medium.",
    icon: Gem,
  },
];

const WORK_ITEMS = [
  {
    title: "Social campaign design",
    category: "Digital and Social",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Social media campaign design created by BrainADZ",
  },
  {
    title: "Brand-led visual communication",
    category: "Brand and Marketing",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Brand-led graphic design work created by BrainADZ",
  },
  {
    title: "Promotional creative system",
    category: "Campaign Design",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Promotional campaign creative designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in your graphic design service?",
    answer:
      "The scope can include concept development, layout design, typography, image treatment, brand alignment, revisions and final file preparation. The exact deliverables depend on whether the requirement is for social media, digital campaigns, print, presentations, packaging or corporate communication.",
  },
  {
    question: "Can you follow our existing brand guidelines?",
    answer:
      "Yes. We can work within your existing logo, color, typography and layout guidelines. When formal guidelines are not available, we can review existing brand material and establish a practical visual direction before beginning the project.",
  },
  {
    question: "Do you provide designs for both digital and print use?",
    answer:
      "Yes. We create digital assets for websites, advertising and social platforms, as well as print-ready artwork for brochures, catalogues, packaging, signage, standees and exhibition graphics. Each file is prepared according to the required dimensions and output specifications.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Revision terms are finalized with the project scope. Most projects include a defined number of consolidated review cycles. Additional changes, new concepts or major changes to approved content can be scoped separately when required.",
  },
  {
    question: "What files will we receive after approval?",
    answer:
      "Final delivery can include JPG, PNG, PDF or other required export formats. Editable source files can also be included when agreed in the project scope. Print projects are supplied in the correct size, resolution and color setup for production.",
  },
  {
    question: "Can you manage monthly graphic design requirements?",
    answer:
      "Yes. We support ongoing monthly requirements for social content, campaign creatives, presentations, sales material and other recurring design needs. A monthly workflow helps maintain consistency, priorities and faster approvals.",
  },
  {
    question: "How quickly can you complete a design project?",
    answer:
      "Timelines depend on the number of deliverables, complexity, content readiness and review cycles. Simple creatives can move quickly, while brochures, presentations, packaging or large campaigns require more planning and production time.",
  },
  {
    question: "Can you create content as well as the design?",
    answer:
      "Yes. Copywriting, content structuring, campaign messaging and creative direction can be included when required. This helps ensure the design and message work together instead of being developed separately.",
  },
];

export default function GraphicDesignServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ creative and graphic design team workspace"
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
            <span className="text-white">Graphic Design Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Graphic Design Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Turn ideas into clear, consistent and high-impact visual
              communication for digital campaigns, social media, sales, print
              and everyday brand communication.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start your design project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Graphic design page navigation"
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
            Design that makes your message easier to notice and understand
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Good graphic design brings structure to communication. BrainADZ
                combines strategy, visual hierarchy, brand consistency and
                production expertise to create designs that look professional
                and help the audience understand what matters quickly.
              </p>

              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From a single campaign creative to a complete monthly design
                system, every asset is developed around the purpose, platform
                and technical requirements of the project.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your design requirement
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Graphic design and campaign creative work by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected graphic and campaign design work by BrainADZ
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
                  Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Complete graphic design support across brand touchpoints
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Choose support for a focused project or build an ongoing creative
              workflow for recurring marketing, sales and communication needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {DESIGN_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
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

      {/* Deliverables */}
      <section
        id="deliverables"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Deliverables
            </p>
          </div>

          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Design formats prepared for the way your brand communicates
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {DELIVERABLE_GROUPS.map((group) => {
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
              A structured path from design brief to final artwork
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The workflow keeps objectives, feedback and production details
              clear so creative work moves efficiently without losing quality.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your design workflow
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
                Creative quality supported by practical execution
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Our designers work with marketing, content and production teams so
              each design is visually strong, usable and aligned with the wider
              campaign or business objective.
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
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Visual systems made for real campaigns and communication
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B] lg:justify-self-end"
            >
              Explore our portfolio
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
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
              Questions before starting your design project?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Here are the practical details clients usually want to understand
              before beginning a graphic design engagement.
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
                open={index === 0}
                className="group border-b border-black/10"
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
