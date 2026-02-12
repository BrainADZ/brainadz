/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiUsers,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const ACCENT = "#00AAB7";

type LocationCard = {
  city: string;
  tag: string;
  address: string;
  email: string;
  sales: string;
  hr: string;
};

const LOCATIONS: LocationCard[] = [
  {
    city: "Delhi",
    tag: "Corporate Office",
    address:
      "A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative Industrial Estate, New Delhi, 110044",
    email: "enquiry@brainadz.com",
    sales: "+91-9540468023",
    hr: "jobs@brainadz.com",
  },
];

const SERVICES = [
  "SEO",
  "Social Media Marketing",
  "Performance Marketing (PPC)",
  "Website Design & Development",
  "Branding & Creatives",
  "Exhibitions & Live Events",
];

export default function ContactFormSection() {
  const [agreed, setAgreed] = useState(true);

  const bgDots = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "16px 16px",
    }),
    []
  );

  return (
    <section className="relative w-full bg-white py-12 md:py-16 overflow-x-hidden">
      {/* subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-60" style={bgDots} />
      {/* ✅ TOP RIGHT OVERLAY IMAGE */}
      <img
        src="/homepage/clienticon.svg"
        alt="Decor"
        className="
          pointer-events-none select-none
          absolute right-[-30] top-[-9]
          z-0
          w-[220px] opacity-70
          md:w-[420px] rotate-48 
          lg:w-[380px]
        "
        loading="lazy"
      />
      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            Let’s Do Great Work Together
          </h2>
          <p className="mt-3 text-sm md:text-base text-black/60">
            Get in touch with our experts today
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left info card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-black/10 bg-[#F6FBFB] shadow-[0_18px_45px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-xl bg-white border border-black/10"
                      style={{ color: ACCENT }}
                    >
                      <FiMapPin className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-black">{LOCATIONS[0].city}</p>
                      <p className="text-xs text-black/60">Location</p>
                    </div>
                  </div>

                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{
                      borderColor: "rgba(0,170,183,0.35)",
                      color: "rgba(0,0,0,0.70)",
                      background: "rgba(255,255,255,0.70)",
                    }}
                  >
                    {LOCATIONS[0].tag}
                  </span>
                </div>

                <div className="mt-5 space-y-5 text-sm">
                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-black/10"
                      style={{ color: ACCENT }}
                    >
                      <FiMapPin />
                    </span>
                    <div>
                      <p className="font-semibold text-black">Location :</p>
                      <p className="mt-1 text-black/70 leading-relaxed">
                        {LOCATIONS[0].address}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-black/10" />

                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-black/10"
                      style={{ color: ACCENT }}
                    >
                      <FiMail />
                    </span>
                    <div>
                      <p className="font-semibold text-black">Email :</p>
                      <p className="mt-1 text-black/70">{LOCATIONS[0].email}</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-black/10" />

                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-black/10"
                      style={{ color: ACCENT }}
                    >
                      <FiPhone />
                    </span>
                    <div>
                      <p className="font-semibold text-black">Sales Enquiry :</p>
                      <p className="mt-1 text-black/70">{LOCATIONS[0].sales}</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-black/10" />

                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-black/10"
                      style={{ color: ACCENT }}
                    >
                      <FiUsers />
                    </span>
                    <div>
                      <p className="font-semibold text-black">HR :</p>
                      <p className="mt-1 text-black/70">{LOCATIONS[0].hr}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-4">
                <Link
                  href="#"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-black/15 bg-white px-5 py-2.5
                    text-sm font-semibold text-black
                    transition-all duration-200
                    hover:shadow-[0_14px_28px_rgba(0,0,0,0.10)]
                  "
                >
                  Get Direction <FiArrowRight />
                </Link>

                <Link
                  href="#"
                  className="text-sm font-semibold"
                  style={{ color: ACCENT }}
                >
                  View All <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-black">
                  Contact Info<span className="text-black/60">*</span>
                </h3>

                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field placeholder="Name *" />
                    <Field placeholder="Email Id *" type="email" />
                    <Field placeholder="Mobile No*" />
                    <Select placeholder="Choose Services" options={SERVICES} />
                  </div>

                  <Textarea placeholder="Type Your Message" />

                  <label className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-black/20"
                      style={{ accentColor: ACCENT }}
                    />
                    <span className="text-sm text-black/65 leading-relaxed">
                      By registering here, I agree to BrainADZ’s{" "}
                      <Link href="#" className="underline underline-offset-2">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  <div className="pt-4">
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-2 rounded-full
                        px-7 py-3 text-sm font-semibold text-white
                        transition-all duration-200
                        hover:opacity-95
                        hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]
                      "
                      style={{ background: ACCENT }}
                    >
                      Submit Now <FiArrowRight />
                    </button>
                  </div>
                </form>
              </div>

              {/* faint bottom accent line */}
              <div className="h-[3px] w-full" style={{ background: ACCENT }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== UI pieces ===================== */

function Field({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        h-12 w-full rounded-xl
        border border-black/10 bg-white
        px-4 text-sm text-black
        outline-none
        focus:ring-2 focus:ring-black/10
      "
    />
  );
}

function Textarea({ placeholder }: { placeholder: string }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={5}
      className="
        w-full rounded-xl
        border border-black/10 bg-white
        px-4 py-3 text-sm text-black
        outline-none resize-none
        focus:ring-2 focus:ring-black/10
      "
    />
  );
}

function Select({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        className="
          h-12 w-full appearance-none rounded-xl
          border border-black/10 bg-white
          px-4 pr-11 text-sm text-black
          outline-none
          focus:ring-2 focus:ring-black/10
        "
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/50" />
    </div>
  );
}
