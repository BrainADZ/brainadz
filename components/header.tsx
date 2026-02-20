/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiChevronDown, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href?: string }[];
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // desktop dropdown
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);

  // mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>(
    {}
  );

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdown on outside click + ESC
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenDesktop(null);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // lock body scroll when mobile drawer open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const NAV: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },

      {
        label: "About",
        children: [
          { label: "Company Overview", href: "/company-overview" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Team", href: "/teams" },
        ],
      },

      {
        label: "Services",
        children: [
          { label: "SEO", href: "/services/seo" },
          { label: "Social Media Marketing (SMM)", href: "/services/smm" },
          { label: "Performance Marketing (PPC)", href: "/services/ppc" },
          { label: "Graphic & Logo Design", href: "/services/graphics" },
          { label: "Website Design & UI/UX", href: "/services/web-design" },
          { label: "WordPress Development", href: "/services/wordpress" },
          {
            label: "Custom Web Development (React / Next.js / PHP)",
            href: "/services/custom-development",
          },
          {
            label: "E-commerce (Shopify / WooCommerce)",
            href: "/services/ecommerce",
          },
          {
            label: "Mobile App Development (Android / iOS)",
            href: "/services/app-development",
          },
          { label: "IT Support & Cloud", href: "/services/it-cloud" },
        ],
      },

      {
        label: "Resources",
        children: [
          { label: "Blog", href: "/blog" },
          { label: "Events", href: "/events" },
          { label: "News", href: "/news" },
        ],
      },

      {
        label: "Our Companies",
        children: [
          { label: "BrainADZ Marketing", href: "/brainadzmarketing" },
          { label: "BrainADZ Live", href: "/brainadz-live" },
          { label: "BrainADZ Exhibits", href: "/brainadz-exhibits" },
        ],
      },

      { label: "Career", href: "/career" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  const linkBase =
    "text-white text-[15px] transition-all duration-200 ease-out hover:font-semibold hover:scale-105 hover:text-[#08A6B9]";

  const desktopTriggerBase =
    "flex items-center gap-1 cursor-pointer select-none transition-all duration-200 ease-out hover:font-semibold hover:scale-105 hover:text-[#08A6B9]";

  const dropdownPanel =
    "absolute left-0 top-[42px] min-w-[260px]  bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden";

  const dropdownItem =
    "flex items-center justify-between gap-3 px-4 py-3 text-[14px] text-black/80 transition-all duration-200 ease-out hover:text-[#08A6B9] hover:font-semibold hover:scale-[1.02]";

  const divider = "h-px w-full bg-black/10";

  const toggleDesktop = (key: string) =>
    setOpenDesktop((prev) => (prev === key ? null : key));

  const toggleMobileExpand = (key: string) =>
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? // ✅ scroll pe "transparent black" + shadow + blur (links visible)
              "bg-black/55 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
            : // ✅ top pe pure transparent
              "bg-transparent"
        }`}
      >
        <div ref={navRef} className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 py-2">

         <div className="flex items-center justify-between min-w-0">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
<Image
  src="/logo/whitelogo.png"
  alt="Logo"
  width={120}
  height={35}
  priority
  className="w-[105px] sm:w-[120px] h-auto"
  sizes="(max-width: 640px) 105px, 120px"
/>
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV.map((item) => {
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <li key={item.label}>
                      <Link className={linkBase} href={item.href || "#"}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const isOpen = openDesktop === item.label;

                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDesktop(item.label)}
                      className={`${desktopTriggerBase} ${
                        isOpen ? "text-[#08A6B9]" : "text-white"
                      }`}
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <HiChevronDown
                        className={`text-[#08A6B9] text-lg transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className={dropdownPanel} role="menu">
                        <div className="py-1">
                          {item.children!.map((child, idx) => (
                            <div key={child.label}>
                              <Link
                                href={child.href || "#"}
                                className={dropdownItem}
                                onClick={() => setOpenDesktop(null)}
                              >
                                <span className="leading-snug">
                                  {child.label}
                                </span>
                                <FiArrowUpRight className="text-black/50" />
                              </Link>
                              {idx !== item.children!.length - 1 && (
                                <div className={divider} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CALL BUTTON */}
            <Link
              href="tel:+919540468023"
              className="hidden md:flex items-center gap-2 border border-gray-500 px-6 py-2 text-white cursor-pointer
              transition-all duration-200 ease-out hover:border-[#08A6B9] hover:scale-105 hover:font-semibold"
            >
              <FaPhoneAlt />
              <span>+91 954-046-8023</span>
            </Link>

            {/* MOBILE MENU ICON */}
            <button
              type="button"
              className="md:hidden text-white text-3xl cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER + OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-[#0B0F14] shadow-2xl
          transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/whitelogo.png"
                alt="Logo"
                width={110}
                height={32}
              />
            </div>
            <button
              type="button"
              className="text-white text-3xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          {/* links */}
          <div className="px-5 py-4 overflow-y-auto h-[calc(100%-70px)]">
            <div className="space-y-2">
              {NAV.map((item) => {
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-white/90
                      transition-all duration-200 ease-out hover:bg-white/5 hover:text-white hover:font-semibold"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const expanded = !!mobileExpanded[item.label];

                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileExpand(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-left text-white/90
                      transition-all duration-200 ease-out hover:bg-white/5 hover:text-white hover:font-semibold"
                    >
                      <span>{item.label}</span>
                      <HiChevronDown
                        className={`text-[#08A6B9] text-xl transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        expanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2 pb-3">
                          {item.children!.map((c) => (
                            <Link
                              key={c.label}
                              href={c.href || "#"}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-[14px] text-white/80
                              transition-all duration-200 ease-out hover:bg-white/5 hover:text-white hover:font-semibold hover:translate-x-1"
                            >
                              <span className="leading-snug">{c.label}</span>
                              <FiArrowUpRight className="text-white/40" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* mobile call button */}
            <Link
              href="tel:+919540468023"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[#08A6B9]/60 px-4 py-3 text-white
              transition-all duration-200 ease-out hover:scale-[1.02] hover:font-semibold hover:border-[#08A6B9]"
            >
              <FaPhoneAlt />
              <span>+91 954-046-8023</span>
            </Link>
          </div>
        </div>
      </div>

      {/* spacer so content doesn't hide behind fixed navbar */}
      <div className="h-[70px]" />
    </>
  );
}
