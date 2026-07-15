"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const PLATFORMS = [
  {
    name: "Instagram",
    title: "Turn attention into an active brand community",
    description:
      "Build a recognizable Instagram presence with a consistent visual system, platform-native storytelling and content designed for discovery and conversation.",
    capabilities: [
      "Reels, carousels, stories and static content",
      "Monthly planning, publishing and profile hygiene",
      "Community engagement and performance review",
    ],
    image: "/smm/inst.png",
    imageAlt: "Instagram profile and content managed by BrainADZ",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    title: "Reach established communities with useful content",
    description:
      "Use Facebook to keep audiences informed, support campaigns and create more opportunities for discovery, enquiries and repeat engagement.",
    capabilities: [
      "Page content and campaign calendars",
      "Audience-focused posts, videos and offers",
      "Lead campaign and remarketing coordination",
    ],
    image: "/smm/fb.png",
    imageAlt: "Social campaign content created by BrainADZ",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    title: "Build authority with professional audiences",
    description:
      "Give your company and leadership a clear voice through credible ideas, useful industry content and campaigns shaped for B2B attention.",
    capabilities: [
      "Company page and leadership content",
      "Thought leadership, case studies and carousels",
      "B2B audience growth and lead support",
    ],
    image: "/smm/linkedin.png",
    imageAlt: "Professional social media content created by BrainADZ",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    title: "Make video content work across the customer journey",
    description:
      "Plan useful long-form videos and high-retention shorts that improve discovery, explain the offer and give every campaign more reusable content.",
    capabilities: [
      "Video topics, scripts and publishing plans",
      "Shorts, explainers and campaign videos",
      "Titles, thumbnails and performance review",
    ],
    image: "/smm/yt.png",
    imageAlt: "Video-led social media campaign work by BrainADZ",
    icon: FaYoutube,
  },

];

export default function PlatformsSection() {
  const [activePlatform, setActivePlatform] = useState(0);
  const selectedPlatform = PLATFORMS[activePlatform];
  const SelectedIcon = selectedPlatform.icon;

  return (
    <section
      id="platforms"
      className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Platforms</p></div>
            <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              The right approach for every social channel
            </h2>
          </div>
          <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
            Each platform has a different audience behavior, content rhythm and
            role in the customer journey. We adapt the strategy without losing
            the consistency of your brand.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Social media platforms"
          className="no-scrollbar mt-12 flex overflow-x-auto rounded-[14px] border border-black/10 bg-[#fbfbfb]"
        >
          {PLATFORMS.map((platform, index) => {
            const Icon = platform.icon;
            const isActive = activePlatform === index;

            return (
              <button
                key={platform.name}
                id={`platform-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="platform-panel"
                onClick={() => setActivePlatform(index)}
                className={`flex min-h-20 min-w-[155px] flex-1 items-center justify-center gap-3 border-r border-black/10 px-5 text-[15px] font-medium transition-colors last:border-r-0 hover:bg-[#fff1f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E1122B] ${
                  isActive
                    ? "bg-[#E1122B] text-white"
                    : "bg-transparent text-black/65"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{platform.name}</span>
              </button>
            );
          })}
        </div>

        <div
          id="platform-panel"
          role="tabpanel"
          aria-labelledby={`platform-tab-${activePlatform}`}
          className="grid gap-10 border-b border-black/10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-14"
        >
          <figure>
            <div className="relative aspect-video overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <Image
                key={selectedPlatform.image}
                src={selectedPlatform.image}
                alt={selectedPlatform.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-black/48">
              Selected social media work by BrainADZ
            </figcaption>
          </figure>

          <div>
            <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
              <SelectedIcon className="h-6 w-6" />
            </div>
            <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
              {selectedPlatform.name} marketing
            </p>
            <h3 className="mt-3 max-w-[680px] text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-black sm:text-[38px]">
              {selectedPlatform.title}
            </h3>
            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/60">
              {selectedPlatform.description}
            </p>

            <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
              {selectedPlatform.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 text-[14px] leading-6 text-black/68"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]"
                    strokeWidth={1.8}
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
