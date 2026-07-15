/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Blocks,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  Code2,
  ContactRound,
  Database,
  FileCheck2,
  FileText,
  Filter,
  Gauge,
  HeartHandshake,
  Inbox,
  LayoutTemplate,
  LifeBuoy,
  Link2,
  ListChecks,
  Mail,
  MailCheck,
  MailOpen,
  MessageSquareText,
  MousePointerClick,
  PackageCheck,
  RefreshCw,
  Repeat2,
  Route,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Split,
  Target,
  TestTube2,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Email Marketing Services | Automation Agency | BrainADZ",
  description:
    "Grow customer engagement with BrainADZ email marketing services, including strategy, campaign design, newsletters, segmentation, automation journeys, deliverability support, testing, and performance reporting.",
  keywords: [
    "email marketing services",
    "email marketing agency",
    "email automation services",
    "newsletter marketing services",
    "email campaign management",
    "lead nurturing email campaigns",
    "ecommerce email automation",
    "email marketing strategy",
  ],
  alternates: {
    canonical: "/services/email-marketing",
  },
  openGraph: {
    title: "Email Marketing Services | BrainADZ Marketing",
    description:
      "Strategic campaigns, automated customer journeys, better segmentation, and measurable email performance.",
    type: "website",
    images: [
      {
        url: "/image2.jpeg",
        width: 1200,
        height: 630,
        alt: "BrainADZ email marketing and automation services",
      },
    ],
  },
};

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CampaignCard = IconCard & {
  bestFor: string;
};

const HERO_POINTS = [
  "Email strategy and audience planning",
  "Campaign design, copy, and newsletters",
  "Automated journeys and lead nurturing",
  "Testing, deliverability, and reporting",
];

const VALUE_STRIP = [
  {
    label: "Permission-based audience growth",
    icon: UserPlus,
  },
  {
    label: "Segmented and relevant messaging",
    icon: Filter,
  },
  {
    label: "Automated customer journeys",
    icon: Workflow,
  },
  {
    label: "Performance-led optimization",
    icon: BarChart3,
  },
];

const EMAIL_SERVICES: IconCard[] = [
  {
    title: "Email Marketing Audit",
    description:
      "We review your current lists, campaigns, templates, automations, integrations, sending practices, engagement trends, and performance gaps before building the roadmap.",
    icon: Search,
  },
  {
    title: "Email Strategy",
    description:
      "We define audience priorities, campaign objectives, communication frequency, content themes, offer structure, lifecycle stages, and measurable performance goals.",
    icon: Target,
  },
  {
    title: "List Building System",
    description:
      "We plan permission-based subscriber acquisition through website forms, lead magnets, landing pages, checkout opt-ins, gated resources, and campaign-specific signups.",
    icon: UserPlus,
  },
  {
    title: "Audience Segmentation",
    description:
      "Contacts are organized by lifecycle stage, interests, engagement, purchase behaviour, lead source, location, customer value, or other useful business signals.",
    icon: Filter,
  },
  {
    title: "Campaign Planning",
    description:
      "We build structured calendars for newsletters, launches, offers, educational communication, product updates, events, customer stories, and seasonal campaigns.",
    icon: ClipboardCheck,
  },
  {
    title: "Email Design",
    description:
      "Our team creates responsive, brand-aligned email layouts with clear hierarchy, mobile readability, focused calls to action, and reusable design systems.",
    icon: LayoutTemplate,
  },
  {
    title: "Copywriting and Personalization",
    description:
      "We develop subject lines, preview text, email copy, offers, calls to action, and personalization logic suited to the audience and campaign objective.",
    icon: MessageSquareText,
  },
  {
    title: "Marketing Automation",
    description:
      "We plan and configure trigger-based journeys such as welcome, lead nurture, abandoned cart, post-purchase, re-engagement, renewal, and event sequences.",
    icon: Workflow,
  },
  {
    title: "Testing and Optimization",
    description:
      "Subject lines, sender names, content, calls to action, layouts, offers, and send timing can be tested systematically to improve future campaigns.",
    icon: TestTube2,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Reports cover delivery, clicks, conversions, list health, automation performance, unsubscribe trends, campaign learning, and clear next actions.",
    icon: Gauge,
  },
];

