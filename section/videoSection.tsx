"use client";

import React from "react";

export default function InfiniteValuesVideoSection() {
  return (
    <section className="w-full bg-black">
      {/* ================= TITLE DIV ================= */}
      <div className="w-full bg-black items-center">
        <div className="mx-auto max-w-[1500px] px-4 py-10 md:py-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#00AAB7] md:text-5xl text-center">
            Infinite Values At GH
          </h2>
        </div>
      </div>

      {/* ================= VIDEO DIV ================= */}
      <div className="relative h-[22vh] md:h-screen w-screen overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/GH.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Optional overlay (remove if not needed) */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}
