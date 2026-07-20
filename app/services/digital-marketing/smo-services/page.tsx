/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleGauge,
  FileSearch,
  Gauge,
  Globe2,
  Link2,
  ListChecks,
  MessageSquareText,
  PanelsTopLeft,
  Search,
  Settings2,
  Share2,
  Sparkles,
  Tags,
  Target,
  UserRoundCheck,
  Waypoints,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SMO Services | Social Media Optimization | BrainADZ Marketing",
  description:
    "Professional social media optimization services by BrainADZ Marketing. Improve profile visibility, content discoverability, engagement and conversion across major social platforms.",
  alternates: {
    canonical: "/services/digital-marketing/smo-services",
  },
  openGraph: {
    title: "SMO Services | BrainADZ Marketing",
    description:
      "Optimize your social profiles, content and audience journey for better visibility, engagement and measurable business growth.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Optimization Areas", href: "#optimization-areas" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger profile visibility",
    description:
      "Optimize profile elements so your brand is easier to understand, discover and remember across social platforms.",
    icon: Search,
  },
  {
    title: "Consistent brand identity",
    description:
      "Align profile visuals, descriptions, messaging and links with one clear and recognizable brand system.",
    icon: PanelsTopLeft,
  },
  {
    title: "Better content discovery",
    description:
      "Improve keywords, hashtags, captions and content structure to support organic reach and relevant visibility.",
    icon: Share2,
  },
  {
    title: "Clearer conversion journeys",
    description:
      "Guide social visitors towards useful actions such as enquiries, website visits, calls, messages and purchases.",
    icon: ChartNoAxesCombined,
  },
];

const FEATURES = [
  {
    title: "Complete social profile optimization",
    description:
      "Every profile should immediately explain who you are, what you offer and why the audience should take the next step. We optimize the complete profile structure around your brand and business objective.",
    points: [
      "Profile name, username and category review",
      "Keyword-focused bio and company description",
      "Profile image, cover and visual consistency",
      "Contact details, buttons and business information",
    ],
  },
  {
    title: "Search and discoverability improvements",
    description:
      "Social platforms increasingly work like search engines. We improve the signals that help platforms and users understand your content, services and areas of expertise.",
    points: [
      "Social keyword and topic research",
      "Caption and description optimization",
      "Relevant hashtag structure and usage",
      "Location, category and metadata alignment",
    ],
  },
  {
    title: "Content structure optimization",
    description:
      "Existing and upcoming content is organized around clear themes, formats and audience intent so your profile becomes more useful, consistent and easier to explore.",
    points: [
      "Content pillar and topic organization",
      "Platform-appropriate format recommendations",
      "Hook, caption and call-to-action improvements",
      "Pinned content and profile grid planning",
    ],
  },
  {
    title: "Audience engagement optimization",
    description:
      "We identify practical ways to improve interaction quality instead of focusing only on surface-level follower numbers and vanity metrics.",
    points: [
      "Audience behavior and engagement review",
      "Comment and direct-message journey assessment",
      "Community interaction recommendations",
      "Engagement-focused content opportunities",
    ],
  },
  {
    title: "Social traffic and conversion setup",
    description:
      "Your profile should make the next action simple. We optimize links, buttons and landing destinations to reduce friction between social discovery and business conversion.",
    points: [
      "Website and landing-page link review",
      "Link-in-bio structure and hierarchy",
      "WhatsApp, call and enquiry button setup",
      "UTM and campaign tracking recommendations",
    ],
  },
  {
    title: "Performance monitoring and improvement",
    description:
      "Optimization is treated as an ongoing process. We review profile activity and content signals to identify what should be retained, improved or tested next.",
    points: [
      "Profile visit and action tracking",
      "Reach, engagement and discovery review",
      "Content pattern and audience analysis",
      "Monthly optimization recommendations",
    ],
  },
];

