/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarRange,
  Camera,
  Check,
  ChevronDown,
  CircleGauge,
  FileCheck2,
  FileSearch,
  Handshake,
  Heart,
  Link2,
  ListChecks,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  UsersRound,
  Video,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Influencer Marketing Services | BrainADZ Marketing",
  description:
    "Influencer marketing services by BrainADZ Marketing for creator discovery, campaign strategy, content coordination, audience reach, engagement and measurable brand growth.",
  alternates: {
    canonical: "/services/digital-marketing/influencer-marketing",
  },
  openGraph: {
    title: "Influencer Marketing Services | BrainADZ Marketing",
    description:
      "Build authentic creator partnerships and measurable influencer campaigns with BrainADZ Marketing.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Collaboration Models", href: "#collaboration-models" },
  { label: "Content Formats", href: "#content-formats" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Relevant creator partnerships",
    description:
      "Work with creators whose audience, content style and credibility align with your market and campaign objective.",
    icon: UsersRound,
  },
  {
    title: "Authentic brand communication",
    description:
      "Present products and services through creator-led stories that feel natural to the platform and audience.",
    icon: MessageCircle,
  },
  {
    title: "Stronger audience reach",
    description:
      "Extend brand visibility through trusted voices and communities that already influence customer attention.",
    icon: Megaphone,
  },
  {
    title: "Measurable campaign impact",
    description:
      "Track reach, engagement, traffic, leads, sales and content performance across every creator collaboration.",
    icon: BarChart3,
  },
];

const CAPABILITIES = [
  {
    title: "Influencer strategy built around your goals",
    description:
      "Every campaign begins with a clear understanding of the audience, product, customer journey and business outcome. This determines the right creators, platforms, content and commercial structure.",
    points: [
      "Campaign objective and audience definition",
      "Platform and creator category selection",
      "Budget and collaboration model planning",
      "Performance metrics and reporting framework",
    ],
  },
  {
    title: "Creator discovery and evaluation",
    description:
      "We identify creators using audience relevance, content quality, engagement patterns, credibility and brand suitability instead of relying only on follower count.",
    points: [
      "Niche and platform-based creator research",
      "Audience and engagement quality review",
      "Brand-fit and content-style assessment",
      "Fake follower and suspicious activity checks",
    ],
  },
  {
    title: "Outreach and commercial coordination",
    description:
      "Creator communication is managed through a structured process covering availability, commercials, timelines, content requirements and usage expectations.",
    points: [
      "Creator outreach and negotiation",
      "Commercial and deliverable coordination",
      "Campaign timelines and publishing dates",
      "Content usage and exclusivity discussions",
    ],
  },
  {
    title: "Campaign briefs and creative direction",
    description:
      "Creators receive clear guidance without removing the authenticity that makes their content effective. The brief defines the message while allowing space for the creator's natural voice.",
    points: [
      "Campaign concept and message hierarchy",
      "Mandatory claims, talking points and CTA",
      "Visual, product and brand guidelines",
      "Platform-specific content requirements",
    ],
  },
  {
    title: "Content review and campaign management",
    description:
      "Draft content, scripts, captions and final assets are reviewed through an organized approval workflow before publication.",
    points: [
      "Script and concept review",
      "Brand, product and claim accuracy checks",
      "Revision and approval coordination",
      "Publishing and campaign tracking",
    ],
  },
  {
    title: "Performance reporting and optimization",
    description:
      "Campaign data is analyzed to identify which creators, formats, audiences and messages produced the strongest brand and business outcomes.",
    points: [
      "Reach and engagement analysis",
      "Traffic, lead and conversion tracking",
      "Creator and content comparison",
      "Recommendations for future campaigns",
    ],
  },
];

