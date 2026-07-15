"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FEATURES = [
  {
    title: "Profiles built for discovery",
    description:
      "Every profile is reviewed as a customer touchpoint so the identity, information and next action feel complete and consistent.",
    points: [
      "Bio, description, category and contact optimization",
      "Profile visuals, highlights and link structure",
      "Consistent naming, voice and brand presentation",
    ],
    image: "/portfolio/instagram/2.png",
    imageAlt: "Optimized social profile and branded content system",
  },
  {
    title: "An organic content system",
    description:
      "Content pillars and monthly themes turn scattered posting into a recognizable system your audience can understand and follow.",
    points: [
      "Audience-led content pillars and monthly themes",
      "Static posts, carousels, stories and short videos",
      "Captions, hooks, hashtags and publishing calendar",
    ],
    image: "/portfolio/instagram/3.png",
    imageAlt: "Organized social media content created by BrainADZ",
  },
  {
    title: "Community and social listening",
    description:
      "Comments, messages, mentions and audience signals are monitored to keep the brand responsive and reveal useful content opportunities.",
    points: [
      "Comment, mention and message monitoring",
      "Approved response and escalation guidelines",
      "Trend, competitor and sentiment observations",
    ],
    image: "/portfolio/instagram/4.png",
    imageAlt: "Social community content and account management",
  },
  {
    title: "Optimization guided by reporting",
    description:
      "Monthly performance review shows which topics, formats and publishing patterns are strengthening the account and what should change next.",
    points: [
      "Reach, engagement and audience growth review",
      "Profile actions, traffic and enquiry tracking",
      "Clear recommendations for the next content cycle",
    ],
    image: "/portfolio/instagram/5.png",
    imageAlt: "Social media optimization reporting and creative work",
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = FEATURES[activeFeature];

  return (
    <section id="features" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-[#E1122B]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Features</p>
        </div>
        <h2 className="mt-5 max-w-[1220px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
          Everything your organic social presence needs to improve
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)]">
            {FEATURES.map((feature, index) => {
              const isActive = activeFeature === index;
              const panelId = `smo-feature-panel-${index}`;
              return (
                <div key={feature.title} className={`border-b border-black/10 last:border-b-0 ${isActive ? "border-l-[3px] border-l-[#E1122B] bg-[#fff8f8]" : ""}`}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveFeature(index)}
                    className="flex min-h-14 w-full items-center justify-between gap-5 px-4 py-3 text-left text-[17px] font-medium text-black transition-colors hover:bg-[#fff8f8] focus-visible:bg-[#fff8f8] focus-visible:outline-none"
                  >
                    <span>{feature.title}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} strokeWidth={1.7} />
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div id={panelId} role="region" aria-hidden={!isActive} className="px-4 pb-7 pt-2">
                        <p className="max-w-[680px] text-[14px] leading-7 text-black/60 sm:text-[15px]">{feature.description}</p>
                        <ul className="mt-5 space-y-2 text-[14px] leading-6 text-black/68">
                          {feature.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span aria-hidden="true" className="text-[#E1122B]">-</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <figure className="lg:sticky lg:top-[188px]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <Image key={selectedFeature.image} src={selectedFeature.image} alt={selectedFeature.imageAlt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-black/48">Selected social media work by BrainADZ</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
