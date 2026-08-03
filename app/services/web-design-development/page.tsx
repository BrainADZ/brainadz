/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Code2,
  FileText,
  Gauge,
  LineChart,
  MousePointerClick,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Development Services | BrainADZ Marketing",
  description:
    "BrainADZ web design and development services covering UI/UX design, custom websites, WordPress, Shopify, ecommerce, web applications, mobile apps and website maintenance.",
  alternates: {
    canonical: "/services/web-design-development",
  },
  openGraph: {
    title: "Web Design & Development Services | BrainADZ Marketing",
    description:
      "Plan, design, build and maintain responsive websites, ecommerce stores, custom web applications and mobile experiences with BrainADZ Marketing.",
    type: "website",
    url: "/services/web-design-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | BrainADZ Marketing",
    description:
      "UI/UX design, website development, WordPress, Shopify, ecommerce, custom applications, mobile apps and maintenance services.",
  },
};

const WEB_SERVICES = [
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Create clear user journeys, wireframes and responsive interfaces that make websites easier to understand and use.",
    icon: Sparkles,
    result: "Better Experience",
  },
  {
    title: "Web Development Services",
    slug: "web-development-services",
    description:
      "Build responsive, fast and scalable websites with clean front-end development and reliable backend functionality.",
    icon: Code2,
    result: "Reliable Build",
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    description:
      "Develop manageable WordPress websites with custom pages, reusable sections, plugins and admin-friendly content controls.",
    icon: FileText,
    result: "Easy Management",
  },
  {
    title: "Shopify Development",
    slug: "shopify-development",
    description:
      "Create Shopify stores with branded storefronts, product collections, payment setup and conversion-focused shopping journeys.",
    icon: ShoppingCart,
    result: "Store Growth",
  },
  {
    title: "E-Commerce Development",
    slug: "e-commerce-development",
    description:
      "Build complete ecommerce platforms with products, inventory, cart, checkout, payments, orders and customer management.",
    icon: ShoppingCart,
    result: "Online Selling",
  },
  {
    title: "Custom Web Application Development",
    slug: "custom-web-application-development",
    description:
      "Develop custom portals, dashboards and workflow applications around your business processes, users and data.",
    icon: Workflow,
    result: "Custom Systems",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Design and develop mobile applications with user-focused screens, APIs, integrations and scalable backend systems.",
    icon: Smartphone,
    result: "Mobile Reach",
  },
  {
    title: "Website Maintenance Services",
    slug: "website-maintenance-services",
    description:
      "Keep websites secure, updated and stable through monitoring, backups, fixes, content changes and technical support.",
    icon: Settings2,
    result: "Ongoing Support",
  },
];

const DELIVERY_STAGES = [
  {
    title: "Discovery",
    text: "Understand the business, users, website goals, content, functionality, competitors and technical requirements.",
    icon: Target,
  },
  {
    title: "Design",
    text: "Plan information architecture, user journeys, wireframes and responsive visual interfaces before development begins.",
    icon: MousePointerClick,
  },
  {
    title: "Development",
    text: "Build pages, components, CMS controls, ecommerce functions, APIs and integrations using the agreed architecture.",
    icon: Code2,
  },
  {
    title: "Launch & Support",
    text: "Test the complete experience, deploy safely, monitor the live website and continue improvements after launch.",
    icon: Gauge,
  },
];

const QUALITY_ROWS = [
  { label: "Responsive Experience", value: "Validated", width: "92%" },
  { label: "Performance Readiness", value: "Optimised", width: "84%" },
  { label: "Security & Stability", value: "Reviewed", width: "88%" },
  { label: "Conversion Journey", value: "Connected", width: "80%" },
];

const WEBSITE_CHECKLIST = [
  "Business goals, target users and website conversion actions",
  "Page hierarchy, navigation and information architecture",
  "Brand consistency, UI quality and responsive behaviour",
  "Website speed, technical SEO and accessibility foundations",
  "Forms, calls, WhatsApp, payments and third-party integrations",
  "CMS access, analytics, security, backups and maintenance plan",
];

const STAGE_COLORS = ["#E1122B", "#E1122B", "#E1122B", "#E1122B"];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & Development Services",
  serviceType: "Web Design and Development",
  description:
    "Web design and development services covering UI/UX design, websites, WordPress, Shopify, ecommerce, custom web applications, mobile apps and website maintenance.",
  url: "https://www.brainadz.marketing/services/web-design-development",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & Development Capabilities",
    itemListElement: WEB_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function WebDesignDevelopmentPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HeroSection />
      <WebServicesSection />
      <DeliveryJourneySection />
      <QualitySection />
    </main>
  );
}

