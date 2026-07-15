/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  BadgeCheck,
  BadgeDollarSign,
  Brush,
  Building2,
  ChevronDown,
  Clapperboard,
  Code,
  CircleUserRound,
  FileSearch,
  FileText,
  Globe,
  Image as ImageIcon,
  LayoutTemplate,
  Link2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorUp,
  MousePointerClick,
  PenTool,
  Presentation,
  RotateCcw,
  Search,
  Settings2,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  type LucideIcon,
  UserPlus,
  Users,
  Video,
  Wrench,
  X,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const menuContent = {
  "Digital Marketing Services": [
    "SMO Services",
    "SMM Services",
    "Email Marketing",
    "SEM Services",
    "Content Marketing",
    "Online Reputation Management (ORM)",
    "Influencer Marketing",
    "WhatsApp Marketing",
    "Visual Content Creation",
  ],
  "Web Design & Development": [
    "Web Development Services",
    "E-Commerce Development",
    "Custom Web Application Development",
    "Mobile App Development",
    "WordPress Development",
    "Shopify Development",
    "Website Maintenance",
    "UI/UX Design",
  ],
  "Creative & Media Services": [
    "Graphic Design Services",
    "Creative Design Services",
    "Motion Graphics Services",
    "Branding Design Services",
    "Social Media Creative Design",
    "Presentation Design Services",
    "Ad Creative Design",
    "Infographic Design Services",
    "YouTube Thumbnail Design",
    "Short Video Editing",
    "Video Editing Services",
    "Corporate Video Editing",
    "Reel Editing Services",
  ],
  "SEO Services": [
    "Local SEO Services",
    "Ecommerce SEO Services",
    "Link Building SEO Services",
    "Technical SEO",
    "On Page SEO",
    "Off Page SEO",
    "SEO Audit Services",
    "Enterprise SEO",
    "International SEO",
  ],
  "Performance Marketing": [
    "Google Ads",
    "Meta Ads",
    "YouTube Ads",
    "Ecommerce PPC",
    "Remarketing Ads",
    "Lead Generation",
    "Landing Page Optimization",
    "PPC Audit Services",
    "Google Shopping Ads",
    "Display Ads",
    "Performance Marketing",
    "LinkedIn Ads",
  ],


} as const;

type Category = keyof typeof menuContent;

const menuItems = Object.keys(menuContent) as Category[];

const serviceIconRules: Array<[string[], LucideIcon]> = [
  [["local"], MapPin],
  [["ecommerce", "shopping", "shopify"], ShoppingCart],
  [["link"], Link2],
  [["maintenance"], Wrench],
  [["technical"], Settings2],
  [["audit"], FileSearch],
  [["enterprise"], Building2],
  [["international"], Globe],
  [["smo", "smm", "social"], Share2],
  [["influencer"], Users],
  [["email"], Mail],
  [["content", "copy"], FileText],
  [["orm", "reputation"], ShieldCheck],
  [["whatsapp"], MessageCircle],
  [["youtube"], Youtube],
  [["ppc"], MousePointerClick],
  [["google", "meta", "display", "ads"], BadgeDollarSign],
  [["remarketing"], RotateCcw],
  [["lead"], UserPlus],
  [["landing"], LayoutTemplate],
  [["performance"], Target],
  [["linkedin"], BadgeCheck],
  [["web", "wordpress", "application"], Code],
  [["mobile"], Smartphone],
  [["ui/ux", "ui"], MonitorUp],
  [["graphic", "creative", "branding", "ad creative"], PenTool],
  [["video", "reel", "short", "corporate"], Video],
  [["motion"], Clapperboard],
  [["thumbnail", "visual", "infographic"], ImageIcon],
  [["presentation"], Presentation],
  [["design"], Brush],
];

const getServiceIcon = (service: string) => {
  const normalized = service.toLowerCase();
  return (
    serviceIconRules.find(([keywords]) =>
      keywords.some((keyword) => normalized.includes(keyword))
    )?.[1] ?? Sparkles
  );
};

