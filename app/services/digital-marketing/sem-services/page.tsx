/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePattern, { type PatternConfig } from "../_components/ServicePattern";

export const metadata: Metadata = {
  title: "SEM Services | Search Engine Marketing | BrainADZ",
  description: "Search engine marketing services covering paid search strategy, keyword targeting, campaign management, landing-page alignment and conversion reporting.",
  keywords: ["SEM services", "search engine marketing", "Google Ads management", "paid search agency", "PPC campaign management"],
  alternates: { canonical: "/services/digital-marketing/sem-services" },
  openGraph: {
    title: "SEM Services | BrainADZ Marketing",
    description: "Capture high-intent search demand with focused campaigns built for measurable growth.",
    type: "website",
    images: [{ url: "/image1.jpeg", alt: "Search engine marketing campaign planning" }],
  },
};

const SEM_FAQS = [
  { question: "What is included in your SEM service?", answer: "The scope can include account audit, keyword research, campaign structure, ad copy, audience strategy, conversion tracking guidance, bid and budget management, landing-page recommendations, optimization and reporting. The exact mix depends on your platform, market and objective." },
  { question: "What is the difference between SEM and SEO?", answer: "SEM usually refers to paid visibility on search engines, where campaigns can begin reaching selected queries after launch. SEO improves organic visibility over time. They use different methods but can share keyword, landing-page and search-intent insights." },
  { question: "Which advertising platforms do you manage?", answer: "Our core search work can include Google Ads and Microsoft Advertising, with supporting display, remarketing, shopping or video formats when they match the campaign goal. Recommendations depend on audience demand, geography and available budget." },
  { question: "Is advertising spend included in your management fee?", answer: "No. Media spend is paid directly to the advertising platform and remains separate from strategy, setup and management fees. The recommended budget is discussed transparently around search demand, competition and commercial targets." },
  { question: "Do you create landing pages for SEM campaigns?", answer: "Landing-page review and recommendations can be included, and our web team can design or develop dedicated pages when needed. Campaign performance is stronger when the ad promise, page message, user experience and conversion action stay aligned." },
  { question: "How quickly can paid search generate results?", answer: "Campaigns can begin collecting traffic and conversion data after approval and launch, but reliable optimization requires enough search volume and meaningful conversion information. Timing varies with competition, budget, offer, tracking and landing-page quality." },
  { question: "How do you prevent wasted ad spend?", answer: "We use focused campaign structure, relevant match types, negative keywords, location and schedule controls, search-term review, conversion signals and ongoing bid or budget adjustments. No campaign eliminates all testing, but every decision should produce useful learning." },
  { question: "How do you report SEM performance?", answer: "Reporting connects spend with impressions, clicks, search terms, conversions, cost per lead or sale and available revenue signals. We explain changes, learning and next actions instead of presenting platform numbers without context." },
];

