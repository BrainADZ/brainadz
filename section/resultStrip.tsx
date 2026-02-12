"use client";

import { FiTrendingUp, FiUsers, FiBell, FiAward } from "react-icons/fi";

type Stat = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const STATS: Stat[] = [
  { icon: <FiTrendingUp />, title: "Boosting Revenue", value: "2X to 6x" },
  { icon: <FiUsers />, title: "Improved Leads", value: "3X to 8x" },
  { icon: <FiBell />, title: "Social Media", value: "4X to 8x" },
  { icon: <FiAward />, title: "Brand Exposure", value: "100 to 1000%" },
];

export default function ResultStrip() {
  return (
    <section className="w-full bg-[#fff8ec] ">
      {/* top line */}
      <div className="h-0.5 w-full bg-[#8FD3DB]" />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6">
        {/* floating pill */}
        <div className="pointer-events-none absolute left-1/2 top-[-10] z-10 w-[92%] max-w-[560px] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between gap-3 rounded-[22px] bg-[#2FC6C8] px-5 py-3 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <span className="leading-tight">
              Highlight specific projects or results
              <br className="hidden sm:block" />
              achieved for clients.
            </span>

            <span className="flex items-center gap-1 text-[#6b5200]">
              <span className="text-[14px]">★</span>
              <span className="text-[14px]">★</span>
              <span className="text-[14px]">★</span>
              <span className="text-[14px]">★</span>
              <span className="text-[14px]">★</span>
            </span>
          </div>
        </div>

        {/* stats row */}
        <div className="grid grid-cols-2 gap-6 py-8 pt-10 md:grid-cols-4 md:gap-10 md:py-6">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-yellow-500 bg-yellow-500 text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                <span className="text-[28px]">{s.icon}</span>
              </div>
          
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-black/80">
                  {s.title}
                </div>
                <div className="mt-1 text-[16px] font-extrabold text-black">
                  {s.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
