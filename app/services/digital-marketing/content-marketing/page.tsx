/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  CalendarRange,
  Check,
  ChevronDown,
  CircleGauge,
  FileSearch,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  Link2,
  ListChecks,
  Mail,
  MessageSquareText,
  Newspaper,
  PanelsTopLeft,
  Podcast,
  Search,
  SearchCheck,
  Share2,
  Sparkles,
  Target,
  UsersRound,
  Video,
  Waypoints,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Content Marketing Services | BrainADZ Marketing",
  description:
    "Content marketing services by BrainADZ Marketing for content strategy, SEO content, blogs, campaigns, distribution, lead generation and measurable business growth.",
  alternates: {
    canonical: "/services/digital-marketing/content-marketing",
  },
  openGraph: {
    title: "Content Marketing Services | BrainADZ Marketing",
    description:
      "Build an effective content system that attracts audiences, strengthens authority and supports measurable business growth.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Content Formats", href: "#content-formats" },
  { label: "Distribution", href: "#distribution" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger brand authority",
    description:
      "Build trust by consistently publishing useful, accurate and relevant content around your area of expertise.",
    icon: Sparkles,
  },
  {
    title: "Sustainable organic visibility",
    description:
      "Create search-focused content that continues attracting relevant audiences beyond the initial publishing cycle.",
    icon: Search,
  },
  {
    title: "Better customer education",
    description:
      "Explain complex products, services and buying decisions through clear content designed around audience needs.",
    icon: BookOpenText,
  },
  {
    title: "Measurable business impact",
    description:
      "Connect content performance with website visits, enquiries, lead quality, conversions and customer growth.",
    icon: BarChart3,
  },
];

const CAPABILITIES = [
  {
    title: "Content strategy built around business goals",
    description:
      "Every content program begins with a clear understanding of your audience, customer journey, market opportunity and business objectives. This prevents content from becoming disconnected publishing activity.",
    points: [
      "Business and audience discovery",
      "Customer journey and intent mapping",
      "Content objectives and performance metrics",
      "Quarterly and monthly planning",
    ],
  },
  {
    title: "Audience and topic research",
    description:
      "We identify the questions, concerns, search behaviours and decision factors that matter to your audience before deciding what content should be created.",
    points: [
      "Audience pain-point research",
      "Search and keyword opportunity analysis",
      "Competitor content review",
      "Topic cluster and content gap identification",
    ],
  },
  {
    title: "SEO-focused content creation",
    description:
      "Search visibility is built into the content process without sacrificing readability, expertise or usefulness. Every page is structured around clear intent and user value.",
    points: [
      "SEO blogs and long-form articles",
      "Service and landing-page content",
      "Internal linking recommendations",
      "Search intent and on-page optimization",
    ],
  },
  {
    title: "Brand storytelling and campaign content",
    description:
      "We turn brand ideas, products, expertise and customer outcomes into stories that are easier to understand, remember and share.",
    points: [
      "Brand and company storytelling",
      "Product and service narratives",
      "Campaign concepts and content themes",
      "Case studies and customer success stories",
    ],
  },
  {
    title: "Content repurposing and distribution",
    description:
      "One strong idea can support multiple channels. We adapt core content into social posts, emails, short-form content and sales-support assets.",
    points: [
      "Blog-to-social repurposing",
      "Long-form to short-form adaptation",
      "Email and newsletter content",
      "Platform-specific content versions",
    ],
  },
  {
    title: "Performance analysis and optimization",
    description:
      "Content performance is reviewed using search, engagement and conversion data to identify which topics and formats should be improved or expanded.",
    points: [
      "Traffic and engagement reporting",
      "Content conversion analysis",
      "Topic and format comparison",
      "Refresh and optimization recommendations",
    ],
  },
];