const CONFIG: PatternConfig = {
  serviceName: "SEM",
  navLabel: "Campaigns",
  overview: {
    heading: "Capture demand when customers are actively searching",
    description: "Search engine marketing puts your offer in front of people already expressing intent. BrainADZ connects keyword strategy, focused ads, useful landing experiences and performance data to turn paid visibility into measurable business opportunities.",
    cta: "Build your search strategy",
    image: "/perfomance.png",
    imageAlt: "Target and performance system for search campaigns",
    imageContain: true,
    benefits: [
      { title: "High-intent targeting", description: "Prioritize keywords and audiences that signal a meaningful need for your product or service.", icon: "target" },
      { title: "Controlled media spend", description: "Structure budgets, bids, locations and schedules around campaign priorities and real demand.", icon: "conversion" },
      { title: "Relevant ad experiences", description: "Connect each search theme with focused messaging and a landing experience that matches intent.", icon: "search" },
      { title: "Measurable acquisition", description: "Track clicks, leads, sales and cost signals to guide smarter optimization decisions.", icon: "analytics" },
    ],
  },
  features: {
    heading: "Built for relevant traffic, efficient spend and real conversions",
    items: [
      { title: "Search strategy grounded in intent", description: "We begin with the business outcome and the language customers use so campaigns focus on valuable searches instead of broad traffic alone.", points: ["Account, competitor and search-demand review", "Keyword themes, intent and negative-keyword planning", "Geography, audience and measurable campaign goals"], image: "/perfomance.png", imageAlt: "Search campaign targeting strategy", imageContain: true },
      { title: "Focused campaign architecture", description: "Keywords, ads and budgets are organized into clear themes that improve relevance, simplify analysis and create room for controlled testing.", points: ["Campaign and ad-group structure", "Match types, budgets, bidding and schedules", "Brand, non-brand and competitor separation"], image: "/image1.jpeg", imageAlt: "Paid media campaign architecture" },
      { title: "Ads aligned with landing pages", description: "The search query, ad promise and landing-page message work together so visitors understand the offer and next action without friction.", points: ["Responsive search ad copy and assets", "Offer, CTA and landing-page alignment", "Conversion path and experience recommendations"], image: "/homepage/about.png", imageAlt: "Search ad and landing page alignment" },
      { title: "Optimization guided by conversion data", description: "Search terms, bids, devices, audiences and conversion signals are reviewed continuously to reduce waste and strengthen performance.", points: ["Search-term and negative-keyword review", "Budget, bid and audience refinement", "Cost, conversion and quality performance reporting"], image: "/certificate/google.png", imageAlt: "Google advertising and performance expertise", imageContain: true },
    ],
  },
  channels: {
    eyebrow: "Campaigns",
    heading: "The right campaign for every kind of search demand",
    intro: "Different formats support different stages of discovery and decision-making. We select the campaign type around intent, available assets, tracking and the action your business needs.",
    items: [
      { name: "Search Ads", label: "Paid search campaigns", title: "Reach customers at the moment they express intent", description: "Use keyword-led ads to appear for relevant searches and guide qualified prospects toward a focused product, service or enquiry experience.", capabilities: ["Keyword, match-type and search-term strategy", "Responsive ads, extensions and landing alignment", "Bid, budget and conversion optimization"], image: "/perfomance.png", imageAlt: "Paid search targeting and optimization", icon: "search", imageContain: true },
      { name: "Shopping", label: "Shopping campaigns", title: "Put the right product in front of active buyers", description: "Connect product data, campaign structure and commercial priorities so shoppers can compare relevant products before visiting the store.", capabilities: ["Feed and product-group recommendations", "Category, margin and priority segmentation", "Revenue and return-focused optimization"], image: "/homepage/about.png", imageAlt: "Shopping campaign management", icon: "conversion" },
      { name: "Display", label: "Display and remarketing", title: "Stay visible across a longer consideration journey", description: "Use audience and contextual signals to re-engage visitors, support awareness and reinforce important campaign messages beyond search results.", capabilities: ["Audience, placement and exclusion planning", "Responsive display creative coordination", "Frequency and assisted-conversion review"], image: "/image1.jpeg", imageAlt: "Display advertising campaign", icon: "layout" },
      { name: "Performance", label: "Performance campaigns", title: "Coordinate reach around a clear conversion objective", description: "Use automation responsibly with strong conversion signals, creative inputs, audience context and transparent performance review.", capabilities: ["Goal, asset and audience-signal setup", "Budget and conversion-value guidance", "Channel insight and campaign refinement"], image: "/certificate/google.png", imageAlt: "Google campaign performance management", icon: "gauge", imageContain: true },
    ],
  },
  process: {
    heading: "A disciplined path from search intent to profitable learning",
    intro: "Campaigns move through a clear operating rhythm so targeting, creative, budget, tracking and optimization remain connected to the business goal.",
    cta: "Plan your SEM campaign",
    steps: [
      { number: "01", title: "Audit demand and readiness", description: "We review the offer, market, existing account, search demand, competitors, landing pages, tracking and commercial expectations.", timing: "Days 1-3", output: "Audit and opportunity brief", icon: "research" },
      { number: "02", title: "Research and structure", description: "We group keywords by intent, define campaign types, audiences, locations, budgets, bidding approach and success metrics.", timing: "Week 1", output: "Campaign and keyword plan", icon: "search" },
      { number: "03", title: "Create and configure", description: "Our team develops ad messaging and assets, builds the campaigns, applies exclusions and aligns each route with the right landing page.", timing: "Setup phase", output: "Launch-ready campaigns", icon: "settings" },
      { number: "04", title: "Launch and control", description: "Campaigns go live after quality checks while search terms, spend, delivery and early conversion signals are monitored closely.", timing: "Ongoing", output: "Controlled paid traffic", icon: "gauge" },
      { number: "05", title: "Optimize and scale", description: "We refine queries, bids, budgets, ads, audiences and landing recommendations based on meaningful performance patterns.", timing: "Weekly / monthly", output: "Report and growth plan", icon: "analytics" },
    ],
  },
  faq: { heading: "Questions before we go live?", intro: "Here are the practical details businesses usually want to understand before starting a search engine marketing engagement.", items: SEM_FAQS },
};

const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: SEM_FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const SERVICE_SCHEMA = { "@context": "https://schema.org", "@type": "Service", name: "Search Engine Marketing Services", serviceType: "Paid Search and SEM Campaign Management", provider: { "@type": "Organization", name: "BrainADZ Marketing" }, areaServed: "India" };

export default function SemServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img src="/image1.jpeg" alt="Search engine marketing campaign strategy" className="absolute inset-0 h-full w-full object-cover object-[center_38%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.8)_32%,rgba(0,0,0,0.4)_58%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.3)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] font-medium leading-none"><Link href="/" className="text-[#E1122B] transition hover:text-white">Home</Link><span className="text-white/70">/</span><span className="text-white">SEM Services</span></nav>
          <h1 className="mt-7 max-w-[850px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">SEM Services</h1>
          <div className="mt-auto max-w-[700px] pb-6 sm:pb-10 lg:pb-12"><p className="text-[14px] leading-[1.38] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[20px]">Reach high-intent customers with focused search campaigns built for relevant traffic, controlled spend and measurable growth.</p><Link href="/contact" className="mt-8 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black">Capture more search demand<ArrowRight className="h-5 w-5" strokeWidth={1.8} /></Link></div>
        </div>
      </section>
      <ServicePattern config={CONFIG} />
    </main>
  );
}