const OPTIMIZATION_AREAS = [
  {
    title: "Profile foundation",
    description:
      "Build a complete, credible and professionally structured social profile that communicates your value clearly.",
    points: [
      "Profile identity",
      "Bio optimization",
      "Contact information",
      "Visual consistency",
    ],
    icon: UserRoundCheck,
  },
  {
    title: "Social search visibility",
    description:
      "Improve the keywords and classification signals that support discovery inside social platforms.",
    points: [
      "Keyword mapping",
      "Category alignment",
      "Caption signals",
      "Profile indexing",
    ],
    icon: Search,
  },
  {
    title: "Content discoverability",
    description:
      "Organize content so it can reach relevant users through search, recommendations and platform discovery.",
    points: [
      "Hashtag strategy",
      "Content topics",
      "Format optimization",
      "Metadata review",
    ],
    icon: Tags,
  },
  {
    title: "Brand consistency",
    description:
      "Maintain one recognizable voice and visual identity across every active social media touchpoint.",
    points: [
      "Brand messaging",
      "Creative direction",
      "Tone consistency",
      "Profile alignment",
    ],
    icon: Sparkles,
  },
  {
    title: "Engagement journey",
    description:
      "Create clearer opportunities for audiences to respond, interact, message and build trust with the brand.",
    points: [
      "CTA optimization",
      "Comment prompts",
      "Message pathways",
      "Community signals",
    ],
    icon: MessageSquareText,
  },
  {
    title: "Conversion pathways",
    description:
      "Connect profile visits and content engagement with website traffic, leads and other business outcomes.",
    points: [
      "Link optimization",
      "Landing destinations",
      "Action buttons",
      "Traffic tracking",
    ],
    icon: Waypoints,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit the current presence",
    description:
      "We review your active social profiles, account settings, branding, content structure, audience signals, competitors and current conversion pathways.",
    timing: "Days 1–3",
    output: "Complete SMO audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define optimization priorities",
    description:
      "We identify the most important profile, content, discoverability and conversion improvements based on your goals and current performance.",
    timing: "Week 1",
    output: "Priority action plan",
    icon: Target,
  },
  {
    number: "03",
    title: "Optimize profile elements",
    description:
      "Profile names, bios, descriptions, categories, visuals, contact details, links and action buttons are refined into one clear brand experience.",
    timing: "Week 1",
    output: "Optimized profiles",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Improve content signals",
    description:
      "We optimize content pillars, keywords, captions, hashtags, calls to action and profile organization for stronger relevance and discoverability.",
    timing: "Week 2",
    output: "Content optimization system",
    icon: CalendarRange,
  },
  {
    number: "05",
    title: "Connect traffic and conversions",
    description:
      "We review social links, landing destinations and tracking requirements so profile activity can support enquiries and measurable website actions.",
    timing: "Week 2",
    output: "Conversion pathway setup",
    icon: Link2,
  },
  {
    number: "06",
    title: "Monitor and refine",
    description:
      "Profile actions, content patterns and audience behavior are reviewed to identify additional improvements and future optimization opportunities.",
    timing: "Monthly",
    output: "Performance recommendations",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Social media account audit",
    description:
      "A structured review of profile completeness, branding, content, discoverability, engagement and conversion readiness.",
    icon: FileSearch,
  },
  {
    title: "Optimized profile copy",
    description:
      "Platform-appropriate bios, descriptions, category recommendations and keyword-aligned profile messaging.",
    icon: ListChecks,
  },
  {
    title: "Keyword and hashtag framework",
    description:
      "A practical keyword, topic and hashtag structure organized around your services, audience and social platforms.",
    icon: Tags,
  },
  {
    title: "Content optimization guidelines",
    description:
      "Recommendations for captions, hooks, formats, posting structure, pinned content and calls to action.",
    icon: PanelsTopLeft,
  },
  {
    title: "Link and CTA structure",
    description:
      "An improved pathway for website traffic, WhatsApp enquiries, calls, lead forms and important landing pages.",
    icon: Link2,
  },
  {
    title: "Optimization report",
    description:
      "A clear summary of completed improvements, remaining opportunities and recommended next actions.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your SMO service?",
    answer:
      "Our SMO service can include profile audits, bio and description optimization, keyword research, hashtag planning, content structure recommendations, visual consistency review, link optimization, action-button setup and performance recommendations. The final scope is aligned with your active platforms and business goals.",
  },
  {
    question: "What is the difference between SMM and SMO?",
    answer:
      "Social Media Marketing focuses on planning, creating, publishing and promoting social content. Social Media Optimization focuses on improving profiles, content signals, discoverability, engagement pathways and conversion readiness. Both services can work together, but they solve different parts of social media growth.",
  },
  {
    question: "Which social platforms can you optimize?",
    answer:
      "We can optimize business profiles on Instagram, Facebook, LinkedIn, YouTube, X and other relevant platforms. The recommended platforms depend on your audience, industry, content capability and business objective.",
  },
  {
    question: "Can you optimize our existing social media accounts?",
    answer:
      "Yes. We can review and improve existing accounts without requiring you to start again. We retain useful profile elements and content while correcting inconsistencies, missing information and weak discoverability or conversion signals.",
  },
  {
    question: "Does SMO help increase followers?",
    answer:
      "SMO can improve profile quality, discoverability, relevance and audience experience, which can support organic follower growth. However, follower growth also depends on content quality, posting consistency, audience demand, competition and promotional activity.",
  },
  {
    question: "Do you provide keyword and hashtag research?",
    answer:
      "Yes. We identify relevant service keywords, audience terms, content topics and hashtag groups. These are organized by platform and content intent instead of using the same generic hashtags on every post.",
  },
  {
    question: "Will you also create and publish social media content?",
    answer:
      "Content creation and publishing are generally covered under our SMM service. They can be added to an SMO engagement when required so profile optimization and ongoing content execution follow the same strategy.",
  },
  {
    question: "How quickly can SMO show results?",
    answer:
      "Profile clarity and consistency can improve as soon as the recommended changes are implemented. Discoverability, engagement and conversion improvements usually become clearer over time as optimized profiles receive consistent, relevant content and audience activity.",
  },
  {
    question: "Is SMO a one-time or ongoing service?",
    answer:
      "A complete foundational optimization can be delivered as a one-time project. Ongoing review is recommended because platform features, audience behavior, content trends and business priorities continue to change.",
  },
  {
    question: "How do you measure SMO performance?",
    answer:
      "We review relevant indicators such as profile visits, search visibility, reach, engagement quality, website clicks, contact actions, enquiries and content discovery patterns. The selected metrics depend on the role of each social platform.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Optimization Services",
  serviceType: "Social Media Optimization",
  description:
    "Social media optimization services for profile visibility, content discoverability, audience engagement and conversion improvement.",
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

export default function SmoServicesPage() {
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
          alt="BrainADZ Marketing social media optimization team"
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

            <span className="text-white">SMO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Social Media Optimization Services
          </h1>

          <div className="mt-auto max-w-[720px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve how your brand is discovered, understood and chosen
              across social media with profiles and content optimized for
              visibility, engagement and conversion.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Optimize your social presence
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Page Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="SMO page navigation"
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

          <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn every social profile into a stronger brand asset
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Social media optimization improves the complete experience
                around your brand profiles. BrainADZ reviews profile
                information, visual consistency, keywords, content signals,
                audience journeys and conversion pathways to make your presence
                easier to discover, trust and act on.
              </p>

              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Instead of treating every account as an isolated page, we build
                a connected optimization system that supports search
                visibility, engagement, website traffic and qualified
                enquiries.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Request an SMO audit
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/smm/panel.jpg"
                  alt="Social media profile optimization and management dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Social profile visibility, content and performance optimization
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

      {/* Features Section */}
      <section
        id="features"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Features
            </p>
          </div>

          <h2 className="mt-5 max-w-[1250px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Every important social signal, properly optimized
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
              {FEATURES.map((feature, index) => (
                <details
                  key={feature.title}
                  open={index === 0}
                  className="group border-b border-black/10 last:border-b-0 open:border-l-[3px] open:border-l-[#E1122B] open:bg-[#fff8f8]"
                >
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left text-[17px] font-medium text-black transition-colors hover:bg-[#fff8f8] focus-visible:bg-[#fff8f8] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                    <span>{feature.title}</span>

                    <ChevronDown
                      className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                      strokeWidth={1.7}
                    />
                  </summary>

                  <div className="px-5 pb-7 pt-1">
                    <p className="max-w-[700px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                      {feature.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {feature.points.map((point) => (
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
                  src="/portfolio/instagram/2.png"
                  alt="Optimized social media profile and content created by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Selected social media profile and content work by BrainADZ
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Gauge className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Optimization before promotion
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      A well-optimized profile gives organic content and paid
                      campaigns a clearer, more credible destination.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section
        id="optimization-areas"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Optimization Areas
                </p>
              </div>

              <h2 className="mt-5 max-w-[1020px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                A connected system for visibility and action
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              SMO works best when profile information, search signals, content,
              audience interaction and conversion pathways support the same
              business objective.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {OPTIMIZATION_AREAS.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {area.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {area.points.map((point) => (
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
              A practical process from audit to improvement
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every recommendation is connected to a clear issue, business
              objective and implementation step. This keeps the optimization
              process focused and measurable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Start your SMO project
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
                Clear outputs your team can implement
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces practical improvements and documented
                recommendations instead of a generic social media report.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <Globe2
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  One consistent presence across platforms
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Every optimized account remains platform-appropriate while
                  supporting the same brand identity and business direction.
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
                      <div className="flex h-13 w-13 min-h-13 min-w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>

                      <span className="text-[13px] font-semibold text-black/20">
                        0{index + 1}
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

      {/* FAQ Section */}
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
              Questions about social media optimization
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical answers about the service scope, expected outcomes and
              how SMO fits into your wider digital marketing strategy.
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