const CONTENT_FORMATS = [
  {
    title: "SEO blogs and articles",
    description:
      "Build search visibility and answer important audience questions with structured, useful and intent-focused long-form content.",
    points: [
      "Informational blogs",
      "Commercial topics",
      "Industry guides",
      "Comparison content",
    ],
    icon: Newspaper,
  },
  {
    title: "Website content",
    description:
      "Communicate services, products and value propositions clearly across important website and landing-page touchpoints.",
    points: [
      "Service pages",
      "Landing pages",
      "Product content",
      "Website messaging",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Case studies",
    description:
      "Turn completed work and customer outcomes into credible proof that supports trust and sales conversations.",
    points: [
      "Business challenge",
      "Solution approach",
      "Project outcomes",
      "Customer proof",
    ],
    icon: FileText,
  },
  {
    title: "Social content",
    description:
      "Transform useful ideas into platform-ready posts, carousels, scripts and short-form educational content.",
    points: [
      "Static posts",
      "Carousel content",
      "Short scripts",
      "Thought leadership",
    ],
    icon: MessageSquareText,
  },
  {
    title: "Video and podcast content",
    description:
      "Plan educational and campaign-led video or audio content that strengthens discovery and audience engagement.",
    points: [
      "Video topics",
      "Scriptwriting",
      "Interview formats",
      "Episode planning",
    ],
    icon: Video,
  },
  {
    title: "Email and lead content",
    description:
      "Support lead nurturing and customer relationships with newsletters, email sequences and downloadable resources.",
    points: [
      "Newsletters",
      "Lead magnets",
      "Email sequences",
      "Downloadable guides",
    ],
    icon: Mail,
  },
];

const DISTRIBUTION_CHANNELS = [
  {
    title: "Organic search",
    description:
      "Structure and optimize content to capture relevant search demand and support long-term organic website visibility.",
    output: "Search traffic and discovery",
    icon: SearchCheck,
  },
  {
    title: "Social media",
    description:
      "Adapt content into social-first formats that increase reach, engagement and repeated audience exposure.",
    output: "Platform engagement",
    icon: Share2,
  },
  {
    title: "Email marketing",
    description:
      "Deliver useful content directly to subscribers, prospects and customers through targeted email communication.",
    output: "Lead and customer nurturing",
    icon: Mail,
  },
  {
    title: "Industry platforms",
    description:
      "Extend content visibility through relevant publications, communities, guest posts and external content channels.",
    output: "Authority and referral reach",
    icon: Globe2,
  },
  {
    title: "Sales enablement",
    description:
      "Equip sales teams with case studies, guides, presentations and content that supports customer conversations.",
    output: "Stronger sales support",
    icon: UsersRound,
  },
  {
    title: "Paid amplification",
    description:
      "Promote high-value content to selected audiences when additional reach, leads or campaign visibility is required.",
    output: "Targeted content reach",
    icon: Target,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover and audit",
    description:
      "We review your brand, products, services, audience, competitors, existing content, website performance and business priorities.",
    timing: "Days 1–4",
    output: "Content audit and brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Research the opportunity",
    description:
      "We identify audience questions, keyword opportunities, content gaps, customer intent and relevant industry topics.",
    timing: "Week 1",
    output: "Topic and audience research",
    icon: Search,
  },
  {
    number: "03",
    title: "Build the content strategy",
    description:
      "Content pillars, formats, channel roles, publishing priorities and performance metrics are organized into one practical system.",
    timing: "Week 1",
    output: "Content strategy and roadmap",
    icon: Waypoints,
  },
  {
    number: "04",
    title: "Plan the calendar",
    description:
      "Topics are converted into a structured editorial calendar with clear formats, objectives, owners and publishing dates.",
    timing: "Monthly",
    output: "Editorial calendar",
    icon: CalendarRange,
  },
  {
    number: "05",
    title: "Create and approve",
    description:
      "Writers, strategists and designers develop the content, complete quality checks and organize feedback through a clear review workflow.",
    timing: "Every cycle",
    output: "Approved content assets",
    icon: PanelsTopLeft,
  },
  {
    number: "06",
    title: "Publish and distribute",
    description:
      "Approved content is published and adapted across relevant search, social, email and industry channels.",
    timing: "Ongoing",
    output: "Consistent distribution",
    icon: Share2,
  },
  {
    number: "07",
    title: "Measure and improve",
    description:
      "We analyse visibility, engagement, traffic and conversions to identify what should be updated, expanded or repeated.",
    timing: "Monthly",
    output: "Performance report",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Content marketing audit",
    description:
      "A structured review of your existing website content, topics, gaps, channels and current performance.",
    icon: FileSearch,
  },
  {
    title: "Content strategy",
    description:
      "A practical roadmap defining audience segments, content pillars, formats, channels and performance goals.",
    icon: Waypoints,
  },
  {
    title: "Topic and keyword plan",
    description:
      "An organized framework of search terms, audience questions, topic clusters and publishing opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Editorial calendar",
    description:
      "A clear monthly or quarterly calendar covering topics, formats, objectives, owners and publishing schedules.",
    icon: CalendarRange,
  },
  {
    title: "Content production",
    description:
      "Complete written and creative assets developed according to the approved strategy and brand guidelines.",
    icon: FileText,
  },
  {
    title: "Distribution plan",
    description:
      "Recommendations for publishing, repurposing and promoting content across relevant marketing channels.",
    icon: Share2,
  },
  {
    title: "Content optimization",
    description:
      "Improvements to existing content based on search performance, relevance, user behaviour and conversion opportunity.",
    icon: Workflow,
  },
  {
    title: "Performance reporting",
    description:
      "Clear reporting with content insights, business impact and recommended actions for the next cycle.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your content marketing service?",
    answer:
      "The service can include content audit, audience research, keyword research, content strategy, editorial planning, writing, design coordination, SEO optimization, distribution, repurposing and performance reporting. The final scope depends on your goals, channels and internal resources.",
  },
  {
    question: "What types of content do you create?",
    answer:
      "We can create SEO blogs, website pages, landing-page content, case studies, social media content, video scripts, email content, newsletters, guides, whitepapers and other campaign assets.",
  },
  {
    question: "How is content marketing different from copywriting?",
    answer:
      "Copywriting usually focuses on persuasive messaging designed to encourage an immediate action. Content marketing uses useful and relevant content across the customer journey to attract audiences, build trust, support decisions and create long-term business value.",
  },
  {
    question: "Do you create SEO-optimized content?",
    answer:
      "Yes. Search intent, keyword opportunities, page structure, headings, internal linking and metadata recommendations can be included. Content is written for the reader first while supporting relevant search visibility.",
  },
  {
    question: "Can you create content for technical or industrial businesses?",
    answer:
      "Yes. We can work with subject-matter experts, technical documents, product information and internal teams to develop accurate content for industrial, B2B, technology and specialized service sectors.",
  },
  {
    question: "How do you select content topics?",
    answer:
      "Topics are selected using audience questions, keyword research, customer journey stages, market trends, competitor gaps, sales-team insights and business priorities. Every topic should serve a clear audience or commercial purpose.",
  },
  {
    question: "How often should a business publish content?",
    answer:
      "Publishing frequency depends on your market, resources, competition and content objectives. A smaller number of useful and consistent pieces usually performs better than frequent low-quality publishing.",
  },
  {
    question: "Can you update our existing website content?",
    answer:
      "Yes. Existing content can be reviewed and improved for accuracy, search intent, structure, readability, internal linking, conversion relevance and current business positioning.",
  },
  {
    question: "How long does content marketing take to show results?",
    answer:
      "Engagement and campaign responses can appear early, while sustainable organic traffic and authority usually require consistent publishing over several months. Results depend on competition, website strength, content quality and distribution.",
  },
  {
    question: "How do you measure content marketing performance?",
    answer:
      "Performance can be measured using organic visibility, keyword movement, website traffic, engagement, time on page, downloads, enquiries, assisted conversions and content-supported revenue where tracking is available.",
  },
  {
    question: "Can you work with our internal content team?",
    answer:
      "Yes. We can manage the complete content workflow or support your team with strategy, research, writing, editing, SEO, design direction, distribution or reporting.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content Marketing Services",
  serviceType: "Content Marketing",
  description:
    "Content marketing services for strategy, SEO content, audience engagement, distribution, lead generation and measurable business growth.",
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

export default function ContentMarketingPage() {
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
          alt="BrainADZ Marketing content strategy and creative team"
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

            <span className="text-white">Content Marketing</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Content Marketing Services
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build a consistent content system that attracts relevant
              audiences, strengthens brand authority and supports measurable
              business growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Build your content strategy
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Page Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Content marketing page navigation"
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

      {/* Overview Section */}
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
            Turn expertise and ideas into business-building content
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Content marketing is more than writing regular blogs. BrainADZ
                combines audience research, content strategy, SEO, storytelling,
                production and distribution to create content that supports the
                complete customer journey.
              </p>

              <p className="mt-5 max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Every piece is created with a clear purpose—helping the right
                audience discover your brand, understand your expertise, trust
                your offer and take the next step.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Plan your content system
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/content-marketing/strategy.jpg"
                  alt="Content marketing strategy, planning and performance dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Content planning, production, distribution and performance
                analysis
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

      {/* Capabilities Section */}
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

          <h2 className="mt-5 max-w-[1250px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            A complete content system from research to results
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
                  src="/content-marketing/content-work.jpg"
                  alt="Content marketing work created by BrainADZ Marketing"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Strategy-led content created for search, social and customer
                engagement
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Lightbulb className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Every topic needs a purpose
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Content is selected according to audience intent, business
                      relevance and the role it plays in the customer journey.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Content Formats Section */}
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

              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right format for every audience need
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Content formats are selected according to audience intent,
              platform behaviour, available expertise and the business action
              each asset needs to support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {CONTENT_FORMATS.map((format, index) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
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

      {/* Distribution Section */}
      <section
        id="distribution"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Distribution
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Great content needs a clear path to the audience
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Publishing is only one part of the system. We connect every
              content asset with the channels and audiences most likely to find
              it useful.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {DISTRIBUTION_CHANNELS.map((channel) => {
              const Icon = channel.icon;

              return (
                <article
                  key={channel.title}
                  className="rounded-[14px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/55 hover:bg-white/[0.06] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/30 bg-[#E1122B]/10 text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight text-white">
                    {channel.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {channel.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Primary outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {channel.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              A clear content lifecycle from insight to improvement
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Research, planning, creation, review and distribution work as one
              connected system so content stays relevant, consistent and
              measurable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your content workflow
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

      {/* Deliverables Section */}
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
                Everything needed to run a consistent content program
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement creates a complete system covering strategy,
                research, planning, production, distribution and continuous
                improvement.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <Layers3
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  One idea, multiple useful assets
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Core content can be adapted into blogs, social posts, emails,
                  videos and sales-support material without losing consistency.
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

      {/* FAQs Section */}
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
              Questions before building your content program?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about content strategy, production, SEO,
              publishing frequency and performance measurement.
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