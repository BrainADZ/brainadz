/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CircleAlert,
  FileSearch,
  Globe2,
  Handshake,
  Landmark,
  Link2,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Off Page SEO Services | Authority & Reputation | BrainADZ",
  description:
    "Off Page SEO services by BrainADZ strengthen authority through editorial links, digital PR, brand mentions, citations, reviews, partnerships and transparent reporting.",
  alternates: {
    canonical: "/services/off-page-seo",
  },
  openGraph: {
    title: "Off Page SEO Services | BrainADZ Marketing",
    description:
      "Build stronger search authority, brand trust and referral visibility through ethical Off Page SEO campaigns.",
    type: "website",
    url: "/services/off-page-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Page SEO Services | BrainADZ Marketing",
    description:
      "Editorial links, digital PR, brand mentions, citations, reviews and off-site authority reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Signals", href: "#signals" },
  { label: "Channels", href: "#channels" },
  { label: "Reputation", href: "#reputation" },
  { label: "Risk Control", href: "#risk-control" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Stronger search authority",
    description:
      "Build credible external signals that support the ability of important pages and topics to compete.",
    icon: ShieldCheck,
  },
  {
    title: "Greater brand trust",
    description:
      "Increase the number of reliable places where customers can discover, verify and evaluate your business.",
    icon: BadgeCheck,
  },
  {
    title: "Broader referral visibility",
    description:
      "Reach relevant audiences through publishers, communities, directories, partners and earned media coverage.",
    icon: Globe2,
  },
  {
    title: "More defensible growth",
    description:
      "Replace manufactured link volume with transparent authority-building activity that supports long-term performance.",
    icon: TrendingUp,
  },
];

const AUTHORITY_SIGNALS = [
  {
    number: "01",
    title: "Editorial authority",
    description:
      "Relevant publishers and websites reference your pages, expertise, research, products or business resources in useful context.",
    focus: "Links and citations",
    icon: Newspaper,
  },
  {
    number: "02",
    title: "Brand prominence",
    description:
      "Your business is mentioned consistently across industry media, partner ecosystems, communities and trusted web sources.",
    focus: "Mentions and discovery",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Reputation signals",
    description:
      "Reviews, ratings, responses and third-party profiles help customers evaluate credibility before visiting the website.",
    focus: "Trust and sentiment",
    icon: Star,
  },
  {
    number: "04",
    title: "Relationship strength",
    description:
      "Associations, suppliers, creators, publications and community relationships create recurring opportunities for legitimate visibility.",
    focus: "Partnerships and networks",
    icon: Handshake,
  },
];

const OFF_PAGE_CHANNELS = [
  {
    eyebrow: "Editorial link acquisition",
    title: "Earn relevant links where your expertise adds real value",
    description:
      "We research and qualify contextual opportunities across publications, industry resources, associations and specialist websites.",
    points: [
      "Backlink and competitor gap analysis",
      "Publisher and resource-page prospecting",
      "Expert contributions and guest content",
      "Broken-link and link-reclamation opportunities",
      "Placement verification and quality review",
    ],
    icon: Link2,
  },
  {
    eyebrow: "Digital PR",
    title: "Turn credible stories, data and expertise into media coverage",
    description:
      "Campaigns are built around useful business insight, original data, expert commentary and newsworthy assets that publishers can reference.",
    points: [
      "Story and campaign-angle development",
      "Data-led and research-led concepts",
      "Journalist and publication targeting",
      "Expert commentary and reactive PR",
      "Coverage, mention and link monitoring",
    ],
    icon: Newspaper,
  },
  {
    eyebrow: "Brand mentions",
    title: "Increase credible references to your business across the web",
    description:
      "We identify where your brand, products, leadership or expertise can be cited naturally, with or without a backlink.",
    points: [
      "Unlinked brand-mention discovery",
      "Mention reclamation and correction",
      "Expert profile and company-reference opportunities",
      "Industry roundups and resource inclusion",
      "Brand consistency across third-party pages",
    ],
    icon: Megaphone,
  },
  {
    eyebrow: "Citations and business profiles",
    title: "Keep business information accurate across trusted platforms",
    description:
      "Directory and profile work focuses on relevant, credible sources rather than submitting the business to low-quality lists at scale.",
    points: [
      "Core business-data consistency",
      "Industry and market-specific directories",
      "Local and branch citations where relevant",
      "Duplicate and incorrect-listing cleanup",
      "Profile completeness and ownership review",
    ],
    icon: Landmark,
  },
  {
    eyebrow: "Reviews and reputation",
    title: "Support a credible review and response system",
    description:
      "We help organise ethical review acquisition, response workflows and reputation monitoring across the platforms customers use to evaluate the brand.",
    points: [
      "Policy-safe review-request guidance",
      "Positive and negative response frameworks",
      "Review sentiment and recurring-theme analysis",
      "Platform and branch-level monitoring",
      "Reputation insights for content and operations",
    ],
    icon: Star,
  },
  {
    eyebrow: "Partnership and community visibility",
    title: "Use real relationships to expand authority and reach",
    description:
      "Suppliers, associations, events, communities, creators and business partners can create relevant visibility that generic outreach cannot.",
    points: [
      "Partner and supplier-link opportunities",
      "Association and membership visibility",
      "Event, sponsorship and community mentions",
      "Creator and expert collaboration ideas",
      "Co-marketing and resource partnerships",
    ],
    icon: Handshake,
  },
];

