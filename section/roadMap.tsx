/* eslint-disable @next/next/no-img-element */
import React from "react";

const ACCENT = "#00AAB7";

export function ClientsFirstSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">


        {/* Roadmap */}
        <JourneyRoadmap />
      </div>
    </section>
  );
}

/* -------------------- Helpers -------------------- */



/**
 * Classic, clean roadmap:
 * - Desktop: horizontal timeline
 * - Mobile: vertical timeline
 * - No extra huge spacing, no flashy gimmicks
 */
function JourneyRoadmap() {
  const timeline = [
    {
      year: "2009",
      title: "The Beginning",
      desc: "BrainADZ started with a small team and a big vision to deliver measurable marketing results.",
      image: "/begining.png",
    },
    {
      year: "2012",
      title: "Building Foundations",
      desc: "Expanded into SEO, PPC & creative services with structured processes and performance systems.",
      image: "/foundation.png",
    },
    {
      year: "2016",
      title: "Scaling Operations",
      desc: "Delivered 200+ projects and built a strong in-house team of digital specialists.",
      image: "/scale.png",
    },
    {
      year: "2020",
      title: "Performance Driven Era",
      desc: "Focused heavily on ROI marketing, analytics, automation and scalable funnels.",
      image: "/journey/2020.jpg",
    },
    {
      year: "Today",
      title: "15+ Years of Excellence",
      desc: "500+ projects delivered, 120+ experts, and a culture built on performance & long-term partnerships.",
      image: "/journey/today.jpg",
    },
  ];

  return (
    <div >
      {/* Header */}
      <div className="text-center">
        <span
          className="inline-block px-4 py-1 text-sm font-medium rounded-full"
          style={{ backgroundColor: "#E6F7F9", color: ACCENT }}
        >
          Our 15+ Year Journey
        </span>

        <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900">
          From Vision to Industry Leadership
        </h3>

        {/* fade line */}
      

        <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
          Over the last 15+ years, we have evolved, scaled, and consistently
          delivered measurable growth for brands across industries.
        </p>
          <div className="mx-auto mt-4 h-[2px] w-56 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative mt-20">
        {/* Vertical dashed line (timeline) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-2 border-dashed"
          style={{ borderColor: ACCENT }}
        />

        <div className="space-y-10">
          {timeline.map((item, index) => {
            const isTextLeft = index % 2 === 0; // 0: text left, 1: text right ...

            return (
              <div
                key={item.year}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Dot Node */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-4 bg-white"
                  style={{ borderColor: ACCENT }}
                />

                {/* LEFT COLUMN */}
                <div className={`${isTextLeft ? "md:pr-7" : "md:pr-7"}`}>
                  {isTextLeft ? (
                    <TextCard item={item} />
                  ) : (
                    <ImageCard item={item} />
                  )}
                </div>

                {/* RIGHT COLUMN */}
                <div className={`${isTextLeft ? "md:pl-7" : "md:pl-7"}`}>
                  {isTextLeft ? (
                    <ImageCard item={item} />
                  ) : (
                    <TextCard item={item} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function TextCard({
  item,
}: {
  item: { year: string; title: string; desc: string };
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-300">
      <span className="text-sm font-semibold" style={{ color: ACCENT }}>
        {item.year}
                  <div className="mt-1 h-0.5 w-26 bg-linear-to-r from-gray-500 via-gray-500 to-transparent" />

      </span>

      <h4 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h4>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
    </div>
  );
}

function ImageCard({
  item,
}: {
  item: { title: string; image: string };
}) {
  return (
    <div className="overflow-hidden rounded-3xl ">
      <img
        src={item.image}
        alt={item.title}
        className="w-[350px] h-auto object-contain hover:scale-105 transition duration-500"
      />
    </div>
  );
}
