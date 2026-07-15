"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SMO_FAQS } from "./data";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-[164px] border-b border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-[188px]">
          <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">FAQs</p></div>
          <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">Questions before we optimize?</h2>
          <p className="mt-6 max-w-[580px] text-[15px] leading-7 text-black/58 sm:text-[16px] sm:leading-8">Here are the practical details brands usually want to understand before beginning an SMO engagement.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Ask another question<ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
        </div>

        <div className="border-t border-black/10">
          {SMO_FAQS.map((faq, index) => {
            const isActive = activeFaq === index;
            const panelId = `smo-faq-panel-${index}`;
            const buttonId = `smo-faq-button-${index}`;
            return (
              <div key={faq.question} className="border-b border-black/10">
                <button id={buttonId} type="button" aria-expanded={isActive} aria-controls={panelId} onClick={() => setActiveFaq(isActive ? null : index)} className="flex min-h-20 w-full items-center justify-between gap-6 px-1 py-5 text-left transition-colors hover:text-[#E1122B] focus-visible:text-[#E1122B] focus-visible:outline-none sm:px-4">
                  <span className="max-w-[820px] text-[18px] font-medium leading-7 sm:text-[20px]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-[#E1122B]" : "text-black/55"}`} strokeWidth={1.7} />
                </button>
                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!isActive} className="px-1 pb-7 sm:px-4"><p className="max-w-[860px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{faq.answer}</p></div>
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
