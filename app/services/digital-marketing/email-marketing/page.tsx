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
  FileCheck2,
  FileSearch,
  Gauge,
  Inbox,
  LayoutTemplate,
  Link2,
  ListChecks,
  Mail,
  MailCheck,
  MousePointerClick,
  PanelsTopLeft,
  SearchCheck,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TestTubeDiagonal,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Email Marketing Services | BrainADZ Marketing",
  description:
    "Email marketing services by BrainADZ Marketing for campaign strategy, audience segmentation, automation, lead nurturing and measurable conversions.",
  alternates: {
    canonical: "/services/digital-marketing/email-marketing",
  },
  openGraph: {
    title: "Email Marketing Services | BrainADZ Marketing",
    description:
      "Build targeted email campaigns, automated customer journeys and measurable conversion systems with BrainADZ Marketing.",
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
    title: "Targeted communication",
    description:
      "Send relevant messages to different audience groups based on their interests, actions and customer journey.",
    icon: Target,
  },
  {
    title: "Automated lead nurturing",
    description:
      "Keep prospects engaged with timely email sequences that move them steadily towards the next action.",
    icon: Workflow,
  },
  {
    title: "Higher customer value",
    description:
      "Use retention, cross-sell and re-engagement campaigns to create more value from existing relationships.",
    icon: UsersRound,
  },
  {
    title: "Measurable conversions",
    description:
      "Track opens, clicks, enquiries and revenue to understand which campaigns are producing meaningful results.",
    icon: BarChart3,
  },
];

const FEATURES = [
  {
    title: "Email strategy built around your goals",
    description:
      "Every email program begins with a clear business objective, audience journey and communication plan. This keeps campaigns focused on generating leads, sales, retention or customer engagement instead of simply increasing send volume.",
    points: [
      "Business goal and audience journey review",
      "Campaign calendar and communication frequency",
      "Content themes and conversion objectives",
      "Performance metrics and reporting framework",
    ],
  },
  {
    title: "Audience segmentation and personalization",
    description:
      "Subscribers are organized into meaningful audience groups so each person receives messages that match their interests, behaviour and relationship with the brand.",
    points: [
      "Customer and subscriber segmentation",
      "Behaviour and engagement-based audiences",
      "Personalized subject lines and email content",
      "Lifecycle and purchase-stage targeting",
    ],
  },
  {
    title: "Campaign design and copywriting",
    description:
      "We create responsive email campaigns with clear messaging, strong hierarchy and focused calls to action that work across desktop and mobile inboxes.",
    points: [
      "Email campaign copy and subject lines",
      "Responsive branded email templates",
      "Clear calls to action and content hierarchy",
      "Mobile-friendly campaign design",
    ],
  },
  {
    title: "Marketing automation and workflows",
    description:
      "Automated email journeys respond to subscriber actions and customer milestones, helping your brand communicate at the right time without requiring constant manual execution.",
    points: [
      "Welcome and onboarding sequences",
      "Lead nurturing and follow-up workflows",
      "Abandoned enquiry or cart automation",
      "Re-engagement and retention journeys",
    ],
  },
  {
    title: "Deliverability and list health",
    description:
      "Campaign performance depends on reaching the inbox. We review list quality, technical configuration and sending practices to reduce avoidable delivery issues.",
    points: [
      "Subscriber list quality assessment",
      "Sender authentication recommendations",
      "Bounce and unsubscribe monitoring",
      "Spam-risk and sending-frequency review",
    ],
  },
  {
    title: "Testing, reporting and optimization",
    description:
      "Campaign data is translated into practical improvements across subject lines, content, audience segments, timing and conversion pathways.",
    points: [
      "Subject line and content testing",
      "Open, click and conversion analysis",
      "Audience and campaign comparison",
      "Monthly optimization recommendations",
    ],
  },
];

