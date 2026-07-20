/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  CalendarRange,
  Check,
  ChevronDown,
  CircleGauge,
  FileCheck,
  FileSearch,
  Globe2,
  HeartHandshake,
  ListChecks,
  MapPin,
  MessagesSquare,
  Newspaper,
  Reply,
  Search,
  Settings2,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Reputation Management Services | BrainADZ Marketing",
  description:
    "Online reputation management services by BrainADZ Marketing for brand monitoring, review management, response strategy, crisis handling and measurable reputation growth.",
  alternates: {
    canonical:
      "/services/digital-marketing/online-reputation-management",
  },
  openGraph: {
    title: "Online Reputation Management Services | BrainADZ Marketing",
    description:
      "Monitor brand conversations, manage reviews, respond to reputation risks and build stronger digital trust with BrainADZ Marketing.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Response Framework", href: "#response-framework" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Early issue detection",
    description:
      "Identify negative mentions, review patterns and emerging concerns before they develop into larger reputation risks.",
    icon: BellRing,
  },
  {
    title: "Stronger brand trust",
    description:
      "Build confidence through professional responses, consistent messaging and visible customer care across digital channels.",
    icon: ShieldCheck,
  },
  {
    title: "Better review management",
    description:
      "Organize how reviews are monitored, answered, escalated and used to improve the customer experience.",
    icon: Star,
  },
  {
    title: "Measurable reputation growth",
    description:
      "Track ratings, sentiment, response quality and recurring issues to guide practical reputation improvements.",
    icon: TrendingUp,
  },
];

const CAPABILITIES = [
  {
    title: "Brand mention and sentiment monitoring",
    description:
      "We monitor relevant digital conversations to understand where your brand is being discussed, what audiences are saying and which issues require attention.",
    points: [
      "Brand, product and leadership mention tracking",
      "Positive, neutral and negative sentiment review",
      "Recurring customer concern identification",
      "Priority alerts for significant reputation risks",
    ],
  },
  {
    title: "Review and rating management",
    description:
      "Customer reviews are managed through a structured system that supports timely responses, issue escalation and a more consistent brand experience.",
    points: [
      "Review platform and rating monitoring",
      "Positive and negative review response support",
      "Recurring complaint and service-gap analysis",
      "Review request process recommendations",
    ],
  },
  {
    title: "Professional response management",
    description:
      "We develop clear, brand-appropriate responses that acknowledge customer concerns, avoid unnecessary conflict and guide conversations towards resolution.",
    points: [
      "Response templates and tone guidelines",
      "Issue-specific response recommendations",
      "Sensitive complaint handling support",
      "Internal approval and escalation workflow",
    ],
  },
  {
    title: "Search reputation improvement",
    description:
      "We review what users see when they search for your brand and identify opportunities to strengthen accurate, credible and useful digital assets.",
    points: [
      "Branded search result assessment",
      "Owned profile and content optimization",
      "Positive asset visibility recommendations",
      "Outdated or inaccurate information review",
    ],
  },
  {
    title: "Crisis and escalation planning",
    description:
      "A documented response framework helps your team act quickly and consistently when a sensitive issue, public complaint or sudden reputation event occurs.",
    points: [
      "Risk level and severity classification",
      "Internal escalation matrix",
      "Holding statements and response guidance",
      "Stakeholder and channel coordination",
    ],
  },
  {
    title: "Reputation reporting and insights",
    description:
      "Monitoring data is translated into clear insights about sentiment, review trends, customer concerns and the actions most likely to improve trust.",
    points: [
      "Sentiment and review trend reporting",
      "Response time and resolution analysis",
      "Issue category and pattern tracking",
      "Monthly recommendations and action priorities",
    ],
  },
];

const MONITORING_CHANNELS = [
  {
    title: "Search results",
    description:
      "Review what potential customers see when they search for your brand, products, services or leadership team.",
    points: [
      "Branded queries",
      "Search snippets",
      "News visibility",
      "Owned assets",
    ],
    icon: Search,
  },
  {
    title: "Google Business Profile",
    description:
      "Monitor ratings, reviews, customer questions and public business information connected to local discovery.",
    points: [
      "Google reviews",
      "Business details",
      "Customer questions",
      "Local reputation",
    ],
    icon: MapPin,
  },
  {
    title: "Social media",
    description:
      "Track comments, posts, tags and conversations that may influence how audiences understand your brand.",
    points: [
      "Public comments",
      "Brand tags",
      "Direct concerns",
      "Viral discussions",
    ],
    icon: MessagesSquare,
  },
  {
    title: "Review platforms",
    description:
      "Monitor industry and customer-review websites relevant to your products, services and market category.",
    points: [
      "Ratings",
      "Testimonials",
      "Complaints",
      "Competitor trends",
    ],
    icon: Star,
  },
  {
    title: "News and media",
    description:
      "Identify relevant press coverage, public mentions and stories that may influence brand perception.",
    points: [
      "News mentions",
      "Media coverage",
      "Leadership mentions",
      "Industry stories",
    ],
    icon: Newspaper,
  },
  {
    title: "Forums and communities",
    description:
      "Review public discussions where customers and industry audiences share experiences, concerns and recommendations.",
    points: [
      "Forum discussions",
      "Community posts",
      "Customer questions",
      "Industry conversations",
    ],
    icon: Globe2,
  },
];

