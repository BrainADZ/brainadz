/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  Check,
  ChevronDown,
  CircleGauge,
  FileSearch,
  Gauge,
  Globe2,
  LayoutDashboard,
  Link2,
  ListChecks,
  Megaphone,
  MousePointerClick,
  PanelsTopLeft,
  Route,
  Search,
  SearchCheck,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TestTubeDiagonal,
  TrendingUp,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEM Services | Search Engine Marketing | BrainADZ Marketing",
  description:
    "Search engine marketing services by BrainADZ Marketing for paid search campaigns, keyword targeting, conversion tracking, bidding and measurable lead generation.",
  alternates: {
    canonical: "/services/digital-marketing/sem-services",
  },
  openGraph: {
    title: "SEM Services | BrainADZ Marketing",
    description:
      "Reach high-intent audiences with professionally managed paid search campaigns built for qualified traffic, leads and measurable growth.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "High-intent visibility",
    description:
      "Place your business in front of people actively searching for the products and services you offer.",
    icon: Search,
  },
  {
    title: "Qualified website traffic",
    description:
      "Target relevant keywords, locations, audiences and devices to attract users more likely to take action.",
    icon: MousePointerClick,
  },
  {
    title: "Controlled media spend",
    description:
      "Manage budgets, bids and targeting around commercial priorities instead of paying for unfocused traffic.",
    icon: WalletCards,
  },
  {
    title: "Measurable business growth",
    description:
      "Connect clicks and campaign activity with enquiries, calls, purchases and other meaningful conversions.",
    icon: TrendingUp,
  },
];

const FEATURES = [
  {
    title: "SEM strategy aligned with business goals",
    description:
      "Every campaign starts with a clear understanding of your offer, target market, customer journey and commercial objective. This keeps the account focused on profitable actions instead of surface-level traffic.",
    points: [
      "Business, offer and market assessment",
      "Campaign objectives and conversion priorities",
      "Channel, location and device planning",
      "Budget allocation and performance benchmarks",
    ],
  },
  {
    title: "Keyword and audience research",
    description:
      "We identify the search terms, intent patterns and audience signals most closely connected to your products or services so campaigns reach users at the right stage of decision-making.",
    points: [
      "Commercial and high-intent keyword research",
      "Search intent and customer journey mapping",
      "Negative keyword identification",
      "Audience, location and device analysis",
    ],
  },
  {
    title: "Campaign architecture and ad creation",
    description:
      "Campaigns are structured around services, products, locations and search intent, with relevant advertisements designed to improve clarity, quality and click-through performance.",
    points: [
      "Campaign and ad-group structure",
      "Responsive search ad copy",
      "Headlines, descriptions and extensions",
      "Brand, competitor and service segmentation",
    ],
  },
  {
    title: "Budget and bidding optimization",
    description:
      "Media spend is actively managed according to campaign priorities, search demand and conversion data so budget is directed towards stronger opportunities.",
    points: [
      "Daily and monthly budget management",
      "Manual and automated bidding strategies",
      "Cost-per-click and acquisition monitoring",
      "Device, location and schedule adjustments",
    ],
  },
  {
    title: "Landing page and conversion alignment",
    description:
      "Paid traffic performs better when the advertisement and landing page communicate the same offer. We review the complete journey from search query to conversion action.",
    points: [
      "Ad-to-landing-page message alignment",
      "Conversion-focused page recommendations",
      "Form, call and WhatsApp journey review",
      "Mobile experience and page-speed checks",
    ],
  },
  {
    title: "Tracking, testing and reporting",
    description:
      "Campaign decisions are guided by conversion data, search behaviour and structured testing rather than assumptions or vanity metrics.",
    points: [
      "Conversion and event tracking setup",
      "Search term and audience analysis",
      "Ad copy and landing-page testing",
      "Performance reporting and next-step actions",
    ],
  },
];

