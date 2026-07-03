// import ContactCtaSection from "@/section/Ctas";
import TeamShowcaseSection from "@/section/teamShowcase";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#1467f5";

export default function TeamPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-black/80">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto max-w-[1500px] px-4 pb-12 pt-24 sm:px-6 md:pb-16 md:pt-24">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Meet the People Behind{" "}
              <span style={{ color: ACCENT }}>BrainADZ</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              A focused team that blends strategy, creativity, and execution to
              build outcomes that actually move the needle.
            </p>

            <div
              className="mb-4 mt-4 h-0.5 w-24"
              style={{ backgroundColor: ACCENT }}
            />
          </div>

          <nav className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/80">Team</span>
          </nav>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-3 inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
                Our Team
              </p>

              <h2 className="text-2xl font-extrabold leading-tight text-black md:text-4xl">
                Built on ownership.{" "}
                <span style={{ color: ACCENT }}>Powered by consistency.</span>
              </h2>

              <div
                className="mt-3 h-0.5 w-20"
                style={{ backgroundColor: ACCENT }}
              />

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 md:text-base">
                At BrainADZ, we work like partners, not vendors. Every project
                gets dedicated attention, fast communication, and a system-driven
                workflow that keeps quality consistent across delivery.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-black/70">
                {[
                  "Strategy-first planning with execution clarity",
                  "Clean design and performance thinking together",
                  "One team, accountable delivery",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden bg-white">
                <div className="relative aspect-2/1 w-full">
                  <Image
                    src="/teams/teams.png"
                    alt="BrainADZ Team"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamShowcaseSection ctaHref="/contact" ctaLabel="Work With Us" />
      {/* <ContactCtaSection /> */}
    </main>
  );
}
