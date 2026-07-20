/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Eye,
  FileSearch,
  FormInput,
  Gauge,
  Layers3,
  ListChecks,
  MessageSquareText,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Landing Page Optimization Services | Conversion Rate Improvement | BrainADZ",
  description:
    "Landing page optimization services by BrainADZ cover message match, UX, mobile performance, forms, trust, analytics, testing and qualified-conversion improvement.",
  alternates: {
    canonical: "/services/landing-page-optimization",
  },
  openGraph: {
    title: "Landing Page Optimization Services | BrainADZ Marketing",
    description:
      "Improve paid campaign conversion through stronger message match, page hierarchy, mobile UX, forms, trust and structured experimentation.",
    type: "website",
    url: "/services/landing-page-optimization",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Optimization Services | BrainADZ Marketing",
    description:
      "Landing page UX, message match, form optimisation, analytics, testing and qualified-conversion improvement.",
  },
};

const PAGE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Framework", href: "#framework" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "UX & Mobile", href: "#ux-mobile" },
  { label: "Forms", href: "#forms" },
  { label: "Testing", href: "#testing" },
  { label: "Process", href: "#process" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQs", href: "#faqs" },
];

const OVERVIEW_BENEFITS = [
  {
    title: "Improve message continuity",
    description:
      "Carry the same intent, offer and promise from the ad or keyword into the landing-page experience.",
    icon: MessageSquareText,
  },
  {
    title: "Reduce conversion friction",
    description:
      "Remove avoidable confusion, unnecessary fields, weak hierarchy and poor mobile interactions from the user journey.",
    icon: MousePointerClick,
  },
  {
    title: "Increase qualified action",
    description:
      "Improve the rate of useful enquiries, bookings, purchases or sign-ups rather than chasing low-quality form volume.",
    icon: Target,
  },
  {
    title: "Create a testing system",
    description:
      "Use analytics, hypotheses and controlled experiments to improve decisions over time instead of relying on opinion.",
    icon: TrendingUp,
  },
];

const FRAMEWORK_STAGES = [
  {
    number: "01",
    title: "Message match",
    description:
      "The page immediately confirms that the visitor has reached the right offer, product, service or solution.",
    focus: "Ad-to-page continuity",
    icon: Search,
  },
  {
    number: "02",
    title: "Value clarity",
    description:
      "The primary benefit, audience, differentiation and expected outcome are easy to understand without excessive effort.",
    focus: "Why the offer matters",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Trust and proof",
    description:
      "Relevant evidence, credentials, product details, testimonials and process visibility reduce uncertainty.",
    focus: "Why the visitor should believe",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Conversion path",
    description:
      "The page provides a clear, appropriate next action with the right amount of information and friction.",
    focus: "How the visitor responds",
    icon: MousePointerClick,
  },
];

const OPTIMIZATION_CAPABILITIES = [
  {
    eyebrow: "Landing-page audit",
    title: "Identify the barriers between paid traffic and conversion",
    description:
      "We review message match, structure, content, UX, forms, trust, speed, mobile behaviour, tracking and downstream lead quality.",
    points: [
      "Ad and keyword message-match review",
      "Page hierarchy and clarity assessment",
      "Mobile and responsive UX review",
      "Form and conversion-path analysis",
      "Tracking and analytics validation",
    ],
    icon: FileSearch,
  },
  {
    eyebrow: "Offer and messaging",
    title: "Clarify the audience, value and next step",
    description:
      "Headlines, supporting copy, benefits, proof, objections and calls to action are organised around the visitor’s intent and stage.",
    points: [
      "Hero message and headline refinement",
      "Benefit and differentiation hierarchy",
      "Objection and risk-reduction content",
      "CTA wording and placement",
      "Campaign-specific message variations",
    ],
    icon: MessageSquareText,
  },
  {
    eyebrow: "Page structure and hierarchy",
    title: "Guide attention through a clear decision sequence",
    description:
      "Sections are prioritised so users can understand the offer, evaluate proof and act without navigating a cluttered or repetitive page.",
    points: [
      "Above-the-fold information hierarchy",
      "Section order and content flow",
      "Scannable headings and supporting copy",
      "Primary versus secondary actions",
      "Navigation and distraction controls",
    ],
    icon: Layers3,
  },
  {
    eyebrow: "Form and interaction optimisation",
    title: "Balance qualification with completion effort",
    description:
      "Forms, calls, chat, booking and purchase actions are designed around the minimum information needed for the intended outcome.",
    points: [
      "Field and step reduction",
      "Required versus optional information",
      "Validation and error-state review",
      "Multi-step and conditional form planning",
      "Confirmation and next-step messaging",
    ],
    icon: FormInput,
  },
  {
    eyebrow: "Trust and conversion proof",
    title: "Place the right evidence near the point of doubt",
    description:
      "Testimonials, reviews, case examples, credentials, guarantees, process details and product proof are selected according to the visitor’s concerns.",
    points: [
      "Relevant testimonials and reviews",
      "Case studies and outcome evidence",
      "Certifications and credibility signals",
      "Process, delivery and support clarity",
      "Privacy, security and risk reduction",
    ],
    icon: ShieldCheck,
  },
  {
    eyebrow: "Analytics and experimentation",
    title: "Turn behaviour data into structured improvement",
    description:
      "Tracking, event definitions, funnels, qualitative evidence and experiments are used to test specific conversion hypotheses.",
    points: [
      "Conversion and micro-event validation",
      "Funnel and drop-off analysis",
      "Heatmap and session-review planning",
      "Experiment hypothesis development",
      "Test documentation and learning backlog",
    ],
    icon: BarChart3,
  },
];