const COLLABORATION_MODELS = [
  {
    title: "Nano influencers",
    description:
      "Work with smaller, highly focused communities where creator-audience relationships are often personal and engaged.",
    points: [
      "Niche communities",
      "Local influence",
      "High relatability",
      "Product advocacy",
    ],
    icon: Heart,
  },
  {
    title: "Micro influencers",
    description:
      "Reach relevant audiences through creators who combine focused expertise with scalable engagement.",
    points: [
      "Category expertise",
      "Audience trust",
      "Product education",
      "Focused reach",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Macro influencers",
    description:
      "Build wider campaign visibility through established creators with significant platform reach and recognition.",
    points: [
      "Large audiences",
      "Campaign awareness",
      "High visibility",
      "Content amplification",
    ],
    icon: Megaphone,
  },
  {
    title: "Celebrity partnerships",
    description:
      "Connect major launches and brand campaigns with recognizable public personalities where broader impact is required.",
    points: [
      "Mass visibility",
      "Brand association",
      "Launch campaigns",
      "Premium positioning",
    ],
    icon: Sparkles,
  },
  {
    title: "Industry experts",
    description:
      "Build credibility through professionals, specialists and thought leaders who influence technical or business decisions.",
    points: [
      "Professional authority",
      "B2B audiences",
      "Technical content",
      "Thought leadership",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Long-term ambassadors",
    description:
      "Develop ongoing creator relationships that build repeated exposure, familiarity and deeper brand association.",
    points: [
      "Always-on content",
      "Brand familiarity",
      "Consistent advocacy",
      "Long-term trust",
    ],
    icon: Handshake,
  },
];

const CONTENT_FORMATS = [
  {
    title: "Product demonstrations",
    description:
      "Show how the product works, what makes it useful and how it fits naturally into the creator's routine or expertise.",
    output: "Product understanding",
    icon: ShoppingBag,
  },
  {
    title: "Reviews and testimonials",
    description:
      "Communicate genuine creator experiences, product observations and practical recommendations to relevant audiences.",
    output: "Trust and consideration",
    icon: MessageCircle,
  },
  {
    title: "Reels and short videos",
    description:
      "Create high-attention vertical content designed for discovery, storytelling and fast audience engagement.",
    output: "Reach and engagement",
    icon: Video,
  },
  {
    title: "Stories and live content",
    description:
      "Use informal, time-sensitive creator content to support launches, offers, events and direct audience interaction.",
    output: "Immediate action",
    icon: Camera,
  },
  {
    title: "Giveaways and contests",
    description:
      "Encourage audience participation through clearly structured campaign mechanics, eligibility and brand actions.",
    output: "Participation and reach",
    icon: Zap,
  },
  {
    title: "Event and launch coverage",
    description:
      "Extend the visibility of events, openings, exhibitions and product launches through creator-led on-ground content.",
    output: "Launch amplification",
    icon: PanelsTopLeft,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the campaign objective",
    description:
      "We clarify the target audience, product, platform, campaign message, expected action, budget and performance goals.",
    timing: "Days 1–3",
    output: "Campaign goal brief",
    icon: Target,
  },
  {
    number: "02",
    title: "Research and shortlist creators",
    description:
      "Potential creators are evaluated across audience relevance, content quality, engagement, credibility, brand safety and commercial suitability.",
    timing: "Week 1",
    output: "Creator shortlist",
    icon: Search,
  },
  {
    number: "03",
    title: "Coordinate commercials",
    description:
      "We manage outreach, creator availability, commercials, deliverables, usage requirements and publishing expectations.",
    timing: "Week 1–2",
    output: "Confirmed collaborations",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Build the campaign brief",
    description:
      "The campaign concept, core message, mandatory information, product details, content format and CTA are documented clearly.",
    timing: "Week 2",
    output: "Creator campaign brief",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Create and approve content",
    description:
      "Creator concepts, scripts, captions and draft assets are reviewed for accuracy, brand alignment and campaign compliance.",
    timing: "Every campaign",
    output: "Approved content",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Publish and amplify",
    description:
      "Approved content is published according to the campaign calendar and supported through reposting or paid amplification where required.",
    timing: "Launch phase",
    output: "Live creator campaign",
    icon: CalendarRange,
  },
  {
    number: "07",
    title: "Measure and improve",
    description:
      "Campaign performance is reviewed across creators, content formats, audience response and measurable business actions.",
    timing: "Post-campaign",
    output: "Campaign report",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Influencer campaign strategy",
    description:
      "A structured campaign plan covering audience, platforms, creator categories, formats, budget and measurable objectives.",
    icon: ListChecks,
  },
  {
    title: "Creator shortlist",
    description:
      "A relevant list of evaluated creators with audience, engagement, content and brand-fit observations.",
    icon: UsersRound,
  },
  {
    title: "Creator outreach",
    description:
      "Professional communication covering availability, campaign requirements, commercials and collaboration expectations.",
    icon: MessageCircle,
  },
  {
    title: "Campaign brief",
    description:
      "Clear creative direction covering the campaign concept, key messages, mandatory points, visual requirements and CTA.",
    icon: FileCheck2,
  },
  {
    title: "Content approval system",
    description:
      "An organized workflow for reviewing scripts, captions, drafts, corrections and final creator content.",
    icon: Workflow,
  },
  {
    title: "Publishing calendar",
    description:
      "A structured schedule covering creator deliverables, approval dates, publishing dates and campaign milestones.",
    icon: CalendarRange,
  },
  {
    title: "Campaign tracking",
    description:
      "Tracking for content links, discount codes, enquiries, website visits and other measurable campaign actions.",
    icon: Link2,
  },
  {
    title: "Performance report",
    description:
      "A clear report covering creator results, content performance, engagement, traffic, conversions and future recommendations.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your influencer marketing service?",
    answer:
      "The service can include campaign strategy, creator research, influencer shortlisting, outreach, commercial coordination, campaign briefs, content review, publishing management, tracking and reporting. The final scope depends on the campaign size and objectives.",
  },
  {
    question: "How do you select the right influencers?",
    answer:
      "Creators are evaluated using audience relevance, engagement quality, content style, credibility, category expertise, brand safety and commercial suitability. Follower count is only one part of the assessment.",
  },
  {
    question: "Do you work with nano, micro and celebrity influencers?",
    answer:
      "Yes. We can work with nano, micro, macro, celebrity and industry-focused creators. The recommended mix depends on the target audience, campaign objective, platform and available budget.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "Campaigns can be planned for Instagram, YouTube, Facebook, LinkedIn and other relevant creator platforms. The platform mix is selected according to audience behaviour and content requirements.",
  },
  {
    question: "Is influencer cost included in your management fee?",
    answer:
      "Creator commercials are generally separate from strategy and campaign management fees. Estimated creator costs and management scope are defined before the campaign begins.",
  },
  {
    question: "Can you guarantee influencer campaign sales?",
    answer:
      "No responsible influencer campaign can guarantee a fixed number of sales. Results depend on the creator, audience, offer, product fit, pricing, content quality, landing experience and campaign tracking.",
  },
  {
    question: "Do you review influencer content before publishing?",
    answer:
      "Yes. Content can be reviewed for campaign messaging, product accuracy, brand guidelines, claims, CTA and required disclosures. Final approval responsibilities are defined during campaign setup.",
  },
  {
    question: "Do influencers need to disclose paid partnerships?",
    answer:
      "Paid or sponsored collaborations should follow applicable platform rules, advertising requirements and disclosure guidelines. Required labels and disclosures are included in the campaign brief and approval process.",
  },
  {
    question: "Can influencer content be reused in advertisements?",
    answer:
      "Creator content can only be reused when usage rights, duration, channels and paid media permissions are agreed with the creator. These rights should be documented before publication.",
  },
  {
    question: "How do you track influencer campaign performance?",
    answer:
      "Performance can be measured using reach, views, engagement, audience responses, profile visits, website clicks, tracked links, coupon codes, enquiries, purchases and content quality indicators.",
  },
  {
    question: "Do you manage long-term brand ambassador programs?",
    answer:
      "Yes. We can plan ongoing creator relationships with regular content, campaign themes, performance reviews and long-term brand association.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Influencer Marketing Services",
  serviceType: "Influencer Marketing",
  description:
    "Influencer marketing services for creator discovery, campaign strategy, content coordination, audience reach and measurable brand growth.",
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

export default function InfluencerMarketingPage() {
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
          alt="BrainADZ Marketing influencer campaign team"
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

            <span className="text-white">Influencer Marketing</span>
          </nav>

          <h1 className="mt-7 max-w-[940px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Influencer Marketing Services
          </h1>

          <div className="mt-auto max-w-[780px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build authentic creator partnerships and campaigns that increase
              brand reach, audience trust and measurable customer action.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Launch an influencer campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Influencer marketing page navigation"
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

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn creator influence into meaningful brand growth
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Influencer marketing works when the creator, audience, message
                and business objective are properly aligned. BrainADZ combines
                campaign strategy, creator discovery, outreach, content
                coordination and performance measurement into one structured
                system.
              </p>

              <p className="mt-5 max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                We focus on credible partnerships and platform-native content
                that helps audiences discover your brand, understand the offer
                and take a relevant next step.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Plan your creator campaign
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/influencer-marketing/campaign-dashboard.jpg"
                  alt="Influencer marketing campaign management and creator performance"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Creator discovery, campaign coordination and performance
                reporting
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

          <h2 className="mt-5 max-w-[1260px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            A complete influencer campaign system
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
                  src="/influencer-marketing/creator-campaign.jpg"
                  alt="Creator collaboration and influencer campaign planning"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Creator research, campaign briefing and content coordination
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <BadgeCheck className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Relevance matters more than follower count
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      The right creator is selected through audience fit,
                      content credibility, engagement quality and campaign
                      suitability.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Collaboration Models Section */}
      <section
        id="collaboration-models"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Collaboration Models
                </p>
              </div>

              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right creator mix for every campaign
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Collaboration models are selected according to audience size,
              trust, content requirements, campaign duration and the business
              outcome the partnership needs to support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {COLLABORATION_MODELS.map((model, index) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {model.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {model.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {model.points.map((point) => (
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

      {/* Content Formats Section */}
      <section
        id="content-formats"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Content Formats
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Creator content built for attention and action
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Content formats are selected according to the product, creator
              style, platform behaviour and the response expected from the
              audience.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CONTENT_FORMATS.map((format, index) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
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
                    {format.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {format.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Primary outcome
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {format.output}
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
              A clear process from creator selection to results
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every collaboration moves through research, commercial
              coordination, briefing, approval, publishing and reporting so the
              campaign remains controlled and measurable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your influencer workflow
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
                Everything required to manage creator campaigns
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces a complete campaign system covering
                creator research, coordination, briefing, approvals, publishing
                and measurable reporting.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Transparent creator partnerships
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Campaign expectations, paid partnership disclosures, content
                  usage and approval responsibilities are defined before
                  publishing.
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
              Questions before starting an influencer campaign?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about creator selection, commercials,
              content approval, disclosures, usage rights and campaign
              measurement.
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