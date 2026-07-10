"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, InputHTMLAttributes } from "react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const SERVICES = [
  "Digital Marketing",
  "Performance Marketing",
  "SEO Services",
  "Social Media Marketing",
  "Branding and Creative",
  "Website Development",
  "Automation and CRM",
  "Exhibitions and Live Events",
];

const CONTACT_FAQS = [
  {
    question: "How quickly will your team respond?",
    answer:
      "Our team usually responds within one business day. Urgent enquiries can also be shared directly by phone or WhatsApp.",
  },
  {
    question: "What should I include in my project brief?",
    answer:
      "Share your business goal, target audience, current challenge, preferred services, expected timeline, and any useful references you already have.",
  },
  {
    question: "Can I contact you for one specific service?",
    answer:
      "Yes. You can work with BrainADZ for one focused service or combine strategy, creative, marketing, web, and automation in one engagement.",
  },
  {
    question: "Do you work with businesses outside Delhi?",
    answer:
      "Yes. We work with clients across India and international markets through remote collaboration and our connected office network.",
  },
  {
    question: "Can we schedule a meeting before starting?",
    answer:
      "Absolutely. Once we understand your requirement, we can arrange a call or an office meeting with the relevant strategy and delivery team.",
  },
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) ?? "").trim();
    const name = getValue("name");
    const service = getValue("service");
    const subject = `New ${service} enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${getValue("email")}`,
      `Phone: ${getValue("phone")}`,
      `Company: ${getValue("company") || "Not provided"}`,
      `Service: ${service}`,
      "",
      "Project details:",
      getValue("message"),
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:enquiry@brainadz.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-black text-white">
      {/* CONTACT HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <Image
          src="/gallery/8.jpeg"
          alt="BrainADZ team at the Delhi office"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.4)_58%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.3)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link href="/" className="text-[#1467f5] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/45">/</span>
            <span>Get in Touch</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] text-white sm:text-[42px] lg:text-[52px]">
            Get in Touch
          </h1>

          <div className="mt-auto max-w-[680px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[22px] font-semibold leading-[1.38] text-white sm:text-[26px] lg:text-[28px]">
              Start a conversation that moves your brand and business forward
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#1467f5] px-5 text-[15px] font-medium text-white transition hover:bg-[#0f56d6] sm:min-h-14 sm:px-6"
            >
              Start your enquiry
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section
        id="contact-form"
        className="scroll-mt-24 border-b border-white/10 bg-black"
      >
        <div className="mx-auto grid max-w-[1800px] px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="py-14 sm:py-16 lg:pr-14 lg:py-20 xl:pr-20">
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase text-white/58">
              <span className="h-2 w-2 rounded-full bg-[#1467f5]" />
              New business enquiries
            </p>

            <h2 className="mt-7 max-w-[700px] text-[42px] font-medium leading-[1.06] sm:text-[54px]">
              Let&apos;s create your next growth story.
            </h2>

            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-white/65 sm:text-[17px]">
              Tell us where your business is today and where you want it to go.
              We will bring the right mix of strategy, creativity, technology,
              and performance to the table.
            </p>

            <div className="mt-12 border-y border-white/10 sm:mt-14">
              <ContactLink
                href="mailto:enquiry@brainadz.com"
                icon={Mail}
                label="Email us"
                value="enquiry@brainadz.com"
              />
              <ContactLink
                href="tel:+919540468023"
                icon={Phone}
                label="Call our team"
                value="+91 95404 68023"
              />
              <ContactLink
                href="https://wa.me/919540468023"
                icon={MessageCircle}
                label="Chat on WhatsApp"
                value="Start a conversation"
                external
              />
            </div>

            <div className="relative mt-10 aspect-video min-h-60 overflow-hidden rounded-md sm:min-h-[300px]">
              <Image
                src="/gallery/8.jpeg"
                alt="BrainADZ team at the Delhi office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </div>

          <div className="border-t border-white/10 py-14 sm:py-16 lg:border-l lg:border-t-0 lg:py-20 lg:pl-14 xl:pl-20">
              <div className="rounded-md border border-white/12 bg-[#101010] p-5 sm:p-8 lg:p-10">
                <p className="text-[13px] font-semibold uppercase text-[#6995ff]">
                  Start a project
                </p>
                <h2 className="mt-4 text-[32px] font-medium leading-tight sm:text-[40px]">
                  Tell us what you are building
                </h2>
                <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-white/58">
                  Share a few details and we will connect you with the right
                  BrainADZ team.
                </p>

                <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      label="Name"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                    <FormField
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      autoComplete="email"
                      required
                    />
                    <FormField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                      required
                    />
                    <FormField
                      label="Company"
                      name="company"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-[13px] font-medium text-white/72"
                    >
                      Service you need
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-sm border border-white/14 bg-black px-4 pr-12 text-[15px] text-white outline-none transition focus:border-[#1467f5]"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/48" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[13px] font-medium text-white/72"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your goals, challenges, and timeline"
                      className="w-full resize-none rounded-sm border border-white/14 bg-black px-4 py-4 text-[15px] leading-6 text-white outline-none transition placeholder:text-white/28 focus:border-[#1467f5]"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-[13px] leading-6 text-white/52">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#1467f5]"
                    />
                    <span>
                      I agree to be contacted about this enquiry and accept the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-white underline decoration-white/35 underline-offset-4"
                      >
                        privacy policy
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-[#1467f5] px-7 text-[15px] font-semibold text-white transition hover:bg-[#0f56d6] sm:w-auto"
                  >
                    Send enquiry
                    <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
                  </button>

                  {submitted && (
                    <p
                      role="status"
                      className="flex items-center gap-2 text-[14px] text-[#7fa0ff]"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      Your email app is ready with the enquiry details.
                    </p>
                  )}
                </form>
              </div>
          </div>
        </div>
      </section>

      {/* OFFICE MAP SECTION */}
      <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[13px] font-semibold uppercase text-[#6995ff]">
                Our offices
              </p>
              <h2 className="mt-4 text-[42px] font-medium leading-none sm:text-[54px]">
                Visit our Delhi office
              </h2>
            </div>
            <p className="max-w-[760px] text-[16px] leading-7 text-white/58 lg:justify-self-end">
              Meet our strategy, creative, performance, and technology teams at
              the BrainADZ corporate office in New Delhi.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-md border border-white/12 bg-black lg:grid-cols-[0.55fr_1.45fr]">
            <div className="flex flex-col justify-between border-b border-white/12 p-6 sm:p-8 lg:min-h-[500px] lg:border-b-0 lg:border-r lg:p-10">
              <div>
                <MapPin className="h-8 w-8 text-[#1467f5]" strokeWidth={1.6} />
                <p className="mt-8 text-[12px] font-semibold uppercase text-white/42">
                  Corporate Office
                </p>
                <h3 className="mt-3 text-[30px] font-medium">BrainADZ Delhi</h3>
                <p className="mt-5 max-w-[390px] text-[15px] leading-7 text-white/62">
                  A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative
                  Industrial Estate, New Delhi 110044
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=A-24%2F8%20Rathi%20Tower%20Mohan%20Cooperative%20Industrial%20Estate%20New%20Delhi%20110044"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-sm border border-white/20 px-5 text-[13px] font-semibold text-white transition hover:border-[#1467f5] hover:bg-[#1467f5]"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="h-[420px] bg-white/5 sm:h-[500px]">
              <iframe
                title="BrainADZ Delhi office location"
                src="https://www.google.com/maps?q=A-24%2F8%20Rathi%20Tower%20Mohan%20Cooperative%20Industrial%20Estate%20New%20Delhi%20110044&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FAQ SECTION */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[13px] font-semibold uppercase text-[#6995ff]">
                Common questions
              </p>
              <h2 className="mt-4 max-w-[520px] text-[42px] font-medium leading-[1.08] sm:text-[54px]">
                Before we start a conversation
              </h2>
              <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-white/55">
                Quick answers about enquiries, meetings, services, and working
                with BrainADZ.
              </p>
            </div>

            <div className="border-t border-white/15">
              {CONTACT_FAQS.map((faq, index) => (
                <div key={faq.question} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq((current) => (current === index ? null : index))
                    }
                    aria-expanded={openFaq === index}
                    aria-controls={`contact-faq-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <span className="text-[18px] font-medium leading-7 sm:text-[20px]">
                      {faq.question}
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-[#6995ff]">
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={`contact-faq-${index}`}
                    className={`grid transition-all duration-300 ${
                      openFaq === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[820px] pb-7 pr-12 text-[15px] leading-7 text-white/58 sm:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-white/12 text-[#6995ff] transition group-hover:border-[#1467f5] group-hover:bg-[#1467f5] group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <span className="block text-[12px] font-medium text-white/42">{label}</span>
        <span className="mt-1 block wrap-break-word text-[15px] font-medium text-white">
          {value}
        </span>
      </span>
      <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-white/28 transition group-hover:text-[#6995ff]" />
    </a>
  );
}

function FormField({
  label,
  name,
  type = "text",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[13px] font-medium text-white/72"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        {...props}
        className="h-14 w-full rounded-sm border border-white/14 bg-black px-4 text-[15px] text-white outline-none transition placeholder:text-white/28 focus:border-[#1467f5]"
      />
    </div>
  );
}
