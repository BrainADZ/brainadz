"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Mail, RefreshCw, ShoppingCart, UserPlus } from "lucide-react";
import { useState } from "react";
import { EMAIL_FAQS } from "./data";

const FEATURES = [
  {
    title: "Strategy built around the customer journey",
    description: "Every plan begins with the audience, business objective and the role email should play from first interest to repeat purchase.",
    points: ["Audience, list and competitor review", "Lifecycle stages and measurable goals", "Campaign calendar and testing priorities"],
    image: "/image1.jpeg",
    imageAlt: "Email marketing strategy and audience planning",
  },
  {
    title: "Campaign copy and responsive design",
    description: "Useful messaging and clear visual hierarchy make every campaign easy to understand and act on across devices.",
    points: ["Subject lines, preheaders and campaign copy", "Mobile-first branded email design", "Clear calls to action and landing flow"],
    image: "/homepage/about.png",
    imageAlt: "Responsive email campaign design by BrainADZ",
  },
  {
    title: "Segmentation and automation",
    description: "Behavior and lifecycle data trigger more relevant messages without adding repetitive work to your marketing team.",
    points: ["Welcome, nurture and retention journeys", "Behavior and interest-based segments", "Lead scoring and ecommerce triggers"],
    image: "/image5.jpg",
    imageAlt: "Email automation workflow and segmentation",
  },
  {
    title: "Testing and performance reporting",
    description: "Clear reporting turns send data into practical decisions about audiences, creative and the next campaign opportunity.",
    points: ["A/B tests for subject lines and content", "Click, conversion and revenue tracking", "Actionable recommendations each cycle"],
    image: "/image2.jpeg",
    imageAlt: "Email campaign reporting and optimization",
  },
];

const CAMPAIGNS = [
  {
    name: "Newsletters",
    title: "Stay useful, recognizable and top of mind",
    description: "Build a reliable publishing rhythm with curated updates, useful content and offers shaped around audience interests.",
    capabilities: ["Editorial planning and monthly themes", "Copy, design and responsive build", "Engagement and content performance review"],
    image: "/image1.jpeg",
    imageAlt: "Branded email newsletter campaign",
    icon: Mail,
  },
  {
    name: "Welcome",
    title: "Turn new subscribers into active prospects",
    description: "Make the first interaction count with a sequence that sets expectations, introduces your value and guides the next step.",
    capabilities: ["Lead magnet and signup delivery", "Brand and offer introduction", "Interest capture and next-action prompts"],
    image: "/homepage/about.png",
    imageAlt: "Automated welcome email journey",
    icon: UserPlus,
  },
  {
    name: "Ecommerce",
    title: "Recover revenue and encourage repeat purchases",
    description: "Use customer and product behavior to deliver timely messages before and after a purchase.",
    capabilities: ["Browse and cart recovery flows", "Post-purchase and review requests", "Recommendations and win-back campaigns"],
    image: "/image5.jpg",
    imageAlt: "Ecommerce email automation campaign",
    icon: ShoppingCart,
  },
  {
    name: "Retention",
    title: "Keep valuable customers connected for longer",
    description: "Create lifecycle communication that rewards loyalty, reactivates quiet contacts and supports ongoing customer value.",
    capabilities: ["Renewal and milestone communication", "Loyalty and re-engagement campaigns", "Churn signals and win-back journeys"],
    image: "/image2.jpeg",
    imageAlt: "Customer retention email campaign",
    icon: RefreshCw,
  },
];

