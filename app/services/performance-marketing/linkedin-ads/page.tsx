/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileSearch,
  Filter,
  FormInput,
  Gauge,
  Layers3,
  LineChart,
  MailCheck,
  MessageSquareText,
  MousePointerClick,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Ads Services | B2B Lead Generation | BrainADZ",
  description:
    "LinkedIn Ads services by BrainADZ cover professional audience targeting, Lead Gen Forms, Matched Audiences, website conversions, Insight Tag, CRM feedback and B2B pipeline reporting.",
  alternates: {
    canonical: "/services/linkedin-ads",
  },
  openGraph: {
    title: "LinkedIn Ads Services | BrainADZ Marketing",
    description:
      "Generate and qualify B2B demand through professional audience targeting, native forms, website conversions, account-based campaigns and CRM-connected optimisation.",
    type: "website",
    url: "/services/linkedin-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Ads Services | BrainADZ Marketing",
    description:
      "Professional audience targeting, Lead Gen Forms, Matched Audiences, conversion tracking and B2B pipeline reporting.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "B2B Funnel", href: "#b2b-funnel" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Audience Strategy", href: "#audiences" },
  { label: "Lead Gen Forms", href: "#lead-gen-forms" },
  { label: "Measurement", href: "#measurement" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Reach professional decision-makers",
    description:
      "Use role, seniority, company and industry context to reach business audiences aligned with the offer.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Build high-value B2B demand",
    description:
      "Use thought leadership, proof, content offers and demonstrations to support longer decision journeys.",
    icon: Sparkles,
  },
  {
    title: "Capture and qualify leads",
    description:
      "Use native Lead Gen Forms or website journeys with appropriate fields, routing and CRM context.",
    icon: FormInput,
  },
  {
    title: "Optimise toward pipeline",
    description:
      "Connect campaigns with qualified leads, opportunities and sales outcomes instead of judging raw form volume alone.",
    icon: LineChart,
  },
];

const B2B_FUNNEL = [
  {
    number: "01",
    title: "Awareness",
    description:
      "Introduce the business problem, category or point of view to relevant professional audiences before active vendor evaluation.",
    focus: "Reach and professional relevance",
    icon: Users,
  },
  {
    number: "02",
    title: "Consideration",
    description:
      "Use expert content, documents, video, proof and educational offers to build credibility and buying interest.",
    focus: "Engagement and intent signals",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Lead capture",
    description:
      "Convert interest through native forms, demos, consultations, webinars, reports, website forms or other relevant actions.",
    focus: "Valid and qualified enquiries",
    icon: FormInput,
  },
  {
    number: "04",
    title: "Pipeline",
    description:
      "Use sales acceptance, opportunity stage, deal value and customer outcomes to evaluate acquisition quality.",
    focus: "Commercial contribution",
    icon: TrendingUp,
  },
];