const CAMPAIGN_TYPES = [
  {
    title: "Welcome campaigns",
    description:
      "Introduce new subscribers to your brand, value proposition and most important products or services.",
    points: [
      "Brand introduction",
      "Subscriber onboarding",
      "First conversion",
      "Expectation setting",
    ],
    icon: MailCheck,
  },
  {
    title: "Lead nurturing campaigns",
    description:
      "Build trust with prospects through useful content, proof points and timely follow-ups across the sales journey.",
    points: [
      "Educational emails",
      "Sales follow-ups",
      "Case study sharing",
      "Lead qualification",
    ],
    icon: UsersRound,
  },
  {
    title: "Promotional campaigns",
    description:
      "Promote products, services, offers and seasonal campaigns with focused messaging and clear conversion actions.",
    points: [
      "Product launches",
      "Special offers",
      "Seasonal promotions",
      "Limited-time campaigns",
    ],
    icon: Zap,
  },
  {
    title: "Newsletter campaigns",
    description:
      "Maintain consistent audience engagement with company updates, industry insights and useful branded content.",
    points: [
      "Company updates",
      "Industry insights",
      "Content distribution",
      "Audience engagement",
    ],
    icon: Inbox,
  },
  {
    title: "Re-engagement campaigns",
    description:
      "Reconnect with inactive subscribers and identify which contacts still want to receive communication from your brand.",
    points: [
      "Inactive audience groups",
      "Win-back offers",
      "Interest confirmation",
      "List cleanup",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Customer retention campaigns",
    description:
      "Strengthen existing customer relationships with post-purchase communication, reminders and relevant recommendations.",
    points: [
      "Post-purchase emails",
      "Repeat purchase prompts",
      "Cross-sell campaigns",
      "Customer loyalty",
    ],
    icon: Sparkles,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit and align",
    description:
      "We review your existing subscriber data, campaign performance, email platform, customer journey and business priorities before defining the right approach.",
    timing: "Days 1–3",
    output: "Email marketing audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the campaign system",
    description:
      "We define audience segments, campaign types, communication frequency, automation opportunities and the metrics that will guide execution.",
    timing: "Week 1",
    output: "Strategy and campaign plan",
    icon: CalendarRange,
  },
  {
    number: "03",
    title: "Create the emails",
    description:
      "Our team develops campaign copy, subject lines, responsive templates, calls to action and supporting landing-page recommendations.",
    timing: "Every cycle",
    output: "Campaign-ready emails",
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "Build the automation",
    description:
      "Audience triggers, delays, conditions and follow-up sequences are configured to create a connected and timely customer journey.",
    timing: "Setup phase",
    output: "Automated workflows",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Test and launch",
    description:
      "Campaigns are checked across content, links, mobile layout, audience selection and tracking before being scheduled or activated.",
    timing: "Before every send",
    output: "Quality-tested campaign",
    icon: TestTubeDiagonal,
  },
  {
    number: "06",
    title: "Measure and improve",
    description:
      "We review delivery, engagement, conversions and audience behaviour to identify what worked and improve the next campaign cycle.",
    timing: "Monthly",
    output: "Report and action plan",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "Email marketing audit",
    description:
      "A structured review of your email platform, subscriber data, campaign performance, automation and current opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Campaign strategy",
    description:
      "A practical plan covering campaign objectives, audiences, email types, frequency and performance measurements.",
    icon: ListChecks,
  },
  {
    title: "Audience segmentation",
    description:
      "Organized subscriber groups based on customer stage, interests, engagement, behaviour and business relevance.",
    icon: Target,
  },
  {
    title: "Email templates",
    description:
      "Responsive campaign templates designed around your brand identity, message hierarchy and conversion objective.",
    icon: PanelsTopLeft,
  },
  {
    title: "Automation workflows",
    description:
      "Trigger-based sequences for welcome, nurturing, follow-up, retention and re-engagement communication.",
    icon: Settings2,
  },
  {
    title: "Campaign reporting",
    description:
      "Clear performance reporting with campaign observations, conversion insights and recommended next actions.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your email marketing service?",
    answer:
      "The service can include email marketing strategy, subscriber segmentation, campaign planning, copywriting, template design, automation setup, campaign scheduling, testing, deliverability review and performance reporting. The final scope depends on your goals, database quality and email platform.",
  },
  {
    question: "Which email marketing platforms do you support?",
    answer:
      "We can work with commonly used email marketing and CRM platforms such as Mailchimp, HubSpot, Brevo, Klaviyo, Zoho Campaigns and other suitable systems. Platform selection depends on your audience size, automation requirements, integrations and reporting needs.",
  },
  {
    question: "Can you design and write complete email campaigns?",
    answer:
      "Yes. We can create campaign strategy, subject lines, preview text, email copy, responsive design, calls to action and supporting campaign assets. The content is developed according to your brand voice and campaign objective.",
  },
  {
    question: "Do you create automated email sequences?",
    answer:
      "Yes. We can create welcome sequences, lead nurturing journeys, follow-up workflows, abandoned cart or enquiry reminders, customer retention campaigns and re-engagement sequences. The available automation depends on your platform and data setup.",
  },
  {
    question: "Can you work with our existing subscriber list?",
    answer:
      "Yes. We first review list quality, consent, engagement, segmentation and available customer data. Invalid, inactive or unsuitable contacts may need to be cleaned or separated before campaigns are launched.",
  },
  {
    question: "How do you improve email deliverability?",
    answer:
      "We review subscriber quality, bounce rates, sending frequency, spam-risk content and sender authentication requirements such as SPF, DKIM and DMARC. Deliverability also depends on your domain reputation, historical sending practices and audience engagement.",
  },
  {
    question: "How often should a business send marketing emails?",
    answer:
      "The right frequency depends on audience expectations, campaign type, content value and customer journey. Some brands need weekly communication, while others perform better with monthly newsletters and behaviour-triggered automation.",
  },
  {
    question: "How do you measure email campaign performance?",
    answer:
      "We review delivery rate, open rate, click rate, unsubscribes, bounce rate, website actions, enquiries, purchases and campaign revenue where tracking is available. Metrics are selected according to the specific campaign objective.",
  },
  {
    question: "How quickly can email marketing generate results?",
    answer:
      "Promotional campaigns can generate immediate activity when the subscriber list is engaged and the offer is relevant. Lead nurturing, retention and automation programs generally improve performance over multiple campaign cycles.",
  },
  {
    question: "Can email marketing work with our CRM and website?",
    answer:
      "Yes. Email platforms can often be connected with your website, forms, ecommerce system or CRM so subscriber activity and customer data can trigger relevant campaigns. The available integration depends on your current technology setup.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Email Marketing Services",
  serviceType: "Email Marketing",
  description:
    "Email marketing services for campaign strategy, audience segmentation, automation, lead nurturing, customer retention and measurable conversions.",
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

export default function EmailMarketingPage() {
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
          alt="BrainADZ Marketing email marketing team"
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

            <span className="text-white">Email Marketing</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Email Marketing Services
          </h1>

          <div className="mt-auto max-w-[730px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build targeted email campaigns and automated customer journeys
              that nurture leads, strengthen relationships and create
              measurable conversions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start your email campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Email marketing page navigation"
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
            Turn subscriber attention into long-term business growth
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Email marketing gives your business a direct and measurable way
                to communicate with prospects, customers and subscribers.
                BrainADZ combines strategy, audience segmentation, campaign
                creation, automation and reporting to make every email more
                relevant and purposeful.
              </p>

              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From the first welcome email to long-term retention campaigns,
                we create connected communication journeys that support lead
                nurturing, sales, repeat business and stronger customer
                relationships.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Build your email strategy
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/email-marketing/dashboard.jpg"
                  alt="Email marketing campaign dashboard and performance reporting"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Email campaign planning, automation and performance reporting
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
            Everything required for effective email communication
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
                  src="/email-marketing/campaign.jpg"
                  alt="Responsive email marketing campaign designed by BrainADZ"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Responsive email campaign design and conversion-focused content
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Gauge className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Relevant messages perform better
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      Segmentation and automation help each subscriber receive
                      communication based on their interests and actions.
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
                The right email for every customer stage
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Different audiences need different messages. We develop campaigns
              around subscriber intent, customer behaviour and the role email
              plays in the wider sales journey.
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
              A structured journey from strategy to conversion
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Every campaign moves through a clear planning, production,
              testing and optimization workflow so execution remains reliable
              and performance continues to improve.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your email workflow
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
                Everything your email program needs to perform
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces a practical campaign system with clear
                strategy, usable assets, connected automation and actionable
                reporting.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Built around responsible communication
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Campaigns are planned around subscriber relevance, list
                  quality and transparent opt-out practices.
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
              Questions before your next email campaign?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical details about campaign creation, automation,
              deliverability, subscriber lists and email marketing performance.
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