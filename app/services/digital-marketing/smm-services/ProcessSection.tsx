import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  FileSearch,
  MessagesSquare,
  PanelsTopLeft,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit and align",
    description:
      "We review your current profiles, content, audience, competitors and business priorities before deciding what social media needs to achieve.",
    timing: "Days 1-3",
    output: "Account audit and goal brief",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan the content system",
    description:
      "We define platform roles, content pillars, campaign themes, formats, publishing rhythm and the metrics that will guide the work.",
    timing: "Week 1",
    output: "Strategy and monthly calendar",
    icon: CalendarRange,
  },
  {
    number: "03",
    title: "Create and approve",
    description:
      "Our team develops the copy, designs, carousels, reels and campaign assets, then organizes feedback into a clear approval workflow.",
    timing: "Every cycle",
    output: "Ready-to-publish content",
    icon: PanelsTopLeft,
  },
  {
    number: "04",
    title: "Publish and engage",
    description:
      "Approved content is scheduled at the right time while comments, messages and audience signals are monitored for timely action.",
    timing: "Ongoing",
    output: "Consistent channel activity",
    icon: MessagesSquare,
  },
  {
    number: "05",
    title: "Measure and improve",
    description:
      "We review reach, engagement, enquiries and content patterns to identify what worked and sharpen the next campaign cycle.",
    timing: "Monthly",
    output: "Report and next-step plan",
    icon: BarChart3,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-[164px] border-b border-white/12 bg-[#080808] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-[188px]">
          <p className="text-[13px] font-medium uppercase text-white/52">
            Process
          </p>
          <h2 className="mt-4 max-w-[700px] text-[38px] font-normal leading-[1.08] text-white sm:text-[50px] lg:text-[60px]">
            A clear rhythm from strategy to steady growth
          </h2>
          <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
            Everyone knows what is being created, why it matters and what comes
            next. The workflow stays structured while leaving room to respond
            to trends, campaigns and real audience behavior.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-8 rounded-[4px] border border-[#1467f5] px-5 text-[14px] font-medium text-[#6995ff] transition-colors hover:bg-[#1467f5] hover:text-white"
          >
            Plan your social workflow
            <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
          </Link>
        </div>

        <div className="border-t border-white/16">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group grid gap-5 border-b border-white/16 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-[72px_1fr] sm:px-4 lg:grid-cols-[72px_1fr_220px] lg:gap-7 lg:py-8"
              >
                <div className="flex items-start justify-between gap-5 sm:block">
                  <span className="text-[24px] font-normal text-[#6995ff]">
                    {step.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center border border-[#1467f5]/50 text-[#6995ff] sm:mt-5">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                </div>

                <div>
                  <h3 className="text-[24px] font-medium leading-tight text-white sm:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[720px] text-[14px] leading-7 text-white/62 sm:text-[15px]">
                    {step.description}
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-4 border-t border-white/12 pt-5 sm:col-start-2 lg:col-start-auto lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <div>
                    <dt className="text-[12px] font-medium uppercase text-white/42">
                      Timing
                    </dt>
                    <dd className="mt-2 text-[14px] leading-6 text-white/76">
                      {step.timing}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-medium uppercase text-white/42">
                      Output
                    </dt>
                    <dd className="mt-2 text-[14px] leading-6 text-white/76">
                      {step.output}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
