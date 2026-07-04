import FooterCta from "@/section/ctaSection";
import Image from "next/image";
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
    label: "Corporate Office",
    address:
      "A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative Industrial Estate, New Delhi 110044",
  },
  {
    icon: "/icons/india.png",
    iconAlt: "India flag",
    city: "Mumbai",
    label: "Regional Office",
    address:
      "911, 9th Floor, JMMIMA Complex, Off Link Road, Mindspace, Malad West, Mumbai 400064",
  },
  {
    icon: "/icons/united-arab-emirates.png",
    iconAlt: "United Arab Emirates flag",
    city: "Dubai",
    label: "International Office",
    address: "Dubai, United Arab Emirates",
  },
  {
    icon: "/icons/world.png",
    iconAlt: "Thailand flag",
    city: "Thailand",
    label: "International Office",
    address: "Bangkok, Thailand",
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
    name: "BrainADZ Exhibits",
    logo: "/logo/exhibits-optimized.webp",
    href: "#",
  },
  {
    name: "BrainADZ Live",
    logo: "/logo/live-optimized.webp",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <>
      <FooterCta />

      <footer className="overflow-hidden bg-[#020202] bg-[linear-gradient(180deg,#020202_0%,#071a3f_56%,#1467f5_100%)] text-white">
        <div className="mx-auto max-w-[1900px] px-5 pb-6 pt-5 sm:px-8 lg:px-10">
          <section
            aria-label="Our locations"
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {LOCATIONS.map((location) => (
              <article
                key={location.city}
                className="min-h-[205px] rounded-[20px] border border-white/15 bg-white/[0.07] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-1.5 shadow-[0_10px_26px_rgba(0,0,0,0.22)]">
                    <Image
                      src={location.icon}
                      alt={location.iconAlt}
                      width={42}
                      height={42}
                      sizes="42px"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[18px] font-semibold">
                      {location.city}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
                      {location.label}
                    </p>
                  </div>
                </div>
                <p className="mt-5 max-w-[330px] text-[13px] font-medium leading-6 text-white/72">
                  {location.address}
                </p>
              </article>
            ))}
          </section>

          <section className="py-14 lg:py-16">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.45fr_repeat(5,minmax(0,1fr))]">
              <div>
                <Link href="/" className="inline-flex">
                  <Image
                    src="/logo/whitelogo-optimized.webp"
                    alt="BrainADZ Marketing"
                    width={190}
                    height={78}
                    sizes="165px"
                    className="h-auto w-[165px] object-contain"
                  />
                </Link>

                <p className="mt-5 max-w-[300px] text-[13px] font-medium leading-6 text-white/68">
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
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/5 text-[15px] text-white transition hover:border-white hover:bg-white hover:text-[#0d45a8]"
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
                          className="text-[12px] font-medium leading-5 text-white/65 transition hover:text-white"
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
                <div className="mt-6 space-y-4 text-[12px] font-medium leading-5 text-white/68">
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
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-[12px] font-semibold text-[#081737] transition hover:bg-[#dce9ff]"
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
                  className="group flex min-h-[108px] flex-col items-start justify-between gap-5 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 sm:flex-row sm:items-center"
                >
                  <Image
                    src={unit.logo}
                    alt={unit.name}
                    width={180}
                    height={70}
                    sizes="180px"
                    className="max-h-14 w-auto max-w-[180px] object-contain object-left"
                  />
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

          <div className="flex flex-col gap-4 border-t border-white/20 py-6 text-[11px] font-medium text-white/70 md:flex-row md:items-center md:justify-between">
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