const CAMPAIGN_TYPES: CampaignCard[] = [
  {
    title: "Newsletters",
    description:
      "Consistent brand communication featuring useful content, company updates, insights, products, case studies, and audience-focused stories.",
    bestFor: "Trust and ongoing engagement",
    icon: FileText,
  },
  {
    title: "Promotional Campaigns",
    description:
      "Focused emails for offers, product launches, new services, limited-time campaigns, seasonal communication, and revenue-generating moments.",
    bestFor: "Sales and campaign action",
    icon: Zap,
  },
  {
    title: "Lead Nurture Emails",
    description:
      "Educational sequences that move prospects from initial interest toward consultation, demo, quotation, purchase, or sales conversation.",
    bestFor: "B2B and considered purchases",
    icon: Route,
  },
  {
    title: "Product and Service Updates",
    description:
      "Clear communication around feature releases, portfolio additions, pricing changes, improvements, availability, and customer benefits.",
    bestFor: "Adoption and awareness",
    icon: BellRing,
  },
  {
    title: "Event Email Campaigns",
    description:
      "Invitation, registration, reminder, agenda, attendance, follow-up, and post-event communication planned as one connected journey.",
    bestFor: "Webinars, events, and exhibitions",
    icon: Users,
  },
  {
    title: "Customer Retention Emails",
    description:
      "Helpful communication designed around onboarding, usage, loyalty, feedback, replenishment, renewal, cross-sell, and long-term relationships.",
    bestFor: "Retention and customer value",
    icon: HeartHandshake,
  },
];

const AUTOMATION_FLOWS: IconCard[] = [
  {
    title: "Welcome Series",
    description:
      "Introduce the brand, confirm expectations, share key value, guide the next action, and begin the subscriber relationship properly.",
    icon: UserCheck,
  },
  {
    title: "Lead Nurturing Flow",
    description:
      "Send useful information according to the prospect journey and help qualified leads move toward a sales-ready conversation.",
    icon: BrainCircuit,
  },
  {
    title: "Abandoned Cart Flow",
    description:
      "Reconnect with shoppers who added products but did not complete checkout using timely reminders and relevant purchase context.",
    icon: ShoppingCart,
  },
  {
    title: "Browse and Interest Follow-Up",
    description:
      "Use available browsing or interest signals to send relevant educational, product, or category communication without generic blasting.",
    icon: MousePointerClick,
  },
  {
    title: "Post-Purchase Journey",
    description:
      "Support customers after purchase through confirmation, onboarding, usage guidance, review requests, related products, and loyalty communication.",
    icon: PackageCheck,
  },
  {
    title: "Re-Engagement Flow",
    description:
      "Identify inactive subscribers, remind them of the brand value, invite preference updates, and suppress contacts who remain unresponsive.",
    icon: RefreshCw,
  },
  {
    title: "Renewal and Reminder Flow",
    description:
      "Automate service renewal, subscription, appointment, maintenance, replenishment, and deadline reminders at the right intervals.",
    icon: Repeat2,
  },
  {
    title: "Internal Lead Alerts",
    description:
      "Notify sales or service teams when high-intent contacts complete important actions, submit forms, click priority links, or reach defined stages.",
    icon: LifeBuoy,
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business model, audience, offers, customer lifecycle, existing tools, data sources, and campaign priorities.",
  },
  {
    number: "02",
    title: "Audit and Organize",
    description:
      "We review list quality, consent sources, previous performance, templates, automations, tags, segments, integrations, and sending setup.",
  },
  {
    number: "03",
    title: "Map the Journey",
    description:
      "We define campaign types, audience segments, lifecycle stages, automation triggers, content themes, and conversion paths.",
  },
  {
    number: "04",
    title: "Create and Configure",
    description:
      "Designers, copywriters, and automation specialists prepare templates, messages, forms, segments, workflows, and tracking requirements.",
  },
  {
    number: "05",
    title: "Test and Launch",
    description:
      "We check links, personalization, mobile layouts, forms, triggers, sender details, tracking, fallback content, and campaign readiness.",
  },
  {
    number: "06",
    title: "Measure and Improve",
    description:
      "Campaign and journey results are reviewed to improve content, targeting, timing, calls to action, list health, and conversion performance.",
  },
];

