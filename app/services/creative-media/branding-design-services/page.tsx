/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardCheck,
  Compass,
  FileArchive,
  FileSearch,
  Fingerprint,
  Flag,
  FolderKanban,
  Gem,
  Grid3X3,
  ImageIcon,
  Layers3,
  LayoutTemplate,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  PenTool,
  RefreshCcw,
  ScanSearch,
  Shapes,
  ShieldCheck,
  Sparkles,
  SwatchBook,
  Target,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Branding Design Services | BrainADZ Marketing",
  description:
    "Branding design services by BrainADZ Marketing, including logo design, visual identity systems, brand guidelines, rebranding and rollout assets.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Identity Services", href: "#identity-services" },
  { label: "Brand System", href: "#brand-system" },
  { label: "Applications", href: "#applications" },
  { label: "Process", href: "#process" },
  { label: "Handover", href: "#handover" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "A more recognizable identity",
    description:
      "Build a distinctive visual language that helps customers identify your brand faster across channels and touchpoints.",
    icon: Fingerprint,
  },
  {
    title: "Consistent brand expression",
    description:
      "Give every team and partner a clear system for using your logo, colors, typography, imagery and layouts correctly.",
    icon: Grid3X3,
  },
  {
    title: "Stronger market credibility",
    description:
      "Present the business with a professional identity that supports trust, positioning and confident customer decisions.",
    icon: ShieldCheck,
  },
  {
    title: "A system built to scale",
    description:
      "Create flexible identity rules and templates that can grow with new campaigns, products, locations and communication needs.",
    icon: Layers3,
  },
];

const IDENTITY_SERVICES = [
  {
    title: "Brand discovery and visual direction",
    description:
      "Clarify the audience, market context, brand personality and visual opportunity before design exploration begins.",
    points: [
      "Existing-brand and competitor review",
      "Audience, positioning and personality inputs",
      "Visual territories and creative direction",
    ],
    icon: Compass,
  },
  {
    title: "Logo and identity design",
    description:
      "Develop a memorable primary mark and a practical identity family that works across everyday brand applications.",
    points: [
      "Logo concepts and rationale",
      "Primary, secondary and responsive logo versions",
      "Icon, wordmark and supporting mark options",
    ],
    icon: PenTool,
  },
  {
    title: "Color and typography system",
    description:
      "Define a coordinated palette and type hierarchy that gives the brand a consistent tone across print and digital communication.",
    points: [
      "Primary and supporting color palettes",
      "Display, heading and body type hierarchy",
      "Accessibility and practical usage guidance",
    ],
    icon: SwatchBook,
  },
  {
    title: "Graphic language and imagery",
    description:
      "Create the supporting visual devices that make the identity more ownable than a logo placed on different layouts.",
    points: [
      "Patterns, shapes and graphic devices",
      "Photography and illustration direction",
      "Iconography and composition principles",
    ],
    icon: Shapes,
  },
  {
    title: "Brand guidelines",
    description:
      "Document the rules teams need to protect recognition and produce consistent communication after the identity is approved.",
    points: [
      "Logo clear space, sizing and misuse rules",
      "Color, typography and image guidance",
      "Layout examples and application standards",
    ],
    icon: BookOpenText,
  },
  {
    title: "Rebranding and identity refresh",
    description:
      "Modernize an established brand without losing the recognition, equity or practical assets that still support the business.",
    points: [
      "Current identity and equity assessment",
      "Evolutionary refresh or complete redesign",
      "Migration and rollout recommendations",
    ],
    icon: RefreshCcw,
  },
];

const BRAND_SYSTEM_LAYERS = [
  {
    number: "01",
    title: "Strategic foundation",
    description:
      "Translate the business context, audience, positioning and personality into a focused design brief for the identity.",
    output: "Identity design brief",
    icon: Target,
  },
  {
    number: "02",
    title: "Core identity",
    description:
      "Build the logo family and essential marks that create the most immediate and repeatable signs of recognition.",
    output: "Logo architecture",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Visual language",
    description:
      "Connect color, typography, imagery, shapes and composition into one coherent expression of the brand personality.",
    output: "Visual identity system",
    icon: Palette,
  },
  {
    number: "04",
    title: "Application principles",
    description:
      "Test the identity across realistic touchpoints so the system works beyond presentation slides and isolated mockups.",
    output: "Applied brand examples",
    icon: LayoutTemplate,
  },
  {
    number: "05",
    title: "Governance and scale",
    description:
      "Define usage rules, templates and asset organization so internal teams and external partners can use the identity reliably.",
    output: "Guidelines and toolkit",
    icon: ShieldCheck,
  },
];

