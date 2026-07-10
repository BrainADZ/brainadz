/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  initial: string;
  metric: string;
  service: string;
};

const FEATURED_STORY = {
  quote:
    "BrainADZ gave our marketing a clear system. The team understood our business, improved our campaigns, and kept every update transparent from planning to reporting.",
  name: "Amit Jain",
  role: "Director, Manufacturing Brand",
  location: "Ahmedabad",
  metric: "Quality inquiries improved within the first 60 days.",
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Their SEO and paid ads strategy helped us clean up our lead funnel. Communication was sharp, reports were easy to understand, and the team stayed focused on results.",
    name: "Priya Sharma",
    role: "Founder, Service Business",
    location: "Delhi NCR",
    initial: "P",
    metric: "2x better lead quality",
    service: "SEO + Paid Ads",
  },
  {
    quote:
      "We needed a website that looked credible and worked well for campaigns. BrainADZ handled design, development, tracking, and launch without making the process messy.",
    name: "Rohan Mehta",
    role: "Marketing Lead",
    location: "Mumbai",
    initial: "R",
    metric: "Faster campaign launch",
    service: "Website Development",
  },
  {
    quote:
      "The creative team helped us turn scattered ideas into clear campaign assets. The designs felt aligned with the brand and were delivered with proper planning.",
    name: "Neha Kapoor",
    role: "Brand Manager",
    location: "Dubai",
    initial: "N",
    metric: "Stronger brand recall",
    service: "Creative & Media",
  },
  {
    quote:
      "Their performance marketing work was practical and numbers-driven. We always knew what was being tested, what was working, and where the budget was going.",
    name: "Sanjay Gupta",
    role: "Business Owner",
    location: "Jaipur",
    initial: "S",
    metric: "Clearer ad performance",
    service: "Performance Marketing",
  },
];

const TRUST_POINTS = [
  { value: "4.9/5", label: "Average client rating" },
  { value: "13+", label: "Years of digital execution" },
  { value: "360", label: "Strategy, creative and tech support" },
  { value: "24/7", label: "Campaign visibility and reporting" },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-[#f5b301] text-[#f5b301]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function InitialBadge({ children }: { children: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E1122B] text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(225,18,43,0.22)]">
      {children}
    </span>
  );
}

function ReviewCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 80}
      className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[10px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E1122B]">
            {item.service}
          </p>
          <p className="mt-2 text-[18px] font-semibold leading-tight tracking-[-0.02em] text-black">
            {item.metric}
          </p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-[#fff7f7] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
          <Quote className="h-4 w-4 fill-current" strokeWidth={1.5} />
        </span>
      </div>

      <blockquote className="flex-1 text-[15px] font-medium leading-7 text-black/66">
        {item.quote}
      </blockquote>

      <div className="mt-7 flex items-center gap-3 border-t border-black/10 pt-5">
        <InitialBadge>{item.initial}</InitialBadge>
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-black">
            {item.name}
          </p>
          <p className="mt-1 truncate text-[12px] font-medium text-black/45">
            {item.role} - {item.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 text-black md:py-20"
    >
      <div className="relative mx-auto max-w-[1800px] px-5 md:px-8 lg:px-12">
        <div className="mb-12 grid gap-7 border-b border-black/10 pb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-16 lg:pb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-black/45">
                Client Stories
              </p>
            </div>
            <h2 className="mt-3 max-w-[850px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
              Work That Clients
              <span className="block text-[#E1122B]">Remember.</span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[15px] font-medium leading-7 text-black/60 lg:justify-self-end lg:text-right">
            Real feedback from teams that trusted BrainADZ for strategy,
            campaigns, creative execution, websites, and measurable growth.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <article
            data-aos="fade-up"
            className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[10px] bg-[#151515] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:p-9 lg:p-10"
          >
            <img
              src="/quote.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-40 w-40 object-contain opacity-10"
            />
            <div className="relative flex items-center justify-between gap-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/6 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E1122B]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/72">
                  Featured Review
                </span>
              </div>
              <Stars />
            </div>

            <blockquote className="relative mt-12 max-w-[680px] text-[28px] font-semibold leading-[1.18] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
              {FEATURED_STORY.quote}
            </blockquote>

            <div className="relative mt-auto pt-12">
              <p className="max-w-[460px] border-l-2 border-[#E1122B] pl-5 text-[15px] font-medium leading-7 text-white/68">
                {FEATURED_STORY.metric}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-7">
                <div className="flex items-center gap-4">
                  <InitialBadge>A</InitialBadge>
                  <div>
                    <p className="text-[17px] font-semibold text-white">
                      {FEATURED_STORY.name}
                    </p>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-white/45">
                      {FEATURED_STORY.role} - {FEATURED_STORY.location}
                    </p>
                  </div>
                </div>

                <a
                  href="/contact-us"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/22 px-5 text-[12px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B]"
                >
                  Start A Project
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.map((item, index) => (
              <ReviewCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-5 grid overflow-hidden rounded-[10px] border border-black/10 bg-[#fbfbfb] sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRUST_POINTS.map((point) => (
            <div
              key={point.label}
              className="border-b border-black/10 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-black">
                {point.value}
              </p>
              <p className="mt-3 max-w-[220px] text-[13px] font-medium leading-5 text-black/52">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
