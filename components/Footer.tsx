/* eslint-disable @next/next/no-img-element */
import FooterCta from "@/section/ctaSection";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const LOCATIONS = [
  {
    icon: "/icons/india.png",
    iconAlt: "India flag",
    city: "Delhi",
    label: "Head Office",
    address:
      "Apex Square III, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075",
  },
  {
    icon: "/icons/india.png",
    iconAlt: "India flag",
    city: "Mumbai",
    label: "Mumbai Office",
    address:
      "911/9th Floor, IJMIMA Complex, Off Link Road, Mindspace, Malad West, Mumbai 400064",
  },
  {
    icon: "/icons/united-arab-emirates.png",
    iconAlt: "United Arab Emirates flag",
    city: "Dubai",
    label: "Dubai Office",
    address:
      "Wood Leads Technical Services LLC (HamdanAbid), Warehouse No -8, Ras Al Khor Indl Area 1, Dubai UAE.",
  },
  {
    icon: "/icons/world.png",
    iconAlt: "Thailand flag",
    city: "Thailand",
    label: "Thailand Office",
    address:
      "96/26, Manthana 2, Soi Si Dan 22, Khambon Bang Kaew Subdistrict, Bang Phli District, Samut Prakan Province, Bangkok 10540, Thailand",
  },
];

const FOOTER_LINKS = [
  {
    title: "Our Company",
    links: [
      { label: "Company Overview", href: "/company-overview" },
      { label: "Core Team", href: "/teams" },
      { label: "Careers", href: "/career" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Web Development", href: "/services/web-design-development" },
      { label: "Branding & Creative", href: "/services/graphic-design" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Website Projects", href: "/portfolio#portfolio" },
      { label: "Social Media", href: "/portfolio#portfolio" },
      { label: "Graphic Design", href: "/portfolio#portfolio" },
      { label: "Videos & Exhibits", href: "/portfolio#portfolio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Client Testimonials", href: "/#testimonials" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Growth Insights", href: "/#insights" },
    ],
  },
];

const BUSINESS_UNITS = [
  {
    name: "BrainADZ Marketing",
    logo: "/logo/mainlogo-optimized.webp",
    href: "/",
  },
  {
    name: "BrainADZ Live",
    logo: "/logo/live-optimized.webp",
    href: "#",
  },
  {
    name: "BrainADZ Exhibits",
    logo: "/logo/Exhibits-Logo.jpg",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/brainadzofficial/", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brainadz/", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/BrainADZofficial", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@brainadz", icon: FaYoutube },
];

export default function Footer() {
  return (
    <>
      <FooterCta />

      <footer className="relative isolate overflow-hidden bg-[#111013] text-white">
  {/* Full-footer background image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/000000.webp')" }}
  />

  {/* Black overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-black/40"
  />

        <div className="mx-auto max-w-[1800px] px-5 pb-6 pt-5 sm:px-8 lg:px-12">
          <section
            aria-label="Our locations"
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {LOCATIONS.map((location) => (
              <article
                key={location.city}
                className="min-h-[205px] rounded-[14px] border border-white/20 bg-white/8 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                    <img
                      src={location.icon}
                      alt={location.iconAlt}
                      width={42}
                      height={42}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[18px] font-semibold">
                      {location.city}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/58">
                      {location.label}
                    </p>
                  </div>
                </div>
                <p className="mt-5 max-w-[330px] text-[13px] font-medium leading-6 text-white/76">
                  {location.address}
                </p>
              </article>
            ))}
          </section>

          <section className="py-14 lg:py-16">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.45fr_repeat(5,minmax(0,1fr))]">
              <div>
                <Link href="/" className="inline-flex">
                  <img
                    src="/logo/whitelogo-optimized.webp"
                    alt="BrainADZ Marketing"
                    width={190}
                    height={78}
                    className="h-auto w-[165px] object-contain"
                  />
                </Link>

                <p className="mt-5 max-w-[300px] text-[13px] font-medium leading-6 text-white/72">
                  BrainADZ is a strategy-led creative and performance agency
                  helping brands grow through marketing, technology, design,
                  exhibits, and live experiences.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/8 text-[15px] text-white transition hover:border-[#E1122B] hover:bg-[#E1122B] hover:text-white"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>

              {FOOTER_LINKS.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[15px] font-semibold text-white">
                    {column.title}
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[12px] font-medium leading-5 text-white/68 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="text-[15px] font-semibold text-white">Contact</h3>
                <div className="mt-6 space-y-4 text-[12px] font-medium leading-5 text-white/72">
                  <a
                    href="mailto:enquiry@brainadz.com"
                    className="flex items-start gap-2.5 transition hover:text-white"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    enquiry@brainadz.com
                  </a>
                  <a
                    href="tel:+919540468023"
                    className="flex items-start gap-2.5 transition hover:text-white"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                    +91 95404 68023
                  </a>
                  <p className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    Delhi / Mumbai / Dubai / Thailand
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-[12px] font-semibold text-[#273D7D] transition hover:bg-[#E1122B] hover:text-white"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t border-white/20 py-10">
            <h3 className="text-[14px] font-semibold text-white">
              Business Units Under BrainADZ Group
            </h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {BUSINESS_UNITS.map((unit) => (
                <Link
                  key={unit.name}
                  href={unit.href}
                  className="group flex min-h-[108px] flex-col items-start justify-between gap-5 rounded-[14px] border border-white/20 bg-white/8 px-6 py-5 transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/12 sm:flex-row sm:items-center"
                >
                  <span className="inline-flex rounded-[10px] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                    <img
                      src={unit.logo}
                      alt={unit.name}
                      width={180}
                      height={70}
                      className="max-h-12 w-auto max-w-40 object-contain object-left"
                    />
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-[11px] font-semibold text-white/75 transition group-hover:text-white">
                    <span className="border-b border-white/70 pb-0.5">
                      Know more about {unit.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-4 border-t border-white/20 py-6 text-[11px] font-medium text-white/72 md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} BrainADZ Group. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link className="transition hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="transition hover:text-white" href="/terms">
                Terms
              </Link>
              <Link className="transition hover:text-white" href="/refund-policy">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