const BRAND_APPLICATIONS = [
  {
    category: "Digital Brand Presence",
    description:
      "Identity assets and templates for the channels where customers discover, evaluate and interact with the brand online.",
    items: [
      "Website visual direction",
      "Social profile assets",
      "Digital campaign templates",
      "Email and newsletter styling",
      "App or dashboard branding",
      "Presentation templates",
    ],
    icon: MonitorSmartphone,
  },
  {
    category: "Marketing Communication",
    description:
      "Flexible branded formats that support campaigns, product communication and recurring content without visual inconsistency.",
    items: [
      "Campaign key visuals",
      "Brochures and catalogues",
      "Social content systems",
      "Ad creative templates",
      "Infographic styling",
      "Launch communication",
    ],
    icon: ImageIcon,
  },
  {
    category: "Corporate Brand Assets",
    description:
      "Professional brand applications for customer conversations, stakeholder communication and everyday business use.",
    items: [
      "Business stationery",
      "Company profile",
      "Proposal templates",
      "Corporate presentations",
      "Internal communication",
      "Employer-brand assets",
    ],
    icon: BriefcaseBusiness,
  },
  {
    category: "Physical and Environmental",
    description:
      "Consistent identity translation across packaging, signage, offices, exhibitions and other real-world brand experiences.",
    items: [
      "Packaging direction",
      "Retail and office signage",
      "Exhibition branding",
      "Uniform and merchandise",
      "Vehicle graphics",
      "Environmental graphics",
    ],
    icon: Boxes,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover the brand context",
    description:
      "We review the business, audience, competitors, positioning, current identity, future plans and the practical places where the brand must perform.",
    timing: "Discovery",
    output: "Brand input brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define the visual opportunity",
    description:
      "Insights are translated into design criteria, personality cues and visual territories that establish the right direction for exploration.",
    timing: "Direction stage",
    output: "Creative territories",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Explore identity concepts",
    description:
      "We develop focused logo and identity routes, showing the design logic, distinctiveness and potential application of each direction.",
    timing: "Concept stage",
    output: "Identity concepts",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Refine the selected identity",
    description:
      "The approved route is strengthened through proportion, typography, color, responsive variants and supporting visual elements.",
    timing: "Development stage",
    output: "Final identity system",
    icon: Gem,
  },
  {
    number: "05",
    title: "Test real applications",
    description:
      "The system is applied to priority brand touchpoints to confirm hierarchy, flexibility, legibility and recognition in realistic conditions.",
    timing: "Application stage",
    output: "Priority brand assets",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Package and hand over",
    description:
      "Final files, guidelines and templates are organized into a practical toolkit that teams can use without rebuilding the system.",
    timing: "Final delivery",
    output: "Brand toolkit",
    icon: PackageCheck,
  },
];

const HANDOVER_COMPONENTS = [
  {
    title: "Complete logo package",
    description:
      "Organized master files for digital, print, light, dark and constrained-use situations.",
    details: [
      "AI, EPS, SVG, PDF, PNG and JPG formats",
      "Primary, secondary and icon versions",
      "RGB, CMYK, monochrome and reversed variants",
    ],
    icon: FileArchive,
  },
  {
    title: "Brand guideline document",
    description:
      "A clear reference that explains how the identity should and should not be used.",
    details: [
      "Logo, color and typography rules",
      "Imagery and graphic-language guidance",
      "Application examples and misuse prevention",
    ],
    icon: BookOpenText,
  },
  {
    title: "Template and asset toolkit",
    description:
      "Reusable starting points that help internal teams produce routine communication more consistently.",
    details: [
      "Priority marketing and corporate templates",
      "Organized icons, patterns and graphic assets",
      "Editable files based on the agreed software stack",
    ],
    icon: FolderKanban,
  },
  {
    title: "Rollout support",
    description:
      "Practical assistance for introducing the identity across teams, vendors and high-priority touchpoints.",
    details: [
      "Launch and migration recommendations",
      "Vendor-ready production guidance",
      "Optional review of early brand applications",
    ],
    icon: Flag,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Built around business reality",
    description:
      "The identity is designed for the channels, teams, production methods and customer interactions your brand actually uses.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Distinctive, not trend-dependent",
    description:
      "We seek ownable visual decisions that support long-term recognition instead of relying only on short-lived design trends.",
    icon: Sparkles,
  },
  {
    title: "System thinking from the start",
    description:
      "Logo, typography, color and applications are developed as connected parts of one usable identity system.",
    icon: Layers3,
  },
  {
    title: "Practical final delivery",
    description:
      "Files and guidelines are structured so marketing teams, printers, developers and partners can use them confidently.",
    icon: BadgeCheck,
  },
];