const DELIVERABILITY_ITEMS: IconCard[] = [
  {
    title: "Sender Authentication",
    description:
      "We coordinate the technical readiness of sending domains, including SPF, DKIM, and DMARC requirements with your domain or technology team.",
    icon: ShieldCheck,
  },
  {
    title: "List Hygiene",
    description:
      "Invalid, risky, duplicate, inactive, or repeatedly bouncing contacts are identified and handled to protect sending quality.",
    icon: ListChecks,
  },
  {
    title: "Consent and Preferences",
    description:
      "Signup sources, communication expectations, unsubscribe access, suppression rules, and preference options are planned clearly.",
    icon: BadgeCheck,
  },
  {
    title: "Campaign Quality Checks",
    description:
      "Sender identity, links, content balance, responsive layout, image fallbacks, footer details, and unsubscribe functionality are reviewed before launch.",
    icon: FileCheck2,
  },
];

const DELIVERABLES = [
  "Initial email marketing and list-health audit",
  "Audience, lifecycle, and segmentation strategy",
  "Campaign calendar and communication roadmap",
  "Responsive branded email template system",
  "Subject lines, preview text, copy, and CTA content",
  "Signup forms, lead magnets, or list-growth recommendations",
  "Campaign setup, test sends, scheduling, and quality checks",
  "Priority automation flow planning and configuration",
  "Tracking, tagging, UTM, and integration recommendations",
  "Monthly campaign and automation performance report",
];

const PERFORMANCE_METRICS: IconCard[] = [
  {
    title: "Delivery and Bounce Health",
    description:
      "Delivery trends, hard and soft bounces, suppressions, and list-quality signals help identify technical or audience problems.",
    icon: MailCheck,
  },
  {
    title: "Click Performance",
    description:
      "Link clicks and click rate show which messages, content areas, offers, and calls to action generate meaningful engagement.",
    icon: MousePointerClick,
  },
  {
    title: "Conversion Actions",
    description:
      "Form submissions, purchases, bookings, enquiries, downloads, demos, or other tracked outcomes connect email activity with business goals.",
    icon: Target,
  },
  {
    title: "List Growth and Churn",
    description:
      "New subscribers, unsubscribe trends, complaint signals, inactive contacts, and source quality show whether the audience is becoming healthier.",
    icon: TrendingUp,
  },
  {
    title: "Automation Performance",
    description:
      "Entry volume, progression, clicks, conversions, drop-off points, and journey-level outcomes help improve automated communication.",
    icon: Workflow,
  },
  {
    title: "Content and Test Learning",
    description:
      "Subject lines, offers, layouts, segments, timing, and CTA tests reveal practical improvements for the next campaign cycle.",
    icon: TestTube2,
  },
];

const WHY_BRAINADZ: IconCard[] = [
  {
    title: "Strategy Before Sending",
    description:
      "Every campaign begins with audience, lifecycle, purpose, message, and next-action clarity instead of sending generic bulk emails.",
    icon: Target,
  },
  {
    title: "Creative and Technology Together",
    description:
      "Copy, design, landing pages, CRM logic, automation, tracking, and campaign strategy can work through one connected team.",
    icon: Blocks,
  },
  {
    title: "Relevant Audience Segmentation",
    description:
      "We organize communication around useful customer signals so different subscribers do not receive the same message without context.",
    icon: Split,
  },
  {
    title: "Automation With Human Oversight",
    description:
      "Journeys reduce repetitive work while approval, monitoring, brand voice, escalation, and improvement remain actively managed.",
    icon: Settings2,
  },
  {
    title: "Deliverability-Conscious Execution",
    description:
      "Authentication readiness, list hygiene, consent, unsubscribe access, and quality checks are treated as part of campaign performance.",
    icon: ShieldCheck,
  },
  {
    title: "Reporting Connected to Action",
    description:
      "We move beyond isolated email numbers and connect available data with leads, sales, website actions, and customer journeys.",
    icon: Link2,
  },
];

