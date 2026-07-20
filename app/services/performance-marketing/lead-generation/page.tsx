/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  FileSearch,
  Filter,
  FormInput,
  Layers3,
  MailCheck,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lead Generation Services | Qualified Lead Campaigns | BrainADZ",
  description:
    "Lead generation services by BrainADZ cover multi-channel acquisition, offer strategy, forms, calls, CRM routing, lead qualification, sales feedback and cost-per-qualified-lead reporting.",
  alternates: {
    canonical: "/services/lead-generation",
  },
  openGraph: {
    title: "Lead Generation Services | BrainADZ Marketing",
    description:
      "Generate and qualify business enquiries through paid search, social, native forms, landing pages, calls and CRM-connected optimisation.",
    type: "website",
    url: "/services/lead-generation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services | BrainADZ Marketing",
    description:
      "Multi-channel lead acquisition, qualification, CRM routing, sales feedback and qualified-lead reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Lead Funnel", href: "#lead-funnel" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Conversion Paths", href: "#conversion-paths" },
  { label: "Qualification", href: "#qualification" },
  { label: "Sales Handoff", href: "#sales-handoff" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Reach relevant prospects",
    description:
      "Use search, social, video and professional-network channels according to where the target audience discovers and evaluates solutions.",
    icon: Target,
  },
  {
    title: "Improve conversion paths",
    description:
      "Match the offer, message, form, call or landing-page experience with the user’s intent and level of readiness.",
    icon: MousePointerClick,
  },
  {
    title: "Qualify before scaling",
    description:
      "Separate valid, suitable and sales-ready enquiries from spam, duplicates and poor-fit submissions.",
    icon: UserCheck,
  },
  {
    title: "Optimise with sales feedback",
    description:
      "Use CRM stages and downstream outcomes to guide channel, audience, keyword, creative and budget decisions.",
    icon: BarChart3,
  },
];

const LEAD_FUNNEL_STAGES = [
  {
    number: "01",
    title: "Demand",
    description:
      "Reach people actively searching for a solution or create interest among audiences likely to need the offer.",
    focus: "Relevant traffic and attention",
    icon: Search,
  },
  {
    number: "02",
    title: "Conversion",
    description:
      "Present a clear reason to enquire through the most appropriate page, form, message, booking or call journey.",
    focus: "Completed enquiries",
    icon: FormInput,
  },
  {
    number: "03",
    title: "Qualification",
    description:
      "Evaluate fit using form data, validation rules, CRM information, sales feedback and agreed lead criteria.",
    focus: "Valid and qualified leads",
    icon: Filter,
  },
  {
    number: "04",
    title: "Revenue outcome",
    description:
      "Track appointments, opportunities, proposals, customers and revenue where the sales process provides reliable feedback.",
    focus: "Business contribution",
    icon: TrendingUp,
  },
];

