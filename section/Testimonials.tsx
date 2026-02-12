/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";
import { animate, motion, useMotionValue } from "framer-motion";

const ACCENT = "#00AAB7";

type T = {
  id: number;
  text: string;
  name: string;
  location: string;
  initial: string;
  rating?: number;
};

const testimonials: T[] = [
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
    id: 3,
    text: "We hired them for social media marketing and branding. The creatives were professional and engagement improved within weeks.",
    name: "Rakesh Patel",
    location: "Surat",
    initial: "R",
    rating: 5,
  },
  {
    id: 4,
    text: "Our exhibition stall promotions and digital campaigns were handled very smoothly. The team understands B2B marketing well.",
    name: "Vikram Singh",
    location: "Mumbai",
    initial: "V",
    rating: 5,
  },
  {
    id: 5,
    text: "They built and optimized our website properly. Now we are getting consistent inquiries from Google organically.",
    name: "Neha Kapoor",
    location: "Chandigarh",
    initial: "N",
    rating: 5,
  },
  {
    id: 6,
    text: "Very responsive team. From ad creatives to lead generation funnels, everything was executed professionally.",
    name: "Saurabh Mishra",
    location: "Lucknow",
    initial: "S",
    rating: 5,
  },
  {
    id: 7,
    text: "Clear strategy, honest guidance, and measurable results. Our brand visibility has improved across platforms.",
    name: "Meenal Desai",
    location: "Pune",
    initial: "M",
    rating: 5,
  },
  {
    id: 8,
    text: "Affordable yet performance-driven digital marketing services. They truly understand the Indian market dynamics.",
    name: "Arjun Nair",
    location: "Bengaluru",
    initial: "A",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-[#F59E0B]" fill="#F59E0B" stroke="none" />
      ))}
    </div>
  );
}

function ReviewCard({ item, cornerImgSrc = "/quote.png" }: { item: T; cornerImgSrc?: string }) {
  return (
    <div className="relative h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 min-h-[280px] flex flex-col">
      <div className="mb-4">
        <Stars count={item.rating ?? 5} />
      </div>

      <div className="absolute top-5 right-5 opacity-80">
        <img src={cornerImgSrc} alt="quote" className="h-8 w-8 object-contain" />
      </div>

      <p className="text-[15px] leading-7 text-black/70 pr-10 flex-1">&quot;{item.text}&quot;</p>

      <div className="mt-6 flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
          style={{ backgroundColor: ACCENT }}
        >
          {item.initial}
        </div>

        <div className="min-w-0">
          <div className="font-semibold text-black truncate">{item.name}</div>
          <div className="text-sm text-black/50 truncate">{item.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const list = useMemo(() => testimonials, []);
  const n = list.length;

  const x = useMotionValue(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [queue, setQueue] = useState<T[]>(() => {
    if (n === 0) return [];
    return [list[0 % n], list[1 % n], list[2 % n]];
  });

  const ptrRef = useRef(3);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    if (n < 3) return;

    let cancelled = false;

    const getStep = () => {
      const w = wrapRef.current?.clientWidth ?? 0;
      return w > 0 ? w / 2 : 0;
    };

    const slide = async () => {
      // Wait for width
      while (!cancelled && getStep() === 0) {
        await new Promise((r) => requestAnimationFrame(r));
      }
      if (cancelled) return;

      // Wait 3.2 seconds
      await new Promise((r) => {
        timerRef.current = setTimeout(r, 3200);
      });
      if (cancelled) return;

      const step = getStep();
      if (!step) return slide();

      // Stop any ongoing animation
      animRef.current?.stop();
      runningRef.current = true;

      // Animate to -step
      const controls = animate(x, -step, {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => {
          if (cancelled) return;

          // Update queue
          setQueue((prev) => {
            const nextItem = list[ptrRef.current % n];
            ptrRef.current += 1;
            return [prev[1], prev[2], nextItem];
          });

          // INSTANT reset without animation
          x.set(0);
          runningRef.current = false;

          // Continue loop
          if (!cancelled) slide();
        },
      });

      animRef.current = controls;
    };

    slide();

    const onResize = () => {
      animRef.current?.stop();
      x.set(0);
      runningRef.current = false;
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      animRef.current?.stop();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [n, list, x]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-sm text-black/60">
            <p className="mb-3 inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
              Pillars
            </p>

          </div>

          <div className="relative inline-block mt-3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              What <span className="font-extrabold">Our Happy Clients</span> Say About
              <br />
              <span className="font-extrabold">Working</span> With Us
            </h2>
          </div>
        </div>

        {/* 3 cards layout - FIXED: All cards now same height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fixed Google rating card - NOW SAME HEIGHT AS TESTIMONIAL CARDS */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] min-h-[280px] flex flex-col">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0B4E8F 0%, #0A4F97 40%, #0A3F7D 100%)",
              }}
            />
            <div className="relative h-full flex flex-col justify-between p-6 flex-1">
              <div>
                <div className="flex items-center gap-3">
                  <img src="/google.svg" alt="Google" className="h-10 w-10 object-contain" />
                  <div className="text-4xl font-extrabold text-white">4.9</div>
                </div>

                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#FBBF24]" fill="#FBBF24" stroke="none" />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/90 font-semibold leading-7">
                  We value your opinion: share your review with us
                </p>

                <button className="mt-6 w-fit px-6 py-3 rounded-full bg-[#FBBF24] text-black font-semibold hover:opacity-95 transition">
                  Write Your Review Here ↗
                </button>
              </div>
            </div>
          </div>

          {/* Carousel - FIXED: Smooth animation */}
          <div className="md:col-span-2 relative">
            <div ref={wrapRef} className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                style={{
                  width: "150%",
                  x,
                  willChange: "transform",
                }}
              >
                <div className="w-1/2 p-0 md:pr-3">
                  <ReviewCard item={queue[0]} cornerImgSrc="/quote.png" />
                </div>
                <div className="w-1/2 p-0 md:pl-3 md:pr-3">
                  <ReviewCard item={queue[1]} cornerImgSrc="/quote.png" />
                </div>
                <div className="w-1/2 p-0 md:pl-3">
                  <ReviewCard item={queue[2]} cornerImgSrc="/quote.png" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}