/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  CalendarRange,
  Check,
  ChevronDown,
  CircleGauge,
  FileCheck2,
  FileSearch,
  Headphones,
  Link2,
  ListChecks,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  MousePointerClick,
  PanelsTopLeft,
  RefreshCw,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Target,
  UsersRound,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp Marketing Services | BrainADZ Marketing",
  description:
    "WhatsApp marketing services by BrainADZ Marketing for broadcast campaigns, automated customer journeys, lead nurturing, support, CRM integration and measurable conversions.",
  alternates: {
    canonical: "/services/digital-marketing/whatsapp-marketing",
  },
  openGraph: {
    title: "WhatsApp Marketing Services | BrainADZ Marketing",
    description:
      "Build permission-based WhatsApp campaigns and automated customer journeys that improve engagement, follow-up and conversions.",
    type: "website",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Automation", href: "#automation" },
  { label: "Process", href: "#process" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Direct customer engagement",
    description:
      "Reach opted-in audiences through a familiar messaging channel with relevant and timely communication.",
    icon: MessageCircle,
  },
  {
    title: "Faster lead follow-up",
    description:
      "Respond to enquiries and continue sales conversations without waiting for customers to return to your website.",
    icon: Zap,
  },
  {
    title: "Automated customer journeys",
    description:
      "Use structured workflows for welcome messages, reminders, updates, support and repeat engagement.",
    icon: Workflow,
  },
  {
    title: "Measurable conversions",
    description:
      "Track message delivery, interactions, clicks, enquiries and campaign-supported customer actions.",
    icon: BarChart3,
  },
];

const CAPABILITIES = [
  {
    title: "WhatsApp strategy built around customer journeys",
    description:
      "Every WhatsApp program begins with a clear understanding of your audience, business objective, customer lifecycle and the role messaging should play across marketing, sales and support.",
    points: [
      "Business objective and use-case planning",
      "Audience and customer journey mapping",
      "Campaign frequency and communication rules",
      "Performance goals and measurement framework",
    ],
  },
  {
    title: "Permission-based audience building",
    description:
      "We help structure clear opt-in pathways so customers understand what communication they are agreeing to receive and how WhatsApp will be used.",
    points: [
      "Website and landing-page opt-in flows",
      "Lead form and enquiry consent structure",
      "QR code and offline opt-in opportunities",
      "Audience preference and unsubscribe planning",
    ],
  },
  {
    title: "Broadcast campaign management",
    description:
      "Campaigns are planned around relevant audience segments, useful messages and focused calls to action rather than sending the same communication to every contact.",
    points: [
      "Audience segmentation and campaign lists",
      "Promotional and informational messaging",
      "Campaign scheduling and frequency control",
      "Link, offer and CTA coordination",
    ],
  },
  {
    title: "Automated WhatsApp workflows",
    description:
      "Trigger-based messages help customers receive timely updates and follow-ups based on enquiries, actions, transactions and service milestones.",
    points: [
      "Welcome and onboarding journeys",
      "Lead nurturing and follow-up sequences",
      "Cart, enquiry and payment reminders",
      "Re-engagement and retention workflows",
    ],
  },
  {
    title: "Chatbot and conversation design",
    description:
      "Structured conversation flows help customers find information, select options, qualify enquiries and connect with the correct team.",
    points: [
      "Menu and quick-reply structures",
      "Frequently asked question automation",
      "Lead qualification and routing",
      "Human agent handover planning",
    ],
  },
  {
    title: "CRM and business integration",
    description:
      "WhatsApp activity can be connected with relevant customer systems so messages, enquiries and follow-ups remain organized and actionable.",
    points: [
      "CRM and lead management coordination",
      "Website form and campaign integration",
      "Customer data and status-based triggers-based triggers",
      "Sales and support team handoff workflows",
    ],
  },
  {
    title: "Reporting and continuous optimization",
    description:
      "Campaign and conversation data is reviewed to improve audience quality, message relevance, response flows and conversion performance.",
    points: [
      "Delivery and interaction reporting",
      "Click and enquiry analysis",
      "Campaign and audience comparison",
      "Monthly optimization recommendations",
    ],
  },
];

