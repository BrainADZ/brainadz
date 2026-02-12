/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ArrowUpRight, BadgeCheck, Award, DollarSign } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background gradient (theme: #00AAB7) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#007E88] via-[#00AAB7] to-[#00C3CF]" />

          {/* Geometric overlay */}
          <div className="absolute inset-0 opacity-25">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 420"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="poly" x1="0" x2="1">
                  <stop offset="0" stopColor="#000" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#000" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M0,240 L160,120 L320,220 L480,90 L650,200 L820,80 L980,160 L1200,60 L1200,420 L0,420 Z"
                fill="url(#poly)"
              />
              <path
                d="M0,310 L210,190 L410,280 L560,160 L740,300 L900,170 L1080,250 L1200,200 L1200,420 L0,420 Z"
                fill="rgba(0,0,0,0.18)"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-10 px-8 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:px-14 md:py-12">
            {/* Left */}
            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-white/80">
          
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Let’s Build <span className="text-white/90">Your</span>{" "}
                <span className="text-white">Digital Success Story!</span>
              </h2>

              <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-white/80 sm:text-base">
                Ready to elevate your online presence? Get in touch with us
                today for personalized solutions tailored to your business
                needs.
              </p>

              {/* Feature row */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <FeatureItem
                  icon={<BadgeCheck className="h-4 w-4" />}
                  text="60+ Team Members"
                />
                <FeatureItem
                  icon={<Award className="h-4 w-4" />}
                  text="Award Winning Agency"
                />
                <FeatureItem
                  icon={<DollarSign className="h-4 w-4" />}
                  text="Affordable Pricing Plan"
                />
              </div>
            </div>

            {/* Right: Image on top, button below */}
            <div className="flex w-full flex-col items-center gap-5 md:w-[420px] md:items-end">
              {/* Replace src with your image */}
              <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl ">
                <img
                  src="/cta.png"
                  alt="CTA Illustration"
                  className="h-auto w-full object-contain"
                />
              </div>

              <button className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FFC84A] px-6 py-3 text-sm font-bold text-[#0B1020] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#FFD36B] active:translate-y-0 md:w-auto">
                Book A Free Consultation
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* soft border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC84A] text-[#0B1020] shadow-md shadow-black/15 ring-1 ring-white/10">
        {icon}
      </span>
      <span className="text-sm font-semibold text-white/90">{text}</span>
    </div>
  );
}
