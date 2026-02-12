/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FiTarget, FiMessageCircle } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ACCENT = "#00AAB7";

type Founder = {
  name: string;
  title: string;
  photo: string; // preferably transparent cutout PNG
  p1: string;
  p2: string;
  experience: string; // "13+"
};

const FOUNDER: Founder = {
  name: "Preeti Jaiswal",
  title: "Co-Founder, BrainADZ",
  photo: "/13+.png",
  experience: "13+",
  p1: "Known to be truly generous when it comes to the satisfaction of his clients, Prashant Chhibber has done his MBA in Digital Marketing and has over 12+ years of experience in the field of marketing. He founded Battersea Web Expert back in 2012 which has only continued to grow over time.",
  p2: "With his immense knowledge and experience in marketing, he has set Battersea Web Expert as an example for many, that how a company can grow to unexpected heights when one works fully dedicated. And this fact clearly reflects in the company’s results and reputation.",
};

export default function FounderDeskSameToSame() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ===== Background (same vibe) ===== */}
      {/* ===== Accent Teal Background ===== */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, #003F42 0%, #005E63 35%, #00AAB7 120%)`,
        }}
      />

      {/* Geometric mountains layer (Teal tones) */}
      <div className="absolute inset-0 opacity-40">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1600 520"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,520 0,250 220,160 420,240 520,190 720,300 920,220 1100,320 1300,200 1600,320 1600,520"
            fill="#007E85"
          />
          <polygon
            points="0,520 0,320 260,240 420,320 560,260 760,360 980,280 1180,380 1400,300 1600,380 1600,520"
            fill="#005E63"
          />
          <polygon
            points="0,520 0,380 240,330 430,380 600,330 820,420 1040,350 1240,430 1460,370 1600,420 1600,520"
            fill="#003F42"
          />
        </svg>
      </div>


      {/* Subtle diagonal overlay blocks (like reference) */}
      <div className="absolute inset-0 opacity-[0.18]">
        <div className="absolute inset-y-0 left-0 w-1/5 bg-black/10" />
        <div className="absolute inset-y-0 left-[20%] w-1/5 bg-black/5" />
        <div className="absolute inset-y-0 left-[40%] w-1/5 bg-black/10" />
        <div className="absolute inset-y-0 left-[60%] w-1/5 bg-black/5" />
        <div className="absolute inset-y-0 left-[80%] w-1/5 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 py-12 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ===== LEFT TEXT ===== */}
          <div className="lg:col-span-7">
            <h2 className="text-white font-extrabold tracking-tight text-3xl md:text-5xl">
              Words Of Founder &amp; MD
            </h2>

            <div className="mt-7 space-y-5 text-white/85 text-sm md:text-base leading-relaxed max-w-3xl">
              <p>{FOUNDER.p1}</p>
              <p>{FOUNDER.p2}</p>
            </div>

            <div className="mt-10 space-y-4">
              <div>
                <p className="text-white font-bold text-lg">{FOUNDER.name}</p>
                <p className="text-white/80 text-sm">{FOUNDER.title}</p>
              </div>

              {/* LinkedIn Button */}
              <a
                href="#"
                target="_blank"
                className="
      inline-flex items-center gap-2
      bg-white text-[#003F42]
      px-5 py-2.5
      text-sm font-semibold
      rounded-full
      border border-white
      shadow-[0_10px_25px_rgba(0,0,0,0.25)]
      transition-all duration-300
      hover:bg-[#00AAB7]
      hover:text-white
      hover:scale-105
    "
              >
                <FaLinkedinIn className="text-base" />
                Connect on LinkedIn
              </a>
            </div>

          </div>

          {/* ===== RIGHT VISUAL ===== */}
          <div className="lg:col-span-5 relative">
            {/* dotted blocks like reference */}
            <DotGrid className="absolute -left-6 top-10 hidden lg:block" />
            <DotGrid className="absolute right-8 bottom-10 hidden lg:block opacity-70" />

            {/* yellow blob behind person */}
            <div className="relative mx-auto w-full max-w-[420px]">
              <div
                className="absolute right-10 top-16 h-80 w-[260px] rounded-[36px]"
                style={{ background: "#FFC24B" }}
              />
              <div
                className="absolute right-10 top-16 h-80 w-[260px] rounded-[36px] opacity-25"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
              />

              {/* Person cutout */}
              <img
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                className="relative z-10 ml-auto h-[400px] w-auto object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              />







            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div
        className="h-[70px] w-[70px]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.75) 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
        }}
      />
    </div>
  );
}
