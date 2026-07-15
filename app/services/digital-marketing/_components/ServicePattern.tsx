"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  Check,
  ChevronDown,
  CircleDollarSign,
  FileSearch,
  Gauge,
  LayoutTemplate,
  MailCheck,
  MailOpen,
  MessageSquareText,
  MousePointerClick,
  Search,
  Send,
  Settings2,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const ICONS = {
  analytics: BarChart3,
  automation: Workflow,
  calendar: CalendarRange,
  click: MousePointerClick,
  conversion: CircleDollarSign,
  gauge: Gauge,
  layout: LayoutTemplate,
  mail: MailCheck,
  open: MailOpen,
  research: FileSearch,
  search: Search,
  send: Send,
  settings: Settings2,
  target: Target,
  users: Users,
  message: MessageSquareText,
} satisfies Record<string, LucideIcon>;

export type PatternIcon = keyof typeof ICONS;

export type PatternConfig = {
  serviceName: string;
  navLabel: string;
  overview: {
    heading: string;
    description: string;
    cta: string;
    image: string;
    imageAlt: string;
    imageContain?: boolean;
    benefits: Array<{ title: string; description: string; icon: PatternIcon }>;
  };
  features: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
      points: string[];
      image: string;
      imageAlt: string;
      imageContain?: boolean;
    }>;
  };
  channels: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Array<{
      name: string;
      label: string;
      title: string;
      description: string;
      capabilities: string[];
      image: string;
      imageAlt: string;
      icon: PatternIcon;
      imageContain?: boolean;
    }>;
  };
  process: {
    heading: string;
    intro: string;
    cta: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      timing: string;
      output: string;
      icon: PatternIcon;
    }>;
  };
  faq: {
    heading: string;
    intro: string;
    items: Array<{ question: string; answer: string }>;
  };
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0.5 w-8 bg-[#E1122B]" />
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">{children}</p>
    </div>
  );
}

function Media({ src, alt, contain = false, sizes }: { src: string; alt: string; contain?: boolean; sizes: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={contain ? "object-contain p-5 sm:p-8" : "object-cover object-center"}
      sizes={sizes}
    />
  );
}