const RESPONSE_FRAMEWORK = [
  {
    title: "Assess the situation",
    description:
      "Verify the source, context, audience reach, evidence and potential business impact before choosing a response.",
    output: "Verified issue context",
    icon: FileSearch,
  },
  {
    title: "Prioritize the risk",
    description:
      "Classify the issue according to urgency, sensitivity, visibility and the internal teams required for resolution.",
    output: "Risk and escalation level",
    icon: AlertTriangle,
  },
  {
    title: "Respond appropriately",
    description:
      "Use a clear, empathetic and brand-aligned response that acknowledges the concern and supports the next action.",
    output: "Approved public response",
    icon: Reply,
  },
  {
    title: "Resolve and learn",
    description:
      "Track the outcome, document recurring issues and convert customer feedback into practical operational improvements.",
    output: "Resolution and insights",
    icon: HeartHandshake,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit the digital reputation",
    description:
      "We review branded search results, public profiles, reviews, ratings, media mentions, social conversations and existing response practices.",
    timing: "Days 1–4",
    output: "Reputation audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Map channels and risks",
    description:
      "We identify the platforms, search terms, customer touchpoints and reputation issues that require ongoing monitoring.",
    timing: "Week 1",
    output: "Monitoring and risk map",
    icon: Target,
  },
  {
    number: "03",
    title: "Build the response framework",
    description:
      "Response guidelines, tone, templates, ownership and escalation rules are documented for common and sensitive situations.",
    timing: "Week 1",
    output: "Response playbook",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Monitor and classify",
    description:
      "Mentions, reviews and conversations are reviewed and categorized according to sentiment, urgency and potential business impact.",
    timing: "Ongoing",
    output: "Prioritized reputation activity",
    icon: BellRing,
  },
  {
    number: "05",
    title: "Respond and coordinate",
    description:
      "Approved responses are prepared while service, sales, HR, legal or leadership teams are involved when internal action is required.",
    timing: "As required",
    output: "Managed public responses",
    icon: MessagesSquare,
  },
  {
    number: "06",
    title: "Strengthen positive visibility",
    description:
      "Credible profiles, customer stories and useful brand content are improved to create a more balanced and accurate digital presence.",
    timing: "Monthly",
    output: "Positive asset plan",
    icon: BadgeCheck,
  },
  {
    number: "07",
    title: "Report and improve",
    description:
      "We review sentiment, review trends, response quality and recurring issues to recommend the next reputation priorities.",
    timing: "Monthly",
    output: "ORM performance report",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Online reputation audit",
    description:
      "A structured assessment of branded search results, reviews, ratings, social conversations and digital trust signals.",
    icon: FileSearch,
  },
  {
    title: "Monitoring framework",
    description:
      "A defined list of brand terms, platforms, profiles and reputation risks that require regular monitoring.",
    icon: BellRing,
  },
  {
    title: "Response playbook",
    description:
      "Practical tone guidelines, templates and response principles for reviews, complaints and sensitive situations.",
    icon: FileCheck,
  },
  {
    title: "Review management plan",
    description:
      "A process for monitoring, responding to, escalating and learning from customer reviews across relevant platforms.",
    icon: Star,
  },
  {
    title: "Escalation matrix",
    description:
      "Clear ownership and approval rules for operational complaints, legal concerns, media issues and public crises.",
    icon: ListChecks,
  },
  {
    title: "Search improvement plan",
    description:
      "Recommendations to strengthen accurate owned profiles, useful content and positive branded search visibility.",
    icon: Search,
  },
  {
    title: "Monthly ORM report",
    description:
      "Reporting covering sentiment, rating changes, review activity, responses, risks and recurring customer concerns.",
    icon: CircleGauge,
  },
  {
    title: "Reputation action plan",
    description:
      "Prioritized recommendations for customer experience, communication, content and internal process improvements.",
    icon: Settings2,
  },
];