const USE_CASES = [
  {
    title: "Promotional campaigns",
    description:
      "Share relevant product launches, services, offers and limited-period campaigns with opted-in customer segments.",
    points: [
      "Product launches",
      "Special offers",
      "Seasonal campaigns",
      "Event promotions",
    ],
    icon: Megaphone,
  },
  {
    title: "Lead nurturing",
    description:
      "Continue conversations with prospects through useful information, reminders and structured sales follow-ups.",
    points: [
      "Enquiry follow-up",
      "Product information",
      "Sales reminders",
      "Lead qualification",
    ],
    icon: Target,
  },
  {
    title: "Abandoned cart recovery",
    description:
      "Remind ecommerce customers about incomplete purchases and provide a simple path back to the checkout journey.",
    points: [
      "Cart reminders",
      "Product recall",
      "Checkout links",
      "Purchase support",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Order and service updates",
    description:
      "Keep customers informed through timely transactional and service-related communication.",
    points: [
      "Order confirmation",
      "Delivery updates",
      "Appointment reminders",
      "Service notifications",
    ],
    icon: BellRing,
  },
  {
    title: "Customer support",
    description:
      "Help customers receive answers, raise concerns and connect with the correct support representative more efficiently.",
    points: [
      "FAQ automation",
      "Issue collection",
      "Ticket routing",
      "Agent assistance",
    ],
    icon: Headphones,
  },
  {
    title: "Customer re-engagement",
    description:
      "Reconnect with inactive or previous customers through relevant updates, offers and relationship-building communication.",
    points: [
      "Win-back campaigns",
      "Repeat purchase",
      "Renewal reminders",
      "Customer loyalty",
    ],
    icon: RefreshCw,
  },
];

const AUTOMATION_STAGES = [
  {
    title: "Trigger",
    description:
      "A customer action, enquiry, transaction, date or status change starts the relevant messaging journey.",
    output: "Relevant journey entry",
    icon: Zap,
  },
  {
    title: "Personalize",
    description:
      "Messages use available customer, product and journey information to create a more relevant conversation.",
    output: "Context-based message",
    icon: UsersRound,
  },
  {
    title: "Guide",
    description:
      "Quick replies, menus, links and follow-ups help customers reach the correct information or action.",
    output: "Clear next step",
    icon: MousePointerClick,
  },
  {
    title: "Handover",
    description:
      "Qualified leads and complex customer concerns are transferred to the appropriate sales or support team.",
    output: "Human-assisted resolution",
    icon: Headphones,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit and discovery",
    description:
      "We review your customer journey, existing communication, lead sources, CRM setup, audience data and business priorities.",
    timing: "Days 1–3",
    output: "WhatsApp marketing audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Define use cases and audiences",
    description:
      "We identify the most valuable marketing, sales, transaction and support journeys along with the audiences each one should serve.",
    timing: "Week 1",
    output: "Use-case and audience plan",
    icon: Target,
  },
  {
    number: "03",
    title: "Plan consent and data flow",
    description:
      "Opt-in methods, contact data, audience segments, customer preferences and system handoffs are organized before campaign execution.",
    timing: "Week 1",
    output: "Audience and consent framework",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Create messages and templates",
    description:
      "Campaign messages, conversation flows, calls to action and approved message templates are prepared according to each use case.",
    timing: "Week 1–2",
    output: "Campaign-ready messaging",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Build workflows and integrations",
    description:
      "Triggers, audience conditions, automation steps, CRM connections and team handovers are configured and tested.",
    timing: "Setup phase",
    output: "Automated journeys",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Launch and manage",
    description:
      "Campaigns and customer journeys are activated according to the agreed schedule while conversations and audience signals are monitored.",
    timing: "Ongoing",
    output: "Active WhatsApp campaigns",
    icon: Send,
  },
  {
    number: "07",
    title: "Measure and improve",
    description:
      "We review delivery, response, clicks, enquiries and conversion behaviour to improve audiences, messages and automation.",
    timing: "Monthly",
    output: "Report and action plan",
    icon: BarChart3,
  },
];

const DELIVERABLES = [
  {
    title: "WhatsApp marketing audit",
    description:
      "A structured review of customer communication, lead journeys, data availability, consent and automation opportunities.",
    icon: FileSearch,
  },
  {
    title: "Campaign strategy",
    description:
      "A practical plan covering objectives, audiences, use cases, campaign frequency and measurable outcomes.",
    icon: ListChecks,
  },
  {
    title: "Audience segmentation",
    description:
      "Organized customer groups based on lifecycle stage, interests, transactions, engagement and business relevance.",
    icon: UsersRound,
  },
  {
    title: "Message templates",
    description:
      "Clear campaign, transactional and follow-up messages created according to brand tone and customer intent.",
    icon: MessagesSquare,
  },
  {
    title: "Automation workflows",
    description:
      "Trigger-based journeys for welcome messages, lead nurturing, reminders, updates, support and retention.",
    icon: Workflow,
  },
  {
    title: "Chatbot conversation flow",
    description:
      "Menus, quick replies, FAQ paths, lead qualification and human handover journeys for common customer needs.",
    icon: Bot,
  },
  {
    title: "CRM integration plan",
    description:
      "A documented structure for connecting WhatsApp activity with leads, customer records, sales and support workflows.",
    icon: Link2,
  },
  {
    title: "Performance reporting",
    description:
      "Clear reporting covering campaign activity, customer interactions, clicks, enquiries and optimization opportunities.",
    icon: CircleGauge,
  },
];

const FAQS = [
  {
    question: "What is included in your WhatsApp marketing service?",
    answer:
      "The service can include strategy, opt-in planning, audience segmentation, campaign messaging, approved message templates, broadcast management, automation, chatbot flows, CRM integration and performance reporting. The final scope depends on your customer journey and technology setup.",
  },
  {
    question: "What is the difference between WhatsApp Marketing and bulk messaging?",
    answer:
      "WhatsApp marketing uses permission-based audiences, relevant segmentation, approved communication practices and measurable customer journeys. Uncontrolled bulk messaging sends the same message to large contact lists and can create poor customer experience, complaints and account risks.",
  },
  {
    question: "Can we send promotional messages to any phone number?",
    answer:
      "Marketing messages should only be sent to customers who have provided suitable permission to receive communication from the business. Purchased, scraped or unrelated contact lists should not be used.",
  },
  {
    question: "Do you help set up the WhatsApp Business Platform?",
    answer:
      "Yes. We can support planning and coordination for business setup, messaging use cases, templates, automation, team access and integrations. Exact setup requirements depend on the selected technology provider and current business systems.",
  },
  {
    question: "Can you create WhatsApp chatbots?",
    answer:
      "Yes. We can design structured chatbot flows for frequently asked questions, product selection, enquiry qualification, appointment requests, order information and human agent handover.",
  },
  {
    question: "Can WhatsApp be connected with our CRM?",
    answer:
      "Yes. Depending on the CRM and WhatsApp solution, customer messages, lead data, journey stages and follow-up activity can be synchronized or passed between systems.",
  },
  {
    question: "Can you send automated order and appointment updates?",
    answer:
      "Yes. Transactional journeys can include order confirmations, delivery updates, payment reminders, booking confirmations, appointment reminders and service notifications when the required data and integrations are available.",
  },
  {
    question: "Can WhatsApp Marketing help recover abandoned carts?",
    answer:
      "Yes. Ecommerce businesses can use permission-based reminder journeys to reconnect with customers who leave items in their carts. Results depend on audience consent, timing, product relevance, pricing and checkout experience.",
  },
  {
    question: "How often should WhatsApp campaigns be sent?",
    answer:
      "Frequency depends on customer expectations, campaign relevance, purchase cycle and message value. WhatsApp is a personal communication channel, so excessive or repetitive messaging should be avoided.",
  },
  {
    question: "How do you measure WhatsApp Marketing performance?",
    answer:
      "Performance can be measured using delivery, read and response activity, link clicks, enquiries, qualified leads, completed purchases, support outcomes and customer opt-out behaviour where the selected platform provides these data points.",
  },
  {
    question: "Do you manage customer replies after a campaign?",
    answer:
      "Reply management can be included through chatbot automation, shared team inbox workflows or human agent routing. Responsibilities and response timelines are defined before campaigns are launched.",
  },
  {
    question: "Can WhatsApp campaigns be integrated with click-to-message ads?",
    answer:
      "Yes. Relevant advertising campaigns can direct users into a WhatsApp conversation where automated qualification, product information or human sales support continues the journey.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Marketing Services",
  serviceType: "WhatsApp Marketing",
  description:
    "WhatsApp marketing services for broadcast campaigns, automation, lead nurturing, customer support, CRM integration and measurable conversions.",
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

export default function WhatsAppMarketingPage() {
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
          alt="BrainADZ Marketing WhatsApp campaign and automation team"
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

            <span className="text-white">WhatsApp Marketing</span>
          </nav>

          <h1 className="mt-7 max-w-[950px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            WhatsApp Marketing Services
          </h1>

          <div className="mt-auto max-w-[800px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Build permission-based WhatsApp campaigns and automated customer
              journeys that improve engagement, follow-up, support and
              measurable conversions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black"
            >
              Start WhatsApp marketing
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="WhatsApp marketing page navigation"
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

          <h2 className="mt-5 max-w-[1270px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn customer conversations into connected business journeys
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                WhatsApp marketing gives businesses a direct channel for
                relevant customer communication. BrainADZ combines audience
                strategy, campaign messaging, automation, chatbots and CRM
                integration to create structured conversations across
                marketing, sales and support.
              </p>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                From lead follow-ups and promotional campaigns to order updates
                and customer support, every message is designed around customer
                permission, relevance and a clear next action.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
              >
                Plan your WhatsApp strategy
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/whatsapp-marketing/dashboard.jpg"
                  alt="WhatsApp marketing campaign and conversation dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                WhatsApp campaigns, customer journeys and conversation
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

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            A complete system for customer messaging and automation
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
                  src="/whatsapp-marketing/automation.jpg"
                  alt="WhatsApp marketing automation and chatbot workflow"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Automated WhatsApp journeys, chatbot flows and CRM integration
              </figcaption>

              <div className="mt-5 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#fff1f1] text-[#E1122B]">
                    <Smartphone className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      Personal channel, relevant communication
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-black/58">
                      WhatsApp campaigns should respect customer permission,
                      communication preferences and the value of every message.
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Use Cases
                </p>
              </div>

              <h2 className="mt-5 max-w-[1060px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                The right conversation for every customer stage
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              WhatsApp journeys are selected according to customer intent,
              lifecycle stage, available data and the action each conversation
              needs to support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {USE_CASES.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <article
                  key={useCase.title}
                  className="group relative overflow-hidden rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] sm:p-7"
                >
                  <span className="absolute right-5 top-4 text-[48px] font-semibold leading-none text-black/[0.035]">
                    0{index + 1}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.02em] text-black">
                    {useCase.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {useCase.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/10 pt-5">
                    {useCase.points.map((point) => (
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

      {/* Automation Section */}
      <section
        id="automation"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />

                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Automation
                </p>
              </div>

              <h2 className="mt-5 max-w-[1100px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Automate routine messages without losing the human connection
              </h2>
            </div>

            <p className="max-w-[620px] text-[15px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              Automation handles predictable actions and questions while clear
              handover rules ensure sales and support teams can step in when a
              real conversation is required.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {AUTOMATION_STAGES.map((stage, index) => {
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
              A structured journey from opt-in to conversion
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Strategy, consent, messaging, automation and reporting work as
              one connected system so customer communication remains relevant,
              controlled and measurable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Plan your WhatsApp workflow
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
                Everything required to run WhatsApp campaigns effectively
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                The engagement produces a complete system covering audience
                planning, messaging, automation, integrations and continuous
                performance improvement.
              </p>

              <div className="mt-8 rounded-[14px] bg-black p-6 text-white sm:p-7">
                <ShieldCheck
                  className="h-8 w-8 text-[#E1122B]"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 text-[22px] font-semibold leading-tight">
                  Permission-based communication
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/60">
                  Campaign planning prioritizes clear customer consent,
                  relevant communication, easy opt-out pathways and responsible
                  messaging frequency.
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
              Questions before starting WhatsApp Marketing?
            </h2>

            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Practical information about customer consent, campaigns,
              automation, chatbots, CRM integration and performance
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