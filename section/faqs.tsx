"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "How can BrainADZ help my business grow online?",
    answer:
      "BrainADZ combines strategy, design, content, paid media, SEO, and development so your digital presence can attract, convert, and retain better customers.",
  },
  {
    question: "Do you handle both website development and marketing?",
    answer:
      "Yes. We build websites, landing pages, campaigns, social media systems, paid ads, SEO plans, and analytics dashboards under one execution team.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with service brands, manufacturers, e-commerce companies, events, exhibitions, startups, and established businesses that need measurable growth.",
  },
  {
    question: "How long does it take to launch a project?",
    answer:
      "Timelines depend on scope. Smaller landing pages and campaigns can move quickly, while custom websites, apps, and full digital systems are planned in milestones.",
  },
  {
    question: "Can BrainADZ manage paid ads and performance reporting?",
    answer:
      "Yes. We set up campaigns, tracking, creative testing, landing page improvements, and reporting so the campaign is optimized around real business outcomes.",
  },
  {
    question: "Do you provide creative design and brand support?",
    answer:
      "Yes. Our team supports logo design, campaign creatives, social media content, brand assets, presentations, brochures, and exhibition communication.",
  },
  {
    question: "Do you provide creative design and brand support?",
    answer:
      "Yes. Our team supports logo design, campaign creatives, social media content, brand assets, presentations, brochures, and exhibition communication.",
  },
  {
    question: "Do you provide creative design and brand support?",
    answer:
      "Yes. Our team supports logo design, campaign creatives, social media content, brand assets, presentations, brochures, and exhibition communication.",
  },
  {
    question: "Do you provide creative design and brand support?",
    answer:
      "Yes. Our team supports logo design, campaign creatives, social media content, brand assets, presentations, brochures, and exhibition communication.",
  },
  {
    question: "Do you provide creative design and brand support?",
    answer:
      "Yes. Our team supports logo design, campaign creatives, social media content, brand assets, presentations, brochures, and exhibition communication.",
  },
];

const MARKETING_SERVICES = [
  "SEO and organic growth",
  "Performance ads",
  "Social media marketing",
  "Website and landing pages",
  "Branding and creative design",
  "Complete digital marketing",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" bg-white  py-16 text-black  lg:py-20">
      <div className="mx-auto max-w-[1800px] px-5 md:px-8 lg:px-12">
        <div className="mb-12 border-b border-black/10 pb-10 lg:pb-12">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black/45">
              FAQ
            </p>
          </div>

          <h2 className="mt-3 max-w-[820px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
            Frequently Asked
            <span className="block text-[#E1122B]">Questions.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:h-[660px] lg:min-h-0 lg:grid-cols-[0.86fr_1.14fr]">
          <ContactMiniForm />

          <div className="max-h-[560px] min-h-0 overflow-hidden rounded-[14px] border border-black/10 bg-white text-black shadow-[0_16px_45px_rgba(0,0,0,0.06)] lg:h-full lg:max-h-none">
            <div className="faq-panel-scroll max-h-[560px] overflow-y-auto lg:h-full lg:max-h-none">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={`${faq.question}-${index}`}
                    className={`border-b border-black/10 transition-colors last:border-b-0 ${
                      isOpen ? "bg-[#fff7f7]" : "bg-white hover:bg-[#fbfbfb]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-9"
                      aria-expanded={isOpen}
                    >
                      <span className="flex gap-7 text-[20px] font-semibold leading-snug tracking-[-0.02em] sm:text-[23px]">
                        <span className="shrink-0 font-mono text-[15px] font-medium text-[#E1122B]">
                          [{index + 1}]
                        </span>
                        <span>{faq.question}</span>
                      </span>

                      <FiChevronDown
                        className={`mt-1 h-6 w-6 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#E1122B]" : "text-black/55"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[760px] px-6 pb-7 pl-[86px] text-[15px] leading-7 text-black/65 sm:px-9 sm:pl-[104px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .faq-panel-scroll {
              overscroll-behavior: contain;
              scrollbar-gutter: stable;
              scrollbar-width: thin;
              scrollbar-color: rgba(225, 18, 43, 0.55) transparent;
            }

            .faq-panel-scroll::-webkit-scrollbar {
              width: 8px;
            }

            .faq-panel-scroll::-webkit-scrollbar-track {
              background: transparent;
              margin: 14px 0;
            }

            .faq-panel-scroll::-webkit-scrollbar-thumb {
              background: rgba(225, 18, 43, 0.55);
              border: 2px solid #ffffff;
              border-radius: 999px;
            }

            .faq-panel-scroll:hover::-webkit-scrollbar-thumb {
              background: rgba(225, 18, 43, 0.8);
            }
          `,
        }}
      />
    </section>
  );
}

function ContactMiniForm() {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] p-6 text-black shadow-[0_16px_45px_rgba(0,0,0,0.06)] sm:p-7 lg:flex lg:h-full lg:flex-col">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-[#E1122B]" />

      <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em]">
        Didn&apos;t Find What You Were Looking For?
      </h3>

      <p className="mt-3 max-w-[620px] text-[14px] font-medium leading-6 text-black/62">
        We&apos;ve got more answers waiting for you. Share a few details and our
        team will reach out with the right next step.
      </p>

      <form className="mt-7 flex flex-col gap-6 lg:flex-1 lg:gap-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-5">
          <MinimalField label="Name" placeholder="Full Name" />
          <MinimalField label="Company / Brand" placeholder="Brand Name" />
          <MinimalField label="Contact Number" placeholder="Enter Your Number*" />
          <MinimalField label="Work Email" placeholder="Enter Email Address*" />
        </div>

        <MinimalSelect
          label="Marketing Need"
          placeholder="Select Marketing Service"
          options={MARKETING_SERVICES}
        />
        <MinimalTextarea placeholder="Tell us your marketing goal" />

      
        <div className="flex justify-end">
          <button
            type="button"
            className="min-h-12 rounded-full bg-[#193175] px-12 text-[14px] font-semibold text-white transition hover:bg-[#E1122B]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function MinimalField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-black/55">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 h-8 w-full border-b border-black/20 bg-transparent text-[15px] text-black outline-none placeholder:text-black/35 focus:border-[#E1122B]"
      />
    </label>
  );
}

function MinimalSelect({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-black/55">
        {label}
      </span>
      <select
        defaultValue=""
        className="mt-2 h-9 w-full border-b border-black/20 bg-transparent text-[15px] text-black outline-none focus:border-[#E1122B]"
      >
        <option value="" disabled className="text-black/45">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function MinimalTextarea({ placeholder }: { placeholder: string }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={3}
      className="min-h-[68px] w-full resize-none border-b border-black/20 bg-transparent text-[15px] text-black outline-none placeholder:text-black/35 focus:border-[#E1122B]"
    />
  );
}