const LINKEDIN_CAPABILITIES = [
  {
    eyebrow: "Professional audience strategy",
    title: "Build targeting around the people and organisations that matter",
    description:
      "We map job function, seniority, role, skills, company attributes, industry and geography to the buying committee and campaign objective.",
    points: [
      "Job function, title and seniority planning",
      "Company size, industry and growth stage",
      "Skills, groups and professional interests",
      "Geography and language alignment",
      "Audience exclusions and overlap controls",
    ],
    icon: BriefcaseBusiness,
  },
  {
    eyebrow: "Campaign and funnel architecture",
    title: "Separate awareness, consideration and lead programmes",
    description:
      "Campaigns are organised by audience, offer, funnel stage, geography and conversion path so performance remains diagnosable.",
    points: [
      "Cold, warm and customer-audience separation",
      "Brand, content and demand-generation roles",
      "Lead Gen Form versus website conversion paths",
      "Offer and service segmentation",
      "Budget ownership by business priority",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Creative and content strategy",
    title: "Use business-relevant ideas instead of generic promotion",
    description:
      "Creative concepts are developed around professional challenges, evidence, expertise, customer outcomes and buying-stage questions.",
    points: [
      "Single-image and video concepts",
      "Document and carousel storytelling",
      "Executive and expert-led content",
      "Proof, case study and outcome messages",
      "Offer and CTA testing",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Lead Gen Forms",
    title: "Reduce response friction without sacrificing qualification",
    description:
      "Native forms are designed around the minimum profile and custom information needed to route, qualify and follow up effectively.",
    points: [
      "Prefilled profile and contact fields",
      "Custom qualification questions",
      "Hidden campaign and source fields",
      "Thank-you message and destination",
      "CRM or lead-delivery planning",
    ],
    icon: FormInput,
  },
  {
    eyebrow: "Website conversion campaigns",
    title: "Use landing pages when the offer needs deeper explanation",
    description:
      "Website journeys are aligned with the ad promise, audience, proof requirements, form experience and conversion measurement.",
    points: [
      "Ad-to-page message continuity",
      "B2B landing-page hierarchy",
      "Form, booking and demo journeys",
      "Insight Tag and conversion setup",
      "Qualified website-lead feedback",
    ],
    icon: MousePointerClick,
  },
  {
    eyebrow: "CRM and pipeline optimisation",
    title: "Connect professional acquisition with sales outcomes",
    description:
      "Lead source, campaign context, sales qualification, opportunities and customers are connected where the CRM and technical setup allow.",
    points: [
      "Lead and source-field standards",
      "Sales acceptance and rejection reasons",
      "Qualified-lead conversion feedback",
      "Opportunity and pipeline stages",
      "Revenue and customer outcomes",
    ],
    icon: Workflow,
  },
];

const CAMPAIGN_MODELS = [
  {
    title: "Content demand generation",
    description:
      "Build credibility and audience engagement through reports, documents, webinars, videos and expert viewpoints.",
    points: [
      "Document and video campaigns",
      "Research and insight offers",
      "Engagement and viewer audiences",
      "Content-to-lead progression",
    ],
    icon: MessageSquareText,
  },
  {
    title: "Demo and consultation leads",
    description:
      "Reach relevant professional audiences with high-value offers tied to a clear sales qualification journey.",
    points: [
      "Demo and consultation offers",
      "Website or native lead forms",
      "Role and company qualification",
      "Sales response and opportunity feedback",
    ],
    icon: UserCheck,
  },
  {
    title: "Account-based campaigns",
    description:
      "Use company lists, decision-maker audiences and stage-specific content to support named-account acquisition.",
    points: [
      "Company-list Matched Audiences",
      "Buying-committee role mapping",
      "Account and persona creative",
      "Account engagement and pipeline context",
    ],
    icon: Building2,
  },
  {
    title: "Event and webinar acquisition",
    description:
      "Promote business events, webinars, reports and sessions with relevant audience filters and post-registration nurture.",
    points: [
      "Registration-focused campaigns",
      "Lead Gen Form or landing-page paths",
      "Attendee and no-show segmentation",
      "Post-event remarketing",
    ],
    icon: Users,
  },
];

const AUDIENCE_LAYERS = [
  {
    title: "Saved professional audiences",
    description:
      "Build reusable audiences using LinkedIn member attributes aligned with the role, company and market.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Company Matched Audiences",
    description:
      "Use eligible company lists to reach named organisations and analyse matched versus unmatched account coverage.",
    icon: Building2,
  },
  {
    title: "Contact Matched Audiences",
    description:
      "Use eligible first-party contact data for customer, prospect, exclusion and nurture audiences subject to rights and consent.",
    icon: Users,
  },
  {
    title: "Website and engagement audiences",
    description:
      "Create retargeting groups from eligible website, video, form, event and content interactions.",
    icon: MousePointerClick,
  },
];

const AUDIENCE_CONTROLS = [
  {
    title: "Buying committee coverage",
    text: "Audiences include the roles that influence, evaluate and approve the purchase rather than one job title alone.",
  },
  {
    title: "Audience scale",
    text: "Targeting precision is balanced with sufficient audience size, delivery opportunity and campaign budget.",
  },
  {
    title: "Exclusions",
    text: "Employees, existing customers, converted leads and unsuitable companies are excluded where they should not receive acquisition spend.",
  },
  {
    title: "Matched-audience governance",
    text: "Company and contact lists use clear ownership, refresh schedules, lawful data use and consistent naming.",
  },
];

const FORM_LAYERS = [
  {
    title: "Profile fields",
    description:
      "Use relevant prefilled professional and contact information that helps sales understand the prospect.",
    icon: UserCheck,
  },
  {
    title: "Qualification questions",
    description:
      "Ask only the custom questions needed to evaluate requirement, timing, company fit or routing.",
    icon: Filter,
  },
  {
    title: "Hidden fields",
    description:
      "Pass campaign, source, offer or operational metadata into lead reports and connected systems.",
    icon: Layers3,
  },
  {
    title: "Handoff and response",
    description:
      "Deliver leads quickly with the form answers, campaign context and follow-up expectations the sales team needs.",
    icon: MailCheck,
  },
];

const MEASUREMENT_CAPABILITIES = [
  {
    eyebrow: "Insight Tag",
    title: "Measure website actions and build eligible website audiences",
    description:
      "The LinkedIn Insight Tag supports website conversion tracking, campaign reporting, retargeting and aggregate audience insights where policy and privacy requirements allow.",
    points: [
      "Tag implementation and status review",
      "Website conversion configuration",
      "Website retargeting audiences",
      "Audience insights readiness",
      "Sensitive-page and consent review",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Conversions API",
    title: "Send eligible conversion events from server or partner systems",
    description:
      "Conversions API can support broader funnel measurement and reduce reliance on browser-only signals when implementation and data governance are appropriate.",
    points: [
      "Direct or partner integration planning",
      "Event definition and mapping",
      "Hashed identifier readiness",
      "Event deduplication requirements",
      "Source health and diagnostics",
    ],
    icon: Workflow,
  },
  {
    eyebrow: "CRM conversion feedback",
    title: "Use downstream lead stages as campaign signals",
    description:
      "Connected CRM outcomes can help distinguish submitted leads from qualified leads, contacts, opportunities and customers.",
    points: [
      "Lead and qualified-lead stages",
      "Contact and opportunity outcomes",
      "Sales rejection and loss reasons",
      "Pipeline value and revenue",
      "CRM data completeness review",
    ],
    icon: LineChart,
  },
  {
    eyebrow: "Attribution and conversion windows",
    title: "Interpret click and view contribution with sales-cycle context",
    description:
      "Conversion windows and attribution reports are reviewed alongside analytics and CRM data so platform credit is not treated as the only source of truth.",
    points: [
      "Post-click conversion context",
      "View-through conversion context",
      "Sales-cycle and lookback alignment",
      "Platform versus CRM comparison",
      "Incrementality-test readiness",
    ],
    icon: BarChart3,
  },
];

const QUALITY_CONTROLS = [
  {
    title: "Qualified-conversion goals",
    text: "Campaign decisions move toward qualified leads, opportunities and customers when enough reliable CRM feedback is available.",
  },
  {
    title: "Cost and deal-value alignment",
    text: "LinkedIn media costs are evaluated against expected contract value, gross margin, close rate and sales-cycle length.",
  },
  {
    title: "Creative relevance",
    text: "Ads speak to the professional role, company context and business problem instead of using one generic message for all audiences.",
  },
  {
    title: "Sales follow-up readiness",
    text: "Lead volume is not scaled when routing, response time, qualification and CRM disposition cannot support additional demand.",
  },
];

const REJECTED_TACTICS = [
  "Targeting one narrow job title without buying-committee context",
  "Judging campaigns only by the cheapest Lead Gen Form submission",
  "Using broad professional audiences without exclusion controls",
  "Sending every audience the same generic company advertisement",
  "Collecting unnecessary form fields without a qualification purpose",
  "Uploading customer data without appropriate rights or consent",
  "Ignoring sales acceptance, opportunities and pipeline value",
  "Guaranteeing fixed lead volume or cost per opportunity",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the buying committee and commercial outcome",
    description:
      "We confirm target organisations, roles, seniority, markets, deal value, sales cycle, qualification criteria and the desired conversion.",
    timing: "Discovery",
    output: "B2B audience and KPI framework",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Map audiences, demand stages and offers",
    description:
      "Professional attributes, Matched Audiences, content themes, offers, funnel stages and exclusions are organised.",
    timing: "Strategy",
    output: "Audience, offer and funnel map",
    icon: Target,
  },
  {
    number: "03",
    title: "Design creative and conversion journeys",
    description:
      "Ads, documents, video, Lead Gen Forms, landing pages, qualification questions and thank-you journeys are prepared.",
    timing: "Creative planning",
    output: "LinkedIn asset and conversion matrix",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Build campaigns and measurement sources",
    description:
      "Campaign Manager structure, audiences, bids, budgets, forms, Insight Tag, conversions and CRM delivery requirements are configured.",
    timing: "Setup",
    output: "Launch-ready LinkedIn campaigns",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Launch and review delivery and lead quality",
    description:
      "Audience delivery, cost, engagement, form completion, website conversions, lead validity and sales response are monitored.",
    timing: "Launch phase",
    output: "Audience and lead-quality baseline",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Optimise pipeline contribution",
    description:
      "Audiences, creative, offers, forms, bids and budgets are refined using qualified-lead, opportunity and revenue evidence.",
    timing: "Ongoing",
    output: "Optimisation report and B2B growth backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Audience delivery",
    description:
      "Understand which professional and company segments received spend and engaged with the campaign.",
    metrics: [
      "Reach, impressions and frequency",
      "Audience and company attributes",
      "Matched-audience delivery",
      "Geography and device patterns",
    ],
    icon: Users,
  },
  {
    title: "Creative and content response",
    description:
      "Compare messages, formats and offers to identify which business themes create useful engagement.",
    metrics: [
      "Click and engagement rate",
      "Video and document interaction",
      "Lead Gen Form completion",
      "Creative fatigue and refresh needs",
    ],
    icon: Sparkles,
  },
  {
    title: "Lead and sales quality",
    description:
      "Separate form submissions from genuine, suitable and sales-accepted opportunities.",
    metrics: [
      "Valid and qualified lead rate",
      "Cost per qualified lead",
      "Sales acceptance and rejection",
      "Meeting or opportunity progression",
    ],
    icon: UserCheck,
  },
  {
    title: "Pipeline and account impact",
    description:
      "Connect campaign activity with target-account engagement, opportunities, pipeline value and revenue where data allows.",
    metrics: [
      "Engaged target accounts",
      "Opportunity and pipeline value",
      "Customer and revenue outcomes",
      "Budget and scaling recommendations",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in your LinkedIn Ads service?",
    answer:
      "The service can include B2B strategy, professional audience research, Matched Audiences, campaign setup, creative planning, Lead Gen Forms, website conversions, Insight Tag, Conversions API planning, CRM feedback, optimisation and reporting.",
  },
  {
    question: "Which businesses are suitable for LinkedIn Ads?",
    answer:
      "LinkedIn Ads are often suitable for B2B products and services with identifiable professional audiences and enough lead or contract value to support the platform’s media costs. Suitability depends on audience size, offer, sales cycle and conversion economics.",
  },
  {
    question: "What targeting options can LinkedIn Ads use?",
    answer:
      "Campaigns can use professional and company attributes such as role, function, seniority, skills, industry, company size and geography, along with eligible saved and Matched Audiences.",
  },
  {
    question: "What are LinkedIn Matched Audiences?",
    answer:
      "Matched Audiences are custom audience segments built from eligible sources such as company lists, contact lists, website retargeting, engagement data, third-party integrations or predictive audiences, subject to current account and regional availability.",
  },
  {
    question: "What are LinkedIn Lead Gen Forms?",
    answer:
      "Lead Gen Forms are native forms attached to eligible LinkedIn ads. They can prefill professional and contact information from a member’s LinkedIn profile and can include custom and hidden fields for qualification and routing.",
  },
  {
    question: "Should we use Lead Gen Forms or a landing page?",
    answer:
      "Lead Gen Forms can reduce friction, while landing pages allow deeper explanation, proof and website-based conversion experiences. We test or select the route according to offer complexity, qualification needs and downstream lead quality.",
  },
  {
    question: "What does the LinkedIn Insight Tag do?",
    answer:
      "The Insight Tag is website code used for campaign reporting, website conversions, retargeting audiences and aggregate audience insights. It must be implemented according to LinkedIn policy, privacy and consent requirements.",
  },
  {
    question: "Can LinkedIn Ads use CRM data for optimisation?",
    answer:
      "Yes, depending on the CRM, integration method and account setup. Leads, qualified leads, contacts, opportunities and other eligible outcomes can provide stronger downstream campaign feedback.",
  },
  {
    question: "How do you measure LinkedIn Ads performance?",
    answer:
      "Measurement can include reach, engagement, Lead Gen Form completion, website conversions, valid leads, qualified leads, sales acceptance, meetings, opportunities, pipeline value and customers.",
  },
  {
    question: "Do you guarantee a fixed number of LinkedIn leads?",
    answer:
      "No responsible provider can guarantee fixed lead or pipeline outcomes because performance depends on audience size, competition, budget, offer, creative, conversion experience, sales response and data quality. We provide transparent optimisation around agreed commercial goals.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Ads Services",
  serviceType: "LinkedIn B2B Advertising Management",
  description:
    "LinkedIn Ads services covering professional audience targeting, Matched Audiences, Lead Gen Forms, website conversions, Insight Tag, CRM feedback, optimisation and B2B pipeline reporting.",
  url: "https://www.brainadz.marketing/services/linkedin-ads",
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
    name: "LinkedIn Ads Capabilities",
    itemListElement: LINKEDIN_CAPABILITIES.map((capability) => ({
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

export default function LinkedInAdsServicesPage() {
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
          src="/performance-marketing/linkedin-ads-hero.jpg"
          alt="LinkedIn Ads campaign management for B2B audiences, leads and pipeline"
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
            <span className="text-white">LinkedIn Ads Services</span>
          </nav>

          <h1 className="mt-7 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            LinkedIn Ads Services
          </h1>

          <div className="mt-auto max-w-[900px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Reach relevant professional audiences, generate qualified B2B demand and
              connect LinkedIn campaigns with sales acceptance, pipeline and revenue.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan your LinkedIn campaigns
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="LinkedIn Ads page navigation"
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
              LinkedIn Ads overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Turn professional targeting into qualified B2B pipeline
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                LinkedIn Ads help businesses reach professional audiences using role,
                company and industry context. BrainADZ connects audience strategy,
                business-relevant creative, native forms, website conversions and CRM
                outcomes into one B2B acquisition programme.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Campaigns are evaluated beyond platform lead totals. Validity, sales
                acceptance, opportunity progression, pipeline value and revenue are
                used wherever possible to guide future spend.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Review your B2B opportunity
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/linkedin-ads-overview.jpg"
                  alt="LinkedIn Ads dashboard for professional audiences, leads and pipeline"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Effective LinkedIn advertising connects professional reach with lead
                quality, opportunity creation and account engagement.
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
                  <p className="mt-2 text-[14px] leading-6 text-black/58">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section
        id="b2b-funnel"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  B2B campaign funnel
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Support the complete journey from professional awareness to pipeline
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              B2B audiences often need education, internal alignment and proof before
              they are ready for a sales conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {B2B_FUNNEL.map((item) => {
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
                  <h3 className="mt-10 text-[25px] font-semibold text-white">
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
                  LinkedIn Ads capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect professional audiences, offers and sales intelligence
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Audience precision alone is not enough. Creative, conversion paths and
              downstream sales feedback determine whether targeting creates useful demand.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {LINKEDIN_CAPABILITIES.map((capability) => {
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

                  <p className="mt-6 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      {/* Campaign models */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  B2B campaign models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Match the campaign to the offer and sales journey
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Content offers, demos, account-based programmes and events need
              different audience, creative and qualification systems.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CAMPAIGN_MODELS.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="flex h-full flex-col rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight text-black">
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
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      {/* Audiences */}
      <section
        id="audiences"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/linkedin-ads-audience-strategy.jpg"
                alt="LinkedIn professional audience and Matched Audience strategy"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Audience strategy
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Reach buying committees, target accounts and engaged professionals
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Professional targeting is organised around the people involved in the
              decision, the companies they work for and the signals they have already created.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {AUDIENCE_LAYERS.map((item) => {
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

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AUDIENCE_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-5"
                >
                  <span className="text-[12px] font-semibold text-[#E1122B]">
                    A{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[18px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Forms */}
      <section
        id="lead-gen-forms"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Lead Gen Forms
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Reduce form friction while protecting sales qualification
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Native forms can improve completion, but fields, consent, hidden
              metadata, lead delivery and sales response determine the commercial quality.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FORM_LAYERS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E1122B] text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-semibold leading-tight text-black">
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

      {/* Measurement */}
      <section
        id="measurement"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Measurement and CRM feedback
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect LinkedIn delivery with website actions and pipeline stages
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Insight Tag, server or partner data and CRM outcomes can strengthen
              measurement when implementation, consent and data quality are reliable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MEASUREMENT_CAPABILITIES.map((capability) => {
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

                  <p className="mt-6 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                    {capability.description}
                  </p>

                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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

      {/* Quality controls */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                B2B acquisition controls
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Optimise for useful pipeline, not inexpensive form volume
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              LinkedIn’s professional context can justify higher media costs only when
              audience fit, deal value and sales outcomes support the investment.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Review your LinkedIn account
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6"
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
                  <CircleAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                    LinkedIn campaign discipline
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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1122B]" />
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                LinkedIn Ads process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From buying-committee mapping to pipeline optimisation
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Audience, content, forms, website actions, CRM feedback and budget
              decisions remain connected through one B2B growth roadmap.
            </p>
          </div>

          <div className="border-t border-black/10">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
                >
                  <div className="flex items-start justify-between sm:block">
                    <span className="text-[24px] font-medium text-[#E1122B]">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold text-black sm:text-[28px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-black/58 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div>
                      <dt className="text-[12px] uppercase text-black/42">Phase</dt>
                      <dd className="mt-2 text-[14px] text-black/68">
                        {step.timing}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase text-black/42">Output</dt>
                      <dd className="mt-2 text-[14px] text-black/68">
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
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  LinkedIn Ads reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect professional engagement with lead, account and pipeline quality
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains which audiences and offers create qualified demand
              and where the next B2B media budget should move.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/linkedin-ads-reporting-dashboard.jpg"
                  alt="LinkedIn Ads reporting dashboard for professional audiences, leads and pipeline"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                LinkedIn reporting should connect audience delivery with creative
                response, qualified leads, opportunities and account impact.
              </figcaption>
            </figure>

            <div className="space-y-4">
              {REPORTING_AREAS.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)] sm:p-7"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-[24px] font-semibold leading-tight text-black">
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
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
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
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                LinkedIn Ads FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before launching B2B campaigns
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand targeting, Matched Audiences, forms, Insight Tag, CRM data,
              measurement and lead quality before starting.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white"
            >
              Ask another question
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="border-t border-black/10">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group border-b border-black/10">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/55 transition-all duration-300 group-open:rotate-45 group-open:bg-[#fff1f1] group-open:text-[#E1122B]">
                    <span className="relative block h-4 w-4">
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