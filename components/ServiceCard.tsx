/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type ServiceCardData = {
  num?: string;
  title: string;
  desc: string;
  icon: string; // img src path
  href: string; // Know More URL
};

const HOVER_BG = "#FFFFFF";
const CARD_BG = "#00AAB7";

const useIsTouchLike = () => {
  const [isTouchLike, setIsTouchLike] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsTouchLike(window.matchMedia("(max-width: 767px)").matches);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isTouchLike;
};

export default function ServiceCard({ service }: { service: ServiceCardData }) {
  const isTouchLike = useIsTouchLike();
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isTouchLike || !isActive) return;

    const onDocClick = (e: MouseEvent | TouchEvent) => {
      const el = cardRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, [isTouchLike, isActive]);

  const activeClass = isActive ? "is-active" : "";

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden
        border border-black/10
        shadow-[0_18px_55px_rgba(0,0,0,0.18)]
        transition-all duration-300
        hover:-translate-y-1
        ${activeClass}
      `}
      style={{ backgroundColor: CARD_BG }}
      onClick={() => {
        if (!isTouchLike) return; 
        setIsActive((v) => !v);   
      }}
      role={isTouchLike ? "button" : undefined}
      tabIndex={isTouchLike ? 0 : undefined}
      onKeyDown={(e) => {
        if (!isTouchLike) return;
        if (e.key === "Enter" || e.key === " ") setIsActive((v) => !v);
      }}
    >
      {/* small quarter circle */}
      <div
        className="absolute -left-10 -bottom-10 h-20 w-20 rounded-full z-0"
        style={{ backgroundColor: HOVER_BG }}
      />

      {/* expanding blob on hover OR active */}
      <div
        className="
          absolute -left-16 -bottom-16 h-28 w-28 rounded-full z-0
          transition-all duration-1000 ease-out
          group-hover:h-[820px] group-hover:w-[820px]
          group-hover:-left-[260px] group-hover:-bottom-[260px]
          group-[.is-active]:h-[820px] group-[.is-active]:w-[800px]
          group-[.is-active]:-left-[260px] group-[.is-active]:-bottom-[260px]
        "
        style={{ backgroundColor: HOVER_BG }}
      />

      {/* soft gloss on hover OR active */}
      <div
        className="
          pointer-events-none absolute inset-0 z-1
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100 group-[.is-active]:opacity-100
          bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_55%)]
        "
      />

      {/* content */}
      <div className="relative z-10 flex min-h-[340px] flex-col p-6">
        {/* top */}
        <div className="flex items-start justify-between">
          {/* icon */}
          <div className="grid h-16 w-16 place-items-center">
            <img src={service.icon} alt="" className="h-16 w-16 object-contain" />
          </div>

          {/* number outline */}
          {service.num ? (
            <div
              className="text-[54px] font-extrabold leading-none text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}
            >
              {service.num}
            </div>
          ) : null}
        </div>

        {/* title + desc */}
        <div className="mt-7 flex-1">
          <h3
            className="
              text-lg font-extrabold uppercase tracking-[0.14em]
              text-[#FCF300] transition-colors duration-300
              group-hover:text-black group-[.is-active]:text-black
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-4 text-sm leading-relaxed
              text-white
               transition-colors duration-300
              group-hover:text-black/80 group-[.is-active]:text-black/80
            "
          >
            {service.desc}
          </p>
        </div>

        {/* button (hover OR active) */}
        <div
          className="
            mt-6 opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
            group-[.is-active]:opacity-100 group-[.is-active]:translate-y-0
          "
          // ✅ mobile pe button click pe card toggle na ho
          onClick={(e) => {
            if (isTouchLike) e.stopPropagation();
          }}
        >
          <Link
            href={service.href}
            className="
              inline-flex items-center gap-2
              rounded-full bg-white/85
              px-5 py-2 text-sm font-semibold text-black
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              transition-all duration-200
              hover:bg-white hover:-translate-y-0.5
            "
          >
            Know More <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