const PAGE_TYPES = [
  {
    title: "Lead generation pages",
    description:
      "Convert paid search and social traffic into calls, forms, messages, bookings and qualified sales enquiries.",
    points: [
      "Service and location message match",
      "Proof and qualification balance",
      "Call, form and booking paths",
      "Qualified-lead measurement",
    ],
    icon: Users,
  },
  {
    title: "Ecommerce product pages",
    description:
      "Improve product understanding, trust, variant selection, cart action and purchase confidence for paid traffic.",
    points: [
      "Product benefit and feature hierarchy",
      "Price, delivery and returns clarity",
      "Reviews and product proof",
      "Add-to-cart and checkout continuity",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Campaign microsites",
    description:
      "Create focused experiences for launches, events, offers, reports, webinars or limited campaign objectives.",
    points: [
      "Single-campaign information flow",
      "Offer-specific creative continuity",
      "Reduced navigation and distractions",
      "Campaign-level analytics",
    ],
    icon: Layers3,
  },
  {
    title: "B2B decision pages",
    description:
      "Support longer evaluation journeys using technical detail, credibility, use cases and high-value conversion paths.",
    points: [
      "Industry and role relevance",
      "Technical proof and specifications",
      "Case evidence and implementation clarity",
      "Demo, consultation and enquiry flows",
    ],
    icon: ClipboardCheck,
  },
];

const UX_LAYERS = [
  {
    title: "Mobile-first hierarchy",
    description:
      "Prioritise the message, CTA, proof and interaction flow for smaller screens instead of shrinking a desktop layout.",
    icon: Smartphone,
  },
  {
    title: "Visual focus",
    description:
      "Use spacing, contrast, typography, imagery and section rhythm to guide attention toward the most important content.",
    icon: Eye,
  },
  {
    title: "Interaction clarity",
    description:
      "Buttons, links, accordions, forms and sticky actions behave predictably and communicate what will happen next.",
    icon: MousePointerClick,
  },
  {
    title: "Performance readiness",
    description:
      "Image weight, scripts, layout shifts and slow interactions are reviewed so page speed does not undermine paid traffic.",
    icon: Gauge,
  },
];

const FORM_LAYERS = [
  {
    title: "Information need",
    description:
      "Collect only the details required to route, qualify or complete the intended transaction at that stage.",
    icon: ListChecks,
  },
  {
    title: "Field experience",
    description:
      "Labels, input types, validation, autofill and mobile keyboards should make completion clear and efficient.",
    icon: FormInput,
  },
  {
    title: "Expectation setting",
    description:
      "Explain what happens after submission, how soon the user will hear back and what information they should prepare.",
    icon: TimerReset,
  },
  {
    title: "Privacy and consent",
    description:
      "Consent language, privacy links and data-use explanations should be appropriate to the form and business requirements.",
    icon: ShieldCheck,
  },
];

const TESTING_LAYERS = [
  {
    title: "Research",
    description:
      "Use analytics, campaign data, sales feedback, user behaviour and page review to identify the most important friction.",
  },
  {
    title: "Hypothesis",
    description:
      "Define the specific page change, expected behaviour and business reason before creating a test.",
  },
  {
    title: "Experiment",
    description:
      "Run controlled A/B or sequential tests where traffic, tooling and risk make experimentation reliable.",
  },
  {
    title: "Quality check",
    description:
      "Review lead quality, revenue, form validity and downstream outcomes so a higher conversion rate does not create weaker results.",
  },
  {
    title: "Decision",
    description:
      "Adopt, reject or revise the variation using statistical and commercial evidence rather than preference.",
  },
  {
    title: "Learning backlog",
    description:
      "Document results and convert each test into the next prioritised hypothesis instead of restarting from zero.",
  },
];

const QUALITY_CONTROLS = [
  {
    title: "One primary outcome",
    text: "Every landing page has one clearly prioritised conversion goal, with secondary actions used only when they support the journey.",
  },
  {
    title: "Traffic-source context",
    text: "The page is evaluated by campaign, keyword, audience, device and intent so mixed traffic does not hide experience problems.",
  },
  {
    title: "Qualified conversion review",
    text: "Form volume, sales quality, order value and downstream outcomes are checked before declaring a page improvement successful.",
  },
  {
    title: "Technical validation",
    text: "Forms, events, redirects, confirmation states and mobile interactions are tested before paid traffic is increased.",
  },
];

const REJECTED_TACTICS = [
  "Changing multiple page elements without a clear hypothesis",
  "Optimising only for total form submissions",
  "Adding urgency or scarcity that the offer cannot support",
  "Hiding essential price, eligibility or process information",
  "Using pop-ups that block the primary mobile experience",
  "Removing qualification fields without reviewing lead quality",
  "Declaring a winner from very limited traffic or conversions",
  "Copying a competitor page without understanding user intent",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Define the page objective and conversion quality",
    description:
      "We confirm the campaign source, audience, offer, primary action, qualification requirements and downstream business outcome.",
    timing: "Discovery",
    output: "Landing-page goals and KPI framework",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Audit the current experience and data",
    description:
      "Message match, content, hierarchy, mobile UX, forms, speed, analytics, funnel drop-off and lead or sales feedback are reviewed.",
    timing: "Research",
    output: "Conversion friction and evidence audit",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Prioritise hypotheses and page changes",
    description:
      "Opportunities are scored by expected impact, evidence strength, implementation effort, traffic and business risk.",
    timing: "Strategy",
    output: "Prioritised optimisation roadmap",
    icon: Target,
  },
  {
    number: "04",
    title: "Design copy, UX and interaction improvements",
    description:
      "Page hierarchy, messaging, proof, forms, mobile behaviour and conversion actions are translated into implementation-ready requirements.",
    timing: "Design",
    output: "Optimised page specification",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Implement, test and validate tracking",
    description:
      "Changes are built, responsive states are checked and conversion events, forms and confirmation journeys are validated.",
    timing: "Implementation",
    output: "Quality-checked landing-page release",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Measure, experiment and expand learning",
    description:
      "Page performance and qualified outcomes are monitored, tests are evaluated and the next hypothesis backlog is updated.",
    timing: "Ongoing",
    output: "Experiment report and next-test backlog",
    icon: TrendingUp,
  },
];

