"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "What is included in your SMM service?",
    answer:
      "The scope can include account audit, channel strategy, content planning, copywriting, creative production, publishing, community monitoring and monthly performance reporting. We finalize the exact mix around your goals and internal capabilities.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We support Instagram, Facebook, LinkedIn, YouTube and X. The recommended channel mix depends on where your audience is active, what content your brand can sustain and the role each platform plays in the customer journey.",
  },
  {
    question: "Do you create reels, posts and other social content?",
    answer:
      "Yes. We can create static posts, carousels, stories, reels, short videos, campaign creatives and supporting copy. Production requirements such as shoots, creators or advanced animation are planned separately when needed.",
  },
  {
    question: "How does the content approval process work?",
    answer:
      "Content is organized into a clear review cycle before publishing. Your team receives the calendar, copy and creatives together, shares consolidated feedback and approves the final assets according to an agreed timeline.",
  },
  {
    question: "How quickly can social media marketing show results?",
    answer:
      "Profile quality and consistency can improve early, while audience growth, engagement and qualified enquiries usually require sustained execution. Timelines vary with your starting point, market, content quality, campaign activity and budget.",
  },
  {
    question: "Are paid social media ads included?",
    answer:
      "Organic social management and paid campaigns can work together, but ad spend and performance marketing management are scoped separately. We can coordinate both so creative, audiences, landing pages and reporting support the same goal.",
  },
  {
    question: "How do you measure SMM performance?",
    answer:
      "Reporting focuses on metrics connected to the agreed objective, including reach, engagement, audience quality, profile actions, website visits, enquiries and campaign outcomes. Each report also includes practical recommendations for the next cycle.",
  },
  {
    question: "Can you work with our existing marketing team?",
    answer:
      "Yes. We can own the complete workflow or support your team with strategy, creative production, publishing or reporting. Responsibilities, approvals and handoffs are defined at the start so work moves without confusion.",
  },
];

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="scroll-mt-[164px] border-b border-white/12 bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-[188px]">
          <p className="text-[13px] font-medium uppercase text-white/52">
            FAQs
          </p>
          <h2 className="mt-4 max-w-[700px] text-[38px] font-normal leading-[1.08] text-white sm:text-[50px] lg:text-[60px]">
            Questions before we get social?
          </h2>
          <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
            Here are the practical details brands usually want to understand
            before starting a social media engagement.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-8 rounded-[4px] border border-[#1467f5] px-5 text-[14px] font-medium text-[#6995ff] transition-colors hover:bg-[#1467f5] hover:text-white"
          >
            Ask another question
            <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
          </Link>
        </div>

        <div className="border-t border-white/16">
          {FAQS.map((faq, index) => {
            const isActive = activeFaq === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="border-b border-white/16">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveFaq(isActive ? null : index)}
                  className="flex min-h-20 w-full items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#6995ff] focus-visible:text-[#6995ff] focus-visible:outline-none sm:px-4"
                >
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-[#6995ff]" : "text-white/64"
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
                      aria-labelledby={buttonId}
                      aria-hidden={!isActive}
                      className="px-1 pb-7 sm:px-4"
                    >
                      <p className="max-w-[860px] text-[14px] leading-7 text-white/62 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
