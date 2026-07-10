/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useState, type TransitionEvent } from "react";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  location: string;
  initial: string;
  rating?: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "We were struggling to get quality leads for our manufacturing business. Within 2 months of working with them, our inquiries increased significantly. Very systematic and result-focused team.",
    name: "Amit Jain",
    location: "Ahmedabad",
    initial: "A",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
];

const AUTO_PLAY_DELAY_MS = 5000;
const SLIDE_TRANSITION_MS = 700;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-[#f5b301] text-[#f5b301]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: Testimonial }) {
  return (
    <article className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:shadow-[0_22px_60px_rgba(0,0,0,0.09)] sm:p-8">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#E1122B] opacity-0 transition group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-5">
        <Stars count={item.rating ?? 5} />
        <span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#fff7f7] text-[#E1122B]/50">
          <Quote className="h-5 w-5 fill-current" strokeWidth={1.5} />
        </span>
      </div>

      <blockquote className="mt-9 flex-1 text-[16px] font-medium leading-8 text-black/70">
        {`"${item.text}"`}
      </blockquote>

      <div className="mt-8 flex items-center gap-4 border-t border-black/10 pt-6">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#193175] text-[15px] font-bold text-white shadow-[0_10px_26px_rgba(25,49,117,0.22)]">
          {item.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-black">
            {item.name}
          </p>
          <p className="mt-1 truncate text-[12px] font-medium text-black/45">
            {item.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialSection() {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [slidePosition, setSlidePosition] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerView);
  const testimonialPages = Array.from({ length: totalPages }, (_, pageIndex) =>
    TESTIMONIALS.slice(
      pageIndex * itemsPerView,
      pageIndex * itemsPerView + itemsPerView,
    ),
  );
  const loopPages = [
    testimonialPages[totalPages - 1],
    ...testimonialPages,
    testimonialPages[0],
  ];
  const slideOffset = Math.min(Math.max(slidePosition, 0), totalPages + 1);
  const activePage =
    slideOffset === 0
      ? totalPages - 1
      : slideOffset === totalPages + 1
        ? 0
        : slideOffset - 1;

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const updateItemsPerView = () => {
      setItemsPerView(breakpoint.matches ? 2 : 1);
      setTransitionEnabled(false);
      setSlidePosition(1);
    };

    updateItemsPerView();
    breakpoint.addEventListener("change", updateItemsPerView);

    return () => breakpoint.removeEventListener("change", updateItemsPerView);
  }, []);

  useEffect(() => {
    if (totalPages <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setSlidePosition((current) => {
        if (current < 1 || current >= totalPages + 1) {
          return 1;
        }

        return current + 1;
      });
    }, AUTO_PLAY_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  useEffect(() => {
    if (slidePosition > totalPages + 1 || slidePosition < 0) {
      const resetTimer = window.setTimeout(() => {
        setTransitionEnabled(false);
        setSlidePosition(slidePosition < 0 ? totalPages : 1);
      }, 0);

      return () => window.clearTimeout(resetTimer);
    }

    if (slidePosition !== 0 && slidePosition !== totalPages + 1) {
      return;
    }

    const resetTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setSlidePosition(slidePosition === 0 ? totalPages : 1);
    }, SLIDE_TRANSITION_MS + 80);

    return () => window.clearTimeout(resetTimer);
  }, [slidePosition, totalPages]);

  const showPrevious = () => {
    setTransitionEnabled(true);
    setSlidePosition((current) => {
      if (current <= 0) {
        return totalPages;
      }

      return current - 1;
    });
  };

  const showNext = () => {
    setTransitionEnabled(true);
    setSlidePosition((current) => {
      if (current >= totalPages + 1) {
        return 1;
      }

      return current + 1;
    });
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform"
    ) {
      return;
    }

    if (slidePosition === totalPages + 1) {
      setTransitionEnabled(false);
      setSlidePosition(1);
    } else if (slidePosition === 0) {
      setTransitionEnabled(false);
      setSlidePosition(totalPages);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-8 text-black md:py-14"
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
            <h2 className="mt-3 max-w-[820px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
              Trusted Partnerships.
              <span className="block text-[#E1122B]">Measurable Growth.</span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[15px] font-medium leading-7 text-black/60 lg:justify-self-end lg:text-right">
            Honest feedback from businesses that partnered with BrainADZ to
            strengthen their digital presence and create meaningful growth.
          </p>
        </div>

        <div className="grid items-start gap-5 xl:grid-cols-3">
          <article className="relative flex h-[410px] flex-col overflow-hidden rounded-[14px] border border-black/10 bg-[#fbfbfb] p-7 shadow-[0_16px_45px_rgba(0,0,0,0.06)] sm:p-8">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-[#E1122B]" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <img src="/google.svg" alt="Google" width={27} height={27} />
              </div>
              <span className="rounded-full border border-[#E1122B]/15 bg-[#fff7f7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E1122B]">
                Google Reviews
              </span>
            </div>

            <div className="relative mt-10">
              <div className="flex items-end gap-3">
                <span className="text-[64px] font-semibold leading-none tracking-[-0.06em] text-black">
                  4.9
                </span>
                <span className="pb-1.5 text-[13px] font-medium text-black/50">
                  out of 5
                </span>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
            </div>

            <div className="relative mt-auto pt-9">
              <p className="max-w-[320px] text-[14px] font-medium leading-6 text-black/62">
                Worked with us? Share your experience and help others discover
                BrainADZ.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#193175] px-6 text-[12px] font-semibold text-white transition hover:bg-[#E1122B]"
              >
                Write A Review
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </article>

          <div className="min-w-0 xl:col-span-2">
            <div className="-mx-2.5 overflow-hidden" aria-live="polite">
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex items-stretch ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  transitionEnabled
                    ? "transition-transform duration-700"
                    : "transition-none"
                }`}
                style={{ transform: `translateX(-${slideOffset * 100}%)` }}
              >
                {loopPages.map((page, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="flex w-full shrink-0 items-stretch"
                  >
                    {page.map((item, itemIndex) => (
                      <div
                        key={`${item.id}-${pageIndex}-${itemIndex}`}
                        className="h-[410px] shrink-0 px-2.5"
                        style={{ flexBasis: `${100 / itemsPerView}%` }}
                      >
                        <ReviewCard item={item} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-5">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setTransitionEnabled(true);
                      setSlidePosition(index + 1);
                    }}
                    aria-label={`Show testimonial page ${index + 1}`}
                    aria-current={activePage === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activePage === index
                        ? "w-10 bg-[#E1122B]"
                        : "w-4 bg-black/15 hover:bg-black/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Show previous testimonials"
                  className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black transition hover:border-[#E1122B] hover:bg-[#E1122B] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.7} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Show next testimonials"
                  className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black transition hover:border-[#E1122B] hover:bg-[#E1122B] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