const serviceCategoryPaths: Record<Category, string> = {
  "Digital Marketing Services": "digital-marketing",
  "Web Design & Development": "web-design-development",
  "Creative & Media Services": "creative-media",
  "SEO Services": "seo-services",
  "Performance Marketing": "performance-marketing",
};

const getServiceHref = (category: Category, service: string) =>
  `/services/${serviceCategoryPaths[category]}/${service
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;

const getServiceBadge = (service: string) => {
  const badges: Record<string, string> = {
    "SMM Services": "TRENDING",
    "Performance Marketing": "MOST DEMANDED",
    "Google Ads": "HOT",
    "E-Commerce Development": "BESTSELLER",
    "SEO Audit Services": "NEW",
    "Visual Content Creation": "POPULAR",
  };

  return badges[service];
};

const normalLinks = [
  {
    label: "Consulting",
    href: "/consulting",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Support",
    href: "/contact",
  },
];

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<Category>("SEO Services");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <header className="dm-sans sticky top-0 z-50 border-b border-black/10 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <nav className="mx-auto flex h-21 max-w-450 items-center justify-between gap-6 px-5 md:px-8 lg:px-12">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo/mainlogo.png"
              alt="BrainADZ Marketing Logo"
              width={420}
              height={248}
              className="h-13.5 w-auto object-contain md:h-14.5"
            />
          </Link>

          <div className="hidden items-center justify-end gap-8 xl:flex">
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-[#111111] transition hover:text-[#e50914]">
                Services
                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${showMegaMenu ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`fixed left-0 top-21 w-full border-t border-black/10 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-200 ${showMegaMenu
                  ? "visible opacity-100"
                  : "invisible opacity-0"
                  }`}
              >
                <div className="mx-auto max-h-[calc(100vh-84px)] max-w-450 overflow-y-auto px-9 py-9">
                  <div className="grid grid-cols-5 gap-x-9 gap-y-10">
                    {menuItems.map((category) => (
                      <div key={category} className="min-w-0">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#e50914]">
                          {category}
                        </h3>
                        <div className="mt-5 h-px w-full bg-[#e50914]" />

                        <div className="mt-6 space-y-5">
                          {menuContent[category].map((item) => {
                            const badge = getServiceBadge(item);

                            return (
                              <Link
                                key={item}
                                href={getServiceHref(category, item)}
                                className="group flex min-h-6 items-center justify-between gap-3 text-[15px] font-bold leading-snug text-[#050505] transition hover:text-[#e50914]"
                              >
                                <span className="min-w-0">{item}</span>
                                {badge ? (
                                  <span className="shrink-0 whitespace-nowrap rounded-full bg-[#e50914] px-2 py-1 text-[9px] font-black uppercase tracking-[0.04em] text-white">
                                    {badge}
                                  </span>
                                ) : (
                                  <span className="shrink-0 text-[12px] font-bold text-[#e50914] transition group-hover:translate-x-0.5">
                                 <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center justify-between gap-6 border-t border-black/10 pt-5">
                    <p className="text-[14px] font-normal text-black/75">
                      Not sure where to start?{" "}
                      <span className="font-bold text-black">
                        Talk to a strategist
                      </span>{" "}
                      - we&apos;ll map the right mix for your goals.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#e50914] px-7 text-[13px] font-bold text-white transition hover:bg-[#b70710]"
                    >
                      Get a Free Audit <ArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {normalLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#111111] transition hover:text-[#e50914]"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-[#111111] transition hover:text-[#e50914]">
                Resources
                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${showResources ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full z-50 pt-4 transition-all duration-200 ${showResources
                  ? "visible opacity-100"
                  : "invisible opacity-0"
                  }`}
              >
                <div className="min-w-64 border border-black/10 border-t-2 border-t-[#e50914] bg-white/95 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur">
                  <Link
                    href="/blog"
                    className="group flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-[#050505] transition hover:bg-[#fff1f2] hover:text-[#e50914]"
                  >
                    <span>Blog</span>
                    <span className="text-[12px] font-bold text-[#e50914] transition group-hover:translate-x-0.5">
                      <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
                    </span>
                  </Link>

                  <Link
                    href="/case-studies"
                    className="group flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-[#050505] transition hover:bg-[#fff1f2] hover:text-[#e50914]"
                  >
                    <span>Case Studies</span>
                    <span className="text-[12px] font-bold text-[#e50914] transition group-hover:translate-x-0.5">
                      <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {normalLinks.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#111111] transition hover:text-[#e50914]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-black/70 transition hover:text-[#e50914]"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Language"
            className="text-black/70 transition hover:text-[#e50914]"
          >
            <Globe size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="text-black/70 transition hover:text-[#e50914]"
          >
            <CircleUserRound size={23} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-4 flex h-10 w-10 items-center justify-center text-[#111111] transition hover:text-[#e50914] xl:hidden"
        >
          {mobileOpen ? (
            <X size={28} strokeWidth={1.6} />
          ) : (
            <Menu size={30} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      <div
        className={`fixed left-0 top-21 z-40 h-[calc(100dvh-84px)] w-full overflow-y-auto bg-white transition-all duration-300 xl:hidden ${mobileOpen
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-full opacity-0"
          }`}
      >
        <div className="flex flex-col border-t border-black/10">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <button className="flex items-center gap-3 text-[15px] text-[#111111]">
              <Search size={19} strokeWidth={1.5} />
              Search
            </button>

            <div className="flex items-center gap-5">
              <Globe size={20} strokeWidth={1.5} className="text-black/70" />
              <CircleUserRound
                size={23}
                strokeWidth={1.5}
                className="text-black/70"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-black/10 px-5 py-5 text-left text-[18px] font-normal text-[#111111]"
          >
            Services
            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${mobileServicesOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="border-b border-black/10 bg-[#f7f8fb]">
              {menuItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveCategory(item)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left text-[15px] font-normal ${activeCategory === item
                    ? "bg-[#e50914] text-white"
                    : "text-black/70"
                    }`}
                >
                  <span>{item}</span>
                  <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
                </button>
              ))}

              <div className="bg-white px-6 py-5">
                <h3 className="text-[24px] font-semibold text-[#111111]">
                  {activeCategory}
                </h3>

                <div className="mt-4 space-y-5">
                  {menuContent[activeCategory].map((item) => {
                    const ServiceIcon = getServiceIcon(item);

                    return (
                      <Link
                        key={item}
                        href={getServiceHref(activeCategory, item)}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] border border-[#e50914]/15 bg-[#fff1f2] text-[#e50914]">
                          <ServiceIcon className="h-4 w-4" />
                        </span>
                        <p className="text-[16px] font-normal text-[#111111]">
                          {item}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="mt-6 flex items-center justify-between bg-[#111111] px-5 py-4 text-[15px] text-white transition hover:bg-[#e50914]"
                >
                  Explore all services
                  <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          )}

          {normalLinks.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-black/10 px-5 py-5 text-[18px] font-normal text-[#111111]"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMobileResourcesOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-black/10 px-5 py-5 text-left text-[18px] font-normal text-[#111111]"
          >
            Resources
            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${mobileResourcesOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileResourcesOpen && (
            <div className="border-b border-black/10 border-t-2 border-t-[#e50914] bg-white">
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-8 py-4 text-[16px] font-semibold text-[#050505] transition hover:bg-[#fff1f2] hover:text-[#e50914]"
              >
                <span>Blog</span>
                <span className="text-[12px] font-bold text-[#e50914]">
                  -&gt;
                </span>
              </Link>

              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-8 py-4 text-[16px] font-semibold text-[#050505] transition hover:bg-[#fff1f2] hover:text-[#e50914]"
              >
                <span>Case Studies</span>
                <span className="text-[12px] font-bold text-[#e50914]">
                  -&gt;
                </span>
              </Link>
            </div>
          )}

          {normalLinks.slice(3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-black/10 px-5 py-5 text-[18px] font-normal text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
