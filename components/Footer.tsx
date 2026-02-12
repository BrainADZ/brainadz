/* eslint-disable @next/next/no-img-element */
import FooterCta from "@/section/ctaSection";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <FooterCta/>
    <footer className="bg-white text-black">
      <div className="max-w-[1500px] mx-auto" >
        {/* TOP FOOTER (Your provided design) */}
        <section className="relative overflow-hidden border-t border-black/10">
          {/* subtle background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_0%,rgba(255,214,0,0.12),transparent_60%)]" />
          <div className="mx-auto max-w-425 px-2 py-10 lg:px-4 lg:py-14">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold tracking-tight text-[#00AAB7] md:text-4xl">
                LET&apos;S SPARK YOUR BRAND&apos;S MOMENTUM
              </h3>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-black/80 md:text-base">
                Whether you&apos;re a bold startup or an established brand looking to evolve your marketing,
                let&apos;s create ideas, campaigns and experiences that don&apos;t just work — they move forward.
              </p>
            </div>

            {/* Locations */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Delhi */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="grid h-30 w-30 place-items-center rounded-xl">
                    <img
                      src="/icons/delhi.png"
                      alt="Delhi Office"
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-lg font-bold">Delhi</p>
                    <p className="mt-1 text-sm text-black/70">
                      Head Office: Apex Square 3, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075, Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Mumbai */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="grid h-30 w-30 place-items-center rounded-xl ">
                    <img
                      src="/icons/mumbai.png"
                      alt="Delhi Office"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Mumbai</p>
                    <p className="mt-1 text-sm text-black/70">
                      911, 9th Floor, JMMIMA Complex, Off Link Road, Mindspace, Malad West, Mumbai 400064, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Dubai */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="grid h-30 w-30 place-items-center rounded-xl">
                    <img
                      src="/icons/dubai.png"
                      alt="Delhi Office"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Dubai</p>
                    <p className="mt-1 text-sm text-black/70">
                      Head Office: Apex Square 3, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075, Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* LOWER FOOTER (Added) */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-425 px-2 py-12 lg:px-4">
            <div className="grid gap-10 md:grid-cols-12">
              {/* Brand */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  {/* Replace with your logo */}
<div className="flex items-center">
  <img
    src="/logo/black.png"
    alt="Your Brand Name Logo"
    className="h-10 w-auto object-contain"
  />
</div>

                  <div>
                    <p className="text-base font-bold tracking-wide">BrainADZ Marketing</p>
                    <p className="text-xs text-black/60">Ideas. Campaigns. Experiences.</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Strategy-led creative and performance solutions to help brands grow with clarity, consistency, and measurable impact.
                </p>

                {/* Social */}
                <div className="mt-5 flex gap-3">
                  {[
                    { name: "Instagram", href: "#" },
                    { name: "LinkedIn", href: "#" },
                    { name: "YouTube", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-black/85 transition hover:bg-white/10"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <p className="text-sm font-bold text-black">Quick Links</p>
                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  <li><Link className="hover:text-black" href="/about">About</Link></li>
                  <li><Link className="hover:text-black" href="/work">Work</Link></li>
                  <li><Link className="hover:text-black" href="/services">Services</Link></li>
                  <li><Link className="hover:text-black" href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="md:col-span-3">
                <p className="text-sm font-bold text-black">Services</p>
                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  <li><span className="hover:text-black">Brand Strategy</span></li>
                  <li><span className="hover:text-black">Social Media Marketing</span></li>
                  <li><span className="hover:text-black">Performance Ads</span></li>
                  <li><span className="hover:text-black">Design & Content</span></li>
                  <li><span className="hover:text-black">Video Production</span></li>
                </ul>
              </div>

              {/* Newsletter / Contact */}
              <div className="md:col-span-3">
                <p className="text-sm font-bold text-black">Start a Conversation</p>
                <p className="mt-3 text-sm text-black/70">
                  Share your goals. We&apos;ll respond with the next steps and timelines.
                </p>

                <div className="mt-4 space-y-3">
                  <a className="block text-sm font-semibold text-black/85 hover:text-black" href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                  <a className="block text-sm font-semibold text-black/85 hover:text-black" href="mailto:hello@yourbrand.com">
                    hello@yourbrand.com
                  </a>

                  {/* Simple input (UI-only, wire it to your form later) */}
                  <div className="mt-3 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none"
                    />
                    <button
                      type="button"
                      className="bg-[#00AAB7] px-5 text-sm font-bold text-black transition hover:brightness-95"
                    >
                      Send
                    </button>
                  </div>

                  <p className="text-xs text-black/45">
                    By submitting, you agree to be contacted regarding your enquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-black/55">
                © {new Date().getFullYear()} Your Brand Name. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-black/55">
                <Link className="hover:text-black" href="/privacy-policy">Privacy Policy</Link>
                <Link className="hover:text-black" href="/terms">Terms</Link>
                <Link className="hover:text-black" href="/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
    </>
  );
}
