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

const getServiceHref = (service: string) =>
  `/services/${service
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;

const normalLinks = [
  {
    label: "Infrastructure",
    href: "/infrastructure",
  },
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
    href: "/support",
  },
  {
    label: "Think",
    href: "/think",
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]">
      <nav className="mx-auto flex h-21 max-w-450 items-center justify-between px-5 md:px-8 lg:px-12">
        <div className="flex items-center">
          <Link href="/" className="mr-10 flex items-center xl:mr-14">
            <img
              src="/logo/whitelogo-optimized.webp"
              alt="BrainADZ Marketing Logo"
              width={420}
              height={248}
              className="h-13.5 w-auto object-contain md:h-14.5"
            />
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-normal text-white transition hover:text-[#4f7cff]">
                Services
                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${showMegaMenu ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`fixed left-0 top-21 w-full border-t border-white/10 bg-[#050505] shadow-2xl transition-all duration-200 ${showMegaMenu
                  ? "visible opacity-100"
                  : "invisible opacity-0"
                  }`}
              >
                <div className="mx-auto flex min-h-130 max-w-450 px-0">
                  <div className="w-82.5 border-r border-white/10 bg-[#101010] p-8">
                    <div className="space-y-2">
                      {menuItems.map((item) => (
                        <button
                          key={item}
                          onMouseEnter={() => setActiveCategory(item)}
                          className={`flex w-full items-center justify-between rounded-[3px] px-4 py-4 text-left text-[15px] font-normal transition-all ${activeCategory === item
                            ? "bg-[#1b1b1b] text-white"
                            : "text-white/75 hover:bg-[#181818] hover:text-white"
                            }`}
                        >
                          <span className="truncate">{item}</span>
                          <span className="ml-3 text-lg text-[#4f7cff]">
                            -&gt;
                          </span>
                        </button>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className="mt-8 flex w-full items-center justify-between bg-[#3c5b9b] px-5 py-4 text-[15px] font-normal text-white transition hover:bg-[#2f4a82]"
                    >
                      Explore all services
                      <span>-&gt;</span>
                    </Link>
                  </div>

                  <div className="flex-1 bg-[#050505] p-10">
                    <h2 className="mb-12 text-[36px] font-light leading-none tracking-[-1.5px] text-[#7fa0ff]">
                      {activeCategory} <span>-&gt;</span>
                    </h2>

                    <div className="grid grid-cols-3 gap-x-14 gap-y-12">
                      {menuContent[activeCategory]?.map((item) => {
                        const ServiceIcon = getServiceIcon(item);

                        return (
                          <Link
                            href={getServiceHref(item)}
                            key={item}
                            className="group flex cursor-pointer items-center gap-4"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[3px] border border-white/10 bg-white/4 text-[#7fa0ff] transition group-hover:border-[#7fa0ff]/50 group-hover:bg-[#7fa0ff]/10">
                              <ServiceIcon className="h-5 w-5" />
                            </span>
                            <h3 className="mb-0 text-[18px] font-normal text-white transition group-hover:text-[#7fa0ff]">
                              {item}
                            </h3>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {normalLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-white transition hover:text-[#4f7cff]"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-normal text-white transition hover:text-[#4f7cff]">
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
                <div className="min-w-57.5 rounded-[3px] border border-white/10 bg-[#101010] py-2 shadow-lg">
                  <Link
                    href="/blog"
                    className="block px-5 py-3 text-[15px] font-normal text-white/80 transition hover:bg-[#181818] hover:text-[#7fa0ff]"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/case-studies"
                    className="block px-5 py-3 text-[15px] font-normal text-white/80 transition hover:bg-[#181818] hover:text-[#7fa0ff]"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            {normalLinks.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-white transition hover:text-[#4f7cff]"
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
            className="text-white/75 transition hover:text-[#4f7cff]"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Language"
            className="text-white/75 transition hover:text-[#4f7cff]"
          >
            <Globe size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="text-white/75 transition hover:text-[#4f7cff]"
          >
            <CircleUserRound size={23} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-4 flex h-10 w-10 items-center justify-center text-white transition hover:text-[#4f7cff] xl:hidden"
        >
          {mobileOpen ? (
            <X size={28} strokeWidth={1.6} />
          ) : (
            <Menu size={30} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      <div
        className={`fixed left-0 top-21 z-40 h-[calc(100dvh-84px)] w-full overflow-y-auto bg-[#050505] transition-all duration-300 xl:hidden ${mobileOpen
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-full opacity-0"
          }`}
      >
        <div className="flex flex-col border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <button className="flex items-center gap-3 text-[15px] text-white">
              <Search size={19} strokeWidth={1.5} />
              Search
            </button>

            <div className="flex items-center gap-5">
              <Globe size={20} strokeWidth={1.5} className="text-white/70" />
              <CircleUserRound
                size={23}
                strokeWidth={1.5}
                className="text-white/70"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-white/10 px-5 py-5 text-left text-[18px] font-normal text-white"
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
            <div className="border-b border-white/10 bg-[#101010]">
              {menuItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveCategory(item)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left text-[15px] font-normal ${activeCategory === item
                    ? "bg-[#1b1b1b] text-[#7fa0ff]"
                    : "text-white/75"
                    }`}
                >
                  <span>{item}</span>
                  <span>-&gt;</span>
                </button>
              ))}

              <div className="bg-[#050505] px-6 py-5">
                <h3 className="text-[24px] font-light text-[#7fa0ff]">
                  {activeCategory}
                </h3>

                <div className="mt-4 space-y-5">
                  {menuContent[activeCategory].map((item) => {
                    const ServiceIcon = getServiceIcon(item);

                    return (
                      <Link
                        key={item}
                        href={getServiceHref(item)}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] border border-white/10 bg-white/4 text-[#7fa0ff]">
                          <ServiceIcon className="h-4 w-4" />
                        </span>
                        <p className="text-[16px] font-normal text-white">
                          {item}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="mt-6 flex items-center justify-between bg-[#3c5b9b] px-5 py-4 text-[15px] text-white"
                >
                  Explore all services
                  <span>-&gt;</span>
                </Link>
              </div>
            </div>
          )}

          {normalLinks.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-white/10 px-5 py-5 text-[18px] font-normal text-white"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMobileResourcesOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-white/10 px-5 py-5 text-left text-[18px] font-normal text-white"
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
            <div className="border-b border-white/10 bg-[#101010]">
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block px-8 py-4 text-[16px] font-normal text-white/80"
              >
                Blog
              </Link>

              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="block px-8 py-4 text-[16px] font-normal text-white/80"
              >
                Case Studies
              </Link>
            </div>
          )}

          {normalLinks.slice(3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-white/10 px-5 py-5 text-[18px] font-normal text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
