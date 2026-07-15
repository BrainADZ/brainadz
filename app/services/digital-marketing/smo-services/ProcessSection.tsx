import Link from "next/link";
import { ArrowRight, BarChart3, CalendarRange, FileSearch, MessagesSquare, Settings2 } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit the current presence",
    description: "We review profile completeness, brand consistency, content history, audience response, competitors and the role of every active channel.",
    timing: "Days 1-3",
    output: "Profile and content audit",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Set the optimization roadmap",
    description: "We prioritize profile improvements, channel roles, content pillars, audience needs, publishing rhythm and meaningful performance indicators.",
    timing: "Week 1",
    output: "SMO strategy and priorities",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Plan and create content",
    description: "Monthly themes become platform-ready posts, carousels, stories, short videos and captions through an organized approval workflow.",
    timing: "Every cycle",
    output: "Calendar and creative assets",
    icon: CalendarRange,
  },
  {
    number: "04",
    title: "Publish and manage community",
    description: "Approved content is published consistently while comments, messages, mentions and relevant audience signals are monitored.",
    timing: "Ongoing",
    output: "Active optimized channels",
    icon: MessagesSquare,
  },
  {
    number: "05",
    title: "Measure and optimize again",
    description: "We review discovery, reach, engagement, profile actions and content patterns to sharpen the next month of organic activity.",
    timing: "Monthly",
    output: "Report and improvement plan",
    icon: BarChart3,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-[164px] border-b border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-[188px]">
          <div className="flex items-center gap-3"><span className="h-0.5 w-8 bg-[#E1122B]" /><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">Process</p></div>
          <h2 className="mt-5 max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">A continuous cycle of clarity, consistency and improvement</h2>
          <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-black/62 sm:text-[16px] sm:leading-8">SMO is not a one-time profile update. We build a clear working rhythm that improves the channel as audience behavior, content performance and business priorities change.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full border border-[#E1122B] px-5 text-[13px] font-semibold text-[#E1122B] transition-colors hover:bg-[#E1122B] hover:text-white">Plan your SMO roadmap<ArrowRight className="h-5 w-5" strokeWidth={1.7} /></Link>
        </div>

        <div className="border-t border-black/10">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="group grid gap-5 border-b border-black/10 py-7 transition-colors hover:bg-[#fff8f8] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8">
                <div className="flex items-start justify-between gap-5 sm:block">
                  <span className="text-[24px] font-medium text-[#E1122B]">{step.number}</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] sm:mt-5"><Icon className="h-5 w-5" strokeWidth={1.6} /></div>
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold leading-tight text-black sm:text-[28px]">{step.title}</h3>
                  <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-black/58 sm:text-[15px]">{step.description}</p>
                </div>
                <dl className="grid grid-cols-2 gap-4 border-t border-black/10 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <div><dt className="text-[12px] font-medium uppercase text-black/42">Timing</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.timing}</dd></div>
                  <div><dt className="text-[12px] font-medium uppercase text-black/42">Output</dt><dd className="mt-2 text-[14px] leading-6 text-black/68">{step.output}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
