/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Crosshair,
  Eye,
  FileCheck2,
  FileSearch,
  GalleryHorizontalEnd,
  Grid3X3,
  ImageIcon,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  PackageCheck,
  PanelsTopLeft,
  PencilRuler,
  RefreshCcw,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  Target,
  TestTubes,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ad Creative Design Services | BrainADZ Marketing",
  description:
    "Performance-focused ad creative design services by BrainADZ Marketing for social media ads, display campaigns, lead generation, product promotions and conversion-led creative testing.",
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Ad Formats", href: "#ad-formats" },
  { label: "Creative System", href: "#creative-system" },
  { label: "Testing", href: "#testing" },
  { label: "Process", href: "#process" },
  { label: "Production", href: "#production" },
  { label: "Work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Faster message recognition",
    description:
      "Make the offer, benefit and next action easier to understand within the first few seconds of attention.",
    icon: Eye,
  },
  {
    title: "Stronger campaign relevance",
    description:
      "Align every creative with the audience, objective, funnel stage and placement instead of using one generic design everywhere.",
    icon: Crosshair,
  },
  {
    title: "More testable variations",
    description:
      "Build structured changes in hooks, visuals, offers and calls to action so campaign learning becomes easier to interpret.",
    icon: TestTubes,
  },
  {
    title: "Consistent brand recall",
    description:
      "Protect brand recognition while adapting the creative style for different campaigns, audiences and media environments.",
    icon: BadgeCheck,
  },
];

