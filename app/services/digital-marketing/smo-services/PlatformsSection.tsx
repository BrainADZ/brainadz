"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const PLATFORMS = [
  {
    name: "Instagram",
    title: "Create a profile people recognize and want to follow",
    description: "Optimize every part of the Instagram experience, from the profile and highlights to content formats, captions and community interaction.",
    capabilities: ["Profile, bio, highlights and link optimization", "Reels, carousels, stories and publishing rhythm", "Hashtag, engagement and performance refinement"],
    image: "/smm/inst.png",
    imageAlt: "Instagram profile optimized by BrainADZ",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    title: "Keep your page useful, complete and community-ready",
    description: "Improve page information and publishing consistency while giving established audiences more reasons to interact with the brand.",
    capabilities: ["Page details, categories and CTA optimization", "Community posts, offers, events and video content", "Comment, review and audience response management"],
    image: "/smm/fb.png",
    imageAlt: "Facebook page content optimized by BrainADZ",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    title: "Build a credible presence for professional audiences",
    description: "Clarify company positioning and strengthen authority with useful brand, leadership and employer communication.",
    capabilities: ["Company page and profile positioning", "Leadership, case study and carousel content", "B2B community growth and performance review"],
    image: "/smm/linkedin.png",
    imageAlt: "LinkedIn presence optimized by BrainADZ",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    title: "Improve how your video channel gets found and explored",
    description: "Organize the channel and optimize each published video so useful content has a stronger chance to earn discovery and continued viewing.",
    capabilities: ["Channel structure, playlists and visual consistency", "Titles, descriptions, thumbnails and publishing", "Shorts, search discovery and performance review"],
    image: "/smm/yt.png",
    imageAlt: "YouTube channel content optimized by BrainADZ",
    icon: FaYoutube,
  },
];

export default function PlatformsSection() {
  const [activePlatform, setActivePlatform] = useState(0);
  const selectedPlatform = PLATFORMS[activePlatform];
  const SelectedIcon = selectedPlatform.icon;

  return (
    <section id="platforms" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Platforms</p>
            </div>
            <h2 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">Optimization shaped for every social channel</h2>
          </div>
          <p className="max-w-[620px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">Each platform has different discovery signals, profile requirements and audience habits. We optimize each channel around its real role without losing brand consistency.</p>
        </div>

        <div role="tablist" aria-label="Social media optimization platforms" className="no-scrollbar mt-12 flex overflow-x-auto rounded-[14px] border border-black/10 bg-[#fbfbfb]">
          {PLATFORMS.map((platform, index) => {
            const Icon = platform.icon;
            const isActive = activePlatform === index;
            return (
              <button key={platform.name} id={`smo-platform-tab-${index}`} type="button" role="tab" aria-selected={isActive} aria-controls="smo-platform-panel" onClick={() => setActivePlatform(index)} className={`flex min-h-20 min-w-[155px] flex-1 items-center justify-center gap-3 border-r border-black/10 px-5 text-[15px] font-medium transition-colors last:border-r-0 hover:bg-[#fff1f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E1122B] ${isActive ? "bg-[#E1122B] text-white" : "bg-transparent text-black/65"}`}>
                <Icon className="h-5 w-5 shrink-0" /><span>{platform.name}</span>
              </button>
            );
          })}
        </div>

        <div id="smo-platform-panel" role="tabpanel" aria-labelledby={`smo-platform-tab-${activePlatform}`} className="grid gap-10 border-b border-black/10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-14">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-black/10 bg-[#f7f7f7] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <Image key={selectedPlatform.image} src={selectedPlatform.image} alt={selectedPlatform.imageAlt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 54vw" />
            </div>
            <figcaption className="mt-2 text-[13px] leading-5 text-black/48">Selected social media work by BrainADZ</figcaption>
          </figure>
          <div>
            <div className="flex h-13 w-13 items-center justify-center rounded-[10px] bg-[#E1122B] text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]"><SelectedIcon className="h-6 w-6" /></div>
            <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">{selectedPlatform.name} optimization</p>
            <h3 className="mt-3 max-w-[680px] text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-black sm:text-[38px]">{selectedPlatform.title}</h3>
            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/60">{selectedPlatform.description}</p>
            <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
              {selectedPlatform.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-[14px] leading-6 text-black/68"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" strokeWidth={1.8} /><span>{capability}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
