/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Check,
  CircleAlert,
  FileSearch,
  Globe2,
  Handshake,
  Layers3,
  Link2,
  Mail,
  Megaphone,
  Newspaper,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Link Building SEO Services | BrainADZ Marketing",
  description:
    "Earn relevant, editorial backlinks through strategic prospecting, digital PR, outreach, linkable assets and transparent quality controls with BrainADZ Marketing.",
};

const PAGE_NAV_ITEMS = [
  { label: "Strategy", href: "#strategy" },
  { label: "Acquisition", href: "#acquisition" },
  { label: "Quality Control", href: "#quality-control" },
  { label: "Campaign Models", href: "#campaign-models" },
  { label: "Workflow", href: "#workflow" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const AUTHORITY_SIGNALS = [
  {
    title: "Topical relevance",
    description:
      "Links are pursued from websites and pages that genuinely overlap with your market, audience and subject expertise.",
    icon: Target,
  },
  {
    title: "Editorial credibility",
    description:
      "Placements must add contextual value to the referring page rather than exist as isolated, forced or sitewide links.",
    icon: BookOpen,
  },
  {
    title: "Competitive authority",
    description:
      "Campaign priorities are shaped by the link profiles, content assets and authority gaps visible across the search landscape.",
    icon: Radar,
  },
  {
    title: "Commercial alignment",
    description:
      "Target pages and anchor context are mapped to the categories, services and resources that matter to business growth.",
    icon: TrendingUp,
  },
];

const ACQUISITION_PATHS = [
  {
    number: "01",
    eyebrow: "Editorial outreach",
    title: "Earn contextual placements on relevant websites",
    description:
      "We identify publishers, industry resources, associations, partner ecosystems and specialist websites where your expertise can improve an existing page or support a new editorial contribution.",
    deliverables: [
      "Prospect qualification and contact research",
      "Personalised outreach angles",
      "Guest contributions and expert commentary",
      "Resource-page and contextual-link opportunities",
    ],
    icon: Mail,
    image: "/seo/editorial-link-outreach.jpg",
    imageAlt:
      "Editorial link outreach campaign with publisher research and personalised communication",
  },
  {
    number: "02",
    eyebrow: "Digital PR",
    title: "Turn useful stories and data into earned media links",
    description:
      "Campaigns are developed around credible business insights, original data, expert opinions, timely commentary and newsworthy assets that journalists and publishers can reference.",
    deliverables: [
      "Story and media-angle development",
      "Data-led campaign concepts",
      "Journalist and publication targeting",
      "Expert quote and reactive PR opportunities",
    ],
    icon: Newspaper,
    image: "/seo/digital-pr-link-building.jpg",
    imageAlt:
      "Digital PR campaign earning authoritative media coverage and backlinks",
  },
  {
    number: "03",
    eyebrow: "Linkable assets",
    title: "Create pages that deserve to be cited",
    description:
      "We strengthen the website with assets that make outreach more credible, including original research, practical tools, definitive guides, statistics pages and visual resources.",
    deliverables: [
      "Asset-gap and citation-opportunity research",
      "Research, guide and resource-page briefs",
      "Statistics, comparison and glossary assets",
      "Outreach positioning for each asset",
    ],
    icon: Sparkles,
    image: "/seo/linkable-assets-strategy.jpg",
    imageAlt:
      "Linkable asset strategy featuring research guides data and useful resources",
  },
];

const QUALITY_CRITERIA = [
  {
    label: "Relevance",
    question: "Does the website serve a genuinely related audience?",
    icon: Target,
  },
  {
    label: "Editorial context",
    question: "Is the link naturally supported by the surrounding content?",
    icon: BookOpen,
  },
  {
    label: "Organic visibility",
    question: "Does the domain show credible search presence and real content activity?",
    icon: BarChart3,
  },
  {
    label: "Site quality",
    question: "Are ownership, publishing standards and user experience trustworthy?",
    icon: ShieldCheck,
  },
  {
    label: "Placement value",
    question: "Will the link sit on a useful, indexable and relevant page?",
    icon: Link2,
  },
  {
    label: "Risk profile",
    question: "Is the opportunity free from obvious manipulation, networks or spam signals?",
    icon: CircleAlert,
  },
];

const REJECTED_TACTICS = [
  "Private blog networks and disguised link farms",
  "Bulk directory submissions without relevance",
  "Automated outreach sent to unqualified websites",
  "Sitewide footer or template links used for authority manipulation",
  "Irrelevant guest posts created only to place exact-match anchors",
  "Guaranteed domain-authority packages with no editorial transparency",
];

const CAMPAIGN_MODELS = [
  {
    title: "B2B authority campaigns",
    description:
      "Build visibility around technical expertise, industry insight and decision-stage resources where credibility matters as much as rankings.",
    priorities: [
      "Trade publications and industry websites",
      "Expert commentary and contributed articles",
      "Research reports, case studies and technical guides",
    ],
    icon: Briefcase,
  },
  {
    title: "SaaS and technology campaigns",
    description:
      "Strengthen product-category authority with comparison assets, integrations, original data and specialist software publications.",
    priorities: [
      "Product-led research and benchmark content",
      "Integration and partner ecosystem links",
      "Technology publishers and practitioner communities",
    ],
    icon: Workflow,
  },
  {
    title: "Ecommerce authority campaigns",
    description:
      "Support commercial categories with buying resources, product expertise, publisher relationships and campaignable consumer insights.",
    priorities: [
      "Category-relevant editorial placements",
      "Buying guides, trends and data stories",
      "Publisher, creator and brand-partner outreach",
    ],
    icon: Layers3,
  },
  {
    title: "Local and multi-location campaigns",
    description:
      "Develop location credibility through local media, community resources, associations, sponsorships and regionally relevant partnerships.",
    priorities: [
      "Local press and community publications",
      "Associations, chambers and partner links",
      "Location-specific resources and expert commentary",
    ],
    icon: Globe2,
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Benchmark the authority gap",
    description:
      "We review referring domains, link velocity, anchor patterns, lost links, competitor acquisition and the pages that currently attract authority.",
    output: "Link landscape and opportunity map",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Select pages and campaign angles",
    description:
      "Commercial priorities are balanced with realistic linkability. We decide which pages need direct support and which supporting assets can attract stronger editorial interest.",
    output: "Target-page and campaign brief",
    icon: Target,
  },
  {
    number: "03",
    title: "Build and qualify the prospect list",
    description:
      "Every prospect is reviewed for relevance, editorial standards, search visibility, audience fit and placement risk before outreach begins.",
    output: "Qualified outreach database",
    icon: Search,
  },
  {
    number: "04",
    title: "Create the outreach reason",
    description:
      "We develop a specific reason for each contact to engage—an expert contribution, original asset, data point, story, replacement resource or partnership opportunity.",
    output: "Pitch angles and supporting assets",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Outreach, follow-up and relationship building",
    description:
      "Communication is personalised, tracked and followed up responsibly. The goal is not only one placement, but a repeatable network of relevant editorial relationships.",
    output: "Active conversations and earned placements",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Verify, monitor and learn",
    description:
      "Live links are checked for destination, indexability, context, anchor usage and status. Campaign learning is used to improve the next prospecting and content cycle.",
    output: "Verified links and next-step insights",
    icon: ShieldCheck,
  },
];

const REPORTING_ITEMS = [
  {
    title: "Earned-link register",
    description:
      "A transparent record of live placements, referring pages, destination URLs, anchors, acquisition route and verification status.",
  },
  {
    title: "Authority movement",
    description:
      "Monitor the growth and quality of referring domains, link distribution, lost links and the authority profile of priority page groups.",
  },
  {
    title: "Search impact",
    description:
      "Review ranking, impressions, clicks and visibility changes for target topics while recognising that links work alongside content and technical SEO.",
  },
  {
    title: "Referral and assisted value",
    description:
      "Track meaningful referral visits, engaged sessions, enquiries and assisted conversions where analytics and attribution allow.",
  },
  {
    title: "Outreach performance",
    description:
      "Measure qualified prospects, response rates, active conversations, placements and the campaign angles producing the strongest editorial interest.",
  },
  {
    title: "Risk and maintenance",
    description:
      "Identify lost links, changed destinations, suspicious new links and opportunities to reclaim or update valuable historical placements.",
  },
];

const READINESS_ITEMS = [
  "Priority services, categories or content themes are clearly defined",
  "Target pages provide strong information and a credible user experience",
  "The website has subject-matter expertise available for contributions",
  "Useful data, case studies, tools or resources can support outreach",
  "Internal stakeholders can review expert quotes and editorial content",
  "Analytics and Search Console are configured for performance monitoring",
  "The brand accepts that quality link acquisition requires editorial fit and time",
  "Link building will be coordinated with content, technical and on-page SEO",
];

const FAQS = [
  {
    question: "What is included in your link building SEO service?",
    answer:
      "The scope can include backlink and competitor analysis, target-page planning, linkable-asset strategy, prospect research, opportunity qualification, personalised outreach, digital PR, expert contributions, placement verification and campaign reporting. The exact mix depends on your market, current authority and available assets.",
  },
  {
    question: "Do you guarantee a fixed number of backlinks?",
    answer:
      "We do not promise artificial quantities or guaranteed placements because genuine editorial links depend on relevance, publisher decisions and campaign quality. We agree on activity, qualification standards, outreach scope and reporting, then focus on earning links that can withstand scrutiny.",
  },
  {
    question: "How do you judge whether a backlink is high quality?",
    answer:
      "We assess topical relevance, editorial context, organic visibility, publishing standards, audience fit, page quality, placement position and risk signals. Third-party authority metrics can support the review, but they are never used as the only quality test.",
  },
  {
    question: "Do you use paid links or private blog networks?",
    answer:
      "No. We do not use private blog networks, disguised link farms or bulk packages designed to manipulate authority. Where a legitimate publication has sponsorship or contributor policies, any commercial arrangement must be transparent, relevant and handled according to search-engine guidelines.",
  },
  {
    question: "Can you build links directly to service or product pages?",
    answer:
      "Sometimes, but direct commercial-page links are harder to earn and must make editorial sense. We often combine selective direct opportunities with supporting guides, research, tools or resources that attract links and internally strengthen the relevant commercial pages.",
  },
  {
    question: "How long does link building take to produce results?",
    answer:
      "Prospecting and outreach can begin early, but placements and search impact usually develop over several months. Timing varies with market competition, brand credibility, asset quality, publisher response cycles, website condition and how closely link building is integrated with content and technical SEO.",
  },
  {
    question: "What anchor text do you use?",
    answer:
      "Anchor text is kept natural and editorially appropriate. We prioritise brand names, URLs, topical phrases and contextual wording rather than forcing exact-match commercial anchors. Existing anchor distribution and risk are reviewed before recommendations are made.",
  },
  {
    question: "Can you recover lost or broken backlinks?",
    answer:
      "Yes. Link reclamation can include finding lost links, correcting broken destination URLs, restoring removed resources, consolidating redirected pages and contacting publishers when a valuable link can reasonably be recovered or updated.",
  },
  {
    question: "How is link building performance reported?",
    answer:
      "Reporting can cover qualified prospects, outreach activity, responses, live and pending placements, link quality, target pages, anchors, referral traffic, lost links and search visibility trends. We separate completed activity from earned outcomes so the campaign remains transparent.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Link Building SEO Services",
  serviceType: "Link Building and Digital PR SEO",
  description:
    "Strategic link building services including backlink analysis, prospecting, editorial outreach, digital PR, linkable asset planning, quality control and transparent reporting.",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "B2B companies, SaaS brands, ecommerce businesses, local businesses and multi-location organisations",
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

export default function LinkBuildingSeoServicesPage() {
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
      <section className="relative min-h-[440px] overflow-hidden bg-black sm:min-h-[520px] lg:min-h-[580px]">
        <img
          src="/seo/link-building-hero.jpg"
          alt="Link building strategy with editorial outreach and authority growth"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.84)_34%,rgba(0,0,0,0.48)_62%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.34)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[520px] sm:px-8 lg:min-h-[580px] lg:px-10">
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
            <span className="text-white/60">/</span>
            <span className="text-white">Link Building SEO Services</span>
          </nav>

          <div className="mt-auto max-w-[940px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E1122B] sm:text-[13px]">
              Earned authority, not manufactured links
            </p>
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[66px]">
              Link Building SEO Services
            </h1>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-white/78 sm:text-[17px] sm:leading-8 lg:text-[20px]">
              Build search authority through relevant editorial placements,
              digital PR, useful assets and outreach grounded in quality,
              transparency and commercial priorities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan an authority campaign
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky page navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Link building page navigation"
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
                    : "border-transparent text-black/62"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/contact"
              className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B] sm:px-7"
            >
              Start a Campaign
            </Link>
          </div>
        </nav>
      </div>

      {/* Strategy / authority landscape */}
      <section
        id="strategy"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Authority strategy
                </p>
              </div>
              <h2 className="mt-5 max-w-[760px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Build the authority your important pages are missing
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Link building starts with understanding why competitors are
                trusted, which pages attract citations and where your own
                authority is too weak to compete. The campaign is then designed
                around realistic editorial opportunities—not arbitrary link
                quotas.
              </p>
              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your backlink gap
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[18px] border border-black/10 bg-[#0d0d0d] shadow-[0_22px_70px_rgba(0,0,0,0.12)] lg:mt-16">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <figure className="relative min-h-[320px] lg:min-h-[520px]">
                <img
                  src="/seo/link-authority-gap-analysis.jpg"
                  alt="Backlink authority gap analysis comparing referring domains and target pages"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08),rgba(0,0,0,0.34))]" />
              </figure>

              <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Campaign intelligence
                </p>
                <h3 className="mt-4 max-w-[620px] text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-[38px]">
                  Every prospect must support a strategic reason
                </h3>
                <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-white/62 sm:text-[15px]">
                  We map authority by topic, page type, competitor, referring
                  domain and acquisition pattern. This shows whether the next
                  campaign needs editorial contributions, data-led PR, resource
                  links, relationship outreach or stronger linkable content.
                </p>

                <dl className="mt-8 grid gap-4 border-t border-white/12 pt-7 sm:grid-cols-2">
                  <div className="rounded-[12px] border border-white/10 bg-white/[0.04] p-5">
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                      Analyse
                    </dt>
                    <dd className="mt-2 text-[15px] leading-6 text-white/82">
                      Referring domains, anchors, target pages, lost links and
                      competitor acquisition patterns
                    </dd>
                  </div>
                  <div className="rounded-[12px] border border-white/10 bg-white/[0.04] p-5">
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                      Prioritise
                    </dt>
                    <dd className="mt-2 text-[15px] leading-6 text-white/82">
                      Topics and pages where stronger authority can support
                      ranking and commercial outcomes
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUTHORITY_SIGNALS.map((signal) => {
              const Icon = signal.icon;

              return (
                <article
                  key={signal.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 text-[17px] font-semibold leading-6 text-black">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {signal.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acquisition pathways */}
      <section
        id="acquisition"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#f8f8f8] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Acquisition pathways
              </p>
            </div>
            <h2 className="mt-5 text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Different links require different reasons to be earned
            </h2>
            <p className="mt-6 max-w-[820px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A strong programme combines relationship-led outreach, editorial
              contribution and campaignable assets. We choose the route based
              on the publication, target audience, page objective and strength
              of the story or resource available.
            </p>
          </div>

          <div className="mt-12 space-y-6 lg:mt-16">
            {ACQUISITION_PATHS.map((path, index) => {
              const Icon = path.icon;
              const imageFirst = index % 2 === 0;

              return (
                <article
                  key={path.number}
                  className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.055)]"
                >
                  <div className="grid lg:grid-cols-2">
                    <figure
                      className={`relative min-h-[300px] lg:min-h-[470px] ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <img
                        src={path.image}
                        alt={path.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </figure>

                    <div
                      className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                          <Icon className="h-6 w-6" strokeWidth={1.6} />
                        </div>
                        <span className="text-[38px] font-semibold tracking-[-0.04em] text-black/10">
                          {path.number}
                        </span>
                      </div>
                      <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {path.eyebrow}
                      </p>
                      <h3 className="mt-3 max-w-[700px] text-[30px] font-semibold leading-[1.14] tracking-[-0.03em] text-black sm:text-[38px]">
                        {path.title}
                      </h3>
                      <p className="mt-5 max-w-[680px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                        {path.description}
                      </p>

                      <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                        {path.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                          >
                            <Check
                              className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                              strokeWidth={1.8}
                            />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality control */}
      <section
        id="quality-control"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-[188px]">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Quality control
                </p>
              </div>
              <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Quality is judged before outreach, not after placement
              </h2>
              <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Domain metrics can be useful filters, but they do not prove
                editorial value. Each opportunity is reviewed manually so the
                campaign does not trade long-term trust for short-term volume.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Discuss quality standards
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {QUALITY_CRITERIA.map((criterion) => {
                  const Icon = criterion.icon;

                  return (
                    <article
                      key={criterion.label}
                      className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition-colors hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.7} />
                        </div>
                        <h3 className="text-[17px] font-semibold text-black">
                          {criterion.label}
                        </h3>
                      </div>
                      <p className="mt-5 text-[14px] leading-6 text-black/60">
                        {criterion.question}
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
                      Risk controls
                    </p>
                    <h3 className="mt-1 text-[24px] font-semibold">
                      Tactics we reject
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

      {/* Campaign models */}
      <section
        id="campaign-models"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#f8f8f8] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Campaign models
                </p>
              </div>
              <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Authority programmes shaped around how your market publishes
              </h2>
            </div>
            <p className="max-w-[640px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              The outreach reason, publisher type and asset format change by
              business model. A local campaign should not look like a SaaS
              campaign, and an ecommerce campaign should not copy a B2B trade
              publication strategy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CAMPAIGN_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="group flex h-full flex-col rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_16px_44px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[11px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.55} />
                  </div>
                  <h3 className="mt-8 text-[22px] font-semibold leading-7 tracking-[-0.02em] text-black">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {model.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {model.priorities.map((priority) => (
                      <li
                        key={priority}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/66"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                          strokeWidth={1.8}
                        />
                        <span>{priority}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-[188px]">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Outreach workflow
                </p>
              </div>
              <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                From authority gap to verified editorial placement
              </h2>
              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                Each stage has a clear decision, deliverable and quality check.
                This keeps prospecting focused, outreach defensible and
                reporting transparent.
              </p>
            </div>

            <ol className="border-t border-black/10">
              {WORKFLOW_STEPS.map((step) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.number}
                    className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_260px] lg:gap-8 lg:py-8"
                  >
                    <div className="flex items-start justify-between gap-5 sm:block">
                      <span className="text-[24px] font-medium text-[#E1122B]">
                        {step.number}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                        <Icon className="h-5 w-5" strokeWidth={1.65} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[23px] font-semibold leading-tight text-black sm:text-[28px]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>

                    <dl className="border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-black/42">
                        Primary output
                      </dt>
                      <dd className="mt-3 text-[14px] leading-6 text-black/68">
                        {step.output}
                      </dd>
                    </dl>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section
        id="reporting"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Link reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
                See what was earned, why it matters and what happens next
              </h2>
              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-8">
                Reporting separates outreach activity from editorial outcomes.
                You can see which links are live, how they were acquired, which
                pages they support and where campaign learning should be
                reinvested.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[13px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                    Track
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-white/80">
                    Prospects, pitches, responses, conversations, placements and
                    lost links
                  </p>
                </div>
                <div className="rounded-[13px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                    Connect
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-white/80">
                    Referring-domain growth with target-page visibility,
                    referral engagement and enquiries
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a campaign review
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/10 bg-[#171717] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <img
                  src="/seo/link-building-reporting-dashboard.jpg"
                  alt="Link building reporting dashboard showing earned links outreach and authority growth"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </figure>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {REPORTING_ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-[14px] border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#E1122B]/50 hover:bg-white/[0.06]"
              >
                <h3 className="text-[17px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-white/56">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness checklist */}
      <section className="border-b border-black/10 bg-[#f8f8f8] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.055)]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-[#E1122B] p-8 text-white sm:p-10 lg:p-14">
                <ShieldCheck className="h-11 w-11" strokeWidth={1.5} />
                <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Campaign readiness
                </p>
                <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[44px]">
                  Is your website ready to earn strong links?
                </h2>
                <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-white/78">
                  Outreach performs better when the website, expertise and
                  supporting resources give publishers a credible reason to
                  reference the brand.
                </p>
              </div>

              <div className="p-7 sm:p-10 lg:p-14">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {READINESS_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[11px] border border-black/10 bg-[#fbfbfb] p-4 text-[14px] leading-6 text-black/68"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                        strokeWidth={1.8}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
                >
                  Assess campaign readiness
                  <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Link building FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[690px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before starting outreach
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand quality standards, campaign timing, anchor strategy,
              reporting and the difference between earned authority and
              manufactured link volume.
            </p>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-black/10"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:outline-none focus-visible:text-[#E1122B] sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[860px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="relative h-5 w-5 shrink-0 text-black/55 transition-colors group-open:text-[#E1122B]">
                    <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-current transition-transform group-open:rotate-90" />
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