const REPUTATION_AREAS = [
  {
    title: "Brand consistency",
    description:
      "Company names, descriptions, products, locations and contact details remain accurate wherever the brand is represented.",
    icon: Building2,
  },
  {
    title: "Review credibility",
    description:
      "Review acquisition and responses are handled transparently without incentives, gating or manufactured sentiment.",
    icon: Star,
  },
  {
    title: "Mention quality",
    description:
      "Coverage and citations are evaluated for relevance, context, publication standards and likely audience value.",
    icon: BadgeCheck,
  },
  {
    title: "Issue response",
    description:
      "Incorrect information, lost links, misleading references and reputation risks are identified and prioritised for action.",
    icon: MessagesSquare,
  },
];

const QUALITY_CRITERIA = [
  {
    title: "Topical relevance",
    description:
      "The website, page and surrounding context should genuinely relate to the brand, market or target topic.",
    icon: Target,
  },
  {
    title: "Editorial standards",
    description:
      "The source should publish useful content with identifiable ownership, reasonable quality control and a real audience.",
    icon: Newspaper,
  },
  {
    title: "Organic visibility",
    description:
      "The domain should show credible search presence and content activity rather than existing only to sell placements.",
    icon: Radar,
  },
  {
    title: "Natural context",
    description:
      "The mention or link should help the referring page and fit naturally within the surrounding information.",
    icon: Link2,
  },
];

const REJECTED_TACTICS = [
  "Private blog networks and disguised link farms",
  "Bulk directory submissions without relevance",
  "Automated comments, forum spam and profile links",
  "Guaranteed authority packages with undisclosed placements",
  "Irrelevant guest posts created only for exact-match anchors",
  "Paid reviews, review gating or manufactured reputation signals",
  "Sitewide template links used primarily to manipulate rankings",
  "Outreach to unqualified websites based only on third-party metrics",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit the off-site authority landscape",
    description:
      "We review backlinks, mentions, citations, reviews, competitor visibility, lost links, referral sources and reputation risks.",
    timing: "Initial phase",
    output: "Off-page authority audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Prioritise markets, pages and signals",
    description:
      "We identify which services, categories, locations, topics and reputation areas need stronger external support.",
    timing: "Strategy phase",
    output: "Authority and campaign roadmap",
    icon: Target,
  },
  {
    number: "03",
    title: "Build campaign reasons and assets",
    description:
      "We develop the stories, expert contributions, research, resources, proof and partnership angles required to earn attention.",
    timing: "Planning phase",
    output: "Campaign briefs and outreach assets",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Execute outreach and relationship activity",
    description:
      "Qualified prospects are contacted with relevant, personalised reasons to engage, mention, cite or collaborate with the brand.",
    timing: "Ongoing execution",
    output: "Active conversations and earned visibility",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Verify, monitor and refine",
    description:
      "Links, mentions, citations and reviews are checked for status and quality while campaign learning shapes the next cycle.",
    timing: "Monthly review",
    output: "Verified results and next-step plan",
    icon: Workflow,
  },
];

