"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { label: "All insights", count: 3, href: "#articles" },
  { label: "Social Media", count: 1, href: "#social-media" },
  {
    label: "Performance Marketing",
    count: 1,
    href: "#performance-marketing",
  },
  { label: "Web Design", count: 1, href: "#web-design" },
];

const TOPICS = [
  "All digital growth topics",
  "Social media",
  "SEO and content",
  "Performance marketing",
  "Web design and conversion",
];

export default function BlogSidebar() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const subject = "BrainADZ blog updates request";
    const body = [
      "Please add me to the BrainADZ insights update list.",
      "",
      `Email: ${email}`,
      `Topic preference: ${topic}`,
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:enquiry@brainadz.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <aside className="space-y-5 self-start lg:sticky lg:top-[108px]">
      <div className="rounded-[6px] border border-white/12 bg-black p-6">
        <p className="text-[12px] font-semibold uppercase text-[#6995ff]">
          Categories
        </p>
        <nav aria-label="Blog categories" className="mt-5">
          {CATEGORIES.map((category) => (
            <a
              key={category.label}
              href={category.href}
              className="group flex min-h-13 items-center gap-3 border-b border-white/12 text-[14px] text-white/72 transition-colors last:border-b-0 hover:text-white"
            >
              <span className="flex-1">{category.label}</span>
              <span className="text-[12px] text-white/38">
                {String(category.count).padStart(2, "0")}
              </span>
              <ChevronRight
                className="h-4 w-4 text-[#6995ff] transition-transform group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </a>
          ))}
        </nav>
      </div>

      <div className="rounded-[6px] border border-white/12 bg-[#101010] p-6">
        <p className="text-[12px] font-semibold uppercase text-[#6995ff]">
          Stay informed
        </p>
        <h3 className="mt-4 text-[25px] font-medium leading-tight text-white">
          Get useful insights in your inbox
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-white/56">
          Choose what you care about and send us your update request.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="blog-email"
              className="mb-2 block text-[13px] font-medium text-white/68"
            >
              Email address
            </label>
            <input
              id="blog-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="name@company.com"
              className="h-12 w-full rounded-[4px] border border-white/14 bg-black px-4 text-[14px] text-white outline-none transition placeholder:text-white/28 focus:border-[#1467f5]"
            />
          </div>

          <div>
            <label
              htmlFor="blog-topic"
              className="mb-2 block text-[13px] font-medium text-white/68"
            >
              Topic preference
            </label>
            <select
              id="blog-topic"
              name="topic"
              className="h-12 w-full rounded-[4px] border border-white/14 bg-black px-4 text-[14px] text-white outline-none transition focus:border-[#1467f5]"
            >
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[4px] bg-[#1467f5] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0f56d6]"
          >
            Request updates
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>

          {submitted ? (
            <p
              role="status"
              className="flex items-start gap-2 text-[12px] leading-5 text-[#7fa0ff]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              Your email app is ready with the request.
            </p>
          ) : null}
        </form>
      </div>
    </aside>
  );
}
