"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FEATURES = [
  {
    title: "Strategy built around your goals",
    description:
      "Every social plan starts with the business outcome, audience and channel role so the work stays focused instead of becoming a stream of disconnected posts.",
    points: [
      "Audience, competitor and account review",
      "Channel priorities and measurable goals",
      "Monthly themes, formats and content calendar",
    ],
    image: "/portfolio/instagram/2.png",
    imageAlt: "Social media strategy and account work for Navin Polycon",
  },
  {
    title: "Platform-native content",
    description:
      "Ideas are shaped for the way people use each platform, with the right mix of static posts, carousels, reels, stories and campaign creatives.",
    points: [
      "Platform-specific content formats",
      "Branded copy and creative direction",
      "Consistent publishing across the month",
    ],
    image: "/portfolio/instagram/3.png",
    imageAlt: "Platform-native Instagram content for Stas Chem Group",
  },
  {
    title: "Community and campaign management",
    description:
      "Publishing is supported by attentive account management that keeps conversations moving and campaigns aligned with current priorities.",
    points: [
      "Comment and message monitoring",
      "Campaign coordination and publishing",
      "Audience feedback and opportunity tracking",
    ],
    image: "/portfolio/instagram/4.png",
    imageAlt: "Social campaign management for OK Cookwares",
  },
  {
    title: "Reporting that guides the next move",
    description:
      "Clear reporting turns platform data into practical decisions about content, audiences and the actions most likely to improve performance.",
    points: [
      "Reach, engagement and enquiry tracking",
      "Content and campaign performance review",
      "Actionable recommendations for the next cycle",
    ],
    image: "/portfolio/instagram/5.png",
    imageAlt: "Social media reporting and content work for Eclectic Bay",
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = FEATURES[activeFeature];

  return (
    <section
      id="features"
      className="scroll-mt-[164px] border-b border-white/12 bg-[#080808] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <p className="text-[13px] font-medium uppercase text-white/52">
          Features
        </p>
        <h2 className="mt-4 max-w-[1220px] text-[38px] font-normal leading-[1.08] text-white sm:text-[50px] lg:text-[60px]">
          Built for reach, engagement and measurable growth
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <div className="border-t border-white/16">
            {FEATURES.map((feature, index) => {
              const isActive = activeFeature === index;
              const panelId = `feature-panel-${index}`;

              return (
                <div
                  key={feature.title}
                  className={`border-b border-white/16 ${
                    isActive ? "border-l-[3px] border-l-[#1467f5]" : ""
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveFeature(index)}
                    className="flex min-h-14 w-full items-center justify-between gap-5 px-4 py-3 text-left text-[17px] font-medium text-white transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
                  >
                    <span>{feature.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.7}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        id={panelId}
                        role="region"
                        aria-hidden={!isActive}
                        className="px-4 pb-7 pt-2"
                      >
                        <p className="max-w-[680px] text-[14px] leading-7 text-white/66 sm:text-[15px]">
                          {feature.description}
                        </p>
                        <ul className="mt-5 space-y-2 text-[14px] leading-6 text-white/72">
                          {feature.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="text-[#6995ff]"
                              >
                                -
                              </span>
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
            <div className="relative aspect-[16/9] overflow-hidden border border-white/12 bg-black">
              <Image
                key={selectedFeature.image}
                src={selectedFeature.image}
                alt={selectedFeature.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-white/48">
              Selected social media work by BrainADZ
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
