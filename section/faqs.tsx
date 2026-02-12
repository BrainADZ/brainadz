"use client";

import React, { useMemo, useRef, useState } from "react";

type Faq = { q: string; a: string };
type Tab = { key: string; label: string; faqs: Faq[] };

// ✅ Move outside component (stable)
const TABS: Tab[] = [
  {
    key: "seo",
    label: "SEO Services",
    faqs: [
      {
        q: "What can BrainADZ SEO service do for my business?",
        a: "BrainADZ helps you rank higher, attract local customers, and increase conversions with technical SEO, content strategy, and measurable optimization.",
      },
      {
        q: "How does BrainADZ SEO strategy differ from other agencies?",
        a: "We combine technical fixes + intent-led content + conversion optimization with clear reporting and iteration.",
      },
    ],
  },
  {
    key: "ppc",
    label: "PPC and Paid Advertising",
    faqs: [
      {
        q: "Which platforms do you run ads on?",
        a: "Google Ads (Search/Display/YouTube) and Meta Ads (Facebook/Instagram) depending on goals and budget.",
      },
      {
        q: "How do you control cost per lead?",
        a: "Continuous creative testing, targeting refinement, landing page improvements, and bidding optimization.",
      },
    ],
  },
  {
    key: "smm",
    label: "Social Media Marketing",
    faqs: [
      { q: "Do you handle reels and content planning?", a: "Yes. Strategy, scripts, creatives, publishing, and performance improvement." },
      { q: "Do you manage community?", a: "Yes. Reply frameworks, DM templates, and moderation support as per SOP." },
    ],
  },
  {
    key: "content",
    label: "Content Marketing",
    faqs: [
      { q: "Do you write SEO blogs and landing pages?", a: "Yes. SEO + conversion copy aligned with keyword intent and brand tone." },
      { q: "Do you provide content calendars?", a: "Yes. Weekly/monthly calendars with hooks, formats, and posting guidance." },
    ],
  },
  {
    key: "aso",
    label: "ASO (App Store Optimization)",
    faqs: [
      { q: "Do you optimize titles, descriptions, and keywords?", a: "Yes. Metadata, keywords, creatives, and store conversion improvements." },
      { q: "Can you help with ratings and review strategy?", a: "Yes. Compliant review-growth flows and messaging suggestions." },
    ],
  },
  {
    key: "martech",
    label: "Martech Services",
    faqs: [
      { q: "Do you set up tracking and analytics?", a: "Yes. GA4, GTM, Meta Pixel, events, and reporting dashboards." },
      { q: "Can you integrate CRM and lead pipelines?", a: "Yes. Forms, webhooks, routing logic, and automation based on workflow." },
    ],
  },
  {
    key: "process",
    label: "Process-Related",
    faqs: [
      { q: "What is your onboarding process?", a: "Discovery, audit, goals, plan, implementation, weekly updates, and optimization." },
      { q: "How frequently do you report?", a: "Weekly snapshots + monthly deep-dive reports (customizable)." },
    ],
  },
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<string>("seo");
  const active = useMemo(() => TABS.find((t) => t.key === activeTab) ?? TABS[0], [activeTab]);

  const [openIndex, setOpenIndex] = useState<number>(-1);

  const tabsRef = useRef<HTMLDivElement | null>(null);

  const scrollTabs = (dir: "left" | "right") => {
    if (!tabsRef.current) return;
    tabsRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const onTab = (k: string) => {
    setActiveTab(k);
    setOpenIndex(-1);
  };

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#F3FAFF]" />
      <div className="pointer-events-none absolute right-[-140px] bottom-[-140px] h-[520px] w-[520px] rounded-full border border-black/5" />
      <div className="pointer-events-none absolute right-[-70px] bottom-[-70px] h-[380px] w-[380px] rounded-full border border-black/5" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full border border-black/5" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black">Frequently Asked Questions</h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          <ArrowButton onClick={() => scrollTabs("left")} dir="left" />

          <div className="relative w-full max-w-[980px]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-linear-to-r from-[#F3FAFF] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-[#F3FAFF] to-transparent" />

            <div ref={tabsRef} className="no-scrollbar flex items-center gap-3 overflow-x-auto whitespace-nowrap scroll-smooth px-10">
              {TABS.map((t) => {
                const isActive = t.key === activeTab;

                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => onTab(t.key)}
                    className={[
                      "shrink-0 rounded-full px-5 py-2.5 text-xs md:text-[13px] font-semibold border transition-colors",
                      isActive
                        ? "bg-[#00AAB7] text-white border-[#00AAB7]"
                        : "bg-white text-black/70 border-black/10 hover:text-black hover:border-black/20",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <ArrowButton onClick={() => scrollTabs("right")} dir="right" />
        </div>

        <div className="mt-10 space-y-4">
          {active?.faqs?.map((f, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={f.q} className="rounded-xl bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex((p) => (p === idx ? -1 : idx))}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-[15px] font-semibold text-black">{f.q}</span>

                  <span
                    className={[
                      "flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200",
                      isOpen ? "border-[#0B66C3] bg-[#0B66C3] text-white" : "border-[#0B66C3] text-[#0B66C3] bg-white",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {isOpen ? <span className="text-[16px] leading-none">×</span> : <span className="text-[16px] leading-none">+</span>}
                  </span>
                </button>

                <div className={["grid transition-all duration-200 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"].join(" ")}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm md:text-[14px] leading-relaxed text-black/70">{f.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#00AAB7] px-7 py-3 text-white font-semibold text-sm shadow-[0_12px_28px_rgba(244,124,32,0.25)] transition-all duration-200 hover:scale-[1.02]"
          >
            View All <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-black/10 text-black/60 shadow-[0_10px_22px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-black/20 hover:text-black"
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}