const REPORTING_AREAS = [
  {
    title: "Traffic and intent",
    description:
      "Understand which campaigns, audiences, keywords and devices bring users to the page and how their behaviour differs.",
    metrics: [
      "Sessions and landing-page views",
      "Traffic source and campaign mix",
      "Device and location patterns",
      "Bounce, engagement and scroll context",
    ],
    icon: Search,
  },
  {
    title: "Conversion performance",
    description:
      "Measure the page’s ability to generate the primary action and identify where users leave the journey.",
    metrics: [
      "Conversion rate and completions",
      "Form start and completion rate",
      "Call, message or booking actions",
      "Step and funnel drop-off",
    ],
    icon: MousePointerClick,
  },
  {
    title: "Conversion quality",
    description:
      "Review whether improved page performance produces useful leads, purchases and revenue—not only more actions.",
    metrics: [
      "Valid and qualified lead rate",
      "Order value and revenue quality",
      "Spam, duplicate and rejection rate",
      "Cost per qualified conversion",
    ],
    icon: UserCheck,
  },
  {
    title: "Experiment decisions",
    description:
      "Document hypotheses, test results, confidence, business impact and the next recommended page improvement.",
    metrics: [
      "Control versus variation results",
      "Segment and device differences",
      "Commercial quality checks",
      "Next-test priority and rationale",
    ],
    icon: BarChart3,
  },
];

