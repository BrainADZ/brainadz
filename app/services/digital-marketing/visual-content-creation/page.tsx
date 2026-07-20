/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarRange,
  Check,
  ChevronDown,
  CircleGauge,
  Clapperboard,
  FileCheck2,
  FileImage,
  FileSearch,
  GalleryHorizontalEnd,
  Image,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  MessageSquareText,
  MonitorPlay,
  PanelsTopLeft,
  PenTool,
  PlaySquare,
  ScanSearch,
  Sparkles,
  Target,
  Type,
  Video,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visual Content Creation Services | BrainADZ Marketing",
  description:
    "Visual content creation services by BrainADZ Marketing for social media creatives, campaign designs, videos, motion graphics, brand visuals and conversion-focused digital content.",
  alternates: {
    canonical: "/services/creative-media/visual-content-creation",
  },
  openGraph: {
    title: "Visual Content Creation Services | BrainADZ Marketing",
    description:
      "Create consistent, platform-ready visual content for social media, digital campaigns, websites, advertisements and brand communication.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Content Formats", href: "#content-formats" },
  { label: "Creative Standards", href: "#creative-standards" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Consistent brand identity",
    description:
      "Maintain one recognizable visual language across campaigns, platforms and customer touchpoints.",
    icon: Layers3,
  },
  {
    title: "Platform-ready creativity",
    description:
      "Create visuals in the right dimensions, formats and content style for each digital platform.",
    icon: PanelsTopLeft,
  },
  {
    title: "Faster content production",
    description:
      "Move from brief to approved assets through a clear and organized creative workflow.",
    icon: Workflow,
  },
  {
    title: "Stronger audience response",
    description:
      "Use clear visual hierarchy, storytelling and calls to action to improve attention and engagement.",
    icon: BarChart3,
  },
];

const CAPABILITIES = [
  {
    title: "Visual strategy and creative direction",
    description:
      "Every visual project begins with the communication objective, audience, platform and brand context. This ensures that the creative work supports a clear business or campaign purpose.",
    points: [
      "Audience and communication objective review",
      "Visual mood, style and campaign direction",
      "Content hierarchy and message planning",
      "Reference, composition and format guidance",
    ],
  },
  {
    title: "Social media creative production",
    description:
      "We create platform-ready visual assets designed around social behaviour, content formats and the way audiences consume information across feeds and stories.",
    points: [
      "Static social media posts",
      "Carousel and educational content",
      "Story, reel cover and thumbnail designs",
      "Campaign and festival creatives",
    ],
  },
  {
    title: "Video and motion content",
    description:
      "Visual ideas are converted into short-form videos, motion graphics and animated content designed for attention, storytelling and digital campaign use.",
    points: [
      "Reels and short-form video editing",
      "Motion graphics and animated text",
      "Product and service explainer videos",
      "Campaign teasers and promotional edits",
    ],
  },
  {
    title: "Advertising and campaign creatives",
    description:
      "Campaign assets are developed with a clear offer, visual hierarchy and call to action for paid media, digital promotions and conversion-focused communication.",
    points: [
      "Social and display advertisements",
      "Lead-generation campaign creatives",
      "Product launch and offer visuals",
      "Retargeting and promotional variations",
    ],
  },
  {
    title: "Website and digital visual assets",
    description:
      "We create website visuals that support messaging, improve page clarity and maintain consistency between brand, marketing and user experience.",
    points: [
      "Website banners and hero visuals",
      "Service and product graphics",
      "Icons, infographics and illustrations",
      "Landing-page campaign assets",
    ],
  },
  {
    title: "Brand-aligned creative systems",
    description:
      "Reusable design systems make ongoing production faster while ensuring that typography, colours, layouts and imagery remain consistent.",
    points: [
      "Creative templates and layout systems",
      "Typography and colour consistency",
      "Image treatment and visual guidelines",
      "Reusable social and campaign formats",
    ],
  },
  {
    title: "Creative adaptation and resizing",
    description:
      "Approved concepts are adapted for different digital placements while retaining readability, composition and brand consistency.",
    points: [
      "Platform-specific resizing",
      "Portrait, square and landscape versions",
      "Campaign and ad placement variations",
      "Multi-language visual adaptations",
    ],
  },
];