const FAQS = [
  {
    question: "What is included in BrainADZ email marketing services?",
    answer:
      "Our service can include email strategy, list audit, audience segmentation, campaign calendar, template design, copywriting, newsletters, promotional campaigns, automation journeys, forms, platform setup, testing, deliverability coordination, tracking, and monthly reporting. The final scope depends on your goals, database condition, platform, and campaign frequency.",
  },
  {
    question: "Do you only send newsletters, or do you also build automations?",
    answer:
      "We support both. Manual campaigns are useful for launches, newsletters, offers, updates, and events, while automated journeys support welcome communication, lead nurturing, abandoned carts, post-purchase engagement, re-engagement, reminders, renewals, and other trigger-based use cases.",
  },
  {
    question: "Which email marketing platforms can BrainADZ work with?",
    answer:
      "We can work with commonly used platforms such as Mailchimp, HubSpot, Brevo, Klaviyo, Zoho Campaigns, and suitable CRM or ecommerce-connected systems. The right platform depends on list size, automation needs, integrations, reporting requirements, ecommerce use, team workflow, and budget.",
  },
  {
    question: "Can you create the email design and content?",
    answer:
      "Yes. Depending on the engagement, our team can create responsive email templates, campaign layouts, subject lines, preview text, body copy, calls to action, offer communication, visual assets, and reusable content blocks aligned with your brand guidelines.",
  },
  {
    question: "Can BrainADZ help grow our email subscriber list?",
    answer:
      "Yes. We can recommend or build permission-based list-growth systems using website forms, landing pages, downloadable resources, event registrations, checkout opt-ins, contact preferences, and campaign-specific signup journeys. We do not recommend purchasing random third-party email databases.",
  },
  {
    question: "What is email segmentation and why is it important?",
    answer:
      "Segmentation groups contacts using useful information such as interests, lifecycle stage, engagement, lead source, purchase history, location, customer value, or account status. This helps different audiences receive more relevant messages instead of one generic campaign being sent to everyone.",
  },
  {
    question: "How do you improve email deliverability?",
    answer:
      "Deliverability depends on several factors. We support list hygiene, consent practices, sender consistency, authentication coordination, campaign quality checks, unsubscribe access, suppression handling, relevant segmentation, and engagement monitoring. DNS changes such as SPF, DKIM, and DMARC are completed with the authorized domain or technical team.",
  },
  {
    question: "How will email marketing performance be reported?",
    answer:
      "Reports can include delivery, bounce trends, clicks, click rate, conversions, campaign performance, subscriber growth, unsubscribes, automation results, top links, segment response, and testing insights. Open trends may also be shown, but they are treated as directional because privacy features can affect open tracking accuracy.",
  },
  {
    question: "Can email marketing connect with our website, CRM, or ecommerce store?",
    answer:
      "Yes. Depending on your technology stack, email marketing can connect with website forms, landing pages, CRM stages, product catalogues, ecommerce activity, lead sources, sales alerts, customer data, and conversion tracking. Integration scope is confirmed after reviewing the systems and access available.",
  },
];

const RELATED_SERVICES = [
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Integrated planning across email, search, social, paid, and web.",
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Campaign acquisition connected with nurturing and conversion.",
  },
  {
    title: "Creative and Media",
    href: "/services/creative-media",
    description: "Campaign concepts, visual systems, videos, and brand assets.",
  },
  {
    title: "Website Development",
    href: "/services/web-design-development",
    description: "Landing pages, forms, integrations, and conversion journeys.",
  },
];

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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Email Marketing Services",
  serviceType: "Email Marketing and Marketing Automation",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
  },
  description:
    "Email marketing services covering strategy, list building, segmentation, campaign design, newsletters, automation, deliverability support, testing, and reporting.",
  areaServed: "India",
  url: "/services/email-marketing",
};