const REPORTING_AREAS = [
  {
    title: "Link and referring-domain growth",
    description:
      "Track newly earned, reclaimed and lost links together with their relevance, destinations, anchors and verification status.",
    metrics: [
      "New and lost referring domains",
      "Target-page and topic distribution",
      "Anchor and placement context",
      "Live, changed and reclaimed links",
    ],
    icon: Link2,
  },
  {
    title: "Brand mention and media visibility",
    description:
      "Measure how the brand appears across publishers, resources, industry platforms and earned coverage.",
    metrics: [
      "Linked and unlinked mentions",
      "Publisher and media coverage",
      "Mention quality and sentiment",
      "Reclamation and correction opportunities",
    ],
    icon: Megaphone,
  },
  {
    title: "Citation and reputation health",
    description:
      "Review the accuracy and trust signals visible across relevant profiles, directories and review platforms.",
    metrics: [
      "Citation consistency and duplicates",
      "Review volume and sentiment trends",
      "Response coverage and recurring themes",
      "Profile completeness and issue status",
    ],
    icon: Star,
  },
  {
    title: "Search and referral impact",
    description:
      "Connect off-site activity with visibility, referral engagement and commercial outcomes without claiming false attribution.",
    metrics: [
      "Target-topic visibility changes",
      "Referral visits and engagement",
      "Assisted enquiries and conversions",
      "Campaign and channel performance",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Off Page SEO service?",
    answer:
      "An Off Page SEO engagement can include backlink analysis, editorial link acquisition, digital PR, brand-mention monitoring, citation management, review and reputation support, partnership opportunities, link reclamation, risk review and transparent reporting. The exact mix depends on your business model, current authority and target markets.",
  },
  {
    question: "How is Off Page SEO different from Link Building?",
    answer:
      "Link building focuses specifically on earning and managing backlinks. Off Page SEO is broader and can include links, unlinked brand mentions, digital PR, reviews, citations, business profiles, partnerships, reputation signals and referral visibility. Link building is therefore one part of a complete Off Page SEO strategy.",
  },
  {
    question: "Do you guarantee a fixed number of backlinks?",
    answer:
      "No. Genuine editorial links depend on relevance, publisher decisions, campaign quality and available assets. We define activity, quality standards and reporting clearly, but we do not promise artificial quantities or guaranteed placements.",
  },
  {
    question: "Do brand mentions help even without a backlink?",
    answer:
      "Unlinked mentions can still improve brand discovery, credibility and referral awareness. They can also create future reclamation opportunities. Their exact search impact is difficult to isolate, so we evaluate them as part of the broader authority and reputation picture.",
  },
  {
    question: "Do you manage online reviews?",
    answer:
      "We can support review-request workflows, response frameworks, monitoring and recurring-theme analysis. We do not create fake reviews, offer incentives for positive ratings or use review gating.",
  },
  {
    question: "Do you submit businesses to directories?",
    answer:
      "Only where the directory or profile is relevant, credible and useful for the business. We prioritise important general, industry, local and market-specific sources rather than mass submissions to low-quality directories.",
  },
  {
    question: "Can you remove harmful or spammy backlinks?",
    answer:
      "We can audit suspicious links, identify patterns, review manual-action risks and recommend outreach, reclamation or disavowal steps where justified. Most low-quality links do not require immediate action, so decisions are made carefully rather than disavowing large groups automatically.",
  },
  {
    question: "How long does Off Page SEO take to show results?",
    answer:
      "Prospecting and cleanup can begin early, while earned coverage, authority growth and search impact usually develop over several months. Timing depends on competition, brand credibility, content assets, publisher response cycles and the strength of the website being promoted.",
  },
  {
    question: "How do you report Off Page SEO performance?",
    answer:
      "Reporting can include qualified outreach, earned and lost links, brand mentions, citations, review trends, referral traffic, search visibility and assisted conversions. We separate completed activity from earned outcomes so the programme remains transparent.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Off Page SEO Services",
  serviceType: "Off Page Search Engine Optimization",
  description:
    "Off Page SEO services covering editorial links, digital PR, brand mentions, citations, reviews, partnerships, reputation and authority reporting.",
  url: "https://www.brainadz.marketing/services/off-page-seo",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Off Page SEO Deliverables",
    itemListElement: OFF_PAGE_CHANNELS.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.eyebrow,
        description: service.description,
      },
    })),
  },
};