const CAMPAIGN_TYPES = [
  {
    title: "Search advertising",
    description:
      "Appear on search result pages when potential customers actively look for your products, services or solutions.",
    points: [
      "Keyword targeting",
      "Responsive search ads",
      "Call extensions",
      "Lead generation",
    ],
    icon: Search,
  },
  {
    title: "Shopping campaigns",
    description:
      "Promote ecommerce products with product images, pricing and availability directly within search results.",
    points: [
      "Product feed setup",
      "Shopping advertisements",
      "Category segmentation",
      "Purchase tracking",
    ],
    icon: WalletCards,
  },
  {
    title: "Display campaigns",
    description:
      "Build visibility across relevant websites and applications using visual advertisements and audience targeting.",
    points: [
      "Banner advertisements",
      "Audience targeting",
      "Placement control",
      "Brand awareness",
    ],
    icon: PanelsTopLeft,
  },
  {
    title: "Remarketing campaigns",
    description:
      "Reconnect with people who previously visited your website, viewed services or interacted with your brand.",
    points: [
      "Website visitors",
      "Engaged audiences",
      "Product viewers",
      "Conversion reminders",
    ],
    icon: Route,
  },
  {
    title: "Local search campaigns",
    description:
      "Reach nearby customers searching for location-based services, stores, offices and immediate assistance.",
    points: [
      "Location targeting",
      "Call campaigns",
      "Map visibility",
      "Local enquiries",
    ],
    icon: Globe2,
  },
  {
    title: "Brand protection campaigns",
    description:
      "Protect important branded search terms and control the message users see when they search for your company.",
    points: [
      "Branded keywords",
      "Competitor monitoring",
      "Message control",
      "High-intent traffic",
    ],
    icon: ShieldCheck,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit and discovery",
    description:
      "We review your existing advertising account, website, offers, competitors, target audiences, tracking setup and business priorities.",
    timing: "Days 1–3",
    output: "SEM audit and goal brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Research search opportunities",
    description:
      "We identify relevant keywords, search intent, competition, estimated costs, audience signals and negative keyword opportunities.",
    timing: "Week 1",
    output: "Keyword and targeting plan",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Build the campaign structure",
    description:
      "Campaigns, ad groups, audiences, budgets and targeting settings are organized around your services, products and conversion priorities.",
    timing: "Week 1",
    output: "Campaign architecture",
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "Create ads and tracking",
    description:
      "We develop advertisements, extensions and conversion tracking while aligning each campaign with the correct landing-page journey.",
    timing: "Week 1–2",
    output: "Launch-ready campaigns",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Launch and optimize",
    description:
      "Campaigns are monitored across search terms, bids, audiences, devices, locations, schedules and conversions to reduce wasted spend.",
    timing: "Ongoing",
    output: "Active optimization",
    icon: SlidersHorizontal,
  },
  {
    number: "06",
    title: "Report and scale",
    description:
      "We review performance, identify profitable patterns and recommend budget or campaign changes based on measurable business outcomes.",
    timing: "Monthly",
    output: "Report and growth plan",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "SEM account audit",
    description:
      "A structured review of campaigns, tracking, budget usage, search terms, targeting and current performance opportunities.",
    icon: FileSearch,
  },
  {
    title: "Keyword strategy",
    description:
      "A practical keyword and negative keyword framework organized around search intent, services and commercial relevance.",
    icon: SearchCheck,
  },
  {
    title: "Campaign setup",
    description:
      "Campaigns, ad groups, advertisements, extensions, audiences and budget settings configured for launch.",
    icon: Settings2,
  },
  {
    title: "Conversion tracking",
    description:
      "Tracking for forms, calls, purchases, WhatsApp clicks and other meaningful website or campaign actions.",
    icon: Link2,
  },
  {
    title: "Campaign optimization",
    description:
      "Ongoing improvements across keywords, bids, budgets, advertisements, audiences, schedules and locations.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Performance reporting",
    description:
      "Clear reporting covering campaign results, conversion costs, search behaviour and recommended next actions.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your SEM service?",
    answer:
      "The service can include account audit, keyword research, campaign strategy, ad creation, targeting, budget management, conversion tracking, landing-page recommendations, ongoing optimization and performance reporting. The final scope depends on your advertising goals and platforms.",
  },
  {
    question: "What is the difference between SEM, SEO and PPC?",
    answer:
      "SEM is the broader process of increasing visibility through paid search engine campaigns. PPC refers to the advertising payment model where advertisers commonly pay for clicks. SEO focuses on improving unpaid organic search visibility over time.",
  },
  {
    question: "Which advertising platforms do you manage?",
    answer:
      "We primarily support Google Ads and can also manage Microsoft Advertising where it is relevant to the audience and market. Campaign recommendations depend on search demand, competition, geography and available budget.",
  },
  {
    question: "How much budget is required for SEM?",
    answer:
      "The required budget depends on keyword competition, location, industry, campaign objective and expected lead volume. We recommend a practical starting budget after reviewing search demand and estimated cost-per-click levels.",
  },
  {
    question: "Is advertising spend included in your management fee?",
    answer:
      "No. The amount paid directly to the advertising platform is separate from campaign strategy and management fees. Both amounts are clearly defined before the campaign begins.",
  },
  {
    question: "How quickly can SEM generate results?",
    answer:
      "Campaigns can begin generating traffic and enquiries soon after launch, but stable performance usually requires sufficient data and ongoing optimization. Results depend on search demand, competition, budget, offer quality, landing pages and tracking accuracy.",
  },
  {
    question: "Do you create landing pages for SEM campaigns?",
    answer:
      "We review existing landing pages and provide conversion-focused recommendations. Dedicated landing-page design and development can also be included when the current website does not provide a suitable campaign destination.",
  },
  {
    question: "How do you reduce wasted advertising spend?",
    answer:
      "We regularly review search terms, negative keywords, locations, devices, schedules, audience signals and conversion data. Irrelevant traffic is excluded while budgets and bids are adjusted towards stronger-performing opportunities.",
  },
  {
    question: "How do you measure SEM performance?",
    answer:
      "Performance is measured using metrics connected to the campaign objective, including impressions, click-through rate, cost per click, conversion rate, cost per lead, calls, enquiries, purchases and return on advertising spend where revenue tracking is available.",
  },
  {
    question: "Can you manage an existing Google Ads account?",
    answer:
      "Yes. We can audit and optimize an existing account or rebuild its campaign structure when necessary. Existing data is reviewed before major changes are made so useful historical insights are not lost.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Marketing Services",
  serviceType: "Search Engine Marketing",
  description:
    "Search engine marketing services for paid search campaigns, keyword targeting, bidding, conversion tracking and measurable lead generation.",
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

export default function SemServicesPage() {
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
          alt="BrainADZ Marketing search engine marketing team"
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

            <span className="text-white">SEM Services</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Search Engine Marketing Services
          </h1>

          <div className="mt-auto max-w-[740px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Reach high-intent customers with paid search campaigns built for
              relevant traffic, qualified leads and measurable business growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Launch your search campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="SEM page navigation"
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
            Capture demand when customers are ready to act
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Search engine marketing connects your business with people
                actively searching for relevant products, services and
                solutions. BrainADZ combines keyword strategy, campaign
                architecture, advertisement creation, bidding and conversion
                tracking to turn search demand into measurable opportunities.
              </p>

              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Every campaign is managed as a complete conversion system—from
                the user&apos;s search query and advertisement to the landing
                page, enquiry and final business outcome.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your SEM strategy
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/sem/dashboard.jpg"
                  alt="Search engine marketing campaign dashboard and reporting"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Search campaign management, conversion tracking and reporting
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
            Built for relevant clicks and profitable conversions
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
                  src="/sem/campaign.jpg"
                  alt="Paid search campaign management by BrainADZ Marketing"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Paid search campaign strategy, advertisements and optimization
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Gauge className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Every click should have a purpose
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Keywords, advertisements, landing pages and tracking are
                      aligned around the same conversion objective.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section
        id="campaign-types"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Campaign Types
                </p>
              </div>

              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right campaign for every search objective
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Campaign types are selected according to your market, audience,
              available assets, sales journey and the business outcome paid
              search needs to support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {CAMPAIGN_TYPES.map((campaign, index) => {
              const Icon = campaign.icon;

              return (
                <article
                  key={campaign.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {campaign.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {campaign.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {campaign.points.map((point) => (
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
              A clear process from search demand to conversion
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every campaign follows a structured research, setup, testing and
              optimization workflow so media spend remains focused on
              measurable business outcomes.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your SEM campaign
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
                Everything required to manage paid search effectively
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces a complete campaign system covering
                research, account setup, advertising, tracking, optimization
                and reporting.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Transparent campaign management
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Campaign decisions are supported by search data, conversion
                  performance and clearly documented next actions.
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
              Questions before launching your search campaigns?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about campaign budgets, paid search
              platforms, tracking, optimization and expected performance.
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