const CONTENT_FORMATS = [
  {
    title: "Social media posts",
    description:
      "Create branded static visuals for awareness, engagement, education, products, services and announcements.",
    points: [
      "Instagram posts",
      "Facebook creatives",
      "LinkedIn visuals",
      "Promotional posts",
    ],
    icon: Image,
  },
  {
    title: "Carousels",
    description:
      "Organize educational, product and storytelling content into clear multi-slide visual journeys.",
    points: [
      "Educational slides",
      "Product benefits",
      "Step-by-step content",
      "Brand storytelling",
    ],
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Reels and short videos",
    description:
      "Produce vertical, attention-focused videos for social discovery, product promotion and campaign communication.",
    points: [
      "Video editing",
      "Animated text",
      "Transitions",
      "Reel covers",
    ],
    icon: PlaySquare,
  },
  {
    title: "Motion graphics",
    description:
      "Use animation to explain ideas, highlight information and add energy to digital communication.",
    points: [
      "Logo animation",
      "Kinetic typography",
      "Product animation",
      "Explainer graphics",
    ],
    icon: Clapperboard,
  },
  {
    title: "Digital advertisements",
    description:
      "Create conversion-focused visual assets for social ads, display campaigns, remarketing and lead generation.",
    points: [
      "Meta advertisements",
      "Display banners",
      "Lead creatives",
      "Campaign variations",
    ],
    icon: MonitorPlay,
  },
  {
    title: "Infographics",
    description:
      "Turn data, processes and complex information into visuals that are easier to understand and share.",
    points: [
      "Data visualization",
      "Process graphics",
      "Comparison visuals",
      "Educational content",
    ],
    icon: ScanSearch,
  },
  {
    title: "Website graphics",
    description:
      "Support website messaging with banners, product visuals, service graphics, icons and branded illustrations.",
    points: [
      "Hero banners",
      "Service visuals",
      "Product graphics",
      "Landing-page assets",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Presentation visuals",
    description:
      "Create clean, structured visual assets for business presentations, proposals, sales decks and internal communication.",
    points: [
      "Slide graphics",
      "Data layouts",
      "Process diagrams",
      "Presentation templates",
    ],
    icon: FileImage,
  },
];

const CREATIVE_STANDARDS = [
  {
    title: "Clear communication",
    description:
      "Every visual prioritizes one clear message, logical hierarchy and an easily understood audience action.",
    output: "Focused visual message",
    icon: MessageSquareText,
  },
  {
    title: "Brand consistency",
    description:
      "Colours, typography, imagery and design treatment remain aligned with the approved brand identity.",
    output: "Recognizable brand system",
    icon: BadgeCheck,
  },
  {
    title: "Platform suitability",
    description:
      "The format, dimensions, content density and composition are adapted to the intended digital placement.",
    output: "Platform-ready assets",
    icon: PanelsTopLeft,
  },
  {
    title: "Production quality",
    description:
      "Every asset is reviewed for resolution, alignment, readability, export format and final visual accuracy.",
    output: "Quality-checked files",
    icon: FileCheck2,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the requirement",
    description:
      "We review the brand, audience, campaign objective, platform, content requirement, message and expected customer action.",
    timing: "Day 1",
    output: "Creative requirement brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define the creative direction",
    description:
      "Visual references, content hierarchy, style, colour usage, composition and format requirements are organized.",
    timing: "Days 1–2",
    output: "Creative direction",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Plan the content",
    description:
      "Headlines, supporting copy, visual elements, calls to action and platform variations are structured before production.",
    timing: "Every cycle",
    output: "Content and layout plan",
    icon: Type,
  },
  {
    number: "04",
    title: "Create the first design",
    description:
      "Designers develop the primary visual concept according to the approved direction, brand system and communication goal.",
    timing: "Production phase",
    output: "First creative draft",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Review and refine",
    description:
      "The creative is reviewed for message clarity, visual quality, product accuracy, brand consistency and platform suitability.",
    timing: "Review cycle",
    output: "Refined creative",
    icon: WandSparkles,
  },
  {
    number: "06",
    title: "Adapt and resize",
    description:
      "Approved concepts are adapted into the required sizes, placements, languages and campaign variations.",
    timing: "After approval",
    output: "Creative variations",
    icon: PanelsTopLeft,
  },
  {
    number: "07",
    title: "Export and deliver",
    description:
      "Final assets are quality-checked and exported in the agreed formats, dimensions and resolutions.",
    timing: "Final stage",
    output: "Ready-to-use files",
    icon: FileCheck2,
  },
];

const DELIVERABLES = [
  {
    title: "Creative direction",
    description:
      "A clear visual approach covering references, style, composition, typography, colours and content hierarchy.",
    icon: Lightbulb,
  },
  {
    title: "Static creatives",
    description:
      "Branded visual assets for social media, advertisements, campaigns, promotions and digital communication.",
    icon: Image,
  },
  {
    title: "Carousel designs",
    description:
      "Structured multi-slide content for educational, promotional, storytelling and product-focused communication.",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Video content",
    description:
      "Edited short-form videos, reels, promotional videos, explainers and social campaign content.",
    icon: Video,
  },
  {
    title: "Motion graphics",
    description:
      "Animated text, graphic elements, product highlights, logo animation and visual storytelling assets.",
    icon: Clapperboard,
  },
  {
    title: "Campaign variations",
    description:
      "Multiple visual versions for audiences, offers, formats, languages, platforms and paid media placements.",
    icon: Layers3,
  },
  {
    title: "Platform resizing",
    description:
      "Final assets adapted into square, portrait, landscape, story, reel and advertisement dimensions.",
    icon: LayoutTemplate,
  },
  {
    title: "Production-ready exports",
    description:
      "Final files delivered in agreed formats, resolutions and dimensions after complete quality review.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your visual content creation service?",
    answer:
      "The service can include visual strategy, social media creatives, carousels, advertisements, video editing, motion graphics, website graphics, infographics, resizing and final file delivery. The exact scope depends on your platforms, campaign requirements and production volume.",
  },
  {
    question: "What types of visual content do you create?",
    answer:
      "We create static posts, carousel designs, reels, short videos, motion graphics, digital advertisements, website banners, infographics, presentation visuals, thumbnails and campaign assets.",
  },
  {
    question: "Do you create content for all social media platforms?",
    answer:
      "Yes. Visuals can be created for Instagram, Facebook, LinkedIn, YouTube, X and other relevant platforms. Each asset is adapted according to the platform's format and content behaviour.",
  },
  {
    question: "Can you follow our existing brand guidelines?",
    answer:
      "Yes. We can work with your existing logo, colours, typography, image style and design guidelines. When detailed guidelines are not available, we can create a practical visual system for consistent content production.",
  },
  {
    question: "Do you write the content used in the designs?",
    answer:
      "Yes. Headlines, supporting copy, calls to action and slide content can be included. Copywriting requirements are finalized according to the project scope.",
  },
  {
    question: "Do you create reels and edit videos?",
    answer:
      "Yes. We can edit reels, short videos, product videos, campaign videos, explainers and social content using supplied footage, licensed assets or planned production inputs.",
  },
  {
    question: "Can you create different sizes of the same design?",
    answer:
      "Yes. Approved designs can be adapted into square, portrait, landscape, story, reel cover, banner and advertisement formats while maintaining visual consistency.",
  },
  {
    question: "How does the design approval process work?",
    answer:
      "The initial brief and creative direction are agreed first. Drafts are then shared for consolidated feedback, revised according to the agreed scope and finalized after approval.",
  },
  {
    question: "Can you handle monthly visual content requirements?",
    answer:
      "Yes. We can support recurring monthly content through an editorial calendar, creative production schedule, approval workflow and organized asset delivery.",
  },
  {
    question: "Do you provide editable design files?",
    answer:
      "Editable files can be included when agreed in the project scope. Usage, source-file requirements, fonts, stock assets and software compatibility should be defined before production begins.",
  },
  {
    question: "Can you create product images without a photoshoot?",
    answer:
      "Yes. Depending on the available product images and required output, we can create product compositions, backgrounds, campaign visuals and digitally enhanced creatives. Complex lifestyle scenes may require high-quality source images or separate production planning.",
  },
  {
    question: "How do you maintain quality across a large volume of creatives?",
    answer:
      "We use approved templates, visual guidelines, naming systems, review checklists and structured feedback cycles to maintain consistency across recurring and high-volume production.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visual Content Creation Services",
  serviceType: "Visual Content Creation",
  description:
    "Visual content creation services for social media creatives, digital advertisements, videos, motion graphics, website assets and branded campaigns.",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function VisualContentCreationPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICE_SCHEMA),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ Marketing visual content creation and design team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

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

            <span className="text-white">Visual Content Creation</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Visual Content Creation Services
          </h1>

          <div className="mt-auto max-w-[810px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Create consistent, platform-ready visual content that strengthens
              brand identity, captures attention and supports every digital
              campaign.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your creative project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Visual content creation page navigation"
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

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn ideas and messages into memorable visual experiences
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Visual content helps audiences understand your brand before
                they read every word. BrainADZ combines creative direction,
                graphic design, video production, motion graphics and
                platform-specific adaptation to create visuals that communicate
                clearly and consistently.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From daily social media content to product launches,
                advertisements and website campaigns, every asset is developed
                around the audience, platform and action it needs to support.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your visual system
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/visual-content/creative-dashboard.jpg"
                  alt="Visual content planning and creative production by BrainADZ Marketing"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Visual strategy, design production and creative campaign
                management
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
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Capabilities
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            A complete creative system from direction to delivery
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
              {CAPABILITIES.map((capability, index) => (
                <details
                  key={capability.title}
                  open={index === 0}
                  className="group border-b border-black/10 last:border-b-0 open:border-l-[3px] open:border-l-[#E1122B] open:bg-[#fff8f8]"
                >
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left text-[17px] font-medium text-black transition-colors hover:bg-[#fff8f8] focus-visible:bg-[#fff8f8] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                    <span>{capability.title}</span>

                    <ChevronDown
                      className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                      strokeWidth={1.7}
                    />
                  </summary>

                  <div className="px-5 pb-7 pt-1">
                    <p className="max-w-[700px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                      {capability.description}
                    </p>

                    <ul className="mt-5 space-y-3">
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
                  </div>
                </details>
              ))}
            </div>

            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/visual-content/content-production.jpg"
                  alt="Graphic design and visual content production by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Social creatives, campaign designs, videos and branded digital
                assets
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Sparkles className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Creativity with a communication purpose
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Every visual is designed to explain, attract, persuade or
                      guide—not only to decorate the content.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Content Formats */}
      <section
        id="content-formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Content Formats
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Visual formats for every digital touchpoint
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Formats are selected according to the platform, audience
              behaviour, campaign objective, message complexity and expected
              customer action.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {CONTENT_FORMATS.map((format, index) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <span className="absolute right-5 top-4 text-[42px] font-semibold leading-none text-black/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[21px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {format.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {format.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {format.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[13px] leading-5 text-black/65"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]" />
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

      {/* Creative Standards */}
      <section
        id="creative-standards"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Creative Standards
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Built for clarity, consistency and production quality
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Every asset is reviewed as part of a complete visual system,
              including message clarity, brand accuracy, platform suitability
              and technical export quality.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CREATIVE_STANDARDS.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <article
                  key={standard.title}
                  className="rounded-[14px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/55 hover:bg-white/[0.06] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B]">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <span className="text-[13px] font-semibold text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-white">
                    {standard.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {standard.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Output
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {standard.output}
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
              A clear creative workflow from brief to final asset
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every design moves through structured planning, production,
              review, adaptation and quality checks so delivery remains
              organized and consistent.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your creative workflow
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

      {/* Deliverables */}
      <section
        id="deliverables"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-[188px] lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Deliverables
                </p>
              </div>

              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Ready-to-use visual assets for every campaign
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement can cover complete visual production—from
                creative direction and first concepts to adaptations, final
                exports and organized asset delivery.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <WandSparkles
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  One concept, multiple formats
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Approved visual ideas can be adapted across social media,
                  advertisements, websites, presentations and campaign
                  placements.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {DELIVERABLES.map((deliverable, index) => {
                const Icon = deliverable.icon;

                return (
                  <article
                    key={deliverable.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 min-h-14 min-w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>

                      <span className="text-[13px] font-semibold text-black/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[20px] font-semibold leading-tight text-black">
                      {deliverable.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-black/58">
                      {deliverable.description}
                    </p>
                  </article>
                );
              })}
            </div>
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
              Questions before starting visual production?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about content formats, brand guidelines,
              videos, revisions, editable files and recurring production.
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