const WORK_ITEMS = [
  {
    title: "Brand identity and launch system",
    category: "Identity Design",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Brand identity and launch communication designed by BrainADZ",
  },
  {
    title: "Corporate visual identity rollout",
    category: "Corporate Branding",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Corporate visual identity system created by BrainADZ",
  },
  {
    title: "Multi-format brand communication",
    category: "Brand Applications",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Multi-format branded communication designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in branding design services?",
    answer:
      "The scope can include brand discovery, logo design, responsive logo versions, color and typography systems, supporting graphic language, imagery direction, priority applications, brand guidelines and a structured final asset package. The exact deliverables depend on whether the requirement is a new identity, refresh or complete rebrand.",
  },
  {
    question: "Is branding design only about creating a logo?",
    answer:
      "No. A logo is one important identifier, but a usable brand identity also needs typography, colors, imagery, layouts, graphic devices, application rules and consistent production standards. These elements work together to create recognition across different customer touchpoints.",
  },
  {
    question: "Can you refresh our existing brand without changing everything?",
    answer:
      "Yes. An identity refresh can retain recognizable assets while improving typography, color, proportions, supporting graphics and application consistency. We first identify which elements still carry useful brand equity before recommending an evolutionary refresh or a more substantial redesign.",
  },
  {
    question: "How many logo concepts do you provide?",
    answer:
      "The concept approach is defined in the project scope. We prioritize a focused set of strategically relevant directions rather than producing many disconnected options. Each presented route includes the design rationale and enough application context to evaluate its potential as a complete identity.",
  },
  {
    question: "Do you provide editable and vector logo files?",
    answer:
      "Yes. Final approved logo assets can be supplied in vector and publishing formats such as AI, EPS, SVG, PDF, PNG and JPG. The package can include RGB, CMYK, monochrome, reversed and responsive variants according to the agreed scope.",
  },
  {
    question: "Will we receive brand guidelines?",
    answer:
      "Brand guidelines can be included as a core project deliverable. They typically document logo usage, clear space, minimum size, colors, typography, imagery, graphic elements, layouts and misuse examples. The depth of the document depends on the size and complexity of the identity system.",
  },
  {
    question: "Can you apply the new identity to our existing materials?",
    answer:
      "Yes. Priority rollout assets can include stationery, presentations, company profiles, social templates, campaign formats, packaging direction, signage and exhibition communication. The application list is finalized according to launch priorities and production requirements.",
  },
  {
    question: "How long does a branding design project take?",
    answer:
      "Timelines vary with discovery depth, decision-making, number of stakeholders, identity complexity and rollout scope. A focused identity refresh may move faster than a full rebrand involving research, multiple applications and detailed guidelines. The project schedule is agreed after the scope and review process are defined.",
  },
];

export default function BrandingDesignServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ branding and visual identity design team workspace"
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
            <span className="text-white">Branding Design Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Branding Design Services
          </h1>

          <div className="mt-auto max-w-[800px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Create a distinctive logo, visual identity and practical brand
              system that makes your business easier to recognize, trust and
              represent consistently across every important touchpoint.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Build your brand identity
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Branding design page navigation"
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
            Build recognition with a complete visual identity system
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Branding design is more than choosing a logo and color palette.
                BrainADZ creates connected identity systems that communicate the
                right personality, stay recognizable across formats and give
                teams practical rules for consistent brand execution.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your branding brief
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Brand identity and visual communication work by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected branding and visual identity work by BrainADZ
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

      {/* Identity services */}
      <section
        id="identity-services"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Identity Services
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Everything required to shape a distinctive and usable brand
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Every branding engagement is scoped around the business stage and
              the identity problem. A new company may need a complete system,
              while an established brand may need a focused refresh or better
              governance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {IDENTITY_SERVICES.map((service) => {
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

      {/* Brand system */}
      <section
        id="brand-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Brand System
                </p>
              </div>
              <h2 className="mt-5 max-w-[900px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                A connected identity, not a folder of unrelated assets
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Strong branding connects strategic inputs with repeatable visual
              rules. Each layer supports the next so the identity remains clear,
              flexible and recognizable as communication expands.
            </p>
          </div>

          <div className="mt-12 border-t border-white/15">
            {BRAND_SYSTEM_LAYERS.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
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

      {/* Applications */}
      <section
        id="applications"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Brand Applications
            </p>
          </div>

          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Carry one recognizable identity across every important touchpoint
          </h2>

          <p className="mt-6 max-w-[820px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            Priority applications are used to test and demonstrate how the brand
            behaves in real situations. The final list is selected according to
            launch needs, customer journeys and internal production priorities.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {BRAND_APPLICATIONS.map((group) => {
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
                    <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {group.description}
                    </p>

                    <div className="mt-6 grid gap-x-6 gap-y-3 border-t border-black/10 pt-5 sm:grid-cols-2">
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
                Branding Process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From discovery to a launch-ready identity toolkit
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              The process keeps strategic decisions, creative exploration,
              stakeholder feedback and final production connected. Each stage
              reduces ambiguity before the identity moves forward.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your branding project
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
                  Brand Handover
                </p>
              </div>
              <h2 className="mt-5 max-w-[1040px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                A practical toolkit your team can use after launch
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Final delivery is organized for real implementation. Designers,
              marketers, developers, printers and vendors receive the files and
              guidance required to reproduce the identity correctly.
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-[21px] font-semibold leading-tight text-black">
                    {component.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {component.description}
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-black/10 pt-5">
                    {component.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
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
            Branding designed for recognition and everyday execution
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {WHY_BRAINADZ.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#E1122B]/55 hover:bg-[#E1122B]/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/35 bg-[#E1122B]/10 text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-[19px] font-semibold leading-7 text-white">
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
          <div className="grid gap-7 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Selected Work
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Identity systems built to work across formats
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white lg:justify-self-end"
            >
              Request relevant work
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-[22px] font-semibold leading-tight text-black">
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
              Questions before building your identity?
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              These are the practical details businesses usually want to clarify
              before beginning a logo, identity refresh or complete rebranding
              engagement.
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