export default function EmailMarketingServicesPage() {
  return (
    <main className="bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <HeroSection />
      <ValueStrip />
      <OverviewSection />
      <ServicesSection />
      <CampaignTypesSection />
      <AutomationFlowsSection />
      <ProcessSection />
      <DeliverabilitySection />
      <IntegrationSection />
      <DeliverablesSection />
      <ReportingSection />
      <WhyBrainadzSection />
      <RelatedServicesSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0.5 w-8 bg-[#E1122B]" />
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
        {children}
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-black text-white lg:min-h-[760px]">
      <img
        src="/image2.jpeg"
        alt="Email marketing strategy and automated campaign planning by BrainADZ"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.9)_28%,rgba(0,0,0,0.61)_54%,rgba(0,0,0,0.20)_79%,rgba(0,0,0,0.07)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.58)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1800px] flex-col px-5 py-7 sm:px-8 lg:min-h-[760px] lg:px-12 lg:py-9">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[13px] font-medium"
        >
          <Link href="/" className="text-[#E1122B] transition hover:text-white">
            Home
          </Link>
          <span className="text-white/45">/</span>
          <Link
            href="/services/digital-marketing"
            className="text-white/72 transition hover:text-white"
          >
            Digital Marketing Services
          </Link>
          <span className="text-white/45">/</span>
          <span className="text-white">Email Marketing</span>
        </nav>

        <div className="my-auto grid items-end gap-12 pb-9 pt-16 lg:grid-cols-[1fr_420px] lg:gap-20 lg:pb-14">
          <div className="max-w-[930px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.19em] text-[#ff5a64]">
                Email Marketing Services
              </p>
            </div>

            <h1 className="max-w-[930px] text-[43px] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[55px] lg:text-[70px]">
              Turn every email into a more relevant customer conversation.
            </h1>

            <p className="mt-7 max-w-[800px] text-[16px] font-normal leading-8 text-white/78 sm:text-[18px]">
              BrainADZ combines strategy, audience segmentation, campaign
              design, copywriting, automated journeys, deliverability support,
              testing, and reporting to help brands nurture leads, engage
              customers, and create measurable action from the inbox.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Get a Free Email Marketing Consultation
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>

              <a
                href="#email-marketing-services"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/38 bg-white/5 px-7 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
              >
                Explore Email Services
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="rounded-[14px] border border-white/16 bg-black/48 p-6 backdrop-blur-md sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff5a64]">
              What your email plan can include
            </p>

            <div className="mt-6 space-y-5">
              {HERO_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E1122B] text-white">
                    <Check className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <p className="text-[15px] font-medium leading-7 text-white/88">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/14 pt-5">
              <p className="text-[13px] leading-6 text-white/60">
                Scope is tailored to your audience, database health, selected
                platform, campaign frequency, integrations, and automation
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-[1800px] sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_STRIP.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex min-h-[112px] items-center gap-4 border-b border-black/10 px-5 py-6 last:border-b-0 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1f1] text-[#E1122B]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/38">
                  0{index + 1}
                </p>
                <p className="mt-1 text-[15px] font-semibold leading-6 text-black">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function OverviewSection() {
  const points = [
    "Campaigns planned around audience and lifecycle stage",
    "Responsive content designed for clear inbox action",
    "Automated journeys triggered by useful customer signals",
    "Decisions supported by campaign and conversion data",
  ];

  return (
    <section className="bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[430px] overflow-hidden lg:min-h-[680px]">
          <img
            src="/homepage/about.png"
            alt="BrainADZ team planning email campaigns and customer journeys"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.76)_100%)]" />

          <div className="absolute inset-x-5 bottom-5 rounded-[12px] border border-white/18 bg-black/64 p-5 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff5a64]">
              Relevant communication at the right moment
            </p>
            <p className="mt-3 max-w-[650px] text-[25px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[31px]">
              Better audience data. Better messages. Better journeys from first
              signup to long-term customer value.
            </p>
          </div>
        </div>

        <div className="flex items-center p-6 sm:p-9 lg:p-12 xl:p-16">
          <div>
            <SectionEyebrow>What Email Marketing Means Today</SectionEyebrow>

            <h2 className="mt-6 max-w-[850px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              Email marketing is more than sending the same newsletter to every
              contact.
            </h2>

            <p className="mt-7 max-w-[820px] text-[16px] leading-8 text-black/64">
              Effective email marketing combines permission-based audience
              growth, useful segmentation, strong campaign design, relevant
              content, automation, deliverability discipline, and measurable
              customer actions.
            </p>

            <p className="mt-5 max-w-[820px] text-[16px] leading-8 text-black/64">
              BrainADZ builds an email system around your actual business
              journey—whether you need lead nurturing, ecommerce recovery,
              customer onboarding, product education, event communication,
              retention, renewals, or regular brand newsletters.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4"
                >
                  <CircleCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                    strokeWidth={1.9}
                  />
                  <p className="text-[14px] font-medium leading-6 text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-black"
            >
              Discuss your email marketing goals
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="email-marketing-services"
      className="border-y border-black/10 bg-[#fbfbfb] px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>Complete Email Marketing Scope</SectionEyebrow>
            <h2 className="mt-6 max-w-[820px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              Everything needed to build campaigns people can receive, read,
              and act on.
            </h2>
          </div>

          <p className="max-w-[780px] text-[16px] leading-8 text-black/62 lg:pb-1">
            Your plan can combine strategy, list growth, segmentation, design,
            campaign execution, automation, testing, integrations, and
            reporting. We define the right mix after reviewing your goals,
            audience data, and current technology setup.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {EMAIL_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group min-h-[300px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_14px_38px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/50 hover:bg-[#fff8f8] hover:shadow-[0_22px_50px_rgba(0,0,0,0.07)]"
                data-aos="fade-up"
                data-aos-delay={(index % 5) * 60}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-[#E1122B]/18 bg-[#fff1f1] text-[#E1122B] transition duration-300 group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-black/26">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-[23px] font-semibold leading-[1.18] tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-black/58">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CampaignTypesSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#E1122B]/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#193175]/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff5a64]">
                Campaign Types
              </p>
            </div>
            <h2 className="mt-6 max-w-[850px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              Different business moments need different email conversations.
            </h2>
          </div>

          <p className="max-w-[760px] text-[16px] leading-8 text-white/62">
            We do not force every objective into one newsletter format. The
            message, structure, audience, timing, and next action are adapted to
            the specific campaign and customer journey.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[14px] border border-white/12 md:grid-cols-2 xl:grid-cols-3">
          {CAMPAIGN_TYPES.map((campaign) => {
            const Icon = campaign.icon;

            return (
              <article
                key={campaign.title}
                className="group min-h-[300px] border-b border-white/12 bg-white/[0.035] p-7 transition duration-300 hover:bg-white/[0.075] md:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/14 bg-white/[0.06] text-[#ff646d] transition group-hover:border-[#E1122B] group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
                    {campaign.bestFor}
                  </span>
                </div>

                <h3 className="mt-8 text-[27px] font-semibold tracking-[-0.035em]">
                  {campaign.title}
                </h3>
                <p className="mt-4 max-w-[460px] text-[14px] leading-7 text-white/58">
                  {campaign.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AutomationFlowsSection() {
  return (
    <section className="bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-[1040px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Automated Customer Journeys
            </p>
            <span className="h-0.5 w-8 bg-[#E1122B]" />
          </div>
          <h2 className="mt-6 text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            Useful emails triggered by behaviour, timing, and lifecycle stage.
          </h2>
          <p className="mx-auto mt-6 max-w-[840px] text-[16px] leading-8 text-black/62">
            Automation helps your team respond consistently without manually
            sending every follow-up. Each journey is mapped around a real
            customer action and includes clear entry, exit, and suppression
            rules.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {AUTOMATION_FLOWS.map((flow, index) => {
            const Icon = flow.icon;

            return (
              <article
                key={flow.title}
                className="group relative min-h-[300px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-white hover:shadow-[0_20px_55px_rgba(0,0,0,0.07)]"
              >
                <span className="absolute right-5 top-4 text-[42px] font-light leading-none text-black/[0.045]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-8 text-[24px] font-semibold leading-[1.16] tracking-[-0.035em]">
                  {flow.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-black/58">
                  {flow.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>Our Email Marketing Process</SectionEyebrow>
            <h2 className="mt-6 max-w-[760px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              From audience data to campaigns that keep learning.
            </h2>
          </div>
          <p className="max-w-[760px] text-[16px] leading-8 text-black/62">
            Every stage has a defined purpose, review point, and output. This
            keeps creative, database, technology, and business teams aligned
            throughout the engagement.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[14px] border border-black/10 bg-white md:grid-cols-2 xl:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <article
              key={step.number}
              className="group min-h-[280px] border-b border-black/10 p-7 transition hover:bg-[#fff8f8] md:border-r xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[13px] font-semibold tracking-[0.18em] text-[#E1122B]">
                  {step.number}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-black/20 transition group-hover:text-[#E1122B]"
                  strokeWidth={1.7}
                />
              </div>
              <h3 className="mt-10 text-[29px] font-semibold tracking-[-0.04em]">
                {step.title}
              </h3>
              <p className="mt-5 max-w-[450px] text-[14px] leading-7 text-black/58">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverabilitySection() {
  return (
    <section className="bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] overflow-hidden rounded-[14px] border border-black/10 bg-[#101010] text-white lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] lg:min-h-full">
          <img
            src="/image5.jpg"
            alt="Email deliverability, authentication, and campaign quality planning"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/36" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.78)_100%)]" />

          <div className="absolute inset-x-6 bottom-6 rounded-[12px] border border-white/14 bg-black/58 p-6 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff646d]">
              Inbox readiness matters
            </p>
            <p className="mt-3 text-[27px] font-normal leading-[1.16] tracking-[-0.035em] sm:text-[34px]">
              Good creative cannot perform when the list, domain, or sending
              practices are unhealthy.
            </p>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12 xl:p-16">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff646d]">
              Deliverability and List Health
            </p>
          </div>

          <h2 className="mt-6 max-w-[850px] text-[38px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            Protect the sending foundation behind every campaign.
          </h2>

          <p className="mt-7 max-w-[800px] text-[16px] leading-8 text-white/66">
            Email performance starts before the send button. We include
            practical safeguards around authentication readiness, list quality,
            consent, suppression, campaign checks, and unsubscribe experience.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {DELIVERABILITY_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[12px] border border-white/12 bg-white/[0.045] p-5"
                >
                  <Icon className="h-6 w-6 text-[#ff646d]" strokeWidth={1.7} />
                  <h3 className="mt-5 text-[19px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/56">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  const integrationPoints = [
    "Website forms and campaign landing pages",
    "CRM records, lifecycle stages, and sales ownership",
    "Ecommerce events, products, orders, and customer behaviour",
    "Lead alerts, tracking parameters, and conversion reporting",
  ];

  return (
    <section className="bg-white px-5 pb-16 text-white sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
      <div className="mx-auto grid max-w-[1800px] overflow-hidden rounded-[14px] bg-[#0e276f] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-7 sm:p-10 lg:p-14 xl:p-16">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#ff5a64]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff7a82]">
              Connected Data and Journeys
            </p>
          </div>

          <h2 className="mt-6 max-w-[850px] text-[38px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            Connect email with the website, CRM, ecommerce, and sales process.
          </h2>

          <p className="mt-7 max-w-[820px] text-[16px] leading-8 text-white/70">
            Email becomes more useful when customer actions can inform the next
            message. We review available integrations and build the practical
            connections required for segmentation, automation, lead handling,
            and outcome tracking.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {integrationPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/14 bg-white/[0.055] p-4"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ff7a82]"
                  strokeWidth={2}
                />
                <p className="text-[14px] leading-6 text-white/78">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="/services/web-design-development"
            className="mt-9 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-white px-6 text-[13px] font-semibold text-[#0e276f] transition hover:bg-[#E1122B] hover:text-white"
          >
            Explore Website Development
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        </div>

        <div className="relative min-h-[380px] lg:min-h-full">
          <img
            src="/image1.jpeg"
            alt="Email platform connected with website, CRM, and customer data"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,39,111,0.44)_0%,rgba(14,39,111,0.02)_58%)]" />
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionEyebrow>Typical Deliverables</SectionEyebrow>
          <h2 className="mt-6 max-w-[720px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            A campaign system your marketing, sales, and business teams can use.
          </h2>
          <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-black/62">
            Deliverables are finalized after discovery. The list shown here
            represents common building blocks used in ongoing email marketing
            and automation engagements.
          </p>

          <div className="mt-9 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff1f1] text-[#E1122B]">
                <Clock3 className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-black/38">
                  Working rhythm
                </p>
                <p className="mt-1 text-[19px] font-semibold">
                  Plan → Create → Test → Send → Improve
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
          {DELIVERABLES.map((deliverable, index) => (
            <div
              key={deliverable}
              className="group flex items-center gap-5 border-b border-black/10 px-5 py-5 last:border-b-0 sm:px-7 sm:py-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E1122B]/18 bg-[#fff1f1] text-[11px] font-semibold text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] font-medium leading-7 text-black/72 sm:text-[16px]">
                {deliverable}
              </p>
              <CircleCheck
                className="ml-auto hidden h-5 w-5 shrink-0 text-black/18 transition group-hover:text-[#E1122B] sm:block"
                strokeWidth={1.7}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportingSection() {
  return (
    <section className="bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>Reporting That Supports Decisions</SectionEyebrow>
            <h2 className="mt-6 max-w-[830px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              We measure whether emails are reaching people and creating useful
              action.
            </h2>
          </div>

          <p className="max-w-[770px] text-[16px] leading-8 text-black/62">
            Reporting is aligned to the purpose of each campaign and journey.
            We explain what changed, which audience responded, which links and
            messages worked, where contacts dropped off, and what should be
            improved next.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PERFORMANCE_METRICS.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.title}
                className="group rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:border-[#E1122B]/45 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.065)] sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#E1122B] shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition group-hover:bg-[#E1122B] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-7 text-[25px] font-semibold tracking-[-0.035em]">
                  {metric.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-black/58">
                  {metric.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[14px] border border-black/10 bg-[#101010] text-white lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex items-center p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff5a64]">
                Campaign review
              </p>
              <h3 className="mt-4 text-[31px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[38px]">
                Metrics matter when they improve the next customer journey.
              </h3>
            </div>
          </div>

          <div className="grid border-t border-white/12 sm:grid-cols-3 lg:border-l lg:border-t-0">
            {[
              { label: "Audience", value: "Who responded" },
              { label: "Message", value: "What worked" },
              { label: "Next action", value: "What improves" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-white/12 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/38">
                  {item.label}
                </p>
                <p className="mt-3 text-[21px] font-medium text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBrainadzSection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Why BrainADZ Marketing
            </p>
            <span className="h-0.5 w-8 bg-[#E1122B]" />
          </div>
          <h2 className="mt-6 text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            An email team connected with your complete digital growth system.
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] text-[16px] leading-8 text-black/62">
            BrainADZ brings strategy, content, design, websites, automation,
            CRM thinking, and performance reporting together so email is not
            managed as an isolated channel.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {WHY_BRAINADZ.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group min-h-[270px] rounded-[14px] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_20px_55px_rgba(0,0,0,0.065)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-[#E1122B]/18 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-8 text-[25px] font-semibold leading-tight tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-black/58">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="bg-white px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="flex flex-col gap-7 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow>Connected Services</SectionEyebrow>
            <h2 className="mt-6 max-w-[820px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
              Connect email with the channels that attract and convert your
              audience.
            </h2>
          </div>
          <p className="max-w-[470px] text-[15px] leading-7 text-black/58 md:text-right">
            Build a more complete journey by combining email with acquisition,
            creative, landing pages, and performance campaigns.
          </p>
        </div>

        <div className="grid border-b border-black/10 md:grid-cols-2 xl:grid-cols-4">
          {RELATED_SERVICES.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group min-h-[250px] border-b border-black/10 p-6 transition hover:bg-[#fff8f8] md:border-r xl:border-b-0 xl:last:border-r-0 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#E1122B]">
                  0{index + 1}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-black/24 transition group-hover:text-[#E1122B]"
                  strokeWidth={1.7}
                />
              </div>
              <h3 className="mt-10 text-[27px] font-semibold tracking-[-0.04em]">
                {service.title}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-black/56">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-black/10 bg-[#fbfbfb] px-5 py-16 text-black sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
        <div>
          <SectionEyebrow>Email Marketing FAQ</SectionEyebrow>
          <h2 className="mt-6 max-w-[650px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]">
            Common questions before building your email program.
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-black/62">
            Scope, platform, campaign frequency, automation complexity, data
            condition, and integrations are finalized after an initial
            discovery discussion.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#193175] px-6 text-[13px] font-semibold text-white transition hover:bg-[#E1122B]"
          >
            Ask Our Email Marketing Team
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
          {FAQS.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-black/10 last:border-b-0 open:bg-[#fff8f8]"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-6 sm:px-7">
                <span className="flex gap-5 text-[19px] font-semibold leading-7 tracking-[-0.02em] sm:text-[21px]">
                  <span className="shrink-0 font-mono text-[12px] font-semibold text-[#E1122B]">
                    [{index + 1}]
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className="mt-1 h-5 w-5 shrink-0 text-black/45 transition duration-300 group-open:rotate-180 group-open:text-[#E1122B]"
                  strokeWidth={1.8}
                />
              </summary>
              <p className="max-w-[930px] px-5 pb-7 pl-[61px] text-[15px] leading-8 text-black/62 sm:px-7 sm:pl-[76px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCtaSection() {
  return (
    <section className="bg-white py-10 text-white lg:py-12">
      <div className="mx-auto max-w-full px-0">
        <div className="grid overflow-hidden bg-[#0e276f] md:grid-cols-[32%_68%]">
          <div className="relative min-h-[220px] md:min-h-[330px]">
            <img
              src="/about/about.avif"
              alt="BrainADZ email marketing consultation and campaign planning"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex min-h-[330px] flex-col justify-center gap-8 px-6 py-9 sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[790px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff7a82]">
                Build a smarter inbox journey
              </p>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.14] tracking-[-0.035em] sm:text-[42px] lg:text-[46px]">
                Turn your audience database into useful, timely, and measurable
                customer communication.
              </h2>

              <p className="mt-5 max-w-[780px] text-[15px] font-medium leading-7 text-white/72 sm:text-[17px]">
                Plan newsletters, nurturing campaigns, automated journeys,
                segmentation, and reporting with one connected BrainADZ team.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-16 w-full shrink-0 items-center justify-between gap-8 border border-white/65 px-6 text-[15px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B] sm:w-[270px]"
            >
              Enquire Now
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}