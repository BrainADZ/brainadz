/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useState } from "react";

const ACCENT = "#00AAB7";

const FEATURES = [
  {
    title: "Innovative and Passionate",
    desc:
      "We serve as the catalyst propelling your brand’s journey to success, leveraging the transformative power of captivating storytelling and strategic brand building. Our strong passion for creativity makes us the best digital marketing agency in Noida and other areas as well.",
    icon: "/icons/why/idea.svg",
  },
  {
    title: "Communication is a key",
    desc:
      "Effective communication helps to build a healthy relationship with our clients. So, at every stage of the project, we are transparent with our work, constantly updating results, delivering projects on time, and keeping you on loop. No surprises, just smooth sailing and high-fives prevailing!",
    icon: "/icons/why/chat.svg",
  },
  {
    title: "Good Return on Investment",
    desc:
      "Working with us implies significant cost benefits for your company. We provide all of our web development and digital marketing solutions at reasonable prices. Our experts take every measure possible to guarantee that all money invested in the project will provide a profit.",
    icon: "/icons/why/roi.svg",
  },
  {
    title: "A Gamut of Services under One Roof",
    desc:
      "All of the services you might need are included in our list, from designing your website to advertising it online. Proudly recognised as the best digital marketing agency in Noida, we provide a comprehensive range of services, including web development, CMS development, e-commerce and more.",
    icon: "/icons/why/stack.svg",
  },
];

// Simple typewriter hook (no libs)
function useTypewriter(
  words: string[],
  opts?: { typeSpeed?: number; deleteSpeed?: number; pauseMs?: number }
) {
  const typeSpeed = opts?.typeSpeed ?? 85;
  const deleteSpeed = opts?.deleteSpeed ?? 45;
  const pauseMs = opts?.pauseMs ?? 900;

  const safeWords = useMemo(
    () => (words?.length ? words : ["Dynamic"]),
    [words]
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[wordIndex % safeWords.length];

    let timer: any;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setText(current.slice(0, Math.max(0, text.length - 1)));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % safeWords.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, safeWords, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

export default function WhyDynamicSection() {
  const rotating = useTypewriter(["Dynamic", "Creative", "Result-Driven", "Reliable", "Bold"], {
    typeSpeed: 75,
    deleteSpeed: 40,
    pauseMs: 800,
  });

  return (
    <section className="relative overflow-hidden bg-[#FBF6F4] text-[#0b0d10]">
      {/* premium background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, rgba(0,0,0,0.22) 0%, transparent 65%)` }}
        />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)] bg-size-[18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 py-14 md:py-20">
        {/* Top Row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00AAB7]/40 bg-[#00AAB7]/10 px-4 py-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#00AAB7]">
              BrainADZ Marketing
            </p>

            <h2 className="text-[40px] font-extrabold leading-[1.06] tracking-tight md:text-[56px]"> 
              <span className="block">What Makes us</span>

              <span className="mt-2 block">
                <span
                  className="italic font-light underline underline-offset-8 decoration-white/30"
                  style={{ color: ACCENT }}
                >
                  {rotating}
                  {/* underline swoosh */}
                  <span className="pointer-events-none absolute -bottom-2 left-0 h-[10px] w-full rounded-full opacity-25"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
                <span className="italic font-light" style={{ color: ACCENT }}>
                  ?
                </span>
                {/* caret */}
                <span
                  className="ml-1 inline-block h-[1em] w-0.5 align-[-0.1em] animate-pulse"
                  style={{ backgroundColor: ACCENT }}
                />
              </span>
            </h2>

            {/* mini highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <MiniChip label="Strategy + Creative" />
              <MiniChip label="ROI Focused" />
              <MiniChip label="Fast Execution" />
              <MiniChip label="Transparent Reporting" />
            </div>
          </div>

          {/* Right Paragraph */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur">
              <p className="text-sm leading-relaxed text-black/75 md:text-base">
                In this convoluted industry that is subjected to exponential growth and constant evolution,
                the first impression lasts a lifetime. As the best digital marketing company in India, our aim
                is not only to harness the capability of SEO, Google Ads & Facebook Marketing to propel your
                business but to creatively design stunning websites with{" "}
                <span style={{ color: ACCENT }} className="font-semibold">
                  brand perception
                </span>{" "}
                & conversions as the key parameters. Working with us, you get the most of your investment in marketing.
                Listed below are some of the reasons why:
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <CTAChip text="SEO + Ads Growth" />
                <CTAChip text="Design that Converts" />
                <CTAChip text="Performance Tracking" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="
                group relative overflow-hidden
                rounded-3xl bg-white
                border border-black/5
                p-7
                shadow-[0_18px_55px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* accent corner blob */}
              <div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 transition duration-300 group-hover:opacity-30"
                style={{ backgroundColor: ACCENT }}
              />

              {/* icon pill */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="
                    grid h-12 w-12 place-items-center
                    rounded-2xl border border-black/10
                    bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                  "
                >
                  <img
                    src={f.icon}
                    alt=""
                    className="h-7 w-7 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-extrabold tracking-tight md:text-xl">
                  {f.title}
                </h3>
              </div>

              <div className="relative z-10 mt-4 h-[3px] w-14 rounded-full bg-black/10 transition group-hover:w-24"
                style={{ backgroundColor: "rgba(0,0,0,0.10)" }}
              />

              <p className="relative z-10 mt-4 text-sm leading-relaxed text-black/70 md:text-[15px]">
                {f.desc}
              </p>

              {/* bottom accent line */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] opacity-70"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- small UI helpers ---------- */

function MiniChip({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-black/5 bg-white/70 px-3 py-2 text-[12px] font-semibold text-black/75 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
      {label}
    </div>
  );
}

function CTAChip({ text }: { text: string }) {
  return (
    <span
      className="rounded-full border border-[#00AAB7]/30 bg-[#00AAB7]/10 px-4 py-2 text-[12px] font-semibold"
      style={{ color: ACCENT }}
    >
      {text}
    </span>
  );
}