export default function ServicePattern({ config }: { config: PatternConfig }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const feature = config.features.items[activeFeature];
  const channel = config.channels.items[activeChannel];
  const ChannelIcon = ICONS[channel.icon];

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: config.navLabel, href: "#channels" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <div className="sticky top-21 z-40 border-b border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <nav aria-label={`${config.serviceName} page navigation`} className="no-scrollbar mx-auto max-w-[1800px] overflow-x-auto px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-20 min-w-max items-center">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className={`inline-flex h-16 shrink-0 items-center border-b-2 px-4 text-[14px] font-medium transition-colors hover:text-[#E1122B] focus-visible:outline-none sm:px-5 sm:text-[15px] ${index === 0 ? "border-[#E1122B] text-[#E1122B]" : "border-transparent text-black/65"}`}>
                {item.label}
              </a>
            ))}
            <Link href="/contact" className="ml-auto inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1122B] sm:px-7">Get Started</Link>
          </div>
        </nav>
      </div>

      <section id="overview" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="mt-5 max-w-[1180px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">{config.overview.heading}</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
            <div>
              <p className="max-w-[680px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">{config.overview.description}</p>
              <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">{config.overview.cta}<ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
            </div>
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <Media src={config.overview.image} alt={config.overview.imageAlt} contain={config.overview.imageContain} sizes="(max-width: 1024px) 100vw, 52vw" />
              </div>
            </figure>
          </div>

          <div className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pt-12">
            {config.overview.benefits.map((benefit) => {
              const Icon = ICONS[benefit.icon];
              return (
                <article key={benefit.title} className="rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]"><Icon className="h-7 w-7" strokeWidth={1.5} /></div>
                  <h3 className="mt-8 text-[16px] font-semibold leading-6 text-black">{benefit.title}</h3>
                  <p className="mt-2 max-w-[320px] text-[14px] leading-6 text-black/58">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">{config.features.heading}</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
              {config.features.items.map((item, index) => {
                const active = activeFeature === index;
                const id = `${config.serviceName.toLowerCase().replaceAll(" ", "-")}-feature-${index}`;
                return (
                  <div key={item.title} className={`border-b border-black/10 last:border-b-0 ${active ? "border-l-[3px] border-l-[#E1122B] bg-[#fff8f8]" : ""}`}>
                    <button type="button" aria-expanded={active} aria-controls={id} onClick={() => setActiveFeature(index)} className="flex min-h-14 w-full items-center justify-between gap-5 px-4 py-3 text-left text-[17px] font-medium text-black transition-colors hover:bg-[#fff8f8] focus-visible:bg-[#fff8f8] focus-visible:outline-none">
                      <span>{item.title}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${active ? "rotate-180" : ""}`} strokeWidth={1.7} />
                    </button>
                    <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="min-h-0 overflow-hidden"><div id={id} role="region" aria-hidden={!active} className="px-4 pb-7 pt-2">
                        <p className="max-w-[680px] text-[14px] leading-7 text-black/60 sm:text-[15px]">{item.description}</p>
                        <ul className="mt-5 space-y-2 text-[14px] leading-6 text-black/68">{item.points.map((point) => <li key={point} className="flex items-start gap-3"><span aria-hidden="true" className="text-[#E1122B]">-</span><span>{point}</span></li>)}</ul>
                      </div></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <figure className="lg:sticky lg:top-[188px]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
                <Media src={feature.image} alt={feature.imageAlt} contain={feature.imageContain} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <figcaption className="mt-2 text-[13px] leading-5 text-black/48">Selected {config.serviceName.toLowerCase()} workflow by BrainADZ</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="channels" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div><Eyebrow>{config.channels.eyebrow}</Eyebrow><h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">{config.channels.heading}</h2></div>
            <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">{config.channels.intro}</p>
          </div>
          <div role="tablist" aria-label={`${config.serviceName} options`} className="no-scrollbar mt-12 flex overflow-x-auto rounded-[14px] border border-black/10 bg-[#fbfbfb]">
            {config.channels.items.map((item, index) => {
              const Icon = ICONS[item.icon];
              const active = activeChannel === index;
              return <button key={item.name} id={`channel-tab-${index}`} type="button" role="tab" aria-selected={active} aria-controls="channel-panel" onClick={() => setActiveChannel(index)} className={`flex min-h-20 min-w-[170px] flex-1 items-center justify-center gap-3 border-r border-black/10 px-5 text-[15px] font-medium transition-colors last:border-r-0 hover:bg-[#fff1f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E1122B] ${active ? "bg-[#E1122B] text-white" : "bg-transparent text-black/65"}`}><Icon className="h-5 w-5 shrink-0" /><span>{item.name}</span></button>;
            })}
          </div>
          <div id="channel-panel" role="tabpanel" aria-labelledby={`channel-tab-${activeChannel}`} className="grid gap-10 border-b border-black/10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-14">
            <figure><div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]"><Media src={channel.image} alt={channel.imageAlt} contain={channel.imageContain} sizes="(max-width: 1024px) 100vw, 54vw" /></div></figure>
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]"><ChannelIcon className="h-6 w-6" /></div>
              <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">{channel.label}</p>
              <h3 className="mt-3 max-w-[680px] text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-black sm:text-[38px]">{channel.title}</h3>
              <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/60">{channel.description}</p>
              <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">{channel.capabilities.map((capability) => <li key={capability} className="flex items-start gap-3 text-[14px] leading-6 text-black/68"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" strokeWidth={1.8} /><span>{capability}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]">
            <Eyebrow>Process</Eyebrow><h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">{config.process.heading}</h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">{config.process.intro}</p>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">{config.process.cta}<ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
          </div>
          <div className="border-t border-black/10">
            {config.process.steps.map((step) => {
              const Icon = ICONS[step.icon];
              return <article key={step.number} className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8">
                <div className="flex items-start justify-between gap-5 sm:block"><span className="text-[24px] font-medium text-[#E1122B]">{step.number}</span><div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5"><Icon className="h-5 w-5" strokeWidth={1.6} /></div></div>
                <div><h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">{step.title}</h3><p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{step.description}</p></div>
                <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><div><dt className="text-[12px] font-medium uppercase text-black/42">Timing</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.timing}</dd></div><div><dt className="text-[12px] font-medium uppercase text-black/42">Output</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.output}</dd></div></dl>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-[188px]"><Eyebrow>FAQs</Eyebrow><h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">{config.faq.heading}</h2><p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">{config.faq.intro}</p><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Ask another question<ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link></div>
          <div className="border-t border-black/10">
            {config.faq.items.map((faq, index) => {
              const active = activeFaq === index;
              const panelId = `faq-panel-${config.serviceName}-${index}`;
              const buttonId = `faq-button-${config.serviceName}-${index}`;
              return <div key={faq.question} className="border-b border-black/10"><button id={buttonId} type="button" aria-expanded={active} aria-controls={panelId} onClick={() => setActiveFaq(active ? null : index)} className="flex min-h-20 w-full items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4"><span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${active ? "rotate-180 text-[#E1122B]" : "text-black/55"}`} strokeWidth={1.7} /></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="min-h-0 overflow-hidden"><div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!active} className="px-1 pb-7 sm:px-4"><p className="max-w-[860px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{faq.answer}</p></div></div></div></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