const LEAD_CAPABILITIES = [
  {
    eyebrow: "Audience and demand strategy",
    title: "Choose channels according to how prospects enter the market",
    description:
      "We map high-intent search demand, social discovery, professional targeting, video consideration and remarketing around the customer journey.",
    points: [
      "Search and keyword intent mapping",
      "Social and professional audience planning",
      "Prospecting and remarketing separation",
      "Location and service-area controls",
      "Channel role and budget allocation",
    ],
    icon: Target,
  },
  {
    eyebrow: "Offer and message design",
    title: "Give prospects a clear and credible reason to respond",
    description:
      "The offer, proof, risk reduction and call to action are aligned with the prospect’s problem, stage and expected sales journey.",
    points: [
      "Consultation, quote and audit offers",
      "Demo, callback and appointment journeys",
      "Lead magnet and resource offers",
      "Proof, credentials and differentiation",
      "CTA and expectation setting",
    ],
    icon: MessageSquareText,
  },
  {
    eyebrow: "Campaign architecture",
    title: "Separate lead programmes by intent, service and quality",
    description:
      "Campaigns are structured around channel, audience, service, geography, offer and conversion path so performance can be diagnosed accurately.",
    points: [
      "Brand and non-brand campaign separation",
      "Service and location segmentation",
      "Native-form and website-form separation",
      "Call and message campaign controls",
      "Lead-source naming and tracking standards",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Lead capture systems",
    title: "Use the conversion path best suited to the prospect",
    description:
      "Website forms, native lead forms, phone calls, messages and booking journeys are designed around intent, friction and the information required for qualification.",
    points: [
      "Website form and landing-page journeys",
      "Native platform lead forms",
      "Call and callback conversion paths",
      "Messaging and chat enquiries",
      "Booking and consultation scheduling",
    ],
    icon: FormInput,
  },
  {
    eyebrow: "Lead qualification",
    title: "Define what makes an enquiry useful to the business",
    description:
      "We create shared criteria for valid, marketing-qualified, sales-qualified and disqualified leads so campaigns are not judged by raw form totals.",
    points: [
      "Lead-stage and status definitions",
      "Required qualification fields",
      "Spam and duplicate controls",
      "Geography, budget and service-fit checks",
      "Sales rejection reason tracking",
    ],
    icon: UserCheck,
  },
  {
    eyebrow: "CRM and offline feedback",
    title: "Send downstream sales outcomes back into campaign decisions",
    description:
      "Lead sources, campaign parameters, CRM stages and offline conversion feedback are connected where technically possible.",
    points: [
      "Source and campaign attribution fields",
      "CRM lead-routing requirements",
      "Qualified lead and opportunity feedback",
      "Offline conversion planning",
      "Customer and revenue outcome tracking",
    ],
    icon: Workflow,
  },
];

const CHANNEL_MODELS = [
  {
    title: "Google Search leads",
    description:
      "Capture active demand from prospects searching for specific services, products, locations or business solutions.",
    points: [
      "Commercial keyword targeting",
      "Search-term and negative controls",
      "Call, form and booking tracking",
      "Qualified-search feedback",
    ],
    icon: Search,
  },
  {
    title: "Meta lead campaigns",
    description:
      "Create or capture demand through Facebook and Instagram using website forms, instant forms, messages and calls.",
    points: [
      "Prospecting and warm audiences",
      "Creative and offer testing",
      "Instant-form qualification",
      "CRM and lead-quality feedback",
    ],
    icon: Users,
  },
  {
    title: "LinkedIn lead campaigns",
    description:
      "Reach professional audiences using role, company and business attributes where B2B economics justify the higher media cost.",
    points: [
      "Professional audience targeting",
      "Lead Gen Forms and landing pages",
      "High-value offer strategy",
      "Opportunity and pipeline feedback",
    ],
    icon: UserCheck,
  },
  {
    title: "Video and remarketing leads",
    description:
      "Build consideration through video, then re-engage viewers and visitors with proof, qualification and conversion-focused messages.",
    points: [
      "Educational and proof-led video",
      "Viewer and visitor audiences",
      "Multi-step conversion journeys",
      "Assisted lead measurement",
    ],
    icon: MessageSquareText,
  },
];

const CONVERSION_PATHS = [
  {
    title: "Website forms",
    description:
      "Best when the page must explain the offer, show proof and collect enough context before the enquiry is submitted.",
    icon: FormInput,
  },
  {
    title: "Native lead forms",
    description:
      "Reduce friction inside the advertising platform while using appropriate questions and review steps to protect quality.",
    icon: ClipboardCheck,
  },
  {
    title: "Phone calls",
    description:
      "Useful for urgent, local, high-consideration or consultation-led offers where a direct conversation improves conversion.",
    icon: PhoneCall,
  },
  {
    title: "Messages and chat",
    description:
      "Support lower-friction enquiries through messaging when response times and qualification workflows can be managed consistently.",
    icon: MessageSquareText,
  },
];

const QUALIFICATION_LAYERS = [
  {
    title: "Valid lead",
    description:
      "The submission is genuine, reachable and not a duplicate, test, employee, vendor or obvious spam enquiry.",
    icon: ShieldCheck,
  },
  {
    title: "Marketing-qualified lead",
    description:
      "The prospect matches agreed geography, service, company, requirement or audience criteria and deserves follow-up.",
    icon: Filter,
  },
  {
    title: "Sales-qualified lead",
    description:
      "Sales confirms a real requirement, appropriate timing, decision process or commercial fit according to the agreed model.",
    icon: UserCheck,
  },
  {
    title: "Opportunity or customer",
    description:
      "The lead progresses into a meeting, proposal, opportunity, sale or revenue event that can be connected back to acquisition.",
    icon: TrendingUp,
  },
];

const HANDOFF_CONTROLS = [
  {
    title: "Lead routing",
    description:
      "Assign enquiries by service, location, territory, language, product or sales ownership so the correct team receives them.",
    icon: Workflow,
  },
  {
    title: "Speed to lead",
    description:
      "Set clear response targets, alerts and fallback ownership because delayed contact can reduce conversion quality.",
    icon: Clock3,
  },
  {
    title: "Lead context",
    description:
      "Pass source, campaign, form answers, page, keyword and other useful context into the CRM or lead-notification workflow.",
    icon: MailCheck,
  },
  {
    title: "Disposition feedback",
    description:
      "Require sales teams to mark valid, qualified, disqualified, unreachable, won and lost outcomes using consistent reasons.",
    icon: ClipboardCheck,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Conversion definition",
    text: "Primary campaign conversions are limited to meaningful lead actions instead of treating every button click or page view as equal.",
  },
  {
    title: "Form quality",
    text: "Fields, validation, consent, confirmation and qualification questions are balanced against completion friction.",
  },
  {
    title: "Sales response",
    text: "Lead volume is not scaled when routing, response time and follow-up capacity cannot support additional enquiries.",
  },
  {
    title: "Feedback completeness",
    text: "Campaign optimisation uses enough CRM and sales disposition data to distinguish cheap leads from useful pipeline.",
  },
];

const REJECTED_TACTICS = [
  "Optimising only for the cheapest form submission",
  "Counting spam, duplicates and test leads as success",
  "Sending every campaign to one generic contact page",
  "Using long forms without a clear qualification reason",
  "Scaling before the sales team can respond properly",
  "Hiding lead-source and campaign attribution",
  "Reporting raw leads without qualification status",
  "Guaranteeing fixed lead numbers without demand and quality context",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the lead and commercial outcome",
    description:
      "We agree valid, qualified and sales-qualified lead definitions, priority services, geography, customer value and the actions campaigns should generate.",
    timing: "Discovery",
    output: "Lead definitions and KPI plan",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Map demand, audiences and offers",
    description:
      "Search intent, audience characteristics, buying stages, channel roles, offers and proof requirements are researched.",
    timing: "Strategy",
    output: "Channel, audience and offer map",
    icon: Target,
  },
  {
    number: "03",
    title: "Design conversion and qualification paths",
    description:
      "Landing pages, native forms, calls, messages, form fields, validation and qualification questions are planned.",
    timing: "Conversion design",
    output: "Lead-capture and qualification specification",
    icon: FormInput,
  },
  {
    number: "04",
    title: "Build campaigns, tracking and CRM routing",
    description:
      "Campaigns, ads, audiences, conversion events, source parameters, notifications and CRM handoff requirements are configured.",
    timing: "Setup",
    output: "Launch-ready lead generation system",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Launch and review lead quality",
    description:
      "Early delivery, form behaviour, call quality, spam, duplicate rate, response time and sales feedback are monitored.",
    timing: "Launch phase",
    output: "Lead quality and response baseline",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Optimise qualified pipeline growth",
    description:
      "Keywords, audiences, offers, creative, forms, budgets and channels are refined using qualified-lead and opportunity evidence.",
    timing: "Ongoing",
    output: "Optimisation report and growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Lead volume and source",
    description:
      "Understand where enquiries originate and how volume changes across channels, campaigns, services and locations.",
    metrics: [
      "Total leads by channel",
      "Forms, calls, messages and bookings",
      "Campaign and service contribution",
      "Location and audience patterns",
    ],
    icon: Users,
  },
  {
    title: "Lead quality",
    description:
      "Separate genuine and suitable prospects from duplicates, spam, invalid enquiries and poor-fit submissions.",
    metrics: [
      "Valid and qualified lead rate",
      "Spam, duplicate and rejection rate",
      "Disqualification reasons",
      "Cost per qualified lead",
    ],
    icon: UserCheck,
  },
  {
    title: "Sales follow-up",
    description:
      "Review whether leads are routed and contacted quickly enough to preserve the value generated by paid media.",
    metrics: [
      "Response and assignment time",
      "Contact and connection rate",
      "Meeting or appointment rate",
      "Sales disposition completeness",
    ],
    icon: Clock3,
  },
  {
    title: "Pipeline and commercial impact",
    description:
      "Connect qualified acquisition with opportunities, proposals, customers and revenue where sales data allows.",
    metrics: [
      "Sales-qualified leads",
      "Opportunities and pipeline value",
      "Customer and revenue outcomes",
      "Budget and scaling recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your Lead Generation service?",
    answer:
      "The service can include channel strategy, audience and keyword research, offer planning, paid campaign setup, landing pages or native forms, call and message tracking, CRM routing, lead qualification, sales feedback, optimisation and reporting.",
  },
  {
    question: "Which platforms do you use for lead generation?",
    answer:
      "Depending on the business, lead generation can use Google Ads, Meta Ads, LinkedIn Ads, YouTube, remarketing and other relevant paid channels. Channel selection is based on demand, audience, sales value, budget and conversion journey.",
  },
  {
    question: "What is a qualified lead?",
    answer:
      "A qualified lead is a genuine prospect that matches agreed business criteria such as service requirement, geography, company type, budget, timing or decision role. The definition is agreed with the sales team before campaigns are evaluated.",
  },
  {
    question: "Do you use website forms or native lead forms?",
    answer:
      "Both can be used. Website forms are useful when the page needs to explain the offer and build trust, while native platform forms can reduce friction. The choice depends on intent, required qualification information and lead-quality performance.",
  },
  {
    question: "Can you track phone-call leads?",
    answer:
      "Yes. Call clicks, call extensions, tracked phone numbers or call-platform integrations can be used depending on the website, platform and technical setup. Call quality still requires business or CRM feedback.",
  },
  {
    question: "Do you connect campaigns with a CRM?",
    answer:
      "Yes, where the CRM and technical access support it. We can plan lead-source fields, UTM parameters, routing, notifications, status definitions and offline conversion feedback so campaign decisions use downstream outcomes.",
  },
  {
    question: "How quickly should sales teams contact a new lead?",
    answer:
      "Faster response is generally preferable, but the correct service-level target depends on the industry, operating hours, urgency and lead source. We define a practical response workflow and monitor whether it is followed.",
  },
  {
    question: "How do you reduce spam and poor-quality leads?",
    answer:
      "We use targeting, negative keywords, exclusions, form validation, qualification questions, confirmation steps, CRM feedback and sales rejection reasons. No system removes every low-quality submission, but the feedback loop helps reduce them.",
  },
  {
    question: "How do you report lead generation performance?",
    answer:
      "Reporting can include total leads, valid leads, qualified leads, cost per lead, cost per qualified lead, response time, appointment rate, opportunities, pipeline and customers depending on available CRM and sales data.",
  },
  {
    question: "Do you guarantee a fixed number of leads?",
    answer:
      "No responsible lead generation service can guarantee a fixed number and quality of leads because results depend on market demand, budget, competition, offer, conversion experience, tracking and sales follow-up. We provide transparent optimisation around agreed quality and commercial goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lead Generation Services",
  serviceType: "Multi-Channel Paid Lead Generation",
  description:
    "Lead generation services covering channel strategy, paid campaigns, offers, forms, calls, CRM routing, lead qualification, sales feedback and qualified-lead reporting.",
  url: "https://www.brainadz.marketing/services/lead-generation",
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
    name: "Lead Generation Capabilities",
    itemListElement: LEAD_CAPABILITIES.map((capability) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: capability.eyebrow,
        description: capability.description,
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

export default function LeadGenerationServicesPage() {
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
          src="/performance-marketing/lead-generation-hero.jpg"
          alt="Lead generation campaign management connecting paid media, forms and CRM"
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
            <span className="text-white">Lead Generation Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Lead Generation Services
          </h1>

          <div className="mt-auto max-w-[860px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Generate, qualify and route business enquiries through paid campaigns,
              conversion-focused journeys and sales feedback built around real pipeline value.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your lead generation
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Lead generation page navigation"
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
              Lead generation overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Build a measurable path from paid attention to qualified pipeline
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Lead generation connects advertising, conversion experience and sales
                operations. BrainADZ aligns channels, audiences, offers, forms, calls,
                CRM routing and qualification so campaigns are judged by useful
                business enquiries rather than raw submission volume.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                The feedback loop continues after the form. Validity, fit, response
                time, sales acceptance, opportunities and revenue are used wherever
                possible to guide the next media and conversion decision.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your lead generation model
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/lead-generation-overview.jpg"
                  alt="Lead generation funnel from paid media to qualified CRM opportunities"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective lead generation connects acquisition, qualification,
                response and sales outcomes in one measurable system.
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

      {/* Lead funnel */}
      <section
        id="lead-funnel"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Lead funnel
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Measure every stage between demand and revenue
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              A lead is not the final result. Qualification, contact, sales acceptance
              and pipeline progression reveal whether acquisition is commercially useful.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {LEAD_FUNNEL_STAGES.map((item) => {
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

      {/* Capabilities */}
      <section
        id="capabilities"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Lead generation capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect channel strategy, lead capture and sales intelligence
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Lead volume becomes useful only when offer, conversion, qualification
              and sales feedback operate as one system.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {LEAD_CAPABILITIES.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                        {capability.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[650px] text-[27px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[31px]">
                        {capability.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition-colors group-hover:bg-[#E1122B] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channel models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Lead generation channels
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Use each channel according to how prospects discover and decide
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Paid search captures active need, social creates demand, professional
              networks support B2B targeting and video develops consideration.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CHANNEL_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="group flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-black/58">
                    {model.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {model.points.map((point) => (
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

      {/* Conversion paths */}
      <section
        id="conversion-paths"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/lead-generation-conversion-paths.jpg"
                alt="Lead generation through website forms, native forms, calls and messages"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Lead conversion paths
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Use the response method that fits the prospect and sales journey
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A complex B2B enquiry, urgent local service and simple callback request
              require different levels of explanation, friction and qualification.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONVERSION_PATHS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-5"
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

      {/* Qualification */}
      <section
        id="qualification"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Lead qualification
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Give every team the same definition of lead quality
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Marketing, sales and reporting become more useful when stages and
              rejection reasons are defined before campaigns scale.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUALIFICATION_LAYERS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-black">
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

      {/* Sales handoff */}
      <section
        id="sales-handoff"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Sales handoff
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Protect campaign value after the lead arrives
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Slow routing, missing context and inconsistent disposition can make
              strong acquisition appear weak—or hide poor-quality campaigns.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Review your lead handoff
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HANDOFF_CONTROLS.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-black/10 bg-white p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#E1122B] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[18px] font-semibold text-black">
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

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6"
                >
                  <span className="text-[13px] font-semibold text-[#E1122B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <aside className="mt-6 rounded-[18px] bg-black p-7 text-white sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#E1122B]">
                  <CircleAlert className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    Lead quality discipline
                  </p>
                  <h3 className="mt-1 text-[24px] font-semibold">
                    Tactics we do not use
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
                Lead generation process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From lead definition to qualified pipeline growth
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Channel, offer, conversion, CRM and sales decisions remain connected
              through one lead generation roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your lead generation plan
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
                        Phase
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
                  Lead generation reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect media cost with qualification, response and pipeline
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting separates submission volume from useful sales outcomes and
              explains where the next acquisition budget should move.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/lead-generation-reporting-dashboard.jpg"
                  alt="Lead generation reporting dashboard for channels, qualification and pipeline"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Lead generation reporting should connect acquisition with validity,
                qualification, response and commercial outcomes.
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
                Lead generation FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before generating paid leads
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand channels, qualification, forms, calls, CRM connections,
              sales response and reporting before starting.
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