function HeroSection() {
  return (
    <>
      {/* WEB DESIGN & DEVELOPMENT HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/banner/44.webp"
          alt="Web design and development team planning responsive digital experiences"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link
              href="/"
              className="text-[#E1122B] transition hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Web Design & Development</span>
          </nav>

          <h1 className="mt-7 max-w-[900px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
            Web Design & Development
          </h1>

          <div className="mt-auto max-w-[760px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
              Digital experiences designed around your users and developed around
              your business requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#E1122B] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:min-h-14 sm:px-6"
            >
              Discuss your website project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function QualityRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="rounded-sm border border-black/10 bg-white p-4">
      <div className="flex items-center justify-between gap-4 text-[13px]">
        <span className="text-black/64">{label}</span>
        <span className="font-semibold text-[#E1122B]">{value}</span>
      </div>
      <div className="mt-3 h-2 bg-black/10">
        <div className="h-full bg-[#E1122B]" style={{ width }} />
      </div>
    </div>
  );
}

function WebServicesSection() {
  return (
    <section
      id="service-directory"
      className="relative border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#E1122B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          {/* LEFT STICKY CONTENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#E1122B]">
              Web service stack
            </p>

            <h2 className="mt-5 max-w-[720px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Website and application services built for experience, performance
              and long-term growth.
            </h2>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              Explore our design, development and maintenance capabilities for
              corporate websites, ecommerce stores, custom platforms and mobile
              experiences.
            </p>

            <div className="relative mt-9 h-[300px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] sm:h-[360px] lg:h-[430px]">
              <img
                src="/web-design-development/web-design-development-services.jpg"
                alt="Web design and development services by BrainADZ Marketing"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="max-w-[460px] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
                  One team for strategy, UI/UX, development, integrations and
                  ongoing support.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-white"
                >
                  Discuss your requirements
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SERVICE GRID */}
          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {WEB_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/web-design-development/${service.slug}`}
                  id={service.slug}
                  key={service.title}
                  className="group relative min-h-[235px] overflow-hidden rounded-3xl border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] sm:p-6"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#E1122B]/10 blur-2xl transition group-hover:bg-[#E1122B]/18" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#E1122B]/25 bg-[#E1122B]/10 text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>

                      <span className="rounded-full border border-black/10 bg-[#fbfbfb] px-3 py-1 text-[11px] font-semibold text-black/48">
                        {service.result}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[20px] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[22px]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-[13px] font-semibold text-[#E1122B] transition group-hover:text-black">
                      Open service page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryJourneySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-220px] h-[520px] w-[520px] rounded-full bg-[#E1122B]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              Website delivery journey
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[52px]">
              Every stage connects strategy, experience, technology and launch
              readiness.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
            Strong websites are not created by designing pages in isolation. Our
            delivery journey keeps business goals, user experience, development,
            testing and post-launch support connected from the beginning.
          </p>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/10 bg-white/2.5 p-5 sm:mt-16 sm:p-7 lg:p-9">
          <div className="relative">
            {/* MOBILE VERTICAL LINE */}
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[linear-gradient(180deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:hidden" />

            {/* DESKTOP MAP LINE */}
            <div className="absolute left-8 right-8 top-[34px] hidden h-px bg-[linear-gradient(90deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:block" />

            <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
              {DELIVERY_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const color = STAGE_COLORS[index % STAGE_COLORS.length];

                return (
                  <div
                    key={stage.title}
                    className="relative flex gap-5 lg:block"
                  >
                    <div
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.35)] lg:mx-auto"
                      style={{
                        backgroundColor: color,
                        color: "#ffffff",
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <div
                      className={`relative mt-0 w-full rounded-[28px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#141414] lg:mt-8 ${
                        index % 2 === 1 ? "lg:translate-y-10" : ""
                      }`}
                    >
                      <div
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15 blur-2xl"
                        style={{ backgroundColor: color }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-5">
                          <span
                            className="rounded-full px-3 py-1 text-[12px] font-semibold"
                            style={{
                              backgroundColor: `${color}24`,
                              color,
                            }}
                          >
                            Step {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px flex-1 bg-white/10" />
                        </div>

                        <h3 className="mt-7 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[26px]">
                          {stage.title}
                        </h3>

                        <p className="mt-4 text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 hidden items-center justify-center gap-3 text-[13px] font-medium text-white/42 lg:flex">
              <span>Discovery</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Design</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Development</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Launch & Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualitySection() {
  return (
    <>
      {/* WEBSITE QUALITY & LAUNCH SECTION */}
      <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <div className="rounded-md border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-7">
            <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-6">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
                  Website quality snapshot
                </p>

                <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[38px]">
                  Quality checks that support a confident launch.
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#E1122B] text-white">
                <LineChart className="h-7 w-7" strokeWidth={1.7} />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <QualityBox label="Page journeys" value="Mapped" />
              <QualityBox label="Responsive states" value="Tested" />
              <QualityBox label="Forms & actions" value="Validated" />
              <QualityBox label="Launch priorities" value="Clear" />
            </div>

            <div className="mt-7 space-y-3">
              {QUALITY_ROWS.map((row) => (
                <QualityRow key={row.label} {...row} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
              Website audit checklist
            </p>

            <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
              We review the complete website system, not only the visual design.
            </h2>

            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
              Before design or development starts, we identify what the website
              needs to communicate, how users should move through it and which
              technical foundations are required for a stable launch.
            </p>

            <div className="mt-9 grid gap-3">
              {WEBSITE_CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-sm border border-black/10 bg-white p-4"
                >
                  <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                  <p className="text-[15px] font-medium leading-6 text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function QualityBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-black/10 bg-white p-5">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-black/38">
        {label}
      </p>
      <p className="mt-3 text-[25px] font-semibold tracking-[-0.04em] text-black">
        {value}
      </p>
    </div>
  );
}