function FeaturesAndCampaigns() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCampaign, setActiveCampaign] = useState(0);
  const selectedFeature = FEATURES[activeFeature];
  const selectedCampaign = CAMPAIGNS[activeCampaign];
  const CampaignIcon = selectedCampaign.icon;

  return <>
    <section id="features" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Features</p></div>
        <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">Built for relevance, action and measurable growth</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
            {FEATURES.map((feature, index) => { const active = activeFeature === index; return <div key={feature.title} className={`border-b border-black/10 last:border-b-0 ${active ? "border-l-[3px] border-l-[#E1122B] bg-[#fff8f8]" : ""}`}>
              <button type="button" aria-expanded={active} onClick={() => setActiveFeature(index)} className="flex min-h-14 w-full items-center justify-between gap-5 px-4 py-3 text-left text-[17px] font-medium transition-colors hover:bg-[#fff8f8]"><span>{feature.title}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${active ? "rotate-180" : ""}`} strokeWidth={1.7} /></button>
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="min-h-0 overflow-hidden"><div className="px-4 pb-7 pt-2"><p className="max-w-[680px] text-[14px] leading-7 text-black/60 sm:text-[15px]">{feature.description}</p><ul className="mt-5 space-y-2 text-[14px] leading-6 text-black/68">{feature.points.map(point => <li key={point} className="flex items-start gap-3"><span className="text-[#E1122B]">-</span><span>{point}</span></li>)}</ul></div></div></div>
            </div>; })}
          </div>
          <figure className="lg:sticky lg:top-[188px]"><div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]"><Image key={selectedFeature.image} src={selectedFeature.image} alt={selectedFeature.imageAlt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" /></div><figcaption className="mt-2 text-[13px] leading-5 text-black/48">Email marketing work by BrainADZ</figcaption></figure>
        </div>
      </div>
    </section>

    <section id="campaigns" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16"><div><div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Campaigns</p></div><h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">The right message for every customer moment</h2></div><p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">Each email has a different job. We connect campaign type, audience intent and timing without losing the consistency of your brand.</p></div>
        <div role="tablist" aria-label="Email campaign types" className="no-scrollbar mt-12 flex overflow-x-auto rounded-[14px] border border-black/10 bg-[#fbfbfb]">{CAMPAIGNS.map((campaign, index) => { const Icon = campaign.icon; const active = activeCampaign === index; return <button key={campaign.name} type="button" role="tab" aria-selected={active} onClick={() => setActiveCampaign(index)} className={`flex min-h-20 min-w-[155px] flex-1 items-center justify-center gap-3 border-r border-black/10 px-5 text-[15px] font-medium transition-colors last:border-r-0 hover:bg-[#fff1f1] ${active ? "bg-[#E1122B] text-white" : "text-black/65"}`}><Icon className="h-5 w-5" /><span>{campaign.name}</span></button>; })}</div>
        <div className="grid gap-10 border-b border-black/10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-14"><figure><div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]"><Image key={selectedCampaign.image} src={selectedCampaign.image} alt={selectedCampaign.imageAlt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 54vw" /></div><figcaption className="mt-2 text-[13px] leading-5 text-black/48">Email campaign planning by BrainADZ</figcaption></figure><div><div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]"><CampaignIcon className="h-6 w-6" /></div><p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">{selectedCampaign.name} campaigns</p><h3 className="mt-3 max-w-[680px] text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-black sm:text-[38px]">{selectedCampaign.title}</h3><p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/60">{selectedCampaign.description}</p><ul className="mt-7 space-y-3 border-t border-black/10 pt-6">{selectedCampaign.capabilities.map(item => <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-black/68"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" strokeWidth={1.8} /><span>{item}</span></li>)}</ul></div></div>
      </div>
    </section>
  </>;
}

function Faqs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return <section id="faqs" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"><div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10"><div className="lg:sticky lg:top-[188px]"><div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">FAQs</p></div><h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">Questions before your next send?</h2><p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">Here are the practical details brands usually want to understand before starting an email marketing engagement.</p><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Ask another question <ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link></div><div className="border-t border-black/10">{EMAIL_FAQS.map((faq, index) => { const active = activeFaq === index; return <div key={faq.question} className="border-b border-black/10"><button type="button" aria-expanded={active} onClick={() => setActiveFaq(active ? null : index)} className="flex min-h-20 w-full items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] sm:px-4"><span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${active ? "rotate-180 text-[#E1122B]" : "text-black/55"}`} strokeWidth={1.7} /></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="min-h-0 overflow-hidden"><div className="px-1 pb-7 sm:px-4"><p className="max-w-[860px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{faq.answer}</p></div></div></div></div>; })}</div></div></section>;
}

export default function EmailInteractiveSections({ part }: { part: "features" | "faqs" }) {
  return part === "features" ? <FeaturesAndCampaigns /> : <Faqs />;
}