const FAQS = [
  {
    question: "What is included in Landing Page Optimization?",
    answer:
      "The service can include message-match review, copy and hierarchy improvements, UX and mobile analysis, form optimisation, trust and proof, page-speed recommendations, conversion tracking, testing strategy and qualified-conversion reporting.",
  },
  {
    question: "Is Landing Page Optimization the same as website redesign?",
    answer:
      "No. Landing Page Optimization focuses on improving a specific campaign or conversion experience. It may involve significant changes, but the work is driven by conversion evidence and user intent rather than a complete visual redesign of the website.",
  },
  {
    question: "Do you create new landing pages?",
    answer:
      "Yes. We can optimise an existing page or create a new campaign-specific landing page when the current website cannot provide sufficient message match, focus, tracking or conversion control.",
  },
  {
    question: "What should a landing page include?",
    answer:
      "The exact content depends on the offer, but most effective pages need a clear headline, value proposition, relevant proof, useful details, objection handling, a strong primary action and a mobile-friendly conversion path.",
  },
  {
    question: "How many form fields should a landing page use?",
    answer:
      "There is no universal number. The form should collect the minimum information required to complete, route or qualify the enquiry. Removing fields can improve completion, but it can also reduce lead quality if important qualification information is lost.",
  },
  {
    question: "Do you run A/B tests?",
    answer:
      "Yes, when the page has enough traffic, conversions, stable tracking and an appropriate testing tool. Where volume is limited, we use evidence-led sequential improvements and monitor results carefully instead of claiming statistical certainty.",
  },
  {
    question: "How do you measure landing-page success?",
    answer:
      "Measurement can include conversion rate, form completion, calls, bookings, purchases, qualified leads, revenue, cost per qualified conversion and experiment results. The primary metric is agreed according to the campaign goal.",
  },
  {
    question: "Can a faster page improve paid campaign performance?",
    answer:
      "Speed can reduce abandonment and improve user experience, especially on mobile. Its business impact depends on the current performance problem, page complexity, connection quality and the rest of the conversion experience.",
  },
  {
    question: "How quickly can landing-page improvements show results?",
    answer:
      "Changes can affect behaviour as soon as they are released, but reliable conclusions require enough traffic and conversions. Timing depends on campaign volume, conversion rate, test design, implementation quality and downstream lead or sales feedback.",
  },
  {
    question: "Do you guarantee a specific conversion-rate increase?",
    answer:
      "No responsible optimisation service can guarantee a fixed uplift because results depend on traffic quality, offer, pricing, brand trust, page experience, tracking and market conditions. We use evidence, testing and transparent reporting to improve the probability of better outcomes.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landing Page Optimization Services",
  serviceType: "Landing Page and Conversion Rate Optimization",
  description:
    "Landing page optimization services covering message match, UX, mobile experience, forms, trust, analytics, experimentation and qualified-conversion improvement.",
  url: "https://www.brainadz.marketing/services/landing-page-optimization",
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
    name: "Landing Page Optimization Capabilities",
    itemListElement: OPTIMIZATION_CAPABILITIES.map((capability) => ({
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

export default function LandingPageOptimizationServicesPage() {
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
          src="/performance-marketing/landing-page-optimization-hero.jpg"
          alt="Landing page optimization for paid campaign conversion and qualified leads"
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
            <span className="text-white">
              Landing Page Optimization Services
            </span>
          </nav>

          <h1 className="mt-7 max-w-[1120px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
            Landing Page Optimization Services
          </h1>

          <div className="mt-auto max-w-[870px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[14px] font-normal leading-[1.48] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">
              Improve paid campaign conversion through stronger message match,
              mobile-first UX, clearer forms, trusted proof and structured experimentation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Review your landing page
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky navigation */}
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav
          aria-label="Landing Page Optimization navigation"
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
              Landing-page overview
            </p>
          </div>

          <h2 className="mt-5 max-w-[1280px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
            Make the post-click experience continue the promise that earned the click
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Landing Page Optimization connects campaign intent with the page users
                see after the click. BrainADZ improves message continuity, hierarchy,
                trust, mobile usability, forms and measurement so the page supports
                the outcome the campaign is paying to generate.
              </p>
              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
                Success is evaluated beyond conversion rate. We review whether the
                additional leads, bookings or purchases remain valid, qualified and
                commercially useful before treating a change as an improvement.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
              >
                Find your conversion friction
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </Link>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/landing-page-optimization-overview.jpg"
                  alt="Landing page optimization overview showing campaign, page and conversion alignment"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Strong landing pages align campaign intent, page clarity, trust and
                conversion measurement.
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

      {/* Framework */}
      <section
        id="framework"
        className="scroll-mt-[164px] border-b border-black/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Conversion framework
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Help visitors understand, believe and act with less effort
              </h2>
            </div>
            <p className="max-w-[660px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Every high-performing landing page answers four questions quickly: Am I
              in the right place? Why does this matter? Why should I trust it? What do I do next?
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {FRAMEWORK_STAGES.map((item) => {
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
                  Optimization capabilities
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Improve the complete post-click conversion system
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Copy, UX, forms, trust, speed and analytics must work together. A
              stronger headline cannot repair a broken form or weak campaign-page match.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {OPTIMIZATION_CAPABILITIES.map((capability) => {
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

      {/* Page types */}
      <section className="border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Landing-page models
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Adapt the page to the conversion and buying journey
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Lead forms, ecommerce products, campaign microsites and B2B decisions
              require different information depth and conversion controls.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PAGE_TYPES.map((model) => {
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

      {/* UX & Mobile */}
      <section
        id="ux-mobile"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <img
                src="/performance-marketing/landing-page-ux-mobile.jpg"
                alt="Mobile landing page UX, visual hierarchy and conversion interaction"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </figure>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                UX and mobile optimisation
              </p>
            </div>
            <h2 className="mt-5 max-w-[880px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Design the page around the device and attention users actually have
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Mobile landing pages need stronger prioritisation, simpler interactions
              and faster access to the primary action. Desktop layouts should not be
              compressed without reconsidering the complete experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {UX_LAYERS.map((item) => {
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

      {/* Forms */}
      <section
        id="forms"
        className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Form optimisation
                </p>
              </div>
              <h2 className="mt-5 max-w-[1120px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Ask for enough information without creating unnecessary abandonment
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              A shorter form is not automatically better. Field requirements should
              reflect the value of the offer, qualification need and user expectation.
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

      {/* Testing */}
      <section
        id="testing"
        className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Experimentation system
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Turn landing-page changes into documented conversion learning
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              A/B testing is useful only when tracking, traffic, hypotheses and
              business-quality checks are strong enough to support a decision.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Build your testing roadmap
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </Link>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {TESTING_LAYERS.map((item, index) => (
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
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {QUALITY_CONTROLS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/10 bg-white p-6"
                >
                  <span className="text-[13px] font-semibold text-[#E1122B]">
                    C{String(index + 1).padStart(2, "0")}
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
                    Optimisation discipline
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
                Optimization process
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              From conversion friction to tested page improvement
            </h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">
              Campaign context, UX, implementation, tracking and experiment learning
              remain connected through one conversion roadmap.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B]"
            >
              Start your optimisation plan
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
                  Landing-page reporting
                </p>
              </div>
              <h2 className="mt-5 max-w-[1160px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
                Connect conversion improvement with traffic quality and business results
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
              Reporting explains which visitors convert, where friction remains and
              whether additional conversions maintain the required commercial quality.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <img
                  src="/performance-marketing/landing-page-testing-dashboard.jpg"
                  alt="Landing page optimization dashboard for traffic, conversion and experiments"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
                Landing-page reporting should connect user behaviour, conversion rate,
                quality and experiment decisions.
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
                Landing Page Optimization FAQs
              </p>
            </div>
            <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Practical answers before improving the post-click experience
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">
              Understand page scope, forms, mobile UX, testing, speed, conversion
              quality and measurement before starting.
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