const faqSchema = {
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

export default function OffPageSeoServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/seo/off-page-seo-hero.jpg"
          alt="Off Page SEO strategy using editorial links, digital PR and brand authority"
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
              className="text-[#E1122B] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Off Page SEO Services</span>
          </nav>

          <h1 className="mt-7 max-w-[920px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Off Page SEO Services
          </h1>

          <div className="mt-auto max-w-[800px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Strengthen search authority, brand trust and referral visibility
              through ethical links, digital PR, credible mentions, citations,
              reviews and real industry relationships.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Build your off-site authority
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Off Page SEO page navigation"
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
              Off Page SEO overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1240px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Build trust and authority beyond the pages you control
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Off Page SEO improves the external signals that shape how search
                engines and customers evaluate your brand. BrainADZ combines
                editorial links, digital PR, mentions, citations, reviews and
                partnerships into one structured authority programme.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Link building is an important part of the work, but it is not the
                entire strategy. Strong off-site visibility also depends on where
                the brand is discussed, how consistently it is represented and
                whether third-party sources reinforce credibility.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your off-site authority
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/off-page-seo-overview.jpg"
                  alt="Off Page SEO overview with links, mentions, citations and reputation signals"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Off Page SEO combines authority, prominence, reputation and
                relationship-driven visibility.
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

      {/* Signals */}
      <section
        id="signals"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Off-page authority signals
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Authority grows when credible third parties reinforce the brand
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              No single metric defines off-site strength. We evaluate links,
              mentions, reputation, citations and relationships together to build
              a more complete authority profile.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {AUTHORITY_SIGNALS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-[14px] border border-white/14 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/70 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[26px] font-medium text-[#E1122B]">
                      {item.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#E1122B]/35 bg-[#E1122B]/10 text-[#E1122B]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                  </div>
                  <h3 className="mt-10 text-[25px] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-white/58">
                    {item.description}
                  </p>
                  <p className="mt-7 border-t border-white/12 pt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
                    {item.focus}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section
        id="channels"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Off Page SEO channels
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use the right external channel for each authority objective
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Some goals require editorial outreach, while others depend on
              reputation, profile accuracy, media visibility or existing business
              relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {OFF_PAGE_CHANNELS.map((channel) => {
              const Icon = channel.icon;

              return (
                <article
                  key={channel.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {channel.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {channel.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {channel.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {channel.points.map((point) => (
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

      {/* Reputation */}
      <section
        id="reputation"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/seo/off-page-brand-reputation.jpg"
                alt="Brand mentions, reviews and reputation monitoring for Off Page SEO"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Brand mentions and reputation
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Make third-party brand information accurate, credible and useful
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Customers often evaluate a brand through reviews, profiles, media
              mentions and partner pages before reaching the website. These external
              touchpoints must support the same business reality.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {REPUTATION_AREAS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Risk control */}
      <section
        id="risk-control"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-[188px]">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Quality and risk control
                </p>
              </div>
              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Protect the brand from manufactured authority and reputation risk
              </h2>
              <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Third-party metrics can support research, but they do not prove
                quality. Every opportunity is evaluated manually for relevance,
                context, credibility and long-term risk.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your off-page risks
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {QUALITY_CRITERIA.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[14px] border border-black/10 bg-white p-6 transition-colors hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.7} />
                        </div>
                        <h3 className="text-[17px] font-semibold text-black">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-5 text-[14px] leading-6 text-black/60">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <aside className="mt-6 rounded-[18px] bg-black p-7 text-white sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B]">
                    <CircleAlert className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                      Rejected tactics
                    </p>
                    <h3 className="mt-1 text-[24px] font-semibold">
                      Activity we do not use
                    </h3>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {REJECTED_TACTICS.map((tactic) => (
                    <li
                      key={tactic}
                      className="flex items-start gap-3 rounded-[10px] border border-white/10 bg-white/[0.035] p-4 text-[14px] leading-6 text-white/68"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]"
                      />
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
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
                Off Page SEO process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              A structured path from authority audit to earned visibility
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Each campaign follows a clear reason, quality standard and reporting
              framework so off-site growth remains transparent and defensible.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start with an authority audit
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

      {/* Reporting */}
      <section
        id="reporting"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Off Page SEO reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Measure earned authority, reputation and referral impact
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting separates completed activity from earned outcomes and avoids
              attributing every ranking change to a single external signal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/seo/off-page-seo-reporting-dashboard.jpg"
                  alt="Off Page SEO reporting dashboard for links, mentions, citations and reputation"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Transparent reporting distinguishes outreach activity, earned
                visibility and measurable business impact.
              </figcaption>
            </figure>

            <div className="space-y-4">
              {REPORTING_AREAS.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] sm:p-7"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-black">
                          {area.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-2">
                      {area.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                            strokeWidth={1.8}
                          />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Off Page SEO FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before building off-site authority
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand links, mentions, reviews, citations, timelines, quality
              controls and reporting before starting.
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
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-black/10"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/55 transition-all duration-300 group-open:rotate-45 group-open:border-[#E1122B]/30 group-open:bg-[#fff1f1] group-open:text-[#E1122B]">
                    <span className="relative block h-4 w-4" aria-hidden="true">
                      <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                    </span>
                  </span>
                </summary>
                <div className="px-1 pb-7 sm:px-4">
                  <p className="max-w-[900px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
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