const FAQS = [
  {
    question: "What is included in your ORM service?",
    answer:
      "The service can include reputation auditing, brand mention monitoring, review management, response strategy, sentiment analysis, escalation planning, search reputation recommendations and monthly reporting. The final scope depends on your brand size, active platforms and risk level.",
  },
  {
    question: "What is online reputation management?",
    answer:
      "Online reputation management is the process of monitoring, understanding and improving how a brand, business or individual is represented across search engines, review platforms, social media, news websites and other public digital channels.",
  },
  {
    question: "Can you remove negative reviews?",
    answer:
      "Legitimate negative reviews generally cannot and should not be removed simply because they are critical. Reviews may be reported when they clearly violate a platform's policies, but removal decisions remain with the platform. Our focus is on professional responses, resolution and long-term reputation improvement.",
  },
  {
    question: "Do you respond to customer reviews on our behalf?",
    answer:
      "Yes. We can prepare or manage responses according to an approved tone, process and escalation framework. Sensitive or operational complaints may require information and approval from your internal team before a public response is posted.",
  },
  {
    question: "Which platforms do you monitor?",
    answer:
      "Monitoring can cover Google search results, Google Business Profile, social media channels, review websites, news sources, forums and relevant industry communities. The exact channel mix depends on where your audiences discuss or evaluate your brand.",
  },
  {
    question: "How do you handle a reputation crisis?",
    answer:
      "We first verify the issue, assess its visibility and impact, classify the risk and identify the required stakeholders. A coordinated response is then developed with clear messaging, approval, channel selection and follow-up actions.",
  },
  {
    question: "How long does ORM take to show results?",
    answer:
      "Response quality and monitoring can improve immediately after implementation. Ratings, branded search perception and long-term trust usually require consistent customer experience, useful content and reputation management over several months.",
  },
  {
    question: "Can ORM improve Google ratings?",
    answer:
      "ORM can improve how reviews are monitored, answered and requested from genuine customers. However, ratings depend primarily on real customer experiences and authentic feedback. We do not support fake reviews or manipulative rating practices.",
  },
  {
    question: "Do you manage personal reputation for founders or executives?",
    answer:
      "Yes. The service can include branded search monitoring, leadership profile review, media mention tracking, thought-leadership recommendations and response planning for founders, executives or public-facing professionals.",
  },
  {
    question: "How do you measure ORM performance?",
    answer:
      "Performance can be measured through rating trends, review volume, sentiment patterns, response time, issue resolution, branded search visibility, recurring complaint categories and changes in positive or negative conversation share.",
  },
  {
    question: "Can you work with our customer service or legal team?",
    answer:
      "Yes. ORM often requires coordination with customer service, operations, HR, legal, public relations and leadership. We define ownership, approvals and escalation rules so public responses remain accurate and controlled.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Reputation Management Services",
  serviceType: "Online Reputation Management",
  description:
    "Online reputation management services for brand monitoring, review management, response strategy, crisis handling and measurable reputation growth.",
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

export default function OnlineReputationManagementPage() {
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
          alt="BrainADZ Marketing online reputation management team"
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

            <span className="text-white">
              Online Reputation Management
            </span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Online Reputation Management Services
          </h1>

          <div className="mt-auto max-w-[780px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Monitor brand conversations, manage reviews, respond to
              reputation risks and build stronger digital trust across every
              important customer touchpoint.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Protect your brand reputation
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="ORM page navigation"
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

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Build a reputation customers can see and trust
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Your online reputation is shaped by reviews, search results,
                customer conversations, media coverage and the way your brand
                responds publicly. BrainADZ brings these touchpoints into one
                structured reputation management system.
              </p>

              <p className="mt-5 max-w-[710px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                We combine monitoring, response management, review strategy,
                search visibility and reporting to help your team manage
                concerns professionally while building stronger long-term
                digital trust.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Request a reputation audit
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/orm/monitoring-dashboard.jpg"
                  alt="Online reputation monitoring and sentiment dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Brand monitoring, review tracking and reputation reporting
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

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            A complete system for monitoring and improving brand trust
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
                  src="/orm/reputation-management.jpg"
                  alt="Online reputation management strategy by BrainADZ Marketing"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Reputation monitoring, response planning and customer trust
                management
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Reputation is managed through action
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Professional responses matter, but long-term reputation
                      improvement also requires better customer experiences and
                      internal resolution.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Monitoring Channels Section */}
      <section
        id="monitoring"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Monitoring Channels
                </p>
              </div>

              <h2 className="mt-5 max-w-[1050px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Understand where your reputation is being shaped
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reputation signals are spread across search, reviews, social
              platforms, media and public communities. We organize the most
              relevant channels into one monitoring framework.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {MONITORING_CHANNELS.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <article
                  key={channel.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {channel.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {channel.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {channel.points.map((point) => (
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

      {/* Response Framework Section */}
      <section
        id="response-framework"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Response Framework
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Respond with clarity before emotion takes control
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Not every complaint requires the same response. A structured
              framework helps teams verify issues, control risk and communicate
              with empathy and accuracy.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {RESPONSE_FRAMEWORK.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.title}
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
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/55">
                    {stage.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Output
                    </p>

                    <p className="mt-2 text-[14px] font-medium text-white/78">
                      {stage.output}
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
              A controlled process from monitoring to improvement
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every reputation signal is reviewed through a clear system of
              verification, prioritization, response, resolution and long-term
              learning.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your ORM workflow
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
                Practical tools for managing reputation consistently
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces clear systems, response guidance and
                reporting that your marketing and customer-facing teams can use
                every day.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <UserRoundCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Authentic reputation improvement
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  We do not support fake reviews, misleading feedback or the
                  suppression of legitimate customer concerns. The focus
                  remains on trust, transparency and resolution.
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
              Questions before managing your online reputation?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about reputation monitoring, reviews,
              crisis response, search visibility and performance measurement.
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