const AD_FORMATS = [
  {
    title: "Social feed ad creatives",
    description:
      "Design attention-led static and carousel ads for feed placements across major social platforms.",
    points: [
      "Single-image acquisition creatives",
      "Carousel and feature-led ad sets",
      "Offer, launch and seasonal campaigns",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Story and vertical ad creatives",
    description:
      "Create mobile-first vertical ads that communicate quickly while respecting interface overlays and safe zones.",
    points: [
      "Story and reel placement graphics",
      "Vertical product and service ads",
      "Frame sequences and motion-ready layouts",
    ],
    icon: Smartphone,
  },
  {
    title: "Display and banner advertising",
    description:
      "Translate campaign ideas into clear banner systems for websites, remarketing networks and digital publications.",
    points: [
      "Standard display-banner dimensions",
      "Responsive campaign adaptations",
      "Static and animation-ready banner sets",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Product and e-commerce ads",
    description:
      "Show the product, value proposition and buying trigger with layouts designed for quick comparison and action.",
    points: [
      "Product benefit and feature creatives",
      "Marketplace and catalogue promotions",
      "Sale, bundle and price-led advertising",
    ],
    icon: Boxes,
  },
  {
    title: "Lead-generation ad creatives",
    description:
      "Present service outcomes, proof and enquiry triggers clearly for campaigns focused on qualified leads.",
    points: [
      "Service and consultation campaigns",
      "B2B and high-consideration offers",
      "Webinar, event and download promotions",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Retargeting and reminder ads",
    description:
      "Create follow-up messages for audiences who already know the brand but need stronger proof, urgency or reassurance.",
    points: [
      "Proof and trust-led creative variants",
      "Objection-handling and reminder ads",
      "Limited-period and conversion nudges",
    ],
    icon: RefreshCcw,
  },
];

const CREATIVE_SYSTEM_LAYERS = [
  {
    number: "01",
    title: "Campaign objective",
    description:
      "Clarify whether the creative needs to create awareness, generate traffic, capture leads, drive sales or support retargeting.",
    output: "Objective and KPI brief",
    icon: Target,
  },
  {
    number: "02",
    title: "Audience and offer",
    description:
      "Define who should respond, what matters to them and which benefit, proof point or incentive deserves priority.",
    output: "Audience-offer alignment",
    icon: Crosshair,
  },
  {
    number: "03",
    title: "Hook and message hierarchy",
    description:
      "Build the opening hook, supporting message, proof and call to action in an order that works at advertising speed.",
    output: "Creative message map",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Visual execution",
    description:
      "Choose the composition, product focus, typography, imagery and design device best suited to the campaign angle.",
    output: "Master creative direction",
    icon: PencilRuler,
  },
  {
    number: "05",
    title: "Placement adaptation",
    description:
      "Rebuild the master idea for different aspect ratios and interfaces instead of relying on simple automated cropping.",
    output: "Platform-ready ad family",
    icon: GalleryHorizontalEnd,
  },
];

const TESTING_AREAS = [
  {
    title: "Hook variations",
    description:
      "Test different opening ideas while keeping the offer and overall visual direction controlled.",
    details: [
      "Problem-led versus benefit-led hooks",
      "Question, statement and proof openings",
      "Urgency and curiosity variations",
    ],
    icon: Lightbulb,
  },
  {
    title: "Visual variations",
    description:
      "Change the dominant image, product scale, layout or visual framing to identify which execution earns attention.",
    details: [
      "Product-first and lifestyle-first layouts",
      "Minimal and information-rich versions",
      "Photography, illustration and graphic-led tests",
    ],
    icon: ImageIcon,
  },
  {
    title: "Offer and CTA versions",
    description:
      "Adapt the value proposition and action language without changing too many creative variables at once.",
    details: [
      "Benefit, price and incentive emphasis",
      "Enquire, shop, book and learn-more CTAs",
      "Proof-led and urgency-led variants",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Audience and placement adaptations",
    description:
      "Adjust context, language and composition for specific segments and placements while preserving campaign recognition.",
    details: [
      "Prospecting and retargeting versions",
      "B2B and consumer audience adaptations",
      "Feed, story, display and marketplace formats",
    ],
    icon: Split,
  },
];

const AD_STANDARDS = [
  {
    title: "Clear within the first glance",
    description:
      "The core visual and message should remain understandable before the viewer reads every supporting detail.",
    icon: Eye,
  },
  {
    title: "Readable on mobile screens",
    description:
      "Type size, contrast and information density are checked at realistic mobile viewing sizes.",
    icon: Smartphone,
  },
  {
    title: "Placement-safe composition",
    description:
      "Important text and actions stay clear of platform overlays, crops and interface controls.",
    icon: ShieldCheck,
  },
  {
    title: "Controlled variation logic",
    description:
      "Creative variants change intentionally so the media team can understand what was tested and what performed.",
    icon: ScanSearch,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Review the campaign brief",
    description:
      "We review the objective, audience, offer, product or service, landing page, platform plan and available brand assets.",
    timing: "Day 1",
    output: "Creative input checklist",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define creative angles",
    description:
      "We identify the strongest hooks, benefits, proof points, objections and visual directions worth turning into concepts.",
    timing: "Days 1-2",
    output: "Angle and message plan",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design master concepts",
    description:
      "The team develops distinct campaign-ready concepts with clear hierarchy, brand alignment and a visible call to action.",
    timing: "Days 2-4",
    output: "Master ad concepts",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Review and refine",
    description:
      "Feedback is consolidated around message accuracy, offer clarity, design direction and campaign requirements.",
    timing: "Review cycle",
    output: "Approved creative direction",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Build variations and sizes",
    description:
      "Approved concepts are adapted into planned hooks, copy versions, audiences, aspect ratios and advertising placements.",
    timing: "Production cycle",
    output: "Complete ad creative set",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Quality check and handover",
    description:
      "Every asset is reviewed for spelling, specifications, safe zones, export quality, file naming and delivery completeness.",
    timing: "Final review",
    output: "Media-ready delivery pack",
    icon: FileCheck2,
  },
];

const PRODUCTION_COMPONENTS = [
  {
    title: "Master campaign creatives",
    description:
      "Primary concepts establish the visual direction and message structure for the complete ad family.",
    details: [
      "Distinct campaign concept routes",
      "Brand-aligned creative direction",
      "Clear offer and CTA hierarchy",
    ],
    icon: Sparkles,
  },
  {
    title: "Size and placement adaptations",
    description:
      "Each approved concept is rebuilt for planned placements with attention to composition and readability.",
    details: [
      "Square, portrait and landscape formats",
      "Story, reel and feed adaptations",
      "Display and marketplace dimensions",
    ],
    icon: Grid3X3,
  },
  {
    title: "Testing-ready variants",
    description:
      "Variation sets are organized around defined test variables rather than random cosmetic changes.",
    details: [
      "Hook and headline alternatives",
      "Visual and product-focus variations",
      "Offer and CTA combinations",
    ],
    icon: TestTubes,
  },
  {
    title: "Organized delivery package",
    description:
      "Files are exported, labeled and grouped so media and marketing teams can launch campaigns with less confusion.",
    details: [
      "Platform-ready image exports",
      "Editable source files when scoped",
      "Structured naming and version folders",
    ],
    icon: PackageCheck,
  },
];

const WHY_BRAINADZ = [
  {
    title: "Creative and media awareness",
    description:
      "Design decisions consider how ads are placed, consumed and compared inside real campaign environments.",
    icon: Megaphone,
  },
  {
    title: "Business-first messaging",
    description:
      "The visual treatment supports the offer and customer decision instead of becoming disconnected decoration.",
    icon: Target,
  },
  {
    title: "Scalable production systems",
    description:
      "Master concepts, variation logic and file structures make multi-format campaign production easier to manage.",
    icon: Layers3,
  },
  {
    title: "Reliable quality control",
    description:
      "Specifications, text, branding, safe areas and delivery details are reviewed before campaign handover.",
    icon: ShieldCheck,
  },
];

const WORK_ITEMS = [
  {
    title: "Product acquisition creative system",
    category: "Performance Advertising",
    image: "/portfolio/instagram/2.png",
    imageAlt: "Product advertising creative designed by BrainADZ",
  },
  {
    title: "Lead-generation campaign creatives",
    category: "Service Campaign",
    image: "/portfolio/instagram/3.png",
    imageAlt: "Lead generation advertising creatives designed by BrainADZ",
  },
  {
    title: "Multi-format promotional ad family",
    category: "Campaign Adaptation",
    image: "/portfolio/instagram/4.png",
    imageAlt: "Multi-format campaign ad creatives designed by BrainADZ",
  },
];

const FAQS = [
  {
    question: "What is included in your ad creative design service?",
    answer:
      "The scope can include campaign brief review, creative-angle development, message hierarchy, static ad design, carousel creatives, vertical ads, display banners, size adaptations, testing variants and organized final exports. The exact deliverables are defined around your campaign plan.",
  },
  {
    question: "Do you create both static and video ad creatives?",
    answer:
      "Yes. Static advertising is covered directly within this service. Motion graphics, animated banners and edited video ads can also be included when the campaign requires them, with the animation or editing scope planned separately according to duration and complexity.",
  },
  {
    question: "Can you create ads for Meta, LinkedIn, Google and other platforms?",
    answer:
      "Yes. We can prepare creatives for Meta placements, LinkedIn campaigns, Google display requirements, YouTube support graphics, marketplace promotions and other planned media environments. Final dimensions and file specifications are confirmed before production.",
  },
  {
    question: "Do you provide multiple ad variations for testing?",
    answer:
      "Yes. Variation sets can test hooks, visuals, benefits, offers, proof points and calls to action. We recommend defining the test logic before design so each variation produces more useful campaign learning.",
  },
  {
    question: "Can you work with copy supplied by our performance marketing team?",
    answer:
      "Yes. We can design from approved copy, refine the hierarchy of supplied copy or collaborate with your media and marketing teams on multiple headline and CTA versions. Final claims, prices and legal statements remain subject to client approval.",
  },
  {
    question: "Will the ad creatives follow our brand guidelines?",
    answer:
      "Yes. We use the approved logo, colors, typography, imagery rules and campaign assets while adapting the execution for advertising speed and placement requirements. When formal guidelines are unavailable, we first establish a practical campaign visual direction.",
  },
  {
    question: "Do you guarantee campaign performance or conversions?",
    answer:
      "No responsible design partner can guarantee a specific result because performance also depends on the offer, targeting, budget, bidding, landing page, competition and sales process. Our role is to create clear, relevant and testable advertising assets that support better campaign execution.",
  },
  {
    question: "How quickly can an ad creative project be completed?",
    answer:
      "Timelines depend on the number of concepts, formats, variations, content readiness, product-image requirements and review cycles. A small approved campaign set can move quickly, while a multi-platform testing system requires more structured production time.",
  },
];

export default function AdCreativeDesignPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ advertising creative design team and workspace"
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
            <span className="text-white">Ad Creative Design</span>
          </nav>

          <h1 className="mt-7 max-w-[940px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Ad Creative Design
          </h1>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build clear, relevant and conversion-focused advertising creatives
              designed for real audiences, placements and campaign objectives.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Create your ad campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Ad creative design page navigation"
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
            Turn campaign messages into creatives built to earn attention and action
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[730px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Effective ad creative is not simply a branded social post with a
                call-to-action button. BrainADZ connects the campaign objective,
                audience, offer, hook, visual hierarchy and placement requirements
                to create advertising assets that are easier to understand, test
                and scale.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss your campaign
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/portfolio/instagram/2.png"
                  alt="Performance advertising creative designed by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Replace with a selected advertising creative project
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

      {/* Ad formats */}
      <section
        id="ad-formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Ad Formats
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Advertising creatives for different objectives and placements
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Every format has different attention patterns, space limitations and
              interface behavior. We adapt the creative idea to the placement
              instead of forcing one layout into every campaign size.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AD_FORMATS.map((service) => {
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
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {service.points.map((point) => (
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

      {/* Creative system */}
      <section
        id="creative-system"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Creative System
              </p>
            </div>
            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A connected system from campaign objective to final placement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strong ad design begins before visual styling. These layers help
              keep the message, offer, creative direction and campaign adaptations
              connected to one clear objective.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Plan your creative system
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {CREATIVE_SYSTEM_LAYERS.map((layer) => {
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

      {/* Testing */}
      <section
        id="testing"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative Testing
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Creative variations designed to generate clearer campaign learning
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              More versions do not automatically create better testing. We organize
              variations around deliberate changes so performance insights are
              easier to interpret and use in the next creative cycle.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TESTING_AREAS.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[20px] font-semibold leading-[1.25] text-black">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/58">
                    {area.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-5">
                    {area.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-[13px] leading-6 text-black/68"
                      >
                        <CircleDot
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-[#E1122B]"
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

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {AD_STANDARDS.map((standard) => {
              const Icon = standard.icon;

              return (
                <article key={standard.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold leading-6 text-black">
                      {standard.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-black/56">
                      {standard.description}
                    </p>
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
              A structured workflow from campaign brief to media-ready assets
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Concepts, feedback, adaptations and exports move through a clear
              production cycle so campaign teams know what is being created and
              what is ready to launch.
            </p>
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

      {/* Production */}
      <section
        id="production"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Production & Delivery
                </p>
              </div>
              <h2 className="mt-5 max-w-[1080px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                A complete creative package prepared for campaign execution
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The production scope is organized around the number of concepts,
              variations, placements and editable files your marketing and media
              teams actually need.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCTION_COMPONENTS.map((component) => {
              const Icon = component.icon;

              return (
                <article
                  key={component.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
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

          <h2 className="mt-5 max-w-[1140px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Ad creative design connected to campaign execution
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
            <h2 className="mt-5 max-w-[1020px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Campaign creatives designed for clarity, relevance and adaptation
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
              Questions about ad creative design?
            </h2>
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about formats, testing variations, platform files,
              editable assets, campaign coordination and production timelines.
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
